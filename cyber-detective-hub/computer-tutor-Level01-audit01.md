# Computer Tutor — Level 1 Audit (audit01)

**Date:** 2026-07-11
**Scope:** Level 1 platform (app code) + Level 1 documents, reviewed starting from `PRJ_KNOWLEDGE.md` as the source of truth.
**Sources reviewed:**
- Code: `src/App.jsx` (CONCEPT_REFERENCES, CAMPAIGN_THEMES, S1 simulator, S2–S12 exercise sets and validators, quest gating/claiming, Project Journal, Admin), `src/curriculumData.js` (L1 sessions), `src/projectTasksData.js` (l1-s1…l1-s12 milestones), `server.cjs`
- Docs: `../PRJ_KNOWLEDGE.md`, `../L1-Computer_Tutor_AIEra_Curriculum.md`, `../L1-Computer_Tutor_Teacher_Guideline.md`, `../cyber-detective-hub_user-manual.md`, `../Computer_Tutor_AIEra_Curriculum_Overview.md`
- Verification: static code reading + cross-referencing; `npm run lint` (passes clean — note oxlint does **not** flag the crash in A1). The app was **not** run live for this audit; findings marked "static" were verified by reading code paths, not by reproduction.

Legend: 🔴 broken logic / bug · 🟠 inconsistency that misleads students or teachers · 🟡 minor drift / polish · 💡 improvement suggestion

---

## A. Broken Logic (app bugs)

### A1. 🔴 Project Journal "Reset Fields" crashes the app
`src/App.jsx:6429` calls `setEditingPlanData('')` — **this state setter no longer exists** (the plan fields were merged into `editingPlanSpecs`; see `deserializeJournalData` comment at `App.jsx:2435`). Clicking **Reset Fields** in any Project Journal entry throws `ReferenceError: setEditingPlanData is not defined`, and because it happens inside a React event handler the whole app unmounts (white screen) until reload.
- Also in the same handler: `editingPlanVision` is *not* reset, so even after the fix, "Reset" would leave the Visual Concept field populated.
- oxlint does not catch this (no-undef not enforced), which is why it survived the "lint clean" verification of the last commit.
- **Fix:** delete the `setEditingPlanData('')` line and add `setEditingPlanVision('')`.

### A2. 🔴 Quest Board "Deliver Quest Evidence" bypasses the exercise gating entirely
`src/App.jsx:3754-3762`: the claim button renders whenever the session is unsolved and not sequence-locked. It never checks `exerciseProgress`. A student can open the Quest Board and chain-claim `l1-s1 → l1-s2 → … → l1-s5` (the sessions listed in `CAMPAIGN_THEMES`) **without passing a single sandbox exercise**, defeating the "XP only when ALL exercises pass" design that the auto-claim `useEffect` (`App.jsx:3069-3082`) was built to enforce.
- Related XP mismatch: the button awards `selectedSession.xp` (120 XP for `l1-s5` per `CAMPAIGN_THEMES`), while the exercise auto-claim awards a hardcoded `100` (`App.jsx:3074`). Same quest, two different rewards depending on which path claims it.
- **Fix options:** (a) gate the button on `exerciseProgress[sessionId].length >= EXERCISE_COUNTS[sessionId]` for L1 sessions, or (b) remove the manual claim button for sessions that have exercise labs and let the auto-claim be the single authority (matching its "single claim authority" comment). Unify the XP value in one place either way.

### A3. 🔴 Sessions 7 & 8 sandboxes promise live execution that never happens
No exercise in `S7_EXERCISES` or `S8_EXERCISES` has `runnable: true` (E7.4 is deliberately non-runnable — infinite-loop bug — per the comment at `App.jsx:1402`, but E7.5/E7.9/E7.10 and all four S8 Test/Iterate steps are also non-runnable). Yet:
- The S7 preview placeholder tells students to *"Jump to the 'Iterate & Improve' exercise to see live code execution"* (`App.jsx:5328`) and S8's says *"Jump to a 'Test & Break' or 'Iterate & Improve' exercise…"* (`App.jsx:5438`) — following that instruction shows the same placeholder again.
- The teacher guideline states for both sessions that *"only the Test & Break and Iterate & Improve steps run live in the preview"* (`L1-Computer_Tutor_Teacher_Guideline.md:771` and `:874`) — false for every S7/S8 step.
- **Fix:** either add `runnable: true` to the safe S7/S8 steps (E7.5, E7.9, E7.10, E8.9, E8.10 are all safe — no infinite loops), or reword the placeholders and the guideline paragraphs for these two sessions.
- Lesser variants of the same claim: in S4/S11/S12 the final "Iterate & Improve" capstone steps (E4.10, E11.10*, E12.5, E12.10) are not runnable either, so the guideline's blanket sentence is only approximately true there too. (*E11.10 is not runnable; E11.5 is.)

