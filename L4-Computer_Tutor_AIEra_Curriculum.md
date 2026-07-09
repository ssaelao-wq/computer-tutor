## 8. Level 4: Engineering — "The Software Engineer"

**Goal:** Apply professional software engineering practices. Master automated testing, real-time systems, performance optimization, CI/CD pipelines, monitoring, and product launch — skills that differentiate a hobbyist from a professional engineer.

**Prerequisites:** Level 3 completion. Comfortable with client-server architecture, database modeling, API design, and security fundamentals.

**Game/Project:** Students build a **"Mission Control Dashboard"** — a real-time collaborative monitoring dashboard where multiple users can view live sensor data streams, manage alert thresholds, and coordinate response actions. Think of it as a simplified NASA Mission Control or a DevOps monitoring dashboard.

### Module 1: Engineering Foundations & Testing (Sessions 1–3)

#### Session 1: "Product Requirements & Architecture Blueprints" (2 hours)

**Learning Objectives:**
- Write testable specifications using a Product Requirements Document (PRD) framework
- Create components maps and data flow blueprints using system architecture diagrams
- Translate user requirements into absolute logical system constraints

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Reverse Engineering — User Journey Mapping (15 mins)**
   - *Activity*: The tutor opens a mock Mission Control Dashboard.
   - *Action*: The student maps out every action button and traces where inputs propagate (e.g. click alert threshold slider ➔ state changes ➔ UI updates).
   - *Debrief*: Highlight that professional software engineering begins by deconstructing systems from a user perspective.
2. **Core Concept Board Lesson: System Blueprints & PRDs (20 mins)**
   - *Topic 1*: PRD framework: User Stories ("As a... I want to... So that...").
   - *Topic 2*: Defining system inputs, processing pipelines, and outputs.
   - *Topic 3*: Component diagrams: decoupling frontend client, backend api, and database resources.
3. **Design Phase: Designing Dashboard Specifications (20 mins)**
   - *Activity*: Write user stories for the Mission Control Dashboard (e.g. threshold configurations, telemetry stream viewing).
   - *Action*: Draft testable system constraints (e.g. "Sensor values must be parsed to 1 decimal place").
4. **Build Phase (AI Assisted): Generating Architecture (35 mins)**
   - *Action*: Prompt AI to generate a Mermaid component architecture diagram showing data flow between client, server, and telemetry stream.
   - *Audit*: Audit components. Explain component coupling in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Ambiguous Spec (15 mins)**
   - *Activity*: Tutor gives a requirement: "The alert system should be very fast."
   - *Challenge*: Student debugs the ambiguity and rewrites it as a precise, testable constraint.
   - *Socratic Question*: *"Why is 'very fast' a bad specification? How does a computer evaluate 'very fast'? How do we write it as a logical constraint?"*
6. **Ethics: Clear Specifications in Critical Software (15 mins)**
   - *Topic*: Building systems without clear requirements.
   - *Real-World Case*: The Healthcare.gov launch disaster (2013) failed on day one because hundreds of contractors built systems without clear, centralized requirements.
   - *Discussion*: *"Why is a software spec a contract of logical truth? What happens when developers make assumptions?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 1 Homework", write 3 testable user stories with explicit preconditions and acceptance criteria for a SpaceX Falcon 9 telemetry monitor (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 1)
- **Exercise 1.1 (Mermaid Architecture) Solution**:
  ```mermaid
  graph TD
    Client[Dashboard UI] <-->|WebSocket| Server[Alert API Server]
    Server <-->|SQL| DB[(Database)]
    Telemetry[Mock Sensors] -->|REST POST| Server
  ```
- **Homework Evaluation**: Ensure student specifies: User role, Action description, Acceptance criteria with measurable thresholds (e.g. "Response within 200ms").

---

#### Session 2: "Automated Testing: Unit Tests & Test-Driven Development" (2 hours)

**Learning Objectives:**
- Understand unit testing mechanics and test runners
- Write test cases checking utility functions against boundary values
- Apply Test-Driven Development (TDD) cycle (Red-Green-Refactor)

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Manual Test Scenarios (15 mins)**
   - *Activity*: Student manually reviews a coordinate validator function to spot bugs.
   - *Debrief*: Show that manual testing is slow and prone to human oversight.
