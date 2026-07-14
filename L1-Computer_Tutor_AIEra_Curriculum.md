## 5. Level 1: Technical Foundations I — "The Logic Blueprint"

**Goal:** Master the core technical knowledge of web programming — how computers execute instructions, HTML/CSS/JS constructs, events, logic, loops, functions, and the DOM. Train the brain to construct absolute, unambiguous logic without syntax frustration, and to read, trace, and audit AI-generated code.

**Prerequisites:** None. Basic reading comprehension required.

> **Restructure note (2026-07-13):** Level 1 is a *technical knowledge* level. The Racing Car theme frames every exercise and lab, but students do **not** build a cumulative game project at this level — the full game build is deliberately deferred to Levels 3–4, where the development process and the capstone build are taught. Each session below produces a small, **standalone** themed lab artifact.

### 🏎️ The Racing Car Theme: Concept-to-Lab Map (Sessions 2–12)

All Level 1 sessions share the **2D Highway Racing** setting. Each session's Build Phase produces a standalone themed lab file (e.g., `lab_s5_steering.html`); when a lab exercises a concept from an earlier session, the tutor provides a fresh starter file — students never depend on carrying their own project forward. Together, the labs cover every concept a real racing game would need, which is exactly what makes the theme motivating:

| Session | Core Concept | Standalone Lab Artifact |
|---------|-------------|------------------------|
| 2 | HTML structure & nesting | Track/car/dashboard container skeleton |
| 3 | CSS sizing, positioning & layout | Styled 3-lane track with lane dashes |
| 4 | JS variables, types & math | Game-state variable registry with live traces |
| 5 | Keyboard event listeners | Steering input handler |
| 6 | Conditionals & boundary logic | Lane-boundary safety guards |
| 7 | Loops & iteration | Highway-marker spawner |
| 8 | Functions, parameters & scope | Modular movement controller |
| 9 | Timers & animation frames | Mini game-loop with stop gate |
| 10 | 2D collision math (AABB) | Collision sensor drill |
| 11 | DOM manipulation & validation | Score HUD with restart overlay |
| 12 | Assessment | Concept-mastery labs + diagnostics |

### Module 1: Inputs, Processing, and Outputs (Sessions 1–3)

#### Session 1: "Literal Logic & Digital Infiltration" (2 hours)

**Learning Objectives:**
- Understand that computers execute commands sequentially, literally, and without common sense
- Map out input-process-output (IPO) data paths in the application
- Create strict instruction chains to solve progressive navigation objectives

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: The Tutor Car Autopilot Simulation (15 mins)**
   - *Activity*: One-on-one interactive roleplay. The student plays the "Autopilot Controller" (coder) and the tutor plays the "Autonomous Vehicle" (computer).
   - *Action*: The student gives step-by-step driving and parking instructions to the tutor to park a vehicle.
   - *Constraint*: The tutor follows commands **strictly literally** (e.g., if told to "accelerate" without shifting gears first, they rev the engine in Neutral. If told to "turn right" while standing still, they turn the steering wheel but stay parked).
   - *Debrief*: Highlight that computers do not assume intent. If instructions are out of order, the program crashes or triggers a logic error.

2. **Core Concept Board Lesson: The IPO Model & Sequential Control (20 mins)**
   - *Topic 1*: The Input-Process-Output (IPO) framework. Trace everyday examples on the app screen (e.g. card key reader: input=ID badge, process=validate lookup, output=unlocked light).
   - *Topic 2*: Linear command chains and order dependency. Show how step $N$ depends on step $N-1$.
   - *Topic 3*: Variables as labeled registers containing one state value.

3. **Digital Concept Practice: The In-App Sequence Blueprint (25 mins)**
   - *Activity*: In the application's digital learning panel, the student interacts with a flowchart sequencer.
   - *Action*: The student arranges digital driving-command blocks (`Check P/N Gear`, `Depress Brake`, `Start Engine`, `Shift to Drive`, `Release Handbrake`, `Press Gas`) in the exact logical order to safely start and drive the vehicle.
   - *Self-Audit*: The student runs the autopilot simulator to see whether the sequence trips a safety lockout or drives off successfully.

