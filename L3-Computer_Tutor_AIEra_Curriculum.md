## 7. Level 3: Advanced — "The Development Process" (guided project: Cyberpunk Hacker Arena)

**Goal:** Learn how real software gets built — requirements, system design, version control, the AI build loop, code review, testing, debugging, and deployment — by walking **one guided project** (the Cyberpunk Hacker Arena: a persistent hacking console with accounts, inventories, and purchases) through the complete development lifecycle. Level 3 introduces almost no new syntax: it *applies* the technical knowledge from Levels 1–2 and adds the **process** that turns knowledge into products.

**Prerequisites:** Level 2 completion (students must already understand arrays/objects, canvas, fetch/async, HTTP, SQL basics, and the client-server trust boundary).

> **Restructure note (2026-07-13):** Level 3 was repositioned from a "backend & database syntax" level to **the development-process level**. Database/API *fundamentals* moved down to Level 2 in simplified form; here students use them for real, inside a process. The Cyberpunk Hacker Arena is the **default guided project track** — the process curriculum (PRD ➔ design ➔ build loop ➔ ship) is deliberately track-agnostic, so a different product (e.g., a web application) can be swapped in later without changing the session structure.
>
> **This is the first level with a real, multi-session project.** Git starts here. The platform's diff-based code review ("Sync Latest Code") starts here. The local MySQL server (Servbay/XAMPP) is installed here, when the project first needs persistence.

### 🕶️ The Guided Project: Cyberpunk Hacker Arena

A scoped, teacher-guided full-stack build: players register, log in, browse hacking tools, and buy them with credits — a persistent console backed by Express + MySQL. The product is deliberately modest; **the process is the curriculum**. Every build session (5–9) runs the full 5-Step loop on one feature and introduces one new process skill:

| Sessions | Phase | Process Skills Introduced |
|----------|-------|---------------------------|
| 1–4 | From Idea to Plan | Lifecycle & roles, PRD writing, architecture blueprints, Git & workspace setup |
| 5–9 | The Build Loop | Feature specs & project-scale prompting, diff review, test plans, debugging cycles, branches & PRs |
| 10–12 | Integrate, Deploy & Polish | Integration sweeps, cloud deployment, hardening & release QA |
| 13–14 | Defense & Retrospective | Presenting process artifacts, running a retrospective |

### Module 1: From Idea to Plan (Sessions 1–4)

---

#### Session 1: "How Software Gets Built: The Development Lifecycle" (2 hours)

**Learning Objectives:**
- Describe the phases of a software project: requirements ➔ design ➔ build ➔ test ➔ deploy ➔ iterate
- Map the 5-Step AI-Era loop (Plan ➔ Prompt ➔ Review ➔ Test ➔ Iterate) onto the professional lifecycle
- Explore the finished Hacker Arena demo as users and as reverse-engineers, and state what will be built

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Play the Finished Product (15 mins)**
   - *Activity*: The tutor demos their own completed Hacker Arena build. The student plays it: registers, logs in, buys a tool, sees credits drop.
   - *Debrief*: This is the destination. Everything played in 5 minutes will take 12 sessions to build properly — and that ratio is normal in real engineering.
2. **Core Concept Board Lesson: The Lifecycle & The Loop (20 mins)**
   - *Topic 1*: The lifecycle phases and why order matters (requirements before design, design before code).
   - *Topic 2*: The 5-Step AI loop as the *inner cycle* that runs inside every build phase.
   - *Topic 3*: Engineering roles (product, frontend, backend, DBA, QA, DevOps) — at L3 the student plays all of them, guided.
3. **Deconstruction Phase: Reverse-Engineering the Demo (20 mins)**
   - *Activity*: With DevTools open (Network tab — Session 8 of Level 2 skills), the student maps the demo's moving parts: which requests fire on login? On purchase? Where must a database be involved?
   - *Action*: Draft a first-guess component list: pages, API endpoints, tables.
4. **Planning Phase (AI Assisted): The Project Charter (35 mins)**
   - *Action*: Student writes a one-page Project Charter (what we're building, for whom, what "done" means) in the platform's Plan form; prompts the AI IDE to critique the charter for vagueness, then tightens it.
   - *Audit*: Record the charter and the AI critique in the Prompt Journal.
5. **Socratic Debrief: The Skipped-Phase Disaster (15 mins)**
   - *Activity*: Tutor tells a war story (or shows a mock transcript) of a team that started coding with no requirements and shipped the wrong product.
   - *Socratic Question*: *"The code in that story worked perfectly. Why did the project still fail? Which phase was skipped?"*
6. **Ethics: Building the Right Thing (15 mins)**
   - *Real-World Case*: In 2013, HealthCare.gov launched after skipping integration testing phases under deadline pressure — it collapsed on day one under real users, becoming a $1.7B lesson in process discipline.
   - *Discussion*: *"Who gets hurt when engineers skip process steps to go faster? When is 'move fast' irresponsible?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 1 Homework", write the lifecycle phases in order, and for each phase, one sentence on what the Hacker Arena will need in that phase.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 1)
