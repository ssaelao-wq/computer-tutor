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

---

## 4. Program Structure

| | Level 1: Beginner | Level 2: Intermediate | Level 3: Advanced | Level 4: Engineering |
|---|---|---|---|---|
| **Title** | "The Logic Blueprint" | "The Language & The Copilot" | "The System Architect" | "The Software Engineer" |
| **Focus** | Pure Logic & Sequencing | Code Reading & AI Direction | Orchestration & Security | Real-World Integration & Launch |
| **Syntax Level** | 0% — No code writing | 20% — Reading & understanding | 50% — Structural comprehension | 80% — Professional application composition |
| **Sessions** | 12 sessions × 2 hours | 13 sessions × 2 hours | 14 sessions × 2 hours | 12 sessions × 2 hours |
| **Total Hours** | 24 hours | 26 hours | 28 hours | 24 hours |
| **Assessment** | 1 week (pen & paper + presentation) | 1 week (prompt portfolio + debugging) | 1 week (capstone defense) | 1 week (live launch + system pitch) |

### Age Adaptation Guide

| Age Group | Level 1 Adjustments | Level 2 Adjustments | Level 3 Adjustments | Level 4 Adjustments |
|-----------|--------------------|--------------------|---------------------|---------------------|
| **9–10** | Use physical manipulatives (cards, blocks). Extend to 15 sessions. Simplify vocabulary. Use game-based contexts only. | Defer to age 11+. If attempted: use only one programming language, extend to 15 sessions, simplify PRD to "wish list + rules." | Not recommended. | Not recommended. |
| **11–14** | Core curriculum as designed. | Core curriculum as designed. | Core curriculum as designed. | Core curriculum as designed (highly recommended with teacher scaffolding). |
| **15–17** | Can compress to 10 sessions. Add algorithmic complexity discussions. Use real-world business scenarios. | Can compress to 10 sessions. Introduce basic algorithm analysis. Add collaborative team projects. | Add cloud architecture concepts. Introduce CI/CD pipelines conceptually. Add career pathway discussions. | Complete deployment independently. Integrate real third-party APIs (payment/maps) and deploy to a personal domain. |

## 5. Level 1: Beginner — "The Logic Blueprint"

**Goal:** Train the brain to construct absolute, unambiguous logic without syntax frustration. Build the mental models that underpin all system design.

**Prerequisites:** None. Basic reading comprehension required.

### Module 1: Inputs, Processing, and Outputs (Sessions 1–3)

#### Session 1: "Literal Logic & Drone Infiltration" (2 hours)

**Learning Objectives:**
- Understand that computers execute commands sequentially, literally, and without common sense
- Map out input-process-output (IPO) data paths
- Create strict instruction chains to solve navigation objectives

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: The Human Drone Navigation (15 mins)**
   - *Activity*: One student plays the "Drone Operator" (coder) and another plays the "Tactical Infiltration Drone" (computer).
   - *Action*: The Operator gives commands to navigate the Drone from the back of the classroom to the front door.
   - *Constraint*: The Drone follows instructions **strictly literally** (e.g., if told to "walk forward" without specifying steps, they walk until hitting a wall. If told to "turn right" while moving, they turn but keep sliding).
   - *Debrief*: Highlight that computers do not assume intent. If an instruction is missing or out of order, the program crashes or executes a logical error.

2. **Core Concept Board Lesson: The IPO Model & Sequential Control (20 mins)**
   - *Topic 1*: The Input-Process-Output (IPO) framework. Trace everyday instances (e.g. card key reader: input=ID badge, process=validate lookup, output=unlocked light).
   - *Topic 2*: Linear command chains and order dependency. Show how the outcome of step $N$ depends on step $N-1$ (e.g., you cannot decrypt a vault partition before establishing a secure tunnel).
   - *Topic 3*: The concept of variables as labeled registers containing one state value.

3. **Classroom Practice 1: The Sequence Blueprinting Board Game (25 mins)**
   - *Activity*: Working in pairs, students are given a map of a security grid and a set of command cards (`Power On`, `Scan Subnet`, `Establish SSH Tunnel`, `Bypass Firewall`, `Exfiltrate Logs`).
   - *Action*: Students must arrange their paper cards in the exact logical order to reach the center target without triggering an alarm.
   - *Self-Audit*: The partner acts as the "Malicious Compiler," tracing the steps literally and highlighting gaps (e.g., "You tried to Bypass Firewall before scanning the network. Command ignored, drone detected!").

4. **Digital Sandbox Lab: Cyber Security-Drone Simulator (30 mins)**
   - *Activity*: Students open the **Cyber Detective Hub** website, go to Level 1 Session 1, and launch the Sandbox.
   - *Action*: They interact with the visual **Drone Navigator Simulator**. They drag and test sequence patterns (`power_on`, `scan_door`, `fly_door`, `unlock_door`).
   - *Practice Challenge*: Students must purposely write a sequence that causes the drone to crash, log the specific terminal error, and then write the correct sequence to bypass the door, earning $+100$ XP.

5. **Assessment & Debrief: Log Auditing (20 mins)**
   - *Activity*: The tutor displays three different failed execution logs from the Drone Navigator.
   - *Challenge*: Students must inspect the output messages, identify the logical step that failed, and explain *why* the order was illegal.

6. **Ethics & Automation Discussion (10 mins)**
   - *Topic*: If a self-driving delivery drone crashes because of a logic error in its code, who is responsible? The coder who wrote the sequence, the company that deployed it, or the operator who clicked "Run"?

**📝 Homework (Practice at Home):**
- Choose a household system (e.g., an automatic washing machine or a microwave). Write down a step-by-step sequential algorithm for its operation. Identify the inputs, the processing logic, and the outputs. Bring your instruction list to the next session.

---

#### Session 2: "Backpack Classification & Lock Verification" (2 hours)

**Learning Objectives:**
- Classify cyber signals into basic data types: Strings, Numbers, and Booleans
- Define validation rules to prevent bad input errors (Garbage In, Garbage Out)
- Compose logical verification filters to authenticate security parameters

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: The Crypto-Token Sorting Arena (15 mins)**
   - *Activity*: Hand students cards printed with various data pieces (e.g. `"Vault_A"`, `101`, `true`, `"intruder_alert"`, `0.05`, `false`).
   - *Action*: Students race to group them into three folders labeled: "Text Strings", "Quantities & Codes (Numbers)", and "Toggles (Yes/No Booleans)".
   - *Debrief*: Computers process different data types using completely different physical circuitry. You cannot perform mathematical addition on a text word.

2. **Core Concept Board Lesson: Data Types & Validation Guards (20 mins)**
   - *Topic 1*: Define Strings (anything inside quotation marks), Numbers (integers and decimals), and Booleans (binary state flags: true/false).
   - *Topic 2*: The principle of **"Garbage In, Garbage Out"** (GIGO). Explain how inputs must be checked before being processed.
   - *Topic 3*: Configuration of validation filters (type matching, range checking, existence checks).

3. **Classroom Practice 2: Form Exploitation Exercise (25 mins)**
   - *Activity*: Students are handed a printed mock "Admin Registration Form" with inputs: `username`, `age`, `security_key`, `is_authorized`.
   - *Action*: Students act as "Hacker Exploiter" and "Security Guard." The Hacker attempts to bypass the login by filling in bad data (e.g. writing "banana" in the `age` field, or "YES" in the `is_authorized` boolean field).
   - *Action*: The Security Guard must write explicit type constraints (e.g., "Age must be integer type between 13 and 99; if not, reject form") to block every bypass attempt.

4. **Digital Sandbox Lab: Backpack Sorter & Lock Validator (30 mins)**
   - *Activity*: Students open the **Cyber Detective Hub** Sandbox for Level 1 Session 2.
   - *Action*: They use the interactive **Backpack Sorting Bay** to classify items, then configure the dropdown selectors for the **Lockbox Verification Rules** (`username = string`, `passcode = number`, `isAdmin = boolean`).
   - *Practice Challenge*: Students run credential tests to observe how incorrect rule configurations allow malicious payloads to slip past or block legitimate users, then patch their rules to unlock the lockbox and claim $+100$ XP.

5. **Assessment & Debrief: Data Auditing (20 mins)**
   - *Activity*: Tutor shows a database record containing corrupt data (e.g. a phone number containing letters).
   - *Action*: Students work to write the exact data type validation rules that should have been put in place to prevent this corruption.

6. **Ethics & Data Privacy Moment (10 mins)**
   - *Topic*: If a registration form forces you to choose between two genders, what happens to users who don't fit? How does strict data typing affect real-world representation?

**📝 Homework (Practice at Home):**
- Locate three sign-up forms online (e.g. email registration, game account creation). List three input fields from those forms and write: (1) what data type they expect, and (2) what validation error appears if you enter incorrect data types.

---

#### Session 3: "State Transition Controllers & The Vault" (2 hours)

**Learning Objectives:**
- Diagram systems as Finite State Machines (FSM)
- Track state values and map transition pathways triggered by hardware events
- Configure safe state tables that prevent deadlocks and bypass errors

**Lesson Timeline & Content Breakdown (2 hours):**

1. **Warm-Up: The Classroom State Machine (15 mins)**
   - *Activity*: Define three physical states for the classroom: `IDLE` (sitting), `ACTIVE` (standing), and `ALARM` (waving arms).
   - *Action*: The tutor calls out trigger events: "Signal Received", "Time Elapsed", "Security Breach". Students transition physical postures based on rules written on the board.
   - *Debrief*: Highlight that a system behaves differently in response to the *same* trigger depending on its *current state* (e.g., "Signal Received" in IDLE stands you up, but in ALARM does nothing).

