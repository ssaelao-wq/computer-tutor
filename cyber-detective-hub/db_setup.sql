-- SQL Setup Script for Detective Hub Database persistence
CREATE DATABASE IF NOT EXISTS vite_db;
USE vite_db;

-- 1. User Profile Table
CREATE TABLE IF NOT EXISTS user_profile (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  points INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Completed Quests Table
CREATE TABLE IF NOT EXISTS completed_quests (
  user_id VARCHAR(50),
  quest_id VARCHAR(50),
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, quest_id),
  FOREIGN KEY (user_id) REFERENCES user_profile(id) ON DELETE CASCADE
);

-- 3. Journal Entries Table
CREATE TABLE IF NOT EXISTS journal_entries (
  id VARCHAR(50) PRIMARY KEY,
  user_id VARCHAR(50),
  title VARCHAR(255) NOT NULL,
  date VARCHAR(20) NOT NULL,
  version INT DEFAULT 1,
  active_version INT DEFAULT 1,
  FOREIGN KEY (user_id) REFERENCES user_profile(id) ON DELETE CASCADE
);

-- 4. Journal Versions Table
CREATE TABLE IF NOT EXISTS journal_versions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  entry_id VARCHAR(50),
  version INT NOT NULL,
  prompt TEXT,
  code TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (entry_id) REFERENCES journal_entries(id) ON DELETE CASCADE
);

-- Seed Default Detective Profile if empty
INSERT IGNORE INTO user_profile (id, name, points) 
VALUES ('current_user', 'You (Detective-in-Training)', 450);

-- Seed Completed Quests matching initial app state
INSERT IGNORE INTO completed_quests (user_id, quest_id)
VALUES ('current_user', 'l1-s1'), ('current_user', 'l1-s2');

-- Seed Initial Journal Entries if empty
INSERT IGNORE INTO journal_entries (id, user_id, title, date, version, active_version)
VALUES ('j1', 'current_user', 'L1 S1: Household IPO Blueprint', '2026-06-24 14:32', 2, 2);

-- Seed Initial Journal Versions
INSERT IGNORE INTO journal_versions (entry_id, version, prompt, code)
VALUES 
('j1', 1, 
'Document a household appliance (e.g., Microwave) using the Input-Process-Output (IPO) model. Write down a step-by-step sequential algorithm for its operation.', 
'// Version 1: Simple Microwave Blueprint\n// Inputs: Start button clicked\n// Process: Cook food for 1 minute\n// Output: Beep when finished\n// (Ambiguity: Does not define variables, check if door is open, or count down time!)'
),
('j1', 2, 
'Document a household appliance (e.g., Microwave) using the Input-Process-Output (IPO) model. Identify inputs (with data types), processing logic (handling loops and state checks), and outputs. Make sure to define system preconditions.', 
'// Version 2: Precise Microwave IPO Blueprint\n// Precondition: powerState === "ON"\n// Inputs:\n//   - keypadInput (String, e.g. "01:30")\n//   - doorClosed (Boolean)\n//   - startPressed (Boolean)\n//\n// Process:\n//   1. Wait until startPressed is true\n//   2. Check if doorClosed is true. If false, sound error_beep and halt\n//   3. Parse keypadInput time into secondsLeft variable\n//   4. Loop while secondsLeft > 0:\n//      a. If doorClosed becomes false, pause cooking and halt loop\n//      b. Emit magnetron waves (Output)\n//      c. Decrement secondsLeft by 1\n//      d. Wait 1 second\n//   5. Trigger beep_alarm (Output)\n//\n// Output:\n//   - magnetron_radiation (active wave emission)\n//   - timerDisplay (number of seconds remaining)\n//   - alarmSound (end-of-cycle beep)'
);