- **Exercise 1.1 (Lifecycle Ordering) Solution**: Requirements ➔ Design ➔ Build ➔ Test ➔ Deploy ➔ Iterate. Accept "Test" woven into "Build" if the student explains the 5-Step loop runs inside every feature.
- **Exercise 1.2 (Demo Deconstruction) Solution**: Expected component list: login/register page, arena/shop page, endpoints like `POST /signup`, `POST /login`, `GET /tools`, `POST /purchase`, tables `players`, `hacking_tools`, `inventories`.
- **Homework Evaluation**: Each phase must name a concrete Hacker Arena artifact (e.g., Design ➔ "table schema for players and tools").

---

#### Session 2: "Mission Briefing: Requirements & the PRD" (2 hours)

**Learning Objectives:**
- Turn a vague product idea into user stories with acceptance criteria
- Prioritize scope with Must/Should/Could (MoSCoW) and defend the cut line
- Produce the Hacker Arena PRD — the document every later session will be audited against

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: The Ambiguous Client (15 mins)**
   - *Activity*: The tutor plays a client who says only "I want a cool hacker game with shopping." The student must extract requirements by asking questions; the tutor answers only what is asked.
   - *Debrief*: Requirements are *pulled*, not given. Ambiguity survives until someone writes it down.
2. **Core Concept Board Lesson: User Stories & Acceptance Criteria (20 mins)**
   - *Topic 1*: The story template: *As a [player], I want [to buy a tool] so that [my deck gets stronger].*
   - *Topic 2*: Acceptance criteria as testable statements ("purchase fails with a visible message if credits are insufficient").
   - *Topic 3*: MoSCoW prioritization and the scope cut line — why "Could" features die first.
3. **Design Phase: Drafting the PRD (20 mins)**
   - *Activity*: Draft the Hacker Arena PRD skeleton: goal, users, 6–10 user stories, priorities, out-of-scope list.
   - *Action*: Mark each story Must/Should/Could and write acceptance criteria for every Must.
4. **Build Phase (AI Assisted): PRD Hardening (35 mins)**
   - *Action*: Prompt the AI to attack the PRD: find untestable criteria, hidden assumptions, missing failure cases. Student accepts/rejects each finding and revises.
   - *Audit*: Final PRD saved to the platform Plan form; AI findings and responses logged in the Prompt Journal.
5. **Socratic Debugging: The Untestable Requirement (15 mins)**
   - *Activity*: Tutor plants a requirement like "the login should be fast and secure."
   - *Challenge*: Student rewrites it into measurable criteria (responds within N ms; passwords hashed; lockout after N failures).
   - *Socratic Question*: *"How would a tester prove 'fast and secure' is done? If it can't be proven done, what is it?"*
6. **Ethics: Scope Honesty (15 mins)**
   - *Discussion*: *"A client asks for 20 features in the time 8 fit. Is it more ethical to promise everything and fail quietly, or to negotiate the cut line up front? What do engineers owe non-technical stakeholders?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 2 Homework", write two additional user stories for the Hacker Arena (one Must, one Could) with acceptance criteria, and one sentence defending why each sits at that priority.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 2)
- **Exercise 2.1 (Story Rewrite) Solution**: "Cool shopping" ➔ *As a player, I want to buy a hacking tool with credits so that it appears in my inventory.* Criteria: tool appears in inventory after purchase; credits decrease by exactly the tool cost; purchase rejected with message if credits < cost.
- **Exercise 2.2 (MoSCoW Cut) Solution**: Must: register, login, list tools, purchase. Should: inventory view, credit balance display. Could: leaderboard, tool trading, avatars. (Accept variations with coherent defense.)
- **Homework Evaluation**: Criteria must be observable/testable — reject adjectives without numbers or behaviors.

---

#### Session 3: "System Design: Architecture Blueprints" (2 hours)

**Learning Objectives:**
- Draw the three-tier architecture (client ➔ Express server ➔ MySQL) and trace each PRD story through it
- Design the relational schema (`players`, `hacking_tools`, `inventories`) with primary/foreign keys
- Draft the API contract: endpoints, methods, payloads, status codes — before any code exists

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Relational Schema Match (15 mins)**
   - *Activity*: In-app diagramming tool. Connect tools to players via primary and foreign key nodes.
   - *Debrief*: The schema is the load-bearing wall — cheaper to move now, on paper, than after data exists.
2. **Core Concept Board Lesson: Designing Before Building (20 mins)**
   - *Topic 1*: Component diagrams: what talks to what, and what is *forbidden* from talking to what (the client never touches the DB).
   - *Topic 2*: Relational modeling: one-to-many and many-to-many; constraints (UNIQUE, NOT NULL, foreign keys, cascade deletes).
   - *Topic 3*: API contracts as promises: endpoint + method + payload + status codes, written down before implementation.
