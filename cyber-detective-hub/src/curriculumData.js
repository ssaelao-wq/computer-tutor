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
    warmUp: "Car Autopilot Roleplay: Tutor-student roleplay. Student gives step-by-step instructions to tutor to drive and park an vehicle. Tutor follows them strictly literally, demonstrating computer logical processing.",
    miniLesson: "The IPO Model: Trace Input → Process → Output. Variable concepts as labeled memory registers that hold one state value.",
    coreActivity: "Sequence Blueprinting: Student uses flowcharts inside the app to arrange command blocks (Check P/N, Press Brake, Start Engine, Shift D, Release Handbrake, release brake, press gas) in correct logical order.",
    handsOn: "Complete 5 sandbox tasks: (1) Basic Start & Move, (2) Reversing & Parking, (3) Sequence Correction, (4) Code Cleanup, (5) Emergency Halt.",
    homework: "Complete the \"Household IPO Blueprint\" in the app's Journal tab: Write a process to warm up food from a plate using a microwave. Identify preconditions, inputs, processing logic, and outputs (+50 XP).",
    ethics: "Autonomous Car Crash Responsibility: If an autonomous car crashes because of a logic error in its code, who is responsible — the coder, the company, or the operator?",
    adaptations: "Age 13-16: Use digital sandbox modules and audit terminal outputs. Discuss real IPO algorithms."
  },
  {
    id: "l1-s2",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 2: \"Starting the Game: HTML Structure & Basic Elements\"",
    duration: "2 hours",
    objectives: [
      "Understand how browsers structure documents using HTML tags",
      "Learn HTML syntax: elements, attributes, parent-child relationships, and classes",
      "Create the core layout structure for the Racing Car Game (track and player car containers)"
    ],
    warmUp: "HTML Selector Decoding Puzzle: Match scrambled HTML tags to visual layout blocks representing a highway track.",
    miniLesson: "The DOM Tree & Nested Nodes: Opening and closing tag pairs (div, h2, span). Opening/closing rules, attributes (ids, classes), DOM tree relationships.",
    coreActivity: "Racing Arena Layout Design: Sketch the game layout and design a prompt specification sheet outlining the HTML layout elements needed (track, player-car, scoreboard).",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops: (1) Plan & Design: Arena hierarchy, (2) Write Prompt: track container, (3) Review & Explain: unique selectors, (4) Test & Break: diagnosing unclosed HTML, (5) Iterate & Improve: adding lane-dividers, (6) Plan & Design: Dashboard nesting, (7) Write Prompt: Score HUD widget, (8) Review & Explain: h2-span nesting, (9) Test & Break: correcting DOM selector IDs, (10) Iterate & Improve: merging complete structures.",
    homework: "Garage Dashboard Builder: Create a simple HTML document containing a sidebar and main container layout representing a garage dashboard. Save to Journal under 'Session 2 Homework' (+50 XP).",
    ethics: "Semantic HTML Domino's Case: Why defining accessible text labels and proper semantic elements is a legal and ethical obligation under the ADA.",
    adaptations: "Age 13-16: Trace visual DOM trees using browser elements inspectors."
  },
  {
    id: "l1-s3",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 3: \"Styling the Track & Player Car: CSS Lanes & Visuals\"",
    duration: "2 hours",
    objectives: [
      "Write CSS rules using selectors (ID, Class, Element) and declaration blocks",
      "Understand absolute positioning coordinates (top, left, bottom, right) and relative positioning limits",
      "Style the highway lanes, lane dashes, and the player car dimensions"
    ],
    warmUp: "CSS Selector Matching Puzzle: Match CSS selector rules like #player-car or .obstacle to visual layout blocks on a screen.",
    miniLesson: "The CSS Box Model & Layout Flow: Content, padding, border, margins. Relative positioning on the parent track anchors child coordinate systems. Absolute positioning positions elements precisely.",
    coreActivity: "Lane Design Blueprint: Calculate coordinates and widths for a 3-lane highway (width 390px, 3 lanes of 130px each). Draft CSS positioning and boundaries.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops: (1) Plan & Design: dark track specs, (2) Write Prompt: track width/height/color, (3) Review & Explain: ID vs Class selectors, (4) Test & Break: diagnosing drifting absolute cars, (5) Iterate & Improve: lane divider styles, (6) Plan & Design: car X/Y coordinates, (7) Write Prompt: centering player-car, (8) Review & Explain: absolute coordinate values, (9) Test & Break: display utility debugging, (10) Iterate & Improve: scoreboard flex layout.",
    homework: "3-Lane Highway CSS styling: Style a 3-lane road with a dotted yellow center divider line. Save to Journal under 'Session 3 Homework' (+50 XP).",
    ethics: "Color Contrast UI Accessibility: Designing UI maps/dashboards using proper color contrasts and symbols for colorblind accessibility.",
    adaptations: "Age 13-16: Audit styling rules using browser style inspector panels."
  },
  {
    id: "l1-s4",
    level: 1,
    module: "Module 2: Game State, Input & Boundaries",
    title: "Session 4: \"Tracking Game State: JS Variables & Math\"",
    duration: "2 hours",
    objectives: [
      "Declare variables using `let` and `const` and explain data types (Strings, Numbers, Booleans)",
      "Model game variables: speed value, coordinate positions, scoring totals, and game states",
      "Perform mathematical updates on state variables"
    ],
    warmUp: "Variable Value Tracing: Trace variable values through progressive arithmetic code statements on a board worksheet, showing how computers evaluate the right-hand side of an assignment first, then write the result into the variable's memory box.",
    miniLesson: "Registers in Computer Memory: RAM storage boxes and `let` vs. `const` declarations. Data types (String, Number, Boolean). Assignment operators (`=`) and arithmetic increments (`+=`, `++`).",
    coreActivity: "Variable Specifications: Define a state mapping chart identifying every variable the racing game needs (e.g. `score` is a Number initialized to `0`, `gameActive` is a Boolean initialized to `false`), then prompt the AI to generate the `game.js` variable-declaration block and audit the primitive types it chose.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering the game's variable registry (`let`/`const`, data types, math increments). Socratic Debugging — The String Concatenation Trap: the tutor seeds a bug where `speed` is declared as a string (`let speed = \"10\";`); incrementing it (`speed += 5`) produces `\"105\"` instead of `15`. Fix the type declaration and explain why the browser stitched digits together instead of adding them.",
    homework: "In the Journal tab under 'Session 4 Homework', write a JS code snippet declaring variables for a player's `speed`, `laneIndex`, and `isCrashed`, then update them by driving 10 units faster and changing lanes (+50 XP).",
    ethics: "Client-Side Tampering: In 2012, the browser game 'Candy Box' stored its entire game state in client-side variables, letting players set unlimited candies via the console. If variables are exposed in global scope, a player can open DevTools and set `score = 99999` — how do we protect system state from user modification?",
    adaptations: "Age 13-16: Discuss why critical game state (like scores that unlock rewards) should eventually be validated server-side, not just trusted from the client."
  },
  {
    id: "l1-s5",
    level: 1,
    module: "Module 2: Game State, Input & Boundaries",
    title: "Session 5: \"Steering the Car: JS Keydown Event Listeners\"",
    duration: "2 hours",
    objectives: [
      "Understand event-driven programming and event listeners",
      "Capture keyboard inputs using JS event listeners (`keydown` events)",
      "Link keystrokes to updates in game state variables"
    ],
    warmUp: "Reverse Engineering — Dissecting a Live Game: open a working racing game in the browser with DevTools' Elements and Console tabs open, press arrow keys, and identify which event fires, which element property changes, and which function is being called.",
    miniLesson: "The Event Listener Loop: event listeners as triggers that fire functions on hardware actions. The Event Object parameter (`event.key`) reports the specific key pressed. Listeners are bound to the global `window` scope to intercept keyboard events.",
    coreActivity: "Input Controls Diagram: draw a logic flowchart connecting Arrow key presses to car position updates, then draft the input handler specification before prompting the AI to generate an event listener that checks for `\"ArrowLeft\"` or `\"ArrowRight\"`.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering keydown listeners, `event.key` checks, and live car steering in the preview. Socratic Debugging — The Silent Input Fail: the tutor disables the listener (omits `window.addEventListener`, or uses an incorrect key string like `\"left\"` instead of `\"ArrowLeft\"`). Trace the chain Keypress → Browser Event → Listener → Code execution to find and fix the broken link.",
    homework: "In the Journal tab under 'Session 5 Homework', write an event handler script that triggers an alert box reading 'Engine Started' when the student presses the 's' key (+50 XP).",
    ethics: "Alternative Inputs & Accessibility: Microsoft's Xbox Adaptive Controller (2018) was built for gamers with limited mobility, proving accessible input design expands markets rather than limiting them. If a player cannot press physical arrow keys, should we add on-screen click buttons as an alternate input?",
    adaptations: "Age 13-16: Extend the exercise to add on-screen button controls as a second, accessible input path alongside the keyboard listener."
  },
  {
    id: "l1-s6",
    level: 1,
    module: "Module 2: Game State, Input & Boundaries",
    title: "Session 6: \"Track Boundaries: JS Conditionals & Safety Guards\"",
    duration: "2 hours",
    objectives: [
      "Apply conditionals (`if`, `else if`, `else`) and comparison operators (`<`, `>`, `===`) to constrain values",
      "Construct boundary safety guards to prevent the player car from steering off the road",
      "Evaluate boundary-value conditions to predict execution outcomes"
    ],
    warmUp: "Boundary Value Analysis: evaluate a coordinate list against track limits to determine which values cross the left (`35px`) and right (`295px`) lane boundaries, tracing how boundary checkpoints detect violations.",
    miniLesson: "Gating Code with Conditions: logical comparison operators (`<`, `>`, `===`), boundary thresholds that keep values inside a `[min, max]` range, and clamping — snapping a value back when it goes out of bounds.",
    coreActivity: "Bounding Logic Blueprint: sketch the track's left/right lane coordinates (35px, 165px, 295px) and write pseudocode locks (e.g. 'if moving left would take carX below 35, block the movement'), then prompt the AI to generate boundary conditionals wrapping the lane-steering script.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering left/right lane guards (carX clamped to 35/295) and the speed-overheat clamp. Socratic Debugging — The Infinite Teleporting Bug: the tutor changes the boundary check from `carX > 35` to `carX >= -130`, causing the car to teleport off-screen. Trace what value `carX` actually reached and why the boundary guard failed to catch it.",
    homework: "In the Journal tab under 'Session 6 Homework', write a conditional validation block that checks if `speed` is greater than `120` (overheating threshold) and resets it to `100` if true, logging a warning (+50 XP).",
    ethics: "System Safety Checks: the Mars Climate Orbiter (1999) crashed because one team used metric units while another used imperial — a boundary-value mismatch that destroyed a $125 million spacecraft. Autonomous vehicles rely on boundaries to stay in lanes; why do developers write redundant checks?",
    adaptations: "Age 13-16: Discuss why safety-critical systems (like real autopilot lane-keeping) implement multiple redundant boundary checks instead of trusting a single condition."
  },
  {
    id: "l1-s7",
    level: 1,
    module: "Module 3: Problem Decomposition & The Logic Map",
    title: "Session 7: \"Dashing Lanes & Highway Markers: JS Loops & Iteration\"",
    duration: "2 hours",
    objectives: [
      "Learn loop mechanics (`for` and `while` loops) and loop parameters",
      "Generate and render repeating track markers and obstacle items dynamically using loops",
      "Identify and prevent infinite loop crashes"
    ],
    warmUp: "Loop Iteration Tracing: determine the output variables after tracing several loop segments on paper, introducing loop counters, conditions, and increments.",
    miniLesson: "Automation through Loops: loop declarations (initializer, condition, update statement — `for (let i = 0; i < 5; i++)`), iterating over coordinate offsets to build rows/grids, and the danger of infinite loops when a condition never evaluates to false.",
    coreActivity: "Road Marker Spawning Plan: design the layout of repeating dashes down the middle of the road, draft the loop specification (e.g. 5 dashes spaced 120px apart), then prompt the AI to generate a loop that creates marker `div` elements dynamically on screen.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering `for` loop mechanics and dynamic marker generation. Socratic Debugging — Browser Freezes: the tutor triggers an infinite loop by removing the counter increment (`i++`). Identify the missing increment, restore it, and explain how many times the CPU executed the loop block before the fix.",
    homework: "In the Journal tab under 'Session 7 Homework', write a JS `for` loop that logs 'Highway Marker position: X' for positions incrementing by 50 up to 250 (+50 XP).",
    ethics: "Resource Efficiency: in 2020, a poorly optimized JavaScript animation loop on a major news website caused mobile devices to overheat and drain batteries within minutes. If a loop runs a million times a second to draw lanes, what happens to the user's battery?",
    adaptations: "Age 13-16: Discuss loop performance and Big-O intuition — why a nested loop over the same data set is more expensive than a single pass."
  },
  {
    id: "l1-s8",
    level: 1,
    module: "Module 3: Problem Decomposition & The Logic Map",
    title: "Session 8: \"Defining Movement & Game Functions: JS Modular Code\"",
    duration: "2 hours",
    objectives: [
      "Declare and call JavaScript functions with parameters and return structures",
      "Organize game code into modular functions (`renderCar()`, `moveObstacles()`)",
      "Explain variable scope rules: global scope vs. local variables"
    ],
    warmUp: "Scope Trace Challenge: determine which variables are accessible inside functions vs. outside them, tracing accessibility across functions.",
    miniLesson: "Modular Program Design: function signatures (parameters and return data types), global vs. local scope blocks and variable isolation, and packaging repeated operations into reusable, readable actions.",
    coreActivity: "Modular Logic Decomposition: decompose the monolithic game script into a list of isolated, single-purpose functions, and draft each function's interface (inputs and outputs) before prompting the AI to refactor the variables and listeners into modular functions.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops refactoring steering logic into `updatePlayerPosition()`, `moveLeft()`, and `moveRight()`. Socratic Debugging — Scope Access Violations: the tutor declares a position variable inside a movement function, making it inaccessible to the rendering function (which logs `undefined`). Trace where the variable was declared and why its scope is restricted, then correct it.",
    homework: "In the Journal tab under 'Session 8 Homework', write a function `calculateScore(distance, speedMultiplier)` that multiplies its parameters, declares local variables, and returns the score value (+50 XP).",
    ethics: "Clean Code and Collaboration: the Heartbleed bug (2014) existed in OpenSSL for two years partly because the critical code was poorly structured and hard for reviewers to audit, affecting 17% of all secure web servers. Why is write-once, hard-to-read code a problem for engineering teams?",
    adaptations: "Age 13-16: Discuss code review practices — how a reviewer with only 10 minutes benefits from small, well-named functions over one long script."
  },
  {
    id: "l1-s9",
    level: 1,
    module: "Module 3: Problem Decomposition & The Logic Map",
    title: "Session 9: \"The Racing Game Loop: Timers & Animations\"",
    duration: "2 hours",
    objectives: [
      "Understand the concept of frame rates and game loops",
      "Animate obstacles moving down the track using `requestAnimationFrame`",
      "Manage persistent loop states (active, paused, game-over)"
    ],
    warmUp: "Animate the Dots: trace how coordinates update dynamically over time offsets, calculating the spacing steps needed to keep object movement smooth.",
    miniLesson: "Chronological Time Deltas & Frame Rates: the continuous paint cycle and frame-rate targets (60 FPS / 16.6ms per frame), the `requestAnimationFrame` recursion loop, and game-state gates that stop loop updates once a collision flag turns true.",
    coreActivity: "Game Engine Flowcharting: draw a lifecycle flowchart for the game state machine (Start → Update → Check Collision → Redraw → Loop), draft the loop controller's pseudocode, then prompt the AI to construct the core `loop()` function.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering the `requestAnimationFrame` game loop, the `gameActive` gate, and obstacle movement/reset. Socratic Debugging — The Unstoppable Speed Bug: the tutor breaks the recursion exit condition so the animation loop keeps executing after the game-over flag triggers true. Trace why positions keep updating on-screen even though the game says 'Game Over,' and restore the exit check.",
    homework: "In the Journal tab under 'Session 9 Homework', write a game loop structure with an active-check gate that prints 'Tick' to console, a recursive call, and a method to halt execution (+50 XP).",
    ethics: "Hook Loops and Addictive Patterns: Fortnite's 'Battle Pass' system and continuous reward loops have been linked to documented cases of gaming addiction in minors, prompting regulatory investigations. How do fast feedback loops in games keep users hooked, and what's our responsibility as designers?",
    adaptations: "Age 13-16: Discuss the ethics of tuning a game's reward loop for engagement vs. designing it for a satisfying, bounded play session."
  },
  {
    id: "l1-s10",
    level: 1,
    module: "Module 4: Collision Detection & Dashboard Systems",
    title: "Session 10: \"Collision Detection: Auditing AI Overlap Math\"",
    duration: "2 hours",
    objectives: [
      "Understand 2D rectangular collision math (AABB overlap equations)",
      "Code collision sensors comparing coordinate boundary boxes",
      "Integrate collision results to halt updates and trigger game-over sequences"
    ],
    warmUp: "Overlapping Box Coordinate Math: calculate overlap values for colliding boxes on grid paper, determining whether two boxes on a 2D coordinate system overlap.",
    miniLesson: "The Intersection Theorem: Axis-Aligned Bounding Box (AABB) collision checks comparing position and dimensions, finding each box's absolute `left`/`right`/`top`/`bottom` limits, and combining conditions with `&&` logic to declare an overlap.",
    coreActivity: "Collision Blueprint: draw bounding boxes and write the conditional statements that match an overlap condition, draft the parameter specification for the collision check, then prompt the AI to generate the collision-detection function.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering AABB overlap math and wiring `checkCollision()` into the game loop. Socratic Debugging — The Ghost Car Bug: the tutor introduces an error in a comparison operator (checking `>` instead of `<`, or swapping the X/Y axis parameters), so the obstacle drives right through the player car with no crash registered. Trace the coordinates at the moment of impact to find why the intersection formula failed.",
    homework: "In the Journal tab under 'Session 10 Homework', write a JS function `isOverlapping(x1, y1, w1, h1, x2, y2, w2, h2)` that returns a Boolean checking for bounding overlaps (+50 XP).",
    ethics: "Safety Failure Audits: Tesla's Autopilot failed to detect a white truck against a bright sky in 2016, causing a fatal collision — a real-world collision-detection failure. Why do developers write automated unit tests checking coordinates instead of trusting a manual play-test?",
    adaptations: "Age 13-16: Discuss why real autonomous-vehicle perception systems use multiple overlapping sensors (camera, radar, lidar) rather than a single detection method."
  },
  {
    id: "l1-s11",
    level: 1,
    module: "Module 4: Collision Detection & Dashboard Systems",
    title: "Session 11: \"The Dashboard & High-Score Counter: DOM Operations\"",
    duration: "2 hours",
    objectives: [
      "Select and manipulate HTML content using JS selector syntax (`document.getElementById`)",
      "Write defensive checks protecting parameters from invalid inputs (e.g. negative score totals)",
      "Update text and visibility properties dynamically in real time"
    ],
    warmUp: "DOM Link Matching: match DOM JS commands to their target text elements on the HTML structure sheet, tracing how elements are retrieved by ID.",
    miniLesson: "The Document API Bridge: linking code variables to visual text (`.innerText`, `.style.display`), input validation and safe bounds-checking on visual updates, and toggling visibility (`\"block\"` vs `\"none\"`) to show restart overlays.",
    coreActivity: "UI Wiring Blueprint: draw the data pipeline from state variables directly to their target HTML elements, draft the dashboard-update specification, then prompt the AI to generate the script that displays score, speed level, and the restart overlay.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering `textContent` scoreboard updates, the hidden-class game-over overlay, and the Space-key restart flow. Socratic Debugging — Negative Values Leakage: the tutor introduces a bug where the score decrement can slide below zero. Insert a conditional guard clamping the lower bound, and explain why the scoreboard was showing 'score: -5' before the fix.",
    homework: "In the Journal tab under 'Session 11 Homework', write a script that updates a 'lane-alert' element to read 'Danger' when the player car's coordinate reaches lane limit 0 (+50 XP).",
    ethics: "Personal Data Storage: the Cambridge Analytica scandal (2018) showed how seemingly innocent user profile data (quiz answers, likes) could be weaponized at scale. When users enter usernames on a leaderboard, how do we protect their privacy and decide what not to collect?",
    adaptations: "Age 13-16: Discuss what leaderboard data (username only vs. full name/location) is actually necessary, applying data-minimization thinking to their own dashboard design."
  },
  {
    id: "l1-s12",
    level: 1,
    module: "Level 1 Assessment",
    title: "Session 12: \"The Racing Car Game Assessment\"",
    duration: "2 hours",
    objectives: [
      "Demonstrate mastery of the full racing-game logic stack: DOM structure, CSS layout, variables, input, boundaries, loops, functions, animation, and collision math",
      "Diagnose and correct seeded logic bugs under time pressure",
      "Present and defend code design choices to a 'Malicious QA Officer'"
    ],
    warmUp: "Assessment Alignment: review the three-part assessment structure (Layout Builder, Code Walkthrough, Diagnostic) inside the app before beginning.",
    miniLesson: "System Defense: how to present a logic blueprint clearly and defend it against edge-case fuzzer checks and pointed questions about boundary values.",
    coreActivity: "Part A — The Racing Game Layout Builder: in a clean environment, map the DOM element tags (Track, Car, Scoreboard), declare the styling properties for track lanes and car positions, write the variable declarations for score levels and coordinate bounds, and formulate the safety checks that clamp inputs to track limits.",
    handsOn: "Complete the 10 capstone Sandbox Exercises (CONFIG refactoring, difficulty scaling, final seeded diagnostic, reflection). Part B — The Game Code Walkthrough: present your working Racing Car Game script to the tutor, who plays a 'Malicious QA Officer' questioning your coordinate logic and testing boundaries. Part C — In-App Code Diagnostic: trace a loop's increments to specify its final output indices, then debug a seeded collision-logic error where the overlap check returns incorrect matches.",
    homework: "Complete the self-audit reflection in the Journal tab under 'Session 12 Assessment': what surprised you about DOM trees and event bindings, how tracing variables helped you find logic bugs, and how writing prompts for game assets differed from conversational chats (+50 XP).",
    ethics: "Design Feedback: how to give and receive constructive critique on a logic blueprint and code — treating the 'Malicious QA Officer' review as collaborative auditing, not adversarial gatekeeping.",
    adaptations: "Age 13-16: Full digital presentation of the logic blueprint plus live fuzzer-testing logs, defended against the tutor's QA questioning."
  },

  // ================= LEVEL 2 =================
  {
    id: "l2-s1",
    level: 2,
    module: "Module 1: Canvas Rendering & Sprite Collections",
    title: "Session 1: \"Initializing the Defense Arena: Canvas & Coordinates\"",
    duration: "2 hours",
    objectives: [
      "Understand the difference between DOM-based layout and coordinate Canvas rendering",
      "Set up an interactive `<canvas>` element and retrieve its 2D drawing context",
      "Draw game shapes (colony shield blocks, player ship, lanes) using canvas draw APIs"
    ],
    warmUp: "Reverse Engineering — Inspecting a Canvas Game: open a working Space-Invaders-style game in the browser, open DevTools' Sources tab, and identify how the canvas is initialized, what draw commands render the player ship, and where the game loop function lives.",
    miniLesson: "The Canvas API vs. the DOM: the HTML5 `<canvas>` element as a pixel-array viewport, direct rendering commands (`fillRect()`, `clearRect()`, `stroke()`), and center-alignment vs. coordinate anchoring on canvas.",
    coreActivity: "Defense Grid Blueprint: define the canvas coordinate constraints (e.g. width 480px, height 600px), draft the canvas element spec sheet, then prompt the AI to generate the `canvas.js` initialization script and audit the context bindings it produced.",
    handsOn: "Socratic Debugging — The Overwriting Canvas: the tutor removes the `ctx.clearRect()` call from the draw loop, so the ship leaves a solid trail instead of moving cleanly. Explain the role of `clearRect` before drawing the next frame, and restore it.",
    homework: "In the Journal tab under 'Session 1 Homework', write a JS code snippet that draws a green defense shield block on a canvas using absolute context parameters (+50 XP).",
    ethics: "Color Associations in Systems Design: research shows red enemy indicators in military simulation games can increase aggression and dehumanize adversaries. Why are alien indicators typically colored red, and how do design decisions shape player aggression or anxiety?",
    adaptations: "Age 13-16: Compare Canvas's immediate-mode drawing model to the DOM's retained-mode model and discuss when each is the better tool."
  },
  {
    id: "l2-s2",
    level: 2,
    module: "Module 1: Canvas Rendering & Sprite Collections",
    title: "Session 2: \"Drawing and Animating Sprite Lists\"",
    duration: "2 hours",
    objectives: [
      "Declare JavaScript objects representing game sprites (player ship, aliens)",
      "Set up speed variables and update coordinate structures in real time",
      "Implement simple keyboard controls mapping keys to continuous motion increments"
    ],
    warmUp: "Object State Tracing: trace how object properties (e.g. `ship.x`, `ship.speed`) change as inputs are applied, showing that object literal values can be updated dynamically.",
    miniLesson: "Sprites as Object Literals: structuring sprite properties inside a JS object (`let ship = { x: 200, y: 500, width: 40, height: 40, speed: 5 };`) and modifying those values inside the drawing cycle.",
    coreActivity: "Sprite Object Specs: outline a properties checklist for the Player and Enemy sprite classes, write their baseline object declarations, then prompt the AI to write a function that renders the `ship` object on the canvas context.",
    handsOn: "Socratic Debugging — Object Scope Mutation: the tutor introduces a local variable that shadows the global `ship` object inside the move handler, so moving fails silently. Trace which variable the key listener is actually targeting, then fix the scoping.",
    homework: "In the Journal tab under 'Session 2 Homework', declare an object named `alien` with properties for position `x`/`y`, health, and marching speed (+50 XP).",
    ethics: "Design Standardization: why do standard controls default to WASD and Arrow keys, and how do standardization choices affect inclusivity for new players?",
    adaptations: "Age 13-16: Extend the ship object with a `rotation` or `shieldsUp` property and discuss how growing object shape impacts every function that reads it."
  },
  {
    id: "l2-s3",
    level: 2,
    module: "Module 1: Canvas Rendering & Sprite Collections",
    title: "Session 3: \"The Laser Battery: Arrays of Sprites\"",
    duration: "2 hours",
    objectives: [
      "Declare JavaScript arrays and use array methods (`push()`, `pop()`) to store multiple items",
      "Model dynamic lists representing active lasers fired by the player ship",
      "Loop through sprite arrays to invoke rendering functions for each item"
    ],
    warmUp: "Array Queue Exercises: trace array lengths as items are added and removed in sequence, showing how arrays dynamically expand as items are pushed on.",
    miniLesson: "Arrays in Memory: arrays as index-ordered tables, push operations that append laser objects to the end of a list, and loops that iterate over every array element.",
    coreActivity: "Firing Logic Flowcharting: sketch how a spacebar press adds a laser object to the `lasers` array, draft the event-listener trigger conditions, then prompt the AI to write the keypress check that creates and pushes laser objects.",
    handsOn: "Socratic Debugging — The Laser Cannon Stutter: the tutor binds a `keydown` check that only fires on repeated key-down events instead of a continuous held-key check, so lasers stutter instead of auto-firing. Trace how browser key-repeat delay affects inputs and fix the key-state handling.",
    homework: "In the Journal tab under 'Session 3 Homework', write a loop that updates the `y` coordinate of every laser object inside an array of 3 lasers (+50 XP).",
    ethics: "Resource Caps in Software: early online games like Diablo II suffered item-duplication exploits that destroyed their economies. If players can fire infinite lasers, they can lag the browser — why must games enforce cooling-interval limits on weapon rates?",
    adaptations: "Age 13-16: Discuss how the same 'unbounded array growth' problem shows up in real backend systems (e.g. an unthrottled API endpoint)."
  },
  {
    id: "l2-s4",
    level: 2,
    module: "Module 1: Canvas Rendering & Sprite Collections",
    title: "Session 4: \"Laser Motion & Garbage Collection\"",
    duration: "2 hours",
    objectives: [
      "Move all laser elements dynamically by updating coordinates inside loop iterations",
      "Detect off-screen lasers crossing coordinate bounds (e.g. `y < 0`)",
      "Implement memory cleanup (pruning dead objects using `splice()`) to prevent resource leaks"
    ],
    warmUp: "Index Splice Analysis: trace array contents as items are spliced out, noting how the indices of remaining elements shift backward.",
    miniLesson: "Splicing Iterations & Memory Leaks: cleaning up coordinates that cross bounds, the index-shift trap (splicing during a forward loop skips adjacent elements), and reverse-loop iteration as the safe pattern for removing items.",
    coreActivity: "Garbage Collection Logic: blueprint the laser removal rule ('if y < 0, splice it'), write the cleanup loop's pseudocode, then prompt the AI to write a laser-updater loop with bounds checking and splice routines.",
    handsOn: "Socratic Debugging — The Splicing Skip Bug: the tutor changes the loop to iterate forward, so when multiple lasers exit off-screen in the same frame, only every other one gets deleted. Trace what happens to element indices after `splice()` is called, and switch the loop to count down from `lasers.length - 1`.",
    homework: "In the Journal tab under 'Session 4 Homework', write a reverse-iterating loop that checks an array of objects and deletes items where `status === \"dead\"` (+50 XP).",
    ethics: "Memory Optimization: the 2016 Cloudflare 'Cloudbleed' memory leak caused private data from one website to leak into another's responses, affecting millions of users. If backend servers fail to clean up dead sessions, what happens to performance and security?",
    adaptations: "Age 13-16: Connect client-side array pruning to server-side session/connection cleanup as the same underlying resource-management problem."
  },
  {
    id: "l2-s5",
    level: 2,
    module: "Module 2: Swarm Control & Keyboard Matrices",
    title: "Session 5: \"Alien Swarms: Nested Arrays & Movement Deltas\"",
    duration: "2 hours",
    objectives: [
      "Store grids of alien elements using multi-dimensional array tables",
      "Animate alien groups marching horizontally and vertically down the canvas",
      "Detect when aliens touch grid edges to trigger bounce reactions"
    ],
    warmUp: "Row/Column Grid Indexing: locate specific aliens using `[row][col]` index labels, matching grid indices to coordinates.",
    miniLesson: "Multi-dimensional Arrays: matrix grids as arrays containing child arrays, marching-delta loops with boundary-edge triggers, and nested loops that access every grid element.",
    coreActivity: "Alien Marching Flow: sketch the grid path ('move right; if edge reached, drop y and reverse marching direction'), draft the coordinate-limit conditionals, then prompt the AI to generate the grid-generation and marching functions.",
    handsOn: "Socratic Debugging — The Edge Stampede: the tutor disables the boundary indicators, so the alien grid slides completely off-screen. Trace which conditional checks failed and restore the boundary checks so the swarm drops and reverses correctly.",
    homework: "In the Journal tab under 'Session 5 Homework', write a nested JS loop that prints a 3x3 grid of coordinate values `(row, col)` to the console (+50 XP).",
    ethics: "Drone Swarm Coordination: real robotic search swarms share boundary rules to avoid collisions. What checks must designers implement to prevent a swarm collision catastrophe?",
    adaptations: "Age 13-16: Extend the swarm grid to a non-uniform shape (e.g. a pyramid of aliens) and discuss how nested-loop bounds must adapt."
  },
  {
    id: "l2-s6",
    level: 2,
    module: "Module 2: Swarm Control & Keyboard Matrices",
    title: "Session 6: \"Firing Mechanisms & Keyboard Matrices\"",
    duration: "2 hours",
    objectives: [
      "Maintain simultaneous input mappings using keyboard matrices",
      "Solve keypress delays by tracking keys pressed/released states in arrays",
      "Trigger firing loops that enforce cooling intervals"
    ],
    warmUp: "Multiple Inputs Mapping: match keyboard trigger combinations (e.g. ArrowLeft + Space) to output states, showing why a single key listener log can't capture simultaneous holds.",
    miniLesson: "Input State Matrices: why single `keydown` listeners fail under simultaneous inputs (e.g. steering while firing), declaring a key-state map object (`keysPressed = {}`), and binding `keydown`/`keyup` to toggle it true/false.",
    coreActivity: "Keyboard Matrix Blueprint: flowchart how input events toggle key-map values, draft the variable state chart, then prompt the AI to build the key-state listener matrix (`input.js`).",
    handsOn: "Socratic Debugging — The Firing Spam Lock: the tutor removes the `keyup` handler, so the space key stays stuck `true` and spawns infinite lasers. Trace where the key-state map should reset, and restore the `keyup` mapping.",
    homework: "In the Journal tab under 'Session 6 Homework', write a JS object structure and keydown/keyup logic representing keys 'a', 'd', and 'w' (+50 XP).",
    ethics: "Hardware Manipulation: the 2014 iCloud celebrity photo hack exploited Apple's lack of login rate-limiting on the 'Find My iPhone' API to brute-force passwords. If login endpoints don't enforce input rate thresholds, how do event lockouts and cooling loops protect a system?",
    adaptations: "Age 13-16: Discuss why rate-limiting a login form is the same core pattern as cooling down a laser-fire loop — both cap how often an action can repeat."
  },
  {
    id: "l2-s7",
    level: 2,
    module: "Module 2: Swarm Control & Keyboard Matrices",
    title: "Session 7: \"Colony Shields: Destructible Grid Matrices\"",
    duration: "2 hours",
    objectives: [
      "Build protective shields using multi-dimensional grid lists representing pixel cells",
      "Detect laser hits on specific grid cells using coordinate index lookups",
      "Modify shield grid values to represent degradation on hits"
    ],
    warmUp: "Pixel Grid Destruct: on grid paper, calculate and erase the cells that intersect a laser's path, showing how absolute coordinates translate to grid columns.",
    miniLesson: "Shield Block Matrices: representing shields as grid cells (`0 = empty`, `1 = full`) and checking intersections using matrix index mapping.",
    coreActivity: "Destructible Grid Logic: flowchart 'laser intersects shield bounds → find cell index → set cell to 0 → delete laser', write the coordinate-mapping formula (`col = Math.floor(laserX / cellWidth)`), then prompt the AI to generate the destructible shield drawing and collision logic.",
    handsOn: "Socratic Debugging — The Invincible Shields: the tutor writes the grid-check index parameters out of bounds, so lasers silently bypass shield collision detection. Trace the column calculation to find and fix the index math.",
    homework: "In the Journal tab under 'Session 7 Homework', write a JS coordinate lookup equation mapping absolute screen X = 145 to a column index given `cellWidth = 50` (+50 XP).",
    ethics: "Self-Healing Systems: how should a safety gate behave during a network partition — fail-open (less secure but available) or fail-closed (secure but locked)? Relate this to how a destroyed shield cell should (or shouldn't) regenerate.",
    adaptations: "Age 13-16: Discuss the tradeoff between fail-open and fail-closed defaults in real security systems, not just game shields."
  },
  {
    id: "l2-s8",
    level: 2,
    module: "Module 2: Swarm Control & Keyboard Matrices",
    title: "Session 8: \"Advanced Collision Matrix: Lasers vs. Alien Swarms\"",
    duration: "2 hours",
    objectives: [
      "Implement nested-loop collision sweeps (lasers array vs. aliens grid)",
      "Trigger death updates removing elements from both active collections on overlap",
      "Manage scoring increments and game-state updates dynamically"
    ],
    warmUp: "Nested Array Intersections: compare two coordinate lists to trace where overlaps occur between them.",
    miniLesson: "Double-Iteration Collision Matrix: sweeping a list of lasers against a grid of active aliens, the performance overhead of nested sweeps, and breaking loops early once a collision resolves true.",
    coreActivity: "Matrix Sweep Flowchart: outer loop over lasers → inner loop over aliens → check coordinate overlap → splice both objects. Draft the nested loop bounds, then prompt the AI to generate the collision-sweeper function.",
    handsOn: "Socratic Debugging — The Multiple Kill Bug: the tutor forgets to `break` the inner loop after a hit, so one laser destroys several aliens in the same column pass. Trace why, and insert the missing break.",
    homework: "In the Journal tab under 'Session 8 Homework', write a nested JS loop checking overlaps between an array of 2 lasers and a grid of 4 aliens, logging hit locations (+50 XP).",
    ethics: "System Safety Checks: firewall rules sweep packet headers the same way this collision matrix sweeps sprites. How does matching-rule efficiency affect real network traffic performance?",
    adaptations: "Age 13-16: Estimate the number of comparisons this nested sweep performs per frame and discuss when it would become too slow."
  },
  {
    id: "l2-s9",
    level: 2,
    module: "Module 3: Game State Progression & Cloud Leaderboard APIs",
    title: "Session 9: \"Game States: Waves, Scores, and Health Indicators\"",
    duration: "2 hours",
    objectives: [
      "Implement game-state machines handling wave-level increments and health counters",
      "Spawn faster and denser enemy waves upon clearing grid stages",
      "Draw graphical health status bars and scoreboard screens"
    ],
    warmUp: "Stage Multipliers Calculation: calculate speed and scoring outputs using progression formulas, applying coefficient variables by hand before coding them.",
    miniLesson: "Progressive Game State Matrices: wave-tracking variables and parameters, scale-factor formulas (e.g. `speedMultiplier = wave * 0.15`), and dynamically drawing HUD gauges.",
    coreActivity: "Game Loop State Machine: sketch the state progression from stage-clear to wave-update, draft the scale formulas, then prompt the AI to write the wave-clear trigger and health-display update functions.",
    handsOn: "Socratic Debugging — The Infinite Spawn Loop: the tutor introduces a bug where dropping below 1 alive alien spawns new waves concurrently, flooding the screen with wave titles. Trace where the validation guard failed to check the current wave's initialization state, then fix it.",
    homework: "In the Journal tab under 'Session 9 Homework', write a JS conditional statement that checks if the active alien list is empty, increments the current wave level, and doubles the obstacle speed (+50 XP).",
    ethics: "Difficulty Scaling and User Frustration: how do games use scaling mechanics to keep players hooked, and why must developers test the limits to keep challenge fair rather than punishing?",
    adaptations: "Age 13-16: Graph the speed-multiplier formula across waves and discuss where it needs an upper clamp to stay playable."
  },
  {
    id: "l2-s10",
    level: 2,
    module: "Module 3: Game State Progression & Cloud Leaderboard APIs",
    title: "Session 10: \"Asynchronous Telemetry: Interfacing Leaderboard APIs\"",
    duration: "2 hours",
    objectives: [
      "Understand client-server request dynamics and the REST API model",
      "Read and explain asynchronous JS concepts (Promises, `async`/`await`)",
      "Write asynchronous fetch requests to retrieve live high-score records from a telemetry API"
    ],
    warmUp: "Sync vs. Async Timelines: chronologically trace execution order in synchronous code vs. asynchronous code logs, comparing when callbacks actually fire.",
    miniLesson: "Asynchronous Pipelines & fetch: blocking vs. non-blocking execution paths, the request-response model (GET requests fetching remote JSON), and JS Promises with `async`/`await` syntax.",
    coreActivity: "API Telemetry Blueprint: sketch the data pipeline (request URL → server JSON response → parsed data array), draft the async function signature, then prompt the AI to write an async `fetchLeaderboard()` function querying the test endpoint.",
    handsOn: "Socratic Debugging — The Unresolved Promise: the tutor deletes the `await` keyword before the response-parse step, so the code logs `Promise <Pending>` instead of JSON. Trace what `await` actually tells the browser engine to do, then restore it.",
    homework: "In the Journal tab under 'Session 10 Homework', write an async JS function skeleton that fetches data from a mock endpoint and logs the response to the console (+50 XP).",
    ethics: "Server Load Boundaries: in 2023, X (formerly Twitter) imposed strict API rate limits after bots consumed excessive server resources, breaking the platform for legitimate users. If we fetched scores 60 times a second inside the game loop, what would happen to the server?",
    adaptations: "Age 13-16: Discuss polling vs. event-driven updates (e.g. WebSockets) as alternatives to fetching on every frame."
  },
  {
    id: "l2-s11",
    level: 2,
    module: "Module 3: Game State Progression & Cloud Leaderboard APIs",
    title: "Session 11: \"Submitting High Scores to the Cloud Leaderboard\"",
    duration: "2 hours",
    objectives: [
      "Compose HTTP POST requests sending JSON payloads to server endpoints",
      "Handle network communication exceptions and database errors using try/catch",
      "Validate submitted payload sizes to prevent database errors"
    ],
    warmUp: "Payload Structure Map: structure data parameters into a JSON object literal, writing out the object schema before sending it anywhere.",
    miniLesson: "Writing to Servers: POST requests and request-body payloads, try/catch blocks that capture connection drops, and checking server status (`response.ok` or status codes).",
    coreActivity: "Submission Pipeline Blueprint: flowchart 'player inputs name → build JSON payload → run POST request → verify response status', draft the payload template, then prompt the AI to write a `submitScore(name, score)` handler.",
    handsOn: "Socratic Debugging — Silent Network Drops: the tutor blocks the destination URL, so the game freezes silently on submit because there's no `catch` block. Wrap the fetch call in try/catch and explain how that protects the interface from breaking.",
    homework: "In the Journal tab under 'Session 11 Homework', write a JS fetch options object specifying a POST method, a JSON content-type header, and a body payload containing a test user score (+50 XP).",
    ethics: "Client-Side Integrity and Cheat Prevention: in 2011, hackers modified client-side price values on the Citibank mobile app to transfer funds at manipulated exchange rates, stealing over $2.7 million. If scores are sent from the client, how do we prevent users from forging request packets to post fake scores?",
    adaptations: "Age 13-16: Discuss server-side score validation (e.g. recomputing score from a replay log) as the real-world fix for client-side score forgery."
  },
  {
    id: "l2-s12",
    level: 2,
    module: "Module 3: Game State Progression & Cloud Leaderboard APIs",
    title: "Session 12: \"Performance Optimization & Memory Audit\"",
    duration: "2 hours",
    objectives: [
      "Identify and resolve memory leaks caused by unbounded growth of inactive array elements",
      "Profile frame drops and optimize loop sweeps",
      "Apply diagnostic tests to catch logic edge cases"
    ],
    warmUp: "Memory Footprint Trace: trace the length of array variables inside a simulator running over 100 frames, comparing how active-array counts grow.",
    miniLesson: "Garbage Collection & Profiling: CPU performance limits and how garbage collection pauses code once arrays grow too large; loop optimization by caching array-length variables and minimizing allocations.",
    coreActivity: "Optimization Checklist: identify candidates for optimization (e.g. laser-list splicing checks, collision checks), draft the safety constraints, then prompt the AI to refactor the rendering loops and array sweeps.",
    handsOn: "Socratic Debugging — The Out-of-Memory Crash: the tutor disables the laser boundary-removal checks; after 500 lasers fire, the frame rate crawls. Check the lasers array's length log to see what happens to memory when dead sprites are never pruned, then restore the boundary checks.",
    homework: "In the Journal tab under 'Session 12 Homework', list 3 performance diagnostic checkpoints you would monitor to ensure a canvas web game runs smoothly (+50 XP).",
    ethics: "Performance on Older Hardware: if developers only optimize for high-end test laptops, how does that affect players on lower-end devices? Why is performance equity an ethical concern, not just a technical one?",
    adaptations: "Age 13-16: Profile the game in browser DevTools' Performance tab and identify one real bottleneck function."
  },
  {
    id: "l2-s13",
    level: 2,
    module: "Level 2 Assessment",
    title: "Session 13: \"Graduation Sprint & Level 2 Defense\"",
    duration: "2 hours",
    objectives: [
      "Deploy a functional Canvas web game to a local development server",
      "Diagnose and patch syntax or logic glitches in a project workspace",
      "Defend game-loop math and asynchronous API integrations in a code-review walkthrough"
    ],
    warmUp: "Final QA Sweeps: run final gameplay passes and document any remaining bugs before the assessment begins.",
    miniLesson: "Assessment Structure: Part A builds/verifies the full compiled stack (canvas init, sprite collections, input matrices, nested collision matrices, async leaderboard fetch); Part B is a tutor-led code walkthrough; Part C is a timed diagnostic challenge.",
    coreActivity: "Part A — The Mars Defense Assembler: build and verify the fully compiled code stack — canvas initialization, sprite-collection loops, input-state matrices, nested collision matrices, and the async leaderboard fetch system.",
    handsOn: "Part B — The Canvas Autopilot Walkthrough: walk the tutor through your game codebase line-by-line, explaining coordinate calculations, memory-cleanup loops, and API fetch options. Part C — Diagnostic Challenges: locate and patch a seeded bug in an asynchronous request handler or an array-splice statement.",
    homework: "Complete the self-audit reflection in the Journal tab under 'Session 13 Assessment' summarizing what broke during QA, what you patched, and how confidently you could defend your async/API code (+50 XP).",
    ethics: "Professional Defense: treating the tutor's code-walkthrough questioning as collaborative auditing rather than adversarial gatekeeping — the same posture a real code review requires.",
    adaptations: "Age 13-16: Full live deployment to a local dev server plus a recorded code-walkthrough defense."
  },

  // ================= LEVEL 3 =================
  {
    id: "l3-s1",
    level: 3,
    module: "Module 1: Relational Databases & Hacking Sign-Ups",
    title: "Session 1: \"Where Does Data Live? Relational Database Schemas\"",
    duration: "2 hours",
    objectives: [
      "Explain client-server architecture and how data is separated from application code",
      "Define relational SQL terms: Tables, Fields, Primary Keys, and Foreign Keys",
      "Model database schemas representing player decks, hacking tools, and transaction logs"
    ],
    warmUp: "Relational Schema Match: using the in-app diagramming tool, connect hacking tools to player cards using primary- and foreign-key nodes.",
    miniLesson: "Relational Data Modeling: why local variables reset on page reload (making a backend database necessary), relational table structures (One-to-Many, Many-to-Many), and SQL field constraints (Unique, Not Null, Default).",
    coreActivity: "Arena DB Schema Blueprint: design tables for `players`, `hacking_tools` (id, name, speed_rating, cost), and `inventories` (player_id, tool_id), then prompt the AI to generate the SQL schema and audit its key relationships.",
    handsOn: "Socratic Debugging — The Floating Record: the tutor removes the foreign-key constraint on `inventories`; a deleted player's inventory items are left stranded in the database. Explain the role of foreign keys and cascade deletes, then restore the constraint.",
    homework: "In the Journal tab under 'Session 1 Homework', sketch a 3-table relational schema for a virtual card marketplace, indicating primary and foreign key references (+50 XP).",
    ethics: "Data Privacy & Sensitivity Classification: the 2017 Equifax breach exposed 147 million people's data because sensitive fields (Social Security numbers) lacked adequate access controls. What fields in our schema are public (high scores) vs. private (email, transaction logs), and how does that shape the schema before we write it?",
    adaptations: "Age 13-16: Diagram a schema with at least one many-to-many relationship (e.g. tools shared across multiple decks) and discuss why it needs a join table."
  },
  {
    id: "l3-s2",
    level: 3,
    module: "Module 1: Relational Databases & Hacking Sign-Ups",
    title: "Session 2: \"User Authentication & Hacking Sign-Ups\"",
    duration: "2 hours",
    objectives: [
      "Understand authentication workflows, encryption, and password hashing concepts",
      "Build signup/login forms collecting username and password credentials",
      "Link forms to backend routes that validate and store credentials securely"
    ],
    warmUp: "Password Hashing Trace: compare raw password strings against their hashed equivalents, observing that hashes reveal nothing about the original text.",
    miniLesson: "The Authentication Chain: why we never store passwords in plaintext, hashing algorithms (bcrypt, argon2) and salt parameters, and the login flow that compares an input's hash against the stored hash.",
    coreActivity: "Auth Routing Flow: draw the signup sequence (Form → POST → Hash → Insert → DB), draft the request payload requirements, then prompt the AI to generate the authentication route and signup controller.",
    handsOn: "Socratic Debugging — The Plaintext Leak: the tutor replaces the hash-generation call with a direct string insert, writing plaintext passwords into the database. Explain why storing raw passwords is a security risk if an attacker ever reads the table directly, then restore the hashing step.",
    homework: "In the Journal tab under 'Session 2 Homework', write a JS code snippet checking if a password string meets length bounds (min 8 characters) and hashing it (+50 XP).",
    ethics: "User Credentials Exposure: the 2012 LinkedIn breach exposed 6.5 million password hashes, but because they used unsalted SHA-1 instead of bcrypt, most were cracked within hours. If our database is breached and passwords leak in plaintext, how does it affect users who reuse passwords elsewhere?",
    adaptations: "Age 13-16: Research the cost-factor parameter in bcrypt and discuss why a higher cost factor is more secure but slower."
  },
  {
    id: "l3-s3",
    level: 3,
    module: "Module 1: Relational Databases & Hacking Sign-Ups",
    title: "Session 3: \"Access Security & Environment Variables\"",
    duration: "2 hours",
    objectives: [
      "Explain the security hazards of hardcoding API keys and database credentials in client code",
      "Use environment configuration files (`.env`) to isolate sensitive credentials",
      "Access environment parameters in backend code using configuration wrappers"
    ],
    warmUp: "API Keys Leak Audit: inspect a mock public GitHub repository to locate hidden API keys and database links accidentally committed to the code.",
    miniLesson: "Credentials Containment: why client-side code is public (DevTools reveals everything), environment configuration files (`.env`) and `.gitignore` safety rules, and accessing system environment variables (`process.env.DB_PASSWORD`).",
    coreActivity: "Credentials Shielding Blueprint: plan which keys (database URL, JWT secret) must be moved off-code, draft the environment-variable key template, then prompt the AI to extract hardcoded credentials into a `.env` file and wire up configuration access.",
    handsOn: "Socratic Debugging — The Exposed Config Bug: the tutor copies database connection keys into a front-end script, making them visible in browser network logs. Explain why exposing credentials on the frontend is a threat, then move them back into `.env`.",
    homework: "In the Journal tab under 'Session 3 Homework', write a mock `.env` file declaring 3 secrets and show the code loading them via `process.env` (+50 XP).",
    ethics: "Responsible Disclosures: in 2022, a Samsung engineer accidentally uploaded proprietary source code to ChatGPT, exposing trade secrets. If you discover a company's credentials publicly exposed on a repo, what should you do, and what does responsible disclosure look like?",
    adaptations: "Age 13-16: Verify `.gitignore` actually blocks `.env` from being tracked by running `git status` after adding secrets."
  },
  {
    id: "l3-s4",
    level: 3,
    module: "Module 1: Relational Databases & Hacking Sign-Ups",
    title: "Session 4: \"Relational Queries: Retrieving Player Inventories\"",
    duration: "2 hours",
    objectives: [
      "Write database queries fetching user data from multiple tables (relational JOIN queries)",
      "Parse tabular query rows into structured JSON array payloads",
      "Wire the frontend dashboard to fetch and render player inventories"
    ],
    warmUp: "JOIN Table Matches: given a relational table grid, match keys by hand to assemble an inventory list before writing any SQL.",
    miniLesson: "SQL JOIN Queries: retrieving data across tables with `INNER JOIN`, linking records via foreign keys (`inventories.player_id = players.id`), and converting flat SQL rows into nested JSON arrays.",
    coreActivity: "Inventory Fetch Flowchart: sketch the pipeline (GET `/inventory` → run SQL join query → send JSON array response), draft the SQL join template, then prompt the AI to write the backend route executing the join.",
    handsOn: "Socratic Debugging — The Empty Join Leak: the tutor replaces `INNER JOIN` with a `LEFT JOIN`, so the query starts returning tool records for non-existent player IDs. Explain what INNER vs. LEFT JOIN dictates, then correct the join type.",
    homework: "In the Journal tab under 'Session 4 Homework', write a SQL query joining `players` and `inventories`, filtering by player username 'HackerZero' (+50 XP).",
    ethics: "Data Isolation: if inventory lookup requests don't check player-constraint parameters, could a hacker fetch another player's deck? Why is query-level isolation critical, not just RLS?",
    adaptations: "Age 13-16: Extend the join to a 3-table chain (players → inventories → hacking_tools) and trace how each foreign key links the next table."
  },
  {
    id: "l3-s5",
    level: 3,
    module: "Module 2: REST APIs & Server-Side Security",
    title: "Session 5: \"Server Routing & REST API Endpoints\"",
    duration: "2 hours",
    objectives: [
      "Explain REST API methods (GET, POST, PUT, DELETE) and routing architectures",
      "Write backend route handlers mapping endpoints to database transactions",
      "Intercept client request parameters to execute matching logic routes"
    ],
    warmUp: "Reverse Engineering — Intercepting API Traffic: open a public web app, open DevTools' Network tab filtered to XHR/Fetch, click through the app, and identify which endpoints are called, which HTTP methods are used, and what the JSON response contains.",
    miniLesson: "REST Route Architectures: HTTP verb semantics (GET reads, POST writes, PUT updates, DELETE removes) and URL path parameters (`/tools/:id`) vs. query parameters.",
    coreActivity: "Deck Management API Blueprint: outline the REST routes needed (GET `/tools`, POST `/deck/add`, DELETE `/deck/remove`), write the endpoint spec sheet, then prompt the AI to generate the REST routing file (`api.js`).",
    handsOn: "Socratic Debugging — The POST Read Trap: the tutor maps a data-read request to a POST endpoint, causing the browser to refuse to cache the resource on reload. Explain why GET endpoints must use GET, then correct the route's HTTP verb.",
    homework: "In the Journal tab under 'Session 5 Homework', write Express routing declarations for GET, POST, and DELETE endpoints matching deck cards (+50 XP).",
    ethics: "Standard API Design: why is standardizing endpoint conventions crucial for open systems, and how does clear API documentation help developers cooperate instead of guessing at each other's routes?",
    adaptations: "Age 13-16: Add a PUT `/tools/:id` route for editing an existing tool and discuss when PUT is the right verb instead of POST."
  },
  {
    id: "l3-s6",
    level: 3,
    module: "Module 2: REST APIs & Server-Side Security",
    title: "Session 6: \"Defensive Coding: Server-Side Parameter Verification\"",
    duration: "2 hours",
    objectives: [
      "Apply defensive programming to validate parameters on the server side",
      "Enforce bounds validation (range, type, existence checks) to reject invalid requests",
      "Return correct HTTP status codes matching request outcomes (400, 403, 404, 500)"
    ],
    warmUp: "Parameter Sanity Checks: audit a mock request payload to find values that could crash the server or database (e.g. a string where a cost number is expected, or a negative value).",
    miniLesson: "The Zero-Trust Backend: why frontend validation is trivially bypassed via DevTools, validating types/ranges/fields on the server itself, and REST status code classification.",
    coreActivity: "Validation Rules Matrix: plan validation thresholds (e.g. quantity must be a positive integer), draft the validation pseudocode, then prompt the AI to write server-side validation guards inside the request handler.",
    handsOn: "Socratic Debugging — The Free Credits Hack: the tutor removes server-side price validation, so a request payload with cost `-100` increases the player's credit balance. Explain the hazard of trusting client-provided price values, then insert the server-side check.",
    homework: "In the Journal tab under 'Session 6 Homework', write a server-side parameter check that throws a 400 Bad Request if a cost parameter is not a positive number (+50 XP).",
    ethics: "Edge Valuation Validation: if backend validation has logic holes, players can exploit them to steal digital assets — is that exploit the player's fault or the coder's fault?",
    adaptations: "Age 13-16: Write a validation guard covering at least three distinct failure modes (wrong type, negative value, missing field) with distinct status codes."
  },
  {
    id: "l3-s7",
    level: 3,
    module: "Module 2: REST APIs & Server-Side Security",
    title: "Session 7: \"Row-Level Security: Shielding Player Profiles\"",
    duration: "2 hours",
    objectives: [
      "Understand Row-Level Security (RLS) database policies",
      "Design RLS rules checking auth status to isolate database records",
      "Audit database access logs to ensure records are protected"
    ],
    warmUp: "Database Leak Check: trace query results when querying without auth checks, noticing that every user's records display regardless of who's asking.",
    miniLesson: "Row-Level Security Rules: RLS as a database-engine guard enforcing isolation at the query level, matching a query's auth token user ID against a record's user ID, and Select/Insert/Update/Delete-specific security policies.",
    coreActivity: "DB Security Policy Diagram: map the permission rule ('players can read all tool templates, but can only read/write their own inventories'), draft the SQL policy definitions, then prompt the AI to write PostgreSQL RLS policy statements.",
    handsOn: "Socratic Debugging — The Global Read Leak: the tutor disables the RLS flag on the `players` table, so a query returns everyone's usernames and encrypted passwords. Explain why user A can download user B's records, then enable RLS and configure the user-check policy.",
    homework: "In the Journal tab under 'Session 7 Homework', write a SQL RLS policy statement limiting updates on `inventories` to the authenticated user matching `auth.uid()` (+50 XP).",
    ethics: "Mass Data Leaks: the 2019 Capital One breach exposed 106 million customer records because a misconfigured firewall rule bypassed Row-Level Security, letting a single query dump the entire database. How does RLS act as a defensive barrier even if other layers fail?",
    adaptations: "Age 13-16: Write both a SELECT and an UPDATE policy for the same table and explain why a table might need different rules per operation."
  },
  {
    id: "l3-s8",
    level: 3,
    module: "Module 2: REST APIs & Server-Side Security",
    title: "Session 8: \"Database Transaction Guards: Safe Inventory Exchange\"",
    duration: "2 hours",
    objectives: [
      "Understand ACID database transaction concepts (Atomicity, Consistency, Isolation, Durability)",
      "Implement database transactions (BEGIN, COMMIT, ROLLBACK) to group queries",
      "Prevent partial data writes during credit-to-item exchanges"
    ],
    warmUp: "Partial Write Simulation: walk through a card trade where the server takes a player's credits but fails before giving the card, and determine what should happen to those credits.",
    miniLesson: "ACID Transactions: atomicity (all queries succeed or all roll back), transaction syntax (`BEGIN`, `COMMIT`, `ROLLBACK`), and lock conditions that prevent double-spending during concurrent runs.",
    coreActivity: "Transaction Flowcharting: draw a transactional exchange flow showing rollback triggers when a balance is insufficient, draft the transactional SQL blocks, then prompt the AI to generate a transaction wrapping the credit charge and inventory insert.",
    handsOn: "Socratic Debugging — The Credit Theft Glitch: the tutor simulates a crash mid-purchase — credits are deducted but no card is added, and nothing rolls back. Explain why wrapping the queries in BEGIN/COMMIT (with rollback on catch) prevents this partial state, then implement it.",
    homework: "In the Journal tab under 'Session 8 Homework', write a JS transaction script executing BEGIN, checking credits, deducting them, inserting the item, and running COMMIT or ROLLBACK on error (+50 XP).",
    ethics: "Transaction Integrity: in 2012, a Knight Capital Group deployment executed 4 million unintended stock trades in 45 minutes due to a partial transaction rollback failure, losing $440 million. If a bank transfer fails mid-route, why is atomic rollback mandatory for trust in the system?",
    adaptations: "Age 13-16: Simulate a crash at three different points inside the transaction (before BEGIN, mid-query, before COMMIT) and trace what state the database ends up in for each."
  },
  {
    id: "l3-s9",
    level: 3,
    module: "Module 3: Cloud Deployment & Server Diagnostics",
    title: "Session 9: \"Continuous Git Tracking & Code Reviews\"",
    duration: "2 hours",
    objectives: [
      "Manage multi-developer codebase commits using feature branches and merges",
      "Resolve code merge conflicts manually in the affected files",
      "Perform code review checklists, verifying logic rules and safety boundaries"
    ],
    warmUp: "Merge Conflict Match: identify Git conflict markers (`<<<<<<< HEAD` vs. `>>>>>>> branch`) and choose which lines should survive the merge.",
    miniLesson: "Code Auditing and Pull Requests: feature-branch development (`git checkout -b`), reading pull-request diffs, and peer code-review checklist guidelines.",
    coreActivity: "Feature Deployment Blueprint: plan a branch lifecycle (checkout feature → make changes → push → code review → merge), draft a PR review template, then prompt the AI to explain a merge conflict's resolution.",
    handsOn: "Socratic Debugging — The Scrambled Merge Crash: the tutor creates a merge conflict where both `main` and a feature branch edit the same backend route, leaving conflict markers in the code. Locate the markers, choose the correct lines, and commit the resolution.",
    homework: "In the Journal tab under 'Session 9 Homework', list 3 git commands you would run to pull the latest changes, resolve conflicts, and merge a feature branch back to main (+50 XP).",
    ethics: "Code Review Accountability: if you approve a classmate's PR without reviewing it and it contains a security leak, who is responsible — and why does that make code review a shared obligation, not a formality?",
    adaptations: "Age 13-16: Practice resolving a conflict where both sides made a legitimately useful change, requiring a manual merge rather than picking one side wholesale."
  },
  {
    id: "l3-s10",
    level: 3,
    module: "Module 3: Cloud Deployment & Server Diagnostics",
    title: "Session 10: \"Deploying the Hacking Console to the Cloud\"",
    duration: "2 hours",
    objectives: [
      "Understand continuous deployment (CD) pipelines and web hosting architectures",
      "Deploy Express APIs and PostgreSQL databases to cloud hosting platforms",
      "Configure live cloud environment keys ensuring database parameters map securely"
    ],
    warmUp: "Hosting Options Map: match application pieces (client code, server backend, database) to the type of cloud provider that hosts each one.",
    miniLesson: "Cloud Infrastructure Models: client hosting (CDN) vs. server hosting (containers/dynos) vs. managed cloud databases, continuous deployment pipelines triggered by git push events, and binding live environment variables on a cloud dashboard.",
    coreActivity: "Deployment Infrastructure Blueprint: map the production data path (frontend fetches the live server URL; server reads cloud database credentials), draft the production environment-variable list, then prompt the AI to generate deployment config files.",
    handsOn: "Socratic Debugging — The Broken Cloud Connection: the tutor deletes the server's cloud DB host variable, causing the live site to throw connection timeouts. Explain how the server connects to the database in production, then restore the missing variable.",
    homework: "In the Journal tab under 'Session 10 Homework', write a deployment checklist detailing the variable configurations and server paths needed to launch a database API (+50 XP).",
    ethics: "Deployed Data Sovereignty: where is your database physically hosted, and why does that country's location matter for privacy laws like GDPR?",
    adaptations: "Age 13-16: Compare two real hosting providers' environment-variable dashboards and note how each one keeps secrets out of the committed code."
  },
  {
    id: "l3-s11",
    level: 3,
    module: "Module 3: Cloud Deployment & Server Diagnostics",
    title: "Session 11: \"Load Testing & Error Diagnostics\"",
    duration: "2 hours",
    objectives: [
      "Identify performance bottlenecks under concurrent request loads",
      "Read and troubleshoot server stack traces and production exception logs",
      "Write automated checks guarding against database timeouts"
    ],
    warmUp: "Log Analysis Sweeps: trace server logs to find the line numbers and variables causing a stack-trace exception.",
    miniLesson: "Diagnostics & Concurrency Limits: server request queues and thread-count variables, error code ranges (500 Internal Error vs. 503 Service Unavailable), and database connection-pool size parameters.",
    coreActivity: "Diagnostic Test Scenarios: plan a load threshold test (simulate 100 concurrent requests, monitor response times), draft a log-inspection template, then prompt the AI to write connection-pooling logic and log-formatting scripts.",
    handsOn: "Socratic Debugging — The Exhausted Connection Pool: the tutor removes `client.release()` calls from Express routes; after ~10 page reloads the server hangs and times out. Trace how many database connections are open and where they should be closed, then insert `finally { client.release(); }`.",
    homework: "In the Journal tab under 'Session 11 Homework', write a JS wrapper implementing try/catch/finally to execute a query and release the database client (+50 XP).",
    ethics: "Denial of Service Vulnerabilities: if leaving connections open can crash a server, how could a bad actor exploit that deliberately, and why does closing database clients count as a security requirement, not just tidiness?",
    adaptations: "Age 13-16: Simulate the connection-pool exhaustion locally by removing the `finally` block and observing how many requests it takes to hang the server."
  },
  {
    id: "l3-s12",
    level: 3,
    module: "Module 3: Cloud Deployment & Server Diagnostics",
    title: "Session 12: \"The Hacker Arena Integration Sprint\"",
    duration: "2 hours",
    objectives: [
      "Coordinate data flows across frontend interfaces, Express servers, and SQL databases",
      "Resolve integration bugs across the client-server boundary",
      "Profile live database query execution times"
    ],
    warmUp: "Integration Checkpoints Map: outline the full data-flow checklist end to end — Frontend Form → Express Route → Validation → Transaction → DB Write → Response JSON → UI Redraw.",
    miniLesson: "System Integration Sweep: verifying every layer (database tables initialized, environment keys loaded, RLS rules active) is actually connected to the next, not just individually correct.",
    coreActivity: "The Integration Sprint: work through the full stack end to end, closing any data gaps between the frontend, the Express routes, and the database — verifying tables are initialized, environment keys are loaded, and RLS rules are active.",
    handsOn: "Code Review Sweep: walk through the database policies and Express routes together with the tutor, checking variable types and coordinate scopes across every module.",
    homework: "In the Journal tab under 'Session 12 Homework', write a QA integration log summarizing test outputs for your account registration and tool purchase runs (+50 XP).",
    ethics: "Integration Responsibility: when a bug only shows up at the seam between two modules that each individually 'work,' whose responsibility is it to catch it before shipping?",
    adaptations: "Age 13-16: Time how long a full registration-to-purchase flow takes end-to-end and identify the single slowest step."
  },
  {
    id: "l3-s13",
    level: 3,
    module: "Level 3 Assessment",
    title: "Session 13: \"The Capstone Defense\"",
    duration: "2 hours",
    objectives: [
      "Present relational database schemas and SQL constraint policies",
      "Demonstrate client-server transaction flows and validation guards",
      "Defend security policies and environment containment setups in a code review walkthrough"
    ],
    warmUp: "Review Presentation Checklist: run final verification checks on the live deployed hacking console before presenting.",
    miniLesson: "Assessment Structure: Part A is a live capstone presentation, Part B is a tutor-led code audit defense, Part C is a timed live-diagnostics challenge.",
    coreActivity: "Part A — The Hacking Console Presentation: present the capstone project, demonstrating login flows, SQL schema joins, transaction rollbacks, and environment-variable encapsulation.",
    handsOn: "Part B — The Code Audit Defense: walk through the codebase with the tutor, defending your security choices, RLS policy statements, Express router logic, and validation blocks. Part C — Live Diagnostics Challenge: locate and patch a runtime exception or policy leak the tutor introduces into the project database.",
    homework: "Complete the self-audit reflection in the Journal tab under 'Session 13 Assessment' summarizing which security decision you're most confident defending and which one felt shakiest (+50 XP).",
    ethics: "Professional Accountability: treating the tutor's security questioning as a real pre-launch audit, not a performance — the same posture a production security review demands.",
    adaptations: "Age 13-16: Full live deployment defense including at least one question about what would happen if a specific RLS policy were removed."
  },
  {
    id: "l3-s14",
    level: 3,
    module: "Level 3 Assessment",
    title: "Session 14: \"Reflection & What's Next\"",
    duration: "2 hours",
    objectives: [
      "Analyze lessons learned across Level 1, 2, and 3 tracks",
      "Identify roles in software engineering: Frontend, Backend, DBA, and Security Engineer",
      "Formulate a learning path for professional capstone deployments in Level 4"
    ],
    warmUp: "Portfolio Audit: review every Prompt Journal version log created across all three levels so far.",
    miniLesson: "Software Engineering Roles: Database Administrators vs. Backend Engineers vs. DevOps Engineers, Security Analysts and Penetration Testers, and setting up a portfolio on GitHub.",
    coreActivity: "Reflections Round-Table: discuss what surprised you about API security, and how the AI Design-Build-Audit loop changed how you inspect AI-generated code.",
    handsOn: "Graduation & Level 4 Planning: review your Level 2 and Level 3 graduation criteria, and map your personal milestones heading into Level 4's capstone deployments.",
    homework: "Write down 3 goals for Level 4 study (e.g. deploying to a real production host, running a live CI/CD pipeline, connecting real Row-Level Security policies) in the Journal tab under 'Session 14 Reflection' (+50 XP).",
    ethics: "Continuous Learning: the professional developer's responsibility to keep skills updated as tools and threats shift — what's one security practice you learned this level that you expect to already be outdated in five years?",
    adaptations: "All Ages: Portfolio review and personalized Level 4 goal-setting conversation with the tutor."
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
    handsOn: "Draft the AI prompt specification for a React hook that connects to your database client and executes CRUD queries, then paste the AI's generated code into your Project Journal to review and test it against your own schema.",
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
    handsOn: "In your own project, configure `.env` files and reference them via `import.meta.env`; document the setup and a zero-plaintext-secrets check in your Project Journal.",
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
    handsOn: "Draft the AI prompt specification for an async fetch function that requests external API data and handles rate limits, then review and test the generated code in your Project Journal.",
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
    handsOn: "Draft the AI prompt spec for a React router auth guard protecting a dashboard page from unauthenticated tokens, then review and test the AI's implementation in your Project Journal.",
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
    handsOn: "Draft and test SQL RLS policies on your own database ensuring isolation limits are fully active; document the policy statements and your verification steps in your Project Journal.",
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
    handsOn: "Draft the AI prompt spec for a React component that restricts admin settings visibility based on `user.role`, then review and test the generated component in your Project Journal.",
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
    handsOn: "On your own repository, open a real pull request, resolve any merge conflicts manually, and document the review in your Project Journal.",
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
    handsOn: "Draft your deployment config's environment-variable bindings and verify them against your hosting provider's dashboard; document the checklist in your Project Journal.",
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
    handsOn: "Diagnose a real production error log trace from your deployed app, patch the underlying source code logic, and document the diagnosis in your Project Journal.",
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
    handsOn: "Run integration checks across your own deployed database, auth flow, and API endpoints, and document the results in your Project Journal.",
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
    handsOn: "Run linting and query-optimization checks on your own project's SQL statements and codebase; document findings and fixes in your Project Journal.",
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
    handsOn: "Demonstrate a live walkthrough of your deployed capstone site to the tutor, defending your design choices; document the presentation notes in your Project Journal.",
    homework: "Final course self-reflection journal entry: What makes you a Software Engineer?",
    ethics: "Algorithmic responsibility: The societal impacts of software systems.",
    adaptations: "All Ages: Live site presentations panel."
  }
];
