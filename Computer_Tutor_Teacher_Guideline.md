# Computer Tutor: Teacher & Tutor Guidelines (Level 1)

This guideline is designed for the tutor to lead one-on-one sessions for students aged 13–16. It maps out the exact timeline, board explanations, Socratic prompts, digital sandbox solutions, and homework check criteria for each 2-hour session.

---

## Pedagogical Philosophy (AI-Era Shift)
1. **Never Type For the Student**: Let them run into literal logic errors. The learning occurs when they diagnose *why* a machine did exactly what they wrote instead of what they intended.
2. **Socratic Questioning**: When a student gets stuck, do not give the answer. Ask: *"What did the drone terminal log just say?"* or *"Which line is executed immediately after this loop?"*
3. **No Paper, All Digital**: All notes, blueprints, and homework are logged in the student's in-app **Journal** tab.

---

## Session 1: "Literal Logic & Digital Infiltration"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Tutor-Student Drone Infiltration Game
* **00:15 - 00:35 | Board Lesson**: The IPO Model & Sequential Control
* **00:35 - 01:00 | Digital Practice**: In-App Flowchart Sequencer
* **01:00 - 01:30 | Sandbox Lab**: Drone Infiltration Simulator
* **01:30 - 01:50 | Assessment & Debugging**: Auditing execution logs
* **01:50 - 02:00 | Ethics Discussion**: Autonomous systems liability

### 1. Board Lesson Talking Points
* Draw the **IPO Diagram** on the board: `[Input] ➔ [Processing] ➔ [Output]`.
* **The Concept of Variables**: Explain variables as "labeled lockboxes" in the computer's memory. A box labeled `targetCoords` holds a coordinate value. The computer cannot read the value until it is scanned and placed inside that specific box.
* **Sequential Control**: Explain that a computer has zero common sense. If step 2 requires data from step 1, running step 2 first triggers an error or system crash.

### 2. Socratic Prompting
* **Mapping to Exercise 1.2 (Variable Coordinates)**:
  * *Tutor Prompt*: *"How can the drone know where the door is before it performs a scan?"*
  * *Explanation*: If the student sequences `fly_door` before `scan_door`, the drone will fail because its coordinate destination memory is `null` or undefined. Use this question to guide the student to discover the logical **data dependency**—the drone must scan to populate the target variables *before* it can read those variables for navigation.
* **Mapping to Exercise 1.3 (Sequence Correction & Debugging)**:
  * *Tutor Prompt*: *"Look at the terminal logs on the right. Why did the drone crash on step 3?"* (or whichever step is executing).
  * *Explanation*: In the preloaded scrambled sequence, instructions are out of order (e.g. attempting to fly before powering on). The terminal outputs specific error messages. Use this prompt to direct the student's eyes to the terminal log messages instead of letting them guess the solution, helping them connect log readings to step re-ordering.

### 3. Digital Sandbox Exercises & Solutions
* **Exercise 1.1 (Basic Route)**:
  * *Solution*: `power_on` ➔ `scan_door` ➔ `fly_door` ➔ `unlock_door`
  * *Objective*: Learn sequence order.
* **Exercise 1.2 (Variable Coordinates)**:
  * *Solution*: `power_on` ➔ `scan_door` (places target coordinates inside the memory variable) ➔ `fly_door` ➔ `unlock_door`
  * *Objective*: Understand how variables must be loaded before they are referenced.
* **Exercise 1.3 (Sequence Correction)**:
  * *Solution*: Scrambled input block: `fly_door` ➔ `power_on` ➔ `scan_door` ➔ `unlock_door`. Drag blocks to re-order into the standard sequential order.

### 4. Homework Evaluation Checklist
* The student must document a household appliance (e.g. Microwave) in the Journal:
  * **Input**: Keypad numbers (String), door sensor (Boolean).
  * **Process**: Count down timer seconds in a loop, check if door sensor is open.
  * **Output**: Emit waves, beep, display counter numbers.

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
* **Exercise 2.1 (Backpack Sorter)**:
  * *Solution*: Place strings, floats/integers, and toggles in their correct bins.
* **Exercise 2.2 (Rules Configuration)**:
  * *Solution*: Dropdown configurations: `username` ➔ `string`, `passcode` ➔ `number`, `isAdmin` ➔ `boolean`.
* **Exercise 2.3 (Boundary Auditing)**:
  * *Solution*: Set minimum limits (e.g., `passcode >= 1000`) and enforce character existence on `username` to block bypasses.

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
* **Exercise 3.1 (Basic Transition)**:
  * *Rules*: `CLOSED` + `insert_keycard` ➔ `OPEN`, `OPEN` + `push_door` ➔ `CLOSED`.