3. **Design Phase: The Arena Blueprint (20 mins)**
   - *Activity*: Design tables for `players`, `hacking_tools` (id, name, speed_rating, cost), and `inventories` (player_id, tool_id); map every PRD Must-story to endpoints.
   - *Action*: Draft the schema and the API contract sheet.
4. **Build Phase (AI Assisted): Generating & Auditing the Schema (35 mins)**
   - *Action*: Prompt AI to generate the SQL schema from the design; audit it against the blueprint (keys, constraints, types) — the first exercise of auditing AI output *against your own design* rather than in isolation.
   - *Audit*: Explain each table relationship in the Prompt Journal; note every place the AI deviated from the blueprint.
5. **Socratic Debugging: The Floating Record (15 mins)**
   - *Activity*: Tutor removes the foreign key constraint on `inventories`. A player is deleted, but their inventory rows remain stranded.
   - *Socratic Question*: *"Why does the database still list tools for a player who no longer exists? What is the role of foreign keys and cascade deletes?"*
6. **Ethics: Data Privacy & Sensitivity Classification (15 mins)**
   - *Real-World Case*: The Equifax breach (2017) exposed personal data of 147 million people because sensitive fields were stored without adequate access controls.
   - *Discussion*: *"In our schema, what is public (tool list) vs private (inventories, credentials)? Why must classification happen at design time, not after launch?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 3 Homework", sketch a 3-table relational schema for a virtual card marketplace, indicating primary and foreign keys, and list its API contract (4+ endpoints with methods and status codes).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 3)
- **Exercise 3.1 (SQL Schema) Solution**:
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
- **Exercise 3.2 (API Contract) Solution** (minimum): `POST /signup` (201/400), `POST /login` (200/401), `GET /tools` (200), `GET /inventory` (200/401), `POST /purchase` (200/400/401).
- **Homework Evaluation**: Child tables must reference parents via foreign keys; the contract must give each endpoint a failure status, not just the happy path.

---

#### Session 4: "Base Camp: Git, Repos & the Workspace" (2 hours)

**Learning Objectives:**
- Initialize the project repository: `git init`, `git add`, `git commit`, and connect it to GitHub with `git push`
- Structure the workspace (frontend/, server/, db/) and protect secrets with `.gitignore` + `.env`
- Stand up the local MySQL server (Servbay/XAMPP) and apply the Session 3 schema

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: The Time Machine Demo (15 mins)**
   - *Activity*: Tutor breaks a file in a demo repo, then restores it instantly from history; then shows the commit log of a real open-source project.
   - *Debrief*: Version control is the profession's undo button and its diary. From today, *every* AI coding session ends with a commit.
2. **Core Concept Board Lesson: Repositories & Secrets (20 mins)**
   - *Topic 1*: The commit as a snapshot; staging area; writing commit messages that describe *why*.
   - *Topic 2*: Remote repos: push/pull; why the platform will read this repo for code review from Session 6 onward.
   - *Topic 3*: Secrets containment: `.env` files, `process.env`, and `.gitignore` — why credentials must never enter history (history is forever).
3. **Design Phase: Workspace Layout (20 mins)**
   - *Activity*: Plan the folder structure and what gets committed vs ignored (node_modules, .env).
   - *Action*: Draft the `.gitignore` list and the `.env` key template (DB_HOST, DB_USER, DB_PASS).
4. **Build Phase (Guided + AI Assisted): Standing Up Base Camp (35 mins)**
   - *Action*: Student runs `git init`, makes the initial commit, creates the GitHub repo, pushes; installs/starts MySQL via Servbay, creates the database, applies the Session 3 schema; teacher links the repo to the platform.
   - *Audit*: Verify on GitHub that `.env` is absent and history shows clean commits; record the setup steps in the Prompt Journal.
5. **Socratic Debugging: The Leaked Key (15 mins)**
   - *Activity*: In a throwaway demo repo, tutor commits a fake API key, then deletes it in a later commit — and shows it still visible in history.
   - *Socratic Question*: *"The key is gone from the file — is it gone from the repo? What must happen once a real secret is pushed?"* (Answer: rotate/revoke the secret; deletion is not containment.)
6. **Ethics: Code Leakage & AI Tools (15 mins)**
   - *Real-World Case*: In 2022, a Samsung engineer pasted proprietary source code into ChatGPT, exposing trade secrets — a reminder that prompts are *disclosures*.
   - *Discussion*: *"What belongs in an AI prompt, and what never does? How will you keep credentials out of your Cursor sessions?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 4 Homework", write the exact command sequence to stage and commit a change and push it to GitHub, plus a mock `.env` with 3 secrets and the code line that loads one of them.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 4)