### A4. 🔴 E5.4 / E5.5 live preview always throws an error — even for the correct answer
Both exercises are `runnable: true`, but their snippets are bare `if (event.key === …)` blocks. `buildJsSandboxPreview` (`App.jsx:1049`) injects student code at the **top level** of the iframe script, where `window.event` is `undefined` — so the preview immediately posts `Cannot read properties of undefined (reading 'key')` to the terminal, before and after the student fixes the string. The iframe hint ("press ArrowLeft/ArrowRight to test your code live") cannot work because the snippet isn't wrapped in a listener. Students see an error on a *correct* solution — the opposite of the lesson.
- **Fix:** either preload these two with the full `window.addEventListener("keydown", function(event) { … })` wrapper (as E6.4/E6.5 already do, which run fine), or drop `runnable` from E5.4/E5.5.

### A5. 🟠 Entering a session from the Exercises tab sidebar leaves the editor empty / stale
The sandbox sidebar click handler (`App.jsx:4136-4142`) only sets `sandboxSessionId` and resets the active-exercise index **for s1–s4**. It does not call `loadTemplate` and never sets any `sXCodeInput`. Consequences:
- First visit to any S2–S12 session via the sidebar shows an **empty code editor** (initial state is `''`) instead of the exercise's preloaded scaffold; the student must click an exercise tab to get content.
- For s5–s12 the active exercise index, success flag, and logs are not reset at all when switching sessions.
- The prompt-spec fields (`sandboxRole`, `sandboxTask`, …) keep the previous session's values, which then get written into the journal snapshot on claim (`claimCaseEvidence` at `App.jsx:3017`).
- **Fix:** make the sidebar click call `loadTemplate(session)` (it already handles all 12 L1 sessions correctly).

### A6. 🟠 Validator robustness: correct answers rejected over quote style
- **E2.4** (`App.jsx:532-535`): the second accepted pattern is `'<divid=\'game-track\'><divid=\'player-car\'></divid></divid>'` — `</divid>` is not producible from valid HTML, so this branch is dead. Net effect: a student who writes the correct fix with **single-quoted attributes** is rejected; only double quotes pass.
- **E11.10** (`App.jsx:2008`): requires the literal `.key===""` after whitespace-stripping — a correct `event.key === ' '` (single quotes) fails. The hint shows double quotes, but nothing in the curriculum forbids single quotes, and Session 5's samples use double quotes only by convention.
- **Fix:** normalize quotes in `validate` (e.g. `code.replace(/'/g, '"')`) before matching.

### A7. 🟠 Server: new-student seeded journal is silently scrubbed by the data-fix migration
`server.cjs:605` seeds every new student's `_j1` journal v1 with the intentionally-flawed *"Household IPO Blueprint: Microwave (Draft v1)"* example (used by Session 1's ambiguity-analysis discussion). But the always-run migration at `server.cjs:203-207` rewrites any `%_j1` version-1 code containing `Microwave (Draft v1)` back to the blank placeholder template. Result: after the next cold start / `createTables()` run, freshly-registered students lose the seeded worked example the teacher guideline assumes they have.
- **Fix:** exclude the current seed text from the migration's LIKE patterns (the migration was meant to purge the *old sandwich/microwave pre-fills*, not the current seed), or change the seed to the placeholder template intentionally and update the guideline.

---

## B. Consistency — inside the app

### B1. 🟠 `CONCEPT_REFERENCES` is stale for the reworked Sessions 4–5 and missing for 6–12
The Curriculum tab's "Concept Reference" panel (`App.jsx:4093`) serves:
- `l1-s4` → **conditionals / logical operators / safety overrides** — that is now **Session 6** content. Session 4 (JS Variables & Math) students see the wrong concepts.
- `l1-s5` → **for/while loops / infinite loops** — that is now **Session 7** content. Session 5 (Keydown Events) students see loops.
- `l1-s6` … `l1-s12` → generic placeholder fallback ("Interactive Hands-on Application"), i.e. no real reference content for 7 of 12 sessions.
- **Fix:** shift the existing s4→s6 and s5→s7 entries, then author entries for s4 (variables/types), s5 (events), and s8–s12 (functions/scope, rAF loops, AABB, DOM API, config/QA).

