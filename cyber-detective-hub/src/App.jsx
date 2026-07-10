import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { CURRICULUM_DATA } from './curriculumData';
import { PROJECT_TASKS } from './projectTasksData';


// Curriculum Guide Concept Reference Database (reference lookup for students)
const CONCEPT_REFERENCES = {
  'l1-s1': [
    { 
      name: "Input-Process-Output (IPO) Model", 
      desc: "Core Definition:\n  The fundamental framework showing how computers handle data. All applications take inputs, transform them, and present outputs.\n\nDetailed Mechanics:\n  1. Input: Incoming triggers or sensor records (clicks, key presses, API streams).\n  2. Process: The logic controller executing sequence calculations and evaluations.\n  3. Output: Visual draws, updates to states, sound indicators, physical moves.\n\nClassroom Autopilot Project Example:\n  - Input: User presses the 'Up Arrow' key.\n  - Process: The engine computes state updates: newY = currentY - speed.\n  - Output: The HTML view changes the top/bottom coordinates of the car element.", 
      keywords: "IPO model diagram, computing inputs processing outputs" 
    },
    { 
      name: "Sequential Execution", 
      desc: "Core Definition:\n  Instructions run step-by-step from top to bottom. Order is absolute.\n\nCommon Student Mistake:\n  Coding operations out of chronological order. For example, trying to drive forward before shifting the car out of park:\n\n  // ❌ INVALID SEQUENCE (Crashes/Fails Preconditions):\n  1. press_gas(); // Fails: Engine is not started yet!\n  2. start_engine();\n  3. shift_to_drive();\n\n  //  VALID SEQUENCE:\n  1. start_engine();\n  2. press_footbrake();\n  3. shift_to_drive();\n  4. release_handbrake();\n  5. press_gas();", 
      keywords: "order of execution code step by step, sequential control flow" 
    },
    { 
      name: "System Preconditions", 
      desc: "Core Definition:\n  Mandatory starting states that must be true before a specific instruction is allowed to run. Preconditions act as gatekeepers to protect systems from crashes.\n\nCode Validation Logic:\n  Before starting autopilot sequence, systems check state values:\n  if (gearState !== \"PARK\") {\n    throw Error(\"Lockout Triggered: Shift to Park first!\");\n  }\n  if (!footBrakeDepressed) {\n    throw Error(\"Lockout Triggered: Brake pedal must be pressed!\");\n  }", 
      keywords: "preconditions assertions contract validation code" 
    },
    { 
      name: "Variables as Storage Registers", 
      desc: "Core Definition:\n  Named slots in memory that hold exactly one value. Assigning a value overrides whatever was there before.\n\nJavaScript Syntax Cheat Sheet:\n  let speed = 0;        // Declares a number variable\n  let isRunning = true; // Declares a boolean (true/false) variable\n  let driver = \"Agent\"; // Declares a string (text) variable\n\nHow Variables Change:\n  speed = 10;           // Overwrites old value. speed is now 10.\n  speed = speed + 5;    // Evaluates right side (10 + 5) first, then saves 15.", 
      keywords: "declaring variables javascript let const data types" 
    }
  ],
  'l1-s2': [
    { 
      name: "Document Object Model (DOM)", 
      desc: "Core Definition:\n  The nested hierarchy representation of a web page. The browser translates your HTML code into a tree structure of visual boxes.\n\nVisual DOM Hierarchy:\n  - document (Root)\n    └─ <html>\n       └─ <body>\n          └─ <div id=\"track\"> (Parent container)\n             ├─ <div id=\"player-car\"></div> (Child container)\n             └─ <div class=\"lane-line\"></div> (Child container)", 
      keywords: "browser DOM tree node hierarchy representation" 
    },
    { 
      name: "HTML Tags and Element Syntax",
      desc: "Core Definition:\n  Tags define the type and boundaries of visual components. Some tags are GENERIC (a blank box with no built-in meaning) and some are SEMANTIC (they describe what their content IS).\n\nCheat Sheet Elements:\n  - <div>: A GENERIC block-level container box. It has NO built-in look or meaning — it is raw material you shape with CSS. Used to build tracks, lanes, dashboards, or even a thin line.\n  - <section>: Also a container box, but SEMANTIC — it signals 'a distinct section of content' (e.g. a game arena or a scoreboard region). Use <section> when the grouping has meaning; use <div> when it is purely visual/structural. They look identical until styled.\n  - <span>: A GENERIC inline wrapper (sits inside a line of text) used to highlight one word or a live score number.\n  - <h2>: A SEMANTIC heading/title — screen readers announce it as a heading.\n\nWhy 'blank box' matters (the lane-divider):\n  We draw a lane line with <div class=\"lane-divider\"></div> because a line isn't 'a heading' or 'a paragraph' — it is purely visual. The <div> starts as an INVISIBLE empty box; CSS (width: 2px; height: 100%; dashed border) shapes it into the line. The tag is the raw material; the CSS is the shaping. This is why an unstyled empty div shows nothing.\n\nNesting Pitfall:\n  Always close tags in the exact opposite order you opened them!\n  - ✅ Correct: <div><span>Hello</span></div>\n  - ❌ Incorrect: <div><span>Hello</div></span> (causes render errors)",
      keywords: "HTML element tags opening closing rules cheat sheet" 
    },
    { 
      name: "Parent-Child Nesting Structure", 
      desc: "Core Definition:\n  Nesting an element inside another makes it a child. The child exists relative to the boundaries of the parent.\n\nSyntax Blueprint:\n  <div id=\"highway-track\"> <!-- Parent Container -->\n    <div id=\"player-car\"></div> <!-- Child Element 1 -->\n    <div id=\"obstacle-car\"></div> <!-- Child Element 2 -->\n  </div>\n\nRule of Thumb:\n  If you hide, delete, or move a parent element, all of its children will hide, delete, or move with it.", 
      keywords: "nesting HTML tags structure parent child DOM" 
    },
    { 
      name: "HTML Attributes (ID vs Class)",
      desc: "Core Definition:\n  Attributes add identifiers and metadata to HTML elements. The two you use most are id and class — both NAME an element so CSS and JavaScript can find it, but they follow opposite rules.\n\nWhen to use which:\n  - ID (Unique): Used ONCE per page. It names one specific target.\n    HTML:  <div id=\"player-car\"></div>\n    CSS finds it with a hash:  #player-car { ... }\n  - Class (Reusable): SHARED by many elements that need the same styling/behavior.\n    HTML:  <div class=\"lane-divider\"></div>\n           <div class=\"lane-divider\"></div>\n    CSS finds them all with a dot:  .lane-divider { ... }\n\nWorked Example (why the track uses each):\n  - There is only ONE player car, so it gets id=\"player-car\".\n  - There are MANY lane dividers, so they share class=\"lane-divider\" and a SINGLE rule styles all of them at once. An id could not do this — an id must be unique.\n\nRule of Thumb:\n  id   = the ONE unique thing        (CSS selector: # )\n  class = a REPEATED category of things (CSS selector: . )",
      keywords: "HTML attributes difference id vs class selector" 
    }
  ],
  'l1-s3': [
    { 
      name: "CSS Selectors and Specificity Rules", 
      desc: "Core Definition:\n  Selectors tell the browser which HTML elements to apply styles to. Specificity decides which styling rule wins if there is a conflict.\n\nSyntax Cheat Sheet:\n  - Target by Tag (low priority): div { background: grey; }\n  - Target by Class (med priority): .obstacle { background: red; }\n  - Target by ID (high priority): #player-car { background: blue; }\n\nRule:\n  If a class selector says a car is red, but its ID selector says it is blue, it will render blue because ID selectors override classes.", 
      keywords: "CSS selectors specificity hierarchy overrides" 
    },
    { 
      name: "CSS Box Model", 
      desc: "Core Definition:\n  Every element on a web page is treated as a rectangular box consisting of four layers.\n\nVisual Layout Blueprint:\n  ┌──────────────────────────────────────────────┐\n  │ MARGIN (Outer space around the element)      │\n  │  ┌────────────────────────────────────────┐  │\n  │  │ BORDER (The element outline line)      │  │\n  │  │  ┌──────────────────────────────────┐  │  │\n  │  │  │ PADDING (Inner clear space)      │  │  │\n  │  │  │  ┌────────────────────────────┐  │  │  │\n  │  │  │  │ CONTENT (Text/Car image)   │  │  │  │\n  │  │  │  └────────────────────────────┘  │  │  │\n  │  │  └──────────────────────────────────┘  │  │\n  │  └────────────────────────────────────────┘  │\n  └──────────────────────────────────────────────┘\n\nBest Practice:\n  Always set box-sizing: border-box; so that padding doesn't swell the final width.", 
      keywords: "CSS box model margins borders padding box sizing" 
    },
    { 
      name: "Absolute vs. Relative Positioning", 
      desc: "Core Definition:\n  Controls coordinate-based layouts so we can position elements freely (like overlaying obstacles onto a racetrack grid).\n\nLayout Blueprint:\n  - Parent element must be relative: anchors coordinates.\n  - Child element must be absolute: moves coordinates relative to parent.\n\nCSS Syntax:\n  #game-arena { \n    position: relative; \n    width: 300px; height: 500px; \n  }\n  #player-car { \n    position: absolute; \n    left: 120px;   /* X-coordinate from left edge */\n    bottom: 10px;  /* Y-coordinate from bottom edge */\n    width: 60px; height: 100px; \n  }", 
      keywords: "absolute coordinates layout CSS position absolute" 
    },
    { 
      name: "CSS Flexbox Layouts", 
      desc: "Core Definition:\n  A layout engine to align lists of elements in a row or column automatically.\n\nSyntax Blueprint:\n  .dashboard-hud {\n    display: flex;\n    flex-direction: row;        /* Align horizontal list */\n    justify-content: space-around; /* Distribute elements evenly */\n    align-items: center;        /* Vertically center elements */\n  }", 
      keywords: "CSS flexbox cheat sheet justify content align items" 
    }
  ],
  'l1-s4': [
    { 
      name: "Conditional Statements (If-Else branching)", 
      desc: "Core Definition:\n  Allows the computer to run different blocks of code based on whether a condition is true or false.\n\nJavaScript Syntax Blueprint:\n  if (speed > 100) {\n    alert(\"Danger: Speed threshold exceeded!\");\n  } else if (speed > 60) {\n    alert(\"Cruising speed reached.\");\n  } else {\n    alert(\"Vehicle slow or stopped.\");\n  }\n\nKey Rule:\n  The computer checks these conditions from top-to-bottom. The first one that evaluates to true is run, and the rest are ignored.", 
      keywords: "javascript if else if syntax conditional code blocks" 
    },
    { 
      name: "Logical Operators (AND, OR, NOT)", 
      desc: "Core Definition:\n  Operators used to link multiple checks inside conditional statements.\n\nOperators Cheat Sheet:\n  - AND (&&): Both sides must be true.\n    if (gearState === \"DRIVE\" && footbrakeReleased === true) { ... }\n  - OR (||): At least one side must be true.\n    if (sensorAlertActive || manualEmergencyPressed) { ... }\n  - NOT (!): Inverts true to false, or false to true.\n    if (!engineRunning) { startEngine(); }", 
      keywords: "javascript logical operators AND OR NOT syntax boolean" 
    },
    { 
      name: "Logical Priority and Overrides", 
      desc: "Core Definition:\n  Designing condition hierarchies so that safety triggers are evaluated before routine operations.\n\nOrder Priority Pitfall:\n  If you check normal inputs before emergency triggers, the emergency triggers will be ignored!\n\n  // ❌ INCORRECT (Car accelerates even if emergency brake is pressed):\n  if (gasPedalPressed) { speed += 5; }\n  else if (emergencyHaltActive) { speed = 0; }\n\n  // ✅ CORRECT (Emergency override evaluated first):\n  if (emergencyHaltActive) { speed = 0; }\n  else if (gasPedalPressed) { speed += 5; }", 
      keywords: "condition overrides precedence safety priority programming" 
    }
  ],
  'l1-s5': [
    { 
      name: "Loop Structures (For vs. While)", 
      desc: "Core Definition:\n  Loops repeat a block of code multiple times without rewriting it manually.\n\nWhen to use which:\n  - For Loop (Counting): Use when you know exactly how many times to repeat.\n    for (let i = 0; i < 5; i++) {\n      // Runs 5 times (i starts at 0, goes up to 4)\n      spawnObstacle();\n    }\n  - While Loop (Condition-bound): Use when repeating based on a status condition.\n    while (fuelGallons > 0) {\n      consumeFuel();\n      fuelGallons--; // Ensure condition changes!\n    }", 
      keywords: "for loop syntax javascript, while loop code templates" 
    },
    { 
      name: "Infinite Loop Traps & CPU Lockouts", 
      desc: "Core Definition:\n  A severe logic error where a loop's condition never becomes false. The computer runs the loop infinitely, freezing the browser.\n\nCommon Loop Bug:\n  let counter = 0;\n  while (counter < 5) {\n    console.log(\"Executing...\");\n    // ❌ Error: forgot 'counter++;'. counter is always 0. Loop never exits!\n  }\n\nRules to Prevent CPU Lockouts:\n  1. Double check that your check variable updates inside the loop body.\n  2. Ensure the check moves closer to the loop exit threshold on each run.", 
      keywords: "browser tab freezes loop error, infinite loop exit conditions" 
    },
    { 
      name: "Loop Controls (Break and Increments)", 
      desc: "Core Definition:\n  Controls that let you change loop behaviors mid-flight.\n\nKeywords Cheat Sheet:\n  - Increment (e.g. i++): Shorthand for i = i + 1. Shifts the loop state forward.\n  - Break: Instantly exits the loop, skipping any remaining cycles.\n\nJavaScript Syntax:\n  for (let i = 0; i < 10; i++) {\n    if (collisionDetected) {\n      break; // Stop running immediately\n    }\n    moveObstacles();\n  }", 
      keywords: "break statement javascript loop, loop counter increment syntax" 
    }
  ]
};



const CAMPAIGN_THEMES = {
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk Metropolis',
    description: 'Solve logical systemic bugs in a neon-lit, highly automated city. Track hackers and secure grid lines.',
    levels: {
      1: {
        mainQuest: 'Operation: Racing Car Autopilot — Construct the HTML structure, CSS styling, and JavaScript logic to drive a 2D highway avoidance racing game.',
        sessions: [
          {
            id: 'l1-s1',
            title: 'Session 1: "Literal Logic & Digital Infiltration"',
            objective: 'Design a precise sequential command blueprint to navigate systems.',
            activity: 'Car Autopilot Roleplay: Student gives step-by-step instructions to tutor to drive and park an vehicle. Tutor follows them strictly literally, demonstrating computer logical processing.',
            homework: 'Complete the "Household IPO Blueprint" in the app\'s Journal tab: Write a process to warm up food from a plate using a microwave. Identify preconditions, inputs, processing logic, and outputs (+50 XP).',
            xp: 100
          },
          {
            id: 'l1-s2',
            title: 'Session 2: "Starting the Game: HTML Structure & Basic Elements"',
            objective: 'Understand how browsers structure documents using HTML tags and nest containers for a racing game.',
            activity: 'Create the HTML structure for the game including track container, player car container, and dashboard HUD.',
            homework: 'Create a simple HTML document containing a sidebar and main container layout representing a garage dashboard. Save to Journal under "Session 2 Homework" (+50 XP).',
            xp: 100
          },
          {
            id: 'l1-s3',
            title: 'Session 3: "Styling the Track & Player Car: CSS Lanes & Visuals"',
            objective: 'Write CSS rules using selectors (ID, Class, Element) to layout the road lanes and position the player car.',
            activity: 'Apply styles to set dimensions for the road lanes, draw dashed markers, and absolute position player and obstacle cars inside parent relative bounds.',
            homework: 'In the Journal tab under "Session 3 Homework", write a CSS stylesheet styling a grid representation of a 3-lane road with a dotted yellow center divider line (+50 XP).',
            xp: 100
          },
          {
            id: 'l1-s4',
            title: 'Session 4: "Decisions, Decisions"',
            objective: 'Master conditional logic gates and climate overrides.',
            activity: 'Climate Logic Controller: Program safety conditional overrides for the sector thermostat.',
            homework: 'Draw a flowchart map for a thermostat controller checking window sensors, and write the rules in your Journal (+50 XP).',
            xp: 100
          },
          {
            id: 'l1-s5',
            title: 'Session 5: "The Automated Pet Grid"',
            objective: 'Distinguish counting/condition loops and prevent infinite loops in feeders.',
            activity: 'The Sneaky Cat Feeder Challenge: Design a flowchart for a feeder that dispenses food every 6 hours, blocks if the bowl is full, alerts if the cat attempts to double-eat within 5 minutes, and rings an alarm if the dog is unfed for 12 hours.',
            homework: 'Identify 3 loops in your daily life. Describe what repeats, the condition/count, and what an infinite loop would look like (+50 XP).',
            xp: 120
          }
        ]
      },
      2: {
        mainQuest: 'Operation: AI Copilot — Work alongside the city\'s central AI core to construct automation scripts for cybersecurity.',
        sessions: [
          {
            id: 'l2-s5',
            title: 'Session 5: "The AI Sandbox Duel"',
            objective: 'Use structured prompts to direct AI and iterate on specs.',
            activity: 'The One-Shot Prompt Duel: Compete to prompt the AI to build a specific mini-app in secret (e.g., a streak tracker) in one shot. Zero manual code edits.',
            homework: 'Run your prompt through a different AI model. In your Prompt Journal, document the differences, noting any ambiguity that caused divergence.',
            xp: 150
          },
          {
            id: 'l2-s6',
            title: 'Session 6: "The Obfuscation Constraint"',
            objective: 'Add new requirements without breaking existing logic.',
            activity: 'Requirement Roulette: Get a random constraint card (e.g. AI Cheat Mode: hide a secret password "xyzzy" to win immediately, but obfuscate it in the prompt so a code review won\'t easily flag it).',
            homework: 'Write 5 additional test scenarios for your project. Log pass/fail and refine the prompt for any failures.',
            xp: 150
          }
        ]
      },
      3: {
        mainQuest: 'Operation: Network Defense — Architect a decentralized database system to protect citizens\' data privacy against rogue corporations.',
        sessions: [
          {
            id: 'l3-s1',
            title: 'Session 1: "Where Does Data Live?"',
            objective: 'Understand Client-Server models, data modeling, and privacy.',
            activity: 'Design a library database schema and access rules. Classify fields (Public, Private, Sensitive) and create user role permissions.',
            homework: 'Design a database schema. Spy Mode Option: Design a self-destructing message database. List the fields (e.g. read_at, expires_in) and the purge logic.',
            xp: 200
          },
          {
            id: 'l3-s9',
            title: 'Session 9: "The Bug Bounty Fair"',
            objective: 'Practice auditing vulnerabilities and defending systems.',
            activity: 'The Bug Bounty Fair: A tournament where students act as Security Consultants. Attackers exploit classmate web apps. Defenders write patches.',
            homework: 'Fix all vulnerabilities found in your app. Document the patch in a Vulnerability Report.',
            xp: 250
          }
        ]
      },
      4: {
        mainQuest: 'Operation: Live Grid Launch — Connect, secure, and deploy a real-world web application with live database synchronicity and encrypted environment keys.',
        sessions: [
          {
            id: 'l4-s1',
            title: 'Session 1: "Connecting to the Cloud Database"',
            objective: 'Connect a React application to a remote cloud database (e.g., Supabase, Firebase) and perform CRUD operations.',
            activity: 'The Live Database Hookup: Establish a live hookup to a Supabase project. Create a "Sensor Alerts" table, write frontend logic to insert and read records, and verify real-time sync.',
            homework: 'Design a database schema for a multi-agent tracking system. List the fields (e.g., read_at, expires_in) and write SQL logic for self-destructing data tables.',
            xp: 300
          },
          {
            id: 'l4-s2',
            title: 'Session 2: "Security Keys & Environment Variables"',
            objective: 'Differentiate public/private credentials and configure environment variables to prevent API key exposure.',
            activity: 'Secret Wards Protection: Move database credentials out of codebase into a ".env.local" file. Configure ".gitignore" and verify environment-based fetching.',
            homework: 'Write a short guide explaining key exposure risks in public repositories and outline a credentials rotation checklist.',
            xp: 300
          },
          {
            id: 'l4-s5',
            title: 'Session 5: "Row-Level Security & Data Wards"',
            objective: 'Configure Row-Level Security (RLS) policies in the database to prevent unauthorized access.',
            activity: 'Wards of Data Isolation: Write SQL database policies (auth.uid() = user_id) on the "Sensor Alerts" table and verify User A receives 0 records when querying User B.',
            homework: 'Write database security policies for a shared dashboard (anyone can view, only creators can write/edit).',
            xp: 350
          }
        ]
      }
    }
  },
  mars: {
    id: 'mars',
    name: 'Mars Colonization Mission',
    description: 'Establish and defend a human colony on Mars. Optimize life support systems and control rover logic.',
    levels: {
      1: {
        mainQuest: 'Operation: Racing Car Autopilot — Construct the HTML structure, CSS styling, and JavaScript logic to drive a 2D highway avoidance racing game.',
        sessions: [
          {
            id: 'l1-s1',
            title: 'Session 1: "Atmosphere Control Automation"',
            objective: 'Design a precise oxygen regulator control instruction set.',
            activity: 'Spacesuit Operator Roleplay: Tutor-student roleplay. Student gives step-by-step instructions to spacesuit diagnostic system. System executes it literally.',
            homework: 'Complete the "Household IPO Blueprint" in the app\'s Journal tab. Choose a space colony life-support subsystem (e.g., water recycler, air regulator). Write down a step-by-step sequential algorithm for its operation. Identify inputs, processing logic, and outputs, and submit the response.',
            xp: 100
          },
          {
            id: 'l1-s2',
            title: 'Session 2: "Starting the Game: HTML Structure & Basic Elements"',
            objective: 'Understand how browsers structure documents using HTML tags and nest containers for a racing game.',
            activity: 'Create the HTML structure for the game including track container, player car container, and dashboard HUD.',
            homework: 'Create a simple HTML document containing a sidebar and main container layout representing a garage dashboard. Save to Journal under "Session 2 Homework" (+50 XP).',
            xp: 100
          },
          {
            id: 'l1-s3',
            title: 'Session 3: "Styling the Track & Player Car: CSS Lanes & Visuals"',
            objective: 'Write CSS rules using selectors (ID, Class, Element) to layout the road lanes and position the player car.',
            activity: 'Apply styles to set dimensions for the road lanes, draw dashed markers, and absolute position player and obstacle cars inside parent relative bounds.',
            homework: 'In the Journal tab under "Session 3 Homework", write a CSS stylesheet styling a grid representation of a 3-lane road with a dotted yellow center divider line (+50 XP).',
            xp: 100
          },
          {
            id: 'l1-s4',
            title: 'Session 4: "Habitat Environmental Control"',
            objective: 'Build conditional logic safety gates for the colony dome temperature.',
            activity: 'Life-Support Overrides: Program thermostat checks to shut down heater during oxygen leaks.',
            homework: 'Document the window override rules logic for Mars habitats in your Prompt Journal.',
            xp: 100
          },
          {
            id: 'l1-s5',
            title: 'Session 5: "Water Recycling Loops"',
            objective: 'Design recycling check loops that repeat until tanks are full.',
            activity: 'The Hydro-Recycling Challenge: Design a flowchart for a water filter that checks tank levels every 10 minutes and cuts off if full.',
            homework: 'List loops in life support. What happens if an infinite loop occurs in oxygen scrubbers?',
            xp: 120
          }
        ]
      },
      2: {
        mainQuest: 'Operation: Autonomous Rover — Program autonomous rover drones using prompt specifications to explore Martian valleys.',
        sessions: [
          {
            id: 'l2-s5',
            title: 'Session 5: "Rover Prompting Duel"',
            objective: 'Write structured prompt specifications to generate rover navigation code.',
            activity: 'Rover Duel: Prompt the AI to generate a navigation path finder. Compete to see whose rover avoids obstacles in one shot.',
            homework: 'Test the navigation prompt in a different AI tool. Compare path calculations.',
            xp: 150
          },
          {
            id: 'l2-s6',
            title: 'Session 6: "The Sandstorm Constraint"',
            objective: 'Inject sandstorm survival variables into the rover path logic.',
            activity: 'Requirement Roulette: Get a sandstorm card (e.g. Rover Cheat Mode: hide a secret override command to return to base immediately).',
            homework: 'Write 5 test scenarios for rover behavior during sensor lockups.',
            xp: 150
          }
        ]
      },
      3: {
        mainQuest: 'Operation: Interplanetary Communications — Architect secure API structures and sequence diagrams for Mars-Earth networks.',
        sessions: [
          {
            id: 'l3-s1',
            title: 'Session 1: "Earth Link Protocols"',
            objective: 'Understand Client-Server delays and databases on Mars.',
            activity: 'Design the database schema for colony resource inventory.',
            homework: 'Design a telemetry database. Spy Mode Option: Design secure, self-destructing communications for classified Mars research.',
            xp: 200
          },
          {
            id: 'l3-s9',
            title: 'Session 9: "Satellite Comm Wards"',
            objective: 'Audit and defend interplanetary transmission channels.',
            activity: 'Satellite Bug Bounty: Hack transmissions for data exposure bugs. Defenders must apply telemetry encryption patches.',
            homework: 'Deploy communication fixes. Write a Satellite Transmission Security report.',
            xp: 250
          }
        ]
      },
      4: {
        mainQuest: 'Operation: Mars Net Launch — Connect, secure, and deploy a real-world web application with live database synchronicity and encrypted environment keys.',
        sessions: [
          {
            id: 'l4-s1',
            title: 'Session 1: "Connecting to Mars Cloud Database"',
            objective: 'Connect a React application to a remote cloud database and execute real-time telemetry CRUD queries.',
            activity: 'The Habitat Database Hookup: Establish a live hookup to a Supabase project. Create a "Life Support Logs" table and write queries to insert and fetch logs in real-time.',
            homework: 'Design a database schema for a colony life support telemetry log. List the fields and write SQL logic for self-destructing log data.',
            xp: 300
          },
          {
            id: 'l4-s2',
            title: 'Session 2: "Mars Security Keys & Env Variables"',
            objective: 'Differentiate public/private credentials and configure environment variables to prevent API key exposure on Mars Net.',
            activity: 'Mars Communications Lockout: Move database keys out of the code into a ".env.local" file. Set up ".gitignore" and verify compilation fetches environment parameters.',
            homework: 'Write a security brief explaining key exposure risks on planetary comm networks and construct a credentials rotation guide.',
            xp: 300
          },
          {
            id: 'l4-s5',
            title: 'Session 5: "Telemetry Row-Level Security"',
            objective: 'Configure Row-Level Security (RLS) policies in the telemetry database to prevent unauthorized habitat access.',
            activity: 'Telemetry Isolation Wards: Write SQL database policies (auth.uid() = astronaut_id) on the telemetry table. Verify User A cannot read User B\'s metrics.',
            homework: 'Write database policies for shared colony status metrics (all can view, only engineers can update).',
            xp: 350
          }
        ]
      }
    }
  },
  magic: {
    id: 'magic',
    name: 'Magic Academy Chronicles',
    description: 'Master logical spell-crafting in a school of wizardry. Enchant magical items and secure cauldrons.',
    levels: {
      1: {
        mainQuest: 'Operation: Racing Car Autopilot — Construct the HTML structure, CSS styling, and JavaScript logic to drive a 2D highway avoidance racing game.',
        sessions: [
          {
            id: 'l1-s1',
            title: 'Session 1: "The Spell Book Instructions"',
            objective: 'Design a literal spell sequence that has no room for assumptions.',
            activity: 'Spellcasting & The Goblin Saboteur: Write spell instructions. The saboteur goblin tries to find loopholes to blow up the cauldron.',
            homework: 'Write instructions for your morning wand tuning. Test it on a friend.',
            xp: 100
          },
          {
            id: 'l1-s2',
            title: 'Session 2: "Starting the Game: HTML Structure & Basic Elements"',
            objective: 'Understand how browsers structure documents using HTML tags and nest containers for a racing game.',
            activity: 'Create the HTML structure for the game including track container, player car container, and dashboard HUD.',
            homework: 'Create a simple HTML document containing a sidebar and main container layout representing a garage dashboard. Save to Journal under "Session 2 Homework" (+50 XP).',
            xp: 100
          },
          {
            id: 'l1-s3',
            title: 'Session 3: "Styling the Track & Player Car: CSS Lanes & Visuals"',
            objective: 'Write CSS rules using selectors (ID, Class, Element) to layout the road lanes and position the player car.',
            activity: 'Apply styles to set dimensions for the road lanes, draw dashed markers, and absolute position player and obstacle cars inside parent relative bounds.',
            homework: 'In the Journal tab under "Session 3 Homework", write a CSS stylesheet styling a grid representation of a 3-lane road with a dotted yellow center divider line (+50 XP).',
            xp: 100
          },
          {
            id: 'l1-s4',
            title: 'Session 4: "Thermal Cauldron Runes"',
            objective: 'Design decision runes to control magical potion boilers.',
            activity: 'Boiler Potion Safety: Enchant thermostat runes to trigger fire suppression when temperatures breach.',
            homework: 'Scribble the decision diamond logic layout for wand cooling rules in your Prompt Journal.',
            xp: 100
          },
          {
            id: 'l1-s5',
            title: 'Session 5: "Mana Regeneration Loops"',
            objective: 'Design magic regen loops that run until mana is full.',
            activity: 'The Cauldron Boiler Challenge: Flowchart a potion boiler that stirs every 2 minutes and shuts off when heat threshold is met.',
            homework: 'Find loop examples in game logic. Diagram a counting loop for spell cool-downs.',
            xp: 120
          }
        ]
      },
      2: {
        mainQuest: 'Operation: Wand Enchantment — Prompt the central magic engine to script spells under strict mana constraints.',
        sessions: [
          {
            id: 'l2-s5',
            title: 'Session 5: "Magic Prompt Sandbox"',
            objective: 'Enchant wands by prompting the magic core.',
            activity: 'The Wand Duel: Prompt the AI to generate a shield charm spell in one shot without manual corrections.',
            homework: 'Test your shield charm prompt in a different magic core. Compare defense stats.',
            xp: 150
          },
          {
            id: 'l2-s6',
            title: 'Session 6: "The Cursed Constraint"',
            objective: 'Inject counters into spell logic to survive curses.',
            activity: 'Requirement Roulette: Get a curse card (e.g. Magic Backdoor: hide a secret override word to break shields immediately).',
            homework: 'Write 5 test scenarios to verify shields block normal spells and curses.',
            xp: 150
          }
        ]
      },
      3: {
        mainQuest: 'Operation: Hogwarts Security Grid — Architect database tracking systems for magical creatures and set security wards against dark magic.',
        sessions: [
          {
            id: 'l3-s1',
            title: 'Session 1: "Spell Vault Databases"',
            objective: 'Understand Client-Server magic mirrors and database structures.',
            activity: 'Design the database schema for the school vault inventory.',
            homework: 'Design a spell database. Spy Mode Option: Design a self-destructing secret scroll schema that deletes after opening.',
            xp: 200
          },
          {
            id: 'l3-s9',
            title: 'Session 9: "Ward Breakage Wards"',
            objective: 'Perform a security audit of magical defense shields.',
            activity: 'Dark Wizard Invasion: Attackers exploit flaws in classmates\' magical barrier systems. Defenders write shields patches.',
            homework: 'Repair defense shields. Write an Alchemy Ward Security audit.',
            xp: 250
          }
        ]
      },
      4: {
        mainQuest: 'Operation: Wizarding Web Grid — Connect, secure, and deploy a real-world web application with live database synchronicity and encrypted environment keys.',
        sessions: [
          {
            id: 'l4-s1',
            title: 'Session 1: "Connecting to the Magic Core Database"',
            objective: 'Connect a React application to a remote cloud database and execute real-time spell registration CRUD queries.',
            activity: 'The Spell Core Hookup: Connect the wizarding interface to a remote database project. Create a "Spell Registry" table and write queries to insert and read spells.',
            homework: 'Design a database schema for a magical creature tracking vault. List the fields and write SQL logic for self-destructing secret scrolls.',
            xp: 300
          },
          {
            id: 'l4-s2',
            title: 'Session 2: "Spell Wards & Env Variables"',
            objective: 'Differentiate public/private credentials and configure environment variables to prevent magical key exposure.',
            activity: 'Spell Scroll Protection: Move magic engine credentials out of codebase into a ".env.local" file. Set up ".gitignore" and verify env loading.',
            homework: 'Write a guide explaining credentials leak risks in scroll vaults and construct a magic key rotation checklist.',
            xp: 300
          },
          {
            id: 'l4-s5',
            title: 'Session 5: "Spell Row-Level Security Wards"',
            objective: 'Configure Row-Level Security (RLS) policies in the database to prevent dark wizards from reading private spell registries.',
            activity: 'Wards of Spell Isolation: Write SQL database policies (auth.uid() = wizard_id) on the "Spell Registry" table. Verify cross-wizard reading is blocked.',
            homework: 'Write security policies for shared wizarding academy vault records (all view, only authorized alchemists edit).',
            xp: 350
          }
        ]
      }
    }
  }
};

