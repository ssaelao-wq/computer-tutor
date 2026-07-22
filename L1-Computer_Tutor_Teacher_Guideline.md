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

## 🏎️ Level 1 Racing Car Theme: Standalone Lab Track (Sessions 2–12)

> **Restructure note (2026-07-13):** Level 1 is a *technical knowledge* level. The Racing Car theme frames every exercise and lab, but students do **not** build one cumulative game project across sessions — the full game build is deferred to Levels 3–4 (development process + capstone). Each session's lab below is a **standalone themed artifact**: when a lab exercises a concept from an earlier session, the tutor provides a fresh starter file, so no student depends on carrying their own project forward. The "Project Journal Milestone" sections throughout this guideline now describe each session's *standalone lab*, logged through the same 5-step workflow — the expected code and answers are unchanged.

The lab track, aligned to each session's core concept:
- **Lab 1 (Session 2)**: *HTML Document Skeleton* — Base containers (Track Arena, Player Car, Dashboard Panel).
- **Lab 2 (Session 3)**: *CSS Sizing & Coordinates Layout* — Sizing '#game-track', absolute position '#player-car' and styled road dividers with white dashes.
- **Lab 3 (Session 4)**: *Difficulty-Scaling State System* — Variables for position state, speed metrics, score registers, and a lives count, plus a student-designed score-driven difficulty rule. (Trial of a reduced 5-exercise/3-box Sandbox format — see the Session 4 section below.)
- **Lab 4 (Session 5)**: *Keyboard Control Interfaces* — Keydown listeners registering steering moves (WASD/Arrows).
- **Lab 5 (Session 6)**: *Safety Guards & Boundary Clamps* — Boundary checks clamping coordinates to keep the player on the road.
- **Lab 6 (Session 7)**: *Obstacle Loop Generation* — Spawning oncoming obstacle cars dynamically using loops.
- **Lab 7 (Session 8)**: *Modular Control Functions* — Refactoring movement logic into modular update functions.
- **Lab 8 (Session 9)**: *Timer Loops & Animations* — requestAnimationFrame recursive loops for redraw rendering.
- **Lab 9 (Session 10)**: *Collision Detection Overlap Math* — Mathematical overlap bounding checks triggering crash states.
- **Lab 10 (Session 11)**: *DOM HUD Visual Updates* — Score states wired to DOM text updates and restart prompts.
- **Lab 11 (Session 12)**: *Config Polish & Final Assessment* — Config-driven tunables, reset handlers, and live defense QA reviews on the assessment labs.

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

## Session 2: "Starting the Game: HTML Structure & Basic Elements"

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
  * *Why:* The final "iterate" step assembles all the separate pieces built across 2.1–2.9 into one working page. The validator checks that every required element is present **and** every div is properly closed (4+ `</div>` tags) — proving the student can combine parts without leaving a tag open. This is the complete HTML skeleton (Lab 1) — the same structure later sessions' fresh starter files are based on.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** is a separate deliverable from the Sandbox exercises above: it tracks the student's **standalone session lab file** (`lab_s2_skeleton.html`, built on their own machine with an external AI tool), logged step-by-step across the same 5-step methodology, one lab card per session ("Lab 1: HTML Document Skeleton" for this session). Labs are self-contained — later sessions get a fresh tutor-provided starter rather than building on this file. Below is what a **complete, correct** entry should contain in each of the 5 boxes.

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
   - *Expected Socratic answer* — *"Why must the score value be placed inside a span tag? How does nesting it allow JavaScript to change it later?"* → A `span` is a small, isolated inline container; nesting the number inside it gives JavaScript **one exact element** (`#score-val`) to target and overwrite (`element.textContent = score`) without disturbing the surrounding "Score:" label text.
   - *Why:* Mirrors sandbox E2.8's nesting-check reasoning, generalized to auditing the whole file.

4. **Test & Break**
   - *Expected test checklist (verified in the browser, e.g. via DevTools → Elements):* `#game-track` exists in the DOM; `#player-car` is a child of `#game-track`; `#dashboard` exists; `#score-val` is inside `#dashboard` and displays `0`.
   - *Why:* These are the same four structural facts named in the Milestone Objectives — Test & Break is where the student **proves** their real file satisfies them, a first taste of the QA process formalized in Session 12.

5. **Iterate & Improve**
   - *Expected answer:* "If the initial AI output lacks semantic elements or is missing closing tags, write a follow-up prompt to clean it up. Plan to add a '.lane-divider' inside the track to represent lanes."
   - *Why:* Mirrors sandbox E2.5's iterate step — the AI's *first* pass rarely includes the lane-divider (it was never explicitly requested in Step 2's prompt), so a strong student notices the gap and writes a **follow-up prompt** rather than accepting incomplete output.

* **Homework Evaluation Checklist**: Student must document a nested HTML structure representing a garage dashboard — a sidebar container and a main container, each holding nested child panels (matching the Session 2 homework brief).

---

## Session 3: "Styling the Track & Player Car: CSS Lanes & Visuals"

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

As in Session 2, the **Project Journal** milestone card ("Part 2: CSS Sizing & Coordinates Layout") tracks the student's standalone session lab stylesheet (fresh tutor-provided starter, not a carried-forward project), separate from the Sandbox exercises above.

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

## Session 4: "Tracking Game State: JS Variables & Math"

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

**Format note (Session 4 trial):** Session 4 is running a trial of a new, reduced sandbox format — **5 exercises** instead of 10, each with **3 input boxes** rather than one: (1) **Plan & Design**, (2) **Writing Prompt** and **Output Code** side by side, (3) **Explain the Output Code**. There is no separate Test & Break / Iterate & Improve step in the UI for this session — running the pasted Output Code live and explaining what it actually did covers both. The student pastes the *real* code their AI tool generated into Output Code (not a typed "model answer" like other sessions), so grading is a hybrid: "Verify" requires all 3 boxes to be filled in **and** a lightweight keyword check on the prompt/output/explanation text (not exact string matching, since real AI output varies). **Note on the live preview:** the preview no longer shows the racing-game track/car graphic used elsewhere in Level 1 — this session's code is variables & math only and never touches the DOM, so a car image would never change regardless of what the student wrote. Instead the preview panel is a **Console Output** box showing only real `console.log`/error text captured from running the pasted code; some exercises legitimately produce no printed output at all (declarations with no `console.log` are still a valid, complete answer — a blank Console Output is not a failure state here).

* **Exercise 4.1: The Core State Variables** — Declare `carX` (165), `speed` (0), `score` (0), `gameActive` (false).
  * *Plan box expects:* which values change vs. stay fixed during play (all four change here — nothing fixed yet).
  * *Prompt box must mention:* `let`, `carX`, `165`.
  * *Output Code box must include:* `let` declarations for `carX`, `speed`, `score`, `gameActive` (correct Number/Boolean types, no quotes).
  * *Explain box must cover:* why all four are `let` rather than `const` (they change during play).
  * *Why:* Same design thinking as the old plan/prompt pair, now inside one exercise: name what changes, ask the AI for it with real starting values, and paste back the actual result instead of typing a model answer into a shared box.
* **Exercise 4.2: Constants and the Lives Count** — Add `const TRACK_WIDTH`/`LANE_WIDTH` and a `let lives = 3` — the lives count is new; no earlier drill covers it.
  * *Plan box expects:* naming the fixed values (track/lane width) and what `lives` starts at and whether it changes.
  * *Prompt box must mention:* `const`, `lives`, `3`.
  * *Output Code box must include:* a `const` declaration plus `lives`.
  * *Explain box must cover:* why `TRACK_WIDTH`/`LANE_WIDTH` are `const` while `lives` is `let`, even though `3` looks like a fixed number.
  * *Why:* Tests that "starts at a fixed-looking number" isn't the same as "never changes" — `lives` will decrement on a crash in a later session.
* **Exercise 4.3: Math Increments on Game State** — `score++` (or `score += 1`) and `speed += 10`, logged to the console.
  * *Plan box expects:* a plain-language description of how `score`/`speed` change — the specific amounts ("up by 1"/"up by 10") are expected, not just "they increase."
  * *Prompt box must mention:* `score`, `speed`, `console.log`.
  * *Output Code box must include:* `score++`/`score += 1` and `speed += 10`.
  * *Explain box must predict:* the resulting values — `score = 1`, `speed = 10` (starting from 0).
  * *Why:* Predicting a result by *reading* code before running it is the core Review skill; the pasted Output Code's console.log then lets the student confirm their own prediction against a real run, not a hypothetical.
* **Exercise 4.4: The Quoted-Number Bug Hunt** — `let speed = "10"; speed += 5;` produces `"105"` instead of `15`. Fix it.
  * *Plan box expects:* in the student's own words, why a quoted `"10"` behaves differently from a plain `10` in math.
  * *Prompt box must mention:* `speed` plus one of `number`/`quote`/`string`.
  * *Output Code box must include:* the corrected declaration, `let speed = 10;` (no quotes).
  * *Explain box must mention:* both the buggy result (`"105"`) and the fixed result (`15`).
  * *Why:* This is the session's signature bug made concrete: with a String, `+=` glues text instead of adding. Seeing the wrong and right outputs side by side (both named in the explanation) is what makes "data types matter" stick better than any lecture.
* **Exercise 4.5: The Complete Variable Registry** — Assemble every declaration from the session (`carX`, `speed`, `score`, `gameActive`, `lives`, `TRACK_WIDTH`, `LANE_WIDTH`) into one registry. **Declarations only — no math or increments this time** (that was already proven in 4.3).
  * *Plan box expects:* the full list of what to declare and which is `let` vs `const`.
  * *Prompt box must mention:* `let`, `const`, `lives`.
  * *Output Code box must include:* all seven declarations, correctly typed, no quoted numbers, **no math statements**.
  * *Explain box must cover:* why each one is `let` vs `const`.
  * *Why:* Deliberately narrowed to declarations-only so this exercise's answer doesn't double as a ready-made solution to the Project Task below — the Project Task is the only place in this session that asks the student to design and defend their own conditional logic. A copy-paste from this exercise into the Project Task will visibly be missing that entire layer.

* **Homework Evaluation Checklist**: All 3 boxes filled in per exercise; Output Code pastes read like real AI output (not the sandbox's own placeholder text); Explain boxes name the *reason*, not just the result (e.g. E4.4's explanation should say *why* the quotes broke the math, not just restate "105 became 15").

### 4. Project Task Milestone — Expected Student Answers (Session 4 trial format)

**Format note:** Session 4's Project Task also uses the trial 3-box format (not the standard 5-tab Plan/Prompt/Review/Test/Iterate layout every other session uses) — **Plan & Design**, **Prompt & Output Code** (with a live Console Output panel, the same execution sandbox as the exercises above), and **Explain the Code**. The milestone card is "Lab 4: Difficulty-Scaling State System."

Unlike the sandbox exercises (which hand the student every value to declare), this task is deliberately open-ended: extend the session's registry with **one new value the student designs themselves** — e.g. a `difficultyLevel` — that changes once `score` crosses a threshold the student picks, and that visibly affects another value (commonly `speed`). No exercise spells out the exact rule, so a straight copy of Exercise 4.5's registry does **not** satisfy this task on its own — it's missing the entire conditional-logic layer being graded here.

1. **Plan & Design** (single box)
   - *Expected:* the student names their own new value (e.g. `difficultyLevel`), states what score threshold triggers it, and what it should affect and by how much — e.g. "every 50 points, difficultyLevel goes up by 1, and speed increases by 5 per level."
   - *Why:* there's no single correct threshold — grading is on whether the student made and can defend a real decision, not on matching a specific number.

2. **Prompt & Output Code** (side by side, with live Console Output below)
   - *Expected prompt:* describes the student's own rule in plain language and asks the AI to implement it as an extension of the existing registry (`carX`, `speed`, `score`, `gameActive`, `lives`).
   - *Expected Output Code:* a new `let` value plus a conditional (`if`) that checks `score` against the student's chosen threshold and updates another value — pasted from what the AI actually generated, then run live in the Console Output panel to confirm it actually executes/prints as expected.
   - *Why:* the AI can write the code, but only the student can supply the design decision (which threshold, which effect) — that's the part a generic prompt can't produce on its own.

3. **Explain the Code**
   - *Expected:* the student walks through their own conditional in plain words and defends their threshold choice.
   - *Expected Socratic answer* — *"What happens to your rule if score can jump by more than 1 at a time (e.g. a bonus of +5)?"* → A plain `===` threshold check can be skipped over entirely; the fix is a `>=` comparison (or an explicit "already triggered" flag) so the rule still fires even if score jumps past the exact threshold value.

* **Homework Evaluation Checklist**: the new value is genuinely the student's own design (a threshold/effect not lifted from Exercise 4.5), it's declared with `let` (since it changes), it visibly affects a second value when run in the Console Output panel, and the explanation defends the student's specific numbers rather than restating the assignment.

---

## Session 5: "Steering the Car: JS Keydown Event Listeners"

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

Students complete 10 sandbox exercises structured as AI-Era workflow loops. As in Session 2, *what to type depends on the `[step tag]`* — see the **📝 Answer-Type Key** in Session 2 (Plan/Prompt steps = plain-language plan or prompt inside the `/* */` comment; Test/Iterate steps = real JavaScript; Review steps = a short answer). The **Model Answer** per exercise is exactly what the app's validator accepts. Only the **Test & Break** and **Iterate & Improve** steps run live in the preview (click the preview, then press the arrow keys to steer); Plan/Prompt/Review steps show a "nothing to run yet" note. (Note: Session 4 is running a separate 5-exercise/3-box trial format with its own Console Output preview — see that session's own section; this Session 5 lab is unaffected and still uses the standard 10-exercise/[step tag] format.)

