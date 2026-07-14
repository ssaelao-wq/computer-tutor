## 6. Level 2: Technical Foundations II — "Data, Graphics & Client-Server" (Mars Colony Defense theme)

**Goal:** Complete the technical-knowledge foundation: track multiple active objects in dynamic arrays, render with the Canvas API, understand how the web works (clients, servers, HTTP), communicate asynchronously with `fetch`/APIs, and understand how persistent data is stored in relational databases and defended.

**Prerequisites:** Level 1 completion.

> **Restructure note (2026-07-13):** Level 2 is a *technical knowledge* level. The Mars Colony Defense theme frames every exercise and lab, but students do **not** build a cumulative game project at this level — real project builds begin at Level 3 (The Development Process) and culminate at Level 4 (The Capstone Build). Each session produces small, **standalone** themed lab artifacts; when a lab exercises an earlier concept, the tutor provides a fresh starter file. After Level 2 a student has *seen and understood* every layer of a full-stack application — frontend data structures and graphics, the client-server boundary, and the database — without yet having built one.

### 🛰️ The Mars Colony Theme: Concept-to-Lab Map

| Session | Core Concept | Standalone Lab Artifact |
|---------|-------------|------------------------|
| 1 | Canvas API vs. the DOM | Defense arena canvas with drawn shapes |
| 2 | Objects as sprites | Ship object renderer |
| 3 | Arrays & array methods | Laser battery list |
| 4 | Loop pruning & memory | Off-screen laser garbage collector |
| 5 | Nested arrays & grid matrices | Alien swarm grid + shield-cell index mapper |
| 6 | Key-state maps & nested collision sweeps | Input matrix + laser-vs-swarm sweeper |
| 7 | State machines & performance | Wave/HUD state lab + memory audit |
| 8 | Clients, servers, HTTP & JSON | Network-tab dissection + request/response worksheet |
| 9 | Async, Promises, `fetch` GET | Leaderboard telemetry reader |
| 10 | POST payloads & error handling | Score transmission handler |
| 11 | Relational tables & SQL queries | Colony data vault (SQL playground) |
| 12 | Validation, passwords & injection awareness | Data-vault defense drills |
| 13 | Assessment | Concept-mastery labs + diagnostics |

### Module 1: Graphics & Data Structures (Sessions 1–4)

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

### Module 2: Interaction, State & Performance (Sessions 5–7)

*(Restructure note: former Sessions 5–9 and 12 are compressed into three knowledge-focused sessions. Without a cumulative game build to polish, each session teaches its data-structure concept through standalone drills.)*

---

#### Session 5: "Alien Swarms & Shield Grids: Nested Arrays & Matrices" (2 hours)

**Learning Objectives:**
- Store grids of alien elements using multi-dimensional array tables
- Animate alien groups marching horizontally and vertically, bouncing at grid edges
- Map absolute pixel coordinates to grid cell indices (`Math.floor(x / cellWidth)`) to model destructible shield cells

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Row/Column Grid Indexing (15 mins)**
   - *Activity*: Locate specific aliens coordinate keys using `[row][col]` index labels; then erase shield cells that intersect a drawn laser path on grid paper.
   - *Action*: Match grid indexes to coordinates and compute cell overlap offsets.
   - *Debrief*: Show how nested lists represent rows and columns, and how absolute coordinates translate to grid columns.

2. **Core Concept Board Lesson: Multi-dimensional Arrays & Index Mapping (20 mins)**
   - *Topic 1*: Matrix grids as arrays containing child arrays; nested loops to access grid elements.
   - *Topic 2*: Marching delta loops and boundary edge triggers.
   - *Topic 3*: Coordinate-to-index mapping: `col = Math.floor((x - offset) / cellWidth)`; representing shield cells as `1 = full`, `0 = destroyed`.

3. **Design Phase: Swarm & Shield Blueprint (20 mins)**
   - *Activity*: Sketch the grid path: *Move right, if edge reached, drop y and reverse marching speed.* Then flowchart: laser intersects shield bounds ➔ find cell index ➔ set cell to `0`.
   - *Action*: Draft coordinate limits conditionals and the index mapping formula.

