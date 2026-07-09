## 7. Level 3: Advanced — "Cyberpunk Hacker Arena"

**Goal:** Master client-server communication, database schemas, environment security, and authorization rules by building a persistent hacking console and deck battler that interfaces securely with a cloud database.

**Prerequisites:** Level 2 completion.

### Module 1: Relational Databases & Hacking Sign-Ups (Sessions 1–4)

#### Session 1: "Where Does Data Live? Relational Database Schemas" (2 hours)

**Learning Objectives:**
- Explain client-server architecture dynamics and how data is separated from application code
- Define relational SQL database terms: Tables, Fields, Primary Keys, and Foreign Keys
- Model database schemas representing player decks, unlockable hacking tools, and transaction logs

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Relational Schema Match (15 mins)**
   - *Activity*: In-app diagramming tool. Connect tools to cards using primary and foreign key nodes.
2. **Core Concept Board Lesson: Relational Data Modeling (20 mins)**
   - *Topic 1*: Why local variables reset on page reload, necessitating a backend database.
   - *Topic 2*: Relational tables structures. One-to-Many and Many-to-Many relationships.
   - *Topic 3*: SQL field constraints (Unique, Not Null, Default).
3. **Design Phase: Arena DB Schema Blueprint (20 mins)**
   - *Activity*: Design tables for `players`, `hacking_tools` (id, name, speed_rating, cost), and `inventories` (player_id, tool_id).
   - *Action*: Draft schema tables on paper.
4. **Build Phase (AI Assisted): Generating DB Schemas (35 mins)**
   - *Action*: Prompt AI to generate SQL schemas tables for the project.
   - *Audit*: Audit schema keys. Explain table relationships in the Prompt Journal.
5. **Socratic Debugging: The Floating Record (15 mins)**
   - *Activity*: Tutor removes foreign key constraint rules on the `inventories` table. A player is deleted, but their inventory items remain stranded in the database.
   - *Socratic Question*: *"Why does the database still list tools for a player who no longer exists? What is the role of Foreign Key constraints and Cascade Deletes?"*
6. **Ethics: Data Privacy & Sensitivity Classification (15 mins)**
   - *Topic*: Sensitive information audit.
   - *Real-World Case*: The Equifax data breach (2017) exposed personal data of 147 million people because sensitive fields (Social Security numbers) were stored without adequate access controls or encryption.
   - *Discussion*: *"In our database, what fields are public (high scores) vs private (email, transaction logs)? How do we classify data before coding schemas?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 1 Homework", sketch a 3-table relational schema for a virtual card marketplace, indicating primary and foreign key references.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 1)
- **Exercise 1.1 (SQL Schema table) Solution**:
  ```sql
  CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  
  CREATE TABLE hacking_tools (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cost INT CHECK (cost >= 0)
  );
  ```
- **Homework Evaluation**: Ensure student connects child tables via foreign keys (e.g. `player_id INT REFERENCES players(id) ON DELETE CASCADE`).

---

#### Session 2: "User Authentication & Hacking Sign-Ups" (2 hours)

**Learning Objectives:**
- Understand authentication workflows, encryption, and password hashing concepts
- Build signup/login forms collecting username and password credentials
- Link forms to backend routers validating and storing credentials securely

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Password Hashing Trace (15 mins)**
   - *Activity*: Compare raw strings passwords with their hashed crypt equivalents.
2. **Core Concept Board Lesson: The Authentication Chain (20 mins)**
   - *Topic 1*: Why we never store passwords in plaintext (security liability).
   - *Topic 2*: Hashing algorithms (bcrypt, argon2) and salt parameters.
   - *Topic 3*: The login flow: comparing input hashes vs database records.
3. **Design Phase: Auth Routing Flow (20 mins)**
   - *Activity*: Draw a sequence flow representing signups requests: Form ➔ POST ➔ Hash ➔ Insert ➔ DB.
   - *Action*: Draft request payload requirements.
4. **Build Phase (AI Assisted): Coding Auth (35 mins)**
   - *Action*: Prompt AI to generate authentication routes and signup controller files.
   - *Audit*: Audit variables handling and encryption methods in the Prompt Journal.
