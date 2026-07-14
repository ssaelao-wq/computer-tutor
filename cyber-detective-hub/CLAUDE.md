# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Cyber Detective Hub — part of the Computer Tutor system. A React + Vite frontend and an Express backend in one repo, providing an interactive coding sandbox and quest-based learning environment ("cases") for students, with a teacher/admin role for managing students and levels.

> **`../PRJ_KNOWLEDGE.md`** (i.e. `D:\somboon-data\Dev\computer-tutor\PRJ_KNOWLEDGE.md`, one directory above this repo) is the source-of-truth project definition — educational philosophy, the 4-level curriculum design, the 5-Step AI-Era Learning Methodology, the Hybrid delivery model, auth/schema decisions, and student machine setup requirements. **Read it first and re-check it before any product-logic or curriculum change** — this repo's own docs (`ARCHITECTURE.md`, `CONTEXT.md`, `TODO.md`) are downstream summaries of it and can drift out of date.

### Key things from PRJ_KNOWLEDGE.md that shape this code

- **5-Step Learning Methodology** (Plan & Design → Write the AI Prompt → Review & Explain → Test & Break It → Iterate & Improve) is the pedagogical loop every session and every project feature is built around. New "project" or "journal" features should map to one of these five steps, not be designed from scratch.
- **Hybrid Delivery Model (Option B)**: the platform hosts methodology/tracking (plan forms, prompt editor, code-review/annotation UI, test checklists, journal/iteration log) — it does **not** generate or execute student game code itself. Actual game files stay on the student's machine; external tools (Cursor, ChatGPT) do code generation. Don't build in-platform code execution or AI code generation without checking this is still the intended model.
- **Two AI roles are deliberately separate** and must not be conflated in product design: the external **AI IDE** (Cursor/Copilot/etc., does code generation — out of platform scope) vs. a future in-platform **Teacher Assistant** (explains code, asks Socratic questions, audits student work against their own design plan and curriculum scope — never writes production code for the student). The TA/Auditor is a v2 concept, not yet implemented.
- **Level roles were restructured on 2026-07-13** (see PRJ_KNOWLEDGE.md §2): **L1–2 = technical knowledge** (themed exercises + standalone labs, *no* cumulative game build), **L3 = the development process** (one guided project through the full lifecycle), **L4 = capstone build of an actual game** (L3–4 project tracks are swappable, e.g. a web-app track later). **As of 2026-07-14, L1 and L2 are the only levels with live platform implementation** — `src/curriculumData.js`, `src/projectTasksData.js`, `CONCEPT_REFERENCES`, the generic AI Prompt Sandbox presets (`loadTemplate`), and the Quest Board (`L1_QUEST_SESSIONS`/`L2_QUEST_SESSIONS`, both derived from `CURRICULUM_DATA`) are complete and in sync with the docs for L1 (12 sessions) and L2 (13 sessions). **L3 and L4 are documentation-only for now** (curriculum docs exist; no L3/L4 teacher guideline docs yet) — the admin panel and generic sandbox still technically accept L3/L4 session IDs (nothing hard-blocks them), but building out their platform experience (e.g. L3's documented `git diff` review mechanism) is intentionally deferred. Don't extend L3/L4 platform features without checking with the user first.
- **Level themes must stay internally consistent**: L1 Racing Car (exercise context), L2 Mars Colony Defense (exercise context), L3 Cyberpunk Hacker Arena (guided project track), L4 the student's own game (capstone). All sessions within a level share one theme; content must stay age-appropriate/adventurous (avoid domestic/baby-ish framing). Check `CURRICULUM_DATA` in `src/curriculumData.js` against this when adding sessions.
- **Code review mechanism is intentionally level-gated** (post-restructure): L1–2 = copy-paste (deliberate friction, not a shortcut to fix — labs are single-file), L3 = platform-run `git diff` against student's repo, escalating to GitHub PR diffs, L4 = CI/CD-triggered audit. Don't "improve" L1–2 by adding auto-diffing — the copy-paste friction is pedagogically intentional.

## Commands

```bash
npm run dev          # runs frontend (Vite, port 5180) + backend (nodemon server.cjs, port 3001) concurrently
npm run dev:client    # Vite only
npm run dev:server    # nodemon server.cjs only
npm run build         # vite build -> dist/
npm run preview       # preview production build
npm run lint          # oxlint (rules in .oxlintrc.json)
```

There is no test suite configured (`TODO.md` lists "Add unit tests and integration tests" as backlog). There is no separate typecheck step (plain JS/JSX, not TypeScript).

Frontend dev server proxies `/api/*` to `http://localhost:3001` (see `vite.config.js`), so run both processes (`npm run dev`) when working on anything that touches the backend.

## Architecture

### Monolithic frontend, file-backed data
- `src/App.jsx` (~4300 lines) is the entire frontend: all view state (`activeTab`, `selectedLevel`, `curriculumSessionId`, etc.) lives in one root component via `useState`/`useEffect`. There is no router — navigation is tab-state driven, not URL-driven.
- `src/curriculumData.js` exports `CURRICULUM_DATA` — the full 4-level curriculum content (levels → sessions → concepts/exercises).
- `src/projectTasksData.js` exports `PROJECT_TASKS` — the game-project task checklists per level.
- Large in-file constants near the top of `App.jsx` (`CONCEPT_REFERENCES`, `CAMPAIGN_THEMES`, `S2_EXERCISES`, `S3_EXERCISES`, `INITIAL_JOURNAL`, `LEADERBOARD_INITIAL`) hold content/config that's easy to mistake for curriculum data but is scoped to `App.jsx` — check there before assuming something belongs in `curriculumData.js`.

### Backend: `server.cjs` is the real server; `api/index.js` is a thin Vercel wrapper
- `server.cjs` (CommonJS, ~570 lines) defines the Express app, DB pool, table creation/migrations, and all `/api/*` routes directly — it's the single source of truth for backend behavior.
- `api/index.js` just re-exports the same `app` from `server.cjs` for Vercel's serverless function convention (see `vercel.json` rewrite `/api/(.*) -> /api`). Don't duplicate route logic there.
- On every request, middleware lazily calls `initializeDB()` (connects + `createTables()` + ad-hoc `ALTER TABLE ... ADD COLUMN IF NOT EXISTS` migrations + one-off data-fix `UPDATE` statements). New schema changes should follow this same lazy-migration pattern inside `createTables()` rather than a separate migration runner — there isn't one.

### Database: this platform's own backend runs PostgreSQL (Supabase); MySQL is what L3 students are taught
This is a deliberate split, not a bug — per `PRJ_KNOWLEDGE.md` §2/§8, **MySQL + Express is the primary teaching stack for L3 students** (installed locally via Servbay/XAMPP), while Supabase/PostgreSQL is called out there as "an alternative cloud DB option for awareness." However, **this repo's actual running server** (`server.cjs`) is implemented against `pg`/Supabase Postgres, not MySQL — almost certainly because the platform itself deploys to Vercel, which favors a managed cloud Postgres over a locally-installed MySQL instance.
- `server.cjs` uses `pg` (`Pool`) exclusively. `.env` configures a Supabase `DATABASE_URL` (SSL auto-enabled for any non-localhost host).
- `db_setup.sql` and `vite_db.sql` at the repo root are MySQL-flavored schemas matching the *student-facing L3 curriculum*, not what `server.cjs` creates at runtime (e.g. `server.cjs` additionally has `username`, `password`, `role`, `student_level` on `user_profile`, and uses `SERIAL`/`$1` placeholders). Treat `server.cjs`'s `createTables()` as the authoritative schema for **this platform's own DB**; the root `.sql` files are reference/teaching material for students' own L3 projects, and `ARCHITECTURE.md`'s "MySQL" description describes the teaching stack, not this app's runtime.
- Core tables: `user_profile` (identity, XP `points`, `role`: student/teacher, `student_level`: L1-L4), `completed_quests`, `journal_entries`, `journal_versions` (prompt/code revision history for the sandbox).

### Auth: token = user ID, by design (per PRJ_KNOWLEDGE.md §4)
- `POST /api/auth/login` issues a token; `authenticateToken` middleware in `server.cjs` takes the bearer token as-is and assigns it directly to `req.userId` — no signature verification. This matches the documented design: *"the token is currently the unique identifier of the user's profile."* It is intentionally simple for this platform, not a half-finished JWT implementation — don't "fix" it by adding JWT signing without confirming that's actually wanted, since it would be a deliberate scope change to documented behavior.
- Teacher-only routes additionally check `requireTeacher`, which looks up `role` in `user_profile` by `req.userId`.
- Frontend stores the token in `localStorage` under `detective_token`.
- Seeded default accounts (per PRJ_KNOWLEDGE.md §4): teacher `somboon`/`somboon123`, student `student_demo`/`student123` — useful for local testing of role-gated behavior.

### API surface (`server.cjs`)
`/api/auth/login`, `/api/user`, `/api/user/points`, `/api/user/quests`, `/api/journal` (GET/POST), `/api/journal/version` (POST/PUT), `/api/admin/students` (GET/POST, teacher-only), `/api/admin/students/level`, `/api/admin/students/points`, `/api/leaderboard`.

## Project documentation map

This repo has several docs with distinct purposes — read the right one instead of guessing from code alone:
- `README.md` — quick start / install / run.
- `ARCHITECTURE.md` — intended structure and code patterns (note: its "MySQL" line describes the student teaching stack, not this app's own runtime — see Database note above).
- `CONTEXT.md` — business logic and user flows for this sub-app; points to `../PRJ_KNOWLEDGE.md` for the full curriculum/product philosophy.
- `TODO.md` — actual backlog/roadmap, including the planned "Hybrid Model" game-project flow (Plan & Design → AI Prompt → Code Review/Annotation → Test Checklist → Journal) and the "Teacher Assistant" AI-TA concept (not yet built — it's explicitly *not* a code generator, just a guide/auditor).
- `AGENTS.md` — process rules for agents working in this repo (see below).

## Process rules from AGENTS.md

These are explicit standing instructions for this repo, not generic advice — follow them:
- Investigate the actual execution flow / root cause before editing; don't patch symptoms.
- Before changing something, check what else it touches (side effects across `App.jsx`, `server.cjs`, curriculum data) and call out anything that looks affected.
- Don't refactor, rename, or "clean up" code outside what the task asks for — logic and scope changes require explicit instruction.
- If a fix fails twice, stop and propose a different approach rather than continuing to patch.
- When editing, show the whole containing function/block, not an isolated line.
- Grading logic: this repo's `AGENTS.md` references `lib/grades.js` for Thai 4.0 grading — that file does not currently exist in this repo; if grading logic is added, confirm placement/intent with the user first rather than assuming the referenced path.
- Verify edits by reading back the changed lines (or running lint) before reporting a task done.