4. **Build Phase (AI Assisted): Coding the Swarm March & Shield Lookup (35 mins)**
   - *Action*: Prompt AI to generate the grid initializer, the marching function, and a shield-cell lookup function.
   - *Audit*: Audit nested loops and the `Math.floor` index math. Explain nested iteration coordinates to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Edge Stampede (15 mins)**
   - *Activity*: Tutor disables boundary indicators, causing the alien grid to slide completely off the screen; alternately, seeds an off-by-one in the shield column formula so lasers "hit" the wrong cell.
   - *Challenge*: Student restores the boundary checks and corrects the index calculation.
   - *Socratic Question*: *"Why didn't the aliens drop down and reverse? Trace the boundary coordinate updates. And why does the laser destroy the cell next to where it hit?"*

6. **Ethics: Drone Swarm Coordination (15 mins)**
   - *Topic*: Swarm robotics logic.
   - *Discussion*: *"Robotic search swarms share boundary rules. What checks must designers implement to prevent collision catastrophes?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 5 Homework", write (1) a nested JS loop that prints a 3x3 grid of coordinate values `(row, col)`, and (2) the lookup equation mapping absolute screen `X = 145` to a column index given `cellWidth = 50` and offset `100`.

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
- **Exercise 5.3 (Shield Cell Lookup) Solution**:
  ```javascript
  let shield = [1, 1, 1, 1, 1]; // Row of 5 cells starting at x=100, each 20px wide
  function checkShieldCollision(laser) {
    if (laser.y >= 400 && laser.y <= 415 && laser.x >= 100 && laser.x <= 200) {
      let col = Math.floor((laser.x - 100) / 20);
      if (shield[col] === 1) {
        shield[col] = 0; // Destroy cell
        return true;
      }
    }
    return false;
  }
  ```
- **Homework Evaluation**: Nested loops must print 9 distinct index pairs from `(0, 0)` to `(2, 2)`; the formula must subtract the offset before dividing: `index = Math.floor((145 - 100) / 50) = 0`.

---

#### Session 6: "Firing Control: Keyboard Matrices & Collision Sweeps" (2 hours)

**Learning Objectives:**
- Maintain simultaneous input mappings using key-state map objects (`keydown` ➔ `true`, `keyup` ➔ `false`)
- Implement nested loop collision sweeps (lasers array vs. alien grid) with correct splice/break behavior
- Reason about sweep cost ($O(N \times M)$) and early loop exits

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Multiple Inputs Mapping (15 mins)**
   - *Activity*: Match keyboard trigger combinations (e.g. ArrowLeft + Space) to output states; then compare coordinate lists to find overlaps between two arrays.
   - *Action*: Map key state combinations and trace array intersection points.
   - *Debrief*: Show why single keydown listeners fail under simultaneous inputs, and how a sweep compares every laser against every alien.

2. **Core Concept Board Lesson: Input Matrices & Double Iteration (20 mins)**
   - *Topic 1*: Declaring key state map objects (`keysPressed = {}`) and binding paired `keydown`/`keyup` listeners.
   - *Topic 2*: Sweeping lists of lasers against grids of active aliens; splice-inside-loop discipline (reverse iteration from Session 4).
   - *Topic 3*: Performance overheads ($O(N \times M)$) and breaking loops early once a collision resolves.

3. **Design Phase: Input & Sweep Blueprint (20 mins)**
   - *Activity*: Flowchart how input events toggle key map values; then flowchart: outer loop lasers ➔ inner loop aliens ➔ check overlap ➔ mark alien dead, splice laser, break.
   - *Action*: Draft the state chart and nested loop bounds specifications.

4. **Build Phase (AI Assisted): Coding the Input Matrix & Sweeper (35 mins)**
   - *Action*: Prompt AI to build the key state listener matrix (`input.js`) and the nested collision sweeper function.
   - *Audit*: Audit key checks and splice index offsets. Explain map state queries and nesting checks to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Firing Spam Lock & The Multiple Kill Bug (15 mins)**
   - *Activity*: Tutor removes the keyup handler (space key stuck `true`, infinite lasers), then removes the inner-loop `break` (one laser destroys a whole column in one frame).
   - *Challenge*: Student restores the keyup hook and inserts the break statement.
   - *Socratic Question*: *"Why is the ship firing continuously after you let go? Where does the key state reset? And why did one laser clear out three aliens?"*