const S2_EXERCISES = [
  {
    num: 1,
    title: "Exercise 2.1: [Plan & Design] Game Arena Skeleton",
    problem: "Before writing HTML, you must plan the container hierarchy. The main game arena needs a parent 'game-track' and a child 'player-car'. (You're not coding yet — just sketching which box goes inside which. The '>' means 'parent contains child', borrowed from CSS.)",
    instruction: "Write a design blueprint path indicating that player-car is inside game-track. Use the format: game-track > player-car",
    preloaded: "/* Write your structural plan here: e.g. parent > child */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('game-track>player-car') || (clean.includes('game-track') && clean.includes('player-car') && clean.includes('>'));
    },
    hint: "Write 'game-track > player-car' inside the workspace."
  },
  {
    num: 2,
    title: "Exercise 2.2: [Write AI Prompt] Requesting the Track",
    problem: "Now you must instruct the AI to generate the track container exactly as planned. You don't need to know the HTML tag name yet — just describe what you want to see (a 'box' or 'container').",
    instruction: "Write an AI prompt asking to create a box (container) with an ID of 'game-track' and a class of 'game-container'. Your prompt must contain the words: 'create', a box word ('box', 'container', or 'div'), 'id', and 'game-track'.",
    preloaded: "/* Write your AI Prompt here: */",
    // The editor holds a prompt (not renderable HTML), so on Verify the preview shows
    // what the AI would generate from that prompt instead of the raw prompt text.
    previewHtml: '<div id="game-track" class="game-container"></div>',
    validate: (code) => {
      const clean = code.toLowerCase();
      const hasBoxWord = clean.includes('box') || clean.includes('container') || clean.includes('div');
      return clean.includes('create') && hasBoxWord && clean.includes('id') && clean.includes('game-track');
    },
    hint: "Describe what you want to see: a 'box' (or 'container') with the 'id' set to 'game-track'."
  },
  {
    num: 3,
    title: "Exercise 2.3: [Review & Explain] Selector Audits",
    problem: "The AI generated: `<section class='game-container' id='game-track'></section>`. Review this generated code. (This is where the vocabulary is earned: your 'box' from E2.2 became a real tag — here <section>, a box-type element; the most common box tag is <div>. From now on you can use 'div' directly.)",
    instruction: "Explain which attribute (class or id) uniquely identifies this track element. Type the exact value of that unique identifier in plain text.",
    preloaded: "/* Enter the unique identifier value: */",
    validate: (code) => {
      const clean = code.replace(/['"\s]+/g, '').toLowerCase();
      return clean.includes('game-track');
    },
    hint: "The unique identifier is the ID. Enter its value: 'game-track'."
  },
  {
    num: 4,
    title: "Exercise 2.4: [Test & Break] Spotting Rendering Leaks",
    problem: "You tested the code, but the browser layout is broken because of an unclosed tag in the AI code: `<div id=\"game-track\"><div id=\"player-car\"></div>`. (Every div you open must be closed with a </div>. This code opens two divs but closes only one, so the browser never knows where game-track ends.)",
    instruction: "Correct this broken HTML block by adding the missing closing </div> tag to clamp the track boundaries.",
    preloaded: "<div id=\"game-track\"><div id=\"player-car\"></div>",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean === '<divid="game-track"><divid="player-car"></div></div>' || clean === '<divid=\'game-track\'><divid=\'player-car\'></divid></divid>';
    },
    hint: "Add an extra '</div>' to close the game-track div."
  },
  {
    num: 5,
    title: "Exercise 2.5: [Iterate & Improve] Spawning Dividers",
    problem: "Iterate on the track design to support lanes. You need to add a divider inside the track. (A div is a blank box; CSS later shapes it into a line. We use a class — not an id — because a track has many dividers.)",
    instruction: "Nest a div element with a class of 'lane-divider' inside the '#game-track' container, directly below the player car.",
    preloaded: "<div id=\"game-track\">\n  <div id=\"player-car\"></div>\n</div>",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('<divid="game-track">') && clean.includes('<divclass="lane-divider"></div>') && clean.includes('</div></div>');
    },
    hint: "Insert '<div class=\"lane-divider\"></div>' inside the track container."
  },
  {
    num: 6,
    title: "Exercise 2.6: [Plan & Design] Dashboard HUD",
    problem: "We need a dashboard panel to render scores. Plan a 3-level deep structure, in plain language: a dashboard box holding a heading, which holds the score number. (Same blueprint-first thinking as E2.1, now three levels deep. You don't need the exact tag names yet — those come later, in E2.8.)",
    instruction: "Write the planned nested structure in plain language, using arrows to show what's inside what. Example: dashboard > heading > score number",
    preloaded: "/* Enter your nested plan: */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const hasBoxWord = clean.includes('dashboard') || clean.includes('div') || clean.includes('box') || clean.includes('container');
      const hasHeadingWord = clean.includes('heading') || clean.includes('h2') || clean.includes('title');
      const hasScoreWord = clean.includes('score') || clean.includes('number') || clean.includes('span');
      return hasBoxWord && hasHeadingWord && hasScoreWord && clean.includes('>');
    },
    hint: "Plan the nesting in plain words: 'dashboard > heading > score number'."
  },
  {
    num: 7,
    title: "Exercise 2.7: [Write AI Prompt] Score HUD Prompting",
    problem: "Write a prompt to direct the AI to generate the scoreboard HUD block. You've now learned that a 'box' is called a div, so you can use that word here. You don't need tag names for the parts inside yet — just describe them (a heading, a score area). (Only the outer box is a div — a generic panel/frame shaped by CSS. The heading becomes its own tag, h2, since it has real meaning and gets automatic styling.)",
    instruction: "Draft a prompt asking for a 'dashboard' (or 'scoreboard') box (div) that contains a heading, with a small score area (id 'score-val') inside it. Must contain: 'dashboard' or 'scoreboard', a box word ('div'/'box'/'container'), a heading word ('heading'/'h2'/'title'), and 'score-val'.",
    preloaded: "/* Write your AI Prompt here: */",
    previewHtml: '<div id="dashboard">\n  <h2>Score: <span id="score-val">0</span></h2>\n</div>',
    validate: (code) => {
      const clean = code.toLowerCase();
      const hasBoxWord = clean.includes('div') || clean.includes('box') || clean.includes('container');
      const hasHeadingWord = clean.includes('heading') || clean.includes('h2') || clean.includes('title');
      const hasDashboardWord = clean.includes('dashboard') || clean.includes('scoreboard');
      return hasDashboardWord && hasBoxWord && hasHeadingWord && clean.includes('score-val');
    },
    hint: "Ask for a 'dashboard' (or 'scoreboard') box (div) with a 'heading' and a small score area with the id 'score-val'."
  },
  {
    num: 8,
    title: "Exercise 2.8: [Review & Explain] HTML Structure Audit",
    problem: "The AI generated: `<div id=\"dashboard\"><h2>Score: <span id=\"score-val\">0</span></h2></div>`. Review this code. (Trace it left to right: <h2> opens, then <span> opens AND closes, then </h2> closes — so the span is fully nested inside the h2.)",
    instruction: "Is the span element nested inside the h2 element? Answer with YES or NO.",
    preloaded: "/* Type YES or NO: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toUpperCase();
      return clean === 'YES';
    },
    hint: "Since the <span> tag is opened and closed inside the <h2> bounds, the answer is 'YES'."
  },
  {
    num: 9,
    title: "Exercise 2.9: [Test & Break] Spotting Selector Failures",
    problem: "You test the game, but the scoreboard value never changes. The JS selector expects 'score-val', but the AI generated: `<span id=\"scoreval\">0</span>`. (A one-character mismatch means the JavaScript can't find the element — nothing errors loudly, the score just silently never updates. Names must match exactly.)",
    instruction: "Fix this selector failure by correcting the ID attribute in the code editor to match 'score-val'.",
    preloaded: "<div id=\"dashboard\">\n  <h2>Score: <span id=\"scoreval\">0</span></h2>\n</div>",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('id="score-val"') || clean.includes("id='score-val'");
    },
    hint: "Rename 'scoreval' to 'score-val' inside the span ID."
  },
  {
    num: 10,
    title: "Exercise 2.10: [Iterate & Improve] Merging the Document",
    problem: "Iterate to create the complete game structure. You must combine the dashboard and track arena blocks into a single valid file. (This assembles every piece from E2.1–E2.9 into one working file — proving you can combine parts without leaving a tag open. This becomes the real HTML skeleton the rest of Level 1 builds on.)",
    instruction: "Combine your scoreboard dashboard and game-track HTML blocks. Ensure all containers (dashboard, track, player car, divider) are present and closed.",
    preloaded: "<!-- Combine elements here: -->",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('id="dashboard"') && clean.includes('id="score-val"') && clean.includes('id="game-track"') && clean.includes('id="player-car"') && clean.includes('class="lane-divider"') && (code.match(/<\/div>/g) || []).length >= 4;
    },
    hint: "Make sure all div and span tags are closed. You should have 4 or more closing </div> tags in total."
  }
];

const S3_EXERCISES = [
  {
    num: 1,
    title: "Exercise 3.1: [Plan & Design] Dark Arena Specs",
    problem: "You are planning layout styles for the track. Identify the target values needed, in plain language — you don't need CSS units or hex codes yet. (The 390-wide width isn't arbitrary — it holds exactly 3 lanes of 130 each, math that drives every coordinate in later sessions. The color is a dark gray, later written as the hex code #333.)",
    instruction: "List the planned track arena specs in plain language: how wide, how tall, and what color. Example: 390 wide, 500 tall, dark gray.",
    preloaded: "/* Planned Width:\n   Planned Height:\n   Planned Color: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      const hasWidth = clean.includes('390') || clean.includes('wide') || clean.includes('width');
      const hasHeight = clean.includes('500') || clean.includes('tall') || clean.includes('height');
      const hasBackground = clean.includes('background') || clean.includes('gray') || clean.includes('grey') || clean.includes('dark') || clean.includes('#333');
      return hasWidth && hasHeight && hasBackground;
    },
    hint: "Describe the target in plain words: 390 wide, 500 tall, dark gray."
  },
  {
    num: 2,
    title: "Exercise 3.2: [Write AI Prompt] Styling the Track",
    problem: "Write a prompt instructing the AI to style the track. You haven't met the CSS property names yet, so just describe what you want to SEE — how wide, how tall, and what color. (The AI translates your words into real CSS properties like width, height, and background-color — you'll start writing those properties yourself in E3.4.)",
    instruction: "Draft a prompt describing the game-track box: how wide (390), how tall (500), and its background color (dark gray). Must mention 'game-track', a width ('390'/'wide'/'width'), a height ('500'/'tall'/'height'), and a background color ('background'/'gray'/'dark').",
    preloaded: "/* Write your AI Prompt here: */",
    previewCss: '#game-track {\n  width: 390px;\n  height: 500px;\n  background-color: #333;\n}',
    validate: (code) => {
      const clean = code.toLowerCase();
      const hasWidth = clean.includes('390') || clean.includes('wide') || clean.includes('width');
      const hasHeight = clean.includes('500') || clean.includes('tall') || clean.includes('height');
      const hasBackground = clean.includes('background') || clean.includes('gray') || clean.includes('grey') || clean.includes('dark') || clean.includes('#333');
      return clean.includes('game-track') && hasWidth && hasHeight && hasBackground;
    },
    hint: "Describe the 'game-track' box in plain words: 390 wide, 500 tall, with a dark gray background."
  },
  {
    num: 3,
    title: "Exercise 3.3: [Review & Explain] Selectors Review",
    problem: "Review the CSS selectors rules. We target classes with dot (.) and IDs with hash (#). (A # targets the ONE element with that id; a . targets EVERY element with that class. Mixing them up is why styles seem to 'not apply'.)",
    instruction: "Type the selector symbol used to target an ID, and the symbol used for a Class. (e.g. '#' and '.').",
    preloaded: "/* ID selector: \n   Class selector: */",
    validate: (code) => {
      return code.includes('#') && code.includes('.');
    },
    hint: "Type the '#' symbol and the '.' symbol in the editor."
  },
  {
    num: 4,
    title: "Exercise 3.4: [Test & Break] Drifting Cars Debugger",
    problem: "You run the page, but the absolute-positioned car drifts to the top of the browser screen because the parent '#game-track' lacks a positioning anchor. (An absolute-positioned child measures its offsets from the nearest positioned ancestor. Without position: relative on the parent, it measures from the whole browser window instead and flies to the corner.)",
    instruction: "Fix this coordinate anchor bug by adding 'position: relative;' to the #game-track CSS block.",
    preloaded: "#game-track {\n  width: 390px;\n  height: 500px;\n  background-color: #333;\n}",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('#game-track{') && clean.includes('position:relative');
    },
    hint: "Add position: relative; inside #game-track rules."
  },
  {
    num: 5,
    title: "Exercise 3.5: [Iterate & Improve] Dashed Lanes",
    problem: "Iterate on the highway layout to define visual lanes for steering. (height: 100% makes the divider span the full track top-to-bottom; the dashed border draws the lane line. It's a class — not an id — because a road has many dividers.)",
    instruction: "Style the '.lane-divider' class with: position absolute, height 100%, width 2px, and border-left '2px dashed white'.",
    preloaded: ".lane-divider {\n  \n}",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('.lane-divider{') && clean.includes('position:absolute') && (clean.includes('border-left:2pxdashedwhite') || clean.includes('border-left:2pxdashed#fff'));
    },
    hint: "Declare position: absolute; height: 100%; border-left: 2px dashed white; inside the selector."
  },
  {
    num: 6,
    title: "Exercise 3.6: [Plan & Design] Car Offsets",
    problem: "Plan the player car alignment offsets inside a 390px wide track container. The car needs to sit centered in the middle lane. (bottom: 20px sits the car near the bottom edge. left: 165px centers a 60px-wide car in a 390px track: (390 - 60) / 2 = 165.)",
    instruction: "List the targeted bottom offset (20px) and center-left offset (165px).",
    preloaded: "/* Bottom offset: \n   Left offset: */",
    validate: (code) => {
      return code.includes('20px') && code.includes('165px');
    },
    hint: "Specify bottom 20px and left 165px in the comments."
  },
  {
    num: 7,
    title: "Exercise 3.7: [Write AI Prompt] Positioning the Car",
    problem: "Write a prompt to instruct the AI to position the player car at bottom 20px and left 165px. (Unlike E3.2, use the real CSS term 'absolute' here — you already wrote position: relative in E3.4 and position: absolute in E3.5, so this prompt uses the vocabulary you've earned.)",
    instruction: "Draft a prompt. It must contain the words 'player-car', 'absolute', 'bottom', and 'left'.",
    preloaded: "/* Write your AI Prompt here: */",
    previewCss: '#player-car {\n  position: absolute;\n  bottom: 20px;\n  left: 165px;\n}',
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('player-car') && clean.includes('absolute') && clean.includes('bottom') && clean.includes('left');
    },
    hint: "Ask the AI to style '#player-car' using 'absolute' position with 'bottom' and 'left' offsets."
  },
  {
    num: 8,
    title: "Exercise 3.8: [Review & Explain] Bounding Boxes",
    problem: "The AI placed an obstacle car at coordinates: `top: 50px; left: 40px;`. (left: 40px is well under the track's halfway point of 195px, so it sits near the LEFT edge. This spatial reading is what you'll need for collision detection later.)",
    instruction: "Is this obstacle positioned near the LEFT or RIGHT side of the track lanes? Answer with LEFT or RIGHT.",
    preloaded: "/* Answer LEFT or RIGHT: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toUpperCase();
      return clean === 'LEFT';
    },
    hint: "A left offset of 40px is near the left edge. Answer 'LEFT'."
  },
  {
    num: 9,
    title: "Exercise 3.9: [Test & Break] Invisible Elements",
    problem: "You tested the code, but the restart panel is hidden by default. The AI code has: `.hidden { display: none; }`. (display: none removes an element completely — useful once the game is finished, but a problem while you're building and need to SEE it. 'Invisible' is often a style choice, not a missing element.)",
    instruction: "Fix this issue for layout testing. Temporarily override display to flex in the editor to make it visible.",
    preloaded: ".hidden {\n  display: none;\n}",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('.hidden{') && clean.includes('display:flex');
    },
    hint: "Change 'display: none;' to 'display: flex;' inside the .hidden rule."
  },
  {
    num: 10,
    title: "Exercise 3.10: [Iterate & Improve] HUD Flex Alignment",
    problem: "Iterate on the scoreboard dashboard styles to align scores horizontally. (display: flex lays the dashboard's children side by side; justify-content: space-between pushes them to opposite ends; padding adds breathing room.)",
    instruction: "Select '#dashboard' and style it using flexbox layout: display flex, justify-content space-between, and padding 10px.",
    preloaded: "#dashboard {\n  \n}",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('#dashboard{') && clean.includes('display:flex') && clean.includes('justify-content:space-between');
    },
    hint: "Add display: flex; justify-content: space-between; and padding: 10px; to the dashboard rules."
  }
];

const S4_EXERCISES = [
  {
    num: 1,
    title: "Exercise 4.1: [Plan & Design] The Variable Registry",
    problem: "Before writing any code, plan which game values need to change during play and which stay fixed forever. (Values that change — the car's position, speed, score — become 'let' variables; values fixed for the whole game, like a lane's width, become 'const'. Sorting them now prevents accidentally overwriting a constant later.)",
    instruction: "In plain language, list which game values CHANGE during play and which stay FIXED. Example: changing — car position, speed, score, game-running; fixed — lane width. (The technical form 'let ... | const ...' is also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      const hasChanging = clean.includes('chang') || clean.includes('vary') || clean.includes('update') || clean.includes('let');
      const hasFixed = clean.includes('fixed') || clean.includes('stay') || clean.includes('same') || clean.includes('never') || clean.includes('const');
      const namesValues = clean.includes('speed') || clean.includes('score') || clean.includes('car') || clean.includes('position');
      return hasChanging && hasFixed && namesValues;
    },
    hint: "In plain words: changing — car position, speed, score, game-running; fixed — lane width."
  },
  {
    num: 2,
    title: "Exercise 4.2: [Write AI Prompt] Requesting the Declarations",
    problem: "Now instruct the AI to write the actual variable declaration block. (You supply the starting values and which ones change; the AI turns that into real let/const lines — which you'll read and verify in the next step, never just trust.)",
    instruction: "Write a prompt asking to declare mutable variables carX (initial 165), speed (initial 0), score (initial 0), and gameActive (initial false), plus a constant LANE_WIDTH. Your prompt must contain 'let', 'const', 'carX', and '165'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('let') && clean.includes('const') && clean.includes('carx') && clean.includes('165');
    },
    hint: "Mention 'let', 'const', 'carX', and '165' in your prompt."
  },
  {
    num: 3,
    title: "Exercise 4.3: [Review & Explain] Reading Data Types",
    problem: `The AI generated: let score = 0;. Review this declaration. (A bare 0 with no quotes is a Number — the browser can do math on it. Wrap it in quotes as "0" and it silently becomes a String (text), which breaks arithmetic — exactly the trap in E4.4.)`,
    instruction: "What data type is the value 0? Type Number, String, or Boolean.",
    preloaded: "/* Type the data type: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toUpperCase();
      return clean === 'NUMBER';
    },
    hint: "0 with no quotes around it is a 'Number'."
  },
  {
    num: 4,
    title: "Exercise 4.4: [Test & Break] The Quoted Number Bug",
    problem: `Bug: the AI generated let speed = "0"; — the quotes make speed a String, not a Number. (Everything looks fine until you do math: adding to a String glues text together instead of counting — you'll watch that failure happen live in E4.9.)`,
    instruction: "Fix the declaration so speed is a real Number, not a quoted string.",
    preloaded: 'let speed = "0";',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return (clean.includes('letspeed=0;') || clean.includes('letspeed=0')) && !clean.includes('"0"') && !clean.includes("'0'");
    },
    hint: `Remove the quotes: let speed = 0;`
  },
  {
    num: 5,
    title: "Exercise 4.5: [Iterate & Improve] Adding the Game State Flag",
    problem: "Iterate on your fixed declarations to add the missing game-state flag. (gameActive is a Boolean — a true/false switch. From Session 9 on, the game loop checks this one flag every frame to decide whether to keep running or stop.)",
    instruction: "Add a boolean variable gameActive initialized to false.",
    preloaded: 'let speed = 0;\nlet score = 0;',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('gameactive=false');
    },
    hint: "Add: let gameActive = false;"
  },
  {
    num: 6,
    title: "Exercise 4.6: [Plan & Design] Planning the Math Updates",
    problem: "Plan how score and speed will change during gameplay. (score++ adds 1 — shorthand for score = score + 1; speed += 10 adds 10. These are the exact increments the game runs each time you dodge an obstacle or speed up.)",
    instruction: "In plain language, say how score and speed change during play. Example: score goes up by 1 each time, speed goes up by 10. (The shorthand 'score++ | speed += 10' is also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const compact = code.replace(/\s+/g, '').toLowerCase();
      const tech = (compact.includes('score++') || compact.includes('score+=1')) && compact.includes('speed+=10');
      const clean = code.toLowerCase();
      const plain = clean.includes('score') && clean.includes('speed') && (clean.includes('up') || clean.includes('increase') || clean.includes('add') || clean.includes('plus') || clean.includes('+')) && clean.includes('10');
      return tech || plain;
    },
    hint: "In plain words: score goes up by 1 each time; speed goes up by 10."
  },
  {
    num: 7,
    title: "Exercise 4.7: [Write AI Prompt] Requesting the Math Statements",
    problem: "Instruct the AI to write the increment statements. (console.log prints a value into the browser's console — a developer's window into what the code is really doing, so you can confirm the numbers actually change.)",
    instruction: "Write a prompt asking for statements that increment score by 1 and speed by 10, then log both values to the console. Your prompt must contain 'score', 'speed', and 'console.log'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('score') && clean.includes('speed') && clean.includes('console.log');
    },
    hint: "Mention 'score', 'speed', and 'console.log' in your prompt."
  },
  {
    num: 8,
    title: "Exercise 4.8: [Review & Explain] Predicting the Output",
    problem: `The AI generated: let speed = 0; speed += 10;. Review this code. (Predicting a result by reading code — before running it — is the core Review skill: speed starts at 0, then += 10 adds 10 to it.)`,
    instruction: "After this code runs, what is the value of speed? Type a number.",
    preloaded: "/* Type a number: */",
    validate: (code) => {
      const clean = code.replace(/[^0-9]/g, '');
      return clean === '10';
    },
    hint: "0 + 10 = 10 — type '10'."
  },
  {
    num: 9,
    title: "Exercise 4.9: [Test & Break] The String Concatenation Trap",
    problem: `Bug: speed was declared as let speed = "10"; (a string). Running speed += 5; produces "105" instead of 15. (With a String, += glues "5" onto the end as text → "105". Same root cause as E4.4's quoted number, now visibly wrong — this is why data types matter.)`,
    instruction: "Fix the original declaration so speed is a Number, making speed += 5 produce 15 as expected.",
    preloaded: 'let speed = "10";\nspeed += 5;',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('letspeed=10;') && !clean.includes('"10"') && !clean.includes("'10'");
    },
    hint: `Remove the quotes from the original declaration: let speed = 10;`
  },
  {
    num: 10,
    title: "Exercise 4.10: [Iterate & Improve] The Complete Variable Registry",
    problem: "Combine every piece from this session into the final variable registry and math block. (This is the real starting point of game.js that every later session builds on — get the types right here and steering, scoring, and the game loop all receive correct data to work with.)",
    instruction: "Write the complete code: declare carX, speed, score, gameActive (all correct Number/Boolean types, no quoted numbers), plus a LANE_WIDTH constant, then increment score by 1 and speed by 10.",
    preloaded: "/* Write the complete variable registry here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('let') && clean.includes('const') && clean.includes('carx') && clean.includes('gameactive') && (clean.includes('score++') || clean.includes('score+=1')) && clean.includes('speed+=10');
    },
    hint: "Your code needs: let/const declarations for carX/speed/score/gameActive/LANE_WIDTH, plus score++ and speed += 10."
  }
];

// Escape a snippet so it renders as visible source code, not as live elements.
function escapeHtmlSource(html) {
  return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Panel shown inside a prompt-step preview. The preview always sits one execution step
// ahead of the Code Editor: on a PROMPT step, the editor holds a prompt, so the preview's
// job is to reveal the source CODE the AI would generate from it (once Verify passes).
// Before Verify it just nudges the student to write their prompt and check it.
function promptPreviewPanel(codeSource, success, fileLabel) {
  if (!success) {
    return '<div style="color:#8899aa;font-family:monospace;padding:20px;text-align:center;line-height:1.6;">✍️ This step is a prompt.<br/>Write your prompt, then click <b>Verify</b> to see the ' + fileLabel + ' code the AI generates.</div>';
  }
  return '<div style="color:#8899aa;font-family:monospace;font-size:0.72rem;margin-bottom:6px;">✓ ' + fileLabel + ' — code the AI generated from your prompt:</div>'
    + '<pre style="margin:0;background:#0d1526;border:1px solid #22314f;border-radius:4px;padding:12px;color:#00ffcc;font-family:monospace;font-size:0.85rem;white-space:pre-wrap;word-break:break-word;">'
    + escapeHtmlSource(codeSource)
    + '</pre>';
}

// Body for the S2 HTML "Interactive Live Preview" iframe:
//   - Prompt step (ex.previewHtml set): show the generated HTML source (revealed on Verify).
//   - Code step (no previewHtml): the editor holds real HTML, so RENDER it live.
function buildHtmlPreviewBody(ex, codeInput, success) {
  return ex.previewHtml ? promptPreviewPanel(ex.previewHtml, success, 'index.html') : codeInput;
}

// Canned "finished look" CSS for the S2 HTML sandbox preview and the Project Journal's
// milestone Target Outcome preview. Session 2 only teaches HTML structure (no CSS yet),
// so this pre-styles the known game elements (track, car, dashboard, lane-divider) to give
// students a recognizable visual — a sneak peek of the styling Session 3 formally teaches.
const S2_PREVIEW_STYLE_CSS = `
  body { margin: 0; padding: 10px; background: #060814; color: #fff; font-family: monospace; font-size: 0.85rem; }
  #game-track {
    position: relative;
    width: 100%;
    height: 140px;
    background-color: #222;
    border: 3px solid #ffcc00;
    margin: 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #player-car {
    position: absolute;
    bottom: 10px;
    left: 45%;
    width: 30px;
    height: 50px;
    background-color: #ff4d4d;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  .obstacle {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 25px;
    height: 40px;
    background-color: #00e5ff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
  #obstacle-2 {
    left: 140px;
    background-color: #ff9f43;
  }
  #dashboard {
    padding: 8px;
    background-color: #1a1a2e;
    border-radius: 6px;
    text-align: center;
    border: 1px solid #333;
  }
  h2 { margin: 0; font-size: 1rem; color: #00ffcc; }
  .lane-divider {
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    border-left: 2px dashed #ffffff;
  }
  .hidden { display: none !important; }
`;

// Compact variant of S2_PREVIEW_STYLE_CSS for the Project Journal's small Target Outcome
// thumbnail. A plain height clamp on the iframe would CROP content instead of shrinking it
// (an iframe doesn't scale its document to fit), so this scales every vertical dimension down
// proportionally — the whole scene (dashboard + track + car) fits within ~100px, uncropped.
const S2_PREVIEW_STYLE_CSS_MINI = `
  body { margin: 0; padding: 4px; background: #060814; color: #fff; font-family: monospace; font-size: 0.55rem; }
  #game-track {
    position: relative;
    width: 100%;
    height: 62px;
    background-color: #222;
    border: 2px solid #ffcc00;
    margin: 4px 0;
    overflow: hidden;
  }
  #player-car {
    position: absolute;
    bottom: 4px;
    left: 45%;
    width: 15px;
    height: 22px;
    background-color: #ff4d4d;
    border-radius: 2px;
  }
  .obstacle {
    position: absolute;
    top: 6px;
    left: 8px;
    width: 12px;
    height: 18px;
    background-color: #00e5ff;
    border-radius: 2px;
  }
  #obstacle-2 {
    left: 62px;
    background-color: #ff9f43;
  }
  #dashboard {
    padding: 3px;
    background-color: #1a1a2e;
    border-radius: 4px;
    text-align: center;
    border: 1px solid #333;
  }
  h2 { margin: 0; font-size: 0.6rem; color: #00ffcc; }
  .lane-divider {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    border-left: 1px dashed #ffffff;
  }
  .hidden { display: none !important; }
`;

// Fixed markup the S3 CSS sandbox styles. On a code step the student's CSS (or, once
// merged in later sessions, the game's CSS) applies to this skeleton and renders live.
const S3_PREVIEW_SKELETON = `
  <div id="dashboard">
    <h2>Score: <span id="score-val">0</span></h2>
  </div>
  <div id="game-track">
    <div class="lane-divider" style="left: 130px; height: 100%;"></div>
    <div class="lane-divider" style="left: 260px; height: 100%;"></div>
    <div id="player-car">🏎️</div>
    <div id="obstacle-1" class="obstacle">🚗</div>
    <div id="obstacle-2" class="obstacle">🚘</div>
  </div>
`;

// Shared live-execution iframe for the Level 1 JS Sandboxes (Sessions 4-8+).
// Unlike the S2/S3 HTML/CSS previews (which just re-render static markup), this
// actually runs the student's typed JavaScript against the racing game DOM inside
// the iframe, and forwards console.log()/runtime errors back to the parent via
// postMessage so they can be shown in the terminal log panel.
function buildJsSandboxPreview(studentCode) {
  return `
    <html>
      <head>
        <style>
          body { margin: 0; padding: 10px; background: #060814; color: #fff; font-family: monospace; font-size: 0.85rem; }
          #dashboard { padding: 8px; background-color: #1a1a2e; border-radius: 6px; text-align: center; border: 1px solid #333; margin-bottom: 10px; }
          h2 { margin: 0; font-size: 1rem; color: #00ffcc; }
          #game-track { position: relative; width: 100%; height: 260px; background-color: #222; border: 3px solid #ffcc00; overflow: hidden; }
          .lane-divider { position: absolute; top: 0; height: 100%; width: 2px; border-left: 2px dashed #ffffff; }
          #player-car { position: absolute; bottom: 20px; width: 30px; height: 50px; background-color: #ff4d4d; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; transition: left 0.15s ease; z-index: 2; }
          #obstacle { position: absolute; top: -100px; width: 25px; height: 40px; background-color: #ff9f43; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 1rem; z-index: 1; }
          #restart-panel { position: absolute; inset: 0; background: rgba(0,0,0,0.75); display: flex; align-items: center; justify-content: center; color: #ff4d4d; font-weight: bold; text-align: center; z-index: 3; }
          .hidden { display: none !important; }
          #console-hint { padding: 6px 2px 0 2px; font-size: 0.65rem; color: #666; }
        </style>
      </head>
      <body tabindex="0">
        <div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div>
        <div id="game-track">
          <div class="lane-divider" style="left: 130px;"></div>
          <div class="lane-divider" style="left: 260px;"></div>
          <div id="player-car" style="left: 165px;">🏎️</div>
          <div id="obstacle" style="left: 165px;">🚧</div>
          <div id="restart-panel" class="hidden">GAME OVER<br/>Press Space to Restart</div>
        </div>
        <div id="console-hint">Click inside this preview, then press ArrowLeft / ArrowRight to test your code live.</div>
        <script>
          window.onerror = function(msg) {
            parent.postMessage({ __sim: true, type: 'error', text: String(msg) }, '*');
            return true;
          };
          var _origLog = console.log;
          console.log = function() {
            var args = Array.prototype.slice.call(arguments);
            parent.postMessage({ __sim: true, type: 'log', text: args.map(String).join(' ') }, '*');
            _origLog.apply(console, args);
          };
          var carX = 165;
          try {
            ${studentCode}
          } catch (e) {
            parent.postMessage({ __sim: true, type: 'error', text: e.message }, '*');
          }
        </script>
      </body>
    </html>
  `;
}

const S5_EXERCISES = [
  {
    num: 1,
    title: "Exercise 5.1: [Plan & Design] Reading the Key Pressed",
    problem: "Before writing any JavaScript, plan how the browser will tell you which key the player pressed. (Every keypress fires a 'keydown' event, and the browser hands your code an event object with the exact key name on its .key property — that one fact is what this whole session depends on.)",
    instruction: "In plain language, describe how the browser tells you which key was pressed. Example: when a key is pressed, the keydown event reports which key it was. (The 'keydown > event.key' form is also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const compact = code.toLowerCase().replace(/\s+/g, '');
      const tech = compact.includes('keydown') && (compact.includes('event.key') || compact.includes('e.key') || compact.includes('>key'));
      const clean = code.toLowerCase();
      const plain = (clean.includes('press') || clean.includes('keydown') || clean.includes('key down')) && clean.includes('key');
      return tech || plain;
    },
    hint: "In plain words: when a key is pressed, the keydown event reports which key it was."
  },
  {
    num: 2,
    title: "Exercise 5.2: [Write AI Prompt] Requesting the Listener",
    problem: "Now instruct the AI to generate the keydown listener. (addEventListener tells the browser 'run my function every time this happens' — it's how code reacts to the player continuously instead of running once and stopping.)",
    instruction: "Write a prompt asking to bind a keydown event listener to the window that logs the pressed key to the console. Your prompt must contain the words 'addEventListener', 'keydown', and 'console.log'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('addeventlistener') && clean.includes('keydown') && clean.includes('console.log');
    },
    hint: "Ask for 'addEventListener', a 'keydown' event, and a 'console.log' of the key."
  },
  {
    num: 3,
    title: "Exercise 5.3: [Review & Explain] The Event Parameter",
    problem: `The AI generated: window.addEventListener("keydown", function(event) { console.log(event.key); });. Review this code. (The word in the parentheses — event — is the callback's parameter: the browser fills it with a fresh object describing each keypress, and event.key holds the name of the key that was pressed.)`,
    instruction: "Which parameter of the callback function carries information about which key was pressed? Type the parameter name.",
    preloaded: "/* Type the parameter name: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toLowerCase();
      return clean === 'event' || clean === 'e';
    },
    hint: "The callback's parameter is named 'event' — type 'event'."
  },
  {
    num: 4,
    title: "Exercise 5.4: [Test & Break] The Silent Input Fail",
    runnable: true,
    problem: `The listener checks if (event.key === "left") but nothing happens when ArrowLeft is pressed. (Browsers report the arrow keys as the exact strings "ArrowLeft"/"ArrowRight" — not "left". One wrong string makes the comparison silently always-false, so the branch never runs and no error appears.)`,
    instruction: "Fix the broken key-string comparison so it correctly checks for the exact key name the browser actually reports.",
    preloaded: 'if (event.key === "left") {\n  carX -= 130;\n}',
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('event.key==="ArrowLeft"') && clean.includes('carX-=130');
    },
    hint: `Browsers report the left arrow key as the exact string "ArrowLeft", not "left".`
  },
  {
    num: 5,
    title: "Exercise 5.5: [Iterate & Improve] Logging the Other Direction",
    runnable: true,
    problem: "Extend your fixed listener to also acknowledge ArrowRight presses. (An else-if adds a second, mutually-exclusive branch: the browser tests ArrowLeft first, and only if that fails does it check ArrowRight — the standard shape for handling several keys.)",
    instruction: `Add an else-if branch checking for "ArrowRight" that logs "Steering right" to the console.`,
    preloaded: 'if (event.key === "ArrowLeft") {\n  carX -= 130;\n}',
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('arrowright') && clean.includes('console.log');
    },
    hint: `Add: else if (event.key === "ArrowRight") { console.log("Steering right"); }`
  },
  {
    num: 6,
    title: "Exercise 5.6: [Plan & Design] Steering Deltas",
    problem: "Plan the exact coordinate deltas for steering the car between lanes. (Lanes are 130px apart, so one press should shift carX by exactly one lane: −130 to go left, +130 to go right. Fixing the number now keeps the car snapping cleanly to lanes instead of drifting.)",
    instruction: "In plain language, say how far the car moves each press. Example: left press moves the car 130 to the left; right press moves it 130 to the right. (The 'carX -= 130 | carX += 130' form is also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const compact = code.replace(/\s+/g, '').toLowerCase();
      const tech = compact.includes('carx-=130') && compact.includes('carx+=130');
      const clean = code.toLowerCase();
      const plain = clean.includes('left') && clean.includes('right') && clean.includes('130');
      return tech || plain;
    },
    hint: "In plain words: left press moves the car 130 left; right press moves it 130 right."
  },
  {
    num: 7,
    title: "Exercise 5.7: [Write AI Prompt] Wiring Movement to the DOM",
    problem: "Instruct the AI to connect the steering logic to the visible player car element. (Updating carX only changes a number in memory — nothing moves until you also write that number into the element's style.left, which is what actually repositions the car on screen.)",
    instruction: "Write a prompt asking to update '#player-car' style.left to match carX whenever ArrowLeft or ArrowRight is pressed. Your prompt must contain 'carX', 'style.left', 'ArrowLeft', and 'ArrowRight'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('carx') && clean.includes('style.left') && clean.includes('arrowleft') && clean.includes('arrowright');
    },
    hint: "Mention carX, style.left, ArrowLeft, and ArrowRight in your prompt."
  },
  {
    num: 8,
    title: "Exercise 5.8: [Review & Explain] Why 'px'?",
    problem: `The AI generated: carElement.style.left = carX + "px";. Review this line. (CSS position values need a unit. carX is a bare number like 165; gluing "px" onto it makes the string "165px", which is what the browser's style engine actually understands.)`,
    instruction: "Why does the code concatenate the string \"px\" onto the carX number? Type the one-word CSS unit being appended.",
    preloaded: "/* Type the unit: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toLowerCase();
      return clean === 'px';
    },
    hint: `CSS position values require a unit — type 'px'.`
  },
  {
    num: 9,
    title: "Exercise 5.9: [Test & Break] The Missing Unit",
    runnable: true,
    problem: `Bug: carElement.style.left = carX; (missing the "px" unit) makes the car vanish from the game track. (A unit-less number is invalid CSS, so the browser ignores the whole rule and the car snaps back to its default spot — another silent failure with no error message.)`,
    instruction: "Fix the assignment so it appends the required unit string to carX.",
    preloaded: 'let carElement = document.getElementById("player-car");\ncarElement.style.left = carX;',
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('style.left=carx+"px"') || clean.includes("style.left=carx+'px'");
    },
    hint: `Change it to: carElement.style.left = carX + "px";`
  },
  {
    num: 10,
    title: "Exercise 5.10: [Iterate & Improve] The Complete Steering Handler",
    runnable: true,
    problem: "Combine every piece from this session into one working keydown handler. (This is the real steering control the rest of the game reuses — bind the listener, branch on the key, update carX, and write it back to style.left, all in one place.)",
    instruction: "Write the complete handler: bind the keydown listener, branch on ArrowLeft/ArrowRight, update carX, and write the new position to '#player-car' style.left.",
    preloaded: "/* Write the complete handler here */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('addeventlistener') && clean.includes('keydown') && clean.includes('arrowleft') && clean.includes('arrowright') && clean.includes('carx') && clean.includes('style.left');
    },
    hint: "Your handler needs: addEventListener, 'keydown', ArrowLeft/ArrowRight checks, carX updates, and a style.left write."
  }
];