4. **Digital Sandbox Lab: Car Autopilot Sequencer Simulator (30 mins)**
   - *Activity*: Student launches Level 1 Session 1 Sandbox.
   - *Action*: Complete five progressive exercises:
     - **Exercise 1.1 (Basic Start & Move)**: Observe the handbrake starting condition (already released). Click commands in the correct sequence (`check_gear_pn` ➔ `press_brake` ➔ `start_engine` ➔ `shift_d` ➔ `release_brake` ➔ `press_gas`) to safely start and drive forward, skipping handbrake release.
     - **Exercise 1.2 (Basic Start & Reverse)**: Observe the handbrake starting condition (engaged). Click commands in the correct sequence (`check_gear_pn` ➔ `press_brake` ➔ `start_engine` ➔ `shift_r` ➔ `release_handbrake` ➔ `release_brake` ➔ `press_gas`) to safely start and reverse.
     - **Exercise 1.3 (Sequence Correction)**: Debug an incorrect, preloaded sequence that fails safety switches by rearranging the sequence order.
     - **Exercise 1.4 (Code Cleanup)**: Identify and delete an incorrect, extra command (`shift_r` in the middle of driving forward) to prevent a collision.
     - **Exercise 1.5 (Emergency Halt)**: Sequence driving actions and verify that depressing the footbrake pedal instantly stops the moving vehicle.
     - Earning $+100$ XP on completion.

5. **Assessment & Debrief: Log Auditing (20 mins)**
   - *Activity*: The tutor displays three different failed execution logs from the Car Autopilot.
   - *Challenge*: The student inspects the output messages, identifies the logical step that failed, and explains *why* the order was illegal.

6. **Ethics & Automation Discussion (10 mins)**
   - *Topic*: If a self-driving delivery car crashes because of a logic error in its code, who is responsible? The coder who wrote the sequence, the company that deployed it, or the driver who clicked "Run"?
   - *Real-World Case*: In 2018, an Uber self-driving test vehicle struck and killed a pedestrian in Arizona due to a software logic error in the object classification sequence.

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: Open the application's Journal tab and complete the "Household IPO Blueprint". Write a process to warm up food from a plate using a microwave (+50 XP). Write down a step-by-step sequential algorithm for its operation. Identify preconditions, inputs, processing logic, and outputs, and submit the response digitally through the app.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 1)
- **Exercise 1.1 (Basic Start & Move) Solution**: Sequence: `check_gear_pn` ➔ `press_brake` ➔ `start_engine` ➔ `shift_d` ➔ `release_brake` ➔ `press_gas`.
  - *Tutor Guide*: Show how chronological sequencing works. If they start engine or shift gear without pressing the footbrake pedal or checking P/N gear first, it fails safety lockout switches. Note: `release_handbrake` is skipped since it starts as released.
- **Exercise 1.2 (Basic Start & Reverse) Solution**: Sequence: `check_gear_pn` ➔ `press_brake` ➔ `start_engine` ➔ `shift_r` ➔ `release_handbrake` ➔ `release_brake` ➔ `press_gas`.
  - *Tutor Guide*: Show how chronological sequencing works with different target states and environment conditions (handbrake is engaged at start). This matches Exercise 1.1's logical start sequence but uses Reverse (R) instead of Drive (D).
- **Exercise 1.3 (Sequence Correction) Solution**: Scrambled preloaded sequence: Rearrange to: `check_gear_pn` ➔ `press_brake` ➔ `start_engine` ➔ `shift_d` ➔ `release_handbrake` ➔ `release_brake` ➔ `press_gas`.
  - *Tutor Guide*: Students debug sequence ordering using safety switch reports in terminal logs.
- **Exercise 1.4 (Code Cleanup / Debugging Extra Steps) Solution**: Preloaded steps include an extra `shift_r` card in the middle of driving forward. Click the `×` button to delete it, reducing the sequence to Exercise 1.1's basic start & move.
  - *Tutor Guide*: Demonstrates identifying and removing redundant or invalid blocks of instructions to resolve logical conflicts.
- **Exercise 1.5 (Emergency Halt) Solution**: Sequence: `check_gear_pn` ➔ `press_brake` ➔ `start_engine` ➔ `shift_d` ➔ `release_handbrake` ➔ `release_brake` ➔ `press_gas` ➔ `press_brake`.
  - *Tutor Guide*: Highlight continuous safety condition checks—depressing the footbrake pedal instantly changes speed to 0.