5. **Socratic Debugging: The Plaintext Leak (15 mins)**
   - *Activity*: Tutor replaces the hash generation code with direct string insertion, writing plain passwords to database logs.
   - *Socratic Question*: *"Why is storing raw passwords a security risk? If hackers bypass server code and access tables directly, what happens?"*
6. **Ethics: User Credentials Exposure (15 mins)**
   - *Real-World Case*: In 2012, LinkedIn suffered a breach exposing 6.5 million password hashes — but because they used unsalted SHA-1 instead of bcrypt, most passwords were cracked within hours.
   - *Discussion*: *"If our company database is breached and plain passwords leak, how does it affect users who reuse passwords elsewhere?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 2 Homework", write a JS code snippet checking if a password string meets length bounds (min 8 characters) and hashing it.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 2)
- **Exercise 2.1 (Backend signup route) Solution**:
  ```javascript
  app.post("/signup", async (req, res) => {
    let { username, password } = req.body;
    if (password.length < 8) { return res.status(400).send("Too short"); }
    let hashedPassword = await bcrypt.hash(password, 10);
    await db.query("INSERT INTO players (username, password) VALUES ($1, $2)", [username, hashedPassword]);
    res.status(201).send("Registered");
  });
  ```
- **Homework Evaluation**: Ensure the code validates string inputs length and routes queries securely.

---

#### Session 3: "Access Security & Environment Variables" (2 hours)

**Learning Objectives:**
- Explain the security hazards of hardcoding API keys and database credentials in client code
- Use environment configuration files (`.env`) to isolate sensitive credentials
- Access environment parameters in backend code using configuration wrappers

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: API Keys Leak Audit (15 mins)**
   - *Activity*: Inspect a mock public GitHub repo to locate hidden API keys and database links.
2. **Core Concept Board Lesson: Credentials Containment (20 mins)**
   - *Topic 1*: Why client-side code is public: how devtools reveal keys.
   - *Topic 2*: Environment configuration files (`.env`) and `.gitignore` safety rules.
   - *Topic 3*: Accessing system environment variables (`process.env.DB_PASSWORD`).
3. **Design Phase: Credentials Shielding Blueprint (20 mins)**
   - *Activity*: Plan which keys (database URL, JWT secrets) must be moved off-code.
   - *Action*: Draft environment variable keys templates.
4. **Build Phase (AI Assisted): Environment Setup (35 mins)**
   - *Action*: Prompt AI to extract hardcoded credentials into a `.env` file and integrate configuration wrappers.
   - *Audit*: Audit gitignore setup to verify `.env` is blocked from tracking in the Prompt Journal.
5. **Socratic Debugging: The Exposed Config Bug (15 mins)**
   - *Activity*: Tutor copies database connection keys into a front-end script, making them visible in browser network logs.
   - *Socratic Question*: *"Why is exposing credentials on the frontend a threat? How can malicious users exploit these keys?"*
6. **Ethics: Responsible Disclosures (15 mins)**
   - *Topic*: Code leakages.
   - *Real-World Case*: In 2022, a Samsung engineer accidentally uploaded proprietary source code to ChatGPT, exposing trade secrets — demonstrating why API keys and code must never enter external AI tools without review.
   - *Discussion*: *"If you discover a company left their credentials publicly exposed on a repo, what should you do? What is responsible disclosure?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 3 Homework", write a mock `.env` configuration file declaring 3 secrets and show the code loading them.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 3)
- **Exercise 3.1 (.env file creation) Solution**:
  ```env
  DB_HOST=localhost
  DB_USER=hacker_admin
  DB_PASS=super_secure_password_123
  JWT_SECRET=node_encryption_token_abc
  ```
- **Exercise 3.2 (Load Env Variables) Solution**:
  ```javascript
  require("dotenv").config();
  const dbPassword = process.env.DB_PASS;
  ```
- **Homework Evaluation**: Verify the `.env` has no spaces around `=` signs and code maps variables using `process.env`.

---

#### Session 4: "Relational Queries: Retrieving Player Inventories" (2 hours)

**Learning Objectives:**
- Write database queries fetching user data from multiple tables (relational JOIN queries)
- Parse tabular query rows into structured JSON array payloads
- Wire the frontend dashboard to fetch and render player inventories

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: JOIN Table Matches (15 mins)**
   - *Activity*: Given a relational table grid, match keys to assemble inventory lists.