* **Exercise 5.1: [Plan & Design] Reading the Key Pressed** — Plan how the browser reports which key was pressed.
  * *Editor expects:* Plain-language description of how the browser reports the key (no `event.key` syntax required; the `keydown > event.key` form is still accepted).
  * *Model answer:* `when a key is pressed, the keydown event reports which key it was` (form `keydown > event.key` also accepted)
  * *Why:* The session rests on one fact: a keypress fires a `keydown` event and the key's name arrives with it. The student can state that pathway in plain words before writing `event.key` by hand — the syntax is earned at the prompt/review steps, so this plan step isn't gated on notation the student hasn't practiced yet.
* **Exercise 5.2: [Write AI Prompt] Requesting the Listener** — Prompt for a keydown listener that logs the key.
  * *Editor expects:* Plain-English prompt. Validator needs `addEventListener`, `keydown`, and `console.log`.
  * *Model answer:* `Bind a keydown event listener to the window that logs event.key to the console`
  * *Why:* `addEventListener` is how code says "run my function every time this happens." Asking to log the key first (before wiring movement) is a deliberately small, verifiable first step — confirm the listener fires at all before trusting it to move anything.
* **Exercise 5.3: [Review & Explain] The Event Parameter** — Which callback parameter carries the key info?
  * *Editor expects:* One word.
  * *Model answer:* `event`
  * *Why:* The browser fills the callback's `event` parameter with a fresh object describing each keypress. Recognizing that the parameter name is just a handle to that object — and that `event.key` reads from it — is the mental model behind all DOM event code.
* **Exercise 5.4: [Test & Break] The Silent Input Fail** — `if (event.key === "left")` never fires. Fix the key string.
  * *Editor expects:* Corrected JavaScript.
  * *Model answer:* `if (event.key === "ArrowLeft") { carX -= 130; }`
  * *Why:* Browsers report the arrow keys as the exact strings `"ArrowLeft"`/`"ArrowRight"`, never `"left"`. A wrong string makes the comparison always-false — no error, just nothing happens. Learning to check the *exact* reported value is a core debugging reflex.
* **Exercise 5.5: [Iterate & Improve] Logging the Other Direction** — Add an `else if` branch for ArrowRight.
  * *Editor expects:* JavaScript. Validator needs `ArrowRight` and `console.log`.
  * *Model answer:* `else if (event.key === "ArrowRight") { console.log("Steering right"); }`
  * *Why:* `else if` adds a second, mutually-exclusive branch — the browser checks ArrowLeft first, then ArrowRight only if the first failed. This is the standard shape for handling multiple keys and scales to any number of controls.
* **Exercise 5.6: [Plan & Design] Steering Deltas** — Plan the exact ± amount per keypress.
  * *Editor expects:* Plain-language plan of the per-press movement (no `carX -= 130` syntax required; the technical form is still accepted).
  * *Model answer:* `left press moves the car 130 to the left; right press moves it 130 to the right` (technical `carX -= 130 | carX += 130` also accepted)
  * *Why:* Lanes are 130px apart, so one press must move the car exactly one lane. Deciding the delta (130) on paper keeps the car snapping cleanly between lanes rather than drifting by arbitrary amounts.
* **Exercise 5.7: [Write AI Prompt] Wiring Movement to the DOM** — Prompt to connect `carX` to the visible car.
  * *Editor expects:* Plain-English prompt. Validator needs `carX`, `style.left`, `ArrowLeft`, and `ArrowRight`.
  * *Model answer:* `When ArrowLeft or ArrowRight is pressed, update #player-car style.left to match carX`
  * *Why:* Changing `carX` only updates a number in memory — nothing moves until that number is written into the element's `style.left`. This prompt closes the gap between *state* (the variable) and *view* (the pixels on screen), the central idea of DOM-driven UI.
* **Exercise 5.8: [Review & Explain] Why 'px'?** — Why concatenate `"px"` onto `carX`?
  * *Editor expects:* One word — the CSS unit.
  * *Model answer:* `px`
  * *Why:* CSS position values are meaningless without a unit. `carX` is a bare number (165); `carX + "px"` builds the string `"165px"`, which is what the style engine actually accepts.
* **Exercise 5.9: [Test & Break] The Missing Unit** — `style.left = carX;` (no unit) makes the car vanish. Fix it.
  * *Editor expects:* Corrected JavaScript.
  * *Model answer:* `carElement.style.left = carX + "px";`
  * *Why:* A unit-less number is invalid CSS, so the browser discards the whole rule and the car falls back to its default position — a silent failure with no console error. This is the practical payoff of the E5.8 concept.
* **Exercise 5.10: [Iterate & Improve] The Complete Steering Handler** — Assemble the full working handler.
  * *Editor expects:* Full JavaScript.
  * *Model answer:*
    ```javascript
    window.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft") {
        carX -= 130;
      } else if (event.key === "ArrowRight") {
        carX += 130;
      }
      document.getElementById("player-car").style.left = carX + "px";
    });
    ```
  * *Why:* This is the real steering control the rest of the game reuses — listener, key branch, `carX` update, and the `style.left` write, unified in one handler. Assembling it correctly is the session's milestone competency.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

As in Session 2, the **Project Journal** milestone card ("Part 4: Keyboard Control Interfaces") tracks the student's standalone session lab script (fresh tutor-provided starter, not a carried-forward project), separate from the Sandbox exercises above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "Same red car on the dark road — but now pressing the LEFT and RIGHT arrow keys slides the car sideways between lanes, like steering."
   - *System Parts & Information (expected):* "Parts needed: a way to listen for arrow key presses. Information to track: which key was pressed, and how far the car should shift each time."
   - *Logic Flow / Pseudocode (expected):* "User presses keyboard key → keydown event fires → JavaScript captures event.key → IF key is ArrowLeft, decrease carX → update #player-car.style.left coordinate."
   - *Why:* The Visual Concept describes the first *interactive* change (the car now responds to the player). The plan then names the new capability needed — listening for key presses — and the two pieces of information it produces (which key, how far). The Logic Flow traces input → event → state change → screen update, the pipeline every later interactive feature reuses.

2. **Write AI Prompt**
   - *Expected prompt:* "Write a prompt asking to bind a keydown event listener to the window. When 'ArrowLeft' is pressed, it should subtract 130 from 'carX' and update the left position style of '#player-car' to match. When 'ArrowRight' is pressed, it should add 130 to 'carX' and update the style. Log key presses to the console."
   - *Why:* The milestone prompt specifies both keys, the exact delta (130), the DOM target (`#player-car` `style.left`), and a console check — a complete behavior spec, not just "make the car move."

3. **Review & Explain**
   - *Expected checklist:* `window.addEventListener('keydown', ...)` used correctly; the handler inspects `event.key` for the exact key strings; the style update is formatted as `carX + 'px'`.
   - *Expected Socratic answer* — *"How does the browser know a key was pressed? What is the event object?"* → The browser's event loop detects the hardware keypress and calls every registered `keydown` listener, passing a fresh **event object** whose `.key` property holds the pressed key's name — the handler reads that to decide what to do.

4. **Test & Break**
   - *Expected test checklist:* pressing ArrowLeft logs the key and updates `carX`; ArrowRight increases `carX`; `#player-car` visibly moves on screen when keys are pressed.
   - *Why:* Maps to the Milestone Objectives — Test & Break confirms the *visible* car actually moves, not just that a variable changed in memory.

5. **Iterate & Improve**
   - *Expected answer:* "Confirm that pressing keys repeatedly doesn't cause rendering locks. Plan on-screen tap controls (buttons) so the game is playable without a keyboard, for accessibility."
   - *Why:* Raises **input accessibility** — a keyboard-only control scheme excludes touch users. This ties directly to the session's Ethics Discussion on control-layout standards for left-handed and alternative-input players.

