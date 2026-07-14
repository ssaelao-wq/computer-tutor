# Computer Tutor: Teacher & Tutor Guidelines (Level 3)

This guideline is designed for the tutor to lead one-on-one sessions for students aged 13–16 who have completed Level 2. It maps out the exact timeline, board explanations, Socratic prompts, sandbox fill-in guidance, and Project Journal milestone criteria for each 2-hour session of Level 3: **"The Development Process"** — a guided build of the Cyberpunk Hacker Arena (a persistent hacking console with accounts, inventories, and purchases) that teaches how real software gets made, not new syntax.

---

## Pedagogical Philosophy (AI-Era Shift)
1. **The Process Is the Curriculum**: Level 3 introduces almost no new syntax — every session applies Level 1–2 technical knowledge inside a real development lifecycle. Resist the urge to re-teach syntax; if a student is stuck on syntax itself, that's a Level 1–2 gap to flag, not a Level 3 lesson.
2. **Audit Against the Student's Own Plan**: From Session 3 onward, every "audit" the student performs is checked against artifacts *they* wrote earlier — the PRD, the blueprint, the API contract — not against a hidden answer key. The tutor's job is "does this match what YOU designed?", not "does this match what I expected?"
3. **Never Type For the Student**: Let them run into real process failures — a merge conflict, a failed rollback, a broken deploy. The learning is in diagnosing why the process caught (or failed to catch) the problem, not in the tutor preventing it from happening.
4. **No Paper, All Digital**: All notes, blueprints, PRDs, and homework are logged in the student's in-app **Journal** tab.

---

## 🛠️ Portal Management: Admin Panel, Student Levels & Journals

Before running classes, tutors must familiarize themselves with the administrative controls and workspaces inside the application:

### 1. Student Levels & Navigation Restrictions
* **Configuring Student Levels**:
  - Access the **Admin Panel** tab (only visible for accounts with the `teacher` role).
  - Use the registration form to create a student profile and select their initial curriculum level (`L1`, `L2`, `L3`, or `L4`).
  - In the student roster table, teachers can click the **Level select dropdown** on any student to dynamically change their level.
* **Navigation Locks**:
  - Setting a student's level to **L3** automatically deactivates tabs for Levels 1, 2, and 4 in the **Quest Board** and **Curriculum Guide** views.
  - Locked tabs display a padlock (`🔒`) and are disabled to keep students focused on their active level milestones.
  - Tutors bypass these locks so they can click and audit any level tab at any time.

### 2. Interactive Prompt Journals
* **Homework and Notebook Logging**:
  - The **Prompt Journal** tab is a fully interactive text/code editor workspace.
  - All text containers have **automatic text-wrapping** enabled, preventing horizontal overflow logs.
  - Students write their notes, logic schemas, PRDs, and homework answers inside the **Code Output History** editor.
  - Click **Save Changes** (Blue button) to overwrite the current selected version in the database.
  - Click **Save as New Version** (Green button) to save the current edits as a new draft while keeping previous versions intact — this is especially important at Level 3, where the commit history and journal version history should tell the same story.

### 3. Level 3's Sandbox: Generic AI Prompt Sandbox, No Bespoke Exercises or Concept Reference Cards
* Like Level 2, Level 3 has **no session-specific sandbox validators** — every L3 session (`l3-s1` through `l3-s14`) uses the same **Standard AI Prompt Sandbox** panel: a generic Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases form, an **AI Generator** button, a **Chaos Monkey** fuzz-tester, and a read-only code output pane.
* **Unlike Level 2, Level 3 does not yet have dedicated Concept Reference cards** in the app — the in-app Concept Reference tab currently falls back to generic placeholder text for all 14 L3 sessions. This guideline's **Board Lesson Talking Points** and **Standard AI Prompt Sandbox — Tutor Fill-In Guide** sections are therefore the primary source of session-specific material for tutors; there is no in-app card to hand students as a supplement yet.
* **The platform's "Sync Latest Code" git-diff review view (described in `PRJ_KNOWLEDGE.md` §7) is not implemented yet either.** Until it ships, run diff-based review (Sessions 6, 9, and onward) by having the student share their actual `git diff` output directly — e.g. `git diff HEAD~1` in a terminal, or GitHub's own Pull Request diff view — rather than a platform-rendered view. The talking points below describe the *intended* workflow either way, since the process skill (reading a diff, not a full file) is what's being taught, independent of which screen renders it.
* This is a deliberate, current platform scope decision, not an oversight — the Cyber Detective Hub platform currently implements Levels 1–2 fully; Level 3's in-app sandbox presets and Project Journal milestone guidance (`PROJECT_TASKS`) are complete, but the bespoke Concept Reference cards and git-diff viewer are scoped for a later pass.

### 4. This Guideline's Session Numbering
This guideline's 14 sessions map 1:1 to the current `L3-Computer_Tutor_AIEra_Curriculum.md` structure and the app's `l3-s1`–`l3-s14` session IDs — no legacy renumbering table is needed (unlike the Level 2 guideline, which still carries an old→new session mapping from an earlier restructure).

---

## 🕶️ Level 3 Structure: The Development Process (14 Sessions)

> **Restructure note (2026-07-13):** Level 3 was repositioned from a "backend & database syntax" level to **the development-process level**. Database/API fundamentals moved down to Level 2 in simplified form; here students use them for real, inside a process. The Cyberpunk Hacker Arena is the **default guided project track** — the process curriculum (PRD → design → build loop → ship) is deliberately track-agnostic, so a different product (e.g., a web application) can be swapped in later without changing the session structure.

| Sessions | Phase | Process Skills Introduced |
|----------|-------|---------------------------|
| 1–4 | From Idea to Plan | Lifecycle & roles, PRD writing, architecture blueprints, Git & workspace setup |
| 5–9 | The Build Loop | Feature specs & project-scale prompting, diff review, test plans, debugging cycles, branches & PRs |
| 10–12 | Integrate, Deploy & Polish | Integration sweeps, cloud deployment, hardening & release QA |
| 13–14 | Defense & Retrospective | Presenting process artifacts, running a retrospective |

**The Guided Project — Cyberpunk Hacker Arena**: players register, log in, browse hacking tools, and buy them with credits — a persistent console backed by Express + MySQL. The product is deliberately modest; **the process is the curriculum**. Sessions 5–9 each run the full 5-Step loop on one feature and introduce one new process skill; from Session 6 onward, every session's build work is expected to open with a diff review of the previous session's commit.

---

## Session 1: "How Software Gets Built: The Development Lifecycle"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Play the Finished Product |
| 0:15–0:35 | Board Lesson: The Lifecycle & The Loop |
| 0:35–0:55 | Deconstruction Phase: Reverse-Engineering the Demo |
| 0:55–1:30 | Planning Phase (AI Assisted): The Project Charter |
| 1:30–1:45 | Socratic Debrief: The Skipped-Phase Disaster |
| 1:45–2:00 | Ethics: Building the Right Thing |