* **Exercise 3.2 (Hazard Logic)**:
  * *Rules*: `CLOSED` + `push_door` ➔ `ALARM_LOCKED`.
* **Exercise 3.3 (Deadlock Resolution)**:
  * *Rules*: `ALARM_LOCKED` + `reset_alarm` ➔ `CLOSED`.

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
* **Exercise 4.1 (Basic Climate)**:
  * *Solution*: Complete code template: `if (temp > 25) { mode = "cooling"; } else if (temp < 18) { mode = "heating"; } else { mode = "idle"; }`.
* **Exercise 4.2 (Window Override)**:
  * *Solution*: Prepend check: `if (isWindowOpen === true) { mode = "idle"; } else if ...`.
* **Exercise 4.3 (Security Lockout)**:
  * *Solution*: Enforce: `if (temp > 45 && isEmergencyOverride === false) { triggerAlarm(); }`.

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
* **Exercise 5.1 (Fixed Sweep)**:
  * *Solution*: `for (let i = 0; i < 5; i++) { sweepPanel(); }`.
* **Exercise 5.2 (Pumping Level)**:
  * *Solution*: `while (waterLevel < 100) { pumpWater(); }`.
* **Exercise 5.3 (Exit Debugger)**:
  * *Solution*: Student adds increment line `i++;` inside a freezing `while` loop logic block.

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
* **Exercise 6.1 (Block Assembly)**:
  * *Solution*: Drag logic blocks: `IF motionDetected === false THEN setBrightness(50)`.
* **Exercise 6.2 (Syntax Link)**:
  * *Solution*: Drag visual blocks to connect with their literal text code segments.
* **Exercise 6.3 (Code Override)**:
  * *Solution*: Directly edit raw code line params to: `overrideAlarms(true);`.

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
* **Exercise 7.1 (Stopwatch Modules)**: Decompose components into `startTimer()`, `incrementTime()`, and `renderDisplay()`.
* **Exercise 7.2 (Module Dependencies)**: Link connections showing `incrementTime` relies on output pulses from `startTimer`.
* **Exercise 7.3 (Deadlock Mitigation)**: Avoid deadlock by separating loop timers from UI rendering states.

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
* **Exercise 8.1 (Var Mapping)**: Match inputs: `nameInput` ➔ `String`, `ageInput` ➔ `Number`.
* **Exercise 8.2 (Variables Declaration)**:
  ```javascript
  let score = 0;
  let isFinished = false;
  ```
* **Exercise 8.3 (Operators Logic)**: Write boundary rules: `if (attempts < maxAttempts && solved === false)`.

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
* **Exercise 9.1 (Pipeline Routing)**: Student binds `readSensor()` output values directly as the input parameter value for the `processData(val)` function.
* **Exercise 9.2 (Parameter Binding)**: Pass arguments: `checkAccess(token, gateId)`.
* **Exercise 9.3 (Return Binding)**: Capture function return: `let status = updateAirlock(sensorFeed)`.

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
* **Exercise 10.1 (Fuzz checks)**: Connect boundaries: check how the system behaves if input is `undefined`.
* **Exercise 10.2 (Test assertion Objects)**: Write syntax objects:
  ```javascript
  const testCase1 = { input: -5, expected: "Error: Negative input" };
  const testCase2 = { input: "", expected: "Error: Empty input" };
  ```
* **Exercise 10.3 (Boundary Fix)**: Rectify bounds on numbers to block extreme inputs.

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
* **Exercise 11.1 (Catch blocks)**: Configure fallback statements: `catch(err) { displayMessage(err.message); }`.
* **Exercise 11.2 (Throw assertions)**: Write guards: `if (!cardKey) { throw new Error("Card key missing"); }`.
* **Exercise 11.3 (Keypad Guard)**: Implement lockout increment rules: increment attempts on catch blocks, lock system when `attempts >= 3`.

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
* **Part A (Blueprint Check)**: Verify the student mapped 4 logical states (e.g. `Idle`, `Search`, `Loaned`, `Reserved`) with correct transition keys, set variables like `let borrowLimit = 5;`, and defined boundary test case objects.
* **Part B (Defense Check)**: Test student checks against invalid inputs (e.g. checking that borrowing is blocked when `booksBorrowed >= borrowLimit`).
* **Part C (Diagnostic Check)**: The student must resolve the loop error by identifying that a counting index starts out of bounds or increments in the wrong direction.
* **Take-Home Evaluation**: Assess the student's level of self-reflection on variables and literal logical instruction sets.
