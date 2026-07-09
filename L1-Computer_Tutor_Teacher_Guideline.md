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

Students complete 10 sandbox exercises structured as AI-Era workflow loops. All 10 use the **same code editor**, but *what you type into it depends on the `[step tag]` in the exercise title.* This is the single most common point of confusion — read this key first:

> **📝 Answer-Type Key (applies to every session's exercises)**
> - **[Plan & Design]** → Type a **plain-English / arrow-notation plan** *inside* the `/* … */` comment. **Not code.**
> - **[Write AI Prompt]** → Type **plain-English prompt text** (the instruction you would give Cursor/ChatGPT). **Not code.**
> - **[Review & Explain]** → Type a **short plain-text answer** — a value, `YES`/`NO`, or `LEFT`/`RIGHT`.
> - **[Test & Break]** → Type **corrected code** (edit the pre-loaded broken snippet).
> - **[Iterate & Improve]** → Type **new/extended code**.
>
> The **Model Answer** shown per exercise below is exactly what the app's validator accepts as correct. Any equivalent phrasing that contains the required keywords also passes.

* **Exercise 2.1: [Plan & Design] Game Arena Skeleton** — Plan the container hierarchy: `#game-track` holds `#player-car`.
  * *Editor expects:* Plain-English arrow plan (inside the comment).
  * *Model answer:* `game-track > player-car`
  * *Why this is Plan & Design:* You are **not building anything yet** — you are sketching the blueprint of which box goes inside which box, before a single HTML tag is written. Engineers decide structure first, then code it. The `>` is just shorthand borrowed from CSS meaning *"parent contains child."* So `game-track > player-car` reads as *"the player-car sits **inside** the game-track."* This forces the student to think about nesting (from Session 1's DOM-tree lesson) before they get lost in tag syntax.
* **Exercise 2.2: [Write AI Prompt] Requesting the Track** — Draft a prompt asking the AI to create the track container, giving it both an `id` and a `class`.
  * *Editor expects:* Plain-English prompt. The student describes what they want to **see** — a "box"/"container" — since the HTML tag `div` hasn't been taught hands-on yet. (Validator accepts `box`, `container`, or `div`; must still contain `create`, `id`, `game-track`.)
  * *Model answer:* `Create a box with an id of game-track and a class of game-container`
  * *Live Preview:* The **Interactive Live Preview** always sits one step ahead of the Code Editor. Because this step's editor holds a *prompt* (not markup), after the student clicks **Verify** the preview shows the **HTML code the AI would generate** — `<div id="game-track" class="game-container"></div>` — displayed as source. (In the later code-editing steps such as E2.4, the editor holds real HTML, so the preview instead shows it *rendered* as a screen. Prompt → code; code → screen.)
  * *Why:* This is the AI-Era skill at its most beginner-friendly — a student who knows **no HTML vocabulary yet** should still be able to command the AI by describing the *outcome* they want to see ("a box"). They keep the naming concepts they *have* met (`id`, `class`), but they do **not** need to know the tag name `div` to write a good prompt — the AI translates "box" into the correct tag (as the preview reveals). This is deliberate **scaffolding**: plain language now, the real tag name is earned in E2.3. A vague prompt like "make a track" is still too loose; naming the id and class keeps it precise.
* **Exercise 2.3: [Review & Explain] Selector Audits** — Given `<section class='game-container' id='game-track'>`, name the attribute value that uniquely identifies it.
  * *Editor expects:* A short plain-text value.
  * *Model answer:* `game-track` (the ID value — an ID is unique, a class is not).
  * *Why:* This is where the vocabulary is **earned.** In E2.2 the student asked for a "box"; here they see what the AI actually produced — a real HTML tag (`<section>`, a box-type element) carrying the `id` and `class` they requested. The teachable moment: *"the 'box' you described is written in code as a tag — here it's `<section>`; the most common box tag is `<div>`."* From this point on, the student knows the word `div` and later prompts can use it directly. The exercise's own question then trains judgment: of the two attributes, the answer is `game-track` because an **id is unique** (only one element can have it, so JavaScript can reliably find it), whereas a `class` can be shared by many elements — the reasoning behind "IDs for unique things, classes for repeated things."
* **Exercise 2.4: [Test & Break] Spotting Rendering Leaks** — Fix the unclosed tag in `<div id="game-track"><div id="player-car"></div>`.
  * *Editor expects:* Corrected HTML code.
  * *Model answer:* `<div id="game-track"><div id="player-car"></div></div>`
  * *Why:* Every `<div>` you open must be closed with a `</div>`. The broken code opens **two** divs but closes only **one**, so the browser never knows where `game-track` ends and the layout "leaks." The student learns to test AI-generated code and catch missing closing tags — the most common HTML bug.
* **Exercise 2.5: [Iterate & Improve] Spawning Dividers** — Nest a `lane-divider` div inside `#game-track`, below the player car.
  * *Editor expects:* Extended HTML code.
  * *Model answer:* `<div id="game-track"><div id="player-car"></div><div class="lane-divider"></div></div>`
  * *Why:* "Iterate" means **take working code and add one more feature** without breaking it. The new `lane-divider` div goes *inside* the track (so it scrolls with the track) and *after* the player car.
  * *Two questions students always ask here:*
    - **"Why use a `div` to make a line?"** A `div` is a **blank, meaning-less box** — unlike `<h2>` (a heading) or `<button>` (a button), it has no built-in look or purpose. That's exactly why it's the right tool for a purely *visual* piece like a lane marking: you take an empty box and let **CSS shape it** into whatever you need — here, CSS gives it `width: 2px; height: 100%;` and a dashed border, turning the box into a thin vertical line. The `div` is the raw material; the CSS is the shaping. (A lane line isn't "a heading" or "a paragraph," so a neutral `div` — not a semantic tag — is the correct choice.) *This is also why the preview only shows a line once styled: an unstyled empty `div` has no size and is invisible.*
    - **"Why is it a `class` and not an `id`?"** A real track has **many** lane dividers (this game uses two — at the 130px and 260px lane edges — and could have more). An **`id` must be unique**, so it can only ever label one element; a **`class` is made to be shared**, so every divider carries `class="lane-divider"` and a *single* CSS rule (`.lane-divider { … }`) styles all of them at once. Rule of thumb (from E2.3): **id = the one unique thing; class = a repeated category of things.**
* **Exercise 2.6: [Plan & Design] Dashboard HUD** — Plan a 3-level-deep structure: a dashboard box holding a heading, which holds the score number.
  * *Editor expects:* Plain-English arrow plan (inside the comment). **No tag names required** — describe the pieces, not the HTML.
  * *Model answer:* `dashboard > heading > score number`
  * *Why:* Same blueprint-first thinking as 2.1, but now **three levels deep**. This exercise used to require the literal words `h2` and `span` — but those tags aren't taught until **E2.8**, and E2.7 (the very next exercise) already deliberately avoids requiring them for exactly that reason. Asking for `h2`/`span` here, one step earlier, contradicted that. Now the plan captures the same nesting idea — box → heading → number — in words the student already has, and the exact tags get named later, at the moment they're actually earned.
* **Exercise 2.7: [Write AI Prompt] Score HUD Prompting** — Prompt the AI to generate the scoreboard HUD.
  * *Editor expects:* Plain-English prompt. Use the word **`div`** for the container (you learned it in E2.3), but describe the inner parts plainly — a **heading** and a **score area**. (Validator needs `dashboard` **or** `scoreboard`, a box word (`div`/`box`/`container`), a heading word (`heading`/`h2`/`title`), and `score-val`.)
  * *Model answer:* `Create a dashboard div containing a heading, with a small score area of id score-val inside the heading` — or equivalently, `Create a scoreboard using div for heading, with small score area from id of score-val inside the heading` (both `dashboard` and `scoreboard` are accepted; the actual HTML `id` is always `dashboard`, not `scoreboard`).
  * *Live Preview:* After **Verify**, the preview shows the HTML code the AI generates — `<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div>` — as source (prompt → code).
  * *Why (scaffolding in action):* This is where the earlier plain-language step **pays off**. In E2.2 the student called the container a "box"; now that E2.3 has taught them the real tag, they use **`div`** directly — *introduce the word plainly, then use it once it's learned.* The inner tags `h2`/`span`, however, have only just been *named in the E2.6 plan* and aren't seen in real code until E2.8, so the student still describes them in plain words ("a heading," "a score area") and lets the AI choose the tags. They must still write `score-val` exactly, because later JavaScript searches for that id to update the score.
  * *A question students always ask here — "Why is only the outer box a `div`? Isn't the heading a `div` too?"* Look closely at the generated result: there is only **one** `div` — the outer `dashboard`. The heading is an `<h2>`, a completely different, *semantic* tag, not a div.
    - **Why `<h2>` and not a `div` for the heading?** Because a heading has real meaning — "this text is a title." `<h2>` tells the browser (and screen readers) *"this is a heading"* and gets automatic bold/large styling for free. A `div` has zero built-in meaning or look (as seen with the lane-divider in E2.5) — you'd have to manually rebuild everything `<h2>` already gives you. **Rule: use the semantic tag that matches your intent; only fall back to a blank `div` when nothing fits** (like a purely visual line).
    - **Then why wrap the heading in a `div` at all — why not place `<h2>` straight on the page?** Because the dashboard needs to be **one movable, stylable panel** — a single box with its own background, border, padding, and position (the actual HUD look). The preview's canned CSS already styles `#dashboard` this way: `padding: 8px; background-color: #1a1a2e; border-radius: 6px; border: 1px solid #333;`. A bare `<h2>` has no "panel" to hold that styling — it's just floating text. Wrapping it in a `div` gives one named target (`#dashboard`) that can be positioned/styled as a unit, even as more elements (a timer, lives count) are added inside it later — they'd all move and style together. This mirrors `#game-track` wrapping `#player-car`: an **outer generic box provides structure/position; the meaningful content sits inside it.**
    - **In short:** `div` = the panel/frame (generic box, shaped by CSS) · `h2` = the meaningful content inside it (a real heading, styled automatically by the browser). One div, one h2 — not two divs.
* **Exercise 2.8: [Review & Explain] HTML Structure Audit** — Given `<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div>`, is the span nested inside the h2?
  * *Editor expects:* `YES` or `NO`.
  * *Model answer:* `YES` (the span opens and closes within the h2 bounds).
  * *Why:* The student verifies the AI actually followed the 2.6 plan. Reading left to right: `<h2>` opens, then `<span>` opens and closes (`</span>`), then `</h2>` closes. Because the span both starts and ends *before* the h2 closes, it is genuinely nested inside — answer `YES`. This trains the eye to trace nesting boundaries.
* **Exercise 2.9: [Test & Break] Spotting Selector Failures** — The JS looks for `score-val` but the HTML says `scoreval`. Fix the ID.
  * *Editor expects:* Corrected HTML code.
  * *Model answer:* `<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div>`
  * *Why:* A one-character mismatch (`scoreval` vs `score-val`) means the JavaScript can't find the element, so the score never updates on screen — yet nothing "errors" loudly. The student learns that **names must match exactly** between HTML and the code that targets it. This is the classic "it looks fine but nothing happens" bug.
* **Exercise 2.10: [Iterate & Improve] Merging the Document** — Combine the dashboard and track blocks into one valid file (dashboard, score-val, game-track, player-car, lane-divider all present and closed; ≥4 closing `</div>` tags).
  * *Editor expects:* Full HTML code.
  * *Model answer:*
    ```html
    <div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div>
    <div id="game-track">
      <div id="player-car"></div>
      <div class="lane-divider"></div>
    </div>
    ```
  * *Why:* The final "iterate" step assembles all the separate pieces built across 2.1–2.9 into one working page. The validator checks that every required element is present **and** every div is properly closed (4+ `</div>` tags) — proving the student can combine parts without leaving a tag open. This is the complete HTML skeleton (Roadmap Part 1) that Sessions 3–12 will style and animate.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** is a separate deliverable from the Sandbox exercises above: it tracks the student's **real project file** (`index.html`, built on their own machine with an external AI tool), logged step-by-step across the same 5-step methodology, one milestone card per session ("Part 1: HTML Document Skeleton" for this session). Below is what a **complete, correct** entry should contain in each of the 5 boxes.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "A highway-view racing screen: a vertical road area taking up most of the screen, with a small scoreboard panel above it showing the score. The player's car will later sit on the road — for now we're just building the empty containers, no colors or positions yet."
   - *System Parts & Information (expected):* "Parts needed: a road area, a player's car, a lane divider line, and a scoreboard panel showing the score. Information to track (for later sessions): the score, how fast the car is going, and whether the game is currently running."
   - *Logic Flow / Pseudocode (expected):* "Browser loads index.html sequentially. DOM elements are created in memory in a parent-child hierarchy. Parent containers constrain child positions."
   - *Why:* Real system design starts with the **experience**, not the tags. Before any technical structure is decided, the student describes *what the player sees and does* (Visual Concept), then *what pieces the system needs and what it must remember* (System Parts & Information) — **in plain language, with no tag names, CSS properties, or typed variable syntax.** That last constraint is deliberate, not just a style choice: this session's students haven't been taught JS variables or types yet (that's Session 4), so asking for `score: Number` here would demand syntax they don't have. Plain language ("I need to track the score") captures the same system-design thinking — *what components exist, what information matters* — without assuming knowledge the student hasn't reached. The technical form (exact tags, exact variable declarations) only shows up later, once the AI prompt and code review steps translate the plan into real syntax.

2. **Write AI Prompt**
   - *Expected prompt:* "Draft an AI prompt asking to create an HTML document containing: a div container with an ID of 'game-track'; a child div nested inside 'game-track' with an ID of 'player-car'; and a separate scoreboard panel with an ID of 'dashboard' containing an h2 heading and a nested span with an ID of 'score-val' initialized to '0'. Avoid inline styles or Javascript logic at this stage."
   - *Why:* Notice the closing constraint — *"avoid inline styles or JavaScript."* A strong prompt actively **excludes work belonging to later sessions**. Since Session 2 is HTML-only, the prompt should be scoped to exactly this milestone, not "build the whole game" in one shot.

3. **Review & Explain**
   - *Expected checklist, walked against the AI's real output:* all tags open/close correctly (especially divs); `player-car` is nested inside `game-track`; the scoreboard uses `id="score-val"` (not a class, not misspelled).
   - *Expected Socratic answer* — *"Why must the score value be placed inside a span tag? How does nesting it allow JavaScript to change it later?"* → A `span` is a small, isolated inline container; nesting the number inside it gives JavaScript **one exact element** (`#score-val`) to target and overwrite (`element.innerText = score`) without disturbing the surrounding "Score:" label text.
   - *Why:* Mirrors sandbox E2.8's nesting-check reasoning, generalized to auditing the whole file.

4. **Test & Break**
   - *Expected test checklist (verified in the browser, e.g. via DevTools → Elements):* `#game-track` exists in the DOM; `#player-car` is a child of `#game-track`; `#dashboard` exists; `#score-val` is inside `#dashboard` and displays `0`.
   - *Why:* These are the same four structural facts named in the Milestone Objectives — Test & Break is where the student **proves** their real file satisfies them, a first taste of the QA process formalized in Session 12.

5. **Iterate & Improve**
   - *Expected answer:* "If the initial AI output lacks semantic elements or is missing closing tags, write a follow-up prompt to clean it up. Plan to add a '.lane-divider' inside the track to represent lanes."
   - *Why:* Mirrors sandbox E2.5's iterate step — the AI's *first* pass rarely includes the lane-divider (it was never explicitly requested in Step 2's prompt), so a strong student notices the gap and writes a **follow-up prompt** rather than accepting incomplete output.

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

Students complete 10 sandbox exercises structured as AI-Era workflow loops. As in Session 2, *what to type depends on the `[step tag]`* — see the **📝 Answer-Type Key** in Session 2 (Plan/Prompt steps = plain English inside the `/* */` comment; Test/Iterate steps = real CSS code; Review steps = a short answer). The **Model Answer** per exercise is exactly what the app's validator accepts.

* **Exercise 3.1: [Plan & Design] Dark Arena Specs** — Plan the track's width, height, and background color, in plain language.
  * *Editor expects:* Plain-English spec list (inside the comment) — how wide, how tall, what color. **No CSS units or hex codes required.**
  * *Model answer:* `Width: 390 wide, Height: 500 tall, Color: dark gray`
  * *Why this is Plan & Design:* Before styling, the student **decides the numbers** the design needs — but this exercise used to require the literal strings `390px` and `#333`, which meant knowing CSS's pixel-unit and hex-color notation *before it had appeared anywhere in the curriculum* (this is the very first exercise of the session). The width (390, holding exactly 3 lanes of 130) and the color (a dark gray road) are decisions the student can make and state in plain words; the `px` unit and the `#333` hex code are how that decision gets *written in CSS*, which is exactly what E3.2 (Write AI Prompt) and E3.4 (Test & Break) teach next. Writing the target values down in plain language first means the coding step becomes "translate the plan," not "guess the syntax too."
* **Exercise 3.2: [Write AI Prompt] Styling the Track** — Prompt the AI to style the game-track box, in plain language.
  * *Editor expects:* Plain-English prompt describing what you want to **see** — how wide, how tall, what color. The CSS property names haven't been taught hands-on yet. (Validator needs `game-track`, a width (`390`/`wide`/`width`), a height (`500`/`tall`/`height`), and a background (`background`/`gray`/`dark`).)
  * *Model answer:* `Make the game-track box 390 wide, 500 tall, with a dark gray background`
  * *Live Preview:* This is a **CSS** prompt, so after **Verify** the preview shows the CSS code the AI generates — `#game-track { width: 390px; height: 500px; background-color: #333; }` — as source. (In the CSS code-editing steps like E3.4, the preview instead *renders* the styling applied to the track/car skeleton. Prompt → code; code → screen.)
  * *Why (scaffolding in action):* The student converts the 3.1 plan into an AI instruction **without needing the CSS jargon**. They describe the outcome — "390 wide, 500 tall, dark gray" — and let the AI translate that into the real properties (`width`, `height`, `background-color`). Those property names are introduced hands-on shortly after, when the student edits raw CSS in **E3.4**; from that point on, later prompts can name them directly. This keeps the very first CSS prompt approachable for a student who has never written a style rule.
* **Exercise 3.3: [Review & Explain] Selectors Review** — State the CSS symbols for an ID selector vs a Class selector.
  * *Editor expects:* Short plain-text answer containing `#` and `.`.
  * *Model answer:* `ID selector: #   Class selector: .`
  * *Why:* CSS needs a way to point at HTML elements. A `#` before a name targets the one element with that **id** (`#game-track`); a `.` targets **every** element with that **class** (`.lane-divider`). Mixing them up is why student styles "don't apply" — so this cements the two symbols before they write real rules.
* **Exercise 3.4: [Test & Break] Drifting Cars Debugger** — The absolute-positioned car drifts to the top of the screen because `#game-track` has no positioning anchor. Add one.
  * *Editor expects:* Corrected CSS code (add `position: relative;`).
  * *Model answer:*
    ```css
    #game-track {
      width: 390px;
      height: 500px;
      background-color: #333;
      position: relative;
    }
    ```
  * *Why:* An element with `position: absolute` measures its `top`/`left` from the nearest **positioned** ancestor. If the track isn't marked `position: relative`, the car measures from the whole browser window instead and flies to the corner. Adding `position: relative` to the track makes it the anchor, so the car's coordinates stay *inside* the track. This parent-anchors-child rule is the backbone of the whole game layout.
* **Exercise 3.5: [Iterate & Improve] Dashed Lanes** — Style `.lane-divider` with absolute position, full height, 2px width, and a dashed left border.
  * *Editor expects:* CSS code.
  * *Model answer:*
    ```css
    .lane-divider {
      position: absolute;
      height: 100%;
      width: 2px;
      border-left: 2px dashed white;
    }
    ```
  * *Why:* This turns a plain dark box into a road. `height: 100%` makes the divider span the full track top-to-bottom; `border-left: 2px dashed white` draws the familiar dashed lane line. It uses `.` (a class) because a road has many dividers — reinforcing 3.3's class-vs-id rule.
* **Exercise 3.6: [Plan & Design] Car Offsets** — Plan the offsets to center the player car in the middle lane of a 390px track.
  * *Editor expects:* Plain-English plan containing `20px` and `165px`.
  * *Model answer:* `Bottom offset: 20px, Left offset: 165px`
  * *Why:* Pure positioning math, done on paper before coding. `bottom: 20px` sits the car just above the bottom edge (like a driver's viewpoint). `left: 165px` centers a 60px-wide car in a 390px track: `(390 − 60) ÷ 2 = 165`. Planning the numbers means the student understands *why* 165, not just copies it.
* **Exercise 3.7: [Write AI Prompt] Positioning the Car** — Prompt the AI to position the player car, now using the CSS term you've learned.
  * *Editor expects:* Prompt that **does** use the technical word `absolute` (plus `player-car`, `bottom`, `left`).
  * *Model answer:* `Style player-car with absolute positioning at bottom 20px and left 165px`
  * *Live Preview:* After **Verify**, the preview shows the generated CSS as source — `#player-car { position: absolute; bottom: 20px; left: 165px; }` (prompt → code).
  * *Why (scaffolding payoff):* This is the **"now use the keyword" end of the ramp.** Unlike E3.2 (where CSS jargon was still avoided), the term `absolute` has by now been taught hands-on — the student added `position: relative` in **E3.4** and wrote `position: absolute` in **E3.5** — so here they are expected to *use* it deliberately. `absolute` positions the car relative to the track (the anchor from E3.4); `bottom` and `left` carry the exact offsets planned in E3.6. Every planned decision shows up as a precise word in the prompt — the goal state of prompt-writing once the vocabulary is earned.
* **Exercise 3.8: [Review & Explain] Bounding Boxes** — An obstacle sits at `top: 50px; left: 40px;`. Which side of the track is it on?
  * *Editor expects:* `LEFT` or `RIGHT`.
  * *Model answer:* `LEFT` (a 40px left offset is near the left edge).
  * *Why:* The student reads coordinates and pictures where the element lands. `left: 40px` means 40px in from the left edge of a 390px track — well under the halfway point (195px) — so it is on the **LEFT**. This spatial reading is what they'll need to reason about collisions in Session 10.
* **Exercise 3.9: [Test & Break] Invisible Elements** — The restart panel is hidden by `.hidden { display: none; }`. Override it to be visible for layout testing.
  * *Editor expects:* Corrected CSS code.
  * *Model answer:*
    ```css
    .hidden {
      display: flex;
    }
    ```
  * *Why:* `display: none` removes an element from the page completely — useful for a "Game Over" panel that should stay hidden until the crash, but a problem when you need to *see* it while building. Switching to `display: flex` reveals it for layout testing. The student learns that "invisible" is often a style choice, not a missing element — a key debugging instinct.
* **Exercise 3.10: [Iterate & Improve] HUD Flex Alignment** — Align the dashboard scores horizontally with flexbox.
  * *Editor expects:* CSS code.
  * *Model answer:*
    ```css
    #dashboard {
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }
    ```
  * *Why:* Flexbox is the modern way to arrange items in a row. `display: flex` lays the dashboard's children side by side; `justify-content: space-between` pushes them to opposite ends (e.g. label on the left, score on the right); `padding: 10px` adds breathing room. This polishes the scoreboard from Session 2 into a real HUD.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

As in Session 2, the **Project Journal** milestone card ("Part 2: CSS Sizing & Coordinates Layout") tracks the student's real `styles.css`, separate from the Sandbox exercises above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "A dark 2-lane-divider highway (390px wide, 500px tall) with a white dashed line down the middle. A red car sits near the bottom-center of the road. The scoreboard sits above the road as a small horizontal bar."
   - *System Parts & Information (expected):* "Parts needed: the road (sized to fit the screen), the car (positioned near the bottom, centered in a lane), and the lane divider (running down the middle). Information to track: the road's size, the car's position, and how wide each lane is."
   - *Logic Flow / Pseudocode (expected):* "Parent relative positioning establishes coordinate system origin (0,0) at top-left. Child absolute positioning uses (left, top, bottom, right) parameters relative to parent bounds."
   - *Why:* Same milestone-wide planning as Session 2, now for coordinates instead of tags. The Visual Concept line is written first for the same reason as Session 2's: describe the *look* (dark road, red car, dashed line) before deriving the *coordinates* that produce it. **System Parts & Information deliberately stays free of CSS syntax** — no `position: relative`, no exact pixel values written as code — because it names *what exists* (the road, the car, the divider) and *what needs sizing/positioning*, in plain words, before the AI prompt and code review steps translate that into real CSS property names and pixel values.

2. **Write AI Prompt**
   - *Expected prompt:* "Draft an AI prompt to style the game HTML elements: target '#game-track' with width 390px, height 500px, background-color '#333', and relative positioning. Style '#player-car' with absolute positioning, bottom 20px, left 165px (to center it inside a 390px track), and red background. Style '.lane-divider' to run down the center with dashed borders."
   - *Why:* Unlike the sandbox's E3.2 (which deliberately stays in plain language), the *milestone* prompt is expected to be fully technical — the student has completed the sandbox's scaffolded exercises 3.1–3.10 by this point, so the real project prompt should demonstrate the earned vocabulary (`position: relative`, `absolute`, `background-color`) in one complete request.

3. **Review & Explain**
   - *Expected checklist:* `#game-track` has `position: relative` (else the absolute children drift); `#player-car` is `position: absolute`.
   - *Expected Socratic answer* — *"What happens if `#game-track` loses `position: relative`? Which coordinate box will the browser calculate offsets against?"* → Without a positioned ancestor, `#player-car`'s `absolute` offsets are calculated against the **browser window/body** instead of the track, so it visually "flies" to the corner — the same failure sandbox E3.4 has the student fix directly.

4. **Test & Break**
   - *Expected test checklist:* `#game-track` measures 390px × 500px; `#player-car` sits at `bottom: 20px, left: 165px`; `.lane-divider` uses a dashed `border-left`; `#dashboard` uses flex layout with `space-between`.
   - *Why:* These map one-to-one to the Milestone Objectives — Test & Break is where the student confirms, in the real browser, that every planned number actually landed correctly.

5. **Iterate & Improve**
   - *Expected answer:* "Audit element visibility. If elements overlap or are hidden, check display/position definitions. Adjust contrasts and symbols for colorblind accessibility."
   - *Why:* Introduces **accessibility as a real iteration criterion**, not just "does it work" — connects to this session's own Ethics Discussion topic (*Standardized Layouts & User Interfaces Inclusivity*) and previews the `.hidden`/`display` debugging skill from sandbox E3.9.

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