- **Exercise 4.1 (First Commit) Solution**: `git init` ➔ `git add .` ➔ `git commit -m "chore: initial workspace structure"` ➔ `git remote add origin <url>` ➔ `git push -u origin main`.
- **Exercise 4.2 (.env + loader) Solution**:
  ```env
  DB_HOST=localhost
  DB_USER=arena_admin
  DB_PASS=super_secure_password_123
  ```
  ```javascript
  require("dotenv").config();
  const dbPassword = process.env.DB_PASS;
  ```
- **Homework Evaluation**: `.gitignore` must include `.env` and `node_modules/`; commit message must describe intent, not "changes".

---

### Module 2: The Build Loop (Sessions 5–9)

*(Each session builds one PRD feature by running the full 5-Step loop — Plan ➔ Prompt ➔ Review ➔ Test ➔ Iterate — and adds one professional process skill. Every session ends with a commit; from Session 6, every session starts with the platform's diff review of the previous commit.)*

---

#### Session 5: "Build Loop I: Feature Specs & Prompting at Project Scale — The Login Gate" (2 hours)

**Learning Objectives:**
- Convert a PRD story into a feature spec an AI IDE can implement inside an *existing* codebase
- Build the register/login flow: forms ➔ POST routes ➔ hashed passwords (bcrypt) ➔ MySQL
- Commit the feature with a message linked to its PRD story

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Password Hashing Trace (15 mins)**
   - *Activity*: Compare raw password strings with their hashed equivalents (recap of Level 2 Session 12 awareness, now made real).
2. **Core Concept Board Lesson: The Feature Spec (20 mins)**
   - *Topic 1*: Anatomy of a feature spec: story reference, files affected, inputs/outputs, constraints, out-of-scope.
   - *Topic 2*: Prompting *inside a codebase*: giving the AI the schema, the contract, and the constraint list — context is the difference between project code and generic code.
   - *Topic 3*: The auth chain: form ➔ POST ➔ validate ➔ hash (bcrypt) ➔ INSERT; login compares hashes, never plaintext.
3. **Design Phase: Spec the Login Gate (20 mins)**
   - *Activity*: Write the feature spec for register + login from the PRD's Must stories, including failure behaviors (duplicate username, short password).
4. **Build Phase (AI Assisted): Implement & Audit (35 mins)**
   - *Action*: Run the spec through the AI IDE; audit output against spec, schema, and contract; fix deviations via follow-up prompts.
   - *Audit*: Log spec, prompts, deviations, and fixes in the Prompt Journal. End with `git commit -m "feat: register/login (PRD-1)"`.
5. **Socratic Debugging: The Plaintext Leak (15 mins)**
   - *Activity*: Tutor swaps the hash call for direct string insertion.
   - *Socratic Question*: *"If attackers dump the table tonight, what do they have — and whose fault is it? Why is hashing non-negotiable even in a class project?"*
6. **Ethics: Credential Reuse (15 mins)**
   - *Real-World Case*: LinkedIn's 2012 breach exposed 6.5M unsalted SHA-1 hashes, cracked within hours.
   - *Discussion*: *"Users reuse passwords. What does that make every credentials table — and every developer who stores one?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 5 Homework", write a feature spec (story, files, I/O, constraints, out-of-scope) for a "change password" endpoint — spec only, no code.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 5)
- **Exercise 5.1 (Signup route) Solution**:
  ```javascript
  app.post("/signup", async (req, res) => {
    let { username, password } = req.body;
    if (password.length < 8) { return res.status(400).send("Too short"); }
    let hashedPassword = await bcrypt.hash(password, 10);
    await db.query("INSERT INTO players (username, password) VALUES (?, ?)", [username, hashedPassword]);
    res.status(201).send("Registered");
  });
  ```
- **Homework Evaluation**: Spec must include old-password verification as a constraint and name its failure statuses (400/401). Reject specs that are prose paragraphs with no testable behaviors.

---

#### Session 6: "Build Loop II: Diff-Based Code Review — The Tool Shop API" (2 hours)

**Learning Objectives:**
- Review code as professionals do: by diff, not by full file — using the platform's "Sync Latest Code" `git diff` view
- Build the tool-catalog and inventory endpoints (`GET /tools`, `GET /inventory`, JOIN query)
- Apply a review checklist (correctness vs. spec, security, naming, dead code) and annotate findings

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Spot the Change (15 mins)**
   - *Activity*: Two near-identical 60-line files on screen; student hunts differences by eye for 3 painful minutes — then the tutor shows the same pair as a colour-coded diff.
   - *Debrief*: Nobody reviews by rereading everything. Diffs show *only what changed* — this is how Pull Requests work in industry.
2. **Core Concept Board Lesson: Reading Diffs (20 mins)**
   - *Topic 1*: Diff anatomy: additions, deletions, context lines, file headers.
   - *Topic 2*: The review checklist: does it match the spec? does it trust client input? is anything changed that the spec didn't ask for?
   - *Topic 3*: The platform workflow: commit ➔ "Sync Latest Code" ➔ annotate the diff ➔ TA/tutor cross-check.