- **Homework Evaluation**: Ensure the student's submitted text lists:
  - *Preconditions*: powerState is "ON".
  - *Input*: Keypad inputs (time duration string), door sensor state (Boolean), start button.
  - *Process*: Checking timer counter limits in a loop, comparing door sensor state variables to halt.
  - *Output*: Activating magnetron waves, countdown timer display, audio alarm beeps.

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
- **In-App Homework Quest**: Create a simple HTML document containing a sidebar and main container layout representing a garage dashboard. Save to Journal under "Session 2 Homework".

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 2)

Each session contains exactly 10 progressive sandbox exercises designed to follow the 5-step AI-Era workflow:

- **Exercise 2.1 [Plan & Design]**: Specify container structures for `#game-track` holding `#player-car`.
  * *Solution:* Write `game-track > player-car` in comments.
- **Exercise 2.2 [Write AI Prompt]**: Draft an AI prompt asking to create a div element with an ID of 'game-track'.
  * *Solution:* "Create a div container with an ID of game-track"
- **Exercise 2.3 [Review & Explain]**: Explain which attribute (class or id) uniquely identifies this track element.
  * *Solution:* ID value: `game-track`
- **Exercise 2.4 [Test & Break]**: Correct an unclosed tag bug in the track block: `<div id="game-track"><div id="player-car"></div>`.
  * *Solution:* `<div id="game-track"><div id="player-car"></div></div>`
- **Exercise 2.5 [Iterate & Improve]**: Nest a div element with class 'lane-divider' inside the '#game-track' container.
  * *Solution:* `<div id="game-track"><div id="player-car"></div><div class="lane-divider"></div></div>`
- **Exercise 2.6 [Plan & Design]**: Plan a 3-level deep tag structure: a dashboard parent holding an h2 header, which holds a span.
  * *Solution:* `div > h2 > span`
- **Exercise 2.7 [Write AI Prompt]**: Write a prompt to direct the AI to generate the scoreboard HUD block.
  * *Solution:* "Create a scoreboard dashboard panel showing score heading h2 with score-val span inside"
- **Exercise 2.8 [Review & Explain]**: Review if the span tag is nested inside the h2 tag.
  * *Solution:* Type `YES` or `NO` (Correct answer is `YES`).
- **Exercise 2.9 [Test & Break]**: Spot why scoreboard updates fail (wrong ID name spelling `scoreval` vs `score-val`).
  * *Solution:* Correct ID to `score-val` inside the span tag.
- **Exercise 2.10 [Iterate & Improve]**: Combine your scoreboard dashboard and game-track HTML blocks into a single valid file.
  * *Solution:* Merge dashboard div and track div blocks with proper closing tags.

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
- **In-App Homework Quest**: In the Journal tab under "Session 3 Homework", write a CSS stylesheet styling a grid representation of a 3-lane road with a dotted yellow center divider line.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 3)

Each session contains exactly 10 progressive sandbox exercises designed to follow the 5-step AI-Era workflow:

- **Exercise 3.1 [Plan & Design]**: Define width (390px), height (500px), and background-color (#333) specs for the track container.
  * *Solution:* List 390px, 500px, and #333 in comment blocks.
- **Exercise 3.2 [Write AI Prompt]**: Draft a prompt requesting the styling specifications for '#game-track'.
  * *Solution:* "Style game-track with width 390px, height 500px, background dark gray"
- **Exercise 3.3 [Review & Explain]**: Identify Class selectors (.) vs ID selectors (#) symbols.
  * *Solution:* ID: `#`, Class: `.`
- **Exercise 3.4 [Test & Break]**: Fix the coordinate drift by adding relative positioning on `#game-track`.
  * *Solution:* Add `position: relative;` to the `#game-track` rule.
- **Exercise 3.5 [Iterate & Improve]**: Style lane dividers with position absolute and dashed borders.
  * *Solution:* `.lane-divider { position: absolute; height: 100%; border-left: 2px dashed white; }`
- **Exercise 3.6 [Plan & Design]**: Map out absolute coordinates for centering the player car in the middle lane.
  * *Solution:* Bottom 20px, left 165px.
- **Exercise 3.7 [Write AI Prompt]**: Write a prompt to position the player car at bottom 20px and left 165px.
  * *Solution:* "Style player-car with absolute positioning, bottom 20px, left 165px"
- **Exercise 3.8 [Review & Explain]**: Review if obstacle car top 50px left 40px coordinates are on the left or right side of the track.
  * *Solution:* Answer `LEFT`.
- **Exercise 3.9 [Test & Break]**: Temporarily override `.hidden` helper styles to reveal display elements for rendering checks.
  * *Solution:* Change `display: none;` to `display: flex;` in the `.hidden` class rule.
- **Exercise 3.10 [Iterate & Improve]**: Align dashboard HUD horizontally using flexbox parameters.
  * *Solution:* Apply `display: flex; justify-content: space-between; padding: 10px;` to `#dashboard`.

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
- **In-App Homework Quest**: In the Journal tab under "Session 4 Homework", write a JS code snippet declaring variables for a player's `speed`, `laneIndex`, and `isCrashed`. Update these variables by driving 10 units faster and changing lanes.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 4)

Each session contains exactly 10 progressive sandbox exercises following the 5-step AI-Era workflow (matching the in-app Exercises Journal):

- **Exercise 4.1 [Plan & Design]**: Plan which game values change during play (mutable) and which stay fixed forever.
  * *Solution:* `let carX, speed, score, gameActive | const LANE_WIDTH`
- **Exercise 4.2 [Write AI Prompt]**: Prompt the AI to declare the state variables.
  * *Solution:* Prompt mentions `let`, `const`, `carX`, and the initial value `165` (lane positions: 35, 165, 295).
- **Exercise 4.3 [Review & Explain]**: What data type is the value `0` in `let score = 0;`?
  * *Solution:* `Number`
- **Exercise 4.4 [Test & Break]**: Fix `let speed = "0";` (quotes make it a String).
  * *Solution:* `let speed = 0;`
- **Exercise 4.5 [Iterate & Improve]**: Add the missing game-state flag.
  * *Solution:* `let gameActive = false;`
- **Exercise 4.6 [Plan & Design]**: Plan how score and speed change during gameplay.
  * *Solution:* `score++ | speed += 10`
- **Exercise 4.7 [Write AI Prompt]**: Prompt for the increment statements plus console output.
  * *Solution:* Prompt mentions `score`, `speed`, and `console.log`.
- **Exercise 4.8 [Review & Explain]**: After `let speed = 0; speed += 10;`, what is speed?
  * *Solution:* `10`
- **Exercise 4.9 [Test & Break]**: The String Concatenation Trap — `let speed = "10"; speed += 5;` produces `"105"`.
  * *Solution:* `let speed = 10;` (remove the quotes so the result is `15`).
- **Exercise 4.10 [Iterate & Improve]**: Complete variable registry.
  * *Solution:* `let`/`const` declarations for `carX`/`speed`/`score`/`gameActive`/`LANE_WIDTH` plus `score++` and `speed += 10`, with no quoted numbers.

- **Homework Evaluation**: Ensure the student correctly uses variables and increments types correctly without string quotes on integers.

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
- **In-App Homework Quest**: In the Journal tab under "Session 5 Homework", write an event handler script that triggers an alert box stating `"Engine Started"` when the student presses the `"s"` key.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 5)

Each session contains exactly 10 progressive sandbox exercises following the 5-step AI-Era workflow (matching the in-app Exercises Journal):

- **Exercise 5.1 [Plan & Design]**: Plan how the browser reports the pressed key.
  * *Solution:* `keydown > event.key`
- **Exercise 5.2 [Write AI Prompt]**: Prompt for a keydown listener logging the pressed key.
  * *Solution:* Prompt mentions `addEventListener`, `keydown`, and `console.log`.
- **Exercise 5.3 [Review & Explain]**: Which callback parameter carries the key information?
  * *Solution:* `event`
- **Exercise 5.4 [Test & Break]**: The Silent Input Fail — `if (event.key === "left")` never fires.
  * *Solution:* `event.key === "ArrowLeft"` (browsers report the exact string `"ArrowLeft"`), keeping `carX -= 130`.
- **Exercise 5.5 [Iterate & Improve]**: Acknowledge the other direction.
  * *Solution:* Add `else if (event.key === "ArrowRight") { console.log("Steering right"); }`
- **Exercise 5.6 [Plan & Design]**: Plan the steering deltas.
  * *Solution:* `ArrowLeft: carX -= 130 | ArrowRight: carX += 130`
- **Exercise 5.7 [Write AI Prompt]**: Prompt to wire movement to the DOM.
  * *Solution:* Prompt mentions `carX`, `style.left`, `ArrowLeft`, and `ArrowRight`.
- **Exercise 5.8 [Review & Explain]**: Why concatenate a unit onto `carX` when setting `style.left`?
  * *Solution:* `px` (CSS position values require a unit).
- **Exercise 5.9 [Test & Break]**: The Missing Unit — `carElement.style.left = carX;` makes the car vanish.
  * *Solution:* `carElement.style.left = carX + "px";`
- **Exercise 5.10 [Iterate & Improve]**: Complete steering handler.
  * *Solution:* `addEventListener("keydown", ...)` branching on `ArrowLeft`/`ArrowRight`, updating `carX`, writing `style.left = carX + "px"`.

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
- **In-App Homework Quest**: In the Journal tab under "Session 6 Homework", write a conditional validation block that checks if `speed` is greater than `120` (overheating threshold) and resets speed to `100` if true, logging a warning.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 6)