2. **Core Concept Board Lesson: SQL JOIN Queries (20 mins)**
   - *Topic 1*: Retrieving data across tables: `INNER JOIN` operations.
   - *Topic 2*: Linking records using foreign keys (`inventories.player_id = players.id`).
   - *Topic 3*: Converting flat SQL rows into nested JSON arrays.
3. **Design Phase: Inventory Fetch Flowchart (20 mins)**
   - *Activity*: Sketch query pipeline: GET `/inventory` ➔ run SQL join query ➔ send JSON array response.
   - *Action*: Draft the SQL join query template.
4. **Build Phase (AI Assisted): Coding the JOIN Query (35 mins)**
   - *Action*: Prompt AI to write backend route executing the join and formatting data response.
   - *Audit*: Audit variables assignments. Student explains database query syntax in the Prompt Journal.
5. **Socratic Debugging: The Empty Join Leak (15 mins)**
   - *Activity*: Tutor replaces `INNER JOIN` with an incorrect `LEFT JOIN` query mapping, returning tools records for non-existent player IDs.
   - *Socratic Question*: *"Why is the terminal showing items that don't belong to any active player? What does inner vs left join dictate?"*
6. **Ethics: Data Isolation (15 mins)**
   - *Discussion*: *"If inventory lookup requests don't check player constraints parameters, can hackers fetch other decks? Why is isolation critical?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 4 Homework", write a SQL query joining `players` and `inventories` tables, filtering by player username `"HackerZero"`.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 4)
- **Exercise 4.1 (SQL JOIN Query) Solution**:
  ```sql
  SELECT players.username, hacking_tools.name, hacking_tools.cost 
  FROM inventories
  JOIN players ON inventories.player_id = players.id
  JOIN hacking_tools ON inventories.tool_id = hacking_tools.id
  WHERE players.id = $1;
  ```
- **Homework Evaluation**: Ensure the JOIN joins `players`, `inventories`, and `hacking_tools` tables, matching key identifiers.

---

### Module 2: REST APIs & Server-Side Security (Sessions 5–8)

#### Session 5: "Server Routing & REST API Endpoints" (2 hours)

**Learning Objectives:**
- Explain REST API methods (GET, POST, PUT, DELETE) and routing architectures
- Write backend route handlers mapping endpoints to database transactions
- Intercept client requests parameters to execute matching logic routes

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Reverse Engineering — Intercepting API Traffic (15 mins)**
   - *Activity*: The tutor opens a public web application (e.g., a weather app). The student opens browser DevTools Network tab and filters by XHR/Fetch requests.
   - *Action*: The student clicks through the app while monitoring network traffic. They must identify: (1) What API endpoints are being called? (2) What HTTP methods are used? (3) What does the JSON response payload contain?
   - *Debrief*: Show how professional security auditors and API designers reverse-engineer live traffic to understand system architectures.
2. **Core Concept Board Lesson: REST Route Architectures (20 mins)**
   - *Topic 1*: HTTP Verb semantics (GET reads, POST writes, PUT updates, DELETE removes).
   - *Topic 2*: URL path parameters (`/tools/:id`) vs query parameters.
3. **Design Phase: Deck Management API Blueprint (20 mins)**
   - *Activity*: Outline REST routes: GET `/tools`, POST `/deck/add`, DELETE `/deck/remove`.
   - *Action*: Write API endpoints specs sheets.
4. **Build Phase (AI Assisted): Coding the Router (35 mins)**
   - *Action*: Prompt AI to generate REST routing files (`api.js`) for the project.
   - *Audit*: Audit route checks. Explain endpoints parameters parsing to the tutor in the Prompt Journal.
5. **Socratic Debugging: The POST Read Trap (15 mins)**
   - *Activity*: Tutor maps data reads requests to POST endpoints, causing browsers to refuse resource caching.
   - *Socratic Question*: *"Why did the browser throw headers alerts on page reload? Why do GET endpoints use GET instead of POST?"*
6. **Ethics: Standard API Design (15 mins)**
   - *Discussion*: *"Why is standardizing endpoints crucial for open systems? How does clear API documentation help developers cooperate?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 5 Homework", write Express routing headers declarations for GET, POST, and DELETE endpoints matching deck cards.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 5)
