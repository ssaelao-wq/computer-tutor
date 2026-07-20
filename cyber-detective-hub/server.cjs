const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database Lazy Initialization Middleware
app.use(async (req, res, next) => {
  try {
    await initializeDB();
    next();
  } catch (error) {
    res.status(500).json({ error: `Database failed to initialize: ${error.message}` });
  }
});

const PORT = process.env.PORT || 3001;

// Connection string configuration supporting direct URL or individual parameters
let connectionString = process.env.DATABASE_URL;
if (connectionString) {
  connectionString = connectionString.trim().replace(/^['"]|['"]$/g, '');
} else {
  connectionString = `postgresql://${process.env.DB_USER || 'postgres'}:${process.env.DB_PASSWORD || ''}@${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || '5432'}/${process.env.DB_NAME || 'postgres'}`;
}

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
      student_level VARCHAR(10) DEFAULT 'L1',
      is_active BOOLEAN DEFAULT true,
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
  try {
    await db.query("ALTER TABLE user_profile ADD COLUMN IF NOT EXISTS student_level VARCHAR(10) DEFAULT 'L1'");
  } catch (e) { console.log("student_level migration status:", e.message); }
  try {
    await db.query("ALTER TABLE user_profile ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true");
  } catch (e) { console.log("is_active migration status:", e.message); }

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

  // 5. Sandbox Exercise Progress Table (one row per passed exercise, per user)
  await db.query(`
    CREATE TABLE IF NOT EXISTS exercise_progress (
      user_id VARCHAR(50),
      session_id VARCHAR(20),
      exercise_num INT,
      completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (user_id, session_id, exercise_num),
      FOREIGN KEY (user_id) REFERENCES user_profile(id) ON DELETE CASCADE
    )
  `);

  // 6. Parent-Student Links Table (many-to-many: one parent account can link to multiple students)
  await db.query(`
    CREATE TABLE IF NOT EXISTS parent_links (
      parent_id VARCHAR(50),
      student_id VARCHAR(50),
      PRIMARY KEY (parent_id, student_id),
      FOREIGN KEY (parent_id) REFERENCES user_profile(id) ON DELETE CASCADE,
      FOREIGN KEY (student_id) REFERENCES user_profile(id) ON DELETE CASCADE
    )
  `);

  // 7. Session Reports Table (attendance date + teacher/parent feedback, one row per student per curriculum session)
  // session_date is stored as plain 'YYYY-MM-DD' text (not a DATE column) so it round-trips
  // exactly as entered, with no JS Date/timezone conversion on the way out.
  await db.query(`
    CREATE TABLE IF NOT EXISTS session_reports (
      student_id VARCHAR(50),
      session_id VARCHAR(50),
      session_date VARCHAR(10),
      teacher_feedback TEXT,
      parent_feedback TEXT,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (student_id, session_id),
      FOREIGN KEY (student_id) REFERENCES user_profile(id) ON DELETE CASCADE
    )
  `);
  try {
    await db.query("ALTER TABLE session_reports ALTER COLUMN session_date TYPE VARCHAR(10) USING session_date::text");
  } catch (e) { console.log("session_date type migration status:", e.message); }

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
      VALUES ('j1', 'current_user', 'L1 S1: Project Kickoff & Roadmap', '2026-06-24 14:32', 2, 2)
    `).catch(() => {});

    // Seed default journal versions
    await db.query(`
      INSERT INTO journal_versions (entry_id, version, prompt, code)
      VALUES
      ('j1', 1,
      'Sketch the Racing Car Game you will build across Sessions 2-12: its parts, its look, and the session-by-session build plan.',
      'Racing Car Game — Project Roadmap (Draft v1)\n\nGame Concept:\n- [Describe the finished game in 1-2 sentences]\n\nMajor Parts:\n- [List the visual/gameplay parts: track, car, obstacles, scoreboard, game-over screen]\n\nSession Build Plan:\n- [Which session builds what? e.g. Session 2 = HTML, Session 3 = CSS, Sessions 4-12 = JavaScript]'
      ),
      ('j1', 2,
      'Sketch the Racing Car Game you will build across Sessions 2-12: its parts, its look, and the session-by-session build plan — before writing a single line of code.',
      'Racing Car Game — Project Roadmap (Detailed Plan v2)\n\nGame Concept:\n- [Describe what the player sees and does]\n\nMajor Parts (System Parts & Information):\n- [List every part needed: track, car, obstacles, scoreboard, game-over overlay, and what data/state the game must remember]\n\nSession Build Plan (Session-by-Session):\n1. Session 2 (HTML): [ ]\n2. Session 3 (CSS): [ ]\n3. Sessions 4-12 (JavaScript): [ ]\n\n5-Step AI-Era Loop (used starting next session):\n1. Plan & Design 2. Write the AI Prompt 3. Review & Explain 4. Test & Break It 5. Iterate & Improve'
      )
    `).catch(() => {});
    console.log('Seeding completed.');
  }

  // Always run migrations to fix/update old titles or prompts in existing user databases
  await db.query(`
    UPDATE journal_entries
    SET title = 'L1 S1: Project Kickoff & Roadmap'
    WHERE id = 'j1' OR id LIKE '%_j1' OR title LIKE '%Cauldron%' OR title LIKE '%Household IPO Blueprint%'
  `).catch(err => console.warn(err));

  await db.query(`
    UPDATE journal_versions
    SET prompt = 'Sketch the Racing Car Game you will build across Sessions 2-12: its parts, its look, and the session-by-session build plan.'
    WHERE (entry_id = 'j1' OR entry_id LIKE '%_j1') AND version = 1
  `).catch(err => console.warn(err));

  await db.query(`
    UPDATE journal_versions
    SET prompt = 'Sketch the Racing Car Game you will build across Sessions 2-12: its parts, its look, and the session-by-session build plan — before writing a single line of code.'
    WHERE (entry_id = 'j1' OR entry_id LIKE '%_j1') AND version = 2
  `).catch(err => console.warn(err));

  // Migration to update the actual code value in existing databases if it still contains the
  // retired Household IPO Blueprint pre-fill (Session 1's homework moved to a project-roadmap
  // brief — see PROJECT_TASKS['l1-s1'] in projectTasksData.js).
  await db.query(`
    UPDATE journal_versions
    SET code = 'Racing Car Game — Project Roadmap (Draft v1)\n\nGame Concept:\n- [Describe the finished game in 1-2 sentences]\n\nMajor Parts:\n- [List the visual/gameplay parts: track, car, obstacles, scoreboard, game-over screen]\n\nSession Build Plan:\n- [Which session builds what? e.g. Session 2 = HTML, Session 3 = CSS, Sessions 4-12 = JavaScript]'
    WHERE (entry_id = 'j1' OR entry_id LIKE '%_j1') AND version = 1 AND (code LIKE '%sandwich%' OR code LIKE '%Microwave (Draft v1)%' OR code LIKE '%Household IPO Blueprint%')
  `).catch(err => console.warn(err));

  await db.query(`
    UPDATE journal_versions
    SET code = 'Racing Car Game — Project Roadmap (Detailed Plan v2)\n\nGame Concept:\n- [Describe what the player sees and does]\n\nMajor Parts (System Parts & Information):\n- [List every part needed: track, car, obstacles, scoreboard, game-over overlay, and what data/state the game must remember]\n\nSession Build Plan (Session-by-Session):\n1. Session 2 (HTML): [ ]\n2. Session 3 (CSS): [ ]\n3. Sessions 4-12 (JavaScript): [ ]\n\n5-Step AI-Era Loop (used starting next session):\n1. Plan & Design 2. Write the AI Prompt 3. Review & Explain 4. Test & Break It 5. Iterate & Improve'
    WHERE (entry_id = 'j1' OR entry_id LIKE '%_j1') AND version = 2 AND (code LIKE '%sandwich%' OR code LIKE '%Microwave (Detailed Spec v2)%' OR code LIKE '%Household IPO Blueprint%')
  `).catch(err => console.warn(err));
}

// Bangkok (UTC+7, no DST) wall-clock timestamp as "YYYY-MM-DD HH:MM", used instead of
// toISOString() so journal entries show the time the student actually experienced it,
// regardless of what timezone the server process itself happens to run in.
function formatBangkokTimestamp(date = new Date()) {
  const bangkokMs = date.getTime() + 7 * 60 * 60 * 1000;
  return new Date(bangkokMs).toISOString().replace('T', ' ').substring(0, 16);
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
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const user = userRes.rows[0];
    if (user.password !== cleanPassword) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    
    res.json({
      success: true,
      token: user.id,
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        role: user.role,
        points: user.points,
        student_level: user.student_level || 'L1'
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
      student_level: usersRes.rows[0].student_level || 'L1',
      solvedCases: solvedQuestsMap
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Update User Points
app.post('/api/user/points', authenticateToken, requireTeacher, async (req, res) => {
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
    const insertRes = await db.query("INSERT INTO completed_quests (user_id, quest_id) VALUES ($1, $2) ON CONFLICT (user_id, quest_id) DO NOTHING", [req.userId, questId]);

    // Add XP reward — only when the quest was newly completed (rowCount 0 means the
    // quest row already existed), so repeated/duplicate claims can never double-award XP.
    if (xpReward && insertRes.rowCount > 0) {
      await db.query("UPDATE user_profile SET points = points + $1 WHERE id = $2", [xpReward, req.userId]);
    }

    const userRes = await db.query("SELECT points FROM user_profile WHERE id = $1", [req.userId]);
    res.json({ success: true, activePoints: userRes.rows[0].points });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3b. Fetch Sandbox Exercise Progress (map of sessionId -> [exercise numbers passed])
app.get('/api/user/exercise-progress', authenticateToken, async (req, res) => {
  try {
    const result = await db.query(
      "SELECT session_id, exercise_num FROM exercise_progress WHERE user_id = $1 ORDER BY session_id, exercise_num",
      [req.userId]
    );
    const progressMap = {};
    result.rows.forEach(row => {
      if (!progressMap[row.session_id]) progressMap[row.session_id] = [];
      progressMap[row.session_id].push(row.exercise_num);
    });
    res.json(progressMap);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3c. Record passed Sandbox exercises. Accepts a batch so the client can both mark a
// single exercise and migrate legacy localStorage progress in one call. Idempotent
// (ON CONFLICT DO NOTHING); returns the user's full refreshed progress map.
app.post('/api/user/exercise-progress', authenticateToken, async (req, res) => {
  const { entries } = req.body;
  if (!Array.isArray(entries) || entries.length === 0) {
    return res.status(400).json({ error: 'entries must be a non-empty array of { sessionId, exerciseNum }' });
  }
  try {
    for (const entry of entries) {
      const sessionId = String(entry.sessionId || '');
      const exerciseNum = parseInt(entry.exerciseNum, 10);
      if (!/^l\d+-s\d+$/.test(sessionId) || !Number.isInteger(exerciseNum) || exerciseNum < 1 || exerciseNum > 20) {
        return res.status(400).json({ error: `Invalid entry: ${JSON.stringify(entry)}` });
      }
      await db.query(
        "INSERT INTO exercise_progress (user_id, session_id, exercise_num) VALUES ($1, $2, $3) ON CONFLICT (user_id, session_id, exercise_num) DO NOTHING",
        [req.userId, sessionId, exerciseNum]
      );
    }
    const result = await db.query(
      "SELECT session_id, exercise_num FROM exercise_progress WHERE user_id = $1 ORDER BY session_id, exercise_num",
      [req.userId]
    );
    const progressMap = {};
    result.rows.forEach(row => {
      if (!progressMap[row.session_id]) progressMap[row.session_id] = [];
      progressMap[row.session_id].push(row.exercise_num);
    });
    res.json({ success: true, progress: progressMap });
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
  if (!id || !title) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  try {
    const formattedDate = date || formatBangkokTimestamp();
    
    // Insert entry metadata
    await db.query(`
      INSERT INTO journal_entries (id, user_id, title, date, version, active_version)
      VALUES ($1, $2, $3, $4, 1, 1)
    `, [id, req.userId, title, formattedDate]);

    // Insert version 1 content
    await db.query(`
      INSERT INTO journal_versions (entry_id, version, prompt, code)
      VALUES ($1, 1, $2, $3)
    `, [id, prompt || '', code || '']);

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

// Update an existing journal version
app.put('/api/journal/version', authenticateToken, async (req, res) => {
  const { entryId, version, prompt, code } = req.body;
  if (!entryId || !version || !prompt) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    await db.query(`
      UPDATE journal_versions
      SET prompt = $1, code = $2
      WHERE entry_id = $3 AND version = $4
    `, [prompt, code || '', entryId, parseInt(version)]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read-only view of a specific student's journal entries — a teacher (Admin Panel or
// Student Report) or that student's linked parent (Student Report) may view it.
app.get('/api/admin/students/:studentId/journal', authenticateToken, async (req, res) => {
  try {
    const access = await canAccessStudentReport(req.userId, req.params.studentId);
    if (!access.allowed) {
      return res.status(403).json({ error: "Forbidden: No access to this student's journal" });
    }
    const result = await db.query(`
      SELECT je.id as entry_id, je.title, je.date, je.version as latest_version, je.active_version,
             jv.version as version_num, jv.prompt, jv.code
      FROM journal_entries je
      LEFT JOIN journal_versions jv ON je.id = jv.entry_id
      WHERE je.user_id = $1
      ORDER BY je.date DESC, jv.version ASC
    `, [req.params.studentId]);

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

// Admin Route: Get all students
app.get('/api/admin/students', authenticateToken, requireTeacher, async (req, res) => {
  try {
    const studentsRes = await db.query("SELECT id, username, name, role, points, student_level, is_active, created_at FROM user_profile WHERE role = 'student' ORDER BY created_at DESC");
    res.json(studentsRes.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Route: Get all parent accounts with their linked student(s)
app.get('/api/admin/parents', authenticateToken, requireTeacher, async (req, res) => {
  try {
    const parentsRes = await db.query("SELECT id, username, name, role, created_at FROM user_profile WHERE role = 'parent' ORDER BY created_at DESC");
    const linksRes = await db.query(`
      SELECT pl.parent_id, s.id as student_id, s.name as student_name, s.username as student_username, s.is_active as student_is_active
      FROM parent_links pl
      JOIN user_profile s ON s.id = pl.student_id
    `);
    const linksByParent = {};
    linksRes.rows.forEach(row => {
      if (!linksByParent[row.parent_id]) linksByParent[row.parent_id] = [];
      linksByParent[row.parent_id].push({
        id: row.student_id,
        name: row.student_name,
        username: row.student_username,
        is_active: row.student_is_active
      });
    });
    const parents = parentsRes.rows.map(p => ({ ...p, linkedStudents: linksByParent[p.id] || [] }));
    res.json(parents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Route: Activate/deactivate a student
app.post('/api/admin/students/active', authenticateToken, requireTeacher, async (req, res) => {
  const { studentId, active } = req.body;
  if (!studentId || typeof active !== 'boolean') {
    return res.status(400).json({ error: 'studentId and a boolean active value are required' });
  }
  try {
    await db.query("UPDATE user_profile SET is_active = $1 WHERE id = $2 AND role = 'student'", [active, studentId]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Route: Link a parent account to an additional student
app.post('/api/admin/parents/link', authenticateToken, requireTeacher, async (req, res) => {
  const { parentId, studentId } = req.body;
  if (!parentId || !studentId) {
    return res.status(400).json({ error: 'parentId and studentId are required' });
  }
  try {
    const parentCheck = await db.query("SELECT id FROM user_profile WHERE id = $1 AND role = 'parent'", [parentId]);
    const studentCheck = await db.query("SELECT id FROM user_profile WHERE id = $1 AND role = 'student'", [studentId]);
    if (parentCheck.rows.length === 0 || studentCheck.rows.length === 0) {
      return res.status(400).json({ error: 'Parent or student not found' });
    }
    await db.query(`
      INSERT INTO parent_links (parent_id, student_id) VALUES ($1, $2)
      ON CONFLICT DO NOTHING
    `, [parentId, studentId]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Route: Unlink a parent account from a student
app.post('/api/admin/parents/unlink', authenticateToken, requireTeacher, async (req, res) => {
  const { parentId, studentId } = req.body;
  if (!parentId || !studentId) {
    return res.status(400).json({ error: 'parentId and studentId are required' });
  }
  try {
    await db.query("DELETE FROM parent_links WHERE parent_id = $1 AND student_id = $2", [parentId, studentId]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Route: Add new student, or a new parent account linked to existing student(s)
app.post('/api/admin/students', authenticateToken, requireTeacher, async (req, res) => {
  const { username, password, name, level, linkedStudentIds } = req.body;
  if (!username || !password || !name) {
    return res.status(400).json({ error: 'Username, password and name are required' });
  }
  const isParent = Array.isArray(linkedStudentIds) && linkedStudentIds.length > 0;
  try {
    const checkUser = await db.query("SELECT id FROM user_profile WHERE username = $1", [username]);
    if (checkUser.rows.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    if (isParent) {
      const linkedRes = await db.query("SELECT id FROM user_profile WHERE id = ANY($1) AND role = 'student'", [linkedStudentIds]);
      if (linkedRes.rows.length !== linkedStudentIds.length) {
        return res.status(400).json({ error: 'One or more linked students were not found' });
      }

      const parentId = 'parent_' + Date.now();
      await db.query(`
        INSERT INTO user_profile (id, username, password, role, name, points)
        VALUES ($1, $2, $3, 'parent', $4, 0)
      `, [parentId, username, password, name]);

      for (const studentId of linkedStudentIds) {
        await db.query(`
          INSERT INTO parent_links (parent_id, student_id) VALUES ($1, $2)
          ON CONFLICT DO NOTHING
        `, [parentId, studentId]);
      }

      return res.json({ success: true, parent: { id: parentId, username, name, role: 'parent', linkedStudentIds } });
    }

    const studentLevel = level || 'L1';
    const studentId = 'std_' + Date.now();
    await db.query(`
      INSERT INTO user_profile (id, username, password, role, name, points, student_level)
      VALUES ($1, $2, $3, 'student', $4, 0, $5)
    `, [studentId, username, password, name, studentLevel]);

    // Seed default journal entry for new student
    await db.query(`
      INSERT INTO journal_entries (id, user_id, title, date, version, active_version)
      VALUES ($1, $2, $3, $4, 1, 1)
    `, [studentId + '_j1', studentId, 'L1 S1: Project Kickoff & Roadmap', formatBangkokTimestamp()]);

    await db.query(`
      INSERT INTO journal_versions (entry_id, version, prompt, code)
      VALUES ($1, 1, $2, $3)
    `, [studentId + '_j1', 'Sketch the Racing Car Game you will build across Sessions 2-12: its parts, its look, and the session-by-session build plan.', 'Racing Car Game — Project Roadmap (Draft v1)\n\nGame Concept:\n- [Describe the finished game in 1-2 sentences]\n\nMajor Parts:\n- [List the visual/gameplay parts: track, car, obstacles, scoreboard, game-over screen]\n\nSession Build Plan:\n- [Which session builds what? e.g. Session 2 = HTML, Session 3 = CSS, Sessions 4-12 = JavaScript]']);

    res.json({ success: true, student: { id: studentId, username, name, role: 'student', points: 0, student_level: studentLevel } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Route: Update student level
app.post('/api/admin/students/level', authenticateToken, requireTeacher, async (req, res) => {
  const { studentId, level } = req.body;
  if (!studentId || !level) {
    return res.status(400).json({ error: 'studentId and level are required' });
  }
  if (!['L1', 'L2', 'L3', 'L4'].includes(level)) {
    return res.status(400).json({ error: 'Level must be L1, L2, L3, or L4' });
  }
  try {
    await db.query("UPDATE user_profile SET student_level = $1 WHERE id = $2 AND role = 'student'", [level, studentId]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Route: Update student points
app.post('/api/admin/students/points', authenticateToken, requireTeacher, async (req, res) => {
  const { studentId, points } = req.body;
  if (!studentId || points === undefined) {
    return res.status(400).json({ error: 'studentId and points are required' });
  }
  try {
    await db.query("UPDATE user_profile SET points = $1 WHERE id = $2 AND role = 'student'", [points, studentId]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Student Report Helper: does this user (teacher or linked parent) have access to this student's report?
async function canAccessStudentReport(userId, studentId) {
  const userRes = await db.query("SELECT role FROM user_profile WHERE id = $1", [userId]);
  if (userRes.rows.length === 0) return { allowed: false, role: null };
  const role = userRes.rows[0].role;
  if (role === 'teacher') return { allowed: true, role };
  if (role === 'parent') {
    const linkRes = await db.query("SELECT 1 FROM parent_links WHERE parent_id = $1 AND student_id = $2", [userId, studentId]);
    return { allowed: linkRes.rows.length > 0, role };
  }
  return { allowed: false, role };
}

// Student Report Route: students a teacher can pick from, or a parent's linked student(s)
app.get('/api/report/my-students', authenticateToken, async (req, res) => {
  try {
    const userRes = await db.query("SELECT role FROM user_profile WHERE id = $1", [req.userId]);
    if (userRes.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    const role = userRes.rows[0].role;
    if (role === 'student') {
      return res.status(403).json({ error: 'Forbidden: Students do not have access to Student Report' });
    }
    if (role === 'teacher') {
      const studentsRes = await db.query("SELECT id, username, name, student_level FROM user_profile WHERE role = 'student' AND is_active = true ORDER BY name ASC");
      return res.json(studentsRes.rows);
    }
    const linkedRes = await db.query(`
      SELECT up.id, up.username, up.name, up.student_level
      FROM parent_links pl
      JOIN user_profile up ON up.id = pl.student_id
      WHERE pl.parent_id = $1 AND up.is_active = true
      ORDER BY up.name ASC
    `, [req.userId]);
    res.json(linkedRes.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Student Report Route: fetch all session attendance/feedback rows for a student
app.get('/api/report/:studentId', authenticateToken, async (req, res) => {
  try {
    const access = await canAccessStudentReport(req.userId, req.params.studentId);
    if (!access.allowed) {
      return res.status(403).json({ error: "Forbidden: No access to this student's report" });
    }
    const reportRes = await db.query(
      "SELECT session_id, session_date, teacher_feedback, parent_feedback FROM session_reports WHERE student_id = $1",
      [req.params.studentId]
    );
    res.json(reportRes.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Student Report Route: teacher sets the attendance date for a session
app.put('/api/report/:studentId/:sessionId/date', authenticateToken, requireTeacher, async (req, res) => {
  const { studentId, sessionId } = req.params;
  const { date } = req.body;
  try {
    await db.query(`
      INSERT INTO session_reports (student_id, session_id, session_date, updated_at)
      VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
      ON CONFLICT (student_id, session_id)
      DO UPDATE SET session_date = $3, updated_at = CURRENT_TIMESTAMP
    `, [studentId, sessionId, date || null]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Student Report Route: teacher edits either feedback box; a linked parent may only edit the parent box
app.put('/api/report/:studentId/:sessionId/feedback', authenticateToken, async (req, res) => {
  const { studentId, sessionId } = req.params;
  const { field, text } = req.body;
  if (field !== 'teacher' && field !== 'parent') {
    return res.status(400).json({ error: "field must be 'teacher' or 'parent'" });
  }
  try {
    const access = await canAccessStudentReport(req.userId, studentId);
    if (!access.allowed) {
      return res.status(403).json({ error: "Forbidden: No access to this student's report" });
    }
    if (field === 'teacher' && access.role !== 'teacher') {
      return res.status(403).json({ error: 'Forbidden: Only teachers can edit teacher feedback' });
    }
    const column = field === 'teacher' ? 'teacher_feedback' : 'parent_feedback';
    await db.query(`
      INSERT INTO session_reports (student_id, session_id, ${column}, updated_at)
      VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
      ON CONFLICT (student_id, session_id)
      DO UPDATE SET ${column} = $3, updated_at = CURRENT_TIMESTAMP
    `, [studentId, sessionId, text || '']);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Dynamic Leaderboard Route
app.get('/api/leaderboard', authenticateToken, async (req, res) => {
  try {
    const leaderboardRes = await db.query(`
      SELECT name, username, student_level, points 
      FROM user_profile 
      WHERE role = 'student' 
      ORDER BY points DESC
    `);
    
    const list = leaderboardRes.rows.map((row, index) => ({
      rank: index + 1,
      name: row.name,
      username: row.username,
      level: 'Level ' + (row.student_level ? row.student_level.replace('L', '') : '1'),
      points: row.points
    }));
    
    res.json(list);
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
}
