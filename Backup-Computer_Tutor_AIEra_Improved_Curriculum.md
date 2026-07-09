# Computer Tutor in the AI Era — Complete Curriculum (Improved)
 
## 1. Executive Summary

The landscape of software engineering has fundamentally changed. AI now handles the historical bottleneck of writing syntax and debugging compiler errors. However, skipping coding entirely creates a dangerous disconnect — to effectively direct AI, a creator must understand the constraints, mechanics, and underlying logic of systems.

**Our mission:** Shift technical education from training **"Syntax Writers"** to cultivating **"System Architects"** — people who think precisely, design defensively, and direct AI tools with purpose.

> [!IMPORTANT]
> **Design Principles of This Curriculum**
> - **Tool-Agnostic** — All exercises describe capabilities, not brand names. AI tools evolve rapidly; the skills must outlast any specific tool.
> - **Age-Flexible** — Core content targets ages 11–14, with adaptation notes for younger (9–10) and older (15–17) students.
> - **Practice-First** — This is a tutor-led practice/learning program, not an academic lecture course. Every session has hands-on activities.
> - **Ethics-Integrated** — AI responsibility is woven into every level, not bolted on as a separate unit.

---

## 2. Core Philosophy: "The Chef Analogy"

| Era | Analogy | Lesson |
|-----|---------|--------|
| **The Past** | A chef spent years mastering knife skills — chopping vegetables to precise millimeter requirements. | Syntax memorization was the gatekeeping skill. |
| **The Present** | Automated processors chop ingredients perfectly in milliseconds. | AI generates code faster and more accurately than manual typing. |
| **The Future** | The chef's value lies in recipe creation, flavor profiling, ingredient composition, and kitchen management. | The student's value lies in **system design, logical specification, quality assurance, and ethical judgment.** |

**Code generation is the "automated food processor." The student must become the master chef who designs the recipe, manages the kitchen, and ensures food safety.**

---

## 3. Pedagogical Methods (Cognitive Resistance Framework)

In the AI era, if we simply let a student ask AI to "make a game," zero critical thinking occurs. We introduce **cognitive resistance** through five methods:

```
[Traditional Coding Resistance]  ──►  Wrestling with syntax errors
[AI-Era Cognitive Resistance]    ──►  Systemic debugging, constraint specification,
                                       edge-case modeling, ethical judgment
```

### A. The "Fallible Intern" Mindset
Students treat AI as a brilliant but careless intern. They must **audit** every output, never copy-paste blindly. Tutor asks: *"Why did the AI choose this approach? Where could it fail?"*

### B. The "Lego Instruction Game"
Ambiguity is the enemy of logic. Students practice writing specifications in absolute, unambiguous terms — like assembly instructions where every step must be explicit.

### C. The "Break It" Mentality
True critical thinking means identifying failure states *before* they happen. Students actively try to break systems: *"What if the user enters text in a number field? What if the internet disconnects mid-save?"*

### D. System Deconstruction
Building is easy; understanding *why* a system works is hard. Students reverse-engineer existing applications by mapping their logic flows before building anything new.

### E. The Ethical Lens *(New)*
Every design decision has consequences. Students learn to ask: *"Who could this hurt? What data am I collecting and why? What happens when the AI is wrong?"*

### F. The Prompt Journal Protocol *(New)*
Every session, students maintain a **Prompt Journal** — a structured log of their AI interactions. This is not a free-form notebook; it follows a strict template that builds auditing discipline:

| Section | Purpose | Example Entry |
|---------|---------|---------------|
| **My Specification** | What I asked the AI to build | *"Generate a JS function that moves the car left by one lane when ArrowLeft is pressed"* |
| **AI's Output** | Paste the AI's generated code | *(code block)* |
| **My Audit Notes** | What I found wrong, surprising, or worth questioning | *"The AI used `var` instead of `let`. It also didn't add boundary checks."* |
| **My Corrections** | What I changed and why | *"Changed `var` to `let` for block scoping. Added `if (carX > 0)` guard."* |
| **Concepts Learned** | Key terms or patterns I understood from this cycle | *"Block scoping, boundary clamping, event.key matching"* |

The Prompt Journal becomes each student's primary portfolio artifact — evidence of growth from passive consumer to active auditor of AI-generated code.

### G. AI-Era Pedagogical Best Practices
To maximize logical thinking and technology knowledge while using AI code assistants, tutors must enforce these four practices:

1. **The "No Code Words" Prompting Rule**: Challenge students to write prompt specifications describing the system behavior using mathematical and physical constraints rather than direct programming terms. (e.g. *Prompting: "If the car position is larger than 260, snap it to 260" instead of "Write a JS conditional clamp for carX"*).
2. **"Seeded Bug" Diagnostics**: Never let students ask AI to blindly generate complete features. Instead, present them with pre-generated code containing hidden logical bugs and require them to identify, explain, and write prompts to correct the specific line of code that failed.
3. **The "Code Defense" Review**: During code audits, require students to explain the generated script by answering boundary-condition questions (e.g. *"What happens if this input parameter is negative? If we delete line 15, how does the UI shift?"*).
4. **The Prompt Journal as the Primary Grade Metric**: Shift grading criteria from code execution (which AI handles) to the quality of the Prompt Journal. Grade the precision of the initial specification and the depth of the student's own audit notes.

### H. The 3-Part Session Flow
Every session decodes into three structural phases that balance concept mastery, diagnostic practice, and long-term project iteration:

| Phase | Purpose | Activities |
|---|---|---|
| **1. Content & Concept Learning** | Understand the core programming construct or architecture model. | Socratic board lectures, reverse-engineering real-world systems, and reading real-world case studies of system failures. |
| **2. Short Seeded-Bug Exercises** | Develop diagnostics, code reading, and debugging precision. | Students work with a small, isolated sandbox script that is intentionally broken. They must inspect the code, identify the logic gap, and correct it. |
| **3. Game Target Integration** | Apply the logic concept to build the level's core project (e.g., Racing Car Game). | Students specify layout changes or feature mechanics, prompt AI to generate the code, audit the output in their Prompt Journal, and integrate it into the game. |

### I. Enhancing the 3-Part Flow (Tutor Guidelines)
To maximize the efficacy of this 3-part session structure, tutors should implement these four operational guidelines:

1. **Weave Ethics into Part 3 as "Product Constraints"**: Instead of teaching ethics as an abstract discussion, translate ethical dilemmas into direct design requirements for the game target. (e.g., in Level 1 Session 3, the student must build a toggle button for an accessibility high-contrast color mode rather than just discussing colorblindness).
2. **Decouple the Environments (Sandbox vs. Local Workspace)**: Maintain separate workspaces to keep the student's mind and project clean.
   - **Part 2 (Seeded Bugs)**: Should be run in a temporary, isolated sandbox file (e.g., `bug_hunt_s5.js`). The student's sole focus is reading and locating the logic gap.
   - **Part 3 (Game Target)**: Takes place directly inside their local workspace game repository.
3. **Implement "Bronze, Silver, Gold" Specs for Part 3**: Account for varying learning speeds by tiering the integration specs:
   - **Bronze (Pass)**: The baseline logical requirement for the session (e.g., boundary clamping at the borders).
   - **Silver (Optional)**: Adds minor complexity or visual feedback (e.g., boundary collision triggers screen shake).
   - **Gold (Advanced)**: Adds advanced math or performance elements (e.g., adding drift/slide friction dynamics).
4. **End Part 3 with a 5-Minute "Peer Handoff"**: Before ending, have students swap screens or share live URLs. The peer acts as a hostile tester trying to find edge-case failures, while the presenter must explain how their logic defends the application. This builds verbal articulation of tech systems.

---

## 4. Program Structure

| | Level 1: Beginner | Level 2: Intermediate | Level 3: Advanced | Level 4: Engineering |
|---|---|---|---|---|
| **Title** | "Racing Car Game" | "Mars Colony Defense" | "Cyberpunk Hacker Arena" | "The Software Engineer" |
| **Focus** | Web Coding Basics & Inputs | Arrays & Leaderboard APIs | Backend & Database Security | Testing, Real-Time & DevOps |
| **Syntax Approach** | Syntax in context — HTML/CSS/JS learned by building the game | Syntax in context — Arrays, Canvas API & async fetch through gameplay | Syntax in context — SQL schemas, Express routes & RLS through the hacker arena | Syntax in context — Test runners, WebSockets, CI/CD YAML & monitoring through the dashboard |
| **Sessions** | 12 sessions × 2 hours | 13 sessions × 2 hours | 14 sessions × 2 hours | 12 sessions × 2 hours |
| **Total Hours** | 24 hours | 26 hours | 28 hours | 24 hours |
| **Assessment** | 1 week (game walkthrough + debug challenge) | 1 week (API leaderboard debug + defense) | 1 week (full-stack database capstone defense) | 1 week (live launch + system pitch) |

### Age Adaptation Guide

| Age Group | Level 1 Adjustments | Level 2 Adjustments | Level 3 Adjustments | Level 4 Adjustments |
|-----------|--------------------|--------------------|---------------------|---------------------|
| **9–10** | Use physical manipulatives (cards, blocks). Extend to 15 sessions. Simplify vocabulary. Use game-based contexts only. | Defer to age 11+. If attempted: use only one programming language, extend to 15 sessions, simplify PRD to "wish list + rules." | Not recommended. | Not recommended. |
| **11–14** | Core curriculum as designed. | Core curriculum as designed. | Core curriculum as designed. | Core curriculum as designed (highly recommended with teacher scaffolding). |
| **15–17** | Can compress to 10 sessions. Add algorithmic complexity discussions. Use real-world business scenarios. | Can compress to 10 sessions. Introduce basic algorithm analysis. Add collaborative team projects. | Add cloud architecture concepts. Introduce CI/CD pipelines conceptually. Add career pathway discussions. | Complete deployment independently. Integrate real third-party APIs (payment/maps) and deploy to a personal domain. |

## 5. Level 1: Beginner — "The Logic Blueprint"

**Goal:** Train the brain to construct absolute, unambiguous logic without syntax frustration. Build the mental models that underpin all system design.

**Prerequisites:** None. Basic reading comprehension required.

### 🏎️ The Racing Car Project: 11-Part Roadmap (Sessions 2–12)

The core project of Level 1 is the **2D Highway Avoidance Racing Game**. Students build this project iteratively week-by-week from Session 2 to Session 12, aligning directly with each session's core concepts:
- **Part 1 (Session 2)**: *HTML Document Skeleton* — Create the base containers (Track Arena, Player Car, Dashboard Panel).
- **Part 2 (Session 3)**: *CSS Sizing & Coordinates Layout* — Sizing '#game-track', absolute position '#player-car' and style road dividers with white dashes.
- **Part 3 (Session 4)**: *JS Variable Registry* — Declare variables for position state, speed metrics, score registers, and crash flags.
- **Part 4 (Session 5)**: *Keyboard Control Interfaces* — Bind keyboard keydown listeners to register steering moves (WASD/Arrows).
- **Part 5 (Session 6)**: *Safety Guards & Boundary Clamps* — Implement boundary checks that clamp coordinates to keep the player on the road.
- **Part 6 (Session 7)**: *Obstacle Loop Generation* — Spawns oncoming obstacle cars dynamically using loops.
- **Part 7 (Session 8)**: *Modular Control Functions* — Refactor movement logic and code modular update functions for moving obstacles down the screen.
- **Part 8 (Session 9)**: *Timer Loops & Animations* — Construct requestAnimationFrame recursive game loops for redraw rendering.
- **Part 9 (Session 10)**: *Collision Detection Overlap Math* — Code mathematical overlap bounding checks to trigger crash states on collision.
- **Part 10 (Session 11)**: *DOM HUD Visual Updates* — Connect score states to update DOM element text strings and display restart prompts.
- **Part 11 (Session 12)**: *Game Polish & Final Assessment* — Finalizing difficulty multipliers, resetting handlers, and executing live defense QA reviews.

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
   - *Action*: The student arranges digital command blocks (`Power On`, `Scan Subnet`, `Establish SSH Tunnel`, `Bypass Firewall`, `Exfiltrate Logs`) in the exact logical order to reach a target.
   - *Self-Audit*: The student runs a simulator to see if the sequence triggers alarms or completes the security bypass.

4. **Digital Sandbox Lab: Cyber Security-Autonomous Vehicle Simulator (30 mins)**
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
- **Exercise 4.1 (State Declaration) Solution**:
  ```javascript
  let carX = 130; // Lane positions: 0, 130, 260
  let speed = 0;
  let score = 0;
  let gameActive = false;
  const trackWidth = 390;
  ```
- **Exercise 4.2 (Updates Math) Solution**:
  ```javascript
  speed += 10;
  score++;
  gameActive = true;
  ```
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
- **Exercise 5.1 (Event Listener) Solution**:
  ```javascript
  window.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
  });
  ```
- **Exercise 5.2 (Modify Position) Solution**:
  ```javascript
  window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      carX -= 130;
    } else if (event.key === "ArrowRight") {
      carX += 130;
    }
  });
  ```
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
   - *Activity*: Sketch the track's left boundary coordinate (`0px`) and right boundary coordinate (`260px`).
   - *Action*: Write pseudo-code logic locks that verify: *If moving left would result in x < 0, block the movement.*

4. **Build Phase (AI Assisted): Implementing Lane Locks (35 mins)**
   - *Action*: Prompt AI to generate boundary conditionals wrapping the lane steering script.
   - *Audit*: Audit conditionals blocks. Trace parameters step-by-step to verify the car locks at the outer lanes in the Prompt Journal.

5. **Socratic Debugging: The Infinite Teleporting Bug (15 mins)**
   - *Activity*: Tutor modifies the comparison operator from `< 0` to `<= -130` or breaks the assignment block, causing the car to teleport off-screen.
   - *Challenge*: Student corrects boundaries coordinates.
   - *Socratic Question*: *"Why did the car disappear when we pressed left repeatedly? What value did carX reach? Why did our boundary guard fail to catch it?"*

6. **Ethics: System Safety Checks (15 mins)**
   - *Topic*: Safety thresholds in critical code.
   - *Real-World Case*: The Mars Climate Orbiter (1999) crashed because one team used metric units while another used imperial — a boundary value mismatch that destroyed a $125 million spacecraft.
   - *Discussion*: *"Autonomous vehicles rely on boundaries to stay in lanes. What happens if a safety check script has a logic typo? Why do developers write redundant checks?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 6 Homework", write a conditional validation block that checks if `speed` is greater than `120` (overheating threshold) and resets speed to `100` if true, logging a warning.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 6)
- **Exercise 6.1 (Left Guard) Solution**:
  ```javascript
  if (event.key === "ArrowLeft") {
    if (carX > 0) {
      carX -= 130;
    }
  }
  ```
- **Exercise 6.2 (Combined Lane Guards) Solution**:
  ```javascript
  if (event.key === "ArrowLeft") {
    if (carX > 0) { carX -= 130; }
  } else if (event.key === "ArrowRight") {
    if (carX < 260) { carX += 130; }
  }
  ```
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
- **Exercise 7.1 (Draw Lane Markers) Solution**:
  ```javascript
  for (let i = 0; i < 5; i++) {
    let markerY = i * 120;
    createMarkerElement(markerY);
  }
  ```
- **Exercise 7.2 (Debug Infinite Loop) Solution**: Locate missing increment `i++` and add it back inside the loop body.
- **Homework Evaluation**: Ensure the loop runs exactly 5 times and outputs correct coordinate calculations (0, 50, 100, 150, 200, 250).

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
- **Exercise 8.1 (Steering Function) Solution**:
  ```javascript
  function updatePlayerPosition() {
    let carElement = document.getElementById("player-car");
    carElement.style.left = carX + "px";
  }
  ```