2. **Core Concept Board Lesson: The Test Runner Lifecycle (20 mins)**
   - *Topic 1*: Test Suites (`describe`), Test Cases (`test`), and Assertions (`expect`).
   - *Topic 2*: Test-Driven Development: Write test ➔ Fail (Red) ➔ Write code ➔ Pass (Green) ➔ Refactor.
   - *Topic 3*: Boundary testing (testing limits like empty strings, negative coordinates).
3. **Design Phase: Test Case Specifications (20 mins)**
   - *Activity*: Plan test inputs and expected outputs for an alert validator utility function.
   - *Action*: Draft test case values including edge parameters.
4. **Build Phase (AI Assisted): Coding the Test Suite (35 mins)**
   - *Action*: Prompt AI to generate a unit test file using Vitest syntax for the validator.
   - *Audit*: Audit test assertions. Verify that Vitest catches simulated edge failures (+100 XP).
5. **Socratic Debugging: The Ghost Green Bug (15 mins)**
   - *Activity*: Tutor seeds a bug where the test runner mocks return true blindly, causing tests to pass even when logic is broken.
   - *Challenge*: Correct test mocks to ensure tests fail on invalid inputs.
   - *Socratic Question*: *"Why did our test suite pass when the function output was completely wrong? How do we test that our tests are actually testing?"*
6. **Ethics: Testing Failure Liabilities (15 mins)**
   - *Topic*: Software testing failures.
   - *Real-World Case*: The Therac-25 radiation therapy machine (1985) killed multiple patients because of a race condition bug that was never caught in unit testing.
   - *Discussion*: *"If our tests do not cover boundary cases, are we responsible for the failures of the live system? How does TDD help us write safer code?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 2 Homework", write a Vitest script containing 3 assertions checking if an average sensor reading calculation clamps outputs correctly (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 2)
- **Exercise 2.1 (Unit Test Suite) Solution**:
  ```javascript
  import { describe, test, expect } from "vitest";
  import { classifyAlert } from "./alerts.js";

  describe("classifyAlert", () => {
    test("returns CRITICAL when reading crosses max limit", () => {
      expect(classifyAlert(120, 100)).toBe("CRITICAL");
    });
    test("returns OK when reading is within limits", () => {
      expect(classifyAlert(80, 100)).toBe("OK");
    });
    test("throws error on negative values", () => {
      expect(() => classifyAlert(-5, 100)).toThrow();
    });
  });
  ```
- **Homework Evaluation**: Ensure the script maps correct assertion properties (`expect().toBe()`, `expect().toThrow()`).

---

#### Session 3: "Integration Testing & Test Coverage" (2 hours)

**Learning Objectives:**
- Write integration tests capturing network request roundtrips
- Mock external service calls using HTTP interception
- Measure and analyze code coverage percentages

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: API Response Mapping (15 mins)**
   - *Activity*: Match standard API status codes (200, 400, 500) to client UI alert states.
2. **Core Concept Board Lesson: Mocking APIs & Coverage (20 mins)**
   - *Topic 1*: Unit vs Integration testing: testing how components interact.
   - *Topic 2*: API Mocking: Intercepting network fetches to return controlled payloads.
   - *Topic 3*: Code coverage: Statement, branch, and function metrics.
3. **Design Phase: Integration Test Blueprint (20 mins)**
   - *Activity*: Outline test flows: Trigger fetch ➔ receive mocked response ➔ verify DOM changes.
   - *Action*: Write API endpoints request/response mocks mockups.
4. **Build Phase (AI Assisted): Coding Integration Tests (35 mins)**
   - *Action*: Prompt AI to write integration tests checking that the dashboard correctly renders critical states on API errors.
   - *Audit*: Audit coverage reports. Verify that 100% of branch scenarios are tested in the Prompt Journal (+100 XP).
5. **Socratic Debugging: Stale Mocks (15 mins)**
   - *Activity*: Tutor seeds a mock return payload that uses a deprecated JSON schema, causing tests to pass while breaking the actual dashboard build.
   - *Challenge*: Identify the mismatch between mock schemas and live interfaces.
   - *Socratic Question*: *"Why did the test suite report green when the actual UI breaks on load? How do we ensure our mocks stay synchronized with reality?"*
