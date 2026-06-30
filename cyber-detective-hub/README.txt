# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

================================
# Start server
npm run dev
or
node node_modules/vite/bin/vite.js

# Build for production, this bundles all React files, styles, and assets into static, optimized HTML/JS/CSS files in a dist/ directory.
npm run build

# Preview Production Build Locally, if you want to test how the production build runs before publishing
npm run preview

# Run client from browser
http://localhost:5173/

================================
-- SQL Setup Script for Detective Hub Database persistence
CREATE DATABASE IF NOT EXISTS vite_db;
USE vite_db;

-- 1. User Profile Table
-- Stores user identity and overall cumulative XP score
CREATE TABLE IF NOT EXISTS user_profile (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  points INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Completed Quests Table
-- Tracks quest/session completion states per user
CREATE TABLE IF NOT EXISTS completed_quests (
  user_id VARCHAR(50),
  quest_id VARCHAR(50),
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, quest_id),
  FOREIGN KEY (user_id) REFERENCES user_profile(id) ON DELETE CASCADE
);

-- 3. Journal Entries Table
-- Header metadata for code solutions written in the Sandbox
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
-- Historical revisions (prompt specifications & generated code blocks) per journal entry
CREATE TABLE IF NOT EXISTS journal_versions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  entry_id VARCHAR(50),
  version INT NOT NULL,
  prompt TEXT,
  code TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (entry_id) REFERENCES journal_entries(id) ON DELETE CASCADE
);