- **Exercise 5.1 (Express API Routes Setup) Solution**:
  ```javascript
  const express = require("express");
  const router = express.Router();
  
  router.get("/tools", async (req, res) => {
    let result = await db.query("SELECT * FROM hacking_tools");
    res.json(result.rows);
  });
  
  router.post("/deck/add", async (req, res) => {
    let { player_id, tool_id } = req.body;
    await db.query("INSERT INTO inventories (player_id, tool_id) VALUES ($1, $2)", [player_id, tool_id]);
    res.status(201).send("Added to deck");
  });
  ```
- **Homework Evaluation**: Ensure Express syntax maps correct HTTP verb functions and parses request properties correctly.

---

#### Session 6: "Defensive Coding: Server-Side Parameter Verification" (2 hours)

**Learning Objectives:**
- Apply defensive programming to validate parameters on the server side
- Enforce bounds validation (checks range, types, existence) to reject invalid requests
- Return correct HTTP status codes matching request outcomes (400, 403, 404, 500)

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Parameter Sanity checks (15 mins)**
   - *Activity*: Audit a mock request payload to find variables parameters that could crash server DBs (e.g. string cost, negative values).
2. **Core Concept Board Lesson: The Zero-Trust Backend (20 mins)**
   - *Topic 1*: Why front-end validation is easily bypassed (developer tool console updates).
   - *Topic 2*: Validating types, value ranges, and fields on the server.
   - *Topic 3*: REST status codes classification.
3. **Design Phase: Validation Rules Matrix (20 mins)**
   - *Activity*: Plan validation thresholds (e.g. quantity must be positive and integer).
   - *Action*: Draft validation checks pseudo-code.
4. **Build Phase (AI Assisted): Coding the Guards (35 mins)**
   - *Action*: Prompt AI to write server-side validation guards inside request handlers.
   - *Audit*: Audit boundary checks. Explain validation conditions to the tutor in the Prompt Journal.
5. **Socratic Debugging: The Free Credits Hack (15 mins)**
   - *Activity*: Tutor removes server-side price validation, allowing a client request payload cost value of `-100` to increase player credit balances on transaction.
   - *Challenge*: Student inserts server-side value validation checks.
   - *Socratic Question*: *"Why was the player able to get free credits? What is the hazard of trusting client-provided price values?"*
6. **Ethics: Edge Valuations validation (15 mins)**
   - *Discussion*: *"If backend validation has logic holes, players can exploit them to steal digital assets. Is exploit abuse the player's fault or the coder's fault?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 6 Homework", write a server-side parameter check script validation that throws 400 Bad Request error if a cost parameter is not a positive number.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 6)
- **Exercise 6.1 (Express Server Validation Guard) Solution**:
  ```javascript
  router.post("/buy-tool", async (req, res) => {
    let { player_id, tool_id, quantity } = req.body;
    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).send("Invalid quantity: Must be positive integer");
    }
    // Perform database operations...
  });
  ```
- **Homework Evaluation**: Verify check maps inputs type correctly and rejects negative or zero quantities.

---

#### Session 7: "Row-Level Security: Shielding Player Profiles" (2 hours)

**Learning Objectives:**
- Understand Row-Level Security (RLS) database policies
- Design RLS rules checking auth status to isolate database records
- Audit database access logs to ensure records are protected

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: database leak check (15 mins)**
   - *Activity*: Trace query records when querying without auth logs. Notice how all users records display.
2. **Core Concept Board Lesson: Row-Level Security Rules (20 mins)**
   - *Topic 1*: RLS as a database engine guard enforcing isolation at the query level.
   - *Topic 2*: Relational matching rules comparing query token user ID with record user ID.
   - *Topic 3*: Select, Insert, Update, and Delete security policies.
3. **Design Phase: DB Security Policy Diagram (20 mins)**
   - *Activity*: Map database permissions: *Players can read all tool templates, but can only read/write their own inventories.*
   - *Action*: Draft SQL policies definitions.
4. **Build Phase (AI Assisted): Coding RLS Policies (35 mins)**
   - *Action*: Prompt AI to write PostgreSQL RLS policy statements for the tables.
   - *Audit*: Audit policy execution. Explain RLS conditional rules to the tutor in the Prompt Journal.
