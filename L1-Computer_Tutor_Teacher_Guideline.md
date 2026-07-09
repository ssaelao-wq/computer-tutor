# Computer Tutor: Teacher & Tutor Guidelines (Level 1)

This guideline is designed for the tutor to lead one-on-one sessions for students aged 13–16. It maps out the exact timeline, board explanations, Socratic prompts, digital sandbox solutions, and homework check criteria for each 2-hour session.

---

## Pedagogical Philosophy (AI-Era Shift)
1. **Never Type For the Student**: Let them run into literal logic errors. The learning occurs when they diagnose *why* a machine did exactly what they wrote instead of what they intended.
2. **Socratic Questioning**: When a student gets stuck, do not give the answer. Ask: *"What did the drone terminal log just say?"* or *"Which line is executed immediately after this loop?"*
3. **No Paper, All Digital**: All notes, blueprints, and homework are logged in the student's in-app **Journal** tab.

---

## 🛠️ Portal Management: Admin Panel, Student Levels & Journals

Before running classes, tutors must familiarize themselves with the administrative controls and workspaces inside the application:

### 1. Student Levels & Navigation Restrictions
* **Configuring Student Levels**: 
  - Access the **Admin Panel** tab (only visible for accounts with the `teacher` role).
  - Use the registration form to create a student profile and select their initial curriculum level (`L1`, `L2`, `L3`, or `L4`).
  - In the student roster table, teachers can click the **Level select dropdown** on any student to dynamically change their level.
* **Navigation Locks**:
  - Setting a student's level to **L1** automatically deactivates tabs for Levels 2, 3, and 4 in the **Quest Files** and **Curriculum Guide** views. 
  - Locked tabs display a padlock (`🔒`) and are disabled to keep students focused on their active level milestones.
  - Tutors bypass these locks so they can click and audit any level tab at any time.

### 2. Interactive Prompt Journals
* **Homework and Notebook Logging**:
  - The **Prompt Journal** tab is a fully interactive text/code editor workspace.
  - All text containers have **automatic text-wrapping** enabled, preventing horizontal overflow logs.
  - Students write their notes, logic schemas, or homework answers inside the **Code Output History** editor.
  - Click **Save Changes** (Blue button) to overwrite the current selected version in the database.
  - Click **Save as New Version** (Green button) to save the current edits as a new draft while keeping previous versions intact.

---

## 🏎️ Level 1 Racing Car Project: 11-Part Roadmap (Sessions 2–12)

The main thread of Level 1 is the **2D Highway Avoidance Racing Game**. Students build this project iteratively week-by-week from Session 2 to Session 12, aligning directly with each session's core concepts:
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

---

## Session 1: "Literal Logic & Digital Infiltration"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Tutor-Student Car Autopilot Game
* **00:15 - 00:35 | Board Lesson**: The IPO Model & Sequential Control
* **00:35 - 01:00 | Digital Practice**: In-App Flowchart Sequencer
* **01:00 - 01:30 | Sandbox Lab**: Autonomous Vehicle Driving Simulator
* **01:30 - 01:50 | Assessment & Debugging**: Auditing execution logs
* **01:50 - 02:00 | Ethics Discussion**: Autonomous systems liability

### 1. Board Lesson Talking Points
* Draw the **IPO Diagram** on the board: `[Input] ➔ [Processing] ➔ [Output]`.
* **The Concept of Variables**: Explain variables as "labeled lockboxes" in the computer's memory. A box labeled `currentGear` holds a gear state value. The computer cannot change speed until it reads the gear value.
* **Sequential Control**: Explain that a computer has zero common sense. If step 2 requires data or states from step 1 (like having footbrake depressed before starting ignition), running step 2 first triggers a safety switch lockout.

---

### 2. Deep-Dive Discussion Guidelines & Conceptual Knowledge

#### 🎯 Phase A | In-App Flowchart Sequencer (00:35 - 01:00)
* **What the Tutor Explains**: 
  - Before writing code, software engineers use visual maps called **flowcharts** or chronological blueprints to trace how instructions execute.
  - Explain that flowcharts have a strict start and end point, and follow a single "flow of control" line.
* **Conceptual Knowledge & Focus**:
  - **Logical Continuity**: The system cannot skip steps. A gap in the flowchart (like a missing connection arrow) is equivalent to a compilation error.
  - **Implicit vs. Explicit Instructions**: Humans assume implicit instructions (e.g. "drive off" implies starting the engine first). Computers require every single action to be explicitly stated.