Each session contains exactly 10 progressive sandbox exercises following the 5-step AI-Era workflow (matching the in-app Exercises Journal). Lane coordinates are 35/165/295 (consistent with Session 3's `left: 165px` car position):

- **Exercise 6.1 [Plan & Design]**: Plan the boundary coordinates.
  * *Solution:* `left boundary = 35 | right boundary = 295`
- **Exercise 6.2 [Write AI Prompt]**: Prompt for the left-edge safety guard.
  * *Solution:* Prompt mentions `carX`, `ArrowLeft`, and the condition `> 35`.
- **Exercise 6.3 [Review & Explain]**: With `if (carX > 35)`, what happens at carX = 35 when ArrowLeft is pressed?
  * *Solution:* `BLOCKED` (the guard is false, so the inner block never runs).
- **Exercise 6.4 [Test & Break]**: The Infinite Teleporting Bug — guard changed to `carX >= -130`, car teleports off-screen.
  * *Solution:* Restore `if (carX > 35)`.
- **Exercise 6.5 [Iterate & Improve]**: Mirror the guard on the right side.
  * *Solution:* `else if (event.key === "ArrowRight") { if (carX < 295) { carX += 130; } }`
- **Exercise 6.6 [Plan & Design]**: Plan the overheat threshold rule.
  * *Solution:* `IF speed > 120 THEN speed = 100`
- **Exercise 6.7 [Write AI Prompt]**: Prompt for the overheat clamp.
  * *Solution:* Prompt mentions `speed`, `120`, and `100`.
- **Exercise 6.8 [Review & Explain]**: Does `if (speed > 120)` trigger when speed is exactly 120?
  * *Solution:* `NO` (`>` is strict).
- **Exercise 6.9 [Test & Break]**: Reset value written as a String — `speed = "100";`.
  * *Solution:* `speed = 100;` (remove the quotes).
- **Exercise 6.10 [Iterate & Improve]**: Complete boundary system.
  * *Solution:* All four checks — `carX > 35`, `carX < 295`, `speed > 120`, `speed = 100`.

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
- **In-App Homework Quest**: In the Journal tab under "Session 7 Homework", write a JS `for` loop that logs the text `"Highway Marker position: X"` for positions incrementing by 50 up to 250.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 7)

Each session contains exactly 10 progressive sandbox exercises following the 5-step AI-Era workflow (matching the in-app Exercises Journal):

- **Exercise 7.1 [Plan & Design]**: Plan the marker spacing.
  * *Solution:* `count = 5 | spacing = 120`
- **Exercise 7.2 [Write AI Prompt]**: Prompt for the marker-spawning loop.
  * *Solution:* Prompt mentions a `for loop`, the formula `i * 120`, and running `5` times.
- **Exercise 7.3 [Review & Explain]**: Which part of `for (let i = 0; i < 5; i++)` advances the loop?
  * *Solution:* `i++`
- **Exercise 7.4 [Test & Break]**: Browser Freezes — the increment was removed, leaving `for (let i = 0; i < 5; )`.
  * *Solution:* Restore `i++` as the third part of the loop header.
- **Exercise 7.5 [Iterate & Improve]**: Log each marker's position.
  * *Solution:* `console.log("Highway Marker position: " + markerY);` inside the loop body.
- **Exercise 7.6 [Plan & Design]**: Plan how each position becomes a visible element.
  * *Solution:* `create div > class marker-dash > style.top = markerY`