6. **Ethics: Input Rate Limits in Security (15 mins)**
   - *Topic*: Input rate limits in security logins.
   - *Real-World Case*: The 2014 iCloud celebrity photo hack exploited Apple's lack of login rate limiting on the "Find My iPhone" API, allowing attackers to brute-force passwords without being locked out.
   - *Discussion*: *"If login endpoints do not enforce input rate thresholds, script bots can spam passcodes. How do event lockouts match cooling loops?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 6 Homework", write (1) keydown/keyup logic tracking keys `"a"`, `"d"`, and `"w"` in a state object, and (2) a nested loop checking overlaps between an array of 2 lasers and a grid of 4 aliens, logging hit locations.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 6)
- **Exercise 6.1 (Key Matrix Setup) Solution**:
  ```javascript
  let keysPressed = {};
  window.addEventListener("keydown", (e) => { keysPressed[e.key] = true; });
  window.addEventListener("keyup", (e) => { keysPressed[e.key] = false; });

  function handleInputs() {
    if (keysPressed["ArrowLeft"]) { ship.x -= ship.speed; }
    if (keysPressed["ArrowRight"]) { ship.x += ship.speed; }
    if (keysPressed[" "]) { fireLaser(); }
  }
  ```
- **Exercise 6.2 (Double Loop Collision Check) Solution**:
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
- **Homework Evaluation**: Verify both listeners toggle states in the map, and the nested loop checks bounding parameters for every laser/alien pair.

---

#### Session 7: "Colony Status: Game States, HUD Gauges & Performance Audits" (2 hours)

**Learning Objectives:**
- Implement game state machines handling wave increments and health counters
- Draw graphical HUD gauges (score text, wave counter, health bar) on canvas
- Identify and resolve memory leaks and frame drops caused by unbounded array growth

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Stage Multipliers & Memory Footprint Trace (15 mins)**
   - *Activity*: Calculate speed/scoring outputs using progression formulas (e.g. `speedMultiplier = wave * 0.15`); trace array length counters across 100 simulated frames.
   - *Action*: Apply coefficient variables and compare active array counts.
   - *Debrief*: Show how state variables scale difficulty, and how growing arrays increase CPU load until frames drop.

2. **Core Concept Board Lesson: State Machines & Profiling (20 mins)**
   - *Topic 1*: Wave tracking variables; stage-clear triggers; scale factor parameters.
   - *Topic 2*: Dynamic drawing of HUD gauges (`fillText`, proportional health bars).
   - *Topic 3*: Garbage collection pauses, loop optimization (caching lengths, minimizing allocations), and the DevTools Performance tab.

3. **Design Phase: State Machine & Optimization Checklist (20 mins)**
   - *Activity*: Sketch the state progression flow from stage clears to wave updates; identify optimization candidates (laser splicing, collision sweeps).
   - *Action*: Draft scale formulas and safety constraints.

4. **Build Phase (AI Assisted): Wave System & Optimization Pass (35 mins)**
   - *Action*: Prompt AI to write wave-clear checks and HUD renderers; then prompt a refactor of the rendering loop for efficiency.
   - *Audit*: Audit wave multiplier scripts and the memory footprint of the refactor in the Prompt Journal.

5. **Socratic Debugging: The Infinite Spawn Loop & Out-of-Memory Crash (15 mins)**
   - *Activity*: Tutor seeds a wave count bug spawning infinite concurrent waves; then disables laser boundary pruning so 500 lasers accumulate and the frame rate crawls.
   - *Challenge*: Student corrects the stage-clear guard and restores pruning.
   - *Socratic Question*: *"Why is the screen showing 100 new wave titles? Where did the guard fail? And why does the game get slower the longer you fire — check the lasers array length log."*

6. **Ethics: Difficulty Scaling & Performance Equity (15 mins)**
   - *Discussion*: *"How do games keep players hooked with scaling mechanics — and where is the line between fair challenge and manipulation? If developers only optimize for high-end laptops, how does that affect users in lower-income areas?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 7 Homework", write a conditional that checks if the active alien list is empty, increments the wave level, and doubles obstacle speed; then list 3 performance checkpoints you would monitor in a canvas game.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 7)
- **Exercise 7.1 (HUD Renderer) Solution**:
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
- **Exercise 7.2 (Next Wave Spawn) Solution**:
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
- **Exercise 7.3 (Cached Length Sweep) Solution**:
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
- **Homework Evaluation**: Conditional must compare active count to `0` and modify speed; monitoring answers must list indicators such as active array size limits, frame rate (FPS), and CPU/memory profiles.

---

### Module 3: Client-Server & Async APIs (Sessions 8–10)

---

