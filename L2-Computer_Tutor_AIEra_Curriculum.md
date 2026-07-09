## 6. Level 2: Intermediate — "Mars Colony Defense Game"

**Goal:** Transition to tracking multiple active objects (lasers, alien swarms) in dynamic arrays, rendering using the Canvas API, and communicating with leaderboard endpoints using asynchronous JavaScript (fetch/APIs).

**Prerequisites:** Level 1 completion.

### Module 1: Canvas Rendering & Sprite Collections (Sessions 1–4)

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

### Module 2: Swarm Control & Keyboard Matrices (Sessions 5–8)

#### Session 5: "Alien Swarms: Nested Arrays & Movement Deltas" (2 hours)

**Learning Objectives:**
- Store grids of alien elements using multi-dimensional array tables
- Animate alien groups marching horizontally and vertically down the canvas
- Detect when aliens touch grid edges to trigger bounce reactions

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Row/Column Grid Indexing (15 mins)**
   - *Activity*: Locate specific aliens coordinate keys using `[row][col]` index labels.
   - *Action*: Match grid indexes coordinates.
   - *Debrief*: Show how nested lists represent rows and columns in grid systems.

2. **Core Concept Board Lesson: Multi-dimensional Arrays (20 mins)**
   - *Topic 1*: Matrix grids as arrays containing child arrays.
   - *Topic 2*: Marching delta loops and boundary edge triggers.
   - *Topic 3*: Nested loops to access grid elements.

3. **Design Phase: Alien Marching Flow (20 mins)**
   - *Activity*: Sketch the grid path: *Move right, if edge reached, drop y and reverse marching speed.*
   - *Action*: Draft coordinate limits conditionals.

4. **Build Phase (AI Assisted): Coding the Swarm March (35 mins)**
   - *Action*: Prompt AI to generate grid generation and marching functions.
   - *Audit*: Audit loops. Explain nested iteration coordinates to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Edge Stampede (15 mins)**
   - *Activity*: Tutor disables boundary indicators, causing the alien grid to slide completely off the screen.
   - *Challenge*: Student restores the boundary checks.
   - *Socratic Question*: *"Why didn't the aliens drop down and reverse? Which conditional checks failed? Trace the boundary coordinate updates."*

6. **Ethics: Drone Swarm Coordination (15 mins)**
   - *Topic*: Swarm robotics logic.
   - *Discussion*: *"Robotic search swarms share boundary rules. What checks must designers implement to prevent collision catastrophes?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 5 Homework", write a nested JS loop that prints a 3x3 grid of coordinate values `(row, col)` to console logs.

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
- **Homework Evaluation**: Nested loops must print 9 distinct pairs of indices from `(0, 0)` to `(2, 2)`.

---

#### Session 6: "Firing Mechanisms & Keyboard Matrices" (2 hours)

**Learning Objectives:**
- Maintain simultaneous input mappings using keyboard matrices
- Solve keypress delays by tracking keys pressed/released states in arrays
- Trigger firing loops that enforce cooling intervals

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Multiple Inputs Mapping (15 mins)**
   - *Activity*: Match keyboard triggers combinations (e.g. ArrowLeft + Space) to output states.
   - *Action*: Map key state combinations.
   - *Debrief*: Show how key listener logs single key repeats, requiring maps to intercept simultaneous hold actions.

2. **Core Concept Board Lesson: Input State Matrices (20 mins)**
   - *Topic 1*: Why single keydown listeners fail under simultaneous inputs (e.g. steering while firing).
   - *Topic 2*: Declaring key state map objects (`keysPressed = {}`).
   - *Topic 3*: Binding listeners to keys pressed (`keydown` ➔ `true`, `keyup` ➔ `false`).

3. **Design Phase: Keyboard Matrix Blueprint (20 mins)**
   - *Activity*: Flowchart how input events toggle key map values.
   - *Action*: Draft variables state charts.