* **Homework Evaluation Checklist**: Verify the student's Project Journal shows a keydown listener that checks `event.key` against the exact `"ArrowLeft"`/`"ArrowRight"` strings and writes the updated `carX` back to `#player-car` with a `px` unit.

---

## Session 6: "Track Boundaries: JS Conditionals & Safety Guards"

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
* *"What happens if the player holds the ArrowLeft key indefinitely? How do we write a conditional guard that keeps carX from slipping past the leftmost lane (35)?"* (Wrap the move in a guard: `if (carX > 35) { carX -= 130; }` — the move is refused once carX reaches 35).
* *"Why is the rightmost lane 295 and the leftmost 35, rather than 0 and 390?"* (The car has width and sits centered in each of the 3 lanes, so its `left` coordinate never reaches the raw track edges. The lanes sit at 35, 165, and 295 — each 130px apart — which keeps the whole car body on the road).

### 3. Digital Sandbox Exercises & Solutions

Students complete 10 sandbox exercises structured as AI-Era workflow loops. As in Session 2, *what to type depends on the `[step tag]`* — see the **📝 Answer-Type Key** in Session 2 (Plan/Prompt steps = plain-language plan or prompt inside the `/* */` comment; Test/Iterate steps = real JavaScript; Review steps = a short answer). The **Model Answer** per exercise is exactly what the app's validator accepts. As in Session 4, only the **Test & Break** and **Iterate & Improve** steps run live in the preview; Plan/Prompt/Review steps show a "nothing to run yet" note.

* **Exercise 6.1: [Plan & Design] Track Boundary Coordinates** — Plan the two limits carX must stay between.
  * *Editor expects:* Plain-language plan naming the two outer limits (35 and 295).
  * *Model answer:* `the car can go from 35 on the left to 295 on the right` (form `left boundary = 35 | right boundary = 295` also accepted)
  * *Why:* A guard needs exactly two numbers — the smallest and largest legal `carX`. The three lanes sit at 35/165/295, so 35 and 295 are the outer walls. Naming them now turns "don't drive off the road" into a precise, checkable rule.
* **Exercise 6.2: [Write AI Prompt] Requesting the Left Guard** — Prompt for a guard around the ArrowLeft move.
  * *Editor expects:* Plain-English prompt. Validator needs `carX`, `ArrowLeft`, and `> 35`.
  * *Model answer:* `Wrap the ArrowLeft movement in an if that only lets carX decrease while carX > 35`
  * *Why:* A guard is an `if` wrapped around an action: run `carX -= 130` *only while* `carX > 35`. Describing the exact condition (`> 35`) in the prompt is what makes the AI produce a boundary check instead of unconditional movement.
* **Exercise 6.3: [Review & Explain] Reading the Guard Condition** — With `if (carX > 35)`, what happens at carX = 35?
  * *Editor expects:* `MOVES` or `BLOCKED`.
  * *Model answer:* `BLOCKED`
  * *Why:* `35 > 35` is false, so the inner block never runs and the car stays put. Reading a condition and predicting whether it passes at the boundary value is the exact skill that catches off-by-one bugs.
* **Exercise 6.4: [Test & Break] The Infinite Teleporting Bug** — The check was loosened to `carX >= -130`; the car drives off-screen. Fix it.
  * *Editor expects:* Corrected JavaScript (restore `carX > 35`).
  * *Model answer:* `if (carX > 35) { carX -= 130; document.getElementById("player-car").style.left = carX + "px"; }`
  * *Why:* The guard existed but pointed at the wrong number — `>= -130` keeps passing far past the edge, so carX marches into negative pixels. Fixing it teaches that a boundary check is only as good as the *value* it compares against.
* **Exercise 6.5: [Iterate & Improve] Adding the Right Guard** — Mirror the guard for ArrowRight.
  * *Editor expects:* JavaScript. Validator needs `ArrowRight`, `carX < 295`, and `carX += 130`.
  * *Model answer:* `else if (event.key === "ArrowRight") { if (carX < 295) { carX += 130; document.getElementById("player-car").style.left = carX + "px"; } }`
  * *Why:* The right guard is the mirror of the left: allow `carX += 130` only while `carX < 295`. Building the symmetric pair drives home that *every* movable direction needs its own boundary.
* **Exercise 6.6: [Plan & Design] Overheat Threshold Rule** — Plan a clamp so speed can't exceed a safe maximum.
  * *Editor expects:* Plain-language statement of the overheat rule (no code required; the pseudocode form is still accepted).
  * *Model answer:* `if speed goes over 120, reset it back to 100` (form `IF speed > 120 THEN speed = 100` also accepted)
  * *Why:* The same guard pattern, now applied to `speed` instead of position. Recognizing that a clamp is one reusable shape — "if past the limit, snap back" — whether it's lanes or speed, is the transferable idea of the session.
* **Exercise 6.7: [Write AI Prompt] Requesting the Overheat Guard** — Prompt for the speed clamp.
  * *Editor expects:* Plain-English prompt. Validator needs `speed`, `120`, and `100`.
  * *Model answer:* `If speed is greater than 120, reset it to 100 and log a warning`
  * *Why:* Naming both the trigger (120) and the reset value (100) is what pins the AI's condition to the plan. A vague "keep speed reasonable" would let the AI invent its own numbers.
* **Exercise 6.8: [Review & Explain] Boundary-Value Precision** — Does `if (speed > 120)` trigger when speed is exactly 120?
  * *Editor expects:* `YES` or `NO`.
  * *Model answer:* `NO`
  * *Why:* `>` is *strict* — 120 is not greater than 120, so the rule doesn't fire at exactly the threshold. Knowing the difference between `>` and `>=` is the whole discipline of boundary-value testing.
* **Exercise 6.9: [Test & Break] The Mars Climate Mismatch** — `speed = "100";` resets to a String. Fix the type.
  * *Editor expects:* Corrected JavaScript.
  * *Model answer:* `speed = 100;`
  * *Why:* A quoted `"100"` re-introduces the Session 4 type bug: the next `speed += ...` would concatenate text instead of adding. A clamp that fixes the value but corrupts the *type* is worse than no clamp — this ties boundary logic back to data types.
* **Exercise 6.10: [Iterate & Improve] The Complete Boundary System** — Assemble both lane guards plus the overheat clamp.
  * *Editor expects:* Full JavaScript. Validator needs `carX > 35`, `carX < 295`, `speed > 120`, and `speed = 100`.
  * *Model answer:*
    ```javascript
    if (event.key === "ArrowLeft" && carX > 35) {
      carX -= 130;
    } else if (event.key === "ArrowRight" && carX < 295) {
      carX += 130;
    }
    if (speed > 120) {
      speed = 100;
    }
    ```
  * *Why:* Left guard, right guard, and overheat clamp together form the complete rule set keeping `carX` and `speed` inside safe, playable limits — the session's milestone competency.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

As in Session 2, the **Project Journal** milestone card ("Part 5: Safety Guards & Boundary Clamps") tracks the student's standalone session lab script (fresh tutor-provided starter, not a carried-forward project), separate from the Sandbox exercises above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "Same steering car — but now it can't be steered off the edges of the road. Holding an arrow key at the edge just keeps it pinned at the outer lane instead of sliding off-screen."
   - *System Parts & Information (expected):* "Parts needed: a safety check that runs every time a key is pressed. Information to track: the leftmost and rightmost positions the car is allowed to reach."
   - *Logic Flow / Pseudocode (expected):* "IF key is ArrowLeft: IF carX > LeftLimit: carX -= 130. IF key is ArrowRight: IF carX < RightLimit: carX += 130."
   - *Why:* The Visual Concept captures the *felt* difference (the car locks at the edge instead of vanishing). The plan names the new mechanism — a check that runs on every keypress — and the two limits it needs. This is the first session where the design is a *rule* rather than a new visual element.

2. **Write AI Prompt**
   - *Expected prompt:* "Draft a prompt asking to modify the keyboard steering logic. Add conditional guards to prevent the player car from running off the road. The car must be locked inside 3 lanes (x coordinates 35px, 165px, 295px). If the user presses left, only move the car if it is not already in the leftmost lane (x = 35px)."
   - *Why:* The milestone prompt names the exact lane coordinates and states the guard condition in plain terms — enough for the AI to reproduce the boundary logic the student planned, not a generic "keep it on screen."

3. **Review & Explain**
   - *Expected checklist:* the boundary checks use the correct comparison operators (e.g. `carX > 35`, `carX < 295`); the car snaps/locks cleanly at each edge rather than overshooting.
   - *Expected Socratic answer* — *"What would happen if we used `>= 0` as the left boundary check instead of `> 35`?"* → The car could keep moving left until `carX` hit 0 — two lanes past the leftmost lane (35) — so it would visually slide off the left edge of the track. The guard's *value* matters as much as its existence.

4. **Test & Break**
   - *Expected test checklist:* from center (165), ArrowLeft moves to 35 and a second press locks (stays 35); from center, ArrowRight moves to 295 and a second press locks (stays 295).
   - *Why:* These are boundary-value tests — pressing *again at the edge* is exactly the case that separates a working clamp from a broken one, previewing the QA rigor of Session 12.

5. **Iterate & Improve**
   - *Expected answer:* "Test the boundary limits. Refine the prompt to also reject negative values or any out-of-range override, so no input can push the car off the track."
   - *Why:* Extends guarding from "the expected keys" to "any bad input," the defensive mindset behind the session's Ethics Discussion on safety clamps in aircraft autopilots.

* **Homework Evaluation Checklist**: Verify the student's Project Journal shows both lane guards (`carX > 35` and `carX < 295`) and demonstrates that pressing a direction key at the edge leaves the car pinned rather than driving off the track.

---

## Session 7: "Dashing Lanes & Highway Markers: JS Loops & Iteration"

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

Students complete 10 sandbox exercises structured as AI-Era workflow loops. As in Session 2, *what to type depends on the `[step tag]`* — see the **📝 Answer-Type Key** in Session 2 (Plan/Prompt steps = plain-language plan or prompt inside the `/* */` comment; Test/Iterate steps = real JavaScript; Review steps = a short answer). The **Model Answer** per exercise is exactly what the app's validator accepts. Live preview is limited in this session: only **E7.5** (Iterate & Improve) runs live, streaming its `console.log` marker positions (0, 120, 240, 360, 480) to the terminal. Every other step shows a "nothing to run yet" note and is fixed as static code — E7.4 (the missing-increment infinite loop) is deliberately non-runnable so it can't hang the preview, and E7.10 (write the whole loop from scratch) is kept static for the same infinite-loop safety reason.

* **Exercise 7.1: [Plan & Design] Marker Spacing Plan** — Plan how many markers and how far apart.
  * *Editor expects:* Plain-language plan of the count and spacing (5 and 120).
  * *Model answer:* `5 markers, spaced 120 apart` (form `count = 5 | spacing = 120` also accepted)
  * *Why:* A loop is defined by two numbers — how many times it runs (5) and the step per pass (120px). Fixing those before coding is what turns "repeat this" into a concrete, terminating loop.