#### Session 8: "Mission Control Uplink: How the Web Works" (2 hours) *(new session)*

**Learning Objectives:**
- Explain the client-server model: browsers as clients, servers as remote programs, and the request/response cycle
- Read the anatomy of an HTTP request (URL, method, headers, body) and response (status code, headers, JSON payload)
- Inspect real network traffic using the browser DevTools Network tab and interpret JSON payloads

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: The Radio Relay Roleplay (15 mins)**
   - *Activity*: The student plays "Mars Colony" (client) and the tutor plays "Mission Control" (server). The student writes request slips ("GET /supplies", "POST /report + payload"); the tutor answers with response slips carrying status codes (200 OK, 404 Not Found, 500 Server Error).
   - *Debrief*: The colony can only *ask*; Mission Control decides what to answer. The client never reaches into the server's storage directly.

2. **Core Concept Board Lesson: The Request/Response Cycle (20 mins)**
   - *Topic 1*: Clients vs. servers; what a URL's parts mean (protocol, host, path, query).
   - *Topic 2*: HTTP methods (GET reads, POST writes) and status code families (2xx success, 4xx client error, 5xx server error).
   - *Topic 3*: JSON as the data language of APIs — objects and arrays over the wire.

3. **Design Phase: API Contract Worksheet (20 mins)**
   - *Activity*: Design the "contract" for a colony telemetry API on paper: endpoint paths, methods, sample JSON responses (e.g. `GET /api/scores` returns `[{ "player": "cdt_arya", "score": 4200 }]`).
   - *Action*: Draft two endpoint specs with example payloads.

4. **Build Phase (Guided Dissection): Network Tab Investigation (35 mins)**
   - *Action*: Open a live site (and the Computer Tutor platform itself) with the DevTools Network tab. Student identifies real GET/POST requests, reads their status codes, headers, and JSON responses, and maps them onto the request/response model.
   - *Audit*: Student documents one full request/response pair (URL, method, status, payload shape) in the Prompt Journal.

5. **Socratic Debugging: The Wrong Address (15 mins)**
   - *Activity*: Tutor requests a misspelled endpoint producing a 404, then a malformed payload producing a 4xx error.
   - *Challenge*: Student reads the Network tab evidence and explains which side (client or server) is at fault for each failure.
   - *Socratic Question*: *"The server answered 404 — did the network fail? What is the difference between 'no connection' and 'connected, but the server says no'?"*

6. **Ethics: Metadata & Surveillance (15 mins)**
   - *Topic*: What requests reveal.
   - *Real-World Case*: In 2018, fitness app Strava's public heatmap of user GPS requests inadvertently revealed the locations of secret military bases worldwide.
   - *Discussion*: *"Even without reading message contents, what can someone learn just from *which* servers your device talks to and how often?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 8 Homework", open any public website with the Network tab, pick one request, and document: the URL, the method, the status code, and a sketch of the response payload structure.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 8)
- **Exercise 8.1 (Contract Reading) Solution**: Given `GET https://api.marsdefense.dev/scores?limit=5` — protocol `https`, host `api.marsdefense.dev`, path `/scores`, query `limit=5`; expected response: `200` with a JSON array of score objects.
- **Exercise 8.2 (Status Triage) Solution**: `200` = success; `404` = client asked for a path the server doesn't have; `500` = server crashed processing a valid-looking request; `403` = server understood but refuses (authorization).
- **Exercise 8.3 (JSON Shape) Solution**:
  ```json
  [
    { "player": "cdt_arya", "score": 4200 },
    { "player": "cdt_ben", "score": 3900 }
  ]
  ```
  Student must identify: array of 2 objects, each with a String and a Number property.
- **Homework Evaluation**: The documented request must include all four fields; accept any real site. Watch for students confusing the *page URL* with the *API request URL* — the Network tab lists both.

---

#### Session 9: "Asynchronous Telemetry: Interfacing Leaderboard APIs" (2 hours)

**Learning Objectives:**
- Read and explain asynchronous execution (Promises, async/await) vs. synchronous blocking code
- Write asynchronous fetch requests to retrieve live high score records from a telemetry API
- Connect the fetch call to the request/response model from Session 8

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Sync vs Async Timelines (15 mins)**
   - *Activity*: Chronologically trace execution orders in synchronous code vs asynchronous code logs.
   - *Action*: Compare asynchronous callback triggers order.
   - *Debrief*: Show how fetch operations execute in the background without freezing browser UI.