### B2. 🟠 `CAMPAIGN_THEMES` Level 1 is a half-migrated mix that violates the single-theme rule
PRJ_KNOWLEDGE §3 requires every session in a level to share one theme, and flags "domestic, baby-ish concepts" as inappropriate. In `App.jsx:113-483`:
- All three themes' L1 `mainQuest` correctly says *"Operation: Racing Car Autopilot"*, and s2/s3 were unified to the racing sessions — but **s4 and s5 still carry the pre-rework content**: cyberpunk s4 *"Decisions, Decisions"* (sector thermostat), s5 *"The Automated Pet Grid"* (**cat feeder** — exactly the domestic framing §3 forbids); mars s4/s5 (habitat thermostat / water recycling); magic s1/s4/s5 (spell book / cauldron runes / mana loops).
- These stale cards are what students actually see on the Quest Board (title, objective, activity, homework) — e.g. a student clicking quest `l1-s4` reads about thermostats, then "Open Exercise" drops them into the **JS Variables** sandbox. The homework text also disagrees with the real Session 4/5 homework in `curriculumData.js`.
- The Quest Board lists only these 5 sessions for L1 with the caption *"Playable Exercise Quests Only"* (`App.jsx:3674`) — stale since the rework: **all 12** L1 sessions now have claimable exercise labs, but s6–s12 never appear on the Quest Board and are only claimable via the background auto-claim (students get no visible quest card, XP appears "out of nowhere").
- Given the recorded decision (fixed per-level themes now; teacher theme-picker deferred), the cleanest fix is to make L1's session list identical racing-car content across the three themes (as s2/s3 already are) — or better, list all 12 sessions from `CURRICULUM_DATA` — and reserve theme-variant copy for the levels where it's actually maintained.

### B3. 🟠 `projectTasksData.js` L1 milestone details drift from the sessions they belong to
- **l1-s7**: `vision` says *"Other cars (obstacles) now appear on the road"* and `targetOutcomeCaption` says *"Obstacle cars now spawn automatically via a for-loop and scroll down the track"* — but Session 7 (exercises, prompt guide, flow, sample code) builds **static lane markers**; obstacles and scrolling arrive in Session 9. The Target Outcome preview shows obstacles the student's file won't have yet.
- **l1-s7** class-name split: `flow`/`promptGuide` say `lane-divider-dash`, while `sampleGeneratedHtml` and all S7 exercises/validators say `marker-dash`.
- **l1-s8** is the only L1 entry missing `iterationGuide` — the Iterate tab then renders an empty "💡 Iteration Guideline:" box (`App.jsx:6378-6381`). Its `targetOutcomeCaption` also names `steerPlayer()`, a function that exists nowhere else (sessions use `updatePlayerPosition()`).
- **l1-s10** collision sample uses player 30×50 at `y: 430` and obstacle 25×40 — those are the **in-app sandbox preview's** sprite sizes. The student's real project car (per l1-s2/l1-s3 `sampleGeneratedHtml`) is **60×100 at bottom:20** (top = 380). A student who copies the milestone rects into their real game gets a hitbox half the size of their car. The teacher guideline (line 687) even asserts "Sprite dimensions match the Project Journal" — true only against s10 itself, not against the project's own CSS from s2/s3.
- **L2 spillover from the L1 rework**: L1 entries now use `planSpecs.{vision,parts,flow}` and the Plan tab reads exactly those (`App.jsx:6272/6281/6290`), but `l2-s1`…`l2-s13` still use the old `{hierarchy,variables,flow}` shape → L2 students see placeholders rendered as `"Planned look & feel:\nundefined"`. Either migrate the L2 entries or make the placeholder fall back when the field is absent.

