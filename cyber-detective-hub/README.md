# Cyber Detective Hub

> [!IMPORTANT]
> Always consult the project blueprint in [PRJ_KNOWLEDGE.md](file:///d:/somboon-data/Dev/computer-tutor/PRJ_KNOWLEDGE.md) to ensure the development is in line, matches the correct scope, and goes in the same direction.

Cyber Detective Hub is a full-stack educational web application designed for the Computer Tutor system. It provides an interactive coding sandbox and quest-based learning environment where users can write code, save journal entries, and track their progress.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- A PostgreSQL database (e.g. a free [Supabase](https://supabase.com) project)

### Installation
```bash
# Clone the repository and navigate to the project directory
git clone <repository-url>
cd computer-tutor/cyber-detective-hub

# Install dependencies
npm install
```

### Database Setup
This app's own database is PostgreSQL. There is no manual schema file to run — set `DATABASE_URL`
(or `DB_HOST`/`DB_USER`/`DB_PASSWORD`/`DB_NAME`/`DB_PORT`) in a `.env` file, and `server.cjs`
creates all tables (and seeds a default teacher/student login) automatically on first request:
```bash
# .env
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

> `db_setup.sql` / `vite_db.sql` are **not** for this app's own database — they're a MySQL
> reference schema for the separate student-facing L3 curriculum project (see
> `PRJ_KNOWLEDGE.md` §2/§8). Running them against this app will not produce a working login.

### Running the App Locally
```bash
# Start both the Vite frontend client and the Express server concurrently
npm run dev
```
The client will be available at `http://localhost:5173/`.

## 📂 Project Structure
- `/src` - React frontend source code.
- `/api` - Express backend routes and logic.
- `server.cjs` - Backend server entry point.

## 🛠 Built With
- **Frontend:** React 19, Vite
- **Backend:** Node.js, Express
- **Database:** PostgreSQL (this platform's own runtime, via Supabase) — MySQL is used separately by the L3 student curriculum, not by this app