6. **Ethics: Testing Gates in Deployments (15 mins)**
   - *Topic*: Code testing automation.
   - *Real-World Case*: Knight Capital Group (2012) lost $440 million in 45 minutes because they deployed untested legacy software to their production trading servers.
   - *Discussion*: *"Why should merge events be blocked until test pipelines pass? Who is liable when untested systems deploy?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 3 Homework", write an integration test mocking a POST request to update configurations and checking client state updates (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 3)
- **Exercise 3.1 (Mocked API Test) Solution**:
  ```javascript
  import { test, expect, vi } from "vitest";
  import { fetchDashboardData } from "./api.js";

  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ sensorStatus: "ACTIVE", alertsCount: 0 })
    })
  );

  test("fetches and returns dashboard payload", async () => {
    const data = await fetchDashboardData();
    expect(data.sensorStatus).toBe("ACTIVE");
    expect(fetch).toHaveBeenCalledWith("/api/status");
  });
  ```
- **Homework Evaluation**: Ensure the mocked fetch includes exception scenarios (like returning status 500) and checking handler states.

---

### Module 2: Real-Time Systems & Performance (Sessions 4–6)

#### Session 4: "Real-Time Data Streams: WebSockets & Live Updates" (2 hours)

**Learning Objectives:**
- Understand WebSockets protocols vs HTTP request dynamics
- Establish and connect to live persistent WebSocket server instances
- Parse real-time stream frames to update UI layouts

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Reverse Engineering — WebSockets Traffic (15 mins)**
   - *Activity*: The tutor opens a live dashboard app. The student opens browser DevTools Network tab and selects WS/WebSockets.
   - *Action*: The student monitors frame logs, identifying incoming messages keys and timestamp increments.
   - *Debrief*: Show how WebSockets keep data channels open continuously without repeating connections overhead.
2. **Core Concept Board Lesson: The WebSockets Pipeline (20 mins)**
   - *Topic 1*: Handshake, frames, and persistent TCP channels.
   - *Topic 2*: Client WebSocket API: `new WebSocket()`, listener hooks (`onmessage`, `onerror`, `onclose`).
   - *Topic 3*: Real-time updates pipelines compared to HTTP polling structures.
3. **Design Phase: Stream State Blueprint (20 mins)**
   - *Activity*: Design client UI states representing WebSocket connections statuses (Connected, Offline, Reconnecting).
   - *Action*: Draft state variables tracking socket statuses.
4. **Build Phase (AI Assisted): Connecting the Stream (35 mins)**
   - *Action*: Prompt AI to build the client-side WebSocket controller connecting to the test telemetry server.
   - *Audit*: Audit socket handlers. Explain frame parsing logic to the tutor in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Frozen Client (15 mins)**
   - *Activity*: Tutor disconnects the WebSocket stream server, but the UI keeps displaying the last frame data without updating status indicators.
   - *Challenge*: Implement fallback timeout handlers to report connection drops.
   - *Socratic Question*: *"Why does the dashboard look active when data stopped flowing? How do we detect that a server went silent if there is no disconnect event?"*
6. **Ethics: Flash Crashes in Real-time Telemetry (15 mins)**
   - *Topic*: System latency vulnerabilities.
   - *Real-World Case*: The stock market Flash Crash (2010) was accelerated by high-frequency trading algorithms feeding on delayed real-time feed signals, causing a trillion-dollar drop in minutes.
   - *Discussion*: *"When designing alerts streams, why is latency transparency a safety requirement? What happens if users base actions on stale info?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 4 Homework", write a JS WebSocket connection wrapper implementing exponential backoff (retrying connections with growing delay on drops) (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 4)
- **Exercise 4.1 (WebSocket Connection) Solution**:
  ```javascript
  const socket = new WebSocket("ws://localhost:8080/stream");
  socket.onmessage = (event) => {
    const payload = JSON.parse(event.data);
    updateDashboardUI(payload);
  };
  socket.onclose = () => {
    console.warn("Connection lost. Toggling offline overlay...");
    toggleOfflineIndicator(true);
  };
  ```
- **Homework Evaluation**: Ensure the backoff logic increments timeout intervals: `setTimeout(connect, retryCount * 1000)`.

---

#### Session 5: "State Management & Data Synchronization" (2 hours)

**Learning Objectives:**
- Manage application state updates across client elements
- Apply optimistic updates updates patterns to improve UI experience
- Resolve concurrent editing conflicts using versioning or overwrite locks

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Shared State Tracing (15 mins)**
   - *Activity*: Trace variables states when two users update user names concurrently on a board.
   - *Debrief*: Show how parallel requests can result in lost updates without synchronization checks.