- **Exercise 8.2 (Modular Execution) Solution**:
  ```javascript
  function moveCarLeft() {
    if (carX > 0) {
      carX -= 130;
      updatePlayerPosition();
    }
  }
  ```
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
- **Exercise 9.1 (Animation Loop) Solution**:
  ```javascript
  function gameLoop() {
    if (!gameActive) { return; }
    moveObstacles();
    updateScore();
    requestAnimationFrame(gameLoop);
  }
  ```
- **Exercise 9.2 (Movement animation) Solution**:
  ```javascript
  function moveObstacles() {
    obstacleY += speed;
    if (obstacleY > 600) {
      obstacleY = -100; // Reset off-screen top
      score += 10;
    }
    document.getElementById("obstacle").style.top = obstacleY + "px";
  }
  ```
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
- **Exercise 10.1 (Collision Math check) Solution**:
  ```javascript
  function checkCollision(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  }
  ```
- **Exercise 10.2 (Integrating Crash State) Solution**:
  ```javascript
  function verifyCollisions() {
    let playerRect = { x: carX, y: 500, width: 60, height: 100 };
    let obsRect = { x: obstacleX, y: obstacleY, width: 60, height: 100 };
    if (checkCollision(playerRect, obsRect)) {
      gameActive = false;
      alert("Crashed! Score: " + score);
    }
  }
  ```
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
   - *Topic 1*: Linking code variables to visual texts (`.innerText`, `.style.display`).
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
- **In-App Homework Quest**: In the Journal tab under "Session 11 Homework", write a script that updates an HTML element displaying `lane-alert` to read `"Danger"` when player car coordinate reaches lane limit `0`.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 11)
- **Exercise 11.1 (Score updates DOM) Solution**:
  ```javascript
  function updateScoreboard() {
    let scoreVal = document.getElementById("score-val");
    if (score < 0) { score = 0; } // defensive check
    scoreVal.innerText = score;
  }
  ```
- **Exercise 11.2 (Show game over display) Solution**:
  ```javascript
  function triggerGameOverScreen() {
    let screen = document.getElementById("game-over-screen");
    screen.style.display = "block";
  }
  ```
- **Homework Evaluation**: Check selectors targets syntax, and ensure validation checks block negative integers.

---

#### Session 12: "The Racing Car Game Assessment" (2 hours)

#### In-Session Digital Assessment (2 hours)

**Part A: "The Racing Game Layout Builder" — In-App (45 mins)**
- Given a clean environment, build a racing game panel:
  1. Map the DOM element tags (Track, Car, Scoreboard).
  2. Declare the styling properties establishing track lanes and car positions.
  3. Write variable declarations representing score levels and coordinate bounds.
  4. Formulate safety checks clamping inputs to track limits.

**Part B: "The Game Code Walkthrough" — Walkthrough (45 mins)**
- The student presents their working Racing Car Game script to the tutor.
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
- Successful game execution (moves, avoids, collides, overlays scores).
- Can trace and explain variables flow through conditional checks and functions.

#### 📖 Tutor Manual: Assessment Solutions (Session 12)
- **Part A (Blueprint Check)**: Verify the student mapped HTML tag structures (`game-track`, `player-car`), CSS layouts, JS variables, and lane boundaries.
- **Part B (Defense Check)**: Verify collision checks and clamping values at `carX = 0` and `carX = 260`.
- **Part C (Diagnostic Check)**: Student must debug overlap math and correct boundary signs.
- **Take-Home Evaluation**: Verify self-reflection logs on variables, coordinate updates, and DOM interactions.

---

## 6. Level 2: Intermediate — "Mars Colony Defense Game"

**Goal:** Transition to tracking multiple active objects (lasers, alien swarms) in dynamic arrays, rendering using the Canvas API, and communicating with leaderboard endpoints using asynchronous JavaScript (fetch/APIs).

**Prerequisites:** Level 1 completion.

### Module 1: Canvas Rendering & Sprite Collections (Sessions 1–4)

---

#### Session 1: "Initializing the Defense Arena: Canvas & Coordinates" (2 hours)

**Learning Objectives:**
- Understand the difference between DOM-based layout and coordinate Canvas rendering
- Set up an interactive `<canvas>` element and retrieve its 2D drawing context
- Draw game shapes (colony shield blocks, player ship, lanes) using canvas draw APIs

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Reverse Engineering — Inspecting a Canvas Game (15 mins)**
   - *Activity*: The tutor opens a working Space Invaders-style game in the browser. The student opens browser DevTools and navigates to the Sources tab.
   - *Action*: The student reads the source code and must identify: (1) How is the canvas element initialized? (2) What draw commands render the player ship? (3) Where is the game loop function?
   - *Debrief*: Show how reading and navigating unfamiliar code is a critical skill. Professional engineers spend more time *reading* code than writing it.

2. **Core Concept Board Lesson: The Canvas API vs. The DOM (20 mins)**
   - *Topic 1*: HTML5 Canvas element as a pixel array viewport.
   - *Topic 2*: Direct rendering commands (`fillRect()`, `clearRect()`, `stroke()`).
   - *Topic 3*: Center alignment vs. coordinate anchoring on Canvas.

3. **Design Phase: Defense Grid Blueprint (20 mins)**
   - *Activity*: Define coordinates constraints (e.g. Canvas width 480px, height 600px).
   - *Action*: Draft the canvas element spec sheets.

4. **Build Phase (AI Assisted): Coding the Arena (35 mins)**
   - *Action*: Prompt AI to generate canvas initialization scripts (`canvas.js`).
   - *Audit*: Audit generated context bindings. Student explains draw parameters to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Overwriting Canvas (15 mins)**
   - *Activity*: Tutor removes the `ctx.clearRect()` call in the draw loop, causing movement to draw a solid trail of shapes on screen.
   - *Challenge*: Student debugs and restores the clearing function.
   - *Socratic Question*: *"Why does the space ship look like a solid red bar instead of moving? What is the role of clearRect before drawing the next frame?"*

6. **Ethics: Color Associations in Systems Design (15 mins)**
   - *Topic*: Palette choices.
   - *Real-World Case*: Research studies have shown that the use of red enemy indicators in military simulation games can increase aggression and dehumanize adversaries, influencing real-world attitudes.
   - *Discussion*: *"Why are alien indicators colored red in games? How do design decisions influence player aggression or anxiety?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 1 Homework", write a JS code snippet that draws a green defense shield block on a canvas using absolute context parameters.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 1)
- **Exercise 1.1 (Canvas Context Setup) Solution**:
  ```javascript
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  ```
- **Exercise 1.2 (Drawing Player Ship) Solution**:
  ```javascript
  ctx.fillStyle = "red";
  ctx.fillRect(200, 500, 40, 40);
  ```
- **Homework Evaluation**: Ensure the script uses `getContext("2d")` and sets `fillStyle` before using `fillRect`.

---

#### Session 2: "Drawing and Animating Sprite Lists" (2 hours)

**Learning Objectives:**
- Declare JavaScript objects representing game sprites (player ship, aliens)
- Set up speed variables and update coordinate structures in real-time
- Implement simple keyboard controls mapping keys to continuous motion increments

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Object State Tracing (15 mins)**
   - *Activity*: Trace how variable properties (e.g. `ship.x`, `ship.speed`) change after inputs are applied.
   - *Action*: Trace variable states values.
   - *Debrief*: Show how object literal values can be updated dynamically.

2. **Core Concept Board Lesson: Sprites as Object Literals (20 mins)**
   - *Topic 1*: Structuring sprite properties inside JS Objects:
     ```javascript
     let ship = { x: 200, y: 500, width: 40, height: 40, speed: 5 };
     ```
   - *Topic 2*: Modifying object values inside drawing cycles.

3. **Design Phase: Sprite Objects Specs (20 mins)**
   - *Activity*: Outline properties checklist for Player and Enemy classes.
   - *Action*: Write empty object declarations with baseline attributes.

4. **Build Phase (AI Assisted): Drawing Sprites (35 mins)**
   - *Action*: Prompt AI to write a function that renders the `ship` object on the canvas context.
   - *Audit*: Audit coordinate access selectors (`ship.x`). Explain properties bindings to the tutor in the Prompt Journal.

5. **Socratic Debugging: Object Scope Mutation (15 mins)**
   - *Activity*: Tutor introduces an error where a local variable shadows the global `ship` object inside the move handler.
   - *Challenge*: Student corrects variable scoping.
   - *Socratic Question*: *"Why does modifying position inside the event listener fail to move the ship on the canvas? Which variable is the key listener targeting?"*

6. **Ethics: Design Standardization (15 mins)**
   - *Discussion*: *"Why do standard controls default to WASD and Arrow keys? How do standardization choices affect inclusivity?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 2 Homework", declare an object named `alien` with properties for position `x`/`y`, health, and marching speed.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 2)
- **Exercise 2.1 (Player Object) Solution**:
  ```javascript
  let ship = { x: 220, y: 500, width: 40, height: 40, speed: 5 };
  ```
- **Exercise 2.2 (Move Ship Left) Solution**:
  ```javascript
  function moveLeft() {
    ship.x -= ship.speed;
    ctx.clearRect(0, 0, 480, 600);
    ctx.fillRect(ship.x, ship.y, ship.width, ship.height);
  }
  ```
- **Homework Evaluation**: Ensure the object is syntactically valid with colon key-value mappings.

---

#### Session 3: "The Laser Battery: Arrays of Sprites" (2 hours)

**Learning Objectives:**
- Declare JavaScript arrays and use array methods (`push()`, `pop()`) to store multiple items
- Model dynamic lists representing active lasers fired by the player ship
- Loop through sprite arrays to invoke rendering functions for each item

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Array Queue Exercises (15 mins)**
   - *Activity*: Trace array lengths as items are added and removed sequentially.
   - *Action*: Trace array lengths.
   - *Debrief*: Show how arrays dynamically expand as items are added.

2. **Core Concept Board Lesson: Arrays in Memory (20 mins)**
   - *Topic 1*: Arrays as index-ordered tables.
   - *Topic 2*: Push operations: appending laser objects to the end of lists.
   - *Topic 3*: Loops iterating over arrays elements.

3. **Design Phase: Firing Logic flowcharting (20 mins)**
   - *Activity*: Sketch how a spacebar press adds a laser object to the `lasers` array.
   - *Action*: Draft the event listener trigger conditions.

4. **Build Phase (AI Assisted): Firing Lasers (35 mins)**
   - *Action*: Prompt AI to write the keypress check that creates and pushes laser objects to a list.
   - *Audit*: Audit logic. Explain the loop parameter bounds (`lasers.length`) to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Laser Cannon Stutter (15 mins)**
   - *Activity*: Tutor binds key listeners so lasers only fire when spacebar is repeatedly pressed (key down checks), preventing rapid auto-fire patterns.
   - *Challenge*: Student replaces keyup checks to support firing loops.
   - *Socratic Question*: *"How does browser key repetition delay affect inputs? How do we configure key state maps to capture continuous inputs?"*

6. **Ethics: Resource Caps in Software (15 mins)**
   - *Real-World Case*: Early online games like Diablo II suffered from item duplication exploits where players could create infinite copies of rare items, destroying the in-game economy.
   - *Discussion*: *"If players can fire infinite lasers, they can lag the browser. Why must games enforce limits (cooling intervals) on weapon rates?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 3 Homework", write a loop that updates the `y` coordinate of every laser object inside an array of 3 lasers.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 3)
- **Exercise 3.1 (Lasers Array Declaration) Solution**:
  ```javascript
  let lasers = [];
  ```
- **Exercise 3.2 (Firing Action) Solution**:
  ```javascript
  function fireLaser() {
    let newLaser = { x: ship.x + 18, y: ship.y, width: 4, height: 15, speed: 8 };
    lasers.push(newLaser);
  }
  ```
- **Homework Evaluation**: Student loop must iterate over array parameters length and decrement coordinates: `lasers[i].y -= lasers[i].speed`.

---

#### Session 4: "Laser Motion & Garbage Collection" (2 hours)

**Learning Objectives:**
- Move all laser elements dynamically by updating coordinates inside loop iterations
- Detect off-screen lasers crossing coordinate bounds (e.g. `y < 0`)
- Implement memory cleanups (pruning dead objects using `splice()`) to prevent resource leaks

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Index Splice Analysis (15 mins)**
   - *Activity*: Trace array contents when items are spliced, noting how indices shift back.
   - *Action*: Trace array indices offsets.
   - *Debrief*: Show how splicing shifts following elements backwards in index mapping.

2. **Core Concept Board Lesson: Splicing Iterations & Memory Leaks (20 mins)**
   - *Topic 1*: Cleaning coordinates bounds.
   - *Topic 2*: The index shift trap: splicing elements during a forward loop skips adjacent elements.
   - *Topic 3*: Reverse loop iteration patterns to safely remove items.

3. **Design Phase: Garbage Collection Logic (20 mins)**
   - *Activity*: Blueprint the laser removal rules: *If y < 0, splice it.*
   - *Action*: Write the cleanup loop pseudo-code.

4. **Build Phase (AI Assisted): Cleaning Dead Objects (35 mins)**
   - *Action*: Prompt AI to write a laser updater loop with bounds checking and splice routines.
   - *Audit*: Audit reverse loop indices (`for (let i = lasers.length - 1; i >= 0; i--)`). Explain index shifts to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Splicing Skip Bug (15 mins)**
   - *Activity*: Tutor changes the loop direction to iterate forward. When multiple lasers exit off-screen simultaneously, only every other laser is deleted.
   - *Challenge*: Student changes iteration indexing direction to reverse.
   - *Socratic Question*: *"Why did some dead lasers slip past our garbage collection loop? What happens to the indices of items after splice is called?"*

6. **Ethics: Memory Optimization (15 mins)**
   - *Topic*: Background tasks resource leaks.
   - *Real-World Case*: In 2016, a memory leak in Cloudflare's edge servers ("Cloudbleed") caused private data from one website to leak into another website's responses, affecting millions of users.
   - *Discussion*: *"If backend servers fail to delete dead user socket sessions, what happens to server performance? How does resource cleanup apply to cybersecurity?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 4 Homework", write a reverse-iterating loop that checks an array of objects and deletes items where `status === "dead"`.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 4)
- **Exercise 4.1 (Move & Prune lasers) Solution**:
  ```javascript
  function updateLasers() {
    for (let i = lasers.length - 1; i >= 0; i--) {
      lasers[i].y -= lasers[i].speed;
      if (lasers[i].y < 0) {
        lasers.splice(i, 1);
      }
    }
  }
  ```
- **Homework Evaluation**: Ensure the loop index starts at `length - 1` and decrements to `0` to prevent indexing skips.

---

### Module 2: Swarm Control & Keyboard Matrices (Sessions 5–8)

#### Session 5: "Alien Swarms: Nested Arrays & Movement Deltas" (2 hours)

**Learning Objectives:**
- Store grids of alien elements using multi-dimensional array tables
- Animate alien groups marching horizontally and vertically down the canvas
- Detect when aliens touch grid edges to trigger bounce reactions

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Row/Column Grid Indexing (15 mins)**
   - *Activity*: Locate specific aliens coordinate keys using `[row][col]` index labels.
   - *Action*: Match grid indexes coordinates.
   - *Debrief*: Show how nested lists represent rows and columns in grid systems.

2. **Core Concept Board Lesson: Multi-dimensional Arrays (20 mins)**
   - *Topic 1*: Matrix grids as arrays containing child arrays.
   - *Topic 2*: Marching delta loops and boundary edge triggers.
   - *Topic 3*: Nested loops to access grid elements.

3. **Design Phase: Alien Marching Flow (20 mins)**
   - *Activity*: Sketch the grid path: *Move right, if edge reached, drop y and reverse marching speed.*
   - *Action*: Draft coordinate limits conditionals.