3. **Design Phase: Spec the Shop (20 mins)**
   - *Activity*: Feature spec for `GET /tools` and `GET /inventory` (the JOIN across `inventories`/`players`/`hacking_tools`), per the API contract.
4. **Build Phase (AI Assisted): Implement, Sync, Review (35 mins)**
   - *Action*: Implement via AI IDE; commit; sync into the platform; review the *diff* line-by-line with the checklist, annotating at least three findings (even "verified correct" counts).
   - *Audit*: Diff annotations saved; unexplained AI changes flagged and either justified or reverted.
5. **Socratic Debugging: The Smuggled Change (15 mins)**
   - *Activity*: Tutor's prepared diff contains one line the spec never asked for (an extra route, or a widened WHERE clause).
   - *Socratic Question*: *"The feature works. So why is this diff dangerous to approve? What does 'out of scope' mean in a review?"*
6. **Ethics: Review Accountability (15 mins)**
   - *Discussion*: *"If you approve a diff without reading it and it ships a security hole, who is responsible — the author, the AI, or the approver? What does your approval actually certify?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 6 Homework", review the provided 20-line diff (seeded with one spec deviation and one unsafe query) and write your findings as review comments.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 6)
- **Exercise 6.1 (JOIN Query) Solution**:
  ```sql
  SELECT players.username, hacking_tools.name, hacking_tools.cost
  FROM inventories
  JOIN players ON inventories.player_id = players.id
  JOIN hacking_tools ON inventories.tool_id = hacking_tools.id
  WHERE players.id = ?;
  ```
- **Homework Evaluation**: Student must catch both seeds: the endpoint not present in the contract, and the query concatenating user input instead of using a placeholder (Level 2 Session 12 knowledge, now applied in review).

---

#### Session 7: "Build Loop III: Test Plans & Break-It QA — The Zero-Trust Server" (2 hours)

**Learning Objectives:**
- Write a test plan *before* building: happy path, boundary cases, hostile cases, expected status codes
- Build server-side validation guards (types, ranges, existence) returning correct 400/401/404 codes
- Execute the plan, log pass/fail results, and treat every fail as a work item

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Parameter Sanity Checks (15 mins)**
   - *Activity*: Audit a mock request payload to find values that could corrupt the DB (string cost, negative quantity, 10,000-character username).
2. **Core Concept Board Lesson: Testing as a Plan, Not a Vibe (20 mins)**
   - *Topic 1*: The test-case table: input ➔ expected result ➔ actual result ➔ pass/fail.
   - *Topic 2*: The zero-trust backend: frontend validation is UX, server validation is security (bypassing forms via DevTools).
   - *Topic 3*: Status code discipline: 400 bad input, 401 unauthenticated, 404 missing, 500 = *our* bug.
3. **Design Phase: The Test Plan (20 mins)**
   - *Activity*: Write the validation spec and 10+ test cases for `POST /purchase` inputs *before any implementation* — including the hostile cases from the warm-up.
4. **Build Phase (AI Assisted): Guards + Execution (35 mins)**
   - *Action*: Implement validation guards via AI IDE; audit; then execute the full test plan against the running server, logging results in the platform's test checklist.
   - *Audit*: Every fail becomes a follow-up prompt and a re-test; commit when the table is green.
5. **Socratic Debugging: The Free Credits Hack (15 mins)**
   - *Activity*: Tutor removes price validation; a payload with cost `-100` *increases* the player's balance.
   - *Socratic Question*: *"Every line executed correctly — where is the bug? What assumption did the code make about the client?"*
6. **Ethics: Exploits & Blame (15 mins)**
   - *Discussion*: *"If validation has holes and players exploit them, is it the player's fault or the coder's? Does 'nobody would ever send that' survive contact with the internet?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 7 Homework", write a 6-case test plan (2 happy, 2 boundary, 2 hostile) for the login endpoint, with expected status codes.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 7)
- **Exercise 7.1 (Validation Guard) Solution**:
  ```javascript
  router.post("/buy-tool", async (req, res) => {
    let { player_id, tool_id, quantity } = req.body;
    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).send("Invalid quantity: Must be positive integer");
    }
    // Perform database operations...
  });
  ```
- **Homework Evaluation**: Hostile cases must include at least one type attack (non-string/oversized input) and one auth attack (valid format, wrong password ➔ 401 not 400).

---

#### Session 8: "Build Loop IV: Debugging & Iteration Cycles — The Atomic Purchase" (2 hours)

**Learning Objectives:**
- Apply a debugging protocol: reproduce ➔ isolate ➔ hypothesize ➔ fix ➔ re-test ➔ log
- Implement the credit-to-item purchase as a database transaction (BEGIN/COMMIT/ROLLBACK)
- Maintain an iteration log connecting each bug to its root cause and fix commit

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Partial Write Simulation (15 mins)**
   - *Activity*: Walk through a purchase where the server takes credits, then crashes before granting the tool. Where did the credits go?
