## 8. Level 4: Capstone — "The Capstone Build" (develop an actual game)

**Goal:** Develop an **actual, complete, deployed game** — proposed, designed, built, tested, shipped, and defended by the student. Level 4 adds the professional engineering practices that separate a hobby project from a product (automated testing, CI/CD, monitoring, documentation, beta testing), but every practice is learned *in service of shipping the student's own game*, not as an abstract topic.

**Prerequisites:** Level 3 completion. The student can already run the full development process (PRD ➔ design ➔ Git build loop ➔ review ➔ test ➔ deploy) with guidance; Level 4 removes the guidance.

> **Restructure note (2026-07-13):** Level 4 was repositioned from a themed "Software Engineer / Mission Control Dashboard" course to **the capstone build**: the student proposes their own game (scoped with the teacher) and runs the entire Level 3 process independently, at product scale. The teacher's role shifts from guide to *engineering manager and hostile QA*.
>
> **Track note:** The default capstone track is a game. An **alternative track** (e.g., a web application such as a dashboard, marketplace, or tool) follows the *same 12-session milestone structure* — only the product differs. Real-time features (WebSockets/multiplayer) are an optional stretch goal for students whose concept needs them, not a requirement.

### 🎮 The Capstone: The Student's Own Game

**Scope contract (agreed in Session 1):** a browser game using the taught stack — HTML/CSS/JS or Canvas frontend, optional Express + MySQL backend for accounts/saves/leaderboard — sized so that a Must-scope build fits Sessions 3–8. The teacher holds veto power over scope, not over creative direction.

| Sessions | Milestone | Engineering Practices Introduced |
|----------|-----------|----------------------------------|
| 1–3 | Define & Found | Pitch + PRD, architecture & milestone plan, test harness & TDD |
| 4–8 | Build Sprints | Sprint protocol, state & reliability, data features, integration tests & coverage, performance |
| 9–11 | Ship & Operate | CI/CD pipelines, monitoring/logging + beta UAT, documentation & launch prep |
| 12 | Launch | Live launch + chaos defense |