4. **Build Phase (AI Assisted): Coding the Swarm March (35 mins)**
   - *Action*: Prompt AI to generate grid generation and marching functions.
   - *Audit*: Audit loops. Explain nested iteration coordinates to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Edge Stampede (15 mins)**
   - *Activity*: Tutor disables boundary indicators, causing the alien grid to slide completely off the screen.
   - *Challenge*: Student restores the boundary checks.
   - *Socratic Question*: *"Why didn't the aliens drop down and reverse? Which conditional checks failed? Trace the boundary coordinate updates."*

6. **Ethics: Drone Swarm Coordination (15 mins)**
   - *Topic*: Swarm robotics logic.
   - *Discussion*: *"Robotic search swarms share boundary rules. What checks must designers implement to prevent collision catastrophes?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 5 Homework", write a nested JS loop that prints a 3x3 grid of coordinate values `(row, col)` to console logs.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 5)
- **Exercise 5.1 (Grid Initializer) Solution**:
  ```javascript
  let aliens = [];
  for (let r = 0; r < 3; r++) {
    aliens[r] = [];
    for (let c = 0; c < 5; c++) {
      aliens[r][c] = { x: c * 60 + 50, y: r * 50 + 50, alive: true };
    }
  }
  ```
- **Exercise 5.2 (Marching update) Solution**:
  ```javascript
  let direction = 1; // 1 = right, -1 = left
  function moveSwarm() {
    let edgeReached = false;
    for (let r = 0; r < aliens.length; r++) {
      for (let c = 0; c < aliens[r].length; c++) {
        let a = aliens[r][c];
        a.x += 2 * direction;
        if (a.x > 440 || a.x < 10) { edgeReached = true; }
      }
    }
    if (edgeReached) {
      direction *= -1;
      for (let r = 0; r < aliens.length; r++) {
        for (let c = 0; c < aliens[r].length; c++) {
          aliens[r][c].y += 20;
        }
      }
    }
  }
  ```
- **Homework Evaluation**: Nested loops must print 9 distinct pairs of indices from `(0, 0)` to `(2, 2)`.

---

#### Session 6: "Firing Mechanisms & Keyboard Matrices" (2 hours)

**Learning Objectives:**
- Maintain simultaneous input mappings using keyboard matrices
- Solve keypress delays by tracking keys pressed/released states in arrays
- Trigger firing loops that enforce cooling intervals

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Multiple Inputs Mapping (15 mins)**
   - *Activity*: Match keyboard triggers combinations (e.g. ArrowLeft + Space) to output states.
   - *Action*: Map key state combinations.
   - *Debrief*: Show how key listener logs single key repeats, requiring maps to intercept simultaneous hold actions.

2. **Core Concept Board Lesson: Input State Matrices (20 mins)**
   - *Topic 1*: Why single keydown listeners fail under simultaneous inputs (e.g. steering while firing).
   - *Topic 2*: Declaring key state map objects (`keysPressed = {}`).
   - *Topic 3*: Binding listeners to keys pressed (`keydown` ➔ `true`, `keyup` ➔ `false`).

3. **Design Phase: Keyboard Matrix Blueprint (20 mins)**
   - *Activity*: Flowchart how input events toggle key map values.
   - *Action*: Draft variables state charts.

4. **Build Phase (AI Assisted): Coding the Inputs Matrix (35 mins)**
   - *Action*: Prompt AI to build the key state listener matrix (`input.js`).
   - *Audit*: Audit key checks scripts. Explain map state queries to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Firing Spam Lock (15 mins)**
   - *Activity*: Tutor removes keyup handlers, causing the space key to stay stuck in `true` state, spawning infinite lasers.
   - *Challenge*: Student restores keyup mapping hooks.
   - *Socratic Question*: *"Why is the spaceship firing continuously even when you let go of the keyboard? Where does the key state map reset?"*

6. **Ethics: Hardware Manipulation (15 mins)**
   - *Topic*: Input rate limits in security logins.
   - *Real-World Case*: The 2014 iCloud celebrity photo hack exploited Apple's lack of login rate limiting on the "Find My iPhone" API, allowing attackers to brute-force passwords without being locked out.
   - *Discussion*: *"If login endpoints do not enforce input rate thresholds, script bots can spam passcodes. How do event lockouts match cooling loops?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 6 Homework", write a JS object structure and keydown/keyup logic representing keys `"a"`, `"d"`, and `"w"`.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 6)
- **Exercise 6.1 (Key Matrix Setup) Solution**:
  ```javascript
  let keysPressed = {};
  window.addEventListener("keydown", (e) => { keysPressed[e.key] = true; });
  window.addEventListener("keyup", (e) => { keysPressed[e.key] = false; });
  ```
- **Exercise 6.2 (Move & Fire Loop) Solution**:
  ```javascript
  function handleInputs() {
    if (keysPressed["ArrowLeft"]) { ship.x -= ship.speed; }
    if (keysPressed["ArrowRight"]) { ship.x += ship.speed; }
    if (keysPressed[" "]) { fireLaser(); }
  }
  ```
- **Homework Evaluation**: Verify both listeners map inputs to key codes and toggle states.

---

#### Session 7: "Colony Shields: Destructible Grid Matrices" (2 hours)

**Learning Objectives:**
- Build protective shields using multi-dimensional grid lists representing pixel cells
- Detect laser hits on specific grid cells using coordinate index lookups
- Modify shield grid values to represent degradation on hits

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Pixel Grid Destruct (15 mins)**
   - *Activity*: Grid paper calculation: Erase cells that intersect laser paths.
   - *Action*: Compute cells overlap index offsets.
   - *Debrief*: Show how absolute coordinates translate to grid columns.

2. **Core Concept Board Lesson: Shield Block Matrices (20 mins)**
   - *Topic 1*: Representing shields as grid cells (`0 = empty`, `1 = full`).
   - *Topic 2*: Intersect checking using matrix index mapping.

3. **Design Phase: Destructible Grid Logic (20 mins)**
   - *Activity*: Flowchart: Laser intersects shield bounds ➔ find cell index ➔ set cell to `0` ➔ delete laser.
   - *Action*: Write the coordinate mapping formula: `col = Math.floor(laserX / cellWidth)`.

4. **Build Phase (AI Assisted): Styling Shields (35 mins)**
   - *Action*: Prompt AI to generate destructible shield block drawings and collision logic.
   - *Audit*: Audit index math. Explain index conversions to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Invincible Shields (15 mins)**
   - *Activity*: Tutor writes grid check index parameters out-of-bounds, causing lasers to bypass shield collision detection code silently.
   - *Challenge*: Student corrects coordinates to grid index calculations.
   - *Socratic Question*: *"Why do lasers clip through the shield blocks without damaging them? Trace the column calculation values."*

6. **Ethics: Self-Healing Systems (15 mins)**
   - *Topic*: Failure safety shields.
   - *Discussion*: *"How should safety gates behave during network partition states? Fail-open (less secure) or fail-closed (secure but locked)?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 7 Homework", write a JS coordinates lookup equation mapping absolute screen `X = 145` to column index given `cellWidth = 50`.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 7)
- **Exercise 7.1 (Shield Drawing) Solution**:
  ```javascript
  let shield = [1, 1, 1, 1, 1]; // Row of 5 pixel segments
  function drawShield() {
    for (let i = 0; i < shield.length; i++) {
      if (shield[i] === 1) {
        ctx.fillStyle = "green";
        ctx.fillRect(100 + i * 20, 400, 20, 15);
      }
    }
  }
  ```
- **Exercise 7.2 (Erase Shield Segment) Solution**:
  ```javascript
  function checkShieldCollision(laser) {
    if (laser.y >= 400 && laser.y <= 415 && laser.x >= 100 && laser.x <= 200) {
      let col = Math.floor((laser.x - 100) / 20);
      if (shield[col] === 1) {
        shield[col] = 0; // Destroy cell
        return true; // Collision resolved
      }
    }
    return false;
  }
  ```
- **Homework Evaluation**: Formula must subtract offset and divide: `index = Math.floor((145 - offset) / 50)`.

---

#### Session 8: "Advanced Collision Matrix: Lasers vs Alien Swarms" (2 hours)

**Learning Objectives:**
- Implement nested loop collision sweeps (Lasers array elements vs Aliens array elements)
- Trigger death updates to remove elements from both active collections on overlap
- Manage scoring increments and game state updates dynamically

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Nested Array Intersections (15 mins)**
   - *Activity*: Compare coordinates lists to match overlaps between two active arrays.
   - *Action*: Trace array intersection points.
   - *Debrief*: Show how comparisons check every laser coordinates against every alien.

2. **Core Concept Board Lesson: Double Iteration Collision Matrix (20 mins)**
   - *Topic 1*: Sweeping lists of lasers against grids of active aliens.
   - *Topic 2*: Performance overheads ($O(N 	imes M)$ updates complexity).
   - *Topic 3*: Breaking loops early once collision events resolve true.

3. **Design Phase: Matrix Sweep Flowchart (20 mins)**
   - *Activity*: Flowchart: Outer loop lasers ➔ Inner loop aliens ➔ check coordinates overlap ➔ splice both objects.
   - *Action*: Draft nested loop loop bounds specifications.

4. **Build Phase (AI Assisted): Coding the Collision Sweeper (35 mins)**
   - *Action*: Prompt AI to generate the nested collision sweeper function.
   - *Audit*: Audit variables and splice index offsets. Explain nesting checks loops to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Multiple Kill Bug (15 mins)**
   - *Activity*: Tutor forgets to break the inner loop after a laser collision, causing a single laser to destroy multiple aliens in the same frame column.
   - *Challenge*: Student inserts loop break statements.
   - *Socratic Question*: *"Why did one laser clear out three aliens in a row? What parameter should have been updated or exited once a collision occurred?"*

6. **Ethics: System Safety Checks (15 mins)**
   - *Topic*: Resource sweeps in security firewalls.
   - *Discussion*: *"How do firewall rules sweep packets headers? How does matching rules efficiency affect traffic performance?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 8 Homework", write a nested JS loop checking overlaps between an array of 2 lasers and a grid of 4 aliens, logging hit locations.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 8)
- **Exercise 8.1 (Double Loop Collision Check) Solution**:
  ```javascript
  function checkSwarmCollisions() {
    for (let i = lasers.length - 1; i >= 0; i--) {
      let l = lasers[i];
      for (let r = 0; r < aliens.length; r++) {
        for (let c = 0; c < aliens[r].length; c++) {
          let a = aliens[r][c];
          if (a.alive && checkCollision(l, a)) {
            a.alive = false; // Destroy alien
            lasers.splice(i, 1); // Delete laser
            score += 50;
            break; // Exit inner column loop for this laser
          }
        }
      }
    }
  }
  ```
- **Homework Evaluation**: Code must loop through both structures and check bounding parameters.

---

#### Session 9: "Game States: Waves, Scores, and Health Indicators" (2 hours)

**Learning Objectives:**
- Implement game state machines handling wave level increments and health counters
- Spawn faster and denser enemy waves upon clearing grid stages
- Draw graphical health status bars and scoreboard screens

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Stage Multipliers calculation (15 mins)**
   - *Activity*: Calculate speed and scoring outputs using progression formulas.
   - *Action*: Apply coefficients variables.
   - *Debrief*: Show how variables scale speed parameters dynamically.

2. **Core Concept Board Lesson: Progressive Game State Matrices (20 mins)**
   - *Topic 1*: Wave tracking variables and parameters.
   - *Topic 2*: Scale factor parameters (e.g. `speedMultiplier = wave * 0.15`).
   - *Topic 3*: Dynamic drawing of hud gauges.

3. **Design Phase: Game Loop State Machine (20 mins)**
   - *Activity*: Sketch the state progression flow from stage clears to wave updates.
   - *Action*: Draft scale formulas.

4. **Build Phase (AI Assisted): Level Progress System (35 mins)**
   - *Action*: Prompt AI to write functions checking wave clear triggers and updating health displays.
   - *Audit*: Audit code. Explain wave multipliers scripts to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Infinite Spawn Loop (15 mins)**
   - *Activity*: Tutor introduces a wave count loop bug, spawning infinite new waves concurrently when the alien count drops below 1.
   - *Challenge*: Student corrects stage clear checks.
   - *Socratic Question*: *"Why is the game screen showing 100 new wave titles and lagging? Where did the validation guard fail to check current wave initialization state?"*

6. **Ethics: Difficulty Scaling and User Frustration (15 mins)**
   - *Topic*: User engagement.
   - *Discussion*: *"How do games keep players hooked using scaling mechanics? Why must developers test limits to ensure challenges are fair?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 9 Homework", write a JS conditional statement that checks if the active alien list is empty and increments the current wave level, doubling the obstacle speed.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 9)
- **Exercise 9.1 (Health Bar Renderer) Solution**:
  ```javascript
  let health = 100;
  function drawHUD() {
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
    ctx.fillText("Wave: " + wave, 400, 30);
    
    // Draw Health Bar
    ctx.fillStyle = "red";
    ctx.fillRect(10, 45, 100, 10);
    ctx.fillStyle = "green";
    ctx.fillRect(10, 45, health, 10);
  }
  ```
- **Exercise 9.2 (Next Wave Spawn) Solution**:
  ```javascript
  function checkWaveCompletion() {
    let aliveCount = 0;
    for (let r = 0; r < aliens.length; r++) {
      for (let c = 0; c < aliens[r].length; c++) {
        if (aliens[r][c].alive) { aliveCount++; }
      }
    }
    if (aliveCount === 0) {
      wave++;
      spawnSwarm(wave); // Spawn new harder aliens grid
    }
  }
  ```
- **Homework Evaluation**: Code must compare active elements size to `0` and modify speed.

---

#### Session 10: "Asynchronous Telemetry: Interfacing Leaderboard APIs" (2 hours)

**Learning Objectives:**
- Understand client-server request dynamics and the REST API model
- Read and explain asynchronous loops concepts (Async/Await and Promise structures)
- Write asynchronous fetch requests to retrieve live high score records from a telemetry API

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Sync vs Async Timelines (15 mins)**
   - *Activity*: Chronologically trace execution orders in synchronous code vs asynchronous code logs.
   - *Action*: Compare asynchronous callback triggers order.
   - *Debrief*: Show how fetch loops execute in the background without freezing browser UI.

2. **Core Concept Board Lesson: Asynchronous Pipelines & fetch (20 mins)**
   - *Topic 1*: Asynchronous operations. Blocking vs Non-Blocking execution paths.
   - *Topic 2*: Request-Response Model: GET requests fetching remote JSON payloads.
   - *Topic 3*: JS promises and `async`/`await` syntax blocks.

3. **Design Phase: API Telemetry Blueprint (20 mins)**
   - *Activity*: Sketch data pipelines: Request URL ➔ Server response JSON ➔ Parse data array.
   - *Action*: Draft async function signatures.

4. **Build Phase (AI Assisted): Retrieving High Scores (35 mins)**
   - *Action*: Prompt AI to write an async function (`fetchLeaderboard()`) querying the test endpoint.
   - *Audit*: Audit fetch statements. Student explains parsing functions to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Unresolved Promise (15 mins)**
   - *Activity*: Tutor deletes the `await` keyword before the response parse block, causing the code to log `Promise <Pending>` instead of JSON.
   - *Challenge*: Student inserts `await` keyword bindings.
   - *Socratic Question*: *"Why does scoreData show Promise pending? What does the await keyword tell the browser engine to do?"*

6. **Ethics: Server Load Boundaries (15 mins)**
   - *Topic*: API rate limits.
   - *Real-World Case*: In 2023, Twitter (now X) imposed strict API rate limits after bots consumed excessive server resources, temporarily breaking the platform for legitimate users and developers.
   - *Discussion*: *"If we fetch scores inside our game loop 60 times a second, what happens to the server? Why must request intervals be restricted?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 10 Homework", write an async JS function skeleton that fetches data from a mock endpoint and logs the response to the console.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 10)
- **Exercise 10.1 (Async GET Request) Solution**:
  ```javascript
  async function fetchLeaderboard() {
    try {
      let res = await fetch("https://api.marsdefense.dev/scores");
      let data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error("Fetch failed", err);
    }
  }
  ```