* **Tutor-Student Discussion Prompts**:
  - *"Why is a flowchart a visual representation of chronological logic? How does the path line guide the autopilot's brain step-by-step?"*
  - *"If we tell the vehicle to shift to Drive before we start the engine, what happens? Why does the safety system lock us out?"*
  - *"How does the footbrake state get saved in one step and verified in a later step?"*

#### 🕹️ Phase B | Sandbox Lab: Autonomous Vehicle Simulator
* **What the Tutor Explains**:
  - Introduce the Sandbox environment. Explain that the automatic car autopilot is controlled strictly by the list of sequenced action commands compiled by the student.
  - Explain the concepts of **preconditions** (states that must be true before an action can run, e.g. footbrake down to shift/start) and **state variables** (variables representing active system status, e.g. `speed = 25` or `currentGear = "D"`).
* **Step-by-Step Exercise Facilitation Guide**:
  ##### **Exercise 1.1: Basic Start & Move**
  * **How to do it**:
    1. Click the command buttons to add cards to the workspace in the following order: `Check P/N Gear State` ➔ `Depress Brake Pedal` ➔ `Turn Ignition Key to Start` ➔ `Shift Gear Selector to D (Drive)` ➔ `Release Brake Pedal` ➔ `Press Gas Pedal`. (Note: `Release Handbrake` is skipped since it starts as released).
    2. Click the **Run Autopilot Script** button. The vehicle will execute the steps sequentially and drive off in Drive gear.
  * **Purpose of the Exercise**:
    - To introduce the student to the concept of **sequential processing** (how computers execute lines of code chronologically from top to bottom) and **hardware preconditions** (the car cannot start the engine or shift gears without disengaging shift locks using the brake pedal and checking P/N gear).
  * **What the Student Learns**:
    - Computers are literal and do not assume steps.
    - An action block has zero effect or crashes if its safety prerequisites (e.g. brake pedal depressed) are not initialized in a prior step.
    - Env status conditions change correct sequence paths (if handbrake is already off, skip release handbrake step).
  * **Tutor Check Question**: *"Why did we need to depress the brake pedal first? What happens if you try to start the engine without pressing the brake?"*
 
  ##### **Exercise 1.2: Basic Start & Reverse**
  * **How to do it**:
    1. Click the command buttons in shuffled order to add cards: `Check P/N Gear State` ➔ `Depress Brake Pedal` ➔ `Turn Ignition Key to Start` ➔ `Shift Gear Selector to R (Reverse)` ➔ `Release Handbrake` ➔ `Release Brake Pedal` ➔ `Press Gas Pedal` (backing out).
    2. Click **Run Autopilot Script** to execute.
  * **Purpose of the Exercise**:
    - To demonstrate that different configurations (shifting to Reverse instead of Drive) follow identical safety checklist preconditions, and conditional environment states (here, handbrake is engaged, so releasing it is mandatory).
  * **What the Student Learns**:
    - Logic flows are reusable and scalable with minor modifications.
    - Environmental conditions determine if specific blocks like `Release Handbrake` are needed.
  * **Tutor Check Question**: *"Why did we have to include the Release Handbrake step in this exercise, but not in Exercise 1.1? Look at the dashboard status!"*
 
  ##### **Exercise 1.3: Autopilot Sequence Correction**
  * **How to do it**:
    1. The student is presented with a preloaded, scrambled script that stalls on execution.
    2. Click **Run Autopilot Script** to observe the crash.
    3. Direct the student's eyes to the terminal outputs: `CRITICAL ERROR: Attempted to start engine without depressing footbrake!`.
    4. Reorder the blocks: use the **▲** and **▼** arrow buttons next to the cards to arrange them in order: `Check P/N Gear State` ➔ `Depress Brake Pedal` ➔ `Turn Ignition Key to Start` ➔ `Shift Gear Selector to D (Drive)` ➔ `Release Handbrake` ➔ `Release Brake Pedal` ➔ `Press Gas Pedal`.
    5. Click **Run Autopilot Script** to verify.
  * **Purpose of the Exercise**:
    - To introduce the core programming workflow of **debugging** (running code, analyzing failure logs, tracing back to the incorrect logic block, and rearranging instructions).
  * **What the Student Learns**:
    - Errors are literal reports indicating exactly where the logic broke down.
    - Use the new **▲** and **▼** arrow buttons to quickly shift blocks up or down.
  * **Tutor Check Question**: *"Look at the terminal log. Why did the starter motor fail to start the engine? Which block needed to move before the ignition key?"*
 
  ##### **Exercise 1.4: Code Cleanup (Debugging Extra Steps)**
  * **How to do it**:
    1. The student is presented with a preloaded script containing an extra incorrect step (`Shift Gear Selector to R` in the middle of driving forward).
    2. Click **Run Autopilot Script**. Observe that the car reverses backward and crashes.
    3. Explain that they need to click the `×` button on the `Shift to R` card to remove it.
    4. Click **Run Autopilot Script** to verify.
  * **Purpose of the Exercise**:
    - To teach **code cleanup** and how to debug sequences by removing redundant or incorrect blocks.
  * **What the Student Learns**:
    - Clicking the `×` button deletes an unwanted instruction card.
    - Extra code blocks can lead to incorrect state changes or logic failure.
  * **Tutor Check Question**: *"Why did the car drive backwards? Which card did we have to delete to fix the script?"*
 
  ##### **Exercise 1.5: Emergency Halt**
  * **How to do it**:
    1. The student is challenged to test a sequence: Start the car, drive off in D, and execute a secure emergency stop.
    2. Sequence: `Check P/N` ➔ `Depress Brake` ➔ `Start` ➔ `Shift D` ➔ `Release Handbrake` ➔ `Release Brake` ➔ `Press Gas` ➔ `Depress Brake Pedal`.
    3. Point out that depressing the footbrake brings the moving vehicle speed variable instantly back to 0.
  * **Purpose of the Exercise**:
    - To understand that **states are persistent and safety checks are run for every step**.
  * **What the Student Learns**:
    - Safety checks are continuous. You must depress the footbrake to bring the speed back to 0.
  * **Tutor Check Question**: *"How did we stop the vehicle in our sequence? What command did we use to bring speed back to 0?"*
 