2. **Core Concept Board Lesson: State Stores & Synchronization (20 mins)**
   - *Topic 1*: Single source of truth (state store) vs fragmented component states.
   - *Topic 2*: Optimistic updates: Updating UI immediately, rolling back on server reject.
   - *Topic 3*: Conflict resolution strategies (last-write-wins, version matching).
3. **Design Phase: State Update Flowchart (20 mins)**
   - *Activity*: Sketch the optimistic updates flow representing slider updates: Click ➔ draw new slider state ➔ POST ➔ verify/rollback state.
   - *Action*: Draft state interfaces schema.
4. **Build Phase (AI Assisted): State Controller Assembly (35 mins)**
   - *Action*: Prompt AI to write state updates controllers with rollbacks on request failure.
   - *Audit*: Audit variables assignments. Verify rollback handlers revert states in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Overwritten Update (15 mins)**
   - *Activity*: Tutor edits code to trigger updates concurrently. User A edits config, but User B's older request arrives late and overwrites it.
   - *Challenge*: Student applies version checks to reject stale update payloads.
   - *Socratic Question*: *"Why did User A's edit get deleted? Trace the timestamps of queries. How do we ignore requests that represent older state?"*
6. **Ethics: Cascading State Failures (15 mins)**
   - *Topic*: System dependencies failure.
   - *Real-World Case*: The Amazon S3 outage (2017) was caused by a simple command typo that triggered cascading state synchronicity failures across dependent databases.
   - *Discussion*: *"If one service fails, how do we design our app state to degrade gracefully instead of throwing white screens? What is defensive UI design?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 5 Homework", write a JS function implementing optimistic UI update logic for a sensor mute button, reversing changes on request reject (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 5)
- **Exercise 5.1 (Optimistic Update) Solution**:
  ```javascript
  let alertState = "MUTED";
  const oldState = alertState;
  
  function setAlertMuted(status) {
    alertState = status; // optimistic render
    renderAlertUI();
    
    fetch("/api/mute", {
      method: "POST",
      body: JSON.stringify({ status })
    }).catch(() => {
      alertState = oldState; // rollback
      renderAlertUI();
      showNotification("Update failed. Reverting...");
    });
  }
  ```
- **Homework Evaluation**: Student's solution must capture the previous state and apply a `.catch` wrapper restoring variables on exceptions.

---

#### Session 6: "Performance Optimization & Lighthouse Audits" (2 hours)

**Learning Objectives:**
- Audit page load performance using browser Lighthouse engines
- Implement lazy loading and code optimization (pagination, chunking)
- Measure First Input Delay (FID), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS)

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Performance Bottlenecks Profiling (15 mins)**
   - *Activity*: Student compares a slow loading dashboard with an optimized one, checking network request size logs.
2. **Core Concept Board Lesson: Page Performance Metrics (20 mins)**
   - *Topic 1*: Lighthouse metrics (LCP, FID, CLS).
   - *Topic 2*: Virtual scrolling and paginating data streams to maintain DOM sizes.
   - *Topic 3*: Image asset optimization and file minifications.
3. **Design Phase: Optimization Strategy (20 mins)**
   - *Activity*: Define performance milestones (e.g. LCP under 2.5s, CLS under 0.1).
   - *Action*: Draft optimization checkpoints checklist.
4. **Build Phase (AI Assisted): Code Splitting & Caching (35 mins)**
   - *Action*: Prompt AI to implement lazy loading on the widgets layout code bundle.
   - *Audit*: Audit bundle footprint. Explain performance profiles to the tutor in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Giant Payload Freezes (15 mins)**
   - *Activity*: Tutor injects a 10MB mock database payload into the log feed panel, causing the browser tab to freeze.
   - *Challenge*: Student refactors the feed to paginate records and use virtual scrolling.
   - *Socratic Question*: *"Why does rendering 10,000 log elements crash the tab? How does paginating database outputs resolve DOM bottleneck loads?"*
6. **Ethics: Accessibility & Digital Divide (15 mins)**
   - *Topic*: Digital access equity.
   - *Real-World Case*: Slow, heavy web applications exclude users on low-end smartphones or poor connection speeds, widening the digital access divide in developing regions.
   - *Discussion*: *"Why is performance optimization not just a speed check, but an inclusivity requirement? How do we build for everyone?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 6 Homework", write a plan describing 3 actions to optimize LCP and CLS scores for a dashboard containing sensor feeds (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 6)