2. **Core Concept Board Lesson: Asynchronous Pipelines & fetch (20 mins)**
   - *Topic 1*: Asynchronous operations. Blocking vs Non-Blocking execution paths.
   - *Topic 2*: Request-Response Model in code: GET requests fetching remote JSON payloads (recap Session 8's contract worksheet).
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
   - *Discussion*: *"If we fetch scores inside a game loop 60 times a second, what happens to the server? Why must request intervals be restricted?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 9 Homework", write an async JS function skeleton that fetches data from a mock endpoint and logs the response to the console.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 9)
- **Exercise 9.1 (Async GET Request) Solution**:
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

#### Session 10: "Transmitting to Mission Control: POST, Payloads & Error Handling" (2 hours)

**Learning Objectives:**
- Compose HTTP POST requests sending JSON payloads to server endpoints
- Handle network communication exceptions and server errors using try/catch
- Validate submitted payload sizes to prevent server-side errors

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
   - *Activity*: Tutor blocks the destination URL. The lab freezes silently on submit because of missing catch blocks.
   - *Challenge*: Student wraps fetch commands inside try/catch blocks.
   - *Socratic Question*: *"Why did the page freeze when the network dropped? How does try/catch protect the interface from breaking?"*

6. **Ethics: Client-Side Integrity and Cheat Prevention (15 mins)**
   - *Topic*: Trusting client data inputs.
   - *Real-World Case*: In 2011, hackers modified client-side price values on the Citibank mobile app to transfer funds at manipulated exchange rates, stealing over $2.7 million before the exploit was patched.
   - *Discussion*: *"If scores are sent from the client, how do we prevent users from modifying request packets to post fake scores?"* *(This question is answered properly in Sessions 11–12: the server and its database must validate everything.)*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 10 Homework", write a JS fetch options configuration object specifying a POST method, JSON header content-type, and a body payload containing a test user score.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 10)
- **Exercise 10.1 (Async POST Request) Solution**:
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

### Module 4: Database Fundamentals & Data Security (Sessions 11–12)

*(New module — moved down from the former Level 3 in simplified form. Taught in a **browser-based SQL playground**; no local database installation at Level 2. Students learn *how databases work*; they will install and connect a real MySQL server at Level 3 when the guided project needs one.)*

---

#### Session 11: "The Colony Data Vault: Tables, Schemas & SQL Queries" (2 hours) *(new session)*

**Learning Objectives:**
- Explain why persistent data lives in a database on the server, not in client variables
- Design a simple relational table (columns, data types, primary key) for colony records
- Read and write basic SQL: `CREATE TABLE`, `INSERT`, `SELECT` with `WHERE` and `ORDER BY`

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: The Paper Registry (15 mins)**
   - *Activity*: The tutor presents colony records scribbled on loose notes (duplicated names, missing values, inconsistent formats). The student must "query" them by hand ("find all colonists with score above 4000") and experiences how painful unstructured data is.
   - *Debrief*: Tables with fixed columns and types exist so machines can answer questions fast and unambiguously.

2. **Core Concept Board Lesson: Relational Tables (20 mins)**
   - *Topic 1*: Tables, rows, columns, and data types (INT, VARCHAR, BOOLEAN, TIMESTAMP).
   - *Topic 2*: Primary keys as unique row identities; why duplicates are dangerous.
   - *Topic 3*: Where the database sits in the Session 8 diagram: client ➔ server ➔ database (the server is the only one who talks to the vault).

3. **Design Phase: Schema Blueprint (20 mins)**
   - *Activity*: Design a `colonist_scores` table on paper: choose columns, types, and the primary key.
   - *Action*: Draft the schema spec sheet and two sample rows.

4. **Build Phase (SQL Playground): Querying the Vault (35 mins)**
   - *Action*: In the browser-based SQL playground, create the table, insert 5 rows, and run progressive queries: `SELECT *`, `SELECT` with `WHERE score > 4000`, `ORDER BY score DESC`, and an `UPDATE` of one row.
   - *Audit*: Student explains what each clause filters or orders, and records the queries + results in the Prompt Journal.

5. **Socratic Debugging: The Query That Lies (15 mins)**
   - *Activity*: Tutor seeds a query with a wrong comparison (`WHERE score > 4000` written as `WHERE score < 4000`) and one with a missing `WHERE` on an `UPDATE` (every row modified!).
   - *Challenge*: Student identifies why the results are wrong and repairs both queries.
   - *Socratic Question*: *"The UPDATE ran without errors — so why is every colonist's score now 9999? What did the missing WHERE clause tell the database to do?"*

