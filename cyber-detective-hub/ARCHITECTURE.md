# Architecture Overview

This project is the Cyber Detective Hub, part of the Computer Tutor system.

## 1. Project Structure
The project is structured as a full-stack JavaScript application using a React + Vite frontend and an Express backend within the same repository.

[Project Root]/
├── public/               # Publicly accessible static assets
├── src/                  # React Frontend Source
│   ├── components/       # Reusable UI components
│   ├── pages/            # View pages
│   └── lib/              # Frontend utilities and API clients
├── api/                  # Express Backend API and Controllers
├── server.cjs            # Main Node.js/Express server entry point
├── db_setup.sql          # MySQL reference schema for the L3 student curriculum (NOT this app's own DB — see §3.1)
└── package.json          # Shared dependencies and scripts

## 2. Core Components

### 2.1 Frontend (React + Vite)
- **Description:** A modern, fast client application for the Cyber Detective Hub.
- **Technologies:** React 19, Vite, OxLint for linting.
- **State Management:** React hooks / context.

### 2.2 Backend Services (Express)
- **Description:** Handles API requests, database interactions, and persistence for user progress, quests, and journal entries.
- **Technologies:** Node.js, Express, `pg` (PostgreSQL).

## 3. Data Stores
### 3.1 Primary Database
- **Type:** Relational SQL Database — **PostgreSQL** (Supabase). This is this platform's own runtime
  database, created automatically by `server.cjs`'s `createTables()`; there is no manual schema file
  to run. (`db_setup.sql` / `vite_db.sql` at the repo root are a separate MySQL reference schema for
  the student-facing L3 curriculum per `PRJ_KNOWLEDGE.md` §2/§8 — they do not describe this app's DB.)
- **Core Tables:**
  - `user_profile`: User identity and XP points.
  - `completed_quests`: Tracks quest completion state per user.
  - `journal_entries`: Code solutions in the Sandbox.
  - `journal_versions`: Revisions of prompts and generated code.

## 4. Scripts
- `npm run dev`: Runs both frontend (Vite) and backend (Nodemon server.cjs) concurrently.
- `npm run build`: Builds the Vite frontend for production.

## ⚙️ Core Project Capabilities & Code Patterns

### 1. State Management (React/Vite)
- Use **React Context API** and hooks for global client-side state.
- Keep server state synchronized by fetching from our Express backend endpoints.

### 2. API Communication
- All external API calls must wrap around our central `src/lib/apiClient.js` (or similar fetch utility) instance.
- Ensure every request includes authentication/session handling and global error logging.

### 3. Database Mutations
- Use **pg** parameterized queries (`$1`, `$2`, ...) to prevent SQL injection.
- Implement explicit SQL transactions (`START TRANSACTION`, `COMMIT`, `ROLLBACK`) whenever updating multiple tables simultaneously (e.g., `journal_entries` and `journal_versions`) to prevent data corruption.
