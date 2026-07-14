# Computer Tutor: Teacher & Tutor Guidelines (Level 4)

This guideline is designed for the tutor to lead one-on-one sessions for students aged 13–16 who have completed Level 3. It maps out the exact timeline, board explanations, Socratic prompts, sandbox fill-in guidance, and Project Journal milestone criteria for each 2-hour session of Level 4: **"The Capstone Build"** — the student proposes, designs, builds, tests, ships, and defends an **actual, original game**, running the full Level 3 process independently.

**The defining difference from every earlier level**: there is no fixed reference project. Every student's game is different, so this guideline's "Expected outcome" sections describe the *shape* of a correct answer (a tested transition, a real coverage report, a working rollback), not one fixed line of code. The tutor's role shifts from guide to **engineering manager and hostile QA** — asking harder questions, not supplying answers.

---

## Pedagogical Philosophy (AI-Era Shift)
1. **The Product Is Real, So the Standard Is Real**: this is not a themed exercise — it's the student's own creative work, shipped publicly. Hold it to the same bar Level 3 taught: testable requirements, reviewed diffs, logged decisions, a working rollback plan.
2. **The Teacher's Role Shifts to Engineering Manager and Hostile QA**: at Level 3 the tutor guided the process; at Level 4 the tutor runs standups, plays a skeptical publisher, key-mashes demos, and chaos-tests the live launch. Guidance now means asking the question that exposes a gap, not naming the gap yourself.
3. **Scope Discipline Is the Real Curriculum**: the single most common capstone failure mode is an unshippable scope. The tutor holds veto power over scope, not creative direction — protect the 5-sprint Must line ruthlessly from Session 1 onward.
4. **No Paper, All Digital**: all notes, PRDs, ADRs, sprint logs, and homework are logged in the student's in-app **Journal** tab.

---

## 🛠️ Portal Management: Admin Panel, Student Levels & Journals

### 1. Student Levels & Navigation Restrictions
* **Configuring Student Levels**:
  - Access the **Admin Panel** tab (only visible for accounts with the `teacher` role).
  - Use the registration form to create a student profile and select their initial curriculum level (`L1`, `L2`, `L3`, or `L4`).
  - In the student roster table, teachers can click the **Level select dropdown** on any student to dynamically change their level.
* **Navigation Locks**:
  - Setting a student's level to **L4** automatically deactivates tabs for Levels 1, 2, and 3 in the **Quest Board** and **Curriculum Guide** views.
  - Locked tabs display a padlock (`🔒`) and are disabled to keep students focused on their active level milestones.
  - Tutors bypass these locks so they can click and audit any level tab at any time.

### 2. Interactive Prompt Journals
* **Homework and Notebook Logging**:
  - The **Prompt Journal** tab is a fully interactive text/code editor workspace.
  - All text containers have **automatic text-wrapping** enabled, preventing horizontal overflow logs.
  - Students write their PRD, ADRs, sprint logs, and homework answers inside the **Code Output History** editor.
  - Click **Save Changes** (Blue button) to overwrite the current selected version in the database.
  - Click **Save as New Version** (Green button) to save the current edits as a new draft while keeping previous versions intact — at Level 4, the version history should read like a sprint-by-sprint build log.

### 3. Level 4's Sandbox: Generic AI Prompt Sandbox, No Bespoke Exercises or Concept Reference Cards
* Like Levels 2 and 3, Level 4 has **no session-specific sandbox validators** — every L4 session (`l4-s1` through `l4-s12`) uses the same **Standard AI Prompt Sandbox** panel: a generic Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases form, an **AI Generator** button, a **Chaos Monkey** fuzz-tester, and a read-only code output pane.
* **Level 4 does not yet have dedicated Concept Reference cards** in the app — the in-app Concept Reference tab currently falls back to generic placeholder text for all 12 L4 sessions. This guideline's **Board Lesson Talking Points** and **Standard AI Prompt Sandbox — Tutor Fill-In Guide** sections are the primary source of session-specific material for tutors.
* **The platform's CI/CD-triggered audit mechanism (described in `PRJ_KNOWLEDGE.md` §7 as the intended Level 4 review escalation) is not implemented yet.** Until it ships, Session 9's pipeline and Session 12's live review are run and evidenced directly — a real GitHub Actions run, a real deployed URL — rather than through a platform-rendered audit view.
* This is a deliberate, current platform scope decision, not an oversight — the Cyber Detective Hub platform currently implements Levels 1–2 fully; Level 4's in-app sandbox presets and Project Journal milestone guidance (`PROJECT_TASKS`) are complete, but bespoke Concept Reference cards and the CI/CD audit integration are scoped for a later pass.

### 4. This Guideline's Session Numbering
This guideline's 12 sessions map 1:1 to the current `L4-Computer_Tutor_AIEra_Curriculum.md` structure and the app's `l4-s1`–`l4-s12` session IDs.

---

## 🎮 Level 4 Structure: The Capstone Build (12 Sessions)

> **Restructure note (2026-07-13):** Level 4 was repositioned from a themed "Software Engineer / Mission Control Dashboard" course to **the capstone build**: the student proposes their own game (scoped with the teacher) and runs the entire Level 3 process independently, at product scale. **Track note**: the default capstone track is a game. An alternative track (e.g., a web application such as a dashboard, marketplace, or tool) follows the same 12-session milestone structure — only the product differs. Real-time features (WebSockets/multiplayer) are an optional stretch goal for concepts that need them, not a requirement.

| Sessions | Milestone | Engineering Practices Introduced |
|----------|-----------|----------------------------------|
| 1–3 | Define & Found | Pitch + PRD, architecture & milestone plan, test harness & TDD |
| 4–8 | Build Sprints | Sprint protocol, state & reliability, data features, integration tests & coverage, performance |
| 9–11 | Ship & Operate | CI/CD pipelines, monitoring/logging + beta UAT, documentation & launch prep |
| 12 | Launch | Live launch + chaos defense |