#### 🔍 Phase C | Assessment & Debugging: Auditing Logs (01:30 - 01:50)
* **What the Tutor Explains**:
  - When systems fail, they output debug logs. Learning to read logs is 90% of a developer's day.
  - Introduce **Error Propagation**: When one early step fails, all subsequent steps fail too.
* **Diagnostic Walkthroughs**:
  - **Log Case A**: `💥 CRITICAL ERROR: Attempted to start engine without depressing footbrake! Starter safety switch locked.`
    - *Tutor Ask*: *"What is the root cause? How do we fix it?"* (Depress footbrake pedal before starting engine).
  - **Log Case B**: `💥 CRITICAL ERROR: Shift lock engaged! You cannot shift gear selector out of P/N without depressing the brake pedal.`
    - *Tutor Ask*: *"Why is the shift lock engaged? What step did we forget?"* (Depress footbrake before shifting).
  - **Log Case C**: `💥 CRITICAL ERROR: Gas pedal pressed while handbrake is engaged! Friction smoked the pads, engine stalled.`
    - *Tutor Ask*: *"Why did the vehicle stall?"* (Release handbrake before pressing gas).
 
---
 
### 3. Socratic Prompting
* **Mapping to Exercise 1.1 (Basic Start & Move)**:
  * *Tutor Prompt*: *"What is the safety precondition that must be met before an automatic car lets you start the ignition?"* (Depress brake pedal and check P/N gear).
  * *Explanation*: Direct them to the safety preconditions of ignition systems.
 
* **Mapping to Exercise 1.2 (Reversing & Parking)**:
  * *Tutor Prompt*: *"Look at the initial setup log. The engine is already running and the brake is held. What gear do we shift to if we want to reverse out of a bay?"*
  * *Explanation*: Guide them to understand initial system preconditions and mapping movements to gears.
  
* **Mapping to Exercise 1.3 (Sequence Correction & Debugging)**:
  * *Tutor Prompt*: *"Look at the terminal logs on the right. Why did the ignition fail on step 3?"*
  * *Explanation*: Direct student's eyes to log messages to debug using the arrow buttons.
 
* **Mapping to Exercise 1.4 (Code Cleanup)**:
  * *Tutor Prompt*: *"Why did the car drive backwards? Which extra card did we have to delete to make the sequence clean?"*
  * *Explanation*: Reinforce code cleanup and removing redundant steps.
 
* **Mapping to Exercise 1.5 (Emergency Halt)**:
  * *Tutor Prompt*: *"How did we bring the speed from 25 mph down to 0 mph? Which pedal control did we trigger?"*
  * *Explanation*: Emphasize safety state checks during emergency shutdowns.
 
### 4. Homework Evaluation Checklist (Grants +50 XP)
* The student must document a microwave warming process in the Prompt Journal:
  * **System Preconditions**: powerState must be "ON" (active electrical current).
  * **Inputs**: Keypad duration text/string (e.g. "01:30"), door sensor (Boolean Yes/No), start button.
  * **Process**: Count down timer seconds in a loop, verify power state active, check door sensor status mid-cycle (halt if opened).
  * **Outputs**: Activate magnetron heating waves, countdown timer display value, audio speaker alarm beeps when finished.

