# Computer Tutor: Teacher & Tutor Guidelines (Level 2)

This guideline is designed for the tutor to lead one-on-one sessions for students aged 13–16. It maps out the exact timeline, board explanations, Socratic prompts, concept reference material, and homework check criteria for each 2-hour session of Level 2: **"Mars Colony Defense"** — the Canvas-based intermediate curriculum that follows Level 1's DOM racing game.

---

## Pedagogical Philosophy (AI-Era Shift)
1. **Never Type For the Student**: Let them run into literal logic errors. The learning occurs when they diagnose *why* a machine did exactly what they wrote instead of what they intended.
2. **Socratic Questioning**: When a student gets stuck, do not give the answer. Ask: *"What did the console log just say?"* or *"Which cell index does that formula actually compute?"*
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
  - Setting a student's level to **L2** automatically deactivates tabs for Levels 1, 3, and 4 in the **Quest Files** and **Curriculum Guide** views.
  - Locked tabs display a padlock (`🔒`) and are disabled to keep students focused on their active level milestones.
  - Tutors bypass these locks so they can click and audit any level tab at any time.

### 2. Interactive Prompt Journals
* **Homework and Notebook Logging**:
  - The **Prompt Journal** tab is a fully interactive text/code editor workspace.
  - All text containers have **automatic text-wrapping** enabled, preventing horizontal overflow logs.
  - Students write their notes, logic schemas, or homework answers inside the **Code Output History** editor.
  - Click **Save Changes** (Blue button) to overwrite the current selected version in the database.
  - Click **Save as New Version** (Green button) to save the current edits as a new draft while keeping previous versions intact.

### 3. Level 2's Sandbox Is Different From Level 1's
* Level 1 (Sessions 1–12) gives students **bespoke, session-specific sandbox simulators** — 10 numbered exercises per session, each with its own hand-built validator and live preview.
* **Level 2 does not.** Every L2 session (`l2-s1` through `l2-s13`) uses the same **Standard AI Prompt Sandbox** panel: a generic Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases form, an **AI Generator** button, a **Chaos Monkey** fuzz-tester, and a read-only code output pane.
* This is a deliberate platform design choice, not a missing feature — Canvas/async code (drawing loops, sprite arrays, fetch calls) doesn't lend itself to the same kind of small, individually-validated micro-exercises L1's DOM/CSS/JS fundamentals do. Instead, the platform relies on the tutor to drive session-specific practice using this guideline's **Concept Reference Cheat Sheet** and **Standard AI Prompt Sandbox — Tutor Fill-In Guide** sections (see each session below) plus the **Project Journal Milestone** as the real per-session deliverable.
* Every L2 session also has a **Concept Reference** tab (separate from the sandbox) — a set of 3–4 lookup cards per session (Core Definition, syntax cheat sheets, common-mistake ❌/✅ comparisons, Google-searchable keywords) that students can open any time during the sandbox or Project Journal work. This guideline reproduces that content per session so tutors can talk through it without switching screens.

---

## 🚀 Level 2 Structure: Technical Foundations II (13 Sessions)

> **Restructure note (2026-07-13):** Level 2 is a *technical knowledge* level. The Mars Colony Defense theme frames every exercise and lab, but students do **not** build one cumulative game across sessions — real project builds begin at Level 3. Each session produces a **standalone themed lab** (fresh tutor-provided starter when a lab reuses an earlier concept). The "Project Journal Milestone" sections in this guideline now describe each session's standalone lab, logged through the same 5-step workflow — the expected code and answers are unchanged.
>
> The restructured Level 2 (see `L2-Computer_Tutor_AIEra_Curriculum.md`) compresses the old canvas/swarm sessions and adds three new sessions on how the web works, database fundamentals, and data security. The per-session guides below are renumbered to match the curriculum doc's session order exactly — Session 5 and Session 6 each merge two of the old, more granular sessions (shield grids folded into Session 5's alien-grid content; the collision sweep folded into Session 6's input-matrix content), Session 7 merges the old game-state and performance-audit sessions, and Sessions 8, 11, and 12 are the three sessions added by the restructure.

The standalone lab track, aligned to the new session structure:
- **Lab 1 (S1)**: *Canvas Arena Initialization* — `<canvas>` element, 2D context, player ship as a static rectangle.
- **Lab 2 (S2)**: *Sprite Object Modeling* — the `ship` object literal (x/y/width/height/speed) with arrow-key movement.
- **Lab 3 (S3)**: *Laser Battery Arrays* — an empty `lasers` array; push new laser objects on spacebar press.
- **Lab 4 (S4)**: *Laser Motion & Garbage Collection* — move lasers each frame; reverse-loop-splice off-screen ones.
- **Lab 5 (S5)**: *Swarm Grids & Shield Cells* — a 3×5 nested-array alien grid marching/bouncing, plus the coordinate-to-cell index mapper.
- **Lab 6 (S6)**: *Input Matrix & Collision Sweeper* — `keysPressed` map for simultaneous steer+fire, plus the laser-vs-swarm nested sweep with `alive` flags.
- **Lab 7 (S7)**: *Wave States, HUD & Memory Audit* — wave-clear detection, canvas HUD, cached-length optimization pass.
- **Lab 8 (S8)**: *Request/Response Dissection* — a documented real request/response pair from the DevTools Network tab.
- **Lab 9 (S9)**: *Async Leaderboard Fetch (GET)* — an `async` function fetching and displaying scores with try/catch.
- **Lab 10 (S10)**: *Score Submission (POST)* — POST a JSON payload and handle failures gracefully.
- **Lab 11 (S11)**: *The Colony Data Vault* — a created table with inserts and SELECT/WHERE/ORDER BY queries in the SQL playground.
- **Lab 12 (S12)**: *Data Vault Defense Drills* — a validation rulebook plus the injection break-and-fix exercise.
- **Lab 13 (S13)**: *Graduation Sprint & Defense* — clean-room rebuild of key labs and a live tutor walkthrough.

---

## Session 1: "Initializing the Defense Arena: Canvas & Coordinates"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Reverse Engineering — Inspecting a Canvas Game
* **00:15 - 00:35 | Board Lesson**: The Canvas API vs. The DOM
* **00:35 - 01:00 | Design Phase**: Defense Grid Blueprint
* **01:00 - 01:30 | Sandbox Lab**: Coding the Arena
* **01:30 - 01:50 | Assessment**: The Overwriting Canvas
* **01:50 - 02:00 | Ethics Discussion**: Color Associations in Systems Design

### 1. Board Lesson Talking Points
* **HTML5 Canvas as a Pixel Array Viewport**: Explain that a `<canvas>` element is not a container for other elements like a `<div>` — it is a rectangular grid of raw pixels the browser hands you a "pen" to paint into. Nothing lives inside it as an inspectable element; DevTools will show a single empty `<canvas>` tag no matter how much is drawn on it.
* **Direct Rendering Commands**: Explain that shapes only appear on canvas because you explicitly call drawing methods like `fillRect()`, `clearRect()`, and `stroke()` on the 2D context. There is no equivalent of writing markup and letting the browser lay it out — every pixel on screen is the direct result of a method call the student wrote.
* **Center Alignment vs. Coordinate Anchoring**: Contrast L1's CSS centering tricks (`margin: auto`, flexbox `justify-content`) with canvas, where every shape is anchored by an explicit top-left x/y coordinate passed into the draw call. "Centering" a shape on canvas means doing the arithmetic yourself (canvas width minus shape width, divided by two) instead of asking the browser to do it.

### 2. Socratic Prompting
* *"Why does the space ship look like a solid red bar instead of moving? What is the role of clearRect before drawing the next frame?"* (Because canvas never erases itself automatically — each new `fillRect` paints on top of the last frame's pixels. Without `clearRect` wiping the canvas first, the ship's old and new positions blend into one continuous smear instead of appearing to move.)
* *"Why are alien indicators colored red in games? How do design decisions influence player aggression or anxiety?"* (Red is a near-universal danger/urgency cue, so it primes players to treat the target as hostile and react faster or more aggressively than a neutral color would; the choice is a deliberate design lever, not a neutral default, and it shapes how threatening or dehumanized the "enemy" feels.)

### 3. Concept Reference Cheat Sheet

Level 2 has no bespoke sandbox exercises like Level 1 — instead, students open the in-app **Concept Reference** tab for this session, which holds these 4 lookup cards. Walk through them as part of the Board Lesson or Sandbox Lab as needed:

* **Canvas vs. DOM Rendering (Immediate vs. Retained Mode)**

  **Core Definition:** The DOM keeps a tree of persistent elements the browser remembers and re-paints for you (retained mode) — an L1 `<div>` stays on screen until you change its CSS. A `<canvas>` has no memory of what it drew: it is a raw grid of pixels, and YOU issue draw commands every frame to put color there (immediate mode). Nothing is remembered between frames.

  **Why this changes everything:**
  - DOM: `document.getElementById("player-car").style.left = carX + "px";` — the browser tracks the element and moves it.
  - Canvas: `ctx.fillRect(ship.x, ship.y, ship.width, ship.height);` — this paints pixels ONCE. If you don't redraw next frame, the ship is just a static picture, not an object you can look up later.

  **Rule of Thumb:** On canvas there is no "the ship element" to select — only x/y numbers in your own object and the pixels you painted from them.

  *Keywords: canvas vs dom immediate mode retained mode rendering*

* **Getting the 2D Context**

  **Core Definition:** Before you can draw anything, you need a reference to the `<canvas>` element AND a "drawing context" object that exposes the actual draw methods.

  **Why It Matters:** This one-time setup is the gateway to everything else in Level 2 — every single draw call from here on starts with `ctx.`, so a typo or a missing `getContext("2d")` call means nothing downstream can run, usually surfacing as a confusing "ctx is undefined" error before any game code even executes.

  **Syntax Cheat Sheet:**
  ```javascript
  <canvas id="defense-arena" width="480" height="600"></canvas>

  const canvas = document.getElementById("defense-arena");
  const ctx = canvas.getContext("2d");   // ctx is the toolbox: fillRect, clearRect, etc.
  ```

  **Why Two Variables:** `canvas` is the HTML element (used for width/height); `ctx` is the pen you actually draw with. Almost every draw call in the game will be `ctx.something(...)`, never `canvas.something(...)`.

  *Keywords: canvas getContext 2d javascript setup width height*

* **Drawing Primitives (fillRect, fillStyle, strokeRect)**

  **Core Definition:** Canvas has no shape elements — you draw rectangles directly onto the pixel grid with coordinate and size arguments.

  **Why It Matters:** `fillRect` and `fillStyle` are the entire vocabulary for putting color on screen in Level 2 — there is no `<div>` or CSS class to fall back on. Every shape in the game, from the ship to the shield blocks to the aliens, is built from nothing but these two calls repeated with different coordinates.

  **Syntax Blueprint:**
  ```javascript
  ctx.fillStyle = "#22cc88";                 // set the paint color BEFORE drawing
  ctx.fillRect(x, y, width, height);          // solid filled rectangle (e.g. a shield block)
  ctx.strokeStyle = "#ffffff";
  ctx.strokeRect(x, y, width, height);        // outline-only rectangle
  ```

  **Worked Example (a shield block):**
  ```javascript
  ctx.fillStyle = "#22cc88";
  ctx.fillRect(200, 500, 40, 40);   // paints a 40x40 green block at (200, 500)
  ```

  **Order Matters:** `fillStyle` must be set BEFORE `fillRect` is called — it colors whatever you draw next, not what you already drew.

  *Keywords: canvas fillRect fillStyle strokeRect draw rectangle*

* **clearRect and the Ghost-Trail Bug**

  **Core Definition:** Because canvas never erases itself automatically, every new frame's drawing PILES ON TOP of the last one unless you clear the pixels first.

  **Common Mistake Comparison:**
  ```javascript
  // ❌ WRONG (no clear — draws pile up into a smear trail):
  function gameLoop() {
    ctx.fillRect(ship.x, ship.y, ship.width, ship.height);
    ship.x += ship.speed;
    requestAnimationFrame(gameLoop);
  }

  // ✅ CORRECT (clear the whole canvas first, then draw):
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   // wipe last frame's pixels
    ctx.fillRect(ship.x, ship.y, ship.width, ship.height);
    ship.x += ship.speed;
    requestAnimationFrame(gameLoop);
  }
  ```

  **Rule of Thumb:** `clearRect` must run FIRST in every frame, before any `fillRect` calls, or the ship leaves a solid streak instead of appearing to move.

  *Keywords: canvas clearRect ghost trail smear bug animation loop*

### 4. Standard AI Prompt Sandbox — Tutor Fill-In Guide

Level 2 uses the generic **Standard AI Prompt Sandbox** panel (Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases fields + AI Generator + Chaos Monkey) rather than session-specific validators. The tutor should guide the student to fill in each field using this session's real project spec below — not a scripted answer key.

