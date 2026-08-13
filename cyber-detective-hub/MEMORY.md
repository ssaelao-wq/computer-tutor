# MEMORY.md — Antigravity Project Knowledge & Session Log

## [2026-08-13] Fix: Exercise 6.1 (and all Session Exercise 1s) submissions not restoring on logout/login

### Problem
After a student completes Exercise 6.1, verifies it, logs out, and logs in again, Exercise 6.1 inputs (Plan, Prompt, Output Code, Explain) were blank, while Exercises 6.2, 6.3, and 6.4 restored correctly.

### Root Cause
1. On login, `useEffect` fetched saved submissions from the backend and populated `savedExerciseCode`.
2. When the user clicked on a session (e.g. Session 6) to open the sandbox, `loadTemplate(session)` was called.
3. In `loadTemplate`, all Level 1 and Level 2 sessions were hardcoded to reset Exercise 1 state variables (`s6PlanInput`, `s6PromptInput`, `s6OutputCodeInput`, `s6ExplainInput`) to empty strings `''` or `.preloaded`.
4. When the user subsequently clicked the "Ex 6.2" tab, the tab-switch handler saved the current active exercise (Ex 6.1, which was just wiped to `''` by `loadTemplate`) into `savedExerciseCode['l1-s6-1']`, overwriting the cached submission with empty strings.
5. Exercises 6.2, 6.3, 6.4 were not active when `loadTemplate` ran, so their entries in `savedExerciseCode` remained intact from the login fetch and restored properly on tab click.

### Fix
- **`src/App.jsx` — `loadTemplate()`**: Updated all session initializers (`l1-s1` through `l1-s12` and `l2-s1` through `l2-s13`) to hydrate Exercise 1 inputs from `savedExerciseCode[`${session.id}-1`]` instead of setting them to empty strings or raw defaults.
- **`src/App.jsx` — `saveExerciseSubmission()`**: Added `setSavedExerciseCode(prev => ({ ...prev, [\`${sessionId}-\${exerciseNum}\`]: fields }))` so the in-memory cache is immediately in sync with the backend save.

---

## [2026-08-13] Fix: L1S6 Arrow Key / Live Preview broken

### Problem
ArrowLeft (and all arrows) had no visible effect in the JS sandbox Live Preview for L1S6 exercises.

### Root Causes
1. **Harness declared var carX / var speed as plain variables** — writing `carX -= 5` updated the variable but never moved `#player-car` in the DOM.
2. **AI-generated code re-declared let carX = 165** — inside the same script scope this creates a block-scoped shadow that hides the harness global.
3. **AI used document.addEventListener** instead of `window.addEventListener` — less reliable inside sandbox iframes.

### Fix
- **`src/App.jsx` — `buildJsSandboxPreview()`**:
  - Added JS-level pre-cleaning: strips `let/const/var carX` and `let/const/var speed` re-declarations from student code before injecting into the template (regex in `cleanedCode`).
  - Replaced bare `var carX = 165` with `Object.defineProperty(window, 'carX', { get/set })` — the setter automatically updates `#player-car` `style.left` on every write.
  - Replaced bare `var speed = 0` with `Object.defineProperty(window, 'speed', { get/set })` — the setter automatically updates `#speed-val` textContent on every write.
  - Injected `${cleanedCode}` into the `<script>` tag.
- **`server.cjs` — `generateCodeWithAI()`**:
  - Hardened system prompt: pure JS only (no HTML/CSS), never re-declare `carX`/`speed`, use `window.addEventListener`, assume DOM elements exist.