- **Exercise 6.1 (Data Pagination) Solution**:
  ```javascript
  let currentPage = 1;
  const pageSize = 50;
  
  async function fetchLogsPage(page) {
    const res = await fetch(`/api/logs?page=${page}&limit=${pageSize}`);
    const data = await res.json();
    appendLogsToUI(data.logs);
  }
  ```
- **Homework Evaluation**: Ensure student outlines measurable actions (e.g. setting explicit dimensions for widgets to reduce layout shifts, lazy-loading widgets).

---

### Module 3: DevOps & Production Engineering (Sessions 7–9)

#### Session 7: "CI/CD Pipelines: Automated Build, Test, Deploy" (2 hours)

**Learning Objectives:**
- Understand Continuous Integration / Continuous Deployment (CI/CD) pipelines
- Write YAML scripts defining automated build pipelines
- Configure automated test runners that block code merges on test failures

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: YAML Mapping (15 mins)**
   - *Activity*: Match pipeline commands combinations to their target environments (Staging vs Production).
2. **Core Concept Board Lesson: Deployment Pipelines (20 mins)**
   - *Topic 1*: Automated pipelines. Commit triggers ➔ Build ➔ Test ➔ Deploy.
   - *Topic 2*: YAML syntax structures (stages, steps, jobs, env keys).
   - *Topic 3*: Deploy gates: Blocking production builds if tests return error exit codes.
3. **Design Phase: Pipeline Flow Diagram (20 mins)**
   - *Activity*: Sketch the pipelines steps flow: Push ➔ run Vitest tests ➔ run NPM build ➔ deploy staging.
   - *Action*: Draft YAML properties configurations.
4. **Build Phase (AI Assisted): Coding the CI/CD Pipeline (35 mins)**
   - *Action*: Prompt AI to generate a GitHub Actions workflow pipeline file (`.github/workflows/deploy.yml`).
   - *Audit*: Audit YAML keys. Explain environment variables mapping in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Broken Pipeline (15 mins)**
   - *Activity*: Tutor introduces a syntax error or a failing test command in the pipeline script, causing the automated staging build to fail.
   - *Challenge*: Review logs output to locate the pipeline syntax error and fix it.
   - *Socratic Question*: *"Why did our code fail to deploy? Where did the pipeline stop? How do logs trace compiler issues?"*
6. **Ethics: Automated Gates in Systems Deployments (15 mins)**
   - *Topic*: DevOps safeguards.
   - *Real-World Case*: GitLab (2017) suffered an extended outage when a developer accidentally deleted a production database directory because environment safeguards and automated backups were bypassable.
   - *Discussion*: *"Why should system critical changes require automated tests checks before authorization? How does automation protect human developers?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 7 Homework", write a YAML workflow fragment running ESLint checks and unit tests sequentially on pull requests (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 7)
- **Exercise 7.1 (GitHub Actions YAML) Solution**:
  ```yaml
  name: CI Pipeline
  on: [push]
  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Install dependencies
          run: npm install
        - name: Run Tests
          run: npm run test
  ```
- **Homework Evaluation**: Ensure the YAML correctly parses indentation structures and includes valid stage sequences triggers.

---

#### Session 8: "Monitoring, Logging & Alerting in Production" (2 hours)

**Learning Objectives:**
- Implement structured server logging using JSON log templates
- Create production alert logs that monitor server uptime
- Analyze system performance logs to debug runtime exceptions

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Stack Trace Audit (15 mins)**
   - *Activity*: Locate the file path and variables causing a crash given a server stack trace record.
2. **Core Concept Board Lesson: Structured Logs & Metrics (20 mins)**
   - *Topic 1*: Structured logging (JSON format) vs raw console print statements.
   - *Topic 2*: Log levels (DEBUG, INFO, WARN, ERROR) and log aggregators.
   - *Topic 3*: Alert fatigue: defining alert thresholds (e.g. alert only on repeated 500 status codes).
3. **Design Phase: Logging Blueprint (20 mins)**
   - *Activity*: Design a structured log schema containing execution context details (timestamp, level, endpoint, userId).
   - *Action*: Draft payload specifications.
