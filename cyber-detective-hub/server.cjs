const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Connection string configuration supporting direct URL or individual parameters
const connectionString = process.env.DATABASE_URL || 
  `postgresql://${process.env.DB_USER || 'postgres'}:${process.env.DB_PASSWORD || ''}@${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || '5432'}/${process.env.DB_NAME || 'postgres'}`;

// Enable SSL if connecting to Supabase cloud databases (any non-localhost database)
const db = new Pool({
  connectionString,
  ssl: connectionString.includes('localhost') || connectionString.includes('127.0.0.1') ? false : { rejectUnauthorized: false }
});

let dbInitialized = false;
let dbInitError = null;

// Connect and initialize database tables
async function initializeDB() {
  if (dbInitialized) return;
  try {
    console.log("Connecting to PostgreSQL/Supabase database...");
    const res = await db.query('SELECT NOW()');
    console.log("Database connection established successfully at:", res.rows[0].now);
    await createTables();
    console.log("Database initialization completed successfully.");
    dbInitialized = true;
  } catch (error) {
    console.error('Database connection / initialization failed:', error.message);
    dbInitError = error.message;
    if (!process.env.VERCEL) {
      process.exit(1);
    }
  }
}

async function createTables() {
  // 1. User Profile Table
  await db.query(`
    CREATE TABLE IF NOT EXISTS user_profile (
      id VARCHAR(50) PRIMARY KEY,
      username VARCHAR(50) UNIQUE,
      password VARCHAR(100),
      role VARCHAR(20) DEFAULT 'student',
      name VARCHAR(100) NOT NULL,
      points INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Migrations for existing user_profile table in development
  try {
    await db.query("ALTER TABLE user_profile ADD COLUMN IF NOT EXISTS username VARCHAR(50) UNIQUE");
  } catch (e) { console.log("username migration status:", e.message); }
  try {
    await db.query("ALTER TABLE user_profile ADD COLUMN IF NOT EXISTS password VARCHAR(100)");
  } catch (e) { console.log("password migration status:", e.message); }
  try {
    await db.query("ALTER TABLE user_profile ADD COLUMN IF NOT EXISTS role VARCHAR(20) DEFAULT 'student'");
  } catch (e) { console.log("role migration status:", e.message); }

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
      id SERIAL PRIMARY KEY,
      entry_id VARCHAR(50),
      version INT NOT NULL,
      prompt TEXT,
      code TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (entry_id) REFERENCES journal_entries(id) ON DELETE CASCADE
    )
  `);

  // Seed default teacher "somboon/somboon123" if not exists
  const teacherRes = await db.query("SELECT * FROM user_profile WHERE username = 'somboon'");
  if (teacherRes.rows.length === 0) {
    console.log('Seeding default teacher profile...');
    await db.query(`
      INSERT INTO user_profile (id, username, password, role, name, points) 
      VALUES ('teacher_somboon', 'somboon', 'somboon123', 'teacher', 'Ajarn Somboon', 1000)
    `);
  }

  // Seed default student if empty
  const studentsCount = await db.query("SELECT * FROM user_profile WHERE role = 'student' LIMIT 1");
  if (studentsCount.rows.length === 0) {
    console.log('Seeding default user profile...');
    await db.query(`
      INSERT INTO user_profile (id, username, password, role, name, points) 
      VALUES ('current_user', 'student_demo', 'student123', 'student', 'You (Detective-in-Training)', 450)
    `);
    
    // Seed initial completed quests
    await db.query(`
      INSERT INTO completed_quests (user_id, quest_id)
      VALUES ('current_user', 'l1-s1'), ('current_user', 'l1-s2')
    `).catch(() => {});

    // Seed default journal entry
    await db.query(`
      INSERT INTO journal_entries (id, user_id, title, date, version, active_version)
      VALUES ('j1', 'current_user', 'L1 S1: Automated Cauldron Cauldron', '2026-06-24 14:32', 2, 2)
    `).catch(() => {});

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
    `).catch(() => {});
    console.log('Seeding completed.');
  }
}

// Authentication Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }
  
  req.userId = token;
  next();
}

// Admin Middleware
async function requireTeacher(req, res, next) {
  try {
    const userRes = await db.query("SELECT role FROM user_profile WHERE id = $1", [req.userId]);
    if (userRes.rows.length === 0 || userRes.rows[0].role !== 'teacher') {
      return res.status(403).json({ error: 'Forbidden: Requires teacher profile' });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// API Routes

// Authentication Login
app.post('/api/auth/login', async (req, res) => {
  if (dbInitError) {
    return res.status(500).json({ error: `Database failed to initialize: ${dbInitError}` });
  }
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  const cleanUsername = username.trim().toLowerCase();
  const cleanPassword = password.trim();
  try {
    const userRes = await db.query("SELECT * FROM user_profile WHERE LOWER(username) = $1", [cleanUsername]);
    if (userRes.rows.length === 0) {
      const allUsersRes = await db.query("SELECT username FROM user_profile LIMIT 10");
      const usernames = allUsersRes.rows.map(r => r.username);
      return res.status(401).json({ 
        error: `User not found: '${cleanUsername}'. Registered usernames in DB: ${JSON.stringify(usernames)}` 
      });
    }
    const user = userRes.rows[0];
    if (user.password !== cleanPassword) {
      return res.status(401).json({ 
        error: `Password mismatch for '${cleanUsername}'. Expected: '${user.password}', Got: '${cleanPassword}'` 
      });
    }
    
    res.json({
      success: true,
      token: user.id,
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        role: user.role,
        points: user.points
      }
    });
  } catch (error) {
    res.status(500).json({ error: `DB Error: ${error.message}` });
  }
});

// 1. Fetch User Data (Points & Solved Quests)
app.get('/api/user', authenticateToken, async (req, res) => {
  try {
    const usersRes = await db.query("SELECT * FROM user_profile WHERE id = $1", [req.userId]);
    if (usersRes.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const questsRes = await db.query("SELECT quest_id FROM completed_quests WHERE user_id = $1", [req.userId]);
    const solvedQuestsMap = {};
    questsRes.rows.forEach(q => {
      solvedQuestsMap[q.quest_id] = true;
    });

    res.json({
      id: usersRes.rows[0].id,
      username: usersRes.rows[0].username,
      name: usersRes.rows[0].name,
      role: usersRes.rows[0].role,
      points: usersRes.rows[0].points,
      solvedCases: solvedQuestsMap
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Update User Points
app.post('/api/user/points', authenticateToken, async (req, res) => {
  const { points } = req.body;
  if (points === undefined) {
    return res.status(400).json({ error: 'Missing points value' });
  }
  
  try {
    await db.query("UPDATE user_profile SET points = $1 WHERE id = $2", [points, req.userId]);
    res.json({ success: true, points });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Mark Quest as Solved
app.post('/api/user/quests', authenticateToken, async (req, res) => {
  const { questId, xpReward } = req.body;
  if (!questId) {
    return res.status(400).json({ error: 'Missing questId' });
  }

  try {
    await db.query("INSERT INTO completed_quests (user_id, quest_id) VALUES ($1, $2) ON CONFLICT (user_id, quest_id) DO NOTHING", [req.userId, questId]);
    
    // Add XP reward
    if (xpReward) {
      await db.query("UPDATE user_profile SET points = points + $1 WHERE id = $2", [xpReward, req.userId]);
    }
    
    const userRes = await db.query("SELECT points FROM user_profile WHERE id = $1", [req.userId]);
    res.json({ success: true, activePoints: userRes.rows[0].points });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Fetch All Journal Entries
app.get('/api/journal', authenticateToken, async (req, res) => {
  try {
    const result = await db.query(`
      SELECT je.id as entry_id, je.title, je.date, je.version as latest_version, je.active_version, 
             jv.version as version_num, jv.prompt, jv.code
      FROM journal_entries je
      LEFT JOIN journal_versions jv ON je.id = jv.entry_id
      WHERE je.user_id = $1
      ORDER BY je.date DESC, jv.version ASC
    `, [req.userId]);

    const journalMap = {};
    result.rows.forEach(row => {
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
app.post('/api/journal', authenticateToken, async (req, res) => {
  const { id, title, date, prompt, code } = req.body;
  if (!id || !title || !prompt) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  try {
    const formattedDate = date || new Date().toISOString().replace('T', ' ').substring(0, 16);
    
    // Insert entry metadata
    await db.query(`
      INSERT INTO journal_entries (id, user_id, title, date, version, active_version)
      VALUES ($1, $2, $3, $4, 1, 1)
    `, [id, req.userId, title, formattedDate]);

    // Insert version 1 content
    await db.query(`
      INSERT INTO journal_versions (entry_id, version, prompt, code)
      VALUES ($1, 1, $2, $3)
    `, [id, prompt, code || '']);

    res.json({ success: true, id, version: 1 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 6. Add a New Version to an Existing Journal Entry
app.post('/api/journal/version', authenticateToken, async (req, res) => {
  const { entryId, prompt, code } = req.body;
  if (!entryId || !prompt) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    // Get current version count
    const entriesRes = await db.query('SELECT version FROM journal_entries WHERE id = $1', [entryId]);
    if (entriesRes.rows.length === 0) {
      return res.status(404).json({ error: 'Journal entry not found' });
    }

    const nextVer = entriesRes.rows[0].version + 1;

    // Insert new version contents
    await db.query(`
      INSERT INTO journal_versions (entry_id, version, prompt, code)
      VALUES ($1, $2, $3, $4)
    `, [entryId, nextVer, prompt, code || '']);

    // Update parent metadata version counters
    await db.query(`
      UPDATE journal_entries 
      SET version = $1, active_version = $2
      WHERE id = $3
    `, [nextVer, nextVer, entryId]);

    res.json({ success: true, nextVersion: nextVer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Route: Get all students
app.get('/api/admin/students', authenticateToken, requireTeacher, async (req, res) => {
  try {
    const studentsRes = await db.query("SELECT id, username, name, role, points, created_at FROM user_profile WHERE role = 'student' ORDER BY created_at DESC");
    res.json(studentsRes.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Route: Add new student
app.post('/api/admin/students', authenticateToken, requireTeacher, async (req, res) => {
  const { username, password, name } = req.body;
  if (!username || !password || !name) {
    return res.status(400).json({ error: 'Username, password and name are required' });
  }
  try {
    const checkUser = await db.query("SELECT id FROM user_profile WHERE username = $1", [username]);
    if (checkUser.rows.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    
    const studentId = 'std_' + Date.now();
    await db.query(`
      INSERT INTO user_profile (id, username, password, role, name, points) 
      VALUES ($1, $2, $3, 'student', $4, 0)
    `, [studentId, username, password, name]);

    // Seed default journal entry for new student
    await db.query(`
      INSERT INTO journal_entries (id, user_id, title, date, version, active_version)
      VALUES ($1, $2, $3, $4, 1, 1)
    `, [studentId + '_j1', studentId, 'L1 S1: Automated Cauldron Cauldron', new Date().toISOString().replace('T', ' ').substring(0, 16)]);

    await db.query(`
      INSERT INTO journal_versions (entry_id, version, prompt, code)
      VALUES ($1, 1, $2, $3)
    `, [studentId + '_j1', 'Write a function to make a sandwich. Take bread and butter. Spread the butter on the bread and serve.', '// Version 1: Literal sandwich maker\nfunction makeSandwich(bread, butter) {\n  console.log("Spreading " + butter + " on " + bread);\n  return "Sandwich Ready";\n}']);

    res.json({ success: true, student: { id: studentId, username, name, role: 'student', points: 0 } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export Express app for serverless function deployments
module.exports = app;

// Start server if not running inside a serverless environment (like Vercel)
if (!process.env.VERCEL) {
  app.listen(PORT, async () => {
    console.log(`Express Server running on port ${PORT}...`);
    await initializeDB();
  });
} else {
  // If running serverless on Vercel, initialize database connection pool immediately
  initializeDB();
}
