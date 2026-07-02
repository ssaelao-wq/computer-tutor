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
    1. Click the command buttons to add cards to the workspace in the following order: `Check P/N Gear State` ➔ `Depress Brake Pedal` ➔ `Turn Ignition Key to Start` ➔ `Shift Gear Selector to D (Drive)` ➔ `Release Handbrake` ➔ `Release Brake Pedal` ➔ `Press Gas Pedal`.
    2. Click the **Run Autopilot Script** button. The vehicle will execute the steps sequentially and drive off in Drive gear.
  * **Purpose of the Exercise**:
    - To introduce the student to the concept of **sequential processing** (how computers execute lines of code chronologically from top to bottom) and **hardware preconditions** (the car cannot start the engine or shift gears without disengaging shift locks using the brake pedal and checking P/N gear).
  * **What the Student Learns**:
    - Computers are literal and do not assume steps.
    - An action block has zero effect or crashes if its safety prerequisites (e.g. brake pedal depressed) are not initialized in a prior step.
  * **Tutor Check Question**: *"Why did we need to depress the brake pedal first? What happens if you try to start the engine without pressing the brake?"*
 
  ##### **Exercise 1.2: Reversing & Parking**
  * **How to do it**:
    1. Click the command buttons in shuffled order to add cards: `Check P/N Gear State` ➔ `Depress Brake Pedal` ➔ `Turn Ignition Key to Start` ➔ `Shift Gear Selector to R (Reverse)` ➔ `Release Handbrake` ➔ `Release Brake Pedal` ➔ `Press Gas Pedal` (backing out) ➔ `Depress Brake Pedal` (stop vehicle) ➔ `Shift Gear Selector to D (Drive)` ➔ `Release Brake Pedal` ➔ `Press Gas Pedal` (cruise forward).
    2. Click **Run Autopilot Script** to execute.
  * **Purpose of the Exercise**:
    - To demonstrate **state-dependent safety lockouts** (shifting between Reverse and Drive is locked out unless the vehicle speed is 0 and the footbrake is depressed).
  * **What the Student Learns**:
    - Safety checks operate dynamically based on current values.
    - If the student tries to shift from R to D directly while backing out (without applying the brake), the simulation fails.
  * **Tutor Check Question**: *"Why does the vehicle fail if you shift from Reverse to Drive without pressing the footbrake pedal first?"*
 
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
  * *Tutor Prompt*: *"Can you shift from Reverse to Drive while the car is moving backwards? What pedal must be pressed first?"*
  * *Explanation*: Guide them to discover the safety lockout state checks—the vehicle speed must be 0 and the footbrake depressed before shifting gears.
  
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

## Session 2: "Backpack Classification & Lock Verification"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Crypto-Token Data Classification
* **00:15 - 00:35 | Board Lesson**: Data Types & Validation Guards
* **00:35 - 01:00 | Digital Practice**: Form Validation Constraints
* **01:00 - 01:30 | Sandbox Lab**: Backpack Sorter & Lock Validator
* **01:30 - 01:50 | Assessment**: Data audit exercise
* **01:50 - 02:00 | Ethics Discussion**: Gender/Name validations in forms

### 1. Board Lesson Talking Points
* Explain the three primary data types:
  * **String**: Written inside quotes `"hello"`. A sequence of characters.
  * **Number**: Mathematical quantities, like `101` or `0.05`. No quotes!
  * **Boolean**: True/False toggle switches.
* Explain **GIGO (Garbage In, Garbage Out)**: If a database expects a number (e.g., age) but gets a string (`"banana"`), math operations crash. We must write validation guards.

### 2. Socratic Prompting
* *"Can you add `"5"` + `5`?"* (One is text, one is a quantity. Show that in JS, `"5" + 5` results in `"55"`, not `10`).
* *"Why is `isAuthorized = "YES"` a security bug?"* (Strings can be manipulated, Booleans should be strictly `true` or `false`).

### 3. Digital Sandbox Exercises & Solutions

  ##### **Exercise 2.1: Backpack Sorting**
  * **How to do it**:
    1. Drag item cards (e.g. `"Vault_A"`, `101`, `true`, `"intruder_alert"`, `0.05`, `false`) from the backlog.
    2. Place them into their matching folders:
       - **Strings**: `"Vault_A"`, `"intruder_alert"`
       - **Numbers**: `101`, `0.05`
       - **Booleans**: `true`, `false`
    3. Click **Verify Sorting**.
  * **Purpose of the Exercise**:
    - Teach the student to recognize and segregate data types based on syntax markers (quotes, numeric characters, and logical flags).
  * **What the Student Learns**:
    - Text strings must always be enclosed in quotes.
    - Numbers represent mathematical values without quotes.
    - Booleans are binary states (true/false) and behave as toggles.
  * **Tutor Check Question**: *"What happens if you type the number `101` with quotes like `"101"`?"* (It becomes a text String, and math operations on it will fail).

  ##### **Exercise 2.2: Rules Configuration**
  * **How to do it**:
    1. Select validation rules from the system config dropdowns for the lockbox variables:
       - `username` ➔ Set dropdown to `String`
       - `passcode` ➔ Set dropdown to `Number`
       - `isAdmin` ➔ Set dropdown to `Boolean`
    2. Click **Apply Rules** to lock them in.
  * **Purpose of the Exercise**:
    - Define validation filters to ensure that user inputs match expected system parameters.
  * **What the Student Learns**:
    - Designing a data schema (specifying what type of data each variable is permitted to store).
  * **Tutor Check Question**: *"Why should the passcode be restricted to a Number instead of a String?"* (To ensure we can perform mathematical comparison checks like passcode > 1000).

  ##### **Exercise 2.3: Boundary Auditing**
  * **How to do it**:
    1. Open the boundary validator block panel. Enforce limits:
       - Add condition check: `age > 0`
       - Add condition check: `passcode >= 1000`
    2. Click **Test Inputs** to verify that inputs like `-5` or `999` are successfully blocked.
  * **Purpose of the Exercise**:
    - Create safety validation constraints to block out-of-bound or corrupted values.
  * **What the Student Learns**:
    - Range checks (making sure numeric inputs fall within expected realistic scopes).
  * **Tutor Check Question**: *"Why is checking type alone not enough? Why do we need boundaries like `age > 0`?"* (Because type-only validation accepts negative numbers, which can break database records).

  ##### **Exercise 2.4: Type Casting**
  * **How to do it**:
    1. Drag the `Number()` conversion block and wrap it around the string passcode input variable: `let numericPasscode = Number(passcodeString)`.
    2. Pass `numericPasscode` to the validator.
    3. Click **Execute** to run.
  * **Purpose of the Exercise**:
    - Teach data conversion (type casting) to resolve string-to-number validation blocks.
  * **What the Student Learns**:
    - Data received from text boxes is read as String type by default. It must be explicitly converted to perform numeric validation.
  * **Tutor Check Question**: *"If the user inputs the text `"1234"`, how does the computer see it before we use the `Number()` block?"*

  ##### **Exercise 2.5: Boolean Inversion**
  * **How to do it**:
    1. Configure validation logic using the NOT inversion block: `isBlocked = !isWhitelisted`.
    2. Link the `isBlocked` variable to trigger the system alarm if it evaluates to `true`.
    3. Click **Test Inversion** to run.
  * **Purpose of the Exercise**:
    - Master logical negation (`!`) for creating reciprocal logic checks.
  * **What the Student Learns**:
    - The logical NOT operator reverses the state of a Boolean variable (from true to false, or false to true).
  * **Tutor Check Question**: *"If `isWhitelisted` is `true`, what does `!isWhitelisted` evaluate to?"* (It evaluates to `false`).

