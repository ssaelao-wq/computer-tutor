# Project Roadmap & Tasks

## 🟥 Backlog (To Do)

### Platform Core
- [ ] Implement user authentication and session management (login/logout with Bearer token).
- [ ] Connect the frontend to the Express backend for `user_profile` data.
- [ ] Verify SQL database connectivity with `pg` (this platform's own runtime is PostgreSQL/Supabase, not MySQL — the unused `mysql2` dependency was removed from `package.json` 2026-07-08; see `CLAUDE.md`'s Database note).
- [ ] Add unit tests and integration tests.

### Game Project Features (Hybrid Model — Option B)
- [ ] Design and build the **Plan & Design** form UI (structured template for students to document components, data, and flow before prompting AI).
- [ ] Build the **Prompt Editor** UI — a dedicated tab where students draft and save their AI prompts (saved to `journal_versions`).
- [ ] Build the **Code Review & Annotation** UI — a read-only code display area where students paste AI output and annotate it line by line with explanations.
  - *v1 — L1 only (copy-paste):* Single HTML file; copy-paste is intentional and forces the student to read every line of AI output.
  - *v2 — L2+ (Git diff pull):* Platform runs `git pull` / `git diff` against the student's linked GitHub repo and displays only the changed lines — no manual copy needed (see Git Integration in Future Upgrades).
  - *v1 Scaffold Q&A (no AI):* Surface pre-authored Socratic guide questions alongside the code, keyed to the current session's topic.
- [ ] Build the **Test Case Checklist** UI — a structured input where students write "what should happen when..." test scenarios and mark pass/fail.
- [ ] Confirm the **Journal / Iteration Log** correctly tracks each prompt revision as a `journal_version` entry.

### Exercises Feature
- [ ] Design the exercise session structure (concept drills, quizzes, interactive sandbox simulations per level).
- [ ] Build the Level 1 Exercise sessions (early sessions: HTML/CSS/JS basics; late sessions: game loops, collision math).

### Teacher Guidelines
- [x] ~~Write L2-L4 teacher guidelines~~ **Intentionally deferred (confirmed with project owner 2026-07-08).** Only `L1-Computer_Tutor_Teacher_Guideline.md` exists today (board scripts, Socratic prompts, homework solutions per session). Writing equivalents for L2-L4 is a large content task on the same scale as the L2/L3 curriculum sync — worth scoping as its own dedicated effort rather than folding into a cleanup pass. Not an oversight.

## 🟨 In Progress
- [x] Markdown documentation and project setup (AGENTS, ARCHITECTURE, CONTEXT, README, TODO, PRJ_KNOWLEDGE).

## 🟩 Completed
- [x] Initial repository initialization.
- [x] Set up React + Vite frontend skeleton.
- [x] Set up Express backend entry point (`server.cjs`).
- [x] Create initial SQL database schemas (`vite_db.sql`, `db_setup.sql`).
- [x] Define 4-level curriculum progression with focus topics and targets.
- [x] Formalize the 5-Step AI-Era Learning Methodology.
- [x] Decide Game Project Delivery Model: **Option B (Hybrid)** — platform manages methodology, Cursor/ChatGPT generates code externally.

---

## 🔭 Future Upgrades (v2)

### Platform AI — Teacher Assistant Role
The future AI integration inside the platform is explicitly **not** an AI code generator. It plays the role of a **Teacher Assistant (TA)**: guiding student comprehension, prompting reflection, and answering "why" questions — while industrial AI tools remain responsible for code generation.

- [ ] **Code Review — AI Explanation:** Student highlights a block of code and asks "explain this" — the platform TA explains it in plain language at the appropriate level for the student's current level.
- [ ] **Code Review — AI Guiding Questions:** Instead of static pre-authored questions, the platform TA generates personalized Socratic questions based on the student's specific pasted code (e.g., *"Your loop starts at 0 — what would happen if it started at 1 instead?"*).
- [ ] **Comprehension Q&A:** Student can ask the platform TA free-form questions about any code in their journal (e.g., *"Why does this function need a return statement?"*) and receive a teaching-style answer, not just a code fix.
- [ ] **TA Auditor — Student Work Review:** The platform TA audits student submissions with full curriculum context — exercise answers, project task completions, and design plans — and provides structured feedback on correctness, completeness, and alignment with the session's learning objectives.
- [ ] **TA Auditor — AI-Generated Code Cross-Check:** After the student pastes AI-generated code (Step 3), the platform TA cross-checks it against the student's own design plan (Step 1), the session's curriculum requirements, and the project's tech stack constraints. This catches cases where the external AI produced plausible but incorrect, off-spec, or insecure code — something Cursor cannot do because it lacks the platform's project context.
- [ ] **Inline AI Prompt Execution (separate from TA):** Allow Step 2 (Write the AI Prompt) to be run inside the platform via API — this is the *code generation* step, distinct from the TA role.
- [ ] **Sandboxed Game Preview:** Add an iframe code preview panel so students and teachers can view the running game inside the platform.

### Git Integration — Code Review Bridge (L2+) — ⬆️ Prioritize sooner
Solves the copy-paste scalability problem when projects span multiple files or produce partial line changes.

> **Priority note (2026-07-08):** a live Playwright walkthrough of the Project Journal (see `computer-tutor-audit01.md` §G) independently confirmed whole-file freeform code review is the weakest link in an otherwise well-designed Step 3 ("Review & Explain") — a student can write one vague paragraph about a 40-line pasted file and technically complete the step. This was already planned here, but the audit is a second, independent signal it's worth pulling forward ahead of other Future Upgrades items, not just leaving at the bottom of the v2 backlog.

- [ ] **GitHub Repo Linking:** Student links their project GitHub repository to the platform (OAuth or Personal Access Token). The platform stores the repo URL and branch per student per level.
- [ ] **Platform Git Pull:** After a student finishes a Cursor/AI session and commits their code, they click "Sync Latest Code" in the platform. The backend runs `git pull` on a server-side clone of the student's repo to fetch the latest changes.
- [ ] **Git Diff Display:** The platform runs `git diff <previous-commit>..<latest-commit>` and renders the result as a colour-coded diff view (additions in green, deletions in red) — exactly the lines the AI changed, across all affected files.
- [ ] **Diff-Based Auditor:** The TA Auditor receives the diff (not the full codebase) and cross-checks it against the student's design plan and session scope. Reviewing only what changed keeps the audit fast and focused.
- [ ] **Commit History as Iteration Log:** Each `git commit` the student makes is surfaced in the platform's Iteration Log (Step 5), replacing the manual `journal_versions` entries for L2+ projects.