4. **Build Phase (AI Assisted): Coding the Logger (35 mins)**
   - *Action*: Prompt AI to write a middleware logger formatting runtime errors into structured JSON entries.
   - *Audit*: Audit error logs outputs. Student explains exception handling to the tutor in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Silent Fail (15 mins)**
   - *Activity*: Tutor introduces a database connection timeout bug. The server returns 500 status to clients, but leaves zero logs in stdout, making debugging impossible.
   - *Challenge*: Wrap the database catch blocks with proper logger execution calls.
   - *Socratic Question*: *"Why is the server crashing silently? If clients get error pages but our logs show nothing, how do we find the issue? How does log visibility affect debugging?"*
6. **Ethics: Sensor Failures & Uptime Alerts (15 mins)**
   - *Topic*: Safety warning systems failures.
   - *Real-World Case*: The Boeing 737 MAX crashes (2018-2019) were partially caused by a lack of cockpit alert transparency on faulty sensor feeds, preventing pilots from identifying malfunctioning autopilot overrides.
   - *Discussion*: *"When software monitor systems fail to report failures, what are the human costs? Why is logging accuracy a safety parameter?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 8 Homework", write a JS error handler middleware logging the error stack trace, timestamp, and client ip address in JSON format (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 8)
- **Exercise 8.1 (Structured Logger Middleware) Solution**:
  ```javascript
  app.use((err, req, res, next) => {
    const errorLog = {
      timestamp: new Date().toISOString(),
      level: "ERROR",
      message: err.message,
      path: req.path,
      ip: req.ip
    };
    console.log(JSON.stringify(errorLog)); // structured stdout log
    res.status(500).json({ error: "Internal Server Error" });
  });
  ```
- **Homework Evaluation**: Output must be stringified JSON with key tags representing timestamp, levels, message, and target paths.

---

#### Session 9: "Feature Flags & Controlled Rollouts" (2 hours)

**Learning Objectives:**
- Understand feature flag design patterns and controlled rollouts
- Code feature toggle gates restricting client assets dynamically
- Plan canary rollouts based on user ID partitions

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Rollout Ratio Math (15 mins)**
   - *Activity*: Calculate user population percentages mapped to distinct feature versions.
2. **Core Concept Board Lesson: Feature Gating & Canary Releases (20 mins)**
   - *Topic 1*: Feature flags: decoupling deployment from code activation.
   - *Topic 2*: Canary releases: rolling out updates to a small cohort (e.g. 5% of users) first.
   - *Topic 3*: Designing remote flag configs fetching scripts.
3. **Design Phase: Feature Flags Schema (20 mins)**
   - *Activity*: Map configurations schemas for feature flags (e.g. `{ "advanced-widget": { "enabled": true, "users": [12, 45] } }`).
   - *Action*: Draft JSON flag spec structures.
4. **Build Phase (AI Assisted): Feature Gater (35 mins)**
   - *Action*: Prompt AI to build feature flag toggles that wrap dashboard component render logic.
   - *Audit*: Audit flag gates logic. Verify flag evaluations function in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Flagged Crash (15 mins)**
   - *Activity*: Tutor turns on a feature flag that renders a half-built widget. The dashboard crashes immediately on load for flagged users, while working fine for others.
   - *Challenge*: Wrap the flagged component rendering in a safe try/catch wrapper (Error Boundary) to isolate crashes.
   - *Socratic Question*: *"Why did the entire application crash when only one widget failed? How do feature flags increase our need for component-level isolation?"*
6. **Ethics: A/B Testing Boundaries (15 mins)**
   - *Topic*: Ethical thresholds in user experimentation.
   - *Real-World Case*: Facebook (2014) conducted mood manipulation experiments on 700,000 users by using feature flags to adjust positive/negative content ratios in news feeds without explicit consent.
   - *Discussion*: *"What are the ethical limits of user experimentation? Should users be allowed to opt out of A/B rollouts?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 9 Homework", write a JS function checking if a user ID falls into a 10% canary cohort using modulo hashing math (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 9)
- **Exercise 9.1 (Canary Modulo Gate) Solution**:
  ```javascript
  const userFlags = {
    "live-alerts-widget": false,
    "dark-mode-feature": true
  };
  
  function checkFeatureFlag(userId, flagName) {
    if (flagName === "live-alerts-widget") {
      // 10% Canary: check if userId ends in 3
      return userId % 10 === 3;
    }
    return userFlags[flagName] || false;
  }
  ```