2. **Core Concept Board Lesson: Finite State Machines (20 mins)**
   - *Topic 1*: States (snapshots of a system's current variables) vs Transitions (changes from one state to another).
   - *Topic 2*: Event Triggers (inputs that cause transitions).
   - *Topic 3*: State Tables (the logical matrix mapping `Current State + Event ➔ Next State`). Show how to construct them to prevent illegal states.

3. **Classroom Practice 3: Smart-Device Transition Blueprinting (25 mins)**
   - *Activity*: Students choose a smart device (e.g., smart microwave, digital watch, traffic light controller).
   - *Action*: Students draw circles representing states (e.g., `COOKING`, `PAUSED`, `DOOR_OPEN`, `COMPLETE`) and arrows representing events (e.g., `press_start`, `open_door`, `timer_expires`).
   - *Validation*: A classmate tests the diagram to find "Deadlocks" (e.g. if the door is open while cooking, how does it transition back? Is there a state where the user gets stuck forever?).

4. **Digital Sandbox Lab: Security Vault State Controller (30 mins)**
   - *Activity*: Students open the **Cyber Detective Hub** Sandbox for Level 1 Session 3.
   - *Action*: They use the **Transition Rules Map** dropdowns to link states and events (e.g., `CLOSED` + `insert_keycard` ➔ `OPEN`, `CLOSED` + `push_door` ➔ `ALARM_LOCKED`).
   - *Practice Challenge*: Students interact with the vault graphics panel. They must test their transitions by triggering events live. The system rewards $+100$ XP only when all door states (`CLOSED`, `OPEN`, `ALARM_LOCKED`) are verified, and the system is successfully reset to `CLOSED` without getting deadlocked.

5. **Assessment & Debrief: State Diagnostics (20 mins)**
   - *Activity*: Present a state transition table containing a security hole (e.g., pushing the vault door during `ALARM_LOCKED` transitions it to `OPEN` without a keycard).
   - *Action*: Students identify the logic flaw and rewrite the state table to patch the vulnerability.

6. **Ethics & System Safety Discussion (10 mins)**
   - *Topic*: If a smart elevator's state machine code locks the doors during a fire alarm state (preventing smoke entering but trapping people inside), was the system design correct? How do we balance security with life safety?

**📝 Homework (Practice at Home):**
- Draw a simple state machine diagram for a device you interact with (e.g. an elevator, vending machine, or traffic signal). List: (1) all states, (2) all events, and (3) a transition table showing how it moves from state to state. Include at least one error state (e.g., "What happens if the batteries die?").
- Bring your state diagram to the next session.

---


---

#### Session 4: "Decisions, Decisions" (2 hours)

**Learning Objectives:**
- Construct conditional logic (IF / ELSE IF / ELSE)
- Combine conditions with AND, OR, NOT

**Warm-Up (15 min):**
- **"The Sorting Hat"** — Tutor reads scenarios. Students hold up TRUE or FALSE cards. Start simple ("The sky is blue"), progress to compound ("The sky is blue AND it is raining").

**Core Activity (60 min):**
- **"The Decision Tree Builder"**
  - Scenario: Design a theme park ride access system.
  - Rules: Must be taller than 120cm. Must be older than 8. Must NOT have a heart condition. If accompanied by adult, height rule drops to 100cm.
  - Students build a decision tree (on paper or whiteboard) covering ALL combinations.
  - Tutor introduces edge cases: *"What about someone who is exactly 120cm? What about someone who doesn't know if they have a heart condition?"*

- **"Truth Table Puzzles"**
  - Present logic puzzles as truth tables:
    - "The door opens IF (key is correct AND alarm is off) OR (emergency override is active)"
    - Students fill in all possible combinations and determine results.
  - Progress to a 3-variable truth table.

**Mini-Lesson (20 min):**
- Formalize: **IF**, **ELSE IF**, **ELSE** as decision branches
- **AND** (both must be true), **OR** (at least one true), **NOT** (flip the value)
- Visual notation for decision diamonds in flowcharts

**Closing Activity (15 min):**
- **"Write the Rules for a Game"** — Students write all the conditional rules for Rock-Paper-Scissors. Must cover every combination including ties and invalid inputs.

**Ethics Moment (10 min):**
- *"A loan application AI uses rules: IF income > X AND credit_score > Y THEN approve. What if these rules accidentally discriminate against certain groups of people?"* Introduction to algorithmic bias through conditionals.

**📝 Homework (Practice at Home):**
- Design a decision tree for a real-life decision: "What should I wear today?" Include at least 4 conditions (weather, temperature, activity planned, dress code) using AND, OR, and NOT. Create a complete truth table for at least 2 combined conditions.
- Bring your decision tree and truth table to the next session.

---

#### Session 5: "Round and Round — Loops" (2 hours)

**Learning Objectives:**
- Distinguish between "repeat N times" and "repeat until condition" loops
- Identify and prevent infinite loops

**Warm-Up (15 min):**
- **"The Stuck Robot"** — Tutor acts as a robot that says "Hello" forever. Students must figure out how to make it stop. Introduce the concept: *"What's the EXIT CONDITION?"*

**Core Activity (60 min):**
- **"Loop the Playground"**
  - Students identify loops in daily life:
    - Brushing teeth = repeat stroke until clean (condition loop)
    - School week = repeat 5 times (count loop)
    - Breathing = repeat forever while alive (infinite loop with purpose)
  - For each, identify: What repeats? When does it stop? What would an infinite loop look like?

- **"Spot the Infinite Loop" Puzzles**
  - Tutor presents 5 flowcharts. 3 have hidden infinite loops.
  - Students trace execution with a pencil, stepping through each iteration.
  - They must mark exactly where and why the loop never ends.

- **"Loop Builder Challenge: The Sneaky Cat"**
  - Design a flowchart for a smart pet feeder.
  - **The Twist:** The feeder normally dispenses food every 6 hours (loop). But it has to handle the **Sneaky Cat constraint**: If the pet plate weight indicates food is still there, do NOT dispense. If the cat tries to trigger the feeder button twice in 5 minutes, block it and sound a buzzer, but if the dog hasn't been fed in 12 hours, sound a different alarm.
  - Must include: exit conditions and nested decision loops.

**Mini-Lesson (20 min):**
- Two types of loops: **Counting Loop** (do this 10 times) vs. **Condition Loop** (do this until X happens)
- **Nested loops** — briefly: a loop inside a loop (clock: seconds inside minutes inside hours)
- The danger of infinite loops and why EXIT CONDITIONS are critical

**Closing Activity (15 min):**
- **Quick Design:** Create a loop flowchart for a washing machine cycle. Must have at least 2 loops (wash cycle repeats, rinse cycle repeats) with clear exit conditions.

**📝 Homework (Practice at Home):**
- Identify 3 loops in your daily routine. For each one, write down: (1) What action repeats? (2) Is it a counting loop or condition loop? (3) What is the exit condition? (4) What would an accidental infinite loop look like?
- Bonus: Design a flowchart for a "bedtime routine checker" that loops through a checklist (brush teeth, pajamas, set alarm) and only says "Goodnight!" when all items are done.

---

#### Session 6: "Building with Blocks" (2 hours)

**Learning Objectives:**
- Apply conditionals and loops in a visual programming environment
- Build a working interactive project using logic blocks

**Warm-Up (15 min):**
- Quick introduction to the block-based programming tool being used. Tutor demonstrates: sequence, conditional block, loop block, variable block.

**Core Activity (75 min):**
- Students build **one** of three projects (their choice):

  **Project A: "Traffic Light Simulator"**
  - Teaches: sequencing + timing loops
  - Requirements: Light changes Green → Yellow → Red → Green in a timed loop. Pedestrian button interrupts the cycle.

  **Project B: "Password Gate"**
  - Teaches: conditionals + boolean logic + input validation
  - Requirements: User types a password. If correct, show "Access Granted." If wrong, show "Try Again." After 3 wrong attempts, show "Locked Out."

  **Project C: "Counting Collector"**
  - Teaches: loops + variables + score tracking
  - Requirements: Character moves around collecting items. Each item adds to a score variable. Game ends when score reaches a target OR time runs out.

- Tutor circulates, asking Socratic questions: *"Why did you use a loop here? What happens if the user clicks the button twice very fast?"*

**Showcase & Peer Testing (20 min):**
- Students test each other's projects and try to find edge cases or break them.
- Brief discussion: *"What surprised you? What did someone else think of that you didn't?"*

**Ethics Moment (10 min):**
- *"You built a password gate with 3 attempts. What if someone malicious tries to lock OTHER people out by deliberately entering wrong passwords? How would you redesign it?"*

**📝 Homework (Practice at Home):**
- Extend your Session 6 block project with ONE new feature (e.g., add a difficulty level, a high score, a new rule). Before building, write a mini-blueprint: What will you add? What existing parts will it affect? What edge cases should you test?
- Bring your mini-blueprint AND the updated project to the next session.

---

### Module 3: Problem Decomposition & The Logic Map (Sessions 7–9)

---

#### Session 7: "Breaking Big Problems Into Small Ones" (2 hours)

**Learning Objectives:**
- Decompose a complex system into independent sub-systems
- Identify dependencies between sub-systems

**Warm-Up (15 min):**
- **"How Many Parts?"** — Show a picture of a bicycle. How many independent systems does it have? (steering, braking, pedaling, seating, lighting). Which depend on each other?

**Core Activity (60 min):**
- **"Decompose the Game"**
  - Take a familiar game (Pacman, Tetris, or Flappy Bird — chosen by vote).
  - As a group, list every behavior the game has.
  - Then organize behaviors into independent sub-systems:
    - *Pacman example:* Ghost AI movement, Player movement, Score counter, Pellet collision detection, Power-up effects, Level progression, Game Over logic
  - For each sub-system, draw a mini-flowchart.
  - Draw arrows between sub-systems showing data flow: "Ghost AI needs to know Player position" → arrow from Player to Ghost AI.

- **"The Feature Negotiation"**
  - Each student proposes their dream app in one sentence.
  - Then they must cut it down using a prioritization matrix:

  | Feature | Must Have | Nice to Have | Future |
  |---------|-----------|-------------|--------|
  | (students fill in) | | | |

  - Rule: You can only have 3 "Must Have" features for version 1.
  - Debrief: *"Why is this hard? Why can't we build everything at once?"*

**Mini-Lesson (20 min):**
- **Decomposition** = breaking a problem into smaller, manageable pieces
- **Abstraction** = ignoring irrelevant details to focus on what matters
- **Interface** = how sub-systems communicate with each other (what information they share)

**Closing Activity (15 min):**
- Students draw a "system map" of their school: Administration, Classrooms, Cafeteria, Library. What information flows between them? (student records, schedules, meal counts)

**📝 Homework (Practice at Home):**
- Choose your favorite app or game and decompose it into at least 4 sub-systems. For each sub-system, write: (1) What it does, (2) What data it needs, (3) Which other sub-systems it communicates with. Draw a simple system map with arrows showing data flow.
- Also create a prioritization matrix for a "dream app" idea: list 6+ features and categorize them as Must Have / Nice to Have / Future.

---

#### Session 8: "Designing Before Building" (2 hours)

**Learning Objectives:**
- Create a complete architectural blueprint for a simple application
- Define user journeys (what the user sees and does at each step)

**Warm-Up (15 min):**
- **"Architect vs. Builder"** — Show two scenarios: (A) Start building a house immediately. (B) Draw blueprints first, then build. Which house will be better? Why? Connect to software: *"AI can build fast, but it needs YOUR blueprint."*

**Core Activity (60 min):**
- **"The Blueprint Challenge"**
  - Students design a mini-app (choose one):
    - A quiz game with score tracking
    - A daily habit tracker
    - A recipe collection organizer
  - Their blueprint must include:
    1. **User Journey Map** — Step by step, what does the user see and do? (Screen 1: Welcome → Screen 2: Choose quiz topic → ...)
    2. **Sub-system Diagram** — At least 3 components with labeled connections
    3. **Data Inventory** — What "named boxes" (variables) does each component need?
    4. **Edge Case List** — At least 5 "what if" scenarios
    5. **Rules List** — All the IF/THEN rules governing behavior

- Tutor reviews each blueprint, asking: *"I'm a user who just opened your app. Walk me through exactly what I see and do."*

**Mini-Lesson (20 min):**
- **User Journey Mapping** — Every good system starts with the user's experience
- **"Outside-In" Design** — Start with what the user wants, then figure out what the system needs to make it happen
- Show a simple example: A calculator app journey (Open → See number pad → Tap numbers → Tap operation → See result)

**Closing Activity (15 min):**
- **Peer Blueprint Review** — Students swap blueprints and write 3 questions they'd ask the designer. *"What happens when...?" "Where does this data come from?" "What if the user does X instead of Y?"*

**📝 Homework (Practice at Home):**
- Complete your architectural blueprint from the session. Refine it to include: (1) a polished user journey map with at least 5 screens/steps, (2) at least 5 edge cases with brief notes on how to handle each, (3) a full data inventory listing every variable, its type, and its valid range.
- Bring the refined blueprint — it will be used in the next 3 sessions.

---

#### Session 9: "Connecting the Pieces" (2 hours)

**Learning Objectives:**
- Draw interaction diagrams showing how sub-systems communicate
- Understand that interfaces must be precisely defined

**Warm-Up (15 min):**
- **"Telephone Game: Data Edition"** — A chain of students passes a piece of information, but each must transform it (e.g., "add 3", "convert to text"). Demonstrate how data changes as it flows through a system.

**Core Activity (60 min):**
- **"System Interaction Design"**
  - Using their blueprints from Session 8, students now focus on connections:
    - For each arrow between sub-systems: What exactly is sent? What format? What happens if the message is lost or corrupted?
  - Example for a quiz game:
    - Question Bank → Quiz Engine: sends {question_text, correct_answer, difficulty}
    - Quiz Engine → Score Tracker: sends {is_correct, time_taken}
    - Score Tracker → Display: sends {total_score, streak_count}
  - Students must describe each connection in plain English with exact data descriptions.

- **"The Broken Connection" Puzzle**
  - Tutor presents a system diagram with intentionally broken/missing connections.
  - Students must identify: What's missing? What would break? How would the user experience the failure?

**Mini-Lesson (20 min):**
- **Interfaces as Contracts** — When two systems communicate, they agree on a "contract": what data will be sent, in what format, and what to do when something goes wrong.
- Preview of Level 2: *"In the next level, you'll learn how these contracts look in actual code — and how to tell AI exactly what contracts to implement."*

**Showcase & Discussion (15 min):**
- Students present their completed blueprints (journey map + system diagram + interaction diagram).
- Class votes on "Most Complete Design" and "Most Creative Edge Cases."

**Ethics Moment (10 min):**
- *"Your quiz app stores scores. What if someone demands you delete their data? What if a parent wants to see their child's data? Who should have access to what?"*

**📝 Homework (Practice at Home):**
- Pick any popular service you use (a messaging app, a music streaming service, an online store). Draw a system interaction diagram showing at least 3 sub-systems and the data that flows between them. For each connection, describe: What data is sent? What format? What happens if the connection fails?
- Write a one-paragraph reflection: "What surprised me most about how systems communicate?"

---

### Module 4: Thinking Like a Tester (Sessions 10–11)

---

#### Session 10: "The Art of Breaking Things" (2 hours)

**Learning Objectives:**
- Systematically identify edge cases and boundary conditions
- Categorize failure types (input errors, logic errors, environment errors)

**Warm-Up (15 min):**
- **"What Could Go Wrong?"** — Show a picture of a simple vending machine. In 3 minutes, list as many failure scenarios as possible. Student with the most unique scenarios wins.

**Core Activity (60 min):**
- **"Edge Case Olympics"**
  - Present 3 simple system descriptions. For each, students compete to find the most edge cases:
    1. "A calculator that divides two numbers" → What about division by zero? What about very large numbers? Negative numbers? Decimals with many digits?
    2. "A login form with username and password" → Empty fields? Spaces in password? Very long input? Copy-paste? Same user logging in twice?
    3. "A countdown timer" → What if set to 0? Negative time? Device goes to sleep mid-countdown? Two timers at once?
  - Score: 1 point per valid edge case, 3 points for one nobody else found.

- **"The Evil User" Role Play**
  - Pairs: One student is the Designer, one is the Evil User.
  - Designer describes their Session 8 app blueprint.
  - Evil User tries to find every way to break it, confuse it, or make it do something unintended.
  - After 10 minutes, swap roles.
  - Each pair documents their findings.

**Mini-Lesson (20 min):**
- **Categories of Failures:**
  - **Input Failures** — Bad data enters the system
  - **Logic Failures** — The rules are wrong or incomplete
  - **State Failures** — The system is in a condition nobody anticipated
  - **Environment Failures** — External factors (no internet, battery dies, time zone differences)
- **Boundary Testing** — Always test at the edges: 0, 1, max value, negative, empty, null

**Closing Activity (15 min):**
- Each student adds at least 5 new edge cases to their blueprint from Session 8, categorized by failure type.

**📝 Homework (Practice at Home):**
- Choose any everyday system (a school attendance tracker, an alarm clock app, a parking meter). Write down at least 10 edge cases, categorized by failure type (Input / Logic / State / Environment). For each, describe what the user would experience if the edge case isn’t handled.
- Bonus challenge: Ask a family member to think of edge cases for the same system — see how many unique ones they find that you missed!

---

#### Session 11: "Designing for Failure" (2 hours)

**Learning Objectives:**
- Design graceful failure handling (error messages, fallbacks, defaults)
- Understand that good systems fail *safely*, not silently

**Warm-Up (15 min):**
- **"Good Error vs. Bad Error"** — Show real examples of error messages. Students rank them: Which ones help the user? Which ones are confusing? What makes an error message useful?

**Core Activity (60 min):**
- **"The Safety Net Designer"**
  - Using the edge cases from Session 10, students now design how their system HANDLES each failure:
    - For each edge case, define:
      1. How does the system detect this problem?
      2. What does the system do? (show error, use default, ask for retry, etc.)
      3. What does the USER see and experience?
  - Rule: **"Crash" is never an acceptable answer.** Every failure must be handled gracefully.

- **"The Failure Flow"**
  - Students add "error paths" to their flowcharts — red arrows showing what happens when things go wrong.
  - These error paths must eventually lead back to a working state (retry, fallback, safe shutdown).

**Mini-Lesson (20 min):**
- **Graceful Degradation** — When part of a system fails, the rest should still work
- **Default Values** — When input is missing, use a sensible default
- **User Communication** — Always tell the user what happened and what they can do about it
- Real example: *"When your internet drops while watching a video, the app doesn't crash — it shows 'Reconnecting...' and buffers. That's graceful degradation."*

**Closing Activity (15 min):**
- Students finalize their blueprints with complete error handling. This becomes part of their Level 1 assessment portfolio.

**Ethics Moment (10 min):**
- *"An AI medical diagnosis app says 'Error: Cannot determine result.' Is it better to show this error or to guess? When is saying 'I don't know' the most responsible answer?"*

**📝 Homework (Practice at Home):**
- Take your finalized blueprint (with edge cases from Session 10) and add complete error handling for ALL identified edge cases. For each, write: (1) Detection method, (2) System response, (3) User-facing message. Write a one-page "Error Handling Guide" for your app that someone else could read and understand.
- This is your final Level 1 portfolio piece — bring it polished and ready for the assessment session.

---

### Level 1 Assessment (Session 12) — Due Within 1 Week

#### In-Session Assessment (2 hours)

**Part A: "The Logic Architect" — Individual (45 min)**
- Given a system description the student has never seen before (e.g., "Design a library book borrowing system"):
  1. Create a complete IPO analysis
  2. Draw a state diagram with at least 4 states
  3. Identify all variables with data types
  4. List at least 8 edge cases, categorized by failure type
  5. Design error handling for the 3 most critical edge cases

**Part B: "The Blueprint Defense" — Presentation (45 min)**
- Students present their best blueprint (refined over Sessions 8–11)
- Tutor and peers act as "stakeholders" asking questions:
  - *"Walk me through the user journey"*
  - *"What happens if [edge case]?"*
  - *"Why did you choose to split the system this way?"*
- 10 minutes per student (adjust based on class size)

**Part C: "Off-Screen Logic Puzzle" — Pen & Paper (30 min)**
- Without any digital tools, solve 3 logic puzzles:
  1. Trace a flowchart and predict output for given inputs
  2. Find the error in a broken flowchart
  3. Design a conditional rule set for a given scenario

#### Take-Home Component (Due within 1 week)

- **Reflection Journal:** Write 1 page answering:
  - What was the most surprising thing you learned about how computers think?
  - Describe a real-world system you now see differently because of this course.
  - What would you do differently if you redesigned your blueprint from scratch?

#### Level 1 Assessment Rubric

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Logical Clarity** (40%) | All logic is unambiguous, complete, and correctly structured | Minor gaps in logic, but overall sound | Several logic errors or incomplete paths | Logic is unclear or fundamentally flawed |
| **Specification Precision** (20%) | Variables, data types, and rules are precisely defined | Most elements defined, some vague areas | Many elements undefined or imprecise | Vague descriptions, no formal specification |
| **Edge Case Coverage** (20%) | 8+ edge cases identified and categorized, with handling | 5–7 edge cases with some handling | 3–4 edge cases, minimal handling | Fewer than 3 edge cases, no handling |
| **System Thinking** (10%) | Clear sub-systems with well-defined interfaces | Sub-systems identified but interfaces unclear | Some decomposition but systems are tangled | No meaningful decomposition |
| **Communication** (10%) | Presentation is clear, confident, answers questions well | Generally clear, some hesitation with questions | Unclear presentation, struggles with questions | Cannot explain their own design |

**Graduation Criteria for Level 2:**
- Score ≥ 3.0 average across all dimensions
- Can decompose any system into ≥ 3 sub-systems with clear data flows
- Can identify ≥ 5 edge cases for any given system

---

## 6. Level 2: Intermediate — "The Language & The Copilot"

**Goal:** Transition from visual logic to text code structures. Learn to *read* code syntax to supervise an AI assistant writing it. Master the art of precise specification.

**Prerequisites:** Level 1 completion or equivalent logic/flowcharting skills.

### Module 1: "Read, Don't Write" — Code Anatomy (Sessions 1–3)

---

#### Session 1: "Code as a Foreign Language" (2 hours)

**Learning Objectives:**
- Recognize basic code structures (variables, conditionals, loops) in text format
- Trace simple code execution by hand

**Warm-Up (15 min):**
- **"Rosetta Stone"** — Show the same logic in three forms: flowchart, pseudo-code, and real code. Students match them. Point: *"Code is just another way to write the same logic you already know."*

**Core Activity (60 min):**
- **"Code Translation" — Level 1**
  - Students receive a simple script (10–15 lines) in one programming language.
  - They must:
    1. Read each line aloud and explain what it does in plain English
    2. Trace variables: create a table tracking each variable's value after each line
    3. Predict the final output
  - Then run the code (tutor demonstrates) to verify their prediction.
  - Repeat with progressively harder scripts (add conditionals, then loops).

- **"Same Logic, Different Language"**
  - Show the same algorithm (e.g., "find the largest number in a list") written in two different languages side by side.
  - Students identify: What's the same? What's different? What's just syntax vs. what's logic?
  - Key insight: *"The logic doesn't change — only the notation. This is why AI can translate between languages instantly."*

**Mini-Lesson (20 min):**
- **Anatomy of Code:**
  - Variables and assignment (the "named boxes" from Level 1, now in text)
  - Data types in code (strings in quotes, numbers without, booleans as true/false)
  - Code blocks and indentation (visual grouping of related instructions)
  - Comments (notes for humans, ignored by computers)

**Closing Activity (15 min):**
- **"Annotate the Code"** — Students receive an uncommented 20-line script. They must add a plain-English comment to every line explaining what it does.

**📝 Homework (Practice at Home):**
- Find a short code snippet online (10–20 lines, any language). Print it or copy it on paper. Annotate every line with a plain-English comment explaining what it does. Then trace all variables through execution with a pencil and predict the output.
- Bring your annotated code and prediction to the next session — we'll verify together.

---

#### Session 2: "Predict the Output" (2 hours)

**Learning Objectives:**
- Build a mental execution model for sequential, conditional, and iterative code
- Identify common code patterns and their purposes

**Warm-Up (15 min):**
- **"Quick Trace"** — 3 very short code snippets (3–5 lines each). Students predict output on paper. Reveal answers. Discuss surprises.

**Core Activity (60 min):**
- **"Predict the Output" Challenge** — Progressive difficulty:
  - **Round 1: Sequential** — Simple variable assignments and print statements
  - **Round 2: Conditional** — IF/ELSE branches, students must determine which branch executes
  - **Round 3: Loops** — Counting loops, students must track variables through each iteration
  - **Round 4: Tricky** — Off-by-one errors, variable shadowing, empty loops, string concatenation surprises
  - For each round, students write their prediction, then the code is run to verify.

- **"Code Pattern Recognition"**
  - Present common code patterns and name them:
    - **Accumulator** — variable starts at 0, adds up values in a loop
    - **Counter** — tracks how many times something happens
    - **Flag** — boolean that records if a condition was ever true
    - **Swap** — exchanging values between two variables
    - **Search** — looking through a collection for a specific item
  - Students identify these patterns in longer code snippets.

**Mini-Lesson (20 min):**
- **"Code is a Story"** — Every program has a beginning (setup), middle (processing), and end (output). Learning to read code is learning to read this story.
- Functions as "chapters" — grouped instructions with a name.
- The call stack briefly: *"This function calls that function, which calls another. Like nested Russian dolls."*

**Closing Activity (15 min):**
- Students receive a 30-line script and must write a 3-sentence "story summary" of what the code does. No line-by-line — just the big picture.

**📝 Homework (Practice at Home):**
- Write "story summaries" for 3 different code snippets (provided by tutor or found online). Each summary should be 3–5 sentences explaining what the code does at a high level (not line-by-line). Identify at least one code pattern (accumulator, counter, flag, swap, or search) in each snippet.
- Bonus: Find a code snippet that uses a pattern NOT covered in class and explain what it does.

---

#### Session 3: "Code to Flowchart & Back" (2 hours)

**Learning Objectives:**
- Convert between code and flowchart representations fluently
- Identify logical design flaws by reading code

**Warm-Up (15 min):**
- **"Spot the Difference"** — Show a flowchart and code that are *almost* the same logic, but one has a subtle difference. Students find it.

**Core Activity (60 min):**
- **"Code to Flowchart"**
  - Students receive 3 code snippets of increasing complexity.
  - For each, they draw the equivalent flowchart.
  - Compare their flowcharts with peers — differences reveal misunderstandings.

- **"Find the Design Flaw"**
  - Students receive 3 scripts with intentional logical (not syntax) flaws:
    1. A password checker that accepts empty passwords
    2. A score tracker that counts wrong answers as correct under certain conditions
    3. A loop that skips the last item in a list
  - For each, students must:
    1. Identify the exact flaw
    2. Explain why it's wrong (trace the problematic scenario)
    3. Describe the fix **in plain English** (not code — preparing for prompt writing in Module 2)

**Mini-Lesson (20 min):**
- **Common Logic Flaws in AI-Generated Code:**
  - Boundary errors (≤ vs <, starting at 0 vs 1)
  - Missing else branches
  - Incorrect loop conditions
  - Wrong variable used (copy-paste errors)
  - *"These are the kinds of bugs AI makes. Your job is to catch them."*

**Closing Activity (15 min):**
- **Assessment Checkpoint:** Given a 25-line script, write a detailed English explanation of its function and identify 2 logical design flaws with proposed fixes.

**Ethics Moment (10 min):**
- *"You're reviewing AI-generated code for a voting system. You find a subtle bug that only affects certain types of names (names with accents or special characters). Is this just a bug, or is it discrimination? How do you decide?"*

**📝 Homework (Practice at Home):**
- Take any code snippet (15–25 lines) and convert it into a flowchart. Then, separately, write a plain-English description of 2 logical flaws you can find (or intentionally introduce 2 flaws and write a "spot the bug" puzzle for a classmate to solve).
- Bring both your flowchart and your bug puzzle to the next session.

---

### Module 2: Prompting as a Specification Document (Sessions 4–6)

---

#### Session 4: "From Wish to Specification" (2 hours)

**Learning Objectives:**
- Transform vague requirements into precise, structured specifications
- Learn the Prompt Specification format

**Warm-Up (15 min):**
- **"Bad Prompt Gallery"** — Show 5 terrible AI prompts and their chaotic results. Students identify what went wrong with each.
  - *"Make a game"* → AI made a text adventure, student wanted a platformer
  - *"Build a calculator"* → No error handling, crashes on division by zero

**Core Activity (60 min):**
- **"The Specification Builder"**
  - Teach the structured prompt format:
  
  ```
  ROLE:       What is the AI acting as?
  CONTEXT:    What background does it need?
  TASK:       What exactly should it build/do?
  CONSTRAINTS: What rules must it follow?
  INPUT:      What data will it receive?
  OUTPUT:     What should the result look like?
  EDGE CASES: How should it handle errors?
  EXAMPLES:   Show sample input → expected output
  ```
  
  - Students practice by converting vague wishes into structured specs:
    - "I want a to-do list" → Full specification with data types, operations, storage rules, error handling
    - "Make a quiz" → Full specification with question format, scoring rules, difficulty levels, time limits

- **"Spot the Ambiguity"**
  - Students exchange specs and look for ambiguity.
  - For each ambiguity found, writer must clarify.
  - *"If someone could interpret this two different ways, it's ambiguous."*

**Mini-Lesson (20 min):**
- **User Stories:** "As a [user], I want [feature], so that [benefit]"
- **Acceptance Criteria:** "Given [context], When [action], Then [result]"
- These are industry-standard formats used by professional software teams.

**Closing Activity (15 min):**
- Start the **Prompt Journal** — Students create their journal (digital or physical) with the first entry: their best specification from today's exercise.

**📝 Homework (Practice at Home):**
- Write a complete Prompt Specification (using the ROLE/CONTEXT/TASK/CONSTRAINTS/INPUT/OUTPUT/EDGE CASES/EXAMPLES format) for ONE of these: a temperature converter, a random password generator, or a word counter. Make it so precise that any AI tool should produce nearly identical results.
- Start your Prompt Journal: record this as Entry #1 with your specification and your prediction of what the AI will generate.

---

#### Session 5: "The AI Sandbox" (2 hours)

**Learning Objectives:**
- Use structured prompts to direct AI to generate working code
- Analyze failures and iterate on specifications

**Warm-Up (15 min):**
- Review: Students share their specifications from Session 4. Quick peer feedback on clarity.

**Core Activity (75 min):**
- **"The AI Architect Sandbox: The One-Shot Prompt Duel"**
  - Students compete to build a simple project using the fewest prompt iterations.
  - **The Game:**
    - Students are given a challenge target (e.g., a coin-flip simulator that tracks streaks, or a tip calculator with a split-bill feature).
    - They write their structured prompts in secret, aiming for a "One-Shot" generate (perfect working code on the first attempt).
    - **Round 1:** Run their initial prompt specification. Document in Prompt Journal:
      - Version 1 of the prompt
      - What the AI generated
      - Did it work on the first try? (One-shot score)
    - **Round 2:** Analyze failures — find the ambiguity or missing constraint.
    - **Round 3:** Refine the prompt and regenerate.
    - **Round 4:** Add a twist constraint (e.g., "handle emojis or negative values") and update the spec.
  - **Key rule:** Students may NOT edit the generated code manually. If the output is wrong, they must fix their PROMPT. This forces specification precision.

**Debrief (20 min):**
- Class shares their iteration stories. Tutor highlights common patterns:
  - *"How many of you had to add error handling because you forgot it initially?"*
  - *"Who found that the AI interpreted a word differently than you intended?"*

**Ethics Moment (10 min):**
- *"The AI generated working code, but you can see it's very similar to a specific open-source project. Is it okay to use? Who owns AI-generated code? What if the AI 'learned' from copyrighted code?"*

**📝 Homework (Practice at Home):**
- Take your Session 5 project and run your prompt through a DIFFERENT AI tool (or the same tool in a new conversation). Compare the two outputs. In your Prompt Journal, write: (1) What's the same? (2) What's different? (3) Which output is better and why? (4) What does this tell you about ambiguity in your specification?
- If you don't have access to a second tool, re-run the same prompt and note any differences in the output.

---

#### Session 6: "The Constraint Challenge" (2 hours)

**Learning Objectives:**
- Modify existing specifications to add new requirements without breaking existing functionality
- Write test scenarios that verify specifications

**Warm-Up (15 min):**
- **"Requirement Roulette"** — Each student's Session 5 project gets a random new requirement card: "Must work offline," "Must support 3 languages," or the special **AI Cheat Mode Card** ("Must write a prompt to hide a secret cheat-code password like typing 'xyzzy' to win, but obfuscate it in the prompt so a code reviewer won't easily notice it").

**Core Activity (60 min):**
- **"The Constraint Challenge"**
  - Using their working project from Session 5, students must add their new constraint.
  - Process:
    1. Analyze: How does this new requirement affect existing features?
    2. Update specification: What changes? What stays the same?
    3. Write test scenarios: How will you verify the new feature works AND old features aren't broken?
    4. Regenerate with AI and verify.
  - Document everything in the Prompt Journal.

- **"Prompt vs. Result Review"**
  - Students exchange ONLY their prompts (not results).
  - Each student runs another student's prompt with the AI tool.
  - Compare: Did you get the same result? Different? Why?
  - Differences reveal ambiguities — document them.

**Mini-Lesson (20 min):**
- **Test Scenarios** — Writing verification checks:
  - "Given [setup], when [action], then [expected result]"
  - **Happy path** — Everything works correctly
  - **Sad path** — Errors are handled gracefully
  - **Edge path** — Boundary conditions are covered
- Introduction to regression: *"Adding new features can break old ones. Test scenarios catch this."*

**Closing Activity (15 min):**
- Students write 5 test scenarios for their project: 2 happy paths, 2 sad paths, 1 edge case.

**📝 Homework (Practice at Home):**
- Write 5 additional test scenarios for your project (beyond the 5 from class): 2 happy paths with unusual but valid inputs, 2 sad paths that test error recovery, and 1 edge case that combines multiple boundary conditions. Run each test and document pass/fail in your Prompt Journal.
- If any test fails, write a refined prompt that would fix the issue (don't fix the code manually — fix the spec).

---

### Module 3: Code Detective — Debugging & Defense (Sessions 7–9)

---

#### Session 7: "The Bug Classification System" (2 hours)

**Learning Objectives:**
- Classify bugs into four AI-era categories
- Apply systematic debugging methodology

**Warm-Up (15 min):**
- **"Bug or Feature?"** — Show 5 behaviors in apps. Students vote: Is it a bug or an intentional feature? Discuss gray areas.

**Core Activity (60 min):**
- **"The Four Types of Bugs"**
  - Teach the AI-era bug classification system:
  
  | Bug Type | Description | Example | Who's Responsible? |
  |----------|-------------|---------|-------------------|
  | **Syntax Bug** | Code structure error (typo, missing bracket) | `prnt("hello")` instead of `print("hello")` | AI rarely makes these |
  | **Logic Bug** | Code runs but logic is wrong | Checking score AFTER game over, not before | The specification writer |
  | **AI Hallucination Bug** | AI invents non-existent functions or APIs | Using `math.superCalculate()` which doesn't exist | The AI — human must catch |
  | **Specification Bug** | Code works correctly but doesn't match actual need | Calculator works perfectly but user needed a converter | The specification writer |
  
  - Students receive 8 buggy code snippets. For each, they must:
    1. Identify the bug
    2. Classify it (which of the 4 types?)
    3. Explain who/what caused it
    4. Propose a fix in plain English

- **"The Systematic Debug Process"**
  - Teach the debugging checklist:
    1. **Reproduce:** Can you make the bug happen consistently?
    2. **Isolate:** Which component is the bug in?
    3. **Trace:** Step through the code — where does actual behavior diverge from expected?
    4. **Classify:** What type of bug is it?
    5. **Fix:** What's the minimal change needed?
    6. **Verify:** Does the fix work? Did it break anything else?

**Mini-Lesson (20 min):**
- Why each bug type requires a different fix strategy:
  - Syntax → fix the typo
  - Logic → fix the algorithm
  - Hallucination → replace with real function/API
  - Specification → rewrite the requirement, then regenerate

**Closing Activity (15 min):**
- **Quick Debug Challenge** — 3 code snippets, 5 minutes each. Find, classify, and propose fix.

**📝 Homework (Practice at Home):**
- Find or generate (using AI) a code snippet of 20–30 lines that contains at least 2 bugs. Classify each bug using the 4-type system (Syntax / Logic / AI Hallucination / Specification). Write a "Bug Report" for each: (1) Bug description, (2) Classification, (3) How you found it, (4) Proposed fix in plain English.
- Bring your bug reports to the next session — we'll review them as a class.

---

#### Session 8: "The Broken Machine" (2 hours)

**Learning Objectives:**
- Debug intentionally broken applications using logical deduction
- Practice reading code under pressure (timed challenges)

**Warm-Up (15 min):**
- **"The 60-Second Debug"** — One simple broken script on screen. First student to find the bug (without running the code) wins.

**Core Activity (60 min):**
- **"The Broken Machine" — 3 Puzzles**
  - Tutor provides 3 AI-generated applications that have been intentionally broken with logical faults. Each is progressively harder:
  
  - **Puzzle 1: The Score Tracker** (Easy)
    - A game score tracker that updates scores AFTER checking if the game is over.
    - Bug: Final score is never recorded.
    - Students must find the exact lines and explain the fix.
  
  - **Puzzle 2: The Shopping Cart** (Medium)
    - A shopping cart that calculates discounts incorrectly for items added after a coupon is applied.
    - Bug: Discount applies to items already calculated but not new items.
    - Multiple interacting components make this harder.
  
  - **Puzzle 3: The Chat Filter** (Hard)
    - A chat message filter that should block bad words but has edge cases:
      - Doesn't check capitalization variations
      - Doesn't handle words embedded in other words
      - Race condition: message displays briefly before filter checks it
    - Students must find ALL bugs, not just the obvious one.

- Students must solve using logical deduction, not trial-and-error. They document their reasoning.

**Mini-Lesson (20 min):**
- **"Reading Code Like a Detective"**
  - Look for **assumptions** — what does the code assume that might not be true?
  - Look for **order dependencies** — does Step A need to happen before Step B?
  - Look for **missing cases** — what conditions aren't handled?
  - Look for **wrong comparisons** — is it checking the right thing?

**Closing Activity (15 min):**
- **Code Review Checklist Creation**
  - Students collaboratively build a checklist they'll use going forward:
    - ☐ Does it handle empty/null inputs?
    - ☐ Are boundary values handled correctly?
    - ☐ Does it match the specification?
    - ☐ Are there hardcoded values that should be configurable?
    - ☐ Is there any unreachable code?
    - ☐ Are variable names meaningful?
    - (Students add their own based on bugs they've encountered)

**📝 Homework (Practice at Home):**
- Create your own "Broken Machine" puzzle: take a working script (AI-generated or from online), introduce 2 logical bugs (NOT syntax bugs), and write a challenge sheet for a classmate. The challenge sheet should include: (1) What the code is supposed to do, (2) What it actually does wrong, (3) A hint for each bug.
- Also, finalize your personal Code Review Checklist — add at least 3 items based on bugs you've encountered.

---

#### Session 9: "Efficiency & Code Quality" (2 hours)

**Learning Objectives:**
- Recognize that working code isn't always good code
- Evaluate code quality beyond "does it work?"

**Warm-Up (15 min):**
- **"Two Solutions"** — Show two code snippets that solve the same problem. One is 5 lines, clear, and efficient. The other is 30 lines, confusing, and slow. Both work. Which is better? Why?

**Core Activity (60 min):**
- **"The Code Quality Judge"**
  - Students receive 4 pairs of working solutions. For each pair, they must:
    1. Explain what both solutions do (they should do the same thing)
    2. Judge which is better and articulate WHY using criteria:
       - **Readability** — Can someone else understand this?
       - **Efficiency** — Does it do unnecessary work?
       - **Maintainability** — Would it be easy to add features later?
       - **Robustness** — Does it handle edge cases?

- **"The Refactoring Request"**
  - Students receive a working but messy AI-generated script.
  - They must write a prompt to the AI asking it to improve the code WITHOUT changing what it does.
  - Practice writing improvement specifications: "Refactor this code to be more readable by [specific instructions]."

- **"Performance Intuition"**
  - Conceptual efficiency exercises (no math required):
    - "Searching for a name in an alphabetized list vs. an unalphabetized list — which is faster? Why?"
    - "Checking if a number is in a list of 1000 items: is there a smarter way than checking all 1000?"
  - Plant seeds for algorithmic thinking without formal Big-O notation.

**Mini-Lesson (20 min):**
- **"Code That Works" vs. "Code That's Good"**
  - AI generates code that works but may not be:
    - Readable (variable names like `x`, `temp`, `data2`)
    - Efficient (checking the same condition repeatedly)
    - Maintainable (everything in one giant function)
  - The System Architect's job: Direct the AI to produce GOOD code, not just working code.

**Closing Activity (15 min):**
- Add "Code Quality" criteria to the Code Review Checklist from Session 8.

**📝 Homework (Practice at Home):**
- Take any AI-generated code from your past sessions. Use your Code Review Checklist to audit it. Then write a "Refactoring Prompt" asking the AI to improve the code quality without changing functionality. Compare the before and after in your Prompt Journal: Is the refactored version more readable? More efficient? More maintainable?
- Bring your before/after comparison to the next session.

---

### Module 4: Version Control & Collaboration Thinking (Sessions 10–11)

---

#### Session 10: "Tracking Changes" (2 hours)

**Learning Objectives:**
- Understand why version tracking is essential when working with AI-generated code
- Practice comparing versions and identifying meaningful changes

**Warm-Up (15 min):**
- **"The Essay Disaster"** — Tell a story: "You wrote a perfect essay. Then you 'improved' it and it got worse. But you already saved over the old version. How do you get back to the good version?" Students share their strategies.

**Core Activity (60 min):**
- **"Version Detective"**
  - Students receive 3 versions of the same code (v1, v2, v3).
  - For each transition (v1→v2, v2→v3), they must:
    1. Identify exactly what changed
    2. Explain why the change was made (improvement or new feature?)
    3. Determine if the change broke anything that worked before
    4. Decide: Is this version better or worse? Why?

- **"The Branching Experiment"**
  - Scenario: You want to try two different approaches to the same feature.
  - Students maintain two "branches" (can be as simple as two labeled folders/documents):
    - Branch A: Approach 1
    - Branch B: Approach 2
  - They evaluate both and choose the better one, writing a justification.
  - Key concept: *"You don't have to commit to one approach immediately. Try both, then decide."*

**Mini-Lesson (20 min):**
- **Core Version Control Concepts** (tool-agnostic):
  - **Snapshot** — saving a version you can return to
  - **Diff** — comparing two versions to see what changed
  - **Branch** — trying something new without losing what works
  - **Rollback** — going back to a previous version when something breaks
  - **Merge** — combining changes from different branches
- *"Professional developers use these concepts every day. The specific tools change, but the concepts are permanent."*

**Closing Activity (15 min):**
- Students create a "Version Log" template for their future projects:
  - Version number
  - Date
  - What changed
  - Why it changed
  - What to check (did anything break?)

**📝 Homework (Practice at Home):**
- Create a Version Log for your Session 5 project. Go back through your Prompt Journal and reconstruct the version history: What changed between each iteration? Why? Did any change break something that worked before? Write at least 3 version entries.
- Bonus: Identify one decision you made early on that you’d now call "the wrong branch" — explain what you’d do differently.

---

#### Session 11: "Collaboration & Documentation" (2 hours)

**Learning Objectives:**
- Write documentation that enables others to understand and modify a project
- Practice collaborative development communication

**Warm-Up (15 min):**
- **"The Undocumented Project"** — Give students a project with zero documentation. Ask them to figure out what it does. Time them. Then give the same project WITH documentation. Time difference = value of documentation.

**Core Activity (60 min):**
- **"Documentation Challenge"**
  - Students write documentation for their Session 5 project:
    1. **README** — What does this project do? How do you use it?
    2. **Setup Guide** — What does someone need to get this running?
    3. **Architecture Overview** — How is it structured? What are the main components?
    4. **Known Issues** — What doesn't work yet? What are the limitations?
  - Rule: Someone who has never seen the project should be able to understand it from the documentation alone.

- **"The Handoff"**
  - Students swap projects AND documentation.
  - Using only the documentation, each student must:
    1. Understand what the project does
    2. Identify one feature to add
    3. Write a prompt specification for the new feature
  - Debrief: Where did the documentation fail? What was missing?

**Mini-Lesson (20 min):**
- **"Code Without Documentation is a Time Bomb"**
  - AI can generate code fast, but if nobody understands the architecture, nobody can maintain it
  - Documentation types: User docs (how to use it), Developer docs (how to modify it), Architecture docs (why it's designed this way)
- **Technical Writing Tips:**
  - Be specific, not vague
  - Use examples
  - Explain the "why," not just the "what"

**Ethics Moment (10 min):**
- *"You used AI to generate most of your project. In your documentation, should you disclose that? What if you're submitting it as schoolwork? What about for a job application?"*

**Closing Activity (15 min):**
- Students update their Prompt Journal with reflections on what makes good vs. bad documentation.

**📝 Homework (Practice at Home):**
- Write complete documentation for your best Level 2 project: README, setup guide, and architecture overview. Then give it to a family member or friend who hasn't seen the project and ask them: "Based on this documentation alone, can you explain what this project does?" Record their feedback and identify 3 things to improve.
- This is your final Level 2 portfolio piece — bring the polished documentation to the assessment session.

---

### Level 2 Assessment (Sessions 12–13) — Due Within 1 Week

#### Session 12: Assessment Part A (2 hours)

**Part A: "The Code Reader" — Individual, Pen & Paper (60 min)**
- No AI tools allowed.
  1. Given a 40-line script in any one language: trace execution, predict output, and write a plain-English summary.
  2. Given a buggy script: find, classify (4 types), and propose fix for 3 bugs.
  3. Given a flowchart: write a structured prompt specification that would generate code matching this flowchart.

**Part B: "Prompt Specification Exam" — With AI Tools (60 min)**
- From a written requirements document (new scenario, never seen before):
  1. Write a complete structured prompt specification
  2. Generate code using AI
  3. Test against 5 provided test scenarios
  4. Fix any failures by refining the prompt (NOT editing code)
  5. Document the iteration process in Prompt Journal format

#### Session 13: Assessment Part B (2 hours)

**Part C: "The Debug Tournament" (45 min)**
- 3 progressively harder debugging puzzles (timed):
  - Puzzle 1: Single bug, clear symptom (10 min)
  - Puzzle 2: Multiple bugs, interacting components (15 min)
  - Puzzle 3: Specification bug — code works but doesn't match requirements (20 min)

**Part D: "Portfolio Presentation" (75 min)**
- Students present their Prompt Journal, showing:
  - Their best prompt iteration story (before/after with analysis)
  - Their code review checklist (personalized from Sessions 8–9)
  - Their documentation from Session 11
- Tutor evaluates: *"Can this student effectively direct an AI to build software and catch its mistakes?"*

#### Take-Home Component (Due within 1 week)

- **The Independent Build:** Using only prompt-based AI direction (no manual code editing):
  1. Choose a project from a provided list (or propose your own, tutor-approved)
  2. Create the complete prompt specification
  3. Generate, test, and iterate until working
  4. Write documentation
  5. Submit: Prompt Journal (all versions), final specification, working project, documentation

#### Level 2 Assessment Rubric

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Logical Clarity** (25%) | Traces code flawlessly, predictions always correct | Minor tracing errors, predictions mostly correct | Frequent tracing errors, inconsistent predictions | Cannot trace code execution reliably |
| **Specification Precision** (30%) | Specs generate working code on first attempt ≥50% of the time | Specs need 2–3 iterations for working code | Specs need 4+ iterations, major ambiguities | Specs are too vague for AI to produce useful code |
| **Edge Case Coverage** (20%) | Test scenarios cover happy, sad, and edge paths comprehensively | Good coverage of happy and sad paths, some edge cases | Mostly happy paths, few error scenarios | Only tests the obvious happy path |
| **System Thinking** (10%) | Understands component interactions, identifies cross-cutting concerns | Sees most component boundaries, some interface awareness | Thinks in terms of individual features, not systems | No evidence of architectural thinking |
| **Communication** (15%) | Prompt Journal shows clear reasoning, documentation enables handoff | Journal shows iteration, documentation is mostly clear | Minimal journal entries, documentation has gaps | No meaningful documentation or reflection |

**Graduation Criteria for Level 3:**
- Score ≥ 3.0 average across all dimensions
- Can read and trace code in 2+ language syntaxes
- Prompt specification generates working code within 3 iterations ≥ 50% of the time
- Can classify and fix bugs in 50+ line codebases

---

## 7. Level 3: Advanced — "The System Architect"

**Goal:** Act as a Lead Architect. Map complex user flows, design data structures, establish API contracts, and guide AI tools to construct and deploy live software systems.

**Prerequisites:** Level 2 completion. Comfortable reading code, writing specifications, and debugging AI output.

### Module 1: Databases, APIs, and Data Flows (Sessions 1–3)

---

#### Session 1: "Where Does Data Live?" (2 hours)

**Learning Objectives:**
- Understand the Client-Server model
- Design basic data models (tables, fields, relationships)
- Classify data by privacy level

**Warm-Up (15 min):**
- **"Your Phone's Secret Life"** — When you send a message, what happens? Trace the journey: your phone → cell tower → server → recipient's phone. Introduce: not everything lives on your device.

**Core Activity (60 min):**
- **"Design the Database"**
  - Scenario: Design the data storage for a classroom library system.
  - Students must define:
    - What "tables" (categories of things) do you need? (Books, Students, Borrowing Records)
    - What "fields" (attributes) does each table have? (Book: title, author, ISBN, available)
    - What relationships exist? (A student borrows many books; a book can be borrowed by one student at a time)
  - Draw Entity-Relationship diagrams.

- **"The Data Privacy Audit"**
  - For their library database, students classify each field:
  
  | Field | Public | Private | Sensitive |
  |-------|--------|---------|-----------|
  | Book title | ✅ | | |
  | Student name | | ✅ | |
  | Student grades | | | ✅ |
  | Borrowing history | | ✅ | |
  
  - Then design access rules: "Librarians can see borrowing history. Students can only see their own. Parents can see their child's."

**Mini-Lesson (20 min):**
- **Client-Server Architecture:**
  - Client = what the user sees and interacts with (app, website)
  - Server = where data is stored and processed
  - They communicate via **requests** and **responses**
- **Data Modeling Basics:**
  - Tables, fields, data types, primary keys
  - Relationships: one-to-one, one-to-many, many-to-many

**Closing Activity (15 min):**
- Students sketch a Client-Server diagram for their library system: What happens on the client? What happens on the server? What data travels between them?

**📝 Homework (Practice at Home):**
- Choose a real-world app you use (messaging, music, shopping). Design its database schema: list at least 3 tables with fields, data types, and relationships. Classify each field as Public / Private / Sensitive. Write access rules defining who can see what data.
- **Spy Mode Option:** If you choose a messaging app, design a "Self-Destructing Message" feature. Specify: (1) what extra fields the database table needs (e.g., `read_at`, `expires_in`), and (2) how the server detects and deletes expired messages.
- Bring your schema and privacy classification to the next session.

---

#### Session 2: "APIs — How Systems Talk" (2 hours)

**Learning Objectives:**
- Understand API endpoints as communication contracts
- Design API specifications for common operations

**Warm-Up (15 min):**
- **"The Restaurant Analogy"** — The menu is the API documentation. Your order is the request. The food is the response. The kitchen is the server. You don't need to know HOW the kitchen works — just what's on the menu and how to order.

**Core Activity (60 min):**
- **"Design the API"**
  - Using their library system from Session 1, students design API endpoints:
  
  | Action | Method | Endpoint | What You Send | What You Get Back |
  |--------|--------|----------|---------------|-------------------|
  | Get all available books | GET | /books?available=true | Nothing | List of books |
  | Borrow a book | POST | /borrow | {student_id, book_id} | {success, due_date} |
  | Return a book | POST | /return | {student_id, book_id} | {success, late_fee} |
  | Search books by author | GET | /books?author=name | Nothing (in URL) | Matching books |
  
  - For each endpoint, also define:
    - What happens if the book doesn't exist? (Error response)
    - What happens if the student has too many books checked out? (Business rule)
    - What happens if the server is down? (System failure)

- **"API Failure Scenarios"**
  - Students brainstorm: What happens when...
    - Two students try to borrow the last copy simultaneously?
    - The network drops during a borrow request?
    - Someone sends invalid data (negative student_id)?

**Mini-Lesson (20 min):**
- **API Contracts:**
  - Request: What the client sends (method, endpoint, data)
  - Response: What the server returns (status code, data)
  - Error Handling: What happens when things go wrong (error codes, messages)
- **Status Codes (simplified):** 200 = Success, 400 = You sent bad data, 404 = Not found, 500 = Server broke

**Closing Activity (15 min):**
- Write a complete API specification for one new endpoint for their system.

**Ethics Moment (10 min):**
- *"Your library API can return a student's entire borrowing history. Should it? What if someone uses this data to judge or embarrass a student for what they read? How would you limit data exposure?"*

**📝 Homework (Practice at Home):**
- Design a complete API for a simple system of your choice (e.g., a pet adoption center, a movie rating site, a school canteen ordering system). Define at least 5 endpoints with: method, URL, request data, response data, and error responses. Include at least 2 "what happens when things go wrong" scenarios per endpoint.
- Bring your API specification to the next session.

---

#### Session 3: "Data Flow at Scale" (2 hours)

**Learning Objectives:**
- Map data flows through multi-component systems
- Understand sequence diagrams

**Warm-Up (15 min):**
- **"The Food Delivery Journey"** — As a class, trace what happens when you order food through a delivery app. Map all the systems involved: User App → Restaurant System → Payment Gateway → Driver App → Notification Service → Rating System.

**Core Activity (60 min):**
- **"The Sequence Diagram"**
  - Teach sequence diagram notation (arrows between participants over time).
  - Students draw sequence diagrams for:
    1. **Simple:** User logs in (User → App → Server → Database → Server → App → User)
    2. **Medium:** User borrows a book (involve: User, Library App, Book Database, Student Database, Notification Service)
    3. **Complex:** User makes a payment (involve: User, Store App, Payment Service, Bank, Receipt Service, Inventory)

- **"The System Integration Challenge"**
  - Students must connect their library system to an external service:
    - A notification system (email/SMS when book is due)
    - A recommendation engine (suggest books based on history)
    - A parent dashboard (view child's reading)
  - For each integration, define: What data is shared? In what format? How often? What if the external service is unavailable?

**Mini-Lesson (20 min):**
- **Distributed Systems (Simplified):**
  - Real applications are rarely one server — they're many services talking to each other
  - Each service does one thing well
  - The challenge: keeping them all in sync and handling failures
- **"Eventual Consistency"** — Sometimes data takes a moment to sync across services. *"Your bank balance might show different amounts on your phone and at the ATM for a few seconds. That's normal."*

**Assessment Checkpoint (15 min):**
- Students present their complete library system: ER diagram + API specification + sequence diagram + privacy classification.

**📝 Homework (Practice at Home):**
- Draw a sequence diagram for a real-world scenario you experienced today (ordering food, logging into a website, making a phone call). Include at least 4 participants/systems and show both the success path and one failure path (e.g., "What if the payment is declined?").
- Write a short reflection: "What part of the data flow was I not aware of before this session?"

---

### Module 2: Complete Project Orchestration (Sessions 4–7)

---

#### Session 4: "Choosing the Right Tools" (2 hours)

**Learning Objectives:**
- Evaluate AI tools based on task requirements
- Understand when to use different types of AI assistance

**Warm-Up (15 min):**
- **"The Right Tool for the Job"** — Show: hammer, screwdriver, wrench. Can you use a hammer to drive a screw? Yes. Should you? No. Same with AI tools.

**Core Activity (60 min):**
- **"AI Tool Evaluation Framework"**
  - Teach the decision framework:
  
  | Task | Best Tool Type | Why |
  |------|---------------|-----|
  | Planning & architecture | Chat-based AI | Conversational, iterative, good for exploration |
  | Generating a single function | Code-completion AI | Context-aware, fast, integrated in editor |
  | Building a complete app | AI IDE / builder tool | Understands file structure, manages dependencies |
  | Debugging existing code | Chat-based AI with code paste | Can analyze full context, explain issues |
  | Creating UI designs | AI design tools | Visual output, responsive layout generation |
  
  - Students evaluate 3 scenarios and justify which tool type they'd use:
    1. "I need to build a landing page for my school project" → ?
    2. "My AI-generated app has a bug I can't find" → ?
    3. "I want to design the architecture for a multi-user chat app" → ?

- **"The Tool Evaluation Checklist"**
  - Students create a checklist for evaluating any AI tool:
    - Can it handle my programming language/framework?
    - Does it understand context across multiple files?
    - Can I iterate and refine the output?
    - Does it explain its decisions?
    - What are the privacy implications of using it? (Does it store my code?)

**Mini-Lesson (20 min):**
- **"Tools Change, Skills Don't"**
  - The AI tools available today will be different in 2 years
  - What remains constant: the ability to evaluate, specify, and verify
  - Building tool-evaluation skills is more valuable than mastering any one tool
- **Tool Composition** — Real projects use multiple tools together:
  - Chat AI for planning → AI IDE for implementation → Chat AI for debugging → AI tool for deployment

**Closing Activity (15 min):**
- Students write a "Tool Selection Document" for their upcoming capstone project: what tools they plan to use and why.

**📝 Homework (Practice at Home):**
- Research 2–3 AI tools that could help with your capstone project (code generation, design, planning, etc.). For each, evaluate using the checklist from class: capabilities, limitations, privacy implications, cost. Write a one-paragraph justification for your top choice.
- Finalize your Tool Selection Document for the capstone project.

---

#### Session 5: "Project Planning & Architecture" (2 hours)

**Learning Objectives:**
- Create a complete project plan with milestones and phases
- Design system architecture before writing any code

**Warm-Up (15 min):**
- **"The Bridge Builder"** — Two teams each have 5 minutes to build a bridge from paper. Team A starts immediately. Team B must spend 2 minutes planning first. Compare results. Planning almost always wins.

**Core Activity (60 min):**
- **"The Capstone Project Launch"**
  - Students choose (or are assigned) a capstone project:
    - **Option A:** Task Manager with categories, due dates, and completion tracking
    - **Option B:** Study Flashcard App with spaced repetition logic
    - **Option C:** Simple Social Feed with posts, likes, and comments
    - **Option D:** Student's own proposal (tutor-approved)
  
  - Students create a complete project plan:
    1. **User Stories** — At least 5 "As a user, I want..." statements
    2. **Architecture Diagram** — Components, data flow, API endpoints
    3. **Database Schema** — Tables, fields, relationships, privacy classification
    4. **Milestone Plan:**
       - Phase 1: Core data model + basic UI
       - Phase 2: Main feature implementation
       - Phase 3: Error handling + edge cases
       - Phase 4: Polish + testing
    5. **Risk Assessment** — What could go wrong? Backup plans?

- **Peer Architecture Review**
  - Students present their architecture to a partner.
  - Partner asks: *"Why did you choose this structure? What happens when [scenario]?"*
  - Students revise based on feedback.

**Mini-Lesson (20 min):**
- **Architecture Decision Records (ADRs):**
  - For key decisions, document: What? Why? What alternatives were considered? What are the trade-offs?
  - Example: "We chose a flat database structure because... The alternative was nested data, but that would make [X] harder."
- **Development vs. Production:**
  - Development: Your computer, test data, ok to break
  - Production: Real users, real data, must be stable
  - Environment variables: keeping secrets (API keys, passwords) out of code

**Closing Activity (15 min):**
- Students write one ADR for their most important architecture decision.

**📝 Homework (Practice at Home):**
- Complete your capstone project plan if not finished in class. Specifically, ensure you have: all user stories written, the database schema finalized, and at least one Architecture Decision Record (ADR) completed. Review your milestone plan and set realistic goals for each phase.
- Bring the complete project plan to the next session — you'll start building immediately.

---

#### Session 6: "Building with AI Assistance" (2 hours)

**Learning Objectives:**
- Direct AI tools to implement an architecture plan
- Manage code files and project structure

**Core Activity (90 min):**
- **"The Build Sprint"**
  - Students use AI tools to implement Phase 1 and Phase 2 of their capstone project.
  - Process:
    1. Feed the architecture document to the AI as context
    2. Request implementation component by component (NOT "build the whole thing")
    3. Review each generated component against the specification
    4. Test each component before moving to the next
    5. Document every AI interaction in the Prompt Journal
  
  - **Rules:**
    - Students may make minor code edits (fixing typos, adjusting styles)
    - Major logic changes must go through a prompt refinement cycle
    - If the AI generates something they don't understand, they must ask it to explain before accepting

- Tutor circulates, asking: *"What did the AI generate that surprised you? Did it match your architecture? Where did you have to adjust your specification?"*

**Checkpoint & Troubleshooting (30 min):**
- Students share progress and blockers.
- Group problem-solving for common issues.
- Tutor helps students whose AI output diverged significantly from their plan.

**📝 Homework (Practice at Home):**
- Continue building your capstone project: complete any Phase 1 components not finished in class. For each component, write a brief entry in your Prompt Journal documenting: the prompt you used, what the AI generated, what you accepted/rejected and why.
- Identify 2 things the AI generated that you didn't fully understand — research them and write a 2-sentence explanation for each.

---

#### Session 7: "Testing, Debugging & Technical Debt" (2 hours)

**Learning Objectives:**
- Test a multi-component application systematically
- Experience and understand technical debt

**Warm-Up (15 min):**
- Status check: Where is each student in their build? Quick round of progress updates.

**Core Activity (60 min):**
- **"The Test Sprint"**
  - Students complete Phase 3 (error handling + edge cases):
    1. Write test scenarios for every API endpoint / feature
    2. Run through each test scenario manually
    3. Document failures
    4. Fix using prompt refinement or targeted code edits

- **"The Technical Debt Experience"**
  - Tutor introduces a surprise requirement:
    - *"Your app now needs to support multiple users"* OR
    - *"Your app now needs to work offline"* OR
    - *"Your data schema needs a new required field"*
  - Students discover: How hard is it to add this? What do they have to change? What breaks?
  - Debrief: *"This is technical debt — shortcuts or design decisions that make future changes expensive. What would you have designed differently if you knew this requirement from the start?"*

**Mini-Lesson (20 min):**
- **Technical Debt:**
  - Like financial debt: quick now, expensive later
  - Common sources: rushing, poor architecture planning, AI-generated code that "works" but is poorly structured
  - Management: Some debt is acceptable (prototype/MVP), but must be paid off before scaling
- **Configuration Management:**
  - Environment variables for different settings (dev vs. production)
  - Never hardcode passwords or API keys in code
  - Always have a way to change configuration without changing code

**Closing Activity (15 min):**
- Students list 3 pieces of technical debt in their project and rate severity (low/medium/high).

**📝 Homework (Practice at Home):**
- Write test scenarios for every feature in your capstone project (aim for at least 10 total: mix of happy, sad, and edge paths). Run each test and document results. For any failed test, write a fix plan and implement it.
- Update your technical debt inventory: list every shortcut or imperfect design decision, rate its severity, and note whether you plan to fix it before the defense.

---

### Module 3: Architectural Defense & Security (Sessions 8–10)

---

#### Session 8: "Security Fundamentals" (2 hours)

**Learning Objectives:**
- Understand common web security vulnerabilities (simplified)
- Design input validation and data protection strategies

**Warm-Up (15 min):**
- **"Hacker Headlines"** — Show real (age-appropriate) news stories about data breaches. *"These happened because someone forgot to think about security. Today, we make sure that's not you."*

**Core Activity (60 min):**
- **"The Top Security Threats" (Simplified)**
  - Teach 5 common vulnerabilities with plain-language explanations:
  
  | Threat | Plain English | Example | Defense |
  |--------|--------------|---------|---------|
  | **Injection** | Attacker puts commands in your input fields | Typing database commands into a search box | Validate and clean all inputs |
  | **Broken Auth** | Attacker accesses accounts they shouldn't | Guessing passwords, stolen sessions | Strong passwords, session timeouts |
  | **Data Exposure** | API sends back more data than needed | User profile endpoint returns password hash | Only send necessary fields |
  | **XSS** | Attacker puts executable code in your content | JavaScript code in a comment that runs for other users | Escape all user-generated content |
  | **Broken Access** | Attacker accesses other users' data by changing URLs | Changing /user/123/profile to /user/124/profile | Check permissions on every request |
  
  - For each, students identify: "Does my capstone project have this vulnerability?"
  - If yes, design a fix.

- **"The Input Validation Challenge"**
  - For every input field in their project, students must define:
    - What type of data is expected?
    - What is the maximum length?
    - What characters are allowed?
    - What should happen with invalid input?
    - Where is validation performed? (client, server, or both — and why both?)

**Mini-Lesson (20 min):**
- **"Defense in Depth"** — Never rely on one security measure. Layer defenses.
- **The Principle of Least Privilege** — Give each user/component only the minimum permissions needed.
- **"Security is not a feature — it's a quality of every feature."**

**Closing Activity (15 min):**
- Students add a "Security Checklist" to their project documentation.

**📝 Homework (Practice at Home):**
- Perform a complete security audit of your capstone project using the 5 threat categories from class. For each threat, write: (1) Is my project vulnerable? (2) If yes, what's the specific risk? (3) What's my fix? Implement at least 2 security fixes before the next session.
- Complete the Security Checklist for your project documentation.

---

#### Session 9: "Attack & Defend" (2 hours)

**Learning Objectives:**
- Practice finding vulnerabilities in real applications
- Defend design decisions under questioning

**Core Activity (90 min):**
- **"Red Team / Blue Team: The Bug Bounty Fair"**
  - Make the testing a game: Students register as "Security Consultants."
  - **Phase 1: Attack (20 min per round):** Attackers try to find vulnerabilities in other students' apps. For each bug they find that crashes the app, leaks sensitive info, or bypasses auth, they submit a "Bug Report" and earn "Bounty Points."
  - **Phase 2: Defend (10 min per round):** Defenders receive bug reports. They must write a quick diagnosis (Why it happened, Severity 1–5, and Proposed Fix). For every valid defense/explanation, they protect their points.
  - Switch roles and repeat.
  - **"The Fix Sprint"** — Remaining time: students fix the most critical vulnerabilities found.

**Debrief (20 min):**
- Share the most creative attacks found.
- Share the most effective defenses.
- Tutor highlights: *"The attacks you found today are the same ones real hackers use. You now think like a security professional."*

**Ethics Moment (10 min):**
- *"You found a security vulnerability in a classmate's app. What's the ethical way to report it? What about if you found one in a real company's website?"* Introduction to responsible disclosure.

**📝 Homework (Practice at Home):**
- Fix ALL critical and high-severity vulnerabilities discovered during the Red Team / Blue Team exercise. For each fix, document: (1) What the vulnerability was, (2) What you changed, (3) How you verified the fix works. If you couldn't fix something, explain why and what resources you'd need.
- Write a "Vulnerability Report" summarizing all findings from the session — this becomes part of your capstone documentation.

---

#### Session 10: "Privacy by Design" (2 hours)

**Learning Objectives:**
- Apply data minimization principles
- Understand user consent and data rights
- Design privacy-respecting systems

**Warm-Up (15 min):**
- **"The Data Audit"** — List all the data your capstone project collects. For each piece: "Do we REALLY need this? What would happen if we didn't collect it?"

**Core Activity (60 min):**
- **"The Data Minimization Challenge"**
  - Students redesign their data model with a new rule: **collect the absolute minimum data needed for each feature to work.**
  - For each field they keep, they must justify why it's necessary.
  - For each field they remove, they must explain how the feature still works without it.

- **"The Consent Flow"**
  - Students design a user consent flow for their app:
    - What data are you collecting?
    - Why are you collecting it?
    - How long will you keep it?
    - How can the user see their data?
    - How can the user delete their data?
    - What happens to the app if the user refuses to share certain data?
  - Draw the consent flow as a user journey.

- **"The Incident Response Plan"**
  - Scenario: "A user reports they can see another user's private data."
  - Students must write a response plan:
    1. **Identify:** What data was exposed? How many users affected?
    2. **Contain:** How do you stop the exposure immediately?
    3. **Fix:** What code/config change resolves the root cause?
    4. **Notify:** What do you tell affected users?
    5. **Prevent:** What process change prevents this from happening again?

**Mini-Lesson (20 min):**
- **Privacy Regulations (Simplified):**
  - PDPA (Thailand), GDPR (Europe) — both say: collect only what's needed, tell users what you collect, let users control their data
  - These aren't just laws — they're **design principles** for respectful systems
- **"Privacy is a feature, not a restriction"** — Users trust and prefer apps that respect their privacy

**Closing Activity (15 min):**
- Students add a Privacy section to their project documentation: data collected, justification, retention policy, user rights.

**📝 Homework (Practice at Home):**
- Finalize the Privacy section of your project documentation: data inventory, justification for each data field collected, retention policy, user rights (view, delete, export), and consent flow diagram. Review your data model one more time — can you remove any fields you don't strictly need?
- Write a user-facing privacy policy for your app in plain, simple language (not legal jargon). Aim for something a 12-year-old could understand.

---

### Module 4: Capstone Project & Defense (Sessions 11–14)

---

#### Sessions 11–12: "Capstone Completion Sprint" (4 hours total)

**Objective:** Complete, polish, and document the capstone project.

**Session 11 Activities:**
- Complete Phase 4: Polish + final testing
- Apply security fixes from Sessions 8–9
- Implement privacy-by-design changes from Session 10
- Write complete documentation:
  - README with setup instructions
  - Architecture Decision Records
  - API documentation
  - Security checklist (completed)
  - Privacy policy
  - Known issues and future improvements

**📝 Homework (Practice at Home):**
- Complete ALL remaining documentation and polish your capstone project. Test every feature one more time using your test scenarios. Fix any remaining bugs. Prepare a draft of your defense presentation: outline your architecture walkthrough, key decisions, and demo plan.
- Practice presenting to a family member or friend (aim for under 15 minutes). Note any questions they ask — these might come up in the defense.

**Session 12 Activities:**
- Deploy the application to a live environment
- Final testing in production
- Prepare defense presentation:
  - System architecture walkthrough
  - Key design decisions and trade-offs
  - Security measures implemented
  - Privacy design choices
  - Technical debt inventory
  - Demo of working features
  - Lessons learned

**📝 Homework (Practice at Home):**
- Finalize and rehearse your defense presentation. Prepare for tough questions by writing down 5 "What if..." scenarios you think the panel might ask, and draft your answers. Test your deployed application one final time.
- Write a one-page "Lessons Learned" document reflecting on the entire capstone process: What went well? What was harder than expected? What would you do differently next time?

---

#### Session 13: "The Capstone Defense" (2 hours)

**The Final Assessment:**
- Each student presents their project (15–20 minutes, adjust based on class size):

**Part 1: Architecture Presentation (7 min)**
- Walk through the system architecture
- Explain key design decisions with ADRs
- Show the data model and API design
- Demonstrate the user journey

**Part 2: Live Demo (5 min)**
- Demonstrate working features
- Show error handling in action
- Demonstrate security measures (e.g., input validation)
- Show privacy features (consent flow, data deletion)

**Part 3: Defense (5–8 min)**
- Panel (tutor + peers) asks challenging questions:
  - *"Why did you choose this architecture over [alternative]?"*
  - *"What happens if [edge case scenario]?"*
  - *"Show me how your system handles [security threat]"*
  - *"If you had to add [new feature], how would your architecture accommodate it?"*
  - *"What's the biggest piece of technical debt in your project?"*

**Part 4: Red Team Challenge (3 min)**
- One peer gets 3 minutes to try to break the app live
- Presenter explains defenses in real-time

---

#### Session 14: "Reflection & What's Next" (2 hours)

**Retrospective (45 min):**
- Class discussion:
  - What was the hardest part of the entire program?
  - What skill do you use most in your daily life now?
  - How has your relationship with AI tools changed?
  - What would you build next?

**Industry Preview (30 min):**
- Discuss real-world roles that use these skills:
  - Product Manager, Solutions Architect, Security Engineer, Technical Writer
  - *"You've been practicing all of these roles."*
- Preview of advanced topics for continued learning:
  - Cloud architecture, CI/CD, machine learning concepts, advanced security

**Portfolio Assembly (30 min):**
- Students compile their complete learning portfolio:
  - Level 1 blueprints
  - Level 2 Prompt Journal
  - Level 3 capstone project with documentation
  - Reflection essays from each level

**Closing (15 min):**
- Certificate presentation
- Student feedback on the program

---

### Level 3 Assessment — Due Within 1 Week

#### In-Session Assessment (Sessions 13)
- Capstone Defense (scored during presentation — see Session 13 above)

#### Take-Home Component (Due within 1 week)
- **Written Architecture Review** — Given a new system description (e.g., "Design a school event ticketing system"):
  1. Create a complete architecture document: ER diagram, API specification, sequence diagram, privacy classification
  2. Identify 5 security considerations and design mitigations
  3. Write a prompt specification that would generate the core backend
  4. Write an Architecture Decision Record for the 2 most important decisions
  5. Design a testing strategy with 10 test scenarios

#### Level 3 Assessment Rubric

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Logical Clarity** (15%) | Architecture is internally consistent, all flows are complete | Minor inconsistencies, most flows complete | Several gaps in logic, incomplete flows | Architecture doesn't hold together |
| **Specification Precision** (20%) | API contracts, data models, and specs are implementation-ready | Specs are mostly complete, some vagueness | Significant gaps in specification | Specs too vague to implement |
| **Edge Case Coverage** (20%) | Comprehensive security + privacy + failure coverage | Good coverage, some gaps in edge cases | Basic error handling, limited security thinking | Minimal consideration of failure modes |
| **System Thinking** (25%) | Components are well-bounded, interfaces are clean, scalability considered | Good decomposition, interfaces mostly clean | Monolithic thinking, tangled components | No evidence of architectural decomposition |
| **Communication** (20%) | Documentation enables full project handoff, defense is compelling | Documentation is mostly complete, defense is solid | Documentation has gaps, defense struggles with hard questions | Cannot explain or defend design decisions |

## 8. Level 4: Advanced Integration — "The Software Engineer"

**Goal:** Act as a Software Engineer. Connect, deploy, and launch a real-world web application. Establish live database connections, configure environment variables, secure API credentials, set up user authentication, configure CI/CD pipelines, and deploy live URLs to the public cloud.

**Prerequisites:** Level 3 completion. Comfortable with system architecture maps, API contracts, database modeling, and threat security audits.

### Module 1: Production Infrastructure & Database Integration (Sessions 1–3)

---

#### Session 1: "Connecting to the Cloud Database" (2 hours)

**Learning Objectives:**
- Connect a React application to a remote cloud database (e.g., Supabase, Firebase)
- Perform CRUD operations directly from a client application

**Warm-Up (15 min):**
- **"Real-Time Sync"** — Tutor inputs data on a teacher console. Students watch it instantly populate on their screens. Introduce the concept of real-time server synchronicity.

**Core Activity (60 min):**
- **"The Live Database Hookup"**
  - Students connect their frontend template to a cloud database project.
  - Create a database table for their campaign context (Cyberpunk: Sensor Alerts, Mars: Life Support Logs, Magic: Spell Registry).
  - Write frontend logic to insert and read records.
  - Debrief: *"How is this different from local storage? Where does this data exist when your computer is off?"*

**Mini-Lesson (20 min):**
- **Database Client libraries:** Instantiating database clients, credentials handling, executing requests.
- **Data Latency:** How geography affects server speed; caching briefly explained.

**Closing Activity (15 min):**
- Test reading and writing records concurrently as a class to verify real-time data flows.

**📝 Homework (Practice at Home):**
- Choose a real-world app context and design its database schema.
- **Spy Mode Option:** Design a "Self-Destructing Message" database schema. List the fields (e.g., `read_at`, `expires_in`) and write the SQL logic for purging expired messages.
- Bring your schema to the next session.

---

#### Session 2: "Security Keys & Environment Variables" (2 hours)

**Learning Objectives:**
- Differentiate between public and private credentials
- Configure environment variables to prevent API key exposure

**Warm-Up (15 min):**
- **"The Leaked Password"** — Tutor shows a mock public repository containing a plain-text database password. Discuss what a hacker could do with this access.

**Core Activity (60 min):**
- **"Secret Wards Protection"**
  - Move hardcoded API keys and database URLs out of the code.
  - Create `.env` and `.env.local` files to store configuration keys.
  - Configure `.gitignore` to ensure secret keys are never committed to git.
  - Verify that the app still compiles and fetches data using `process.env` or `import.meta.env`.

**Mini-Lesson (20 min):**
- **Environment Variables:** Why we separate config keys from codebase logic.
- **Key Rotation:** What to do when a key is leaked (revoke, regenerate, redeploy).

**Closing Activity (15 min):**
- Inspect the build output files to ensure no private key strings are embedded or visible to users.

**📝 Homework (Practice at Home):**
- Write a short guide explaining what happens if someone commits a private database password to a public repository, and outline a key rotation checklist.

---

#### Session 3: "External API Integration" (2 hours)

**Learning Objectives:**
- Fetch data from third-party REST APIs
- Handle asynchronous network requests and error states

**Warm-Up (15 min):**
- **"The Mashup App"** — Tutor demonstrates an app that pulls together weather data, map locations, and news headlines in one page.

**Core Activity (60 min):**
- **"API Integration Sprint"**
  - Integrate an external public API into their application.
  - Write asynchronous fetch functions.
  - Clean and structure the raw JSON responses.
  - Handle rate limits (429 codes) and fetch failures gracefully.

**Mini-Lesson (20 min):**
- **REST APIs & JSON:** Reviewing HTTP methods, request headers, query parameters, and response codes.

**Closing Activity (15 min):**
- Students showcase their API mashups and test error boundaries by turning off network connectivity.

**📝 Homework (Practice at Home):**
- Design an interface to fetch and cache API responses to avoid exceeding rate limits.

---

### Module 2: User Access & Identity (Sessions 4–6)

---

#### Session 4: "User Authentication & Sign-Up" (2 hours)

**Learning Objectives:**
- Implement registration and login flows
- Manage user authentication session states

**Warm-Up (15 min):**
- **"The Guarded Door"** — Discuss why apps ask you to login. Introduce authentication (who you are) vs. authorization (what you can do).

**Core Activity (60 min):**
- **"Building the Gate"**
  - Configure Email/Password sign-up and login providers on the cloud database platform.
  - Build functional sign-up, login, and sign-out pages.
  - Configure state hooks to listen for user session shifts (active user vs. guest).
  - Guard routes so logged-out users are automatically redirected to the login screen.

**Mini-Lesson (20 min):**
- **Authentication Tokens:** How sessions are maintained in browsers (cookies, local tokens).

**Closing Activity (15 min):**
- Test logging in with multiple accounts to ensure the user session updates dynamically.

**📝 Homework (Practice at Home):**
- Create a user flow map showing how the application routes logged-in vs. logged-out users (auth guarding).

---

#### Session 5: "Row-Level Security & Data Wards" (2 hours)

**Learning Objectives:**
- Configure Row-Level Security (RLS) policies in a database
- Prevent unauthorized cross-user data leaks

**Warm-Up (15 min):**
- **"The Snooping Neighbor"** — Tutor logs in as User A and tries to read User B's private messages. Discuss why client-side security is not enough (someone can bypass the frontend and query the database directly).

**Core Activity (60 min):**
- **"Wards of Data Isolation"**
  - Write SQL database security policies (e.g., `auth.uid() = user_id`).
  - Activate RLS on the main tables.
  - Run database queries to verify that User A receives zero records when querying User B's rows, even without frontend restrictions.
  - Handle database permission denied errors in the React app.

**Mini-Lesson (20 min):**
- **Row-Level Security (RLS):** Securing data at the source (database level) rather than the delivery channel (app level).

**Closing Activity (15 min):**
- Group audit: Students test each other's databases to ensure cross-user isolation policies hold.

**📝 Homework (Practice at Home):**
- Write security policies for a shared dashboard (e.g. "Anyone can view, only creators can edit").

---

#### Session 6: "Role-Based Access Control (RBAC)" (2 hours)

**Learning Objectives:**
- Implement permission tiers (e.g., Admin, Operator, Guest)
- Restrict UI features and API endpoints based on user roles

**Warm-Up (15 min):**
- **"Who Has the Key?"** — Discuss why a standard user shouldn't be able to delete other users' accounts. Define Role-Based Access Control (RBAC).

**Core Activity (60 min):**
- **"The Permissions Matrix"**
  - Add a `role` column to the profiles database table.
  - Write frontend routes that restrict certain panels to "Admin" users.
  - Add database policies that block write operations to critical tables unless the user's role is "Operator" or "Admin".
  - Test trying to perform admin actions as a guest user.

**Mini-Lesson (20 min):**
- **User Roles:** Creating robust role tables, checking tokens, and securing write actions.

**Closing Activity (15 min):**
- Test promoting a user to Admin in the console and observing their UI instantly unlock new controls.

**📝 Homework (Practice at Home):**
- Outline a permission matrix for a banking app with Customer, Teller, and Audit roles.

---

### Module 3: Cloud Infrastructure & Deployment (Sessions 7–9)

---

#### Session 7: "Git, Version Control & GitHub" (2 hours)

**Learning Objectives:**
- Commit and track code changes using Git
- Collaborate on repositories via pull requests on GitHub

**Warm-Up (15 min):**
- **"Code Time Machine"** — Tutor shows how they can roll back their codebase to a version from 3 days ago with a single command. Introduce Git.

**Core Activity (60 min):**
- **"Git Team Ops"**
  - Initialize Git in the local project.
  - Link the local repository to a remote GitHub repository.
  - Perform standard version operations: `git add`, `git commit -m`, `git push`.
  - Create a development branch, make a change, and open a Pull Request.
  - Swap PRs with a peer and perform a code review.

**Mini-Lesson (20 min):**
- **Git Workflows:** Commits, branches, merging, pull requests, and resolving conflicts.

**Closing Activity (15 min):**
- Merge the approved PRs into the main production branch.

**📝 Homework (Practice at Home):**
- Practice resolving a merge conflict on a test branch.

---

#### Session 8: "Continuous Deployment (CI/CD) Pipelines" (2 hours)

**Learning Objectives:**
- Connect a repository to a cloud hosting platform (e.g., Vercel, Netlify)
- Configure automatic pipelines for staging and production builds

**Warm-Up (15 min):**
- **"The Live URL"** — Tutor pushes a typo fix to GitHub, and 30 seconds later, the live URL updates automatically without any manual server upload.

**Core Activity (60 min):**
- **"The Launch Pipeline"**
  - Link their GitHub repository to a cloud hosting service (Vercel).
  - Configure production build commands (`npm run build`).
  - Configure environment variables on the Vercel dashboard.
  - Trigger a live deployment and share their app URL with the class.

**Mini-Lesson (20 min):**
- **Continuous Deployment:** What is CI/CD? Automating code checks, builds, and serving static assets globally.

**Closing Activity (15 min):**
- Class compiles a list of live URLs. Everyone visits each other's live apps.

**📝 Homework (Practice at Home):**
- Set up environment variables on the hosting platform and verify they are correctly injected into the live app.

---

#### Session 9: "Monitoring and Error Diagnostics" (2 hours)

**Learning Objectives:**
- Read serverless logs and console errors to diagnose live bugs
- Perform hotfixes on production systems

**Warm-Up (15 min):**
- **"The Blank Screen Crisis"** — Tutor shows a deployed website that displays a white screen or a "500 Internal Server Error." How do we locate the problem?

**Core Activity (60 min):**
- **"Production Hotfix"**
  - Tutor pushes a bug to their app (e.g., calling an undefined API key).
  - Deployed site fails in production.
  - Students open server/browser logs, read the trace, locate the bug, fix the source code, push to Git, and verify the patch is live.

**Mini-Lesson (20 min):**
- **Logging & Monitoring:** Reading Vercel logs, tracing runtime errors, tracking database performance logs.

**Closing Activity (15 min):**
- Review rollback procedures: showing how to immediately revert a deployment to the previous stable release.

**📝 Homework (Practice at Home):**
- Write a rollback procedure detailing how to revert to a previous working build on Vercel.

---

### Module 4: Product Launch & Defense (Sessions 10–12)

---

#### Session 10: "Capstone Project Integration" (2 hours)

**Learning Objectives:**
- Integrate authentication, database links, and API assets into a cohesive app
- Manage project tasks and deadlines for product launch

**Core Activity (90 min):**
- **"The Integration Sprint"**
  - Students merge all their Capstone Project features:
    - User signup/login
    - Live database syncing (RLS enabled)
    - External API telemetry
    - Environment secrets configured
    - Automatically deployed live URL
  - Audit codebase using their Code Review checklists.

**Debrief (30 min):**
- Status check. Identify blockers and coordinate peer troubleshooting.

**📝 Homework (Practice at Home):**
- Complete user acceptance testing (UAT) with 10 test scenarios.

---

#### Session 11: "Load Testing & Code Quality Audit" (2 hours)

**Learning Objectives:**
- Audit code structure for modularity and performance
- Prepare the portfolio handoff

**Core Activity (90 min):**
- **"Launch Prep Audit"**
  - Run code audits to ensure no debug logs or secrets are committed.
  - Test database queries for performance.
  - Finalize all documentation (README, setup guides, API specs, security matrix).
  - Practice pitching the application to a peer.

**Debrief (30 min):**
- Peer review of documentation and code structure.

**📝 Homework (Practice at Home):**
- Assemble all components (code, spec journal, schema, testing log) into a polished Portfolio Handoff.

---

#### Session 12: "The Grand Launch & System Defense" (2 hours)

**The Final Assessment:**
- Students present their live production applications to a panel of peers and tutors.

**Part 1: The Product Pitch (8 min)**
- Demonstrate the live URL working in production.
- Explain the user journey, features, and value.

**Part 2: Architectural Tour (7 min)**
- Show the database schema and RLS policies.
- Explain API route guarding and secret key configuration.
- Walk through the Git history showing incremental features.

**Part 3: Live System Defense (5 min)**
- Tutor runs the Chaos Monkey tests live against their production app (e.g., submitting garbage inputs, trying to read another user's table rows, testing API key exposures).
- Student explains how their system architecture handles each threat.

**📝 Homework (Practice at Home):**
- Write a final retrospective: "My Journey from Syntax Writer to System Architect."

---

#### In-Session Assessment (Session 12)
- Level 4 Pitch & Defense (scored during presentation)

#### Level 4 Assessment Rubric

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Functional Stability** (25%) | App runs flawlessly in production, handles edge inputs without crash | Minor UI bugs, core flows work correctly | Major flows fail, crashes under basic tests | App fails to build or load in production |
| **Security & Privacy** (25%) | Environment variables fully secured, database guarded by RLS | Keys secured, RLS has minor gaps | Keys exposed in code, RLS disabled | No security considerations implemented |
| **Deployment & CD** (20%) | Code is hosted on Git, CD pipeline deploys commits automatically | Hosted on Git, minor build script issues | Manual deployments only, not on Git | No live url available |
| **Independent Defence** (30%) | Compelling presentation, answers technical edge questions with clarity | Solid presentation, struggles on deep architecture questions | Presenter does not understand how some parts work | Cannot defend or explain system design decisions |

---

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
│  Level 1: THE LOGIC BLUEPRINT (24 hours)                │
│  ├─ Module 1: Inputs, Processing, Outputs (3 sessions)  │
│  ├─ Module 2: Visual Structures & Loops   (3 sessions)  │
│  ├─ Module 3: Problem Decomposition       (3 sessions)  │
│  ├─ Module 4: Thinking Like a Tester      (2 sessions)  │
│  └─ Assessment                            (1 session)   │
│                                                         │
│  Level 2: THE LANGUAGE & THE COPILOT (26 hours)         │
│  ├─ Module 1: Code Anatomy — Read, Don't Write (3 ses.) │
│  ├─ Module 2: Prompting as PRD            (3 sessions)  │
│  ├─ Module 3: Code Detective — Debugging  (3 sessions)  │
│  ├─ Module 4: Version Control & Collab    (2 sessions)  │
│  └─ Assessment                            (2 sessions)  │
│                                                         │
│  Level 3: THE SYSTEM ARCHITECT (28 hours)               │
│  ├─ Module 1: Databases, APIs, Data Flows (3 sessions)  │
│  ├─ Module 2: Project Orchestration       (4 sessions)  │
│  ├─ Module 3: Defense & Security          (3 sessions)  │
│  ├─ Module 4: Capstone Project & Defense  (4 sessions)  │
│  └─ Assessment                            (2 sessions)  │
│                                                         │
│  Level 4: THE SOFTWARE ENGINEER (24 hours)              │
│  ├─ Module 1: Production Databases        (3 sessions)  │
│  ├─ Module 2: User Access & Identity      (3 sessions)  │
│  ├─ Module 3: Cloud CD & Pipelines        (3 sessions)  │
│  ├─ Module 4: Product Pitch & Defense     (3 sessions)  │
│  └─ Assessment                            (1 session)   │
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