- **Homework Evaluation**: Ensure function uses both `async` signature and `await fetch(...)` parameters.

---

#### Session 11: "Submitting High Scores to the Cloud Leaderboard" (2 hours)

**Learning Objectives:**
- Compose HTTP POST requests sending JSON payloads to server endpoints
- Handle network communication exceptions and database errors using try/catch
- Validate submitted payload sizes to prevent database errors

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Payload Structure Map (15 mins)**
   - *Activity*: Structure data parameters into a JSON object literal format.
   - *Action*: Write object schemas strings.
   - *Debrief*: Show how key-value maps encapsulate payloads across routes.

2. **Core Concept Board Lesson: Writing to Servers (20 mins)**
   - *Topic 1*: POST requests: sending request body payloads.
   - *Topic 2*: Try/Catch blocks capturing connection drops.
   - *Topic 3*: Server status checks (e.g. `response.ok` or status codes).

3. **Design Phase: Submission Pipeline Blueprint (20 mins)**
   - *Activity*: Flowchart: Player inputs name ➔ build JSON payload ➔ run POST request ➔ verify response status.
   - *Action*: Draft payload templates.

4. **Build Phase (AI Assisted): Posting Score Records (35 mins)**
   - *Action*: Prompt AI to write a submission handler (`submitScore(name, score)`) connecting to the API.
   - *Audit*: Audit options block (`method: "POST"`, headers). Explain request headers parameters to the tutor in the Prompt Journal.

5. **Socratic Debugging: Silent Network Drops (15 mins)**
   - *Activity*: Tutor blocks the destination URL. The application freezes silently on submit button click because of missing catch blocks.
   - *Challenge*: Student wraps fetch commands inside try/catch blocks.
   - *Socratic Question*: *"Why did the game freeze when the network dropped? How does try/catch protect the interface from breaking?"*

6. **Ethics: Client-Side Integrity and Cheat Prevention (15 mins)**
   - *Topic*: Trusting client data inputs.
   - *Real-World Case*: In 2011, hackers modified client-side price values on the Citibank mobile app to transfer funds at manipulated exchange rates, stealing over $2.7 million before the exploit was patched.
   - *Discussion*: *"If scores are sent from the client, how do we prevent users from modifying request packets to post fake scores?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 11 Homework", write a JS fetch options configuration object specifying a POST method, JSON header content-type, and a body payload containing a test user score.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 11)
- **Exercise 11.1 (Async POST Request) Solution**:
  ```javascript
  async function submitScore(player, val) {
    try {
      let res = await fetch("https://api.marsdefense.dev/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ player: player, score: val })
      });
      if (!res.ok) { throw new Error("Submitting failed: " + res.status); }
      console.log("Score posted successfully");
    } catch (e) {
      console.warn("Telemetry submission offline", e.message);
    }
  }
  ```
- **Homework Evaluation**: Check option keys: method must be `"POST"`, headers must declare content-type JSON, and body must stringify data.

---

#### Session 12: "Performance Optimization & Memory Audit" (2 hours)

**Learning Objectives:**
- Identify and resolve memory leaks caused by unbounded growth of inactive array elements
- Profile frame drops and optimize loop sweeps
- Apply diagnostic tests to catch logic edge cases

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Memory Footprint Trace (15 mins)**
   - *Activity*: Trace length counters of array variables inside a simulator running over 100 frames.
   - *Action*: Compare active arrays counts.
   - *Debrief*: Show how arrays size increases CPU processing loads, causing graphics frame drops.

2. **Core Concept Board Lesson: Garbage Collection & Profiling (20 mins)**
   - *Topic 1*: CPU performance limits. How garbage collection pauses code if arrays grow too large.
   - *Topic 2*: Loop optimization: caching array length variables, minimizing allocations.

3. **Design Phase: Optimization Checklist (20 mins)**
   - *Activity*: Identify candidates for optimization (e.g. laser list splicing checks, collision checks).
   - *Action*: Draft safety constraints.

4. **Build Phase (AI Assisted): Code Optimizations (35 mins)**
   - *Action*: Prompt AI to refactor rendering loops and optimize array sweeps.
   - *Audit*: Audit variables footprint. Explain memory performance sweeps to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Out-of-Memory Crash (15 mins)**
   - *Activity*: Tutor disables the laser boundary removal checks. After shooting 500 lasers, the frame rate degrades to a crawl.
   - *Challenge*: Student restores the boundary checks.
   - *Socratic Question*: *"Why is the game getting slower? Look at the lasers array length log. What happens to browser memory when dead sprites are never pruned?"*

6. **Ethics: Performance on Older Hardware (15 mins)**
   - *Topic*: Performance on older hardware.
   - *Discussion*: *"If developers only optimize code for high-end test laptops, how does that affect users in lower-income areas? Why is performance equity an ethical concern?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 12 Homework", list 3 performance diagnostic checkpoints you would monitor to ensure a canvas web game runs smoothly.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 12)
- **Exercise 12.1 (Cache length parameters) Solution**:
  ```javascript
  // Optimized alien sweep
  let rowLength = aliens.length;
  for (let r = 0; r < rowLength; r++) {
    let colLength = aliens[r].length;
    for (let c = 0; c < colLength; c++) {
      if (aliens[r][c].alive) { drawAlien(aliens[r][c]); }
    }
  }
  ```
- **Homework Evaluation**: Answers must list monitoring indicators: active array sizes limits, rendering frame rates (FPS), CPU memory profiles.

---

#### Session 13: "Graduation Sprint & Level 2 Defense" (2 hours)

**Learning Objectives:**
- Deploy a functional Canvas web game to local development servers
- Diagnose and patch syntax or logic glitches in a project workspace
- Defend game loops math and asynchronous API integrations in a code review walkthrough

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Final QA Sweeps (15 mins)**
   - *Activity*: Run final gameplay runs. Document any bugs.
2. **Assessment Part A: The Mars Defense Assembler (45 mins)**
   - Build/verify the fully compiled code stack: Canvas initialization, sprite collections loops, input state matrices, nested loops collision matrices, and async leaderboard fetch systems.
3. **Assessment Part B: The Canvas Autopilot Walkthrough (45 mins)**
   - Walk through the game codebase with the tutor. Explain coordinate calculations, memory cleanup loops, and API fetch options line-by-line.
4. **Assessment Part C: Diagnostic Challenges (15 mins)**
   - Locate and patch a seeded bug in an asynchronous request handler or array splice statement.

**Level 2 Assessment Rubric**

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Logical Logic** | All sprite movements, marching logic, nested matrix collisions, and cleanups are correct. | Minor boundary exceptions, but game runs clean. | Splice bugs or coordinate anomalies exist. | Scrambled logic, infinite loops, browser freezes. |
| **Asynchronous Logic** | Successfully fetches and posts data using async/await; try/catch guards are robust. | Queries API successfully, but handles error exceptions poorly. | Struggling with fetch options, unresolved promises. | Blocked synchronous requests, syntax errors. |
| **Memory Optimization** | Zero memory leaks; arrays are pruned cleanly; loop efficiency is high. | Sprites pruned, but loop performance dips under load. | Inconsistent pruning, dead lasers leak memory. | No garbage collection, array sizes grow indefinitely. |
| **System Flow** | Strong modular decomposition; clear encapsulation of Canvas, inputs, and APIs. | Modules separated but share too many global scope dependencies. | Poor decoupling, monolithic rendering. | Spaghetti code, no modular functions. |

---

## 7. Level 3: Advanced — "Cyberpunk Hacker Arena"

**Goal:** Master client-server communication, database schemas, environment security, and authorization rules by building a persistent hacking console and deck battler that interfaces securely with a cloud database.

**Prerequisites:** Level 2 completion.

### Module 1: Relational Databases & Hacking Sign-Ups (Sessions 1–4)

#### Session 1: "Where Does Data Live? Relational Database Schemas" (2 hours)

**Learning Objectives:**
- Explain client-server architecture dynamics and how data is separated from application code
- Define relational SQL database terms: Tables, Fields, Primary Keys, and Foreign Keys
- Model database schemas representing player decks, unlockable hacking tools, and transaction logs

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Relational Schema Match (15 mins)**
   - *Activity*: In-app diagramming tool. Connect tools to cards using primary and foreign key nodes.
2. **Core Concept Board Lesson: Relational Data Modeling (20 mins)**
   - *Topic 1*: Why local variables reset on page reload, necessitating a backend database.
   - *Topic 2*: Relational tables structures. One-to-Many and Many-to-Many relationships.
   - *Topic 3*: SQL field constraints (Unique, Not Null, Default).
3. **Design Phase: Arena DB Schema Blueprint (20 mins)**
   - *Activity*: Design tables for `players`, `hacking_tools` (id, name, speed_rating, cost), and `inventories` (player_id, tool_id).
   - *Action*: Draft schema tables on paper.
4. **Build Phase (AI Assisted): Generating DB Schemas (35 mins)**
   - *Action*: Prompt AI to generate SQL schemas tables for the project.
   - *Audit*: Audit schema keys. Explain table relationships in the Prompt Journal.
5. **Socratic Debugging: The Floating Record (15 mins)**
   - *Activity*: Tutor removes foreign key constraint rules on the `inventories` table. A player is deleted, but their inventory items remain stranded in the database.
   - *Socratic Question*: *"Why does the database still list tools for a player who no longer exists? What is the role of Foreign Key constraints and Cascade Deletes?"*
6. **Ethics: Data Privacy & Sensitivity Classification (15 mins)**
   - *Topic*: Sensitive information audit.
   - *Real-World Case*: The Equifax data breach (2017) exposed personal data of 147 million people because sensitive fields (Social Security numbers) were stored without adequate access controls or encryption.
   - *Discussion*: *"In our database, what fields are public (high scores) vs private (email, transaction logs)? How do we classify data before coding schemas?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 1 Homework", sketch a 3-table relational schema for a virtual card marketplace, indicating primary and foreign key references.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 1)
- **Exercise 1.1 (SQL Schema table) Solution**:
  ```sql
  CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  
  CREATE TABLE hacking_tools (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cost INT CHECK (cost >= 0)
  );
  ```
- **Homework Evaluation**: Ensure student connects child tables via foreign keys (e.g. `player_id INT REFERENCES players(id) ON DELETE CASCADE`).

---

#### Session 2: "User Authentication & Hacking Sign-Ups" (2 hours)

**Learning Objectives:**
- Understand authentication workflows, encryption, and password hashing concepts
- Build signup/login forms collecting username and password credentials
- Link forms to backend routers validating and storing credentials securely

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Password Hashing Trace (15 mins)**
   - *Activity*: Compare raw strings passwords with their hashed crypt equivalents.
2. **Core Concept Board Lesson: The Authentication Chain (20 mins)**
   - *Topic 1*: Why we never store passwords in plaintext (security liability).
   - *Topic 2*: Hashing algorithms (bcrypt, argon2) and salt parameters.
   - *Topic 3*: The login flow: comparing input hashes vs database records.
3. **Design Phase: Auth Routing Flow (20 mins)**
   - *Activity*: Draw a sequence flow representing signups requests: Form ➔ POST ➔ Hash ➔ Insert ➔ DB.
   - *Action*: Draft request payload requirements.
4. **Build Phase (AI Assisted): Coding Auth (35 mins)**
   - *Action*: Prompt AI to generate authentication routes and signup controller files.
   - *Audit*: Audit variables handling and encryption methods in the Prompt Journal.
5. **Socratic Debugging: The Plaintext Leak (15 mins)**
   - *Activity*: Tutor replaces the hash generation code with direct string insertion, writing plain passwords to database logs.
   - *Socratic Question*: *"Why is storing raw passwords a security risk? If hackers bypass server code and access tables directly, what happens?"*
6. **Ethics: User Credentials Exposure (15 mins)**
   - *Real-World Case*: In 2012, LinkedIn suffered a breach exposing 6.5 million password hashes — but because they used unsalted SHA-1 instead of bcrypt, most passwords were cracked within hours.
   - *Discussion*: *"If our company database is breached and plain passwords leak, how does it affect users who reuse passwords elsewhere?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 2 Homework", write a JS code snippet checking if a password string meets length bounds (min 8 characters) and hashing it.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 2)
- **Exercise 2.1 (Backend signup route) Solution**:
  ```javascript
  app.post("/signup", async (req, res) => {
    let { username, password } = req.body;
    if (password.length < 8) { return res.status(400).send("Too short"); }
    let hashedPassword = await bcrypt.hash(password, 10);
    await db.query("INSERT INTO players (username, password) VALUES ($1, $2)", [username, hashedPassword]);
    res.status(201).send("Registered");
  });
  ```
- **Homework Evaluation**: Ensure the code validates string inputs length and routes queries securely.

---

#### Session 3: "Access Security & Environment Variables" (2 hours)

**Learning Objectives:**
- Explain the security hazards of hardcoding API keys and database credentials in client code
- Use environment configuration files (`.env`) to isolate sensitive credentials
- Access environment parameters in backend code using configuration wrappers

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: API Keys Leak Audit (15 mins)**
   - *Activity*: Inspect a mock public GitHub repo to locate hidden API keys and database links.
2. **Core Concept Board Lesson: Credentials Containment (20 mins)**
   - *Topic 1*: Why client-side code is public: how devtools reveal keys.
   - *Topic 2*: Environment configuration files (`.env`) and `.gitignore` safety rules.
   - *Topic 3*: Accessing system environment variables (`process.env.DB_PASSWORD`).
3. **Design Phase: Credentials Shielding Blueprint (20 mins)**
   - *Activity*: Plan which keys (database URL, JWT secrets) must be moved off-code.
   - *Action*: Draft environment variable keys templates.
4. **Build Phase (AI Assisted): Environment Setup (35 mins)**
   - *Action*: Prompt AI to extract hardcoded credentials into a `.env` file and integrate configuration wrappers.
   - *Audit*: Audit gitignore setup to verify `.env` is blocked from tracking in the Prompt Journal.
5. **Socratic Debugging: The Exposed Config Bug (15 mins)**
   - *Activity*: Tutor copies database connection keys into a front-end script, making them visible in browser network logs.
   - *Socratic Question*: *"Why is exposing credentials on the frontend a threat? How can malicious users exploit these keys?"*
6. **Ethics: Responsible Disclosures (15 mins)**
   - *Topic*: Code leakages.
   - *Real-World Case*: In 2022, a Samsung engineer accidentally uploaded proprietary source code to ChatGPT, exposing trade secrets — demonstrating why API keys and code must never enter external AI tools without review.
   - *Discussion*: *"If you discover a company left their credentials publicly exposed on a repo, what should you do? What is responsible disclosure?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 3 Homework", write a mock `.env` configuration file declaring 3 secrets and show the code loading them.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 3)
- **Exercise 3.1 (.env file creation) Solution**:
  ```env
  DB_HOST=localhost
  DB_USER=hacker_admin
  DB_PASS=super_secure_password_123
  JWT_SECRET=node_encryption_token_abc
  ```
- **Exercise 3.2 (Load Env Variables) Solution**:
  ```javascript
  require("dotenv").config();
  const dbPassword = process.env.DB_PASS;
  ```
- **Homework Evaluation**: Verify the `.env` has no spaces around `=` signs and code maps variables using `process.env`.

---

#### Session 4: "Relational Queries: Retrieving Player Inventories" (2 hours)

**Learning Objectives:**
- Write database queries fetching user data from multiple tables (relational JOIN queries)
- Parse tabular query rows into structured JSON array payloads
- Wire the frontend dashboard to fetch and render player inventories

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: JOIN Table Matches (15 mins)**
   - *Activity*: Given a relational table grid, match keys to assemble inventory lists.
2. **Core Concept Board Lesson: SQL JOIN Queries (20 mins)**
   - *Topic 1*: Retrieving data across tables: `INNER JOIN` operations.
   - *Topic 2*: Linking records using foreign keys (`inventories.player_id = players.id`).
   - *Topic 3*: Converting flat SQL rows into nested JSON arrays.