- **Homework Evaluation**: Ensure mod operations (`%`) map targets consistently and resolve Boolean flags conditions.

---

### Module 4: Product Launch & Defense (Sessions 10–12)

#### Session 10: "Documentation, API Specs & Developer Handoff" (2 hours)

**Learning Objectives:**
- Write comprehensive software installation manuals (README files)
- Design API specs using OpenAPI/Swagger guidelines
- Write Architectural Decision Records (ADRs) justifying layout and stack selections

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Setup Guide Audit (15 mins)**
   - *Activity*: Attempt to follow a mock setup guide with missing steps. Identify where it breaks.
2. **Core Concept Board Lesson: The Handoff Lifecycle (20 mins)**
   - *Topic 1*: Clean documentation: installation steps, prerequisites, environment setup.
   - *Topic 2*: OpenAPI specifications: defining paths, parameters, schemas, and responses.
   - *Topic 3*: Architectural Decision Records: Documenting why a technology was chosen.
3. **Design Phase: Handoff Checklist Blueprint (20 mins)**
   - *Activity*: Design the layout of the project README. List all environment variables that must be configured.
   - *Action*: Draft ADR templates.
4. **Build Phase (AI Assisted): Generating Specifications (35 mins)**
   - *Action*: Prompt AI to generate OpenAPI configuration specs for the dashboard API routes.
   - *Audit*: Audit spec keys. Explain path parameters constraints in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Missing Setup (15 mins)**
   - *Activity*: Tutor follows the student's setup guide on a clean workspace. The setup crashes because database migration instructions were omitted.
   - *Challenge*: Rewrite documentation to detail database setup step-by-step.
   - *Socratic Question*: *"Why did the installation fail on the tutor's machine? What setup preconditions did we assume that were not explicit in our documentation?"*
6. **Ethics: Open Source Security & Auditing (15 mins)**
   - *Topic*: Security auditing constraints.
   - *Real-World Case*: The Heartbleed vulnerability (2014) existed in OpenSSL code because it was maintained by a tiny open-source team whose code updates were never properly documented or audited by users.
   - *Discussion*: *"How does clean documentation help security audits? What is our responsibility to developers who build on our code?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 10 Homework", write a standard Architectural Decision Record explaining why the team chose WebSockets over long polling for real-time monitoring (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 10)
- **Exercise 10.1 (Swagger API Spec sample) Solution**:
  ```yaml
  paths:
    /api/alerts:
      get:
        summary: Returns active telemetry alerts
        responses:
          '200':
            description: Success
            content:
              application/json:
                schema:
                  type: array
                  items:
                    $ref: '#/components/schemas/Alert'
  ```
- **Homework Evaluation**: Ensure the ADR contains: Status, Context, Decision, Consequences fields.

---

#### Session 11: "User Acceptance Testing & Beta Launch" (2 hours)

**Learning Objectives:**
- Plan User Acceptance Testing (UAT) checklists
- Triage code issues using a priority/severity matrix
- Perform defensive checks protecting systems from garbage user inputs

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Bug Triage Scenario (15 mins)**
   - *Activity*: Classify 3 bugs (e.g. typos, server crashes, display errors) into priority levels.
2. **Core Concept Board Lesson: UAT & Triage (20 mins)**
   - *Topic 1*: User Acceptance Testing: verifying the app meets all business requirements.
   - *Topic 2*: Triage matrices: separating bugs by Severity (Blocker, Major, Minor) and Priority.
   - *Topic 3*: Sanitizing inputs: protecting input fields from injection payloads.
3. **Design Phase: UAT Matrix Blueprint (20 mins)**
   - *Activity*: Create a UAT checklist checking authentication, threshold configs, and alerts streams.
   - *Action*: Draft test script scenarios.
4. **Build Phase (AI Assisted): Sanitizing Inputs (35 mins)**
   - *Action*: Prompt AI to add input validation logic blocking garbage characters on alert name updates.
   - *Audit*: Audit sanitizer routines. Explain input checks to the tutor in the Prompt Journal (+100 XP).
5. **Socratic Debugging: The Hostile QA User (15 mins)**
   - *Activity*: Tutor acts as a hostile beta user and inputs extreme data (e.g. alert threshold of $10^{50}$ or special Unicode symbols) that crashes the rendering engine.
   - *Challenge*: Update data parsing checks to handle numeric extremes and invalid text formats.
   - *Socratic Question*: *"Why did the UI collapse when we input a huge number? What parsing bounds checks should we add to protect the layout?"*