4. **Build Phase (AI Assisted): Coding the Inputs Matrix (35 mins)**
   - *Action*: Prompt AI to build the key state listener matrix (`input.js`).
   - *Audit*: Audit key checks scripts. Explain map state queries to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Firing Spam Lock (15 mins)**
   - *Activity*: Tutor removes keyup handlers, causing the space key to stay stuck in `true` state, spawning infinite lasers.
   - *Challenge*: Student restores keyup mapping hooks.
   - *Socratic Question*: *"Why is the spaceship firing continuously even when you let go of the keyboard? Where does the key state map reset?"*

6. **Ethics: Hardware Manipulation (15 mins)**
   - *Topic*: Input rate limits in security logins.
   - *Real-World Case*: The 2014 iCloud celebrity photo hack exploited Apple's lack of login rate limiting on the "Find My iPhone" API, allowing attackers to brute-force passwords without being locked out.
   - *Discussion*: *"If login endpoints do not enforce input rate thresholds, script bots can spam passcodes. How do event lockouts match cooling loops?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 6 Homework", write a JS object structure and keydown/keyup logic representing keys `"a"`, `"d"`, and `"w"`.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 6)
- **Exercise 6.1 (Key Matrix Setup) Solution**:
  ```javascript
  let keysPressed = {};
  window.addEventListener("keydown", (e) => { keysPressed[e.key] = true; });
  window.addEventListener("keyup", (e) => { keysPressed[e.key] = false; });
  ```
- **Exercise 6.2 (Move & Fire Loop) Solution**:
  ```javascript
  function handleInputs() {
    if (keysPressed["ArrowLeft"]) { ship.x -= ship.speed; }
    if (keysPressed["ArrowRight"]) { ship.x += ship.speed; }
    if (keysPressed[" "]) { fireLaser(); }
  }
  ```
- **Homework Evaluation**: Verify both listeners map inputs to key codes and toggle states.

---

#### Session 7: "Colony Shields: Destructible Grid Matrices" (2 hours)

**Learning Objectives:**
- Build protective shields using multi-dimensional grid lists representing pixel cells
- Detect laser hits on specific grid cells using coordinate index lookups
- Modify shield grid values to represent degradation on hits

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Pixel Grid Destruct (15 mins)**
   - *Activity*: Grid paper calculation: Erase cells that intersect laser paths.
   - *Action*: Compute cells overlap index offsets.
   - *Debrief*: Show how absolute coordinates translate to grid columns.

2. **Core Concept Board Lesson: Shield Block Matrices (20 mins)**
   - *Topic 1*: Representing shields as grid cells (`0 = empty`, `1 = full`).
   - *Topic 2*: Intersect checking using matrix index mapping.

3. **Design Phase: Destructible Grid Logic (20 mins)**
   - *Activity*: Flowchart: Laser intersects shield bounds ➔ find cell index ➔ set cell to `0` ➔ delete laser.
   - *Action*: Write the coordinate mapping formula: `col = Math.floor(laserX / cellWidth)`.

4. **Build Phase (AI Assisted): Styling Shields (35 mins)**
   - *Action*: Prompt AI to generate destructible shield block drawings and collision logic.
   - *Audit*: Audit index math. Explain index conversions to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Invincible Shields (15 mins)**
   - *Activity*: Tutor writes grid check index parameters out-of-bounds, causing lasers to bypass shield collision detection code silently.
   - *Challenge*: Student corrects coordinates to grid index calculations.
   - *Socratic Question*: *"Why do lasers clip through the shield blocks without damaging them? Trace the column calculation values."*

6. **Ethics: Self-Healing Systems (15 mins)**
   - *Topic*: Failure safety shields.
   - *Discussion*: *"How should safety gates behave during network partition states? Fail-open (less secure) or fail-closed (secure but locked)?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 7 Homework", write a JS coordinates lookup equation mapping absolute screen `X = 145` to column index given `cellWidth = 50`.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 7)
- **Exercise 7.1 (Shield Drawing) Solution**:
  ```javascript
  let shield = [1, 1, 1, 1, 1]; // Row of 5 pixel segments
  function drawShield() {
    for (let i = 0; i < shield.length; i++) {
      if (shield[i] === 1) {
        ctx.fillStyle = "green";
        ctx.fillRect(100 + i * 20, 400, 20, 15);
      }
    }
  }
  ```