3. **Design Phase: Inventory Fetch Flowchart (20 mins)**
   - *Activity*: Sketch query pipeline: GET `/inventory` ➔ run SQL join query ➔ send JSON array response.
   - *Action*: Draft the SQL join query template.
4. **Build Phase (AI Assisted): Coding the JOIN Query (35 mins)**
   - *Action*: Prompt AI to write backend route executing the join and formatting data response.
   - *Audit*: Audit variables assignments. Student explains database query syntax in the Prompt Journal.
5. **Socratic Debugging: The Empty Join Leak (15 mins)**
   - *Activity*: Tutor replaces `INNER JOIN` with an incorrect `LEFT JOIN` query mapping, returning tools records for non-existent player IDs.
   - *Socratic Question*: *"Why is the terminal showing items that don't belong to any active player? What does inner vs left join dictate?"*
6. **Ethics: Data Isolation (15 mins)**
   - *Discussion*: *"If inventory lookup requests don't check player constraints parameters, can hackers fetch other decks? Why is isolation critical?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 4 Homework", write a SQL query joining `players` and `inventories` tables, filtering by player username `"HackerZero"`.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 4)
- **Exercise 4.1 (SQL JOIN Query) Solution**:
  ```sql
  SELECT players.username, hacking_tools.name, hacking_tools.cost 
  FROM inventories
  JOIN players ON inventories.player_id = players.id
  JOIN hacking_tools ON inventories.tool_id = hacking_tools.id
  WHERE players.id = $1;
  ```
- **Homework Evaluation**: Ensure the JOIN joins `players`, `inventories`, and `hacking_tools` tables, matching key identifiers.

---

### Module 2: REST APIs & Server-Side Security (Sessions 5–8)

#### Session 5: "Server Routing & REST API Endpoints" (2 hours)

**Learning Objectives:**
- Explain REST API methods (GET, POST, PUT, DELETE) and routing architectures
- Write backend route handlers mapping endpoints to database transactions
- Intercept client requests parameters to execute matching logic routes

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Reverse Engineering — Intercepting API Traffic (15 mins)**
   - *Activity*: The tutor opens a public web application (e.g., a weather app). The student opens browser DevTools Network tab and filters by XHR/Fetch requests.
   - *Action*: The student clicks through the app while monitoring network traffic. They must identify: (1) What API endpoints are being called? (2) What HTTP methods are used? (3) What does the JSON response payload contain?
   - *Debrief*: Show how professional security auditors and API designers reverse-engineer live traffic to understand system architectures.
2. **Core Concept Board Lesson: REST Route Architectures (20 mins)**
   - *Topic 1*: HTTP Verb semantics (GET reads, POST writes, PUT updates, DELETE removes).
   - *Topic 2*: URL path parameters (`/tools/:id`) vs query parameters.
3. **Design Phase: Deck Management API Blueprint (20 mins)**
   - *Activity*: Outline REST routes: GET `/tools`, POST `/deck/add`, DELETE `/deck/remove`.
   - *Action*: Write API endpoints specs sheets.
4. **Build Phase (AI Assisted): Coding the Router (35 mins)**
   - *Action*: Prompt AI to generate REST routing files (`api.js`) for the project.
   - *Audit*: Audit route checks. Explain endpoints parameters parsing to the tutor in the Prompt Journal.
5. **Socratic Debugging: The POST Read Trap (15 mins)**
   - *Activity*: Tutor maps data reads requests to POST endpoints, causing browsers to refuse resource caching.
   - *Socratic Question*: *"Why did the browser throw headers alerts on page reload? Why do GET endpoints use GET instead of POST?"*
6. **Ethics: Standard API Design (15 mins)**
   - *Discussion*: *"Why is standardizing endpoints crucial for open systems? How does clear API documentation help developers cooperate?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 5 Homework", write Express routing headers declarations for GET, POST, and DELETE endpoints matching deck cards.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 5)
- **Exercise 5.1 (Express API Routes Setup) Solution**:
  ```javascript
  const express = require("express");
  const router = express.Router();
  
  router.get("/tools", async (req, res) => {
    let result = await db.query("SELECT * FROM hacking_tools");
    res.json(result.rows);
  });
  
  router.post("/deck/add", async (req, res) => {
    let { player_id, tool_id } = req.body;
    await db.query("INSERT INTO inventories (player_id, tool_id) VALUES ($1, $2)", [player_id, tool_id]);
    res.status(201).send("Added to deck");
  });
  ```
- **Homework Evaluation**: Ensure Express syntax maps correct HTTP verb functions and parses request properties correctly.

---

#### Session 6: "Defensive Coding: Server-Side Parameter Verification" (2 hours)

**Learning Objectives:**
- Apply defensive programming to validate parameters on the server side
- Enforce bounds validation (checks range, types, existence) to reject invalid requests
- Return correct HTTP status codes matching request outcomes (400, 403, 404, 500)

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Parameter Sanity checks (15 mins)**
   - *Activity*: Audit a mock request payload to find variables parameters that could crash server DBs (e.g. string cost, negative values).
2. **Core Concept Board Lesson: The Zero-Trust Backend (20 mins)**
   - *Topic 1*: Why front-end validation is easily bypassed (developer tool console updates).
   - *Topic 2*: Validating types, value ranges, and fields on the server.
   - *Topic 3*: REST status codes classification.
3. **Design Phase: Validation Rules Matrix (20 mins)**
   - *Activity*: Plan validation thresholds (e.g. quantity must be positive and integer).
   - *Action*: Draft validation checks pseudo-code.
4. **Build Phase (AI Assisted): Coding the Guards (35 mins)**
   - *Action*: Prompt AI to write server-side validation guards inside request handlers.
   - *Audit*: Audit boundary checks. Explain validation conditions to the tutor in the Prompt Journal.
5. **Socratic Debugging: The Free Credits Hack (15 mins)**
   - *Activity*: Tutor removes server-side price validation, allowing a client request payload cost value of `-100` to increase player credit balances on transaction.
   - *Challenge*: Student inserts server-side value validation checks.
   - *Socratic Question*: *"Why was the player able to get free credits? What is the hazard of trusting client-provided price values?"*
6. **Ethics: Edge Valuations validation (15 mins)**
   - *Discussion*: *"If backend validation has logic holes, players can exploit them to steal digital assets. Is exploit abuse the player's fault or the coder's fault?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 6 Homework", write a server-side parameter check script validation that throws 400 Bad Request error if a cost parameter is not a positive number.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 6)
- **Exercise 6.1 (Express Server Validation Guard) Solution**:
  ```javascript
  router.post("/buy-tool", async (req, res) => {
    let { player_id, tool_id, quantity } = req.body;
    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).send("Invalid quantity: Must be positive integer");
    }
    // Perform database operations...
  });
  ```
- **Homework Evaluation**: Verify check maps inputs type correctly and rejects negative or zero quantities.

---

#### Session 7: "Row-Level Security: Shielding Player Profiles" (2 hours)

**Learning Objectives:**
- Understand Row-Level Security (RLS) database policies
- Design RLS rules checking auth status to isolate database records
- Audit database access logs to ensure records are protected

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: database leak check (15 mins)**
   - *Activity*: Trace query records when querying without auth logs. Notice how all users records display.
2. **Core Concept Board Lesson: Row-Level Security Rules (20 mins)**
   - *Topic 1*: RLS as a database engine guard enforcing isolation at the query level.
   - *Topic 2*: Relational matching rules comparing query token user ID with record user ID.
   - *Topic 3*: Select, Insert, Update, and Delete security policies.
3. **Design Phase: DB Security Policy Diagram (20 mins)**
   - *Activity*: Map database permissions: *Players can read all tool templates, but can only read/write their own inventories.*
   - *Action*: Draft SQL policies definitions.
4. **Build Phase (AI Assisted): Coding RLS Policies (35 mins)**
   - *Action*: Prompt AI to write PostgreSQL RLS policy statements for the tables.
   - *Audit*: Audit policy execution. Explain RLS conditional rules to the tutor in the Prompt Journal.
5. **Socratic Debugging: The Global Read Leak (15 mins)**
   - *Activity*: Tutor disables the RLS check flag on the `players` table, allowing players query calls to return usernames and encrypted passwords of everyone.
   - *Challenge*: Student enables RLS and configures user checking policy.
   - *Socratic Question*: *"Why is user A able to download user B's profile cards records? What security policy rule did we forget to apply on the DB engine?"*
6. **Ethics: Mass Data Leaks (15 mins)**
   - *Real-World Case*: The 2019 Capital One breach exposed 106 million customer records because a misconfigured firewall rule bypassed Row-Level Security, allowing a single query to dump the entire database.
   - *Discussion*: *"If security rules are forgotten, mass data breaches occur. How does RLS act as a defensive barrier?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 7 Homework", write a SQL RLS policy statement that limits updates on an `inventories` table to the authenticated user matching `auth.uid()`.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 7)
- **Exercise 7.1 (Supabase/PostgreSQL RLS setup) Solution**:
  ```sql
  ALTER TABLE inventories ENABLE ROW LEVEL SECURITY;
  
  CREATE POLICY "Allow players read their own inventory" 
  ON inventories FOR SELECT 
  USING (player_id = auth.uid());
  
  CREATE POLICY "Allow players update their own inventory" 
  ON inventories FOR UPDATE 
  USING (player_id = auth.uid());
  ```
- **Homework Evaluation**: RLS policy must enable RLS on table and limit operations comparing record identifier keys to active session user context parameters.

---

#### Session 8: "Database Transaction Guards: Safe Inventory Exchange" (2 hours)

**Learning Objectives:**
- Understand ACID database transaction concepts (Atomicity, Consistency, Isolation, Durability)
- Implement database transactions (BEGIN, COMMIT, ROLLBACK) to group queries
- Prevent partial data writes bugs during credit-to-item exchanges

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Partial Write Simulation (15 mins)**
   - *Activity*: Walk through a card trade transaction: *Server takes player credits, server fails before giving the card.* Determine what happens to credits.
2. **Core Concept Board Lesson: ACID Transactions (20 mins)**
   - *Topic 1*: Atomicity: All queries succeed or all are rolled back.
   - *Topic 2*: Syntax transactions: BEGIN, COMMIT, and ROLLBACK operations.
   - *Topic 3*: Lock conditions: preventing double-spending during concurrent runs.
3. **Design Phase: Transaction flowcharting (20 mins)**
   - *Activity*: Draw a transactional exchange flow showing rollback triggers if balance is insufficient.
   - *Action*: Draft transactional SQL queries blocks.
4. **Build Phase (AI Assisted): Coding the Transaction (35 mins)**
   - *Action*: Prompt AI to generate a database transaction wrapping credit charge and inventory insert operations.
   - *Audit*: Audit catch blocks. Explain transaction rollbacks to the tutor in the Prompt Journal.
5. **Socratic Debugging: The Credit Theft Glitch (15 mins)**
   - *Activity*: Tutor simulates a database crash in the middle of a purchase query. Credits are deducted from the player's account, but no card is added to their deck, and no rollback occurs.
   - *Challenge*: Student wraps queries inside `BEGIN` / `COMMIT` blocks and implements rollbacks on catch.
   - *Socratic Question*: *"Why did the player lose their credits without getting the card? How does wrapping queries in BEGIN/COMMIT prevent partial states?"*
6. **Ethics: Transaction Integrity (15 mins)**
   - *Topic*: Banking database transactions.
   - *Real-World Case*: In 2012, a Knight Capital Group software deployment executed 4 million unintended stock trades in 45 minutes due to a partial database transaction rollback failure, losing $440 million.
   - *Discussion*: *"If bank transfers fail mid-route, why is an atomic rollback mandatory? How does this establish trust in systems?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 8 Homework", write a JS database transaction script executing BEGIN, checking player credits, deducting credits, inserting item, and running COMMIT or ROLLBACK on error.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 8)
- **Exercise 8.1 (Deduction & Insert Transaction) Solution**:
  ```javascript
  router.post("/purchase-item", async (req, res) => {
    let { player_id, tool_id, cost } = req.body;
    let client = await db.pool.connect();
    try {
      await client.query("BEGIN");
      let balanceRes = await client.query("SELECT credits FROM players WHERE id = $1", [player_id]);
      if (balanceRes.rows[0].credits < cost) { throw new Error("Insufficient credits"); }
      
      await client.query("UPDATE players SET credits = credits - $1 WHERE id = $2", [cost, player_id]);
      await client.query("INSERT INTO inventories (player_id, tool_id) VALUES ($1, $2)", [player_id, tool_id]);
      await client.query("COMMIT");
      res.status(200).send("Purchase success");
    } catch (e) {
      await client.query("ROLLBACK");
      res.status(400).send("Transaction rolled back: " + e.message);
    } finally {
      client.release();
    }
  });
  ```
- **Homework Evaluation**: Ensure the script rollback function runs on exception catches, and releases database client connections cleanly.

---

### Module 3: Cloud Deployment & Capstone Defense (Sessions 9–14)

#### Session 9: "Continuous Git Tracking & Code Reviews" (2 hours)

**Learning Objectives:**
- Manage multi-developer codebase commits using feature branches and merges
- Resolve code merging conflicts manually in coordinate files
- Perform code review checklists, verifying logic rules and safety boundaries

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Merge Conflict Match (15 mins)**
   - *Activity*: Identify Git conflicts markers (`<<<<<<< HEAD` vs `>>>>>>> branch`) and choose correct lines options.
2. **Core Concept Board Lesson: Code Auditing and Pull Requests (20 mins)**
   - *Topic 1*: Feature branch development patterns (`git checkout -b`).
   - *Topic 2*: Reading Pull Request diffs.
   - *Topic 3*: Peer code reviews checklist guidelines.
3. **Design Phase: Feature Deployment Blueprint (20 mins)**
   - *Activity*: Plan a branch lifecycle: checkout feature ➔ make changes ➔ push ➔ code review ➔ merge.
   - *Action*: Draft PR review templates.
4. **Build Phase (AI Assisted): Code Merge (35 mins)**
   - *Action*: Prompt AI to explain merge conflicts resolutions and verify code structure files.
   - *Audit*: Audit commit histories. Explain merge changes to the tutor in the Prompt Journal.
5. **Socratic Debugging: The Scrambled Merge Crash (15 mins)**
   - *Activity*: Tutor creates a git merge conflict where both main and branch edit the same backend route parameters, leaving conflict markers in code files.
   - *Challenge*: Student locates markers, reviews lines options, chooses correct code, and commits resolution.
   - *Socratic Question*: *"Why does the server crash on startup? What are these <<<<<<< indicators in our code?"*
6. **Ethics: Code Review Accountability (15 mins)**
   - *Topic*: Group engineering responsibilities.
   - *Discussion*: *"If you approve a classmate's code PR without reviewing it, and it contains a security leak, who is responsible? Why are code reviews important?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 9 Homework", list 3 git commands you would run to pull the latest changes, resolve conflicts, and merge a feature branch back to main.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 9)
- **Exercise 9.1 (Git Conflict Resolution) Solution**: Open conflict file, delete `<<<<<<< HEAD`, `=======`, and `>>>>>>> branch-name`, keep the correct variables lines, save file and run `git add` and `git commit`.
- **Homework Evaluation**: Ensure student outlines commit resolution sequence steps: `git checkout main`, `git merge feature-branch`, resolve files, `git add .`, `git commit`.

---

#### Session 10: "Deploying the Hacking Console to the Cloud" (2 hours)

**Learning Objectives:**
- Understand continuous deployment (CD) pipelines and web hosting architectures
- Deploy Express APIs and PostgreSQL databases to cloud hosting platforms
- Configure live cloud environment keys ensuring database parameters map securely

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Hosting Options Map (15 mins)**
   - *Activity*: Match different application elements (client code, server backend, database) to cloud providers types.