**The sprint protocol (Sessions 4–8):** every build session opens with a 5-minute standup (what shipped, what's blocked), runs the 5-Step loop on the sprint goal, and closes with a commit/PR, an updated sprint log, and a demo of something that *works*. Scope cuts are made openly by moving stories below the line — never by silently shipping broken features.

### Module 1: Define & Found (Sessions 1–3)

---

#### Session 1: "The Pitch: Your Game, Your PRD" (2 hours)

**Learning Objectives:**
- Pitch an original game concept and negotiate it into a buildable scope contract
- Write the capstone PRD independently: user stories, acceptance criteria, MoSCoW priorities, out-of-scope list
- Translate creative ideas into testable system constraints

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: The Two-Minute Pitch (15 mins)**
   - *Activity*: The student pitches their game concept in two minutes: fantasy, core loop, why it's fun. The tutor responds as a skeptical publisher: *"What does the player actually do, moment to moment?"*
   - *Debrief*: A game that can't be described in one core loop can't be scoped.
2. **Core Concept Board Lesson: Scoping a Real Product (20 mins)**
   - *Topic 1*: The Minimum Playable Game (MPG): the smallest version that is actually fun — the capstone's Must line.
   - *Topic 2*: Scope math: 5 build sprints × what one sprint realistically produces (evidence: the student's own Level 3 velocity).
   - *Topic 3*: Turning game feel into testable constraints ("enemy spawns every 2±0.5s", not "enemies feel relentless").
3. **Design Phase: The Capstone PRD (20 mins)**
   - *Activity*: Draft the PRD solo: goal, core loop, 8–12 user stories with acceptance criteria, MoSCoW priorities, explicit out-of-scope list.
4. **Build Phase (AI Assisted): PRD Hardening & the Scope Contract (35 mins)**
   - *Action*: Prompt the AI to attack the PRD (untestable criteria, hidden scope monsters like "multiplayer" or "level editor"); revise; then negotiate the final scope contract with the tutor, who signs off the Must line.
   - *Audit*: Final PRD + scope contract saved to the platform Plan form; AI critique and responses in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Ambiguous Spec (15 mins)**
   - *Activity*: Tutor picks the vaguest story in the student's own PRD ("the game should feel fast").
   - *Challenge*: Rewrite it as a precise, testable constraint.
   - *Socratic Question*: *"How does a computer evaluate 'feels fast'? What number is hiding inside that sentence?"*
6. **Ethics: Honest Scope, Honest Games (15 mins)**
   - *Real-World Case*: Cyberpunk 2077's 2020 launch — years of public overpromising met an unfinished product, mass refunds, and delisting from the PlayStation Store.
   - *Discussion*: *"What do players lose when developers promise what they can't ship? Where is the line between ambition and dishonesty?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 1 Homework", write 3 additional testable user stories for your game with explicit preconditions and acceptance criteria (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 1)
- **Exercise 1.1 (Scope Contract Check)**: The Must line must fit 5 sprints. Rule of thumb: 1 core mechanic + 1 progression/scoring system + 1 data feature (save/leaderboard) + UI shell. Veto: multiplayer, procedural generation, level editors, mobile — unless the student demonstrates a credible cut-down plan.
- **Exercise 1.2 (Constraint Rewrite) Solution pattern**: adjective ➔ number + behavior ("responsive controls" ➔ "input-to-movement under 50ms; no dropped inputs when two keys are held").
- **Homework Evaluation**: Ensure each story specifies role, action, and measurable acceptance criteria — same bar as Level 3 Session 2.

---

#### Session 2: "Architecture & the Milestone Plan" (2 hours)

**Learning Objectives:**
- Design the game's architecture independently: component diagram, data model, API contract (if a backend is in scope)
- Choose the tech stack from the taught toolbox and justify each choice in writing
- Break the Must-scope into a 5-sprint milestone plan with a demo target per sprint

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Reverse Engineering — User Journey Mapping (15 mins)**
   - *Activity*: The student maps their own game's player journey screen-by-screen (menu ➔ play ➔ game over ➔ leaderboard) and traces where each input propagates.
   - *Debrief*: The journey map exposes every component the architecture must name.
2. **Core Concept Board Lesson: Architecture at Product Scale (20 mins)**
   - *Topic 1*: Component diagrams: game loop, renderer, input, state, persistence — decoupled so sprints can build them in order.
   - *Topic 2*: Stack decisions as recorded trade-offs — the Architectural Decision Record (ADR): Status, Context, Decision, Consequences.
   - *Topic 3*: Milestone planning: each sprint ends in something demoable; risky components go first.
3. **Design Phase: Blueprints & Sprint Map (20 mins)**
   - *Activity*: Draw the component diagram; design the schema (if backend in scope); draft the API contract; slot every Must story into one of the 5 sprints.
4. **Build Phase (AI Assisted): Generating & Auditing the Architecture (35 mins)**
   - *Action*: Prompt AI to generate a Mermaid architecture diagram and critique the sprint plan for dependency errors (e.g., leaderboard sprint before accounts sprint); audit and correct.
   - *Audit*: Blueprint pack (diagram, schema, contract, sprint map, 2 ADRs) saved; deviations from AI suggestions justified in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Dependency Knot (15 mins)**
   - *Activity*: Tutor reorders the student's sprint map to put a dependent feature first.
   - *Challenge*: Student spots the broken dependency and restores a buildable order.
   - *Socratic Question*: *"Sprint 2 needs data that doesn't exist until Sprint 4 — what happens in week 2? How do professionals order risk?"*
6. **Ethics: Clear Specifications in Critical Software (15 mins)**
   - *Real-World Case*: The Healthcare.gov launch disaster (2013) — hundreds of contractors built against no centralized architecture and the pieces met for the first time in production.
   - *Discussion*: *"Why is an architecture diagram a contract? What happens when developers make assumptions instead of reading it?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 2 Homework", write one ADR for your most debatable stack choice (e.g., Canvas vs. DOM rendering, backend vs. localStorage saves) (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 2)
- **Exercise 2.1 (Mermaid Architecture) Solution pattern**:
  ```mermaid
  graph TD
    Input[Input Handler] --> State[Game State Store]
    State --> Loop[Game Loop] --> Renderer[Canvas Renderer]
    State <-->|fetch| Server[Express API]
    Server <-->|SQL| DB[(MySQL)]
  ```
- **Homework Evaluation**: ADR must contain Status, Context, Decision, Consequences — and the Consequences section must name a real cost, not only benefits.

---

#### Session 3: "Foundation Sprint: Skeleton, Tests & TDD" (2 hours)

**Learning Objectives:**
- Stand up the capstone repo, workspace, and CI-ready structure independently (Level 3 Session 4, unassisted)
- Set up a unit test runner (Vitest) and write the first test suites for core game-logic utilities
- Apply the Test-Driven Development cycle (Red ➔ Green ➔ Refactor) on pure logic functions

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Manual Test Misery (15 mins)**
   - *Activity*: Student manually verifies a scoring function against 8 cases by hand, timed.
   - *Debrief*: At product scale, manual verification cannot keep up with change. Automation is the only honest tester.
2. **Core Concept Board Lesson: The Test Runner Lifecycle (20 mins)**
   - *Topic 1*: Test suites (`describe`), cases (`test`), assertions (`expect`).
   - *Topic 2*: TDD: write the failing test first (Red), make it pass (Green), then refactor safely.
   - *Topic 3*: What to unit test in a game: pure logic (scoring, collision math, spawn timing, state transitions) — not pixels.
3. **Design Phase: Test Targets (20 mins)**
   - *Activity*: List the game's pure-logic functions and draft test cases with boundary values (zero, negative, max) for the two most critical.
4. **Build Phase (AI Assisted): Skeleton + First Suites (35 mins)**
   - *Action*: Initialize repo, workspace, and Vitest; TDD one core utility (write tests first, then prompt AI for the implementation, then verify Red➔Green); commit.
   - *Audit*: Test output screenshots and the Red➔Green sequence logged in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Ghost Green Bug (15 mins)**
   - *Activity*: Tutor seeds a test whose mock returns true blindly — the suite passes even when the logic is broken.
   - *Challenge*: Fix the test so it fails on invalid logic.
   - *Socratic Question*: *"Why did the suite pass when the function was wrong? How do we test that our tests are actually testing?"*
6. **Ethics: Testing Failure Liabilities (15 mins)**
   - *Real-World Case*: The Therac-25 radiation machine (1985) killed patients via a race condition never caught in testing.
   - *Discussion*: *"If our tests skip boundary cases, are we responsible for what the live system does? What does 'tested' actually claim?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 3 Homework", write a Vitest suite with 3 assertions for one of *your* game's utility functions, including one boundary case and one expected throw (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 3)
- **Exercise 3.1 (Unit Test Suite) Solution pattern**:
  ```javascript
  import { describe, test, expect } from "vitest";
  import { classifyHit } from "./combat.js";

  describe("classifyHit", () => {
    test("returns CRITICAL when damage crosses the threshold", () => {
      expect(classifyHit(120, 100)).toBe("CRITICAL");
    });
    test("returns NORMAL when damage is within limits", () => {
      expect(classifyHit(80, 100)).toBe("NORMAL");
    });
    test("throws on negative damage", () => {
      expect(() => classifyHit(-5, 100)).toThrow();
    });
  });
  ```
- **Homework Evaluation**: Assertions must use correct matchers (`toBe`, `toThrow`); the tested function must come from the student's own game, not the example.

---

### Module 2: Build Sprints (Sessions 4–8)

*(Each sprint session follows the sprint protocol: standup ➔ sprint-goal spec ➔ 5-Step build loop ➔ diff/PR review ➔ test ➔ commit ➔ demo ➔ sprint log. The "content" below is each sprint's engineering focus; the feature being built comes from the student's own sprint map.)*

---

#### Session 4: "Sprint 1: The Core Mechanic" (2 hours)

**Learning Objectives:**
- Ship the game's core loop: the mechanic that makes it a game (move/shoot/jump/match — per the PRD)
- Drive the sprint end-to-end without tutor prompting: spec ➔ prompt ➔ review ➔ test ➔ commit ➔ demo
- Keep TDD discipline on the mechanic's pure logic while the AI generates the rendering shell

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Standup & Sprint Spec (20 mins)**: State the sprint goal from the milestone plan; write the feature spec with acceptance criteria; identify the pure-logic parts that get tests first.
2. **Build Loop (70 mins, AI Assisted)**: TDD the mechanic's logic; prompt the AI IDE for implementation and rendering; audit diffs against the spec; iterate until the acceptance criteria pass.
3. **Review & Demo (15 mins)**: Commit/PR with story-linked message; demo the playable mechanic to the tutor ("hostile publisher" persona: they *will* mash keys).
4. **Socratic Debugging: The Untestable Mechanic (15 mins)**
   - *Activity*: If the student wrote mechanic logic tangled into rendering code, the tutor asks them to unit-test it — and they can't.
   - *Socratic Question*: *"Why can't we test the jump arc without opening a browser? What would separating logic from rendering buy us?"*

**📝 Homework:** In the Journal tab under "Session 4 Homework", write the Sprint 1 log: goal, what shipped, what was cut, bugs found by the tutor's key-mashing, and the fix commits (+50 XP).

#### 📖 Tutor Manual (Session 4)
- Gate the demo on the PRD's acceptance criteria, not on polish. If the sprint goal is missed, the correction is a *scope cut in the log*, not overtime — that is the lesson.
- Key-mash QA: hold multiple keys, spam restart, resize the window. File everything found as triaged issues for Sprint 2's standup.

---

#### Session 5: "Sprint 2: Game State & Reliability" (2 hours)

**Learning Objectives:**
- Centralize game state (single source of truth) and implement clean state transitions (menu ➔ playing ➔ paused ➔ game over)
- Apply reliability patterns: state rollback on failed operations, defensive guards on all transitions
- *(Stretch, only if the concept requires it)*: live/real-time features via WebSockets, with reconnect handling

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Standup & Sprint Spec (20 mins)**: Triage Sprint 1's issue list into the sprint plan; spec the state machine with a drawn transition diagram.
2. **Build Loop (70 mins, AI Assisted)**: Implement the state store and transitions; audit that *no* component mutates state directly; add rollback for any operation that can fail (e.g., save attempt while offline: UI updates optimistically, reverts on reject).
3. **Review & Demo (15 mins)**: Commit/PR; demo pause/resume/restart under hostile input; show one rollback in action.
4. **Socratic Debugging: The Overwritten Update (15 mins)**
   - *Activity*: Tutor triggers two state updates concurrently; the older one lands last and overwrites the newer.
   - *Socratic Question*: *"Why did the newer state disappear? Trace the order of arrival. How do we reject updates that represent older state?"*

**📝 Homework:** In the Journal tab under "Session 5 Homework", write a JS function implementing optimistic UI update logic for one of your game's actions, reversing changes on request reject (+50 XP).

#### 📖 Tutor Manual (Session 5)
- **Optimistic Update Solution pattern**:
  ```javascript
  function setPaused(status) {
    const oldState = gameState.paused;
    gameState.paused = status; // optimistic render
    renderHUD();

    fetch("/api/session-state", {
      method: "POST",
      body: JSON.stringify({ paused: status })
    }).catch(() => {
      gameState.paused = oldState; // rollback
      renderHUD();
      showNotification("Update failed. Reverting...");
    });
  }
  ```
- WebSockets stretch (only for concepts that need live features): require connection-status UI (Connected/Offline/Reconnecting) and exponential-backoff reconnect; otherwise skip — a single-player capstone does not need sockets to earn Excellent.

---

#### Session 6: "Sprint 3: Accounts, Saves & the Leaderboard" (2 hours)

**Learning Objectives:**
- Ship the capstone's data features: player accounts (hashed credentials), persistent saves, and/or a leaderboard — per the PRD's Must line
- Re-apply the Level 3 backend discipline unassisted: validation guards, parameterized queries, transactions, per-user isolation
- Run the cross-user attack drill against their *own* endpoints

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Standup & Sprint Spec (20 mins)**: Spec the data features against the schema and API contract from Session 2; write the hostile test cases *first*.
2. **Build Loop (70 mins, AI Assisted)**: Implement routes + DB via the AI IDE; audit every query for placeholders; wrap multi-step writes in transactions; take the authenticated id from the session, never the payload.
3. **Review & Attack Drill (15 mins)**: Commit/PR; then log in as player A and attempt to read/write player B's data by editing payloads — every attempt must fail with 401/403.
4. **Socratic Debugging: The Trusted Payload (15 mins)**
   - *Activity*: Tutor finds (or seeds) one endpoint reading `player_id` from the request body.
   - *Socratic Question*: *"Who controls the request body? Then who controls whose save file this endpoint writes?"*

**📝 Homework:** In the Journal tab under "Session 6 Homework", write the test-plan table (happy/boundary/hostile) you executed against your data endpoints, with observed status codes (+50 XP).

#### 📖 Tutor Manual (Session 6)
- Local-only capstones (no backend in scope) implement saves via `localStorage` with the same discipline: a versioned save schema, corrupted-save handling (try/parse/fallback), and a written note on what a server would add. The sprint is not skippable — persistence *is* the feature.
- Verify: placeholders in every query, transaction around credit/score multi-writes, isolation drill logged with at least one rejected attempt.

---

#### Session 7: "Sprint 4: Integration Tests & Coverage" (2 hours)

**Learning Objectives:**
- Write integration tests covering component interactions and network roundtrips (mocked and live)
- Mock API calls with controlled payloads, including failure responses (500s, timeouts)
- Measure code coverage and close the riskiest gaps — not chase 100%

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Standup & Test Blueprint (20 mins)**: Map the game's integration seams (input➔state, state➔render, client➔API); pick the highest-risk flows; outline test flows: trigger ➔ mocked response ➔ verify state/DOM.
2. **Build Loop (70 mins, AI Assisted)**: Prompt AI to write integration tests for the chosen seams, including error-path renders (what does the player see on a 500?); run coverage; write one more test targeting the biggest uncovered branch.
3. **Review & Demo (15 mins)**: Commit/PR; show the coverage report and defend which gaps are acceptable and why.
4. **Socratic Debugging: Stale Mocks (15 mins)**
   - *Activity*: Tutor seeds a mock payload using an outdated schema — tests pass while the real game breaks on load.
   - *Socratic Question*: *"Why did the suite report green while the build is broken? How do we keep mocks synchronized with reality?"*

**📝 Homework:** In the Journal tab under "Session 7 Homework", write an integration test mocking a POST failure for one of your game's saves and asserting the UI shows the failure state (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 7)
- **Exercise 7.1 (Mocked API Test) Solution pattern**:
  ```javascript
  import { test, expect, vi } from "vitest";
  import { loadPlayerSave } from "./persistence.js";

  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ level: 3, score: 4200 })
    })
  );

  test("loads and applies the save payload", async () => {
    const save = await loadPlayerSave();
    expect(save.level).toBe(3);
    expect(fetch).toHaveBeenCalledWith("/api/save");
  });
  ```
- **Homework Evaluation**: The mocked fetch must include a failure scenario (500 / rejected promise) and assert the handler state, not just the happy path.

---

#### Session 8: "Sprint 5: Performance & Polish" (2 hours)

**Learning Objectives:**
- Profile the game with browser tooling (Lighthouse, Performance tab) and fix the top bottlenecks
- Apply the Level 2 memory discipline at product scale: prune object pools, cap arrays, stabilize frame rate
- Close the Must line: every PRD Must story demonstrably done — this is the feature freeze

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Standup & Performance Budget (20 mins)**: Set measurable targets (stable 60 FPS during play; LCP under 2.5s; no unbounded arrays); run the baseline profile.
2. **Build Loop (70 mins, AI Assisted)**: Fix the top profiled bottlenecks (sprite pruning, pagination/virtualization of long lists, asset sizes); re-profile; then burn down any remaining Must-story gaps.
3. **Feature Freeze Review (15 mins)**: Commit/PR; walk the PRD Must line story-by-story with the tutor; anything failing is cut or fixed *now* — nothing new enters after this session.
4. **Socratic Debugging: The Giant Payload Freeze (15 mins)**
   - *Activity*: Tutor injects a 10MB mock payload / 10,000-item list into the game's heaviest view; the tab freezes.
   - *Socratic Question*: *"Why does rendering 10,000 elements crash the tab? What does pagination change about what the DOM has to hold?"*

**📝 Homework:** In the Journal tab under "Session 8 Homework", write your before/after performance numbers (FPS, LCP, array caps) and the 3 changes that moved them (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 8)
- **Exercise 8.1 (Data Pagination) Solution pattern**:
  ```javascript
  let currentPage = 1;
  const pageSize = 50;

  async function fetchScoresPage(page) {
    const res = await fetch(`/api/scores?page=${page}&limit=${pageSize}`);
    const data = await res.json();
    appendScoresToUI(data.scores);
  }
  ```
- Ethics thread for this session: performance as inclusivity — heavy games exclude players on low-end devices and slow connections. Ask: *"Who can't play your game as shipped today?"*
- Enforce the freeze. Students will want one more feature; the discipline of saying no *is* the curriculum.

---

### Module 3: Ship & Operate (Sessions 9–11)

---

#### Session 9: "The Pipeline: CI/CD" (2 hours)

**Learning Objectives:**
- Write a GitHub Actions workflow that installs, lints, tests, and builds on every push
- Gate merges on green pipelines; connect the pipeline to auto-deploy (staging ➔ production)
- Connect the pipeline to the platform's Level 4 review mechanism (audit triggered on push)

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: YAML Mapping (15 mins)**
   - *Activity*: Match pipeline commands to their target environments (staging vs production).
2. **Core Concept Board Lesson: Deployment Pipelines (20 mins)**
   - *Topic 1*: Commit triggers ➔ Build ➔ Test ➔ Deploy; why humans are removed from the repetitive path.
   - *Topic 2*: YAML structures (jobs, steps, env keys).
   - *Topic 3*: Deploy gates: production blocked while tests return error exit codes.
3. **Design Phase: Pipeline Flow Diagram (20 mins)**
   - *Activity*: Sketch the capstone's pipeline: push ➔ lint ➔ Vitest ➔ build ➔ deploy staging ➔ (manual gate) ➔ production.
4. **Build Phase (AI Assisted): Coding the Pipeline (35 mins)**
   - *Action*: Prompt AI to generate `.github/workflows/deploy.yml`; push a commit and watch it run; deliberately push a failing test and watch the gate hold.
   - *Audit*: Pipeline logs (one green, one blocked) in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Broken Pipeline (15 mins)**
   - *Activity*: Tutor introduces a YAML syntax error or failing test command; the staging build fails.
   - *Socratic Question*: *"Why did the deploy stop? Read the logs upward from the failure — where exactly did the pipeline halt?"*
6. **Ethics: Automated Gates (15 mins)**
   - *Real-World Case*: GitLab (2017) — a production database deleted by hand because safeguards were bypassable.
   - *Discussion*: *"Why should critical changes require automated checks before a human can say yes? Who is the gate really protecting?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 9 Homework", write a YAML workflow fragment running lint checks and unit tests sequentially on pull requests (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 9)
- **Exercise 9.1 (GitHub Actions YAML) Solution**:
  ```yaml
  name: CI Pipeline
  on: [push]
  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Install dependencies
          run: npm install
        - name: Run Tests
          run: npm run test
  ```
- **Homework Evaluation**: YAML must parse (indentation), and steps must run in a meaningful order (lint before tests is acceptable; deploy before tests is not).

---

#### Session 10: "Operate: Monitoring, Logging & the Beta Test" (2 hours)

**Learning Objectives:**
- Implement structured JSON logging with levels (DEBUG/INFO/WARN/ERROR) and an error-handler middleware
- Plan and run a beta UAT: recruit real testers (classmates/family), triage findings by severity × priority
- Harden inputs against the hostile beta user (sanitization, numeric extremes, length caps)

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Stack Trace Audit (15 mins)**
   - *Activity*: Locate the file path and variables behind a crash from a raw server stack trace.
2. **Core Concept Board Lesson: Observability & UAT (20 mins)**
   - *Topic 1*: Structured logging vs raw prints; log levels; alert fatigue (alert on repeated 500s, not every 404).
   - *Topic 2*: UAT: verifying the PRD against real users; the triage matrix (Severity: Blocker/Major/Minor × Priority).
   - *Topic 3*: The hostile user is normal: sanitize inputs, clamp extremes, cap lengths.
3. **Design Phase: Log Schema & UAT Script (20 mins)**
   - *Activity*: Design the log entry schema (timestamp, level, endpoint, userId); write the beta test script testers will follow, plus a findings form.
4. **Build Phase (AI Assisted): Logger + Beta Run (35 mins)**
   - *Action*: Prompt AI for the structured logger middleware and input sanitizers; then run a live mini-beta: 2–3 testers play while the student watches the logs and files findings into the triage matrix.
   - *Audit*: Triaged findings list + log excerpts in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Silent Fail (15 mins)**
   - *Activity*: A tester hits a 500 — and the logs show nothing.
   - *Socratic Question*: *"The player saw an error page and our logs are empty. Where did the exception go? What does an unlogged failure cost during a real launch?"*
6. **Ethics: When Monitors Fail (15 mins)**
   - *Real-World Case*: The Boeing 737 MAX crashes (2018–2019) were worsened by cockpit alerts that failed to surface faulty sensor data to pilots.
   - *Discussion*: *"When software fails to report its own failures, who pays? Why is logging accuracy a safety parameter?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 10 Homework", write a JS error-handler middleware logging stack trace, timestamp, and client IP in JSON format — and your top-3 triaged beta findings with severity/priority labels (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 10)
- **Exercise 10.1 (Structured Logger Middleware) Solution**:
  ```javascript
  app.use((err, req, res, next) => {
    const errorLog = {
      timestamp: new Date().toISOString(),
      level: "ERROR",
      message: err.message,
      path: req.path,
      ip: req.ip
    };
    console.log(JSON.stringify(errorLog)); // structured stdout log
    res.status(500).json({ error: "Internal Server Error" });
  });
  ```
- **Exercise 10.2 (Sanitizer) Solution**:
  ```javascript
  function sanitizeInput(inputStr) {
    if (typeof inputStr !== "string") return "";
    return inputStr.slice(0, 50).replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  ```
- **Homework Evaluation**: Log output must be stringified JSON with timestamp/level/message/path keys; beta findings must carry both a severity and a priority, and at least one must be a *Blocker* honestly labeled.

---

#### Session 11: "Handoff: Documentation & Launch Prep" (2 hours)

**Learning Objectives:**
- Write the README a stranger can follow: prerequisites, install, env vars, run, deploy
- Produce the API spec (OpenAPI-style) for any backend routes, and finalize the ADR set
- Fix Blocker/Major beta findings and complete the launch checklist (rollback plan included)

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Setup Guide Audit (15 mins)**
   - *Activity*: Follow a mock setup guide with missing steps; identify exactly where it breaks.
2. **Core Concept Board Lesson: The Handoff Lifecycle (20 mins)**
   - *Topic 1*: Documentation as the product's front door: install steps, prerequisites, env setup.
   - *Topic 2*: OpenAPI specs: paths, parameters, schemas, responses.
   - *Topic 3*: Launch checklists and rollback plans; *(awareness)* feature flags and canary rollouts as how big products de-risk launches.
3. **Design Phase: Docs Blueprint (20 mins)**
   - *Activity*: Outline the README; list every env var; assemble the launch checklist from the release sweep + beta triage.
4. **Build Phase (AI Assisted): Write, Verify, Burn Down (35 mins)**
   - *Action*: Prompt AI to draft the README and API spec from the codebase; *verify by clean-machine test* (tutor follows the README from zero); burn down remaining Blocker/Major findings.
   - *Audit*: Clean-machine result + final checklist state in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Missing Setup (15 mins)**
   - *Activity*: The tutor's clean-machine run crashes because a setup step (DB seeding, env var) was omitted.
   - *Socratic Question*: *"It works on your machine and died on mine. What did your documentation assume that it never stated?"*
6. **Ethics: Building on Others' Work (15 mins)**
   - *Real-World Case*: Heartbleed (2014) lived in OpenSSL partly because critical code was under-documented and under-audited.
   - *Discussion*: *"What do you owe the next developer — including future-you? How does documentation quality shape security auditability?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 11 Homework", write one ADR justifying a launch-relevant decision of your game (e.g., saves in localStorage vs. server; Canvas vs. DOM), with honest Consequences (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 11)
- **Exercise 11.1 (OpenAPI fragment) Solution pattern**:
  ```yaml
  paths:
    /api/scores:
      get:
        summary: Returns the top leaderboard entries
        responses:
          '200':
            description: Success
            content:
              application/json:
                schema:
                  type: array
                  items:
                    $ref: '#/components/schemas/Score'
  ```
- **Homework Evaluation**: ADR must contain Status, Context, Decision, Consequences; the clean-machine README test is the session's pass/fail gate — docs that fail it are not done.

---

### Module 4: Launch (Session 12)

---

#### Session 12: "The Grand Launch & System Defense" (2 hours)

**Learning Objectives:**
- Launch the game publicly (production deploy, shareable URL) and present it end-to-end
- Demonstrate the full engineering apparatus: tests, coverage, pipeline gates, logs, docs
- Defend the live system against chaos testing (hostile inputs, dependency failures) in real time

**In-Session Assessment Timeline (2 hours):**
1. **Part 1: The Product Pitch (40 mins)**
   - The student presents their live game in production: the core loop, the player journey, and how the PRD's promises map to what shipped (including what was honestly cut and why).
2. **Part 2: Engineering Tour (40 mins)**
   - Walk the codebase and apparatus: test suites and coverage, CI/CD logs showing a blocked bad build and a green deploy, structured logs from the beta, the README/API spec/ADRs, and the commit/PR history telling the sprint story.
3. **Part 3: Live Chaos Defense (25 mins)**
   - The tutor plays "Chaos Monkey" against the live game: garbage and extreme inputs, forced network failures mid-save, hostile payloads against data endpoints, restart/resize/key-mash storms.
   - The student defends in real time: sanitizers hold, state rolls back, isolation rejects cross-user writes, logs capture every failure, and the debugging protocol runs out loud on anything that breaks.
4. **Part 4: Retrospective & Graduation (15 mins)**
   - Final retrospective against the Session 1 scope contract; grade with the rubric; present the Level 4 Capstone certificate.

**Level 4 Assessment Rubric**

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Product Completeness** (25%) | Every PRD Must story works in the live deployed game; cuts were made openly with logged rationale. | Must line shipped with minor gaps; cuts documented. | Core loop playable but several Must stories missing or broken. | Game not playable end-to-end in production. |
| **Test Engineering** (25%) | Unit + integration suites cover core logic and risky seams; boundary and failure paths tested; TDD evidence in history. | Good coverage with minor edge-case gaps. | Basic tests only; happy-path bias; coverage gaps unexamined. | No meaningful automated tests. |
| **DevOps & Operations** (20%) | Pipeline gates merges and deploys automatically; structured logs captured real beta failures; README passes the clean-machine test. | Pipeline works but bypassable; logs or docs thinner than the product needs. | Manual deploys; sparse logging; docs incomplete. | No pipeline, no structured logs, no usable docs. |
| **Independent Defense** (30%) | Survives chaos testing with visible defenses; explains every design decision from their own artifacts (PRD, ADRs, commits) without prompting. | Solid defense; struggles on deep concurrency/failure questions. | Cannot connect parts of the system to their own decisions. | Cannot explain or defend the system. |

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 12 Homework", submit the final retrospective: "My Journey from Syntax Writer to System Architect — what I designed, what I cut, what broke, and what I'd build next" (+100 XP).

#### 📖 Tutor Manual: Assessment Solutions (Session 12)
- **Part 1 (Product Verification)**: Play the live game yourself for 5 minutes before the pitch; verify the shareable URL works off the classroom network.
- **Part 2 (Apparatus Audit)**: Require *evidence on screen*: a red pipeline run that blocked a merge, a green deploy run, a coverage report, one real beta log entry.
- **Part 3 (Chaos Script)**: Run at minimum: (1) extreme/garbage input into every form field — must sanitize or reject; (2) kill the network mid-save — UI must surface the failure and roll back; (3) replay a cross-user payload attack — must 401/403; (4) key-mash + restart storm — no crash, no frozen state.
- **Take-Home Evaluation**: The retrospective must reference the Session 1 scope contract explicitly — what was promised vs. shipped is the capstone's honesty test.
