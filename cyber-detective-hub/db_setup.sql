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
VALUES ('j1', 'current_user', 'L1 S1: Automated Cauldron Cauldron', '2026-06-24 14:32', 2, 2);

-- Seed Initial Journal Versions
INSERT IGNORE INTO journal_versions (entry_id, version, prompt, code)
VALUES 
('j1', 1, 
'Write a function to make a sandwich. Take bread and butter. Spread the butter on the bread and serve.', 
'// Version 1: Literal sandwich maker\nfunction makeSandwich(bread, butter) {\n  // Ambiguity: Assumes bread is sliced and butter tub is open!\n  console.log("Spreading " + butter + " on " + bread);\n  return "Sandwich Ready";\n}'
),
('j1', 2, 
'Write a function to make a sandwich. Inputs: bread (sealed package), butter (sealed tub), knife. Steps: (1) Open bread package, (2) take 2 slices, (3) open butter tub, (4) use knife to scoop butter, (5) spread butter on bread slices, (6) put slices together. Handle empty inputs.', 
'// Version 2: Preciser instructions handling sealed packages\nfunction makeSandwich(bread, butter, knife) {\n  if (!bread || !butter || !knife) {\n    throw new Error("Missing ingredients or tools!");\n  }\n  \n  console.log("Opening sealed bread package...");\n  const slice1 = bread.getSlice();\n  const slice2 = bread.getSlice();\n  \n  console.log("Opening sealed butter tub...");\n  const openedButter = butter.open();\n  \n  console.log("Scooping butter with knife...");\n  const butterScoop = knife.scoop(openedButter, "10g");\n  \n  console.log("Spreading butter on slice 1...");\n  slice1.apply(butterScoop);\n  \n  console.log("Putting slices together...");\n  return [slice1, slice2].combine();\n}'
);