2. **Core Concept Board Lesson: Cloud Infrastructure Models (20 mins)**
   - *Topic 1*: Client hosting (CDN) vs server hosting (containers/dynos) vs cloud databases (managed instances).
   - *Topic 2*: Continuous deployment pipelines triggering builds on git push events.
   - *Topic 3*: Binding live environment variables on cloud dashboard panels.
3. **Design Phase: Deployment Infrastructure Blueprint (20 mins)**
   - *Activity*: Map data connections: *Front-end client fetches live server URL, server reads cloud database credentials.*
   - *Action*: Draft environment variable keys lists for production servers.
4. **Build Phase (AI Assisted): Cloud Deployment (35 mins)**
   - *Action*: Prompt AI to generate deployment config files (e.g. dockerfiles, render blueprints).
   - *Audit*: Audit live DB links. Explain credentials shielding on cloud dashboards in the Prompt Journal.
5. **Socratic Debugging: The Broken Cloud Connection (15 mins)**
   - *Activity*: Tutor deletes the server's cloud DB host variable, causing the deployed live website to throw connection timeouts.
   - *Challenge*: Student debugs environment configurations and restores variables links.
   - *Socratic Question*: *"Why is the live frontend showing blank profiles? How does the server connect to the database in production?"*
6. **Ethics: Deployed Data Sovereignty (15 mins)**
   - *Topic*: Cloud data physical hosting.
   - *Discussion*: *"Where is your database physically stored? Why does country location matter for privacy laws (e.g. GDPR)?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 10 Homework", write a deployment checklist detailing variables configurations and server paths needed to launch a database API.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 10)
- **Exercise 10.1 (Deploy Config Blueprints) Solution**: Create Render blueprint file `render.yaml` declaring database resource and server service with environment bindings maps.
- **Homework Evaluation**: Check checklist includes: git repository links, production env vars configuration, database schema seeding commands.

---

#### Session 11: "Load Testing & Error Diagnostics" (2 hours)

**Learning Objectives:**
- Identify performance bottlenecks under concurrent request loads
- Read and troubleshoot server stack traces and production exception logs
- Write automated checks guarding against database timeouts

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Log Analysis Sweeps (15 mins)**
   - *Activity*: Trace server logs to find lines numbers and variables causing stack trace exceptions.
2. **Core Concept Board Lesson: Diagnostics & Concurrency limits (20 mins)**
   - *Topic 1*: Server request queues and thread counts variables.
   - *Topic 2*: Error code ranges (500 Internal Error vs 503 Service Unavailable).
   - *Topic 3*: Database pool size parameters.
3. **Design Phase: Diagnostic Test Scenarios (20 mins)**
   - *Activity*: Plan load threshold tests: *Simulate 100 concurrent requests, monitor response times.*
   - *Action*: Draft log inspection templates.
4. **Build Phase (AI Assisted): Server Optimization (35 mins)**
   - *Action*: Prompt AI to write db connection pooling logic and logs formatting scripts.
   - *Audit*: Audit db client release loops. Student explains pool configurations in the Prompt Journal.
5. **Socratic Debugging: The Exhausted Connection Pool (15 mins)**
   - *Activity*: Tutor removes client release calls from Express routes. After 10 page reloads, the server hangs indefinitely and timeouts.
   - *Challenge*: Student inserts `finally { client.release(); }` wrappers to return database resources.
   - *Socratic Question*: *"Why is the server refusing to answer after a few clicks? How many open database connections are active? Where do they get closed?"*
6. **Ethics: Denial of Service Vulnerabilities (15 mins)**
   - *Topic*: Unpatched memory leaks.
   - *Discussion*: *"If we can crash a server by leaving connections open, how can bad actors exploit this? Why is closing database clients a security requirement?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 11 Homework", write a JS code wrapper implementing try/catch/finally to execute a query and release the database client.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 11)
- **Exercise 11.1 (Release Pool Client) Solution**:
  ```javascript
  app.get("/stats", async (req, res) => {
    let client = await pool.connect();
    try {
      let data = await client.query("SELECT COUNT(*) FROM players");
      res.json(data.rows[0]);
    } catch (e) {
      res.status(500).send("Database error");
    } finally {
      client.release(); // Return client to pool
    }
  });
  ```
- **Homework Evaluation**: Code must release client connection inside a `finally` block to ensure release even on catch error states.

---

#### Session 12: "The Hacker Arena Integration Sprint" (2 hours)

**Learning Objectives:**
- Coordinate data flows across frontend interfaces, Express servers, and SQL databases
- Resolve integration bugs across the client-server boundary
- Profile live database queries execution times

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Integration Checkpoints Map (15 mins)**
   - *Activity*: Outline the data flow checklist: *Frontend Form ➔ Express Route ➔ Validation ➔ Transaction ➔ DB Write ➔ Response JSON ➔ UI Redraw.*
2. **Core Activity: The Integration Sprint (80 mins)**
   - *Action*: Group assets and resolve data gaps. Verify database tables are initialized, environment keys loaded, and RLS rules active.
3. **Audit: Code Review Sweep (25 mins)**
   - *Activity*: Walk through database policies and Express routes. Check variable types and coordinate scopes.

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 12 Homework", write a QA integration log summarizing test outputs for your account registration and tool purchase runs.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 12)
- **Exercise 12.1 (Integration Diagnostics) Solution**: Run automated check scripts verifying database response codes and parsing returned profiles records.
- **Homework Evaluation**: Ensure student reports successful registration (201 Created) and tool purchase (200 OK) test runs.

---

#### Session 13: "The Capstone Defense" (2 hours)

**Learning Objectives:**
- Present relational database schemas and SQL constraint policies
- Demonstrate client-server transaction flows and validation guards
- Defend security policies and environment containment setups in a code review walkthrough

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Review Presentation Checklist (15 mins)**
   - *Activity*: Run final verification checks on live deployed console.
2. **Assessment Part A: The Hacking Console Presentation (45 mins)**
   - Present the capstone project. Demonstrate login flows, SQL schema joints, transaction rollbacks, and environment variables encapsulation.
3. **Assessment Part B: The Code Audit Defense (45 mins)**
   - Walk through the codebase with the tutor. Defend security choices, RLS rule statements, Express routers logic, and parameters validation blocks.
4. **Assessment Part C: Live Diagnostics Challenge (15 mins)**
   - Locate and patch a runtime exception or policy leakage introduced by the tutor in the project database.

---

#### Session 14: "Reflection & What's Next" (2 hours)

**Learning Objectives:**
- Analyze lessons learned across Level 1, 2, and 3 tracks
- Identify roles in software engineering: Frontend, Backend, DBA, and Security Engineers
- Formulate a learning path for professional capstone deployments

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Portfolio Audit (15 mins)**
   - *Activity*: Review all Prompt Journals versions logs created across levels.
2. **Core Lesson: Software Engineering Roles (35 mins)**
   - *Topic 1*: Database Administrators (DBA) vs Backend Engineers vs Devops Engineers.
   - *Topic 2*: Security Analysts and Penetration Testers.
   - *Topic 3*: Setting up portfolios on GitHub.
3. **Reflections Round-Table (40 mins)**
   - *Discussion*: *"What surprised you about API security? How did the AI Design-Build-Audit loop change how you inspect generated code?"*
4. **Graduation & Level 4 Planning (30 mins)**
   - *Action*: Present Level 2 and 3 graduation certificates. Map milestones for Level 4 capstone deployments.

**Level 3 Assessment Rubric**

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Database Design** | SQL schema tables are relational; tables use correct primary/foreign keys and cascade constraints. | Schema relational, but missing cascade rules or index joins. | Tabular modeling is weak, tables are flat. | Monolithic tables, data duplicates, no relationships. |
| **Server Security** | Implements backend validation guards, RLS database rules, and hides env secrets. | Validates params, but exposes RLS configuration holes. | Exposes API secrets, weak input validation. | Exposes credentials, database open to public reads. |
| **Transaction Logic** | Database updates use BEGIN/COMMIT wrappers with rollback triggers on error. | Uses transactions, but handles rollback conditions poorly. | Partial writes occur, database lacks ACID wraps. | Credit changes bypass transactions, balance drops. |
| **System Orchestration** | Deploys backend API and DB resources to cloud pipelines; logs error diagnostics. | Deploys resources, but server logs lack diagnostics details. | DB queries fail on cloud servers, configuration errors. | Local files only, code merges fail on git. |

---
## 8. Level 4: Engineering — "The Software Engineer"

**Goal:** Apply professional software engineering practices. Master automated testing, real-time systems, performance optimization, CI/CD pipelines, monitoring, and product launch — skills that differentiate a hobbyist from a professional engineer.

**Prerequisites:** Level 3 completion. Comfortable with client-server architecture, database modeling, API design, and security fundamentals.

**Game/Project:** Students build a **"Mission Control Dashboard"** — a real-time collaborative monitoring dashboard where multiple users can view live sensor data streams, manage alert thresholds, and coordinate response actions. Think of it as a simplified NASA Mission Control or a DevOps monitoring dashboard.

### Module 1: Engineering Foundations & Testing (Sessions 1–3)

#### Session 1: "Product Requirements & Architecture Blueprints" (2 hours)

**Learning Objectives:**
- Write testable specifications using a Product Requirements Document (PRD) framework
- Create components maps and data flow blueprints using system architecture diagrams
- Translate user requirements into absolute logical system constraints

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Reverse Engineering — User Journey Mapping (15 mins)**
   - *Activity*: The tutor opens a mock Mission Control Dashboard.
   - *Action*: The student maps out every action button and traces where inputs propagate (e.g. click alert threshold slider ➔ state changes ➔ UI updates).
   - *Debrief*: Highlight that professional software engineering begins by deconstructing systems from a user perspective.
2. **Core Concept Board Lesson: System Blueprints & PRDs (20 mins)**
   - *Topic 1*: PRD framework: User Stories ("As a... I want to... So that...").
   - *Topic 2*: Defining system inputs, processing pipelines, and outputs.
   - *Topic 3*: Component diagrams: decoupling frontend client, backend api, and database resources.
3. **Design Phase: Designing Dashboard Specifications (20 mins)**
   - *Activity*: Write user stories for the Mission Control Dashboard (e.g. threshold configurations, telemetry stream viewing).
   - *Action*: Draft testable system constraints (e.g. "Sensor values must be parsed to 1 decimal place").
4. **Build Phase (AI Assisted): Generating Architecture (35 mins)**
   - *Action*: Prompt AI to generate a Mermaid component architecture diagram showing data flow between client, server, and telemetry stream.
   - *Audit*: Audit components. Explain component coupling in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Ambiguous Spec (15 mins)**
   - *Activity*: Tutor gives a requirement: "The alert system should be very fast."
   - *Challenge*: Student debugs the ambiguity and rewrites it as a precise, testable constraint.
   - *Socratic Question*: *"Why is 'very fast' a bad specification? How does a computer evaluate 'very fast'? How do we write it as a logical constraint?"*
6. **Ethics: Clear Specifications in Critical Software (15 mins)**
   - *Topic*: Building systems without clear requirements.
   - *Real-World Case*: The Healthcare.gov launch disaster (2013) failed on day one because hundreds of contractors built systems without clear, centralized requirements.
   - *Discussion*: *"Why is a software spec a contract of logical truth? What happens when developers make assumptions?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 1 Homework", write 3 testable user stories with explicit preconditions and acceptance criteria for a SpaceX Falcon 9 telemetry monitor (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 1)
- **Exercise 1.1 (Mermaid Architecture) Solution**:
  ```mermaid
  graph TD
    Client[Dashboard UI] <-->|WebSocket| Server[Alert API Server]
    Server <-->|SQL| DB[(Database)]
    Telemetry[Mock Sensors] -->|REST POST| Server
  ```
- **Homework Evaluation**: Ensure student specifies: User role, Action description, Acceptance criteria with measurable thresholds (e.g. "Response within 200ms").

---

#### Session 2: "Automated Testing: Unit Tests & Test-Driven Development" (2 hours)

**Learning Objectives:**
- Understand unit testing mechanics and test runners
- Write test cases checking utility functions against boundary values
- Apply Test-Driven Development (TDD) cycle (Red-Green-Refactor)

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Manual Test Scenarios (15 mins)**
   - *Activity*: Student manually reviews a coordinate validator function to spot bugs.
   - *Debrief*: Show that manual testing is slow and prone to human oversight.
2. **Core Concept Board Lesson: The Test Runner Lifecycle (20 mins)**
   - *Topic 1*: Test Suites (`describe`), Test Cases (`test`), and Assertions (`expect`).
   - *Topic 2*: Test-Driven Development: Write test ➔ Fail (Red) ➔ Write code ➔ Pass (Green) ➔ Refactor.
   - *Topic 3*: Boundary testing (testing limits like empty strings, negative coordinates).
3. **Design Phase: Test Case Specifications (20 mins)**
   - *Activity*: Plan test inputs and expected outputs for an alert validator utility function.
   - *Action*: Draft test case values including edge parameters.
4. **Build Phase (AI Assisted): Coding the Test Suite (35 mins)**
   - *Action*: Prompt AI to generate a unit test file using Vitest syntax for the validator.
   - *Audit*: Audit test assertions. Verify that Vitest catches simulated edge failures (+100 XP).
5. **Socratic Debugging: The Ghost Green Bug (15 mins)**
   - *Activity*: Tutor seeds a bug where the test runner mocks return true blindly, causing tests to pass even when logic is broken.
   - *Challenge*: Correct test mocks to ensure tests fail on invalid inputs.
   - *Socratic Question*: *"Why did our test suite pass when the function output was completely wrong? How do we test that our tests are actually testing?"*
6. **Ethics: Testing Failure Liabilities (15 mins)**
   - *Topic*: Software testing failures.
   - *Real-World Case*: The Therac-25 radiation therapy machine (1985) killed multiple patients because of a race condition bug that was never caught in unit testing.
   - *Discussion*: *"If our tests do not cover boundary cases, are we responsible for the failures of the live system? How does TDD help us write safer code?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 2 Homework", write a Vitest script containing 3 assertions checking if an average sensor reading calculation clamps outputs correctly (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 2)
- **Exercise 2.1 (Unit Test Suite) Solution**:
  ```javascript
  import { describe, test, expect } from "vitest";
  import { classifyAlert } from "./alerts.js";

  describe("classifyAlert", () => {
    test("returns CRITICAL when reading crosses max limit", () => {
      expect(classifyAlert(120, 100)).toBe("CRITICAL");
    });
    test("returns OK when reading is within limits", () => {
      expect(classifyAlert(80, 100)).toBe("OK");
    });
    test("throws error on negative values", () => {
      expect(() => classifyAlert(-5, 100)).toThrow();
    });
  });
  ```
- **Homework Evaluation**: Ensure the script maps correct assertion properties (`expect().toBe()`, `expect().toThrow()`).

---

#### Session 3: "Integration Testing & Test Coverage" (2 hours)

**Learning Objectives:**
- Write integration tests capturing network request roundtrips
- Mock external service calls using HTTP interception
- Measure and analyze code coverage percentages

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: API Response Mapping (15 mins)**
   - *Activity*: Match standard API status codes (200, 400, 500) to client UI alert states.
2. **Core Concept Board Lesson: Mocking APIs & Coverage (20 mins)**
   - *Topic 1*: Unit vs Integration testing: testing how components interact.
   - *Topic 2*: API Mocking: Intercepting network fetches to return controlled payloads.
   - *Topic 3*: Code coverage: Statement, branch, and function metrics.
3. **Design Phase: Integration Test Blueprint (20 mins)**
   - *Activity*: Outline test flows: Trigger fetch ➔ receive mocked response ➔ verify DOM changes.
   - *Action*: Write API endpoints request/response mocks mockups.