- **Exercise 7.7 [Write AI Prompt]**: Prompt for the DOM append inside the loop.
  * *Solution:* Prompt mentions `marker-dash`, `appendChild`, and `#game-track`.
- **Exercise 7.8 [Review & Explain]**: How many lines change if 20 markers were hand-written instead of looped?
  * *Solution:* `20` (any answer ≥ 15 accepted — the point is the scale of the manual approach).
- **Exercise 7.9 [Test & Break]**: The Off-Track Marker — spacing formula typo `markerY = i * 12`.
  * *Solution:* `markerY = i * 120;`
- **Exercise 7.10 [Iterate & Improve]**: Complete marker loop.
  * *Solution:* `for (let i = 0; i < 5; i++)` computing `i * 120`, creating a `marker-dash` div, and `appendChild` onto `#game-track`.

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
- **In-App Homework Quest**: In the Journal tab under "Session 8 Homework", write a function `calculateScore(distance, speedMultiplier)` that multiplies the parameters and returns the score value, declaring local variables.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 8)

Each session contains exactly 10 progressive sandbox exercises following the 5-step AI-Era workflow (matching the in-app Exercises Journal):

- **Exercise 8.1 [Plan & Design]**: Decompose the steering script into single-purpose functions.
  * *Solution:* `updatePlayerPosition() | moveLeft() | moveRight()`
- **Exercise 8.2 [Write AI Prompt]**: Prompt for the shared rendering function.
  * *Solution:* Prompt mentions `function`, `updatePlayerPosition`, and `style.left`.
- **Exercise 8.3 [Review & Explain]**: How many parameters does `updatePlayerPosition()` take?
  * *Solution:* `0` (the parentheses are empty).
- **Exercise 8.4 [Test & Break]**: Scope Access Violation — `carX` declared inside `moveLeft()` is invisible to `updatePlayerPosition()`.
  * *Solution:* Move `let carX = 165;` outside (before) both function declarations.
- **Exercise 8.5 [Iterate & Improve]**: Wire the handler to the modular function.
  * *Solution:* `if (event.key === "ArrowLeft") { moveLeft(); }` — no inline boundary logic.
- **Exercise 8.6 [Plan & Design]**: Plan the mirror function.
  * *Solution:* `moveRight() -> IF carX < 295 THEN carX += 130, then call updatePlayerPosition()`
- **Exercise 8.7 [Write AI Prompt]**: Prompt for both movement functions.
  * *Solution:* Prompt mentions `moveLeft`, `moveRight`, and `updatePlayerPosition`.
- **Exercise 8.8 [Review & Explain]**: With a shared clamp helper, how many function bodies need fixing when a clamp bug is found?
  * *Solution:* `1`
- **Exercise 8.9 [Test & Break]**: The Duplicate Render Call — `updatePlayerPosition()` called twice in `moveLeft()`.
  * *Solution:* Delete one call so it runs exactly once per `moveLeft()`.
- **Exercise 8.10 [Iterate & Improve]**: Complete modular controller.
  * *Solution:* `updatePlayerPosition()`, `moveLeft()`, `moveRight()`, plus a `keydown` listener calling them.

- **Homework Evaluation**: Ensure function correctly takes parameters, performs math operations, and uses `return` statements.

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
- **In-App Homework Quest**: In the Journal tab under "Session 9 Homework", write a game loop structure containing an active check gate that prints `"Tick"` to console, recursion, and a method to halt execution.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 9)

Each session contains exactly 10 progressive sandbox exercises following the 5-step AI-Era workflow (matching the in-app Exercises Journal). Note the reset threshold is **500** (the track height defined in Session 3), not 600:

- **Exercise 9.1 [Plan & Design]**: Plan the game loop lifecycle.
  * *Solution:* `gameLoop() -> update state -> render -> requestAnimationFrame(gameLoop)`
- **Exercise 9.2 [Write AI Prompt]**: Prompt for the recursive loop.
  * *Solution:* Prompt mentions `function`, `gameLoop`, and `requestAnimationFrame`.
- **Exercise 9.3 [Review & Explain]**: What does calling `requestAnimationFrame(gameLoop)` at the end do?
  * *Solution:* `SCHEDULES_NEXT_FRAME` (reschedules gameLoop on the next repaint).
- **Exercise 9.4 [Test & Break]**: The Unstoppable Speed Bug — the gameActive check was removed.
  * *Solution:* `if (!gameActive) { return; }` as the first line of `gameLoop()`.