5. **Socratic Debugging: The Global Read Leak (15 mins)**
   - *Activity*: Tutor disables the RLS check flag on the `players` table, allowing players query calls to return usernames and encrypted passwords of everyone.
   - *Challenge*: Student enables RLS and configures user checking policy.
   - *Socratic Question*: *"Why is user A able to download user B's profile cards records? What security policy rule did we forget to apply on the DB engine?"*
6. **Ethics: Mass Data Leaks (15 mins)**
   - *Real-World Case*: The 2019 Capital One breach exposed 106 million customer records because a misconfigured firewall rule bypassed Row-Level Security, allowing a single query to dump the entire database.
   - *Discussion*: *"If security rules are forgotten, mass data breaches occur. How does RLS act as a defensive barrier?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 7 Homework", write a SQL RLS policy statement that limits updates on an `inventories` table to the authenticated user matching `auth.uid()`.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 7)
- **Exercise 7.1 (Supabase/PostgreSQL RLS setup) Solution**:
  ```sql
  ALTER TABLE inventories ENABLE ROW LEVEL SECURITY;
  
  CREATE POLICY "Allow players read their own inventory" 
  ON inventories FOR SELECT 
  USING (player_id = auth.uid());
  
  CREATE POLICY "Allow players update their own inventory" 
  ON inventories FOR UPDATE 
  USING (player_id = auth.uid());
  ```
- **Homework Evaluation**: RLS policy must enable RLS on table and limit operations comparing record identifier keys to active session user context parameters.

---

#### Session 8: "Database Transaction Guards: Safe Inventory Exchange" (2 hours)

**Learning Objectives:**
- Understand ACID database transaction concepts (Atomicity, Consistency, Isolation, Durability)
- Implement database transactions (BEGIN, COMMIT, ROLLBACK) to group queries
- Prevent partial data writes bugs during credit-to-item exchanges

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Partial Write Simulation (15 mins)**
   - *Activity*: Walk through a card trade transaction: *Server takes player credits, server fails before giving the card.* Determine what happens to credits.
2. **Core Concept Board Lesson: ACID Transactions (20 mins)**
   - *Topic 1*: Atomicity: All queries succeed or all are rolled back.
   - *Topic 2*: Syntax transactions: BEGIN, COMMIT, and ROLLBACK operations.
   - *Topic 3*: Lock conditions: preventing double-spending during concurrent runs.
3. **Design Phase: Transaction flowcharting (20 mins)**
   - *Activity*: Draw a transactional exchange flow showing rollback triggers if balance is insufficient.
   - *Action*: Draft transactional SQL queries blocks.
4. **Build Phase (AI Assisted): Coding the Transaction (35 mins)**
   - *Action*: Prompt AI to generate a database transaction wrapping credit charge and inventory insert operations.
   - *Audit*: Audit catch blocks. Explain transaction rollbacks to the tutor in the Prompt Journal.
5. **Socratic Debugging: The Credit Theft Glitch (15 mins)**
   - *Activity*: Tutor simulates a database crash in the middle of a purchase query. Credits are deducted from the player's account, but no card is added to their deck, and no rollback occurs.
   - *Challenge*: Student wraps queries inside `BEGIN` / `COMMIT` blocks and implements rollbacks on catch.
   - *Socratic Question*: *"Why did the player lose their credits without getting the card? How does wrapping queries in BEGIN/COMMIT prevent partial states?"*
6. **Ethics: Transaction Integrity (15 mins)**
   - *Topic*: Banking database transactions.
   - *Real-World Case*: In 2012, a Knight Capital Group software deployment executed 4 million unintended stock trades in 45 minutes due to a partial database transaction rollback failure, losing $440 million.
   - *Discussion*: *"If bank transfers fail mid-route, why is an atomic rollback mandatory? How does this establish trust in systems?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 8 Homework", write a JS database transaction script executing BEGIN, checking player credits, deducting credits, inserting item, and running COMMIT or ROLLBACK on error.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 8)