6. **Ethics: Data Retention (15 mins)**
   - *Topic*: What should be stored at all?
   - *Real-World Case*: In 2017, Equifax's breach exposed the stored personal records of 147 million people — data many argued should never have been retained in one place.
   - *Discussion*: *"Our scores table stores player names. Should it store birthdays? Addresses? What is the cost of every extra column we keep?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 11 Homework", write the SQL to (1) create a `supply_inventory` table with an id primary key, item name, and quantity, (2) insert two items, and (3) select all items with quantity below 10.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 11)
- **Exercise 11.1 (Create & Insert) Solution**:
  ```sql
  CREATE TABLE colonist_scores (
    id INT PRIMARY KEY,
    player VARCHAR(50),
    score INT,
    wave_reached INT
  );
  INSERT INTO colonist_scores (id, player, score, wave_reached)
  VALUES (1, 'cdt_arya', 4200, 6);
  ```
- **Exercise 11.2 (Filter & Sort) Solution**:
  ```sql
  SELECT player, score FROM colonist_scores
  WHERE score > 4000
  ORDER BY score DESC;
  ```
- **Exercise 11.3 (Targeted Update) Solution**:
  ```sql
  UPDATE colonist_scores SET score = 4500 WHERE id = 1;
  ```
  *Tutor Guide*: Emphasize that the `WHERE` clause is the blast radius — demonstrate the same statement without it on a throwaway table.
- **Homework Evaluation**: The `CREATE TABLE` must declare a primary key; the `SELECT` must use `WHERE quantity < 10`.

---

#### Session 12: "Defending the Data Vault: Validation, Passwords & Injection Awareness" (2 hours) *(new session)*