const S6_EXERCISES = [
  {
    num: 1,
    title: "Exercise 6.1: [Plan & Design] Track Boundary Coordinates",
    problem: "Plan the left and right lane coordinates the car must never cross. The three lane positions are 35px, 165px, and 295px (car starts centered at 165). (A boundary guard needs just two numbers: the smallest and largest carX the car may reach. Anything between is a valid lane; outside means driving off the road.)",
    instruction: "In plain language, name the leftmost and rightmost positions the car may reach. Example: the car can go from 35 on the left to 295 on the right.",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('35') && clean.includes('295');
    },
    hint: "In plain words: leftmost position 35, rightmost position 295."
  },
  {
    num: 2,
    title: "Exercise 6.2: [Write AI Prompt] Requesting the Left Guard",
    problem: "Instruct the AI to add a safety guard preventing the car from steering off the left edge. (A guard is just an if-check wrapped around the movement: only run carX -= 130 while carX is still greater than the left limit, so the move is refused at the edge.)",
    instruction: "Write a prompt asking to wrap the ArrowLeft movement in a conditional that only allows carX to decrease if carX is greater than 35 (the leftmost lane). Your prompt must contain 'carX', 'ArrowLeft', and '> 35'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('carx') && clean.includes('arrowleft') && clean.includes('>35');
    },
    hint: "Mention carX, ArrowLeft, and the condition '> 35'."
  },
  {
    num: 3,
    title: "Exercise 6.3: [Review & Explain] Reading the Guard Condition",
    problem: `The AI generated: if (event.key === "ArrowLeft") { if (carX > 35) { carX -= 130; } }. Review this code. (Read it as a nested gate: the outer if checks the key, the inner if checks the boundary. Both must be true for the car to move — when carX is already 35, the inner test fails and the move is skipped.)`,
    instruction: "What happens to the movement if carX is already 35 (leftmost lane) and ArrowLeft is pressed again? Type MOVES or BLOCKED.",
    preloaded: "/* Type MOVES or BLOCKED: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toUpperCase();
      return clean === 'BLOCKED';
    },
    hint: "Since 'carX > 35' is false when carX is 35, the inner block never runs — type 'BLOCKED'."
  },
  {
    num: 4,
    title: "Exercise 6.4: [Test & Break] The Infinite Teleporting Bug",
    runnable: true,
    problem: `The tutor changed the boundary check from carX > 35 to carX >= -130, and the car teleports off-screen when ArrowLeft is held. Try it live: click the preview and hold ArrowLeft. (A too-loose limit still passes the check far past the edge, so carX keeps subtracting into negative pixels — the guard exists, but it points at the wrong number.)`,
    instruction: "Fix the comparison operator and value so the car cannot move past the leftmost lane (35).",
    preloaded: 'window.addEventListener("keydown", function(event) {\n  if (event.key === "ArrowLeft") {\n    if (carX >= -130) {\n      carX -= 130;\n      document.getElementById("player-car").style.left = carX + "px";\n    }\n  }\n});',
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('carX>35') && !clean.includes('carX>=-130');
    },
    hint: "Change the guard back to 'carX > 35'."
  },
  {
    num: 5,
    title: "Exercise 6.5: [Iterate & Improve] Adding the Right Guard",
    runnable: true,
    problem: "Iterate to also guard the right boundary, mirroring the left-side logic. (The right guard is the mirror image: only allow carX += 130 while carX is still less than the rightmost lane (295), so the car locks at the right edge the same way it locks at the left.)",
    instruction: "Add an else-if branch for ArrowRight that only allows carX to increase if carX is less than 295 (the rightmost lane).",
    preloaded: 'window.addEventListener("keydown", function(event) {\n  if (event.key === "ArrowLeft") {\n    if (carX > 35) {\n      carX -= 130;\n      document.getElementById("player-car").style.left = carX + "px";\n    }\n  }\n});',
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('ArrowRight') && clean.includes('carX<295') && clean.includes('carX+=130');
    },
    hint: `Add: else if (event.key === "ArrowRight") { if (carX < 295) { carX += 130; document.getElementById("player-car").style.left = carX + "px"; } }`
  },
  {
    num: 6,
    title: "Exercise 6.6: [Plan & Design] Overheat Threshold Rule",
    problem: "Plan a second safety rule: the car's speed must never exceed a safe overheat threshold. (Same guard pattern as the lane limits, applied to speed instead of position: if speed climbs past 120, clamp it back to 100 — a rule that keeps the game from becoming unplayably fast.)",
    instruction: "In plain language, state the overheat rule. Example: if speed goes over 120, reset it back to 100. (The 'IF speed > 120 THEN speed = 100' form is also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const compact = code.replace(/\s+/g, '').toLowerCase();
      const tech = compact.includes('speed>120') && compact.includes('speed=100');
      const clean = code.toLowerCase();
      const plain = clean.includes('speed') && clean.includes('120') && clean.includes('100');
      return tech || plain;
    },
    hint: "In plain words: if speed goes over 120, reset it to 100."
  },
  {
    num: 7,
    title: "Exercise 6.7: [Write AI Prompt] Requesting the Overheat Guard",
    problem: "Instruct the AI to implement the overheat clamp. (Describe the exact numbers — the trigger threshold (120) and the reset value (100) — plus a warning log, so the AI's condition matches your plan precisely.)",
    instruction: "Write a prompt asking for a conditional check: if speed is greater than 120, reset it to 100 and log a warning. Your prompt must contain 'speed', '120', and '100'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('speed') && clean.includes('120') && clean.includes('100');
    },
    hint: "Mention speed, 120, and 100 in your prompt."
  },
  {
    num: 8,
    title: "Exercise 6.8: [Review & Explain] Boundary-Value Precision",
    problem: `The AI generated: if (speed > 120) { speed = 100; }. Review this rule. (The operator matters at the edge: > is a strict greater-than, so exactly 120 does not trigger it. Off-by-one boundary bugs live right here — the operator (>, >=) and the exact threshold value must both match the intended rule.)`,
    instruction: "If speed is exactly 120, does this rule trigger? Type YES or NO.",
    preloaded: "/* Type YES or NO: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toUpperCase();
      return clean === 'NO';
    },
    hint: "'>' is a strict greater-than check, so exactly 120 does NOT trigger it — type 'NO'."
  },
  {
    num: 9,
    title: "Exercise 6.9: [Test & Break] The Mars Climate Mismatch",
    runnable: true,
    problem: `Bug: the guard was written as if (speed > 120) { speed = "100"; } — the reset value is a string, not a number. (Resetting to the String "100" re-introduces the Session 4 type bug: the next speed += math would glue text instead of adding — a clamp that quietly breaks arithmetic.)`,
    instruction: "Fix the reset assignment so speed becomes the Number 100, not the String \"100\".",
    preloaded: 'if (speed > 120) {\n  speed = "100";\n}',
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('speed=100') && !clean.includes('speed="100"') && !clean.includes("speed='100'");
    },
    hint: `Remove the quotes: speed = 100;`
  },
  {
    num: 10,
    title: "Exercise 6.10: [Iterate & Improve] The Complete Boundary System",
    runnable: true,
    problem: "Combine every guard from this session into one complete safety system. (Left lane guard, right lane guard, and overheat clamp together — the full set of rules that keep carX and speed inside safe, playable limits.)",
    instruction: "Write the complete conditional block: left/right lane guards on carX (35/295) plus the overheat guard on speed (120 -> 100).",
    preloaded: "/* Write the complete safety system here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('carX>35') && clean.includes('carX<295') && clean.includes('speed>120') && clean.includes('speed=100');
    },
    hint: "Your code needs all four checks: carX > 35, carX < 295, speed > 120, and speed = 100."
  }
];

const S7_EXERCISES = [
  {
    num: 1,
    title: "Exercise 7.1: [Plan & Design] Marker Spacing Plan",
    problem: "Plan how 5 highway lane markers should be spaced vertically down the track. (A loop that repeats a task needs two numbers: how many times to run (5 markers) and the step between each (120px down). Those two values drive the whole loop.)",
    instruction: "In plain language, plan how many markers and how far apart. Example: 5 markers, spaced 120 apart.",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('5') && clean.includes('120');
    },
    hint: "In plain words: 5 markers, 120 apart."
  },
  {
    num: 2,
    title: "Exercise 7.2: [Write AI Prompt] Requesting the Loop",
    problem: "Instruct the AI to generate the marker-spawning loop. (A for loop repeats a block a fixed number of times; the counter i (0,1,2,3,4) feeds the formula i * 120 to place each marker further down — so one small block builds all 5.)",
    instruction: "Write a prompt asking for a 'for' loop that runs 5 times, calculating markerY as i * 120 on each iteration. Your prompt must contain 'for loop', 'i * 120', and '5'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('forloop') && clean.includes('i*120') && clean.includes('5');
    },
    hint: "Mention a 'for loop', the formula 'i * 120', and running it '5' times."
  },
  {
    num: 3,
    title: "Exercise 7.3: [Review & Explain] Loop Anatomy",
    problem: `The AI generated: for (let i = 0; i < 5; i++) { let markerY = i * 120; }. Review this loop header. (A for header has three parts split by semicolons: start (let i = 0), keep-going test (i < 5), and the step after each pass (i++). Miss the third and the loop never advances.)`,
    instruction: "Which part of the loop header increases 'i' after each pass? Type the exact expression (e.g. i++).",
    preloaded: "/* Type the update expression: */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('i++');
    },
    hint: "The update expression is 'i++'."
  },
  {
    num: 4,
    title: "Exercise 7.4: [Test & Break] Browser Freezes",
    // Deliberately NOT runnable: the seeded bug is a missing loop increment (infinite loop),
    // and actually executing it live in the iframe would hang the preview instead of teaching.
    problem: `Bug: the tutor removed the increment, leaving for (let i = 0; i < 5; ) { let markerY = i * 120; } — the browser freezes. (With no i++, i stays 0 forever, so i < 5 is always true and the loop never ends — an infinite loop that locks the whole page. This step is deliberately not runnable, so the preview won't hang.)`,
    instruction: "Restore the missing increment so the loop actually terminates after 5 passes.",
    preloaded: "for (let i = 0; i < 5; ) {\n  let markerY = i * 120;\n}",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('i<5;i++') || clean.includes('i<5;i+=1');
    },
    hint: "Add 'i++' as the third part of the for-loop header."
  },
  {
    num: 5,
    title: "Exercise 7.5: [Iterate & Improve] Logging Each Marker",
    problem: "Iterate on the fixed loop to also log each marker's computed position. (Logging inside the loop prints one line per pass — the fastest way to confirm the loop really runs 5 times and computes 0, 120, 240, 360, 480 as expected.)",
    instruction: `Inside the loop body, add a console.log that prints "Highway Marker position: " followed by markerY.`,
    preloaded: "for (let i = 0; i < 5; i++) {\n  let markerY = i * 120;\n}",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('console.log') && clean.includes('markery');
    },
    hint: `Add: console.log("Highway Marker position: " + markerY);`
  },
  {
    num: 6,
    title: "Exercise 7.6: [Plan & Design] Rendering the Markers",
    problem: "Plan how each computed marker position becomes a visible element on the track. (Computing markerY is only half the job — each pass must also create a real div, place it at that Y, and attach it to the track so it actually appears on screen.)",
    instruction: "In plain language, plan how each computed position becomes a visible element. Example: for each marker, create a box, give it the marker-dash style, and place it at its top position. (create div > class marker-dash > style.top = markerY also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const compact = code.replace(/\s+/g, '').toLowerCase();
      const tech = compact.includes('marker-dash') && compact.includes('markery');
      const clean = code.toLowerCase();
      const plain = (clean.includes('div') || clean.includes('box') || clean.includes('element')) && (clean.includes('marker') || clean.includes('dash')) && (clean.includes('top') || clean.includes('position') || clean.includes('place') || clean.includes('height'));
      return tech || plain;
    },
    hint: "In plain words: for each marker, create a box and place it at its computed top position."
  },
  {
    num: 7,
    title: "Exercise 7.7: [Write AI Prompt] Requesting the DOM Append",
    problem: "Instruct the AI to append a marker element to the game track on every loop iteration. (createElement builds a div in memory; appendChild attaches it into #game-track so the browser draws it. Without the append, the element exists but is never shown.)",
    instruction: "Write a prompt asking to create a div with class 'marker-dash', set its top style to markerY, and append it to '#game-track' inside the loop. Your prompt must contain 'marker-dash', 'appendChild', and '#game-track'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('marker-dash') && clean.includes('appendchild') && clean.includes('game-track');
    },
    hint: "Mention 'marker-dash', 'appendChild', and '#game-track'."
  },
  {
    num: 8,
    title: "Exercise 7.8: [Review & Explain] Why Not Hardcode 5 Divs?",
    problem: "Compare writing a loop against manually copy-pasting 5 separate div elements by hand. (A loop is one block that scales to any count by changing a single number; hand-written divs mean editing every line by hand. That's the payoff of loops — change 5 to 20 and the loop just works.)",
    instruction: "If the track needed 20 markers instead of 5 with hand-written divs, how many lines would you need to change? Type a number.",
    preloaded: "/* Type a number: */",
    validate: (code) => {
      const clean = code.replace(/[^0-9]/g, '');
      return clean.length > 0 && parseInt(clean, 10) >= 15;
    },
    hint: "Without a loop, you'd need to write out all 20 — type '20' (or any number 15+) to show you understand the scale of the manual approach."
  },
  {
    num: 9,
    title: "Exercise 7.9: [Test & Break] The Off-Track Marker",
    problem: `Bug: a marker's spacing formula was written as markerY = i * 12 (missing a zero), bunching all 5 markers near the top of the track. (i * 12 gives 0,12,24,36,48 — all crammed in the top 48px; i * 120 gives 0,120,240,360,480, spread down the full track. One missing digit collapses the whole layout.)`,
    instruction: "Fix the spacing formula so markers are spread out correctly across the track (120px apart, not 12px).",
    preloaded: "let markerY = i * 12;",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('markerY=i*120');
    },
    hint: "Change '* 12' to '* 120'."
  },
  {
    num: 10,
    title: "Exercise 7.10: [Iterate & Improve] The Complete Marker Loop",
    problem: "Combine every piece from this session into one complete marker-generation loop. (Loop 5 times, compute markerY = i * 120, build a marker-dash div at that position, and append it to #game-track — the full generate-and-render pattern reused whenever the game spawns many elements.)",
    instruction: "Write the complete loop: iterate 5 times, compute markerY as i * 120, create a 'marker-dash' div positioned at markerY, and append it to '#game-track'.",
    preloaded: "/* Write the complete loop here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('for(') && clean.includes('i<5') && clean.includes('i++') && clean.includes('i*120') && clean.includes('marker-dash') && clean.includes('appendchild');
    },
    hint: "Your loop needs: for(...i<5...i++), markerY = i * 120, a 'marker-dash' div, and appendChild onto #game-track."
  }
];

const S8_EXERCISES = [
  {
    num: 1,
    title: "Exercise 8.1: [Plan & Design] Decomposing the Steering Script",
    problem: "Plan how to break the monolithic steering script into single-purpose functions. (One giant block that does everything is hard to fix; splitting it into named functions — one to render, one to move left, one to move right — gives each piece a single, testable job.)",
    instruction: "In plain language, name the single-purpose pieces to split into. Example: one piece to update the car's position, one to move left, one to move right. (updatePlayerPosition() | moveLeft() | moveRight() also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const compact = code.replace(/\s+/g, '').toLowerCase();
      const tech = compact.includes('updateplayerposition') && compact.includes('moveleft') && compact.includes('moveright');
      const clean = code.toLowerCase();
      const plain = (clean.includes('update') || clean.includes('render') || clean.includes('redraw') || clean.includes('position') || clean.includes('draw')) && clean.includes('left') && clean.includes('right');
      return tech || plain;
    },
    hint: "In plain words: one piece to update the car's position, one to move left, one to move right."
  },
  {
    num: 2,
    title: "Exercise 8.2: [Write AI Prompt] Requesting the Render Function",
    problem: "Instruct the AI to write the shared rendering function first. (updatePlayerPosition() is the one place that writes carX to the screen. Building it first lets moveLeft/moveRight both call it instead of each repeating the same style.left line.)",
    instruction: "Write a prompt asking for a function named updatePlayerPosition() that sets '#player-car' style.left to carX + 'px'. Your prompt must contain 'function', 'updatePlayerPosition', and 'style.left'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('function') && clean.includes('updateplayerposition') && clean.includes('style.left');
    },
    hint: "Mention 'function', 'updatePlayerPosition', and 'style.left'."
  },
  {
    num: 3,
    title: "Exercise 8.3: [Review & Explain] Function Signatures",
    problem: `The AI generated: function updatePlayerPosition() { let carElement = document.getElementById("player-car"); carElement.style.left = carX + "px"; }. Review this function. (The empty parentheses () are the parameter list — this function takes no inputs. It reads the shared carX and writes it to the DOM, so nothing needs to be passed in.)`,
    instruction: "How many parameters does updatePlayerPosition() take? Type a number.",
    preloaded: "/* Type a number: */",
    validate: (code) => {
      const clean = code.replace(/[^0-9]/g, '');
      return clean === '0';
    },
    hint: "The parentheses are empty, so the answer is '0'."
  },
  {
    num: 4,
    title: "Exercise 8.4: [Test & Break] Scope Access Violation",
    problem: `Bug: carX was accidentally declared inside moveLeft(), so updatePlayerPosition() can no longer read it and logs 'undefined'. (A variable declared inside a function is local — it only exists there. For two functions to share carX, it must be declared once outside both, in the scope they can both see.)`,
    instruction: "Move the carX declaration out of moveLeft() so it becomes a variable both functions can share.",
    preloaded: 'function moveLeft() {\n  let carX = 165;\n  if (carX > 35) {\n    carX -= 130;\n  }\n}\nfunction updatePlayerPosition() {\n  console.log(carX);\n}',
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return /letcarX=165;.*functionmoveleft\(\)\{/i.test(clean) && !/functionmoveleft\(\)\{letcarx/i.test(clean);
    },
    hint: "Declare 'let carX = 165;' before (outside) both function declarations, not inside moveLeft()."
  },
  {
    num: 5,
    title: "Exercise 8.5: [Iterate & Improve] Wiring moveLeft() to the Handler",
    problem: "Iterate on the keydown handler to call the new modular function instead of updating carX inline. (Once moveLeft() owns the boundary-check logic, the handler just calls it by name — same behavior, but the logic lives in one place instead of being copied into the listener.)",
    instruction: "Rewrite the ArrowLeft branch of the keydown handler so it simply calls moveLeft() instead of repeating the boundary-check logic inline.",
    preloaded: 'if (event.key === "ArrowLeft") {\n  if (carX > 35) {\n    carX -= 130;\n  }\n}',
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('ArrowLeft') && clean.includes('moveLeft()');
    },
    hint: `Replace the inline logic with: if (event.key === "ArrowLeft") { moveLeft(); }`
  },
  {
    num: 6,
    title: "Exercise 8.6: [Plan & Design] The moveRight() Signature",
    problem: "Plan the mirror function for the right lane. (moveRight() mirrors moveLeft(): guard against the right boundary (carX < 295), add 130, then call the shared updatePlayerPosition() to redraw — same shape, opposite direction.)",
    instruction: "In plain language, plan the mirror function for the right lane. Example: if the car isn't past the right limit (295), move it right, then redraw its position. (moveRight() -> IF carX < 295 THEN carX += 130, then updatePlayerPosition() also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const compact = code.replace(/\s+/g, '').toLowerCase();
      const tech = compact.includes('moveright') && compact.includes('carx<295') && compact.includes('updateplayerposition');
      const clean = code.toLowerCase();
      const plain = clean.includes('right') && clean.includes('295') && (clean.includes('update') || clean.includes('redraw') || clean.includes('position') || clean.includes('draw'));
      return tech || plain;
    },
    hint: "In plain words: if the car isn't past 295, move it right, then redraw its position."
  },
  {
    num: 7,
    title: "Exercise 8.7: [Write AI Prompt] Requesting moveLeft() and moveRight()",
    problem: "Instruct the AI to write both modular movement functions. (Each function clamps carX to its own boundary, then calls updatePlayerPosition() — reusing the shared renderer instead of each writing its own style.left line.)",
    instruction: "Write a prompt asking for two functions: moveLeft() and moveRight(), each clamping carX to its boundary and calling updatePlayerPosition(). Your prompt must contain 'moveLeft', 'moveRight', and 'updatePlayerPosition'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('moveleft') && clean.includes('moveright') && clean.includes('updateplayerposition');
    },
    hint: "Mention 'moveLeft', 'moveRight', and 'updatePlayerPosition' in your prompt."
  },
  {
    num: 8,
    title: "Exercise 8.8: [Review & Explain] Why Modularize?",
    problem: "Compare the modular version against the original inline version from Session 6. (When rendering lives in one shared function, a bug in it is fixed once — not copied across every branch. Fewer copies of a line means fewer places for a bug to hide.)",
    instruction: "If a bug is found in the boundary-clamp logic, in a modular version how many function bodies need fixing (assuming both moveLeft/moveRight call a shared clamp helper)? Type a number.",
    preloaded: "/* Type a number: */",
    validate: (code) => {
      const clean = code.replace(/[^0-9]/g, '');
      return clean === '1';
    },
    hint: "With a shared helper, only 1 function body needs the fix — type '1'."
  },
  {
    num: 9,
    title: "Exercise 8.9: [Test & Break] The Duplicate Render Call",
    problem: `Bug: moveLeft() calls updatePlayerPosition() twice by accident, wasting a render cycle every keypress. (Redrawing the same position twice does no visible harm but doubles the work on every keypress — the kind of small waste that adds up once the game loop runs 60 times a second.)`,
    instruction: "Remove the duplicate call so updatePlayerPosition() runs exactly once per moveLeft() call.",
    preloaded: 'function moveLeft() {\n  if (carX > 35) {\n    carX -= 130;\n  }\n  updatePlayerPosition();\n  updatePlayerPosition();\n}',
    validate: (code) => {
      const matches = code.match(/updatePlayerPosition\(\)/g) || [];
      return matches.length === 1;
    },
    hint: "Delete one of the two 'updatePlayerPosition();' lines."
  },
  {
    num: 10,
    title: "Exercise 8.10: [Iterate & Improve] The Complete Modular Controller",
    problem: "Combine every piece from this session into the final modular movement controller. (updatePlayerPosition(), moveLeft(), moveRight(), and a keydown handler that calls them — clean, named pieces later sessions can extend without touching one tangled block.)",
    instruction: "Write the complete code: updatePlayerPosition(), moveLeft(), moveRight(), and a keydown handler that calls moveLeft()/moveRight() based on the key pressed.",
    preloaded: "/* Write the complete modular controller here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('function') && clean.includes('updateplayerposition') && clean.includes('moveleft') && clean.includes('moveright') && clean.includes('addeventlistener') && clean.includes('keydown');
    },
    hint: "Your code needs all four pieces: updatePlayerPosition(), moveLeft(), moveRight(), and a keydown listener calling them."
  }
];

const S9_EXERCISES = [
  {
    num: 1,
    title: "Exercise 9.1: [Plan & Design] The Game Loop Lifecycle",
    problem: "Before animating anything, plan how the game should redraw itself every single frame. (A game is an animation: each frame updates the state, redraws, then schedules the next frame — a loop that calls itself ~60 times a second.)",
    instruction: "In plain language, describe the repeating frame cycle. Example: each frame, update the state, redraw, then schedule the next frame. (gameLoop() -> update -> render -> requestAnimationFrame(gameLoop) also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const compact = code.replace(/\s+/g, '').toLowerCase();
      const tech = compact.includes('gameloop') && compact.includes('requestanimationframe');
      const clean = code.toLowerCase();
      const plain = (clean.includes('frame') || clean.includes('loop')) && clean.includes('update') && (clean.includes('render') || clean.includes('draw') || clean.includes('redraw')) && (clean.includes('next') || clean.includes('again') || clean.includes('repeat') || clean.includes('schedule'));
      return tech || plain;
    },
    hint: "In plain words: each frame — update the state, redraw, then schedule the next frame."
  },
  {
    num: 2,
    title: "Exercise 9.2: [Write AI Prompt] Requesting the Recursive Loop",
    problem: "Instruct the AI to write the core recursive animation function. (requestAnimationFrame(gameLoop) tells the browser 'run gameLoop again right before the next repaint' — so the function scheduling itself is what keeps the animation going smoothly.)",
    instruction: "Write a prompt asking for a function gameLoop() that moves the obstacle, then calls requestAnimationFrame(gameLoop) to schedule the next frame. Your prompt must contain 'function', 'gameLoop', and 'requestAnimationFrame'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('function') && clean.includes('gameloop') && clean.includes('requestanimationframe');
    },
    hint: "Mention 'function', 'gameLoop', and 'requestAnimationFrame' in your prompt."
  },
  {
    num: 3,
    title: "Exercise 9.3: [Review & Explain] Why Call It Again?",
    problem: `The AI generated: function gameLoop() { moveObstacles(); requestAnimationFrame(gameLoop); }. Review this code. (The last line is what makes it a loop: after moving the obstacles, it books gameLoop to run again on the next frame. Remove it and the game updates once, then stops forever.)`,
    instruction: "What does calling requestAnimationFrame(gameLoop) at the end of the function do? Type SCHEDULES_NEXT_FRAME or STOPS_THE_LOOP.",
    preloaded: "/* Type your answer: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toUpperCase();
      return clean === 'SCHEDULESNEXTFRAME';
    },
    hint: "It reschedules gameLoop to run again on the next screen repaint — type 'SCHEDULES_NEXT_FRAME'."
  },
  {
    num: 4,
    title: "Exercise 9.4: [Test & Break] The Unstoppable Speed Bug",
    problem: "Bug: the tutor removed the gameActive check, so gameLoop() keeps recursing forever even after the game ends. (Without a guard that returns early when gameActive is false, nothing can ever stop the loop — Game Over becomes impossible because the animation never halts.)",
    instruction: "Add a guard at the very top of gameLoop() that returns immediately if gameActive is false.",
    preloaded: 'function gameLoop() {\n  moveObstacles();\n  requestAnimationFrame(gameLoop);\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('if(!gameActive)') && clean.includes('return') && clean.includes('requestAnimationFrame(gameLoop)');
    },
    hint: "Add: if (!gameActive) { return; } as the first line inside gameLoop()."
  },
  {
    num: 5,
    title: "Exercise 9.5: [Iterate & Improve] Confirming the Gate Works",
    problem: "Iterate on your fixed loop to make the halt visible in the console. (A log line right before the return proves the gate actually fired — turning an invisible 'the loop stopped' into a visible, verifiable event.)",
    instruction: `Add a console.log("Loop halted") line right before the return statement in your gameActive guard.`,
    preloaded: 'function gameLoop() {\n  if (!gameActive) {\n    return;\n  }\n  moveObstacles();\n  requestAnimationFrame(gameLoop);\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('console.log') && clean.includes('halted');
    },
    hint: `Add console.log("Loop halted"); before the return statement.`
  },
  {
    num: 6,
    title: "Exercise 9.6: [Plan & Design] Obstacle Movement & Reset",
    problem: "Plan how the obstacle moves down the track and resets once it passes the bottom. (Each frame adds speed to obstacleY to scroll it down; once it passes the bottom (500), it wraps back to the top (-100) and the score goes up — the illusion of endless oncoming traffic.)",
    instruction: "In plain language, plan the scroll-and-wrap behavior. Example: the obstacle moves down; when it passes the bottom (500), it wraps to the top (-100) and the score goes up. (obstacleY += speed | IF obstacleY > 500 THEN obstacleY = -100, score += 10 also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const compact = code.replace(/\s+/g, '').toLowerCase();
      const tech = compact.includes('obstacley') && compact.includes('500') && compact.includes('-100') && compact.includes('score');
      const clean = code.toLowerCase();
      const hasObstacle = clean.includes('obstacle') || compact.includes('obstacley');
      const hasReset = clean.includes('-100') || clean.includes('top') || clean.includes('reset') || clean.includes('wrap');
      const plain = hasObstacle && clean.includes('500') && hasReset && clean.includes('score');
      return tech || plain;
    },
    hint: "In plain words: the obstacle moves down; passing 500 wraps it to -100 and the score goes up."
  },
  {
    num: 7,
    title: "Exercise 9.7: [Write AI Prompt] Requesting moveObstacles()",
    problem: "Instruct the AI to write the obstacle movement and reset function. (Give the exact numbers — the bottom edge (500) and the respawn point (-100) — plus the score bump, so the wrap-around and scoring match your plan precisely.)",
    instruction: "Write a prompt asking for a function moveObstacles() that adds speed to obstacleY, and once obstacleY exceeds 500, resets it to -100 and adds 10 to score. Your prompt must contain 'moveObstacles', 'obstacleY', '500', and 'score'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('moveobstacles') && clean.includes('obstacley') && clean.includes('500') && clean.includes('score');
    },
    hint: "Mention 'moveObstacles', 'obstacleY', '500', and 'score' in your prompt."
  },
  {
    num: 8,
    title: "Exercise 9.8: [Review & Explain] Tracing the Update Math",
    problem: `The AI generated: obstacleY += speed;. Review this line. (Each frame nudges the obstacle down by speed pixels: at obstacleY 490 with speed 5, the next value is 495. Tracing one frame by hand is how you verify the motion before trusting the loop.)`,
    instruction: "If obstacleY is 490 and speed is 5, what is obstacleY immediately after this line runs (before any reset check)? Type a number.",
    preloaded: "/* Type a number: */",
    validate: (code) => {
      const clean = code.replace(/[^0-9]/g, '');
      return clean === '495';
    },
    hint: "490 + 5 = 495."
  },
  {
    num: 9,
    title: "Exercise 9.9: [Test & Break] The Frozen Scoreboard",
    problem: `Bug: the reset check was written as if (obstacleY > 500) { obstacleY = -100; } — the score never increments, so the scoreboard stays frozen. (Resetting the obstacle is only half the event: passing one is what earns points, so the score += must live inside the same reset block that wraps it back to the top.)`,
    instruction: "Add the missing score increment inside the reset block.",
    preloaded: 'if (obstacleY > 500) {\n  obstacleY = -100;\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('obstacleY>500') && (clean.includes('score+=10') || clean.includes('score+=1'));
    },
    hint: "Add 'score += 10;' inside the if-block, alongside resetting obstacleY."
  },
  {
    num: 10,
    title: "Exercise 9.10: [Iterate & Improve] The Complete Animation Engine",
    problem: "Combine every piece from this session into the complete animation engine. (gameLoop() with its gameActive gate driving moveObstacles() every frame — the beating heart that makes the road scroll, the score climb, and the game stoppable.)",
    instruction: "Write the complete code: gameLoop() with the gameActive gate calling moveObstacles() and requestAnimationFrame(gameLoop), plus moveObstacles() updating and resetting obstacleY with the score increment.",
    preloaded: "/* Write the complete animation engine here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('gameloop') && clean.includes('gameactive') && clean.includes('requestanimationframe') && clean.includes('moveobstacles') && clean.includes('obstacley') && clean.includes('score');
    },
    hint: "Your code needs: gameLoop() with a gameActive gate, requestAnimationFrame(gameLoop), and moveObstacles() updating/resetting obstacleY plus score."
  }
];