- **Exercise 8.1 (Deduction & Insert Transaction) Solution**:
  ```javascript
  router.post("/purchase-item", async (req, res) => {
    let { player_id, tool_id, cost } = req.body;
    let client = await db.pool.connect();
    try {
      await client.query("BEGIN");
      let balanceRes = await client.query("SELECT credits FROM players WHERE id = $1", [player_id]);
      if (balanceRes.rows[0].credits < cost) { throw new Error("Insufficient credits"); }
      
      await client.query("UPDATE players SET credits = credits - $1 WHERE id = $2", [cost, player_id]);
      await client.query("INSERT INTO inventories (player_id, tool_id) VALUES ($1, $2)", [player_id, tool_id]);
      await client.query("COMMIT");
      res.status(200).send("Purchase success");
    } catch (e) {
      await client.query("ROLLBACK");
      res.status(400).send("Transaction rolled back: " + e.message);
    } finally {
      client.release();
    }
  });
  ```
- **Homework Evaluation**: Ensure the script rollback function runs on exception catches, and releases database client connections cleanly.

---

### Module 3: Cloud Deployment & Capstone Defense (Sessions 9–14)

#### Session 9: "Continuous Git Tracking & Code Reviews" (2 hours)

**Learning Objectives:**
- Manage multi-developer codebase commits using feature branches and merges
- Resolve code merging conflicts manually in coordinate files
- Perform code review checklists, verifying logic rules and safety boundaries

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Merge Conflict Match (15 mins)**
   - *Activity*: Identify Git conflicts markers (`<<<<<<< HEAD` vs `>>>>>>> branch`) and choose correct lines options.
2. **Core Concept Board Lesson: Code Auditing and Pull Requests (20 mins)**
   - *Topic 1*: Feature branch development patterns (`git checkout -b`).
   - *Topic 2*: Reading Pull Request diffs.
   - *Topic 3*: Peer code reviews checklist guidelines.
3. **Design Phase: Feature Deployment Blueprint (20 mins)**
   - *Activity*: Plan a branch lifecycle: checkout feature ➔ make changes ➔ push ➔ code review ➔ merge.
   - *Action*: Draft PR review templates.
4. **Build Phase (AI Assisted): Code Merge (35 mins)**
   - *Action*: Prompt AI to explain merge conflicts resolutions and verify code structure files.
   - *Audit*: Audit commit histories. Explain merge changes to the tutor in the Prompt Journal.
5. **Socratic Debugging: The Scrambled Merge Crash (15 mins)**
   - *Activity*: Tutor creates a git merge conflict where both main and branch edit the same backend route parameters, leaving conflict markers in code files.
   - *Challenge*: Student locates markers, reviews lines options, chooses correct code, and commits resolution.
   - *Socratic Question*: *"Why does the server crash on startup? What are these <<<<<<< indicators in our code?"*
6. **Ethics: Code Review Accountability (15 mins)**
   - *Topic*: Group engineering responsibilities.
   - *Discussion*: *"If you approve a classmate's code PR without reviewing it, and it contains a security leak, who is responsible? Why are code reviews important?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 9 Homework", list 3 git commands you would run to pull the latest changes, resolve conflicts, and merge a feature branch back to main.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 9)
- **Exercise 9.1 (Git Conflict Resolution) Solution**: Open conflict file, delete `<<<<<<< HEAD`, `=======`, and `>>>>>>> branch-name`, keep the correct variables lines, save file and run `git add` and `git commit`.
- **Homework Evaluation**: Ensure student outlines commit resolution sequence steps: `git checkout main`, `git merge feature-branch`, resolve files, `git add .`, `git commit`.

---

#### Session 10: "Deploying the Hacking Console to the Cloud" (2 hours)

**Learning Objectives:**
- Understand continuous deployment (CD) pipelines and web hosting architectures
- Deploy Express APIs and PostgreSQL databases to cloud hosting platforms
- Configure live cloud environment keys ensuring database parameters map securely

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Hosting Options Map (15 mins)**
   - *Activity*: Match different application elements (client code, server backend, database) to cloud providers types.
2. **Core Concept Board Lesson: Cloud Infrastructure Models (20 mins)**
   - *Topic 1*: Client hosting (CDN) vs server hosting (containers/dynos) vs cloud databases (managed instances).
   - *Topic 2*: Continuous deployment pipelines triggering builds on git push events.
   - *Topic 3*: Binding live environment variables on cloud dashboard panels.