- **Exercise 7.2 (Erase Shield Segment) Solution**:
  ```javascript
  function checkShieldCollision(laser) {
    if (laser.y >= 400 && laser.y <= 415 && laser.x >= 100 && laser.x <= 200) {
      let col = Math.floor((laser.x - 100) / 20);
      if (shield[col] === 1) {
        shield[col] = 0; // Destroy cell
        return true; // Collision resolved
      }
    }
    return false;
  }
  ```
- **Homework Evaluation**: Formula must subtract offset and divide: `index = Math.floor((145 - offset) / 50)`.

---

#### Session 8: "Advanced Collision Matrix: Lasers vs Alien Swarms" (2 hours)

**Learning Objectives:**
- Implement nested loop collision sweeps (Lasers array elements vs Aliens array elements)
- Trigger death updates to remove elements from both active collections on overlap
- Manage scoring increments and game state updates dynamically

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Nested Array Intersections (15 mins)**
   - *Activity*: Compare coordinates lists to match overlaps between two active arrays.
   - *Action*: Trace array intersection points.
   - *Debrief*: Show how comparisons check every laser coordinates against every alien.

2. **Core Concept Board Lesson: Double Iteration Collision Matrix (20 mins)**
   - *Topic 1*: Sweeping lists of lasers against grids of active aliens.
   - *Topic 2*: Performance overheads ($O(N 	imes M)$ updates complexity).
   - *Topic 3*: Breaking loops early once collision events resolve true.

3. **Design Phase: Matrix Sweep Flowchart (20 mins)**
   - *Activity*: Flowchart: Outer loop lasers ➔ Inner loop aliens ➔ check coordinates overlap ➔ splice both objects.
   - *Action*: Draft nested loop loop bounds specifications.

4. **Build Phase (AI Assisted): Coding the Collision Sweeper (35 mins)**
   - *Action*: Prompt AI to generate the nested collision sweeper function.
   - *Audit*: Audit variables and splice index offsets. Explain nesting checks loops to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Multiple Kill Bug (15 mins)**
   - *Activity*: Tutor forgets to break the inner loop after a laser collision, causing a single laser to destroy multiple aliens in the same frame column.
   - *Challenge*: Student inserts loop break statements.
   - *Socratic Question*: *"Why did one laser clear out three aliens in a row? What parameter should have been updated or exited once a collision occurred?"*

6. **Ethics: System Safety Checks (15 mins)**
   - *Topic*: Resource sweeps in security firewalls.
   - *Discussion*: *"How do firewall rules sweep packets headers? How does matching rules efficiency affect traffic performance?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 8 Homework", write a nested JS loop checking overlaps between an array of 2 lasers and a grid of 4 aliens, logging hit locations.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 8)
- **Exercise 8.1 (Double Loop Collision Check) Solution**:
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
- **Homework Evaluation**: Code must loop through both structures and check bounding parameters.

---

#### Session 9: "Game States: Waves, Scores, and Health Indicators" (2 hours)

**Learning Objectives:**
- Implement game state machines handling wave level increments and health counters
- Spawn faster and denser enemy waves upon clearing grid stages
- Draw graphical health status bars and scoreboard screens

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Stage Multipliers calculation (15 mins)**
   - *Activity*: Calculate speed and scoring outputs using progression formulas.
   - *Action*: Apply coefficients variables.
   - *Debrief*: Show how variables scale speed parameters dynamically.

2. **Core Concept Board Lesson: Progressive Game State Matrices (20 mins)**
   - *Topic 1*: Wave tracking variables and parameters.
   - *Topic 2*: Scale factor parameters (e.g. `speedMultiplier = wave * 0.15`).
   - *Topic 3*: Dynamic drawing of hud gauges.

3. **Design Phase: Game Loop State Machine (20 mins)**
   - *Activity*: Sketch the state progression flow from stage clears to wave updates.
   - *Action*: Draft scale formulas.