### 1. Board Lesson Talking Points
* **The Lifecycle Phases & Why Order Matters**: requirements → design → build → test → deploy → iterate. Requirements before design, design before code — each phase constrains what the next phase is allowed to assume.
* **The 5-Step AI Loop as the Inner Cycle**: Plan → Prompt → Review → Test → Iterate runs *inside* every single build phase, not just once for the whole project. Every feature session from Session 5 onward is one more trip through this inner loop.
* **Engineering Roles**: product, frontend, backend, DBA, QA, DevOps — at Level 3 the student plays all of them, guided. Naming which "hat" is on for a given task keeps the student from blurring design decisions into implementation decisions.

### 2. Socratic Prompting
* *"The code in that story worked perfectly. Why did the project still fail? Which phase was skipped?"* (Working code isn't the same as building the right thing — skipped requirements mean the code faithfully implements a wrong understanding of what to build. HealthCare.gov's 2013 launch is the real case: individually-functioning modules that had never been integration-tested collapsed under real users, a $1.7B lesson in process discipline.)
* *"Who gets hurt when engineers skip process steps to go faster? When is 'move fast' irresponsible?"* (Users bear the cost of shipped defects. "Move fast" becomes irresponsible exactly when what's being skipped is the verification that the product does what it's supposed to — speed without verification just moves the failure downstream to production.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
Level 3 uses the generic **Standard AI Prompt Sandbox** panel (Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases fields + AI Generator + Chaos Monkey) rather than session-specific validators. The tutor should guide the student to fill in each field using this session's real project spec below — not a scripted answer key.

* **Task description** field: Draft a one-page Project Charter for the Hacker Arena (what's being built, for whom, what "done" means), then prompt the AI IDE to critique it for vagueness, hidden assumptions, and untestable claims before tightening it.
* **Logical Constraints (Rules)** field: The Charter must name a concrete audience and a concrete definition of "done" — not just a feature list; the AI critique must be logged in the Prompt Journal even where the student disagrees with a finding.
* **Edge cases to handle** field: A Charter that only lists features without saying who they're for, or what "done" means, should be flagged by the AI critique — if it isn't, the tutor should surface that gap manually.
* **Expected outcome** (no single code artifact this session, sourced from the L3 curriculum doc's Tutor Manual): a tightened Project Charter plus a documented list of AI critique findings and the student's accept/reject reasoning for each.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 1 card tracks **Lifecycle Mapping & the Project Charter**.

1. **Plan & Design** — *Expected:* the lifecycle phases listed in order (Requirements → Design → Build → Test → Deploy → Iterate), plus a first-guess component list from reverse-engineering the demo (login/register page, arena/shop page, endpoints like `POST /signup`/`POST /purchase`, tables like `players`/`hacking_tools`/`inventories`).
2. **Write AI Prompt** — *Expected:* a prompt asking the AI to critique the Charter draft for vagueness, hidden assumptions, and missing failure cases.
3. **Review & Explain** — *Expected:* the student explains, in their own words, why each AI finding is valid or not.
4. **Test & Break** — *Expected:* no code to test this session; instead verify the Charter states a testable, concrete definition of "done."
5. **Iterate & Improve** — *Expected:* a revised Charter incorporating the accepted AI findings.

* **Homework Evaluation Checklist**: each lifecycle phase must name a concrete Hacker Arena artifact (e.g., Design → "table schema for players and tools"), not a generic restatement of the phase name.

---

## Session 2: "Mission Briefing: Requirements & the PRD"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: The Ambiguous Client |
| 0:15–0:35 | Board Lesson: User Stories & Acceptance Criteria |
| 0:35–0:55 | Design Phase: Drafting the PRD |
| 0:55–1:30 | Build Phase (AI Assisted): PRD Hardening |
| 1:30–1:45 | Socratic Debugging: The Untestable Requirement |
| 1:45–2:00 | Ethics: Scope Honesty |

### 1. Board Lesson Talking Points
* **The Story Template**: *As a [player], I want [to buy a tool] so that [my deck gets stronger].* Every user story names a role, an action, and a reason — a feature request without the "so that" clause usually hides an untested assumption about why it matters.
* **Acceptance Criteria as Testable Statements**: "purchase fails with a visible message if credits are insufficient" is testable; "purchase should feel safe" is not. Every Must story needs at least one criterion a QA pass could actually check off.
* **MoSCoW Prioritization**: Must / Should / Could, and why "Could" features die first when the scope math doesn't fit — cutting scope is not failure, it's the PRD doing its job.

### 2. Socratic Prompting
* *"How would a tester prove 'fast and secure' is done? If it can't be proven done, what is it?"* (It's an unfalsifiable requirement — it can never be marked complete because there's no test that would fail. Rewriting it into measurable criteria — responds within N ms, passwords hashed, lockout after N failures — is what turns a feeling into a requirement.)
* *"A client asks for 20 features in the time 8 fit. Is it more ethical to promise everything and fail quietly, or to negotiate the cut line up front?"* (Negotiating the cut line up front respects the stakeholder's ability to make an informed decision; silently under-delivering just moves the disappointment later and removes their ability to choose which 8 features actually matter most to them.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Draft the Hacker Arena PRD skeleton (goal, users, 6–10 user stories, priorities, out-of-scope list), marking each story Must/Should/Could with acceptance criteria for every Must, then prompt the AI to attack the PRD for untestable criteria, hidden assumptions, and missing failure cases before revising.
* **Logical Constraints (Rules)** field: Every Must story needs at least one testable acceptance criterion; the out-of-scope list must be explicit, not implied by omission.
* **Edge cases to handle** field: A story like "the login should be fast and secure" must be caught and rewritten into a measurable form before the PRD is considered final.
* **Expected outcome** (sourced from the L3 curriculum doc's Tutor Manual): Must stories — register, login, list tools, purchase; Should — inventory view, credit balance display; Could — leaderboard, tool trading, avatars (variations accepted with a coherent defense).

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 2 card tracks **The Hacker Arena PRD**.

1. **Plan & Design** — *Expected:* a goal statement, a users list, and 6–10 user stories drafted before any AI involvement.
2. **Write AI Prompt** — *Expected:* a prompt asking the AI to find untestable criteria, hidden assumptions, and missing failure cases in the PRD draft.
3. **Review & Explain** — *Expected:* the student explains why each accepted AI finding actually improved a story's testability.
4. **Test & Break** — *Expected:* every Must story's acceptance criterion is checked against the "could a tester prove this?" bar; any adjective-only criterion is rejected.
5. **Iterate & Improve** — *Expected:* a revised PRD with tightened criteria and a finalized MoSCoW split.

* **Homework Evaluation Checklist**: acceptance criteria must be observable or testable — reject adjectives without numbers or behaviors attached (e.g. "purchase rejected with message if credits < cost" passes; "purchase should feel safe" does not).

---

## Session 3: "System Design: Architecture Blueprints"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Relational Schema Match |
| 0:15–0:35 | Board Lesson: Designing Before Building |
| 0:35–0:55 | Design Phase: The Arena Blueprint |
| 0:55–1:30 | Build Phase (AI Assisted): Generating & Auditing the Schema |
| 1:30–1:45 | Socratic Debugging: The Floating Record |
| 1:45–2:00 | Ethics: Data Privacy & Sensitivity Classification |

### 1. Board Lesson Talking Points
* **Component Diagrams**: what talks to what, and what is *forbidden* from talking to what — the client never touches the database directly. Drawing the forbidden connections is as important as drawing the allowed ones.
* **Relational Modeling**: one-to-many and many-to-many relationships; constraints (`UNIQUE`, `NOT NULL`, foreign keys, cascade deletes) as promises the database itself enforces, not just documentation.
* **API Contracts as Promises**: endpoint + method + payload + status codes, written down *before* implementation — the contract is what Session 5 onward gets built against and audited for deviation from.

### 2. Socratic Prompting
* *"Why does the database still list tools for a player who no longer exists? What is the role of foreign keys and cascade deletes?"* (Without a foreign-key constraint with `ON DELETE CASCADE`, deleting the parent `players` row leaves its `inventories` rows pointing at an id that no longer exists — nothing tells the database to clean those up automatically.)
* *"In our schema, what is public (tool list) vs private (inventories, credentials)? Why must classification happen at design time, not after launch?"* (The 2017 Equifax breach exposed 147 million people's data partly because sensitive fields lacked adequate access controls that should have been designed in from the start. Retrofitting access control onto an already-public schema is far harder than designing the boundary before any real data exists.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Design tables for `players`, `hacking_tools` (id, name, speed_rating, cost), and `inventories` (player_id, tool_id), mapping every PRD Must-story to endpoints, then prompt the AI to generate the SQL schema and audit it against the blueprint's keys, constraints, and types.
* **Logical Constraints (Rules)** field: `inventories` must declare foreign keys to both `players` and `hacking_tools`, with `ON DELETE CASCADE` on the player reference; the API contract must give every endpoint both a success AND a failure status code.
* **Edge cases to handle** field: A deleted player must not leave orphaned inventory rows; an endpoint with only a happy-path status code should be flagged as incomplete.
* **Expected AI output** (sourced from the L3 curriculum doc's Tutor Manual):
  ```sql
  CREATE TABLE players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    credits INT DEFAULT 500,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE hacking_tools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    speed_rating INT,
    cost INT CHECK (cost >= 0)
  );

  CREATE TABLE inventories (
    player_id INT,
    tool_id INT,
    FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE,
    FOREIGN KEY (tool_id) REFERENCES hacking_tools(id)
  );
  ```
  API contract (minimum): `POST /signup` (201/400), `POST /login` (200/401), `GET /tools` (200), `GET /inventory` (200/401), `POST /purchase` (200/400/401).

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 3 card tracks **The Arena Blueprint**.

1. **Plan & Design** — *Expected:* a component diagram, the three-table schema sketch, and an endpoint list mapped to PRD Must-stories, all drafted before prompting the AI.
2. **Write AI Prompt** — *Expected:* a prompt asking for the SQL `CREATE TABLE` statements matching the blueprint's tables, keys, and constraints.
3. **Review & Explain** — *Expected:* the student explains each foreign key relationship and why the cascade-delete rule sits where it does.
4. **Test & Break** — *Expected:* insert a player/tool/inventory row set successfully, then delete the player and confirm the inventory row cascades away.
5. **Iterate & Improve** — *Expected:* any deviation between the AI's generated schema and the blueprint is corrected and logged.

* **Homework Evaluation Checklist**: child tables must reference parents via foreign keys; the contract must give each endpoint a failure status, not just the happy path.

---

## Session 4: "Base Camp: Git, Repos & the Workspace"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: The Time Machine Demo |
| 0:15–0:35 | Board Lesson: Repositories & Secrets |
| 0:35–0:55 | Design Phase: Workspace Layout |
| 0:55–1:30 | Build Phase (Guided + AI Assisted): Standing Up Base Camp |
| 1:30–1:45 | Socratic Debugging: The Leaked Key |
| 1:45–2:00 | Ethics: Code Leakage & AI Tools |

### 1. Board Lesson Talking Points
* **The Commit as a Snapshot**: the staging area, and writing commit messages that describe *why*, not just *what*. From today, every AI coding session ends with a commit — this is the habit the rest of Level 3's review mechanism depends on.
* **Remote Repos**: push/pull, and why the platform will read this repo for code review from Session 6 onward — the GitHub repo is not just a backup, it's the review surface.
* **Secrets Containment**: `.env` files, `process.env`, and `.gitignore` — credentials must never enter history, because history is forever. Deleting a secret in a later commit does not remove it from the repo.

### 2. Socratic Prompting
* *"The key is gone from the file — is it gone from the repo? What must happen once a real secret is pushed?"* (No — Git history keeps every prior version of every file, so a deleted line is still visible by checking out an earlier commit. Once a real secret is pushed, it must be treated as compromised: rotate or revoke it. Deletion in a later commit is not containment.)
* *"What belongs in an AI prompt, and what never does? How will you keep credentials out of your Cursor sessions?"* (In 2022, a Samsung engineer pasted proprietary source code into ChatGPT, exposing trade secrets — prompts sent to a third-party AI service are disclosures, not private scratch space. Real credentials, keys, and any code under an NDA never belong in a prompt.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: No AI generation this session — draft the exact git command sequence yourself, then verify on GitHub that `.env` is absent and the commit history is clean.
* **Logical Constraints (Rules)** field: `.gitignore` must list `.env` and `node_modules/` *before* the first commit, not added retroactively.
* **Edge cases to handle** field: If a secret is accidentally staged, catch it with `git status` before committing — not after pushing.
* **Expected outcome** (sourced from the L3 curriculum doc's Tutor Manual): `git init` → `git add .` → `git commit -m "chore: initial workspace structure"` → `git remote add origin <url>` → `git push -u origin main`; a `.env` with `DB_HOST`, `DB_USER`, `DB_PASS` loaded via `require("dotenv").config(); const dbPassword = process.env.DB_PASS;`.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 4 card tracks **Base Camp Setup**.

1. **Plan & Design** — *Expected:* the planned folder structure (frontend/, server/, db/) and what gets committed vs. ignored.
2. **Write AI Prompt** — *Expected:* none this session — the git commands are drafted by the student directly.
3. **Review & Explain** — *Expected:* the student explains why `.env` must be listed in `.gitignore` before the first commit, not after.
4. **Test & Break** — *Expected:* `git status` after adding secrets shows `.env` as ignored, not staged; deleting `.env` temporarily causes the server to fail to connect, proving it truly reads from the file.
5. **Iterate & Improve** — *Expected:* if any secret was ever committed, the fix is rotation, not just a follow-up commit removing the line.

* **Homework Evaluation Checklist**: `.gitignore` must include `.env` and `node_modules/`; the commit message must describe intent, not "changes."

---

## Session 5: "Build Loop I: Feature Specs & Prompting at Project Scale — The Login Gate"

*(This session opens Module 2: The Build Loop. Each build session — 5 through 9 — runs the full 5-Step loop on one feature and introduces one new process skill; every session ends with a commit.)*

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Password Hashing Trace |
| 0:15–0:35 | Board Lesson: The Feature Spec |
| 0:35–0:55 | Design Phase: Spec the Login Gate |
| 0:55–1:30 | Build Phase (AI Assisted): Implement & Audit |
| 1:30–1:45 | Socratic Debugging: The Plaintext Leak |
| 1:45–2:00 | Ethics: Credential Reuse |

### 1. Board Lesson Talking Points
* **Anatomy of a Feature Spec**: story reference, files affected, inputs/outputs, constraints, out-of-scope — this is the unit of work every build session from here on starts with.
* **Prompting Inside a Codebase**: giving the AI the schema, the contract, and the constraint list. Context is the difference between project code and generic code — a prompt with no schema attached gets you a plausible-looking but non-matching implementation.
* **The Auth Chain**: form → POST → validate → hash (`bcrypt`) → `INSERT`; login compares hashes, never plaintext. This is Level 2 Session 12's password-hashing awareness, now made real.

### 2. Socratic Prompting
* *"If attackers dump the table tonight, what do they have — and whose fault is it? Why is hashing non-negotiable even in a class project?"* (If passwords are stored in plaintext, attackers have every user's actual password immediately. LinkedIn's 2012 breach exposed 6.5M unsalted SHA-1 hashes, cracked within hours — hashing isn't optional polish, it's the baseline that determines whether a breach is a disaster or a survivable incident.)
* *"Users reuse passwords. What does that make every credentials table, and every developer who stores one?"* (It means a breach of one system can cascade into account takeovers on completely unrelated services. Every developer storing credentials is implicitly responsible for protecting more than just their own product's data.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Write the feature spec for register + login from the PRD's Must stories, including failure behaviors (duplicate username, short password), then run the spec through the AI IDE, audit output against spec/schema/contract, and fix deviations via follow-up prompts.
* **Logical Constraints (Rules)** field: The password length check must run before hashing, not after; `bcrypt.hash()` must be used instead of storing `password` directly.
* **Edge cases to handle** field: A duplicate username attempt and a too-short password attempt must both be rejected with a 400, not silently accepted or crash the server.
* **Expected AI output** (sourced from the L3 curriculum doc's Tutor Manual):
  ```javascript
  app.post("/signup", async (req, res) => {
    let { username, password } = req.body;
    if (password.length < 8) { return res.status(400).send("Too short"); }
    let hashedPassword = await bcrypt.hash(password, 10);
    await db.query("INSERT INTO players (username, password) VALUES (?, ?)", [username, hashedPassword]);
    res.status(201).send("Registered");
  });
  ```

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 5 card tracks **The Login Gate**.

1. **Plan & Design** — *Expected:* a feature spec (story reference, files affected, I/O, constraints, out-of-scope) for register + login, including duplicate-username and short-password failure behaviors.
2. **Write AI Prompt** — *Expected:* a prompt giving the AI the feature spec, the players schema, and the API contract, directing it to implement `/signup` and `/login`.
3. **Review & Explain** — *Expected:* the student explains why the hash step happens where it does, and what `bcrypt.hash()` protects against.
4. **Test & Break** — *Expected:* a 5-character password is rejected with 400 and no row inserted; a valid password's stored value is a bcrypt hash, not the raw string.
5. **Iterate & Improve** — *Expected:* server logs are checked for the literal password string to confirm it never appears anywhere.

* **Homework Evaluation Checklist**: the "change password" spec must include old-password verification as a constraint and name its failure statuses (400/401).

---

## Session 6: "Build Loop II: Diff-Based Code Review — The Tool Shop API"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Spot the Change |
| 0:15–0:35 | Board Lesson: Reading Diffs |
| 0:35–0:55 | Design Phase: Spec the Shop |
| 0:55–1:30 | Build Phase (AI Assisted): Implement, Sync, Review |
| 1:30–1:45 | Socratic Debugging: The Smuggled Change |
| 1:45–2:00 | Ethics: Review Accountability |

### 1. Board Lesson Talking Points
* **Diff Anatomy**: additions, deletions, context lines, file headers — a diff shows only what changed, which is exactly how Pull Request review works in industry.
* **The Review Checklist**: does it match the spec? does it trust client input? is anything changed that the spec didn't ask for? These three questions catch the large majority of review-worthy issues.
* **The Platform Workflow**: commit → "Sync Latest Code" → annotate the diff → TA/tutor cross-check. (Until the platform's diff viewer ships, substitute the student's own `git diff` output or a GitHub PR diff — see the Portal Management note at the top of this guideline.)

### 2. Socratic Prompting
* *"The feature works. So why is this diff dangerous to approve? What does 'out of scope' mean in a review?"* (A diff can implement the requested feature correctly AND smuggle in an unrelated change — an extra route, a widened `WHERE` clause — that was never speced or reviewed on its own merits. "Out of scope" means: even correct-looking code that wasn't asked for needs its own justification before it ships.)
* *"If you approve a diff without reading it and it ships a security hole, who is responsible — the author, the AI, or the approver?"* (The approver — approval is a certification that the code was actually checked, not a formality. Treating review as adversarial gatekeeping misses the point; it's a shared professional obligation, the same posture a real Pull Request review requires.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Write the feature spec for `GET /tools` and `GET /inventory` (the JOIN across `inventories`/`players`/`hacking_tools`) per the API contract, implement via the AI IDE, commit, sync into the platform, and review the diff line-by-line with the checklist, annotating at least three findings.
* **Logical Constraints (Rules)** field: The query must use `INNER JOIN`, not `LEFT JOIN`; the `WHERE` clause must filter by a parameterized player id, never a string-concatenated one.
* **Edge cases to handle** field: A player with zero owned tools must return an empty array, not an error or a `LEFT JOIN`-style null-filled row.
* **Expected AI output** (sourced from the L3 curriculum doc's Tutor Manual):
  ```sql
  SELECT players.username, hacking_tools.name, hacking_tools.cost
  FROM inventories
  JOIN players ON inventories.player_id = players.id
  JOIN hacking_tools ON inventories.tool_id = hacking_tools.id
  WHERE players.id = ?;
  ```

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 6 card tracks **The Tool Shop API**.

1. **Plan & Design** — *Expected:* the feature spec for both endpoints, written against the Session 3 API contract before implementation.
2. **Write AI Prompt** — *Expected:* a prompt directing the AI to implement `GET /tools` and `GET /inventory` to spec, including the JOIN query.
3. **Review & Explain** — *Expected:* a diff review with at least three annotated findings, including at least one security check (parameterization, join type).
4. **Test & Break** — *Expected:* a player with 2 owned tools returns exactly 2 rows; a player with zero owned tools returns an empty array, not an error.
5. **Iterate & Improve** — *Expected:* any smuggled or out-of-scope diff lines are flagged and either justified or reverted.

* **Homework Evaluation Checklist**: the student must catch both seeded issues in the provided 20-line diff — the endpoint not present in the contract, and the query concatenating user input instead of using a placeholder (Level 2 Session 12 knowledge, now applied in review).

---

## Session 7: "Build Loop III: Test Plans & Break-It QA — The Zero-Trust Server"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Parameter Sanity Checks |
| 0:15–0:35 | Board Lesson: Testing as a Plan, Not a Vibe |
| 0:35–0:55 | Design Phase: The Test Plan |
| 0:55–1:30 | Build Phase (AI Assisted): Guards + Execution |
| 1:30–1:45 | Socratic Debugging: The Free Credits Hack |
| 1:45–2:00 | Ethics: Exploits & Blame |

### 1. Board Lesson Talking Points
* **The Test-Case Table**: input → expected result → actual result → pass/fail. Writing the table before the guards exist forces the guards to be built to satisfy known cases, not the other way around.
* **The Zero-Trust Backend**: frontend validation is UX, server validation is security — anything a form checks, a request sent directly from DevTools bypasses entirely.
* **Status Code Discipline**: 400 bad input, 401 unauthenticated, 404 missing, 500 = our bug. The status code is the server's one-word verdict, and getting it right (not just returning 200 or 500 for everything) is part of the contract.

### 2. Socratic Prompting
* *"Every line executed correctly — where is the bug? What assumption did the code make about the client?"* (The bug isn't a broken line of code — it's a missing check. The code assumed `cost` would always be a sensible positive number because the frontend form only ever sent one; nothing on the server enforced that assumption once the frontend was bypassed.)
* *"If validation has holes and players exploit them, is it the player's fault or the coder's? Does 'nobody would ever send that' survive contact with the internet?"* (It's the coder's responsibility — "nobody would ever send that" is disproven the first time anyone opens DevTools. A production system faces adversarial input by default, not by exception.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Write the validation spec and 10+ test cases for `POST /purchase` inputs before any implementation, including hostile cases, then implement validation guards via the AI IDE, audit, and execute the full test plan against the running server, logging results in the platform's test checklist.
* **Logical Constraints (Rules)** field: Validation must run and `return` immediately on failure, before any query executes; `Number.isInteger()` must be used rather than a loose truthy check that would accept `"5"` or `-1`.
* **Edge cases to handle** field: A negative quantity, a non-numeric quantity, and a valid quantity must each be tested and produce the correct status.
* **Expected AI output** (sourced from the L3 curriculum doc's Tutor Manual):
  ```javascript
  router.post("/buy-tool", async (req, res) => {
    let { player_id, tool_id, quantity } = req.body;
    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).send("Invalid quantity: Must be positive integer");
    }
    // Perform database operations...
  });
  ```

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 7 card tracks **The Zero-Trust Server**.

1. **Plan & Design** — *Expected:* a 10+ row test-case table (input → expected result → actual result → pass/fail) written before any validation code exists.
2. **Write AI Prompt** — *Expected:* a prompt asking the AI to implement guards that make every row in the test plan pass.
3. **Review & Explain** — *Expected:* the student explains why the validation `return`s immediately, before any database work runs.
4. **Test & Break** — *Expected:* quantity `-5` returns 400 with no database write; quantity `"abc"` returns 400 rather than crashing the server.
5. **Iterate & Improve** — *Expected:* every numeric or string parameter the route accepts has its own validation check, not just the one seeded in the tutor manual.

* **Homework Evaluation Checklist**: the 6-case test plan for the login endpoint must include at least one type attack (non-string/oversized input) and one auth attack (valid format, wrong password → 401 not 400).

---

## Session 8: "Build Loop IV: Debugging & Iteration Cycles — The Atomic Purchase"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Partial Write Simulation |
| 0:15–0:35 | Board Lesson: Debugging as Process + ACID |
| 0:35–0:55 | Design Phase: Transaction Flowchart |
| 0:55–1:30 | Build Phase (AI Assisted): Implement & Hunt |
| 1:30–1:45 | Socratic Debugging: The Credit Theft Glitch |
| 1:45–2:00 | Ethics: Transaction Integrity |

### 1. Board Lesson Talking Points
* **The Debugging Protocol**: reproduce → isolate → hypothesize → fix → re-test → log — and why "change things until it works" is not debugging, it's guessing with extra steps.
* **Atomicity**: all queries in a transaction succeed, or all roll back; `BEGIN`/`COMMIT`/`ROLLBACK` syntax and why lock conditions prevent double-spending during concurrent runs.
* **The Iteration Log**: Step 5 of the 5-Step loop, as an engineering artifact — symptom → root cause → fix → commit hash. This is what turns "I fixed a bug" into evidence a reviewer can actually check.

### 2. Socratic Prompting
* *"Why did the player lose credits and get nothing? How does BEGIN/COMMIT make this impossible?"* (Without a transaction wrapper, the credit deduction and the inventory insert are two independent writes — if the server crashes between them, the deduction already happened but the insert never did. Wrapping both in `BEGIN`/`COMMIT` with rollback on error means either both writes land or neither does; there is no in-between state.)
* *"Why is atomic rollback mandatory in money systems?"* (Knight Capital Group's 2012 deployment failure executed 4 million unintended stock trades in 45 minutes, losing $440 million, in part due to a rollback/deployment failure. Any system that moves value between accounts must guarantee it never leaves an account half-charged — "the system must never half-happen.")

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Draw the purchase flow with rollback triggers (insufficient credits, missing tool, mid-write crash), then implement the transactional purchase via the AI IDE; the tutor activates two seeded bugs in a provided branch for the student to run the full debugging protocol on.
* **Logical Constraints (Rules)** field: The route must check the player's balance before deducting, and throw if insufficient; `client.release()` must be inside a `finally` block so it always runs.
* **Edge cases to handle** field: A crash mid-transaction (e.g. an invalid `tool_id`) must leave credits unchanged, not partially deducted.
* **Expected AI output** (sourced from the L3 curriculum doc's Tutor Manual):
  ```javascript
  router.post("/purchase-item", async (req, res) => {
    let conn = await db.getConnection();
    try {
      await conn.beginTransaction();
      let [rows] = await conn.query("SELECT credits FROM players WHERE id = ?", [req.body.player_id]);
      if (rows[0].credits < req.body.cost) { throw new Error("Insufficient credits"); }

      await conn.query("UPDATE players SET credits = credits - ? WHERE id = ?", [req.body.cost, req.body.player_id]);
      await conn.query("INSERT INTO inventories (player_id, tool_id) VALUES (?, ?)", [req.body.player_id, req.body.tool_id]);
      await conn.commit();
      res.status(200).send("Purchase success");
    } catch (e) {
      await conn.rollback();
      res.status(400).send("Transaction rolled back: " + e.message);
    } finally {
      conn.release();
    }
  });
  ```

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 8 card tracks **The Atomic Purchase**.

1. **Plan & Design** — *Expected:* a transaction flowchart showing rollback triggers for insufficient credits, missing tool, and mid-write crash.
2. **Write AI Prompt** — *Expected:* a prompt directing the AI to wrap the credit check, deduction, and inventory insert inside `BEGIN`/`COMMIT` with rollback on error.
3. **Review & Explain** — *Expected:* the student explains why `client.release()` must be in a `finally` block rather than only after success.
4. **Test & Break** — *Expected:* a purchase with sufficient credits commits both writes together; an insufficient-credit purchase rolls back with no partial deduction; a forced mid-transaction error leaves credits unchanged.
5. **Iterate & Improve** — *Expected:* an iteration log entry per seeded bug, naming a root cause ("the guard used `>` instead of `>=`"), not just a symptom ("purchase was broken").

* **Homework Evaluation Checklist**: rollback must run in the catch path; the iteration-log entry must name a root cause, not just a symptom.

---

## Session 9: "Build Loop V: Branches, Merges & Pull Requests"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Merge Conflict Match |
| 0:15–0:35 | Board Lesson: Branch Workflow |
| 0:35–0:55 | Design Phase: Feature Branch Plan |
| 0:55–1:30 | Build Phase (AI Assisted): Branch, Build, PR |
| 1:30–1:45 | Socratic Debugging: The Scrambled Merge Crash |
| 1:45–2:00 | Ethics: Team Memory |

### 1. Board Lesson Talking Points
* **Why Branches Exist**: `main` stays shippable at all times; work happens on the side and only rejoins `main` once it's reviewed. This is what makes it safe for review to take time.
* **The PR as a Reviewable Unit of Change**: tied to its PRD story, with a description explaining what/why/how tested — the PR description is what makes a diff make sense to someone who wasn't in the room.
* **The Lifecycle**: branch → commits → push → PR → review → merge. This session escalates the level's review mechanism from raw diffs (Session 6) to full Pull Requests.

### 2. Socratic Prompting
* *"What are these `<<<<<<<` lines? Why did Git refuse to decide for you — and what would it mean if it had?"* (Conflict markers appear when two branches edited the same lines and Git can't automatically determine which change should win. If Git silently picked one side, it could silently discard real work — the conflict marker is Git correctly refusing to guess at something only a human can resolve.)
* *"A year from now, someone reads your PR description to understand why this change exists. What do you owe that future reader?"* (A description that states what changed, why, and how it was tested — not "fixed stuff." A useless description costs a team real time every time someone has to reverse-engineer intent from the diff alone, and that future reader is often the same developer, a year later, with no memory of the decision.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Pick a Should-priority PRD feature (e.g., credit balance display, inventory sorting), spec it, and plan the branch name and PR description, then build it on the branch via the AI IDE, push, open the PR, and review your own diff on GitHub with the checklist.
* **Logical Constraints (Rules)** field: The PR description must state what changed, why, and how it was tested; conflict resolution must preserve the intent of both changes where they don't actually contradict each other.
* **Edge cases to handle** field: The tutor's triggered merge conflict must be resolved by hand — with all `<<<<<<<`/`=======`/`>>>>>>>` markers removed — not by discarding one side wholesale.
* **Expected outcome** (sourced from the L3 curriculum doc's Tutor Manual): open the conflicted file, remove the three marker lines, keep the correct (usually synthesized) lines, re-run the server, then `git add .` and `git commit`. Full sequence: `git checkout -b feature-x` → work/commits → `git push -u origin feature-x` → PR → `git checkout main` → `git merge feature-x` (or merge via GitHub).

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 9 card tracks **Branch, PR & Merge**.

1. **Plan & Design** — *Expected:* a spec for the chosen Should-priority feature, plus a planned branch name and PR description.
2. **Write AI Prompt** — *Expected:* a prompt directing the AI IDE to implement the feature on the branch.
3. **Review & Explain** — *Expected:* the student reviews their own diff on GitHub using the Session 6 checklist before merging.
4. **Test & Break** — *Expected:* a deliberate conflict on the same route file is flagged as unmergeable by Git; after resolution, the server runs with no leftover marker syntax errors.
5. **Iterate & Improve** — *Expected:* `git log` shows a clean merge commit; the PR description is revised until it clearly states what/why/how tested.

* **Homework Evaluation Checklist**: the git command sequence must be correct and in order; the model PR description must state what changed, why, and how it was tested.

---

## Session 10: "The Integration Sprint: End-to-End Data Flows"

*(This session opens Module 3: Integrate, Deploy & Polish.)*

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Integration Checkpoints Map |
| 0:15–0:35 | Board Lesson: Integration & Isolation |
| 0:35–1:25 | Core Activity: The Integration Sprint |
| 1:25–1:45 | Audit: Cross-User Attack Drill |
| 1:45–2:00 | Ethics: Mass Data Leaks |

### 1. Board Lesson Talking Points
* **Why Components That Pass Their Own Tests Still Fail Together**: contracts drift — a route built in Session 6 and a frontend call built independently can each look correct in isolation while disagreeing about a payload key or a status code's meaning.
* **Data Isolation**: every inventory query filters by the *authenticated* player id from the session/token — never an id the client supplied in the payload. This is the single most important rule of the whole level.
* **Row-Level Security (Awareness)**: database-engine enforcement of isolation, as in PostgreSQL/Supabase, is the professional belt-and-braces layer beneath application-level checks — awareness only at Level 3, hands-on at Level 4 if the student's stack uses it.

### 2. Socratic Prompting
* *"Why must the server take the player id from the session and not from the request body? Who controls the request body?"* (The player fully controls their own browser and DevTools console — anything sent in a request body can be edited before it's sent. Taking the id from the authenticated session instead means the server is trusting something it verified itself, not something the client merely claimed.)
* *"One forgotten isolation filter = every user's data. Why do professionals enforce isolation in more than one layer?"* (The 2019 Capital One breach exposed 106 million records via a single misconfigured access rule. A second, independent layer of isolation — like database-level Row-Level Security — means one mistake in the application layer doesn't automatically become a full data leak.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Run every Must-story end-to-end against the full data-flow checklist (Form → Route → Validation → Transaction → DB Write → Response → UI), fixing any gaps found; then log in as player A and attempt to fetch/modify player B's inventory via DevTools.
* **Logical Constraints (Rules)** field: Every layer in the checklist must be exercised by a single real user action, not tested in isolation only; the inventory route must take the player id from the authenticated session.
* **Edge cases to handle** field: Every cross-user attempt (read or write) must fail with 401/403 — zero exceptions.
* **Expected outcome** (sourced from the L3 curriculum doc's Tutor Manual): the inventory route uses `... WHERE player_id = ?` bound to the verified session/token id — never `req.body.player_id` or `req.query.player_id`.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 10 card tracks **The Integration Sprint**.

1. **Plan & Design** — *Expected:* the full data-flow checklist outlined for the purchase story, marking every boundary a bug could hide behind.
2. **Write AI Prompt** — *Expected:* a prompt asking the AI to trace a specific end-to-end flow (e.g. signup → login → purchase) and flag any layer where expected data isn't reaching the next one.
3. **Review & Explain** — *Expected:* the student identifies any TODO stubs or mock data left over from earlier sessions that now need wiring to the real backend.
4. **Test & Break** — *Expected:* a full signup → login → purchase flow succeeds live; a cross-user attack drill returns 401/403 on every attempt.
5. **Iterate & Improve** — *Expected:* a QA log documenting which integration gap took longest to find.

* **Homework Evaluation Checklist**: the log must report 201 on registration, 200 on purchase, and at least one *rejected* cross-user attempt with its status code.

---

## Session 11: "Ship It: Deploying to the Cloud"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Hosting Options Map |
| 0:15–0:35 | Board Lesson: Cloud Infrastructure Models |
| 0:35–0:55 | Design Phase: Deployment Blueprint |
| 0:55–1:30 | Build Phase (AI Assisted): Deploy & Verify |
| 1:30–1:45 | Socratic Debugging: The Broken Cloud Connection |
| 1:45–2:00 | Ethics: Data Sovereignty |

### 1. Board Lesson Talking Points
* **Local vs. Production**: what changes (URLs, credentials, data) and what must not (code) — the same codebase should run in both environments without a rewrite, only different configuration.
* **Deployment Pipelines**: triggering builds on git push events — the payoff of Session 4's discipline. A messy commit history now means a confusing deploy log later.
* **Binding Live Environment Variables**: in the cloud dashboard, never in the repo — production secrets are configured on the host, matching Session 4's `.env` discipline at production scale.

### 2. Socratic Prompting
* *"It works on your machine — why not in production? Which environment is missing what?"* (Local development usually has a `.env` file with working credentials already in place; the production environment has its own, separately-configured set. If the deployed server's `DATABASE_URL` variable is missing or wrong, connection timeouts appear in production logs even though nothing about the code itself changed.)
* *"Where is your database physically stored now? Why does the hosting country matter for privacy laws (e.g. GDPR)?"* (Data residency determines which country's privacy laws and legal jurisdiction apply to a breach, subpoena, or takedown request — a decision made the moment a hosting region is chosen, often without anyone examining it directly.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Map production connections (client fetches live server URL; server reads cloud DB credentials from the environment), draft the production env-var list and a rollback plan, then prompt the AI to generate the deployment config, deploy, and re-run the Session 7 test plan against the live URL.
* **Logical Constraints (Rules)** field: The deployment config must reference environment variable names only, with actual secret values set in the host's dashboard, not the file; the production database URL must be distinct from any local development URL.
* **Edge cases to handle** field: A blanked or wrong `DATABASE_URL` on the host must produce a clear connection error in production logs, not a silent failure.
* **Expected outcome** (sourced from the L3 curriculum doc's Tutor Manual): a blueprint/config file (e.g. `render.yaml` or platform equivalent) declaring the server service and database resource with environment bindings; production `DB_HOST`/`DB_USER`/`DB_PASS` set in the dashboard, absent from the repo.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 11 card tracks **Cloud Deployment**.

1. **Plan & Design** — *Expected:* the production data path mapped, plus a rollback plan for a broken deploy.
2. **Write AI Prompt** — *Expected:* a prompt asking for a deployment config declaring the service and its required environment variables without hardcoded secrets.
3. **Review & Explain** — *Expected:* the student explains where each secret value actually lives (host dashboard, not the repo).
4. **Test & Break** — *Expected:* the live site loads data successfully with a correct `DATABASE_URL`; temporarily blanking it on the host produces a connection error rather than silent failure.
5. **Iterate & Improve** — *Expected:* after first deploy, one credential is rotated and only the host dashboard value needs updating.

* **Homework Evaluation Checklist**: the deployment checklist must include env configuration, schema seeding, and at least two smoke tests against the live URL; reject checklists that assume local paths.

---

## Session 12: "Hardening: Logs, Load & the Release Sweep"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Log Analysis Sweeps |
| 0:15–0:35 | Board Lesson: Diagnostics & Concurrency |
| 0:35–0:55 | Design Phase: Release Checklist |
| 0:55–1:30 | Build Phase (AI Assisted): Harden & Sweep |
| 1:30–1:45 | Socratic Debugging: The Exhausted Connection Pool |
| 1:45–2:00 | Ethics: Denial of Service |

### 1. Board Lesson Talking Points
* **Request Queues and Concurrency**: 500 vs. 503 — a server error versus a server that's simply overwhelmed and temporarily can't accept more work.
* **Database Pools**: sizes, exhaustion, and release discipline — a pool has a fixed number of connections, and every checked-out connection that's never returned shrinks the effective pool for everyone else.
* **The Release Sweep as a Gate**: every PRD Must acceptance criterion checked and signed off — this session's artifact is the completed checklist, not a specific feature.

### 2. Socratic Prompting
* *"Why does the server refuse to answer after a few clicks? How many connections are open, and where were they supposed to be returned?"* (Without `client.release()` guaranteed in a `finally` block, every request that checks out a connection but never returns it shrinks the pool by one. After enough requests, the pool is exhausted and new requests simply hang waiting for a connection that will never free up.)
* *"If we can hang our own server by leaking connections, what can a hostile script do on purpose? Why is resource cleanup a security requirement, not a style preference?"* (An attacker who understands this can deliberately spam requests designed to exhaust the pool — a self-inflicted accident and a deliberate denial-of-service attack exploit the exact same gap. Resource cleanup discipline is what closes that gap either way.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Plan load thresholds (simulate 100 concurrent requests) and assemble the release checklist from the PRD's acceptance criteria, then prompt the AI to add pooling and structured logging, and execute the full release sweep against the deployed system, logging every criterion pass/fail.
* **Logical Constraints (Rules)** field: `client.release()` must be inside a `finally` block, not only after a successful query; every PRD Must acceptance criterion needs a pass/fail entry, not just the easy-to-check ones.
* **Edge cases to handle** field: A burst of 100 concurrent requests must not hang the server; the pool's connection count must return to baseline after the burst completes.
* **Expected AI output** (sourced from the L3 curriculum doc's Tutor Manual):
  ```javascript
  app.get("/stats", async (req, res) => {
    let conn = await pool.getConnection();
    try {
      let [data] = await conn.query("SELECT COUNT(*) AS total FROM players");
      res.json(data[0]);
    } catch (e) {
      res.status(500).send("Database error");
    } finally {
      conn.release(); // Return client to pool
    }
  });
  ```

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 12 card tracks **Hardening & the Release Sweep**.

1. **Plan & Design** — *Expected:* load thresholds set and the release checklist assembled from the PRD's own acceptance criteria.
2. **Write AI Prompt** — *Expected:* a prompt asking for connection pooling and structured logging additions.
3. **Review & Explain** — *Expected:* the student explains what would happen under load without the `finally`-guaranteed release.
4. **Test & Break** — *Expected:* 100 concurrent requests against the fixed route stay responsive; removing the `finally` block and repeating the test reproduces the hang.
5. **Iterate & Improve** — *Expected:* the pool's active connection count is logged before/after a burst to confirm it returns to baseline.

* **Homework Evaluation Checklist**: the `try`/`catch`/`finally` wrapper must release in `finally`; the top-3 remaining risks list must name concrete risks ("no rate limit on login"), not vague ones ("bugs").

---

## Session 13: "The Process Defense"

*(This session opens Module 4: Defense & Retrospective. It is an in-session assessment, not a build session — there is no new AI Prompt Sandbox task.)*

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Presentation Checklist |
| 0:15–1:00 | Assessment Part A: The Artifact Walkthrough |
| 1:00–1:45 | Assessment Part B: The Hostile Review |
| 1:45–2:00 | Assessment Part C: Live Diagnostics Challenge |

### 1. Tutor Guidance: Assessment Solutions
* **Part A (Artifact Walkthrough Check)**: the student presents one PRD story traced end-to-end — from its user story, through its design entries (blueprint, schema), its feature-spec prompt, its diff review, its test-plan rows, its commit/PR, to its live behavior in the deployed build. Verify every link in that chain is a real artifact the student can pull up, not a paraphrase.
* **Part B (Hostile Review Check)**: attack with concrete, specific questions — *"Why this schema? Show me where client input is trusted. Which commit fixed the purchase bug, and what was the root cause? What did you reject from the AI, and why?"* A confident non-answer ("I don't remember, but it works") should be treated as a gap, not a pass.
* **Part C (Live Diagnostics Check)**: introduce a fault (env var, validation hole, or broken query) into a copy of the project. Verify the student runs the debugging protocol *aloud* — reproduce, isolate, hypothesize, fix, re-test — rather than silently trying random fixes.

### 2. Socratic Prompting (for the Hostile Review)
* *"If asked 'what happens if this RLS or isolation check is removed,' can you describe the exact leak that would result?"* (A strong answer names the specific query or route affected and what data would become visible to whom — not a general statement that "it would be less secure.")
* *"What did you reject from the AI, and why?"* (This question separates students who audited AI output from students who accepted it wholesale. Every strong Level 3 student should have at least one concrete story of catching and rejecting an AI suggestion.)

### 3. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 13 card tracks **The Process Defense** — this is a defense session, so the "5-Step Workflow" here reflects preparation, not a new build.

1. **Plan & Design** — *Expected:* the full artifact trail (PRD, blueprints, commit history, diffs/PRs, test logs, deployed URL) is gathered and organized before the defense begins.
2. **Write AI Prompt** — *Expected:* none this session — no AI generation; this is the live defense of everything already built.
3. **Review & Explain** — *Expected:* the student can point to and explain each major security/design decision without looking it up.
4. **Test & Break** — *Expected:* the tutor's seeded runtime fault is diagnosed and patched within the time limit, using the debugging protocol out loud.
5. **Iterate & Improve** — *Expected:* the self-audit reflection names which artifact the student is most confident defending, and which felt shakiest.

* **Homework Evaluation Checklist**: the self-audit reflection must name a specific artifact for both the "most confident" and "shakiest" prompts — not a generic "it all went fine."

---

## Session 14: "Retrospective & What's Next"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Portfolio Audit |
| 0:15–0:50 | Core Lesson: Roles & the Real World |
| 0:50–1:30 | Retrospective Round-Table |
| 1:30–2:00 | Graduation & Level 4 Planning |

### 1. Board Lesson Talking Points
* **Who Owns What in a Company**: product managers own the PRD, architects own design, engineers own the build loop, QA owns test plans, DevOps owns deploy/harden. Level 3 had the student play every one of these roles solo, guided.
* **How the 12-Session Process Maps to a Real Sprint Cadence**: the Build Loop sessions (5–9) each behaved like a short sprint — spec, build, review, test, ship — the same shape used at real companies, just compressed into a single 2-hour session.
* **Publishing the Project on GitHub as a Portfolio Item**: a clean commit history, a real README, and a working deployed URL are themselves evidence of process discipline to anyone who looks at the repo later.

### 2. Socratic Prompting
* *"Which step felt like bureaucracy — and did it catch anything?"* (Encourage an honest answer. If a student says the test plan felt like busywork, ask whether it ever actually caught a bug before it shipped — often it did, even when it felt tedious in the moment.)
* *"What did the AI get wrong that your process caught?"* (This question makes the value of the process concrete and personal — every student should be able to name at least one specific moment where a spec, a diff review, or a test plan caught something the AI's first draft got wrong.)

### 3. Retrospective Round-Table Guidance
Run a structured **Keep / Problem / Try** board:
* **Keep**: which process steps genuinely helped, and should carry forward unchanged into Level 4?
* **Problem**: where did the student fight the process, or skip a step under time pressure?
* **Try**: what will the student do differently at Level 4, where the process runs with no tutor scaffolding?

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 14 card tracks **Retrospective & Level 4 Planning**.

1. **Plan & Design** — *Expected:* the full artifact trail — Prompt Journal versions, commits, PRs, test logs — reviewed as a portfolio piece.
2. **Write AI Prompt** — *Expected:* none this session — a reflection, not a prompt.
3. **Review & Explain** — *Expected:* the student names the clearest difference between their Session 1 prompts and their Session 9 prompts.
4. **Test & Break** — *Expected:* n/a — no code artifact this session.
5. **Iterate & Improve** — *Expected:* 3 specific, concrete Level 4 goals are written down (not vague aspirations like "get better at coding").

* **Homework Evaluation Checklist**: confirm the student can locate and re-read at least one artifact from each module of Level 3, and that the 3 Level 4 goals are specific enough to be checked off later.

### 5. Graduation & Level 4 Planning
Present Level 3 graduation using the rubric below. Preview Level 4: the student proposes their **own** game and runs this entire process independently — with the option of a different product track (e.g., a web application) if agreed with the teacher.

---

## Level 3 Assessment Rubric

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Requirements & Design** | PRD stories testable and prioritized; schema and API contract complete and consistently followed. | PRD solid; minor contract drift during build. | Stories vague; design exists but was frequently bypassed. | No usable PRD; design produced after the code. |
| **Process Discipline (Git & Review)** | Clean story-linked commits; every session synced and diff-reviewed; PR with meaningful description and conflict resolved. | Commits regular; reviews done but shallow in places. | Sporadic commits; reviews skipped under time pressure. | Code outside version control; no review trail. |
| **Testing & Debugging** | Test plans written before building; hostile cases included; iteration log ties bugs to root causes and fix commits. | Plans exist; some fails not followed through. | Testing ad-hoc, happy-path only. | No test plan; bugs "fixed" without diagnosis. |
| **Working Product & Deployment** | All Must stories pass live; validation, transactions, and isolation hold under attack drills. | Must stories pass locally; minor issues in production. | Core flows work partially; isolation or transaction gaps. | Product does not run end-to-end. |

**Graduation Criteria for Level 4:**
- Rubric average score of 3.0 or higher.
- A complete artifact trail: PRD, blueprints, commit/PR history, diff annotations, test logs, deployed URL.
- Can independently walk one feature through all five loop steps without tutor prompting — the exact skill Level 4 assumes on day one.