3. **Design Phase: Deployment Infrastructure Blueprint (20 mins)**
   - *Activity*: Map data connections: *Front-end client fetches live server URL, server reads cloud database credentials.*
   - *Action*: Draft environment variable keys lists for production servers.
4. **Build Phase (AI Assisted): Cloud Deployment (35 mins)**
   - *Action*: Prompt AI to generate deployment config files (e.g. dockerfiles, render blueprints).
   - *Audit*: Audit live DB links. Explain credentials shielding on cloud dashboards in the Prompt Journal.
5. **Socratic Debugging: The Broken Cloud Connection (15 mins)**
   - *Activity*: Tutor deletes the server's cloud DB host variable, causing the deployed live website to throw connection timeouts.
   - *Challenge*: Student debugs environment configurations and restores variables links.
   - *Socratic Question*: *"Why is the live frontend showing blank profiles? How does the server connect to the database in production?"*
6. **Ethics: Deployed Data Sovereignty (15 mins)**
   - *Topic*: Cloud data physical hosting.
   - *Discussion*: *"Where is your database physically stored? Why does country location matter for privacy laws (e.g. GDPR)?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 10 Homework", write a deployment checklist detailing variables configurations and server paths needed to launch a database API.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 10)
- **Exercise 10.1 (Deploy Config Blueprints) Solution**: Create Render blueprint file `render.yaml` declaring database resource and server service with environment bindings maps.
- **Homework Evaluation**: Check checklist includes: git repository links, production env vars configuration, database schema seeding commands.

---

#### Session 11: "Load Testing & Error Diagnostics" (2 hours)

**Learning Objectives:**
- Identify performance bottlenecks under concurrent request loads
- Read and troubleshoot server stack traces and production exception logs
- Write automated checks guarding against database timeouts

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Log Analysis Sweeps (15 mins)**
   - *Activity*: Trace server logs to find lines numbers and variables causing stack trace exceptions.
2. **Core Concept Board Lesson: Diagnostics & Concurrency limits (20 mins)**
   - *Topic 1*: Server request queues and thread counts variables.
   - *Topic 2*: Error code ranges (500 Internal Error vs 503 Service Unavailable).
   - *Topic 3*: Database pool size parameters.
3. **Design Phase: Diagnostic Test Scenarios (20 mins)**
   - *Activity*: Plan load threshold tests: *Simulate 100 concurrent requests, monitor response times.*
   - *Action*: Draft log inspection templates.
4. **Build Phase (AI Assisted): Server Optimization (35 mins)**
   - *Action*: Prompt AI to write db connection pooling logic and logs formatting scripts.
   - *Audit*: Audit db client release loops. Student explains pool configurations in the Prompt Journal.
5. **Socratic Debugging: The Exhausted Connection Pool (15 mins)**
   - *Activity*: Tutor removes client release calls from Express routes. After 10 page reloads, the server hangs indefinitely and timeouts.
   - *Challenge*: Student inserts `finally { client.release(); }` wrappers to return database resources.
   - *Socratic Question*: *"Why is the server refusing to answer after a few clicks? How many open database connections are active? Where do they get closed?"*
6. **Ethics: Denial of Service Vulnerabilities (15 mins)**
   - *Topic*: Unpatched memory leaks.
   - *Discussion*: *"If we can crash a server by leaving connections open, how can bad actors exploit this? Why is closing database clients a security requirement?"*

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 11 Homework", write a JS code wrapper implementing try/catch/finally to execute a query and release the database client.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 11)
- **Exercise 11.1 (Release Pool Client) Solution**:
  ```javascript
  app.get("/stats", async (req, res) => {
    let client = await pool.connect();
    try {
      let data = await client.query("SELECT COUNT(*) FROM players");
      res.json(data.rows[0]);
    } catch (e) {
      res.status(500).send("Database error");
    } finally {
      client.release(); // Return client to pool
    }
  });
  ```
- **Homework Evaluation**: Code must release client connection inside a `finally` block to ensure release even on catch error states.

---

#### Session 12: "The Hacker Arena Integration Sprint" (2 hours)