**Learning Objectives:**
- Explain why the server must never trust client input (connecting Session 10's cheat discussion to the database layer)
- Describe how passwords are stored safely (hashing, never plaintext) at an awareness level
- Recognize SQL injection in a query built by string concatenation, and explain parameterized queries as the defense

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: The Forged Supply Slip (15 mins)**
   - *Activity*: Replay Session 8's radio relay — but now the student plays a *hostile* colonist who edits their request slips ("quantity: -50", "score: 999999", a name field containing `'; DROP TABLE...`).
   - *Debrief*: The server received well-formed requests; the *content* was the attack. Format checks alone are not safety.

2. **Core Concept Board Lesson: The Trust Boundary (20 mins)**
   - *Topic 1*: Client input as hostile territory: range checks, type checks, and length limits on the server side.
   - *Topic 2*: Password storage awareness: why databases store *hashes*, not passwords; what a leak exposes in each case.
   - *Topic 3*: SQL injection: how gluing user text into a query string changes the query's *meaning*; parameterized queries as the professional fix (awareness level — students write them for real at Level 3).

3. **Design Phase: Validation Rulebook (20 mins)**
   - *Activity*: For the `colonist_scores` table from Session 11, write the validation rules the server must apply before any `INSERT` (name length, score range, allowed characters).
   - *Action*: Draft a "rulebook" table: field ➔ rule ➔ rejection message.

4. **Build Phase (SQL Playground + Guided Demo): Breaking and Fixing a Query (35 mins)**
   - *Action*: The tutor demonstrates, in the sandboxed playground, a login-style query built by string concatenation and shows how the classic `' OR '1'='1` input changes its meaning. The student then writes the same query in parameterized form (placeholder syntax) and re-tests the hostile input.
   - *Audit*: Student explains *in their own words* in the Prompt Journal why the parameterized version is immune — the input is treated as data, never as SQL.

5. **Socratic Debugging: The Negative Supply Heist (15 mins)**
   - *Activity*: Tutor seeds a server rule that accepts a purchase of quantity `-5`, which *adds* stock and *refunds* credits.
   - *Challenge*: Student writes the validation rule that closes the hole.
   - *Socratic Question*: *"Every line of this code ran correctly. So where is the bug? What assumption did the developer make about the user?"*

6. **Ethics: Responsible Disclosure (15 mins)**
   - *Topic*: What to do when you find a hole.
   - *Real-World Case*: In 2021, a researcher who reported a flaw exposing millions of records via a state website was initially threatened with prosecution — sparking a national debate that ended with the state revising its stance and disclosure policies being clarified.
   - *Discussion*: *"If you discover a score-tampering hole in a real game's API, what is the ethical action? What separates a security researcher from an attacker?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 12 Homework", write the validation rulebook (field ➔ rule ➔ rejection message) for a `register_colonist` form with username, password, and age fields — and one sentence explaining why the password column in the database should never contain the password itself.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 12)
- **Exercise 12.1 (Spot the Injection) Solution**: In
  ```javascript
  let query = "SELECT * FROM users WHERE name = '" + userInput + "'";
  ```
  the input `' OR '1'='1` turns the WHERE clause into a condition that is always true, returning every row. The string concatenation lets *data* become *code*.
- **Exercise 12.2 (Parameterized Form) Solution**:
  ```sql
  SELECT * FROM users WHERE name = ?;
  ```
  (placeholder bound to the user input by the database driver — the input can never terminate the string or add clauses).
- **Exercise 12.3 (Validation Rules) Solution** (accept equivalents): username — 3-20 chars, letters/digits/underscore only; score — integer, `0 ≤ score ≤ 1,000,000`; quantity — integer, `quantity > 0`.
- **Homework Evaluation**: Rulebook must cover all three fields with a concrete rule each; the password sentence must mention hashing (or "scrambled one-way") and that a leak of hashes does not directly reveal passwords.
- *Tutor Guide*: Keep all injection demonstrations inside the sandboxed playground on throwaway tables. The lesson's framing is **defensive**: students learn to recognize and close holes, echoing the platform's Cyber Detective identity.

---

#### Session 13: "Graduation Sprint & Level 2 Defense" (2 hours)

**Learning Objectives:**
- Demonstrate mastery across all four modules: data structures & canvas, state & performance, client-server & async, and database fundamentals
- Diagnose and patch seeded syntax or logic glitches across the level's lab types
- Defend data-structure choices, async flows, and validation rules in a walkthrough

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Final QA Sweeps (15 mins)**
   - *Activity*: Re-run three prior labs of the tutor's choosing. Document any bugs.
2. **Assessment Part A: The Mars Defense Assembler (45 mins)**
   - In a clean lab environment, build/verify: canvas initialization, a sprite array with pruning, an input state matrix, a nested collision sweep, and an async leaderboard fetch — each as a working standalone snippet.
3. **Assessment Part B: The Systems Walkthrough (45 mins)**
   - Walk through the completed labs with the tutor. Explain coordinate calculations, memory cleanup loops, the request/response cycle of the fetch labs, and the schema + validation rules from the database labs, line-by-line.
4. **Assessment Part C: Diagnostic Challenges (15 mins)**
   - Locate and patch a seeded bug in (a) an asynchronous request handler or array splice statement, and (b) a SQL query (wrong WHERE logic or an injection-vulnerable concatenation).

**Level 2 Assessment Rubric**

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Data Structure Logic** | All sprite movements, marching logic, nested matrix collisions, and cleanups are correct. | Minor boundary exceptions, but labs run clean. | Splice bugs or coordinate anomalies exist. | Scrambled logic, infinite loops, browser freezes. |
| **Asynchronous & Web Logic** | Fetches and posts with async/await; robust try/catch; explains the full request/response cycle and status codes. | Queries API successfully, but handles errors poorly or explains the cycle vaguely. | Struggles with fetch options, unresolved promises, or client/server confusion. | Blocked synchronous requests, syntax errors, no model of the web. |
| **Database & Security Knowledge** | Correct schema design, accurate SELECT/WHERE/UPDATE queries, identifies injection and states the parameterized defense. | Queries mostly correct; validation rules present but incomplete. | Can read but not write basic SQL; vague on why servers validate. | No working queries; no concept of the trust boundary. |
| **Memory & Performance** | Zero memory leaks; arrays pruned cleanly; loop efficiency is high. | Sprites pruned, but loop performance dips under load. | Inconsistent pruning, dead lasers leak memory. | No garbage collection, array sizes grow indefinitely. |

**Graduation Criteria for Level 3:**
- Rubric average score of 3.0 or higher.
- Can explain, unprompted, the full journey of a score: client variable ➔ JSON payload ➔ HTTP POST ➔ server validation ➔ database row.
- Ready to *apply* this knowledge: Level 3 introduces the development process (Git, PRDs, code review, deployment) on a real guided project.

---
