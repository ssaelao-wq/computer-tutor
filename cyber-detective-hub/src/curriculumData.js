// Detailed Curriculum Database for Levels 1 to 4
// Mapped from Computer_Tutor_AIEra_Improved_Curriculum.md

export const CURRICULUM_DATA = [
  // ================= LEVEL 1 =================
  {
    id: "l1-s1",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 1: \"Literal Logic & Digital Infiltration\"",
    duration: "2 hours",
    objectives: [
      "Understand that computers follow instructions sequentially, literally, and without common sense",
      "Identify the Input → Process → Output pattern in everyday digital systems",
      "Create sequential instruction lists in Sandbox simulation"
    ],
    warmUp: "Drone Operator Roleplay: Tutor-student roleplay. Student gives step-by-step instructions to tutor to move and retrieve an object. Tutor follows them strictly literally, demonstrating computer logical processing.",
    miniLesson: "The IPO Model: Trace Input → Process → Output. Variable concepts as labeled memory registers that hold one state value.",
    coreActivity: "Sequence Blueprinting: Student uses flowcharts inside the app to arrange command blocks (Power On, Scan, Tunnel, Bypass, Exfiltrate) in correct logical order.",
    handsOn: "Complete 5 sandbox tasks: (1) Basic Infiltration sequence, (2) Variable coordinate scans, (3) Sequence Debugging, (4) Variable Overwrite, (5) Power Check Logic.",
    homework: "Complete the \"Household IPO Blueprint\" in the app's Journal tab: Write a process to warm up food from a plate using a microwave. Identify preconditions, inputs, processing logic, and outputs (+50 XP).",
    ethics: "Drone Crash Responsibility: If a drone crashes because of a logic error in its code, who is responsible — the coder, the company, or the operator?",
    adaptations: "Age 13-16: Use digital sandbox modules and audit terminal outputs. Discuss real IPO algorithms."
  },
  {
    id: "l1-s2",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 2: \"Backpack Classification & Lock Verification\"",
    duration: "2 hours",
    objectives: [
      "Distinguish between data types: Numbers, Strings, and Booleans",
      "Define type constraints and boundary validations (GIGO)"
    ],
    warmUp: "Crypto-Token Sorter: Sort mock data pieces (Strings, Numbers, Booleans) into separate containers in the app's warm-up screen.",
    miniLesson: "Data Types & Validation Guards: Strings (character arrays), Numbers (math values), Booleans (switches). GIGO (Garbage In, Garbage Out).",
    coreActivity: "Form Exploitation: student tests and configures input validation fields on a mock form, learning how input type constraints reject invalid inputs.",
    handsOn: "Complete 5 sandbox tasks: (1) Sort backpack payloads by data type, (2) Configure validation guards, (3) Set validation bounds, (4) Passcode Type Casting, (5) Boolean Inversion.",
    homework: "Locate two online sign-up forms. Document their input types and validation error messages in the app's Journal tab under 'Session 2 Homework' (+50 XP).",
    ethics: "Data validation inclusion: How strict validation bounds and schemas might affect real-world representation (e.g. names, gender options).",
    adaptations: "Age 13-16: Trace database validation exceptions and API schemas."
  },
  {
    id: "l1-s3",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 3: \"Airlock Security State Machines\"",
    duration: "2 hours",
    objectives: [
      "Explain variables as states and map transition commands",
      "Design systems using finite state machine logic tables"
    ],
    warmUp: "The State Switchboard: Manually toggle switch states in the app and observe how other system states light up.",
    miniLesson: "States, Transitions, and Commands: System configurations as distinct states; actions trigger transition paths; security overrides.",
    coreActivity: "State Machine Mapping: Student maps transitions from CLOSED to OPEN using cycle commands and secure alarm overrides.",
    handsOn: "Complete 5 sandbox tasks: (1) Basic Open/Close transition table, (2) Lock state transitions, (3) Safe Mode Override states, (4) Intruder Alert FSM, (5) Master Restore transition.",
    homework: "Design a state transition table for a smart device (like a smart lock or alarm clock) and log it in your Prompt Journal (+50 XP).",
    ethics: "Failsafes and safety FSMs: Designing transition rules that protect human lives (e.g. elevator brakes, medical devices).",
    adaptations: "Age 13-16: Write FSM transition tables using formal notation and state graphs."
  },
  {
    id: "l1-s4",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 4: \"Decisions, Decisions\"",
    duration: "2 hours",
    objectives: [
      "Construct multi-condition logic checks",
      "Apply condition hierarchy and handle edge overrides"
    ],
    warmUp: "Truth Table Toggler: Toggle logical parameters (True/False) to observe compound Boolean AND/OR outcomes.",
    miniLesson: "Conditional logic gates: IF / ELSE structures, Boolean arithmetic (AND, OR, NOT), priority of overrides.",
    coreActivity: "Thermostat safety override: Program logical conditions to regulate sector climate.",
    handsOn: "Complete 5 sandbox tasks: (1) Temperature checks, (2) Window sensor compound checks, (3) Emergency bypass priorities, (4) Sensor conflict detection, (5) Auto-shutdown conditions.",
    homework: "Complete the Weather Decision flowchart and condition rules tree inside the app's Journal tab (+50 XP).",
    ethics: "Automated bias: How algorithmic conditional thresholds might disproportionately affect individuals (e.g. credit decisions).",
    adaptations: "Age 13-16: Write nested condition blocks in pseudocode and map decision trees."
  },
  {
    id: "l1-s5",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 5: \"The Automated Pet Grid\"",
    duration: "2 hours",
    objectives: [
      "Distinguish between loop bounds: counting vs. conditions",
      "Detect and trace infinite loop traps"
    ],
    warmUp: "Drone Fuel Loop: Trace how many loops a drone can complete based on a set variable decrement rate.",
    miniLesson: "Loop structures: For (counting bounds) vs. While (conditional state bounds). Infinite loop crash triggers.",
    coreActivity: "Feeder sequence blueprinting: Write loops that run while bounds are satisfied and terminate when variables transition.",
    handsOn: "Complete 5 sandbox tasks: (1) Simple counter loops, (2) Loop break conditions, (3) Smart refill check loops, (4) Cat double-feed checks, (5) Infinite loop protection code.",
    homework: "Identify loops in daily life. Write their logic in the Journal tab using JavaScript loops (e.g. `while(battery < 100)`) (+50 XP).",
    ethics: "Notification loops: Should a social media app loop notifications infinitely to get your attention?",
    adaptations: "Age 13-16: Compare `for` and `while` logic, discuss CPU locks and execution cycles."
  },
  {
    id: "l1-s6",
    level: 1,
    module: "Module 2: Visual Structures & Logical Loops",
    title: "Session 6: \"Building with Blocks to Code\"",
    duration: "2 hours",
    objectives: [
      "Represent logic flow in visual block programming",
      "Map Blockly blocks to raw JavaScript syntax statements"
    ],
    warmUp: "Block Translation: Match visual block configurations to equivalent lines of JavaScript syntax on the app screen.",
    miniLesson: "Code compilation: How visual blocks translate to JavaScript. Reading block-generated script outputs.",
    coreActivity: "Syntax Matcher: Draw connections linking logic blocks (loops, variables) to equivalent raw Javascript statements.",
    handsOn: "Complete 5 sandbox tasks: (1) Dimming Grid light blocks, (2) Syntax block matching, (3) Raw Code parameters override, (4) Array Index loop builder, (5) Nested logic compiler.",
    homework: "Write the Javascript code equivalent for a block condition checking temperature in the Journal tab under 'Session 6 Homework'.",
    ethics: "Smart grids security: Who is authorized to change municipal control scripts? Security overrides issues.",
    adaptations: "Age 13-16: Compare Blockly elements side-by-side with Javascript syntax blocks."
  },
  {
    id: "l1-s7",
    level: 1,
    module: "Module 3: Problem Decomposition & The Logic Map",
    title: "Session 7: \"Breaking Big Problems Into Small Ones\"",
    duration: "2 hours",
    objectives: [
      "Decompose complex systems into sub-systems",
      "Represent modules as JavaScript function declarations"
    ],
    warmUp: "Stopwatch Deconstructor: Identify modular sub-systems of a digital stopwatch inside the app's analysis screen.",
    miniLesson: "Modular Design: Problem decomposition, abstraction, and sub-systems. Declaring functions: `function checkSensors() { ... }`.",
    coreActivity: "Game Decomposer: Match game features to sub-system modules and outline equivalent empty Javascript functions.",
    handsOn: "Complete 5 sandbox tasks: (1) Stopwatch modular function setup, (2) Module Dependency binding, (3) Decoupled interface thread locks, (4) Database Log isolation, (5) Shared state synchronization.",
    homework: "Decompose a game or app and list 3 sub-systems and empty function signatures in the Journal tab.",
    ethics: "Component liability: If a sub-system module fails, whose code is responsible for the overall crash?",
    adaptations: "Age 13-16: Discuss modular code, namespaces, and clean function scopes."
  },
  {
    id: "l1-s8",
    level: 1,
    module: "Module 3: Problem Decomposition & The Logic Map",
    title: "Session 8: \"Designing Before Building\"",
    duration: "2 hours",
    objectives: [
      "Write blueprints defining user journeys",
      "Declare variables and write assignment logic in JS syntax"
    ],
    warmUp: "Blueprint Matcher: Match wireframe sketches to logical variable declaration lists in the app.",
    miniLesson: "Blueprint planning. Declaring variables (`let score = 0;`) and logical operators (`&&`, `||`, `!`) in code statements.",
    coreActivity: "Habit Tracker Design: Map user screens and specify variables using Javascript assignment and comparison syntax.",
    handsOn: "Complete 5 sandbox tasks: (1) Match UI inputs to data types, (2) Declare JS status variables, (3) Limit attempts using operators, (4) Validate email patterns, (5) Set offline fallback variables.",
    homework: "Define 4 variables and write 2 conditional statements in JavaScript syntax in the Journal tab under 'Session 8 Homework'.",
    ethics: "Plan vs speed: Why coding without planning leads to structural flaws and security vulnerabilities.",
    adaptations: "Age 13-16: Outline structured sequence blueprints with data types and variables."
  },
  {
    id: "l1-s9",
    level: 1,
    module: "Module 3: Problem Decomposition & The Logic Map",
    title: "Session 9: \"Connecting the Pieces\"",
    duration: "2 hours",
    objectives: [
      "Map communication pathways between functions",
      "Pass data values using parameters and returns in code syntax"
    ],
    warmUp: "Data Pipeline Game: Bind module output ports to filter inputs in the app screen and view changing streams.",
    miniLesson: "Communication contracts: Function inputs (parameters) and outputs (returns). Parameter binding syntax: `calculateTotal(price, taxRate)`.",
    coreActivity: "Interface Connector: Connect 3 components and write parameters (e.g. passing credentials) to secure data flows.",
    handsOn: "Complete 5 sandbox tasks: (1) Sensor pipeline input routing, (2) Call function with credentials arguments, (3) Capture output return status, (4) Compute margins with multi-parameters, (5) Chain passcode callbacks.",
    homework: "Design an online checkout interface signature using Javascript function syntax inside the Journal tab.",
    ethics: "Third-party leaks: What parameters should be sent to external APIs to protect client privacy?",
    adaptations: "Age 13-16: Trace function argument passing and verify types in returns."
  },
  {
    id: "l1-s10",
    level: 1,
    module: "Module 4: Thinking Like a Tester",
    title: "Session 10: \"The Art of Breaking Things\"",
    duration: "2 hours",
    objectives: [
      "Systematically define edge cases and boundaries",
      "Format test inputs as JavaScript test case objects"
    ],
    warmUp: "Input Fuzzer: Try typing extreme values into fields on the warm-up UI to see what breaks.",
    miniLesson: "Testing types. Defining test assertions as JS object literals: `let testCase = { input: val, expected: output }`.",
    coreActivity: "Edge Case Builder: Complete a test case array script in the sandbox workspace to validate range limits.",
    handsOn: "Complete 5 sandbox tasks: (1) Fuzz field boundary exceptions, (2) Write expected output assertion objects, (3) Set calculator boundary checks, (4) Validate null input checks, (5) Enforce array length overflow rules.",
    homework: "Create a list of 5 test case objects in JS syntax in the Journal tab under 'Session 10 Homework'.",
    ethics: "QA ethics: Why testers who break code are helpful collaborators, not adversaries.",
    adaptations: "Age 13-16: Construct validation suites and analyze edge limits."
  },
  {
    id: "l1-s11",
    level: 1,
    module: "Module 4: Thinking Like a Tester",
    title: "Session 11: \"Designing for Failure\"",
    duration: "2 hours",
    objectives: [
      "Implement defensive logic safeguards",
      "Read and compose try/catch block error handlers in Javascript"
    ],
    warmUp: "Error message review: Review error screens in the app and sort them by clarity and helpfulness.",
    miniLesson: "Defensive Coding. Error handling: `try / catch` blocks and error throwing syntax: `throw new Error(\"Invalid value\")`.",
    coreActivity: "Safety Guard: Add conditional checks and fallback variables to a forms processor workspace.",
    handsOn: "Complete 5 sandbox tasks: (1) Wrap passcode checks in try/catch, (2) Throw custom validation errors, (3) Track failure attempts lockout, (4) Write warnings to system logs, (5) Auto-retry connection loops.",
    homework: "Write a Javascript syntax email validity check using a throw guard in the Journal tab under 'Session 11 Homework'.",
    ethics: "Safe failures: Should safety-critical devices shut down instantly or degrade gracefully?",
    adaptations: "Age 13-16: Program try-catch blocks and handle custom error states."
  },
  {
    id: "l1-s12",
    level: 1,
    module: "Level 1 Assessment",
    title: "Session 12: \"Level 1 Capstone & Assessment\"",
    duration: "2 hours",
    objectives: [
      "Demonstrate logic mapping and diagnostic tracing competency",
      "Outline handler skeletons in Javascript syntax"
    ],
    warmUp: "Assessment alignment: Review task targets inside the app screen.",
    miniLesson: "System Defense: How to present logical blueprints and defend against edge case fuzzer checks.",
    coreActivity: "Digital Assessment: Map IPO, states, variables, and code syntax test cases for a brand new system scenario.",
    handsOn: "Run final verification on your city grid logic map in the Sandbox to pass fuzzer checks.",
    homework: "Complete the self-reflection journal questions in the Journal tab under 'Session 12 Assessment'.",
    ethics: "Design feedback: How to critique logic flowcharts and code rules construction constructively.",
    adaptations: "Age 13-16: Digital presentation of logic blueprint and fuzzer testing logs."
  },

  // ================= LEVEL 2 =================
  {
    id: "l2-s1",
    level: 2,
    module: "Module 1: \"Read, Don't Write\" - Code Anatomy",
    title: "Session 1: \"Code as a Foreign Language\"",
    duration: "2 hours",
    objectives: [
      "Understand basic code syntax blocks without writing them",
      "Identify functions, parameters, and variable assignments in JavaScript"
    ],
    warmUp: "Syntax Scavenger Hunt: Find where variables are declared and where functions start in a block of code.",
    miniLesson: "Syntax Anatomy: keywords, declaration blocks, brackets, parenthesis, return statements. Reading left-to-right, top-to-bottom.",
    coreActivity: "Translating Code to English: Given code cards, write plain English instructions describing what the code actually does.",
    handsOn: "Load a basic syntax template into the Sandbox. Read the block and document its parameters.",
    homework: "Find a simple JS snippet online. Annotate 3 variables, 1 loop, and 1 condition block.",
    ethics: "Is clean readable code an ethical requirement? The cost of obfuscated code in security.",
    adaptations: "Age 9-10: Color code statements physically. Age 15-17: Introduce simple TypeScript type mappings."
  },
  {
    id: "l2-s2",
    level: 2,
    module: "Module 1: \"Read, Don't Write\" - Code Anatomy",
    title: "Session 2: \"Predict the Output\"",
    duration: "2 hours",
    objectives: [
      "Dry-run code blocks manually using trace tables",
      "Calculate variables updates step-by-step through iteration blocks"
    ],
    warmUp: "Variable Tracer: Manually calculate simple arithmetic series in code.",
    miniLesson: "Trace Tables: Columns for step number, variable values, loop conditions, and outputs. Tracking loops line-by-line.",
    coreActivity: "Manual execution duel: Teams compete to dry-run code blocks containing nested loops, calculating final outputs.",
    handsOn: "Write a tracer program in the Sandbox. Predict variable outputs before running compilation checks.",
    homework: "Complete 3 trace tables for loops with variable increments of varying scales.",
    ethics: "Blind trust in computers: Why dry-running logic manually is crucial for system safety checks.",
    adaptations: "Age 9-10: Use whiteboard tables. Age 15-17: Run trace tables on recursion algorithms."
  },
  {
    id: "l2-s3",
    level: 2,
    module: "Module 1: \"Read, Don't Write\" - Code Anatomy",
    title: "Session 3: \"Code to Flowchart & Back\"",
    duration: "2 hours",
    objectives: [
      "Convert a logic flowchart into clean code structures",
      "Reverse engineer a block of code back into visual flowcharts"
    ],
    warmUp: "Flowchart Match: Match a visual diagram card to its corresponding code snippet.",
    miniLesson: "Equivalence Mapping: Diamond structures to IF/ELSE statement lines. Loop nodes to WHILE or FOR code scopes.",
    coreActivity: "Logic Translation: Teams receive complex code blocks and draw flowcharts. Teams then swap flowcharts to rewrite code.",
    handsOn: "Translate a nested flowchart logic diagram into a Sandbox JavaScript code template.",
    homework: "Draw a flowchart for a provided nested JavaScript conditional structure.",
    ethics: "Visual clarity: How modeling structures prevents developer logic errors and improves safety.",
    adaptations: "Age 9-10: Use drag-and-drop map tools. Age 15-17: Discuss code-to-UML automation tools."
  },
  {
    id: "l2-s4",
    level: 2,
    module: "Module 2: Prompting as a Specification Document",
    title: "Session 4: \"From Wish to Specification\"",
    duration: "2 hours",
    objectives: [
      "Construct detailed prompt specifications using structured headers",
      "Avoid vague wishes and replace them with inputs, outputs, rules, and edge cases"
    ],
    warmUp: "Wish vs Spec: Compare 'make an app that counts' to a structured specifications document. Discuss the difference in AI output.",
    miniLesson: "Prompt Engineering Framework: Role/Persona, Task Context, Input Data Schema, Business Logic Rules, Edge Case Handling, Expected Output Format.",
    coreActivity: "Spec Writing Workshop: Teams draft detailed specs to build a 'Streak Counter' or 'Game Score Tracker'. Try to leave zero ambiguities.",
    handsOn: "Write a structured prompt specification in the Sandbox. Run the generator to see if the output is correct.",
    homework: "Draft a 1-page Prompt Specification for a shopping cart calculator.",
    ethics: "AI Bias and prompt quality: How garbage specifications lead to buggy AI generated applications.",
    adaptations: "Age 9-10: Use a prompt outline template. Age 15-17: Write prompt specs using markdown layouts."
  },
  {
    id: "l2-s5",
    level: 2,
    module: "Module 2: Prompting as a Specification Document",
    title: "Session 5: \"The AI Sandbox\"",
    duration: "2 hours",
    objectives: [
      "Use structured prompts to direct AI code generation",
      "Iterate on prompt specs to refine AI outputs without editing code manually"
    ],
    warmUp: "Prompt Duel Arena: Compete to prompt the AI to build a specific mini-app in secret (e.g. a streak tracker) in one shot.",
    miniLesson: "Feedback Loops: Review AI output, spot logical errors, identify prompt ambiguities, refine prompt specs, regenerate.",
    coreActivity: "One-Shot App Challenge: Build a mini-app inside the Sandbox by writing prompt specifications. Iterate on the prompt for any failures.",
    handsOn: "Write prompt specifications in Sandbox, compile code outputs, and verify with fuzzer tests.",
    homework: "Run your prompt through a different AI model. In your Prompt Journal, document the differences.",
    ethics: "Is using AI to write code cheating? The shift from manual typing to logic specifications writing.",
    adaptations: "Age 9-10: Focus on simple text transformations. Age 15-17: Track versions and prompt diffs."
  },
  {
    id: "l2-s6",
    level: 2,
    module: "Module 2: Prompting as a Specification Document",
    title: "Session 6: \"The Constraint Challenge\"",
    duration: "2 hours",
    objectives: [
      "Add new system constraints without breaking existing features",
      "Inject obfuscated or security parameters into prompt specifications"
    ],
    warmUp: "The Obfuscated Key: Prompt an AI to hide a secret keyword inside an app.",
    miniLesson: "Constraints: Resource limits, user roles, bypass blocks, code size, execution rules.",
    coreActivity: "Requirement Roulette: Students receive random constraint cards (e.g. Hide bypass keywords, restrict user age ranges) and inject them into their prompts.",
    handsOn: "Implement constraints in the Sandbox. Run Chaos Monkey to verify the fuzzer catches backdoor cheats.",
    homework: "Write 5 additional test scenarios for your constraint project and test them against alternative AI nodes.",
    ethics: "Backdoors and hidden logic: The security implications of developers hiding unauthorized access paths in code.",
    adaptations: "Age 9-10: Use simple constraints (colors, counts). Age 15-17: Discuss prompt injection vulnerabilities."
  },
  {
    id: "l2-s7",
    level: 2,
    module: "Module 3: Code Detective - Debugging & Defense",
    title: "Session 7: \"The Bug Classification System\"",
    duration: "2 hours",
    objectives: [
      "Differentiate between Syntax, Runtime, and Logic errors",
      "Locate bugs using browser consoles and execution logs"
    ],
    warmUp: "Bug Hunt: Match compiler messages to their syntax errors.",
    miniLesson: "Bug Classification: Syntax (grammar check), Runtime (execution crash), Logic (runs but output is wrong). Error logs and stacks.",
    coreActivity: "The Bug Bounty: Students receive broken code files and classify all bugs before writing fixes.",
    handsOn: "Find and fix logic bugs in Sandbox templates using browser debug inputs.",
    homework: "Categorize 5 real bugs you encountered during your homework or local app testing. Document logs.",
    ethics: "Reporting bugs: Responsible disclosure ethics. Bug bounties.",
    adaptations: "Age 9-10: Use simple visual code puzzle logs. Age 15-17: Introduce breakpoints and variable watches."
  },
  {
    id: "l2-s8",
    level: 2,
    module: "Module 3: Code Detective - Debugging & Defense",
    title: "Session 8: \"The Broken Machine\"",
    duration: "2 hours",
    objectives: [
      "Debug systems with nested dependencies",
      "Write unit tests to prevent regression bugs"
    ],
    warmUp: "Dependency check: Break a gear in a model toy. Note how it breaks unrelated actions.",
    miniLesson: "Regressions: Fixing bug A breaks feature B. Unit testing: Automating validation of isolated features to guarantee logic stability.",
    coreActivity: "The Broken Vending Machine: Fix logic bugs in a complex coin receiver while ensuring coin payout rules are not broken.",
    handsOn: "Write automated tests inside the Sandbox, checking coin counts and balance bounds.",
    homework: "Write a test suite sheet with 10 test scenarios for a shopping cart checkout module.",
    ethics: "Is it ethical to ship software with known minor bugs? balancing timelines vs. quality.",
    adaptations: "Age 9-10: Simple inputs checklists. Age 15-17: Discuss TDD (Test Driven Development) flows."
  },
  {
    id: "l2-s9",
    level: 2,
    module: "Module 3: Code Detective - Debugging & Defense",
    title: "Session 9: \"Efficiency & Code Quality\"",
    duration: "2 hours",
    objectives: [
      "Recognize code redundancy and refactor logic blocks",
      "Optimize loop execution counts and variable scopes"
    ],
    warmUp: "The Redundant Chef: Clean up a recipe that repeats the same chopping steps 5 times.",
    miniLesson: "Refactoring: Cleaning code without changing its external behavior. DRY principle (Don't Repeat Yourself). Performance checks.",
    coreActivity: "Code Compression Sprint: Compete to shrink a 100-line buggy code block into 30 lines of clean, readable code.",
    handsOn: "Optimize a redundant loop execution inside the Sandbox. Verify performance outputs.",
    homework: "Review one of your previous homework scripts. Refactor it to reduce lines and improve variables naming.",
    ethics: "Energy efficiency: How inefficient software running on millions of devices impacts global carbon footprints.",
    adaptations: "Age 9-10: Code block puzzles. Age 15-17: Discuss Time Complexity (Big O) basics."
  },
  {
    id: "l2-s10",
    level: 2,
    module: "Module 4: Version Control & Collaboration Thinking",
    title: "Session 10: \"Tracking Changes\"",
    duration: "2 hours",
    objectives: [
      "Understand version tracking concepts (Git commits)",
      "Resolve conflicts when merging collaborative changes"
    ],
    warmUp: "Paper Versioning: Two students edit the same text on paper. Resolve their layout conflicts manually.",
    miniLesson: "Version Control: Repositories, commits, diffs, branches, merge conflicts.",
    coreActivity: "The Commit Train: Students simulate Git branches on paper. Merge changes and resolve merge conflicts by comparing diff lines.",
    handsOn: "Run mock merge conflicts resolutions in the Sandbox, choosing correct line updates.",
    homework: "Write a short guide explaining how Git branches work and how to resolve a merge conflict.",
    ethics: "Stealing commits: Ethical rules of attribution in collaborative software projects.",
    adaptations: "Age 9-10: Use physical colored string to trace branches. Age 15-17: Run Git commands locally."
  },
  {
    id: "l2-s11",
    level: 2,
    module: "Module 4: Version Control & Collaboration Thinking",
    title: "Session 11: \"Collaboration & Documentation\"",
    duration: "2 hours",
    objectives: [
      "Write clean developer documentation (README)",
      "Perform code reviews to catch vulnerabilities in peer scripts"
    ],
    warmUp: "The Silent Manual: Build a simple Lego build using only documentation diagrams.",
    miniLesson: "Documentation: Setup instructions, inputs mapping, API parameters description. Code Reviews: Constructive criticism rules.",
    coreActivity: "Code Review Panel: Review partner's Prompt Specifications and Code outputs. Write constructive critique checklists.",
    handsOn: "Write a documentation README outline in the Sandbox explaining how to run the sandbox scripts.",
    homework: "Complete a peer review report on an assignment. Document bugs and suggest optimizations.",
    ethics: "How to give constructive feedback: Supporting your teammates while holding quality standards high.",
    adaptations: "Age 9-10: Group feedback circles. Age 15-17: Write documentation using Markdown formats."
  },
  {
    id: "l2-s12",
    level: 2,
    module: "Level 2 Assessment",
    title: "Session 12: \"Level 2 Assessment Part A\"",
    duration: "2 hours",
    objectives: [
      "Complete comprehensive Prompt Specifications under strict system constraints",
      "Build, debug, and test code outputs in a simulated environment"
    ],
    warmUp: "Assessment alignment and rules check.",
    miniLesson: "Debugging Under Pressure: Techniques for isolating crashes systematically during timed evaluations.",
    coreActivity: "Prompt Sandbox Challenge: Students build a complex logic machine (e.g. Traffic Scheduler) using only prompt spec updates.",
    handsOn: "Run validation matrix checks on the Sandbox project to verify edge-cases.",
    homework: "Submit Assessment Part A codebase package folder.",
    ethics: "Integrity in timed tests: Using tools as helpers vs. plagiarizing structures.",
    adaptations: "All Ages: Timed project sprints."
  },
  {
    id: "l2-s13",
    level: 2,
    module: "Level 2 Assessment",
    title: "Session 13: \"Level 2 Assessment Part B & Defense\"",
    duration: "2 hours",
    objectives: [
      "Perform code audits and reviews on classmate submissions",
      "Defend your prompt specifications against fuzzer exploits"
    ],
    warmUp: "Audit Guidelines: How to review submission branches.",
    miniLesson: "Defensive Coding Defense: Explaining how your prompt design prevents security breaches.",
    coreActivity: "The Bug Bounty Tournament: Students execute peer audits to find flaws in classmates' projects. Defenders write patches.",
    handsOn: "Validate final patch fixes in the Sandbox to complete the Level 2 certification.",
    homework: "Write a Final Vulnerability Report outlining discovered issues and patch designs.",
    ethics: "Responsible auditing: Protecting systems by finding vulnerabilities ethically.",
    adaptations: "All Ages: Peer evaluation tournaments."
  },

  // ================= LEVEL 3 =================
  {
    id: "l3-s1",
    level: 3,
    module: "Module 1: Databases, APIs, and Data Flows",
    title: "Session 1: \"Where Does Data Live?\"",
    duration: "2 hours",
    objectives: [
      "Understand Client-Server models, databases, and schemas",
      "Classify fields into Public, Private, and Sensitive tiers"
    ],
    warmUp: "The Memory Box: Store data in local state, local storage, and database. Discuss what stays when the page restarts.",
    miniLesson: "Client-Server Architecture: Databases (tables, rows, schemas). Data sensitivity categorization. User roles.",
    coreActivity: "Design library database schema: fields, roles, permissions. Audit access boundaries.",
    handsOn: "Create a database schema blueprint in Sandbox. Define table structure for a message logger.",
    homework: "Design self-destructing message database schema fields (read_at, expires_at) and logic.",
    ethics: "Data privacy: Why storing personal info requires explicit access rules and protection.",
    adaptations: "Age 9-10: Use paper cards as database rows. Age 15-17: Introduce SQL syntax statements."
  },
  {
    id: "l3-s2",
    level: 3,
    module: "Module 1: Databases, APIs, and Data Flows",
    title: "Session 2: \"APIs - How Systems Talk\"",
    duration: "2 hours",
    objectives: [
      "Describe API request/response structures",
      "Understand JSON data exchange format"
    ],
    warmUp: "The Restaurant Analogy: Customer (Client), Waiter (API), Kitchen (Server). Send orders.",
    miniLesson: "HTTP request methods (GET, POST). Headers, body, response codes (200, 404, 500). JSON structure.",
    coreActivity: "API Protocol Mapping: Write out API requests and responses for ordering a ride or booking a ticket.",
    handsOn: "Configure an API request simulation in the Sandbox, mapping JSON output parameters.",
    homework: "Find a public API (e.g. weather, pokemon). Write down its endpoint, inputs, and a sample JSON response.",
    ethics: "API rate limits: Ethical use of remote server resources. Preventing API DOS attacks.",
    adaptations: "Age 9-10: Act out request-response exchanges physically. Age 15-17: Fetch real API endpoints in browser console."
  },
  {
    id: "l3-s3",
    level: 3,
    module: "Module 1: Databases, APIs, and Data Flows",
    title: "Session 3: \"Data Flow at Scale\"",
    duration: "2 hours",
    objectives: [
      "Diagram system communications using sequence diagrams",
      "Identify bottlenecks and latency points in web structures"
    ],
    warmUp: "Lag Demonstration: Introduce network delay into a verbal relay race.",
    miniLesson: "Sequence diagrams: actors, lifelines, message arrows. Database latency, caching.",
    coreActivity: "Social Feed Pipeline: Design a sequence diagram mapping how a user posts a photo, updates database, and triggers alerts.",
    handsOn: "Draw sequence diagrams in Sandbox. Outline system flows for a messaging application.",
    homework: "Draw a sequence diagram for logging into a banking app with MFA validation checks.",
    ethics: "Reliability of systems: Designing fallbacks so users aren't locked out when network nodes drop.",
    adaptations: "Age 9-10: Mime network packets delays. Age 15-17: Introduce Mermaid.js diagramming syntaxes."
  },
  {
    id: "l3-s4",
    level: 3,
    module: "Module 2: Complete Project Orchestration",
    title: "Session 4: \"Choosing the Right Tools\"",
    duration: "2 hours",
    objectives: [
      "Evaluate and select framework dependencies (Vite, React, next.js)",
      "Analyze package manager files (package.json)"
    ],
    warmUp: "The Tool Chest: Choose the right vehicle (bicycle vs cargo truck) for varying shipping jobs.",
    miniLesson: "Tech Stack: frontend, backend, serverless. Node, NPM, dependencies, version conflicts, script execution.",
    coreActivity: "App Blueprint Sprint: Given a project brief, select appropriate npm packages and design project tree layouts.",
    handsOn: "Inspect and update npm package manager settings in Sandbox config files.",
    homework: "Choose a web application you use daily. Research and guess its frontend and backend tech stack.",
    ethics: "Open source license agreements: Ethical limits of copying software tools.",
    adaptations: "Age 9-10: Categorize tech block cards. Age 15-17: Run npm commands on local terminal shells."
  },
  {
    id: "l3-s5",
    level: 3,
    module: "Module 2: Complete Project Orchestration",
    title: "Session 5: \"Project Planning & Architecture\"",
    duration: "2 hours",
    objectives: [
      "Plan engineering roadmap using task checklists",
      "Establish interface boundaries before team splits"
    ],
    warmUp: "The Lego Split: Divide a Lego blueprint among 3 students. Ensure connection points align.",
    miniLesson: "Milestones. Scope creep. API Contracts (aligning input/output shapes before frontend/backend splits).",
    coreActivity: "Contract Negotiation: Divide teams into front/back builders. Agree on API schemas and write contract files.",
    handsOn: "Draft an API JSON schema contract in Sandbox to lock frontend/backend configurations.",
    homework: "Decompose a capstone project idea into 10 component checklist items (task.md layout).",
    ethics: "Accurately reporting progress: Honesty in agile scrum updates and team responsibilities.",
    adaptations: "Age 9-10: Use visual sticky notes. Age 15-17: Introduce Gantt charts and project milestones."
  },
  {
    id: "l3-s6",
    level: 3,
    module: "Module 2: Complete Project Orchestration",
    title: "Session 6: \"Building with AI Assistance\"",
    duration: "2 hours",
    objectives: [
      "Iteratively build complex interfaces using AI prompts specs",
      "Isolate and integrate AI generated modules into a pre-existing project"
    ],
    warmUp: "AI Code Merge: Safely insert a function output from AI into an active running script.",
    miniLesson: "Component structure, file organization, loading external scripts, keeping functions modular.",
    coreActivity: "The Module Stitch: Prompt the AI to build a specific chart component. Stitch it manually into a dashboard project.",
    handsOn: "Integrate a generated calculator component into a Sandbox template dashboard interface.",
    homework: "Refine a prompt specification to generate a secure user settings panel components block.",
    ethics: "Copyright of AI generated code: Understanding developer responsibilities for AI creations.",
    adaptations: "Age 9-10: Drag-and-drop component builds. Age 15-17: Discuss package importing patterns."
  },
  {
    id: "l3-s7",
    level: 3,
    module: "Module 2: Complete Project Orchestration",
    title: "Session 7: \"Testing, Debugging & Technical Debt\"",
    duration: "2 hours",
    objectives: [
      "Conduct automated system testing",
      "Identify and refactor legacy technical debt"
    ],
    warmUp: "The Messy Closet: Try to find a shirt in a messy closet vs a organized wardrobe. (Technical debt visual analogy)",
    miniLesson: "Technical Debt: code written fast that makes future updates hard. Refactoring pipelines. Automated integration tests.",
    coreActivity: "Cleanup Sprint: Clean up a legacy application codebase containing messy variables and logic blocks.",
    handsOn: "Refactor a redundant data pipeline inside the Sandbox to pass fuzzer benchmarks.",
    homework: "Identify technical debt in your previous sessions prompts. Document a refactoring guide.",
    ethics: "Rushing features vs. code health: Responsible engineering trade-offs under deadlines.",
    adaptations: "Age 9-10: Organize visual block stacks. Age 15-17: Introduce basic performance Profilers."
  },
  {
    id: "l3-s8",
    level: 3,
    module: "Module 3: Architectural Defense & Security",
    title: "Session 8: \"Security Fundamentals\"",
    duration: "2 hours",
    objectives: [
      "Describe security vulnerabilities: Injection, Authentication failure, XSS",
      "Implement inputs sanitization filters"
    ],
    warmUp: "The Poison Mail: Send an envelope containing instructions to burn the envelope. Mime execution. (Injection attack)",
    miniLesson: "OWASP Top 10 basics. SQL Injection (injecting code commands as data inputs). Cross-Site Scripting (XSS). Sanitizing inputs.",
    coreActivity: "Attack the DB: Write malicious inputs (e.g. OR 1=1) to query mock databases. Implement validation filters to block attacks.",
    handsOn: "Write a SQL input sanitization filter inside the Sandbox to prevent database hacks.",
    homework: "Research a famous data leak. Write down what vulnerability was exploited and how it could have been prevented.",
    ethics: "Ethical hacking: Permitted penetration testing vs cybercrime laws.",
    adaptations: "Age 9-10: Use lock and key physical games. Age 15-17: Introduce OWASP vulnerability mapping."
  },
  {
    id: "l3-s9",
    level: 3,
    module: "Module 3: Architectural Defense & Security",
    title: "Session 9: \"Attack & Defend\"",
    duration: "2 hours",
    objectives: [
      "Audit peer codebases for security vulnerabilities",
      "Deploy security patches to block real-time fuzzer exploits"
    ],
    warmUp: "Lock Audit: Inspect classroom physical security points (windows, doors) for flaws.",
    miniLesson: "Vulnerability Scanning. Log audits. Security patch deployments. Keeping dependencies updated.",
    coreActivity: "The Bug Bounty Fair: A tournament where students act as security auditors to attack classmate apps. Defenders write patches.",
    handsOn: "Deploy security patches in the Sandbox to pass malicious hacker fuzzer scripts.",
    homework: "Document a Vulnerability Audit Report detailing issues found in classmates' apps.",
    ethics: "Ethical disclosure: Reporting vulnerabilities to companies before posting them online.",
    adaptations: "All Ages: Live classroom hacking/defense tournament."
  },
  {
    id: "l3-s10",
    level: 3,
    module: "Module 3: Architectural Defense & Security",
    title: "Session 10: \"Privacy by Design\"",
    duration: "2 hours",
    objectives: [
      "Apply privacy guidelines (GDPR basics) to system design",
      "Implement database schemas that minimize personal data retention"
    ],
    warmUp: "The ID Check: Audit what information a library card actually needs vs what they ask for (phone, address, SSN).",
    miniLesson: "Privacy by Design: Data Minimization (only collect what you need), encryption at rest/transit, user data deletion rights.",
    coreActivity: "Privacy Audit: Re-architect a database schema of a ride-sharing app to hide passenger locations and delete historic routes.",
    handsOn: "Update a database table schema in Sandbox to remove unnecessary personal details.",
    homework: "Read the privacy policy of an app you use. List 3 data elements they collect and list if they are truly required.",
    ethics: "User data exploitation: The ethics of selling user activity profiles to advertisers.",
    adaptations: "Age 9-10: Design a secret agent ID card hiding sensitive info. Age 15-17: Discuss hashing algorithms (SHA-256) basics."
  },
  {
    id: "l3-s11",
    level: 3,
    module: "Module 4: Capstone Project & Defense",
    title: "Sessions 11-12: \"Capstone Completion Sprint\"",
    duration: "4 hours total",
    objectives: [
      "Implement a complete, secure system architecture mapping client, server, database, and APIs",
      "Integrate automated test matrices validating boundaries"
    ],
    warmUp: "Project check: align milestone requirements.",
    miniLesson: "Sprint management: Prioritizing features, setting up mock integrations, testing early.",
    coreActivity: "Capstone completion sprint: Teams finalize system blueprints, prompt scripts, database connections, and run security patches.",
    handsOn: "Compile final system integrations in the Sandbox and execute full test plans.",
    homework: "Complete system documentation draft explaining features and endpoints.",
    ethics: "Collaborative contributions: Aligning team tasks fairly.",
    adaptations: "All Ages: Extended coding hackathons."
  },
  {
    id: "l3-s13",
    level: 3,
    module: "Module 4: Capstone Project & Defense",
    title: "Session 13: \"The Capstone Defense\"",
    duration: "2 hours",
    objectives: [
      "Present and defend a complete system architecture blueprint",
      "Explain system design choices and answer security questions"
    ],
    warmUp: "Mock Defense: Practice presenting a schema to a client.",
    miniLesson: "Engineering presentation: How to explain design choices (e.g. database schema fields) clearly to non-technical managers.",
    coreActivity: "Live Presentation panel: Teams pitch capstone system blueprints, run sandbox demonstrations, and defend architecture against fuzzer checks.",
    handsOn: "Execute final live demo runs in the Sandbox.",
    homework: "Reflect on project feedback. Document 3 optimizations to make post-launch.",
    ethics: "Professional accountability: Taking ownership of design decisions and bug disclosures.",
    adaptations: "All Ages: Live defense panels."
  },
  {
    id: "l3-s14",
    level: 3,
    module: "Module 4: Capstone Project & Defense",
    title: "Session 14: \"Reflection & What's Next\"",
    duration: "2 hours",
    objectives: [
      "Synthesize level learning objectives",
      "Identify advanced topics: deployment, cloud database hosting"
    ],
    warmUp: "Class retrospective: Share the hardest bug you solved.",
    miniLesson: "Software Engineer Roadmap: What separates a sandbox prototype from a production system (real hosting, domains, auth).",
    coreActivity: "Course Review and Career Map: Explore developer roles (frontend, backend, security, DBA). Plan paths to Level 4.",
    handsOn: "Configure sandbox fallbacks to simulate deployment pipelines.",
    homework: "Write down 3 goals for Level 4 study (e.g. learning Git CLI, connecting real Supabase).",
    ethics: "Continuous learning: The professional developer's responsibility to keep skills updated as tech shifts.",
    adaptations: "All Ages: Career planning guidance."
  },

  // ================= LEVEL 4 =================
  {
    id: "l4-s1",
    level: 4,
    module: "Module 1: Production Infrastructure & Database Integration",
    title: "Session 1: \"Connecting to the Cloud Database\"",
    duration: "2 hours",
    objectives: [
      "Connect a React application to a remote cloud database (e.g., Supabase, Firebase)",
      "Perform CRUD operations directly from a client application"
    ],
    warmUp: "Real-Time Sync: Tutor inputs data on a teacher console. Students watch it instantly populate on their screens. Introduce real-time server synchronicity.",
    miniLesson: "Database Client libraries: Instantiating database clients, credentials handling, executing requests. Data Latency.",
    coreActivity: "The Live Database Hookup: Students connect their frontend template to a cloud database project. Create a database table for their campaign context. Write frontend logic to insert and read records.",
    handsOn: "Write a React hook to connect and execute CRUD queries on a remote database client in the Sandbox.",
    homework: "Choose a real-world app context and design its database schema. Design a self-destructing message database schema.",
    ethics: "Data stewardship: Managing remote user records safely and complying with data deletion rules.",
    adaptations: "Age 9-10: Connect pre-made template blocks. Age 15-17: Configure custom tables triggers."
  },
  {
    id: "l4-s2",
    level: 4,
    module: "Module 1: Production Infrastructure & Database Integration",
    title: "Session 2: \"Security Keys & Environment Variables\"",
    duration: "2 hours",
    objectives: [
      "Differentiate between public and private credentials",
      "Configure environment variables to prevent API key exposure"
    ],
    warmUp: "The Leaked Password: Tutor shows a mock public repository containing a plain-text database password. Discuss what a hacker could do with this access.",
    miniLesson: "Environment Variables: Why we separate config keys from codebase logic. Key Rotation. gitignore configuration.",
    coreActivity: "Secret Wards Protection: Move hardcoded API keys out of code. Create .env and .env.local files. Configure .gitignore to block credentials tracking.",
    handsOn: "Configure env files in Sandbox, reference them via import.meta.env, and run checks to ensure zero plaintext secrets are committed.",
    homework: "Write a short guide explaining what happens if someone commits a private password to a public repo. Create a key rotation checklist.",
    ethics: "Developer vigilance: The responsibility of ensuring secrets are never leaked to public version control.",
    adaptations: "Age 9-10: Visual envelope keys. Age 15-17: Practice revoking and rotating API keys."
  },
  {
    id: "l4-s3",
    level: 4,
    module: "Module 1: Production Infrastructure & Database Integration",
    title: "Session 3: \"External API Integration\"",
    duration: "2 hours",
    objectives: [
      "Fetch data from third-party REST APIs",
      "Handle asynchronous network requests and error states"
    ],
    warmUp: "The Mashup App: Tutor demonstrates an app that pulls together weather data, map locations, and news headlines in one page.",
    miniLesson: "REST APIs & JSON: HTTP methods, request headers, query parameters, response codes (429 rate limit). Asynchronous fetch.",
    coreActivity: "API Integration Sprint: Integrate an external public API into their application. Write asynchronous fetch functions, clean response data, and handle failures.",
    handsOn: "Write an async fetch function in Sandbox requesting external API data and handling rate limits.",
    homework: "Design an interface to fetch and cache API responses to avoid exceeding rate limits.",
    ethics: "Scraping vs using APIs: Respecting terms of service of third-party platforms.",
    adaptations: "Age 9-10: Fetch simple text card API data. Age 15-17: Set authorization headers on API calls."
  },
  {
    id: "l4-s4",
    level: 4,
    module: "Module 2: User Access & Identity",
    title: "Session 4: \"User Authentication & Sign-Up\"",
    duration: "2 hours",
    objectives: [
      "Implement registration and login flows",
      "Manage user authentication session states"
    ],
    warmUp: "The Guarded Door: Discuss why apps ask you to login. Introduce authentication (who you are) vs. authorization (what you can do).",
    miniLesson: "Authentication Tokens: How sessions are maintained in browsers (cookies, local tokens, JWTs). Auth guarding routes.",
    coreActivity: "Building the Gate: Configure Email/Password sign-up and login providers. Build sign-up, login, and sign-out pages. Guard routes so logged-out users are redirected.",
    handsOn: "Write a React router auth guard in Sandbox, protecting a dashboard page from unauthenticated tokens.",
    homework: "Create a user flow map showing how the application routes logged-in vs. logged-out users.",
    ethics: "Password hashing: Why storing passwords in plaintext is an ethical crime.",
    adaptations: "Age 9-10: Visual keycards. Age 15-17: Discuss OAuth (social logins) flows."
  },
  {
    id: "l4-s5",
    level: 4,
    module: "Module 2: User Access & Identity",
    title: "Session 5: \"Row-Level Security & Data Wards\"",
    duration: "2 hours",
    objectives: [
      "Configure Row-Level Security (RLS) policies in a database",
      "Prevent unauthorized cross-user data leaks"
    ],
    warmUp: "The Snooping Neighbor: Tutor logs in as User A and tries to read User B's private messages. Discuss why client-side security is not enough.",
    miniLesson: "Row-Level Security (RLS): Securing data at the source (database level) rather than the delivery channel (app level). auth.uid() checks.",
    coreActivity: "Wards of Data Isolation: Write SQL database security policies (e.g. auth.uid() = user_id). Verify User A cannot read User B's rows.",
    handsOn: "Write SQL RLS policies in Sandbox ensuring database isolation limits are fully active.",
    homework: "Write security policies for a shared dashboard (anyone can view, only creators can edit).",
    ethics: "Data leakage liability: Corporate and personal legal liabilities of developer security gaps.",
    adaptations: "Age 9-10: Labeled lockers. Age 15-17: Audit database RLS tables using direct API scripts."
  },
  {
    id: "l4-s6",
    level: 4,
    module: "Module 2: User Access & Identity",
    title: "Session 6: \"Role-Based Access Control (RBAC)\"",
    duration: "2 hours",
    objectives: [
      "Implement permission tiers (e.g. Admin, Operator, Guest)",
      "Restrict UI features and API endpoints based on user roles"
    ],
    warmUp: "Who Has the Key?: Discuss why a standard user shouldn't be able to delete other users' accounts. Define RBAC.",
    miniLesson: "User Roles: Creating robust role tables, checking tokens, securing write actions at database and app level.",
    coreActivity: "The Permissions Matrix: Add a role column to profile tables. Write frontend routes restricting certain panels. Add database policies blocking guest writes.",
    handsOn: "Write a React component in Sandbox that restricts admin settings visibility based on user.role properties.",
    homework: "Outline a permission matrix for a banking app with Customer, Teller, and Audit roles.",
    ethics: "Privilege escalation: The security threats of users hijacking admin roles.",
    adaptations: "Age 9-10: Color coded keys for files. Age 15-17: Configure RBAC tables in postgres SQL."
  },
  {
    id: "l4-s7",
    level: 4,
    module: "Module 3: Cloud Infrastructure & Deployment",
    title: "Session 7: \"Git, Version Control & GitHub\"",
    duration: "2 hours",
    objectives: [
      "Commit and track code changes using Git",
      "Collaborate on repositories via pull requests on GitHub"
    ],
    warmUp: "Collaborative Storytelling: Pass a storybook around the room. Each writer appends a paragraph, maintaining version notes.",
    miniLesson: "Git workflow: init, add, commit, push, pull. GitHub collaboration: PRs, code reviews, resolving merge conflicts.",
    coreActivity: "The Repo Launch: Create local git repositories. Commit code shifts, push to remote GitHub repo, create a PR, and resolve merge conflicts.",
    handsOn: "Simulate a Git pull request review in Sandbox, resolving file conflicts manually.",
    homework: "Create a GitHub account and push one of your homework folders to a public repository.",
    ethics: "Open source community ethics: Contributing, licensing, and code ownership.",
    adaptations: "Age 9-10: Physical folder merging. Age 15-17: Setup SSH keys on GitHub accounts."
  },
  {
    id: "l4-s8",
    level: 4,
    module: "Module 3: Cloud Infrastructure & Deployment",
    title: "Session 8: \"Continuous Deployment (CI/CD) Pipelines\"",
    duration: "2 hours",
    objectives: [
      "Set up automatic deployment pipelines (Vercel, Netlify)",
      "Understand build processes and environment overrides on hosting providers"
    ],
    warmUp: "The Assembly Line: Trace raw parts entering a factory to a finished car exiting the line.",
    miniLesson: "CI/CD (Continuous Integration/Continuous Deployment): Trigger build on git push. Cloud hosting configs. Build time variables.",
    coreActivity: "Live Pipeline Launch: Link a GitHub repository to a Vercel project. Push a code change to Git, trace the build logs, and observe the live site update.",
    handsOn: "Draft a build pipeline config schema in Sandbox verifying environment variable bindings.",
    homework: "Deploy a personal landing page to Vercel/Netlify. Document the live URL.",
    ethics: "Service uptime: The ethical and business costs of system downtime during broken deployments.",
    adaptations: "Age 9-10: Simple visual pipeline maps. Age 15-17: Configure custom webhooks triggers."
  },
  {
    id: "l4-s9",
    level: 4,
    module: "Module 3: Cloud Infrastructure & Deployment",
    title: "Session 9: \"Monitoring and Error Diagnostics\"",
    duration: "2 hours",
    objectives: [
      "Inspect remote application error logs (Sentry, cloud logs)",
      "Diagnose client-side vs. server-side crashes in production"
    ],
    warmUp: "The Flight Recorder: Discuss why airplanes have black boxes. Discuss why systems need telemetry logs.",
    miniLesson: "Production telemetry: error tracking, server logs, network performance. Client-side exceptions vs database server failures.",
    coreActivity: "Production Crash Hunt: Inspect a live log feed of a crashing application. Locate the line of code failing and deploy a patch.",
    handsOn: "Diagnose a production error log trace in the Sandbox fuzzer logs and patch the source code logic.",
    homework: "Write a guide explaining the difference between a 400, 401, 403, and 500 error code. Provide debugging steps for each.",
    ethics: "Log privacy: Ensuring passwords and SSNs are never logged to third-party telemetry tools.",
    adaptations: "Age 9-10: Error code matching games. Age 15-17: Track production bugs using real Sentry consoles."
  },
  {
    id: "l4-s10",
    level: 4,
    module: "Module 4: Product Launch & Defense",
    title: "Session 10: \"Capstone Project Integration\"",
    duration: "2 hours",
    objectives: [
      "Connect frontend code to live database nodes and verify credentials security",
      "Coordinate full pipeline deployment"
    ],
    warmUp: "Integration checklist alignment: mapping connections across nodes.",
    miniLesson: "Integrations architecture: ensuring frontend API endpoints connect to secure backends with active RLS.",
    coreActivity: "Capstone Assembly Sprint: Integrate database tables, user auth flows, and live API endpoints into a unified hosted site.",
    handsOn: "Execute integration pipeline checks in the Sandbox.",
    homework: "Complete final QA testing checklist sheets for the capstone system.",
    ethics: "Safety reviews: Running security scans before pushing updates to users.",
    adaptations: "All Ages: Extended production sprint sessions."
  },
  {
    id: "l4-s11",
    level: 4,
    module: "Module 4: Product Launch & Defense",
    title: "Session 11: \"Load Testing & Code Quality Audit\"",
    duration: "2 hours",
    objectives: [
      "Run load testing scripts to evaluate performance under traffic",
      "Audit codebases for syntax quality and security gaps"
    ],
    warmUp: "The Rush Hour: Discuss how train stations handle holiday traffic rushes.",
    miniLesson: "Performance Audits: database indexes, bundle optimization, load testing. Linters (ESLint). Code quality standards.",
    coreActivity: "Auditing Sprint: Students run linting tools and database query analyzers on peer codebases to spot redundancies.",
    handsOn: "Run query optimization checks on Sandbox SQL statements.",
    homework: "Fix all warnings in project linters. Generate a Code Audit report.",
    ethics: "Accessibility standards: Ensuring software is accessible to users with visual/motor impairments (ADA compliance).",
    adaptations: "Age 9-10: Basic code spelling reviews. Age 15-17: Analyze bundle load graphs."
  },
  {
    id: "l4-s12",
    level: 4,
    module: "Module 4: Product Launch & Defense",
    title: "Session 12: \"The Grand Launch & System Defense\"",
    duration: "2 hours",
    objectives: [
      "Present a live deployed application with custom database states",
      "Defend product launch architecture against system critiques"
    ],
    warmUp: "Warm pitch practice: Presenting URLs in 60 seconds.",
    miniLesson: "Launch procedures: DNS configuration, production keys checks, rollback plans.",
    coreActivity: "The Grand Launch: Live demo presentations. Students present live sites, trigger data records, and defend system design.",
    handsOn: "Demonstrate live sandbox fuzzer passes for the capstone site.",
    homework: "Final course self-reflection journal entry: What makes you a Software Engineer?",
    ethics: "Algorithmic responsibility: The societal impacts of software systems.",
    adaptations: "All Ages: Live site presentations panel."
  }
];