* **Exercise 7.2: [Write AI Prompt] Requesting the Loop** — Prompt for the counting loop.
  * *Editor expects:* Plain-English prompt. Validator needs `for loop`, `i * 120`, and `5`.
  * *Model answer:* `Write a for loop that runs 5 times, computing markerY as i * 120 each iteration`
  * *Why:* The counter `i` (0,1,2,3,4) fed into `i * 120` is what spaces the markers automatically. Naming the formula in the prompt is how the AI produces evenly-spaced output instead of five identical elements.
* **Exercise 7.3: [Review & Explain] Loop Anatomy** — Which part of the header advances `i`?
  * *Editor expects:* The update expression.
  * *Model answer:* `i++`
  * *Why:* A `for` header has three parts — init (`let i = 0`), test (`i < 5`), and step (`i++`). Identifying the step is essential because forgetting it is the single most common cause of a frozen browser (E7.4).
* **Exercise 7.4: [Test & Break] Browser Freezes** — The `i++` was deleted, causing an infinite loop. Restore it.
  * *Editor expects:* Corrected JavaScript (add `i++`).
  * *Model answer:* `for (let i = 0; i < 5; i++) { let markerY = i * 120; }`
  * *Why:* With no `i++`, `i` stays 0, `i < 5` is always true, and the loop never ends — locking the whole page. Experiencing (safely, as static code) that a missing step crashes the tab makes the terminating condition unforgettable.
* **Exercise 7.5: [Iterate & Improve] Logging Each Marker** — Log the computed position each pass.
  * *Editor expects:* JavaScript. Validator needs `console.log` and `markerY`.
  * *Model answer:* `console.log("Highway Marker position: " + markerY);`
  * *Why:* One log line per pass is the quickest proof the loop runs exactly 5 times and computes 0/120/240/360/480 — turning an invisible loop into observable behavior.
* **Exercise 7.6: [Plan & Design] Rendering the Markers** — Plan how a computed number becomes a visible element.
  * *Editor expects:* Plain-language plan of create → style → place (no code required; the arrow form is still accepted).
  * *Model answer:* `for each marker, create a box, give it the marker-dash style, and place it at its top position` (form `create div > class marker-dash > style.top = markerY` also accepted)
  * *Why:* Computing `markerY` is only half the job. The plan must also spell out *create → style → attach*, the three steps that take a number and turn it into something on screen.
* **Exercise 7.7: [Write AI Prompt] Requesting the DOM Append** — Prompt to build and attach each marker.
  * *Editor expects:* Plain-English prompt. Validator needs `marker-dash`, `appendChild`, and `#game-track`.
  * *Model answer:* `Create a div with class marker-dash, set its top to markerY, and appendChild it to #game-track inside the loop`
  * *Why:* `createElement` builds the div in memory; `appendChild` is what actually inserts it into `#game-track` so the browser draws it. Omitting the append is a classic "my element exists but I can't see it" bug.
* **Exercise 7.8: [Review & Explain] Why Not Hardcode 5 Divs?** — How many lines change to go from 5 markers to 20, by hand?
  * *Editor expects:* A number (15 or more).
  * *Model answer:* `20`
  * *Why:* By hand, 20 markers means 20 written-out divs; with a loop, you change one number. Feeling that difference is the entire argument for loops — code that scales without more code.
* **Exercise 7.9: [Test & Break] The Off-Track Marker** — `markerY = i * 12` bunches the markers. Fix the formula.
  * *Editor expects:* Corrected JavaScript.
  * *Model answer:* `let markerY = i * 120;`
  * *Why:* `i * 12` yields 0/12/24/36/48 — all crammed in the top 48px; `i * 120` spreads them down the full track. One missing digit collapses the layout, a reminder to read the AI's numbers, not just its structure.
* **Exercise 7.10: [Iterate & Improve] The Complete Marker Loop** — Assemble the full generate-and-render loop.
  * *Editor expects:* Full JavaScript. Validator needs `for(...i<5...i++)`, `i * 120`, `marker-dash`, and `appendChild`.
  * *Model answer:*
    ```javascript
    const track = document.getElementById("game-track");
    for (let i = 0; i < 5; i++) {
      let markerY = i * 120;
      const dash = document.createElement("div");
      dash.className = "marker-dash";
      dash.style.top = markerY + "px";
      track.appendChild(dash);
    }
    ```
  * *Why:* Loop, compute, build, attach — the complete generate-and-render pattern the game reuses every time it spawns many elements at once. This is the session's milestone competency.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

As in Session 2, the **Project Journal** milestone card ("Part 6: Obstacle Loop Generation") tracks the student's standalone session lab script (fresh tutor-provided starter, not a carried-forward project), separate from the Sandbox exercises above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "Other cars (obstacles) now appear on the road at the top and are visible on screen alongside the player's car, scattered across the lanes."
   - *System Parts & Information (expected):* "Parts needed: several repeating lane-divider dashes down the highway. Information to track: how many dashes to create, and the vertical spacing between them."
   - *Logic Flow / Pseudocode (expected):* "FOR i from 0 to 4: calculate markerY = i * 120 → create a div with class 'lane-divider-dash' → set top = markerY, left = center → append the dash to '#game-track'."
   - *Why:* The design introduces the first *repeated* element. Rather than "what does one marker look like," the plan names the *count* and *spacing* — the two inputs a loop needs — so the AI generates the whole series programmatically instead of the student pasting divs by hand.

2. **Write AI Prompt**
   - *Expected prompt:* "Write a prompt to generate repeating highway divider lines using a JavaScript 'for' loop. The loop should run 5 times, calculating a vertical offset 'i * 120' on each iteration, creating a div element with class 'lane-divider-dash' styled absolute, and nesting it inside '#game-track'."
   - *Why:* The milestone prompt names the loop count, the spacing formula, the class, and the parent — a complete spec for programmatic generation, the technique that replaces hand-written repetition.

3. **Review & Explain**
   - *Expected checklist:* the loop has a clear terminating condition and increments its index (no infinite loop); each element's coordinate is computed from the loop index (`i * 120`), not hardcoded.
   - *Expected Socratic answer* — *"What happens to the browser call stack if the loop increment block is deleted? Why does the screen freeze?"* → Without the increment, the test condition never becomes false, so the loop body repeats forever on the single JavaScript thread — the browser can never reach the render step, so the tab freezes.

4. **Test & Break**
   - *Expected test checklist:* the loop runs exactly 5 times and appends 5 elements; the markers are spaced 120px apart (0, 120, 240, 360, 480); all 5 divider elements are visible in the DOM tree.
   - *Why:* Counting the generated elements and checking their spacing is how the student proves the loop's *count* and *math* both landed — the two things a generation loop can get wrong.

5. **Iterate & Improve**
   - *Expected answer:* "Audit the loop bounds and check CPU load. If a loop is sluggish or spawns too many elements, tighten the count or optimize the position formula."
   - *Why:* Introduces **loop cost** — every extra iteration is work — which connects to the session's Ethics Discussion on runaway/spam loops in network routers.

* **Homework Evaluation Checklist**: Verify the student's Project Journal shows a bounded `for` loop that computes each element's position from the loop index and appends the generated elements to `#game-track`, with no infinite-loop risk.

---

## Session 8: "Defining Movement & Game Functions: JS Modular Code"

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

Students complete 10 sandbox exercises structured as AI-Era workflow loops. As in Session 2, *what to type depends on the `[step tag]`* — see the **📝 Answer-Type Key** in Session 2 (Plan/Prompt steps = plain-language plan or prompt inside the `/* */` comment; Test/Iterate steps = real JavaScript; Review steps = a short answer). The **Model Answer** per exercise is exactly what the app's validator accepts. Live preview is limited in this session: only the final **E8.10** (Iterate & Improve — the complete modular controller) runs live; click the preview and press the arrow keys to steer. The earlier steps are isolated fragments (functions declared but never called), so they have no on-screen effect, show a "nothing to run yet" note, and are fixed as static code.

* **Exercise 8.1: [Plan & Design] Decomposing the Steering Script** — Plan the split into single-purpose functions.
  * *Editor expects:* Plain-language naming of the three single-purpose pieces (function names not required; the technical form is still accepted).
  * *Model answer:* `one piece to update the car's position, one to move left, one to move right` (form `updatePlayerPosition() | moveLeft() | moveRight()` also accepted)
  * *Why:* One block that does everything is hard to test or fix. Naming the three jobs — render, move-left, move-right — before coding is the decomposition skill: decide *the pieces* first, implement them second.
* **Exercise 8.2: [Write AI Prompt] Requesting the Render Function** — Prompt for the shared renderer.
  * *Editor expects:* Plain-English prompt. Validator needs `function`, `updatePlayerPosition`, and `style.left`.
  * *Model answer:* `Write a function updatePlayerPosition() that sets #player-car style.left to carX + "px"`
  * *Why:* `updatePlayerPosition()` becomes the single place that draws the car. Building it first means both movement functions can *reuse* it rather than each repeating the `style.left` write — the essence of "don't repeat yourself."