### 4. Homework Evaluation Checklist
* Student reviews two websites and logs details in the Journal:
  * Must list 3 input fields, their data types, and the validation errors that occur when entering bad data.

---

## Session 3: "State Transition Controllers & The Vault"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Interactive Airlock Simulation
* **00:15 - 00:35 | Board Lesson**: Finite State Machines & Diagrams
* **00:35 - 01:00 | Digital Practice**: Node Transition Graph
* **01:00 - 01:30 | Sandbox Lab**: Security Vault State Controller
* **01:30 - 01:50 | Assessment**: Patching a security leak in state tables
* **01:50 - 02:00 | Ethics Discussion**: Elevator lock state vs emergency escape

### 1. Board Lesson Talking Points
* Draw circles on the board representing states: `[CLOSED]`, `[OPEN]`, `[ALARM_LOCKED]`.
* Draw arrows representing event triggers (e.g. `insert_keycard`, `push_door`, `reset_alarm`).
* Explain **State Dependency**: Pushing the door while `CLOSED` goes to `ALARM_LOCKED`. But pushing it while `OPEN` goes to `CLOSED`. The system responds differently depending on its active state memory.

### 2. Socratic Prompting
* *"What happens if a user is stuck in the `ALARM_LOCKED` state? Is there an event that resets the state to `CLOSED`?"*
* *"If a transition is undefined, what state does the machine get stuck in?"* (A deadlock).