const S10_EXERCISES = [
  {
    num: 1,
    title: "Exercise 10.1: [Plan & Design] The Overlap Condition",
    problem: "Before coding collision detection, plan the mathematical condition for two boxes overlapping. (Two rectangles overlap only when they overlap on BOTH axes at once — so the check is four comparisons joined by AND: right/left on the X axis, top/bottom on the Y axis.)",
    instruction: "In plain language, describe when two boxes overlap: they must overlap in both directions — right vs left, and top vs bottom. (The full 'player.right > obstacle.left AND ...' form is also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('right') && clean.includes('left') && clean.includes('top') && clean.includes('bottom');
    },
    hint: "In plain words: they overlap only if they overlap on both axes — right vs left, and top vs bottom."
  },
  {
    num: 2,
    title: "Exercise 10.2: [Write AI Prompt] Requesting checkCollision()",
    problem: "Instruct the AI to write the collision-detection function. (Each car is a box with an x, y, width, and height — the function compares two such boxes and returns true only if their edges overlap. Naming width and height is what makes it size-aware, not just point-based.)",
    instruction: "Write a prompt asking for a function checkCollision(rect1, rect2) that returns true if the two rectangles' x/y/width/height bounds overlap. Your prompt must contain 'checkCollision', 'width', and 'height'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('checkcollision') && clean.includes('width') && clean.includes('height');
    },
    hint: "Mention 'checkCollision', 'width', and 'height' in your prompt."
  },
  {
    num: 3,
    title: "Exercise 10.3: [Review & Explain] Why Dimensions Matter",
    problem: "Compare checking only center coordinates (player.x === obstacle.x) against a full AABB check using width/height. (Two moving cars almost never share the exact same x to the pixel, so an equality check would miss nearly every real crash — comparing the box edges is what catches overlaps that aren't perfectly aligned.)",
    instruction: "If we only checked player.x === obstacle.x (ignoring width/height), would two overlapping-but-not-perfectly-aligned cars ever register a collision? Type YES or NO.",
    preloaded: "/* Type YES or NO: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toUpperCase();
      return clean === 'NO';
    },
    hint: "Exact equality almost never happens by coincidence — type 'NO'."
  },
  {
    num: 4,
    title: "Exercise 10.4: [Test & Break] The Ghost Car Bug",
    problem: `Bug: the tutor flipped one comparison operator, so the obstacle drives right through the player car with no crash registered. (All four AABB comparisons must point the right way; flip even one and the combined AND can never be true, so collisions silently never fire — a ghost car.)`,
    instruction: "Fix the flipped comparison so the second condition correctly checks rect1.x + rect1.width > rect2.x (not <).",
    preloaded: 'function checkCollision(rect1, rect2) {\n  return (\n    rect1.x < rect2.x + rect2.width &&\n    rect1.x + rect1.width < rect2.x &&\n    rect1.y < rect2.y + rect2.height &&\n    rect1.y + rect1.height > rect2.y\n  );\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('rect1.x+rect1.width>rect2.x');
    },
    hint: "Change 'rect1.x + rect1.width < rect2.x' to use '>' instead of '<'."
  },
  {
    num: 5,
    title: "Exercise 10.5: [Iterate & Improve] Wiring Collision into the Loop",
    problem: "Iterate to actually stop the game when a collision is detected. (Detecting a crash is useless unless something happens: calling checkCollision() inside the loop and setting gameActive = false on a hit is what turns 'they touched' into 'game over'.)",
    instruction: "Inside gameLoop(), add a call to checkCollision(player, obstacle) that sets gameActive to false and logs 'Collision detected!' when it returns true.",
    preloaded: 'function gameLoop() {\n  if (!gameActive) { return; }\n  moveObstacles();\n  requestAnimationFrame(gameLoop);\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('checkcollision') && clean.includes('gameactive=false') && clean.includes('console.log');
    },
    hint: `Add: if (checkCollision(player, obstacle)) { gameActive = false; console.log("Collision detected!"); }`
  },
  {
    num: 6,
    title: "Exercise 10.6: [Plan & Design] Bounding Box Dimensions",
    problem: "Plan the exact pixel dimensions for the player car and the obstacle. (The overlap math needs each box's real width and height — 30×50 for the player, 25×40 for the obstacle — because the edges are computed from x/y plus those sizes.)",
    instruction: "In plain language, plan the box sizes. Example: the player is 30 wide and 50 tall; the obstacle is 25 wide and 40 tall.",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('30') && clean.includes('50') && clean.includes('25') && clean.includes('40');
    },
    hint: "In plain words: player 30 wide, 50 tall; obstacle 25 wide, 40 tall."
  },
  {
    num: 7,
    title: "Exercise 10.7: [Write AI Prompt] Building the Rect Objects",
    problem: "Instruct the AI to build the two rectangle objects that checkCollision() will compare. (Each rect bundles the live position (carX, obstacleY) with its fixed width/height — packaging the four numbers the collision function reads for each car.)",
    instruction: "Write a prompt asking to build a playerRect object using carX and a fixed y, and an obsRect object using obstacleY, each with the correct width/height. Your prompt must contain 'carX', 'obstacleY', 'width', and 'height'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('carx') && clean.includes('obstacley') && clean.includes('width') && clean.includes('height');
    },
    hint: "Mention 'carX', 'obstacleY', 'width', and 'height' in your prompt."
  },
  {
    num: 8,
    title: "Exercise 10.8: [Review & Explain] The Exact-Touch Edge Case",
    problem: "Consider two boxes whose edges touch exactly, with no actual overlap. (Touching is not overlapping: with a strict > comparison, edges that meet at exactly the same coordinate don't count as a hit — a deliberate choice about how forgiving the collision feels.)",
    instruction: "If rect1.x + rect1.width is exactly equal to rect2.x (edges touching, not overlapping), does a strict '>' comparison register a collision? Type YES or NO.",
    preloaded: "/* Type YES or NO: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toUpperCase();
      return clean === 'NO';
    },
    hint: "A strict '>' requires the value to be greater, not equal — type 'NO'."
  },
  {
    num: 9,
    title: "Exercise 10.9: [Test & Break] The Axis Swap Bug",
    problem: `Bug: the first condition accidentally compares rect1.y (not rect1.x) against rect2's horizontal bound, swapping the X and Y axes. (Comparing an x against a y measures horizontal against vertical — nonsense geometry that makes crashes register in the wrong place or not at all. Each comparison must keep x with x and y with y.)`,
    instruction: "Fix the axis-swap bug in the first condition so it correctly compares rect1.x, not rect1.y.",
    preloaded: 'function checkCollision(rect1, rect2) {\n  return (\n    rect1.y < rect2.x + rect2.width &&\n    rect1.x + rect1.width > rect2.x &&\n    rect1.y < rect2.y + rect2.height &&\n    rect1.y + rect1.height > rect2.y\n  );\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('rect1.x<rect2.x+rect2.width');
    },
    hint: "Change the first condition's 'rect1.y' to 'rect1.x'."
  },
  {
    num: 10,
    title: "Exercise 10.10: [Iterate & Improve] The Complete Collision System",
    problem: "Combine every piece from this session into the complete collision-detection system. (The full 4-condition checkCollision() plus the loop wiring that ends the game on a hit — the sensor that finally gives the racing game real stakes.)",
    instruction: "Write the complete checkCollision(rect1, rect2) function using all 4 AABB conditions, plus a snippet showing gameLoop() calling it and setting gameActive to false on a hit.",
    preloaded: "/* Write the complete collision system here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('checkcollision') && clean.includes('gameactive=false') && clean.includes('width') && clean.includes('height');
    },
    hint: "Your code needs: a full 4-condition checkCollision(), and gameActive = false wired up on a hit."
  }
];

const S11_EXERCISES = [
  {
    num: 1,
    title: "Exercise 11.1: [Plan & Design] The DOM Update Pipeline",
    problem: "Before writing any code, plan how state changes become visible on screen. (A variable changing in memory is invisible until you push it into the page: score → write it into #score-val's text; a crash → reveal the restart panel. The plan maps each state change to its DOM update.)",
    instruction: "In plain language, map each state change to what appears on screen. Example: when the score changes, show it on the scoreboard; on a crash, show the restart panel. (score -> #score-val.textContent | crash -> remove hidden from #restart-panel also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const compact = code.replace(/\s+/g, '').toLowerCase();
      const tech = compact.includes('score-val') && compact.includes('textcontent') && compact.includes('restart-panel');
      const clean = code.toLowerCase();
      const plain = clean.includes('score') && (clean.includes('show') || clean.includes('display') || clean.includes('update') || clean.includes('scoreboard') || clean.includes('screen')) && (clean.includes('crash') || clean.includes('collision') || clean.includes('restart') || clean.includes('game over') || clean.includes('game-over') || clean.includes('panel'));
      return tech || plain;
    },
    hint: "In plain words: when the score changes, show it on the scoreboard; on a crash, show the restart panel."
  },
  {
    num: 2,
    title: "Exercise 11.2: [Write AI Prompt] Requesting the Scoreboard Updater",
    problem: "Instruct the AI to write the function that keeps the scoreboard in sync with the score variable. (textContent is the text inside an element; setting #score-val's textContent to the score variable is what makes the number on screen match the number in memory.)",
    instruction: "Write a prompt asking for a function updateScoreboard() that sets the textContent of '#score-val' to match the score variable. Your prompt must contain 'function', 'textContent', and 'score-val'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('function') && clean.includes('textcontent') && clean.includes('score-val');
    },
    hint: "Mention 'function', 'textContent', and 'score-val' in your prompt."
  },
  {
    num: 3,
    title: "Exercise 11.3: [Review & Explain] textContent vs. innerHTML",
    problem: "Compare using .textContent against .innerHTML for writing the score value into the DOM. (textContent treats its input as plain text; innerHTML parses it as HTML — so innerHTML with untrusted data can run injected scripts. For a plain number, textContent is both safer and faster.)",
    instruction: "Why is 'textContent' safer than 'innerHTML' for updating a score display? Type the risk innerHTML introduces: SCRIPT_INJECTION or SLOWER_RENDERING.",
    preloaded: "/* Type your answer: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toUpperCase();
      return clean === 'SCRIPTINJECTION';
    },
    hint: "innerHTML parses its input as HTML/scripts — type 'SCRIPT_INJECTION'."
  },
  {
    num: 4,
    title: "Exercise 11.4: [Test & Break] The Negative Score Leak",
    problem: `Bug: a scoring penalty can push score below zero, and the scoreboard shows "score: -5". (Displaying a negative score looks broken to players. A defensive clamp — if score < 0, snap it to 0 — before writing to the DOM keeps the display sensible no matter what the math does.)`,
    instruction: "Add a defensive check that clamps score to 0 if it's ever negative, before writing it to the DOM.",
    preloaded: 'function updateScoreboard() {\n  document.getElementById("score-val").textContent = score;\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('score<0') && clean.includes('score=0');
    },
    hint: "Add: if (score < 0) { score = 0; } before setting textContent."
  },
  {
    num: 5,
    title: "Exercise 11.5: [Iterate & Improve] Revealing the Restart Panel",
    problem: "Iterate to show the game-over overlay when a collision happens. (The panel already exists in the HTML but is hidden by a 'hidden' class; removing that class with classList.remove is what makes it appear — showing/hiding by toggling a class, not creating elements.)",
    instruction: "Add a function triggerGameOverScreen() that removes the 'hidden' class from '#restart-panel'.",
    preloaded: "/* Add your function here */",
    runnable: true,
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('restart-panel') && clean.includes('remove') && clean.includes('hidden');
    },
    hint: `function triggerGameOverScreen() { document.getElementById("restart-panel").classList.remove("hidden"); }`
  },
  {
    num: 6,
    title: "Exercise 11.6: [Plan & Design] The Restart Flow",
    problem: "Plan what should happen when the player presses Space after a game over. (Restart is a reset checklist: score back to 0, car back to center, hide the panel, and set gameActive = true to wake the loop — every piece of game state returned to its starting value.)",
    instruction: "In plain language, plan the restart sequence. Example: press Space -> reset the score to 0, reset the car, hide the panel, and start the game running again. (press Space -> reset score -> reset carX -> hide restart-panel -> gameActive = true also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const compact = code.replace(/\s+/g, '').toLowerCase();
      const tech = compact.includes('space') && compact.includes('score') && compact.includes('gameactive');
      const clean = code.toLowerCase();
      const plain = clean.includes('space') && (clean.includes('reset') || clean.includes('restart')) && clean.includes('score') && (clean.includes('start') || clean.includes('run') || clean.includes('active') || clean.includes('play') || clean.includes('again'));
      return tech || plain;
    },
    hint: "In plain words: press Space -> reset score to 0, reset the car, hide the panel, start the game again."
  },
  {
    num: 7,
    title: "Exercise 11.7: [Write AI Prompt] Requesting the Restart Handler",
    problem: "Instruct the AI to write the keydown handler that restarts the game. (One more keydown listener, this time watching for the Space key, that runs the reset checklist and flips gameActive back to true to restart the loop.)",
    instruction: "Write a prompt asking for a keydown listener that, when Space is pressed, resets score to 0 and sets gameActive to true. Your prompt must contain 'Space', 'gameActive', and 'addEventListener'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('space') && clean.includes('gameactive') && clean.includes('addeventlistener');
    },
    hint: "Mention 'Space', 'gameActive', and 'addEventListener' in your prompt."
  },
  {
    num: 8,
    title: "Exercise 11.8: [Review & Explain] What the Hidden Class Does",
    problem: `The CSS rule .hidden { display: none !important; } is applied to #restart-panel. (display: none removes the panel from view entirely. As long as the class stays on the element, it stays invisible — so forgetting to remove it after restart leaves the game-over screen stuck on the page.)`,
    instruction: "What happens if you forget to remove this class after a restart handler runs? Type STAYS_HIDDEN or BECOMES_VISIBLE.",
    preloaded: "/* Type your answer: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toUpperCase();
      return clean === 'STAYSHIDDEN';
    },
    hint: "Without removing the class, display: none keeps applying — type 'STAYS_HIDDEN'."
  },
  {
    num: 9,
    title: "Exercise 11.9: [Test & Break] The Frozen Restart",
    problem: `Bug: the restart handler resets score and hides the panel, but never sets gameActive back to true — the game stays frozen. (The screen looks reset, but the game loop is still gated off from Session 9. Without gameActive = true, requestAnimationFrame is never re-armed, so nothing moves.)`,
    instruction: "Add the missing line that sets gameActive back to true inside the restart handler.",
    preloaded: 'window.addEventListener("keydown", function(event) {\n  if (event.key === " ") {\n    score = 0;\n    document.getElementById("restart-panel").classList.add("hidden");\n  }\n});',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('gameactive=true');
    },
    hint: "Add: gameActive = true; inside the Space-key branch."
  },
  {
    num: 10,
    title: "Exercise 11.10: [Iterate & Improve] The Complete HUD & Restart System",
    problem: "Combine every piece from this session into the complete HUD and restart system. (Live score updates, a game-over panel that appears on a crash, and a Space-to-restart handler — the loop that turns a single run into a replayable game.)",
    instruction: "Write the complete code: updateScoreboard() (with the negative-score guard), triggerGameOverScreen(), and a keydown handler restarting the game on Space.",
    preloaded: "/* Write the complete HUD and restart system here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      // Note: the real DOM value for the spacebar key is a single space character (" "),
      // not the word "Space" — after whitespace-stripping, a correct `key === " "` check
      // collapses to `.key===""`, so check for that pattern instead of the literal word.
      return clean.includes('score-val') && clean.includes('restart-panel') && clean.includes('gameactive') && clean.includes('addeventlistener') && clean.includes('.key===""');
    },
    hint: `Your code needs: updateScoreboard(), triggerGameOverScreen(), and a keydown handler checking event.key === " " that sets gameActive = true.`
  }
];

const S12_EXERCISES = [
  {
    num: 1,
    title: "Exercise 12.1: [Plan & Design] The Configuration Object",
    problem: "Before polishing the final game, plan a single config object holding every tunable value. (Scattering magic numbers — speeds, limits — across the code makes them hard to find and change. A CONFIG object gathers every tunable value in one place, so you can retune the game's feel by editing one object.)",
    instruction: "In plain language, plan the single object of tunable values. Example: gather the tunable numbers — starting speed, difficulty ramp, top speed — into one config object. (const CONFIG = { startSpeed, difficultyMultiplier, maxSpeed } also accepted.)",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const compact = code.replace(/\s+/g, '').toLowerCase();
      const tech = compact.includes('config') && compact.includes('startspeed') && compact.includes('maxspeed');
      const clean = code.toLowerCase();
      const plain = (clean.includes('config') || clean.includes('setting') || clean.includes('tunable') || clean.includes('one object') || clean.includes('one place')) && clean.includes('speed') && (clean.includes('max') || clean.includes('top') || clean.includes('limit') || clean.includes('start'));
      return tech || plain;
    },
    hint: "In plain words: gather the tunable numbers — starting speed, difficulty ramp, top speed — into one config object."
  },
  {
    num: 2,
    title: "Exercise 12.2: [Write AI Prompt] Requesting Difficulty Scaling",
    problem: "Instruct the AI to write the difficulty-scaling function using your CONFIG object. (Difficulty should ramp with score — faster as you go — but a clamp to CONFIG.maxSpeed keeps it from becoming impossible. Reference the CONFIG values instead of raw numbers.)",
    instruction: "Write a prompt asking for a function that increases speed based on score, using CONFIG.difficultyMultiplier, and clamps the result to CONFIG.maxSpeed. Your prompt must contain 'CONFIG', 'speed', and 'clamp' (or 'max').",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('config') && clean.includes('speed') && (clean.includes('clamp') || clean.includes('max'));
    },
    hint: "Mention 'CONFIG', 'speed', and 'clamp' or 'max' in your prompt."
  },
  {
    num: 3,
    title: "Exercise 12.3: [Review & Explain] Tracing the Difficulty Formula",
    problem: `Given const CONFIG = { startSpeed: 5, difficultyMultiplier: 0.1, maxSpeed: 15 }; and score = 50, review the formula startSpeed + score * difficultyMultiplier. (Order of operations: the multiply runs first (50 * 0.1 = 5), then the add (5 + 5 = 10). Tracing named config values through a formula is the same audit skill from earlier sessions.)`,
    instruction: "What does the formula equal when score is 50? Type a number.",
    preloaded: "/* Type a number: */",
    validate: (code) => {
      const clean = code.replace(/[^0-9]/g, '');
      return clean === '10';
    },
    hint: "5 + (50 * 0.1) = 5 + 5 = 10."
  },
  {
    num: 4,
    title: "Exercise 12.4: [Test & Break] The Unbounded Speed Bug",
    problem: "Bug: at very high scores, the computed speed exceeds CONFIG.maxSpeed, making the game unplayably fast. (A ramp with no ceiling eventually breaks the game. Math.min(speed, CONFIG.maxSpeed) caps it — the same clamp idea from Session 6, now pulled from config instead of hardcoded.)",
    instruction: "Add a clamp so speed never exceeds CONFIG.maxSpeed.",
    preloaded: 'let speed = CONFIG.startSpeed + score * CONFIG.difficultyMultiplier;',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('math.min') && clean.includes('config.maxspeed');
    },
    hint: "Use: speed = Math.min(speed, CONFIG.maxSpeed);"
  },
  {
    num: 5,
    title: "Exercise 12.5: [Iterate & Improve] Refactoring Magic Numbers",
    problem: "Iterate on your boundary guards from Session 6 to remove hardcoded values. (The literal 35 and 295 from Session 6 become CONFIG.leftBound and CONFIG.rightBound — same behavior, but now every tunable number lives in one central object.)",
    instruction: "Rewrite the boundary values (35 and 295) as CONFIG.leftBound and CONFIG.rightBound instead of hardcoded numbers.",
    preloaded: 'if (carX > 35) { carX -= 130; }\nif (carX < 295) { carX += 130; }',
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('config.leftbound') && clean.includes('config.rightbound');
    },
    hint: "Replace '35' with 'CONFIG.leftBound' and '295' with 'CONFIG.rightBound'."
  },
  {
    num: 6,
    title: "Exercise 12.6: [Plan & Design] The Final QA Matrix",
    problem: "Plan the full verification sweep across every system you built this level. (A final QA pass checks each pillar in turn — variables, boundaries, collision, restart. Listing them is how you prove the whole game still works, not just the last thing you touched.)",
    instruction: "In plain language, list the 4 core systems to verify: variables, boundaries, collision, restart.",
    preloaded: "/* Write your plan here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('variable') && clean.includes('boundar') && clean.includes('collision') && clean.includes('restart');
    },
    hint: "In plain words: variables, boundaries, collision, restart."
  },
  {
    num: 7,
    title: "Exercise 12.7: [Write AI Prompt] Requesting the Smoke-Test Script",
    problem: "Instruct the AI to generate a checklist script that verifies every system logs pass or fail. (A smoke test logs PASS/FAIL for each core system at a glance — automating the QA sweep so a regression shows up as a FAIL line instead of a silent break.)",
    instruction: "Write a prompt asking for a diagnostic script that logs PASS or FAIL for each core system using console.log. Your prompt must contain 'test', 'console.log', and 'pass'.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('test') && clean.includes('console.log') && clean.includes('pass');
    },
    hint: "Mention 'test', 'console.log', and 'pass' in your prompt."
  },
  {
    num: 8,
    title: "Exercise 12.8: [Review & Explain] The Malicious QA Officer's Question",
    problem: "The tutor, playing a 'Malicious QA Officer', asks about boundary-check consistency. (Defending your code under hostile questioning is a real engineering skill: inconsistent operators — > in one place, >= in another — create rare edge-case gaps an adversarial tester will hunt for.)",
    instruction: "If your left-boundary guard used '> 35' in one place but '>= 35' in another, could that inconsistency let the car overlap the track edge in rare cases? Type YES or NO.",
    preloaded: "/* Type YES or NO: */",
    validate: (code) => {
      const clean = code.replace(/[^a-zA-Z]/g, '').toUpperCase();
      return clean === 'YES';
    },
    hint: "Inconsistent boundary operators create exactly this kind of edge-case gap — type 'YES'."
  },
  {
    num: 9,
    title: "Exercise 12.9: [Test & Break] The Final Diagnostic",
    problem: "The tutor seeds one last collision logic error into your capstone build before certification. (One final audit: a single flipped operator in the AABB check — the same class of bug from Session 10, now to be caught fast under exam conditions.)",
    instruction: "Diagnose and fix the seeded collision logic error (hint: one comparison operator is flipped).",
    preloaded: 'function checkCollision(rect1, rect2) {\n  return (\n    rect1.x > rect2.x + rect2.width &&\n    rect1.x + rect1.width > rect2.x &&\n    rect1.y < rect2.y + rect2.height &&\n    rect1.y + rect1.height > rect2.y\n  );\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('rect1.x<rect2.x+rect2.width');
    },
    hint: "The first condition should use '<', not '>': rect1.x < rect2.x + rect2.width."
  },
  {
    num: 10,
    title: "Exercise 12.10: [Iterate & Improve] Capstone Reflection",
    problem: "Reflect on the entire Racing Car Game project, from Session 1's IPO blueprint to today's certified build. (Naming the trickiest bug and how tracing variable values exposed it turns a semester of fixes into a transferable debugging method you'll carry into Level 2.)",
    instruction: "Write a one-sentence reflection: what was the trickiest bug you fixed across this entire project, and how did tracing variable values help you find it?",
    preloaded: "/* Write your reflection here */",
    validate: (code) => {
      const clean = code.replace(/\/\*|\*\//g, '').trim();
      return clean.length >= 20;
    },
    hint: "Write at least a full sentence describing a specific bug and how you traced it."
  }
];

// How many sandbox exercises each Level 1 session has. A session's XP is only
// claimable once every one of its exercises has been passed (no jumping straight
// to the final exercise), preserving the curriculum's "cognitive resistance" design.
const EXERCISE_COUNTS = {
  'l1-s1': 5, 'l1-s2': 10, 'l1-s3': 10, 'l1-s4': 10, 'l1-s5': 10, 'l1-s6': 10,
  'l1-s7': 10, 'l1-s8': 10, 'l1-s9': 10, 'l1-s10': 10, 'l1-s11': 10, 'l1-s12': 10
};