---

## Session 2: "Designing the Game Track: HTML & Nesting"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: DOM Tree Construction Game
* **00:15 - 00:35 | Board Lesson**: HTML Tags, Elements, and DOM Nesting Architecture
* **00:35 - 01:00 | Design Phase**: Visualizing the Game Layout on Paper
* **01:00 - 01:30 | Sandbox Lab**: Assembling the Track and Car Elements
* **01:30 - 01:50 | Assessment**: Nesting Audit Exercise
* **01:50 - 02:00 | Ethics Discussion**: Semantic HTML and Screen Readers Accessibility

### 1. Board Lesson Talking Points
* **The DOM Tree Structure**: Explain the Document Object Model as a family tree. The `body` is the grandparent, the `div` track container is the parent, and the player and obstacle cars are sibling children nested inside it.
* **HTML Elements Anatomy**: Explain opening tags, closing tags, attributes (classes/IDs), and content.
* **Nesting and Scope**: Explain that a nested element is visually bound by its parent. If the track container moves, all nested cars move with it.

### 2. Socratic Prompting
* *"If we close the track container tag BEFORE declaring the player car tag, are they still parent and child? Where is the car in the DOM tree?"* (No, they become siblings. The car is no longer inside the track container).
* *"Why do we use classes for cars but an ID for the track?"* (Classes are for reusable categories of things, IDs are for unique elements).

### 3. Digital Sandbox Exercises & Solutions

Students must complete the following 10 sandbox exercises structured as AI-Era workflow loops:

* **Exercise 2.1: [Plan & Design] Game Arena Skeleton**: Specify container structures for `#game-track` holding `#player-car`.
  * *Solution:* Write `game-track > player-car` in comments.
* **Exercise 2.2: [Write AI Prompt] Requesting the Track**: Draft a prompt asking an AI to create a div element with ID 'game-track'.
  * *Solution:* "Create a div container with an ID of game-track"
* **Exercise 2.3: [Review & Explain] Selector Audits**: Explain which attribute uniquely identifies this track element.
  * *Solution:* ID value: `game-track`
* **Exercise 2.4: [Test & Break] Spotting Rendering Leaks**: Correct an unclosed tag bug in the track block: `<div id="game-track"><div id="player-car"></div>`.
  * *Solution:* `<div id="game-track"><div id="player-car"></div></div>`
* **Exercise 2.5: [Iterate & Improve] Spawning Dividers**: Nest a div element with class 'lane-divider' inside the '#game-track' container.
  * *Solution:* `<div id="game-track"><div id="player-car"></div><div class="lane-divider"></div></div>`
* **Exercise 2.6: [Plan & Design] Dashboard HUD**: Plan a 3-level deep tag structure: a dashboard parent holding an h2 header, which holds a span.
  * *Solution:* `div > h2 > span`
* **Exercise 2.7: [Write AI Prompt] Score HUD Prompting**: Write a prompt to direct the AI to generate the scoreboard HUD block.
  * *Solution:* "Create a scoreboard dashboard panel showing score heading h2 with score-val span inside"
* **Exercise 2.8: [Review & Explain] HTML Structure Audit**: Review if the span tag is nested inside the h2 tag.
  * *Solution:* Type `YES` or `NO` (Correct answer is `YES`).
* **Exercise 2.9: [Test & Break] Spotting Selector Failures**: Spot why scoreboard updates fail (wrong ID name spelling `scoreval` vs `score-val`).
  * *Solution:* Correct ID to `score-val` inside the span tag.
* **Exercise 2.10: [Iterate & Improve] Merging the Document**: Combine scoreboard dashboard and game-track HTML blocks into a single valid file.
  * *Solution:* Merge dashboard div and track div blocks with proper closing tags.

* **Homework Evaluation Checklist**: Student must document a 3-level deep nested HTML structure representing a parking garage (Garage ➔ Floor ➔ Bay ➔ Car).

---

## Session 3: "Styling the Highway: CSS Layouts & Coordinates"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Match CSS Selectors to Visual Elements
* **00:15 - 00:35 | Board Lesson**: CSS Box Model, Coordinates, Relative vs. Absolute Positioning
* **00:35 - 01:00 | Design Phase**: Layout Coordinate Mapping
* **01:00 - 01:30 | Sandbox Lab**: Styling the Road, Lanes, and Car Sprites
* **01:30 - 01:50 | Assessment**: Position Offset Debugging
* **01:50 - 02:00 | Ethics Discussion**: Standardized Layouts & User Interfaces Inclusivity