6. **Ethics: Launch Pacing & Load Thresholds (15 mins)**
   - *Topic*: Launch management under load.
   - *Real-World Case*: The Pokemon Go launch (2016) crashed globally on day one because servers were overwhelmed by user volumes 50 times larger than the engineering team's target load thresholds.
   - *Discussion*: *"Why is load testing a critical launch step? How do we balance developer launch deadlines against system stability?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 11 Homework", write a JS function sanitizing user-submitted strings to strip out potential HTML tag characters (+50 XP).

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 11)
- **Exercise 11.1 (Sanitizer script) Solution**:
  ```javascript
  function sanitizeInput(inputStr) {
    if (typeof inputStr !== "string") return "";
    // Strip tag symbols
    return inputStr.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  ```
- **Homework Evaluation**: Ensure function checks types, sanitizes special characters, and clamps input length.

---

#### Session 12: "The Grand Launch & System Defense" (2 hours)

**Learning Objectives:**
- Present a real-time collaborative system design to a technical panel
- Demonstrate automated pipelines and test coverage structures
- Defend system architecture against live failure simulation tests (Chaos Monkey testing)

**In-Session Assessment Timeline (2 hours):**
1. **Part 1: The Product Pitch (45 mins)**
   - The student presents their live Mission Control Dashboard in production.
   - Walk through the user journey, configuration updates, and real-time alerts.
   - Explain how component interfaces and specifications guided development.
2. **Part 2: Architectural Tour (45 mins)**
   - Walk through the codebase with the tutor. Show the test suite coverage profiles.
   - Demonstrate the CI/CD pipeline logs showing automatic test gates.
   - Walk through production logs and the feature flag configurations panel.
3. **Part 3: Live System Defense (20 mins)**
   - The tutor acts as the "Chaos Monkey," triggering live system failures (e.g., stopping the WebSocket stream server, sending garbage data, toggling unstable feature flags).
   - The student defends their system by showing how client state handles disconnects, inputs sanitizers block errors, and error boundaries isolate crashes.
4. **Part 4: Retrospective & Graduation (10 mins)**
   - Grade student performance using the rubric. Present the Level 4 Software Engineering certificate.

**Level 4 Assessment Rubric**

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Test Engineering** (25%) | Test coverage is above 85%; test cases cover all boundary conditions; TDD principles are applied. | Good test coverage (70-85%); minor gaps in edge case coverage. | Basic tests written but coverage is low (<70%); lacks boundary validations. | No unit or integration tests written. |
| **System Reliability** (25%) | WebSockets handle connection drops gracefully with reconnection fallback; states roll back on sync failure; inputs sanitizers block all exploits. | Live updates work, but connection status alerts have latency or minor synchronization overlaps. | UI freezes on server disconnects; lacks rollback checks. | App crashes under basic inputs or network drops. |
| **DevOps Maturity** (20%) | GitHub Actions CI/CD automatically runs tests and gates builds; structured logging captures errors; feature flags toggle components cleanly. | Pipeline works, but is bypassable; error logs lack context keys. | Manual deployments only; feature flags omitted. | Code base lacks pipelines or structured logs. |
| **Independent Defense** (30%) | Presenter answers technical architecture and failure questions with clarity; explains design decisions using ADR logs. | Solid presentation; struggles on deep optimization or concurrency questions. | Presenter does not understand how parts of their app sync. | Cannot explain or defend system design decisions. |

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 12 Homework", submit a retrospective summary: "My Journey from Syntax Writer to System Architect. What did I learn about engineering safety?" (+100 XP).

#### 📖 Tutor Manual: Assessment Solutions (Session 12)
- **Part 1 (UAT Verification)**: Verify dashboard live updates update in real-time.
- **Part 2 (Architecture Audit)**: Verify Vitest coverage is visible and CI/CD pipelines compile.
- **Part 3 (Chaos Defense)**: Run the following Chaos Tests:
  1. Trigger WebSocket disconnect: UI must change status indicator to Offline.
  2. Input long string: Input fields must strip tags or limit characters length.
  3. Turn on unstable feature flag: Widget must show error boundary instead of crashing.
- **Take-Home Evaluation**: Verify student submitted their final retrospective logs.