### B4. 🟡 Minor app-side leftovers
- Stale comment *"Level 1 Session 1 (Drone Navigator) Simulator States"* at `App.jsx:2248` (theme is now car autopilot); duplicated banner comment at `App.jsx:4178-4179`.
- The generic sandbox's mock generator and Chaos Monkey (`handleGenerate`/`runChaosMonkey`) still branch on `drone|feeder|cat|water` — keywords from the retired L1 themes. Harmless for L1 (all 12 sessions use bespoke labs) but dead weight tied to B2's stale content.
- Typo "park an vehicle" in `curriculumData.js` l1-s1 `warmUp` and in the cyberpunk theme's s1 activity.
- `curriculumData.js` l1-s11 `miniLesson` teaches `.innerText` and `display: "block"/"none"` toggling, while the S11 exercises standardize on `textContent` and `classList` `.hidden` toggling (the exercises are right; the mini-lesson blurb wasn't updated).
- l1-s11 homework (app + curriculum doc): *"when the player car's coordinate reaches lane limit 0"* — the lane convention is 35/165/295; "0" is the pre-rework boundary (or should say "the leftmost lane, 35px").

---

## C. Consistency — documents vs app

### C1. `L1-Computer_Tutor_AIEra_Curriculum.md`
Overall this file is well-synced with the app (S1–S12 tutor manuals match the validators, 35/165/295 everywhere, the S9 "500 not 600" and S11 `" "`-not-`"Space"` notes are correct). Remaining drift:
- 🟠 **Line ~46 (Session 1, "Digital Concept Practice")**: still instructs arranging `Power On, Scan Subnet, Establish SSH Tunnel, Bypass Firewall, Exfiltrate Logs` blocks — the pre-rework hacker-infiltration activity. No such simulator exists; the app's sequencer is the car-autopilot lab described immediately below it. Also "Cyber Security-Autonomous Vehicle Simulator" (line 49) is a theme-mix leftover.
- 🟡 **Line ~393 (Session 6 Socratic Debugging)**: says the tutor changes the operator *"from `< 0` to `<= -130`"* — 0-based boundaries. The app (and this same doc's tutor manual at line 415) uses `carX > 35` → `carX >= -130`.
- 🟡 Session 11 homework "lane limit 0" (see B4, last bullet).

### C2. `L1-Computer_Tutor_Teacher_Guideline.md`
The regenerated S2–S12 answer keys check out against the app validators (spot-checked S2, S6, S11, S12 in full — model answers all pass). Remaining issues:
- 🔴 The "run live" paragraphs for **Sessions 7 and 8** are factually wrong (see A3).
- 🟠 **Session titles S2–S8 differ from the app and the curriculum doc** — e.g. guideline "Designing the Game Track: HTML & Nesting" vs app "Starting the Game: HTML Structure & Basic Elements"; "Car State Variables: Primitive Types" vs "Tracking Game State: JS Variables & Math"; most tellingly S7 "**Spawning Obstacles**: Loops & Dynamic Lists" for a session whose exercises build lane **markers** (the same drift as B3/l1-s7). S9–S11 titles match. Pick one canonical title set.
- 🟡 S2 milestone Socratic answer (line 301) uses `element.innerText = score`, but the platform standardizes on `textContent` (the guideline's own S11 note says so).
- 🟡 S2 "Homework Evaluation Checklist" (line 312) describes a *"parking garage (Garage ➔ Floor ➔ Bay ➔ Car)"* nesting exercise, but the actual homework everywhere else is a *sidebar + main container garage dashboard*.
- 🟡 S10 note "Sprite dimensions match the Project Journal" — see B3's l1-s10 finding: it matches only the s10 entry, not the project's actual car CSS.

### C3. `cyber-detective-hub_user-manual.md`
The stalest L1 document — several chapters describe UI that no longer exists:
- 🟠 **Ch5 "Active Sandbox Quests Index"** lists L1 Session 4 as *"Decisions, Decisions"* and Session 5 as *"The Automated Pet Grid"*. It faithfully mirrors the stale `CAMPAIGN_THEMES` (B2), so fixing B2 requires re-fixing this index too — and post-rework it should list **all 12** L1 sessions, not 5. The whole "Conditions for a Session to have a Quest" subsection is likewise obsolete for L1 (every session now has a lab).
- 🟠 **Ch6 (Prompt Sandbox)** documents a "Run Simulator (Green)" / "Submit Case File (Blue, unlocks after validation)" workflow and a "Telemetry State Monitor" — none of which exist. The actual UI is the per-exercise "Verify" flow (L1) and "Run AI Generator" / "Launch Chaos Monkey" (L2–L4). Ch11's FAQ about the disabled "Submit Case File" button troubleshoots a nonexistent button.
- 🟠 **Ch8 Teacher Mode** promises three overlay panels ("Socratic Prompting Guidelines", "Socratic Check Questions", "Teacher Solutions Key"). The app's Teacher Mode (`App.jsx:4016-4040`) shows warm-up / mini-lesson / activity — **no Socratic panels and no solutions key** (those live only in the teacher guideline doc). Either build them or fix the manual.
- 🟡 **Ch3 sidebar names** are stale: "Quest Files / Prompt Sandbox / Prompt Journal / Curriculum Guide" vs actual "Quest Board / Exercises Journal / Project Journal / Curriculum Syllabus Catalog".
- 🟡 Ch10 theme names ("Mars Rover Colony", "Wizarding School Castle") vs app ("Mars Colonization Mission", "Magic Academy Chronicles"); Ch4's sample feed "Solved Case: Chef Grid" is pre-rework; Ch9's "Current Operation" column actually displays the student's assigned level, not their active session.

### C4. `Computer_Tutor_AIEra_Curriculum_Overview.md`
- 🟡 L1 module names in the ASCII map (lines ~196-200) drift from `curriculumData.js`: "State, Controls & Clamps" vs "Game State, Input & Boundaries"; "Collision & UI Dashboard" vs "Collision Detection & Dashboard Systems"; and "**Loops, Functions & Loops**" is a typo (the app calls it "Problem Decomposition & The Logic Map").

### C5. `PRJ_KNOWLEDGE.md` (source of truth) — one clarification needed
- 🟡 §6 states *"The platform does not execute or render the game code internally in v1"* and lists *"Sandboxed Game Preview (iframe)"* as a **v2** upgrade — but the L1 Sessions 4–12 sandboxes already execute student JavaScript live in an iframe against a racing-game DOM (`buildJsSandboxPreview`). This is arguably fine — §3 *requires* interactive visual simulators for L1 sandbox exercises, and §6 is about the student's real project files — but the two sections now read as contradictory. Recommend one sentence in §6 distinguishing "sandbox micro-exercise execution (in scope, exists)" from "rendering the student's actual game project file (v2)".
- 🟡 Homework across L1 promises "+50 XP" per session, but no in-app mechanism awards homework XP (the teacher edits points manually via the Admin roster). Worth documenting the intended flow in §4 or the teacher guideline so tutors know the +50 is a manual grant.

---

## D. Security / robustness (platform-level, found during the L1 pass)

### D1. 🔴 Login endpoint leaks credentials
`server.cjs:258-268`: a wrong username returns *the list of registered usernames*, and a wrong password returns *the expected password in plaintext* (`Expected: '${user.password}'`). Combined with plaintext password storage, anyone who can reach the login endpoint can enumerate and take over every account. Even for a classroom tool this is the first thing to fix — return a generic "Invalid username or password" for both cases.

### D2. 🟠 `POST /api/user/points` is client-authoritative
Any student token can set its own `points` to any value (`server.cjs:317-329`). The app only uses it for the Admin panel's self-XP debug buttons, but nothing stops a student from calling it from DevTools — which is, ironically, the exact scenario Session 4's ethics lesson (Candy Box / `score = 99999`) teaches them about. Suggest restricting it to teachers or deriving points server-side from quest claims only.

---

## E. Suggested fix order

| # | Item | Effort |
|---|------|--------|
| 1 | A1 — remove `setEditingPlanData` call (1-line crash fix) | trivial |
| 2 | D1 — stop leaking usernames/passwords at login | small |
| 3 | A2 — close the Quest Board claim bypass + unify XP (100 vs 120) | small |
| 4 | A3/A4 — S7/S8 runnable flags (or reword placeholders + guideline); wrap E5.4/E5.5 snippets in a listener | small |
| 5 | A5 — sidebar session click → `loadTemplate` | small |
| 6 | B1 — re-map CONCEPT_REFERENCES (s4→s6, s5→s7) and add s4/s5/s8–s12 entries | medium |
| 7 | B2 + C3-index — replace stale CAMPAIGN_THEMES L1 s4/s5; decide whether the Quest Board lists all 12 L1 sessions | medium |
| 8 | B3 — projectTasksData l1-s7/l1-s8/l1-s10 fixes; L2 planSpecs shape | small–medium |
| 9 | A6 — quote-normalization in validators; A7 — seed-vs-migration conflict | small |
| 10 | C1–C5 doc corrections (user manual Ch5/6/8 are the biggest) | medium |
| 11 | D2 — points endpoint hardening | small |

---

## F. Implementation Phases & Checklist

> Tracked fix plan for the findings above (same convention as `computer-tutor-audit01.md` §M). Work top-down: each phase leaves the app in a shippable state. Check items off as they land; items marked **⚖️ DECISION** need a product call before coding.
>
> **✅ Phases 0–2 completed 2026-07-11** (code-verified: `npm run lint` exit 0 with the new `no-undef` gate, `npm run build` clean, validator unit tests pass). A full click-through in a running app was **not** done (no live DB in this environment) — the browser-behavior lines in each Verify block are still open and are folded into Phase 5.1. Decisions taken: **1.1 → (b)**, **2.1 → (a) hybrid**, **2.3 → drop `runnable`** (see notes inline).

### Phase 0 — Stop-the-bleeding (crash + credential leak) — ✅ DONE 2026-07-11
- [x] **0.1 (A1)** Removed the `setEditingPlanData('')` call in the "Reset Fields" handler and replaced it with `setEditingPlanVision('')` so Reset now clears all three Plan fields (vision/specs/flow).
- [x] **0.2 (A1)** Enabled oxlint `no-undef` in `.oxlintrc.json` (added `env: { browser, node, es2024 }` so real globals aren't flagged). Verified: it fires on an undefined identifier and `npx oxlint` exits **1** on such a file, **0** on the current project — so the A1 class of bug now fails `npm run lint`.
- [x] **0.3 (D1)** Replaced both login error branches (`server.cjs`) with a single generic `"Invalid username or password"` — no username enumeration, no expected-password echo.
- [ ] **Verify (browser — deferred to 5.1):** click Reset Fields (no crash, all fields cleared); bad username and bad password both return the generic message. *(Lint half of this Verify: ✅ done.)*

### Phase 1 — XP & gating integrity (A2, D2) — ✅ DONE 2026-07-11
- [x] **1.1 (A2) → DECISION (b)**: The Quest Board's manual claim block now renders the "Deliver Quest Evidence" button **only for sessions with no exercise lab** (i.e. `!EXERCISE_COUNTS[id]` → L2–L4). For L1 sessions it shows a progress line ("Pass all N sandbox exercises to earn +X XP automatically (n/N done)…") and no button, so the auto-claim `useEffect` is the sole XP authority for L1 — closing the bypass.
- [x] **1.2 (A2)** Unified L1 XP at **100** everywhere: set `CAMPAIGN_THEMES` `l1-s5` `xp: 120 → 100` in all three themes, so the Quest Board badge/progress text (`selectedSession.xp`) matches the auto-claim's hardcoded 100.
- [x] **1.3 (D2)** Added `requireTeacher` to `POST /api/user/points` (`server.cjs`). Only `updatePointsDB` (teacher-only Admin buttons) calls it, so students now get 403; no legitimate caller is affected.
- [ ] **Verify (browser — deferred to 5.1):** student_demo can't claim from the Quest Board; finishing all s1 exercises awards exactly one 100 XP; a student token gets 403 from `/api/user/points`.

### Phase 2 — Sandbox execution & validator fixes (A3–A7) — ✅ DONE 2026-07-11
- [x] **2.1 (A3) → DECISION (a), hybrid**: Made the two genuinely-observable, hang-safe steps runnable — **E7.5** (streams `console.log` marker positions) and **E8.10** (binds the keydown handler → steer with arrow keys). **Did NOT** make E7.9 (bare `i*12` fragment → `i` undefined), **E7.10** (writing a loop from scratch → infinite-loop hang risk, same reason E7.4 stays non-runnable), or E8.4/E8.5/E8.9 (isolated declarations, no observable output) runnable — forcing those would reintroduce the exact "error/hang on a correct answer" failure A4 is about. Reworded the S7/S8 preview fallback strings to point at the now-runnable step, and updated the teacher-guideline "run live" paragraphs for S7 (line ~771) and S8 (line ~874) to match.
- [x] **2.2 (A3)** Reviewed E4.10/E11.10/E12.5/E12.10: all reference identifiers the sandbox iframe doesn't define (`CONFIG`, `score`, `gameActive`) or are write-from-scratch loops, so making them runnable would surface spurious errors/hangs on correct answers. Left non-runnable. The S4/S11/S12 guideline intros are accurate as-is (they say *which types* of steps run live, and each of those sessions does have runnable Test/Break + Iterate steps), so no wording change was needed there — only S7/S8 (which had **zero** live steps) were actually false and were fixed in 2.1.
- [x] **2.3 (A4) → dropped `runnable`**: Removed the `runnable` flag from E5.4 and E5.5. Both are bare `if (event.key …)` fragments with no DOM output; running them threw `Cannot read properties of undefined (reading 'key')` even on the correct answer (directly contradicting E5.4's "silent input fail" lesson). Dropping runnable is cleaner than wrapping (there's nothing visible to observe either way); E5.9/E5.10 remain the runnable Test/Break + Iterate steps for S5. Updated the S5 guideline note (line ~461) accordingly.
- [x] **2.4 (A5)** Sidebar session click in the Exercises tab now calls `loadTemplate(session)` (plus a `setS1ActiveExercise(1)` reset, which `loadTemplate` doesn't cover for s1) — so every entry path initializes the editor, prompt-spec fields, exercise index, logs, and success flags for all 12 sessions.
- [x] **2.5 (A6)** Added `.replace(/'/g, '"')` quote-normalization to the E2.4 and E11.10 validators (and removed E2.4's dead/malformed `</divid>` branch). Unit-tested: both now accept single- and double-quote answers and still reject wrong ones. Broader sweep: the other quote-sensitive validators (e.g. E2.9, E5.9) already check both quote styles, so no further changes were needed.
- [x] **2.6 (A7)** Changed the new-student registration seed (`server.cjs`) to the **blank placeholder template** — byte-identical to the default `j1` v1 seed — so every student starts consistent and the data-fix migration (which targets `Microwave (Draft v1)`/`sandwich`) no longer silently wipes freshly-registered students' journals.
- [ ] **Verify (browser — deferred to 5.1):** run each changed exercise live (correct answer → no spurious errors; S7 E7.5 logs positions; S8 E8.10 steers; S5 E5.4/E5.5 static); enter sessions via the sidebar and confirm preloaded code appears; register a throwaway student, restart the server, confirm the seeded journal survives.

### Phase 3 — App content consistency (B1–B4) — ✅ DONE 2026-07-11
- [x] **3.1 (B1)** Re-mapped `CONCEPT_REFERENCES`: the conditionals block moved to `l1-s6`, the loops block to `l1-s7`.
- [x] **3.2 (B1)** Authored new reference entries for `l1-s4` (let/const, data types, operators), `l1-s5` (addEventListener, event.key, style.left), and `l1-s8`–`l1-s12` (functions/scope, rAF game loop, AABB, textContent/classList, CONFIG/QA) — all 12 keys now present, same Core Definition / Cheat Sheet / keywords format.
- [x] **3.3 (B2) → DECISION (a)**: Added `L1_QUEST_SESSIONS` (module-level adapter over `CURRICULUM_DATA`) and switched `activeLevelSessions` to it for Level 1, so the Quest Board shows all **12** L1 sessions with canonical racing content and a flat 100 XP. Verified the adapter has complete data for all 12 (no undefined fields). L2–L4 unchanged.
- [x] **3.4 (B2)** Emptied the L1 `sessions` arrays in all three `CAMPAIGN_THEMES` (thermostat/cat-feeder/cauldron copy deleted). The Curriculum tab's campaign-override lookup now falls back to canonical `CURRICULUM_DATA` for all 12 L1 sessions, so homework/activity/title are consistent there too.
- [x] **3.5 (B3)** `projectTasksData.js`: l1-s7 rewritten to lane markers (vision/targetOutcome/caption) and unified on `marker-dash`; l1-s8 gained an `iterationGuide` and its caption now says `updatePlayerPosition()` (not `steerPlayer()`) and "loop-drawn track" (not "obstacle field"); l1-s10 collision sample now uses the real **60×100** car box at y:380 (was 30×50 at y:430) so students copying it get a correct hitbox.
- [x] **3.6 (B3)** Made the three Plan-tab placeholders guard on the specific field (`?.planSpecs?.vision`/`.parts`/`.flow`), so L2's `{hierarchy,variables,flow}` shape no longer renders "undefined" — it shows the generic prompt instead.
- [x] **3.7 (B4)** Fixed the "Drone Navigator" comment, the duplicated S1 banner comment, the "park an vehicle" typo, the l1-s11 `miniLesson` (→ textContent/classList/.hidden) and homework ("leftmost lane (35px)"). **Also (done 2026-07-11, was deferred):** pruned the drone/feeder branches from `handleGenerate`/`runChaosMonkey`. This turned out to be more than dead-code removal — the feeder guard `sandboxTask.includes('cat')` was a **substring** match that mis-fired on words like "communi**cat**ion"/"appli**cat**ion", so several L2–L4 generic-sandbox sessions were rendering the wrong (drone/feeder) mock. Removing both branches makes those sessions fall through to the correct database/env/rls/generic path; the L4 database/env/rls branches (explicit tasks, no `cat`/`drone` substrings) are unaffected. Lint + build clean; zero residual `isDrone`/`isFeeder`/`SmartFeeder`/`verifyAutopilot` references.
- [x] **Verify:** `npm run build` clean; adapter data check confirms 12 L1 quest cards with no missing fields. (Browser click-through folded into 5.1.)

### Phase 4 — Document sync (C1–C5) — ✅ DONE 2026-07-11
- [x] **4.1 (C1)** `L1-Computer_Tutor_AIEra_Curriculum.md`: Session 1 practice block rewritten to the car-autopilot sequencer; "Cyber Security-Autonomous Vehicle Simulator" → "Car Autopilot Sequencer Simulator"; Session 6 seeded bug corrected to `carX > 35` → `carX >= -130`; Session 11 homework "lane limit 0" → "leftmost lane (35px)"; Session 11 board topic `.innerText` → `.textContent`; the S10 sprite note now explains the sandbox uses illustrative 30×50/25×40 while the real project car is 60×100.
- [x] **4.2 (C2)** `L1-Computer_Tutor_Teacher_Guideline.md`: S2–S8 section titles aligned to the app's canonical titles; S7/S8 (and S5) "run live" paragraphs corrected in Phase 2; S2 milestone `innerText` → `textContent` and the S2 Board-Lesson topic likewise; S2 homework checklist reconciled to the garage-dashboard brief.
- [x] **4.3 (C3)** `cyber-detective-hub_user-manual.md`: Ch5 index now lists all 12 L1 sessions with an updated NOTE; Ch6 controls/preview and the ASCII diagram rewritten around the real UI (L1 per-exercise Verify + auto-XP; L2–L4 Run AI Generator / Chaos Monkey); Ch11 "Submit Case File" FAQ replaced with an auto-XP FAQ; Ch8 Teacher Mode now describes the actual warm-up/mini-lesson/activity panels (Socratic/solutions panels noted as a future enhancement); Ch3 sidebar labels, Ch10 theme names, Ch4 feed sample, Ch9 column all corrected. **Also (done 2026-07-11, was deferred):** completed the full terminology sweep — every "Prompt Sandbox"→"Exercises Journal", "Prompt Journal"→"Project Journal", "Quest Files"→"Quest Board", "Curriculum Guide"/"Curriculum Guideline"→"Curriculum Syllabus Catalog" (TOC, chapter titles, and prose), so the manual's UI names now match the app's sidebar labels exactly (verified: zero residual stale names).
- [x] **4.4 (C4)** `Computer_Tutor_AIEra_Curriculum_Overview.md`: L1 module names in the ASCII map fixed (incl. the "Loops, Functions & Loops" typo → "Problem Decomposition & The Logic Map").
- [x] **4.5 (C5) → DECISIONS**: `PRJ_KNOWLEDGE.md` §6 gained a sentence distinguishing in-scope sandbox micro-exercise execution from the v2 real-game-file preview, plus a note that homework "+50 XP" is a **manual teacher grant** (sandbox quest XP is automated). Teacher-Mode Socratic/solutions panels: chose **doc-fix** (manual now describes what renders + flags the panels as a future enhancement) rather than building new app features (out of scope).
- [x] **Verify:** grep-swept the docs for retired terms — clean except the intentional `Backup-*.md` archive and the older platform `computer-tutor-audit01.md` historical record (both out of scope), plus this audit file's own references.

### Phase 5 — Closure — ✅ DONE 2026-07-11 (code paths verified; live browser pass still recommended)
- [x] **5.2** `npm run lint` (with the new `no-undef` gate) and `npm run build` both clean after every change.
- [x] **5.3** This file's checklist annotated with outcomes and decisions (1.1→b, 2.1→a-hybrid, 2.3→drop, 3.3→a, 4.5→doc-fix); `project_l1_audit01` memory note updated.
- [ ] **5.1 (still open — needs a running app + DB):** full click-through as a fresh student — S1 end-to-end, one exercise per S2–S12, the L1 auto-claim XP flow, Project Journal init/save/**Reset Fields** (A1), teacher Admin roster + journal viewer, and a bad-login check (D1). Not runnable in this environment (no live DB); everything reachable statically was verified (lint, build, validator unit tests, adapter data check).

---

## G. What was checked and found consistent (no action needed)

- Lane-coordinate convention **35/165/295** is consistent across all S3–S12 exercises, `projectTasksData` L1 prompts, the L1 curriculum doc, and the teacher guideline (including the S6 "why 35/295 not 0/390" explanation and the S12 Part B check).
- `EXERCISE_COUNTS` (5 + 11×10) matches the actual exercise arrays; the S1 simulator's five expected sequences match the curriculum doc's tutor manual exactly (including the E1.1 handbrake-pre-released / E1.2 handbrake-engaged distinction and E1.5's double `press_brake` allowance).
- Teacher guideline answer keys for S2, S6, S11, S12 were validated line-by-line against the app validators — every model answer passes, including the `event.key === " "` subtlety and the E7.8 "≥15 accepted" note.
- Exercise progress is server-persisted (`exercise_progress` table, idempotent POST, legacy localStorage migration) and quest XP award is idempotent (`rowCount > 0` guard) — both work as designed.
- Sequential gating (`isQuestLocked` over the full 12-session `L1_SESSION_SEQUENCE`, teachers exempt) and the retro-claiming auto-award effect are coherent — *except* for the bypass in A2.
- The 5-Step methodology mapping is faithfully implemented: every S2–S12 exercise set follows two Plan→Prompt→Review→Test→Iterate loops, and the Project Journal's five tabs mirror PRJ_KNOWLEDGE §5/§6 (plan form, prompt editor + versions, paste-back review with copy-paste friction per §7 L1 rule — no auto-diffing was added).