4. **Build Phase (AI Assisted): Coding Integration Tests (35 mins)**
   - *Action*: Prompt AI to write integration tests checking that the dashboard correctly renders critical states on API errors.
   - *Audit*: Audit coverage reports. Verify that 100% of branch scenarios are tested in the Prompt Journal (+100 XP).
5. **Socratic Debugging: Stale Mocks (15 mins)**
   - *Activity*: Tutor seeds a mock return payload that uses a deprecated JSON schema, causing tests to pass while breaking the actual dashboard build.
   - *Challenge*: Identify the mismatch between mock schemas and live interfaces.
   - *Socratic Question*: *"Why did the test suite report green when the actual UI breaks on load? How do we ensure our mocks stay synchronized with reality?"*
6. **Ethics: Testing Gates in Deployments (15 mins)**
   - *Topic*: Code testing automation.
   - *Real-World Case*: Knight Capital Group (2012) lost $440 million in 45 minutes because they deployed untested legacy software to their production trading servers.
   - *Discussion*: *"Why should merge events be blocked until test pipelines pass? Who is liable when untested systems deploy?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 3 Homework", write an integration test mocking a POST request to update configurations and checking client state updates (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 3)
- **Exercise 3.1 (Mocked API Test) Solution**:
  ```javascript
  import { test, expect, vi } from "vitest";
  import { fetchDashboardData } from "./api.js";

  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ sensorStatus: "ACTIVE", alertsCount: 0 })
    })
  );

  test("fetches and returns dashboard payload", async () => {
    const data = await fetchDashboardData();
    expect(data.sensorStatus).toBe("ACTIVE");
    expect(fetch).toHaveBeenCalledWith("/api/status");
  });
  ```
- **Homework Evaluation**: Ensure the mocked fetch includes exception scenarios (like returning status 500) and checking handler states.

---

### Module 2: Real-Time Systems & Performance (Sessions 4–6)

#### Session 4: "Real-Time Data Streams: WebSockets & Live Updates" (2 hours)

**Learning Objectives:**
- Understand WebSockets protocols vs HTTP request dynamics
- Establish and connect to live persistent WebSocket server instances
- Parse real-time stream frames to update UI layouts

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Reverse Engineering — WebSockets Traffic (15 mins)**
   - *Activity*: The tutor opens a live dashboard app. The student opens browser DevTools Network tab and selects WS/WebSockets.
   - *Action*: The student monitors frame logs, identifying incoming messages keys and timestamp increments.
   - *Debrief*: Show how WebSockets keep data channels open continuously without repeating connections overhead.
2. **Core Concept Board Lesson: The WebSockets Pipeline (20 mins)**
   - *Topic 1*: Handshake, frames, and persistent TCP channels.
   - *Topic 2*: Client WebSocket API: `new WebSocket()`, listener hooks (`onmessage`, `onerror`, `onclose`).
   - *Topic 3*: Real-time updates pipelines compared to HTTP polling structures.
3. **Design Phase: Stream State Blueprint (20 mins)**
   - *Activity*: Design client UI states representing WebSocket connections statuses (Connected, Offline, Reconnecting).
   - *Action*: Draft state variables tracking socket statuses.
4. **Build Phase (AI Assisted): Connecting the Stream (35 mins)**
   - *Action*: Prompt AI to build the client-side WebSocket controller connecting to the test telemetry server.
   - *Audit*: Audit socket handlers. Explain frame parsing logic to the tutor in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Frozen Client (15 mins)**
   - *Activity*: Tutor disconnects the WebSocket stream server, but the UI keeps displaying the last frame data without updating status indicators.
   - *Challenge*: Implement fallback timeout handlers to report connection drops.
   - *Socratic Question*: *"Why does the dashboard look active when data stopped flowing? How do we detect that a server went silent if there is no disconnect event?"*
6. **Ethics: Flash Crashes in Real-time Telemetry (15 mins)**
   - *Topic*: System latency vulnerabilities.
   - *Real-World Case*: The stock market Flash Crash (2010) was accelerated by high-frequency trading algorithms feeding on delayed real-time feed signals, causing a trillion-dollar drop in minutes.
   - *Discussion*: *"When designing alerts streams, why is latency transparency a safety requirement? What happens if users base actions on stale info?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 4 Homework", write a JS WebSocket connection wrapper implementing exponential backoff (retrying connections with growing delay on drops) (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 4)
- **Exercise 4.1 (WebSocket Connection) Solution**:
  ```javascript
  const socket = new WebSocket("ws://localhost:8080/stream");
  socket.onmessage = (event) => {
    const payload = JSON.parse(event.data);
    updateDashboardUI(payload);
  };
  socket.onclose = () => {
    console.warn("Connection lost. Toggling offline overlay...");
    toggleOfflineIndicator(true);
  };
  ```
- **Homework Evaluation**: Ensure the backoff logic increments timeout intervals: `setTimeout(connect, retryCount * 1000)`.

---

#### Session 5: "State Management & Data Synchronization" (2 hours)

**Learning Objectives:**
- Manage application state updates across client elements
- Apply optimistic updates updates patterns to improve UI experience
- Resolve concurrent editing conflicts using versioning or overwrite locks

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Shared State Tracing (15 mins)**
   - *Activity*: Trace variables states when two users update user names concurrently on a board.
   - *Debrief*: Show how parallel requests can result in lost updates without synchronization checks.
2. **Core Concept Board Lesson: State Stores & Synchronization (20 mins)**
   - *Topic 1*: Single source of truth (state store) vs fragmented component states.
   - *Topic 2*: Optimistic updates: Updating UI immediately, rolling back on server reject.
   - *Topic 3*: Conflict resolution strategies (last-write-wins, version matching).
3. **Design Phase: State Update Flowchart (20 mins)**
   - *Activity*: Sketch the optimistic updates flow representing slider updates: Click ➔ draw new slider state ➔ POST ➔ verify/rollback state.
   - *Action*: Draft state interfaces schema.
4. **Build Phase (AI Assisted): State Controller Assembly (35 mins)**
   - *Action*: Prompt AI to write state updates controllers with rollbacks on request failure.
   - *Audit*: Audit variables assignments. Verify rollback handlers revert states in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Overwritten Update (15 mins)**
   - *Activity*: Tutor edits code to trigger updates concurrently. User A edits config, but User B's older request arrives late and overwrites it.
   - *Challenge*: Student applies version checks to reject stale update payloads.
   - *Socratic Question*: *"Why did User A's edit get deleted? Trace the timestamps of queries. How do we ignore requests that represent older state?"*
6. **Ethics: Cascading State Failures (15 mins)**
   - *Topic*: System dependencies failure.
   - *Real-World Case*: The Amazon S3 outage (2017) was caused by a simple command typo that triggered cascading state synchronicity failures across dependent databases.
   - *Discussion*: *"If one service fails, how do we design our app state to degrade gracefully instead of throwing white screens? What is defensive UI design?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 5 Homework", write a JS function implementing optimistic UI update logic for a sensor mute button, reversing changes on request reject (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 5)
- **Exercise 5.1 (Optimistic Update) Solution**:
  ```javascript
  let alertState = "MUTED";
  const oldState = alertState;
  
  function setAlertMuted(status) {
    alertState = status; // optimistic render
    renderAlertUI();
    
    fetch("/api/mute", {
      method: "POST",
      body: JSON.stringify({ status })
    }).catch(() => {
      alertState = oldState; // rollback
      renderAlertUI();
      showNotification("Update failed. Reverting...");
    });
  }
  ```
- **Homework Evaluation**: Student's solution must capture the previous state and apply a `.catch` wrapper restoring variables on exceptions.

---

#### Session 6: "Performance Optimization & Lighthouse Audits" (2 hours)

**Learning Objectives:**
- Audit page load performance using browser Lighthouse engines
- Implement lazy loading and code optimization (pagination, chunking)
- Measure First Input Delay (FID), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS)

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Performance Bottlenecks Profiling (15 mins)**
   - *Activity*: Student compares a slow loading dashboard with an optimized one, checking network request size logs.
2. **Core Concept Board Lesson: Page Performance Metrics (20 mins)**
   - *Topic 1*: Lighthouse metrics (LCP, FID, CLS).
   - *Topic 2*: Virtual scrolling and paginating data streams to maintain DOM sizes.
   - *Topic 3*: Image asset optimization and file minifications.
3. **Design Phase: Optimization Strategy (20 mins)**
   - *Activity*: Define performance milestones (e.g. LCP under 2.5s, CLS under 0.1).
   - *Action*: Draft optimization checkpoints checklist.
4. **Build Phase (AI Assisted): Code Splitting & Caching (35 mins)**
   - *Action*: Prompt AI to implement lazy loading on the widgets layout code bundle.
   - *Audit*: Audit bundle footprint. Explain performance profiles to the tutor in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Giant Payload Freezes (15 mins)**
   - *Activity*: Tutor injects a 10MB mock database payload into the log feed panel, causing the browser tab to freeze.
   - *Challenge*: Student refactors the feed to paginate records and use virtual scrolling.
   - *Socratic Question*: *"Why does rendering 10,000 log elements crash the tab? How does paginating database outputs resolve DOM bottleneck loads?"*
6. **Ethics: Accessibility & Digital Divide (15 mins)**
   - *Topic*: Digital access equity.
   - *Real-World Case*: Slow, heavy web applications exclude users on low-end smartphones or poor connection speeds, widening the digital access divide in developing regions.
   - *Discussion*: *"Why is performance optimization not just a speed check, but an inclusivity requirement? How do we build for everyone?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 6 Homework", write a plan describing 3 actions to optimize LCP and CLS scores for a dashboard containing sensor feeds (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 6)
- **Exercise 6.1 (Data Pagination) Solution**:
  ```javascript
  let currentPage = 1;
  const pageSize = 50;
  
  async function fetchLogsPage(page) {
    const res = await fetch(`/api/logs?page=${page}&limit=${pageSize}`);
    const data = await res.json();
    appendLogsToUI(data.logs);
  }
  ```
- **Homework Evaluation**: Ensure student outlines measurable actions (e.g. setting explicit dimensions for widgets to reduce layout shifts, lazy-loading widgets).

---

### Module 3: DevOps & Production Engineering (Sessions 7–9)

#### Session 7: "CI/CD Pipelines: Automated Build, Test, Deploy" (2 hours)

**Learning Objectives:**
- Understand Continuous Integration / Continuous Deployment (CI/CD) pipelines
- Write YAML scripts defining automated build pipelines
- Configure automated test runners that block code merges on test failures

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: YAML Mapping (15 mins)**
   - *Activity*: Match pipeline commands combinations to their target environments (Staging vs Production).
2. **Core Concept Board Lesson: Deployment Pipelines (20 mins)**
   - *Topic 1*: Automated pipelines. Commit triggers ➔ Build ➔ Test ➔ Deploy.
   - *Topic 2*: YAML syntax structures (stages, steps, jobs, env keys).
   - *Topic 3*: Deploy gates: Blocking production builds if tests return error exit codes.
3. **Design Phase: Pipeline Flow Diagram (20 mins)**
   - *Activity*: Sketch the pipelines steps flow: Push ➔ run Vitest tests ➔ run NPM build ➔ deploy staging.
   - *Action*: Draft YAML properties configurations.
4. **Build Phase (AI Assisted): Coding the CI/CD Pipeline (35 mins)**
   - *Action*: Prompt AI to generate a GitHub Actions workflow pipeline file (`.github/workflows/deploy.yml`).
   - *Audit*: Audit YAML keys. Explain environment variables mapping in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Broken Pipeline (15 mins)**
   - *Activity*: Tutor introduces a syntax error or a failing test command in the pipeline script, causing the automated staging build to fail.
   - *Challenge*: Review logs output to locate the pipeline syntax error and fix it.
   - *Socratic Question*: *"Why did our code fail to deploy? Where did the pipeline stop? How do logs trace compiler issues?"*
6. **Ethics: Automated Gates in Systems Deployments (15 mins)**
   - *Topic*: DevOps safeguards.
   - *Real-World Case*: GitLab (2017) suffered an extended outage when a developer accidentally deleted a production database directory because environment safeguards and automated backups were bypassable.
   - *Discussion*: *"Why should system critical changes require automated tests checks before authorization? How does automation protect human developers?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 7 Homework", write a YAML workflow fragment running ESLint checks and unit tests sequentially on pull requests (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 7)
- **Exercise 7.1 (GitHub Actions YAML) Solution**:
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
- **Homework Evaluation**: Ensure the YAML correctly parses indentation structures and includes valid stage sequences triggers.

---

#### Session 8: "Monitoring, Logging & Alerting in Production" (2 hours)

**Learning Objectives:**
- Implement structured server logging using JSON log templates
- Create production alert logs that monitor server uptime
- Analyze system performance logs to debug runtime exceptions

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Stack Trace Audit (15 mins)**
   - *Activity*: Locate the file path and variables causing a crash given a server stack trace record.
2. **Core Concept Board Lesson: Structured Logs & Metrics (20 mins)**
   - *Topic 1*: Structured logging (JSON format) vs raw console print statements.
   - *Topic 2*: Log levels (DEBUG, INFO, WARN, ERROR) and log aggregators.
   - *Topic 3*: Alert fatigue: defining alert thresholds (e.g. alert only on repeated 500 status codes).
3. **Design Phase: Logging Blueprint (20 mins)**
   - *Activity*: Design a structured log schema containing execution context details (timestamp, level, endpoint, userId).
   - *Action*: Draft payload specifications.
4. **Build Phase (AI Assisted): Coding the Logger (35 mins)**
   - *Action*: Prompt AI to write a middleware logger formatting runtime errors into structured JSON entries.
   - *Audit*: Audit error logs outputs. Student explains exception handling to the tutor in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Silent Fail (15 mins)**
   - *Activity*: Tutor introduces a database connection timeout bug. The server returns 500 status to clients, but leaves zero logs in stdout, making debugging impossible.
   - *Challenge*: Wrap the database catch blocks with proper logger execution calls.
   - *Socratic Question*: *"Why is the server crashing silently? If clients get error pages but our logs show nothing, how do we find the issue? How does log visibility affect debugging?"*
6. **Ethics: Sensor Failures & Uptime Alerts (15 mins)**
   - *Topic*: Safety warning systems failures.
   - *Real-World Case*: The Boeing 737 MAX crashes (2018-2019) were partially caused by a lack of cockpit alert transparency on faulty sensor feeds, preventing pilots from identifying malfunctioning autopilot overrides.
   - *Discussion*: *"When software monitor systems fail to report failures, what are the human costs? Why is logging accuracy a safety parameter?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 8 Homework", write a JS error handler middleware logging the error stack trace, timestamp, and client ip address in JSON format (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 8)
- **Exercise 8.1 (Structured Logger Middleware) Solution**:
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
- **Homework Evaluation**: Output must be stringified JSON with key tags representing timestamp, levels, message, and target paths.

---

#### Session 9: "Feature Flags & Controlled Rollouts" (2 hours)

**Learning Objectives:**
- Understand feature flag design patterns and controlled rollouts
- Code feature toggle gates restricting client assets dynamically
- Plan canary rollouts based on user ID partitions

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Rollout Ratio Math (15 mins)**
   - *Activity*: Calculate user population percentages mapped to distinct feature versions.
2. **Core Concept Board Lesson: Feature Gating & Canary Releases (20 mins)**
   - *Topic 1*: Feature flags: decoupling deployment from code activation.
   - *Topic 2*: Canary releases: rolling out updates to a small cohort (e.g. 5% of users) first.
   - *Topic 3*: Designing remote flag configs fetching scripts.
3. **Design Phase: Feature Flags Schema (20 mins)**
   - *Activity*: Map configurations schemas for feature flags (e.g. `{ "advanced-widget": { "enabled": true, "users": [12, 45] } }`).
   - *Action*: Draft JSON flag spec structures.
