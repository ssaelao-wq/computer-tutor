## 5. Level 1: Technical Foundations I — "The Logic Blueprint"

**Goal:** Master the core technical knowledge of web programming — how computers execute instructions, HTML/CSS/JS constructs, events, logic, loops, functions, and the DOM. Train the brain to construct absolute, unambiguous logic without syntax frustration, and to read, trace, and audit AI-generated code.

**Prerequisites:** None. Basic reading comprehension required.

> **Format note (2026-07-27):** All 12 Level 1 sessions share one consistent **Sandbox + Project Task format**: sandbox exercises per session (5, or 4 where noted below), each with 3 boxes — **1) Plan & Design**, **2) Write the AI Prompt & Paste the Output Code**, **3) Explain the Output Code**. The Project Task milestone (in the Project Journal tab) uses the same 3-box shape, but is always a related, more open-ended task than that session's exercises — see the Teacher Guideline's per-session "Project Task Milestone" sections for the exact expected answers. Sessions 4-12's Project Task `game.js` is one accumulating file — each session extends the previous session's own saved code via the app's "🔄 Pull Latest" mechanism, rather than starting from a fresh template every time. Session 1's topic was also rewritten (2026-07-20) from the original "Literal Logic & Digital Infiltration" autopilot-car content to a hardware/network/web-tech systems briefing — reflected below.
>
> **Grading note (2026-07-30, Sessions 1-6; extended 2026-08-05 to Sessions 8-12):** these eleven sessions are graded by a real AI Auditor (DeepSeek), replacing the lightweight-keyword check — **Session 7 is the only session still unchanged**, pending validation of this pilot. Instructions now state the **goal**, not the answer, and each of these sessions also gained an optional "🤖 Generate Code"/"🤖 Generate Answer" button next to "Copy Prompt" (a quick in-platform check; the external-AI-tool requirement is unchanged). Sessions 2, 3, 4, 5, 6, 8, 9, 10, and 11 each dropped their old 5th "combine everything" capstone exercise (4 exercises, not 5 — Session 1's exercises were never a capstone-duplication pattern, so it stays at 5): that final integration now happens once, for real, in each session's own Project Task. **Session 12 is the one exception that keeps all 5** — its 5th exercise is a personal reflection/whole-level QA sweep, not a duplicate of its Project Task. Sessions 5 and 6 together also form one explicit capability milestone — *"the car remembers itself, responds to you, and stays safe."* The 2026-08-05 pass also fixed real bugs found by testing "🤖 Generate Code" against the live AI — see each of Sessions 8, 9, 11's Tutor Manual notes below for what broke and how it was fixed.
>
> **Grading redesign (2026-07-30, later same day):** real student testing showed grading all four boxes for correctness still failed genuinely well-written prompts whenever they targeted a different specific detail than intended (a clear, precise prompt still failed for naming the "wrong" key) — still felt like a wording check, not a measure of prompt-writing skill. **Verify now grades ONLY the Prompt box**, on clarity/specificity/completeness, with 2-3 concrete prompt-writing tips — Plan/Output Code/Explain remain required practice fields but are no longer evaluated for correctness. Session 5's Exercises 5.2-5.4 were also rewritten the same day: 5.1's solution already covers both directions + DOM movement, so the original replacements had become redundant or hollow — the final versions are "Detecting All Four Directions," "Different Distances Per Direction," and "Pause with Spacebar."

### 🏎️ The Racing Car Theme: Concept-to-Lab Map (Sessions 1–12)

All Level 1 sessions share the **2D Highway Racing** setting. Sessions 2-3 build the HTML/CSS skeleton; Sessions 4-12's Project Task extends one accumulating `game.js` file session to session. Together, the labs cover every concept a real racing game would need, which is exactly what makes the theme motivating:

| Session | Core Concept | Lab Artifact |
|---------|-------------|------------------------|
| 1 | Hardware, networks, the web stack, the AI-Era loop | Project Kickoff & Roadmap (planning only, no code) |
| 2 | HTML structure & nesting | Track/car/dashboard container skeleton |
| 3 | CSS sizing, positioning & layout | Styled 3-lane track with lane dashes |
| 4 | JS variables, types & math | Game-state variable registry (starts `game.js`) |
| 5 | Keyboard event listeners | Steering input handler (extends `game.js`) — 1st half of the "remembers & responds & stays safe" milestone with Session 6 |
| 6 | Conditionals & boundary logic | Lane-boundary safety guards (extends `game.js`) — 2nd half of that milestone |
| 7 | Loops & iteration | Highway-marker spawner (extends `game.js`) |
| 8 | Functions, parameters & scope | Modular movement controller (extends `game.js`) |
| 9 | Timers & animation frames | Mini game-loop with stop gate (extends `game.js`) |
| 10 | 2D collision math (AABB) | Collision sensor wired to a lives system (extends `game.js`) |
| 11 | DOM manipulation & validation | Score + lives HUD with restart overlay (extends `game.js`) |
| 12 | Assessment | Config-driven capstone + Complete Game assembly |

### Module 1: Inputs, Processing, and Outputs (Sessions 1–3)

#### Session 1: "Systems Briefing: Hardware, Networks & the AI-Era Dev Loop" (2 hours)

**Learning Objectives:**
- Identify the core hardware components of a computer (CPU, RAM, storage, GPU) and the roles of the operating system and application software
- Explain how networks and the client-server model deliver a web page from a server to a browser
- Identify the roles of HTML, CSS, and JavaScript, and how a browser renders them into what a player sees
- Describe the 5-Step AI-Era Development Loop and preview the Level 1 Racing Car Game project this loop will be used to build

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: Case File Briefing (15 mins)**
   - *Activity*: Discuss as a class/one-on-one: when you press a key on your keyboard, what physically happens between that keypress and something appearing on screen?
   - *Action*: The tutor traces the chain out loud — keyboard hardware → CPU/RAM → network → server → HTML/CSS/JS rendering → pixels on screen.
   - *Debrief*: Today's "case" is the machine and network itself — a briefing before any code is written.

2. **Core Concept Board Lesson: From Silicon to Screen (20 mins)**
   - *Topic 1*: Hardware (CPU, RAM, storage, GPU) vs. software (OS, browser, game code) that runs on it. Resource bottlenecks — high CPU% vs. high RAM use mean different problems.
   - *Topic 2*: The client-server model: Browser (Client) sends a request → Server looks up data → Server sends back a response → Browser displays the page.
   - *Topic 3*: The web trio — HTML (structure), CSS (style), JavaScript (behavior) — and the 5-Step AI-Era Development Loop (Plan & Design → Write the AI Prompt → Review & Explain → Test & Break It → Iterate & Improve) that every remaining session uses.

3. **Design Phase: System & Network Field Map (25 mins)**
   - *Activity*: Sketch a diagram tracing a request from the player's browser, across the network, to a server, and back — labeling which parts are hardware, which are software, and which web-stack layer produces each visual result.
   - *Action*: Preview the Level 1 Racing Car Game's session roadmap (Sessions 2-12) to see the whole build ahead.

4. **Digital Sandbox Lab: 5 Plan/Prompt/Explain Exercises (30 mins)**
   - *Activity*: Student launches Level 1 Session 1 Sandbox — 5 exercises, each with 3 boxes: Plan & Design, Write the AI Prompt & Paste the Output, Explain the Output. This session is purely conceptual — there is no code to run.
   - *Action*: Complete exercises on the hardware/software bottleneck, the out-of-memory crash, the client-server request cycle, the web trio + missing-CSS bug, and the 5-Step Loop itself.
   - Earning $+100$ XP on completion.

5. **Assessment & Debrief: Reviewing AI Answers (20 mins)**
   - *Activity*: The tutor reviews the student's pasted AI answers against the case-file scenarios (bottleneck diagnosis, request cycle, missing-CSS bug).
   - *Challenge*: The student explains, in their own words, why each answer is correct — not just that it matched the AI's wording.

6. **Ethics & Automation Discussion (10 mins)**
   - *Topic*: Developers increasingly paste AI-suggested code straight into real products without fully reviewing it, and some of those bugs have shipped as real security vulnerabilities. If an AI coding tool generates code with a flaw that causes real harm, who is responsible — the AI tool's maker, the developer who used it, or the company that shipped it?
   - *Discussion*: This is exactly why Step 3 (Review & Explain) exists in the 5-step loop.

**📝 Homework (Practice at Home):**
- **In-App Project Task ("Lab 0: Project Kickoff & Roadmap")**: In the Journal tab, sketch the whole Racing Car Game to be built across Sessions 2-12 — its parts, its look, and the session-by-session build plan — before writing a single line of code (+50 XP). This is a planning document; there's no code yet, and no AI-generation step is required.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 1)

5 exercises, graded by the AI Auditor for genuine understanding — instructions state the goal, not the answer, so none of these require specific words in the student's own writing:
- **Exercise 1.1 (Hardware vs. Software, and the Resource Bottleneck)**: goal is naming which resource (given CPU 91%/RAM 38%/Disk 12%) is actually struggling; plan correctly sorts hardware vs. software; explanation correctly reasons CPU is the constrained one, relative to its own capacity.
- **Exercise 1.2 (The Out-of-Memory Crash)**: goal is explaining why 500 images at once strains memory and proposing a real fix; a strong answer reasons all images sit in RAM simultaneously and proposes compressing/lazy-loading.
- **Exercise 1.3 (The Client-Server Request Cycle)**: goal is describing what happens between a request and the page appearing; a strong answer sequences client→server→response→display and says why the response step matters.
- **Exercise 1.4 (The Web Trio & the Missing-CSS Bug)**: goal is diagnosing which technology failed, given an "unstyled page" symptom; a strong answer correctly reasons CSS, because the symptom is purely visual.
- **Exercise 1.5 (The 5-Step AI-Era Loop, Applied)**: goal is knowing the 5-step loop well enough to describe it; plan correctly names all 5 steps in order (a genuine recall task); explanation gives a specific personal reflection on the hardest step.
- **Homework Evaluation**: Ensure the student's roadmap lists all the major visual parts of the finished game (track, player car, obstacles, scoreboard, game-over screen), can name which technology builds which part, and can point to which session number will first make something appear on screen.

---

#### Session 2: "Starting the Game: HTML Structure & Basic Elements" (2 hours)

**Learning Objectives:**
- Understand how browsers structure documents using HTML tags
- Learn HTML syntax: elements, attributes, parent-child relationships, and classes
- Create the core layout structure for the Racing Car Game (track and player car containers)

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: HTML Selector Decoding Puzzle (15 mins)**
   - *Activity*: Match scrambled HTML tags to visual layout blocks representing a highway track.
   - *Action*: Identify nesting rules (e.g., placing the car element inside the track element, not outside).
   - *Debrief*: Highlight that elements nested inside parent containers inherit their layout constraints.

2. **Core Concept Board Lesson: The DOM Tree & Nested Nodes (20 mins)**
   - *Topic 1*: HTML tag pairs (`<div>`, `<h1>`, `<span>`). Opening and closing rules.
   - *Topic 2*: Attributes (ids, classes) as metadata keys that CSS and JS query.
   - *Topic 3*: The DOM (Document Object Model) structure as a nested tree.

3. **Design Phase: Designing the Racing Arena Layout (20 mins)**
   - *Activity*: Sketch the game layout on paper or screen. Label the elements (`track`, `player-car`, `score-display`).
   - *Action*: Write a prompt specification sheet outlining the HTML layout elements needed for the game.

4. **Build Phase (AI Assisted): Generating the HTML Structure (35 mins)**
   - *Action*: Prompt the AI to generate a clean `index.html` structure based on the student's layout spec.
   - *Audit*: The student audits the generated file line-by-line. They must explain parent-child relationships (e.g., *"Why is the score nested inside the dashboard panel?"*) and write definitions in their Prompt Journal.

5. **Socratic Debugging: The Forgotten Tags (15 mins)**
   - *Activity*: Tutor introduces an unclosed tag error into the index file.
   - *Challenge*: The student runs the page, notices visual collapse, checks code, and fixes it.
   - *Socratic Question*: *"What is the browser trying to do when a tag is left unclosed? Why does it break the layout hierarchy?"*

6. **Ethics & Accessibility: ALT Tags and Semantics (15 mins)**
   - *Topic*: Screen readers and accessible semantic containers.
   - *Real-World Case*: In 2019, Domino's Pizza was sued under the ADA because their website was inaccessible to screen reader users, highlighting the legal obligation of semantic HTML.
   - *Discussion*: *"Why is it important to define screen text labels for screen readers? How does clean code support everyone?"*

**📝 Homework (Practice at Home):**
- **In-App Project Task ("Lab 1: HTML Document Skeleton")**: In the Journal tab, build the complete racing-game skeleton — going beyond the sandbox exercises above by also including an obstacle car (id `obstacle`) and a hidden game-over overlay (id `restart-panel`, hidden via a class named `hidden`) that a later session will reveal. These exact ids matter, since every later session's code looks for them (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 2)

**4 exercises** (2026-07-30: the old 5th, "The Complete Skeleton," was dropped as a duplicate of the Project Task below, which already asks for the same combined structure plus more), each with 3 boxes. Verify grades only the Prompt box's clarity/specificity/completeness:

- **Exercise 2.1 (The Track & Car Skeleton)**: goal is creating game-track with player-car nested inside it.
- **Exercise 2.2 (Selectors & the Scoreboard)**: goal is a scoreboard where the score number (id score-val) is uniquely identifiable.
- **Exercise 2.3 (The Unclosed Tag Bug Hunt)**: given the exact bug (one closing `</div>` missing), goal is diagnosing and fixing it.
- **Exercise 2.4 (Lane Dividers via Class)**: goal is adding a lane divider using a class (not an id), since it can repeat.

- **Homework Evaluation**: Ensure student has created a custom dashboard wrapper utilizing multiple nested panels.

---

#### Session 3: "Styling the Track & Player Car: CSS Lanes & Visuals" (2 hours)

**Learning Objectives:**
- Write CSS rules using selectors (ID, Class, Element) and declaration blocks
- Understand absolute positioning coordinates (`top`, `left`) and flexbox/grid layout flows
- Style the highway lanes, lane dashes, and the player car dimensions

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: CSS Selector Matching (15 mins)**
   - *Activity*: Link CSS declarations like `#player-car { background: red; }` to target HTML nodes on the board.
   - *Action*: Trace how style properties modify visually rendered boxes.
   - *Debrief*: Show how CSS rules act as declarations mapping properties to specific nodes.

2. **Core Concept Board Lesson: The CSS Box Model & Layout Flow (20 mins)**
   - *Topic 1*: CSS Box Model: Margin, Border, Padding, and Content.
   - *Topic 2*: Positioning: Absolute positioning (`position: absolute`) vs. Relative positioning. How coordinates origin at the top-left `(0, 0)` of parent nodes.
   - *Topic 3*: Center alignment techniques and highway lane layout design.

3. **Design Phase: Lane Design Blueprint (20 mins)**
   - *Activity*: Define sizing metrics (e.g., track width of 390px, divided into 3 lanes of 130px each).
   - *Action*: Draft the CSS specification details for the track, car size, and highway dashes.

4. **Build Phase (AI Assisted): Designing the Style System (35 mins)**
   - *Action*: Prompt AI to generate CSS layout rules (`styles.css`) following the lanes dimensions.
   - *Audit*: Trace selectors and explain the layout properties to the tutor (e.g. *"What does top: 80% accomplish for the player car?"*). Student writes style rules in their journal.

5. **Socratic Debugging: The Overlapping Assets (15 mins)**
   - *Activity*: Tutor introduces a layout bug where elements stack on top of each other due to missing relative positioning on the parent container.
   - *Challenge*: Student debugs coordinates behavior and adds relative bounds back.
   - *Socratic Question*: *"Why does the player car fly out of the track boundaries when game-track loses relative position?"*

6. **Ethics: Color Contrasts & Colorblind Adjustments (15 mins)**
   - *Topic*: User experience for colored UI dashboards.
   - *Real-World Case*: The original Google Maps navigation used red-green indicators that were indistinguishable to the 8% of males with red-green colorblindness, prompting a major redesign.
   - *Discussion*: *"If our background is dark gray and our obstacle car is dark blue, what happens to visually impaired users? How do we style responsively for accessibility?"*

**📝 Homework (Practice at Home):**
- **In-App Project Task ("Lab 2: CSS Sizing & Coordinates Layout")**: In the Journal tab, style your own Session 2 file (not a fresh starter) — choose your own track dimensions, center the car within them, and style the obstacle/restart-panel/dashboard, none of which the sandbox exercises cover (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 3)

**4 exercises** (2026-07-30: the old 5th, "Dashed Divider & Flex Dashboard," was dropped — both techniques it taught are already independently required by the Project Task below, consistent with how that task already teaches the obstacle/restart-panel styling the sandbox never covers), each with 3 boxes. Verify grades only the Prompt box's clarity/specificity/completeness:

- **Exercise 3.1 (Arena Sizing Specs)**: goal is choosing and applying your own track width/height/color.
- **Exercise 3.2 (Selectors — # vs. .)**: goal is understanding when to use an id selector vs. a class selector. (Conceptual — no code to run.)
- **Exercise 3.3 (The Drifting Car Bug)**: given the exact bug (absolute-positioned child drifts without a positioned parent), goal is diagnosing and fixing it.
- **Exercise 3.4 (Positioning the Car)**: goal is centering the car near the bottom of your own chosen track width from Exercise 3.1.

- **Homework Evaluation**: Check that the student uses relative/absolute positioning correctly so the child car stays aligned within the parent track lanes.

---

#### Session 4: "Tracking Game State: JS Variables & Math" (2 hours)

**Learning Objectives:**
- Declare variables using `let` and `const` and explain data types (Strings, Numbers, Booleans)
- Model game variables: speed value, coordinate positions, scoring totals, and game states
- Perform mathematical updates on state variables

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: Variable Value Tracing (15 mins)**
   - *Activity*: Trace variable values through progressive arithmetic code statements on a board worksheet.
   - *Action*: Determine the values of variables at each line of code.
   - *Debrief*: Show how computers evaluate the right-hand side of assignments first, then write values into variables boxes.

2. **Core Concept Board Lesson: Registers in Computer Memory (20 mins)**
   - *Topic 1*: RAM storage boxes. Variable declarations (`let` vs. `const`).
   - *Topic 2*: Data Types: String text (`"Active"`), Numbers (`25`), Booleans (`true`).
   - *Topic 3*: Assignment operators (`=`) and arithmetic increments (`+=`, `++`).

3. **Design Phase: Variable Specifications (20 mins)**
   - *Activity*: Define a state mapping chart: identify all variable requirements for our racing game.
   - *Action*: Declare type rules (e.g. `score` is a Number initialized to `0`, `gameActive` is a Boolean initialized to `false`).

4. **Build Phase (AI Assisted): Initializing the Variables (35 mins)**
   - *Action*: Prompt AI to generate the game state variables declaration block (`game.js`).
   - *Audit*: Audit variables declarations. Explain the differences between primitive types and check definitions in the Prompt Journal.

5. **Socratic Debugging: The String Concatenation Trap (15 mins)**
   - *Activity*: Tutor seeds a bug where speed is declared as a string (`let speed = "10";`). When speed is incremented (`speed += 5`), the result becomes `"105"` instead of `15`.
   - *Challenge*: Student corrects the type mapping to be an integer.
   - *Socratic Question*: *"Why did the browser stitch the digits together instead of adding them? How does type assignment dictate addition behavior?"*

6. **Ethics: Tampering and Security (15 mins)**
   - *Topic*: Client-side tampering of game variables.
   - *Real-World Case*: In 2012, a browser game called "Candy Box" had its entire game state stored in client-side variables, allowing players to set unlimited candies via the console — demonstrating why critical state must be server-validated.
   - *Discussion*: *"If variables are exposed in global scope, a player can open the developer console and set `score = 99999`. How do we protect system states from user modification?"*

**📝 Homework (Practice at Home):**
- **In-App Project Task ("Lab 4: Difficulty-Scaling State System")**: In the Journal tab, extend this session's variable registry (`carX`, `speed`, `score`, `gameActive`, `lives`) with ONE new value the student designs themselves (e.g. `difficultyLevel`) that changes once `score` crosses a threshold the student picks, and that visibly affects another value (e.g. `speed`). Unlike the sandbox exercises, no exercise spells out the exact rule — the student must decide and defend their own numbers.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 4)

**4 exercises** (2026-07-30: the old 5th, "The Complete Variable Registry," was dropped — the Project Task below already assumes the registry exists and asks for something more, so combining declarations is no longer separately tested), each with **3 input boxes**: (1) Plan & Design, (2) Writing Prompt + Output Code side by side, (3) Explain the Output Code. The student pastes the *actual* code their AI tool generated; the app runs it live, showing `console.log`/error text split into a **Console Output** panel (left) and **Verification Feedback** panel (right), so the two never interleave. Verify grades only the Prompt box's clarity/specificity/completeness.

- **Exercise 4.1 (The Core State Variables)**: goal is declaring the game's core mutable state (`carX`, `speed`, `score`, `gameActive`).
- **Exercise 4.2 (Constants and the Lives Count)**: goal is declaring the fixed track/lane width plus a new mutable `lives` count.
- **Exercise 4.3 (Math Increments on Game State)**: goal is making score and speed change during play, in a way the student decides.
- **Exercise 4.4 (The Quoted-Number Bug Hunt)**: given the exact bug (`let speed = "10"; speed += 5;` → `"105"` instead of `15`), goal is diagnosing and fixing it.

- **Homework Evaluation**: Check that the Project Task's new value is genuinely the student's own design (a threshold/effect not copied from any exercise), declared with `let`, and that it visibly affects the value the student chose when run in the Console Output panel.

---

#### Session 5: "Steering the Car: JS Keydown Event Listeners" (2 hours)

**Learning Objectives:**
- Understand event-driven programming and event listeners
- Capture keyboard inputs using JS Event Listeners (`keydown` events)
- Link keystrokes to updates in game state variables

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: Reverse Engineering — Dissecting a Live Game (15 mins)**
   - *Activity*: The tutor opens a working racing game in the browser. The student opens browser DevTools (Elements + Console tabs).
   - *Action*: The student presses arrow keys while watching the Console tab. They must identify: (1) What event fires when a key is pressed? (2) What property changes on the car element? (3) What JavaScript function is being called?
   - *Debrief*: Highlight that understanding *existing* systems through inspection is a core engineering skill — not just building from scratch.

2. **Core Concept Board Lesson: The Event Listener Loop (20 mins)**
   - *Topic 1*: Event listeners as triggers that fire functions when hardware actions occur.
   - *Topic 2*: The Event Object parameter (`event.key`), which reports the specific key pressed.
   - *Topic 3*: Binding listeners to the global window scope to intercept keyboard events.

3. **Design Phase: Input Controls Diagram (20 mins)**
   - *Activity*: Draw a logic flowchart connecting Arrow presses to car position updates.
   - *Action*: Draft the input handler specifications.

4. **Build Phase (AI Assisted): Writing the Input Handler (35 mins)**
   - *Action*: Prompt AI to generate an event listener checking if `"ArrowLeft"` or `"ArrowRight"` was pressed.
   - *Audit*: Audit code. Explain how `event` parameters work and verify coordinate shift values in the Prompt Journal.

5. **Socratic Debugging: The Silent Input Fail (15 mins)**
   - *Activity*: Tutor disables the event listener by omitting `window.addEventListener` or using an incorrect key string (e.g., `"left"` instead of `"ArrowLeft"`).
   - *Challenge*: Student debugs and corrects key strings.
   - *Socratic Question*: *"Why does pressing the keyboard do nothing? Trace the chain: Keypress ➔ Browser Event ➔ Listener ➔ Code execution. Where is the link broken?"*

6. **Ethics: Alternative Inputs & Accessibility (15 mins)**
   - *Topic*: Physical mobility constraints of users.
   - *Real-World Case*: Microsoft's Xbox Adaptive Controller (2018) was designed specifically for gamers with limited mobility, proving that accessible input design expands markets rather than limiting them.
   - *Discussion*: *"If a player cannot press physical arrow keys, how can we adapt our input controls? Should we generate on-screen mouse click buttons?"*

**📝 Homework (Practice at Home):**
- **In-App Project Task ("Lab 5: Keyboard & Click Control Interfaces")**: In the Journal tab, extend your own Session 4 `game.js` with two on-screen ◀/▶ buttons that steer the car exactly like the arrow keys — reusing one shared movement action for both input paths instead of duplicating the steering logic (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 5)

**4 exercises** (the old 5th "combine everything" capstone was dropped — that integration now happens once, for real, in the Project Task), each with 3 boxes (Plan & Design / Write the AI Prompt & Paste the Output Code / Explain the Output Code). All 4 run live in the Racing Game Preview. Verify grades only the Prompt box's clarity/specificity/completeness — Plan/Output/Explain remain practice, ungraded. 5.2-5.4 were rewritten twice on 2026-07-30: once because 5.1's own solution already made the original three redundant, then again because the first replacement ("Ignoring the Other Keys" alone) required no real code — the teacher's own directions produced the version below:

- **Exercise 5.1 (Reading the Key Pressed)**: goal is detecting and proving which key was pressed.
- **Exercise 5.2 (Detecting All Four Directions)**: extend detection to ArrowUp/ArrowDown too, proving all four arrow keys are recognized — a practice drill; the real game still only steers left/right.
- **Exercise 5.3 (Different Distances Per Direction)**: track horizontal and vertical running numbers separately — left/right by 20, up/down by 10 — logged after every keypress (tracked and logged, not visually rendered).
- **Exercise 5.4 (Pause with Spacebar)**: reuse the sandbox's existing hidden `#restart-panel` overlay so pressing Space reveals it with a "Paused" message instead of its default "GAME OVER" text. The overlay is hidden via a CSS class, not an inline style, so a good prompt asks the AI to remove that class (`classList.remove`) rather than just set `style.display` — the exercise text flags this directly, since a plain `style.display` change silently does nothing against the sandbox's `.hidden { display: none !important; }` rule (found and fixed 2026-08-05).

- **Homework Evaluation**: Ensure the handler validates `event.key` matches `"s"` and executes actions.

---

#### Session 6: "Track Boundaries: JS Conditionals & Safety Guards" (2 hours)

**Learning Objectives:**
- Apply conditionals (`if`, `else if`, `else`) and comparison operators (`<`, `>`, `===`) to constrain values
- Construct boundary safety guards to prevent the player car from steering off the road
- Evaluate boundary-value conditions to predict execution outcomes

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: Boundary Value Analysis (15 mins)**
   - *Activity*: Evaluate equations given a coordinate list to determine if values cross limits.
   - *Action*: Trace how boundary checkpoints detect violations.
   - *Debrief*: Show how computers use boundary limits to clamp values.

2. **Core Concept Board Lesson: Gating Code with Conditions (20 mins)**
   - *Topic 1*: Logical comparison operators (`<`, `>`, `===`).
   - *Topic 2*: Boundary thresholds. Ensuring values remain inside ranges (`[min, max]`).
   - *Topic 3*: Clamping variables to bounds (e.g., if out of bounds, snap back).

3. **Design Phase: Bounding Logic Blueprint (20 mins)**
   - *Activity*: Sketch the track's three lane coordinates (`35px`, `165px`, `295px` — matching Session 3's car position of `left: 165px`) and the left/right boundary lanes (`35px` / `295px`).
   - *Action*: Write pseudo-code logic locks that verify: *If moving left would take carX below 35, block the movement.*

4. **Build Phase (AI Assisted): Implementing Lane Locks (35 mins)**
   - *Action*: Prompt AI to generate boundary conditionals wrapping the lane steering script.
   - *Audit*: Audit conditionals blocks. Trace parameters step-by-step to verify the car locks at the outer lanes in the Prompt Journal.

5. **Socratic Debugging: The Infinite Teleporting Bug (15 mins)**
   - *Activity*: Tutor loosens the comparison operator from `carX > 35` to `carX >= -130` (or breaks the assignment block), causing the car to teleport off-screen.
   - *Challenge*: Student corrects boundaries coordinates.
   - *Socratic Question*: *"Why did the car disappear when we pressed left repeatedly? What value did carX reach? Why did our boundary guard fail to catch it?"*

6. **Ethics: System Safety Checks (15 mins)**
   - *Topic*: Safety thresholds in critical code.
   - *Real-World Case*: The Mars Climate Orbiter (1999) crashed because one team used metric units while another used imperial — a boundary value mismatch that destroyed a $125 million spacecraft.
   - *Discussion*: *"Autonomous vehicles rely on boundaries to stay in lanes. What happens if a safety check script has a logic typo? Why do developers write redundant checks?"*

**📝 Homework (Practice at Home):**
- **In-App Project Task ("Lab 6: Safety Guards & Boundary Clamps")**: In the Journal tab, extend your own Session 5 `game.js` (including its `steerCar()` function and ◀/▶ buttons) with a boundary guard placed INSIDE `steerCar()` itself, so both the keyboard and the buttons respect it — deriving the limits from your own `TRACK_WIDTH`, not the exercises' fixed 35/295 (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 6)

**4 exercises** (the old 5th "combine everything" capstone was dropped — that integration now happens once, for real, in the Project Task), each with 3 boxes. Lane coordinates are 35/165/295 (consistent with Session 3's `left: 165px` car position). Graded by the AI Auditor for genuine understanding, not exact wording — instructions state the goal, the student plans/prompts in their own words:

- **Exercise 6.1 (Track Boundary Coordinates & the Left Guard)**: goal is stopping the car steering past the left edge; a strong answer keeps `carX` above 35 before allowing further left movement and explains the block at the edge.
- **Exercise 6.2 (The Infinite Teleporting Bug)**: given the exact bug (`carX >= -130`), goal is diagnosing and fixing it; a strong answer explains why the looser comparison lets the car travel off-screen and restores `carX > 35`.
- **Exercise 6.3 (Adding the Right Guard)**: goal is mirroring the left guard for the right edge (295); a strong answer reasons the structural symmetry and implements it correctly.
- **Exercise 6.4 (The Overheat Guard and a Type Bug)**: goal is capping `speed` at 120 without reintroducing the string-concatenation bug; a strong answer resets to the Number 100 (not a string) and explains why the type matters.

- **Homework Evaluation**: Ensure the student's code compares variables correctly and acts as a boundary clamp (`speed = 100`).

---

### Module 3: Problem Decomposition & The Logic Map (Sessions 7–9)

---

#### Session 7: "Dashing Lanes & Highway Markers: JS Loops & Iteration" (2 hours)

**Learning Objectives:**
- Learn loops mechanics (`for` and `while` loops) and loop parameters
- Generate and render repeating track markers and obstacle items dynamically using loops
- Identify and prevent infinite loop crashes

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: Loop Iteration Tracing (15 mins)**
   - *Activity*: Determine the output variables after tracing various loop segments on paper.
   - *Action*: Trace variable states on each iteration.
   - *Debrief*: Introduce the concept of loop counters, conditions, and increments.

2. **Core Concept Board Lesson: Automation through Loops (20 mins)**
   - *Topic 1*: Loop declarations: initializer, condition, update statement (`for (let i = 0; i < 5; i++)`).
   - *Topic 2*: Iterating over coordinates offsets to create rows/grids.
   - *Topic 3*: Infinite loop dangers (when conditions never evaluate to false).

3. **Design Phase: Road Marker Spawning Plan (20 mins)**
   - *Activity*: Design the layout of repeating dashes down the middle of the road.
   - *Action*: Draft the loops specifications (e.g. create 5 dashes spaced 120px apart).

4. **Build Phase (AI Assisted): Building Loops (35 mins)**
   - *Action*: Prompt AI to generate a loop generating marker div elements dynamically on screen.
   - *Audit*: Audit generated loops. Student explains the starting index, loop limit, and counter increments in the Prompt Journal.

5. **Socratic Debugging: Browser Freezes (15 mins)**
   - *Activity*: Tutor triggers an infinite loop by removing the loop counter increment block (`i++`).
   - *Challenge*: Student identifies missing increment and restores it.
   - *Socratic Question*: *"Why did the browser freeze and lock up? How many times did the CPU execute the loop block? How do we ensure our loop condition resolves?"*

6. **Ethics: Resource Efficiency (15 mins)**
   - *Topic*: Computation budgets.
   - *Real-World Case*: In 2020, a poorly optimized JavaScript animation loop on a major news website caused mobile devices to overheat and drain batteries within minutes, leading to user complaints and a site redesign.
   - *Discussion*: *"If we run a loop 1,000,000 times a second to draw lanes, what happens to our user's device battery? Why must loop performance be optimized?"*

**📝 Homework (Practice at Home):**
- **In-App Project Task ("Lab 7: Obstacle Loop Generation")**: In the Journal tab, add repeating highway marker dashes to your own Session 6 `game.js` using a `for` loop — spacing them by dividing YOUR OWN track height (from Session 3) by however many dashes you pick (4-6), not a hardcoded spacing number (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 7)

5 exercises, each with 3 boxes. Exercise 7.2 is deliberately non-runnable — its seeded bug is a missing loop increment (infinite loop), and running it live would hang the preview:

- **Exercise 7.1 (Marker Spacing Plan & the Loop)**: Plan states `count = 5 | spacing = 120`; prompt mentions `for loop`, `i * 120`, `5`; output includes `for(...i<5...i++)` with `markerY = i * 120`; explanation names all 3 loop-header parts.
- **Exercise 7.2 (Browser Freezes — the Missing Increment)**: Plan explains why a missing `i++` runs forever; prompt mentions the missing increment/infinite loop; output restores `...i < 5; i++) {`; explanation covers why the page locks up.
- **Exercise 7.3 (Logging Each Marker)**: Plan states what to log; prompt mentions `console.log`, `markerY`; output includes a `console.log` inside the loop; explanation predicts all 5 values (0, 120, 240, 360, 480).
- **Exercise 7.4 (Rendering the Markers)**: Plan describes create → style → place; prompt mentions `marker-dash`, `appendChild`, `#game-track`; output includes a `marker-dash` div appended inside the loop; explanation covers why `appendChild` is needed after `createElement`.
- **Exercise 7.5 (The Off-Track Marker Bug & Complete Loop)**: Plan explains why `i * 12` bunches markers; prompt mentions `i * 120`, `marker-dash`; output is the full fixed loop; explanation states the correct final values.

- **Homework Evaluation**: Ensure the loop outputs correct coordinate calculations (0, 50, 100, 150, 200, 250).

---

#### Session 8: "Defining Movement & Game Functions: JS Modular Code" (2 hours)

**Learning Objectives:**
- Declare and call JavaScript functions with parameters and return structures
- Organize game code into modular functions (`renderCar()`, `moveObstacles()`)
- Explain variable scope rules: global scope variables vs. local variables

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: Scope Trace Challenge (15 mins)**
   - *Activity*: Determine which variables are accessible inside functions vs outside functions.
   - *Action*: Trace accessibility of variables across functions.
   - *Debrief*: Show how local variables are locked within their enclosing functions, while global variables can be read anywhere.

2. **Core Concept Board Lesson: Modular Program Design (20 mins)**
   - *Topic 1*: Function signatures: parameters and return data types.
   - *Topic 2*: Global scope vs. local scope blocks. Variable isolation.
   - *Topic 3*: Code readability and packaging operations into reusable actions.

3. **Design Phase: Modular Logic Decomposition (20 mins)**
   - *Activity*: Decompose the monolithic game script into a list of isolated single-purpose functions.
   - *Action*: Draft the interfaces (inputs and outputs) of functions like `render()`.

4. **Build Phase (AI Assisted): Code Refactoring (35 mins)**
   - *Action*: Prompt AI to refactor the game variables and listeners into modular functions.
   - *Audit*: Audit refactored methods. Explain local parameters inputs and how functions communicate in the Prompt Journal.

5. **Socratic Debugging: Scope Access Violations (15 mins)**
   - *Activity*: Tutor introduces a scope bug by declaring a position variable inside a movement function, making it inaccessible to the rendering function.
   - *Challenge*: Student corrects the declaration scope.
   - *Socratic Question*: *"Why does the draw function log undefined for the player's position? Where was that variable declared? Why is its scope restricted?"*

6. **Ethics: Clean Code and Collaboration (15 mins)**
   - *Topic*: Code readability.
   - *Real-World Case*: The Heartbleed bug (2014) existed in OpenSSL for two years because the critical code was poorly structured and difficult for reviewers to audit, affecting 17% of all secure web servers.
   - *Discussion*: *"Why is write-once, hard-to-read code a problem for engineering teams? How does structuring code into logical functions help others?"*

**📝 Homework (Practice at Home):**
- **In-App Project Task ("Lab 8: Modular Control Functions")**: In the Journal tab, refactor your own Sessions 5-6 steering code into one namespaced `Controller` object (`Controller.updatePosition`/`moveLeft`/`moveRight`), instead of three loose global functions — behavior unchanged, structure improved (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 8)

**Content note (2026-08-05):** moved to real AI-Auditor grading and goal-stated instructions (see the Grading note above). Its old 5th "combine everything" capstone exercise ("The Duplicate Render Call & Complete Controller") was dropped as a duplicate of the Project Task above, which already asks for more (the namespaced `Controller` object). **4 exercises**, not 5, graded on the Prompt box's clarity/specificity/completeness only. Testing "🤖 Generate Code" against the live AI found two of the original five exercises' solutions broke the Live Preview: 8.3's fix came back as a bare, un-wrapped fragment (`event` undefined, crashing on load); 8.5 (now dropped) hallucinated canvas-API code that doesn't exist in this DOM-based sandbox. 8.1, 8.3, and 8.4 now explicitly say the Output Code box runs standalone, so the AI must write a complete, self-contained snippet — including a demo call so the effect is visible in the Preview:

- **Exercise 8.1 (Decomposing & Requesting the Render Function)**: goal is a self-contained `updatePlayerPosition()` writing `carX` to `#player-car`'s `style.left`, called once to prove it in the Preview; explanation covers 0 parameters (reads shared `carX`).
- **Exercise 8.2 (The Scope Access Violation Bug)**: goal is fixing the scope bug — `carX` declared once, outside both `moveLeft()` and `updatePlayerPosition()`; explanation contrasts local vs. shared/outer scope.
- **Exercise 8.3 (Wiring moveLeft() to the Handler)**: goal is the ArrowLeft branch calling `moveLeft()` — since this box runs standalone, the AI should write the complete keydown listener plus a working `moveLeft()`, not just the changed line; explanation covers the benefit of a named call.
- **Exercise 8.4 (Requesting moveLeft() and moveRight())**: goal is both mirror functions calling the shared `updatePlayerPosition()` (also declared here, since it isn't pre-existing), demonstrated with a call; explanation states 1 fix needed with a shared helper.

- **Homework Evaluation**: Ensure the Project Task's `Controller` object groups all three functions (not three separate globals) and steering behavior is unchanged from before the refactor.

---

#### Session 9: "The Racing Game Loop: Timers & Animations" (2 hours)

**Learning Objectives:**
- Understand the concept of frame rates and game loops
- Animate obstacles moving down the track using `requestAnimationFrame`
- Manage persistent loop states (active, paused, game-over)

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: Animate the Dots (15 mins)**
   - *Activity*: Trace how coordinates update dynamically over variable time offsets.
   - *Action*: Calculate spacing steps needed to maintain smooth object movement.
   - *Debrief*: Introduce the animation cycle as repeating redraw steps.

2. **Core Concept Board Lesson: Chronological Time Deltas & Frame Rates (20 mins)**
   - *Topic 1*: The continuous paint cycle. Frame rate targets (60 FPS / 16.6ms per frame).
   - *Topic 2*: `requestAnimationFrame` recursion loop.
   - *Topic 3*: Game State Gates. Stopping loop updates when collision flags trigger true.

3. **Design Phase: Game Engine flowcharting (20 mins)**
   - *Activity*: Draw a lifecycle state flowchart representing game state switches: Start ➔ Update ➔ Check Collision ➔ Redraw ➔ Loop.
   - *Action*: Draft the loop controller pseudo-code.

4. **Build Phase (AI Assisted): Coding the Animation Engine (35 mins)**
   - *Action*: Prompt AI to construct the core game loop function (`loop()`).
   - *Audit*: Audit execution flow. Explain the recursion mechanism and verify variable speed modifications in the Prompt Journal.

5. **Socratic Debugging: The Unstoppable Speed Bug (15 mins)**
   - *Activity*: Tutor breaks the recursion exit condition, causing the animation loop to continue executing after game over state flags trigger true.
   - *Challenge*: Student corrects exit checks.
   - *Socratic Question*: *"The screen says Game Over, but why does the console show positions are still updating? What condition controls loop recursion? Why didn't it exit?"*

6. **Ethics: Hook loops and Addictive Patterns (15 mins)**
   - *Topic*: Gamification loops.
   - *Real-World Case*: Fortnite's "Battle Pass" system and continuous reward loops led to documented cases of gaming addiction in minors, prompting regulatory investigations in multiple countries.
   - *Discussion*: *"How do fast feedback loops in games keep users hooked? What is our responsibility as designers in creating balanced systems?"*

**📝 Homework (Practice at Home):**
- **In-App Project Task ("Lab 9: Timer Loops & Animations")**: In the Journal tab, add a `requestAnimationFrame`-driven `gameLoop()` on top of your own Sessions 7-8 code, animating your own real `#obstacle` element (from Session 2) down YOUR OWN track height (from Session 3), not a fixed 500 (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 9)

**Content note (2026-08-05):** moved to real AI-Auditor grading and goal-stated instructions (see the Grading note above). Its old 5th "combine everything" capstone exercise ("The Complete Animation Engine") was dropped as a duplicate of the Project Task above, which already asks for more (the student's own track height and real `#obstacle` element). **4 exercises**, not 5, graded on the Prompt box's clarity/specificity/completeness only. This session's shared JS sandbox only pre-declares `carX`/`speed` as globals — `obstacleY`, `score`, and `gameActive` aren't pre-existing, and each exercise's box is tested standalone, so 9.1, 9.2, and 9.4 now say so explicitly and ask the AI to declare/initialize those values (plus a demo call) so the Preview runs instead of throwing a "not defined" error. Note the reset threshold is **500** (the track height defined in Session 3):

- **Exercise 9.1 (The Game Loop Lifecycle & Recursive Loop)**: goal is a self-contained `gameLoop()` (declaring `obstacleY`) that moves the obstacle and calls `requestAnimationFrame(gameLoop)`, called once to animate it in the Preview; explanation covers what that call does.
- **Exercise 9.2 (The Unstoppable Speed Bug)**: goal is the complete, self-contained `gameLoop()` with the `gameActive` guard added at its top — not just the guard line, since this box runs standalone; explanation covers the loop exiting once `gameActive` is false. (Fixed 2026-08-05: a standalone-generated answer previously hallucinated a nonexistent `obstacles` array instead of the real single `#obstacle` element.)
- **Exercise 9.3 (Obstacle Movement & Reset)**: goal is a self-contained `moveObstacles()` (declaring `obstacleY`/`score`) implementing the scroll-and-wrap behavior, logged after one call; explanation predicts `obstacleY` after `490 + 5` (495).
- **Exercise 9.4 (The Frozen Scoreboard Bug)**: goal is the complete, self-contained `moveObstacles()` with the missing `score += 10` fixed inside the reset block — not just the missing line; explanation confirms both happen together. (Fixed 2026-08-05: a standalone-generated answer previously was a bare fragment referencing undeclared `obstacleY`/`score` — a ReferenceError, not a fix.)

- **Homework Evaluation**: Student's Project Task `gameLoop()` must contain gate validation (`if (!gameActive)`), animate the real `#obstacle` element, and use the student's own track height for the reset boundary.

---

#### Session 10: "Collision Detection: Auditing AI Overlap Math" (2 hours)

**Learning Objectives:**
- Understand 2D rectangular collision math (AABB Overlap equations)
- Code collision sensors comparing coordinate boundary boxes
- Integrate collision results to halt updates and trigger game-over sequences

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: Overlapping Box Coordinate Math (15 mins)**
   - *Activity*: Calculate overlap values for colliding boxes on grid paper.
   - *Action*: Determine if two boxes on a 2D coordinate system overlap.
   - *Debrief*: Show how absolute left/right and top/bottom checks combine to detect contact.

2. **Core Concept Board Lesson: The Intersection Theorem (20 mins)**
   - *Topic 1*: Axis-Aligned Bounding Box (AABB) collision checks: comparing positions and dimensions.
   - *Topic 2*: Finding absolute bounds: `left`, `right`, `top`, `bottom` limits of boxes.
   - *Topic 3*: Combining conditions (`&&` logic) to declare an overlap exists.

3. **Design Phase: Collision Blueprint (20 mins)**
   - *Activity*: Draw bounding boxes and formulate conditional statements matching overlap conditions.
   - *Action*: Draft parameter specifications for collision checks.

4. **Build Phase (AI Assisted): Generating Collision Engine (35 mins)**
   - *Action*: Prompt AI to generate the collision detection functions.
   - *Audit*: Audit generated math expressions. Student explains coordinate check variables to the tutor and writes it in the Prompt Journal.

5. **Socratic Debugging: The Ghost Car Bug (15 mins)**
   - *Activity*: Tutor introduces an error in the comparison operator (e.g. checking `>` instead of `<` or switching X/Y axis params), making collision sensors fail.
   - *Challenge*: Student debugs and corrects coordinate comparison operators.
   - *Socratic Question*: *"The obstacle drove right through the player car, but no crash was registered. Trace coordinates at the moment of impact. Why did the intersection formula fail?"*

6. **Ethics: Safety Failure Audits (15 mins)**
   - *Topic*: Physical hardware validation failures.
   - *Real-World Case*: Tesla's Autopilot system failed to detect a white truck against a bright sky in 2016, causing a fatal collision — a real-world collision detection failure with tragic consequences.
   - *Discussion*: *"If a self-driving sensor program fails to register an obstacle overlap, critical injury occurs. Why do developers write automated unit tests checking coordinates?"*

**📝 Homework (Practice at Home):**
- **In-App Project Task ("Lab 10: Collision Detection Overlap Math")**: In the Journal tab, add collision checking into your own Session 8 animation loop — but instead of ending the game outright, a crash should cost one life (already tracked since Session 4), only ending once lives reach 0 (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 10)

**Content note (2026-08-05):** moved to real AI-Auditor grading and goal-stated instructions (see the Grading note above). Its old 5th "combine everything" capstone exercise ("The Complete Collision System") was dropped as a duplicate of the Project Task above, which already asks for more (the lives system, not game-over-on-any-hit). **4 exercises**, not 5, graded on the Prompt box's clarity/specificity/completeness only. This session's core skill is **auditing AI-generated math**. 10.1 and 10.4 now ask for a quick demo call/log (e.g. testing `checkCollision()` against two example rectangles) so the answer visibly proves itself in the Preview instead of just defining an unused function:

- **Exercise 10.1 (The Overlap Condition & Requesting checkCollision())**: goal is a self-contained `checkCollision(rect1, rect2)` using width/height, demonstrated with a call against two example rectangles; explanation covers why dimensions matter over bare x/y.
- **Exercise 10.2 (The Ghost Car Bug)**: goal is fixing the flipped comparison so `checkCollision()` correctly checks `rect1.x + rect1.width > rect2.x`; explanation covers the correct direction.
- **Exercise 10.3 (The Axis Swap Bug)**: goal is fixing the axis swap so the first condition compares `rect1.x < rect2.x + rect2.width` (not `rect1.y`); explanation confirms every x compares to x, y to y.
- **Exercise 10.4 (Wiring Collision into the Loop)**: goal is a self-contained demo — `checkCollision()`, example overlapping rects, `gameActive`, and a call to `gameLoop()` that sets `gameActive = false` and logs on a hit; explanation answers the exact-touch edge case (NO, under strict `>`).

- **Homework Evaluation**: Ensure the Project Task's collision check decrements lives on a hit (not always ending the game), and only ends the game once `lives <= 0`.

---

#### Session 11: "The Dashboard & High-Score Counter: DOM Operations" (2 hours)

**Learning Objectives:**
- Select and manipulate HTML content using JS selector syntax (`document.getElementById`)
- Write defensive checks protecting parameters from error inputs (e.g., negative score totals)
- Update text and visibility properties dynamically in real-time

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: DOM Link Matching (15 mins)**
   - *Activity*: Match DOM JS commands to target text elements on the HTML structure sheet.
   - *Action*: Trace how elements are retrieved by ID.
   - *Debrief*: Introduce the document API as the bridge between JS logic and visual HTML tags.

2. **Core Concept Board Lesson: The Document API Bridge (20 mins)**
   - *Topic 1*: Linking code variables to visual text (`.textContent`) and toggling a `.hidden` class (`classList.add`/`remove`).
   - *Topic 2*: Input validation and safe bounds checking in visual updates.
   - *Topic 3*: Toggling display visibility (`"block"` vs `"none"`) to show restart button overlays.

3. **Design Phase: UI Wiring Blueprint (20 mins)**
   - *Activity*: Draw data pipelines from state variables directly to target HTML elements.
   - *Action*: Draft dashboard updates specifications.

4. **Build Phase (AI Assisted): Connecting the DOM (35 mins)**
   - *Action*: Prompt AI to generate updates script displaying score, speed level, and showing restart button overlays.
   - *Audit*: Audit variables to element connections. Explain selectors syntax in the Prompt Journal.

5. **Socratic Debugging: Negative values leakage (15 mins)**
   - *Activity*: Tutor introduces a validation bug where score decrement can slide below zero.
   - *Challenge*: Student inserts a conditional check to clamp the lower bound.
   - *Socratic Question*: *"Why does the scoreboard show score: -5? What guard check should we add to prevent values from slipping below 0?"*

6. **Ethics: Personal Data Storage (15 mins)**
   - *Topic*: Storing usernames on high score lists.
   - *Real-World Case*: The Cambridge Analytica scandal (2018) demonstrated how collecting seemingly innocent user profile data (quiz answers, likes) could be weaponized for political manipulation at scale.
   - *Discussion*: *"When users enter usernames on leaderboards, how do we protect privacy? What details should not be collected?"*

**📝 Homework (Practice at Home):**
- **In-App Project Task ("Lab 11: DOM HUD Visual Updates")**: In the Journal tab, build on your own lives-based collision logic from Session 10 — keep BOTH a score readout AND a lives readout in sync with the DOM, not score alone, and wire up the full Space-to-restart sequence (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 11)

**Content note (2026-08-05):** moved to real AI-Auditor grading and goal-stated instructions (see the Grading note above). Its old 5th "combine everything" capstone exercise ("The Complete HUD & Restart System") was dropped as a duplicate of the Project Task above, which already asks for more (a lives readout, not score alone). **4 exercises**, not 5, graded on the Prompt box's clarity/specificity/completeness only. 11.1 and 11.2 now note `score` isn't pre-existing in this sandbox, so the AI should declare/initialize it so the fix is visibly proven. **Exercise 11.4 was found and fixed 2026-08-05**: a standalone-generated answer to "add the missing `gameActive = true`" hallucinated a nonexistent `#game-over-panel` element and reversed hide/show logic instead of touching the real `#restart-panel` — the exercise text now names the real element and asks for the complete handler. **Key detail:** the spacebar's real `event.key` value is a single space `" "`, not the word `"Space"`:

- **Exercise 11.1 (The DOM Update Pipeline & Scoreboard Updater)**: goal is a self-contained, demonstrated `updateScoreboard()` setting `#score-val`'s textContent to `score`; explanation covers why `textContent` beats `innerHTML`.
- **Exercise 11.2 (The Negative Score Leak)**: goal is a self-contained demo — `score` declared starting negative, clamped to 0 before the DOM write; explanation confirms the clamp runs before the write.
- **Exercise 11.3 (Revealing the Restart Panel)**: goal is `triggerGameOverScreen()` using `classList.remove("hidden")` on `#restart-panel`, not an inline style; explanation covers what happens if the class isn't removed.
- **Exercise 11.4 (The Frozen Restart Bug)**: goal is the complete, self-contained Space-key handler adding `gameActive = true;`, explicitly targeting the real `#restart-panel` (not a nonexistent "game-over-panel"); explanation covers `gameLoop()`'s gate.

- **Homework Evaluation**: Check that the Project Task updates BOTH score and lives via `textContent`, and that Space-to-restart resets every tracked variable, not just some.

---

#### Session 12: "The Technical Foundations Assessment" (2 hours)

#### In-Session Digital Assessment (2 hours)

**Part A: "The Racing Game Layout Builder" — In-App (45 mins)**
- Given a clean environment, build a racing game panel:
  1. Map the DOM element tags (Track, Car, Scoreboard).
  2. Declare the styling properties establishing track lanes and car positions.
  3. Write variable declarations representing score levels and coordinate bounds.
  4. Formulate safety checks clamping inputs to track limits.

**Part B: "The Lab Code Walkthrough" — Walkthrough (45 mins)**
- The student presents three of their standalone session labs to the tutor (tutor picks: one logic lab, one loop/function lab, one DOM/collision lab).
- The tutor plays the "Malicious QA Officer", questioning coordinates logic and testing boundaries. The student explains how functions and variable updates manage inputs.

**Part C: "In-App Code Diagnostic" — Debugging (30 mins)**
- Solve a diagnostic puzzle:
  1. Trace loops increments and specify final output indices.
  2. Debug a collision logic error where coordinates check returns incorrect matches.

#### Take-Home Component
- **Self-Audit Reflections**: In the app's Journal tab under "Session 12 Assessment", submit a summary of:
  1. What surprised you about DOM trees and event bindings.
  2. How tracing variables helped find logic bugs.
  3. How writing prompts for game assets differed from conversational chats.

#### Level 1 Assessment Rubric

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Logical Logic** | All inputs, movements, boundaries, and loop limits are correct, collision rules robust. | Minor bounds gaps, but overall code is clean. | Boundary leaks or loop logic anomalies exist. | Scrambled logic paths, infinite loops crash. |
| **Syntax Logic** | Correctly manages types, CSS rules, variable updates, DOM bindings. | Minor typos, but functional meaning is clear. | Struggles with properties definitions and DOM links. | No syntax literacy, incorrect bindings. |
| **Edge Case Logic** | Bounding safety guards prevent out-of-bounds movement; collision math is perfect. | Validates lanes, but collision math allows clipping. | Weak boundary checks, car leaves track zones. | No boundary clamps, crashes bypass overlays. |
| **System Flow** | Clean function boundaries; separation of concerns (Inputs, Loops, Updates). | Functions declared but depend heavily on global scopes. | Poor decomposition, hard-coded magic values. | Inline spaghetti script, no functions used. |

**Graduation Criteria for Level 2:**
- Rubric average score of 3.0 or higher.
- Successful execution and explanation of the session labs (steering, boundaries, loop spawner, game loop, collision sensor, HUD).
- Can trace and explain variables flow through conditional checks and functions.

#### 📖 Tutor Manual: Assessment Solutions (Session 12)
- **Part A (Blueprint Check)**: Verify the student mapped HTML tag structures (`game-track`, `player-car`), CSS layouts, JS variables, and lane boundaries.
- **Part B (Defense Check)**: Verify collision checks and clamping values at `carX = 35` and `carX = 295` (the outer lane positions).
- **Part C (Diagnostic Check)**: Student must debug overlap math and correct boundary signs.
- **Take-Home Evaluation**: Verify self-reflection logs on variables, coordinate updates, and DOM interactions.

##### In-App Capstone Sandbox Exercises (Session 12)

**Content note (2026-08-05):** moved to real AI-Auditor grading and goal-stated instructions (see the Grading note above) — graded on the Prompt box's clarity/specificity/completeness only, with an optional "🤖 Generate Code" button next to "Copy Prompt". Unlike Sessions 8-11, **Session 12 keeps all 5 exercises** — 12.5 is a personal reflection and whole-level self-diagnostic, not a duplicate of the Project Task's CONFIG-refactor/Complete-Game-assembly work. 12.2 and 12.3 now note `CONFIG` isn't pre-existing in this sandbox, so the AI should declare it (with a demo value) so the fix is visibly proven in the Preview. The app's Exercises Journal provides these 5 capstone exercises, each with 3 boxes, all running live in the Racing Game Preview:

- **Exercise 12.1 (The Configuration Object & Difficulty Scaling)**: goal is a difficulty-scaling function reading from CONFIG, clamped to `CONFIG.maxSpeed`; explanation evaluates `startSpeed + score * difficultyMultiplier` at score 50 (`10`).
- **Exercise 12.2 (The Unbounded Speed Bug)**: goal is a self-contained demo — `CONFIG`/`speed` declared (starting above the cap), clamped with `Math.min(speed, CONFIG.maxSpeed)`, logged; explanation confirms speed is capped.
- **Exercise 12.3 (Refactoring Magic Numbers)**: goal is a self-contained demo — `CONFIG` declared with `leftBound`/`rightBound`, `carX` set outside a boundary to prove the clamp, logged; explanation covers maintainability.
- **Exercise 12.4 (The Final Diagnostic)**: goal is diagnosing and fixing the seeded flipped comparison, correcting it to `rect1.x < rect2.x + rect2.width`; explanation names the operator fix.
- **Exercise 12.5 (Capstone Reflection & the Final QA Sweep)**: goal is a diagnostic script logging PASS/FAIL for the 4 core systems (variables, boundaries, collision, restart); explanation is a genuine, specific personal reflection naming an actual bug and how tracing values helped find it — there's no single correct answer, only a genuine one.

---