2. **Core Concept Board Lesson: Debugging as Process + ACID (20 mins)**
   - *Topic 1*: The debugging protocol — and why "change things until it works" is not debugging.
   - *Topic 2*: Atomicity: all queries succeed or all roll back; BEGIN/COMMIT/ROLLBACK.
   - *Topic 3*: The iteration log (Step 5 of the loop) as an engineering artifact: symptom ➔ root cause ➔ fix ➔ commit hash.
3. **Design Phase: Transaction Flowchart (20 mins)**
   - *Activity*: Draw the purchase flow with rollback triggers (insufficient credits, missing tool, mid-write crash).
4. **Build Phase (AI Assisted): Implement & Hunt (35 mins)**
   - *Action*: Implement the transactional purchase via AI IDE; the tutor then activates two seeded bugs in a provided branch; student runs the full debugging protocol on both.
   - *Audit*: Iteration log entries for both bugs with root causes and fix commits.
5. **Socratic Debugging: The Credit Theft Glitch (15 mins)**
   - *Activity*: Simulated crash mid-purchase deducts credits without granting the card, with no rollback.
   - *Socratic Question*: *"Why did the player lose credits and get nothing? How does BEGIN/COMMIT make this impossible?"*
6. **Ethics: Transaction Integrity (15 mins)**
   - *Real-World Case*: Knight Capital (2012) lost $440M in 45 minutes to a deployment/rollback failure executing 4 million unintended trades.
   - *Discussion*: *"Why is atomic rollback mandatory in money systems? What does 'the system must never half-happen' mean?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 8 Homework", write a JS transaction script: BEGIN, check credits, deduct, insert item, COMMIT — with ROLLBACK on error — plus one iteration-log entry for a bug you fixed this week.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 8)
- **Exercise 8.1 (Purchase Transaction) Solution**:
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
- **Homework Evaluation**: Rollback must run in the catch path; the iteration-log entry must name a root cause, not just a symptom ("the guard used > instead of >=", not "purchase was broken").

---

#### Session 9: "Build Loop V: Branches, Merges & Pull Requests" (2 hours)

**Learning Objectives:**
- Develop a feature on a branch (`git checkout -b`), push it, and open a Pull Request
- Resolve a merge conflict deliberately (read markers, choose lines, re-test, commit)
- Review a PR diff with the Session 6 checklist — the level's review mechanism now escalates from raw diffs to PRs

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Merge Conflict Match (15 mins)**
   - *Activity*: Identify Git conflict markers (`<<<<<<< HEAD` vs `>>>>>>> branch`) and choose the correct resolution lines.
2. **Core Concept Board Lesson: Branch Workflow (20 mins)**
   - *Topic 1*: Why branches exist: main stays shippable; work happens on the side.
   - *Topic 2*: The PR as a *reviewable unit of change* with a description tied to its PRD story.
   - *Topic 3*: The lifecycle: branch ➔ commits ➔ push ➔ PR ➔ review ➔ merge.
3. **Design Phase: Feature Branch Plan (20 mins)**
   - *Activity*: Pick a Should-priority PRD feature (e.g., credit balance display, inventory sorting); spec it; plan the branch name and PR description.
4. **Build Phase (AI Assisted): Branch, Build, PR (35 mins)**
   - *Action*: Build the feature on the branch via AI IDE; push; open the PR; review own diff on GitHub with the checklist; tutor triggers a merge conflict with a parallel change to the same route; student resolves it.
   - *Audit*: PR link and conflict-resolution reasoning recorded in the Prompt Journal.
5. **Socratic Debugging: The Scrambled Merge Crash (15 mins)**
   - *Activity*: Server crashes on startup — conflict markers were committed into a code file.
   - *Socratic Question*: *"What are these <<<<<<< lines? Why did Git refuse to decide for you — and what would it mean if it had?"*
6. **Ethics: Team Memory (15 mins)**
   - *Discussion*: *"A year from now, someone reads your PR description to understand why this change exists. What do you owe that future reader? What does a useless description ('fixed stuff') cost a team?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 9 Homework", list the git commands to create a feature branch, push it, and merge it back to main after review — and write a model PR description (what/why/how tested) for this week's feature.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 9)
- **Exercise 9.1 (Conflict Resolution) Solution**: Open the conflicted file, remove `<<<<<<< HEAD`, `=======`, `>>>>>>> branch-name`, keep the correct lines (usually a synthesis of both edits), re-run the server, then `git add .` and `git commit`.
- **Homework Evaluation**: Sequence: `git checkout -b feature-x` ➔ work/commits ➔ `git push -u origin feature-x` ➔ PR ➔ `git checkout main` ➔ `git merge feature-x` (or merge via GitHub). PR description must state what changed, why, and how it was tested.

---

### Module 3: Integrate, Deploy & Polish (Sessions 10–12)

---