* **Exercise 8.3: [Review & Explain] Function Signatures** — How many parameters does `updatePlayerPosition()` take?
  * *Editor expects:* A number.
  * *Model answer:* `0`
  * *Why:* The empty `()` is the parameter list — this function takes no inputs because it reads the shared `carX` directly. Reading a signature to see what a function needs (and doesn't) is how you understand code you didn't write.
* **Exercise 8.4: [Test & Break] Scope Access Violation** — `carX` was declared *inside* `moveLeft()`; the renderer logs `undefined`. Fix the scope.
  * *Editor expects:* Corrected JavaScript (declare `carX` outside both functions).
  * *Model answer:* `let carX = 165;` declared *before* both `moveLeft()` and `updatePlayerPosition()`.
  * *Why:* A variable declared inside a function is local — invisible outside it. For two functions to share `carX`, it must live in an outer scope both can see. This is the single most important idea about scope, learned by hitting the bug directly.
* **Exercise 8.5: [Iterate & Improve] Wiring moveLeft() to the Handler** — Make the handler call `moveLeft()` instead of inline logic.
  * *Editor expects:* JavaScript. Validator needs `ArrowLeft` and `moveLeft()`.
  * *Model answer:* `if (event.key === "ArrowLeft") { moveLeft(); }`
  * *Why:* Once `moveLeft()` owns the boundary logic, the handler shrinks to a single call. The behavior is identical, but the logic now lives in one named place — easier to find, fix, and reuse.
* **Exercise 8.6: [Plan & Design] The moveRight() Signature** — Plan the mirror function.
  * *Editor expects:* Plain-language plan of the mirror function (no code required; the pseudocode form is still accepted).
  * *Model answer:* `if the car isn't past the right limit (295), move it right, then redraw its position` (form `moveRight() -> IF carX < 295 THEN carX += 130, then updatePlayerPosition()` also accepted)
  * *Why:* `moveRight()` mirrors `moveLeft()`: right-boundary guard, `+= 130`, then the shared redraw. Planning it as a mirror reinforces that well-decomposed functions share a common shape.
* **Exercise 8.7: [Write AI Prompt] Requesting moveLeft() and moveRight()** — Prompt for both movement functions.
  * *Editor expects:* Plain-English prompt. Validator needs `moveLeft`, `moveRight`, and `updatePlayerPosition`.
  * *Model answer:* `Write moveLeft() and moveRight(), each clamping carX to its boundary and then calling updatePlayerPosition()`
  * *Why:* Asking for both to *call the shared renderer* is the key instruction — it's what keeps rendering in one place instead of duplicated inside each mover.
* **Exercise 8.8: [Review & Explain] Why Modularize?** — With a shared clamp helper, how many function bodies need fixing for a boundary bug?
  * *Editor expects:* A number.
  * *Model answer:* `1`
  * *Why:* Shared logic means one fix, not one-per-copy. Quantifying the payoff (1 instead of 2+) makes "modularize" a concrete engineering argument, not a style preference.
* **Exercise 8.9: [Test & Break] The Duplicate Render Call** — `updatePlayerPosition()` is called twice. Remove the duplicate.
  * *Editor expects:* JavaScript with exactly one `updatePlayerPosition()` call.
  * *Model answer:* `moveLeft()` with a single `updatePlayerPosition();` at the end.
  * *Why:* Redrawing the same position twice is invisible now but doubles the work every keypress — the kind of quiet waste that matters once the 60-fps game loop arrives in Session 9.
* **Exercise 8.10: [Iterate & Improve] The Complete Modular Controller** — Assemble the full modular controller.
  * *Editor expects:* Full JavaScript. Validator needs `updatePlayerPosition`, `moveLeft`, `moveRight`, `addEventListener`, and `keydown`.
  * *Model answer:*
    ```javascript
    function updatePlayerPosition() {
      document.getElementById("player-car").style.left = carX + "px";
    }
    function moveLeft() {
      if (carX > 35) { carX -= 130; }
      updatePlayerPosition();
    }
    function moveRight() {
      if (carX < 295) { carX += 130; }
      updatePlayerPosition();
    }
    window.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft") { moveLeft(); }
      else if (event.key === "ArrowRight") { moveRight(); }
    });
    ```
  * *Why:* Renderer, two movers, and a thin handler — the same steering behavior as Session 6, now organized into named, reusable pieces the later sessions extend without touching one tangled block.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

As in Session 2, the **Project Journal** milestone card ("Part 7: Modular Control Functions") tracks the student's standalone session lab script (fresh tutor-provided starter, not a carried-forward project), separate from the Sandbox exercises above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "Screen looks identical to Session 7 — this session is a behind-the-scenes cleanup, organizing the movement code into reusable pieces without changing what the player sees."
   - *System Parts & Information (expected):* "Parts needed: none new on screen — this session reorganizes existing behavior into named, reusable pieces (move left, move right, update position). Information to track: which pieces of information each reusable piece is allowed to see and change."
   - *Logic Flow / Pseudocode (expected):* "Key pressed → call moveLeft() → update carX state → call updatePlayerPosition() → update DOM style offsets."
   - *Why:* This is a *refactoring* milestone — the honest Visual Concept says the screen is unchanged. The design work is about **structure and scope**: naming the reusable functions and deciding what each is allowed to see. It previews the idea that good code is organized for the *next* developer, not just the running browser.

2. **Write AI Prompt**
   - *Expected prompt:* "Write a prompt instructing to refactor the steering script. Modularize into functions: 'updatePlayerPosition()' to style '#player-car' left coordinate; 'moveLeft()' to clamp 'carX' and call update; and 'moveRight()' to increment, clamp, and call update. Ensure key events invoke these modular functions."
   - *Why:* A refactor prompt is unusual — it asks the AI to *reshape existing working code* without changing behavior. Naming each function and its single responsibility is what keeps the refactor disciplined rather than a rewrite.

3. **Review & Explain**
   - *Expected checklist:* functions have clean, clearly-named signatures; UI-rendering (the `style.left` write) is decoupled from the movement/clamp logic.
   - *Expected Socratic answer* — *"What happens if you try to access a variable declared inside `moveLeft()` from the main update function?"* → You can't — a variable declared inside a function is local to it, so the outer function sees `undefined` (or a ReferenceError). Shared state must live in an enclosing scope both functions can reach.

4. **Test & Break**
   - *Expected test checklist:* `updatePlayerPosition`, `moveLeft`, and `moveRight` are all declared; pressing keys runs the correct function and steering behaves *identically* to before the refactor; no local variable leaks into global `window` scope.
   - *Why:* The defining test of a refactor is "behavior unchanged" — the student proves the reorganized code does exactly what the old code did, with no new globals leaked.

5. **Iterate & Improve**
   - *Expected answer:* "Confirm the refactor changed structure only, not behavior — re-run every steering test. Keep shared state minimal and local variables truly local, so no function can accidentally corrupt another's data."
   - *Why:* Reinforces that refactoring is measured by *sameness of behavior plus better structure*, and ties scope-discipline to the session's Ethics Discussion on isolated, tamper-resistant code.

* **Homework Evaluation Checklist**: Verify the student's Project Journal shows the steering logic split into `updatePlayerPosition()`, `moveLeft()`, and `moveRight()`, with `carX` declared in a shared scope and the keydown handler reduced to simple function calls.

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

Students complete 10 sandbox exercises structured as AI-Era workflow loops. As in Session 2, *what to type depends on the `[step tag]`* — see the **📝 Answer-Type Key** in Session 2 (Plan/Prompt steps = plain-language plan or prompt inside the `/* */` comment; Test/Iterate steps = real JavaScript; Review steps = a short answer). The **Model Answer** per exercise is exactly what the app's validator accepts. As in Session 4, only the **Test & Break** and **Iterate & Improve** steps run live in the preview; Plan/Prompt/Review steps show a "nothing to run yet" note.

* **Exercise 9.1: [Plan & Design] The Game Loop Lifecycle** — Plan the repeating frame cycle.
  * *Editor expects:* Plain-language description of the repeating frame cycle (no `requestAnimationFrame` syntax required; the technical form is still accepted).
  * *Model answer:* `each frame, update the state, redraw, then schedule the next frame` (form `gameLoop() -> update -> render -> requestAnimationFrame(gameLoop)` also accepted)
  * *Why:* Every game is this one cycle: update → render → schedule the next frame. The student can describe that rhythm in plain words before meeting `requestAnimationFrame` (the session's brand-new API); naming the loop's *shape* first is the design insight, and the API name is earned at the prompt/review steps.
* **Exercise 9.2: [Write AI Prompt] Requesting the Recursive Loop** — Prompt for the self-scheduling loop.
  * *Editor expects:* Plain-English prompt. Validator needs `function`, `gameLoop`, and `requestAnimationFrame`.
  * *Model answer:* `Write a function gameLoop() that moves the obstacle, then calls requestAnimationFrame(gameLoop)`
  * *Why:* `requestAnimationFrame(gameLoop)` at the end is what makes the function loop — it books itself to run again before the next repaint. Specifying that call is the difference between a one-shot update and continuous animation.
* **Exercise 9.3: [Review & Explain] Why Call It Again?** — What does the final `requestAnimationFrame(gameLoop)` do?
  * *Editor expects:* `SCHEDULES_NEXT_FRAME` or `STOPS_THE_LOOP`.
  * *Model answer:* `SCHEDULES_NEXT_FRAME`
  * *Why:* It reschedules `gameLoop` to run again on the next screen repaint — the mechanism behind smooth 60-fps motion. Recognizing that a function can queue *itself* is the mental leap of this session.
* **Exercise 9.4: [Test & Break] The Unstoppable Speed Bug** — The `gameActive` check was removed; the loop never stops. Add the guard.
  * *Editor expects:* Corrected JavaScript (add an early return).
  * *Model answer:* `function gameLoop() { if (!gameActive) { return; } moveObstacles(); requestAnimationFrame(gameLoop); }`
  * *Why:* Without an early return when `gameActive` is false, nothing can ever halt the loop — Game Over becomes impossible. The guard clause at the top is what gives the game an off switch.
* **Exercise 9.5: [Iterate & Improve] Confirming the Gate Works** — Log a message right before the halt.
  * *Editor expects:* JavaScript. Validator needs `console.log` and `halted`.
  * *Model answer:* `console.log("Loop halted");` placed before the `return`.
  * *Why:* A log before the return turns "the loop stopped" from an invisible event into a visible, verifiable one — proof the gate actually fired.
* **Exercise 9.6: [Plan & Design] Obstacle Movement & Reset** — Plan the scroll-and-wrap behavior.
  * *Editor expects:* Plain-language plan of the scroll-and-wrap (no code required; the pseudocode form is still accepted).
  * *Model answer:* `the obstacle moves down; when it passes the bottom (500), it wraps to the top (-100) and the score goes up` (pseudocode `obstacleY += speed | IF obstacleY > 500 THEN obstacleY = -100, score += 10` also accepted)
  * *Why:* Scrolling down (`+= speed`) plus wrapping to the top (`-100`) plus scoring the pass — the three parts of endless traffic. Planning them together ensures the reset and the score bump stay linked.
* **Exercise 9.7: [Write AI Prompt] Requesting moveObstacles()** — Prompt for the movement/reset function.
  * *Editor expects:* Plain-English prompt. Validator needs `moveObstacles`, `obstacleY`, `500`, and `score`.
  * *Model answer:* `Write moveObstacles() that adds speed to obstacleY; once obstacleY exceeds 500, reset it to -100 and add 10 to score`
  * *Why:* Naming the exact bottom edge (500) and respawn point (-100) pins the wrap-around to the track's real dimensions, so the AI can't invent its own boundaries.
* **Exercise 9.8: [Review & Explain] Tracing the Update Math** — With `obstacleY = 490, speed = 5`, what is `obstacleY` after `obstacleY += speed`?
  * *Editor expects:* A number.
  * *Model answer:* `495`
  * *Why:* `490 + 5 = 495`. Tracing a single frame by hand is how you confirm the motion math *before* trusting a loop that runs it 60 times a second.
* **Exercise 9.9: [Test & Break] The Frozen Scoreboard** — The reset resets position but never scores. Add the increment.
  * *Editor expects:* Corrected JavaScript.
  * *Model answer:* `if (obstacleY > 500) { obstacleY = -100; score += 10; }`
  * *Why:* Wrapping the obstacle is only half the event — passing it is what earns points. The `score += 10` must live *inside* the same reset block, tying the two halves of "a car went by" together.
* **Exercise 9.10: [Iterate & Improve] The Complete Animation Engine** — Assemble the full loop plus mover.
  * *Editor expects:* Full JavaScript. Validator needs `gameLoop`, `gameActive`, `requestAnimationFrame`, `moveObstacles`, `obstacleY`, and `score`.
  * *Model answer:*
    ```javascript
    function moveObstacles() {
      obstacleY += speed;
      if (obstacleY > 500) {
        obstacleY = -100;
        score += 10;
      }
      document.getElementById("obstacle").style.top = obstacleY + "px";
    }
    function gameLoop() {
      if (!gameActive) { return; }
      moveObstacles();
      requestAnimationFrame(gameLoop);
    }
    ```
  * *Why:* A gated loop driving a movement function every frame — the engine that makes the road scroll, the score climb, and the game stoppable. This is the session's milestone competency.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

As in Session 2, the **Project Journal** milestone card ("Part 8: Timer Loops & Animations") tracks the student's standalone session lab script (fresh tutor-provided starter, not a carried-forward project), separate from the Sandbox exercises above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "The obstacle cars now visibly scroll DOWN the road continuously, like the player is driving forward past them, disappearing off the bottom and reappearing at the top — a real animated highway instead of a still picture."
   - *System Parts & Information (expected):* "Parts needed: a continuously repeating game loop. Information to track: each obstacle's vertical position, how fast it moves, and the score increase each time one resets."
   - *Logic Flow / Pseudocode (expected):* "gameLoop runs → IF gameActive: (1) obstacleY += speed, (2) IF obstacleY > trackHeight: reset obstacleY = -100 and increase score, (3) style obstacle top = obstacleY, (4) requestAnimationFrame(gameLoop)."
   - *Why:* This is the milestone where the game finally *moves on its own*. The Visual Concept captures the felt effect (driving forward past traffic); the plan names the loop and the per-frame state it tracks. The Logic Flow is a genuine frame-by-frame recipe — the first design that describes *time*, not just layout.

2. **Write AI Prompt**
   - *Expected prompt:* "Draft a prompt to build the animation engine. Write a 'gameLoop()' function that runs recursively using 'requestAnimationFrame'. Inside, update the vertical position 'obstacleY' of '#obstacle-car' by adding 'speed' on each tick. If the obstacle moves past the bottom (500px), reset it to the top (-100px) and increase the score by 10."
   - *Why:* The milestone prompt specifies the loop mechanism (`requestAnimationFrame`), the per-frame update (`obstacleY += speed`), and the exact wrap/score rule — a complete spec for continuous, self-scheduling animation.

3. **Review & Explain**
   - *Expected checklist:* the loop checks `gameActive` before requesting the next frame; the obstacle resets to the top correctly after passing the bottom.
   - *Expected Socratic answer* — *"Why is `requestAnimationFrame` preferred over `setInterval` for animation?"* → `requestAnimationFrame` syncs to the browser's actual repaint cycle (~60fps) and pauses on inactive tabs, so motion is smooth and efficient; `setInterval` fires on a fixed timer regardless of when the screen can actually redraw, causing stutter and wasted work.

4. **Test & Break**
   - *Expected test checklist:* `gameLoop()` scrolls the obstacle down continuously; it resets to `-100` at the bottom; the score increments on each reset; setting `gameActive = false` halts the loop instantly.
   - *Why:* The "set `gameActive = false` and confirm it stops" test is the proof that the loop is *controllable* — the single most important property of a game loop.

5. **Iterate & Improve**
   - *Expected answer:* "Examine frame-rate stability. Refine the prompt or reset logic if wrapping obstacles overlap or glitch, so motion stays smooth at speed."
   - *Why:* Introduces **performance/timing quality** as an iteration criterion, connecting to the session's Ethics Discussion on refresh-rate limits in assistive UIs.

* **Homework Evaluation Checklist**: Verify the student's Project Journal shows a `requestAnimationFrame`-driven `gameLoop()` gated on `gameActive`, with obstacles that scroll, wrap to the top, and increment the score on each pass.

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

Students complete 10 sandbox exercises structured as AI-Era workflow loops. As in Session 2, *what to type depends on the `[step tag]`* — see the **📝 Answer-Type Key** in Session 2 (Plan/Prompt steps = plain-language plan or prompt inside the `/* */` comment; Test/Iterate steps = real JavaScript; Review steps = a short answer). The **Model Answer** per exercise is exactly what the app's validator accepts. As in Session 4, only the **Test & Break** and **Iterate & Improve** steps run live in the preview; Plan/Prompt/Review steps show a "nothing to run yet" note. This session's core skill is **auditing AI-generated math** — several exercises hand the student a subtly-wrong AABB check to find and fix.

* **Exercise 10.1: [Plan & Design] The Overlap Condition** — Plan the four-part overlap test.
  * *Editor expects:* Plain-language description of the overlap test naming both axes (the full comparison form is still accepted).
  * *Model answer:* `they overlap only if they overlap in both directions — right vs left, and top vs bottom` (full form `player.right > obstacle.left AND player.left < obstacle.right AND player.bottom > obstacle.top AND player.top < obstacle.bottom` also accepted)
  * *Why:* Two boxes overlap only if they overlap on *both* axes at once — four edge comparisons joined by AND. Writing all four before coding is what stops students from checking just one axis and wondering why cars clip through.
* **Exercise 10.2: [Write AI Prompt] Requesting checkCollision()** — Prompt for the detection function.
  * *Editor expects:* Plain-English prompt. Validator needs `checkCollision`, `width`, and `height`.
  * *Model answer:* `Write checkCollision(rect1, rect2) that returns true if the two rectangles' x/y/width/height bounds overlap`
  * *Why:* Naming `width` and `height` is what makes the function size-aware. A prompt that only mentions x/y would produce a point check that misses real, area-based collisions.
* **Exercise 10.3: [Review & Explain] Why Dimensions Matter** — Would `player.x === obstacle.x` ever catch a real overlap?
  * *Editor expects:* `YES` or `NO`.
  * *Model answer:* `NO`
  * *Why:* Two moving cars almost never share the exact same x to the pixel, so equality catches essentially nothing. Only comparing box *edges* detects the overlaps that actually happen — the whole reason AABB uses dimensions.
* **Exercise 10.4: [Test & Break] The Ghost Car Bug** — One comparison operator was flipped; cars pass through. Fix it.
  * *Editor expects:* Corrected JavaScript.
  * *Model answer:* `rect1.x + rect1.width > rect2.x` (the second condition uses `>`, not `<`).
  * *Why:* All four comparisons must point the right way — flip one and the combined AND can never be true, so collisions silently never fire. This is the classic "audit the AI's math" bug the session is built around.
* **Exercise 10.5: [Iterate & Improve] Wiring Collision into the Loop** — Make a hit actually stop the game.
  * *Editor expects:* JavaScript. Validator needs `checkCollision`, `gameActive = false`, and `console.log`.
  * *Model answer:* `if (checkCollision(player, obstacle)) { gameActive = false; console.log("Collision detected!"); }`
  * *Why:* Detection is useless without a consequence. Calling the check inside the loop and setting `gameActive = false` on a hit is what connects "they overlapped" to "the game ends" (via the Session 9 gate).
* **Exercise 10.6: [Plan & Design] Bounding Box Dimensions** — Plan the exact box sizes.
  * *Editor expects:* Plain-language plan of the two box sizes (30/50 and 25/40).
  * *Model answer:* `player is 30 wide and 50 tall; obstacle is 25 wide and 40 tall` (form `player width=30 height=50 | obstacle width=25 height=40` also accepted)
  * *Why:* The edge math (`x + width`, `y + height`) needs real dimensions. Pinning them down means the collision boxes match what the player actually sees on screen.
* **Exercise 10.7: [Write AI Prompt] Building the Rect Objects** — Prompt to package the two rectangles.
  * *Editor expects:* Plain-English prompt. Validator needs `carX`, `obstacleY`, `width`, and `height`.
  * *Model answer:* `Build a playerRect from carX and a fixed y, and an obsRect from obstacleY, each with the correct width and height`
  * *Why:* Each rect bundles the live position (`carX`, `obstacleY`) with fixed sizes — the four numbers `checkCollision()` reads per car. Building them from the *live* variables is what keeps the boxes in sync with the moving cars.
* **Exercise 10.8: [Review & Explain] The Exact-Touch Edge Case** — Do edges that touch exactly count as a hit under `>`?
  * *Editor expects:* `YES` or `NO`.
  * *Model answer:* `NO`
  * *Why:* Touching is not overlapping — a strict `>` requires the value to be *greater*, so edges meeting at the same coordinate don't register. Whether that's right depends on how forgiving you want the crash to feel, a real game-design call.
* **Exercise 10.9: [Test & Break] The Axis Swap Bug** — The first condition compares `rect1.y` to a horizontal bound. Fix the axis.
  * *Editor expects:* Corrected JavaScript.
  * *Model answer:* `rect1.x < rect2.x + rect2.width` (the first condition uses `rect1.x`, not `rect1.y`).
  * *Why:* Comparing an x against a y measures horizontal against vertical — meaningless geometry. Keeping x-with-x and y-with-y is the discipline that makes the four conditions describe a real rectangle.
* **Exercise 10.10: [Iterate & Improve] The Complete Collision System** — Assemble detection plus loop wiring.
  * *Editor expects:* Full JavaScript. Validator needs `checkCollision`, `gameActive = false`, `width`, and `height`.
  * *Model answer:*
    ```javascript
    function checkCollision(rect1, rect2) {
      return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
      );
    }
    // inside gameLoop():
    if (checkCollision(player, obstacle)) { gameActive = false; }
    ```
  * *Why:* A correct 4-condition check wired to end the game on a hit — the sensor that finally gives the racing game real stakes. This is the session's milestone competency.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

As in Session 2, the **Project Journal** milestone card ("Part 9: Collision Detection Overlap Math") tracks the student's standalone session lab script (fresh tutor-provided starter, not a carried-forward project), separate from the Sandbox exercises above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "When the player's car touches an obstacle car, the screen should visibly react — the game freezes and shows that a crash happened."
   - *System Parts & Information (expected):* "Parts needed: a collision check that runs every loop. Information to track: the edges (left/right/top/bottom) and size of the player's car and each obstacle."
   - *Logic Flow / Pseudocode (expected):* "IF player.right > obstacle.left AND player.left < obstacle.right AND player.bottom > obstacle.top AND player.top < obstacle.bottom: collision detected → set gameActive = false → trigger Game Over."
   - *Why:* The design is a pure *rule* again, this time geometric. The plan names the four-edge condition and the box data it needs. Writing the AABB logic in plain math first is exactly what lets the student later *audit* whether the AI's generated version is correct.

2. **Write AI Prompt**
   - *Expected prompt:* "Write a prompt asking to code a collision detection sensor: a function checking if the bounding boxes of '#player-car' and '#obstacle-car' overlap. If they intersect, set 'gameActive' to false to stop the animation loop, and call a 'gameOver()' function."
   - *Why:* The milestone prompt asks for both the detection *and* the consequence (halt the loop, trigger game over) — a complete behavior, not just a true/false function floating unused.

3. **Review & Explain**
   - *Expected checklist:* the function matches the AABB overlap formula (all four comparisons, correct operators/axes); it triggers exactly when the boxes overlap, not before or after.
   - *Expected Socratic answer* — *"If we only checked whether the center coordinates were identical, why would cars drive through each other?"* → Two independently-moving boxes almost never land on the *exact* same center pixel, so equality is essentially always false — the cars overlap visually but the check never fires. Box *dimensions* are what let overlap be detected across a whole area instead of a single point.

4. **Test & Break**
   - *Expected test checklist:* driving the player into an obstacle registers a collision immediately on overlap; `gameActive` flips to false and motion halts; the console logs the overlap coordinates.
   - *Why:* Collision code is notoriously easy to get *almost* right — testing that it fires *exactly* on overlap (not one pixel early or late) is the core QA skill this session builds.

5. **Iterate & Improve**
   - *Expected answer:* "Audit collision accuracy. If crashes trigger too early or too late, adjust the box width/height offsets. Add boundary-value test objects to confirm the exact-touch edge case behaves as intended."
   - *Why:* Frames collision *tuning* (hitbox generosity) as an iteration lever — the same "audit the AI's math against test cases" mindset that anchors the session's Bug Hunt assessment.

* **Homework Evaluation Checklist**: Verify the student's Project Journal shows a four-condition AABB `checkCollision()` with correct operators and axes, wired into the game loop to set `gameActive = false` on a real overlap.

---

## Session 11: "The Dashboard & High-Score Counter: DOM Operations"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: DOM Selection Match
* **00:15 - 00:35 | Board Lesson**: Document Selectors, textContent Manipulation, and Visibility Styling
* **00:35 - 01:00 | Design Phase**: DOM Data Pipelines diagrams
* **01:00 - 01:30 | Sandbox Lab**: Wiring Code States variables to Visual HTML Dashboard
* **01:30 - 01:50 | Assessment**: UI Selector Bugs Diagnostics
* **01:50 - 02:00 | Ethics Discussion**: User Privacy Limits on Public Leaderboard Names

### 1. Board Lesson Talking Points
* **The Document API**: Explain that JavaScript acts as a manipulator using selectors like `document.getElementById("score-val")`.
* **Dynamic Styles**: Changing visual attributes like CSS display overrides (`style.display = "block"`) to unhide layout sections.

### 2. Socratic Prompting
* *"Why does the scoreboard show score: -5? What guard check should we add to prevent values from slipping below 0?"* (Check `if (score < 0) { score = 0; }` before updating scoreboard).
* *"How does the DOM represent a bridge between code variables and visual HTML elements?"* (JavaScript queries elements by ID and mutates properties like `.textContent` — the safe property this session teaches for writing the score).

### 3. Digital Sandbox Exercises & Solutions

Students complete 10 sandbox exercises structured as AI-Era workflow loops. As in Session 2, *what to type depends on the `[step tag]`* — see the **📝 Answer-Type Key** in Session 2 (Plan/Prompt steps = plain-language plan or prompt inside the `/* */` comment; Test/Iterate steps = real JavaScript; Review steps = a short answer). The **Model Answer** per exercise is exactly what the app's validator accepts. As in Session 4, only the **Test & Break** and **Iterate & Improve** steps run live in the preview; Plan/Prompt/Review steps show a "nothing to run yet" note. **Key detail:** the spacebar's real `event.key` value is a single space `" "`, *not* the word `"Space"` — the restart handler must check `event.key === " "`.

* **Exercise 11.1: [Plan & Design] The DOM Update Pipeline** — Plan how each state change reaches the screen.
  * *Editor expects:* Plain-language mapping of state changes to on-screen results (no `textContent`/id syntax required; the technical form is still accepted).
  * *Model answer:* `when the score changes, show it on the scoreboard; on a crash, show the restart panel` (form `score -> #score-val.textContent | crash -> remove hidden from #restart-panel` also accepted)
  * *Why:* A variable is invisible until pushed into the page. The student maps each state change (score, crash) to *what appears on screen* in plain words — the deliberate design of the pipeline — before meeting `textContent` and the exact element ids, which are earned at the prompt/review steps.
* **Exercise 11.2: [Write AI Prompt] Requesting the Scoreboard Updater** — Prompt for the score-sync function.
  * *Editor expects:* Plain-English prompt. Validator needs `function`, `textContent`, and `score-val`.
  * *Model answer:* `Write updateScoreboard() that sets the textContent of #score-val to match the score variable`
  * *Why:* `textContent` is the text inside an element; setting `#score-val`'s `textContent` to `score` is the single line that makes the on-screen number track the in-memory one.
* **Exercise 11.3: [Review & Explain] textContent vs. innerHTML** — What risk does `innerHTML` introduce?
  * *Editor expects:* `SCRIPT_INJECTION` or `SLOWER_RENDERING`.
  * *Model answer:* `SCRIPT_INJECTION`
  * *Why:* `innerHTML` parses its input as HTML, so untrusted data could inject and run a script; `textContent` treats input as plain text and can't. Choosing the safe property by default is a first taste of secure front-end coding.
* **Exercise 11.4: [Test & Break] The Negative Score Leak** — A penalty shows `score: -5`. Clamp it.
  * *Editor expects:* Corrected JavaScript.
  * *Model answer:* `if (score < 0) { score = 0; }` placed before the `textContent` write.
  * *Why:* A negative score reads as broken. A defensive clamp *before* the DOM write keeps the display sensible no matter what the scoring math does — the "never trust the value, guard the output" habit.
* **Exercise 11.5: [Iterate & Improve] Revealing the Restart Panel** — Show the game-over overlay.
  * *Editor expects:* JavaScript. Validator needs `restart-panel`, `remove`, and `hidden`.
  * *Model answer:* `function triggerGameOverScreen() { document.getElementById("restart-panel").classList.remove("hidden"); }`
  * *Why:* The panel already exists in the HTML, hidden by a `hidden` class. Removing the class reveals it — showing/hiding by *toggling a class* rather than building or destroying elements, the standard DOM pattern.
* **Exercise 11.6: [Plan & Design] The Restart Flow** — Plan the reset checklist.
  * *Editor expects:* Plain-language restart checklist (no `gameActive` syntax required; the technical form is still accepted).
  * *Model answer:* `press Space → reset the score to 0, reset the car, hide the panel, and start the game running again` (form `press Space -> reset score -> reset carX -> hide restart-panel -> gameActive = true` also accepted)
  * *Why:* Restart is a checklist — *every* piece of game state returned to its starting value. Listing them all prevents the classic "restarted but forgot to reset X" bug (which E11.9 makes concrete).
* **Exercise 11.7: [Write AI Prompt] Requesting the Restart Handler** — Prompt for the Space-key restart.
  * *Editor expects:* Plain-English prompt. Validator needs `Space`, `gameActive`, and `addEventListener`.
  * *Model answer:* `Write a keydown listener that, when Space is pressed, resets score to 0 and sets gameActive to true`
  * *Why:* Another keydown listener — this one watching for Space — runs the reset checklist and flips `gameActive` back on. (In code, "Space" is the key value `" "`.)
* **Exercise 11.8: [Review & Explain] What the Hidden Class Does** — What if you forget to remove `.hidden` on restart?
  * *Editor expects:* `STAYS_HIDDEN` or `BECOMES_VISIBLE`.
  * *Model answer:* `STAYS_HIDDEN`
  * *Why:* `display: none !important` keeps applying as long as the class is on the element, so the game-over screen would stay stuck on the page. Understanding that class presence *is* the visibility state is what makes toggle-based UIs predictable.
* **Exercise 11.9: [Test & Break] The Frozen Restart** — Restart resets the screen but the game won't move. Fix it.
  * *Editor expects:* Corrected JavaScript.
  * *Model answer:* `gameActive = true;` added inside the Space-key branch.
  * *Why:* The screen looks reset, but the Session 9 loop is still gated off. Without `gameActive = true`, `requestAnimationFrame` is never re-armed — a reminder that *visible* reset and *functional* reset are two different things.
* **Exercise 11.10: [Iterate & Improve] The Complete HUD & Restart System** — Assemble scoreboard, overlay, and restart.
  * *Editor expects:* Full JavaScript. Validator needs `score-val`, `restart-panel`, `gameActive`, `addEventListener`, and a `event.key === " "` check.
  * *Model answer:*
    ```javascript
    function updateScoreboard() {
      if (score < 0) { score = 0; }
      document.getElementById("score-val").textContent = score;
    }
    function triggerGameOverScreen() {
      document.getElementById("restart-panel").classList.remove("hidden");
    }
    window.addEventListener("keydown", function(event) {
      if (event.key === " ") {
        score = 0;
        document.getElementById("restart-panel").classList.add("hidden");
        gameActive = true;
      }
    });
    ```
  * *Why:* Live score updates, a crash overlay, and a Space-to-restart handler — the loop that turns a single run into a replayable game. This is the session's milestone competency.

### 4. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

As in Session 2, the **Project Journal** milestone card ("Part 10: DOM HUD Visual Updates") tracks the student's standalone session lab script (fresh tutor-provided starter, not a carried-forward project), separate from the Sandbox exercises above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "The scoreboard number visibly climbs as the game runs, and after a crash a 'Game Over' screen appears on top of the road showing the final score and a prompt to restart."
   - *System Parts & Information (expected):* "Parts needed: a Game Over screen with a restart prompt (hidden until needed). Information to track: the current score to display, and whether the game is active or showing the Game Over screen."
   - *Logic Flow / Pseudocode (expected):* "Score changes → #score-val.textContent = score. Collision triggers → remove '.hidden' from the modal. Press Space → reset game variables, restart loop."
   - *Why:* The design closes the loop between the game's internal state and what the player sees and does. The plan names the new visible element (the game-over modal) and the *state* that controls it (active vs. showing game-over) — the connection between data and UI that all interactive software rests on.

2. **Write AI Prompt**
   - *Expected prompt:* "Draft a prompt to build the HUD score updater and restart module. Set the textContent of '#score-val' to match 'score'. When a collision occurs, remove class 'hidden' from '#restart-panel'. If the user presses Space while the restart panel is visible, reset score to 0, reset positions, hide the panel, set gameActive to true, and restart the loop."
   - *Why:* The milestone prompt covers the full round-trip — score out to the DOM, crash in from the game, and a complete restart sequence — so the AI produces a coherent HUD module rather than three disconnected snippets.

3. **Review & Explain**
   - *Expected checklist:* score updates in the DOM whenever it changes; the restart panel's class is toggled (not the element rebuilt); the restart cleanly resets state without spawning a second loop.
   - *Expected Socratic answer* — *"What is the difference between `textContent` and `innerHTML`, and why is `textContent` safer?"* → `textContent` writes plain text; `innerHTML` parses its value as markup and would execute any injected `<script>`. For a numeric score, `textContent` is safer (no injection) and faster (no HTML parsing).

4. **Test & Break**
   - *Expected test checklist:* the score counts up live on the HUD as the game runs; a crash reveals the restart panel; pressing Space resets the score to 0, clears the track, and starts a clean loop.
   - *Why:* The restart test is the tricky one — it must reset *everything* and start exactly *one* new loop, the integration bug this session is designed to surface.

5. **Iterate & Improve**
   - *Expected answer:* "Check that restarting doesn't spawn a second game loop running alongside the first. Ensure every visibility class toggles cleanly so no stale panel lingers."
   - *Why:* Raises **duplicate-loop / stale-state** bugs — the subtle defects that appear only after a restart — and connects to the session's Ethics Discussion on privacy limits for public leaderboard names.

* **Homework Evaluation Checklist**: Verify the student's Project Journal shows `#score-val` updated via `textContent` (with a non-negative guard), the restart panel toggled by its `hidden` class, and a Space-key handler that fully resets state and sets `gameActive = true`.

---

## Session 12: Level 1 Assessment & Graduation

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Review criteria checklists
* **00:15 - 01:00 | Digital Assessment Part A**: Layout Builder (HTML, CSS positioning, variables, constraints)
* **01:00 - 01:45 | Assessment Part B**: Game Walkthrough & Defense (Malicious QA audit)
* **01:45 - 02:00 | Assessment Part C**: Logic Tracing & Debugging Challenge

### 1. Tutor Guidance: Evaluation Solutions
* **Part A (Blueprint Check)**: Verify the student mapped HTML tag structures (`game-track`, `player-car`), CSS layouts, JS variables, and lane boundaries.
* **Part B (Defense Check)**: Verify collision checks and clamping values at the lane boundaries `carX = 35` (leftmost) and `carX = 295` (rightmost).
* **Part C (Diagnostic Check)**: Student must debug overlap math and correct boundary signs.
* **Take-Home Evaluation**: Verify self-reflection logs on variables, coordinate updates, and DOM interactions.

### 2. Digital Sandbox Exercises & Solutions (Capstone Lab)

The capstone sandbox is 10 exercises structured as the same AI-Era workflow loops — see the **📝 Answer-Type Key** in Session 2 (Plan/Prompt steps = plain-language plan or prompt inside the `/* */` comment; Test/Iterate steps = real JavaScript; Review steps = a short answer). As in Session 4, only the **Test & Break** and **Iterate & Improve** steps run live in the preview. This final lab pulls together *config-driven design* (removing magic numbers) and a full *QA sweep* over everything built since Session 4. The **Model Answer** per exercise is exactly what the app's validator accepts.

* **Exercise 12.1: [Plan & Design] The Configuration Object** — Plan one object holding every tunable value.
  * *Editor expects:* Plain-language plan of the tunables to gather (no object syntax required; the technical form is still accepted).
  * *Model answer:* `gather the tunable numbers — starting speed, difficulty ramp, top speed — into one config object` (form `const CONFIG = { startSpeed, difficultyMultiplier, maxSpeed }` also accepted)
  * *Why:* Magic numbers scattered through the code are hard to find and change. Gathering every tunable value into one `CONFIG` object means the game's feel can be retuned by editing a single place — the payoff of the whole session.
* **Exercise 12.2: [Write AI Prompt] Requesting Difficulty Scaling** — Prompt for score-driven, clamped speed.
  * *Editor expects:* Plain-English prompt. Validator needs `CONFIG`, `speed`, and `clamp` (or `max`).
  * *Model answer:* `Write a function that increases speed based on score using CONFIG.difficultyMultiplier, clamped to CONFIG.maxSpeed`
  * *Why:* Difficulty should ramp with score but never become impossible. Asking for the clamp *and* referencing CONFIG values (not raw numbers) is what makes the scaling both tunable and safe.
* **Exercise 12.3: [Review & Explain] Tracing the Difficulty Formula** — Evaluate `startSpeed + score * difficultyMultiplier` at score 50.
  * *Editor expects:* A number.
  * *Model answer:* `10`
  * *Why:* Order of operations: multiply first (`50 * 0.1 = 5`), then add (`5 + 5 = 10`). Tracing named config values through a formula is the same audit skill from earlier sessions, now on the difficulty curve.
* **Exercise 12.4: [Test & Break] The Unbounded Speed Bug** — High scores blow past `maxSpeed`. Add the cap.
  * *Editor expects:* Corrected JavaScript.
  * *Model answer:* `speed = Math.min(speed, CONFIG.maxSpeed);`
  * *Why:* A ramp with no ceiling eventually makes the game unplayable. `Math.min` caps it — the same clamp idea from Session 6, now sourced from CONFIG instead of a hardcoded literal.
* **Exercise 12.5: [Iterate & Improve] Refactoring Magic Numbers** — Replace the hardcoded 35/295 with CONFIG values.
  * *Editor expects:* JavaScript. Validator needs `CONFIG.leftBound` and `CONFIG.rightBound`.
  * *Model answer:* `if (carX > CONFIG.leftBound) { carX -= 130; } if (carX < CONFIG.rightBound) { carX += 130; }`
  * *Why:* The literal 35 and 295 from Session 6 become named config properties — same behavior, but now every tunable number lives in the one central object, the definition of maintainable code.
* **Exercise 12.6: [Plan & Design] The Final QA Matrix** — List the systems to verify.
  * *Editor expects:* Plain-language list of the four systems to verify.
  * *Model answer:* `variables, boundaries, collision, restart` (form `variables | boundaries | collision | restart` also accepted)
  * *Why:* A final QA pass checks each pillar in turn. Listing them is how the student proves the *whole* game still works — not just the last thing they touched — the regression-testing mindset.
* **Exercise 12.7: [Write AI Prompt] Requesting the Smoke-Test Script** — Prompt for a PASS/FAIL checklist script.
  * *Editor expects:* Plain-English prompt. Validator needs `test`, `console.log`, and `pass`.
  * *Model answer:* `Write a diagnostic test script that logs PASS or FAIL for each core system using console.log`
  * *Why:* A smoke test surfaces a regression as a visible FAIL line instead of a silent break — the student's first taste of automated testing, formalized properly in later levels.
* **Exercise 12.8: [Review & Explain] The Malicious QA Officer's Question** — Can inconsistent `>` vs `>=` guards create an edge-case gap?
  * *Editor expects:* `YES` or `NO`.
  * *Model answer:* `YES`
  * *Why:* Inconsistent operators create exactly the rare boundary gaps an adversarial tester hunts for. Defending code under hostile questioning — and admitting where it's weak — is a genuine engineering skill.
* **Exercise 12.9: [Test & Break] The Final Diagnostic** — One flipped operator in the AABB check. Fix it.
  * *Editor expects:* Corrected JavaScript.
  * *Model answer:* `rect1.x < rect2.x + rect2.width` (the first condition uses `<`, not `>`).
  * *Why:* The same class of bug as Session 10, now caught *fast* under exam conditions — proof the student can audit AI-generated math without hand-holding.
* **Exercise 12.10: [Iterate & Improve] Capstone Reflection** — One sentence on the trickiest bug and how tracing found it.
  * *Editor expects:* A free-text reflection of at least a full sentence (~20+ characters).
  * *Model answer (example):* `The trickiest bug was the string "10" breaking speed math; logging speed's value showed it concatenating instead of adding, which pointed me to the quoted number.`
  * *Why:* There's no single right answer — the point is metacognition. Naming a specific bug and the tracing method that exposed it turns a semester of fixes into a transferable debugging habit for Level 2.

### 3. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

As in Session 2, the **Project Journal** milestone card ("Part 11: Game Polish & Final Assessment") tracks the student's final standalone assessment lab — a config-driven script exercising the level's full concept set (variables, boundaries, collision, restart).

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "The complete game: obstacle cars appear faster and more often as the score climbs (harder over time), and everything from the scoreboard to the crash screen works smoothly together, ready to demo."
   - *System Parts & Information (expected):* "Parts needed: none new on screen — this session collects all the game's tunable numbers in one place. Information to track: the starting speed, how quickly difficulty ramps up, and the maximum allowed speed."
   - *Logic Flow / Pseudocode (expected):* "Game running → speed increases based on score * difficultyMultiplier → clamp speed to CONFIG.maxSpeed."
   - *Why:* The final design milestone is about *polish and maintainability*, not a new feature. The plan names the tunables to centralize and the difficulty curve — recognizing that a finished product is judged partly on how easily the *next* person can change it.

2. **Write AI Prompt**
   - *Expected prompt:* "Write a prompt to complete the game. Store configuration details (starting speed, lane width, collision offsets) inside a single read-only constant config object. Add logic that increases obstacle speed dynamically as score increases, clamping it to a maximum speed to maintain playable limits."
   - *Why:* The capstone prompt asks the AI to *refactor toward configurability* and add the difficulty curve in one coherent request — demonstrating the full command of prompt-writing earned across the level.

3. **Review & Explain**
   - *Expected checklist:* magic values are refactored into a single `CONFIG` constant; difficulty scaling has an upper clamp so speed can't run away.
   - *Expected Socratic answer* — *"Why is it bad practice to hardcode layout dimensions inside code logic, and how does a config object help?"* → Hardcoded values are duplicated and easy to miss when a change is needed, so edits are error-prone; a config object gives every tunable a single named home, so one edit updates the whole game consistently.

4. **Test & Break**
   - *Expected test checklist:* the game speeds up dynamically as the score climbs; speed locks at the `maxSpeed` clamp; a full regression run confirms zero breakage in input, collision math, or restart.
   - *Why:* This is the level's capstone QA — the student proves *every* system built since Session 2 still works together, the whole-game verification that the Session 12 assessment formalizes.

5. **Iterate & Improve**
   - *Expected answer:* "Complete a self-reflection journal entry summarizing the optimization tweaks made, the bugs solved across the project, and the lessons learned about data types, boundaries, and debugging."
   - *Why:* Closes the level with **metacognition** — reflecting on the whole journey (from Session 1's IPO blueprint to the certified build) cements transferable method over one-off fixes, the bridge into Level 2.

* **Homework / Certification Checklist**: Verify the finished Project Journal build uses a single `CONFIG` object for tunables, applies score-based difficulty scaling clamped to `maxSpeed`, and passes a full regression sweep across variables, boundaries, collision, and restart.
