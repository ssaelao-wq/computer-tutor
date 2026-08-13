
## [2026-08-13] Fix: L1S6 Arrow Key / Live Preview broken

### Problem
ArrowLeft (and all arrows) had no visible effect in the JS sandbox Live Preview for L1S6 exercises.

### Root Causes
1. **Harness declared ar carX/ar speed as plain variables** — writing carX -= 5 updated the variable but never moved #player-car in the DOM.
2. **AI-generated code re-declared let carX = 165** — inside the same script scope this creates a block-scoped shadow that hides the harness global (or causes a conflict in strict mode).
3. **AI used document.addEventListener** instead of window.addEventListener — less reliable inside sandbox iframes.

### Fix
**src/App.jsx — uildJsSandboxPreview():**
- Added JS-level pre-cleaning: strips let/const/var carX and let/const/var speed re-declarations from student code before injecting into the template (regex in cleanedCode).
- Replaced bare ar carX = 165 with Object.defineProperty(window, 'carX', { get/set }) — the setter automatically updates #player-car style.left on every write.
- Replaced bare ar speed = 0 with Object.defineProperty(window, 'speed', { get/set }) — the setter automatically updates #speed-val textContent on every write.
- Injected \ (not \) into the <script> tag.

**server.cjs — generateCodeWithAI() system prompt:**
- Added explicit rules: pure JS only (no HTML/CSS), never re-declare carX/speed, use window.addEventListener, assume DOM elements exist.