4. **Build Phase (AI Assisted): Level Progress System (35 mins)**
   - *Action*: Prompt AI to write functions checking wave clear triggers and updating health displays.
   - *Audit*: Audit code. Explain wave multipliers scripts to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Infinite Spawn Loop (15 mins)**
   - *Activity*: Tutor introduces a wave count loop bug, spawning infinite new waves concurrently when the alien count drops below 1.
   - *Challenge*: Student corrects stage clear checks.
   - *Socratic Question*: *"Why is the game screen showing 100 new wave titles and lagging? Where did the validation guard fail to check current wave initialization state?"*

6. **Ethics: Difficulty Scaling and User Frustration (15 mins)**
   - *Topic*: User engagement.
   - *Discussion*: *"How do games keep players hooked using scaling mechanics? Why must developers test limits to ensure challenges are fair?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 9 Homework", write a JS conditional statement that checks if the active alien list is empty and increments the current wave level, doubling the obstacle speed.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 9)
- **Exercise 9.1 (Health Bar Renderer) Solution**:
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
- **Exercise 9.2 (Next Wave Spawn) Solution**:
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
- **Homework Evaluation**: Code must compare active elements size to `0` and modify speed.

---

#### Session 10: "Asynchronous Telemetry: Interfacing Leaderboard APIs" (2 hours)

**Learning Objectives:**
- Understand client-server request dynamics and the REST API model
- Read and explain asynchronous loops concepts (Async/Await and Promise structures)
- Write asynchronous fetch requests to retrieve live high score records from a telemetry API

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Sync vs Async Timelines (15 mins)**
   - *Activity*: Chronologically trace execution orders in synchronous code vs asynchronous code logs.
   - *Action*: Compare asynchronous callback triggers order.
   - *Debrief*: Show how fetch loops execute in the background without freezing browser UI.

2. **Core Concept Board Lesson: Asynchronous Pipelines & fetch (20 mins)**
   - *Topic 1*: Asynchronous operations. Blocking vs Non-Blocking execution paths.
   - *Topic 2*: Request-Response Model: GET requests fetching remote JSON payloads.
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
   - *Discussion*: *"If we fetch scores inside our game loop 60 times a second, what happens to the server? Why must request intervals be restricted?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 10 Homework", write an async JS function skeleton that fetches data from a mock endpoint and logs the response to the console.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 10)
- **Exercise 10.1 (Async GET Request) Solution**:
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

#### Session 11: "Submitting High Scores to the Cloud Leaderboard" (2 hours)

**Learning Objectives:**
- Compose HTTP POST requests sending JSON payloads to server endpoints
- Handle network communication exceptions and database errors using try/catch
- Validate submitted payload sizes to prevent database errors

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
   - *Activity*: Tutor blocks the destination URL. The application freezes silently on submit button click because of missing catch blocks.
   - *Challenge*: Student wraps fetch commands inside try/catch blocks.
   - *Socratic Question*: *"Why did the game freeze when the network dropped? How does try/catch protect the interface from breaking?"*

6. **Ethics: Client-Side Integrity and Cheat Prevention (15 mins)**
   - *Topic*: Trusting client data inputs.
   - *Real-World Case*: In 2011, hackers modified client-side price values on the Citibank mobile app to transfer funds at manipulated exchange rates, stealing over $2.7 million before the exploit was patched.
   - *Discussion*: *"If scores are sent from the client, how do we prevent users from modifying request packets to post fake scores?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 11 Homework", write a JS fetch options configuration object specifying a POST method, JSON header content-type, and a body payload containing a test user score.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 11)
- **Exercise 11.1 (Async POST Request) Solution**:
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

#### Session 12: "Performance Optimization & Memory Audit" (2 hours)