* **Task description** field: Create a `<canvas id="game-canvas">` element sized 480x600, retrieve its 2D context in `canvas.js`, and draw a red 40x40 player ship rectangle at coordinates (200, 500) using `fillStyle` and `fillRect`.
* **Logical Constraints (Rules)** field: Must call `canvas.getContext('2d')` before any draw commands; `fillStyle` must be set before `fillRect` is called.
* **Edge cases to handle** field: The draw loop must call `ctx.clearRect()` before each redraw once a game loop exists, so shapes don't leave a solid trail.
* **Expected AI output** (what the tutor should recognize as correct, sourced from the L2 curriculum doc's Tutor Manual):
  ```javascript
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "red";
  ctx.fillRect(200, 500, 40, 40);
  ```
* **Socratic Question during Review**: Why does the ship look like a solid trail instead of a single moving square if `ctx.clearRect()` is missing from the draw loop?

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** milestone card ("Part 1: Canvas Arena Initialization") tracks the student's real project file, separate from the Standard Sandbox above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "A dark 480x600 space arena with a single red square ship near the bottom — the first pixels painted directly onto a canvas, not built from HTML boxes."
   - *System Parts & Information (expected):* "Parts needed: the canvas viewport, the 2D drawing context (the 'pen' you draw with), and the ship rectangle. Information to track: canvas size, and the ship's position, size, and color."
   - *Logic Flow / Pseudocode (expected):* "Load the canvas element -> get its 2D drawing context -> set the fill color -> fillRect paints the ship's pixels onto the canvas."
   - *Target Outcome:* "First render — a red 40x40 ship painted at (200, 500) on a 480x600 canvas. Unlike Level 1's DOM game, everything here is drawn as pixels with no elements to inspect or select." This is what the in-app preview shows the student for this milestone.
   - *Why:* This is the pivot session of the whole level — every L1 habit the student built (select an element, set its CSS, let the browser remember it) stops working the moment they open a blank `<canvas>`. The plan has to explicitly name the drawing context as a "part" of the system, because unlike a `<div>`, there is nothing to select in DevTools once it's painted — the plan is the only durable record of what the ship *should* look like before the pixels dissolve into an unlabeled bitmap. Getting this reframing right in Session 1 is what makes Sessions 2-4 (sprites, arrays, cleanup) read as natural extensions rather than arbitrary new syntax.

2. **Write AI Prompt**
   - *Expected prompt:* "Draft an AI prompt asking to create a `<canvas id="game-canvas">` element sized 480x600, retrieve its 2D context in `canvas.js`, and draw a red 40x40 player ship rectangle at coordinates (200, 500) using `fillStyle` and `fillRect`."
   - *Why:* A strong prompt names the exact element id, exact pixel dimensions, and the exact draw method sequence (`fillStyle` before `fillRect`) — leaving no room for the AI to improvise sizing or skip retrieving the context before drawing.

3. **Review & Explain**
   - *Expected checklist:* Script calls `canvas.getContext('2d')` before any draw commands; `fillStyle` is set before `fillRect` is called.
   - *Expected Socratic answer* — *"Why does the ship look like a solid trail instead of a single moving square if `ctx.clearRect()` is missing from the draw loop?"* → Because canvas never erases previous pixels on its own; each new `fillRect` call paints on top of the last frame's rectangle, so without `clearRect` wiping the canvas first, every position the ship has ever occupied stays visible, merging into one solid smear.
   - *Why:* This is the single most common canvas bug students will hit the moment they add motion in Session 2 — reviewing it now, before movement even exists, means the student already knows the cause the instant they see the symptom.

4. **Test & Break**
   - *Expected test checklist:* `#game-canvas` exists with width 480 and height 600; `ctx` is a valid 2D rendering context; the player ship renders as a 40x40 red square at (200, 500).
   - *Why:* These are the exact three facts the Milestone Objectives require — Test & Break is where the student confirms, in the browser, that the canvas and context actually exist and the ship lands at the correct pixel, not just that the AI's code "looks right."

5. **Iterate & Improve**
   - *Expected answer:* "Confirm `clearRect()` runs before every redraw once the game loop is introduced in Part 2, so shapes don't leave trails."
   - *Why:* This plants the fix for the Socratic Debugging bug directly into the student's own iteration plan, connecting to this session's Ethics Discussion on how an unexamined default (a static red square, a red "enemy") carries forward unintended consequences if it is never revisited.

* **Homework Evaluation Checklist**: In the Journal tab, verify the student's snippet retrieves the 2D context (`getContext("2d")`) before any draw calls; sets `fillStyle` to green before calling `fillRect`; and draws the shield block using absolute (hardcoded) x/y/width/height parameters.

---

## Session 2: "Drawing and Animating Sprite Lists"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Object State Tracing
* **00:15 - 00:35 | Board Lesson**: Sprites as Object Literals
* **00:35 - 01:00 | Design Phase**: Sprite Objects Specs
* **01:00 - 01:30 | Sandbox Lab**: Drawing Sprites
* **01:30 - 01:50 | Assessment**: Object Scope Mutation
* **01:50 - 02:00 | Ethics Discussion**: Design Standardization

### 1. Board Lesson Talking Points
* **Sprites as Object Literals**: Explain that instead of five loose variables (`shipX`, `shipY`, `shipWidth`, `shipHeight`, `shipSpeed`), a sprite bundles all of an entity's properties into one JS object literal — `let ship = { x: 200, y: 500, width: 40, height: 40, speed: 5 };`. This gives every draw and move function a single, reliable source of truth to read from and write to instead of juggling matching sets of separate variables.
* **Modifying Object Values Inside Drawing Cycles**: Explain that movement and rendering both operate on the SAME object each frame — a key press changes a number stored on `ship` (e.g. `ship.x += ship.speed`), and the very next draw call reads that same object's current values to paint it. The object is the shared state; the draw call is just a snapshot of whatever the object currently holds.

### 2. Socratic Prompting
* *"Why does modifying position inside the event listener fail to move the ship on the canvas? Which variable is the key listener targeting?"* (Because a new `let ship = {...}` was re-declared inside the event listener, shadowing the outer global `ship`. The handler is mutating its own local copy — the global `ship` the game loop actually draws from is never touched, so nothing moves on screen.)
* *"Why do standard controls default to WASD and Arrow keys? How do standardization choices affect inclusivity?"* (WASD and Arrow keys became de facto standards because they sit naturally under a right-handed mouse grip and match decades of prior games, so players carry the muscle memory in with them; but a "standard" built around one common hand position and keyboard layout can disadvantage left-handed players, players with limited mobility, or non-QWERTY keyboards, so accessible games typically offer remappable controls rather than hard-coding one scheme.)

### 3. Concept Reference Cheat Sheet

Level 2 has no bespoke sandbox exercises like Level 1 — instead, students open the in-app **Concept Reference** tab for this session, which holds these 3 lookup cards. Walk through them as part of the Board Lesson or Sandbox Lab as needed:

* **Sprite Object Literals**

  **Core Definition:** A sprite bundles all of an on-screen entity's properties (position, size, speed) into one object literal, so canvas code always has a single source of truth to read from and write to.

  **Syntax Blueprint:**
  ```javascript
  let ship = { x: 200, y: 500, width: 40, height: 40, speed: 5 };

  console.log(ship.x);      // reads the current x (200)
  ship.x = ship.x + 10;     // writes a new x back onto the same object
  ```

  **Why an object instead of five loose variables:** Passing one `ship` object into a draw or move function is far cleaner than passing `shipX, shipY, shipWidth, shipHeight, shipSpeed` separately — and every property travels together.

  *Keywords: javascript object literal properties dot notation sprite*

* **Mutating Object Properties per Frame**

  **Core Definition:** Each frame, movement and rendering both read/write the SAME sprite object's properties — moving it means changing a number stored on the object, then drawing from that same object.

  **Syntax Blueprint:**
  ```javascript
  ship.x += ship.speed;    // update position in memory
  ctx.fillRect(ship.x, ship.y, ship.width, ship.height);  // draw from the SAME object's current values
  ```

  **Why Order Matters:** If you draw before updating, the ship appears to lag one frame behind its real position. Update the object's numbers first, then paint from them.

  *Keywords: javascript object property mutation increment canvas draw*

* **Variable Shadowing Bug**

  **Core Definition:** Declaring a new variable with the SAME name inside a nested block (like an event handler) creates a separate, local variable that hides — "shadows" — the outer one. Code inside that block now silently reads/writes the wrong copy.

  **Why It Matters:** This bug is dangerous specifically because it produces no error at all — the code runs, the handler fires, a value even changes — just on the wrong copy of the object. It is the sprite-object version of Level 1's global/local scope lesson, and it is exactly the kind of bug that forces you to trace WHERE a variable was declared, not just what its name is.

  **Common Mistake Comparison:**
  ```javascript
  // ❌ WRONG (re-declares ship inside the handler — shadows the global):
  let ship = { x: 200, y: 500, width: 40, height: 40, speed: 5 };
  window.addEventListener("keydown", function(event) {
    let ship = { x: 200, y: 500, width: 40, height: 40, speed: 5 };  // NEW local ship!
    if (event.key === "ArrowLeft") { ship.x -= ship.speed; }         // changes the LOCAL copy only
  });
  // The global ship never moves — the game loop keeps drawing the untouched original.

  // ✅ CORRECT (reuse the existing global ship, don't re-declare it):
  let ship = { x: 200, y: 500, width: 40, height: 40, speed: 5 };
  window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") { ship.x -= ship.speed; }         // mutates the ONE shared object
  });
  ```

  **Rule of Thumb:** Never re-declare a sprite variable with `let`/`const` inside a function that should be updating the outer one — assign to its properties instead.

  *Keywords: javascript variable shadowing let scope bug silent fail*

### 4. Standard AI Prompt Sandbox — Tutor Fill-In Guide

Level 2 uses the generic **Standard AI Prompt Sandbox** panel (Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases fields + AI Generator + Chaos Monkey) rather than session-specific validators. The tutor should guide the student to fill in each field using this session's real project spec below — not a scripted answer key.

* **Task description** field: Declare a `ship` object literal with `x`, `y`, `width`, `height`, and `speed` properties, then write a `moveLeft()` function that subtracts `ship.speed` from `ship.x`, clears the canvas, and redraws the ship.
* **Logical Constraints (Rules)** field: `ship` must be a single object literal, not five separate loose variables; `moveLeft()` must reference `ship.speed` instead of a hardcoded number.
* **Edge cases to handle** field: A local variable inside the move handler must never be named `ship` again — that would shadow the global object and silently stop the canvas ship from moving.
* **Expected AI output** (what the tutor should recognize as correct, sourced from the L2 curriculum doc's Tutor Manual):
  ```javascript
  let ship = { x: 220, y: 500, width: 40, height: 40, speed: 5 };

  function moveLeft() {
    ship.x -= ship.speed;
    ctx.clearRect(0, 0, 480, 600);
    ctx.fillRect(ship.x, ship.y, ship.width, ship.height);
  }
  ```
* **Socratic Question during Review**: If a local variable inside the move handler is also named `ship`, which one does the assignment update — and why does the canvas ship stop moving?

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** milestone card ("Part 2: Sprite Object Modeling") tracks the student's real project file, separate from the Standard Sandbox above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "The same ship, but now the arrow keys slide it left and right — each move erases the last frame and repaints it in the new spot."
   - *System Parts & Information (expected):* "Parts needed: one `ship` object bundling its x, y, width, height, and speed. Information to track: the ship's current position and how far it steps per key press."
   - *Logic Flow / Pseudocode (expected):* "Arrow key pressed -> add or subtract ship.speed from ship.x -> clear the canvas -> redraw the ship at its new position."
   - *Target Outcome:* "The ship is now an object literal with a speed property and steers with the arrow keys — shown here after pressing ArrowLeft. Session 1's ship was a static, hardcoded rectangle." This is what the in-app preview shows the student for this milestone.
   - *Why:* Session 1 proved a shape can be painted on canvas; this session proves that shape can hold *state* the way an L1 DOM element implicitly did. Bundling the ship's numbers into one object is the same design instinct as Session 1's target — a single named thing the rest of the code can refer to — except now the plan has to account for the object changing over time, not just being drawn once. This is also the session where the class first meets a genuinely silent bug (shadowing), so the plan's job is to set expectations precisely enough that "nothing happened" reads as a real symptom to investigate rather than a shrug.

2. **Write AI Prompt**
   - *Expected prompt:* "Write a prompt asking to declare a `ship` object literal with `x`, `y`, `width`, `height`, and `speed` properties, then write a `moveLeft()` function that subtracts `ship.speed` from `ship.x`, clears the canvas, and redraws the ship."
   - *Why:* Naming all five properties up front, plus the exact sequence (subtract, clear, redraw) inside `moveLeft()`, prevents the AI from generating a version that redraws before updating position — which would make the ship visibly lag a frame behind every key press.

3. **Review & Explain**
   - *Expected checklist:* `ship` is declared as a single object literal rather than five separate loose variables; `moveLeft()` references `ship.speed` instead of a hardcoded number.
   - *Expected Socratic answer* — *"If a local variable inside the move handler is also named `ship`, which one does the assignment update — and why does the canvas ship stop moving?"* → The assignment updates the newly-declared local `ship`, not the outer global one; because JavaScript resolves `ship` inside the handler to the nearest declaration in scope, the global `ship` that the render loop actually draws from is left untouched, so the canvas ship silently never moves even though no error is thrown.
   - *Why:* This is the exact bug staged in the Socratic Debugging segment — reviewing it in the Journal cements that the fix is "don't re-declare," not "add more code."

4. **Test & Break**
   - *Expected test checklist:* `ship` object has exactly 5 properties (x, y, width, height, speed); pressing ArrowLeft decreases `ship.x` by exactly `ship.speed`; the canvas re-renders the ship at the new x position.
   - *Why:* Each check isolates one layer of the bug surface — object shape, the math of the update, and the render actually reflecting it — so a failure immediately narrows down whether the object, the handler, or the draw call is at fault.

5. **Iterate & Improve**
   - *Expected answer:* "Check for variable shadowing bugs if the AI reintroduces a local `ship` inside any handler function."
   - *Why:* AI-generated code frequently re-declares variables for "safety" inside callbacks; this session's Ethics Discussion on standardized controls is a reminder that even correct-looking, well-intentioned code (like a fresh local variable) can quietly exclude the intended behavior — the same way a well-intentioned "standard" control scheme can quietly exclude some players.

* **Homework Evaluation Checklist**: In the Journal tab, verify `alien` is declared as a single object literal (not five loose variables); properties use valid colon key-value syntax (e.g. `x`, `y`, `health`, `speed`); and property names match what future sessions will reference (position x/y, health, marching speed).

---

## Session 3: "The Laser Battery: Arrays of Sprites"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Array Queue Exercises
* **00:15 - 00:35 | Board Lesson**: Arrays in Memory
* **00:35 - 01:00 | Design Phase**: Firing Logic Flowcharting
* **01:00 - 01:30 | Sandbox Lab**: Firing Lasers
* **01:30 - 01:50 | Assessment**: The Laser Cannon Stutter
* **01:50 - 02:00 | Ethics Discussion**: Resource Caps in Software

### 1. Board Lesson Talking Points
* **Arrays as Index-Ordered Tables**: Explain that an array is a single variable holding a numbered, ordered table of values — `lasers[0]` is the first laser, `lasers[1]` the second, and so on — which is exactly what's needed once the game has an unknown, changing number of active lasers instead of just one fixed ship.
* **Push Operations Appending to the End of Lists**: Explain that `lasers.push(newLaser)` always adds the new laser object to the END of the array and grows `lasers.length` by one — this is how a single spacebar press turns into a brand-new tracked entity without disturbing any laser already in flight.
* **Loops Iterating Over Array Elements**: Explain that a `for` loop is what visits every laser once per frame to update and draw it — `for (let i = 0; i < lasers.length; i++)` — and that looping on `lasers.length` rather than a fixed number is what lets the array grow and shrink safely as lasers are fired and removed.

### 2. Socratic Prompting
* *"How does browser key repetition delay affect inputs? How do we configure key state maps to capture continuous inputs?"* (A plain `keydown` listener fires once immediately, then pauses for the operating system's key-repeat delay before firing again — so held-down fire feels stuttery rather than a smooth stream. Capturing continuous input instead requires tracking key state directly, e.g. setting a flag `true` on `keydown` and `false` on `keyup`, and checking that flag every animation frame rather than relying on the browser's repeat timing.)
* *"If players can fire infinite lasers, they can lag the browser. Why must games enforce limits (cooling intervals) on weapon rates?"* (Every laser pushed into the array is an object the render loop must update and draw every single frame; with no cooldown, a player mashing the fire key can push far more lasers per second than the game can clean up, so the array grows unbounded and the frame rate degrades for everyone — a cooldown caps how fast new entries can be added, keeping the per-frame workload predictable.)

### 3. Concept Reference Cheat Sheet

Level 2 has no bespoke sandbox exercises like Level 1 — instead, students open the in-app **Concept Reference** tab for this session, which holds these 3 lookup cards. Walk through them as part of the Board Lesson or Sandbox Lab as needed:

* **Arrays as Ordered Lists (push, pop, length, index)**

  **Core Definition:** An array holds multiple values in one ordered, numbered list — perfect for tracking however many lasers happen to be on screen at once, instead of one variable per laser.

  **Why It Matters:** A racing game (Level 1) only ever had ONE car, so a single variable was enough. The moment a game needs an unpredictable NUMBER of things on screen at once — however many lasers are currently in flight — a single variable can't represent that, and an array becomes the only workable structure.

  **Syntax Cheat Sheet:**
  ```javascript
  let lasers = [];                    // starts empty
  lasers.push({ x: ship.x, y: ship.y });  // adds a new laser object to the END of the list
  lasers.length;                      // how many lasers currently exist
  lasers[0];                          // the FIRST laser (arrays are zero-indexed)
  lasers.pop();                       // removes the LAST laser
  ```

  **Worked Example (fire on spacebar):**
  ```javascript
  window.addEventListener("keydown", function(event) {
    if (event.key === " ") {
      lasers.push({ x: ship.x, y: ship.y });  // spawn a laser object at the ship's position
    }
  });
  ```

  *Keywords: javascript array push pop length index syntax*

* **Looping Over Sprite Arrays**

  **Core Definition:** A single sprite object needs no loop, but a LIST of sprites (lasers) needs a loop to touch every item once per frame — updating position and drawing each one.

  **Syntax Blueprint:**
  ```javascript
  for (let i = 0; i < lasers.length; i++) {
    lasers[i].y -= 7;                                       // move this laser up
    ctx.fillRect(lasers[i].x, lasers[i].y, 4, 10);           // draw this laser
  }
  ```

  **Why `lasers.length` and not a fixed number:** The array can grow (new lasers pushed) or shrink (old ones removed) at any time, so the loop must re-check `.length` rather than hard-coding e.g. `i < 3`.

  *Keywords: javascript for loop array iteration update draw*

* **Spawning Objects on Events**

  **Core Definition:** A keypress event is the TRIGGER; the RESPONSE is building a brand-new object literal and pushing it into the tracking array — the same push()-on-event pattern used for any spawned entity.

  **Why It Matters:** This is the same "event triggers a response" pattern from Level 1's `keydown` listener, but the response is now "grow a collection" instead of "change one variable." Recognizing `push()`-on-event as its own reusable pattern is what lets you spawn any kind of entity — particles, pickups, enemies — later without relearning the idea from scratch.

  **Syntax Blueprint:**
  ```javascript
  window.addEventListener("keydown", function(event) {
    if (event.key === " ") {
      lasers.push({ x: ship.x, y: ship.y });   // new object literal, pushed into the array
    }
  });
  ```

  **The Key-Repeat Stutter Issue:** A plain `keydown` listener only fires once per press, then repeats after the OS's key-repeat delay — so held-down fire feels laggy and stuttery rather than a smooth stream of lasers. Fixing this needs a continuous held-key state (tracked separately, not solved by `keydown` alone) — a technique covered in a later session.

  *Keywords: javascript keydown event push spawn object keyrepeat stutter*

### 4. Standard AI Prompt Sandbox — Tutor Fill-In Guide

Level 2 uses the generic **Standard AI Prompt Sandbox** panel (Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases fields + AI Generator + Chaos Monkey) rather than session-specific validators. The tutor should guide the student to fill in each field using this session's real project spec below — not a scripted answer key.

* **Task description** field: Declare an empty `lasers` array, write a `fireLaser()` function that pushes a new laser object (positioned at the ship's x + 18, moving at speed 8) onto the array when spacebar is pressed, and a loop that draws every laser in the array.
* **Logical Constraints (Rules)** field: `lasers` must be initialized as an empty array before any pushes occur; `fireLaser()` must push a full object literal (not just a coordinate number).
* **Edge cases to handle** field: A single spacebar press must not push duplicate lasers — key-repeat behavior can make the cannon feel like it's stuttering or double-firing if not handled.
* **Expected AI output** (what the tutor should recognize as correct, sourced from the L2 curriculum doc's Tutor Manual):
  ```javascript
  let lasers = [];

  function fireLaser() {
    let newLaser = { x: ship.x + 18, y: ship.y, width: 4, height: 15, speed: 8 };
    lasers.push(newLaser);
  }
  ```
* **Socratic Question during Review**: If the keydown listener isn't distinguishing held keys from repeated presses, why does the laser cannon stutter instead of firing smoothly?

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** milestone card ("Part 3: Laser Battery Arrays") tracks the student's real project file, separate from the Standard Sandbox above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "Pressing spacebar fires yellow laser bolts from the ship's nose, and several can be in flight on screen at once."
   - *System Parts & Information (expected):* "Parts needed: a growing list (array) of laser objects. Information to track: each laser's position and speed, and how many lasers are currently active."
   - *Logic Flow / Pseudocode (expected):* "Spacebar pressed -> fireLaser() creates a laser object and pushes it into the lasers array -> the render loop draws every laser currently in the array."
   - *Target Outcome:* "Spacebar now pushes laser objects onto the `lasers` array — three mid-flight bolts are shown here. Session 2's sky was empty." This is what the in-app preview shows the student for this milestone.
   - *Why:* Session 2 taught the student to model ONE entity as an object; this session is the first time the count of entities is unknown and changing at runtime — the plan has to shift from "what are this thing's properties" to "what list holds all of these things, and how does it grow." That shift in thinking (one object -> a list of objects) is the same shift that will let later Mars Colony Defense sessions field entire waves of enemies, so getting students comfortable naming "a list" as a first-class system part here pays off well beyond just lasers.

2. **Write AI Prompt**
   - *Expected prompt:* "Draft a prompt asking to declare an empty `lasers` array, write a `fireLaser()` function that pushes a new laser object (positioned at the ship's x + 18, moving at speed 8) onto the array when spacebar is pressed, and a loop that draws every laser in the array."
   - *Why:* Specifying the exact spawn offset (`ship.x + 18`) and speed (`8`) keeps the AI from inventing arbitrary numbers, and explicitly asking for a loop over the array (not a single draw call) signals that more than one laser must be supported from the start.

3. **Review & Explain**
   - *Expected checklist:* `lasers` is initialized as an empty array before any pushes occur; `fireLaser()` pushes a full object literal (not just a coordinate number).
   - *Expected Socratic answer* — *"If the keydown listener isn't distinguishing held keys from repeated presses, why does the laser cannon stutter instead of firing smoothly?"* → The browser's native key-repeat only re-fires `keydown` after an initial OS-level delay and then at a fixed repeat rate, both of which are outside the game's control and feel inconsistent; a smooth continuous stream requires tracking the key's held/released state manually (rather than reacting to raw `keydown` events) so the game loop itself decides when to fire on every frame the key is down.
   - *Why:* This previews the held-key state pattern needed for a satisfying fire rate, without yet requiring the student to implement it — Review & Explain here is about correctly diagnosing the cause, which sets up the fix in a later session.

4. **Test & Break**
   - *Expected test checklist:* Press spacebar once, verify `lasers.length` increases by exactly 1; verify each pushed laser object has x, y, width, height, and speed properties; verify the render loop draws one rectangle per array element.
   - *Why:* These three checks isolate spawn correctness, object completeness, and render correctness separately — if only the third fails, for example, the bug is in the draw loop, not in `fireLaser()`.

5. **Iterate & Improve**
   - *Expected answer:* "Confirm rapid-fire spacebar presses don't push duplicate lasers per single press (debounce key-repeat if needed)."
   - *Why:* This directly extends the Ethics Discussion on resource caps — an un-debounced fire button is the same unbounded-growth risk as "infinite lasers lagging the browser," just triggered by input handling instead of missing cooldown logic.

* **Homework Evaluation Checklist**: In the Journal tab, verify the loop iterates using `lasers.length` (not a hardcoded count of 3); each iteration decrements `lasers[i].y` by `lasers[i].speed`; and the loop correctly accesses array elements via bracket/index notation.

---

## Session 4: "Laser Motion & Garbage Collection"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Index Splice Analysis
* **00:15 - 00:35 | Board Lesson**: Splicing Iterations & Memory Leaks
* **00:35 - 01:00 | Design Phase**: Garbage Collection Logic
* **01:00 - 01:30 | Sandbox Lab**: Cleaning Dead Objects
* **01:30 - 01:50 | Assessment**: The Splicing Skip Bug
* **01:50 - 02:00 | Ethics Discussion**: Memory Optimization

### 1. Board Lesson Talking Points
* **Cleaning Coordinate Bounds**: Explain that a laser scrolling above `y = 0` has left the visible canvas and is now dead weight — checking `lasers[i].y < 0` every frame is the rule that decides when a laser should stop being tracked, not just stop being visible.
* **The Index Shift Trap**: Explain that `array.splice(index, 1)` doesn't just delete an item — it also shifts every element AFTER it down by one index immediately. If the loop is moving forward at the same time, the element that just shifted into the current index gets skipped on the next iteration, because `i++` already moved past it.
* **Reverse Loop Iteration Patterns**: Explain that looping backward — `for (let i = lasers.length - 1; i >= 0; i--)` — avoids the index-shift trap entirely, because any splice only shifts indices the loop has already visited, never ones still ahead of it. This is the standard, safe pattern any time a loop might remove items from the same array it's iterating.

### 2. Socratic Prompting
* *"Why did some dead lasers slip past our garbage collection loop? What happens to the indices of items after splice is called?"* (Because the loop was iterating forward while splicing — when `splice(i, 1)` removes an element, every element after it shifts down one index to fill the gap, but the loop's `i++` still advances past the index that just received the shifted element, so that laser is never checked and survives the cleanup pass.)
* *"If backend servers fail to delete dead user socket sessions, what happens to server performance? How does resource cleanup apply to cybersecurity?"* (Every un-cleaned session keeps consuming memory and gets touched by every subsequent request-handling loop, so performance degrades as the leak grows — and in security terms, stale sessions are also stale attack surface: an uncleaned session can potentially still be hijacked or read from long after the user should have been logged out, which is exactly the class of bug behind real incidents like Cloudflare's Cloudbleed.)

### 3. Concept Reference Cheat Sheet

Level 2 has no bespoke sandbox exercises like Level 1 — instead, students open the in-app **Concept Reference** tab for this session, which holds these 3 lookup cards. Walk through them as part of the Board Lesson or Sandbox Lab as needed:

* **Off-Screen Detection (laser.y < 0)**

  **Core Definition:** A laser that has scrolled above the top of the canvas is doing nothing useful — checking its y coordinate against a bound is the RULE that decides when it should be removed.

  **Syntax Blueprint:**
  ```javascript
  if (lasers[i].y < 0) {
    // this laser has left the visible canvas — mark it for cleanup
  }
  ```

  **Why This Matters:** Without a bounds check, there is no signal telling the game a laser is "done" — it would keep existing in the array and keep being looped over and drawn (off-screen, wastefully) forever.

  *Keywords: javascript bounds check off screen coordinate y less than*

* **splice() and the Index-Shift Trap**

  **Core Definition:** `array.splice(index, 1)` removes one element and immediately shifts every element AFTER it down by one index. Looping FORWARD while splicing causes the loop to skip the element that just slid into the current index.

  **Why It Matters:** This bug is easy to miss in testing because it doesn't crash or throw — it just quietly skips cleanup on roughly every other stale entry, so the array shrinks more slowly than it should. Reverse iteration whenever a loop might splice its own array is a rule worth memorizing outright, because the bug it prevents is silent.

  **Common Mistake Comparison:**
  ```javascript
  // ❌ WRONG (forward loop — skips an element after a splice):
  for (let i = 0; i < lasers.length; i++) {
    if (lasers[i].y < 0) {
      lasers.splice(i, 1);   // element at i+1 shifts down to i, but i++ skips over it next pass
    }
  }

  // ✅ CORRECT (reverse loop — safe because shifted indices are already behind i):
  for (let i = lasers.length - 1; i >= 0; i--) {
    if (lasers[i].y < 0) {
      lasers.splice(i, 1);   // removing here only shifts indices we've ALREADY processed
    }
  }
  ```

  **Rule of Thumb:** Whenever a loop might `splice()` out of the SAME array it is iterating, count DOWN from `length - 1` to `0`.

  *Keywords: javascript array splice index shift bug reverse loop*

* **Memory Leaks from Unbounded Arrays**

  **Core Definition:** If dead/off-screen lasers are never spliced out, the `lasers` array only ever grows — every frame's loop has more and more stale entries to iterate over and draw, even though they are invisible.

  **Why Frames Slow Down:**
  ```javascript
  for (let i = lasers.length - 1; i >= 0; i--) { ... }   // cost scales with array length
  ```
  An array that grows unbounded means this loop (and the draw calls inside it) does more work every single frame, even for objects that produce nothing on screen — eventually the frame rate visibly drops.

  **Rule of Thumb:** Every spawn (`push`) needs a matching cleanup path (`splice`) or the array — and the work per frame — only ever grows.

  *Keywords: javascript memory leak unbounded array performance frame rate*

### 4. Standard AI Prompt Sandbox — Tutor Fill-In Guide

Level 2 uses the generic **Standard AI Prompt Sandbox** panel (Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases fields + AI Generator + Chaos Monkey) rather than session-specific validators. The tutor should guide the student to fill in each field using this session's real project spec below — not a scripted answer key.

* **Task description** field: Update every laser's `y` coordinate by subtracting its `speed`, then remove any laser whose `y` drops below 0 using `splice()`, iterating the array in reverse order.
* **Logical Constraints (Rules)** field: The loop must iterate from `lasers.length - 1` down to `0` (reverse), not forward; `splice(i, 1)` must be called only after the off-screen check, not unconditionally.
* **Edge cases to handle** field: Multiple lasers exiting off-screen on the same frame must all be removed, not just every other one, which is what a forward-splicing loop would incorrectly do.
* **Expected AI output** (what the tutor should recognize as correct, sourced from the L2 curriculum doc's Tutor Manual):
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
* **Socratic Question during Review**: If this loop iterated forward instead, why would some off-screen lasers survive the cleanup after a splice shifts the array?

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** milestone card ("Part 4: Laser Motion & Garbage Collection") tracks the student's real project file, separate from the Standard Sandbox above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "Lasers now fly upward every frame and vanish cleanly once they pass the top edge, instead of piling up invisibly forever."
   - *System Parts & Information (expected):* "Parts needed: a per-frame cleanup pass over the lasers array. Information to track: each laser's y position, the off-screen boundary (y < 0), and the array's current length."
   - *Logic Flow / Pseudocode (expected):* "Every frame -> loop backward over the lasers array -> move each laser up (y -= speed) -> if a laser's y < 0, splice it out of the array."
   - *Target Outcome:* "Lasers now move every frame and get spliced from the array once they scroll off-screen — the count returns to 0 instead of leaking memory. Session 3's lasers were drawn but never moved or cleaned up." This is what the in-app preview shows the student for this milestone.
   - *Why:* This session closes the loop Session 3 deliberately left open — lasers could be spawned but never left the array, which was fine for a screenshot but would have crashed the frame rate the moment gameplay actually ran. Planning the cleanup rule explicitly (not just "make it work") is what turns the Session 3 array from a demo into something that can survive minutes of continuous play, and it is the direct prerequisite for Mars Colony Defense's later enemy-wave sessions, which will reuse this exact spawn-track-cleanup pattern for aliens instead of lasers.

2. **Write AI Prompt**
   - *Expected prompt:* "Write a prompt asking to update every laser's `y` coordinate by subtracting its `speed`, then remove any laser whose `y` drops below 0 using `splice()`, iterating the array in reverse order."
   - *Why:* Explicitly requesting "reverse order" in the prompt — rather than leaving iteration direction unspecified — is what prevents the AI from generating the far more common (and buggy) forward-loop version.

3. **Review & Explain**
   - *Expected checklist:* The loop iterates from `lasers.length - 1` down to `0` (reverse), not forward; `splice(i, 1)` is called only after the off-screen check, not unconditionally.
   - *Expected Socratic answer* — *"If this loop iterated forward instead, why would some off-screen lasers survive the cleanup after a splice shifts the array?"* → Because splicing an element out shifts every later element down by one index; if the loop is moving forward, its next index (`i++`) now points past the element that just shifted into the current slot, so that element is silently skipped and never gets checked against the `y < 0` condition on this pass.
   - *Why:* This is the exact bug staged in the Socratic Debugging segment — walking through it in the Journal, in the student's own words, confirms they understand the mechanism and not just the fix ("loop backward").

4. **Test & Break**
   - *Expected test checklist:* Fire 3 lasers, let them travel off-screen — verify `lasers.length` returns to 0; fire lasers simultaneously exiting on the same frame — verify all are removed, not just every other one; verify on-screen lasers are unaffected by the cleanup pass.
   - *Why:* The "simultaneous exit" case is the one that silently passes a forward-loop implementation on a single laser but fails the moment two or more exit together — so it's the test that actually proves the reverse-loop fix, not just that cleanup happens at all.

5. **Iterate & Improve**
   - *Expected answer:* "Stress-test with 50+ simultaneous lasers to confirm the reverse-loop cleanup has zero skipped entries."
   - *Why:* Connects directly to this session's Ethics Discussion on memory optimization and cybersecurity — a cleanup routine that "mostly works" at small scale (like a leaking session store that seems fine under light load) is exactly the kind of bug that only reveals itself under real volume, so iteration here means deliberately testing at a scale the classroom demo never reaches.

* **Homework Evaluation Checklist**: In the Journal tab, verify the loop index starts at `array.length - 1` and decrements (`i--`) to `0`; the condition checks `status === "dead"` before splicing; and `splice(i, 1)` is called only on matching items, not unconditionally.

---

## Session 5: "Alien Swarms & Shield Grids: Nested Arrays & Matrices"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Row/Column Grid Indexing & Shield Cell Destruct
* **00:15 - 00:35 | Board Lesson**: Multi-Dimensional Arrays & Index Mapping
* **00:35 - 01:00 | Design Phase**: Swarm & Shield Blueprint
* **01:00 - 01:30 | Sandbox Lab**: Coding the Swarm March & Shield Lookup
* **01:30 - 01:50 | Assessment**: The Edge Stampede & the Invincible Shields
* **01:50 - 02:00 | Ethics Discussion**: Drone Swarm Coordination

### 1. Board Lesson Talking Points
* **Matrix Grids as Arrays of Arrays**: Explain that a 2D array is just an array whose elements are themselves arrays — draw the grid on the board as rows and columns, and show how `aliens[row][col]` walks first into the row array, then into that row's column. Point out that this is the first time in the level the project needs more than one dimension of position data, and that a flat array with 0/1 cells (rather than a full alien object per cell) is *also* a grid — just one representing "is this cell still solid" instead of "is there an alien here."
* **Coordinate-to-Index Mapping, Used Twice**: Walk through the formula `col = Math.floor((x - offset) / cellWidth)` on the board with real numbers. This one formula does double duty in this session — it converts the swarm's edge-boundary check (has any alien's x crossed the canvas edge?) and, separately, it converts a laser's absolute pixel position into a specific shield-cell index. Emphasize the offset subtraction in the shield version — skip it and every hit test is silently shifted.
* **Guarding Against Out-of-Bounds Indices**: Point out that an unchecked index — whether it's a marching alien crossing an edge with no boundary check, or a shield lookup landing outside the array's real cells — can silently read `undefined` instead of throwing an error. `undefined === 1` is `false`, so the bug looks like "nothing happened" rather than a crash, which is exactly what makes both this session's staged bugs hard to spot by eye.

### 2. Socratic Prompting
* *"Why didn't the aliens drop down and reverse when they reached the screen edge? Trace the boundary coordinate updates. And why does the laser destroy the cell next to where it hit?"* (The boundary check comparing each alien's x against the left/right edge constants was disabled, so `direction *= -1` and the y-drop loop never ran. Separately, the shield's column calculation was pushed out-of-bounds — for example missing the offset subtraction — so `shield[col]` reads `undefined` instead of a real cell value, and the collision is resolved against the wrong index instead of the one the laser visually hit.)
* *"Robotic search swarms share boundary rules in the real world — what checks must designers implement to prevent collision catastrophes?"* (Every unit in the swarm must independently verify its own position against the shared boundary limits every cycle, the same way `moveSwarm()` checks the *whole group's* outer bound rather than trusting one unit to report in for all of them — a single missed check anywhere in the swarm can cause a collision.)

### 3. Concept Reference Cheat Sheet

Level 2 has no bespoke sandbox exercises like Level 1 — instead, students open the in-app **Concept Reference** tab for this session, which holds these 4 lookup cards. Walk through them as part of the Board Lesson or Sandbox Lab as needed:

* **2D Arrays & Nested Loops**

  **Core Definition**
  A 2D array is an array whose elements are themselves arrays — a grid of rows and columns. `grid[row][col]` reads the array at index `row`, then reads index `col` inside it. To visit every cell, wrap one loop inside another: the outer loop walks rows, the inner loop walks columns.

  **Why It Matters**
  A flat array (Session 3's `lasers` list) works when entities have no meaningful position relative to each other. An alien swarm — and, as this session shows, a destructible shield — both have structure that a flat list can't represent on its own: ROWS and COLUMNS that matter for spawning, marching, rendering, and (for the shield) which segment is still standing.

  **Syntax**
  ```javascript
  let grid = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ];
  grid[1][2];  // reads row 1, column 2

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) { /* draw this cell */ }
    }
  }
  ```

  *Keywords: javascript 2d array grid rows columns nested loop*

* **March-and-Bounce Boundary Logic**

  **Core Definition**
  Each frame nudges the whole alien grid sideways by `direction * speed`. When any alien reaches a screen edge, flip direction and drop every alien down one step.

  **Why It Matters**
  This is Level 1's boundary-clamp idea applied to a whole GROUP instead of one car — the direction flips for every alien at once, which is what makes the swarm feel like one coordinated unit rather than individually bouncing sprites. Checking the group's outer edge, not any single alien's position, is the detail that keeps the whole formation in sync.

  **Cheat Sheet**
  ```javascript
  alienX += direction * speed;   // direction is 1 (right) or -1 (left)

  if (alienX > CONFIG.rightEdge || alienX < CONFIG.leftEdge) {
    direction *= -1;              // reverse marching direction
    // ...then drop every alien's y by CONFIG.dropDistance
  }
  ```

  **Common Mistake**
  Checking the edge using only one alien's x instead of the whole group's outer bound — some aliens bounce while others keep marching off-screen.

  *Keywords: javascript bounce boundary direction reverse sprite edge detection*

* **Shield Grids as State (0 = Empty, 1 = Full)**

  **Core Definition**
  A destructible shield doesn't need pixel-level destruction — a small array of cells, each either `1` (intact) or `0` (destroyed), is enough. Drawing only renders cells still equal to `1`, so "destroying" a cell is just flipping a number.

  **Why It Matters**
  This reuses the exact same array-of-state idea as the alien grid, but the NUMBERS mean something different — not "is there an alien here" but "is this cell still solid." Recognizing that a grid can represent any yes/no state per cell (alive/dead, solid/destroyed) is a far more reusable idea than memorizing "shields use a grid."

  ```javascript
  shield = [1, 1, 1, 1, 1]; // a row of 5 cells; corners can be knocked to 0
  ```

  *Keywords: javascript grid array state destructible shield 0 1*

* **Coordinate-to-Index Mapping & Out-of-Bounds Guards**

  **Core Definition**
  Lasers move in absolute pixel coordinates, but the shield (and the alien grid's boundary check) works in row/col or edge-constant terms. To find which cell a laser hit, subtract the shield's starting offset first, then divide by the cell width and round down — and always validate the result is inside the array's real bounds before trusting it.

  **Formula & Worked Example**
  ```javascript
  col = Math.floor((laserX - shieldOffsetX) / cellWidth);
  // laserX = 145, shieldOffsetX = 30, cellWidth = 50
  // col = Math.floor((145 - 30) / 50) = Math.floor(2.3) = 2
  ```

  **Guarded Read (The Invincible Shields bug, fixed):**
  ```javascript
  // ❌ No bounds check — an out-of-range col reads undefined; undefined === 1
  // is false, so the laser silently passes through:
  if (shield[col] === 1) { ... }

  // ✅ Guarded:
  if (col >= 0 && col < shield.length && shield[col] === 1) {
    shield[col] = 0;   // destroy the cell
  }
  ```

  **Why It Matters**
  Two completely different coordinate systems are in play at once — pixels for rendering, grid indices for storage — and every hit-test has to convert between them correctly, then confirm the result actually lands inside the grid. This exact pixel-to-cell conversion pattern reappears anywhere a game overlays a logical grid on top of a pixel-based canvas, not just for shields.

  *Keywords: javascript coordinate to grid index math.floor offset out of bounds guard*

### 4. Standard AI Prompt Sandbox — Tutor Fill-In Guide

Since L2 uses the generic Standard AI Prompt Sandbox panel (Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases fields + AI Generator + Chaos Monkey) rather than a scripted validator, the tutor should guide the student to fill it in using this session's real project spec below:
* **Task description** field: "Build a 3-row by 5-column grid of alien objects (each with `x`, `y`, and `alive`), write a `moveSwarm()` function that shifts every alien horizontally by a shared `direction` value and reverses/drops the grid at a screen edge, and represent a 5-cell shield (`1` = intact, `0` = destroyed) with a `checkShieldCollision(laser)` function that computes which cell a laser hit and destroys it."
* **Logical Constraints (Rules)** field: "Store aliens as a nested array, not a flat list" / "Every alien must move using the SAME shared `direction` value each tick" / "The shield's column-index formula must subtract the shield's starting x offset before dividing by `cellWidth`" / "A destroyed shield cell is set to `0`, never removed/spliced (which would shift every other cell's index)"
* **Edge cases to handle** field: "An alien exactly at the boundary coordinate must trigger the bounce reliably" / "A laser hitting an already-destroyed shield cell (already `0`) must have no further effect, and a computed index outside the shield's range must not crash or silently pass the check"
* **Expected AI output** (what the tutor should recognize as correct, sourced from the L2 curriculum doc's Tutor Manual solutions for this session):
  ```javascript
  let aliens = [];
  for (let r = 0; r < 3; r++) {
    aliens[r] = [];
    for (let c = 0; c < 5; c++) {
      aliens[r][c] = { x: c * 60 + 50, y: r * 50 + 50, alive: true };
    }
  }

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
* **Socratic Question during Review**: "If the boundary check is removed, why does the whole swarm slide off-screen instead of bouncing back? And if the shield's index formula is off by one offset value, why would lasers pass straight through without registering a hit?"

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** milestone card ("Part 5: Alien Swarm Grids & Destructible Shields") tracks the student's real project file, separate from the Standard Sandbox above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "A 3-row by 5-column grid of green aliens marches side-to-side above the colony, bouncing and descending at the screen edges; teal shield blocks hover between the ship and the swarm, and each laser hit on a shield knocks out one cell."
   - *System Parts & Information (expected):* "Parts needed: a rows-and-columns grid of alien objects, plus a shield modeled as a row of cells. Information to track: each alien's x/y/alive state and the swarm's shared marching direction; each shield cell's 0/1 state, the cell width, and the shield's starting x offset."
   - *Logic Flow / Pseudocode (expected):* "Every tick -> moveSwarm() shifts every alien's x by the current direction -> if any alien reaches a screen edge, flip direction and drop every alien down. Separately: a laser reaching shield height -> compute which column it hit via floor((laser.x - shieldOffset) / cellWidth) -> if that cell is 1, set it to 0 and remove the laser."
   - *Target Outcome:* "A 3-row by 5-column alien swarm marches in formation, and destructible shield blocks sit in front of it with one cell already knocked out from a hit. Session 4's sky had only lasers, no enemies or shields." This is what the in-app preview shows the student for this milestone.
   - *Why:* This is the first time the student's own project must hold more than one dimension of position data — until now (Sessions 3–4's lasers) every moving object lived in a flat, single-dimension array. Planning both grids explicitly — rows and columns for the swarm, a row of state cells for the shield — before touching code forces the student to decide what each grid's numbers actually MEAN, because that decision determines every index calculation for the rest of the level: Session 6's collision sweep depends on the student already understanding how a grid is addressed, and re-using the same coordinate-to-index formula for two different purposes (boundary checks, shield hits) in one session is what proves the pattern generalizes rather than being a one-off trick.

2. **Write AI Prompt**
   - *Expected prompt:* "Build a 3-row by 5-column grid of alien objects (each with x, y, and an alive flag), then write a `moveSwarm()` function that shifts every alien's x by the current shared direction each tick and bounces/drops the grid at a screen edge. Also represent a shield as an array of 5 cells (1 = intact, 0 = destroyed), draw only the intact cells, and write a `checkShieldCollision(laser)` function that computes which cell index a laser hit and destroys that cell."
   - *Why:* Naming the exact data shape for both structures (a nested array for aliens, a flat array of 0/1 for the shield) up front heads off two different failure modes: the AI silently flattening the alien grid (which would break row/column addressing Session 6 needs), and the AI using `.splice()` to remove a destroyed shield cell (which would renumber every later cell's index and break all future hit-test math).

3. **Review & Explain**
   - *Expected checklist:* Is the alien grid stored as a nested array, not a flat list? Does `moveSwarm()` update every alien using the SAME shared `direction`? Does the shield's column-index formula subtract the offset before dividing? Is a destroyed cell set to `0` rather than removed?
   - *Expected Socratic answer* — *"If the boundary check is removed, why does the whole swarm slide off-screen instead of bouncing back? And if the shield's index formula is off by one offset value, why would lasers pass straight through without registering a hit?"* → With no boundary check, `direction *= -1` and the y-drop never run, so `moveSwarm()` just keeps adding the same delta forever in one direction. Separately, an unsubtracted offset shifts the computed column outside the shield's valid 0–4 range, so `shield[col]` reads `undefined`; `undefined === 1` is `false`, so the laser is never treated as blocked.
   - *Why:* This mirrors the Coordinate-to-Index Mapping & Out-of-Bounds Guards concept card — the review step confirms the AI's code actually implements both edge triggers correctly, not just the sideways/rendering behavior.

4. **Test & Break**
   - *Expected test checklist:* Verify `aliens.length` is 3 and `aliens[0].length` is 5, and the swarm reverses/drops exactly when an edge alien crosses the boundary. Fire a laser at a known x and verify the correct shield cell index is computed and destroyed; fire at an already-destroyed cell and verify no further effect.
   - *Why:* Testing a known coordinate against a hand-calculated expected index is the only reliable way to confirm the offset math is correct — visually, a one-cell-off bug looks almost identical to a correct hit, so the student must check the actual index value, not just "did something happen on screen."

5. **Iterate & Improve**
   - *Expected answer:* "Confirm the swarm's edge check accounts for the alien's width, not just its left-edge x coordinate; and double-check the shield's column formula against its actual pixel offset once its position changes from the tutorial default."
   - *Why:* This mirrors the session's ethics discussion on drone swarm coordination: a real coordination system that checks only a single reference point rather than its full physical extent risks the same "collision catastrophe" failure mode discussed on the board — a boundary or hit-test check that's technically true but geometrically incomplete.

* **Homework Evaluation Checklist**:
  - Verify the submitted nested loop iterates rows 0–2 and columns 0–2 (a 3×3 range), printing all 9 `(row, col)` pairs exactly once.
  - Verify the lookup formula subtracts the offset before dividing: `index = Math.floor((145 - 100) / 50) = 0`.

---

## Session 6: "Firing Control: Keyboard Matrices & Collision Sweeps"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Multiple Inputs Mapping & Array Intersections
* **00:15 - 00:35 | Board Lesson**: Input Matrices & Double Iteration
* **00:35 - 01:00 | Design Phase**: Input & Sweep Blueprint
* **01:00 - 01:30 | Sandbox Lab**: Coding the Input Matrix & Sweeper
* **01:30 - 01:50 | Assessment**: The Firing Spam Lock & the Multiple Kill Bug
* **01:50 - 02:00 | Ethics Discussion**: Input Rate Limits in Security

### 1. Board Lesson Talking Points
* **Why a Single keydown Listener Fails**: Explain that one `keydown` handler only ever knows about the most recent key event — it has no memory of "is ArrowLeft still held down" while a second key (Space) is also pressed, so simultaneous steering-and-firing is structurally impossible with a bare handler. `keysPressed = {}` fixes this: `keydown` sets a key's flag to `true`, `keyup` sets it back to `false`, and the game loop reads this persistent object every frame instead of reacting to the raw event.
* **Sweeping Lasers Against a Grid of Aliens**: Explain that finding every collision means checking each laser against each still-living alien — a loop inside a loop (inside the alien grid's own row/col loop). Reference back to Session 5's grid and this session's own firing loop as the two collections now being crossed. Put the cost on the board plainly: L lasers against A aliens is roughly L × A comparisons every single frame.
* **Breaking Loops Early Once a Collision Resolves**: Stress that once a laser hits one alien, the code must stop checking that same laser against the rest of the grid with a `break` — otherwise one laser can register as hitting several aliens in the same pass. This is Level 1's loop-control lesson (`break` as an early exit) applied inside a nested loop, where the stakes are higher.

### 2. Socratic Prompting
* *"Why is the spaceship firing continuously even when you let go of the keyboard? Where does the key state map reset? And why did one laser clear out three aliens in a row?"* (The `keyup` listener that resets `keysPressed[" "]` back to `false` was removed, so the flag set `true` by `keydown` is never cleared — the game loop's fire check keeps passing every frame forever. Separately, the inner collision loop kept running after the first alien was marked dead because no `break` statement stopped it — the same laser's coordinates were tested against every remaining alien in that column, so if the laser's hitbox overlapped more than one, all of them were also marked dead in the same pass.)
* *"If login endpoints do not enforce input rate thresholds, script bots can spam passcodes — how do event lockouts match cooling loops?"* (Both are the same defensive pattern: a minimum time gap enforced between allowed attempts. A login rate-limit rejects requests that arrive too soon after the last one; a firing cooldown rejects laser spawns that arrive too soon after the last shot — both cap how often one action can repeat inside a time window.)

### 3. Concept Reference Cheat Sheet

Level 2 has no bespoke sandbox exercises like Level 1 — instead, students open the in-app **Concept Reference** tab for this session, which holds these 4 lookup cards. Walk through them as part of the Board Lesson or Sandbox Lab as needed:

* **The keysPressed Map (Key-State Object)**

  **Core Definition**
  A single `keydown` listener only tells you the LAST key pressed at a given instant — it can't represent two keys held at once. Instead, store the held/released status of every key in one object, `keysPressed`. `keydown` sets a key's value to `true`; `keyup` sets it back to `false`. The game loop reads this object every frame instead of relying on the event itself.

  **Why It Matters**
  This event-to-state pattern — record it when it happens, read it continuously elsewhere — is how the loop can see multiple keys held simultaneously, and it reappears constantly in real applications (tracking mouse position, tracking connection status).

  **Syntax Blueprint**
  ```javascript
  let keysPressed = {};
  window.addEventListener("keydown", function(e) { keysPressed[e.key] = true; });
  window.addEventListener("keyup", function(e) { keysPressed[e.key] = false; });

  // inside the game loop:
  if (keysPressed["ArrowLeft"]) { moveLeft(); }
  if (keysPressed[" "]) { fireLaser(); }
  ```

  **Common Mistake — The Firing Spam Lock**: Binding only `keydown` and forgetting `keyup` leaves `keysPressed[" "]` stuck `true` forever once pressed — nothing ever resets it, so the fire check passes every single frame, forever.

  *Keywords: javascript keysPressed object keydown keyup state map*

* **Cooldown Timers / Rate Limiting**

  **Core Definition**
  Even with correct key-state tracking, checking `keysPressed[" "]` every frame at 60fps would fire dozens of lasers per second. A cooldown timer enforces a minimum gap between allowed actions.

  **Syntax Blueprint**
  ```javascript
  let lastFireTime = 0;
  const FIRE_COOLDOWN_MS = 300;
  function tryFire(now) {
    if (keysPressed[" "] && now - lastFireTime > FIRE_COOLDOWN_MS) {
      spawnLaser();
      lastFireTime = now;
    }
  }
  ```

  **Why It Matters**
  Fixing "multiple keys at once" immediately exposes a new problem — holding a key means the condition is true for 16+ frames in a row, not one. This same pattern later reappears for rate-limiting server requests (this session's Ethics Discussion).

  *Keywords: javascript rate limiting cooldown timer timestamp throttle input*

* **AABB Overlap & the Double-Iteration Sweep**

  **Core Definition**
  Canvas sprites (lasers, aliens) are plain JS objects with `x`, `y`, `width`, `height` — overlap is computed purely with math, the same four-comparison AABB rule as any bounding box check. To find every collision between two collections, loop one INSIDE a loop over the other.

  **Formula & Blueprint**
  ```javascript
  function checkCollision(a, b) {
    return (
      a.x < b.x + b.width && a.x + a.width > b.x &&
      a.y < b.y + b.height && a.y + a.height > b.y
    );
  }

  for (let i = lasers.length - 1; i >= 0; i--) {
    for (let row = 0; row < aliens.length; row++) {
      for (let col = 0; col < aliens[row].length; col++) {
        const alien = aliens[row][col];
        if (alien.alive && checkCollision(lasers[i], alien)) {
          lasers.splice(i, 1);      // remove the laser (a flat array, safe to splice)
          alien.alive = false;      // keep the grid cell, just mark it dead
          score += 50;
          break;                    // stop checking this laser against more aliens
        }
      }
    }
  }
  ```

  **Why It Matters**
  Session 5's `aliens[row][col]` grid is NOT flattened for collision — removing a dead alien from the middle of a 2D grid would corrupt every other cell's row/col indexing, so each alien instead gets an `alive` flag. Only the flat `lasers` array actually gets spliced.

  *Keywords: canvas sprite collision AABB double iteration nested loop splice*

* **break After a Hit (The Multiple Kill Bug)**

  **Core Definition**
  Once a laser hits one alien, the inner loop must stop checking that same laser against the rest of the grid.

  **Common Mistake — Multiple Kill Bug**
  ```javascript
  // ❌ Missing break: the loop keeps running and can mark MORE aliens dead
  // from this same laser in the same pass.
  // ✅ Correct: break immediately after resolving the hit.
  ```

  **Why It Matters**
  Without `break`, one laser can silently score points off several aliens in a single frame — an outcome that looks like a working game but is quietly awarding the wrong score. A sweep of L lasers against A aliens runs roughly L × A comparisons every frame — with large swarms this nested cost is why real games often use spatial partitioning instead of a brute-force sweep.

  *Keywords: javascript break statement loop bug multiple collision double kill*

### 4. Standard AI Prompt Sandbox — Tutor Fill-In Guide

Since L2 uses the generic Standard AI Prompt Sandbox panel (Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases fields + AI Generator + Chaos Monkey) rather than a scripted validator, the tutor should guide the student to fill it in using this session's real project spec below:
* **Task description** field: "Declare a `keysPressed` object, bind `keydown`/`keyup` listeners that toggle each key's Boolean state, and write a `handleInputs()` function called every game-loop tick that moves the ship and fires lasers based on which keys are currently `true`. Also sweep every laser against every alien in the grid; on overlap, mark the alien's `alive` to `false`, splice the laser out, add 50 to `score`, and `break` out of the inner loop."
* **Logical Constraints (Rules)** field: "Both `keydown` AND `keyup` listeners must be bound, not just `keydown`" / "`handleInputs()` must run every game-loop frame, not only inside the event handler" / "The outer laser loop must iterate backward (safe for mid-loop splicing)" / "`break` must run immediately after a hit is resolved"
* **Edge cases to handle** field: "Holding two keys at once must move and fire in the same frame, and firing must respect a cooling interval" / "A laser passing through a dense cluster of aliens must destroy at most one alien"
* **Expected AI output** (what the tutor should recognize as correct, sourced from the L2 curriculum doc's Tutor Manual solutions for this session):
  ```javascript
  let keysPressed = {};
  window.addEventListener("keydown", (e) => { keysPressed[e.key] = true; });
  window.addEventListener("keyup", (e) => { keysPressed[e.key] = false; });

  function handleInputs() {
    if (keysPressed["ArrowLeft"]) { ship.x -= ship.speed; }
    if (keysPressed["ArrowRight"]) { ship.x += ship.speed; }
    if (keysPressed[" "]) { fireLaser(); }
  }

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
* **Socratic Question during Review**: "If the `keyup` listener is missing, why does the ship keep firing lasers forever after the player releases spacebar? And if the `break` statement is missing, why could a single laser wipe out three aliens in the same column in one frame?"

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** milestone card ("Part 6: Input Matrix & Collision Sweeper") tracks the student's real project file, separate from the Standard Sandbox above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "Controls now feel arcade-smooth — the player can steer and fire at the same time — and lasers finally destroy aliens on contact, with the score jumping by 50 per kill."
   - *System Parts & Information (expected):* "Parts needed: a key-state map remembering which keys are held, plus a collision sweep comparing every laser against every still-living alien. Information to track: true/false per key, a firing cooldown timer, the running score, and each alien's alive/dead status."
   - *Logic Flow / Pseudocode (expected):* "keydown sets a key's entry to true, keyup sets it back to false, and every frame handleInputs() reads the map. Separately: loop backward over lasers -> for each laser, loop over the alien grid -> if it overlaps a living alien, mark it dead, splice out the laser, add 50 to score, and stop checking that laser against more aliens."
   - *Target Outcome:* "The keysPressed map now allows moving and firing in the same frame, and the collision sweep is live — three aliens have been destroyed and the score reads 150. Session 5 could only react to one key event at a time, and aliens were untouchable." This is what the in-app preview shows the student for this milestone.
   - *Why:* Session 5 introduced one shared piece of state (`direction`) driving many sprites; this session flips the pattern around — many independent pieces of shared state (one Boolean per key) must be checked every frame to drive one sprite's behavior. It's also the payoff session for the whole nested-array arc: the alien grid and shield built in Session 5 finally meet a collision system, converging the grid, the firing loop, and the offset-to-index math into one working sweep. Framing the plan around "treat the grid as a flat list of living sprites for collision purposes, but never actually flatten the array" teaches an important system-design distinction — a data structure's shape doesn't have to match how a different piece of logic chooses to traverse it.

2. **Write AI Prompt**
   - *Expected prompt:* "Write a prompt asking to declare a `keysPressed` object, bind `keydown`/`keyup` listeners, and write a `handleInputs()` function called every tick. Then ask to sweep every laser against every alien, and on overlap: mark the alien's `alive` to `false`, splice the laser out, add 50 to `score`, and `break` out of the inner loop."
   - *Why:* Naming both listeners explicitly (`keydown` AND `keyup`) heads off the Firing Spam Lock bug; spelling out `break` explicitly, rather than just "destroy the alien," is the single most important word in the collision half of this prompt — a vaguer prompt reliably reproduces the Multiple Kill Bug.

3. **Review & Explain**
   - *Expected checklist:* Are both `keydown` AND `keyup` bound? Does `handleInputs()` run every frame? Does the outer laser loop iterate in reverse? Is there a `break` immediately after a hit is resolved?
   - *Expected Socratic answer* — *"If the `keyup` listener is missing, why does the ship keep firing lasers forever after the player releases spacebar? And if the `break` statement is missing, why could a single laser wipe out three aliens in the same column in one frame?"* → With no `keyup` listener, `keysPressed[" "]` is stuck `true` permanently the first time Space is pressed, so every frame's fire check still passes. Without `break`, after the first alien is marked dead the inner loop keeps testing the SAME laser's coordinates against the remaining aliens in that column — if the laser's hitbox overlaps more than one, every one of them also gets marked dead in that same pass.
   - *Why:* These are the exact two bugs staged in this session's Socratic Debugging segment — tracing both in the student's own project confirms they understand the state map's reset mechanism and the loop's over-scoping, not just that they memorized "add keyup" and "add break."

4. **Test & Break**
   - *Expected test checklist:* Hold two movement/fire keys simultaneously and verify both act in the same frame; release a key and verify its flag resets; verify firing respects a cooldown. Fire one laser through a single alien and verify exactly one alien dies and score increases by exactly 50; fire into a dense cluster and verify each laser destroys at most one alien.
   - *Why:* The input checks prove the `keysPressed` map actually solves simultaneous input and resets correctly; the collision checks catch the Multiple Kill Bug directly rather than trusting that "the score went up" means the sweep is correct.

5. **Iterate & Improve**
   - *Expected answer:* "Add a cooldown timestamp check inside `handleInputs()` so holding spacebar doesn't fire every frame; and profile the nested collision sweep's cost as the alien grid grows, considering skipping rows/cols with zero live aliens if performance dips."
   - *Why:* The cooldown fix is the same pattern, in miniature, as this session's Ethics Discussion on the 2014 iCloud breach (no rate limit on repeated login attempts) — both are solved by capping how often one action can repeat inside a time window.

* **Homework Evaluation Checklist**:
  - Verify a `keydown` listener sets the correct key's entry to `true` for `"a"`, `"d"`, and `"w"`, and a `keyup` listener sets it back to `false`.
  - Verify the nested loop checks all 2 lasers against all 4 aliens using bounding/overlap parameters (not just index equality), logging hit locations only for genuine overlaps.

---

## Session 7: "Colony Status: Game States, HUD Gauges & Performance Audits"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Stage Multipliers & Memory Footprint Trace
* **00:15 - 00:35 | Board Lesson**: State Machines & Profiling
* **00:35 - 01:00 | Design Phase**: State Machine & Optimization Checklist
* **01:00 - 01:30 | Sandbox Lab**: Level Progress System & Code Optimizations
* **01:30 - 01:50 | Assessment**: The Infinite Spawn Loop & Out-of-Memory Crash
* **01:50 - 02:00 | Ethics Discussion**: Difficulty Scaling & Performance Equity

### 1. Board Lesson Talking Points
* **Wave-Tracking State Variables**: Explain that a wave-based game needs to track its own progress in a small set of variables — a `wave` counter, a `health` value, and the 2D `aliens` grid itself — and that the entire "what happens next" decision comes down to reading these variables every frame, not from anything drawn on screen. Counting a derived value (how many aliens are still alive) from the existing grid, rather than tracking it separately, avoids a second source of truth that could drift out of sync.
* **Dynamic HUD Gauges & Scale-Factor Formulas**: Explain that a canvas HUD has no elements to update — score text, wave number, and health bar are all repainted from scratch every frame using `fillText` and `fillRect`. Pair this with the `speedMultiplier = wave * 0.15` formula: it makes each wave feel harder, but an uncapped multiplier eventually produces an unbeatable game — a `Math.min()` clamp is what keeps the curve fair rather than punishing.
* **CPU Limits, Garbage Collection & Loop Habits**: Explain that every new object allocated is memory the browser's garbage collector must eventually reclaim, and that letting arrays grow unbounded means the collector has more to scan, which shows up as visible frame stutter. Small inefficiencies inside a per-frame loop — re-reading `.length` every iteration, scanning past a match instead of breaking early — cost very little once, but compound quickly at 60 frames a second across hundreds of sprites.

### 2. Socratic Prompting
* *"Why is the screen showing 100 new wave titles and lagging? Where did the guard fail to check current wave initialization state? And why does the game get slower the longer you fire — check the lasers array length log."* (The alive-count check runs every frame with no "already spawning" guard — the instant the last alien dies, several consecutive frames all see zero alive count before the new wave's grid populates, and each one calls `spawnSwarm()` again, stacking dozens of waves. Separately, if off-screen or dead lasers are never spliced out, the array only ever grows, and every frame's loop still iterates over, updates, and draws every entry still sitting in it — the accumulating dead objects also give the garbage collector more to scan, both dragging the frame rate down the longer the game runs.)
* *"How do games keep players hooked using scaling mechanics, and where is the line between fair challenge and manipulation? If developers only optimize for high-end laptops, how does that affect users in lower-income areas?"* (Scaling formulas like `speedMultiplier = wave * 0.15` keep the game just ahead of the player's skill, but an uncapped formula eventually turns "challenging" into "impossible" — developers must playtest and clamp the curve to keep difficulty fair. Likewise, a game that feels smooth on a high-end test machine can be unplayably slow on older, lower-spec hardware more common among lower-income players, effectively locking them out regardless of the game's design — performance is an accessibility concern, not just a "nice to have.")

### 3. Concept Reference Cheat Sheet

Level 2 has no bespoke sandbox exercises like Level 1 — instead, students open the in-app **Concept Reference** tab for this session, which holds these 4 lookup cards. Walk through them as part of the Board Lesson or Sandbox Lab as needed:

* **Game-State Variables, Wave Progression & Spawn Guards**

  **Core Definition:** A wave-based game tracks its state in a small set of variables: how many waves cleared, how much health remains, and how many aliens are still alive (counted fresh from the grid each check, not tracked separately). Checking "is anyone still alive?" every frame WITHOUT protection means several consecutive frames can all see zero alive count before the new wave populates — each one calling `spawnWave()` again.

  **Why It Matters:** This is Level 1's `gameActive` gate idea scaled up into several variables describing WHICH stage of a longer game the player is in — and the spawn-guard problem is a check-then-act race condition run once per frame at 60fps, the general shape of "don't let this trigger fire again while it's already in progress."

  ```javascript
  let wave = 1;
  let health = 100;
  function countAlive(grid) {
    let count = 0;
    for (const row of grid) { for (const alien of row) { if (alien.alive) count++; } }
    return count;
  }

  let isSpawning = false;
  if (countAlive(aliens) === 0 && !isSpawning) {
    isSpawning = true;
    wave++;
    spawnWave(wave);
    isSpawning = false;   // reset once the new grid is populated
  }
  ```

  *Keywords: javascript game state variables wave counter guard flag race condition*

* **Scale-Factor Formulas**

  **Core Definition:** As waves increase, enemies should get faster — but the formula must be capped, or the game becomes unplayable after a dozen waves.

  ```javascript
  let speedMultiplier = Math.min(wave * 0.15, 2.5);   // never exceeds 2.5x
  ```

  **Why It Needs an Upper Clamp:** By wave 40, an uncapped `wave * 0.15` would be 6.0 — six times the base speed, effectively unbeatable. Always graph a scaling formula across the wave range you expect players to reach before shipping it uncapped.

  *Keywords: difficulty scaling formula multiplier clamp math min*

* **Drawing HUD Gauges on Canvas**

  **Core Definition:** Canvas games have no DOM elements to update — every HUD element (health bar, score text) is redrawn on the canvas each frame using drawing calls, not `textContent`.

  **Health Bar as a Proportional Rectangle:**
  ```javascript
  const barWidth = 200;
  const healthPct = health / 100;
  ctx.fillStyle = "red";
  ctx.fillRect(20, 20, barWidth, 20);            // background/max track
  ctx.fillStyle = "lime";
  ctx.fillRect(20, 20, barWidth * healthPct, 20); // shrinks as health drops
  ```

  **Why It Matters:** This is Level 1's `textContent`-based HUD lesson meeting Level 2's immediate-mode canvas reality — there is no `#score-val` element to write into, so a proportional rectangle IS the health bar, recalculated fresh every frame from the underlying number.

  *Keywords: canvas fillRect health bar HUD ctx fillText*

* **Memory Leaks, Garbage Collection & Loop Optimization**

  **Core Definition:** If dead/off-screen sprites are never spliced out, an array only ever grows — every frame's loop has more stale entries to iterate over, update, and draw, and more objects for the garbage collector to eventually scan and reclaim.

  **Diagnosing & Fixing It:**
  ```javascript
  console.log(lasers.length);   // watch this climb without bound over time
  lasers = lasers.filter(laser => laser.y > 0);   // one-shot cleanup pass
  ```

  **Loop Optimization Habits:**
  - Cache array length instead of re-reading `.length` every iteration: `for (let i = 0, len = lasers.length; i < len; i++) { ... }`
  - Add early exits (`break`) so a sweep stops as soon as it finds what it needs.
  - Profile with the DevTools Performance tab: record, play through the laggy moment, and find the widest block in your own code — a concrete target instead of a guess.

  **Why It Matters:** This is Session 4's cleanup lesson resurfacing at a bigger scale, now with a diagnostic habit attached — watching an array's `.length` climb, or profiling a flame chart, is how you CONFIRM a leak or bottleneck exists before hunting for it.

  *Keywords: javascript memory leak garbage collection loop performance devtools profiling*

### 4. Standard AI Prompt Sandbox — Tutor Fill-In Guide

Level 2 uses the generic **Standard AI Prompt Sandbox** panel (Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases fields + AI Generator + Chaos Monkey) rather than session-specific validators. The tutor should guide the student to fill in each field using this session's real project spec below — not a scripted answer key.

* **Task description** field: Write a `checkWaveCompletion()` function that counts alive aliens across the grid, and — only when that count hits exactly zero — increments `wave` and calls `spawnSwarm(wave)` once. Also write a `drawHUD()` function rendering score, wave number, and a health bar, and refactor the alien-sweep rendering loop so array lengths are cached locally and dead aliens are skipped early.
* **Logical Constraints (Rules)** field: `checkWaveCompletion()` must guard against calling `spawnSwarm()` more than once per wave clear; the health bar must be drawn as two overlapping rectangles; `aliens.length` and each row's `.length` must be cached before the loop starts, not re-read every iteration.
* **Edge cases to handle** field: Destroying every alien in a wave must increment `wave` exactly once, even across several frames that all read zero alive aliens in a row; a 500-laser stress test must hold a stable frame rate, and the optimized loop must produce identical visual output to the unoptimized version.
* **Expected AI output** (what the tutor should recognize as correct, sourced from the L2 curriculum doc's Tutor Manual):
  ```javascript
  let health = 100;
  function drawHUD() {
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
    ctx.fillText("Wave: " + wave, 400, 30);
    ctx.fillStyle = "red";
    ctx.fillRect(10, 45, 100, 10);
    ctx.fillStyle = "green";
    ctx.fillRect(10, 45, health, 10);
  }

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

  // Optimized alien sweep
  let rowLength = aliens.length;
  for (let r = 0; r < rowLength; r++) {
    let colLength = aliens[r].length;
    for (let c = 0; c < colLength; c++) {
      if (aliens[r][c].alive) { drawAlien(aliens[r][c]); }
    }
  }
  ```
* **Socratic Question during Review**: "If the wave-clear check runs every frame with no 'already spawned' guard, why does the screen flood with duplicate wave titles? And if dead lasers are never pruned, why does the frame rate degrade even though nothing looks different on screen?"

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** milestone card ("Part 7: Wave Progression, HUD & Performance Audit") tracks the student's real project file, separate from the Standard Sandbox above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "Clearing every alien spawns a faster new wave, a HUD shows the score, wave number, and a shrinking health bar — and the screen otherwise looks the same as before, but now holds a steady frame rate even with hundreds of lasers on screen."
   - *System Parts & Information (expected):* "Parts needed: a wave counter, a health value, a HUD-drawing routine, and cached array lengths in the render loop. Information to track: current wave, health, how many aliens are still alive, and a before/after FPS measurement."
   - *Logic Flow / Pseudocode (expected):* "Each tick -> count the living aliens -> if none remain (and no wave-spawn is already in progress), increment wave and spawn one fresh swarm -> drawHUD() paints score/wave/health. Separately: snapshot array lengths once before each loop instead of re-reading `.length` every iteration, and skip dead sprites early."
   - *Target Outcome:* "Wave 2 has just spawned after clearing wave 1 — the HUD now draws score, wave number, and a health bar, and the game holds a steady 60 FPS through a 500-laser stress test. Session 6 only showed a bare score number with no wave sense or optimization pass." This is what the in-app preview shows the student for this milestone.
   - *Why:* Session 6 proved the score variable could be modularized into its own update function, but the game had no sense of progression — one wave, one score, done. This session is where Mars Colony Defense becomes a genuine campaign: the wave counter and alive-count check together form the game's first real state machine. It's also the level's only session where part of the plan explicitly names "nothing new visually" as a target for the optimization half — professional work is sometimes judged by what stays invisible (a stable frame rate under load) rather than a new feature. Planning the HUD as a routine also anticipates Sessions 9–10, where the same score and wave values will need to travel off the canvas entirely, into a POST body bound for the leaderboard server.

2. **Write AI Prompt**
   - *Expected prompt:* "Draft a prompt asking to write a `checkWaveCompletion()` function that counts alive aliens and, only when that count hits exactly zero, increments `wave` and spawns one new swarm. Also ask for a `drawHUD()` function rendering score/wave/health as two overlapping rectangles, and a refactor of the alien-sweep loop to cache array lengths and skip dead aliens early."
   - *Why:* Specifying "only when that count hits exactly zero... once" pre-empts the concurrent-spawn bug; framing the optimization half as a refactor of existing code — not a new feature — sets the right expectation for what the AI's output should be checked against.

3. **Review & Explain**
   - *Expected checklist:* Does `checkWaveCompletion()` guard against multiple spawns per wave clear? Is the health bar two overlapping rectangles? Are array lengths cached before the loop starts, with dead aliens skipped before drawing work runs?
   - *Expected Socratic answer* — *"If the wave-clear check runs every frame with no 'already spawned' guard, why does the screen flood with duplicate wave titles? And if dead lasers are never pruned, why does the frame rate degrade even though nothing looks different on screen?"* → The alive-count reaching zero is true for several consecutive frames before the new grid populates, so without a guard each frame independently calls `spawnSwarm()`. Separately, every frame's loop still iterates over, updates, and draws every entry still in the array whether visible or not — as dead entries accumulate unpruned, the loop's per-frame workload only grows, dropping the frame rate even though the screen itself never changes.
   - *Why:* These are the exact two bugs staged in this session's Socratic Debugging segment — reviewing them in the Journal confirms the student understands both are timing/accumulation issues, not arbitrary safety checks.

4. **Test & Break**
   - *Expected test checklist:* Destroy every alien in a wave and verify `wave` increments exactly once with exactly one new swarm spawned; verify the health bar shrinks as `health` decreases. Run a 500-laser stress test and verify the frame rate stays stable; verify the optimized loop produces identical visual output to the unoptimized version.
   - *Why:* The "identical visual output" check is the one students most often skip — it's what proves the optimization was a true refactor and not an accidental behavior change disguised as a performance fix.

5. **Iterate & Improve**
   - *Expected answer:* "Add a boolean 'wave transition in progress' flag so `checkWaveCompletion()` can't re-trigger mid-spawn, and record a baseline FPS before and after the optimization pass to make the improvement concrete rather than assumed."
   - *Why:* Both halves connect directly to this session's Ethics Discussion — an uncapped spawn bug is itself a fairness failure (the player is punished by a bug, not genuine difficulty), and a student who never measures on a lower-end device is optimizing for a laptop that already runs fine.

* **Homework Evaluation Checklist**: In the Journal tab, verify the homework snippet checks whether the active alien list's count is 0 (incrementing wave and doubling speed inside that conditional), and verify the monitoring answer lists concrete indicators — active array size limits, frame rate (FPS), and CPU/memory profile — rather than a vague statement that performance "should be checked."

---

## Session 8: "Mission Control Uplink: How the Web Works"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: The Radio Relay Roleplay (request/response slips)
* **00:15 - 00:35 | Board Lesson**: The Request/Response Cycle
* **00:35 - 00:55 | Design Phase**: API Contract Worksheet
* **00:55 - 01:30 | Guided Dissection**: DevTools Network Tab Investigation
* **01:30 - 01:45 | Assessment**: The Wrong Address (404 vs. network failure)
* **01:45 - 02:00 | Ethics Discussion**: Metadata & Surveillance (Strava heatmap case)

### 1. Board Lesson Talking Points
* A **client** asks; a **server** answers. The client can *never* reach into the server's storage directly — it can only send a request and hope for a response. Draw the arrow pair and label it "the only door."
* Dissect a URL live on the board: protocol (`https`) ➔ host (`api.marsdefense.dev`) ➔ path (`/scores`) ➔ query (`?limit=5`). Each part answers a different question: *how, who, what, which*.
* HTTP methods are *verbs of intent*: GET reads, POST writes. Status codes are the server's one-word verdicts: 2xx "done", 4xx "your fault", 5xx "my fault". Students should be able to triage blame from the first digit alone.
* JSON is just the object/array literals they already know from Sessions 2–3, serialized as text so they can cross the wire.

### 2. Socratic Prompting
* *"The server answered 404 — did the network fail?"* (No — a 404 **is** a successful conversation; the server heard you and said no. "No connection" means no answer at all.)
* *"Which side decides what a POST to /scores actually does — the client that sent it, or the server that receives it?"*
* *"Your game page loaded fine, but the leaderboard is empty. Is that a client bug, a server bug, or a network bug? What evidence in the Network tab would settle it?"*

### 3. Concept Reference Cheat Sheet

Level 2 has no bespoke sandbox exercises like Level 1 — instead, students open the in-app **Concept Reference** tab for this session, which holds these lookup cards. Walk through them as part of the Board Lesson or Sandbox Lab as needed:

* **Request/Response Cycle**

  **Core Definition:** One round trip = method + URL + (optional body) ➔ status code + headers + (optional body). Nothing on the web happens outside this shape.

  *Keywords: http request response cycle*

* **Status Code Triage**

  **Core Definition:** `200 OK` — success; `201 Created` — success, something new exists now. `400 Bad Request` — malformed input; `401/403` — who are you / you may not; `404` — no such path. `500` — the server crashed handling a valid-looking request.

  **Common Mistake ❌/✅:** ❌ Reading the *page* URL in the address bar as "the request." ✅ The Network tab lists dozens of requests per page — the API calls are the XHR/Fetch rows, each with its own URL, method, and status.

  *Keywords: http status codes list*

* **Reading the Network Tab**

  **Core Definition:** DevTools' Network tab lists every request a page makes, each with its own method, status, headers, and JSON payload — the browser's built-in window into the request/response model.

  *Keywords: what is JSON, browser devtools network tab tutorial*

### 4. Standard AI Prompt Sandbox — Tutor Fill-In Guide

This session generates **no code** — the Standard AI Prompt Sandbox is used once, as a *comprehension* exercise: have the student fill the form to ask the AI for "a plain-English walkthrough of what happens between typing a URL and seeing a page, in exactly 8 numbered steps," then audit the answer against the board diagram. Flag any step the AI includes that they can't map to the diagram — that's their lookup homework.

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** milestone card ("Part 8: Request/Response Dissection") tracks a **documented request/response pair** captured from a real site in the Network tab.

1. **Plan & Design** — *Expected:* "Pick one site; find one API request (XHR/Fetch row, not the page document); record URL, method, status, and the response payload shape."
2. **Write AI Prompt** — *Expected:* Not code generation — a comprehension prompt asking the AI to explain any header or status the student didn't recognize, with the student verifying the explanation against the actual captured traffic.
3. **Review & Explain** — *Expected:* Student explains, in their own words, which side (client/server) produced each half of their captured pair, and what the status code verdict meant.
4. **Test & Break** — *Expected:* Student deliberately requests a misspelled path on the same site and records the 404, noting how it differs from disabling the network entirely (offline error, no status at all).
5. **Iterate & Improve** — *Expected:* "One thing I'd inspect next" (e.g., what a POST body looks like on a login form — teaser for Session 10).

* **Homework Evaluation Checklist**: The documented pair must contain all four fields (URL, method, status, payload sketch); the 404-vs-offline distinction must be stated correctly; accept any real site.

---

## Session 9: "Asynchronous Telemetry: Interfacing Leaderboard APIs"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Sync vs Async Timelines
* **00:15 - 00:35 | Board Lesson**: Asynchronous Pipelines & fetch
* **00:35 - 01:00 | Design Phase**: API Telemetry Blueprint
* **01:00 - 01:30 | Sandbox Lab**: Retrieving High Scores
* **01:30 - 01:50 | Assessment**: The Unresolved Promise
* **01:50 - 02:00 | Ethics Discussion**: Server Load Boundaries

### 1. Board Lesson Talking Points
* **Blocking vs. Non-Blocking Execution**: Explain that synchronous code runs one line at a time and BLOCKS everything else until each line finishes, while asynchronous code — like a network request — can be started and left running in the background while the rest of the game keeps executing.
* **The Request-Response Model**: Explain that a GET request is simply asking a remote server for data and waiting for a JSON payload back — connecting directly to Session 8's request/response cycle — and that `fetch()` is the browser's built-in tool for sending that request and receiving the response as a Promise.
* **Promises and async/await Syntax**: Explain that a Promise is a placeholder for a value that isn't ready yet, and that `await` (only valid inside an `async` function) is what pauses execution until that Promise resolves into the real value — skip it, and the code holds onto the wrapper object instead of the data inside it.

### 2. Socratic Prompting
* *"Why does scoreData show Promise pending? What does the await keyword tell the browser engine to do?"* (Because `response.json()` itself returns a Promise, not the parsed value directly — without `await` in front of it, the variable holds the pending Promise wrapper instead of the resolved JSON data; `await` tells the engine to pause this async function's execution until that specific Promise settles, then hand back the real value.)
* *"If we fetch scores inside our game loop 60 times a second, what happens to the server? Why must request intervals be restricted?"* (`requestAnimationFrame` runs roughly 60 times per second, so a `fetch()` call placed inside it fires 60 requests every second per player — multiplied across many concurrent players, that's enough traffic to trigger rate-limiting or crash the server, even though the leaderboard itself changes far less often; requests should only fire on meaningful events like game start or game over.)

### 3. Concept Reference Cheat Sheet

Level 2 has no bespoke sandbox exercises like Level 1 — instead, students open the in-app **Concept Reference** tab for this session, which holds these 4 lookup cards. Walk through them as part of the Board Lesson or Sandbox Lab as needed:

* **Synchronous vs. Asynchronous Execution**

  **Core Definition:** Synchronous code runs one line at a time, and each line must finish before the next one starts — this BLOCKS everything else. Asynchronous code can start a slow operation (like a network request) and let the rest of the program keep running while it waits.

  **Why It Matters:** Every line of code from Level 1 through this level's earlier sessions has run synchronously. A network request can take anywhere from milliseconds to several seconds, and if the game loop froze for that entire wait, the whole page would appear to hang.

  ```javascript
  // Synchronous (blocking):
  console.log("1");
  slowCalculation();   // takes 3 seconds, nothing else can run
  console.log("2");    // waits the full 3 seconds

  // Asynchronous (non-blocking):
  console.log("1");
  fetchLeaderboard();   // kicks off a request, does NOT wait
  console.log("2");    // logs immediately, before the fetch resolves
  ```

  *Keywords: synchronous vs asynchronous javascript blocking non blocking*

* **Promises and async/await**

  **Core Definition:** A fetch call returns a Promise — an object representing a value that isn't ready yet. The `await` keyword pauses (only inside an `async` function) until that Promise resolves into its actual value.

  ```javascript
  // ❌ WRONG (missing await):
  async function fetchLeaderboard() {
    let response = fetch("/api/leaderboard");
    let data = response.json();   // response is still a Promise, not the real object!
    console.log(data);            // logs "Promise <Pending>", not the JSON
  }

  // ✅ CORRECT (await unwraps the Promise):
  async function fetchLeaderboard() {
    let response = await fetch("/api/leaderboard");
    let data = await response.json();
    console.log(data);            // logs the actual leaderboard array
  }
  ```

  **Why It Matters:** `await` is what lets you WRITE asynchronous code that still reads top-to-bottom like Level 1's sequential logic. Forgetting `await` doesn't throw an error — it silently hands you the wrapper object instead of the value inside it.

  *Keywords: javascript async await promise pending bug fetch*

* **fetch GET Requests and response.json()**

  **Core Definition:** `fetch()` sends an HTTP request and returns a Promise for the Response object. Calling `.json()` on that response parses the response body as JSON and returns another Promise for the parsed data.

  ```javascript
  async function fetchLeaderboard() {
    let response = await fetch("https://api.example.com/leaderboard");
    let data = await response.json();
    return data;   // an array of { name, score } records
  }
  fetchLeaderboard().then(scores => renderLeaderboard(scores));
  ```

  **Why It Matters:** This is the single function every network feature in this course is built on top of. The two-step `await` (once for the response, once for the parsed body) trips up almost everyone the first time.

  *Keywords: javascript fetch API GET request response json parse*

* **Don't Fetch Inside the Game Loop**

  **Core Definition:** `requestAnimationFrame` runs about 60 times per second. Calling `fetch()` from inside that loop means firing roughly 60 HTTP requests every second at the server — 60 requests/sec × many players = a server hammered into rate-limiting or crashing.

  ```javascript
  // ❌ WRONG: fires 60 times a second inside gameLoop()
  // ✅ CORRECT — fetch on events, not every frame:
  function onGameOver() {
    fetchLeaderboard();   // fires once, when it's actually needed
  }
  ```

  *Keywords: rate limiting API requests server load fetch game loop*

### 4. Standard AI Prompt Sandbox — Tutor Fill-In Guide

Level 2 uses the generic **Standard AI Prompt Sandbox** panel (Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases fields + AI Generator + Chaos Monkey) rather than session-specific validators. The tutor should guide the student to fill in each field using this session's real project spec below — not a scripted answer key.

* **Task description** field: Write an `async function fetchLeaderboard()` that awaits a `fetch()` call to a leaderboard endpoint, awaits parsing the JSON response, logs the result, and wraps both awaits in a try/catch that logs a friendly error on failure.
* **Logical Constraints (Rules)** field: The function must be declared with the `async` keyword before it uses any `await`; both the `fetch()` call and the `.json()` parse must be individually awaited.
* **Edge cases to handle** field: A broken or unreachable endpoint must be caught by the try/catch block and logged, not left to throw an uncaught exception.
* **Expected AI output** (what the tutor should recognize as correct, sourced from the L2 curriculum doc's Tutor Manual):
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
* **Socratic Question during Review**: If the `await` before `res.json()` is deleted, why does the console print `Promise { <pending> }` instead of the actual score data?

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** milestone card ("Part 9: Async Leaderboard Fetch (GET)") tracks the student's real project file, separate from the Standard Sandbox above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "A small TOP SCORES panel shows real player records fetched from a server, and the game never freezes while that data loads."
   - *System Parts & Information (expected):* "Parts needed: an async fetch function. Information to track: the leaderboard endpoint URL, the raw network response, and the parsed list of scores."
   - *Logic Flow / Pseudocode (expected):* "fetchLeaderboard() runs -> await fetch(url) -> await response.json() to parse it -> display the resulting list (a catch block logs a friendly error if the request fails)."
   - *Target Outcome:* "The leaderboard panel now fills in from an async GET request using await/try-catch — gameplay keeps running smoothly while the data loads. This panel is new since Session 8." This is what the in-app preview shows the student for this milestone.
   - *Why:* Session 8 taught the request/response model as a concept the student could only observe in DevTools; this session is the first time the student's OWN project reaches outside itself to a server it doesn't control. Planning has to name the network response as a real "part" of the system for the first time — something that can be slow, can fail, or can simply not arrive — a category of uncertainty nothing before this session introduced. Getting the plan comfortable with "this might not work" is what makes Session 10's write path, and the try/catch habit generally, feel like a natural extension rather than an abrupt new topic.

2. **Write AI Prompt**
   - *Expected prompt:* "Write a prompt asking for an async function fetchLeaderboard() that awaits a fetch() call to a leaderboard endpoint, awaits parsing the JSON response, logs the result, and wraps both awaits in a try/catch that logs a friendly error on failure."
   - *Why:* Requesting the try/catch explicitly, rather than leaving error handling implied, prevents the AI from generating a bare, unguarded await chain that would silently reject and freeze the leaderboard panel the first time the network hiccups.

3. **Review & Explain**
   - *Expected checklist:* The function is declared with the `async` keyword before it uses any `await`; both the `fetch()` call and the `.json()` parse are individually awaited.
   - *Expected Socratic answer* — *"If the await before res.json() is deleted, why does the console print Promise { <pending> } instead of the actual score data?"* → Because `response.json()` itself returns a Promise, not the parsed object directly; without `await`, the variable is assigned the pending Promise wrapper rather than the value it will eventually resolve to, so logging it shows the wrapper's pending state instead of the leaderboard array.
   - *Why:* This is the exact bug staged in the Socratic Debugging segment — walking through the mechanism in the Journal, not just the fix, confirms the student understands that every `fetch()` and every `.json()` call independently returns its own Promise.

4. **Test & Break**
   - *Expected test checklist:* Call `fetchLeaderboard()` against a working endpoint and verify it returns a parsed array of score objects; point it at a broken URL and verify the catch block logs an error instead of throwing an uncaught exception; verify the function does not block or freeze the rest of the game loop while waiting.
   - *Why:* The broken-URL case is the one that actually proves the try/catch works, not just that the happy path runs — a student who only tests the working endpoint could still ship code that freezes on the first real outage.

5. **Iterate & Improve**
   - *Expected answer:* "If real network calls are too slow for classroom pacing, mock the fetch with a short artificial delay to make the async behavior visible without a slow endpoint."
   - *Why:* Ties to this session's Ethics Discussion on server load boundaries — thinking carefully about when and how often a request fires, even for a classroom mock, reinforces the same restraint needed later to avoid hammering the real leaderboard endpoint.

* **Homework Evaluation Checklist**: In the Journal tab, verify the homework snippet's function is declared with `async`, and that it uses `await` before the `fetch(...)` call to a mock endpoint before logging the response.

---

## Session 10: "Transmitting to Mission Control: POST, Payloads & Error Handling"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Payload Structure Map
* **00:15 - 00:35 | Board Lesson**: Writing to Servers
* **00:35 - 01:00 | Design Phase**: Submission Pipeline Blueprint
* **01:00 - 01:30 | Sandbox Lab**: Posting Score Records
* **01:30 - 01:50 | Assessment**: Silent Network Drops
* **01:50 - 02:00 | Ethics Discussion**: Client-Side Integrity and Cheat Prevention

### 1. Board Lesson Talking Points
* **POST Requests and Request Bodies**: Explain that where a GET request only reads, a POST request sends data — the options object passed as `fetch()`'s second argument carries the `method`, the `headers`, and a `body` that must be turned into text via `JSON.stringify()` before the server can receive it.
* **try/catch for Connection Drops**: Explain that a network call can fail for reasons that have nothing to do with the code itself — a dropped wifi connection, an unreachable server — and that wrapping the `await fetch(...)` call in try/catch is what turns a silent freeze into a message the player can actually see and react to.
* **Checking response.ok and Status Codes**: Explain that `fetch()` only rejects on a true network failure — a 404 or 500 response still resolves successfully, so `response.ok` (true only for 200-299) must be checked explicitly, or a server-side error gets silently treated as a success.

### 2. Socratic Prompting
* *"Why did the game freeze when the network dropped? How does try/catch protect the interface from breaking?"* (Without a catch block, a rejected fetch Promise throws an unhandled error right at the `await` line, so every line after it simply never runs and nothing tells the player anything happened — from their side it just looks frozen; wrapping the `await` in try/catch intercepts that rejection so the code can log it and show a recovery message instead of silently dying mid-function.)
* *"If scores are sent from the client, how do we prevent users from modifying request packets to post fake scores?"* (Anything in a POST body was built on a machine the player fully controls, including the browser console, so a client can send `submitScore("cheater", 999999999)` just as easily as a real result; the server must validate incoming payloads — reasonable score ranges, required fields — rather than storing whatever arrives, since the client is a request, not a guarantee.)

### 3. Concept Reference Cheat Sheet

Level 2 has no bespoke sandbox exercises like Level 1 — instead, students open the in-app **Concept Reference** tab for this session, which holds these 4 lookup cards. Walk through them as part of the Board Lesson or Sandbox Lab as needed:

* **HTTP POST with JSON Payloads**

  **Core Definition:** A GET request reads data; a POST request sends data to the server to be stored. `fetch()` takes a second argument — an options object — that configures the method, headers, and body.

  ```javascript
  async function submitScore(name, score) {
    let response = await fetch("/api/leaderboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, score })
    });
    return response;
  }
  ```

  **Why It Matters:** Earlier fetch calls only ever READ data with the defaults; sending data needs three extra pieces of setup working together — method, headers, and body — which is why this is where students most often forget one piece.

  *Keywords: fetch POST request options headers JSON stringify body*

* **try/catch Around Network Calls**

  **Core Definition:** A network request can fail for reasons that have nothing to do with your code — the wifi drops, the server is down. Without a catch block, a rejected fetch Promise throws an unhandled error and the game silently stops responding.

  ```javascript
  async function submitScore(name, score) {
    try {
      let response = await fetch("/api/leaderboard", { method: "POST" /* ... */ });
      return response;
    } catch (err) {
      console.error("Score submission failed:", err);
      showRetryButton();
    }
  }
  ```

  **Why It Matters:** This is the network-call version of Level 1's defensive output guards, applied to something outside your control entirely — try/catch is what separates "the network failed and the player sees nothing" from "the network failed and the player sees a retry button."

  *Keywords: javascript try catch fetch error handling network failure*

* **Checking response.ok and Status Codes**

  **Core Definition:** A fetch Promise resolves successfully even when the server responds with an error status like 404 or 500 — `fetch` only rejects on a true network failure. You must check `response.ok` yourself to know whether the request actually succeeded.

  ```javascript
  let response = await fetch("/api/leaderboard", { method: "POST" /* ... */ });
  if (response.ok) {
    console.log("Score submitted successfully.");
  } else {
    console.error("Server rejected the request:", response.status);
  }
  ```

  **Why It Matters:** This is the single most surprising fact about `fetch()` for students — a 500 Internal Server Error does NOT trigger the catch block, so skipping this check means treating a server crash as a success.

  *Keywords: fetch response.ok status code 404 500 error check*

* **Never Trust the Client**

  **Core Definition:** Anything sent in a POST body was built by code running on the PLAYER's machine, which the player fully controls — including the browser console. A submitted score of 999999999 is just as easy to send as a real one.

  ```javascript
  submitScore("cheater", 999999999);   // anyone can call this directly from devtools
  ```

  **Why It Matters:** The server should validate incoming payloads (reasonable score ranges, required fields) rather than storing whatever arrives — the client is a request, not a guarantee. Sessions 11-12 pick this up for real: a database enforces types and ranges, and parameterized queries close off injection.

  *Keywords: client side validation server trust security cheating*

### 4. Standard AI Prompt Sandbox — Tutor Fill-In Guide

Level 2 uses the generic **Standard AI Prompt Sandbox** panel (Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases fields + AI Generator + Chaos Monkey) rather than session-specific validators. The tutor should guide the student to fill in each field using this session's real project spec below — not a scripted answer key.

* **Task description** field: Write an `async function submitScore(player, val)` that POSTs a JSON body `{ player, score: val }` to a scores endpoint with a `Content-Type: application/json` header, checks `res.ok` and throws if the submission failed, and catches/logs any network error.
* **Logical Constraints (Rules)** field: The fetch options object must set `method: "POST"` and a `Content-Type: application/json` header; the request body must be passed through `JSON.stringify()` rather than a raw object.
* **Edge cases to handle** field: An unreachable endpoint must be caught and logged as a warning instead of crashing the game; a malformed or oversized payload's error status must be surfaced, not swallowed.
* **Expected AI output** (what the tutor should recognize as correct, sourced from the L2 curriculum doc's Tutor Manual):
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
* **Socratic Question during Review**: Why did the game freeze when the network dropped? How does try/catch protect the interface from breaking?

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** milestone card ("Part 10: Leaderboard Score Submission (POST)") tracks the student's real project file, separate from the Standard Sandbox above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "After a run ends, the player's own name and score are sent up to the cloud leaderboard, with a clear warning shown instead of a freeze if the network fails."
   - *System Parts & Information (expected):* "Parts needed: a JSON payload and a POST-sending function. Information to track: the player's name, their score, the content-type header, and whether the server confirmed success."
   - *Logic Flow / Pseudocode (expected):* "Build a {name, score} object -> JSON.stringify() it -> await a POST fetch with that body -> check response.ok -> on failure, catch the error and warn the player instead of freezing."
   - *Target Outcome:* "submitScore() now POSTs the run's score to the server — the player's own entry appears in the panel. Session 9's leaderboard was read-only." This is what the in-app preview shows the student for this milestone.
   - *Why:* Session 9 taught the game to read from the outside world; this session teaches it to write to it, which is a categorically bigger trust boundary — anything sent in a POST body was built on a machine the player fully controls. Planning has to explicitly name `response.ok` as a thing to track, not just "did fetch not throw," because Session 9 already established that a failed request doesn't always look like a JavaScript error. This session is also the level's first real brush with the security posture Level 3's cyberpunk theme will spend an entire level on — never trusting client input is introduced here as a design habit, well before it's framed as an attack surface.

2. **Write AI Prompt**
   - *Expected prompt:* "Draft a prompt asking for an async function submitScore(player, val) that POSTs a JSON body { player, score: val } to a scores endpoint with a Content-Type: application/json header, checks res.ok and throws if the submission failed, and catches/logs any network error."
   - *Why:* Naming the exact header, the exact stringified shape of the body, and the `res.ok` check up front prevents the AI from generating a POST that "works" on a healthy server but has no way to detect or report a rejected request.

3. **Review & Explain**
   - *Expected checklist:* The fetch options object sets `method: "POST"` and the correct `Content-Type: application/json` header; the body is passed through `JSON.stringify()` rather than a raw object.
   - *Expected Socratic answer* — *"Why did the game freeze when the network dropped? How does try/catch protect the interface from breaking?"* → Without a catch block, a rejected fetch Promise throws an unhandled error at the `await` line, and since nothing downstream ever runs, the submit handler simply stops executing mid-function with no message shown to the player, which reads as a frozen interface; wrapping the `await` in try/catch intercepts that rejection so the code can log it and show a recovery message instead of silently dying.
   - *Why:* This is the exact failure staged in the Socratic Debugging segment — confirming the student can explain why a freeze happens (not just that adding try/catch "fixes it") is what separates copying a pattern from understanding it.

4. **Test & Break**
   - *Expected test checklist:* Submit a valid score and verify the POST body matches `{ player, score }` and the request succeeds; point the endpoint at an unreachable URL and verify the catch block logs a warning instead of crashing; attempt to submit an oversized or malformed payload and verify the server's error status is surfaced, not swallowed silently.
   - *Why:* The malformed-payload case matters as much as the network-drop case — a try/catch that only guards against total connection failure but silently ignores a 4xx rejection status still lets bad data pass as if it succeeded.

5. **Iterate & Improve**
   - *Expected answer:* "Discuss with students what a server-side check should reject (e.g. absurd score values) so client-submitted data isn't trusted blindly."
   - *Why:* This is a direct extension of the session's Ethics Discussion on client-side integrity — the Citibank case shows that trusting whatever a client sends isn't a hypothetical risk but a real, expensive one, so iteration here means thinking like the server, not just the player.

* **Homework Evaluation Checklist**: In the Journal tab, check the option keys: `method` must be `"POST"`, `headers` must declare `Content-Type` as JSON, and `body` must be the result of `JSON.stringify()` on the test user score object.

---

## Session 11: "The Colony Data Vault: Tables, Schemas & SQL Queries"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: The Paper Registry (querying messy notes by hand)
* **00:15 - 00:35 | Board Lesson**: Relational Tables, Types & Primary Keys
* **00:35 - 00:55 | Design Phase**: `colonist_scores` Schema Blueprint
* **00:55 - 01:30 | SQL Playground**: CREATE / INSERT / SELECT / UPDATE drills
* **01:30 - 01:45 | Assessment**: The Query That Lies (wrong WHERE; UPDATE without WHERE)
* **01:45 - 02:00 | Ethics Discussion**: Data Retention (Equifax case)

### 1. Board Lesson Talking Points
* Databases exist because **variables die on reload** (recall Level 1 Session 4's tampering discussion) and loose records can't be queried. A table is a contract: every row has the same columns, every column has one type.
* The **primary key** is a row's identity. Two colonists can share a name; they can never share an id. Ask what breaks if they could.
* Place the database in the Session 8 diagram: client ➔ server ➔ **database**. The server is the *only* one who talks to the vault — extend the "only door" metaphor by one room.
* SQL reads almost like English, which is exactly why students must trace what each clause *filters* rather than skimming: `SELECT` (which columns) `FROM` (which table) `WHERE` (which rows) `ORDER BY` (in what order).

### 2. Socratic Prompting
* *"Your UPDATE ran with no errors and now every row is 9999. What did the missing WHERE tell the database to do?"* (Apply to *all* rows — SQL does exactly what's written, the Level 1 literalness lesson at data scale.)
* *"Why is `score` an INT column and not VARCHAR? What query becomes impossible if numbers are stored as text?"* (`ORDER BY score` would sort alphabetically: 1000 before 200.)
* *"Where does this table physically live — the player's laptop or the server? Who can therefore edit it?"*

### 3. Concept Reference Cheat Sheet
* **Core Definition — Relational Table**: Fixed columns with declared types; one row per record; one primary key per row.
* **Syntax Cards**:
  ```sql
  CREATE TABLE colonist_scores (
    id INT PRIMARY KEY,
    player VARCHAR(50),
    score INT,
    wave_reached INT
  );
  INSERT INTO colonist_scores (id, player, score, wave_reached) VALUES (1, 'cdt_arya', 4200, 6);
  SELECT player, score FROM colonist_scores WHERE score > 4000 ORDER BY score DESC;
  UPDATE colonist_scores SET score = 4500 WHERE id = 1;
  ```
* **Common Mistake ❌/✅**: ❌ `UPDATE colonist_scores SET score = 4500;` (updates every row). ✅ Always write the `WHERE` first, then the `SET` — the WHERE clause is the blast radius.
* **Searchable Keywords**: `sql create table primary key`, `sql select where order by`, `sql data types int varchar`, `sql update without where danger`.

### 4. Standard AI Prompt Sandbox — Tutor Fill-In Guide
Use the sandbox to draft one SQL-generation prompt (e.g., Role: "database engineer"; Task: "create a supply_inventory table with id primary key, item name, quantity"; Constraints: "MySQL syntax, quantity must not allow negatives"). Audit the AI's output in the playground: does the generated DDL actually enforce the negative-quantity constraint (`CHECK (quantity >= 0)`), or did the AI silently drop it? That gap **is** the audit lesson.

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The **Project Journal** milestone card ("Part 11: The Colony Data Vault") tracks the **created and queried table** in the browser SQL playground.

1. **Plan & Design** — *Expected:* Column list with types and the primary key choice, plus two sample rows written before any SQL runs.
2. **Write AI Prompt** — *Expected:* A schema-generation prompt naming the exact columns, types, and constraints (not "make me a scores table").
3. **Review & Explain** — *Expected:* Student explains what each clause of their SELECT filters/orders, and why the primary key can't repeat.
4. **Test & Break** — *Expected:* Runs the wrong-comparison query and the WHERE-less UPDATE **on a throwaway table**, records what happened, and states the repair.
5. **Iterate & Improve** — *Expected:* One schema improvement with a reason (e.g., "add a created_at TIMESTAMP so we can query newest scores").

* **Homework Evaluation Checklist**: `CREATE TABLE` declares a primary key; the `SELECT` uses `WHERE quantity < 10`; the student can state in one sentence why the server, not the client, talks to the database.

---

## Session 12: "Defending the Data Vault: Validation, Passwords & Injection Awareness"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: The Forged Supply Slip (hostile request roleplay)
* **00:15 - 00:35 | Board Lesson**: The Trust Boundary
* **00:35 - 00:55 | Design Phase**: Validation Rulebook for `colonist_scores`
* **00:55 - 01:30 | Playground Demo**: Breaking & Fixing an Injectable Query
* **01:30 - 01:45 | Assessment**: The Negative Supply Heist
* **01:45 - 02:00 | Ethics Discussion**: Responsible Disclosure

### 1. Board Lesson Talking Points
* Reprise Session 10's cheat discussion and answer it properly: the client is **hostile territory**. Every field of every request must pass the server's rulebook — type, range, length — before touching the database.
* Password storage: the database stores a **hash** (one-way scramble), never the password. Board-demo the asymmetry: same input ➔ same hash, but no path back. A leaked hash table is a locked filing cabinet; a leaked plaintext table is a published diary.
* SQL injection in one sentence: **string-gluing lets data become code.** Write the concatenated login query on the board, substitute `' OR '1'='1`, and re-read the WHERE clause aloud — the room should hear the meaning change.
* The professional fix is the **parameterized query** (`WHERE name = ?`): the input rides in a sealed envelope the database never executes. Students write these for real at Level 3; today is recognition.
* **Framing rule for tutors**: every demonstration stays in the sandboxed playground on throwaway tables, and the lesson is always *how to close the hole*, not how to use it — this is the Cyber Detective identity of the platform.

### 2. Socratic Prompting
* *"Every line of the negative-quantity purchase ran correctly. So where is the bug?"* (In the missing rule — the developer's assumption about users *is* the vulnerability.)
* *"If our database leaks tonight, what do attackers get if we hashed — and what if we didn't? Which headline do you want?"*
* *"Why does the parameterized version survive the exact same hostile input?"* (The input is bound as data; it can never terminate the string or add clauses.)

### 3. Concept Reference Cheat Sheet
* **Core Definition — Trust Boundary**: The line between what your code controls (server) and what it must assume is hostile (everything the client sends).
* **Injection Recognition Card**:
  ```javascript
  // ❌ VULNERABLE — data can become code
  let query = "SELECT * FROM users WHERE name = '" + userInput + "'";
  // ✅ SAFE — data stays data
  // SELECT * FROM users WHERE name = ?   (driver binds userInput)
  ```
* **Validation Rulebook Pattern**: field ➔ rule ➔ rejection message (e.g., `score` ➔ integer, 0–1,000,000 ➔ "score out of range").
* **Password Card**: store `hash(password)`, never `password`; a hash leak ≠ a password leak (but still a breach to disclose).
* **Searchable Keywords**: `sql injection explained`, `parameterized query`, `password hashing vs encryption`, `input validation server side`, `responsible disclosure`.

### 4. Standard AI Prompt Sandbox — Tutor Fill-In Guide
Have the student draft a prompt asking the AI to *audit* a provided snippet: Role: "security reviewer"; Task: "identify why this login query is unsafe and rewrite it safely"; paste the concatenated query as the Explicit Input. The audit lesson: does the AI's rewrite use a real placeholder, and does its explanation match what the student saw happen in the playground? Any mismatch goes in the Prompt Journal's audit notes.

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)
The **Project Journal** milestone card ("Part 12: Data Vault Defense Drills") tracks the **validation rulebook + the break-and-fix exercise**.

1. **Plan & Design** — *Expected:* The rulebook table for every `colonist_scores` insert field, written before touching the playground.
2. **Write AI Prompt** — *Expected:* The security-audit prompt above (the student directs the AI to *review*, not to generate an attack).
3. **Review & Explain** — *Expected:* In the student's own words: why concatenation is unsafe, why the parameterized form is immune ("input is treated as data, never as SQL").
4. **Test & Break** — *Expected:* The hostile input demonstrated against the concatenated query on a throwaway table, then re-run against the parameterized form and shown to fail harmlessly; the negative-quantity rule written and verified.
5. **Iterate & Improve** — *Expected:* One rule added to the rulebook that the session didn't require (e.g., username character allowlist), with reasoning.

* **Homework Evaluation Checklist**: Rulebook covers username/password/age with a concrete rule each; the password sentence mentions hashing (or "one-way scramble") and that a hash leak doesn't directly reveal passwords; confirm all demonstrations stayed inside the sandboxed playground.

---

## Session 13: Level 2 Assessment & Graduation

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Final QA Sweeps
* **00:15 - 01:00 | Assessment Part A**: The Mars Defense Assembler (rebuild/verify each lab type fresh, as a standalone snippet)
* **01:00 - 01:45 | Assessment Part B**: The Canvas Autopilot Walkthrough (live code defense)
* **01:45 - 02:00 | Assessment Part C**: Diagnostic Challenges (two seeded bug patches)

### 1. Tutor Guidance: Evaluation Solutions
* **Part A (Assembler Check)**: In a clean lab environment, verify the student can rebuild each of the five Level 2 lab types — canvas initialization, a sprite array with pruning, an input state matrix, a nested collision sweep, and an async leaderboard fetch — each as its own working standalone snippet, not one integrated build.
* **Part B (Defense Check)**: Verify the student can explain, line-by-line and without notes, the coordinate math driving sprite movement and collision, the memory cleanup (splice/filter) loops, the fetch options object used for the leaderboard POST/GET calls, and the schema + validation rules from the database labs.
* **Part C (Diagnostic Check)**: Verify the student locates and correctly patches **two** seeded bugs within the allotted time: (a) a bug in either an asynchronous request handler (e.g. a missing `await`) or an array splice statement (e.g. a forward-iterating splice), and (b) a SQL query bug (e.g. incorrect WHERE logic or an injection-vulnerable string-concatenated query).
* **Take-Home Evaluation**: Verify self-reflection logs on the level's core mechanics (canvas rendering, sprite arrays, collision math, async APIs, database queries).

### 2. Concept Reference Cheat Sheet (Session 13)

Level 2 has no bespoke sandbox exercises like Level 1 — instead, students open the in-app **Concept Reference** tab for this session, which holds these 3 lookup cards. Walk through them as part of the Board Lesson or Sandbox Lab as needed:

* **The Full Level 2 Architecture**

  **Core Definition:** Every system built across Level 2 stacks into one picture: a canvas render loop for graphics/state, an async layer for talking to the server, and a database layer behind the server that the client never touches directly.

  **Why It Matters:** Each earlier session taught one layer in isolation; the hardest part of a real project is knowing where each concern BELONGS — collision math stays inside the loop, fetch calls happen on events between frames, and the database is never reachable except through the server. Seeing all three layers on one diagram is what turns 12 sessions of separate lessons into one coherent mental model of how a real game-with-a-backend is actually structured.

  **The Pipeline:**
  `init()` (get canvas + ctx, set up sprite arrays, load config) -> `gameLoop()` runs ~60x/sec via `requestAnimationFrame`:
  1. Read input matrix (which keys are currently held)
  2. Update: move sprites, run collisions, splice dead ones
  3. Draw: `ctx.clearRect`, then redraw every sprite + HUD
  4. `requestAnimationFrame(gameLoop)` — schedule next frame

  -> on game-over event, outside the loop: `async submitScore()` / `fetchLeaderboard()` — POST the final score, then GET the updated board.

  -> server-side, never reached by the client directly: the **database** (validated INSERT/SELECT, parameterized queries).

  The loop never awaits anything — async calls fire off to the side when a meaningful event (game over) happens; the database layer is a step further still, reachable only through the server.

  *Keywords: canvas game architecture requestAnimationFrame pipeline diagram database*

* **Common Seeded-Bug Checklist**

  **Core Definition:** A diagnostic cheat sheet of the classic bug patterns seeded across Level 2 — check these first when something looks broken.

  **Why It Matters:** Experienced developers debug faster not because they're smarter, but because they recognize SHAPES of bugs they've already seen — a smear trail means `clearRect`, "Promise pending" means a missing `await`. Building this same pattern-recognition habit now, on a known list, is what makes debugging genuinely new problems faster later.

  **Checklist:**
  - **Missing clearRect:** old frames never erase, so sprites appear to smear/trail across the canvas.
    ```javascript
    ctx.clearRect(0, 0, canvas.width, canvas.height); // must run before redrawing
    ```
  - **Forward-splice skip:** splicing an array while iterating forward skips the element that slides into the removed index.
    ```javascript
    for (let i = arr.length - 1; i >= 0; i--) { if (dead(arr[i])) arr.splice(i, 1); } // iterate backward instead
    ```
  - **Stuck key state:** a `keyup` listener never clears the pressed flag, so a key appears held forever.
  - **Missing break:** a collision loop keeps scanning after a hit, sometimes double-triggering effects.
  - **Missing await:** an async call logs `"Promise <Pending>"` instead of the real data.
  - **Missing WHERE:** an UPDATE/DELETE with no WHERE clause silently applies to every row in the table.
    ```sql
    UPDATE colonist_scores SET score = 0 WHERE id = 1; -- WHERE required, or every row resets
    ```
  - **String-concatenated query:** gluing user input directly into SQL text opens an injection hole — check for a parameterized placeholder instead.

  Run through this list before assuming a bug is something new — most Level 2 breakage traces back to one of these seven patterns.

  *Keywords: javascript common bugs checklist clearRect splice sql debugging*

* **Defending Code in Review**

  **Core Definition:** A code-review walkthrough means explaining WHY each piece of your code works, not just reading it aloud. Four areas come up most often across a Level 2 review.

  **Why It Matters:** This is the professional skill this whole level has been building toward — in a real job, code that works but that you can't explain is a liability, not an asset, because nobody (including future you) can safely change it later. Level 1-2's code-review model is deliberately copy-paste and conversational for this exact reason: explaining your own reasoning out loud is the actual skill being assessed, not just producing correct output.

  **What to Be Ready to Explain:**
  - **Coordinate math:** why a sprite's x/y updates the way it does, and how the AABB collision check compares edges, not center points.
  - **Cleanup loops:** why sprites are filtered/spliced out, and what would happen to performance if that loop were removed (Session 7's memory-leak lesson).
  - **fetch options:** why the POST call needs `method`, `headers`, and a stringified body, and what try/catch is protecting against.
  - **Query safety:** why a query uses a parameterized placeholder instead of string concatenation, and what the validation rulebook rejects and why.

  **Framing the Walkthrough:** Treat the reviewer's questions as collaborative auditing, not adversarial gatekeeping — the same posture a professional code review requires. Being unable to explain a line you wrote is a bigger red flag than the line itself having a small bug.

  *Keywords: code review walkthrough explain code line by line defense*

### 3. Standard AI Prompt Sandbox — Tutor Fill-In Guide

Level 2 uses the generic **Standard AI Prompt Sandbox** panel (Role / Task Description / Logical Constraints / Explicit Input Structure / Edge Cases fields + AI Generator + Chaos Monkey) rather than session-specific validators. The tutor should guide the student to fill in each field using this session's real project spec below — not a scripted answer key.

* **Task description** field: Rebuild canvas initialization, sprites, the input matrix, a collision sweep, and the async leaderboard fetch/submit as five separate, working standalone snippets (not one integrated build), and prepare to explain each one's role to the tutor without notes.
* **Logical Constraints (Rules)** field: Every snippet (rendering, input, collision, API) must be independently explainable; no leftover `console.log` debug statements or dead variables should remain in any of the rebuilt labs.
* **Edge cases to handle** field: Both seeded diagnostic bugs (one async-handler-or-splice bug, one SQL query bug) must be patched within the time limit, and at least 2 code design choices must be defended under tutor questioning.
* **Expected AI output** (what the tutor should recognize as correct — these are five independent standalone snippets, not one merged program; sourced from the L2 curriculum doc's Session 13 architecture overview):
  ```javascript
  function init() {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    // load config, set up sprite arrays (ship, lasers, aliens, shields)
  }

  function gameLoop() {
    // 1. Read input matrix (held keys)
    // 2. Update: move sprites, run collisions, splice dead entries
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 3. Draw: redraw every sprite + HUD
    requestAnimationFrame(gameLoop);
  }

  async function onGameOver() {
    await submitScore(playerName, score);   // POST final score
    await fetchLeaderboard();               // GET updated board
  }
  ```
* **Socratic Question during Review**: If asked "why does this collision check use `&&` instead of `||`," can you explain the AABB logic from memory, not just recite what the AI generated?

### 4. Level 2 Assessment Rubric

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Logical Logic** | All sprite movements, marching logic, nested matrix collisions, and cleanups are correct. | Minor boundary exceptions, but game runs clean. | Splice bugs or coordinate anomalies exist. | Scrambled logic, infinite loops, browser freezes. |
| **Asynchronous Logic** | Successfully fetches and posts data using async/await; try/catch guards are robust. | Queries API successfully, but handles error exceptions poorly. | Struggling with fetch options, unresolved promises. | Blocked synchronous requests, syntax errors. |
| **Memory Optimization** | Zero memory leaks; arrays are pruned cleanly; loop efficiency is high. | Sprites pruned, but loop performance dips under load. | Inconsistent pruning, dead lasers leak memory. | No garbage collection, array sizes grow indefinitely. |
| **System Flow** | Strong modular decomposition; clear encapsulation of Canvas, inputs, and APIs. | Modules separated but share too many global scope dependencies. | Poor decoupling, monolithic rendering. | Spaghetti code, no modular functions. |
| **Database & Security Knowledge** | Correct schema design, accurate SELECT/WHERE/UPDATE queries, identifies injection and states the parameterized defense. | Queries mostly correct; validation rules present but incomplete. | Can read but not write basic SQL; vague on why servers validate. | No working queries; no concept of the trust boundary. |

### 5. Project Journal Milestone — Expected Student Answers (5-Step Workflow)

The **Project Journal** milestone card ("Part 13: Graduation Sprint & Defense") tracks the student's real project file, separate from the Standard Sandbox above.

1. **Plan & Design**
   - *Visual Concept & UX Flow (expected):* "Every Level 2 lab type, rebuilt fresh and demo-ready: steering, firing, marching alien waves, crumbling shields, a live HUD, the cloud leaderboard, and a working SQL query — each running independently for the live defense session."
   - *System Parts & Information (expected):* "Parts needed: nothing new — each of the five prior lab types is rebuilt fresh as its own standalone snippet. Information to track: the state shape for each lab type in isolation (ship, lasers, alien grid, shield cells, score, wave, health, and a sample query result)."
   - *Logic Flow / Pseudocode (expected):* "Part A: rebuild and verify each of the five lab types as a fresh, standalone snippet. Part B: walk the tutor through a live defense of the code. Part C: patch two timed, seeded bugs (one async/array bug, one SQL bug) under review."
   - *Why:* This is the level's graduation moment — the plan has nothing new to add because the work of designing is done; System Parts & Information reads as a checklist of everything covered since Session 1, not a wishlist of what's still missing. Naming "the state shape for each lab type in isolation" is itself the milestone: the student is proving fluency across the ship, the lasers, the alien grid, the shields, the async leaderboard, and the database query — each on its own, the same standalone-snippet model every session since Session 1 has used, not a single integrated build. This closes the arc that began with Session 1's blank canvas and bridges directly into Level 3's Cyberpunk Hacker Arena, where the "never trust the client" habit planted in Session 10 becomes the entire subject of the level.

2. **Write AI Prompt**
   - *Expected prompt:* "Rebuild canvas initialization, sprite arrays, the input matrix, a collision sweep, and the async leaderboard fetch/submit calls as five separate, working standalone snippets, and prepare to explain each one's role to the tutor without notes."
   - *Why:* There is no new feature to request here — the "prompt" for this milestone is really a rebuild-and-self-review instruction, reflecting that Session 13's actual work is fluency and defense across every standalone lab type, not new code generation.

3. **Review & Explain**
   - *Expected checklist:* Every rebuilt snippet (rendering, input, collision, API) can be pointed to and explained independently; there are no leftover `console.log` debug statements or dead variables in any of them.
   - *Expected Socratic answer* — *"If asked 'why does this collision check use && instead of ||,' can you explain the AABB logic from memory, not just recite what the AI generated?"* → Yes — an AABB overlap only exists when every axis overlaps simultaneously (the rectangles' left/right edges AND top/bottom edges must all cross), so the check must AND all four edge comparisons together; using `||` would report a collision the moment any single edge condition was true, which would falsely flag overlap for shapes that aren't actually touching.
   - *Why:* This is the level's final defense of a bug class first taught in the earlier collision sessions — being able to reconstruct the AABB logic from first principles, not recite memorized code, is exactly what Part B's live walkthrough is testing.

4. **Test & Break**
   - *Expected test checklist:* Run each of the five rebuilt lab snippets and verify the ship moves, fires, aliens march and die, shields degrade, waves progress, and scores submit; patch both seeded diagnostic bugs (one async-handler-or-splice bug, one SQL query bug) within the time limit; defend at least 2 code design choices under tutor questioning.
   - *Why:* This is the level's final regression sweep — every lab type taught since Session 1 is re-verified fresh and independently, proving the underlying skill rather than a memorized, still-running build.

5. **Iterate & Improve**
   - *Expected answer:* "Write down which concept from Level 2 felt least solid, to flag as a review topic before starting Level 3."
   - *Why:* Closes the level with the same metacognitive habit Level 1's graduation session ended on — naming a genuine weak spot honestly is what turns a passed assessment into a usable starting point for Level 3's Cyberpunk Hacker Arena, rather than a closed chapter.

* **Homework / Certification Checklist**: Verify each rebuilt lab snippet passes its own regression check (movement, firing, alien waves, shields, HUD, leaderboard, database query); confirm both seeded diagnostic bugs (one async-handler-or-splice bug, one SQL query bug) were correctly patched within the time limit; confirm the student defended at least 2 design choices under questioning; and score against the Level 2 Assessment Rubric across Logical Logic, Asynchronous Logic, Memory Optimization, System Flow, and Database & Security Knowledge before certifying advancement to Level 3.