### 3. Digital Sandbox Exercises & Solutions

  ##### **Exercise 3.1: Basic Transition**
  * **How to do it**:
    1. In the transition table configuration, set the row: Current State `CLOSED` + Event `insert_keycard` ➔ Action `Transition to OPEN`.
    2. Set the row: Current State `OPEN` + Event `push_door` ➔ Action `Transition to CLOSED`.
    3. Click **Simulate** and test keycard insertion and pushing.
  * **Purpose of the Exercise**:
    - Introduce students to state transitions (changing a system's condition based on an event trigger).
  * **What the Student Learns**:
    - Systems have distinct, persistent states (e.g. Locked, Unlocked).
    - Event triggers are inputs that cause the system to transition between these states.
  * **Tutor Check Question**: *"Why does pushing the door while it's already closed do nothing in this exercise?"* (Because we haven't defined a rule for that combination yet).

  ##### **Exercise 3.2: Hazard Logic**
  * **How to do it**:
    1. Add a new row to the transition table: Current State `CLOSED` + Event `push_door` ➔ Action `Transition to ALARM_LOCKED`.
    2. Click **Simulate** and try to push the closed door to verify it enters the alarm state.
  * **Purpose of the Exercise**:
    - Teach students how state machines handle unexpected or hostile events (security hazards).
  * **What the Student Learns**:
    - System states can act as security shields (blocking further commands when a hazard occurs).
  * **Tutor Check Question**: *"Once the system transitions to `ALARM_LOCKED`, does inserting a keycard unlock the door?"* (No, because there is no transition defined from `ALARM_LOCKED` using the keycard event).

  ##### **Exercise 3.3: Deadlock Resolution**
  * **How to do it**:
    1. The student runs the simulation and gets stuck in the `ALARM_LOCKED` state.
    2. In the transition rules editor, add the rule: Current State `ALARM_LOCKED` + Event `reset_alarm` ➔ Action `Transition to CLOSED`.
    3. Click **Simulate**, trigger the alarm, and verify that clicking the reset alarm button restores the closed state.
  * **Purpose of the Exercise**:
    - Introduce the concept of a **deadlock** (a state where no defined event transitions can escape, locking up the system) and how to design recovery paths.
  * **What the Student Learns**:
    - A state machine must have defined escape transitions for all states, or it risks permanent lockout.
  * **Tutor Check Question**: *"Why does the reset button fail to work before we add this rule? Why can't the computer just assume what 'reset' means?"* (Because computers lack common sense and only follow explicitly declared transition paths).

  ##### **Exercise 3.4: Multi-State Auth**
  * **How to do it**:
    1. Define a 3-state transition sequence:
       - Current State `CLOSED` + Event `enter_passcode` ➔ Action `Transition to PASSCODE_VALID`.
       - Current State `PASSCODE_VALID` + Event `scan_keycard` ➔ Action `Transition to OPEN`.
    2. If passcode is invalid: Current State `PASSCODE_VALID` + Event `incorrect_passcode` ➔ Action `Transition to CLOSED`.
    3. Click **Simulate** to verify both triggers must occur in order.
  * **Purpose of the Exercise**:
    - Model multi-factor authentication states where multiple events must occur in a strict sequence.
  * **What the Student Learns**:
    - Intermediate states (like `PASSCODE_VALID`) act as gates, requiring sequential validation before reaching the final `OPEN` state.
  * **Tutor Check Question**: *"What happens if you scan the keycard while in the `CLOSED` state?"* (Nothing, because the system must be in the `PASSCODE_VALID` state to accept keycard events).

  ##### **Exercise 3.5: Timeout Auto-Close**
  * **How to do it**:
    1. Add the transition rule: Current State `OPEN` + Event `timer_expired` ➔ Action `Transition to CLOSED`.
    2. Set the timer duration parameter to `5 seconds`.
    3. Click **Simulate**, scan keycard to open, wait 5 seconds, and watch the door close automatically.
  * **Purpose of the Exercise**:
    - Introduce temporal events (time-driven triggers) to automate safe fallbacks.
  * **What the Student Learns**:
    - System timers can fire event triggers just like physical inputs (buttons, sensors).
  * **Tutor Check Question**: *"Why is an auto-close timer transition important for a physical bank vault?"* (To prevent security leaks if a human forgets to close it).

### 4. Homework Evaluation Checklist
* Student draws or writes a state transition table for a traffic light in the Journal:
  * Must specify States (`RED`, `GREEN`, `YELLOW`), Event triggers (`timer_expires`), and the transition loop.

---

## Session 4: "Decisions, Decisions"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: True/False Condition Matcher
* **00:15 - 00:35 | Board Lesson**: Conditionals (IF/ELSE IF/ELSE) & Logic Operators (`&&`, `||`, `!`)
* **00:35 - 01:00 | Digital Practice**: Security Access Decision Flow
* **01:00 - 01:30 | Sandbox Lab**: Climate Thermostat Controller
* **01:30 - 01:50 | Assessment**: Truth table code audit
* **01:50 - 02:00 | Ethics Discussion**: Algorithmic bias in conditional systems

### 1. Board Lesson Talking Points
* Write conditionals on the board using code brackets:
  ```javascript
  if (temp > 25) { 
    // cooling active
  } else if (temp < 18) { 
    // heating active
  } else { 
    // idle
  }
  ```
* Explain how operators combine checks:
  * `&&` (AND): Both conditions *must* be true.
  * `||` (OR): At least one *must* be true.
  * `!` (NOT): Flips a Boolean value (e.g. `!false` is `true`).

### 2. Socratic Prompting
* *"If the temperature is 20, which block runs? Why does it skip the first two?"*
* *"What is the difference between checking `temp > 25` and `temp >= 25`?"*

### 3. Digital Sandbox Exercises & Solutions

Instead of typing raw Javascript in a blank box, the **Session 4 Sandbox** features a **Thermostat Rules Configurator** that teaches students how to represent nested conditionals and safety overrides visually. 

The student is tasked with configuring 6 rule lines in order of priority (from top to bottom) to control a smart climate gateway.

#### 📋 The Solution Matrix (Correct Configuration):
1. **If Fire Alarm is active** ➔ `EMERGENCY_SHUTDOWN` (Highest priority override)
2. **If Security Lockout is active** ➔ `OFF` (Second priority override)
3. **If Window Open is active** ➔ `VENT` (Third priority override)
4. **If Temperature < 18°C** ➔ `HEAT` (Normal heating trigger)
5. **If Temperature > 26°C** ➔ `AC` (Normal cooling trigger)
6. **Else (Default state)** ➔ `OFF` (Comfort zone idle state)

#### 🕹️ How to run the Simulation:
1. Students select the target modes for each of the 6 dropdown inputs in the configurator.
2. Click **Run Climate Simulation Tests**.
3. The visual telemetry panel will change in real-time as the compiler runs 6 separate environmental test scenarios (Fire Alarm, Lockout Override, Window Ventilation, Cold Trigger, Hot Trigger, Comfort Zone).
4. Verify if the terminal print checks output `PASSED` for all test cases.

* **Purpose of the Exercise**:
  - Teach order of precedence in conditionals. Students learn that putting a rule with higher precedence (like Fire Alarm) at the bottom will fail because the compiler evaluates branches sequentially from top to bottom.
* **Tutor Check Question**: *"If the window is open (which requires VENT), but a fire alarm is active, why does the system shut down instead of venting?"* (Because the Fire Alarm check is placed at Rule 1, which evaluates first. The computer stops looking at lower priority rules as soon as it matches a true condition).

### 4. Homework Evaluation Checklist
* Review student's "Weather Decision Rules" in the Journal:
  * Must utilize conditionals (`if`, `else if`, `else`) and logical operators (e.g. `isRaining === true && temp < 15`).

---

## Session 5: "Round and Round — Loops"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Loop Tracing Interface
* **00:15 - 00:35 | Board Lesson**: `for` Loops vs. `while` Loops & Exit Boundaries
* **00:35 - 01:00 | Digital Practice**: Spot the Infinite Loop
* **01:00 - 01:30 | Sandbox Lab**: SmartPetFeeder Loops
* **01:30 - 01:50 | Assessment**: Value tracing exercises
* **01:50 - 02:00 | Ethics Discussion**: Loop addiction mechanics in apps

### 1. Board Lesson Talking Points
* Compare loop types:
  * **For loop (Count)**: When we know *exactly* how many times we repeat (e.g., `for (let i = 0; i < 5; i++)`).
  * **While loop (Condition)**: Repeat until a state changes (e.g., `while (waterLevel < 100)`).
* **The Infinite Loop**: If a condition never turns false, the CPU locks up, causing the app to freeze.

### 2. Socratic Prompting
* *"In `while (count < 3)`, if we never increase `count`, how many times will the loop run?"* (Forever).
* *"How does the index variable `i++` change values on each loop cycle?"*

### 3. Digital Sandbox Exercises & Solutions

  ##### **Exercise 5.1: Fixed Sweep**
  * **How to do it**:
    1. Drag and drop the `for` counting loop: `for (let i = 0; i < 5; i++)`.
    2. Place the `sweepPanel()` action block inside the loop body.
    3. Click **Execute** and watch the clean counter increase to 5.
  * **Purpose of the Exercise**:
    - Introduce students to counting iteration loops where the number of executions is predetermined.
  * **What the Student Learns**:
    - Iteration syntax parts: counter initialization (`let i = 0`), condition boundary (`i < 5`), and index increment (`i++`).
  * **Tutor Check Question**: *"If we change `i < 5` to `i <= 5`, how many times will the loop execute?"* (6 times, because it runs for 0, 1, 2, 3, 4, and 5).

  ##### **Exercise 5.2: Pumping Level**
  * **How to do it**:
    1. Drag and drop the `while` loop block: `while (waterLevel < 100)`.
    2. Place the `pumpWater()` action block inside the loop.
    3. Click **Execute** and verify the pump runs until water sensor reads 100.
  * **Purpose of the Exercise**:
    - Practice conditional execution loops that repeat until a specific state condition turns false.
  * **What the Student Learns**:
    - While loops are ideal when we do not know the exact number of iterations beforehand (e.g. sensor readings).
  * **Tutor Check Question**: *"What happens if the waterLevel starts at 150? Does the loop run at least once?"* (No, because the condition is checked at the start, and it evaluates to false immediately).

  ##### **Exercise 5.3: Exit Debugger**
  * **How to do it**:
    1. Observe the preloaded infinite loop: `let i = 0; while (i < 3) { doSomething(); }` which crashes the sandbox due to memory overflow.
    2. Edit the code block to insert the increment step: `i++;` (or `i = i + 1;`) inside the body.
    3. Click **Execute** to run safely.
  * **Purpose of the Exercise**:
    - Learn to identify and repair infinite loop faults.
  * **What the Student Learns**:
    - A loop must modify state variables referenced in its condition check so that the check eventually evaluates to false.
  * **Tutor Check Question**: *"What happens to the computer when an infinite loop runs?"* (The CPU gets stuck executing the loop forever, causing the browser or application to freeze/crash).

  ##### **Exercise 5.4: Nested Loop Grid**
  * **How to do it**:
    1. Assemble a nested structure using two `for` loops:
       ```javascript
       for (let col = 0; col < 3; col++) {
         for (let row = 0; row < 3; row++) {
           sweepPanelGrid(col, row);
         }
       }
       ```
    2. Click **Execute** to watch the robotic cleaner sweep a 3x3 grid panel chronologically.
  * **Purpose of the Exercise**:
    - Introduce multi-dimensional iteration (loops inside loops).
  * **What the Student Learns**:
    - Nested loop order: The inner loop executes to completion for *every single* step of the outer loop.
  * **Tutor Check Question**: *"How many total panel sweeps are executed in a 3x3 nested loop?"* (9 sweeps, because the inner loop runs 3 times for each of the 3 outer loop steps).

  ##### **Exercise 5.5: Early Loop Exit**
  * **How to do it**:
    1. Set up a conditional check with an early exit statement inside the loop:
       ```javascript
       while (waterLevel < 100) {
         pumpWater();
         if (battery < 20) {
           break;
         }
       }
       ```
    2. Click **Execute** and watch the pump terminate early when battery drops.
  * **Purpose of the Exercise**:
    - Introduce the `break` statement to exit loops early when unexpected conditions occur.
  * **What the Student Learns**:
    - The `break` keyword immediately escapes the current loop block, ignoring the loop's main condition.
  * **Tutor Check Question**: *"Why would we want to break a loop early instead of just waiting for the main condition?"* (To prevent hardware damage, preserve system battery, or escape when an emergency trigger is activated).

### 4. Homework Evaluation Checklist
* Journal check: Must list 2 daily loops using JavaScript-like loop syntax with proper conditional boundary statements.

---

## Session 6: "Building with Blocks to Code"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Visual Translation Matcher
* **00:15 - 00:35 | Board Lesson**: Blocks to Code Mapping
* **00:35 - 01:00 | Digital Practice**: Logic Block Code Translator
* **01:00 - 01:30 | Sandbox Lab**: Smart Light Grid Blocks
* **01:30 - 01:50 | Assessment**: Mapping compilation errors
* **01:50 - 02:00 | Ethics Discussion**: Municipal systems remote control overrides

### 1. Board Lesson Talking Points
* Explain how visual blocks (like Scratch or Blockly) represent real JavaScript syntax.
* Show side-by-side comparison of a block "repeat 10" with `for (let i = 0; i < 10; i++)`.
* Understanding compiled code outputs.

### 2. Socratic Prompting
* *"When we click the 'Show Code' button, where does this Javascript come from?"* (The editor compiles the visual tree).
* *"How does a parameter block like `50% brightness` look in JavaScript syntax?"* (`setBrightness(50);`).

### 3. Digital Sandbox Exercises & Solutions

  ##### **Exercise 6.1: Block Assembly**
  * **How to do it**:
    1. Drag visual block blocks into the workspace workspace:
       - `IF` condition block ➔ place `motionDetected` variable check set to `false`.
       - Place the execution action block `setBrightness(50)` inside the `THEN` socket.
    2. Click **Run Block Code** to watch the compiled JavaScript dim the lights.
  * **Purpose of the Exercise**:
    - Introduce students to compiling code structures using a visual block interface.
  * **What the Student Learns**:
    - Blocks map to raw text code syntax; indentations and brackets are handled automatically under the hood by block connectors.
  * **Tutor Check Question**: *"What happens to the brackets `{}` in the compiled code when we plug one block into another?"* (The compiler automatically wraps the blocks in brackets to form syntactically valid Javascript code).

  ##### **Exercise 6.2: Syntax Link**
  * **How to do it**:
    1. Draw virtual linking wires connecting visual block stacks on the left with text statements on the right:
       - `Repeat 10 times` block stack ➔ `for (let i = 0; i < 10; i++)`.
       - `If / Else` block stack ➔ `if (...) { ... } else { ... }`.
       - Variable declaration block ➔ `let status = "active";`.
    2. Click **Submit Matches** to verify connections.
  * **Purpose of the Exercise**:
    - Develop the student's cognitive map connecting visual logic nodes to their raw text equivalents.
  * **What the Student Learns**:
    - Translating block loops, conditionals, and variables to Javascript syntax.
  * **Tutor Check Question**: *"Which visual block element matches the increment section `i++` in a text loop?"* (The repeat count limit setting).

  ##### **Exercise 6.3: Code Override**
  * **How to do it**:
    1. Open the "Show Code" panel which reveals the compiled read-only JavaScript.
    2. Toggle the "Edit Raw Code" switch.
    3. Modify line 12: change `overrideAlarms(false)` to `overrideAlarms(true)`.
    4. Click **Execute Raw Code** to run and bypass system alarm parameters.
  * **Purpose of the Exercise**:
    - Learn to interact directly with generated raw code panels to enforce manual overrides.
  * **What the Student Learns**:
    - Compiled code panels are files that can be edited directly without relying on the block workspace.
  * **Tutor Check Question**: *"Why would a programmer edit raw code directly instead of always using blocks?"* (Because text code is faster to write, more expressive, and allows advanced configurations not available in standard block toolboxes).

  ##### **Exercise 6.4: Variable Loop Assembler**
  * **How to do it**:
    1. In the block workspace, drag a `Repeat 5 times` loop block.
    2. Place a `setBrightness(lightList[i], 10)` block inside the loop.
    3. Insert the loop index variable `i` block inside the array index bracket slot of the `lightList` block.
    4. Click **Run Block Code**.
  * **Purpose of the Exercise**:
    - Enforce referencing array indices dynamically using a loop index variable.
  * **What the Student Learns**:
    - Loop counters can be used as index variables to iterate through lists (arrays) of items sequentially.
  * **Tutor Check Question**: *"If `i` starts at 0, which light in the `lightList` list is accessed first?"* (The first item, at index `0`).

  ##### **Exercise 6.5: Assertion Block Compiler**
  * **How to do it**:
    1. Assemble a compound block check:
       - Drag an `AND` comparison block.
       - In slot 1, insert the condition: `isDaylight === false`.
       - In slot 2, insert an `OR` logic block checking `motionDetected === true` OR `emergencyOverride === true`.
    2. Plug this entire compound check block into an `IF` block.
    3. Click **Compile and Run** to verify access.
  * **Purpose of the Exercise**:
    - Practice compiling compound boolean statements with logical parenthetical ordering.
  * **What the Student Learns**:
    - Visual nesting of comparison blocks compiles into standard JavaScript parenthetical ordering: `if (isDaylight === false && (motionDetected === true || emergencyOverride === true))`.
  * **Tutor Check Question**: *"What happens if we put the OR block on the outside and the AND block on the inside? Does the logic change?"* (Yes, the mathematical grouping of conditions changes, which changes how access is validated).

### 4. Homework Evaluation Checklist
* Journal check: Student must translate a conditional logic statement into equivalent JavaScript syntax:
  ```javascript
  if (temperature > 30) { turnOnFan(); } 
  else { turnOffFan(); }
  ```

---

## Session 7: "Breaking Big Problems Into Small Ones"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Stopwatch Deconstruction Game
* **00:15 - 00:35 | Board Lesson**: Problem Decomposition & JavaScript Functions
* **00:35 - 01:00 | Digital Practice**: Game architecture mapping
* **01:00 - 01:30 | Sandbox Lab**: Traffic Light modular setup
* **01:30 - 01:50 | Assessment**: Audit connection failures
* **01:50 - 02:00 | Ethics Discussion**: Responsibility of modular software failures

### 1. Board Lesson Talking Points
* **Decomposition**: Breaking a large monolith system into independent modules.
* **Function Syntax**: Declaring a block of code as a reusable module:
  ```javascript
  function checkCollision() {
    // logic rules
  }
  ```
* Explain why splitting files makes testing and understanding code easier.

### 2. Socratic Prompting
* *"If our traffic light timer function crashes, does the pedestrian button function still work? How should we handle safety separation?"*
* *"Why do we name functions using verbs?"* (They represent actions/processing steps).

### 3. Digital Sandbox Exercises & Solutions

  ##### **Exercise 7.1: Stopwatch Modules**
  * **How to do it**:
    1. In the deconstructed system layout, drag functions and name them:
       - `function startTimer()` for booting the clock pulses.
       - `function incrementTime()` to increase the count variable.
       - `function renderDisplay()` to refresh the screen layout.
    2. Click **Test Components** to verify functional declarations compilation.
  * **Purpose of the Exercise**:
    - Introduce students to modular programming by dividing user interface screens into logical code modules.
  * **What the Student Learns**:
    - A modular program splits complex processes into reusable function units, each managing a single concern.
  * **Tutor Check Question**: *"Why is it better to have a separate function for `renderDisplay` instead of mixing it inside `incrementTime`?"* (Because UI rendering is separate from counting logic; keeping them modular allows us to modify the layout without changing the timer arithmetic).

  ##### **Exercise 7.2: Module Dependencies**
  * **How to do it**:
    1. Click on the dependency binder graph.
    2. Connect the output of `startTimer()` to trigger the execution of `incrementTime()`.
    3. Verify that the time count increments periodically when the timer pulses occur.
  * **Purpose of the Exercise**:
    - Explain component-level dependencies (how one module relies on another's output or events to run).
  * **What the Student Learns**:
    - Modules do not run in absolute isolation; they communicate by binding event signals.
  * **Tutor Check Question**: *"If `startTimer` is broken, can `incrementTime` run?"* (No, because `incrementTime` depends on timer pulse signals to trigger).

  ##### **Exercise 7.3: Deadlock Mitigation**
  * **How to do it**:
    1. Identify the bug: the UI render function runs in an active loop on the main timer thread, freezing the screen buttons.
    2. Decouple the UI render thread by binding it to a periodic event listener rather than placing it directly inside the timing loop.
    3. Run simulator to verify buttons remain clickable.
  * **Purpose of the Exercise**:
    - Teach students how high-coupling (tightly binding modules) causes system-wide deadlocks.
  * **What the Student Learns**:
    - Thread safety and coupling. Decoupling rendering operations ensures core timing modules continue running smoothly.
  * **Tutor Check Question**: *"What does 'decoupling' mean in modular design?"* (Separating tasks so that a slowdown or block in one module doesn't freeze the other).

  ##### **Exercise 7.4: Sub-System Isolation**
  * **How to do it**:
    1. Review the traffic light controller timing script: a database logging function failure crashes the green/red signal switching cycles.
    2. Wrap the database logging step inside an independent isolated function `logPedestrianActivity()`.
    3. Modify the main script to trigger this function asynchronously so it runs on a separate threat context.
    4. Click **Verify Isolation** to confirm signal cycles run even when database writes fail.
  * **Purpose of the Exercise**:
    - Master modular fault isolation (preventing non-critical errors from cascading and crashing critical systems).
  * **What the Student Learns**:
    - Core functions should never have critical dependencies on telemetry or logging modules.
  * **Tutor Check Question**: *"Why is it vital that a logging system failure doesn't crash a traffic light's core signal timers?"* (Because a signal crash is a high-risk physical hazard, while logging is non-critical).

  ##### **Exercise 7.5: Shared Variable Locks**
  * **How to do it**:
    1. Identify the race condition: two functions are attempting to modify `isLightActive` simultaneously, causing warning loops.
    2. Declare a lock check guard:
       ```javascript
       let isUpdating = false;
       function setSignalState(newState) {
         if (isUpdating === true) return;
         isUpdating = true;
         isLightActive = newState;
         isUpdating = false;
       }
       ```
    3. Click **Verify Synchronization** to run.
  * **Purpose of the Exercise**:
    - Introduce shared resource management and lock guards.
  * **What the Student Learns**:
    - When multiple functions access a single global state variable, updates must be controlled using locks to prevent data corruption.
  * **Tutor Check Question**: *"What is a race condition?"* (When two separate code loops try to write to the same variable at the same time, leading to unpredictable errors).

### 4. Homework Evaluation Checklist
* Journal check: Student must list 3 distinct function names/signatures for a video game:
  `function applyGravity()`, `function addPoints()`, `function checkCollision()`.

---

## Session 8: "Designing Before Building"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Blueprint Variable Matching
* **00:15 - 00:35 | Board Lesson**: User Journeys, Variables & Types
* **00:35 - 01:00 | Digital Practice**: UI Mockup Variable Extraction
* **01:00 - 01:30 | Sandbox Lab**: Habit Tracker Blueprinting
* **01:30 - 01:50 | Assessment**: Variable constraints checks
* **01:50 - 02:00 | Ethics Discussion**: Security vulnerabilities caused by hasty execution without planning

### 1. Board Lesson Talking Points
* **User Journeys**: Visualizing step-by-step screens.
* **Variable Declarations**:
  * Use `let` for variables that change: `let score = 0;`.
  * Use `const` for variables that are constant: `const maxAttempts = 3;`.
* Connect user inputs to data storage containers.

### 2. Socratic Prompting
* *"Should the user's account password be a variable or constant? What type should it be?"* (Variable; String).
* *"Why do we plan the data structure before writing the page UI?"*

### 3. Digital Sandbox Exercises & Solutions

  ##### **Exercise 8.1: Var Mapping**
  * **How to do it**:
    1. In the Quiz App UI designer, map input fields to variable types:
       - `nameInput` ➔ select `String` type card
       - `ageInput` ➔ select `Number` type card
       - `agreeTermsCheckbox` ➔ select `Boolean` type card
    2. Click **Validate Mapping** to confirm type definitions.
  * **Purpose of the Exercise**:
    - Teach students how to map user interface input elements to memory database structures.
  * **What the Student Learns**:
    - All visual input data maps directly to a backing variable container with a strict data type check.
  * **Tutor Check Question**: *"Why does the checkbox map to a Boolean type instead of a String?"* (Because a checkbox can only be checked or unchecked—a binary true/false state).

  ##### **Exercise 8.2: Variables Declaration**
  * **How to do it**:
    1. Write raw JS variable declarations inside the configuration block:
       ```javascript
       let score = 0;
       let isFinished = false;
       const maxAttempts = 3;
       ```
    2. Click **Apply Declarations** to run.
  * **Purpose of the Exercise**:
    - Practice variable initialization syntax in raw JavaScript (`let` vs. `const`).
  * **What the Student Learns**:
    - Declare changeable states with `let` and unchangeable constants with `const`.
  * **Tutor Check Question**: *"Why is `maxAttempts` declared as `const` while `score` is `let`?"* (Because the score updates as the game runs, while the maximum permitted attempts limit remains unchanged).

  ##### **Exercise 8.3: Operators Logic**
  * **How to do it**:
    1. Write logical operators to combine quiz state checks:
       ```javascript
       if (attempts < maxAttempts && solved === false) {
         allowRetry = true;
       }
       ```
    2. Click **Verify Logic** to run check simulations.
  * **Purpose of the Exercise**:
    - Combine multiple variables into single conditional branches using boolean operators (`&&` and `||`).
  * **What the Student Learns**:
    - Enforcing strict security logic gates (e.g. limiting retries based on system attempt constants).
  * **Tutor Check Question**: *"If attempts is 2, but the puzzle is solved (`solved = true`), is retry allowed?"* (No, because `solved === false` is false, and AND `&&` requires both checks to pass).

  ##### **Exercise 8.4: Data Validation Blueprint**
  * **How to do it**:
    1. Open the blueprint planner. Create a rule check validating email parameters:
       ```javascript
       let email = "";
       let isValid = email.includes("@");
       ```
    2. Enforce: if `isValid` is false, display warning messages.
    3. Click **Verify Blueprint** to compile rules.
  * **Purpose of the Exercise**:
    - Learn to design parameter validation rules during the blueprint design phase.
  * **What the Student Learns**:
    - Input parameters must be structurally validated before database operations are authorized.
  * **Tutor Check Question**: *"Why do we plan data validations in the blueprint phase instead of coding them directly?"* (To map security limits early, ensuring no validation gates are missed during coding).

  ##### **Exercise 8.5: Fail-State Design Blueprint**
  * **How to do it**:
    1. Configure default fallback initial values for sensor failures:
       ```javascript
       let systemStatus = "offline";
       let backupPower = 100;
       ```
    2. Write a rule checking if main connection fails, set status variables to fallback values.
    3. Click **Verify Fail-Safe** to test simulator.
  * **Purpose of the Exercise**:
    - Design fail-safe system variables for resilient operations.
  * **What the Student Learns**:
    - Graceful system degradation: initializing variables with safe baseline fallbacks prevents program crashes.
  * **Tutor Check Question**: *"What value should a thermometer variable hold if the physical sensor disconnected?"* (A default fallback indicator like `null` or a specific error code, combined with an offline state flag).

### 4. Homework Evaluation Checklist
* Journal check: Must list 4 variables with type declarations and write a JS condition using logical operators (e.g. `if (missedDays > 1 || isCompletedToday === false)`).

---

## Session 9: "Connecting the Pieces"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Data Pipeline Simulation
* **00:15 - 00:35 | Board Lesson**: Function Arguments, Parameters, and Returns
* **00:35 - 01:00 | Digital Practice**: Interface Contract Connections
* **01:00 - 01:30 | Sandbox Lab**: Thermostat climate arguments
* **01:30 - 01:50 | Assessment**: Return value debugging
* **01:50 - 02:00 | Ethics Discussion**: API data sharing leaks

### 1. Board Lesson Talking Points
* **Parameters**: The inputs a function expects: `function sum(a, b)`.
* **Arguments**: The actual data values passed: `sum(5, 10)`.
* **Return**: The result sent back from the function: `return a + b;`.
* Visual pipeline showing variables flowing in and results flowing out.

### 2. Socratic Prompting
* *"If a function expects a number, but you pass a string argument, what will happen inside the code?"*
* *"What is the difference between console logging a value and returning it?"*

### 3. Digital Sandbox Exercises & Solutions

  ##### **Exercise 9.1: Pipeline Routing**
  * **How to do it**:
    1. In the sensor grid pipeline layout, connect output pin of `readSensor()` directly to input slot of `processData()`.
    2. Click **Test Flow** to verify temperature values update dynamically.
  * **Purpose of the Exercise**:
    - Learn to route data outputs from one function directly into the input parameters of another function.
  * **What the Student Learns**:
    - Data flows through a program by connecting function calls.
  * **Tutor Check Question**: *"What happens if the output data type of `readSensor` doesn't match the input parameter type expected by `processData`?"* (The data pipeline will break, causing a processing error).

  ##### **Exercise 9.2: Parameter Binding**
  * **How to do it**:
    1. In the gate access validation script, invoke the validation function passing the correct arguments: `checkAccess(currentToken, activeGateId)`.
    2. Click **Run Check** to verify access is granted.
  * **Purpose of the Exercise**:
    - Practice calling a function with multiple arguments that map to its defined parameters.
  * **What the Student Learns**:
    - Arguments are values passed inside parentheses during a function call, mapped by position to parameters.
  * **Tutor Check Question**: *"What happens if we swap the arguments and run `checkAccess(activeGateId, currentToken)`?"* (The function will map `activeGateId` to `token`, and `currentToken` to `gateId`, causing a validation failure because the values are in the wrong positions).

  ##### **Exercise 9.3: Return Binding**
  * **How to do it**:
    1. Capture the return value of the airlock check function inside a status variable:
       ```javascript
       let status = updateAirlock(sensorFeed);
       ```
    2. Pass the `status` variable to the UI renderer.
    3. Click **Simulate** to run.
  * **Purpose of the Exercise**:
    - Capture and store the output (return value) of a function call to be used in later computations.
  * **What the Student Learns**:
    - Functions can return values using the `return` keyword, which can then be assigned to variables.
  * **Tutor Check Question**: *"If a function doesn't write a `return` statement, what value is assigned to our status variable?"* (It will be assigned `undefined`).

  ##### **Exercise 9.4: Multi-Param Computation**
  * **How to do it**:
    1. Write a function call that passes three parameters to compute margins:
       ```javascript
       let alarmActive = checkSafetyMargin(currentPressure, maxPressure, safetyFactor);
       ```
    2. Link `alarmActive` to the alert light output.
    3. Click **Simulate** to test threshold alerts.
  * **Purpose of the Exercise**:
    - Understand multi-variable parameter binding inside computational functions.
  * **What the Student Learns**:
    - Functions can receive multiple arguments of varying data types to perform calculations.
  * **Tutor Check Question**: *"How does the computer know which argument goes to which parameter?"* (By matching their order in the parentheses: first argument maps to the first parameter, second to the second, and so on).

  ##### **Exercise 9.5: Callback Pipeline Hook**
  * **How to do it**:
    1. Hook the return value of one validator function directly as the input to the notifier check:
       ```javascript
       let isAuthorized = validatePasscode(userCode);
       triggerAirlock(isAuthorized);
       ```
    2. Click **Simulate** to test complete verification loop.
  * **Purpose of the Exercise**:
    - Chain independent modular functions together by linking outputs to inputs.
  * **What the Student Learns**:
    - Complex pipelines are constructed by nesting or sequencing function parameters and returns.
  * **Tutor Check Question**: *"Could we write this in a single line like `triggerAirlock(validatePasscode(userCode))`? Does it do the same thing?"* (Yes, it does the exact same thing; it passes the return value of `validatePasscode` directly as the argument to `triggerAirlock` without needing a temporary variable).

### 4. Homework Evaluation Checklist
* Journal check: Student writes standard JS parameter mapping:
  ```javascript
  function calculateTotal(price, taxRate) {
    return price + (price * taxRate);
  }
  ```

---

## Session 10: "The Art of Breaking Things"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Field boundary fuzz check
* **00:15 - 00:35 | Board Lesson**: Edge Cases, Boundary Limits, and JS Test Objects
* **00:35 - 01:00 | Digital Practice**: Edge Case Matrix Builder
* **01:00 - 01:30 | Sandbox Lab**: Calculator test script validation
* **01:30 - 01:50 | Assessment**: Trace boundary anomalies
* **01:50 - 02:00 | Ethics Discussion**: The collaborative role of QA testing vs coding

### 1. Board Lesson Talking Points
* **Happy Path**: Testing with expected inputs.
* **Edge Cases**: Empty fields, negative numbers, extreme values, or symbols.
* **Test Objects**: Representing test suites in JS array structure:
  ```javascript
  const testCase = {
    input: -5,
    expected: "Error: Negative input"
  };
  ```

### 2. Socratic Prompting
* *"If your form validation only checks age < 100, what happens if the user inputs `-10` or `1000`?"*
* *"Why do we package input and expected output together in a test object?"*

### 3. Digital Sandbox Exercises & Solutions

  ##### **Exercise 10.1: Fuzz checks**
  * **How to do it**:
    1. In the input fuzzer panel, run verification test cases on the username field.
    2. Input extreme values: `"A"*1000` (length 1000) and `undefined`.
    3. Verify that the fuzzer catches system crashes.
  * **Purpose of the Exercise**:
    - Introduce students to **fuzzing** (sending unexpected or random data to inputs to see if the program crashes).
  * **What the Student Learns**:
    - Computers can crash if input length is infinite or data is undefined.
  * **Tutor Check Question**: *"What happens if our user input field doesn't limit length, and an attacker inputs a million characters?"* (The database or browser will run out of memory, causing a crash or lockup).

  ##### **Exercise 10.2: Test assertion Objects**
  * **How to do it**:
    1. Write test case objects inside the test runner script:
       ```javascript
       const testCase1 = { input: -5, expected: "Error: Negative input" };
       const testCase2 = { input: "", expected: "Error: Empty input" };
       ```
    2. Click **Run Test Cases** to execute.
  * **Purpose of the Exercise**:
    - Structure automated testing using JavaScript object declarations containing input parameters and expected return values.
  * **What the Student Learns**:
    - Automated tests compare actual outputs against declared `expected` values.
  * **Tutor Check Question**: *"If the calculator returns `NaN` for an empty input, but our test object expected `"Error: Empty input"`, does the test pass?"* (No, because the actual return value doesn't match the expected string exactly).

  ##### **Exercise 10.3: Boundary Fix**
  * **How to do it**:
    1. Open the calculator boundary validation logic.
    2. Enforce limits:
       ```javascript
       if (numberInput > 9999 || numberInput < -9999) {
         throw new Error("Out of bounds");
       }
       ```
    3. Click **Run Suite** to verify all tests pass.
  * **Purpose of the Exercise**:
    - Repair program code to pass boundary condition tests.
  * **What the Student Learns**:
    - Fixing errors requires coding boundary guard checks to restrict numbers within safe arithmetic bounds.
  * **Tutor Check Question**: *"Why is `9999` a typical boundary limit in simple calculator designs?"* (To prevent display overflows and arithmetic number errors on small screens).

  ##### **Exercise 10.4: Null Checks Validation**
  * **How to do it**:
    1. Write test case objects to handle missing/blank fields:
       ```javascript
       const testCase3 = { input: null, expected: "Error: Null Input" };
       const testCase4 = { input: undefined, expected: "Error: Undefined Input" };
       ```
    2. Run the test suite and verify checks fail gracefully.
  * **Purpose of the Exercise**:
    - Practice writing boundary test checks for null or empty object variables.
  * **What the Student Learns**:
    - Missing data (`null`) is a frequent cause of production crashes and must always have corresponding test checks.
  * **Tutor Check Question**: *"What is the difference between an empty string `""` and a `null` value?"* (An empty string is a text object containing zero characters, whereas `null` represents the complete absence of any object or value).

  ##### **Exercise 10.5: Array Limits Validation**
  * **How to do it**:
    1. Write a test case checking length limits for list arrays:
       ```javascript
       const testCaseArray = { input: [1,2,3,4,5,6], expected: "Error: Limit Exceeded" };
       ```
    2. Run test checks to verify array limits.
  * **Purpose of the Exercise**:
    - Validate that lists (arrays) of parameters are tested against size thresholds.
  * **What the Student Learns**:
    - Databases and memory buffers have finite space; arrays must be tested for overflow limits.
  * **Tutor Check Question**: *"Why do email systems restrict the number of file attachments you can send in one go?"* (To prevent memory and bandwidth overflows by enforcing array length limits).

### 4. Homework Evaluation Checklist
* Journal check: Must list 5 test case objects checking boundary parameters for a password validation check (e.g. checks for length <= 7).

---

## Session 11: "Designing for Failure"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: App Error Screen Diagnostic
* **00:15 - 00:35 | Board Lesson**: Try/Catch Error Handling & Exception Throwing
* **00:35 - 01:00 | Digital Practice**: Form validation error paths
* **01:00 - 01:30 | Sandbox Lab**: Secure Lock Catch limits
* **01:30 - 01:50 | Assessment**: Degradation loop traces
* **01:50 - 02:00 | Ethics Discussion**: Fail-safe defaults in autopilot/medical hardware

### 1. Board Lesson Talking Points
* Explain why apps crash: Unhandled exceptions.
* Introduce `try` (code that might fail) and `catch` (code that handles the error):
  ```javascript
  try {
    // run code
  } catch (error) {
    // handle fallback gracefully
  }
  ```
* Enforcing rules using `throw new Error("Message")`.

### 2. Socratic Prompting
* *"What happens to the remaining lines of code inside a try block if line 2 throws an error?"* (Execution jumps instantly to the catch block).
* *"Why is showing a cryptic system crash message to a regular user bad practice?"*

### 3. Digital Sandbox Exercises & Solutions

  ##### **Exercise 11.1: Catch blocks**
  * **How to do it**:
    1. Wrap the passcode validation function call inside a `try` block.
    2. Write catch logic:
       ```javascript
       catch (err) {
         displayMessage(err.message);
       }
       ```
    3. Click **Execute** and test with an incorrect passcode to see the message render without a system crash.
  * **Purpose of the Exercise**:
    - Introduce students to wrapping error-prone operations inside standard JS exception handlers.
  * **What the Student Learns**:
    - If code inside the `try` block throws an exception, execution jumps directly to the `catch` block to handle it.
  * **Tutor Check Question**: *"Why is a try/catch block necessary if the passcode matches? Does the catch run then?"* (No, the catch block is skipped if no errors occur, but it is necessary to protect the system if an error *does* occur).

  ##### **Exercise 11.2: Throw assertions**
  * **How to do it**:
    1. Write guard checks that validate user inputs:
       ```javascript
       if (!cardKey) {
         throw new Error("Card key missing");
       }
       ```
    2. Run simulation and attempt keycard check without input.
  * **Purpose of the Exercise**:
    - Practice throwing explicit error objects when business rules are violated.
  * **What the Student Learns**:
    - Developers use `throw new Error()` to declare that something went wrong, halting normal execution.
  * **Tutor Check Question**: *"What happens if we throw an error but do not have a try/catch block surrounding it?"* (The program halts completely and crashes).

  ##### **Exercise 11.3: Keypad Guard**
  * **How to do it**:
    1. Declare a mutable counter: `let attempts = 0;`.
    2. Inside the catch block, increment attempts: `attempts++;`.
    3. Add a check: if `attempts >= 3`, disable the input UI.
    4. Click **Simulate** to test security lockout.
  * **Purpose of the Exercise**:
    - Track state persistence across caught errors to build a security lockout.
  * **What the Student Learns**:
    - Caught errors are states that can update program variables, driving security controls.
  * **Tutor Check Question**: *"Why must the `attempts` variable be declared outside of the try/catch block?"* (If declared inside, it would reset to 0 every time the block executes, making it impossible to count total attempts).

  ##### **Exercise 11.4: Error Log Wrapper**
  * **How to do it**:
    1. Add system logging inside the catch handler:
       ```javascript
       catch (error) {
         writeToSystemLog("Auth failure: " + error.message);
       }
       ```
    2. Run the simulator, trigger a failure, and verify the log updates.
  * **Purpose of the Exercise**:
    - Use logging mechanisms to record diagnostic info on silent failures.
  * **What the Student Learns**:
    - Silent error handling keeps the app running while writing warnings to logs so developers can debug issues later.
  * **Tutor Check Question**: *"Why do we want to log the error message instead of showing it to the customer?"* (Because system errors might contain technical details that confuse users or expose security details to attackers).

  ##### **Exercise 11.5: Retry Loop Recovery**
  * **How to do it**:
    1. Wrap connection check runs in a loop with internal exception handling:
       ```javascript
       let success = false;
       for (let i = 0; i < 3; i++) {
         try {
           success = attemptConnection();
           if (success) {
             break;
           }
         } catch (e) {
           writeToSystemLog("Retry " + (i + 1));
         }
       }
       if (!success) {
         throw new Error("Connection failed");
       }
       ```
    2. Run simulator to verify automatic recovery.
  * **Purpose of the Exercise**:
    - Design self-healing systems that retry failed operations before raising errors.
  * **What the Student Learns**:
    - Loops can coordinate retries for transient failures, shielding users from temporary errors.
  * **Tutor Check Question**: *"Why is a loop useful for retrying instead of just copy-pasting the try/catch block 3 times?"* (Using a loop is cleaner, avoids repetitive code, and makes it easy to change the number of retry attempts later).

### 4. Homework Evaluation Checklist
* Journal check: Must compose a function throwing an error if email has no `@`:
  ```javascript
  if (!email.includes("@")) { throw new Error("Invalid format"); }
  ```

---

## Session 12: Level 1 Assessment & Graduation

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Review criteria checklists
* **00:15 - 01:00 | Digital Assessment Part A**: Blueprint Builder (IPO, States, Variables, Test Cases)
* **01:00 - 01:45 | Assessment Part B**: System Defense Tournament (Malicious QA audit)
* **01:45 - 02:00 | Assessment Part C**: Code Tracing Diagnostic Puzzle

### 1. Tutor Guidance: Evaluation Solutions
* **Part A (Blueprint Check)**: Verify the student mapped 4 logical states (e.g. `Idle`, `Search`, `Loaned`, `Reserved`) with correct transition keys, set variables like `let borrowLimit = 5;`, defined boundary test case objects, and constructed try/catch block error handlers for bounds violations.
* **Part B (Defense Check)**: Test student checks against invalid inputs (e.g. checking that borrowing is blocked when `booksBorrowed >= borrowLimit`).
* **Part C (Diagnostic Check)**: The student must resolve the loop error by identifying that a counting index starts out of bounds or increments in the wrong direction.
* **Take-Home Evaluation**: Assess the student's level of self-reflection on variables and literal logical instruction sets.