### 1. Board Lesson Talking Points
* **Coordinate Systems**: Top-left of the screen is `(0, 0)`. X increases to the right, Y increases downwards.
* **Relative vs. Absolute Positioning**:
  - `position: relative` on a parent (the track) anchors the viewport coordinate space.
  - `position: absolute` on children (the cars) lets us position them precisely using `top`, `bottom`, `left`, and `right` relative to that parent container boundary.

### 2. Socratic Prompting
* *"Why does the car fly off to the top-left of the browser window if we forget relative positioning on the track container?"* (Because absolute elements look for the nearest positioned ancestor; if none is found, they align to the body window).
* *"If the track is 390px wide with 3 lanes of 130px each, and the car snaps to lane positions 0, 130, and 260, what is the maximum left coordinate value before the car drives off the right edge?"* (260px, the rightmost lane position).

### 3. Digital Sandbox Exercises & Solutions

Students must complete the following 10 sandbox exercises structured as AI-Era workflow loops:

* **Exercise 3.1: [Plan & Design] Dark Arena Specs**: Define width (390px), height (500px), and background-color (#333) specs for the track container.
  * *Solution:* List 390px, 500px, and #333 in comment blocks.
* **Exercise 3.2: [Write AI Prompt] Styling the Track**: Draft a prompt requesting the styling specifications for '#game-track'.
  * *Solution:* "Style game-track with width 390px, height 500px, background dark gray"
* **Exercise 3.3: [Review & Explain] Selectors Review**: Identify Class selectors (.) vs ID selectors (#) symbols.
  * *Solution:* ID: `#`, Class: `.`
* **Exercise 3.4: [Test & Break] Drifting Cars Debugger**: Fix the coordinate drift by adding relative positioning on `#game-track`.
  * *Solution:* Add `position: relative;` to the `#game-track` rule.
* **Exercise 3.5: [Iterate & Improve] Dashed Lanes**: Style lane dividers with position absolute and dashed borders.
  * *Solution:* `.lane-divider { position: absolute; height: 100%; border-left: 2px dashed white; }`
* **Exercise 3.6: [Plan & Design] Car Offsets**: Map out absolute coordinates for centering the player car in the middle lane.
  * *Solution:* Bottom 20px, left 165px.
* **Exercise 3.7: [Write AI Prompt] Positioning the Car**: Write a prompt to position the player car at bottom 20px and left 165px.
  * *Solution:* "Style player-car with absolute positioning, bottom 20px, left 165px"
* **Exercise 3.8: [Review & Explain] Bounding Boxes**: Review if obstacle car top 50px left 40px coordinates are on the left or right side of the track.
  * *Solution:* Answer `LEFT`.
* **Exercise 3.9: [Test & Break] Invisible Elements**: Temporarily override `.hidden` helper styles to reveal display elements for rendering checks.
  * *Solution:* Change `display: none;` to `display: flex;` in the `.hidden` class rule.
* **Exercise 3.10: [Iterate & Improve] HUD Flex Alignment**: Align dashboard HUD horizontally using flexbox parameters.
  * *Solution:* Apply `display: flex; justify-content: space-between; padding: 10px;` to `#dashboard`.

* **Homework Evaluation Checklist**: Student must style a car element positioned exactly in the right-hand lane of a 390px track using absolute CSS coordinates.

---

## Session 4: "Car State Variables: Primitive Types"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Data Types Classification Game
* **00:15 - 00:35 | Board Lesson**: Primitive Types, Declarations (`let`, `const`), and State Tracking
* **00:35 - 01:00 | Design Phase**: State Chart Mapping
* **01:00 - 01:30 | Sandbox Lab**: Declaring Positions, Speeds, and Score Metrics
* **01:30 - 01:50 | Assessment**: Value Shadowing Diagnostics
* **01:50 - 02:00 | Ethics Discussion**: Immutable Data Security in Transactions

### 1. Board Lesson Talking Points
* **Let vs. Const**: Use `let` for values that change (car coordinates, score). Use `const` for values that remain static (track width, car dimensions, API keys).
* **JS Primitive Types**: Numbers (coordinates, speed), Strings (player names, active states), Booleans (game active toggle).

### 2. Socratic Prompting
* *"Should the player car's Y coordinate be declared with let or const? Why?"* (It should be const if the car only moves horizontally left/right, but let if it can move up and down).
* *"What happens if we declare gameActive = "yes" as a string instead of true as a Boolean? What security logic leaks does this present?"* (Booleans are strict binary flags. Strings are mutable, prone to spelling errors, and consume more memory).

### 3. Digital Sandbox Exercises & Solutions
* **Exercise 4.1 (State Declarations) Solution**:
  ```javascript
  let carX = 130;
  let score = 0;
  let gameActive = true;
  const trackWidth = 390;
  const carWidth = 60;
  ```
- **Exercise 4.2 (Spawning Speeds) Solution**:
  ```javascript
  let obstacleSpeed = 5;
  let obstacleY = -100;
  ```
* **Homework Evaluation Checklist**: Verify student declared three variables tracking game progress with correct types (`let`, `const`) in the Prompt Journal.

---

## Session 5: "Steering Controls: Keydown Event Listeners"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Intercepting Inputs Keyboard Mapping
* **00:15 - 00:35 | Board Lesson**: Event Listeners, Key Codes, and State Updates
* **00:35 - 01:00 | Design Phase**: Inputs Routing Diagrams
* **01:00 - 01:30 | Sandbox Lab**: Key Press Triggers Steering Motion
* **01:30 - 01:50 | Assessment**: Event Target Verification
* **01:50 - 02:00 | Ethics Discussion**: Software Layout Controls Standards for Left-Handed Players

### 1. Board Lesson Talking Points
* **Event Listeners**: Explaining browser loops. The browser listens for actions and passes an event object payload containing the key name.
* ** Stepping the State**: When "ArrowLeft" is detected, we decrement `carX` by a speed offset variable.

### 2. Socratic Prompting
* *"Why does the car only move when we press keys? How does the browser know WHICH key was pressed?"* (The browser registers key events and sends key payload variables `event.key`).
* *"If the car snaps between lanes that are 130px apart, how do we write the variable updates for steering right and left?"* (`carX += 130` and `carX -= 130`).

### 3. Digital Sandbox Exercises & Solutions
* **Exercise 5.1 (Event bindings) Solution**:
  ```javascript
  window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      carX -= 130;
    }
    if (event.key === "ArrowRight") {
      carX += 130;
    }
  });
  ```
- **Exercise 5.2 (Coordinates Update Log) Solution**:
  ```javascript
  console.log("Steered! New position: " + carX);
  ```
* **Homework Evaluation Checklist**: Verify student writes event listener bindings and registers ArrowLeft/ArrowRight key events.

---

## Session 6: "Boundary Clamps: Conditional Bounds Checks"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Clamping Coordinates Paper Exercises
* **00:15 - 00:35 | Board Lesson**: Conditionals (`if`, `else if`, `else`) and Logical Operators
* **00:35 - 01:00 | Design Phase**: Boundary Flowcharts
* **01:00 - 01:30 | Sandbox Lab**: Restricting Player Car to Track Lanes
* **01:30 - 01:50 | Assessment**: Clamping Boundary Verification
* **01:50 - 02:00 | Ethics Discussion**: Safety Clamps in Aircraft Autopilots

### 1. Board Lesson Talking Points
* **Clamping**: Ensuring coordinates do not exceed limits. If player coordinates slip below lower bound, force them back to the edge limit.
* **If/Else Statements**: Executing specific code paths when logic expressions resolve to true.

### 2. Socratic Prompting
* *"What happens if the player holds the ArrowLeft key indefinitely? How do we write a conditional guard check preventing carX from slipping below 0?"* (Check `if (carX < 0) { carX = 0; }`).
* *"Why is the right-hand boundary 260 instead of 390? How do we calculate it?"* (390 - 130 = 260. The rightmost lane position is one lane-width in from the track edge, so the car stays within the track).

### 3. Digital Sandbox Exercises & Solutions
* **Exercise 6.1 (Clamping Position Checks) Solution**:
  ```javascript
  if (carX < 0) {
    carX = 0;
  }
  if (carX > 260) {
    carX = 260; // Rightmost lane position (390px track - 130px lane width)
  }
  ```
- **Exercise 6.2 (Boundary Speed Alert) Solution**:
  ```javascript
  if (carX === 0 || carX === 260) {
    console.log("Boundary reached!");
  }
  ```
* **Homework Evaluation Checklist**: Student writes conditional code clamping coordinates bounds inside `[0, 260]` and logs warning messages.

---

## Session 7: "Spawning Obstacles: Loops & Dynamic Lists"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Repeat Calculations Loop Traces
* **00:15 - 00:35 | Board Lesson**: Loops (`for` and `while`), Iterators, and Grid Generation
* **00:35 - 01:00 | Design Phase**: Obstacles Spawn Sequence Diagrams
* **01:00 - 01:30 | Sandbox Lab**: Scrolling Obstacles Arrays and Lanes Spawning
* **01:30 - 01:50 | Assessment**: Infinite Loop Debugging
* **01:50 - 02:00 | Ethics Discussion**: Spam Control Loops in Network Routers

### 1. Board Lesson Talking Points
* **Loops**: Automating repetitive tasks. A loop executes a block of instructions a fixed number of times using an index tracker.
* **Dynamic Coordinate Updates**: Shifting obstacle coordinates downwards inside a loop simulating road motion.

### 2. Socratic Prompting
* *"Why do we use loop indexes to update coordinate increments? What happens if our loop has no exit condition?"* (It triggers an infinite loop and crashes the browser tab).
* *"How do we make the obstacle warp back to the top of the track when it reaches the bottom?"* (Check `if (obstacleY > 600) { obstacleY = -100; }`).

### 3. Digital Sandbox Exercises & Solutions
* **Exercise 7.1 (Obstacle Scroll Loop) Solution**:
  ```javascript
  for (let i = 0; i < 5; i++) {
    obstacleY += obstacleSpeed;
    if (obstacleY > 600) {
      obstacleY = -100;
      obstacleX = Math.floor(Math.random() * 3) * 130; // Random lane: 0, 130, or 260
    }
  }
  ```
- **Exercise 7.2 (Warping Obstacle coordinates) Solution**:
  ```javascript
  function resetObstacle() {
    obstacleY = -100;
    obstacleX = Math.floor(Math.random() * 3) * 130; // Snap to lane: 0, 130, or 260
  }
  ```
* **Homework Evaluation Checklist**: Verify student writes a loop updating coordinate lists and warping off-screen elements.

---

## Session 8: "Refactoring: Modular Functions & Code Scope"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Variable Scoping Match
* **00:15 - 00:35 | Board Lesson**: Function Declarations, Scopes, Parameters, and Code Cleanups
* **00:35 - 01:00 | Design Phase**: Function Interfaces Diagrams
* **01:00 - 01:30 | Sandbox Lab**: Refactoring Movement Rules into Functions
* **01:30 - 01:50 | Assessment**: Scope Variable Leak Audit
* **01:50 - 02:00 | Ethics Discussion**: Code Readability and Open Source Contributions

### 1. Board Lesson Talking Points
* **Modular Functions**: Explaining code reuse. Packaging logic blocks into callable modules.
* **Variable Scopes**: Global variables are accessible everywhere. Local variables declared inside functions are isolated and deleted after execution.

### 2. Socratic Prompting
* *"Why do we pass parameters to functions instead of using global variables everywhere?"* (Because global variables can be modified by any script block, leading to hard-to-trace bugs. Parameters keep functions isolated and safe).
* *"If a variable is declared inside a function, can we read its value on the global script?"* (No, it is locally scoped and inaccessible outside).

### 3. Digital Sandbox Exercises & Solutions
* **Exercise 8.1 (Reset game state function) Solution**:
  ```javascript
  function resetGame() {
    carX = 130;
    obstacleY = -100;
    score = 0;
    gameActive = true;
  }
  ```
- **Exercise 8.2 (Updating car coordinates function) Solution**:
  ```javascript
  function steerPlayer(direction) {
    if (direction === "left") {
      carX -= 130;
    } else if (direction === "right") {
      carX += 130;
    }
    clampPlayer(); // Call helper function
  }
  ```
* **Homework Evaluation Checklist**: Verify student defines helper functions with inputs parameters and local variable declarations.

---

## Session 9: "The Racing Game Loop: Timers & Animations"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Frames vs Timers Match
* **00:15 - 00:35 | Board Lesson**: The Browser Game Loop, requestAnimationFrame, and Updates Timing
* **00:35 - 01:00 | Design Phase**: Game Loop Sequence Flowcharting
* **01:00 - 01:30 | Sandbox Lab**: Coding the continuous draw loop
* **01:30 - 01:50 | Assessment**: Thread Locking Diagnostic
* **01:50 - 02:00 | Ethics Discussion**: Refresh Rate limits in Assistive UIs

### 1. Board Lesson Talking Points
* **The Animation Loop**: Explain that games are animations drawn 60 times a second. We clear coordinates, run updates, and redraw elements.
* **requestAnimationFrame**: Directs the browser engine to run updates before rendering the next display frame.

### 2. Socratic Prompting
* *"Why does using a while loop for game updates lock the browser tab, but requestAnimationFrame runs smoothly?"* (A while loop blocks the execution thread. requestAnimationFrame yields control back to the browser between frames).
* *"If gameActive becomes false, how do we halt our animation loop?"* (By wrapping requestAnimationFrame calls in a conditional `if (gameActive)` check).

### 3. Digital Sandbox Exercises & Solutions
* **Exercise 9.1 (Main loop assembly) Solution**:
  ```javascript
  function gameLoop() {
    if (gameActive) {
      updateObstacles();
      verifyCollisions();
      drawArena();
      requestAnimationFrame(gameLoop);
    }
  }
  ```
- **Exercise 9.2 (Difficulty Increments Interval) Solution**:
  ```javascript
  setInterval(function() {
    if (gameActive) {
      obstacleSpeed += 1;
      score += 10;
    }
  }, 2000); // Increase difficulty every 2 seconds
  ```
* **Homework Evaluation Checklist**: Verify student logs continuous coordinate updates inside animation functions loops.

---

## Session 10: "Collision Detection: Auditing AI Overlap Math"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Coordinate Overlaps Math Checks
* **00:15 - 00:35 | Board Lesson**: Axis-Aligned Bounding Box (AABB) Overlap Logic Equations
* **00:35 - 01:00 | Design Phase**: Collision Conditional Flowcharting
* **01:00 - 01:30 | Sandbox Lab**: Coding Bounding Boxes Collision Sensors
* **01:30 - 01:50 | Assessment**: Overlap Checks Bug Hunt (Seeded Errors)
* **01:50 - 02:00 | Ethics Discussion**: Validation Tests in Autonomous Emergency Braking Systems

### 1. Board Lesson Talking Points
* **AABB Collision Math**: Explain that two boxes overlap if and only if their boundaries intersect in both X and Y axes.
* **Intersection Check**: Show how 4 boundary conditions combine (`rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x...`).

### 2. Socratic Prompting
* *"If the player car is at X=130 and the obstacle is at X=130, and both are 60px wide, do they overlap horizontally?"* (Yes, 130 < 130 + 60 AND 130 + 60 > 130).
* *"Why must all 4 coordinate checks be true to register a collision?"* (If even one check is false, the boxes do not overlap in that axis, meaning they are separated).

### 3. Digital Sandbox Exercises & Solutions
* **Exercise 10.1 (Collision Math check) Solution**:
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
      alert("Crashed! Final Score: " + score);
    }
  }
  ```
* **Homework Evaluation Checklist**: Student writes a validation function returning Boolean status based on bounding coordinates.

---

## Session 11: "The Dashboard & High-Score Counter: DOM Operations"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: DOM Selection Match
* **00:15 - 00:35 | Board Lesson**: Document Selectors, innerText Manipulation, and Visibility Styling
* **00:35 - 01:00 | Design Phase**: DOM Data Pipelines diagrams
* **01:00 - 01:30 | Sandbox Lab**: Wiring Code States variables to Visual HTML Dashboard
* **01:30 - 01:50 | Assessment**: UI Selector Bugs Diagnostics
* **01:50 - 02:00 | Ethics Discussion**: User Privacy Limits on Public Leaderboard Names

### 1. Board Lesson Talking Points
* **The Document API**: Explain that JavaScript acts as a manipulator using selectors like `document.getElementById("score-val")`.
* **Dynamic Styles**: Changing visual attributes like CSS display overrides (`style.display = "block"`) to unhide layout sections.

### 2. Socratic Prompting
* *"Why does the scoreboard show score: -5? What guard check should we add to prevent values from slipping below 0?"* (Check `if (score < 0) { score = 0; }` before updating scoreboard).
* *"How does the DOM represent a bridge between code variables and visual HTML elements?"* (JavaScript queries elements by ID and mutates properties like `.innerText`).

### 3. Digital Sandbox Exercises & Solutions
* **Exercise 11.1 (Score updates DOM) Solution**:
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
* **Homework Evaluation Checklist**: Check selectors syntax, and ensure validation checks block negative integers.

---

## Session 12: Level 1 Assessment & Graduation

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Review criteria checklists
* **00:15 - 01:00 | Digital Assessment Part A**: Layout Builder (HTML, CSS positioning, variables, constraints)
* **01:00 - 01:45 | Assessment Part B**: Game Walkthrough & Defense (Malicious QA audit)
* **01:45 - 02:00 | Assessment Part C**: Logic Tracing & Debugging Challenge

### 1. Tutor Guidance: Evaluation Solutions
* **Part A (Blueprint Check)**: Verify the student mapped HTML tag structures (`game-track`, `player-car`), CSS layouts, JS variables, and lane boundaries.
* **Part B (Defense Check)**: Verify collision checks and clamping values at `carX = 0` and `carX = 260`.
* **Part C (Diagnostic Check)**: Student must debug overlap math and correct boundary signs.
* **Take-Home Evaluation**: Verify self-reflection logs on variables, coordinate updates, and DOM interactions.