**Learning Objectives:**
- Coordinate data flows across frontend interfaces, Express servers, and SQL databases
- Resolve integration bugs across the client-server boundary
- Profile live database queries execution times

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Integration Checkpoints Map (15 mins)**
   - *Activity*: Outline the data flow checklist: *Frontend Form ➔ Express Route ➔ Validation ➔ Transaction ➔ DB Write ➔ Response JSON ➔ UI Redraw.*
2. **Core Activity: The Integration Sprint (80 mins)**
   - *Action*: Group assets and resolve data gaps. Verify database tables are initialized, environment keys loaded, and RLS rules active.
3. **Audit: Code Review Sweep (25 mins)**
   - *Activity*: Walk through database policies and Express routes. Check variable types and coordinate scopes.

**📝 Homework (Practice at Home):**
- **In-App Homework Quest**: In the Journal tab under "Session 12 Homework", write a QA integration log summarizing test outputs for your account registration and tool purchase runs.

#### 📖 Tutor Manual: Exercises & Homework Solutions (Session 12)
- **Exercise 12.1 (Integration Diagnostics) Solution**: Run automated check scripts verifying database response codes and parsing returned profiles records.
- **Homework Evaluation**: Ensure student reports successful registration (201 Created) and tool purchase (200 OK) test runs.

---

#### Session 13: "The Capstone Defense" (2 hours)

**Learning Objectives:**
- Present relational database schemas and SQL constraint policies
- Demonstrate client-server transaction flows and validation guards
- Defend security policies and environment containment setups in a code review walkthrough

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Review Presentation Checklist (15 mins)**
   - *Activity*: Run final verification checks on live deployed console.
2. **Assessment Part A: The Hacking Console Presentation (45 mins)**
   - Present the capstone project. Demonstrate login flows, SQL schema joints, transaction rollbacks, and environment variables encapsulation.
3. **Assessment Part B: The Code Audit Defense (45 mins)**
   - Walk through the codebase with the tutor. Defend security choices, RLS rule statements, Express routers logic, and parameters validation blocks.
4. **Assessment Part C: Live Diagnostics Challenge (15 mins)**
   - Locate and patch a runtime exception or policy leakage introduced by the tutor in the project database.

---

#### Session 14: "Reflection & What's Next" (2 hours)

**Learning Objectives:**
- Analyze lessons learned across Level 1, 2, and 3 tracks
- Identify roles in software engineering: Frontend, Backend, DBA, and Security Engineers
- Formulate a learning path for professional capstone deployments

**Lesson Timeline & Content Breakdown (2 hours):**
1. **Warm-Up: Portfolio Audit (15 mins)**
   - *Activity*: Review all Prompt Journals versions logs created across levels.
2. **Core Lesson: Software Engineering Roles (35 mins)**
   - *Topic 1*: Database Administrators (DBA) vs Backend Engineers vs Devops Engineers.
   - *Topic 2*: Security Analysts and Penetration Testers.
   - *Topic 3*: Setting up portfolios on GitHub.
3. **Reflections Round-Table (40 mins)**
   - *Discussion*: *"What surprised you about API security? How did the AI Design-Build-Audit loop change how you inspect generated code?"*
4. **Graduation & Level 4 Planning (30 mins)**
   - *Action*: Present Level 2 and 3 graduation certificates. Map milestones for Level 4 capstone deployments.

**Level 3 Assessment Rubric**

| Dimension | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|-----------|--------------|----------|----------------|---------------|
| **Database Design** | SQL schema tables are relational; tables use correct primary/foreign keys and cascade constraints. | Schema relational, but missing cascade rules or index joins. | Tabular modeling is weak, tables are flat. | Monolithic tables, data duplicates, no relationships. |
| **Server Security** | Implements backend validation guards, RLS database rules, and hides env secrets. | Validates params, but exposes RLS configuration holes. | Exposes API secrets, weak input validation. | Exposes credentials, database open to public reads. |
| **Transaction Logic** | Database updates use BEGIN/COMMIT wrappers with rollback triggers on error. | Uses transactions, but handles rollback conditions poorly. | Partial writes occur, database lacks ACID wraps. | Credit changes bypass transactions, balance drops. |
| **System Orchestration** | Deploys backend API and DB resources to cloud pipelines; logs error diagnostics. | Deploys resources, but server logs lack diagnostics details. | DB queries fail on cloud servers, configuration errors. | Local files only, code merges fail on git. |

---