- **Exercise 9.5 [Iterate & Improve]**: Make the halt visible.
  * *Solution:* `console.log("Loop halted");` before the return in the guard.
- **Exercise 9.6 [Plan & Design]**: Plan the obstacle movement and reset.
  * *Solution:* `obstacleY += speed | IF obstacleY > 500 THEN obstacleY = -100, score += 10`
- **Exercise 9.7 [Write AI Prompt]**: Prompt for `moveObstacles()`.
  * *Solution:* Prompt mentions `moveObstacles`, `obstacleY`, `500`, and `score`.
- **Exercise 9.8 [Review & Explain]**: obstacleY is 490 and speed is 5 — value after `obstacleY += speed;`?
  * *Solution:* `495`
- **Exercise 9.9 [Test & Break]**: The Frozen Scoreboard — the reset block never increments score.
  * *Solution:* Add `score += 10;` inside the `if (obstacleY > 500)` block.
- **Exercise 9.10 [Iterate & Improve]**: Complete animation engine.
  * *Solution:* `gameLoop()` with the gameActive gate + `requestAnimationFrame`, and `moveObstacles()` updating/resetting `obstacleY` with the score increment.

- **Homework Evaluation**: Student loop must contain gate validation (`if (!gameActive)`) to prevent animation after stop alerts.

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
- **In-App Homework Quest**: In the Journal tab under "Session 10 Homework", write a JS function `isOverlapping(x1, y1, w1, h1, x2, y2, w2, h2)` returning a Boolean checking bounding overlaps.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 10)

Each session contains exactly 10 progressive sandbox exercises following the 5-step AI-Era workflow (matching the in-app Exercises Journal). The sandbox drill uses small illustrative sprite sizes (player 30×50, obstacle 25×40); the full-size themed labs use the actual car CSS (60×100 from Sessions 2-3), so the collision math is identical but the box numbers differ:

- **Exercise 10.1 [Plan & Design]**: Plan the overlap condition.
  * *Solution:* All four bounds compared — `player.right > obstacle.left AND player.left < obstacle.right AND player.bottom > obstacle.top AND player.top < obstacle.bottom`
- **Exercise 10.2 [Write AI Prompt]**: Prompt for `checkCollision(rect1, rect2)`.
  * *Solution:* Prompt mentions `checkCollision`, `width`, and `height`.
- **Exercise 10.3 [Review & Explain]**: Would checking only `player.x === obstacle.x` ever register a realistic collision?
  * *Solution:* `NO` (exact equality almost never occurs; dimensions matter).
- **Exercise 10.4 [Test & Break]**: The Ghost Car Bug — one comparison operator flipped.
  * *Solution:* `rect1.x + rect1.width > rect2.x` (was `<`).
- **Exercise 10.5 [Iterate & Improve]**: Stop the game on collision.
  * *Solution:* `if (checkCollision(player, obstacle)) { gameActive = false; console.log("Collision detected!"); }` inside `gameLoop()`.
- **Exercise 10.6 [Plan & Design]**: Plan the bounding-box dimensions.
  * *Solution:* `player width=30 height=50 | obstacle width=25 height=40`
- **Exercise 10.7 [Write AI Prompt]**: Prompt for the two rect objects.
  * *Solution:* Prompt mentions `carX`, `obstacleY`, `width`, and `height`.
- **Exercise 10.8 [Review & Explain]**: Edges touch exactly (`rect1.x + rect1.width === rect2.x`) — does a strict `>` register a collision?
  * *Solution:* `NO` (strict comparison requires actual overlap).
- **Exercise 10.9 [Test & Break]**: The Axis Swap Bug — first condition compares `rect1.y` against a horizontal bound.
  * *Solution:* `rect1.x < rect2.x + rect2.width` (change the swapped `rect1.y` to `rect1.x`).
- **Exercise 10.10 [Iterate & Improve]**: Complete collision system.
  * *Solution:* Full 4-condition `checkCollision()` plus `gameActive = false` wired up on a hit.

- **Homework Evaluation**: Ensure the student correctly integrates logical checks across coordinates and handles edge overlaps.

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
- **In-App Homework Quest**: In the Journal tab under "Session 11 Homework", write a script that updates an HTML element displaying `lane-alert` to read `"Danger"` when the player car coordinate reaches the leftmost lane (`35px`).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 11)