**Scope contract (agreed in Session 1)**: a browser game using the taught stack — HTML/CSS/JS or Canvas frontend, optional Express + MySQL backend for accounts/saves/leaderboard — sized so that a Must-scope build fits Sessions 4–8. The teacher holds veto power over scope, not over creative direction.

**The sprint protocol (Sessions 4–8)**: every build session opens with a 5-minute standup (what shipped, what's blocked), runs the 5-Step loop on the sprint goal, and closes with a commit/PR, an updated sprint log, and a demo of something that *works*. Scope cuts are made openly by moving stories below the line — never by silently shipping broken features.

---

## Session 1: "The Pitch: Your Game, Your PRD"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: The Two-Minute Pitch |
| 0:15–0:35 | Board Lesson: Scoping a Real Product |
| 0:35–0:55 | Design Phase: The Capstone PRD |
| 0:55–1:30 | Build Phase (AI Assisted): PRD Hardening & the Scope Contract |
| 1:30–1:45 | Socratic Debugging: The Ambiguous Spec |
| 1:45–2:00 | Ethics: Honest Scope, Honest Games |

### 1. Board Lesson Talking Points
* **The Minimum Playable Game (MPG)**: the smallest version that is actually fun — the capstone's Must line. Not the smallest version that technically runs; the smallest version a stranger would call a game.
* **Scope Math**: 5 build sprints × what one sprint realistically produces — evidenced by the student's own Level 3 velocity, not by optimism. This is the single most important calibration of the whole level.
* **Turning Game Feel Into Testable Constraints**: "enemy spawns every 2±0.5s," not "enemies feel relentless." Every vague adjective in the pitch needs a number hiding inside it, found before Session 4.

### 2. Socratic Prompting
* *"How does a computer evaluate 'feels fast'? What number is hiding inside that sentence?"* (It can't — "feels fast" isn't a spec until it's rewritten as something measurable, like "input-to-movement under 50ms; no dropped inputs when two keys are held." The rewrite is the actual work of this session, not a formality.)
* *"What do players lose when developers promise what they can't ship?"* (Cyberpunk 2077's 2020 launch — years of public overpromising met an unfinished product, mass refunds, and delisting from the PlayStation Store. Players lose trust and money; the studio loses credibility for future promises. Honest scope, negotiated up front, is what this session exists to enforce.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
Level 4 uses the generic **Standard AI Prompt Sandbox** panel (Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases fields + AI Generator + Chaos Monkey) rather than session-specific validators. Every field below is filled in with the **student's own game concept** — there is no fixed reference answer.

* **Task description** field: Draft the capstone PRD solo (goal, core loop, 8–12 user stories with acceptance criteria, MoSCoW priorities, explicit out-of-scope list), then prompt the AI to attack it for untestable criteria and hidden scope monsters ("multiplayer," "a level editor") before negotiating the final scope contract with the tutor.
* **Logical Constraints (Rules)** field: The Must line must fit 5 sprints — rule of thumb: 1 core mechanic + 1 progression/scoring system + 1 data feature (save/leaderboard) + UI shell. Veto by default: multiplayer, procedural generation, level editors, mobile — unless the student demonstrates a credible cut-down plan.
* **Edge cases to handle** field: Every vague constraint ("responsive controls," "feels fast") must be rewritten as a number + behavior before the PRD is considered final.
* **Expected outcome** (sourced from the L4 curriculum doc's Tutor Manual — pattern, not a fixed answer): a Must line the tutor has signed off as fitting 5 sprints, and at least one constraint rewritten from an adjective into a measurable form (e.g. "responsive controls" → "input-to-movement under 50ms; no dropped inputs when two keys are held").

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 1 card tracks **Your Game's PRD & Scope Contract**.

1. **Plan & Design** — *Expected:* a one-core-loop pitch, 8–12 user stories with acceptance criteria, and a MoSCoW pass.
2. **Write AI Prompt** — *Expected:* a prompt directing the AI to attack the PRD draft for untestable criteria and hidden scope monsters.
3. **Review & Explain** — *Expected:* the student explains why each accepted AI finding actually tightened a story.
4. **Test & Break** — *Expected:* every Must story's acceptance criterion passes the "could a tester prove this?" bar.
5. **Iterate & Improve** — *Expected:* the final signed scope contract, with at least 2 features explicitly named as cut to Should/Could.

* **Homework Evaluation Checklist**: each of the 3 additional user stories must specify role, action, and measurable acceptance criteria — same bar as Level 3 Session 2.

---

## Session 2: "Architecture & the Milestone Plan"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Reverse Engineering — User Journey Mapping |
| 0:15–0:35 | Board Lesson: Architecture at Product Scale |
| 0:35–0:55 | Design Phase: Blueprints & Sprint Map |
| 0:55–1:30 | Build Phase (AI Assisted): Generating & Auditing the Architecture |
| 1:30–1:45 | Socratic Debugging: The Dependency Knot |
| 1:45–2:00 | Ethics: Clear Specifications in Critical Software |

### 1. Board Lesson Talking Points
* **Component Diagrams**: game loop, renderer, input, state, persistence — decoupled so sprints can build them in order without one sprint blocking on work that hasn't happened yet.
* **The Architectural Decision Record (ADR)**: Status, Context, Decision, Consequences — stack decisions as recorded trade-offs. The Consequences section must name a real cost, not just benefits, or it isn't a decision record, it's marketing copy.
* **Milestone Planning**: each sprint ends in something demoable; risky/uncertain components go first, not last, so there's still time left to recover if they go badly.

### 2. Socratic Prompting
* *"Sprint 2 needs data that doesn't exist until Sprint 4 — what happens in week 2? How do professionals order risk?"* (The sprint stalls, because the dependency wasn't built yet. Professionals order sprints so the riskiest or most foundational component is built first — surfacing problems early, when there's still time to adapt the plan, rather than discovering a blocking dependency midway through.)
* *"Why is an architecture diagram a contract? What happens when developers make assumptions instead of reading it?"* (The Healthcare.gov launch disaster (2013) had hundreds of contractors building against no centralized architecture — the pieces met for the first time in production. A diagram written down and agreed on beforehand is what lets independently-built pieces actually fit together; without it, every developer is guessing at what the others assumed.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Draw the component diagram, design the schema (if a backend is in scope), draft the API contract, and slot every Must story into one of the 5 sprints, then prompt the AI to generate a Mermaid architecture diagram and critique the sprint plan for dependency errors.
* **Logical Constraints (Rules)** field: The sprint map must order risky/dependent components before the features that need them; every ADR must contain Status, Context, Decision, and Consequences, with a real cost named in Consequences.
* **Edge cases to handle** field: If the AI flags a dependency error in the sprint order, the plan must actually be reordered — not just noted as a risk and left as-is.
* **Expected AI output** (sourced from the L4 curriculum doc's Tutor Manual — pattern):
  ```mermaid
  graph TD
    Input[Input Handler] --> State[Game State Store]
    State --> Loop[Game Loop] --> Renderer[Canvas Renderer]
    State <-->|fetch| Server[Express API]
    Server <-->|SQL| DB[(MySQL)]
  ```

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 2 card tracks **Your Architecture & Sprint Map**.

1. **Plan & Design** — *Expected:* the player journey mapped screen-by-screen, exposing every component the architecture must name.
2. **Write AI Prompt** — *Expected:* a prompt asking for a Mermaid diagram from the component list, plus a critique of the sprint plan for dependency errors.
3. **Review & Explain** — *Expected:* the student explains why each ADR's Consequences section names a real cost, not just a benefit.
4. **Test & Break** — *Expected:* every Must story from the PRD is confirmed slotted into one of the 5 sprints; no story is missing or double-booked.
5. **Iterate & Improve** — *Expected:* the sprint order is corrected if the AI (or the tutor) flags a dependency error.

* **Homework Evaluation Checklist**: the ADR must contain Status, Context, Decision, Consequences — and the Consequences section must name a real cost, not only benefits.

---

## Session 3: "Foundation Sprint: Skeleton, Tests & TDD"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Manual Test Misery |
| 0:15–0:35 | Board Lesson: The Test Runner Lifecycle |
| 0:35–0:55 | Design Phase: Test Targets |
| 0:55–1:30 | Build Phase (AI Assisted): Skeleton + First Suites |
| 1:30–1:45 | Socratic Debugging: The Ghost Green Bug |
| 1:45–2:00 | Ethics: Testing Failure Liabilities |

### 1. Board Lesson Talking Points
* **Test Suites, Cases, Assertions**: `describe`, `test`, `expect` — the Vitest vocabulary the rest of the level's testing sessions build on.
* **TDD: Red → Green → Refactor**: write the failing test first (Red), make it pass (Green), then refactor safely — refactoring only counts as "safe" because the test is already there to catch a regression.
* **What to Unit Test in a Game**: pure logic — scoring, collision math, spawn timing, state transitions — not pixels. Rendering isn't unit-testable in a meaningful way; the logic feeding it is.

### 2. Socratic Prompting
* *"Why did the suite pass when the function was wrong? How do we test that our tests are actually testing?"* (A test whose mock returns `true` blindly, or whose assertion is too loose, will pass regardless of whether the real logic is correct. The fix is deliberately breaking the implementation and confirming the test actually fails — a test that can't fail isn't testing anything.)
* *"If our tests skip boundary cases, are we responsible for what the live system does?"* (The Therac-25 radiation machine (1985) killed patients via a race condition never caught in testing. "Tested" is a claim about what was actually checked — skipping boundary cases means the claim doesn't cover the exact inputs most likely to expose a real bug.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: List the game's pure-logic functions and draft test cases with boundary values (zero, negative, max) for the two most critical, then initialize the repo/workspace/Vitest and TDD one core utility — write the failing test first, then prompt the AI for the implementation, then verify Red → Green.
* **Logical Constraints (Rules)** field: The test must be written and confirmed failing (Red) *before* the implementation exists; assertions must use correct matchers (`toBe`, `toThrow`), not loose truthy checks.
* **Edge cases to handle** field: The suite must include at least one boundary case and one expected throw, not just a single happy-path assertion.
* **Expected AI output** (sourced from the L4 curriculum doc's Tutor Manual — pattern):
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

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 3 card tracks **Foundation: Repo, Vitest & TDD**.

1. **Plan & Design** — *Expected:* the game's pure-logic functions listed, with boundary-value test cases drafted for the two most critical.
2. **Write AI Prompt** — *Expected:* the test is written first; the AI is prompted only for an implementation that makes the already-written test pass.
3. **Review & Explain** — *Expected:* the student explains why the test had to fail (Red) before the implementation existed, to prove it tests something real.
4. **Test & Break** — *Expected:* the suite is run before the implementation exists (fails) and after (passes); an intentionally broken implementation is used to confirm the test would actually catch it.
5. **Iterate & Improve** — *Expected:* if a test passes against a deliberately broken implementation, the test itself is fixed before being trusted.

* **Homework Evaluation Checklist**: assertions must use correct matchers (`toBe`, `toThrow`); the tested function must come from the student's own game, not the example.

---

## Session 4: "Sprint 1: The Core Mechanic"

*(This session opens Module 2: Build Sprints. Each sprint session — 4 through 8 — follows the sprint protocol: standup → sprint-goal spec → 5-Step build loop → diff/PR review → test → commit → demo → sprint log. The feature being built comes from the student's own sprint map, not a fixed reference project.)*

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:20 | Standup & Sprint Spec |
| 0:20–1:30 | Build Loop (AI Assisted) |
| 1:30–1:45 | Review & Demo |
| 1:45–2:00 | Socratic Debugging: The Untestable Mechanic |

### 1. Board Lesson / Standup Talking Points
* **The Standup**: what shipped, what's blocked — kept short and honest. This isn't a status report for its own sake; it's how the sprint goal for today gets set from yesterday's reality, not from the original plan in isolation.
* **The Sprint Protocol**: standup → 5-Step build loop on the sprint goal → commit/PR → updated sprint log → a demo of something that *works*. Every sprint session from here on repeats this exact shape.
* **Scope Cuts Are Logged, Not Hidden**: if the sprint goal is missed, the correction is a scope cut written into the log — never silently shipping something broken to look finished.

### 2. Socratic Prompting
* *"Why can't we test the jump arc without opening a browser? What would separating logic from rendering buy us?"* (If the mechanic's math is tangled directly into the rendering code, there's no pure function to call from a test file — the only way to check it is visually, by eye, every time. Separating logic from rendering means the mechanic's correctness can be verified in milliseconds by a test suite, independent of whatever the canvas is doing.)
* *"What does it cost a team when 'done' quietly means 'done, mostly'?"* (Gating the demo on the PRD's acceptance criteria, not on polish, is what keeps "done" meaning something specific. A team that lets "mostly done" pass as "done" loses the ability to trust its own status reports — the next sprint's planning silently inherits debt nobody flagged.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: State the sprint goal from the milestone plan, write the feature spec with acceptance criteria, and identify the pure-logic parts that get tests first — this is the core mechanic that makes the game a game (move/shoot/jump/match, per the student's own PRD).
* **Logical Constraints (Rules)** field: The mechanic's core logic must be unit-testable without opening a browser; the demo must survive multiple keys held at once and rapid restarts.
* **Edge cases to handle** field: Key-mash and rapid-restart QA — the tutor should deliberately hold multiple keys, spam restart, and resize the window during the demo.
* **Expected outcome** (pattern, not a fixed answer — sourced from the L4 curriculum doc's Tutor Manual): commit/PR with a story-linked message; a live demo that survives the tutor's "hostile publisher" key-mash QA; a Sprint 1 log naming what shipped and what was cut.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 4 card tracks **Sprint 1: Core Mechanic**.

1. **Plan & Design** — *Expected:* the sprint goal and feature spec pulled from the milestone plan, with the mechanic's pure-logic parts identified for testing first.
2. **Write AI Prompt** — *Expected:* the AI is prompted for the rendering and glue code around an already-tested pure-logic mechanic — not for the tested logic itself.
3. **Review & Explain** — *Expected:* the student explains what separating logic from rendering bought them when the tutor asked to unit-test the mechanic.
4. **Test & Break** — *Expected:* the demo survives the tutor's key-mash QA (multiple keys, spam restart, window resize) live.
5. **Iterate & Improve** — *Expected:* the Sprint 1 log documents what shipped and what was openly cut, not silently dropped.

* **Homework Evaluation Checklist**: the Sprint 1 log must name the goal, what shipped, what was cut, bugs found by key-mashing, and the fix commits.

---

## Session 5: "Sprint 2: Game State & Reliability"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:20 | Standup & Sprint Spec |
| 0:20–1:30 | Build Loop (AI Assisted) |
| 1:30–1:45 | Review & Demo |
| 1:45–2:00 | Socratic Debugging: The Overwritten Update |

### 1. Board Lesson / Standup Talking Points
* **State as a Single Source of Truth**: centralized state stores and clean transitions (menu → playing → paused → game over) — every component reads from and writes to the same store, never its own private copy.
* **Reliability Patterns**: rollback on failed operations, defensive guards on every transition. An optimistic UI update that never reverts on failure is a UI that lies to the player.
* **WebSockets Stretch Goal (Only If Needed)**: a connection-status UI (Connected/Offline/Reconnecting) and exponential-backoff reconnect — only for concepts that genuinely need live/real-time features. A single-player capstone does not need sockets to earn Excellent.

### 2. Socratic Prompting
* *"Why did the newer state disappear? How do we reject updates that represent older state?"* (When two state updates race, whichever lands last wins by default — even if it's actually the older one. The fix compares a timestamp or sequence number and explicitly rejects updates that represent state older than what's already applied.)
* *"What does software owe a user when an action doesn't actually succeed?"* (An honest, visible failure state — not a UI that quietly reverted a save and left the player believing it worked. An optimistic update that silently loses a rejected change erodes trust the same way an unexplained charge does on a receipt.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Triage Sprint 1's issue list into the sprint plan, spec the state machine with a drawn transition diagram, then implement the state store and transitions, auditing that no component mutates state directly, and add rollback for any operation that can fail.
* **Logical Constraints (Rules)** field: Every state mutation must go through the central store — no component reaching in and changing it directly; the rollback must actually restore the old state and notify the player, not silently fail.
* **Edge cases to handle** field: Two state updates arriving out of order must not let the older one overwrite the newer.
* **Expected outcome** (pattern, sourced from the L4 curriculum doc's Tutor Manual):
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

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 5 card tracks **Sprint 2: State & Reliability**.

1. **Plan & Design** — *Expected:* Sprint 1's issues triaged into this sprint's plan, plus a drawn state transition diagram.
2. **Write AI Prompt** — *Expected:* a prompt directing the AI to implement the state store and transitions from the diagram, plus one optimistic update with rollback.
3. **Review & Explain** — *Expected:* the student confirms no component mutates state outside the central store.
4. **Test & Break** — *Expected:* pause/resume/restart demoed live under hostile input; a failed optimistic update rolls back and notifies the player.
5. **Iterate & Improve** — *Expected:* if two updates can race, the fix specifically rejects the older one, not just "the second one that arrives."

* **Homework Evaluation Checklist**: the optimistic-update function must render immediately, then reverse changes and notify on request reject.

---

## Session 6: "Sprint 3: Accounts, Saves & the Leaderboard"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:20 | Standup & Sprint Spec |
| 0:20–1:30 | Build Loop (AI Assisted) |
| 1:30–1:45 | Review & Attack Drill |
| 1:45–2:00 | Socratic Debugging: The Trusted Payload |

### 1. Board Lesson / Standup Talking Points
* **Data Features, Unassisted**: validation guards, parameterized queries, and transactions applied without tutor scaffolding — this session re-tests every Level 3 backend habit under independent conditions.
* **The Authenticated Session, Not the Payload**: every data route must take the player's id from the session — never from the request body. This is the single rule this session exists to enforce.
* **Local-Only Capstones**: if no backend is in scope, saves go through `localStorage` with the same discipline — a versioned save schema and corrupted-save handling (try/parse/fallback). Persistence is the feature either way; this sprint is not skippable for local-only projects.

### 2. Socratic Prompting
* *"Who controls the request body? Then who controls whose save file this endpoint writes?"* (The player fully controls their own request body via DevTools. Any endpoint that reads `player_id` from the payload instead of the authenticated session lets a player claim to be anyone — including overwriting another player's save or score.)
* *"What do players trust a 'Saved!' message to mean?"* (That their progress genuinely persisted. A corrupted local save that silently loses progress, or a server write that fails without telling the player, breaks that promise just as badly as a security hole does — persistence has to be honest about failure, not just successful in the common case.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Spec the data features (accounts, saves, and/or a leaderboard, per the PRD's Must line) against the schema and API contract from Session 2, writing hostile test cases first, then implement via the AI IDE, auditing every query for placeholders and every multi-step write for a transaction.
* **Logical Constraints (Rules)** field: Every query must use a placeholder, never string concatenation; every route must take the player id from the session, never the request body or query string.
* **Edge cases to handle** field: Log in as player A and attempt to read/write player B's data by editing a payload — every attempt must fail with 401/403.
* **Expected outcome** (pattern, sourced from the L4 curriculum doc's Tutor Manual): the test-plan table (happy/boundary/hostile) executed against the student's own data endpoints, with every observed status code matching expected; for local-only capstones, a corrupted save file falls back gracefully instead of crashing the game.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 6 card tracks **Sprint 3: Data Features**.

1. **Plan & Design** — *Expected:* the data-feature spec written against the Session 2 schema/contract, with hostile test cases drafted first.
2. **Write AI Prompt** — *Expected:* a prompt explicitly forbidding the AI from reading any id from the request body, directing it to use the authenticated session instead.
3. **Review & Explain** — *Expected:* the student audits every query for placeholders and every multi-step write for a transaction.
4. **Test & Break** — *Expected:* the cross-user attack drill returns 401/403 on every attempt; a corrupted local save (if applicable) is handled gracefully.
5. **Iterate & Improve** — *Expected:* any endpoint found trusting a client-supplied id is treated as a live vulnerability and fixed before Sprint 4.

* **Homework Evaluation Checklist**: the test-plan table must report observed status codes for every happy/boundary/hostile case executed against the student's own endpoints.

---

## Session 7: "Sprint 4: Integration Tests & Coverage"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:20 | Standup & Test Blueprint |
| 0:20–1:30 | Build Loop (AI Assisted) |
| 1:30–1:45 | Review & Demo |
| 1:45–2:00 | Socratic Debugging: Stale Mocks |

### 1. Board Lesson / Standup Talking Points
* **Integration Seams**: input→state, state→render, client→API — the boundaries where two independently-correct pieces can still disagree. Rank them by risk before deciding what to test.
* **Mocking Failure, Not Just Success**: what does the player see on a 500? A test suite that only ever mocks the happy path never proves the failure UI actually works.
* **Coverage as a Risk Map, Not a Score**: read the coverage report for *where* the gaps are, and close the riskiest ones — chasing 100% is not the goal.

### 2. Socratic Prompting
* *"Why did the suite report green while the build is broken? How do we keep mocks synchronized with reality?"* (A mock built against an outdated response shape can make a test pass even though the real API has since changed — the test is checking the mock, not reality. Mocks need to be revisited whenever the real API's shape changes, or they silently stop meaning anything.)
* *"What does declaring something 'tested' obligate you to have actually checked?"* (A green coverage report that never exercises the failure path is a false promise to whoever reads it next — including future you. "Tested" should mean the failure paths were checked too, not just that some line of the happy path executed once.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Map the game's integration seams (input→state, state→render, client→API), pick the highest-risk flows, and outline test flows (trigger → mocked response → verify state/DOM), then prompt the AI to write integration tests for those seams including error-path renders, run coverage, and write one more test targeting the biggest uncovered branch.
* **Logical Constraints (Rules)** field: At least one integration test must mock a FAILURE response, not just the happy path; the coverage report must be read for risk, with at least one real gap named and defended.
* **Edge cases to handle** field: A mocked payload shape must match the real API's current response shape — a stale mock is worse than no test at all.
* **Expected AI output** (sourced from the L4 curriculum doc's Tutor Manual — pattern):
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

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 7 card tracks **Sprint 4: Integration Tests**.

1. **Plan & Design** — *Expected:* the integration seams mapped and ranked by risk, with the highest-risk flows selected for testing.
2. **Write AI Prompt** — *Expected:* a prompt asking for an integration test mocking a failed API response (500 or rejected promise) and asserting the correct UI failure state.
3. **Review & Explain** — *Expected:* the student defends which coverage gaps are acceptable and why.
4. **Test & Break** — *Expected:* the coverage report is read and at least one real gap is named; the mocked-failure test asserts the UI's failure state, not just that the function was called.
5. **Iterate & Improve** — *Expected:* the biggest uncovered branch from the report now has a test.

* **Homework Evaluation Checklist**: the mocked fetch must include a failure scenario (500 / rejected promise) and assert the handler's state, not just the happy path.

---

## Session 8: "Sprint 5: Performance & Polish"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:20 | Standup & Performance Budget |
| 0:20–1:30 | Build Loop (AI Assisted) |
| 1:30–1:45 | Feature Freeze Review |
| 1:45–2:00 | Socratic Debugging: The Giant Payload Freeze |

### 1. Board Lesson / Standup Talking Points
* **Profiling With Real Tools**: Lighthouse and the Performance tab — fix the top *profiled* bottlenecks, not the ones that feel slow by guesswork.
* **Memory Discipline at Product Scale**: the Level 2 lesson (prune object pools, cap arrays, stabilize frame rate) now applied to a real, shipping product instead of a lab exercise.
* **The Feature Freeze**: every PRD Must story demonstrably done — nothing new enters after this session. Enforcing the freeze *is* the lesson; students will want to add "just one more thing."

### 2. Socratic Prompting
* *"Why does rendering 10,000 elements crash the tab? What does pagination change about what the DOM has to hold?"* (The DOM has to create, lay out, and paint every element regardless of whether it's visible on screen — 10,000 live elements is 10,000 real objects the browser must track. Pagination or virtualization means the DOM only ever holds what's actually visible, no matter how large the underlying dataset grows.)
* *"Who can't play your game as shipped today?"* (Heavy, unoptimized games exclude players on low-end devices and slow connections — performance is an accessibility and inclusivity question, not just a technical nicety. Every unclosed performance gap is a real player who can't play.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Set measurable performance targets (stable 60 FPS during play; LCP under 2.5s; no unbounded arrays) and run the baseline profile, then fix the top profiled bottlenecks (sprite pruning, pagination/virtualization of long lists, asset sizes), re-profile, and burn down any remaining Must-story gaps.
* **Logical Constraints (Rules)** field: Before/after profiler numbers must show measurable improvement, not just a claim that it "feels smoother"; every PRD Must story must be marked either demonstrably done or explicitly cut in this session's log.
* **Edge cases to handle** field: A 10,000-item list or 10MB mock payload injected into the heaviest view must not freeze the tab after the fix.
* **Expected AI output** (sourced from the L4 curriculum doc's Tutor Manual — pattern):
  ```javascript
  let currentPage = 1;
  const pageSize = 50;

  async function fetchScoresPage(page) {
    const res = await fetch(`/api/scores?page=${page}&limit=${pageSize}`);
    const data = await res.json();
    appendScoresToUI(data.scores);
  }
  ```

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 8 card tracks **Sprint 5: Performance & Feature Freeze**.

1. **Plan & Design** — *Expected:* measurable performance targets set (FPS, LCP, array caps) and a baseline profile recorded.
2. **Write AI Prompt** — *Expected:* the AI is given the actual profiler output and prompted to fix the specific bottleneck functions identified, not a generic "optimize this" request.
3. **Review & Explain** — *Expected:* the student walks the PRD Must line story-by-story with the tutor, with every story marked done or cut.
4. **Test & Break** — *Expected:* before/after FPS, LCP, and array-cap numbers show measurable improvement.
5. **Iterate & Improve** — *Expected:* no new feature work is planned after this session — the freeze holds.

* **Homework Evaluation Checklist**: the before/after performance numbers and the 3 changes that moved them must be recorded concretely, not described vaguely.

---

## Session 9: "The Pipeline: CI/CD"

*(This session opens Module 3: Ship & Operate, returning to the full lesson-timeline format.)*

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: YAML Mapping |
| 0:15–0:35 | Board Lesson: Deployment Pipelines |
| 0:35–0:55 | Design Phase: Pipeline Flow Diagram |
| 0:55–1:30 | Build Phase (AI Assisted): Coding the Pipeline |
| 1:30–1:45 | Socratic Debugging: The Broken Pipeline |
| 1:45–2:00 | Ethics: Automated Gates |

### 1. Board Lesson Talking Points
* **Commit Triggers → Build → Test → Deploy**: why humans are removed from the repetitive path — a pipeline runs the exact same checks every time, with no chance of skipping a step under deadline pressure.
* **YAML Structures**: jobs, steps, env keys — the syntax of `.github/workflows/deploy.yml`, read as a sequence of ordered steps.
* **Deploy Gates**: production is blocked while tests return error exit codes — a gate is only worth having if it can actually stop a bad deploy, not just log a warning.

### 2. Socratic Prompting
* *"Why did the deploy stop? Read the logs upward from the failure — where exactly did the pipeline halt?"* (A YAML syntax error or a failing test command causes the staging build to fail, and the pipeline halts at that exact step — reading the log from the failure line upward shows precisely which step never completed, rather than guessing at the whole pipeline.)
* *"Why should critical changes require automated checks before a human can say yes? Who is the gate really protecting?"* (GitLab's 2017 incident involved a production database deleted by hand because safeguards were bypassable. An automated gate protects against exactly the failure mode of "an authorized person, in a hurry, skips the check" — it protects the team from its own best-intentioned mistakes under pressure.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Sketch the capstone's pipeline (push → lint → Vitest → build → deploy staging → manual gate → production), then prompt the AI to generate `.github/workflows/deploy.yml`, push a commit and watch it run, and deliberately push a failing test to watch the gate hold.
* **Logical Constraints (Rules)** field: The YAML must run steps in a meaningful order (lint/test before deploy, never after); a genuinely failing test must actually block the pipeline, not just log a warning.
* **Edge cases to handle** field: A deliberately failing test push must be verified to actually block the deploy — the "gate holds" claim needs to be demonstrated, not assumed.
* **Expected AI output** (sourced from the L4 curriculum doc's Tutor Manual):
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

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 9 card tracks **CI/CD Pipeline**.

1. **Plan & Design** — *Expected:* the pipeline flow diagram sketched (push → lint → test → build → deploy staging → gate → production).
2. **Write AI Prompt** — *Expected:* a prompt asking for a GitHub Actions workflow that installs, lints, tests, and builds on every push.
3. **Review & Explain** — *Expected:* the student explains why the steps run in this specific order and not another.
4. **Test & Break** — *Expected:* a passing-tests commit goes green end-to-end; a deliberately failing commit blocks the pipeline and the deploy does not run.
5. **Iterate & Improve** — *Expected:* if a broken build ever goes green, the student identifies which step should have caught it and adds that check.

* **Homework Evaluation Checklist**: the YAML fragment must parse (correct indentation), and steps must run in a meaningful order (lint before tests is acceptable; deploy before tests is not).

---

## Session 10: "Operate: Monitoring, Logging & the Beta Test"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Stack Trace Audit |
| 0:15–0:35 | Board Lesson: Observability & UAT |
| 0:35–0:55 | Design Phase: Log Schema & UAT Script |
| 0:55–1:30 | Build Phase (AI Assisted): Logger + Beta Run |
| 1:30–1:45 | Socratic Debugging: The Silent Fail |
| 1:45–2:00 | Ethics: When Monitors Fail |

### 1. Board Lesson Talking Points
* **Structured Logging vs. Raw Prints**: log levels (DEBUG/INFO/WARN/ERROR) and alert fatigue — alert on repeated 500s, not every 404. A log that treats everything as equally urgent teaches everyone to ignore it.
* **UAT and the Triage Matrix**: verifying the PRD against real users; Severity (Blocker/Major/Minor) × Priority. This is the first time in the course the "users" are genuinely real people outside the classroom.
* **The Hostile User Is Normal**: sanitize inputs, clamp extremes, cap lengths — a beta tester who breaks something by accident today is standing in for an attacker who'd do it on purpose tomorrow.

### 2. Socratic Prompting
* *"The player saw an error page and our logs are empty — where did the exception go? What does an unlogged failure cost during a real launch?"* (If the error-handler middleware isn't wired up correctly, an exception can be caught and a generic error page shown without ever being written to a log — leaving no trace to diagnose from. During a real launch, an unlogged failure means the team finds out about a problem from angry users instead of from monitoring.)
* *"When software fails to report its own failures, who pays?"* (The Boeing 737 MAX crashes (2018–2019) were worsened by cockpit alerts that failed to surface faulty sensor data to pilots. When monitoring itself fails silently, the people downstream — players, in this case — absorb a problem nobody upstream even knew was happening.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Design the log entry schema (timestamp, level, endpoint, userId) and write the beta test script and findings form, then prompt the AI for the structured logger middleware and input sanitizers, and run a live mini-beta (2–3 testers) while watching the logs and filing findings into the triage matrix.
* **Logical Constraints (Rules)** field: Every server error must produce a structured JSON log line, not a raw console print; at least one beta finding must be honestly labeled a Blocker, not softened.
* **Edge cases to handle** field: A genuinely hostile input from a live tester (not a scripted test case) must be caught by a sanitizer during the actual beta run.
* **Expected AI output** (sourced from the L4 curriculum doc's Tutor Manual):
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
  ```javascript
  function sanitizeInput(inputStr) {
    if (typeof inputStr !== "string") return "";
    return inputStr.slice(0, 50).replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  ```

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 10 card tracks **Monitoring & Beta Test**.

1. **Plan & Design** — *Expected:* the log entry schema designed, plus a beta test script and findings form for real testers to follow.
2. **Write AI Prompt** — *Expected:* a prompt for structured logger middleware and input sanitizers.
3. **Review & Explain** — *Expected:* the student explains why alert fatigue matters — why alerting on every 404 would be worse than not alerting at all.
4. **Test & Break** — *Expected:* a live mini-beta with 2–3 real testers runs while the student watches logs; a server error during the beta produces a structured JSON log line.
5. **Iterate & Improve** — *Expected:* any tester crash that produced no log entry is treated as a logging gap and fixed immediately.

* **Homework Evaluation Checklist**: log output must be stringified JSON with timestamp/level/message/path keys; beta findings must carry both a severity and a priority, and at least one must be an honestly-labeled Blocker.

---

## Session 11: "Handoff: Documentation & Launch Prep"

### Minute-by-Minute Timeline
| Time | Segment |
|------|---------|
| 0:00–0:15 | Warm-Up: Setup Guide Audit |
| 0:15–0:35 | Board Lesson: The Handoff Lifecycle |
| 0:35–0:55 | Design Phase: Docs Blueprint |
| 0:55–1:30 | Build Phase (AI Assisted): Write, Verify, Burn Down |
| 1:30–1:45 | Socratic Debugging: The Missing Setup |
| 1:45–2:00 | Ethics: Building on Others' Work |

### 1. Board Lesson Talking Points
* **Documentation as the Product's Front Door**: install steps, prerequisites, env setup — a README is the first thing anyone (including future you) touches before they can even run the project.
* **OpenAPI Specs**: paths, parameters, schemas, responses — a formal enough shape that a stranger (or an AI) could build a client against it without reading the implementation.
* **Launch Checklists and Rollback Plans**: *(awareness)* feature flags and canary rollouts as how big products de-risk launches — beyond this course's scope to implement, but worth naming as the next step up in sophistication.

### 2. Socratic Prompting
* *"It works on your machine and died on mine. What did your documentation assume that it never stated?"* (A clean-machine test — the tutor following the README from zero — exposes every unstated assumption: an env var the student set once and forgot about, a seed script that was never documented. Documentation that works only because the author already has the right local state isn't documentation, it's a memory aid for one person.)
* *"What do you owe the next developer — including future-you? How does documentation quality shape security auditability?"* (Heartbleed (2014) lived in OpenSSL partly because critical code was under-documented and under-audited — reviewers couldn't efficiently verify what they couldn't easily understand. Clear documentation isn't just courtesy; it's what makes a codebase auditable at all.)

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide
* **Task description** field: Outline the README, list every env var, and assemble the launch checklist from the release sweep and beta triage, then prompt the AI to draft the README and API spec from the codebase, verify it by clean-machine test (the tutor follows it from zero), and burn down remaining Blocker/Major findings.
* **Logical Constraints (Rules)** field: The clean-machine test must actually pass — the tutor's from-zero run must succeed without asking the student anything; every ADR must contain Status, Context, Decision, Consequences with a real named cost.
* **Edge cases to handle** field: Every step the tutor has to ask about during the clean-machine test is a documentation gap and must be added to the README before the session is considered done.
* **Expected AI output** (sourced from the L4 curriculum doc's Tutor Manual — pattern):
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

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 11 card tracks **Docs & Launch Prep**.

1. **Plan & Design** — *Expected:* the README outlined and every env var listed before drafting begins.
2. **Write AI Prompt** — *Expected:* a prompt asking the AI to draft the README and API spec directly from the actual codebase and env var usage.
3. **Review & Explain** — *Expected:* the student explains what the clean-machine test is actually checking for.
4. **Test & Break** — *Expected:* the tutor follows the README on a machine that's never seen the project; it succeeds without the student's help.
5. **Iterate & Improve** — *Expected:* every gap the clean-machine test exposed is added to the README; all Blocker/Major beta findings from Session 10 are closed.

* **Homework Evaluation Checklist**: the ADR must contain Status, Context, Decision, Consequences; the clean-machine README test is this session's pass/fail gate — docs that fail it are not done.

---

## Session 12: "The Grand Launch & System Defense"

*(This session opens and closes Module 4: Launch. It is a live, in-session assessment — there is no new AI Prompt Sandbox task; this is the defense of everything built across the level.)*

### In-Session Assessment Timeline (2 hours)
| Time | Segment |
|------|---------|
| 0:00–0:40 | Part 1: The Product Pitch |
| 0:40–1:20 | Part 2: Engineering Tour |
| 1:20–1:45 | Part 3: Live Chaos Defense |
| 1:45–2:00 | Part 4: Retrospective & Graduation |

### 1. Tutor Guidance: Assessment Solutions
* **Part 1 (Product Verification)**: play the student's live game yourself for 5 minutes *before* the pitch begins; verify the shareable URL works from outside the classroom network. The student presents the core loop, the player journey, and maps the PRD's promises to what actually shipped — including what was honestly cut and why.
* **Part 2 (Apparatus Audit)**: require *evidence on screen* — a red pipeline run that blocked a merge, a green deploy run, a coverage report, one real beta log entry. A verbal description without the actual artifact on screen does not satisfy this part.
* **Part 3 (Chaos Script)**: run the tutor's "Chaos Monkey" persona at minimum: (1) extreme/garbage input into every form field — must sanitize or reject; (2) kill the network mid-save — the UI must surface the failure and roll back; (3) replay a cross-user payload attack — must 401/403; (4) key-mash + restart storm — no crash, no frozen state. The student defends in real time, running the debugging protocol out loud on anything that breaks.
* **Part 4 (Retrospective Check)**: the final retrospective must reference the Session 1 scope contract explicitly — what was promised vs. what shipped is the capstone's honesty test, not just a feel-good wrap-up.

### 2. Socratic Prompting (for the Live Defense)
* *"What was promised vs. what shipped — can you account for every difference?"* (A strong answer traces every cut feature back to a specific sprint log entry where the cut was made openly, not discovered for the first time during this defense.)
* *"Whatever breaks during chaos testing — walk me through what you're checking right now."* (This question forces the debugging protocol out loud — reproduce, isolate, hypothesize, fix, re-test — rather than silent trial-and-error. A student who narrates their diagnosis, even if the fix takes longer, is demonstrating the actual Level 4 skill being assessed.)

### 3. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The Lab 12 card tracks **The Grand Launch**.

1. **Plan & Design** — *Expected:* the live production URL, the full engineering apparatus (tests/coverage, CI/CD logs, structured logs, README/API spec/ADRs, commit/PR history) gathered and ready to present.
2. **Write AI Prompt** — *Expected:* none this session — no AI generation; this is the live defense.
3. **Review & Explain** — *Expected:* every PRD Must story works in the live deployed game, with any cuts logged and explained rather than silently missing.
4. **Test & Break** — *Expected:* the game survives live chaos testing — sanitizers hold, state rolls back, isolation rejects cross-user writes, logs capture every failure.
5. **Iterate & Improve** — *Expected:* the final retrospective ("My Journey from Syntax Writer to System Architect") explicitly references the Session 1 scope contract.

* **Homework Evaluation Checklist**: the final retrospective journal entry must reference the Session 1 scope contract explicitly and name at least one specific thing designed, one thing cut, one thing that broke, and one thing the student would build next.

### 4. Graduation
Grade against the rubric below. This is the platform's final capstone assessment — present the Level 4 Capstone certificate on a passing rubric average.

---

## Level 4 Assessment Rubric

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Product Completeness** (25%) | Every PRD Must story works in the live deployed game; cuts were made openly with logged rationale. | Must line shipped with minor gaps; cuts documented. | Core loop playable but several Must stories missing or broken. | Game not playable end-to-end in production. |
| **Test Engineering** (25%) | Unit + integration suites cover core logic and risky seams; boundary and failure paths tested; TDD evidence in history. | Good coverage with minor edge-case gaps. | Basic tests only; happy-path bias; coverage gaps unexamined. | No meaningful automated tests. |
| **DevOps & Operations** (20%) | Pipeline gates merges and deploys automatically; structured logs captured real beta failures; README passes the clean-machine test. | Pipeline works but bypassable; logs or docs thinner than the product needs. | Manual deploys; sparse logging; docs incomplete. | No pipeline, no structured logs, no usable docs. |
| **Independent Defense** (30%) | Survives chaos testing with visible defenses; explains every design decision from their own artifacts (PRD, ADRs, commits) without prompting. | Solid defense; struggles on deep concurrency/failure questions. | Cannot connect parts of the system to their own decisions. | Cannot explain or defend the system. |

**Graduation Criteria:**
- Rubric-weighted average of 3.0 or higher.
- A live, publicly reachable deployment with the full artifact trail (PRD, ADRs, commit/PR history, CI/CD logs, structured logs, README/API spec).
- Survives the live chaos defense with visible, explained recovery — not just "it didn't crash," but "here's what caught it and why."

