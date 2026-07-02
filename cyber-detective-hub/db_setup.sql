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
'Write a process to warm up food from a plate.', 
'Household IPO Blueprint: Microwave (Draft v1)\n\nInputs:\n- Start button pressed\n\nProcessing steps:\n- Turn on the microwave heating wave generator\n- Heat the food for 60 seconds\n- Beep when finished\n\nOutputs:\n- Hot food and alarm sound\n\n(Ambiguity Analysis: This is too vague. It does not check if the power is on, doesn\'t verify if the door is closed first, and doesn\'t define variables!)'
),
('j1', 2, 
'Write a process to warm up food from a plate. Identify inputs (with data types), processing logic (handling loops and state checks), and outputs. Make sure to define system preconditions.', 
'Household IPO Blueprint: Microwave (Detailed Spec v2)\n\nSystem Precondition:\n- powerState must be "ON" (active electrical current)\n\nInputs:\n- keypadInput: Text / String value (e.g. "01:30")\n- doorClosed: Switch / Boolean value (Yes/No)\n- startPressed: Switch / Boolean value (Yes/No)\n\nProcessing Logic Steps:\n1. Wait until startPressed becomes Yes.\n2. Check doorClosed state. If doorClosed is No, beep 3 times and halt operation.\n3. Parse the keypadInput to extract the total seconds (secondsRemaining).\n4. Loop while secondsRemaining is greater than 0:\n   a. Check doorClosed state. If door is opened (No), pause cooking and halt loop.\n   b. Turn on the microwave heating wave generator.\n   c. Subtract 1 second from secondsRemaining.\n   d. Wait exactly 1 second.\n5. Turn off the heating wave generator.\n6. Trigger the end-of-cycle alarm beep.\n\nOutputs:\n- magnetronWaves: Active radiation waves\n- countdownDisplay: Number representing seconds remaining\n- alarmSpeaker: End-of-cycle audio beep'
);