#### Session 10: "The Integration Sprint: End-to-End Data Flows" (2 hours)

**Learning Objectives:**
- Verify every PRD Must-story end-to-end: Frontend form ➔ Express route ➔ validation ➔ transaction ➔ DB write ➔ response ➔ UI update
- Resolve integration bugs that live *between* components (mismatched payload keys, wrong status handling)
- Enforce per-user data isolation: players can read everyone's tool catalog but only their *own* inventory

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Integration Checkpoints Map (15 mins)**
   - *Activity*: Outline the full data-flow checklist for the purchase story, marking every boundary a bug could hide behind.
2. **Core Concept Board Lesson: Integration & Isolation (20 mins)**
   - *Topic 1*: Why components that pass their own tests still fail together — contracts drift.
   - *Topic 2*: Data isolation: every inventory query filters by the *authenticated* player id from the session/token — never an id the client supplied in the payload.
   - *Topic 3*: (Awareness) Database-engine enforcement of isolation — Row-Level Security in PostgreSQL/Supabase — as the professional belt-and-braces layer.
3. **Core Activity: The Integration Sprint (50 mins)**
   - *Action*: Run every Must-story end-to-end against the checklist; fix gaps; verify tables initialized, env keys loaded, isolation filters active. Commit fixes with story-referenced messages.
4. **Audit: Cross-User Attack Drill (20 mins)**
   - *Activity*: Student logs in as player A and attempts to fetch/modify player B's inventory by editing request payloads (DevTools). Every attempt must fail with 401/403.
   - *Socratic Question*: *"Why must the server take the player id from the session and not from the request body? Who controls the request body?"*
5. **Ethics: Mass Data Leaks (15 mins)**
   - *Real-World Case*: The 2019 Capital One breach exposed 106 million records via a single misconfigured access rule.
   - *Discussion*: *"One forgotten isolation filter = every user's data. Why do professionals enforce isolation in more than one layer?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 10 Homework", write a QA integration log summarizing test outputs for your registration and tool-purchase flows (statuses observed, bugs found, commits that fixed them).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 10)
- **Exercise 10.1 (Isolation Filter) Solution**: Inventory route must use the authenticated id: `... WHERE player_id = ?` bound to `req.session.playerId` (or the verified token's id) — *never* `req.body.player_id` or `req.query.player_id`.
- **Homework Evaluation**: Log must report 201 on registration, 200 on purchase, and at least one *rejected* cross-user attempt with its status code.

---

#### Session 11: "Ship It: Deploying to the Cloud" (2 hours)

**Learning Objectives:**
- Understand hosting architectures: static client hosting vs. server hosting vs. managed databases
- Deploy the Arena's backend and database to a cloud platform, binding production environment variables
- Verify the deployed system with the Session 7 test plan re-run against the live URL

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Hosting Options Map (15 mins)**
   - *Activity*: Match application elements (client code, Express server, MySQL data) to hosting types (CDN, container/dyno, managed DB).
2. **Core Concept Board Lesson: Cloud Infrastructure Models (20 mins)**
   - *Topic 1*: Local vs. production: what changes (URLs, credentials, data) and what must not (code).
   - *Topic 2*: Deployment pipelines triggering builds on git push events — the payoff of Session 4's discipline.
   - *Topic 3*: Binding live environment variables in the cloud dashboard; production secrets never live in the repo.
3. **Design Phase: Deployment Blueprint (20 mins)**
   - *Activity*: Map production connections: client fetches live server URL; server reads cloud DB credentials from the environment.
   - *Action*: Draft the production env-var list and a rollback plan ("what do we do if the deploy is broken?").
4. **Build Phase (AI Assisted): Deploy & Verify (35 mins)**
   - *Action*: Prompt AI to generate the deployment config for the chosen host; deploy; re-run the Session 7 test plan against the live URL; record results.
   - *Audit*: Live URL, config diffs, and test results logged in the Prompt Journal.
5. **Socratic Debugging: The Broken Cloud Connection (15 mins)**
   - *Activity*: Tutor deletes the server's cloud DB host variable; the live site throws connection timeouts while localhost works perfectly.
   - *Socratic Question*: *"It works on your machine — why not in production? Which environment is missing what?"*
6. **Ethics: Data Sovereignty (15 mins)**
   - *Discussion*: *"Where is your database physically stored now? Why does the hosting country matter for privacy laws (e.g., GDPR)? Who can subpoena your players' data?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 11 Homework", write a deployment checklist (repo link, env vars, schema seeding, smoke tests) that a classmate could follow to deploy your project without asking you anything.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 11)
- **Exercise 11.1 (Deploy Config) Solution**: A blueprint/config file (e.g. `render.yaml` or platform equivalent) declaring the server service and database resource with environment bindings; production `DB_HOST`/`DB_USER`/`DB_PASS` set in the dashboard, absent from the repo.
- **Homework Evaluation**: Checklist must include env configuration, schema seeding, and at least two smoke tests against the live URL; reject checklists that assume local paths.