Each session contains exactly 10 progressive sandbox exercises following the 5-step AI-Era workflow (matching the in-app Exercises Journal). The app standardizes on `textContent` (safer than `innerHTML`/`innerText`) and a `.hidden` CSS class for the overlay:

- **Exercise 11.1 [Plan & Design]**: Plan the DOM update pipeline.
  * *Solution:* `score changes -> #score-val.textContent = score | collision -> remove hidden from #restart-panel`
- **Exercise 11.2 [Write AI Prompt]**: Prompt for the scoreboard updater.
  * *Solution:* Prompt mentions `function`, `textContent`, and `score-val`.
- **Exercise 11.3 [Review & Explain]**: Why is `textContent` safer than `innerHTML` for score display?
  * *Solution:* `SCRIPT_INJECTION` (innerHTML parses its input as HTML/scripts).
- **Exercise 11.4 [Test & Break]**: The Negative Score Leak — scoreboard shows "score: -5".
  * *Solution:* `if (score < 0) { score = 0; }` before writing to the DOM.
- **Exercise 11.5 [Iterate & Improve]**: Reveal the game-over overlay.
  * *Solution:* `function triggerGameOverScreen() { document.getElementById("restart-panel").classList.remove("hidden"); }`
- **Exercise 11.6 [Plan & Design]**: Plan the restart flow.
  * *Solution:* `press Space -> reset score to 0 -> reset carX -> hide restart-panel -> gameActive = true`
- **Exercise 11.7 [Write AI Prompt]**: Prompt for the restart handler.
  * *Solution:* Prompt mentions `Space`, `gameActive`, and `addEventListener`.
- **Exercise 11.8 [Review & Explain]**: What if the `.hidden` class is never removed after restart?
  * *Solution:* `STAYS_HIDDEN` (`display: none` keeps applying).
- **Exercise 11.9 [Test & Break]**: The Frozen Restart — handler never re-enables the game.
  * *Solution:* Add `gameActive = true;` inside the Space-key branch.
- **Exercise 11.10 [Iterate & Improve]**: Complete HUD & restart system.
  * *Solution:* `updateScoreboard()` (with the negative-score guard), `triggerGameOverScreen()`, and a keydown handler checking `event.key === " "` (the spacebar reports a literal space character, not the word "Space") that resets and sets `gameActive = true`.

- **Homework Evaluation**: Check selectors targets syntax, and ensure validation checks block negative integers.

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

The app's Exercises Journal additionally provides 10 capstone exercises for this session:

- **Exercise 12.1 [Plan & Design]**: Plan the configuration object.
  * *Solution:* `const CONFIG = { startSpeed, difficultyMultiplier, maxSpeed }`
- **Exercise 12.2 [Write AI Prompt]**: Prompt for difficulty scaling using CONFIG.
  * *Solution:* Prompt mentions `CONFIG`, `speed`, and clamping to a `max`.
- **Exercise 12.3 [Review & Explain]**: With startSpeed 5, multiplier 0.1, score 50 — value of `startSpeed + score * difficultyMultiplier`?
  * *Solution:* `10`
- **Exercise 12.4 [Test & Break]**: The Unbounded Speed Bug.
  * *Solution:* `speed = Math.min(speed, CONFIG.maxSpeed);`
- **Exercise 12.5 [Iterate & Improve]**: Refactor magic numbers.
  * *Solution:* Replace `35`/`295` with `CONFIG.leftBound`/`CONFIG.rightBound`.
- **Exercise 12.6 [Plan & Design]**: Plan the final QA sweep.
  * *Solution:* `variables | boundaries | collision | restart`
- **Exercise 12.7 [Write AI Prompt]**: Prompt for the smoke-test script.
  * *Solution:* Prompt mentions `test`, `console.log`, and `pass`.
- **Exercise 12.8 [Review & Explain]**: Could mixing `> 35` and `>= 35` guards create edge-case gaps?
  * *Solution:* `YES`
- **Exercise 12.9 [Test & Break]**: The final seeded diagnostic (flipped operator in collision check).
  * *Solution:* `rect1.x < rect2.x + rect2.width` (first condition uses `<`, not `>`).
- **Exercise 12.10 [Iterate & Improve]**: Capstone reflection.
  * *Solution:* Free response (at least one full sentence describing a specific bug and how tracing variables located it).

---