**Learning Objectives:**
- Identify and resolve memory leaks caused by unbounded growth of inactive array elements
- Profile frame drops and optimize loop sweeps
- Apply diagnostic tests to catch logic edge cases

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Memory Footprint Trace (15 mins)**
   - *Activity*: Trace length counters of array variables inside a simulator running over 100 frames.
   - *Action*: Compare active arrays counts.
   - *Debrief*: Show how arrays size increases CPU processing loads, causing graphics frame drops.

2. **Core Concept Board Lesson: Garbage Collection & Profiling (20 mins)**
   - *Topic 1*: CPU performance limits. How garbage collection pauses code if arrays grow too large.
   - *Topic 2*: Loop optimization: caching array length variables, minimizing allocations.

3. **Design Phase: Optimization Checklist (20 mins)**
   - *Activity*: Identify candidates for optimization (e.g. laser list splicing checks, collision checks).
   - *Action*: Draft safety constraints.

4. **Build Phase (AI Assisted): Code Optimizations (35 mins)**
   - *Action*: Prompt AI to refactor rendering loops and optimize array sweeps.
   - *Audit*: Audit variables footprint. Explain memory performance sweeps to the tutor in the Prompt Journal.

5. **Socratic Debugging: The Out-of-Memory Crash (15 mins)**
   - *Activity*: Tutor disables the laser boundary removal checks. After shooting 500 lasers, the frame rate degrades to a crawl.
   - *Challenge*: Student restores the boundary checks.
   - *Socratic Question*: *"Why is the game getting slower? Look at the lasers array length log. What happens to browser memory when dead sprites are never pruned?"*

6. **Ethics: Performance on Older Hardware (15 mins)**
   - *Topic*: Performance on older hardware.
   - *Discussion*: *"If developers only optimize code for high-end test laptops, how does that affect users in lower-income areas? Why is performance equity an ethical concern?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 12 Homework", list 3 performance diagnostic checkpoints you would monitor to ensure a canvas web game runs smoothly.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 12)
- **Exercise 12.1 (Cache length parameters) Solution**:
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
- **Homework Evaluation**: Answers must list monitoring indicators: active array sizes limits, rendering frame rates (FPS), CPU memory profiles.

---

#### Session 13: "Graduation Sprint & Level 2 Defense" (2 hours)

**Learning Objectives:**
- Deploy a functional Canvas web game to local development servers
- Diagnose and patch syntax or logic glitches in a project workspace
- Defend game loops math and asynchronous API integrations in a code review walkthrough

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Final QA Sweeps (15 mins)**
   - *Activity*: Run final gameplay runs. Document any bugs.
2. **Assessment Part A: The Mars Defense Assembler (45 mins)**
   - Build/verify the fully compiled code stack: Canvas initialization, sprite collections loops, input state matrices, nested loops collision matrices, and async leaderboard fetch systems.
3. **Assessment Part B: The Canvas Autopilot Walkthrough (45 mins)**
   - Walk through the game codebase with the tutor. Explain coordinate calculations, memory cleanup loops, and API fetch options line-by-line.
4. **Assessment Part C: Diagnostic Challenges (15 mins)**
   - Locate and patch a seeded bug in an asynchronous request handler or array splice statement.

**Level 2 Assessment Rubric**

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Logical Logic** | All sprite movements, marching logic, nested matrix collisions, and cleanups are correct. | Minor boundary exceptions, but game runs clean. | Splice bugs or coordinate anomalies exist. | Scrambled logic, infinite loops, browser freezes. |
| **Asynchronous Logic** | Successfully fetches and posts data using async/await; try/catch guards are robust. | Queries API successfully, but handles error exceptions poorly. | Struggling with fetch options, unresolved promises. | Blocked synchronous requests, syntax errors. |
| **Memory Optimization** | Zero memory leaks; arrays are pruned cleanly; loop efficiency is high. | Sprites pruned, but loop performance dips under load. | Inconsistent pruning, dead lasers leak memory. | No garbage collection, array sizes grow indefinitely. |
| **System Flow** | Strong modular decomposition; clear encapsulation of Canvas, inputs, and APIs. | Modules separated but share too many global scope dependencies. | Poor decoupling, monolithic rendering. | Spaghetti code, no modular functions. |

---