4. **Build Phase (AI Assisted): Feature Gater (35 mins)**
   - *Action*: Prompt AI to build feature flag toggles that wrap dashboard component render logic.
   - *Audit*: Audit flag gates logic. Verify flag evaluations function in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Flagged Crash (15 mins)**
   - *Activity*: Tutor turns on a feature flag that renders a half-built widget. The dashboard crashes immediately on load for flagged users, while working fine for others.
   - *Challenge*: Wrap the flagged component rendering in a safe try/catch wrapper (Error Boundary) to isolate crashes.
   - *Socratic Question*: *"Why did the entire application crash when only one widget failed? How do feature flags increase our need for component-level isolation?"*
6. **Ethics: A/B Testing Boundaries (15 mins)**
   - *Topic*: Ethical thresholds in user experimentation.
   - *Real-World Case*: Facebook (2014) conducted mood manipulation experiments on 700,000 users by using feature flags to adjust positive/negative content ratios in news feeds without explicit consent.
   - *Discussion*: *"What are the ethical limits of user experimentation? Should users be allowed to opt out of A/B rollouts?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 9 Homework", write a JS function checking if a user ID falls into a 10% canary cohort using modulo hashing math (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 9)
- **Exercise 9.1 (Canary Modulo Gate) Solution**:
  ```javascript
  const userFlags = {
    "live-alerts-widget": false,
    "dark-mode-feature": true
  };
  
  function checkFeatureFlag(userId, flagName) {
    if (flagName === "live-alerts-widget") {
      // 10% Canary: check if userId ends in 3
      return userId % 10 === 3;
    }
    return userFlags[flagName] || false;
  }
  ```
- **Homework Evaluation**: Ensure mod operations (`%`) map targets consistently and resolve Boolean flags conditions.

---

### Module 4: Product Launch & Defense (Sessions 10–12)

#### Session 10: "Documentation, API Specs & Developer Handoff" (2 hours)

**Learning Objectives:**
- Write comprehensive software installation manuals (README files)
- Design API specs using OpenAPI/Swagger guidelines
- Write Architectural Decision Records (ADRs) justifying layout and stack selections

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Setup Guide Audit (15 mins)**
   - *Activity*: Attempt to follow a mock setup guide with missing steps. Identify where it breaks.
2. **Core Concept Board Lesson: The Handoff Lifecycle (20 mins)**
   - *Topic 1*: Clean documentation: installation steps, prerequisites, environment setup.
   - *Topic 2*: OpenAPI specifications: defining paths, parameters, schemas, and responses.
   - *Topic 3*: Architectural Decision Records: Documenting why a technology was chosen.
3. **Design Phase: Handoff Checklist Blueprint (20 mins)**
   - *Activity*: Design the layout of the project README. List all environment variables that must be configured.
   - *Action*: Draft ADR templates.
4. **Build Phase (AI Assisted): Generating Specifications (35 mins)**
   - *Action*: Prompt AI to generate OpenAPI configuration specs for the dashboard API routes.
   - *Audit*: Audit spec keys. Explain path parameters constraints in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Missing Setup (15 mins)**
   - *Activity*: Tutor follows the student's setup guide on a clean workspace. The setup crashes because database migration instructions were omitted.
   - *Challenge*: Rewrite documentation to detail database setup step-by-step.
   - *Socratic Question*: *"Why did the installation fail on the tutor's machine? What setup preconditions did we assume that were not explicit in our documentation?"*
6. **Ethics: Open Source Security & Auditing (15 mins)**
   - *Topic*: Security auditing constraints.
   - *Real-World Case*: The Heartbleed vulnerability (2014) existed in OpenSSL code because it was maintained by a tiny open-source team whose code updates were never properly documented or audited by users.
   - *Discussion*: *"How does clean documentation help security audits? What is our responsibility to developers who build on our code?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 10 Homework", write a standard Architectural Decision Record explaining why the team chose WebSockets over long polling for real-time monitoring (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 10)
- **Exercise 10.1 (Swagger API Spec sample) Solution**:
  ```yaml
  paths:
    /api/alerts:
      get:
        summary: Returns active telemetry alerts
        responses:
          '200':
            description: Success
            content:
              application/json:
                schema:
                  type: array
                  items:
                    $ref: '#/components/schemas/Alert'
  ```
- **Homework Evaluation**: Ensure the ADR contains: Status, Context, Decision, Consequences fields.

---

#### Session 11: "User Acceptance Testing & Beta Launch" (2 hours)

**Learning Objectives:**
- Plan User Acceptance Testing (UAT) checklists
- Triage code issues using a priority/severity matrix
- Perform defensive checks protecting systems from garbage user inputs

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Bug Triage Scenario (15 mins)**
   - *Activity*: Classify 3 bugs (e.g. typos, server crashes, display errors) into priority levels.
2. **Core Concept Board Lesson: UAT & Triage (20 mins)**
   - *Topic 1*: User Acceptance Testing: verifying the app meets all business requirements.
   - *Topic 2*: Triage matrices: separating bugs by Severity (Blocker, Major, Minor) and Priority.
   - *Topic 3*: Sanitizing inputs: protecting input fields from injection payloads.
3. **Design Phase: UAT Matrix Blueprint (20 mins)**
   - *Activity*: Create a UAT checklist checking authentication, threshold configs, and alerts streams.
   - *Action*: Draft test script scenarios.
4. **Build Phase (AI Assisted): Sanitizing Inputs (35 mins)**
   - *Action*: Prompt AI to add input validation logic blocking garbage characters on alert name updates.
   - *Audit*: Audit sanitizer routines. Explain input checks to the tutor in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Hostile QA User (15 mins)**
   - *Activity*: Tutor acts as a hostile beta user and inputs extreme data (e.g. alert threshold of $10^{50}$ or special Unicode symbols) that crashes the rendering engine.
   - *Challenge*: Update data parsing checks to handle numeric extremes and invalid text formats.
   - *Socratic Question*: *"Why did the UI collapse when we input a huge number? What parsing bounds checks should we add to protect the layout?"*
6. **Ethics: Launch Pacing & Load Thresholds (15 mins)**
   - *Topic*: Launch management under load.
   - *Real-World Case*: The Pokemon Go launch (2016) crashed globally on day one because servers were overwhelmed by user volumes 50 times larger than the engineering team's target load thresholds.
   - *Discussion*: *"Why is load testing a critical launch step? How do we balance developer launch deadlines against system stability?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 11 Homework", write a JS function sanitizing user-submitted strings to strip out potential HTML tag characters (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 11)
- **Exercise 11.1 (Sanitizer script) Solution**:
  ```javascript
  function sanitizeInput(inputStr) {
    if (typeof inputStr !== "string") return "";
    // Strip tag symbols
    return inputStr.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  ```
- **Homework Evaluation**: Ensure function checks types, sanitizes special characters, and clamps input length.

---

#### Session 12: "The Grand Launch & System Defense" (2 hours)

**Learning Objectives:**
- Present a real-time collaborative system design to a technical panel
- Demonstrate automated pipelines and test coverage structures
- Defend system architecture against live failure simulation tests (Chaos Monkey testing)

**In-Session Assessment Timeline (2 hours):**
1. **Part 1: The Product Pitch (45 mins)**
   - The student presents their live Mission Control Dashboard in production.
   - Walk through the user journey, configuration updates, and real-time alerts.
   - Explain how component interfaces and specifications guided development.
2. **Part 2: Architectural Tour (45 mins)**
   - Walk through the codebase with the tutor. Show the test suite coverage profiles.
   - Demonstrate the CI/CD pipeline logs showing automatic test gates.
   - Walk through production logs and the feature flag configurations panel.
3. **Part 3: Live System Defense (20 mins)**
   - The tutor acts as the "Chaos Monkey," triggering live system failures (e.g., stopping the WebSocket stream server, sending garbage data, toggling unstable feature flags).
   - The student defends their system by showing how client state handles disconnects, inputs sanitizers block errors, and error boundaries isolate crashes.
4. **Part 4: Retrospective & Graduation (10 mins)**
   - Grade student performance using the rubric. Present the Level 4 Software Engineering certificate.

**Level 4 Assessment Rubric**

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Test Engineering** (25%) | Test coverage is above 85%; test cases cover all boundary conditions; TDD principles are applied. | Good test coverage (70-85%); minor gaps in edge case coverage. | Basic tests written but coverage is low (<70%); lacks boundary validations. | No unit or integration tests written. |
| **System Reliability** (25%) | WebSockets handle connection drops gracefully with reconnection fallback; states roll back on sync failure; inputs sanitizers block all exploits. | Live updates work, but connection status alerts have latency or minor synchronization overlaps. | UI freezes on server disconnects; lacks rollback checks. | App crashes under basic inputs or network drops. |
| **DevOps Maturity** (20%) | GitHub Actions CI/CD automatically runs tests and gates builds; structured logging captures errors; feature flags toggle components cleanly. | Pipeline works, but is bypassable; error logs lack context keys. | Manual deployments only; feature flags omitted. | Code base lacks pipelines or structured logs. |
| **Independent Defense** (30%) | Presenter answers technical architecture and failure questions with clarity; explains design decisions using ADR logs. | Solid presentation; struggles on deep optimization or concurrency questions. | Presenter does not understand how parts of their app sync. | Cannot explain or defend system design decisions. |

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 12 Homework", submit a retrospective summary: "My Journey from Syntax Writer to System Architect. What did I learn about engineering safety?" (+100 XP).

#### 📖 Tutor Manual: Assessment Solutions (Session 12)
- **Part 1 (UAT Verification)**: Verify dashboard live updates update in real-time.
- **Part 2 (Architecture Audit)**: Verify Vitest coverage is visible and CI/CD pipelines compile.
- **Part 3 (Chaos Defense)**: Run the following Chaos Tests:
  1. Trigger WebSocket disconnect: UI must change status indicator to Offline.
  2. Input long string: Input fields must strip tags or limit characters length.
  3. Turn on unstable feature flag: Widget must show error boundary instead of crashing.
- **Take-Home Evaluation**: Verify student submitted their final retrospective logs.


## 9. Teacher Training Companion Guide

### Teacher Role: "The Code Judge" (Not the Syntax Tutor)

> [!CAUTION]
> **Critical Mindset Shift:** Teachers in this curriculum must NOT answer "how do I fix this line?" Instead, they ask "what did you instruct the AI to do, and why did it output this specific behavior?"

### Core Teaching Skills

| Skill | Description | Practice Method |
|-------|-------------|-----------------|
| **Socratic Questioning** | Guide through questions, not answers | Role-play sessions with mock student scenarios |
| **AI Tool Fluency** | Comfortable with current AI code generation tools | Monthly AI tool exploration sessions |
| **Bug Classification** | Can identify and categorize all 4 bug types | Weekly debugging exercises using AI-generated code |
| **Architecture Thinking** | Can evaluate system designs for completeness | Practice creating and reviewing architecture documents |
| **Ethics Facilitation** | Can lead nuanced ethics discussions without lecturing | Ethics scenario practice with peer teachers |

### Preparation Checklist (Per Level)

**Before Teaching Level 1:**
- [ ] Complete all Session exercises yourself
- [ ] Create 5 backup flowchart scenarios (in case students finish early)
- [ ] Prepare "Evil User" questions for each session's edge case discussions
- [ ] Test all block-based programming tools on classroom computers
- [ ] Prepare printed materials for off-screen exercises

**Before Teaching Level 2:**
- [ ] Generate 10 buggy code snippets at varying difficulty levels
- [ ] Test AI code generation tools with Session 5's prompt exercises
- [ ] Create a sample Prompt Journal as a model for students
- [ ] Prepare alternative exercises for students who progress faster
- [ ] Review current AI tool landscape (tools change — update exercises as needed)

**Before Teaching Level 3:**
- [ ] Deploy a sample capstone project to verify the deployment process works
- [ ] Prepare Red Team attack scripts for Session 9
- [ ] Create a rubric scoring practice set (score sample presentations to calibrate)
- [ ] Arrange guest speaker or prepare industry case studies (if possible)
- [ ] Ensure students have appropriate accounts/access for deployment

**Before Teaching Level 4:**
- [ ] Set up a sample staging deployment linked to a dummy GitHub repository
- [ ] Verify that environment variables (.env files) are excluded from Git commits
- [ ] Test the database Row-Level Security (RLS) policies to ensure auth rules hold
- [ ] Prepare mock API credentials for third-party service integration tests
- [ ] Set up a shared Vercel/Netlify classroom team dashboard (optional, if using team deploys)

### Handling Common Challenges

| Challenge | Response |
|-----------|----------|
| Student says "The AI already built it, why do I need to understand it?" | Ask them to modify one feature. When they struggle, point out that understanding enables control. |
| Student is frustrated that AI "doesn't listen" | This is a learning moment — help them find the ambiguity in their prompt. |
| Student copies AI code without understanding | Activate "Fallible Intern" protocol — ask Socratic questions about every line. |
| Advanced student is bored | Challenge them with harder edge cases, or have them mentor struggling students. |
| AI tool is unavailable / down | Every session should have an offline backup activity. Never rely 100% on tool availability. |
| Ethics discussion becomes heated | Acknowledge that these are genuinely hard questions. Frame as exploration, not debate with winners/losers. |

### Continuous Improvement

- **Monthly:** Review and update AI tool references (tools evolve rapidly)
- **Per Cohort:** Collect student feedback; adjust session pacing based on actual completion rates
- **Quarterly:** Review industry trends; update case studies and examples
- **Annually:** Full curriculum review; revise based on how AI tool landscape has changed

---

## 10. Program Summary

```
┌─────────────────────────────────────────────────────────┐
│                 COMPUTER TUTOR IN THE AI ERA             │
│          From Syntax Writer to System Architect          │
│          To Live Real-World Software Deployer           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Level 1: RACING CAR GAME (24 hours)                    │
│  ├─ Module 1: Inputs, Processing & Outputs (Sessions 1-3)│
│  ├─ Module 2: State, Controls & Clamps   (Sessions 4-6)│
│  ├─ Module 3: Loops, Functions & Loops     (Sessions 7-9)│
│  ├─ Module 4: Collision & UI Dashboard    (Sessions 10-11)│
│  └─ Assessment & Graduation               (Session 12)  │
│                                                         │
│  Level 2: MARS COLONY DEFENSE (26 hours)                │
│  ├─ Module 1: Canvas & Sprite Collections  (Sessions 1-4)│
│  ├─ Module 2: Swarm Control & Key Matrices (Sessions 5-8)│
│  ├─ Module 3: Async Leaderboard APIs       (Sessions 9-11)│
│  └─ Assessment & Defense                  (Sessions 12-13)│
│                                                         │
│  Level 3: CYBERPUNK HACKER ARENA (28 hours)             │
│  ├─ Module 1: SQL Relational Databases    (Sessions 1-4)│
│  ├─ Module 2: REST APIs & Server Security  (Sessions 5-8)│
│  ├─ Module 3: Deployment, RLS & Defense    (Sessions 9-12)│
│  └─ Capstone Defense & Reflection         (Sessions 13-14)│
│                                                         │
│  Level 4: THE SOFTWARE ENGINEER (24 hours)              │
│  ├─ Module 1: Engineering & Testing       (Sessions 1-3)│
│  ├─ Module 2: Real-Time & Performance      (Sessions 4-6)│
│  ├─ Module 3: DevOps & Production Eng.     (Sessions 7-9)│
│  └─ Product Launch & System Defense       (Sessions 10-12)│
│                                                         │
│  Total Program: 51 sessions × 2 hours = 102 hours       │
│  Estimated Duration: ~12 months at 1 session/week       │
│                                                         │
│  Cross-Cutting Themes:                                  │
│  ✦ AI Ethics integrated into every level                │
│  ✦ Tool-agnostic — survives AI tool evolution           │
│  ✦ Portfolio culture — visible learning journey         │
│  ✦ Off-screen assessments — verify independent thinking │
│  ✦ Teacher as "Code Judge" — Socratic method throughout │
│                                                         │
└─────────────────────────────────────────────────────────┘
```