// Full ordered Level 1 session sequence for quest gating. Level 1 is the only level
// where every session has an in-app claimable sandbox, so it gates against the full
// curriculum order; L2-L4 sessions are only claimable from the Quest Board's campaign
// list, so their gating stays within that list (gating them against the full list
// would demand sessions that have no in-app completion path).
const L1_SESSION_SEQUENCE = CURRICULUM_DATA.filter(s => s.level === 1);

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('detective_token') || null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Admin student states
  const [students, setStudents] = useState([]);
  const [newStudentUsername, setNewStudentUsername] = useState('');
  const [newStudentPassword, setNewStudentPassword] = useState('');
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentLevel, setNewStudentLevel] = useState('L1');
  const [adminStatusMsg, setAdminStatusMsg] = useState('');

  // Admin: read-only student journal viewer
  const [viewingStudent, setViewingStudent] = useState(null);
  const [viewingJournalData, setViewingJournalData] = useState([]);
  const [viewingJournalLoading, setViewingJournalLoading] = useState(false);
  const [viewingJournalEntryId, setViewingJournalEntryId] = useState(null);
  const [viewingJournalVersion, setViewingJournalVersion] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState([]);

  const [activeTab, setActiveTab] = useState('dashboard');
  const [points, setPoints] = useState(0);
  const [solvedCases, setSolvedCases] = useState({});
  const [journalEntries, setJournalEntries] = useState([]);
  
  // Dynamic Campaign Selection (Admin-Configurable)
  const [campaignId, setCampaignId] = useState('cyberpunk');
  
  // Case Explorer states
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [selectedSessionId, setSelectedSessionId] = useState('l1-s1');
  
  // Curriculum Guide states
  const [curriculumLevel, setCurriculumLevel] = useState(1);
  const [curriculumSessionId, setCurriculumSessionId] = useState('l1-s1');
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [curriculumSearchQuery, setCurriculumSearchQuery] = useState('');

  // Student auto-routing to active level
  useEffect(() => {
    if (currentUser && currentUser.role === 'student' && currentUser.student_level) {
      const levelNum = parseInt(currentUser.student_level.replace('L', '')) || 1;
      setSelectedLevel(levelNum);
      setCurriculumLevel(levelNum);
      
      const defaultSessionMap = {
        1: 'l1-s1',
        2: 'l2-s5',
        3: 'l3-s1',
        4: 'l4-s1'
      };
      const defaultCurriculumMap = {
        1: 'l1-s1',
        2: 'l2-s1',
        3: 'l3-s1',
        4: 'l4-s1'
      };
      
      setSelectedSessionId(defaultSessionMap[levelNum] || 'l1-s1');
      setCurriculumSessionId(defaultCurriculumMap[levelNum] || 'l1-s1');
    }
  }, [currentUser]);

  const isLevelDisabled = (levelNum) => {
    if (!currentUser) return false;
    if (currentUser.role === 'teacher') return false; // Teachers can access everything
    
    // Students can only access their assigned level
    const userLevelNum = parseInt(currentUser.student_level?.replace('L', '')) || 1;
    return userLevelNum !== levelNum;
  };
  
  // Sandbox states
  const [sandboxRole, setSandboxRole] = useState('Junior Autopilot Car Controller');
  const [sandboxTask, setSandboxTask] = useState('Configure autopilot car sequential driving instructions');
  const [sandboxConstraints, setSandboxConstraints] = useState('Verify P/N gear and depress brake pedal before starting ignition.');
  const [sandboxInput, setSandboxInput] = useState('gearState, brakeState, engineIgnition');
  const [sandboxEdgeCases, setSandboxEdgeCases] = useState('Incorrect ignition sequence, gear shifting lockouts');
  const [sandboxCodeOutput, setSandboxCodeOutput] = useState(null);
  
  // Chaos Monkey console states
  const [chaosLogs, setChaosLogs] = useState([]);
  const [isRunningChaos, setIsRunningChaos] = useState(false);
  const [sandboxSuccess, setSandboxSuccess] = useState(false);

  // Active Sandbox Session Tracker
  const [sandboxSessionId, setSandboxSessionId] = useState('l1-s1');

  // Level 1 Session 1 (Drone Navigator) Simulator States
  const [s1Sequence, setS1Sequence] = useState([]);
  const [s1Logs, setS1Logs] = useState([]);
  const [s1Executing, setS1Executing] = useState(false);
  const [s1Success, setS1Success] = useState(false);
  const [s1ActiveExercise, setS1ActiveExercise] = useState(1); // Exercises 1 to 5

  // Level 1 Session 2 (HTML Sandbox) States
  const [s2ActiveExercise, setS2ActiveExercise] = useState(1);
  const [s2CodeInput, setS2CodeInput] = useState('');
  const [s2Logs, setS2Logs] = useState([]);
  const [s2Success, setS2Success] = useState(false);

  // Level 1 Session 3 (CSS Sandbox) States
  const [s3ActiveExercise, setS3ActiveExercise] = useState(1);
  const [s3CodeInput, setS3CodeInput] = useState('');
  const [s3Logs, setS3Logs] = useState([]);
  const [s3Success, setS3Success] = useState(false);

  // Level 1 Session 4 (Climate Controller) Simulator States
  const [s4ActiveExercise, setS4ActiveExercise] = useState(1);
  const [s4CodeInput, setS4CodeInput] = useState('');
  const [s4Logs, setS4Logs] = useState([]);
  const [s4Success, setS4Success] = useState(false);

  // Journal selection states
  const [selectedJournalId, setSelectedJournalId] = useState('j1');
  const [activeJournalVersion, setActiveJournalVersion] = useState(2);
  const [activeJournalTab, setActiveJournalTab] = useState('plan');
  const [showProjectTasks, setShowProjectTasks] = useState(true);
  const [showCurriculumSidebar, setShowCurriculumSidebar] = useState(true);
  const [showExercisesSidebar, setShowExercisesSidebar] = useState(true);
  const [curriculumDetailTab, setCurriculumDetailTab] = useState('plan');
  
  // Tab fields state
  const [editingPlanVision, setEditingPlanVision] = useState('');
  const [editingPlanSpecs, setEditingPlanSpecs] = useState('');
  const [editingPlanFlow, setEditingPlanFlow] = useState('');
  const [editingCodePrompt, setEditingCodePrompt] = useState('');
  const [editingCodeOutput, setEditingCodeOutput] = useState('');
  const [editingCodeReview, setEditingCodeReview] = useState('');
  const [editingTestCases, setEditingTestCases] = useState('');
  const [editingTestResults, setEditingTestResults] = useState('');
  const [editingIterationChanges, setEditingIterationChanges] = useState('');
  const [editingIterationLessons, setEditingIterationLessons] = useState('');

  // Level 1 Sessions 5-8: JS Sandbox exercise states (Keyboard Control, Boundary Guards, Loops, Modular Functions)
  const [s5ActiveExercise, setS5ActiveExercise] = useState(1);
  const [s5CodeInput, setS5CodeInput] = useState('');
  const [s5Logs, setS5Logs] = useState([]);
  const [s5Success, setS5Success] = useState(false);

  const [s6ActiveExercise, setS6ActiveExercise] = useState(1);
  const [s6CodeInput, setS6CodeInput] = useState('');
  const [s6Logs, setS6Logs] = useState([]);
  const [s6Success, setS6Success] = useState(false);

  const [s7ActiveExercise, setS7ActiveExercise] = useState(1);
  const [s7CodeInput, setS7CodeInput] = useState('');
  const [s7Logs, setS7Logs] = useState([]);
  const [s7Success, setS7Success] = useState(false);

  const [s8ActiveExercise, setS8ActiveExercise] = useState(1);
  const [s8CodeInput, setS8CodeInput] = useState('');
  const [s8Logs, setS8Logs] = useState([]);
  const [s8Success, setS8Success] = useState(false);

  // Level 1 Sessions 9-12: JS Sandbox exercise states (Animations, Collision, DOM HUD, Capstone Assessment)
  const [s9ActiveExercise, setS9ActiveExercise] = useState(1);
  const [s9CodeInput, setS9CodeInput] = useState('');
  const [s9Logs, setS9Logs] = useState([]);
  const [s9Success, setS9Success] = useState(false);

  const [s10ActiveExercise, setS10ActiveExercise] = useState(1);
  const [s10CodeInput, setS10CodeInput] = useState('');
  const [s10Logs, setS10Logs] = useState([]);
  const [s10Success, setS10Success] = useState(false);

  const [s11ActiveExercise, setS11ActiveExercise] = useState(1);
  const [s11CodeInput, setS11CodeInput] = useState('');
  const [s11Logs, setS11Logs] = useState([]);
  const [s11Success, setS11Success] = useState(false);

  const [s12ActiveExercise, setS12ActiveExercise] = useState(1);
  const [s12CodeInput, setS12CodeInput] = useState('');
  const [s12Logs, setS12Logs] = useState([]);
  const [s12Success, setS12Success] = useState(false);

  // Live console.log()/error output forwarded from the JS Sandbox preview iframes (Sessions 4-12)
  const [simConsoleLogs, setSimConsoleLogs] = useState([]);

  // Per-exercise completion map: sessionId -> array of passed exercise numbers.
  // Server-backed (exercise_progress table), so progress follows the student
  // across devices. Individual passes are POSTed as they happen.
  const [exerciseProgress, setExerciseProgress] = useState({});

  // Load per-user exercise progress from the server once the user is known.
  // Any progress left in localStorage by the earlier device-local implementation
  // is migrated to the server on first load, then the legacy key is removed.
  useEffect(() => {
    if (!currentUser?.id) {
      setExerciseProgress({});
      return;
    }

    const legacyKey = `detective_exercise_progress_${currentUser.id}`;
    let legacyMap = {};
    try {
      const stored = localStorage.getItem(legacyKey);
      if (stored) legacyMap = JSON.parse(stored) || {};
    } catch { legacyMap = {}; }

    fetch('/api/user/exercise-progress', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to load exercise progress');
        return res.json();
      })
      .then(serverMap => {
        // Collect legacy entries the server doesn't know about yet
        const missing = [];
        Object.entries(legacyMap).forEach(([sessionId, nums]) => {
          (Array.isArray(nums) ? nums : []).forEach(exerciseNum => {
            if (!(serverMap[sessionId] || []).includes(exerciseNum)) {
              missing.push({ sessionId, exerciseNum });
            }
          });
        });

        if (missing.length === 0) {
          setExerciseProgress(serverMap);
          localStorage.removeItem(legacyKey);
          return;
        }

        // One-time migration: push legacy progress up, then adopt the merged map
        fetch('/api/user/exercise-progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ entries: missing })
        })
          .then(res => res.json())
          .then(data => {
            setExerciseProgress(data.progress || serverMap);
            localStorage.removeItem(legacyKey);
          })
          .catch(err => {
            console.warn('Legacy progress migration failed, keeping local copy:', err.message);
            // Merge locally so the student still sees their checkmarks; retry next login
            const merged = { ...serverMap };
            missing.forEach(({ sessionId, exerciseNum }) => {
              merged[sessionId] = [...(merged[sessionId] || []), exerciseNum];
            });
            setExerciseProgress(merged);
          });
      })
      .catch(err => {
        console.warn('Failed to load exercise progress from server, using local fallback:', err.message);
        setExerciseProgress(legacyMap);
      });
  }, [currentUser?.id, token]);

  useEffect(() => {
    const handleSimMessage = (event) => {
      if (!event.data || !event.data.__sim) return;
      setSimConsoleLogs(prev => [...prev.slice(-19), { type: event.data.type === 'error' ? 'error' : 'info', text: event.data.text }]);
    };
    window.addEventListener('message', handleSimMessage);
    return () => window.removeEventListener('message', handleSimMessage);
  }, []);

  // JSON Serialization logic
  const serializeJournalData = (planVision, planSpecs, planFlow, codeOutput, codeReview, testCases, testResults, iterationChanges, iterationLessons) => {
    return JSON.stringify({
      planVision,
      planSpecs,
      planFlow,
      codeOutput,
      codeReview,
      testCases,
      testResults,
      iterationChanges,
      iterationLessons
    });
  };

  // planSpecs now holds the merged "System Parts & Information" answer. Older entries saved
  // hierarchy/variables as two separate fields (planSpecs + planData) — fold any legacy
  // planData content into planSpecs on load so nothing a student already wrote is lost.
  const deserializeJournalData = (rawText) => {
    try {
      const data = JSON.parse(rawText);
      const legacySpecs = [data.planSpecs, data.planData].filter(Boolean).join('\n\n');
      return {
        planVision: data.planVision || '',
        planSpecs: legacySpecs,
        planFlow: data.planFlow || '',
        codeOutput: data.codeOutput || '',
        codeReview: data.codeReview || '',
        testCases: data.testCases || '',
        testResults: data.testResults || '',
        iterationChanges: data.iterationChanges || '',
        iterationLessons: data.iterationLessons || ''
      };
    } catch {
      return {
        planVision: '',
        planSpecs: '',
        planFlow: '',
        codeOutput: rawText || '',
        codeReview: '',
        testCases: '',
        testResults: '',
        iterationChanges: '',
        iterationLessons: ''
      };
    }
  };

  // Handle user authentication load
  useEffect(() => {
    if (!token) {
      setCurrentUser(null);
      return;
    }

    fetch('/api/user', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error("Session expired or invalid");
        return res.json();
      })
      .then(data => {
        setCurrentUser(data);
        if (data.points !== undefined) setPoints(data.points);
        if (data.solvedCases) setSolvedCases(data.solvedCases);
      })
      .catch(err => {
        console.warn("Auth token verification failed:", err.message);
        setToken(null);
        localStorage.removeItem('detective_token');
      });

    fetch('/api/journal', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setJournalEntries(data);
          if (data[0]) {
            setSelectedJournalId(data[0].id);
            setActiveJournalVersion(data[0].version);
          }
        }
      })
      .catch(err => console.warn("Failed to fetch journals:", err.message));
  }, [token]);

  // Load student list for teacher admin panel
  const fetchStudentsList = useCallback(() => {
    if (!token) return;
    fetch('/api/admin/students', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setStudents(data);
        }
      })
      .catch(err => console.warn("Failed to load students list:", err.message));
  }, [token]);

  const fetchLeaderboard = useCallback(() => {
    if (!token) return;
    fetch('/api/leaderboard', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setLeaderboardData(data);
        }
      })
      .catch(err => console.warn("Failed to load leaderboard:", err.message));
  }, [token]);

  useEffect(() => {
    if (token && currentUser && currentUser.role === 'teacher') {
      fetchStudentsList();
    }
  }, [token, currentUser, fetchStudentsList]);

  useEffect(() => {
    if (activeTab === 'leaderboard') {
      fetchLeaderboard();
    }
  }, [activeTab, token, fetchLeaderboard]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    if (!loginUsername || !loginPassword) {
      setLoginError('Both username and password are required.');
      return;
    }

    fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: loginUsername, password: loginPassword })
    })
      .then(async res => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Invalid username or password");
        }
        return data;
      })
      .then(data => {
        if (data.success && data.token) {
          localStorage.setItem('detective_token', data.token);
          setToken(data.token);
          setLoginUsername('');
          setLoginPassword('');
        }
      })
      .catch(err => {
        setLoginError(err.message);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('detective_token');
    setToken(null);
    setCurrentUser(null);
    setPoints(0);
    setSolvedCases({});
    setJournalEntries([]);
    setActiveTab('dashboard');
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    setAdminStatusMsg('');
    if (!newStudentUsername || !newStudentPassword || !newStudentName) {
      setAdminStatusMsg('All student fields are required.');
      return;
    }

    fetch('/api/admin/students', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        username: newStudentUsername,
        password: newStudentPassword,
        name: newStudentName,
        level: newStudentLevel
      })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to create student"); });
        return res.json();
      })
      .then(data => {
        setAdminStatusMsg(`Success: Student "${data.student.name}" registered successfully.`);
        setNewStudentUsername('');
        setNewStudentPassword('');
        setNewStudentName('');
        setNewStudentLevel('L1');
        fetchStudentsList();
      })
      .catch(err => {
        setAdminStatusMsg(`Error: ${err.message}`);
      });
  };

  const handleUpdateStudentLevel = (studentId, level) => {
    if (!token) return;
    fetch('/api/admin/students/level', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ studentId, level })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to update level"); });
        return res.json();
      })
      .then(() => {
        fetchStudentsList();
      })
      .catch(err => {
        console.error("Failed to update student level:", err.message);
        alert("Failed to update student level: " + err.message);
      });
  };

  const handleUpdateStudentPoints = (studentId, newPoints) => {
    if (!token) return;
    fetch('/api/admin/students/points', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ studentId, points: newPoints })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to update points"); });
        return res.json();
      })
      .then(() => {
        fetchStudentsList();
      })
      .catch(err => {
        console.error("Failed to update student points:", err.message);
        alert("Failed to update student points: " + err.message);
      });
  };

  const handleViewStudentJournal = (student) => {
    if (!token) return;
    setViewingStudent(student);
    setViewingJournalData([]);
    setViewingJournalEntryId(null);
    setViewingJournalVersion(null);
    setViewingJournalLoading(true);
    fetch(`/api/admin/students/${student.id}/journal`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to load student journal"); });
        return res.json();
      })
      .then(data => {
        setViewingJournalData(data);
        if (data[0]) {
          setViewingJournalEntryId(data[0].id);
          setViewingJournalVersion(data[0].activeVersion);
        }
      })
      .catch(err => {
        console.error("Failed to load student journal:", err.message);
        alert("Failed to load student journal: " + err.message);
      })
      .finally(() => setViewingJournalLoading(false));
  };

  const handleCloseStudentJournal = () => {
    setViewingStudent(null);
    setViewingJournalData([]);
    setViewingJournalEntryId(null);
    setViewingJournalVersion(null);
  };

  const handleMoveS1Step = (idx, direction) => {
    setS1Sequence(prev => {
      const next = [...prev];
      if (direction === 'up' && idx > 0) {
        const temp = next[idx];
        next[idx] = next[idx - 1];
        next[idx - 1] = temp;
      } else if (direction === 'down' && idx < next.length - 1) {
        const temp = next[idx];
        next[idx] = next[idx + 1];
        next[idx + 1] = temp;
      }
      return next;
    });
  };

  const updatePointsDB = (newVal) => {
    setPoints(newVal);
    if (!token) return;
    fetch('/api/user/points', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ points: newVal })
    })
    .catch(err => console.warn("Failed to sync points to DB:", err.message));
  };

  // Active campaign variables
  const currentCampaign = CAMPAIGN_THEMES[campaignId];
  const activeMainQuest = currentCampaign.levels[selectedLevel].mainQuest;
  const activeLevelSessions = currentCampaign.levels[selectedLevel].sessions;
  const selectedSession = activeLevelSessions.find(s => s.id === selectedSessionId) || activeLevelSessions[0];

  // Calculate Detective Rank based on points
  const getRank = (score) => {
    if (score >= 1200) return { title: 'Master Architect', xpMin: 1200, xpMax: 2000 };
    if (score >= 800) return { title: 'Senior Auditor', xpMin: 800, xpMax: 1200 };
    if (score >= 400) return { title: 'Junior Investigator', xpMin: 400, xpMax: 800 };
    return { title: 'Novice Decoder', xpMin: 0, xpMax: 400 };
  };

  const rank = getRank(points);
  const xpPercent = Math.min(100, Math.max(0, ((points - rank.xpMin) / (rank.xpMax - rank.xpMin)) * 100));

  // Sequential quest gating: a quest can only be claimed once every earlier quest
  // in its level's sequence has already been solved. Teachers bypass this check.
  // Level 1 gates against the full 12-session curriculum order (every L1 session has
  // a claimable sandbox); other levels gate within the Quest Board's campaign list,
  // since their remaining sessions have no in-app completion path yet.
  const isQuestLocked = (sessionId) => {
    if (currentUser?.role === 'teacher') return false;
    const sequence = sessionId?.startsWith('l1-') ? L1_SESSION_SEQUENCE : activeLevelSessions;
    const idx = sequence.findIndex(s => s.id === sessionId);
    if (idx <= 0) return false;
    return sequence.slice(0, idx).some(s => !solvedCases[s.id]);
  };

  // Per-exercise completion tracking for the Level 1 sandbox sessions. A session's
  // XP is claimed only when ALL of its exercises have been passed. Each pass is
  // persisted server-side (exercise_progress table) so progress follows the student
  // across devices; the local state update is optimistic for instant UI feedback.
  const markExerciseComplete = (sessionId, exNum) => {
    const total = EXERCISE_COUNTS[sessionId] || 10;
    const done = exerciseProgress[sessionId] || [];
    const nextDone = done.includes(exNum) ? done : [...done, exNum];
    if (!done.includes(exNum)) {
      setExerciseProgress(prev => {
        const prevDone = prev[sessionId] || [];
        return prevDone.includes(exNum) ? prev : { ...prev, [sessionId]: [...prevDone, exNum] };
      });
      fetch('/api/user/exercise-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ entries: [{ sessionId, exerciseNum: exNum }] })
      }).catch(err => console.warn('Failed to save exercise progress to server:', err.message));
    }
    const allDone = nextDone.length >= total;
    return { allDone, doneCount: nextDone.length, total, locked: allDone && !solvedCases[sessionId] && isQuestLocked(sessionId) };
  };

  // Trigger simulated AI generation
  const handleGenerate = () => {
    if (!sandboxTask.trim()) return;

    let mockCode = `// Generated Code block based on prompt spec\n`;
    mockCode += `// Campaign Theme: ${currentCampaign.name}\n`;
    mockCode += `// Role: ${sandboxRole}\n`;
    mockCode += `// Task: ${sandboxTask}\n\n`;

    if (sandboxTask.toLowerCase().includes('drone') || sandboxTask.toLowerCase().includes('autopilot') || sandboxTask.toLowerCase().includes('navigation') || sandboxTask.toLowerCase().includes('infiltration') || sandboxTask.toLowerCase().includes('oxygen') || sandboxTask.toLowerCase().includes('regulator')) {
      const handlesPower = sandboxConstraints.toLowerCase().includes('power') || sandboxConstraints.toLowerCase().includes('initialize') || sandboxConstraints.toLowerCase().includes('state') || sandboxConstraints.toLowerCase().includes('powerstate');
      if (handlesPower) {
        mockCode += `// Secure autopilot sequential controller\nfunction verifyAutopilot(powerState, targetCoords) {\n  if (powerState !== "ON") {\n    throw new Error("💥 CRITICAL ERROR: Attempted to scan or fly while drone is unpowered!");\n  }\n  if (!targetCoords) {\n    throw new Error("💥 CRITICAL ERROR: Target coordinates are undefined!");\n  }\n  console.log("Preconditions passed. Navigating to coords: " + targetCoords);\n  return "SUCCESS: Target reached";\n}`;
      } else {
        mockCode += `// Buggy autopilot sequence (Missing power preconditions check)\nfunction verifyAutopilot(powerState, targetCoords) {\n  // Bug: Attempting flight without power check!\n  console.log("Navigating to coords: " + targetCoords);\n  return "SUCCESS: Drone launched";\n}`;
      }
    } else if (sandboxTask.toLowerCase().includes('feeder') || sandboxTask.toLowerCase().includes('cat') || sandboxTask.toLowerCase().includes('water')) {
      const handlesCat = sandboxConstraints.toLowerCase().includes('sneaky') || sandboxConstraints.toLowerCase().includes('cat') || sandboxConstraints.toLowerCase().includes('stir');
      if (handlesCat) {
        mockCode += `class SmartFeeder {\n  dispense() {\n    if (this.plateWeight > 50) return "Feeder Blocked: Plate Full";\n    if (this.catCheckTime < 300) {\n      this.triggerBuzzer();\n      return "Warning: Sneaky Cat Detected!";\n    }\n    this.foodDispensed = true;\n  }\n}`;
      } else {
        mockCode += `class SmartFeeder {\n  dispense() {\n    // Bug: missing sneaky cat limits and plate check!\n    this.foodDispensed = true;\n    return "Dispensed";\n  }\n}`;
      }
    } else if (sandboxTask.toLowerCase().includes('database') || sandboxTask.toLowerCase().includes('connect') || sandboxTask.toLowerCase().includes('crud')) {
      const handlesConnection = sandboxConstraints.toLowerCase().includes('connect') || sandboxConstraints.toLowerCase().includes('connection') || sandboxConstraints.toLowerCase().includes('credentials') || sandboxConstraints.toLowerCase().includes('delay');
      if (handlesConnection) {
        mockCode += `// Secure Cloud Database Connection\nimport { createClient } from '@supabase/supabase-js';\n\nconst dbUrl = import.meta.env.VITE_SUPABASE_URL || 'https://mock-db.supabase.co';\nconst dbKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';\n\nexport const db = createClient(dbUrl, dbKey);\n\nexport async function syncData(tableName, payload) {\n  if (!payload || Object.keys(payload).length === 0) {\n    throw new Error("Validation Error: Cannot insert empty records.");\n  }\n  \n  const { data, error } = await db\n    .from(tableName)\n    .insert([payload]);\n    \n  if (error) {\n    console.error("Database connection failure:", error.message);\n    throw error;\n  }\n  return data;\n}`;
      } else {
        mockCode += `// Buggy Connection (No error handling, assumes direct socket open)\nimport { createClient } from '@supabase/supabase-js';\n\n// Bad practice: hardcoded defaults!\nexport const db = createClient('http://localhost:54321', 'direct_development_key_123');\n\nexport async function syncData(tableName, payload) {\n  // Missing empty check and try-catch!\n  const { data } = await db.from(tableName).insert([payload]);\n  return data;\n}`;
      }
    } else if (sandboxTask.toLowerCase().includes('env') || sandboxTask.toLowerCase().includes('environment') || sandboxTask.toLowerCase().includes('gitignore') || sandboxTask.toLowerCase().includes('variables')) {
      const preventsHardcoding = sandboxConstraints.toLowerCase().includes('hardcoded') || sandboxConstraints.toLowerCase().includes('prevent') || sandboxConstraints.toLowerCase().includes('gitignore') || sandboxConstraints.toLowerCase().includes('existence');
      if (preventsHardcoding) {
        mockCode += `// Secure Environment Variables Validation\nconst DB_PASSWORD = import.meta.env.VITE_DATABASE_PASSWORD;\nconst API_KEY = import.meta.env.VITE_API_KEY;\n\n// Scan check against hardcoding\nif (DB_PASSWORD === 'production_secret_key_12345') {\n  throw new Error("SECURITY BREACH: Raw password detected in source control!");\n}\n\nexport function initializeSecrets() {\n  if (!DB_PASSWORD || !API_KEY) {\n    console.warn("Falling back to local offline sandbox. Missing env configuration keys.");\n    return { status: "fallback", loaded: false };\n  }\n  console.log("✓ Environment configurations validated successfully.");\n  return { status: "active", loaded: true };\n}`;
      } else {
        mockCode += `// Hardcoded Configuration (API Secret Exposed!)\nexport const config = {\n  DB_URL: 'https://production-db.company.com',\n  API_KEY: 'production_secret_key_12345', // Hardcoded plaintext vulnerability!\n  status: 'active'\n};`;
      }
    } else if (sandboxTask.toLowerCase().includes('security') || sandboxTask.toLowerCase().includes('rls') || sandboxTask.toLowerCase().includes('row-level') || sandboxTask.toLowerCase().includes('isolation')) {
      const securesRls = sandboxConstraints.toLowerCase().includes('uid') || sandboxConstraints.toLowerCase().includes('auth.uid()') || sandboxConstraints.toLowerCase().includes('user_id') || sandboxConstraints.toLowerCase().includes('isolation');
      if (securesRls) {
        mockCode += `/* SQL Row-Level Security Configuration Wards */\nALTER TABLE public.user_records ENABLE ROW LEVEL SECURITY;\n\n-- RLS Policies\nCREATE POLICY "Allow read only by record owner" ON public.user_records\n  FOR SELECT\n  USING (auth.uid() = user_id);\n\nCREATE POLICY "Allow insert only by creator" ON public.user_records\n  FOR INSERT\n  WITH CHECK (auth.uid() = user_id);\n\nCREATE POLICY "Allow update only by creator" ON public.user_records\n  FOR UPDATE\n  USING (auth.uid() = user_id);`;
      } else {
        mockCode += `/* Vulnerable Database Schema (RLS Disabled) */\nALTER TABLE public.user_records DISABLE ROW LEVEL SECURITY;\n\n-- Direct select allows anyone to query all rows\nCREATE POLICY "Public full access" ON public.user_records\n  FOR ALL\n  USING (true);`;
      }
    } else {
      mockCode += `function executeCustomLogic(input) {\n  // General template output\n  const data = input || {};\n  console.log("Executing task: ${sandboxTask}");\n  return { status: "success", data };\n}`;
    }

    setSandboxCodeOutput(mockCode);
    setChaosLogs([]);
    setSandboxSuccess(false);
  };

  // Run the simulated Chaos Monkey testing suite
  const runChaosMonkey = () => {
    if (!sandboxCodeOutput) return;

    setIsRunningChaos(true);
    setChaosLogs([
      { type: 'info', text: 'Initializing Chaos Monkey simulation engine...' },
      { type: 'info', text: 'Spawning target sandbox container...' }
    ]);

    let step = 0;
    const isDrone = sandboxTask.toLowerCase().includes('drone') || sandboxTask.toLowerCase().includes('autopilot') || sandboxTask.toLowerCase().includes('navigation') || sandboxTask.toLowerCase().includes('infiltration') || sandboxTask.toLowerCase().includes('oxygen') || sandboxTask.toLowerCase().includes('regulator');
    const isFeeder = sandboxTask.toLowerCase().includes('feeder') || sandboxTask.toLowerCase().includes('cat') || sandboxTask.toLowerCase().includes('water');
    const isDatabase = sandboxTask.toLowerCase().includes('database') || sandboxTask.toLowerCase().includes('connect') || sandboxTask.toLowerCase().includes('crud');
    const isEnvKeys = sandboxTask.toLowerCase().includes('env') || sandboxTask.toLowerCase().includes('environment') || sandboxTask.toLowerCase().includes('gitignore') || sandboxTask.toLowerCase().includes('variables');
    const isRls = sandboxTask.toLowerCase().includes('security') || sandboxTask.toLowerCase().includes('rls') || sandboxTask.toLowerCase().includes('row-level') || sandboxTask.toLowerCase().includes('isolation');

    const interval = setInterval(() => {
      step++;
      if (step === 1) {
        setChaosLogs(prev => [...prev, { type: 'info', text: 'Running Test Scenario 1: Standard happy path...' }]);
      } else if (step === 2) {
        setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 1: PASSED. Standard inputs execute successfully.' }]);
      } else if (step === 3) {
        setChaosLogs(prev => [...prev, { type: 'info', text: 'Running Test Scenario 2: Boundary / empty conditions...' }]);
      } else if (step === 4) {
        if (isDrone) {
          const handlesEmpty = sandboxEdgeCases.toLowerCase().includes('null') || sandboxEdgeCases.toLowerCase().includes('empty') || sandboxEdgeCases.toLowerCase().includes('undefined');
          if (handlesEmpty) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 2: PASSED. Script throws error on null target coordinates.' }]);
          } else {
            setChaosLogs(prev => [...prev, { type: 'error', text: 'Test 2: FAILED! Null coordinate values caused drone navigation system crash.' }]);
          }
        } else if (isFeeder) {
          setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 2: PASSED. System limits inputs correctly.' }]);
        } else if (isDatabase) {
          const handlesEmpty = sandboxEdgeCases.toLowerCase().includes('empty') || sandboxEdgeCases.toLowerCase().includes('null') || sandboxEdgeCases.toLowerCase().includes('credentials');
          if (handlesEmpty) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 2: PASSED. Empty inserts are validated and blocked from database.' }]);
          } else {
            setChaosLogs(prev => [...prev, { type: 'error', text: 'Test 2: FAILED! Empty insert allowed! Database query failed due to NULL constraint violation.' }]);
          }
        } else if (isEnvKeys) {
          const handlesUndefined = sandboxEdgeCases.toLowerCase().includes('undefined') || sandboxEdgeCases.toLowerCase().includes('missing') || sandboxEdgeCases.toLowerCase().includes('secrets');
          if (handlesUndefined) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 2: PASSED. Fallback to offline mock mode activated when environment keys are absent.' }]);
          } else {
            setChaosLogs(prev => [...prev, { type: 'error', text: 'Test 2: FAILED! System crash! ReferenceError: process is not defined during fallback resolution.' }]);
          }
        } else if (isRls) {
          const handlesAnonymous = sandboxEdgeCases.toLowerCase().includes('null') || sandboxEdgeCases.toLowerCase().includes('anonymous') || sandboxEdgeCases.toLowerCase().includes('cross');
          if (handlesAnonymous) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 2: PASSED. Anonymous token verified: DB policy successfully returned 0 rows (Access Denied).' }]);
          } else {
            setChaosLogs(prev => [...prev, { type: 'error', text: 'Test 2: FAILED! Security leak! Anonymous database queries returned sensitive rows.' }]);
          }
        } else {
          setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 2: PASSED. Basic validation works.' }]);
        }
      } else if (step === 5) {
        setChaosLogs(prev => [...prev, { type: 'info', text: 'Running Test Scenario 3: Malicious exploits / constraints...' }]);
      } else if (step === 6) {
        if (isDrone) {
          const handlesPower = sandboxConstraints.toLowerCase().includes('power') || sandboxConstraints.toLowerCase().includes('initialize') || sandboxConstraints.toLowerCase().includes('state') || sandboxConstraints.toLowerCase().includes('powerstate');
          if (handlesPower) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 3: PASSED. Autopilot successfully verified system power and target coordinates before navigation.' }]);
            setSandboxSuccess(true);
          } else {
            setChaosLogs(prev => [...prev, {
              type: 'error',
              text: 'Test 3: FAILED! Unpowered autopilot command injected. Drone attempted flight without power checks and crashed.'
            }]);
            setSandboxSuccess(false);
          }
        } else if (isFeeder) {
          const handlesCat = sandboxConstraints.toLowerCase().includes('sneaky') || sandboxConstraints.toLowerCase().includes('cat') || sandboxConstraints.toLowerCase().includes('stir');
          if (handlesCat) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 3: PASSED. Smart Feeder triggered buzzer for Cat and blocked extra food.' }]);
            setSandboxSuccess(true);
          } else {
            setChaosLogs(prev => [...prev, {
              type: 'error',
              text: 'Test 3: FAILED! Cat triggered dispenser twice in 1 minute. Feeder double-dispensed, violating feeding schedules.'
            }]);
            setSandboxSuccess(false);
          }
        } else if (isDatabase) {
          const handlesConnection = sandboxConstraints.toLowerCase().includes('connect') || sandboxConstraints.toLowerCase().includes('connection') || sandboxConstraints.toLowerCase().includes('credentials') || sandboxConstraints.toLowerCase().includes('delay');
          const handlesEmpty = sandboxEdgeCases.toLowerCase().includes('empty') || sandboxEdgeCases.toLowerCase().includes('null') || sandboxEdgeCases.toLowerCase().includes('credentials');
          if (handlesConnection && handlesEmpty) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 3: PASSED. Client dynamically retries on latency spike and establishes secure socket connection.' }]);
            setSandboxSuccess(true);
          } else {
            const reason = !handlesConnection ? 'No connection timeout logic! Client hung on server latency spike.' : 'Failed empty insert validation check!';
            setChaosLogs(prev => [...prev, {
              type: 'error',
              text: `Test 3: FAILED! ${reason}`
            }]);
            setSandboxSuccess(false);
          }
        } else if (isEnvKeys) {
          const preventsHardcoding = sandboxConstraints.toLowerCase().includes('hardcoded') || sandboxConstraints.toLowerCase().includes('prevent') || sandboxConstraints.toLowerCase().includes('gitignore') || sandboxConstraints.toLowerCase().includes('existence');
          const handlesUndefined = sandboxEdgeCases.toLowerCase().includes('undefined') || sandboxEdgeCases.toLowerCase().includes('missing') || sandboxEdgeCases.toLowerCase().includes('secrets');
          if (preventsHardcoding && handlesUndefined) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 3: PASSED. Fuzzer scanned build logs: verified zero production secrets are exposed in plaintext.' }]);
            setSandboxSuccess(true);
          } else {
            const reason = !preventsHardcoding ? 'Vulnerability flag! Verified plaintext database credentials committed to code.' : 'Env file parsing crashed on missing key boundary.';
            setChaosLogs(prev => [...prev, {
              type: 'error',
              text: `Test 3: FAILED! ${reason}`
            }]);
            setSandboxSuccess(false);
          }
        } else if (isRls) {
          const securesRls = sandboxConstraints.toLowerCase().includes('uid') || sandboxConstraints.toLowerCase().includes('auth.uid()') || sandboxConstraints.toLowerCase().includes('user_id') || sandboxConstraints.toLowerCase().includes('isolation');
          const handlesAnonymous = sandboxEdgeCases.toLowerCase().includes('null') || sandboxEdgeCases.toLowerCase().includes('anonymous') || sandboxEdgeCases.toLowerCase().includes('cross');
          if (securesRls && handlesAnonymous) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 3: PASSED. Cross-tenant test: User B blocked from writing to User A\'s records. Row-Level Security fully active.' }]);
            setSandboxSuccess(true);
          } else {
            const reason = !securesRls ? 'Breach detected! User B successfully updated User A\'s records.' : 'No RLS policies active! Anonymous read bypassed authentication controls.';
            setChaosLogs(prev => [...prev, {
              type: 'error',
              text: `Test 3: FAILED! ${reason}`
            }]);
            setSandboxSuccess(false);
          }
        } else {
          setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 3: PASSED. All custom constraints satisfied.' }]);
          setSandboxSuccess(true);
        }
        
        setIsRunningChaos(false);
        clearInterval(interval);
      }
    }, 1200);
  };

  // Claim points for cases/sessions
  const claimCaseEvidence = (sessionId, xpValue) => {
    if (solvedCases[sessionId]) return;
    if (isQuestLocked(sessionId)) return;

    // Persist completed quest and reward to local MySQL DB
    fetch('/api/user/quests', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ questId: sessionId, xpReward: xpValue })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setSolvedCases(prev => ({ ...prev, [sessionId]: true }));
        setPoints(data.activePoints);
      }
    })
    .catch(err => {
      console.warn("DB save failed, falling back to local memory updates:", err.message);
      setSolvedCases(prev => ({ ...prev, [sessionId]: true }));
      setPoints(prev => prev + xpValue);
    });

    const journalId = 'journal_' + Date.now();
    const sessionDetails = activeLevelSessions.find(s => s.id === sessionId) || CURRICULUM_DATA.find(s => s.id === sessionId);
    const journalTitle = sessionDetails ? sessionDetails.title : 'New Quest Log';
    const journalPrompt = `ROLE: ${sandboxRole}\nTASK: ${sandboxTask}\nCONSTRAINTS: ${sandboxConstraints}\nINPUTS: ${sandboxInput}\nEDGE CASES: ${sandboxEdgeCases}`;
    const journalCode = sandboxCodeOutput || '// No code output saved.';

    // Save prompt spec to journal in MySQL DB
    fetch('/api/journal', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        id: journalId,
        title: journalTitle,
        prompt: journalPrompt,
        code: journalCode
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        // Fetch fresh list from server
        fetch('/api/journal', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
          .then(res => res.json())
          .then(list => setJournalEntries(list));
      }
    })
    .catch(err => {
      console.warn("Journal DB save failed, writing to local client state:", err.message);
      const newJournal = {
        id: journalId,
        date: new Date().toISOString().replace('T', ' ').substring(0, 16),
        title: journalTitle,
        version: 1,
        activeVersion: 1,
        history: [
          {
            version: 1,
            prompt: journalPrompt,
            code: journalCode
          }
        ]
      };
      setJournalEntries(prev => [newJournal, ...prev]);
    });
  };

  // Single claim authority for exercise-driven XP: whenever exercise progress or the
  // solved map changes, award any session whose exercises are ALL complete, isn't
  // already solved, and isn't blocked by sequential gating. This also retro-claims a
  // session a student finished while it was still locked, once its predecessors are done.
  useEffect(() => {
    if (!currentUser) return;
    for (const [sessionId, done] of Object.entries(exerciseProgress)) {
      const total = EXERCISE_COUNTS[sessionId];
      if (total && done.length >= total && !solvedCases[sessionId] && !isQuestLocked(sessionId)) {
        claimCaseEvidence(sessionId, 100);
        break; // claim one at a time; solvedCases update re-runs this effect for the next
      }
    }
    // isQuestLocked/claimCaseEvidence intentionally omitted: they close over sandbox
    // state that changes every keystroke and are recreated each render, so including
    // them would rerun this effect far more often than the state it actually cares about.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseProgress, solvedCases, currentUser]);

  // Helper to load templates into the sandbox
  const loadTemplate = (session) => {
    setSandboxSessionId(session.id);
    if (session.id === 'l1-s1') {
      setSandboxRole(campaignId === 'cyberpunk' ? 'Junior Autopilot Car Controller' : campaignId === 'mars' ? 'Atmospheric Telemetry Systems Operator' : 'Junior Apprentice Spellcaster');
      setSandboxTask(campaignId === 'cyberpunk' ? 'Configure autopilot car sequential driving instructions' : campaignId === 'mars' ? 'Configure oxygen regulator sequential boot instructions' : 'Write cauldron cauldron sequence');
      setSandboxConstraints(campaignId === 'cyberpunk' ? 'Verify P/N gear and depress brake pedal before starting ignition.' : campaignId === 'mars' ? 'Power regulator boot sequence, verify oxygen levels.' : 'Goblin proof shields. Cauldron heat monitoring.');
      setSandboxInput(campaignId === 'cyberpunk' ? 'gearState, brakeState, engineIgnition' : campaignId === 'mars' ? 'powerState, oxygenSensorValue, regulatorValveState' : 'cauldronTemp, goblinBait');
      setSandboxEdgeCases(campaignId === 'cyberpunk' ? 'Incorrect ignition sequence, gear shifting lockouts' : campaignId === 'mars' ? 'Unpowered boot checks, sensor failure' : 'Mana spikes, double cast');
    } else if (session.id === 'l1-s2') {
      setSandboxRole('Junior HTML Developer');
      setSandboxTask('Assemble HTML elements for the Racing Car Game track and dashboard');
      setSandboxConstraints('Use correct tag elements (div, h2, span) with matching open/close tags and specific id/class attributes.');
      setSandboxInput('HTML source code');
      setSandboxEdgeCases('Unclosed elements, incorrect tag nesting, spelling mistakes in ids');
      setS2ActiveExercise(1);
      setS2CodeInput(S2_EXERCISES[0].preloaded);
      setS2Logs([]);
      setS2Success(false);
    } else if (session.id === 'l1-s3') {
      setSandboxRole('Junior UI/UX Designer');
      setSandboxTask('Style the Racing Car track lanes and coordinate systems');
      setSandboxConstraints('Apply absolute positioning and layout rules (width, height, background-color, borders) in styles.css.');
      setSandboxInput('CSS styling definitions');
      setSandboxEdgeCases('Missing relative anchor positioning, coordinate boundaries overflow, missing display rules');
      setS3ActiveExercise(1);
      setS3CodeInput(S3_EXERCISES[0].preloaded);
      setS3Logs([]);
      setS3Success(false);
    } else if (session.id === 'l1-s4') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Declare and update the Racing Car Game state variables');
      setSandboxConstraints('Use let for mutable state, const for fixed limits, and never quote numeric values.');
      setSandboxInput('carX, speed, score, gameActive');
      setSandboxEdgeCases('Quoted numbers causing string concatenation instead of math, wrong initial values');
      setS4ActiveExercise(1);
      setS4CodeInput(S4_EXERCISES[0].preloaded);
      setS4Logs([]);
      setS4Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s5') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Bind keyboard steering controls to the Racing Car Game');
      setSandboxConstraints('Use window.addEventListener("keydown") and check event.key against exact ArrowLeft/ArrowRight strings.');
      setSandboxInput('event.key, carX');
      setSandboxEdgeCases('Wrong key-string comparisons, missing style unit suffixes');
      setS5ActiveExercise(1);
      setS5CodeInput(S5_EXERCISES[0].preloaded);
      setS5Logs([]);
      setS5Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s6') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Implement track boundary safety guards for the Racing Car Game');
      setSandboxConstraints('Clamp carX between 35 and 295 (the outer lane positions). Clamp speed above 120 back to 100.');
      setSandboxInput('carX, speed');
      setSandboxEdgeCases('Off-by-one boundary errors, string vs. number type mismatches');
      setS6ActiveExercise(1);
      setS6CodeInput(S6_EXERCISES[0].preloaded);
      setS6Logs([]);
      setS6Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s7') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Generate highway lane markers using a for loop');
      setSandboxConstraints('Loop exactly 5 times, computing markerY = i * 120, and append a marker-dash div per iteration.');
      setSandboxInput('i, markerY');
      setSandboxEdgeCases('Missing loop increment (infinite loop), incorrect spacing formula');
      setS7ActiveExercise(1);
      setS7CodeInput(S7_EXERCISES[0].preloaded);
      setS7Logs([]);
      setS7Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s8') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Refactor steering logic into modular functions');
      setSandboxConstraints('Declare updatePlayerPosition(), moveLeft(), and moveRight() as single-purpose functions sharing global carX.');
      setSandboxInput('carX');
      setSandboxEdgeCases('Variable scope leaks, duplicate render calls');
      setS8ActiveExercise(1);
      setS8CodeInput(S8_EXERCISES[0].preloaded);
      setS8Logs([]);
      setS8Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s9') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Build the recursive animation loop for obstacles');
      setSandboxConstraints('Use requestAnimationFrame recursion, gated by a gameActive check, to move and reset the obstacle.');
      setSandboxInput('obstacleY, speed, gameActive');
      setSandboxEdgeCases('Missing gameActive gate causing runaway recursion, missing reset check');
      setS9ActiveExercise(1);
      setS9CodeInput(S9_EXERCISES[0].preloaded);
      setS9Logs([]);
      setS9Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s10') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Implement AABB collision detection between the car and obstacles');
      setSandboxConstraints('Compare left/right/top/bottom bounds using all 4 AABB conditions.');
      setSandboxInput('rect1, rect2 (x, y, width, height)');
      setSandboxEdgeCases('Flipped comparison operators, swapped X/Y axes, exact-edge touches');
      setS10ActiveExercise(1);
      setS10CodeInput(S10_EXERCISES[0].preloaded);
      setS10Logs([]);
      setS10Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s11') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Wire game state to the visible HUD and restart flow');
      setSandboxConstraints('Use textContent (not innerHTML) for score updates, and toggle the "hidden" class for the restart panel.');
      setSandboxInput('score, gameActive');
      setSandboxEdgeCases('Negative score values, restart handler forgetting to reset gameActive');
      setS11ActiveExercise(1);
      setS11CodeInput(S11_EXERCISES[0].preloaded);
      setS11Logs([]);
      setS11Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s12') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Certify the complete Racing Car Game for the Level 1 capstone');
      setSandboxConstraints('Refactor magic numbers into a CONFIG object and pass the final diagnostic sweep.');
      setSandboxInput('CONFIG, carX, speed, score, gameActive');
      setSandboxEdgeCases('Unbounded speed scaling, inconsistent boundary operators, seeded collision bug');
      setS12ActiveExercise(1);
      setS12CodeInput(S12_EXERCISES[0].preloaded);
      setS12Logs([]);
      setS12Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l4-s1') {
      setSandboxRole(campaignId === 'cyberpunk' ? 'Cloud Integration Architect' : campaignId === 'mars' ? 'Mars Network DB Developer' : 'Wizard Core Database Conjurer');
      setSandboxTask(campaignId === 'cyberpunk' ? 'Connect to remote database and execute CRUD' : campaignId === 'mars' ? 'Connect to telemetry database and execute CRUD' : 'Connect spell book to Magic Core Database and execute CRUD');
      setSandboxConstraints('Establish client connection, secure client initialization, handle connectivity delays.');
      setSandboxInput(campaignId === 'cyberpunk' ? 'supabaseUrl, supabaseAnonKey, sensorData' : campaignId === 'mars' ? 'marsDbClient, telemetryData' : 'spellCoreClient, magicalRegistryData');
      setSandboxEdgeCases('Database timeout, empty records, network latency, bad credentials');
    } else if (session.id === 'l4-s2') {
      setSandboxRole(campaignId === 'cyberpunk' ? 'Security Systems Engineer' : campaignId === 'mars' ? 'Rover Telemetry Security Officer' : 'Hogwarts Security Ward Architect');
      setSandboxTask('Configure environment configuration variables and .gitignore settings');
      setSandboxConstraints('Prevent secret token leaks. Zero hardcoded passwords. Check environment variables existence.');
      setSandboxInput('process.env.DB_PASSWORD, import.meta.env.VITE_SUPABASE_ANON_KEY');
      setSandboxEdgeCases('Undefined environment keys, missing keys at build time, committed git secrets');
    } else if (session.id === 'l4-s5') {
      setSandboxRole(campaignId === 'cyberpunk' ? 'Database Security Officer' : campaignId === 'mars' ? 'Interplanetary Security Lead' : 'Hogwarts High Inquisitor of Wards');
      setSandboxTask('Implement SQL Row-Level Security (RLS) policies for user data isolation');
      setSandboxConstraints('Write database policies checking active user uid (auth.uid() = user_id). Block all unauthorized cross-user accesses.');
      setSandboxInput('auth.uid(), user_id, table_name');
      setSandboxEdgeCases('Null user tokens, cross-tenant reads, anonymous accesses, policy bypasses');
    } else {
      // Dynamic loading from CURRICULUM_DATA for all other sessions
      setSandboxRole(session.level === 1 ? 'Logic Blueprint Architect' : session.level === 2 ? 'AI Copilot Specialist' : session.level === 3 ? 'System Architect' : 'Software Engineer');
      setSandboxTask(session.handsOn || session.title);
      setSandboxConstraints(session.objectives ? session.objectives.join(' ') : 'Zero code edits. Verify boundaries.');
      setSandboxInput('inputVars');
      setSandboxEdgeCases('Null parameters, empty lists, unexpected data formats');
    }
    setSandboxCodeOutput(null);
    setChaosLogs([]);
    setSandboxSuccess(false);
  };

  const selectedJournal = journalEntries.find(j => j.id === selectedJournalId) || journalEntries[0];
  const activeJournalHistory = selectedJournal ? selectedJournal.history.find(h => h.version === activeJournalVersion) : null;

  // Sync editing journal text with database value
  useEffect(() => {
    if (activeJournalHistory) {
      const data = deserializeJournalData(activeJournalHistory.code);
      setEditingPlanVision(data.planVision);
      setEditingPlanSpecs(data.planSpecs);
      setEditingPlanFlow(data.planFlow);
      setEditingCodePrompt(activeJournalHistory.prompt || '');
      setEditingCodeOutput(data.codeOutput);
      setEditingCodeReview(data.codeReview);
      setEditingTestCases(data.testCases);
      setEditingTestResults(data.testResults);
      setEditingIterationChanges(data.iterationChanges || '');
      setEditingIterationLessons(data.iterationLessons || '');
    } else {
      setEditingPlanVision('');
      setEditingPlanSpecs('');
      setEditingPlanFlow('');
      setEditingCodePrompt('');
      setEditingCodeOutput('');
      setEditingCodeReview('');
      setEditingTestCases('');
      setEditingTestResults('');
      setEditingIterationChanges('');
      setEditingIterationLessons('');
    }
  }, [selectedJournalId, activeJournalVersion, activeJournalHistory]);

  const handleSaveJournalCode = () => {
    if (!selectedJournalId || !activeJournalVersion || !activeJournalHistory) return;
    const serializedCode = serializeJournalData(
      editingPlanVision,
      editingPlanSpecs,
      editingPlanFlow,
      editingCodeOutput,
      editingCodeReview,
      editingTestCases,
      editingTestResults,
      editingIterationChanges,
      editingIterationLessons
    );
    fetch('/api/journal/version', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        entryId: selectedJournalId,
        version: activeJournalVersion,
        prompt: editingCodePrompt,
        code: serializedCode
      })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to save journal"); });
        return res.json();
      })
      .then(() => {
        fetch('/api/journal', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
          .then(res => res.json())
          .then(data => {
            setJournalEntries(data);
            alert("Journal version saved successfully!");
          });
      })
      .catch(err => {
        console.error("Save journal failed:", err.message);
        alert("Save journal failed: " + err.message);
      });
  };

  const handleAddNewJournalVersion = () => {
    if (!selectedJournalId || !activeJournalHistory) return;
    const serializedCode = serializeJournalData(
      editingPlanVision,
      editingPlanSpecs,
      editingPlanFlow,
      editingCodeOutput,
      editingCodeReview,
      editingTestCases,
      editingTestResults,
      editingIterationChanges,
      editingIterationLessons
    );
    fetch('/api/journal/version', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        entryId: selectedJournalId,
        prompt: editingCodePrompt,
        code: serializedCode
      })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to create version"); });
        return res.json();
      })
      .then(data => {
        fetch('/api/journal', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
          .then(res => res.json())
          .then(list => {
            setJournalEntries(list);
            setActiveJournalVersion(data.nextVersion);
            alert("New version created successfully!");
          });
      })
      .catch(err => {
        console.error("Failed to create version:", err.message);
        alert("Failed to create version: " + err.message);
      });
  };

  if (!token) {
    return (
      <div className="login-outer-container">
        <div className="login-card glass-panel animate-in">
          <div className="login-logo">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <h1 className="login-title">DETECTIVE HUB</h1>
            <p className="login-subtitle">AI-Era Computer Curriculum Portal</p>
          </div>
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username / Control Number</label>
              <input
                id="username"
                type="text"
                className="login-input"
                placeholder="e.g. somboon"
                value={loginUsername}
                onChange={e => setLoginUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Security Access Key</label>
              <input
                id="password"
                type="password"
                className="login-input"
                placeholder="••••••••"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                required
              />
            </div>
            
            {loginError && <div className="login-error">{loginError}</div>}
            
            <button type="submit" className="btn-cyber login-btn">
              Authenticate Profile
            </button>
          </form>
        </div>
      </div>
    );
  }

  const accountName = currentUser ? (currentUser.name || currentUser.username) : 'Detective Me';
  const displayRole = currentUser ? (currentUser.role === 'teacher' ? 'Teacher' : 'Student') : 'Novice';

  return (
    <div className="cyber-container">
      {/* Sidebar navigation */}
      <aside className="sidebar">
        <div className="logo-section">
          <svg className="logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          <span className="logo-text">DETECTIVE HUB</span>
        </div>

        <nav className="sidebar-nav">
          <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"></path>
            </svg>
            Dashboard
          </button>
          
          <button className={`nav-item ${activeTab === 'cases' ? 'active' : ''}`} onClick={() => setActiveTab('cases')}>
            <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Quest Board
          </button>

          <button className={`nav-item ${activeTab === 'curriculum' ? 'active' : ''}`} onClick={() => setActiveTab('curriculum')}>
            <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 20}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            Curriculum Syllabus Catalog
          </button>
          
          <button className={`nav-item ${activeTab === 'sandbox' ? 'active' : ''}`} onClick={() => setActiveTab('sandbox')}>
            <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            Exercises Journal
          </button>
          
          <button className={`nav-item ${activeTab === 'journal' ? 'active' : ''}`} onClick={() => setActiveTab('journal')}>
            <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            Project Journal
          </button>
          
          <button className={`nav-item ${activeTab === 'leaderboard' ? 'active' : ''}`} onClick={() => setActiveTab('leaderboard')}>
            <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 20}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            Leaderboard
          </button>

          {currentUser && currentUser.role === 'teacher' && (
            <button className={`nav-item ${activeTab === 'admin' ? 'active' : ''}`} onClick={() => setActiveTab('admin')} style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', borderRadius: 0, paddingTop: 16 }}>
              <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 20}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Admin Panel
            </button>
          )}

          <button className="nav-item btn-cyber-red" onClick={handleLogout} style={{ borderTop: '1px solid var(--border-color)', borderRadius: 0, padding: 12, display: 'flex', gap: 10, width: '100%', cursor: 'pointer', background: 'transparent', textAlign: 'left', font: 'inherit', color: 'var(--accent-red)' }}>
            <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 20}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            Log Out
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="avatar"></div>
          <div className="user-info">
            <div className="username">{accountName}</div>
            <div className="rank">{displayRole} &bull; {rank.title}</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="header">
          <div className="header-title">
            <h1>
              {activeTab === 'dashboard' && 'Operations Dashboard'}
              {activeTab === 'cases' && 'Quest Board'}
              {activeTab === 'curriculum' && 'Curriculum Syllabus Catalog'}
              {activeTab === 'sandbox' && 'Exercises Journal'}
              {activeTab === 'journal' && 'Project Journal'}
              {activeTab === 'leaderboard' && 'Active Decoders'}
              {activeTab === 'admin' && 'Admin Settings Console'}
            </h1>
          </div>
          <div className="header-stats">
            <div className="stat-pill">
              <span>Theme:</span>
              <span className="stat-pill-value" style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>{currentCampaign.name}</span>
            </div>
            <div className="stat-pill">
              <span>XP Score:</span>
              <span className="stat-pill-value">{points} XP</span>
            </div>
            <div className="stat-pill">
              <span>Rank Up:</span>
              <div className="xp-progress">
                <div className="xp-bar" style={{ width: `${xpPercent}%` }}></div>
              </div>
            </div>
          </div>
        </header>

        <div className="content-body" style={{ padding: ['sandbox', 'journal'].includes(activeTab) ? '12px' : '32px' }}>
          {/* Dashboard View */}
          {activeTab === 'dashboard' && (
            <div className="tab-dashboard animate-in">
              <div className="dashboard-grid">
                <div className="glass-panel stat-card">
                  <div className="stat-card-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24}}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div className="stat-card-info">
                    <span className="stat-card-title">Completed Quests</span>
                    <span className="stat-card-value">
                      {Object.keys(solvedCases).length} Solved
                    </span>
                  </div>
                </div>

                <div className="glass-panel stat-card green">
                  <div className="stat-card-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24}}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div className="stat-card-info">
                    <span className="stat-card-title">Total XP Earned</span>
                    <span className="stat-card-value">{points} XP</span>
                  </div>
                </div>

                <div className="glass-panel stat-card purple">
                  <div className="stat-card-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24}}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                  </div>
                  <div className="stat-card-info">
                    <span className="stat-card-title">Rank Stage</span>
                    <span className="stat-card-value">{rank.title}</span>
                  </div>
                </div>
              </div>

              <div className="dashboard-row">
                <div className="glass-panel">
                  <div className="panel-header">
                    <h3>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 20}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                      Active Campaign Main Quest
                    </h3>
                    <button className="btn-cyber btn-cyber-primary" onClick={() => setActiveTab('cases')}>Open Quest Board</button>
                  </div>
                  <div className="panel-body">
                    <div className="active-case-detail">
                      <div className="active-case-name" style={{ color: 'var(--accent-purple)' }}>Level {selectedLevel} Overarching Target:</div>
                      <div className="active-case-name">{activeMainQuest}</div>
                      <div className="active-case-desc" style={{ marginTop: 12 }}>
                        Current active operation: <strong>{selectedSession.title}</strong>. Launch the exercise code compiler to start building logic structures for this quest!
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-panel">
                  <div className="panel-header">
                    <h3>Recent Operations Feed</h3>
                  </div>
                  <div className="panel-body">
                    <div className="intel-feed">
                      <div className="feed-item">
                        <span className="feed-time">20:15</span>
                        <div className="feed-message">
                          Evidence submitted: <strong>Grid Variable Classification</strong> (+100 XP)
                        </div>
                      </div>
                      <div className="feed-item">
                        <span className="feed-time">19:42</span>
                        <div className="feed-message">
                          Prompt spec revised: <strong>Household IPO Blueprint</strong> (v2 created)
                        </div>
                      </div>
                      <div className="feed-item">
                        <span className="feed-time">Yesterday</span>
                        <div className="feed-message">
                          Rank Promoted to <strong>Junior Investigator</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quest Board / Cases View */}
          {activeTab === 'cases' && (
            <div className="tab-cases animate-in">
              <div className="level-selector">
                <button 
                  className={`level-tab ${selectedLevel === 1 ? 'active' : ''} ${isLevelDisabled(1) ? 'disabled-tab' : ''}`} 
                  onClick={() => { setSelectedLevel(1); setSelectedSessionId('l1-s1'); }}
                  disabled={isLevelDisabled(1)}
                >
                  {isLevelDisabled(1) && '🔒 '}Level 1: Logic
                </button>
                <button 
                  className={`level-tab ${selectedLevel === 2 ? 'active' : ''} ${isLevelDisabled(2) ? 'disabled-tab' : ''}`} 
                  onClick={() => { setSelectedLevel(2); setSelectedSessionId('l2-s5'); }}
                  disabled={isLevelDisabled(2)}
                >
                  {isLevelDisabled(2) && '🔒 '}Level 2: AI Copilot
                </button>
                <button 
                  className={`level-tab ${selectedLevel === 3 ? 'active' : ''} ${isLevelDisabled(3) ? 'disabled-tab' : ''}`} 
                  onClick={() => { setSelectedLevel(3); setSelectedSessionId('l3-s1'); }}
                  disabled={isLevelDisabled(3)}
                >
                  {isLevelDisabled(3) && '🔒 '}Level 3: Architect
                </button>
                <button 
                  className={`level-tab ${selectedLevel === 4 ? 'active' : ''} ${isLevelDisabled(4) ? 'disabled-tab' : ''}`} 
                  onClick={() => { setSelectedLevel(4); setSelectedSessionId('l4-s1'); }}
                  disabled={isLevelDisabled(4)}
                >
                  {isLevelDisabled(4) && '🔒 '}Level 4: Engineer
                </button>
              </div>

              {/* Display level main quest overarching target */}
              <div className="glass-panel" style={{ padding: 16, marginBottom: 24, borderLeft: '4px solid var(--accent-cyan)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Level Main Quest Target:</span>
                <p style={{ margin: '4px 0 0 0', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{activeMainQuest}</p>
              </div>

              <div className="session-list-layout">
                {/* Session list side panel */}
                <div className="sessions-sidebar-list">
                  <div style={{ padding: '4px 8px 12px 8px', borderBottom: '1px solid var(--border-color)', marginBottom: 12 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Active Coding Missions</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 2 }}>Playable Exercise Quests Only</div>
                  </div>
                  {activeLevelSessions.map(session => (
                    <div
                      key={session.id}
                      className={`glass-panel session-card ${selectedSessionId === session.id ? 'selected' : ''}`}
                      onClick={() => setSelectedSessionId(session.id)}
                    >
                      <div className="session-card-header">
                        <span className="session-num">QUEST</span>
                        {solvedCases[session.id] ? (
                          <span className="badge-cyber badge-green">COMPLETED</span>
                        ) : isQuestLocked(session.id) ? (
                          <span className="badge-cyber badge-red">🔒 LOCKED</span>
                        ) : (
                          <span className="badge-cyber badge-cyan">ACTIVE</span>
                        )}
                      </div>
                      <div className="session-card-title">{session.title}</div>
                    </div>
                  ))}
                </div>

                {/* Session details main display */}
                <div className="glass-panel session-detail-view">
                  <div className="detail-header">
                    <div className="detail-header-left">
                      <h2>{selectedSession.title}</h2>
                      <span className="badge-cyber badge-cyan">{selectedSession.xp} XP Sub-Quest</span>
                    </div>
                    <div className="detail-header-right">
                      <button className="btn-cyber btn-cyber-primary" onClick={() => { loadTemplate(selectedSession); setActiveTab('sandbox'); }}>
                        Open Exercise
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 14, height: 14}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h4>Quest Objective</h4>
                    <div className="detail-section-body">{selectedSession.objective}</div>
                  </div>

                  {(() => {
                    const academicSession = CURRICULUM_DATA.find(s => s.id === selectedSession.id);
                    if (academicSession) {
                      return (
                        <div className="detail-section academic-match-box" style={{ borderLeft: '3px solid var(--accent-purple)', paddingLeft: 12, marginTop: 16 }}>
                          <span style={{ fontSize: '0.8rem', color: 'var(--accent-purple)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Academic Concept Link:</span>
                          <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                            <strong>Core Concept:</strong> {academicSession.title.replace(/Session \d+:\s*"/, '').replace(/"/, '')}
                          </p>
                          <ul style={{ margin: '8px 0 0 0', paddingLeft: 16, fontSize: '0.85rem', color: 'var(--text-secondary)', listStyleType: 'disc' }}>
                            {academicSession.objectives.slice(0, 2).map((obj, idx) => (
                              <li key={idx} style={{ marginBottom: 4 }}>{obj}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return null;
                  })()}

                  <div className="detail-section">
                    <h4>⚔️ Class Mission (In-Session Quest)</h4>
                    <div className="detail-section-body">{selectedSession.activity}</div>
                  </div>                  <div className="detail-section">
                    <h4>📝 Intel Delivery (Practice at Home Task)</h4>
                    <div className="detail-section-body homework-box">
                      <h5>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 16, height: 16}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                        Practice at Home Task
                      </h5>
                      <p>{selectedSession.homework}</p>
                    </div>
                  </div>
                  {!solvedCases[selectedSession.id] && (
                    <div style={{ marginTop: 32, borderTop: '1px solid var(--border-color)', paddingTop: 20, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 12 }}>
                      {isQuestLocked(selectedSession.id) ? (
                        <span style={{ color: 'var(--accent-red)', fontSize: '0.85rem' }}>🔒 Complete the earlier quests in this level first to unlock this one.</span>
                      ) : (
                        <button className="btn-cyber btn-cyber-green" onClick={() => claimCaseEvidence(selectedSession.id, selectedSession.xp)}>
                          Deliver Quest Evidence (+{selectedSession.xp} XP)
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Curriculum Guide View */}
          {activeTab === 'curriculum' && (
            <div className="tab-curriculum animate-in">
              <div className="curriculum-top-bar">
                <div className="level-selector">
                  <button 
                    className={`level-tab ${curriculumLevel === 1 ? 'active' : ''} ${isLevelDisabled(1) ? 'disabled-tab' : ''}`} 
                    onClick={() => { setCurriculumLevel(1); setCurriculumSessionId('l1-s1'); }}
                    disabled={isLevelDisabled(1)}
                  >
                    {isLevelDisabled(1) && '🔒 '}Level 1: Foundations
                  </button>
                  <button 
                    className={`level-tab ${curriculumLevel === 2 ? 'active' : ''} ${isLevelDisabled(2) ? 'disabled-tab' : ''}`} 
                    onClick={() => { setCurriculumLevel(2); setCurriculumSessionId('l2-s1'); }}
                    disabled={isLevelDisabled(2)}
                  >
                    {isLevelDisabled(2) && '🔒 '}Level 2: AI & Language
                  </button>
                  <button 
                    className={`level-tab ${curriculumLevel === 3 ? 'active' : ''} ${isLevelDisabled(3) ? 'disabled-tab' : ''}`} 
                    onClick={() => { setCurriculumLevel(3); setCurriculumSessionId('l3-s1'); }}
                    disabled={isLevelDisabled(3)}
                  >
                    {isLevelDisabled(3) && '🔒 '}Level 3: Architecture
                  </button>
                  <button 
                    className={`level-tab ${curriculumLevel === 4 ? 'active' : ''} ${isLevelDisabled(4) ? 'disabled-tab' : ''}`} 
                    onClick={() => { setCurriculumLevel(4); setCurriculumSessionId('l4-s1'); }}
                    disabled={isLevelDisabled(4)}
                  >
                    {isLevelDisabled(4) && '🔒 '}Level 4: Engineering
                  </button>
                </div>
                
                <div className="curriculum-search-mode-container">
                  <div className="search-box-container">
                    <input 
                      type="text" 
                      placeholder="Search topics, activities, concepts..." 
                      value={curriculumSearchQuery}
                      onChange={(e) => setCurriculumSearchQuery(e.target.value)}
                      className="curriculum-search-input"
                    />
                    {curriculumSearchQuery && (
                      <button className="clear-search-btn" onClick={() => setCurriculumSearchQuery('')}>×</button>
                    )}
                  </div>

                  <div className="perspective-toggle-container">
                    <span className={`toggle-label ${!isTeacherMode ? 'active' : ''}`}>Student Mode</span>
                    <button 
                      className={`toggle-switch-btn ${isTeacherMode ? 'teacher' : 'student'}`}
                      onClick={() => setIsTeacherMode(prev => !prev)}
                    >
                      <div className="toggle-slider"></div>
                    </button>
                    <span className={`toggle-label ${isTeacherMode ? 'active' : ''}`}>Teacher Mode</span>
                  </div>
                </div>
              </div>

              <div className="curriculum-layout" style={{ display: 'grid', gridTemplateColumns: showCurriculumSidebar ? '0.8fr 2fr' : '1fr', gap: '20px', height: 'calc(100vh - 200px)' }}>
                {/* Left panel: List of sessions */}
                {showCurriculumSidebar && (
                  <div className="curriculum-sidebar-list" style={{ width: '100%', overflowY: 'auto' }}>
                    <div style={{ padding: '4px 8px 12px 8px', borderBottom: '1px solid var(--border-color)', marginBottom: 12 }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-purple)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Curriculum Syllabus</div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 2 }}>Full 12-Lesson Course Catalog</div>
                    </div>
                    {(() => {
                      const filteredData = CURRICULUM_DATA.filter(s => {
                        const levelMatches = s.level === curriculumLevel || curriculumSearchQuery.trim() !== '';
                        if (!levelMatches) return false;
                        
                        if (curriculumSearchQuery.trim() !== '') {
                          const q = curriculumSearchQuery.toLowerCase();
                          return (
                            s.title.toLowerCase().includes(q) ||
                            s.module.toLowerCase().includes(q) ||
                            s.warmUp.toLowerCase().includes(q) ||
                            s.miniLesson.toLowerCase().includes(q) ||
                            s.coreActivity.toLowerCase().includes(q) ||
                            s.handsOn.toLowerCase().includes(q) ||
                            s.homework.toLowerCase().includes(q) ||
                            s.objectives.some(o => o.toLowerCase().includes(q))
                          );
                        }
                        return true;
                      });

                      // Group by module
                      const modulesMap = {};
                      filteredData.forEach(s => {
                        if (!modulesMap[s.module]) {
                          modulesMap[s.module] = [];
                        }
                        modulesMap[s.module].push(s);
                      });

                      if (Object.keys(modulesMap).length === 0) {
                        return (
                          <div style={{ padding: 16, color: 'var(--text-muted)', textAlign: 'center' }}>
                            No sessions found matching "{curriculumSearchQuery}"
                          </div>
                        );
                      }

                      return Object.entries(modulesMap).map(([moduleName, sessions]) => (
                        <div key={moduleName} className="curriculum-module-group">
                          <div className="curriculum-module-header">{moduleName}</div>
                          {sessions.map(s => {
                            const isSelected = curriculumSessionId === s.id;
                            return (
                              <div 
                                key={s.id}
                                className={`glass-panel curriculum-session-card ${isSelected ? 'selected' : ''}`}
                                onClick={() => setCurriculumSessionId(s.id)}
                              >
                                <div className="session-card-header">
                                  <span className="session-id-badge">L{s.level} S{s.id.split('-s')[1]}</span>
                                </div>
                                <div className="session-card-title">{s.title.replace(/Session \d+:\s*"/, '').replace(/"/, '')}</div>
                              </div>
                            );
                          })}
                        </div>
                      ));
                    })()}
                  </div>
                )}

                {/* Right panel: Details view */}
                {(() => {
                  const currentSession = CURRICULUM_DATA.find(s => s.id === curriculumSessionId);
                  if (!currentSession) {
                    return (
                      <div className="glass-panel curriculum-detail-view empty" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ alignSelf: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '15px', width: '100%' }}>
                          <button 
                            className="btn-cyber btn-cyber-secondary btn-small"
                            onClick={() => setShowCurriculumSidebar(prev => !prev)}
                            style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                          >
                            {showCurriculumSidebar ? 'Hide Syllabus Sidebar' : 'Show Syllabus Sidebar'}
                          </button>
                        </div>
                        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          Select a session from the list to view teaching topics and content.
                        </div>
                      </div>
                    );
                  }
                  
                  const activeCampaignSessions = CAMPAIGN_THEMES[campaignId].levels[curriculumLevel]?.sessions || [];
                  const campaignSessionMatch = activeCampaignSessions.find(s => s.id === currentSession.id);
                  const displayHomework = campaignSessionMatch ? campaignSessionMatch.homework : currentSession.homework;
                  const displayActivity = campaignSessionMatch ? campaignSessionMatch.activity : currentSession.coreActivity;
                  const displayTitle = campaignSessionMatch ? campaignSessionMatch.title : currentSession.title;
                  return (
                    <div className="glass-panel curriculum-detail-view animate-in">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                        <button 
                          className="btn-cyber btn-cyber-secondary btn-small"
                          onClick={() => setShowCurriculumSidebar(prev => !prev)}
                          style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                        >
                          {showCurriculumSidebar ? 'Hide Syllabus Sidebar' : 'Show Syllabus Sidebar'}
                        </button>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button 
                            className={`btn-cyber btn-small ${curriculumDetailTab === 'plan' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                            onClick={() => setCurriculumDetailTab('plan')}
                            style={{ padding: '4px 12px', fontSize: '0.75rem' }}
                          >
                            Session Plan
                          </button>
                          <button 
                            className={`btn-cyber btn-small ${curriculumDetailTab === 'reference' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                            onClick={() => setCurriculumDetailTab('reference')}
                            style={{ padding: '4px 12px', fontSize: '0.75rem' }}
                          >
                            Concept Reference
                          </button>
                        </div>
                      </div>
                      <div className="detail-header">
                        <div className="detail-header-left">
                          <span className="detail-module-path">{currentSession.module}</span>
                          <h2>{displayTitle}</h2>
                          <div className="detail-meta-row">
                            <span className="badge-cyber badge-cyan">{currentSession.duration} Duration</span>
                            <span className="badge-cyber badge-green">Level {currentSession.level}</span>
                          </div>
                        </div>
                        <div className="detail-header-right">
                          <button 
                            className="btn-cyber btn-cyber-primary" 
                            onClick={() => {
                              loadTemplate(currentSession);
                              setActiveTab('sandbox');
                            }}
                          >
                            Exercise
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 14, height: 14, marginLeft: 6}}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Tab 1: Session Plan */}
                      {curriculumDetailTab === 'plan' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '15px' }}>
                          {/* Learning Objectives */}
                          <div className="detail-section">
                            <h4>Target Learning Objectives</h4>
                            <ul className="objectives-list">
                              {currentSession.objectives.map((obj, i) => (
                                <li key={i}>
                                  <svg className="obj-check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  {obj}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Dual Mode View */}
                          {!isTeacherMode ? (
                            /* STUDENT VIEW CONTENT */
                            <>
                              <div className="detail-section student-box">
                                <h4>👨‍💻 Hands-On Exercise Challenge</h4>
                                <div className="detail-section-body content-emphasis">
                                  {currentSession.handsOn}
                                </div>
                              </div>
                              <div className="detail-section">
                                <h4>⚔️ Active Classroom Mission</h4>
                                <div className="detail-section-body">
                                  {displayActivity}
                                </div>
                              </div>
                            </>
                          ) : (
                            /* TEACHER VIEW CONTENT */
                            <>
                              <div className="detail-section teacher-box">
                                <h4>⏱️ Warm-Up Classroom Game (15 min)</h4>
                                <div className="detail-section-body">
                                  {currentSession.warmUp}
                                </div>
                              </div>

                              <div className="detail-section teacher-box">
                                <h4>🏫 Board Concepts & Mini-Lesson (20 min)</h4>
                                <div className="detail-section-body">
                                  {currentSession.miniLesson}
                                </div>
                              </div>

                              <div className="detail-section teacher-box">
                                <h4>♟️ Activity Orchestration Guide (60 min)</h4>
                                <div className="detail-section-body">
                                  {displayActivity}
                                </div>
                              </div>
                            </>
                          )}

                          {/* Homework Box */}
                          <div className="detail-section">
                            <h4>📝 Intel Delivery (Practice at Home Task)</h4>
                            <div className="detail-section-body homework-box">
                              <h5>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 16, height: 16}}>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.247 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                                Practice at Home Task
                              </h5>
                              <p>{displayHomework}</p>
                            </div>
                          </div>

                          {/* Ethics Moment Card */}
                          {currentSession.ethics && (
                            <div className="glass-panel ethics-callout" style={{ margin: 0 }}>
                              <div className="callout-header">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 18, height: 18}}>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                                </svg>
                                ETHICAL LENS DEBATE
                              </div>
                              <p>{currentSession.ethics}</p>
                            </div>
                          )}

                          {/* Age Adaptation Card */}
                          {currentSession.adaptations && (
                            <div className="glass-panel adaptation-callout" style={{ margin: 0 }}>
                              <div className="callout-header">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 18, height: 18}}>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                                AGE GROUP ADAPTATION
                              </div>
                              <p>{currentSession.adaptations}</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Tab 2: Concept Reference */}
                      {curriculumDetailTab === 'reference' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
                          <h4 style={{ color: 'var(--accent-cyan)' }}>📚 Session Concepts Reference Details</h4>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            Review key concepts taught in this session. You can copy these terms to search on Google or review for your project code design.
                          </p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {(() => {
                              const concepts = CONCEPT_REFERENCES[currentSession.id] || [
                                { name: "Interactive Hands-on Application", desc: "Building core computing models and algorithms described in target learning objectives." },
                                { name: "System Architecture & Logic", desc: "Understanding execution cycles, data input channels, and target system outputs." }
                              ];
                              return concepts.map((c, i) => (
                                <div key={i} className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                  <h5 style={{ margin: 0, color: 'var(--accent-purple)', fontSize: '0.95rem' }}>{c.name}</h5>
                                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)', whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)', background: 'rgba(0,0,0,0.25)', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>{c.desc}</p>
                                  {c.keywords && (
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                                      🔍 GOOGLE SEARCH TERMS: <span style={{ color: 'var(--accent-cyan)' }}>{c.keywords}</span>
                                    </div>
                                  )}
                                </div>
                              ));
                            })()}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* Sandbox Tab View */}
          {activeTab === 'sandbox' && (
            <div className="tab-sandbox animate-in" style={{ display: 'grid', gridTemplateColumns: showExercisesSidebar ? '0.8fr 2fr' : '1fr', gap: '24px', height: 'calc(100vh - 140px)', width: '100%' }}>
              
              {/* Left sidebar: Syllabus List */}
              {showExercisesSidebar && (
                <div className="glass-panel journal-sidebar-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%', overflowY: 'auto', padding: '16px' }}>
                  <div style={{ padding: '4px 8px 12px 8px', borderBottom: '1px solid var(--border-color)', marginBottom: 12 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Curriculum Syllabus</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 2 }}>Select a Session to Load Exercise</div>
                  </div>
                  {CURRICULUM_DATA.filter(s => s.level === curriculumLevel).map(session => {
                    const isSelected = sandboxSessionId === session.id;
                    return (
                      <div 
                        key={session.id} 
                        className={`glass-panel journal-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => {
                          setSandboxSessionId(session.id);
                          setS1ActiveExercise(1);
                          setS2ActiveExercise(1);
                          setS3ActiveExercise(1);
                          setS4ActiveExercise(1);
                        }}
                        style={{ padding: '12px', cursor: 'pointer', border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)', background: isSelected ? 'rgba(0, 242, 254, 0.05)' : 'none', borderRadius: '6px' }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                          <span>SESSION {session.id.split('-s')[1]}</span>
                        </div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                          {session.title.replace(/Session \d+:\s*"/, '').replace(/"/, '')}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Right main panel: Workspace Details */}
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', width: '100%', minWidth: 0 }}>
                {/* Top toolbar */}
                <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px' }}>
                  <button 
                    className="btn-cyber btn-cyber-secondary btn-small" 
                    onClick={() => setShowExercisesSidebar(prev => !prev)}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    {showExercisesSidebar ? 'Hide Syllabus Sidebar' : 'Show Syllabus Sidebar'}
                  </button>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      ACTIVE SESSION: {sandboxSessionId.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div style={{ flexGrow: 1, height: 'calc(100% - 60px)', minHeight: 0, overflowY: 'auto' }}>
              
              {/* LEVEL 1 SESSION 1: SECURITY-DRONE NAVIGATOR */}
              {/* LEVEL 1 SESSION 1: SECURITY-DRONE NAVIGATOR */}
               {sandboxSessionId === 'l1-s1' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  {/* Exercise selector tabs */}
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button 
                        key={num}
                        className={`btn-cyber btn-small ${s1ActiveExercise === num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setS1ActiveExercise(num);
                          setS1Sequence([]);
                          setS1Logs([]);
                          setS1Success(false);
                          
                          // Pre-setup presets for specific exercises
                          if (num === 3) {
                            // Exercise 1.3 Pre-setup (Scrambled automatic car sequence)
                            setS1Sequence([
                              { id: 'start_engine', label: 'Turn Ignition Key to Start' },
                              { id: 'check_gear_pn', label: 'Check P/N Gear State' },
                              { id: 'shift_d', label: 'Shift Gear Selector to D (Drive)' },
                              { id: 'press_brake', label: 'Depress Brake Pedal' },
                              { id: 'release_handbrake', label: 'Release Handbrake' },
                              { id: 'press_gas', label: 'Press Gas Pedal' },
                              { id: 'release_brake', label: 'Release Brake Pedal' }
                            ]);
                          } else if (num === 4) {
                            // Exercise 1.4 Pre-setup (Preloaded steps with an extra incorrect step to remove)
                            setS1Sequence([
                              { id: 'check_gear_pn', label: 'Check P/N Gear State' },
                              { id: 'press_brake', label: 'Depress Brake Pedal' },
                              { id: 'start_engine', label: 'Turn Ignition Key to Start' },
                              { id: 'shift_d', label: 'Shift Gear Selector to D (Drive)' },
                              { id: 'release_handbrake', label: 'Release Handbrake' },
                              { id: 'shift_r', label: 'Shift Gear Selector to R (Reverse)' }, // EXTRA step to remove!
                              { id: 'release_brake', label: 'Release Brake Pedal' },
                              { id: 'press_gas', label: 'Press Gas Pedal' }
                            ]);
                          }
                        }}
                      >
                        Exercise 1.{num}{(exerciseProgress['l1-s1'] || []).includes(num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  {/* Exercise Card Header: Description, Instruction, and Explanation */}
                  <div className="glass-panel" style={{ padding: '15px', background: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)' }}>
                    {s1ActiveExercise === 1 && (
                      <div>
                        <h4 style={{ color: 'var(--accent-cyan)', margin: '0 0 8px 0' }}>🎯 Exercise 1.1: Basic Start & Move (Logical Sequencing)</h4>
                        <p style={{ fontSize: '0.85rem', margin: '0 0 8px 0', color: 'var(--text-secondary)' }}>
                          <strong>Problem:</strong> The automatic security vehicle needs to start its engine and drive forward.
                        </p>
                        <p style={{ fontSize: '0.85rem', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
                          <strong>Instruction:</strong> Before a vehicle can drive off, you must safely start the engine and place it in Drive. Observe the dashboard handbrake condition first to see if you can skip releasing it. Remember, the starter motor will not run and gear locks will not disengage unless safety checks (checking P/N gear and holding the footbrake) are done first.
                        </p>
                        <p style={{ fontSize: '0.75rem', margin: '0 0 8px 0', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                          <strong>Explanation:</strong> Computers execute steps literally. Automatic gearboxes have safety switches. The starter motor will not turn unless you depress the brake and ensure gear selector is in P or N.
                        </p>
                        <div style={{ marginTop: '8px', padding: '8px 12px', background: 'rgba(0, 255, 204, 0.05)', borderRadius: '4px', borderLeft: '3px solid #00ffcc', fontSize: '0.8rem' }}>
                          🚦 <strong>Dashboard Condition Status:</strong> Handbrake is <span style={{ color: '#00ffcc', fontWeight: 'bold' }}>RELEASED (OFF)</span>.
                        </div>
                      </div>
                    )}
                    {s1ActiveExercise === 2 && (
                      <div>
                        <h4 style={{ color: 'var(--accent-cyan)', margin: '0 0 8px 0' }}>🎯 Exercise 1.2: Basic Start & Reverse (Logical Sequencing)</h4>
                        <p style={{ fontSize: '0.85rem', margin: '0 0 8px 0', color: 'var(--text-secondary)' }}>
                          <strong>Problem:</strong> The vehicle needs to start its engine and reverse out of a parking space.
                        </p>
                        <p style={{ fontSize: '0.85rem', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
                          <strong>Instruction:</strong> To back out of a space, start the engine and select Reverse gear. Pay close attention to the dashboard condition status: if the handbrake is engaged, you must release it in your sequence before disengaging the footbrake and accelerating, otherwise the engine will stall.
                        </p>
                        <p style={{ fontSize: '0.75rem', margin: '0 0 8px 0', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                          <strong>Explanation:</strong> This follows the exact same logical security checklist as starting and driving forward, but you must release the handbrake manually since it is engaged.
                        </p>
                        <div style={{ marginTop: '8px', padding: '8px 12px', background: 'rgba(255, 77, 77, 0.05)', borderRadius: '4px', borderLeft: '3px solid #ff4d4d', fontSize: '0.8rem' }}>
                          🚦 <strong>Dashboard Condition Status:</strong> Handbrake is <span style={{ color: '#ff4d4d', fontWeight: 'bold' }}>ENGAGED (ON)</span>.
                        </div>
                      </div>
                    )}
                    {s1ActiveExercise === 3 && (
                      <div>
                        <h4 style={{ color: 'var(--accent-cyan)', margin: '0 0 8px 0' }}>🎯 Exercise 1.3: Autopilot Sequence Correction (Debugging)</h4>
                        <p style={{ fontSize: '0.85rem', margin: '0 0 8px 0', color: 'var(--text-secondary)' }}>
                          <strong>Problem:</strong> The preloaded autopilot driving script is scrambled and fails safety checks.
                        </p>
                        <p style={{ fontSize: '0.85rem', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
                          <strong>Instruction:</strong> The script sequence has execution logic errors. Click "Run Autopilot Script", look at the terminal logs on the right to diagnose exactly which safety switch locked (e.g. starter lockout), and rearrange the cards in correct chronological order.
                        </p>
                        <p style={{ fontSize: '0.75rem', margin: '0', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                          <strong>Explanation:</strong> Watch the terminal output logs to trace where the sequence violates safety checks (e.g. attempting to start ignition in Drive gear).
                        </p>
                      </div>
                    )}
                    {s1ActiveExercise === 4 && (
                      <div>
                        <h4 style={{ color: 'var(--accent-cyan)', margin: '0 0 8px 0' }}>🎯 Exercise 1.4: Code Cleanup (Debugging Extra Steps)</h4>
                        <p style={{ fontSize: '0.85rem', margin: '0 0 8px 0', color: 'var(--text-secondary)' }}>
                          <strong>Problem:</strong> The preloaded script has an extra, incorrect step that causes a safety violation.
                        </p>
                        <p style={{ fontSize: '0.85rem', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
                          <strong>Instruction:</strong> Inspect the preloaded commands in the workspace. Find the single card that is redundant or out of place (hint: shifting to Reverse in the middle of driving forward) and click its "×" button to remove it.
                        </p>
                        <p style={{ fontSize: '0.75rem', margin: '0', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                          <strong>Explanation:</strong> Unused or invalid logic blocks in a sequence can trigger safety lockouts or errors. Code cleanup is a key part of debugging.
                        </p>
                      </div>
                    )}
                    {s1ActiveExercise === 5 && (
                      <div>
                        <h4 style={{ color: 'var(--accent-cyan)', margin: '0 0 8px 0' }}>🎯 Exercise 1.5: Emergency Halt (Continuous State Checks)</h4>
                        <p style={{ fontSize: '0.85rem', margin: '0 0 8px 0', color: 'var(--text-secondary)' }}>
                          <strong>Problem:</strong> An obstacle is detected on the road ahead. The vehicle must be brought to a halt.
                        </p>
                        <p style={{ fontSize: '0.85rem', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
                          <strong>Instruction:</strong> Sequence commands to safely boot the system, shift to Drive, and accelerate forward. However, you must add the final control command at the very end to depress the footbrake pedal and stop before hit.
                        </p>
                        <p style={{ fontSize: '0.75rem', margin: '0', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                          <strong>Explanation:</strong> Safety rules check conditions continuously. Depressing the footbrake pedal instantly changes speed to 0 mph, stopping the car safely.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left">
                      <div className="panel-header">
                        <h3>Available Driving Commands</h3>
                      </div>
                      <div className="sim-panel-body drone-commands">
                        <p className="sim-instructions" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 10px 0' }}>Click commands to add to sequence workspace:</p>
                        {(() => {
                          const allCommands = [
                            { id: 'start_engine', label: 'Turn Ignition Key to Start', icon: '🔑' },
                            { id: 'release_handbrake', label: 'Release Handbrake', icon: '🛑' },
                            { id: 'shift_d', label: 'Shift Gear Selector to D (Drive)', icon: '⚙️' },
                            { id: 'press_gas', label: 'Press Gas Pedal', icon: '🚀' },
                            { id: 'check_gear_pn', label: 'Check P/N Gear State', icon: '🔍' },
                            { id: 'shift_r', label: 'Shift Gear Selector to R (Reverse)', icon: '⚙️' },
                            { id: 'press_brake', label: 'Depress Brake Pedal', icon: '🦶' },
                            { id: 'release_brake', label: 'Release Brake Pedal', icon: '🦶' },
                            { id: 'shift_p', label: 'Shift Gear Selector to P (Park)', icon: '⚙️' },
                            { id: 'engage_handbrake', label: 'Engage Handbrake', icon: '🛑' }
                          ];
                          const availableCommands = allCommands.filter(cmd => {
                            const maxAllowed = (s1ActiveExercise === 5 && cmd.id === 'press_brake') ? 2 : 1;
                            const currentCount = s1Sequence.filter(s => s.id === cmd.id).length;
                            return currentCount < maxAllowed;
                          });
                          return (
                            <div className="drone-actions-list" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {availableCommands.map((cmd) => (
                                <button 
                                  key={cmd.id} 
                                  className="btn-sim-action" 
                                  onClick={() => setS1Sequence(prev => [...prev, { id: cmd.id, label: cmd.label }])}
                                >
                                  <span className="sim-action-icon">{cmd.icon}</span> {cmd.label}
                                </button>
                              ))}
                              {availableCommands.length === 0 && (
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', textAlign: 'center', padding: '10px' }}>
                                  All commands moved to workspace.
                                </p>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Command Sequence Workspace</h3>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setS1Sequence([]); setS1Logs([]); setS1Success(false); }}>Reset</button>
                      </div>
                      <div className="sim-panel-body sequence-workspace">
                        {s1Sequence.length === 0 ? (
                          <div className="sequence-empty">
                            Workspace Empty. Click commands on the left to sequence the script.
                          </div>
                        ) : (
                          <div className="sequence-cards-list">
                            {s1Sequence.map((cmd, idx) => (
                              <div key={idx} className="sequence-card animate-in" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="sequence-number">Step {idx + 1}</span>
                                <span className="sequence-label">{cmd.label}</span>
                                <div style={{ display: 'flex', gap: '4px', marginLeft: 'auto', alignItems: 'center' }}>
                                  <button 
                                    className="btn-card-move-arrow" 
                                    onClick={() => handleMoveS1Step(idx, 'up')}
                                    disabled={idx === 0}
                                    style={{ background: 'transparent', border: 'none', color: idx === 0 ? 'rgba(255,255,255,0.1)' : 'var(--accent-cyan)', cursor: 'pointer', padding: '0 4px', fontSize: '0.9rem' }}
                                  >
                                    ▲
                                  </button>
                                  <button 
                                    className="btn-card-move-arrow" 
                                    onClick={() => handleMoveS1Step(idx, 'down')}
                                    disabled={idx === s1Sequence.length - 1}
                                    style={{ background: 'transparent', border: 'none', color: idx === s1Sequence.length - 1 ? 'rgba(255,255,255,0.1)' : 'var(--accent-cyan)', cursor: 'pointer', padding: '0 4px', fontSize: '0.9rem' }}
                                  >
                                    ▼
                                  </button>
                                  <button className="btn-card-remove" onClick={() => setS1Sequence(prev => prev.filter((_, i) => i !== idx))}>×</button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="sim-footer">
                        <button 
                          className="btn-cyber btn-cyber-primary" 
                          onClick={() => {
                            if (s1Executing) return;
                            setS1Executing(true);
                            setS1Logs([{ type: 'info', text: '🤖 Autopilot: Initializing automatic transmission safety diagnostics...' }]);
                            
                            let currentStep = 0;
                            let hasError = false;
                            const logsToAppend = [];
                            
                            // Automatic Car State Variables
                            let checkedPN = false;
                            let brakePressed = false;
                            let engineStarted = false;
                            let gear = 'P'; // P, D, R
                            let handbrakeReleased = s1ActiveExercise === 1;
                            let speed = 0;
                            
                            const runNext = () => {
                              if (s1Sequence.length === 0) {
                                setS1Logs(prev => [...prev, { type: 'error', text: 'Error: Autopilot workspace is empty. Car remained parked.' }]);
                                setS1Executing(false);
                                return;
                              }
 
                              if (currentStep >= s1Sequence.length) {
                                if (!hasError) {
                                  const ids = s1Sequence.map(c => c.id).join(',');
                                  
                                  if (s1ActiveExercise === 1) {
                                    const isCorrect = ids === 'check_gear_pn,press_brake,start_engine,shift_d,release_brake,press_gas';
                                    if (isCorrect) {
                                      setS1Logs(prev => [...prev, { type: 'success', text: '✓ SUCCESS: Vehicle moving forward in Drive. Autopilot basic setup complete!' }]);
                                      setS1Success(true);
                                      {
                                        const prog = markExerciseComplete('l1-s1', 1);
                                        setS1Logs(prev => [...prev, { type: prog.allDone ? 'success' : 'info', text: prog.allDone ? '✓ ALL 5 AUTOPILOT EXERCISES COMPLETE! Session 1 certified.' : `Progress: ${prog.doneCount}/${prog.total} exercises complete.` }]);
                                      }
                                    } else {
                                      setS1Logs(prev => [...prev, { type: 'error', text: '✗ MISSION FAILURE: Incorrect basic start & drive off sequence.' }]);
                                    }
                                  } else if (s1ActiveExercise === 2) {
                                    const isCorrect = ids === 'check_gear_pn,press_brake,start_engine,shift_r,release_handbrake,release_brake,press_gas';
                                    if (isCorrect) {
                                      setS1Logs(prev => [...prev, { type: 'success', text: '✓ SUCCESS: Vehicle moving backward in Reverse. Autopilot reversing setup complete!' }]);
                                      setS1Success(true);
                                      {
                                        const prog = markExerciseComplete('l1-s1', 2);
                                        setS1Logs(prev => [...prev, { type: prog.allDone ? 'success' : 'info', text: prog.allDone ? '✓ ALL 5 AUTOPILOT EXERCISES COMPLETE! Session 1 certified.' : `Progress: ${prog.doneCount}/${prog.total} exercises complete.` }]);
                                      }
                                    } else {
                                      setS1Logs(prev => [...prev, { type: 'error', text: '✗ MISSION FAILURE: Incorrect basic start & reverse off sequence.' }]);
                                    }
                                  } else if (s1ActiveExercise === 3) {
                                    const isCorrect = ids === 'check_gear_pn,press_brake,start_engine,shift_d,release_handbrake,release_brake,press_gas';
                                    if (isCorrect) {
                                      setS1Logs(prev => [...prev, { type: 'success', text: '✓ SUCCESS: Autopilot sequence rearranged correctly. Cruising in Drive!' }]);
                                      setS1Success(true);
                                      {
                                        const prog = markExerciseComplete('l1-s1', 3);
                                        setS1Logs(prev => [...prev, { type: prog.allDone ? 'success' : 'info', text: prog.allDone ? '✓ ALL 5 AUTOPILOT EXERCISES COMPLETE! Session 1 certified.' : `Progress: ${prog.doneCount}/${prog.total} exercises complete.` }]);
                                      }
                                    } else {
                                      setS1Logs(prev => [...prev, { type: 'error', text: '✗ MISSION FAILURE: Scrambled script sequence is still incorrect.' }]);
                                    }
                                  } else if (s1ActiveExercise === 4) {
                                    const isCorrect = ids === 'check_gear_pn,press_brake,start_engine,shift_d,release_handbrake,release_brake,press_gas';
                                    if (isCorrect) {
                                      setS1Logs(prev => [...prev, { type: 'success', text: '✓ SUCCESS: Debugging successful! Incorrect R-gear shift step removed.' }]);
                                      setS1Success(true);
                                      {
                                        const prog = markExerciseComplete('l1-s1', 4);
                                        setS1Logs(prev => [...prev, { type: prog.allDone ? 'success' : 'info', text: prog.allDone ? '✓ ALL 5 AUTOPILOT EXERCISES COMPLETE! Session 1 certified.' : `Progress: ${prog.doneCount}/${prog.total} exercises complete.` }]);
                                      }
                                    } else {
                                      setS1Logs(prev => [...prev, { type: 'error', text: '✗ MISSION FAILURE: Extra incorrect step is still in the workspace!' }]);
                                    }
                                  } else if (s1ActiveExercise === 5) {
                                    const isCorrect = ids === 'check_gear_pn,press_brake,start_engine,shift_d,release_handbrake,release_brake,press_gas,press_brake';
                                    if (isCorrect) {
                                      setS1Logs(prev => [...prev, { type: 'success', text: '✓ SUCCESS: Emergency stop executed safely! Vehicle brought to a secure halt.' }]);
                                      setS1Success(true);
                                      {
                                        const prog = markExerciseComplete('l1-s1', 5);
                                        setS1Logs(prev => [...prev, { type: prog.allDone ? 'success' : 'info', text: prog.allDone ? '✓ ALL 5 AUTOPILOT EXERCISES COMPLETE! Session 1 certified.' : `Progress: ${prog.doneCount}/${prog.total} exercises complete.` }]);
                                      }
                                    } else {
                                      setS1Logs(prev => [...prev, { type: 'error', text: '✗ MISSION FAILURE: Emergency stop failed or stalled.' }]);
                                    }
                                  }
                                }
                                setS1Executing(false);
                                return;
                              }
 
                              const cmd = s1Sequence[currentStep];
                              let actionId = cmd.id;
                              if (actionId === 'press_brake_stop') actionId = 'press_brake';
                              if (actionId === 'release_brake_drive') actionId = 'release_brake';
                              if (actionId === 'press_gas_cruise') actionId = 'press_gas';
 
                              if (actionId === 'check_gear_pn') {
                                checkedPN = true;
                                logsToAppend.push({ type: 'info', text: '🔍 [Transmission Log] Gear checked. Gear selector is currently in P (Park) (P/N Check = TRUE).' });
                              } else if (actionId === 'press_brake') {
                                brakePressed = true;
                                if (speed !== 0) {
                                  speed = 0;
                                  logsToAppend.push({ type: 'info', text: '🛑 [Brakes Log] Footbrake pedal depressed. Vehicle brought to a secure halt.' });
                                } else {
                                  logsToAppend.push({ type: 'info', text: '🦶 [Pedal Log] Footbrake pedal depressed (footbrakeState = DEPRESSED).' });
                                }
                              } else if (actionId === 'start_engine') {
                                if (!checkedPN) {
                                  logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Attempted to start engine without verifying gear is in P or N! Safety lockout active.' });
                                  hasError = true;
                                } else if (!brakePressed) {
                                  logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Attempted to start engine without depressing footbrake! Starter safety switch locked.' });
                                  hasError = true;
                                } else {
                                  engineStarted = true;
                                  logsToAppend.push({ type: 'info', text: '🔑 [Ignition Log] Starter motor running. Engine active (engineState = RUNNING).' });
                                }
                              } else if (actionId === 'shift_d') {
                                if (!engineStarted) {
                                  logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Shifted gears while engine is offline.' });
                                  hasError = true;
                                } else if (!brakePressed) {
                                  logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Shift lock engaged! You cannot shift gear selector out of P/N without depressing the brake pedal.' });
                                  hasError = true;
                                } else {
                                  gear = 'D';
                                  logsToAppend.push({ type: 'info', text: '⚙️ [Transmission Log] Shifted gear selector to D (Drive) (currentGear = D).' });
                                }
                              } else if (actionId === 'shift_r') {
                                if (!engineStarted) {
                                  logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Shifted gears while engine is offline.' });
                                  hasError = true;
                                } else if (!brakePressed) {
                                  logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Shift lock engaged! You cannot shift gear selector to R (Reverse) without depressing the brake pedal.' });
                                  hasError = true;
                                } else {
                                  gear = 'R';
                                  logsToAppend.push({ type: 'info', text: '⚙️ [Transmission Log] Shifted gear selector to R (Reverse) (currentGear = R).' });
                                }
                              } else if (actionId === 'shift_p') {
                                if (!brakePressed) {
                                  logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Shift lock engaged! You cannot shift gear selector to P (Park) without depressing the brake pedal.' });
                                  hasError = true;
                                } else {
                                  gear = 'P';
                                  logsToAppend.push({ type: 'info', text: '⚙️ [Transmission Log] Shifted gear selector to P (Park) (currentGear = P).' });
                                }
                              } else if (actionId === 'release_handbrake') {
                                handbrakeReleased = true;
                                logsToAppend.push({ type: 'info', text: '🛑 [Brakes Log] Mechanical handbrake released (handbrakeState = OFF).' });
                              } else if (actionId === 'release_brake') {
                                brakePressed = false;
                                logsToAppend.push({ type: 'info', text: '🦶 [Pedal Log] Footbrake pedal released (footbrakeState = RELEASED).' });
                              } else if (actionId === 'press_gas') {
                                if (!engineStarted) {
                                  logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Pressed gas pedal with engine offline. Car stayed idle.' });
                                  hasError = true;
                                } else if (gear === 'P') {
                                  logsToAppend.push({ type: 'info', text: '🚀 Engine revved in Park. Speed = 0 mph.' });
                                } else if (!handbrakeReleased) {
                                  logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Gas pedal pressed while handbrake is engaged! Friction smoked the pads, engine stalled.' });
                                  hasError = true;
                                } else if (brakePressed) {
                                  logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Accelerator pressed while footbrake is fully depressed! Transmission overheated and stalled.' });
                                  hasError = true;
                                } else if (gear === 'D') {
                                  speed = 25;
                                  logsToAppend.push({ type: 'info', text: '🚀 Gas pedal pressed. Acceleration active. Speed = 25 mph (Driving forward in D).' });
                                } else if (gear === 'R') {
                                  speed = -10;
                                  logsToAppend.push({ type: 'info', text: '🚀 Gas pedal pressed. Acceleration active. Speed = -10 mph (Moving backward in R).' });
                                }
                              } else if (actionId === 'engage_handbrake') {
                                handbrakeReleased = false;
                                logsToAppend.push({ type: 'info', text: '🛑 [Brakes Log] Parking handbrake engaged (handbrakeState = ON).' });
                              }
                              
                              setS1Logs(prev => [...prev, logsToAppend[logsToAppend.length - 1]]);
                              
                              if (hasError) {
                                setS1Logs(prev => [...prev, { type: 'error', text: '✗ MISSION FAILURE: Safety systems halted vehicle.' }]);
                                setS1Executing(false);
                                return;
                              }
 
                              currentStep++;
                              setTimeout(runNext, 800);
                            };
                            setTimeout(runNext, 600);
                          }} 
                          disabled={s1Executing}
                        >
                          {s1Executing ? 'Executing Sequence...' : 'Run Autopilot Script'}
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Autopilot Telemetry Terminal</h3>
                        {s1Success && <span className="badge-cyber badge-green">SOLVED (+100 XP)</span>}
                      </div>
                      <div className="sim-panel-body drone-terminal">
                        {s1Logs.length === 0 ? (
                          <div className="terminal-empty">Terminal offline. Run the autopilot script to observe telemetry.</div>
                        ) : (
                          <div className="terminal-log-flow">
                            {s1Logs.map((log, index) => (
                              <div key={index} className={`terminal-log-item ${log.type}`}>
                                {log.type === 'error' ? '💥 ' : log.type === 'success' ? '✓ ' : '🛰️ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 2: DETECTIVE HTML SANDBOX */}
              {sandboxSessionId === 'l1-s2' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  {/* Exercise selector tabs */}
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S2_EXERCISES.map((ex) => (
                      <button 
                        key={ex.num}
                        className={`btn-cyber btn-small ${s2ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setS2ActiveExercise(ex.num);
                          setS2CodeInput(ex.preloaded);
                          setS2Logs([]);
                          setS2Success(false);
                        }}
                      >
                        Ex 2.{ex.num}{(exerciseProgress['l1-s2'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S2_EXERCISES[s2ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {S2_EXERCISES[s2ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {S2_EXERCISES[s2ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>
                      
                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button 
                          className={`btn-cyber ${s2Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`} 
                          onClick={() => {
                            const ex = S2_EXERCISES[s2ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing HTML structure for Exercise 2.${s2ActiveExercise}...` }];
                            const pass = ex.validate(s2CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} verification passed.` });
                              setS2Success(true);
                              const prog = markExerciseComplete('l1-s2', s2ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 2 CHALLENGES COMPLETE! You have built the HTML skeleton for the Racing Car Game!' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Preconditions or tag nesting rules violated.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setS2Success(false);
                            }
                            setS2Logs(logs);
                          }}
                        >
                          {s2Success ? '✓ Exercise Complete' : 'Verify HTML Code'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => setS2CodeInput(S2_EXERCISES[s2ActiveExercise - 1].preloaded)}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (index.html)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={s2CodeInput}
                          onChange={(e) => setS2CodeInput(e.target.value)}
                          style={{
                            width: '100%',
                            height: '500px',
                            background: 'rgba(6, 8, 20, 0.7)',
                            color: '#00ffcc',
                            border: '1px solid var(--border-color)',
                            borderRadius: '4px',
                            padding: '12px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.85rem',
                            lineHeight: 1.5,
                            resize: 'none'
                          }}
                          placeholder="Write HTML here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Interactive Live Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={`
                            <html>
                              <head>
                                <style>${S2_PREVIEW_STYLE_CSS}</style>
                              </head>
                              <body>
                                ${buildHtmlPreviewBody(S2_EXERCISES[s2ActiveExercise - 1], s2CodeInput, s2Success)}
                              </body>
                            </html>
                          `}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="HTML Sandbox Live Preview"
                        />
                        
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {s2Logs.length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Input code and click Verify to validate.</div>
                          ) : s2Logs.map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 3: DETECTIVE CSS SANDBOX */}
              {sandboxSessionId === 'l1-s3' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  {/* Exercise selector tabs */}
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S3_EXERCISES.map((ex) => (
                      <button 
                        key={ex.num}
                        className={`btn-cyber btn-small ${s3ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setS3ActiveExercise(ex.num);
                          setS3CodeInput(ex.preloaded);
                          setS3Logs([]);
                          setS3Success(false);
                        }}
                      >
                        Ex 3.{ex.num}{(exerciseProgress['l1-s3'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S3_EXERCISES[s3ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {S3_EXERCISES[s3ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {S3_EXERCISES[s3ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>
                      
                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button 
                          className={`btn-cyber ${s3Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`} 
                          onClick={() => {
                            const ex = S3_EXERCISES[s3ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing stylesheet definitions for Exercise 3.${s3ActiveExercise}...` }];
                            const pass = ex.validate(s3CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setS3Success(true);
                              const prog = markExerciseComplete('l1-s3', s3ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 3 CHALLENGES COMPLETE! You have styled the Racing Car highway track!' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Stylesheet validation failed. CSS property or selector target missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setS3Success(false);
                            }
                            setS3Logs(logs);
                          }}
                        >
                          {s3Success ? '✓ Exercise Complete' : 'Verify CSS Styles'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => setS3CodeInput(S3_EXERCISES[s3ActiveExercise - 1].preloaded)}>
                          Reset Styles
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (styles.css)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={s3CodeInput}
                          onChange={(e) => setS3CodeInput(e.target.value)}
                          style={{
                            width: '100%',
                            height: '500px',
                            background: 'rgba(6, 8, 20, 0.7)',
                            color: '#00ffcc',
                            border: '1px solid var(--border-color)',
                            borderRadius: '4px',
                            padding: '12px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.85rem',
                            lineHeight: 1.5,
                            resize: 'none'
                          }}
                          placeholder="Write CSS here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Interactive Live Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={`
                            <html>
                              <head>
                                <style>
                                  body { margin: 0; padding: 10px; background: #060814; color: #fff; font-family: monospace; font-size: 0.85rem; }
                                  #game-track {
                                    border: 2px dashed #444;
                                    min-height: 130px;
                                  }
                                  #player-car {
                                    background-color: blue;
                                    color: white;
                                    text-align: center;
                                  }
                                  .obstacle {
                                    background-color: red;
                                    color: white;
                                    text-align: center;
                                  }
                                  .lane-divider {
                                    border-left: 1px dashed white;
                                  }
                                  ${S3_EXERCISES[s3ActiveExercise - 1].previewCss ? '' : s3CodeInput}
                                </style>
                              </head>
                              <body>
                                ${S3_EXERCISES[s3ActiveExercise - 1].previewCss
                                  ? promptPreviewPanel(S3_EXERCISES[s3ActiveExercise - 1].previewCss, s3Success, 'style.css')
                                  : S3_PREVIEW_SKELETON}
                              </body>
                            </html>
                          `}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="CSS Sandbox Live Preview"
                        />
                        
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {s3Logs.length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Input styles and click Verify to validate.</div>
                          ) : s3Logs.map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 4: CLIMATE CONTROLLER CONDITIONALS */}
              {sandboxSessionId === 'l1-s4' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S4_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s4ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setS4ActiveExercise(ex.num);
                          setS4CodeInput(ex.preloaded);
                          setS4Logs([]);
                          setS4Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 4.{ex.num}{(exerciseProgress['l1-s4'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S4_EXERCISES[s4ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {S4_EXERCISES[s4ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {S4_EXERCISES[s4ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${s4Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = S4_EXERCISES[s4ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing variable registry logic for Exercise 4.${s4ActiveExercise}...` }];
                            const pass = ex.validate(s4CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setS4Success(true);
                              const prog = markExerciseComplete('l1-s4', s4ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 4 CHALLENGES COMPLETE! Your game state variables are ready to drive!' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Variable declaration or type requirement missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setS4Success(false);
                            }
                            setS4Logs(logs);
                          }}
                        >
                          {s4Success ? '✓ Exercise Complete' : 'Verify JS Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setS4CodeInput(S4_EXERCISES[s4ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (game.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={s4CodeInput}
                          onChange={(e) => setS4CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Racing Game Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildJsSandboxPreview(S4_EXERCISES[s4ActiveExercise - 1].runnable ? s4CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="JS Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...s4Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...s4Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 5: KEYBOARD CONTROL INTERFACES (JS Sandbox) */}
              {sandboxSessionId === 'l1-s5' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S5_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s5ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setS5ActiveExercise(ex.num);
                          setS5CodeInput(ex.preloaded);
                          setS5Logs([]);
                          setS5Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 5.{ex.num}{(exerciseProgress['l1-s5'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S5_EXERCISES[s5ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {S5_EXERCISES[s5ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {S5_EXERCISES[s5ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${s5Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = S5_EXERCISES[s5ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing keyboard control logic for Exercise 5.${s5ActiveExercise}...` }];
                            const pass = ex.validate(s5CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setS5Success(true);
                              const prog = markExerciseComplete('l1-s5', s5ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 5 CHALLENGES COMPLETE! Your car now steers with the keyboard!' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Logic requirements not met.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setS5Success(false);
                            }
                            setS5Logs(logs);
                          }}
                        >
                          {s5Success ? '✓ Exercise Complete' : 'Verify JS Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setS5CodeInput(S5_EXERCISES[s5ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (game.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={s5CodeInput}
                          onChange={(e) => setS5CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Racing Game Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildJsSandboxPreview(S5_EXERCISES[s5ActiveExercise - 1].runnable ? s5CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="JS Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...s5Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code, click inside the preview, press arrow keys, and click Verify.</div>
                          ) : [...s5Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 6: TRACK BOUNDARIES & SAFETY GUARDS (JS Sandbox) */}
              {sandboxSessionId === 'l1-s6' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S6_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s6ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setS6ActiveExercise(ex.num);
                          setS6CodeInput(ex.preloaded);
                          setS6Logs([]);
                          setS6Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 6.{ex.num}{(exerciseProgress['l1-s6'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S6_EXERCISES[s6ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {S6_EXERCISES[s6ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {S6_EXERCISES[s6ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${s6Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = S6_EXERCISES[s6ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing boundary guard logic for Exercise 6.${s6ActiveExercise}...` }];
                            const pass = ex.validate(s6CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setS6Success(true);
                              const prog = markExerciseComplete('l1-s6', s6ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 6 CHALLENGES COMPLETE! Your car now stays safely on the track!' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Boundary or safety rule missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setS6Success(false);
                            }
                            setS6Logs(logs);
                          }}
                        >
                          {s6Success ? '✓ Exercise Complete' : 'Verify JS Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setS6CodeInput(S6_EXERCISES[s6ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (game.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={s6CodeInput}
                          onChange={(e) => setS6CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Racing Game Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildJsSandboxPreview(S6_EXERCISES[s6ActiveExercise - 1].runnable ? s6CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="JS Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...s6Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code, click inside the preview, press arrow keys, and click Verify.</div>
                          ) : [...s6Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 7: OBSTACLE LOOP GENERATION (JS Sandbox) */}
              {sandboxSessionId === 'l1-s7' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S7_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s7ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setS7ActiveExercise(ex.num);
                          setS7CodeInput(ex.preloaded);
                          setS7Logs([]);
                          setS7Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 7.{ex.num}{(exerciseProgress['l1-s7'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S7_EXERCISES[s7ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {S7_EXERCISES[s7ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {S7_EXERCISES[s7ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${s7Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = S7_EXERCISES[s7ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing loop logic for Exercise 7.${s7ActiveExercise}...` }];
                            const pass = ex.validate(s7CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setS7Success(true);
                              const prog = markExerciseComplete('l1-s7', s7ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 7 CHALLENGES COMPLETE! Highway markers now spawn automatically!' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Loop bounds or formula incorrect.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setS7Success(false);
                            }
                            setS7Logs(logs);
                          }}
                        >
                          {s7Success ? '✓ Exercise Complete' : 'Verify JS Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setS7CodeInput(S7_EXERCISES[s7ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (game.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={s7CodeInput}
                          onChange={(e) => setS7CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Racing Game Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildJsSandboxPreview(S7_EXERCISES[s7ActiveExercise - 1].runnable ? s7CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to the "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="JS Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...s7Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify. This session's code runs once when the preview loads.</div>
                          ) : [...s7Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 8: MODULAR CONTROL FUNCTIONS (JS Sandbox) */}
              {sandboxSessionId === 'l1-s8' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S8_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s8ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setS8ActiveExercise(ex.num);
                          setS8CodeInput(ex.preloaded);
                          setS8Logs([]);
                          setS8Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 8.{ex.num}{(exerciseProgress['l1-s8'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S8_EXERCISES[s8ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {S8_EXERCISES[s8ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {S8_EXERCISES[s8ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${s8Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = S8_EXERCISES[s8ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing modular function design for Exercise 8.${s8ActiveExercise}...` }];
                            const pass = ex.validate(s8CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setS8Success(true);
                              const prog = markExerciseComplete('l1-s8', s8ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 8 CHALLENGES COMPLETE! Your steering logic is now fully modular!' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Function structure or scope requirement missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setS8Success(false);
                            }
                            setS8Logs(logs);
                          }}
                        >
                          {s8Success ? '✓ Exercise Complete' : 'Verify JS Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setS8CodeInput(S8_EXERCISES[s8ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (game.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={s8CodeInput}
                          onChange={(e) => setS8CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Racing Game Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildJsSandboxPreview(S8_EXERCISES[s8ActiveExercise - 1].runnable ? s8CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="JS Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...s8Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code, click inside the preview, press arrow keys, and click Verify.</div>
                          ) : [...s8Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 9: THE RACING GAME LOOP - TIMERS & ANIMATIONS (JS Sandbox) */}
              {sandboxSessionId === 'l1-s9' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S9_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s9ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setS9ActiveExercise(ex.num);
                          setS9CodeInput(ex.preloaded);
                          setS9Logs([]);
                          setS9Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 9.{ex.num}{(exerciseProgress['l1-s9'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S9_EXERCISES[s9ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {S9_EXERCISES[s9ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {S9_EXERCISES[s9ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${s9Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = S9_EXERCISES[s9ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing animation loop logic for Exercise 9.${s9ActiveExercise}...` }];
                            const pass = ex.validate(s9CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setS9Success(true);
                              const prog = markExerciseComplete('l1-s9', s9ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 9 CHALLENGES COMPLETE! Your obstacles now animate down the track!' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Loop or recursion requirement missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setS9Success(false);
                            }
                            setS9Logs(logs);
                          }}
                        >
                          {s9Success ? '✓ Exercise Complete' : 'Verify JS Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setS9CodeInput(S9_EXERCISES[s9ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (game.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={s9CodeInput}
                          onChange={(e) => setS9CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Racing Game Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildJsSandboxPreview(S9_EXERCISES[s9ActiveExercise - 1].runnable ? s9CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="JS Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...s9Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...s9Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 10: COLLISION DETECTION - AUDITING AI OVERLAP MATH (JS Sandbox) */}
              {sandboxSessionId === 'l1-s10' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S10_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s10ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setS10ActiveExercise(ex.num);
                          setS10CodeInput(ex.preloaded);
                          setS10Logs([]);
                          setS10Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 10.{ex.num}{(exerciseProgress['l1-s10'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S10_EXERCISES[s10ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {S10_EXERCISES[s10ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {S10_EXERCISES[s10ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${s10Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = S10_EXERCISES[s10ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing collision math for Exercise 10.${s10ActiveExercise}...` }];
                            const pass = ex.validate(s10CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setS10Success(true);
                              const prog = markExerciseComplete('l1-s10', s10ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 10 CHALLENGES COMPLETE! Collisions are now detected correctly!' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Bounding box math incorrect.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setS10Success(false);
                            }
                            setS10Logs(logs);
                          }}
                        >
                          {s10Success ? '✓ Exercise Complete' : 'Verify JS Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setS10CodeInput(S10_EXERCISES[s10ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (game.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={s10CodeInput}
                          onChange={(e) => setS10CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Racing Game Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildJsSandboxPreview(S10_EXERCISES[s10ActiveExercise - 1].runnable ? s10CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="JS Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...s10Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...s10Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 11: THE DASHBOARD & HIGH-SCORE COUNTER - DOM OPERATIONS (JS Sandbox) */}
              {sandboxSessionId === 'l1-s11' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S11_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s11ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setS11ActiveExercise(ex.num);
                          setS11CodeInput(ex.preloaded);
                          setS11Logs([]);
                          setS11Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 11.{ex.num}{(exerciseProgress['l1-s11'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S11_EXERCISES[s11ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {S11_EXERCISES[s11ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {S11_EXERCISES[s11ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${s11Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = S11_EXERCISES[s11ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing DOM update logic for Exercise 11.${s11ActiveExercise}...` }];
                            const pass = ex.validate(s11CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setS11Success(true);
                              const prog = markExerciseComplete('l1-s11', s11ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 11 CHALLENGES COMPLETE! The HUD and restart flow are fully wired up!' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. DOM selector or update logic missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setS11Success(false);
                            }
                            setS11Logs(logs);
                          }}
                        >
                          {s11Success ? '✓ Exercise Complete' : 'Verify JS Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setS11CodeInput(S11_EXERCISES[s11ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (game.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={s11CodeInput}
                          onChange={(e) => setS11CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Racing Game Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildJsSandboxPreview(S11_EXERCISES[s11ActiveExercise - 1].runnable ? s11CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="JS Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...s11Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...s11Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 12: RACING CAR GAME ASSESSMENT (JS Sandbox) */}
              {sandboxSessionId === 'l1-s12' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S12_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s12ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setS12ActiveExercise(ex.num);
                          setS12CodeInput(ex.preloaded);
                          setS12Logs([]);
                          setS12Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 12.{ex.num}{(exerciseProgress['l1-s12'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S12_EXERCISES[s12ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {S12_EXERCISES[s12ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {S12_EXERCISES[s12ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${s12Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = S12_EXERCISES[s12ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Running capstone diagnostic for Exercise 12.${s12ActiveExercise}...` }];
                            const pass = ex.validate(s12CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setS12Success(true);
                              const prog = markExerciseComplete('l1-s12', s12ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ LEVEL 1 CAPSTONE COMPLETE! The Racing Car Game is fully certified. Onward to Level 2!' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Capstone requirement not met.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setS12Success(false);
                            }
                            setS12Logs(logs);
                          }}
                        >
                          {s12Success ? '✓ Exercise Complete' : 'Verify JS Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setS12CodeInput(S12_EXERCISES[s12ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (game.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={s12CodeInput}
                          onChange={(e) => setS12CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Racing Game Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildJsSandboxPreview(S12_EXERCISES[s12ActiveExercise - 1].runnable ? s12CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="JS Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...s12Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...s12Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STANDARD PROMPT SANDBOX FOR LEVEL 2-4 */}
              {!['l1-s1', 'l1-s2', 'l1-s3', 'l1-s4', 'l1-s5', 'l1-s6', 'l1-s7', 'l1-s8', 'l1-s9', 'l1-s10', 'l1-s11', 'l1-s12'].includes(sandboxSessionId) && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '20px', height: '100%', width: '100%' }}>
                  <div className="glass-panel sandbox-left">
                    <div className="panel-header">
                      <h3>Prompt Specification Panel</h3>
                      <div className="sandbox-rules-indicator">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: 14, height: 14 }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        STRICT PROMPT RULES ACTIVE
                      </div>
                    </div>

                    <div className="sandbox-panel-body">
                      <div className="sandbox-field">
                        <label>Role</label>
                        <input type="text" value={sandboxRole} onChange={(e) => setSandboxRole(e.target.value)} placeholder="e.g. Senior System Architect" />
                      </div>
                      <div className="sandbox-field">
                        <label>Task description</label>
                        <textarea value={sandboxTask} onChange={(e) => setSandboxTask(e.target.value)} placeholder="What should the AI code generator build?" />
                      </div>
                      <div className="sandbox-field">
                        <label>Logical Constraints (Rules)</label>
                        <textarea value={sandboxConstraints} onChange={(e) => setSandboxConstraints(e.target.value)} placeholder="e.g. Prevent double trigger check, zero manual edits allowed" />
                      </div>
                      <div className="sandbox-field">
                        <label>Explicit Input Structure</label>
                        <input type="text" value={sandboxInput} onChange={(e) => setSandboxInput(e.target.value)} placeholder="e.g. weightSensor, elapsedSeconds" />
                      </div>
                      <div className="sandbox-field">
                        <label>Edge cases to handle</label>
                        <input type="text" value={sandboxEdgeCases} onChange={(e) => setSandboxEdgeCases(e.target.value)} placeholder="e.g. Null variables, overflows" />
                      </div>
                    </div>

                    <div className="sandbox-footer">
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Code editor is read-only. Fix bugs via prompt.</span>
                      <button className="btn-cyber btn-cyber-primary" onClick={handleGenerate}>Run AI Generator</button>
                    </div>
                  </div>

                  <div className="sandbox-right">
                    <div className="glass-panel code-screen-panel">
                      <div className="code-screen-header">
                        <div className="code-screen-title">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 14, height: 14}}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                          </svg>
                          main_sandbox_output.js
                        </div>
                        {sandboxCodeOutput && (
                          <button className="btn-cyber btn-cyber-red" onClick={runChaosMonkey} disabled={isRunningChaos}>
                            {isRunningChaos ? 'Running Fuzzer...' : 'Launch Chaos Monkey'}
                          </button>
                        )}
                      </div>
                      
                      <div className="code-screen-body">
                        {sandboxCodeOutput ? (
                          <pre style={{ margin: 0 }}>{sandboxCodeOutput}</pre>
                        ) : (
                          <div className="code-screen-empty">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 48, height: 48, stroke: 'var(--text-muted)'}}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span>Exercise Workspace Empty.<br/>Fill out the prompt details on the left and click "Run AI Generator" to begin.</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="glass-panel chaos-console-panel">
                      <div className="chaos-console-header">
                        <div className="chaos-console-title">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 16, height: 16}}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                          </svg>
                          Chaos Monkey Fuzzing Console
                        </div>
                        {sandboxSuccess && (
                          <span className="badge-cyber badge-green">ALL TESTS PASSED (+100 XP)</span>
                        )}
                      </div>

                      <div className="chaos-console-body">
                        {chaosLogs.length > 0 ? (
                          chaosLogs.map((log, index) => (
                            <div key={index} className={`chaos-log-item ${log.type}`}>
                              <span>{log.type === 'success' && '✓ '}</span>
                              <span>{log.type === 'error' && '✗ '}</span>
                              {log.text}
                            </div>
                          ))
                        ) : (
                          <div className="chaos-console-empty">
                            No active tests. Run the AI Generator and trigger the Chaos Monkey.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

                </div>
              </div>
            </div>
          )}

          {/* Project Journal View */}
          {activeTab === 'journal' && (
            <div className="tab-journal journal-layout animate-in" style={{ display: 'grid', gridTemplateColumns: showProjectTasks ? '0.8fr 2fr' : '1fr', gap: '24px', height: 'calc(100vh - 140px)' }}>
              
              {/* Left sidebar: Sessions List */}
              {showProjectTasks && (
                <div className="glass-panel journal-sidebar-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%', overflowY: 'auto', padding: '16px' }}>
                  <div style={{ padding: '4px 8px 12px 8px', borderBottom: '1px solid var(--border-color)', marginBottom: 12 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Project Tasks</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 2 }}>Select a Session to Work On</div>
                  </div>
                  
                  {CURRICULUM_DATA.filter(s => s.level === curriculumLevel).map(session => {
                    const matchingJournal = journalEntries.find(j => 
                      j.id.endsWith('_' + session.id) || 
                      j.id === session.id || 
                      j.title.toLowerCase().includes(session.title.toLowerCase())
                    );
                    const isSelected = selectedJournal && (selectedJournal.id === matchingJournal?.id || (matchingJournal === undefined && selectedJournalId === `${currentUser?.id}_${session.id}`));
                    
                    return (
                      <div 
                        key={session.id} 
                        className={`glass-panel journal-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => {
                          if (matchingJournal) {
                            setSelectedJournalId(matchingJournal.id);
                            setActiveJournalVersion(matchingJournal.active_version || 1);
                          } else {
                            setSelectedJournalId(`${currentUser?.id}_${session.id}`);
                            setActiveJournalVersion(1);
                          }
                        }}
                        style={{ padding: '12px', cursor: 'pointer', border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)', background: isSelected ? 'rgba(0, 242, 254, 0.05)' : 'none', borderRadius: '6px' }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                          <span>SESSION {session.id.split('-s')[1]}</span>
                          {matchingJournal ? (
                            <span className="badge-cyber badge-green">LOGGED</span>
                          ) : (
                            <span className="badge-cyber badge-red" style={{ background: 'rgba(255, 77, 77, 0.1)', color: '#ff4d4d' }}>UNSTARTED</span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                          {session.title.replace(/Session \d+:\s*"/, '').replace(/"/, '')}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              
              {/* Right main panel: Tabbed Journal Details */}
<div className="glass-panel journal-detail-view" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto', padding: '20px' }}>
                {(() => {
                  const currentSession = CURRICULUM_DATA.find(s => 
                    selectedJournalId.endsWith('_' + s.id) || selectedJournalId === s.id
                  );
                  
                  if (!currentSession) {
                    return (
                      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '16px' }}>
                          <button 
                            className="btn-cyber btn-cyber-secondary btn-small" 
                            onClick={() => setShowProjectTasks(prev => !prev)}
                            style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                          >
                            {showProjectTasks ? 'Hide Tasks Sidebar' : 'Show Tasks Sidebar'}
                          </button>
                        </div>
                        <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 48, flexGrow: 1 }}>
                          Select a Session on the left to review your Project Journal.
                        </div>
                      </div>
                    );
                  }
                  
                  const isInitialized = selectedJournal && selectedJournal.id.endsWith('_' + currentSession.id);

                  if (!isInitialized) {
                    return (
                      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '16px' }}>
                          <button 
                            className="btn-cyber btn-cyber-secondary btn-small" 
                            onClick={() => setShowProjectTasks(prev => !prev)}
                            style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                          >
                            {showProjectTasks ? 'Hide Tasks Sidebar' : 'Show Tasks Sidebar'}
                          </button>
                        </div>
                        <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', justifyContent: 'center', flexGrow: 1 }}>
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: 48, height: 48, stroke: 'var(--text-muted)' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                          </svg>
                          <div>
                            <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Project Journal Offline</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '360px', margin: '0 auto' }}>
                              You have not started your Project Journal homework for this session yet. Initialize the journal log template to begin.
                            </p>
                          </div>
                          <button 
                            className="btn-cyber btn-cyber-primary" 
                            onClick={() => {
                              const newId = `${currentUser.id}_${currentSession.id}`;
                              const newTitle = `L${currentSession.level} S${currentSession.id.split('-s')[1]}: ${currentSession.title.replace(/Session \d+:\s*"/, '').replace(/"/, '')}`;
                              const initialSerialized = serializeJournalData('', '', '', '', '', '', '', '', '');
                              const initialPrompt = PROJECT_TASKS[currentSession.id] 
                                ? PROJECT_TASKS[currentSession.id].promptGuide 
                                : (currentSession.homework || 'Complete the session project task.');
                              fetch('/api/journal', {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json',
                                  'Authorization': `Bearer ${token}`
                                },
                                body: JSON.stringify({
                                  id: newId,
                                  title: newTitle,
                                  prompt: initialPrompt,
                                  code: initialSerialized
                                })
                              })
                              .then(res => res.json())
                              .then(() => {
                                fetch('/api/journal', {
                                  headers: { 'Authorization': `Bearer ${token}` }
                                })
                                .then(res => res.json())
                                .then(data => {
                                  setJournalEntries(data);
                                  setSelectedJournalId(newId);
                                  setActiveJournalVersion(1);
                                });
                              });
                            }}
                          >
                            Initialize Project Journal
                          </button>
                        </div>
                      </div>
                    );
                  }
                  

                  
                  return (
                    <>
                      <div className="journal-detail-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                        <div>
                          <button 
                            className="btn-cyber btn-cyber-secondary btn-small" 
                            onClick={() => setShowProjectTasks(prev => !prev)}
                            style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                          >
                            {showProjectTasks ? 'Hide Tasks Sidebar' : 'Show Tasks Sidebar'}
                          </button>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <h2 className="journal-detail-title" style={{ margin: 0, fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>{selectedJournal.title}</h2>
                          <span className="journal-detail-date" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>LOGGED AT {selectedJournal.date}</span>
                        </div>
                      </div>

                      {/* Project Task Guide Header Card */}
                      {PROJECT_TASKS[currentSession.id] && (
                        <div className="glass-panel" style={{ padding: '16px', marginBottom: '16px', borderLeft: '4px solid var(--accent-purple)', background: 'rgba(138, 43, 226, 0.03)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--accent-purple)', fontWeight: 'bold', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                              🏎️ Racing Car Project — {PROJECT_TASKS[currentSession.id].partNum}
                            </span>
                            <span className="badge-cyber badge-purple" style={{ fontSize: '0.65rem', background: 'rgba(138, 43, 226, 0.2)', color: 'rgb(180, 100, 255)' }}>Active Milestone</span>
                          </div>
                          <h3 style={{ margin: '4px 0 8px 0', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                            {PROJECT_TASKS[currentSession.id].partTitle}
                          </h3>
                          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                            <div style={{ flex: '1 1 260px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                              <strong>Milestone Objectives:</strong>
                              <ul style={{ margin: '4px 0 0 0', paddingLeft: '16px', listStyleType: 'disc' }}>
                                {PROJECT_TASKS[currentSession.id].objectives.map((obj, i) => (
                                  <li key={i} style={{ marginBottom: '2px' }}>{obj}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Target Outcome Preview: a small rendered picture of what this milestone
                                should visually produce once complete, so objectives aren't just text.
                                Sits beside the objectives so students see the "screen so far" at a glance. */}
                            {PROJECT_TASKS[currentSession.id].targetOutcomeHtml && (
                              <div style={{ flex: '0 0 220px', width: '220px' }}>
                                <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-purple)', fontWeight: 'bold', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '4px' }}>
                                  🎯 Target Outcome
                                </span>
                                <iframe
                                  srcDoc={`
                                    <html>
                                      <head><style>${S2_PREVIEW_STYLE_CSS_MINI}</style></head>
                                      <body>${PROJECT_TASKS[currentSession.id].targetOutcomeHtml}</body>
                                    </html>
                                  `}
                                  style={{ width: '100%', height: '105px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                                  title="Milestone Target Outcome Preview"
                                />
                                {PROJECT_TASKS[currentSession.id].targetOutcomeCaption && (
                                  <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '4px', marginBottom: 0, fontStyle: 'italic', lineHeight: 1.3 }}>
                                    {PROJECT_TASKS[currentSession.id].targetOutcomeCaption}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* 5 sub-tabs selection */}
                      <div className="journal-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', marginBottom: '16px' }}>
                        <button 
                          className={`btn-cyber btn-small ${activeJournalTab === 'plan' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                          onClick={() => setActiveJournalTab('plan')}
                        >
                          1. Plan & Design
                        </button>
                        <button 
                          className={`btn-cyber btn-small ${activeJournalTab === 'prompt' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                          onClick={() => setActiveJournalTab('prompt')}
                        >
                          2. Write AI Prompt
                        </button>
                        <button 
                          className={`btn-cyber btn-small ${activeJournalTab === 'review' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                          onClick={() => setActiveJournalTab('review')}
                        >
                          3. Review & Explain
                        </button>
                        <button 
                          className={`btn-cyber btn-small ${activeJournalTab === 'test' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                          onClick={() => setActiveJournalTab('test')}
                        >
                          4. Test & Break
                        </button>
                        <button 
                          className={`btn-cyber btn-small ${activeJournalTab === 'iterate' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                          onClick={() => setActiveJournalTab('iterate')}
                        >
                          5. Iterate & Improve
                        </button>
                      </div>


                      {/* Tab Content Panels */}
                      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        
                        {/* Tab 1: Plan & Design */}
                        {activeJournalTab === 'plan' && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Visual Concept &amp; UX Flow</label>
                              <textarea
                                value={editingPlanVision}
                                onChange={e => setEditingPlanVision(e.target.value)}
                                style={{ width: '100%', height: '90px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder={PROJECT_TASKS[currentSession.id] ? "Planned look & feel:\n" + PROJECT_TASKS[currentSession.id].planSpecs.vision : "Describe what the player should SEE and experience in plain language — layout, colors, motion, and controls (e.g. a 2-lane road scrolling bottom to top, a red car that moves left/right with the arrow keys)"}
                              />
                            </div>
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>System Parts & Information</label>
                              <textarea
                                value={editingPlanSpecs}
                                onChange={e => setEditingPlanSpecs(e.target.value)}
                                style={{ width: '100%', height: '130px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder={PROJECT_TASKS[currentSession.id] ? "Planned system design:\n" + PROJECT_TASKS[currentSession.id].planSpecs.parts : "In plain language, list: what PARTS/pieces does this need? (e.g. a road area, a car, a scoreboard) What INFORMATION does the game need to remember? (e.g. the score, whether the game is running) — no tag names or code yet."}
                              />
                            </div>
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Logic Flow Diagram / Pseudocode</label>
                              <textarea 
                                value={editingPlanFlow}
                                onChange={e => setEditingPlanFlow(e.target.value)}
                                style={{ width: '100%', height: '150px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder={PROJECT_TASKS[currentSession.id] ? "Planned control algorithm:\n" + PROJECT_TASKS[currentSession.id].planSpecs.flow : "Outline step-by-step logic in plain English or flowchart syntax (e.g. IF ArrowLeft pressed AND carX > leftBoundary THEN decrease carX)"}
                              />
                            </div>
                          </div>
                        )}

                        {/* Tab 2: Write AI Prompt */}
                        {activeJournalTab === 'prompt' && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Iterate your prompt versions to improve the generated code output.</span>
                              <div className="journal-history-nav" style={{ display: 'flex', gap: '6px' }}>
                                {selectedJournal.history.map(hist => (
                                  <button 
                                    key={hist.version}
                                    className={`version-nav-btn ${activeJournalVersion === hist.version ? 'active' : ''}`}
                                    onClick={() => setActiveJournalVersion(hist.version)}
                                    style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                                  >
                                    v{hist.version}
                                  </button>
                                ))}
                              </div>
                            </div>
                            
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>AI Prompt Specification (Active Version)</label>
                              <textarea 
                                value={editingCodePrompt}
                                onChange={e => setEditingCodePrompt(e.target.value)}
                                style={{ width: '100%', height: '280px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', lineHeight: 1.4 }}
                                placeholder="Draft the detailed prompt to guide your AI assistant. Specify constraints and outputs."
                              />
                            </div>
                          </div>
                        )}

                        {/* Tab 3: Review & Explain */}
                        {activeJournalTab === 'review' && (
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>AI-Generated Code</label>
                              <textarea
                                value={editingCodeOutput}
                                onChange={e => setEditingCodeOutput(e.target.value)}
                                style={{ width: '100%', height: '350px', background: '#030409', color: '#c5cdd8', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}
                                placeholder={PROJECT_TASKS[currentSession.id] && PROJECT_TASKS[currentSession.id].sampleGeneratedHtml ? "Paste the code generated by the AI here. Example of what this milestone's AI output might look like:\n\n" + PROJECT_TASKS[currentSession.id].sampleGeneratedHtml : "Paste the code generated by the AI here..."}
                              />
                            </div>
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Code Defense & Explanations</label>
                              <textarea 
                                value={editingCodeReview}
                                onChange={e => setEditingCodeReview(e.target.value)}
                                style={{ width: '100%', height: '350px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder={PROJECT_TASKS[currentSession.id] ? "Review guidelines:\n" + PROJECT_TASKS[currentSession.id].codeReviewGuide.map((g, i) => (i + 1) + '. ' + g).join('\n') : "Review the code. Explain key blocks or audit for issues (e.g. 'The AI used var. I changed it to let. It missed checking boundary clamping...')"}
                              />
                            </div>
                          </div>
                        )}

                        {/* Tab 4: Test & Break */}
                        {activeJournalTab === 'test' && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Test Cases Checklist</label>
                              <textarea 
                                value={editingTestCases}
                                onChange={e => setEditingTestCases(e.target.value)}
                                style={{ width: '100%', height: '120px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder={PROJECT_TASKS[currentSession.id] ? "Test checklist guidelines:\n" + PROJECT_TASKS[currentSession.id].testCasesGuide : "Define your tests: e.g.\n- Happy Path: Steering moves X left/right.\n- Left boundary limit checks.\n- Right boundary limit checks."}
                              />
                            </div>
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Test Failure Results & Logs</label>
                              <textarea 
                                value={editingTestResults}
                                onChange={e => setEditingTestResults(e.target.value)}
                                style={{ width: '100%', height: '180px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder="Write down what happened when you tested and deliberately broke the code. What edge cases did you find?"
                              />
                            </div>
                          </div>
                        )}

                        {/* Tab 5: Iterate & Improve */}
                        {activeJournalTab === 'iterate' && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {PROJECT_TASKS[currentSession.id] && (
                              <div style={{ padding: '10px 12px', background: 'rgba(0, 242, 254, 0.04)', borderLeft: '3px solid var(--accent-cyan)', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                                💡 <strong>Iteration Guideline:</strong> {PROJECT_TASKS[currentSession.id].iterationGuide}
                              </div>
                            )}
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Prompt Iteration Changes</label>
                              <textarea 
                                value={editingIterationChanges}
                                onChange={e => setEditingIterationChanges(e.target.value)}
                                style={{ width: '100%', height: '120px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder="Describe what adjustments you made to your prompt (e.g. 'Added boundary validation logic checking if carX > 0...')"
                              />
                            </div>
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Reflective Lessons Learned</label>
                              <textarea 
                                value={editingIterationLessons}
                                onChange={e => setEditingIterationLessons(e.target.value)}
                                style={{ width: '100%', height: '180px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder="What did you learn from this prompting cycle? What surprised you about how the AI interpreted your instructions?"
                              />
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Action buttons footer */}
                      <div style={{ display: 'flex', gap: 12, marginTop: 24, borderTop: '1px solid var(--border-color)', paddingTop: 16 }}>
                        <button 
                          className="btn-cyber btn-cyber-primary" 
                          onClick={handleSaveJournalCode}
                          style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                        >
                          Save Changes
                        </button>
                        {activeJournalTab === 'prompt' && (
                          <button 
                            className="btn-cyber btn-cyber-green" 
                            onClick={handleAddNewJournalVersion}
                            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                          >
                            Save as New Version
                          </button>
                        )}
                        <button 
                          className="btn-cyber btn-cyber-red" 
                          onClick={() => {
                            if (window.confirm("Reset this version to defaults?")) {
                              setEditingPlanSpecs('');
                              setEditingPlanData('');
                              setEditingPlanFlow('');
                              setEditingCodePrompt(selectedJournal.history[0]?.prompt || '');
                              setEditingCodeOutput('');
                              setEditingCodeReview('');
                              setEditingTestCases('');
                              setEditingTestResults('');
                              setEditingIterationChanges('');
                              setEditingIterationLessons('');
                            }
                          }}
                          style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                        >
                          Reset Fields
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>

            </div>
          )}

          {/* Leaderboard View */}
          {activeTab === 'leaderboard' && (
            <div className="tab-leaderboard glass-panel animate-in">
              <div className="panel-header">
                <h3>Active Classroom Security Agents</h3>
                <span className="badge-cyber badge-cyan">Active Tournament</span>
              </div>
              <div className="panel-body">
                <div className="leaderboard-table-container">
                  <table className="leaderboard-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Agent Handler</th>
                        <th>Status</th>
                        <th>Last Case Operation</th>
                        <th>Bounty Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboardData.length === 0 ? (
                        <tr>
                          <td colSpan="5" style={{ textAlign: 'center', padding: 24, color: 'var(--text-muted)' }}>
                            No student profiles registered in classroom tournament.
                          </td>
                        </tr>
                      ) : (
                        leaderboardData.map(agent => {
                          const isUser = agent.username === currentUser?.username;
                          const scorePoints = agent.points;
                          const agentRank = getRank(scorePoints);
                          const rankBadgeColor = agentRank.title === 'Master Architect' ? 'badge-purple'
                            : agentRank.title === 'Senior Auditor' ? 'badge-cyan'
                            : agentRank.title === 'Junior Investigator' ? 'badge-green'
                            : 'badge-yellow';
                          return (
                            <tr key={agent.username} className={`leaderboard-row ${isUser ? 'current-user' : ''}`}>
                              <td className={`leaderboard-rank top-${agent.rank}`}>{agent.rank}</td>
                              <td className="leaderboard-username">
                                {agent.name}
                                {isUser && <span className="badge-cyber badge-cyan leaderboard-badge-me">YOU</span>}
                              </td>
                              <td>
                                <span className={`badge-cyber ${rankBadgeColor}`}>
                                  {agentRank.title}
                                </span>
                              </td>
                              <td>{agent.level}</td>
                              <td style={{ fontWeight: 600, color: 'var(--accent-cyan)' }}>{scorePoints} XP</td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Admin Panel Tab View */}
          {activeTab === 'admin' && (
            <div className="tab-admin glass-panel animate-in" style={{ textAlign: 'left' }}>
              <div className="panel-header">
                <h3>Admin Settings & Campaign Manager</h3>
                <span className="badge-cyber badge-red">AUTHORIZED ACCESS ONLY</span>
              </div>
              <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <h4 style={{ color: 'var(--accent-cyan)', margin: 0, fontSize: '1.1rem' }}>Active Campaign Theme Selection</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                    Swap the global campaign theme. Swapping themes dynamically re-skins the overarching Level Main Quests and Session Sub-Quests to align with the curriculum.
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 12 }}>
                    {Object.values(CAMPAIGN_THEMES).map(theme => (
                      <div 
                        key={theme.id}
                        className={`glass-panel`}
                        style={{ 
                          padding: 16, 
                          cursor: 'pointer', 
                          borderColor: campaignId === theme.id ? 'var(--accent-cyan)' : 'var(--border-color)',
                          background: campaignId === theme.id ? 'rgba(0, 242, 254, 0.04)' : 'transparent',
                          transition: 'all 0.2s'
                        }}
                        onClick={() => setCampaignId(theme.id)}
                      >
                        <h5 style={{ margin: '0 0 6px 0', fontSize: '1rem', color: campaignId === theme.id ? 'var(--accent-cyan)' : 'var(--text-primary)' }}>{theme.name}</h5>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{theme.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
                  <div>
                    <h4 style={{ color: 'var(--accent-cyan)', margin: 0, fontSize: '1.1rem', marginBottom: 12 }}>Register New Student Profile</h4>
                    <form onSubmit={handleAddStudent} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div className="form-group">
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Student Name / Alias</label>
                        <input
                          type="text"
                          className="login-input"
                          placeholder="e.g. Somchai S."
                          value={newStudentName}
                          onChange={e => setNewStudentName(e.target.value)}
                          required
                          style={{ padding: '8px 12px' }}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Username / Student ID</label>
                        <input
                          type="text"
                          className="login-input"
                          placeholder="e.g. std001"
                          value={newStudentUsername}
                          onChange={e => setNewStudentUsername(e.target.value)}
                          required
                          style={{ padding: '8px 12px' }}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Security Access Key</label>
                        <input
                          type="password"
                          className="login-input"
                          placeholder="••••••••"
                          value={newStudentPassword}
                          onChange={e => setNewStudentPassword(e.target.value)}
                          required
                          style={{ padding: '8px 12px' }}
                        />
                      </div>

                      <div className="form-group">
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Student Assigned Level</label>
                        <select
                          className="login-input"
                          value={newStudentLevel}
                          onChange={e => setNewStudentLevel(e.target.value)}
                          style={{ 
                            padding: '8px 12px', 
                            background: 'rgba(6, 8, 20, 0.8)', 
                            color: 'var(--text-primary)', 
                            border: '1px solid var(--border-color)', 
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="L1">Level 1: Logic</option>
                          <option value="L2">Level 2: AI Copilot</option>
                          <option value="L3">Level 3: Architect</option>
                          <option value="L4">Level 4: Engineer</option>
                        </select>
                      </div>
                      
                      {adminStatusMsg && (
                        <div className="badge-cyber" style={{ 
                          padding: 8, 
                          textAlign: 'center', 
                          color: adminStatusMsg.startsWith('Error') ? 'var(--accent-red)' : 'var(--accent-green)',
                          background: adminStatusMsg.startsWith('Error') ? 'rgba(255,51,102,0.1)' : 'rgba(57,255,20,0.1)',
                          borderColor: adminStatusMsg.startsWith('Error') ? 'var(--accent-red)' : 'var(--accent-green)'
                        }}>
                          {adminStatusMsg}
                        </div>
                      )}
                      
                      <button type="submit" className="btn-cyber btn-cyber-green" style={{ justifyContent: 'center', padding: '10px 14px' }}>
                        Create Student Profile
                      </button>
                    </form>
                  </div>

                  <div>
                    <h4 style={{ color: 'var(--accent-cyan)', margin: 0, fontSize: '1.1rem', marginBottom: 12 }}>Active Student Roster & Progress</h4>
                    <div style={{ maxHeight: '320px', overflowY: 'auto', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'rgba(6, 8, 20, 0.4)' }}>
                      {students.length === 0 ? (
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', padding: 16, margin: 0, textAlign: 'center' }}>No students registered yet.</p>
                      ) : (
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                          <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(0, 242, 254, 0.04)' }}>
                              <th style={{ padding: 10, textAlign: 'left', color: 'var(--accent-cyan)' }}>Name</th>
                              <th style={{ padding: 10, textAlign: 'left', color: 'var(--accent-cyan)' }}>Username</th>
                              <th style={{ padding: 10, textAlign: 'center', color: 'var(--accent-cyan)' }}>Assigned Level</th>
                              <th style={{ padding: 10, textAlign: 'right', color: 'var(--accent-cyan)' }}>Points</th>
                            </tr>
                          </thead>
                          <tbody>
                            {students.map(student => (
                              <tr key={student.id} style={{ borderBottom: '1px solid rgba(0, 242, 254, 0.05)' }}>
                                <td style={{ padding: 10, color: 'var(--text-primary)', fontWeight: 500 }}>{student.name}</td>
                                <td style={{ padding: 10, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{student.username}</td>
                                <td style={{ padding: 10, textAlign: 'center' }}>
                                  <select
                                    value={student.student_level || 'L1'}
                                    onChange={e => handleUpdateStudentLevel(student.id, e.target.value)}
                                    style={{
                                      padding: '4px 8px',
                                      background: 'rgba(6, 8, 20, 0.8)',
                                      color: 'var(--text-primary)',
                                      border: '1px solid var(--border-color)',
                                      borderRadius: '4px',
                                      fontSize: '0.8rem',
                                      cursor: 'pointer'
                                    }}
                                  >
                                    <option value="L1">L1: Logic</option>
                                    <option value="L2">L2: AI Copilot</option>
                                    <option value="L3">L3: Architect</option>
                                    <option value="L4">L4: Engineer</option>
                                  </select>
                                </td>
                                <td style={{ padding: 10, textAlign: 'right' }}>
                                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                                    <button
                                      className="btn-cyber btn-cyber-primary btn-small"
                                      onClick={() => handleViewStudentJournal(student)}
                                      style={{ padding: '2px 8px', fontSize: '0.7rem' }}
                                    >
                                      View Journal
                                    </button>
                                    <button
                                      className="btn-cyber btn-cyber-secondary btn-small"
                                      onClick={() => handleUpdateStudentPoints(student.id, Math.max(0, student.points - 50))}
                                      style={{ padding: '2px 8px !important', minWidth: '22px', height: '22px', fontSize: '0.7rem' }}
                                    >
                                      -
                                    </button>
                                    <span style={{ fontWeight: 600, color: 'var(--accent-cyan)', minWidth: '55px', display: 'inline-block', textAlign: 'center' }}>
                                      {student.points} XP
                                    </span>
                                    <button
                                      className="btn-cyber btn-cyber-green btn-small"
                                      onClick={() => handleUpdateStudentPoints(student.id, student.points + 50)}
                                      style={{ padding: '2px 8px !important', minWidth: '22px', height: '22px', fontSize: '0.7rem' }}
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <h4 style={{ color: 'var(--accent-cyan)', margin: 0, fontSize: '1.1rem' }}>Local Detective Statistics Overrides</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                    Adjust your XP score directly for debugging rank progressions and unlocked panels.
                  </p>
                  <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                    <button className="btn-cyber" onClick={() => updatePointsDB(Math.max(0, points - 100))}>Deduct 100 XP</button>
                    <button className="btn-cyber btn-cyber-green" onClick={() => updatePointsDB(points + 100)}>Add 100 XP</button>
                    <button className="btn-cyber btn-cyber-primary" onClick={() => updatePointsDB(1200)}>Promote to Master Rank (1200 XP)</button>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </main>

      {/* Teacher: Read-Only Student Journal Viewer */}
      {viewingStudent && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(3, 4, 9, 0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
          onClick={handleCloseStudentJournal}
        >
          <div
            className="glass-panel"
            style={{ width: 'min(900px, 100%)', maxHeight: '85vh', overflowY: 'auto', padding: 24, textAlign: 'left' }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <div>
                <h3 style={{ margin: 0 }}>{viewingStudent.name}'s Project Journal</h3>
                <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Read-only view — {viewingStudent.username}</p>
              </div>
              <button className="btn-cyber btn-cyber-red btn-small" onClick={handleCloseStudentJournal} style={{ padding: '4px 10px' }}>Close</button>
            </div>

            {viewingJournalLoading && <p style={{ color: 'var(--text-secondary)' }}>Loading journal entries...</p>}
            {!viewingJournalLoading && viewingJournalData.length === 0 && (
              <p style={{ color: 'var(--text-muted)' }}>This student has no saved journal entries yet.</p>
            )}

            {!viewingJournalLoading && viewingJournalData.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {viewingJournalData.map(entry => (
                    <div
                      key={entry.id}
                      onClick={() => {
                        setViewingJournalEntryId(entry.id);
                        setViewingJournalVersion(entry.activeVersion);
                      }}
                      className={`glass-panel ${viewingJournalEntryId === entry.id ? 'selected' : ''}`}
                      style={{
                        padding: 10, cursor: 'pointer', fontSize: '0.8rem',
                        border: viewingJournalEntryId === entry.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                        background: viewingJournalEntryId === entry.id ? 'rgba(0, 242, 254, 0.05)' : 'none'
                      }}
                    >
                      <div style={{ fontWeight: 600 }}>{entry.title}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', marginTop: 2 }}>{entry.date} · {entry.history.length} version{entry.history.length === 1 ? '' : 's'}</div>
                    </div>
                  ))}
                </div>

                <div>
                  {(() => {
                    const entry = viewingJournalData.find(e => e.id === viewingJournalEntryId);
                    if (!entry) return <p style={{ color: 'var(--text-muted)' }}>Select an entry to view.</p>;
                    const hist = entry.history.find(h => h.version === viewingJournalVersion) || entry.history[entry.history.length - 1];
                    if (!hist) return <p style={{ color: 'var(--text-muted)' }}>No versions saved for this entry.</p>;
                    const data = deserializeJournalData(hist.code);
                    const fields = [
                      ['1. Plan & Design — Visual Concept & UX Flow', data.planVision],
                      ['1. Plan & Design — System Parts & Information', data.planSpecs],
                      ['1. Plan & Design — Logic Flow', data.planFlow],
                      ['2. Write AI Prompt', hist.prompt],
                      ['3. Review & Explain — AI-Generated Code', data.codeOutput],
                      ['3. Review & Explain — Code Defense & Explanation', data.codeReview],
                      ['4. Test & Break — Test Cases', data.testCases],
                      ['4. Test & Break — Test Results & Logs', data.testResults],
                      ['5. Iterate & Improve — Changes Made', data.iterationChanges],
                      ['5. Iterate & Improve — Lessons Learned', data.iterationLessons]
                    ];
                    return (
                      <div>
                        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                          {entry.history.map(h => (
                            <button
                              key={h.version}
                              className={`version-nav-btn ${viewingJournalVersion === h.version ? 'active' : ''}`}
                              onClick={() => setViewingJournalVersion(h.version)}
                              style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                            >
                              v{h.version}
                            </button>
                          ))}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                          {fields.map(([label, value]) => (
                            <div key={label}>
                              <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{label}</label>
                              <div style={{ whiteSpace: 'pre-wrap', background: 'rgba(6, 8, 20, 0.7)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.82rem', color: value ? 'var(--text-primary)' : 'var(--text-muted)', minHeight: '20px' }}>
                                {value || '(not filled in)'}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
