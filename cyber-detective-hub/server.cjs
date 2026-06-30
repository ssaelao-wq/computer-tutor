const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

let db;

// Connect to MySQL and initialize database & tables
async function initializeDB() {
  const connectionConfig = {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: parseInt(process.env.DB_PORT || '3306')
  };

  try {
    console.log(`Connecting to MySQL on ${connectionConfig.host}:${connectionConfig.port}...`);
    const tempConn = await mysql.createConnection(connectionConfig);
    
    const dbName = process.env.DB_NAME || 'vite_db';
    console.log(`Ensuring database "${dbName}" exists...`);
    await tempConn.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
    await tempConn.end();

    // Reconnect with the selected database
    db = await mysql.createPool({
      ...connectionConfig,
      database: dbName,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    console.log('Database pool established. Initializing tables...');
    await createTables();
    console.log('Database initialization completed successfully.');

  } catch (error) {
    console.error('Database connection / initialization failed:', error.message);
    process.exit(1);
  }
}

async function createTables() {
  // 1. User Profile Table
  await db.query(`
    CREATE TABLE IF NOT EXISTS user_profile (
      id VARCHAR(50) PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      points INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 2. Completed Quests Table
  await db.query(`
    CREATE TABLE IF NOT EXISTS completed_quests (
      user_id VARCHAR(50),
      quest_id VARCHAR(50),
      completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (user_id, quest_id),
      FOREIGN KEY (user_id) REFERENCES user_profile(id) ON DELETE CASCADE
    )
  `);

  // 3. Journal Entries Table
  await db.query(`
    CREATE TABLE IF NOT EXISTS journal_entries (
      id VARCHAR(50) PRIMARY KEY,
      user_id VARCHAR(50),
      title VARCHAR(255) NOT NULL,
      date VARCHAR(20) NOT NULL,
      version INT DEFAULT 1,
      active_version INT DEFAULT 1,
      FOREIGN KEY (user_id) REFERENCES user_profile(id) ON DELETE CASCADE
    )
  `);

  // 4. Journal Versions Table
  await db.query(`
    CREATE TABLE IF NOT EXISTS journal_versions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      entry_id VARCHAR(50),
      version INT NOT NULL,
      prompt TEXT,
      code TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (entry_id) REFERENCES journal_entries(id) ON DELETE CASCADE
    )
  `);

  // Seed default user if empty
  const [users] = await db.query('SELECT * FROM user_profile LIMIT 1');
  if (users.length === 0) {
    console.log('Seeding default user profile...');
    await db.query(`
      INSERT INTO user_profile (id, name, points) 
      VALUES ('current_user', 'You (Detective-in-Training)', 450)
    `);
    
    // Seed initial completed quests
    await db.query(`
      INSERT INTO completed_quests (user_id, quest_id)
      VALUES ('current_user', 'l1-s1'), ('current_user', 'l1-s2')
    `);

    // Seed default journal entry
    await db.query(`
      INSERT INTO journal_entries (id, user_id, title, date, version, active_version)
      VALUES ('j1', 'current_user', 'L1 S1: Automated Cauldron Cauldron', '2026-06-24 14:32', 2, 2)
    `);

    // Seed default journal versions
    await db.query(`
      INSERT INTO journal_versions (entry_id, version, prompt, code)
      VALUES 
      ('j1', 1, 
      'Write a function to make a sandwich. Take bread and butter. Spread the butter on the bread and serve.', 
      '// Version 1: Literal sandwich maker\\nfunction makeSandwich(bread, butter) {\\n  // Ambiguity: Assumes bread is sliced and butter tub is open!\\n  console.log("Spreading " + butter + " on " + bread);\\n  return "Sandwich Ready";\\n}'
      ),
      ('j1', 2, 
      'Write a function to make a sandwich. Inputs: bread (sealed package), butter (sealed tub), knife. Steps: (1) Open bread package, (2) take 2 slices, (3) open butter tub, (4) use knife to scoop butter, (5) spread butter on bread slices, (6) put slices together. Handle empty inputs.', 
      '// Version 2: Preciser instructions handling sealed packages\\nfunction makeSandwich(bread, butter, knife) {\\n  if (!bread || !butter || !knife) {\\n    throw new Error("Missing ingredients or tools!");\\n  }\\n  \\n  console.log("Opening sealed bread package...");\\n  const slice1 = bread.getSlice();\\n  const slice2 = bread.getSlice();\\n  \\n  console.log("Opening sealed butter tub...");\\n  const openedButter = butter.open();\\n  \\n  console.log("Scooping butter with knife...");\\n  const butterScoop = knife.scoop(openedButter, "10g");\\n  \\n  console.log("Spreading butter on slice 1...");\\n  slice1.apply(butterScoop);\\n  \\n  console.log("Putting slices together...");\\n  return [slice1, slice2].combine();\\n}'
      )
    `);
    console.log('Seeding completed.');
  }
}

// API Routes

// 1. Fetch User Data (Points & Solved Quests)
app.get('/api/user', async (req, res) => {
  try {
    const [users] = await db.query('SELECT * FROM user_profile WHERE id = "current_user"');
    if (users.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const [quests] = await db.query('SELECT quest_id FROM completed_quests WHERE user_id = "current_user"');
    const solvedQuestsMap = {};
    quests.forEach(q => {
      solvedQuestsMap[q.quest_id] = true;
    });

    res.json({
      name: users[0].name,
      points: users[0].points,
      solvedCases: solvedQuestsMap
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Update User Points
app.post('/api/user/points', async (req, res) => {
  const { points } = req.body;
  if (points === undefined) {
    return res.status(400).json({ error: 'Missing points value' });
  }
  
  try {
    await db.query('UPDATE user_profile SET points = ? WHERE id = "current_user"', [points]);
    res.json({ success: true, points });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Mark Quest as Solved
app.post('/api/user/quests', async (req, res) => {
  const { questId, xpReward } = req.body;
  if (!questId) {
    return res.status(400).json({ error: 'Missing questId' });
  }

  try {
    // Insert quest record
    await db.query('INSERT IGNORE INTO completed_quests (user_id, quest_id) VALUES ("current_user", ?)', [questId]);
    
    // Add XP reward
    if (xpReward) {
      await db.query('UPDATE user_profile SET points = points + ? WHERE id = "current_user"', [xpReward]);
    }
    
    const [user] = await db.query('SELECT points FROM user_profile WHERE id = "current_user"');
    res.json({ success: true, activePoints: user[0].points });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Fetch All Journal Entries
app.get('/api/journal', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT je.id as entry_id, je.title, je.date, je.version as latest_version, je.active_version, 
             jv.version as version_num, jv.prompt, jv.code
      FROM journal_entries je
      LEFT JOIN journal_versions jv ON je.id = jv.entry_id
      WHERE je.user_id = 'current_user'
      ORDER BY je.date DESC, jv.version ASC
    `);

    const journalMap = {};
    rows.forEach(row => {
      if (!journalMap[row.entry_id]) {
        journalMap[row.entry_id] = {
          id: row.entry_id,
          title: row.title,
          date: row.date,
          version: row.latest_version,
          activeVersion: row.active_version,
          history: []
        };
      }
      if (row.version_num !== null) {
        journalMap[row.entry_id].history.push({
          version: row.version_num,
          prompt: row.prompt,
          code: row.code
        });
      }
    });

    res.json(Object.values(journalMap));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Create a New Journal Entry
app.post('/api/journal', async (req, res) => {
  const { id, title, date, prompt, code } = req.body;
  if (!id || !title || !prompt) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  try {
    const formattedDate = date || new Date().toISOString().replace('T', ' ').substring(0, 16);
    
    // Insert entry metadata
    await db.query(`
      INSERT INTO journal_entries (id, user_id, title, date, version, active_version)
      VALUES (?, 'current_user', ?, ?, 1, 1)
    `, [id, title, formattedDate]);

    // Insert version 1 content
    await db.query(`
      INSERT INTO journal_versions (entry_id, version, prompt, code)
      VALUES (?, 1, ?, ?)
    `, [id, prompt, code || '']);

    res.json({ success: true, id, version: 1 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 6. Add a New Version to an Existing Journal Entry
app.post('/api/journal/version', async (req, res) => {
  const { entryId, prompt, code } = req.body;
  if (!entryId || !prompt) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    // Get current version count
    const [entries] = await db.query('SELECT version FROM journal_entries WHERE id = ?', [entryId]);
    if (entries.length === 0) {
      return res.status(404).json({ error: 'Journal entry not found' });
    }

    const nextVer = entries[0].version + 1;

    // Insert new version contents
    await db.query(`
      INSERT INTO journal_versions (entry_id, version, prompt, code)
      VALUES (?, ?, ?, ?)
    `, [entryId, nextVer, prompt, code || '']);

    // Update parent metadata version counters
    await db.query(`
      UPDATE journal_entries 
      SET version = ?, active_version = ?
      WHERE id = ?
    `, [nextVer, nextVer, entryId]);

    res.json({ success: true, nextVersion: nextVer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start express server
app.listen(PORT, async () => {
  console.log(`Express Server running on port ${PORT}...`);
  await initializeDB();
});