---

#### Session 12: "Hardening: Logs, Load & the Release Sweep" (2 hours)

**Learning Objectives:**
- Read server stack traces and production logs to locate failing lines and inputs
- Guard resources under load: connection pooling and guaranteed client release (`finally`)
- Run a release-readiness sweep: regression pass, security spot-checks, and PRD acceptance sign-off

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Log Analysis Sweeps (15 mins)**
   - *Activity*: Trace server logs to find the line numbers and inputs behind three stack-trace exceptions.
2. **Core Concept Board Lesson: Diagnostics & Concurrency (20 mins)**
   - *Topic 1*: Request queues and concurrency; 500 vs 503.
   - *Topic 2*: Database pools: sizes, exhaustion, and release discipline.
   - *Topic 3*: The release sweep as a gate: every PRD Must acceptance criterion checked and signed off.
3. **Design Phase: Release Checklist (20 mins)**
   - *Activity*: Plan load thresholds (simulate 100 concurrent requests) and assemble the release checklist from the PRD's acceptance criteria.
4. **Build Phase (AI Assisted): Harden & Sweep (35 mins)**
   - *Action*: Prompt AI to add pooling and structured logging; then execute the full release sweep against the deployed system, logging every criterion pass/fail.
   - *Audit*: The signed-off checklist is this session's artifact; failures become the final fix commits.
5. **Socratic Debugging: The Exhausted Connection Pool (15 mins)**
   - *Activity*: Tutor removes client release calls; after 10 reloads the server hangs indefinitely.
   - *Socratic Question*: *"Why does the server refuse to answer after a few clicks? How many connections are open, and where were they supposed to be returned?"*
6. **Ethics: Denial of Service (15 mins)**
   - *Discussion*: *"If we can hang our own server by leaking connections, what can a hostile script do on purpose? Why is resource cleanup a security requirement, not a style preference?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 12 Homework", write a try/catch/finally wrapper that executes a query and always releases the client — plus your top-3 remaining risks going into the defense.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 12)
- **Exercise 12.1 (Release Pool Client) Solution**:
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
- **Homework Evaluation**: Release must be in `finally`; the risk list must name concrete risks ("no rate limit on login"), not vague ones ("bugs").

---

### Module 4: Defense & Retrospective (Sessions 13–14)

---

#### Session 13: "The Process Defense" (2 hours)

**Learning Objectives:**
- Present the project *through its process artifacts*: PRD ➔ blueprints ➔ commit history ➔ diffs/PRs ➔ test logs ➔ deployed build
- Defend design and security decisions in a hostile code-review walkthrough
- Diagnose and patch a live fault under time pressure using the debugging protocol

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Presentation Checklist (15 mins)**
   - *Activity*: Final verification of the live deployed console and the artifact trail.
2. **Assessment Part A: The Artifact Walkthrough (45 mins)**
   - Present the journey: one PRD story traced from its user story, through its design entries, its feature-spec prompt, its diff review, its test-plan rows, its commits/PR, to its behavior in the live build.
3. **Assessment Part B: The Hostile Review (45 mins)**
   - The tutor attacks: *"Why this schema? Show me where client input is trusted. Which commit fixed the purchase bug, and what was the root cause? What did you reject from the AI, and why?"*
4. **Assessment Part C: Live Diagnostics Challenge (15 mins)**
   - Tutor introduces a fault (env var, validation hole, or broken query) into a copy of the project; student runs the debugging protocol aloud and patches it.

---

#### Session 14: "Retrospective & What's Next" (2 hours)

**Learning Objectives:**
- Run a structured retrospective (Keep / Problem / Try) on the whole project
- Connect each process skill to the engineering roles that own it in industry
- Prepare for Level 4: same process, run independently, on the student's own game

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Portfolio Audit (15 mins)**
   - *Activity*: Review the full artifact trail — Prompt Journal versions, commits, PRs, test logs — as a portfolio piece.
2. **Core Lesson: Roles & the Real World (35 mins)**
   - *Topic 1*: Who owns what in a company: product managers (PRD), architects (design), engineers (build loop), QA (test plans), DevOps (deploy/harden).
   - *Topic 2*: How the 12-session process maps to a real sprint cadence.
   - *Topic 3*: Publishing the project on GitHub as a portfolio item.
3. **Retrospective Round-Table (40 mins)**
   - *Activity*: Keep/Problem/Try board: what process steps helped, where the student fought the process, what they will do differently at Level 4.
   - *Discussion*: *"Which step felt like bureaucracy — and did it catch anything? What did the AI get wrong that your process caught?"*
4. **Graduation & Level 4 Planning (30 mins)**
   - *Action*: Present Level 3 graduation. Preview Level 4: the student proposes their **own** game and runs this entire process independently — with the option of a different product track (e.g., a web application) if agreed with the teacher.

**Level 3 Assessment Rubric**

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

---
