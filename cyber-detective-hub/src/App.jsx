import React, { useState, useEffect } from 'react';
import './App.css';
import { CURRICULUM_DATA } from './curriculumData';

// Seed initial journal entries
const INITIAL_JOURNAL = [
  {
    id: 'j1',
    date: '2026-06-24 14:32',
    title: 'L1 S1: Automated Cauldron Cauldron',
    version: 2,
    activeVersion: 2,
    history: [
      {
        version: 1,
        prompt: "Write a function to make a sandwich. Take bread and butter. Spread the butter on the bread and serve.",
        code: `// Version 1: Literal sandwich maker\nfunction makeSandwich(bread, butter) {\n  // Ambiguity: Assumes bread is sliced and butter tub is open!\n  console.log("Spreading " + butter + " on " + bread);\n  return "Sandwich Ready";\n}`
      },
      {
        version: 2,
        prompt: "Write a function to make a sandwich. Inputs: bread (sealed package), butter (sealed tub), knife. Steps: (1) Open bread package, (2) take 2 slices, (3) open butter tub, (4) use knife to scoop butter, (5) spread butter on bread slices, (6) put slices together. Handle empty inputs.",
        code: `// Version 2: Preciser instructions handling sealed packages\nfunction makeSandwich(bread, butter, knife) {\n  if (!bread || !butter || !knife) {\n    throw new Error("Missing ingredients or tools!");\n  }\n  \n  console.log("Opening sealed bread package...");\n  const slice1 = bread.getSlice();\n  const slice2 = bread.getSlice();\n  \n  console.log("Opening sealed butter tub...");\n  const openedButter = butter.open();\n  \n  console.log("Scooping butter with knife...");\n  const butterScoop = knife.scoop(openedButter, "10g");\n  \n  console.log("Spreading butter on slice 1...");\n  slice1.apply(butterScoop);\n  \n  console.log("Putting slices together...");\n  return [slice1, slice2].combine();\n}`
      }
    ]
  }
];

const CAMPAIGN_THEMES = {
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk Metropolis',
    description: 'Solve logical systemic bugs in a neon-lit, highly automated city. Track hackers and secure grid lines.',
    levels: {
      1: {
        mainQuest: 'Operation: Safe City Grid — Design the logical blueprints for the city\'s automated infrastructure (drones, public transport, smart vending).',
        sessions: [
          {
            id: 'l1-s1',
            title: 'Session 1: "The Automated Chef Grid"',
            objective: 'Design a precise sandwich recipe instruction set for robotic kitchen grids.',
            activity: 'Robot Chef & Malicious Assistant: Write instructions for a peer to make a sandwich. The assistant tries to exploit any loophole (like placing a sealed butter tub directly on sealed bread) to crash the robot.',
            homework: 'Write step-by-step instructions for a simple daily routine. Ask a family member to follow it literally without making assumptions. Note where it fails.',
            xp: 100
          },
          {
            id: 'l1-s2',
            title: 'Session 2: "Grid Variable Classification"',
            objective: 'Classify urban grid data variables and explore inputs/ranges.',
            activity: 'Design a character creation form with strict rules (e.g., age must be a number 5-100; name cannot be blank). Try to break a partner\'s form using invalid inputs.',
            homework: 'Find 3 real-world forms. For each, identify the data types expected and list what happens if you input the wrong data type.',
            xp: 100
          },
          {
            id: 'l1-s5',
            title: 'Session 5: "The Automated Pet Grid"',
            objective: 'Distinguish counting/condition loops and prevent infinite loops in feeders.',
            activity: 'The Sneaky Cat Feeder Challenge: Design a flowchart for a feeder that dispenses food every 6 hours, blocks if the bowl is full, alerts if the cat attempts to double-eat within 5 minutes, and rings an alarm if the dog is unfed for 12 hours.',
            homework: 'Identify 3 loops in your daily life. Describe what repeats, the condition/count, and what an infinite loop would look like.',
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
        mainQuest: 'Operation: Colony Life Support — Design the logic diagrams for atmospheric regulators, water filtration, and solar tracking loops.',
        sessions: [
          {
            id: 'l1-s1',
            title: 'Session 1: "Atmosphere Control Automation"',
            objective: 'Design a precise oxygen regulator control instruction set.',
            activity: 'cauldron Spellcasting & The Goblin Saboteur: Write spell instructions. The saboteur goblin tries to find loopholes to blow up the cauldron. Write airlock regulations.',
            homework: 'Write instructions for your daily morning spacesuit inspection. Ask a peer to check it literally.',
            xp: 100
          },
          {
            id: 'l1-s2',
            title: 'Session 2: "Martian Soil Variables"',
            objective: 'Classify mineral and soil composition variables.',
            activity: 'Design a rover soil report form with strict boundaries (e.g., pH must be 0-14, radiation level must be numeric).',
            homework: 'Identify forms or datalogs used in space missions. List their variable constraints.',
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
        mainQuest: 'Operation: Alchemy Automation — Map out the recipes (logic flowcharts) for automated potion mixers and magical doors.',
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
            title: 'Session 2: "Scroll Registry Variables"',
            objective: 'Classify magical scroll records and potion ingredient ranges.',
            activity: 'Design a spell registration form (e.g., mana cost must be a number 0-100, element choice restricted).',
            homework: 'Look up common stats in games. Classify elements as variables.',
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

const LEADERBOARD_INITIAL = [
  { rank: 1, name: 'Ava "ByteSlayer" Smith', level: 'Level 3', points: 1420, active: 'Session 9: Comm Security' },
  { rank: 2, name: 'Lucas "PromptGod" Chen', level: 'Level 3', points: 1250, active: 'Session 8: Security' },
  { rank: 3, name: 'Sophia "LogicQueen" Davis', level: 'Level 2', points: 890, active: 'Session 6: Constraints' },
  { rank: 4, name: 'You (Detective-in-Training)', level: 'Level 2', points: 450, active: 'Session 5: Sandbox', isCurrentUser: true },
  { rank: 5, name: 'Ethan "BugHunter" Miller', level: 'Level 1', points: 380, active: 'Session 5: Loops' }
];

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
  const [adminStatusMsg, setAdminStatusMsg] = useState('');

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
  
  // Sandbox states
  const [sandboxRole, setSandboxRole] = useState('Junior Robot Chef Controller');
  const [sandboxTask, setSandboxTask] = useState('Create a sandwich maker function');
  const [sandboxConstraints, setSandboxConstraints] = useState('Must open sealed packages. Zero manual code edits.');
  const [sandboxInput, setSandboxInput] = useState('bread (sealed package), butter (sealed tub), knife');
  const [sandboxEdgeCases, setSandboxEdgeCases] = useState('Null/missing inputs, unopened packets');
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

  // Level 1 Session 2 (Backpack Sorter) Simulator States
  const [s2Items, setS2Items] = useState([
    { id: 'item1', value: '"ByteSlayer"', type: 'string' },
    { id: 'item2', value: '450', type: 'number' },
    { id: 'item3', value: 'true', type: 'boolean' },
    { id: 'item4', value: '"vault_gate_A"', type: 'string' },
    { id: 'item5', value: '1200', type: 'number' },
    { id: 'item6', value: 'false', type: 'boolean' },
    { id: 'item7', value: '22', type: 'number' }
  ]);
  const [s2Bins, setS2Bins] = useState({ string: [], number: [], boolean: [] });
  const [s2UsernameRule, setS2UsernameRule] = useState('string');
  const [s2PasscodeRule, setS2PasscodeRule] = useState('number');
  const [s2IsAdminRule, setS2IsAdminRule] = useState('boolean');
  const [s2Logs, setS2Logs] = useState([]);
  const [s2Success, setS2Success] = useState(false);

  // Level 1 Session 3 (State Vault Controller) Simulator States
  const [s3State, setS3State] = useState('CLOSED'); // CLOSED, OPEN, ALARM_LOCKED
  const [s3Rule1, setS3Rule1] = useState('OPEN');        // CLOSED + Insert Keycard -> OPEN
  const [s3Rule2, setS3Rule2] = useState('CLOSED');      // OPEN + Push Door -> CLOSED
  const [s3Rule3, setS3Rule3] = useState('ALARM_LOCKED'); // CLOSED + Push Door -> ALARM_LOCKED
  const [s3Rule4, setS3Rule4] = useState('CLOSED');      // ALARM_LOCKED + Reset -> CLOSED
  const [s3Logs, setS3Logs] = useState([]);
  const [s3Success, setS3Success] = useState(false);
  const [s3VisitedStates, setS3VisitedStates] = useState({ CLOSED: true, OPEN: false, ALARM_LOCKED: false });

  // Journal selection states
  const [selectedJournalId, setSelectedJournalId] = useState('j1');
  const [activeJournalVersion, setActiveJournalVersion] = useState(2);

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
  const fetchStudentsList = () => {
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
  };

  useEffect(() => {
    if (token && currentUser && currentUser.role === 'teacher') {
      fetchStudentsList();
    }
  }, [token, currentUser]);

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
        name: newStudentName
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
        fetchStudentsList();
      })
      .catch(err => {
        setAdminStatusMsg(`Error: ${err.message}`);
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

  // Trigger simulated AI generation
  const handleGenerate = () => {
    if (!sandboxTask.trim()) return;

    let mockCode = `// Generated Spell/Code block based on prompt spec\n`;
    mockCode += `// Campaign Theme: ${currentCampaign.name}\n`;
    mockCode += `// Role: ${sandboxRole}\n`;
    mockCode += `// Task: ${sandboxTask}\n\n`;

    if (sandboxTask.toLowerCase().includes('sandwich') || sandboxTask.toLowerCase().includes('chef') || sandboxTask.toLowerCase().includes('cauldron')) {
      const handlesSealed = sandboxConstraints.toLowerCase().includes('open') || sandboxConstraints.toLowerCase().includes('sealed') || sandboxConstraints.toLowerCase().includes('cauldron');
      if (handlesSealed) {
        mockCode += `function makeSandwich(bread, butter, knife) {\n  if (!bread || !butter || !knife) return null;\n  \n  // Good: opens packets first!\n  const b = bread.open().getSlices(2);\n  const bt = butter.open();\n  const spread = knife.scoop(bt, '15g');\n  b[0].apply(spread);\n  return b.combine();\n}`;
      } else {
        mockCode += `function makeSandwich(bread, butter) {\n  // Bug: assumes packets are open!\n  console.log("Spreading " + butter + " on " + bread);\n  return "Sandwich Ready";\n}`;
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
    const isSandwich = sandboxTask.toLowerCase().includes('sandwich') || sandboxTask.toLowerCase().includes('chef') || sandboxTask.toLowerCase().includes('cauldron');
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
        if (isSandwich) {
          const handlesEmpty = sandboxEdgeCases.toLowerCase().includes('null') || sandboxEdgeCases.toLowerCase().includes('empty') || sandboxEdgeCases.toLowerCase().includes('cauldron');
          if (handlesEmpty) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 2: PASSED. Script throws error on null inputs.' }]);
          } else {
            setChaosLogs(prev => [...prev, { type: 'error', text: 'Test 2: FAILED! Null input caused Uncaught TypeError: Cannot read properties of null.' }]);
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
        if (isSandwich) {
          const opensPackets = sandboxConstraints.toLowerCase().includes('open') || sandboxConstraints.toLowerCase().includes('sealed') || sandboxConstraints.toLowerCase().includes('cauldron');
          if (opensPackets) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 3: PASSED. Robot successfully opened sealed packets before spreading.' }]);
            setSandboxSuccess(true);
          } else {
            setChaosLogs(prev => [...prev, {
              type: 'error',
              text: 'Test 3: FAILED! Malicious Assistant injected "sealed bread". Robot tried to spread butter on the wrapper!'
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

  // Helper to load templates into the sandbox
  const loadTemplate = (session) => {
    setSandboxSessionId(session.id);
    if (session.id === 'l1-s1') {
      setSandboxRole(campaignId === 'cyberpunk' ? 'Junior Robot Chef Controller' : campaignId === 'mars' ? 'Airlock Operations Specialist' : 'Junior Apprentice Spellcaster');
      setSandboxTask(campaignId === 'cyberpunk' ? 'Create a sandwich maker function' : campaignId === 'mars' ? 'Write oxygen regulation logic' : 'Write cauldron cauldron sequence');
      setSandboxConstraints(campaignId === 'cyberpunk' ? 'Must open sealed packages. Zero manual code edits.' : campaignId === 'mars' ? 'Open regulator valves, bypass solar loop anomalies.' : 'Goblin proof shields. Cauldron heat monitoring.');
      setSandboxInput(campaignId === 'cyberpunk' ? 'bread (sealed package), butter (sealed tub), knife' : campaignId === 'mars' ? 'oxygenLevel, SolarRadiationInput' : 'cauldronTemp, goblinBait');
      setSandboxEdgeCases(campaignId === 'cyberpunk' ? 'Null/missing inputs, unopened packets' : campaignId === 'mars' ? 'Radiation spikes, low levels' : 'Mana spikes, double cast');
    } else if (session.id === 'l1-s5') {
      setSandboxRole('IoT Embedded System Architect');
      setSandboxTask(campaignId === 'cyberpunk' ? 'Implement SmartPetFeeder feeding logic loops' : campaignId === 'mars' ? 'Hydro Recycling Pump Loops' : 'Mana Stirling cauldron loops');
      setSandboxConstraints('Check limits, prevent infinite loops.');
      setSandboxInput('weightSensor, buttonClicks, elapsedSeconds');
      setSandboxEdgeCases('System malfunctions, overflows');
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

  const selectedJournal = journalEntries.find(j => j.id === selectedJournalId);
  const activeJournalHistory = selectedJournal ? selectedJournal.history.find(h => h.version === activeJournalVersion) : null;

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
            Quest Files
          </button>
          
          <button className={`nav-item ${activeTab === 'curriculum' ? 'active' : ''}`} onClick={() => setActiveTab('curriculum')}>
            <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 20}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            Curriculum Guide
          </button>
          
          <button className={`nav-item ${activeTab === 'sandbox' ? 'active' : ''}`} onClick={() => setActiveTab('sandbox')}>
            <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            Prompt Sandbox
          </button>
          
          <button className={`nav-item ${activeTab === 'journal' ? 'active' : ''}`} onClick={() => setActiveTab('journal')}>
            <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            Prompt Journal
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
              {activeTab === 'sandbox' && 'Prompt Sandbox (Strict Mode)'}
              {activeTab === 'journal' && 'Prompt Specification Journal'}
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

        <div className="content-body">
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
                        Current active operation: <strong>{selectedSession.title}</strong>. Launch the sandbox code compiler to start building logic structures for this quest!
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
                          Prompt spec revised: <strong>Sandwich Chef Instructions</strong> (v2 created)
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
                <button className={`level-tab ${selectedLevel === 1 ? 'active' : ''}`} onClick={() => { setSelectedLevel(1); setSelectedSessionId('l1-s1'); }}>Level 1: Logic</button>
                <button className={`level-tab ${selectedLevel === 2 ? 'active' : ''}`} onClick={() => { setSelectedLevel(2); setSelectedSessionId('l2-s5'); }}>Level 2: AI Copilot</button>
                <button className={`level-tab ${selectedLevel === 3 ? 'active' : ''}`} onClick={() => { setSelectedLevel(3); setSelectedSessionId('l3-s1'); }}>Level 3: Architect</button>
                <button className={`level-tab ${selectedLevel === 4 ? 'active' : ''}`} onClick={() => { setSelectedLevel(4); setSelectedSessionId('l4-s1'); }}>Level 4: Engineer</button>
              </div>

              {/* Display level main quest overarching target */}
              <div className="glass-panel" style={{ padding: 16, marginBottom: 24, borderLeft: '4px solid var(--accent-cyan)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Level Main Quest Target:</span>
                <p style={{ margin: '4px 0 0 0', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{activeMainQuest}</p>
              </div>

              <div className="session-list-layout">
                {/* Session list side panel */}
                <div className="sessions-sidebar-list">
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
                        Open in Sandbox
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
                  </div>

                  <div className="detail-section">
                    <h4>📝 Intel Delivery (Homework Quest)</h4>
                    <div className="detail-section-body homework-box">
                      <h5>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 16, height: 16}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                        Practice at Home Quest
                      </h5>
                      <p>{selectedSession.homework}</p>
                    </div>
                  </div>

                  {!solvedCases[selectedSession.id] && (
                    <div style={{ marginTop: 32, borderTop: '1px solid var(--border-color)', paddingTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
                      <button className="btn-cyber btn-cyber-green" onClick={() => claimCaseEvidence(selectedSession.id, selectedSession.xp)}>
                        Deliver Quest Evidence (+{selectedSession.xp} XP)
                      </button>
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
                  <button className={`level-tab ${curriculumLevel === 1 ? 'active' : ''}`} onClick={() => { setCurriculumLevel(1); setCurriculumSessionId('l1-s1'); }}>Level 1: Foundations</button>
                  <button className={`level-tab ${curriculumLevel === 2 ? 'active' : ''}`} onClick={() => { setCurriculumLevel(2); setCurriculumSessionId('l2-s1'); }}>Level 2: AI & Language</button>
                  <button className={`level-tab ${curriculumLevel === 3 ? 'active' : ''}`} onClick={() => { setCurriculumLevel(3); setCurriculumSessionId('l3-s1'); }}>Level 3: Architecture</button>
                  <button className={`level-tab ${curriculumLevel === 4 ? 'active' : ''}`} onClick={() => { setCurriculumLevel(4); setCurriculumSessionId('l4-s1'); }}>Level 4: Engineering</button>
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

              <div className="curriculum-layout">
                {/* Left panel: List of sessions */}
                <div className="curriculum-sidebar-list">
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
                          // Check if it's a milestone session with a sandbox template hook
                          const isSandboxHooked = ['l1-s1', 'l1-s2', 'l1-s3', 'l1-s5', 'l2-s5', 'l2-s6', 'l3-s1', 'l3-s9', 'l4-s1', 'l4-s2', 'l4-s5'].includes(s.id);
                          return (
                            <div 
                              key={s.id}
                              className={`glass-panel curriculum-session-card ${isSelected ? 'selected' : ''}`}
                              onClick={() => setCurriculumSessionId(s.id)}
                            >
                              <div className="session-card-header">
                                <span className="session-id-badge">L{s.level} S{s.id.split('-s')[1]}</span>
                                {isSandboxHooked && (
                                  <span className="badge-cyber badge-purple">SANDBOX MATCH</span>
                                )}
                              </div>
                              <div className="session-card-title">{s.title.replace(/Session \d+:\s*"/, '').replace(/"/, '')}</div>
                            </div>
                          );
                        })}
                      </div>
                    ));
                  })()}
                </div>

                {/* Right panel: Details view */}
                {(() => {
                  const currentSession = CURRICULUM_DATA.find(s => s.id === curriculumSessionId);
                  if (!currentSession) {
                    return (
                      <div className="glass-panel curriculum-detail-view empty">
                        Select a session from the list to view teaching topics and content.
                      </div>
                    );
                  }
                  
                  const isSandboxHooked = ['l1-s1', 'l1-s2', 'l1-s3', 'l1-s5', 'l2-s5', 'l2-s6', 'l3-s1', 'l3-s9', 'l4-s1', 'l4-s2', 'l4-s5'].includes(currentSession.id);

                  return (
                    <div className="glass-panel curriculum-detail-view animate-in">
                      <div className="detail-header">
                        <div className="detail-header-left">
                          <span className="detail-module-path">{currentSession.module}</span>
                          <h2>{currentSession.title}</h2>
                          <div className="detail-meta-row">
                            <span className="badge-cyber badge-cyan">{currentSession.duration} Duration</span>
                            <span className="badge-cyber badge-green">Level {currentSession.level}</span>
                          </div>
                        </div>
                        <div className="detail-header-right">
                          <button 
                            className="btn-cyber btn-cyber-primary" 
                            onClick={() => {
                              // If sandbox hooked, load the specific session
                              // If not sandbox hooked, load dynamic preset template
                              loadTemplate(currentSession);
                              setActiveTab('sandbox');
                            }}
                          >
                            {isSandboxHooked ? 'Open Sandbox Workspace' : 'Open Custom Sandbox'}
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 14, height: 14, marginLeft: 6}}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="curriculum-body-grid">
                        <div className="curriculum-main-col">
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
                                <h4>👨‍💻 Hands-On Sandbox Challenge</h4>
                                <div className="detail-section-body content-emphasis">
                                  {currentSession.handsOn}
                                </div>
                              </div>

                              <div className="detail-section">
                                <h4>⚔️ Active Classroom Mission</h4>
                                <div className="detail-section-body">
                                  {currentSession.coreActivity}
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
                                  {currentSession.coreActivity}
                                </div>
                              </div>
                            </>
                          )}

                          {/* Homework Box */}
                          <div className="detail-section">
                            <h4>📝 Intel Delivery (Homework Quest)</h4>
                            <div className="detail-section-body homework-box">
                              <h5>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 16, height: 16}}>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                                Practice at Home Task
                              </h5>
                              <p>{currentSession.homework}</p>
                            </div>
                          </div>
                        </div>

                        <div className="curriculum-side-col">
                          {/* Ethics Moment Card */}
                          {currentSession.ethics && (
                            <div className="glass-panel ethics-callout">
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
                            <div className="glass-panel adaptation-callout">
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
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* Sandbox Tab View */}
          {activeTab === 'sandbox' && (
            <div className="tab-sandbox sandbox-layout animate-in">
              
              {/* LEVEL 1 SESSION 1: SECURITY-DRONE NAVIGATOR */}
              {sandboxSessionId === 'l1-s1' && (
                <div className="simulator-grid">
                  <div className="glass-panel sim-left">
                    <div className="panel-header">
                      <h3>Available Navigation Commands</h3>
                    </div>
                    <div className="sim-panel-body drone-commands">
                      <p className="sim-instructions">Click commands in the correct literal sequence to navigate the Security Drone through the warehouse door:</p>
                      
                      <div className="drone-actions-list">
                        <button className="btn-sim-action" onClick={() => setS1Sequence(prev => [...prev, { id: 'power_on', label: 'Turn on drone power' }])}>
                          <span className="sim-action-icon">🔌</span> Turn on drone power
                        </button>
                        <button className="btn-sim-action" onClick={() => setS1Sequence(prev => [...prev, { id: 'scan_door', label: 'Scan for target warehouse door' }])}>
                          <span className="sim-action-icon">🔍</span> Scan for target warehouse door
                        </button>
                        <button className="btn-sim-action" onClick={() => setS1Sequence(prev => [...prev, { id: 'fly_door', label: 'Fly drone to the door' }])}>
                          <span className="sim-action-icon">🚀</span> Fly drone to the door
                        </button>
                        <button className="btn-sim-action" onClick={() => setS1Sequence(prev => [...prev, { id: 'unlock_door', label: 'Use digital keycard to unlock' }])}>
                          <span className="sim-action-icon">🔑</span> Use digital keycard to unlock
                        </button>
                      </div>
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
                            <div key={idx} className="sequence-card animate-in">
                              <span className="sequence-number">Step {idx + 1}</span>
                              <span className="sequence-label">{cmd.label}</span>
                              <button className="btn-card-remove" onClick={() => setS1Sequence(prev => prev.filter((_, i) => i !== idx))}>×</button>
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
                          setS1Logs([{ type: 'info', text: '🤖 Booting navigation system...' }]);
                          
                          let currentStep = 0;
                          let hasError = false;
                          const logsToAppend = [];
                          
                          const runNext = () => {
                            if (s1Sequence.length === 0) {
                              setS1Logs(prev => [...prev, { type: 'error', text: 'Error: No instructions in workspace. Drone stayed idle.' }]);
                              setS1Executing(false);
                              return;
                            }

                            if (currentStep >= s1Sequence.length) {
                              if (!hasError) {
                                // Check if correct sequence of all 4 steps
                                const ids = s1Sequence.map(c => c.id);
                                const isCorrect = ids.join(',') === 'power_on,scan_door,fly_door,unlock_door';
                                if (isCorrect) {
                                  setS1Logs(prev => [...prev, { type: 'success', text: '✓ SUCCESS: Warehouse door bypassed! Telemetry extraction complete.' }]);
                                  setS1Success(true);
                                  claimCaseEvidence('l1-s1', 100);
                                } else {
                                  setS1Logs(prev => [...prev, { type: 'error', text: '✗ MISSION FAILURE: Target reached but incorrect order. Security lockdown triggered!' }]);
                                }
                              }
                              setS1Executing(false);
                              return;
                            }

                            const cmd = s1Sequence[currentStep];
                            const prevIds = s1Sequence.slice(0, currentStep).map(c => c.id);

                            if (cmd.id === 'power_on') {
                              logsToAppend.push({ type: 'info', text: 'System power initialized. Drone rotors active.' });
                            } else if (cmd.id === 'scan_door') {
                              if (!prevIds.includes('power_on')) {
                                logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Attempted to scan while drone is unpowered! System offline.' });
                                hasError = true;
                              } else {
                                logsToAppend.push({ type: 'info', text: 'Target coordinates resolved: Security door lock detected.' });
                              }
                            } else if (cmd.id === 'fly_door') {
                              if (!prevIds.includes('power_on')) {
                                logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Attempted flight with unpowered systems! Drone crashed.' });
                                hasError = true;
                              } else if (!prevIds.includes('scan_door')) {
                                logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Target coordinates undefined. Drone collided with a concrete pillar!' });
                                hasError = true;
                              } else {
                                logsToAppend.push({ type: 'info', text: 'Rotor speed increased. Drone flown and hovering adjacent to target card reader.' });
                              }
                            } else if (cmd.id === 'unlock_door') {
                              if (!prevIds.includes('power_on')) {
                                logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Power offline. Keycard bypass module inactive.' });
                                hasError = true;
                              } else if (!prevIds.includes('fly_door')) {
                                logsToAppend.push({ type: 'error', text: '💥 CRITICAL ERROR: Bypass failed. Drone is too far from the door card reader. Keycard data lost!' });
                                hasError = true;
                              } else {
                                logsToAppend.push({ type: 'info', text: 'Bypass signal injected. Decoding gate locks...' });
                              }
                            }

                            setS1Logs(prev => [...prev, logsToAppend[logsToAppend.length - 1]]);
                            
                            if (hasError) {
                              setS1Logs(prev => [...prev, { type: 'error', text: '✗ MISSION FAILURE: System shutdown due to logic fault.' }]);
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
                        {s1Executing ? 'Executing Sequence...' : 'Run Navigation Script'}
                      </button>
                    </div>
                  </div>

                  <div className="glass-panel sim-right">
                    <div className="panel-header">
                      <h3>Drone Telemetry Terminal</h3>
                      {s1Success && <span className="badge-cyber badge-green">SOLVED (+100 XP)</span>}
                    </div>
                    <div className="sim-panel-body drone-terminal">
                      {s1Logs.length === 0 ? (
                        <div className="terminal-empty">Terminal offline. Run the navigation script to observe signals.</div>
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
              )}

              {/* LEVEL 1 SESSION 2: DETECTIVE BACKPACK SORTER */}
              {sandboxSessionId === 'l1-s2' && (
                <div className="simulator-grid sorter-grid">
                  <div className="glass-panel sim-left">
                    <div className="panel-header">
                      <h3>Backpack Sorting Bay</h3>
                    </div>
                    <div className="sim-panel-body">
                      <p className="sim-instructions">Futuristic locks only accept specific type categories. Sort each backpack data item into its correct data compartment:</p>
                      
                      <div className="backpack-items-list">
                        {s2Items.map(item => {
                          const isInBin = s2Bins.string.find(x => x.id === item.id) || 
                                           s2Bins.number.find(x => x.id === item.id) || 
                                           s2Bins.boolean.find(x => x.id === item.id);
                          if (isInBin) return null;
                          return (
                            <div key={item.id} className="backpack-item-card animate-in">
                              <span className="backpack-item-val">{item.value}</span>
                              <div className="backpack-item-buttons">
                                <button className="btn-sim-sort" onClick={() => setS2Bins(prev => ({ ...prev, string: [...prev.string, item] }))}>Text (String)</button>
                                <button className="btn-sim-sort" onClick={() => setS2Bins(prev => ({ ...prev, number: [...prev.number, item] }))}>Number</button>
                                <button className="btn-sim-sort" onClick={() => setS2Bins(prev => ({ ...prev, boolean: [...prev.boolean, item] }))}>Switch (Bool)</button>
                              </div>
                            </div>
                          );
                        })}
                        {s2Items.every(item => 
                          s2Bins.string.find(x => x.id === item.id) || 
                          s2Bins.number.find(x => x.id === item.id) || 
                          s2Bins.boolean.find(x => x.id === item.id)
                        ) && (
                          <div className="backpack-sort-complete">
                            Compartments loaded. Complete the Lock Verification settings below!
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel sim-middle">
                    <div className="panel-header">
                      <h3>Backpack Compartments</h3>
                      <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setS2Bins({ string: [], number: [], boolean: [] }); setS2Logs([]); setS2Success(false); }}>Clear Bins</button>
                    </div>
                    <div className="sim-panel-body compartments-body">
                      <div className="compartment-bin">
                        <h4>Strings (Text Values)</h4>
                        <div className="bin-slots">
                          {s2Bins.string.length === 0 ? <span className="bin-empty">Empty</span> : s2Bins.string.map(x => <span key={x.id} className="bin-item">{x.value}</span>)}
                        </div>
                      </div>
                      <div className="compartment-bin">
                        <h4>Numbers</h4>
                        <div className="bin-slots">
                          {s2Bins.number.length === 0 ? <span className="bin-empty">Empty</span> : s2Bins.number.map(x => <span key={x.id} className="bin-item">{x.value}</span>)}
                        </div>
                      </div>
                      <div className="compartment-bin">
                        <h4>Booleans (Switches)</h4>
                        <div className="bin-slots">
                          {s2Bins.boolean.length === 0 ? <span className="bin-empty">Empty</span> : s2Bins.boolean.map(x => <span key={x.id} className="bin-item">{x.value}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel sim-right">
                    <div className="panel-header">
                      <h3>Lockbox Verification Rules</h3>
                      {s2Success && <span className="badge-cyber badge-green">SOLVED (+100 XP)</span>}
                    </div>
                    <div className="sim-panel-body lockbox-body">
                      <p className="sim-instructions">Configure the validation rules for the vault lock checking mechanism:</p>
                      
                      <div className="lockbox-rules-form">
                        <div className="lockbox-rule-row">
                          <label>username</label>
                          <select value={s2UsernameRule} onChange={(e) => setS2UsernameRule(e.target.value)}>
                            <option value="string">Must be String (Text)</option>
                            <option value="number">Must be Number</option>
                            <option value="boolean">Must be Boolean</option>
                          </select>
                        </div>
                        <div className="lockbox-rule-row">
                          <label>passcode</label>
                          <select value={s2PasscodeRule} onChange={(e) => setS2PasscodeRule(e.target.value)}>
                            <option value="string">Must be String (Text)</option>
                            <option value="number">Must be Number</option>
                            <option value="boolean">Must be Boolean</option>
                          </select>
                        </div>
                        <div className="lockbox-rule-row">
                          <label>isAdmin</label>
                          <select value={s2IsAdminRule} onChange={(e) => setS2IsAdminRule(e.target.value)}>
                            <option value="string">Must be String (Text)</option>
                            <option value="number">Must be Number</option>
                            <option value="boolean">Must be Boolean</option>
                          </select>
                        </div>

                        <button className="btn-cyber btn-cyber-primary" style={{ marginTop: 12 }} onClick={() => {
                          const logs = [];
                          
                          // Check if sorting is done and correct
                          const allSorted = s2Items.length === (s2Bins.string.length + s2Bins.number.length + s2Bins.boolean.length);
                          if (!allSorted) {
                            setS2Logs([{ type: 'error', text: 'Access Denied: Backpack items must be completely sorted into compartments first.' }]);
                            return;
                          }

                          const stringError = s2Bins.string.some(x => x.type !== 'string');
                          const numberError = s2Bins.number.some(x => x.type !== 'number');
                          const booleanError = s2Bins.boolean.some(x => x.type !== 'boolean');

                          if (stringError || numberError || booleanError) {
                            setS2Logs([{ type: 'error', text: 'Access Denied: Classification error! Some items are sorted into wrong compartments.' }]);
                            return;
                          }

                          logs.push({ type: 'info', text: 'Initializing security classification audit...' });
                          logs.push({ type: 'success', text: 'Backpack compartments verified: Correct.' });
                          logs.push({ type: 'info', text: 'Running test validation credentials on rules...' });

                          // Test scenario 1
                          if (s2UsernameRule === 'string' && s2PasscodeRule === 'number' && s2IsAdminRule === 'boolean') {
                            logs.push({ type: 'success', text: 'Test 1: PASSED. Valid input { username: "ByteSlayer", passcode: 1200, isAdmin: true } approved.' });
                            logs.push({ type: 'success', text: 'Test 2: PASSED. Invalid input { username: 999, passcode: "apple" } blocked successfully.' });
                            logs.push({ type: 'success', text: '✓ LOCKBOX UNLOCKED: System vault opened!' });
                            setS2Success(true);
                            claimCaseEvidence('l1-s2', 100);
                          } else {
                            logs.push({ type: 'error', text: 'Test 1: FAILED. Rules configured incorrectly. Lockbox rejected valid student credentials.' });
                            setS2Success(false);
                          }
                          setS2Logs(logs);
                        }}>Test lockbox rules</button>
                      </div>

                      <div className="lockbox-terminal-logs">
                        {s2Logs.map((log, idx) => (
                          <div key={idx} className={`terminal-log-item ${log.type}`}>
                            {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '🔒 '}
                            {log.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 3: SECURITY VAULT STATE MACHINE */}
              {sandboxSessionId === 'l1-s3' && (
                <div className="simulator-grid state-grid">
                  <div className="glass-panel sim-left">
                    <div className="panel-header">
                      <h3>Transition Rules Map</h3>
                    </div>
                    <div className="sim-panel-body state-rules">
                      <p className="sim-instructions">State machines model physical machine state behaviors. Configure transition rules for the Vault Door:</p>
                      
                      <div className="rules-matrix">
                        <div className="matrix-row">
                          <span className="matrix-label">Current: <strong>CLOSED</strong> + insert keycard</span>
                          <select value={s3Rule1} onChange={(e) => setS3Rule1(e.target.value)}>
                            <option value="CLOSED">Stay CLOSED</option>
                            <option value="OPEN">Transition to OPEN</option>
                            <option value="ALARM_LOCKED">Transition to ALARM_LOCKED</option>
                          </select>
                        </div>
                        <div className="matrix-row">
                          <span className="matrix-label">Current: <strong>OPEN</strong> + push door</span>
                          <select value={s3Rule2} onChange={(e) => setS3Rule2(e.target.value)}>
                            <option value="CLOSED">Transition to CLOSED</option>
                            <option value="OPEN">Stay OPEN</option>
                            <option value="ALARM_LOCKED">Transition to ALARM_LOCKED</option>
                          </select>
                        </div>
                        <div className="matrix-row">
                          <span className="matrix-label">Current: <strong>CLOSED</strong> + push door</span>
                          <select value={s3Rule3} onChange={(e) => setS3Rule3(e.target.value)}>
                            <option value="CLOSED">Stay CLOSED</option>
                            <option value="OPEN">Transition to OPEN</option>
                            <option value="ALARM_LOCKED">Transition to ALARM_LOCKED</option>
                          </select>
                        </div>
                        <div className="matrix-row">
                          <span className="matrix-label">Current: <strong>ALARM_LOCKED</strong> + reset alarm</span>
                          <select value={s3Rule4} onChange={(e) => setS3Rule4(e.target.value)}>
                            <option value="CLOSED">Transition to CLOSED</option>
                            <option value="OPEN">Transition to OPEN</option>
                            <option value="ALARM_LOCKED">Stay ALARM_LOCKED</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel sim-middle">
                    <div className="panel-header">
                      <h3>Vault Door Hardware View</h3>
                      <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setS3State('CLOSED'); setS3VisitedStates({ CLOSED: true, OPEN: false, ALARM_LOCKED: false }); setS3Logs([]); setS3Success(false); }}>Reset States</button>
                    </div>
                    <div className="sim-panel-body visual-state-panel">
                      <div className={`vault-graphic-container state-${s3State}`}>
                        <div className="vault-indicator-light"></div>
                        <div className="vault-door-graphic">
                          {s3State === 'CLOSED' && '🔒 CLOSED'}
                          {s3State === 'OPEN' && '🔓 OPEN'}
                          {s3State === 'ALARM_LOCKED' && '🚨 ALARM LOCKED'}
                        </div>
                      </div>

                      <div className="state-checklist">
                        <span className="checklist-title">Mission Requirements (Visit all states and safely reset):</span>
                        <div className="checklist-item">
                          <input type="checkbox" checked={s3VisitedStates.CLOSED} readOnly /> Closed State Verified
                        </div>
                        <div className="checklist-item">
                          <input type="checkbox" checked={s3VisitedStates.OPEN} readOnly /> Open State Verified
                        </div>
                        <div className="checklist-item">
                          <input type="checkbox" checked={s3VisitedStates.ALARM_LOCKED} readOnly /> Alarm State Verified
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel sim-right">
                    <div className="panel-header">
                      <h3>Hacking Console Buttons</h3>
                      {s3Success && <span className="badge-cyber badge-green">SOLVED (+100 XP)</span>}
                    </div>
                    <div className="sim-panel-body state-console-body">
                      <p className="sim-instructions">Interact with the vault interface to test your transitions:</p>
                      
                      <div className="state-triggers">
                        <button className="btn-cyber" onClick={() => {
                          let nextState = s3State;
                          const log = { type: 'info', text: '' };
                          
                          if (s3State === 'CLOSED') {
                            nextState = s3Rule1;
                            log.text = `Event: Inserted Keycard. Mapped transition to: ${nextState}`;
                          } else {
                            log.text = `Event: Inserted Keycard. No rule for state ${s3State} + Insert Keycard. Door ignored event.`;
                          }
                          
                          setS3State(nextState);
                          setS3VisitedStates(prev => {
                            const updated = { ...prev, [nextState]: true };
                            checkCompletion(nextState, updated);
                            return updated;
                          });
                          setS3Logs(prev => [...prev, log]);
                        }}>Insert Keycard</button>

                        <button className="btn-cyber" onClick={() => {
                          let nextState = s3State;
                          const log = { type: 'info', text: '' };
                          
                          if (s3State === 'OPEN') {
                            nextState = s3Rule2;
                            log.text = `Event: Pushed door. Mapped transition to: ${nextState}`;
                          } else if (s3State === 'CLOSED') {
                            nextState = s3Rule3;
                            log.text = `Event: Pushed door. Mapped transition to: ${nextState}`;
                          } else {
                            log.text = `Event: Pushed door. State is ${s3State}, event ignored.`;
                          }
                          
                          setS3State(nextState);
                          setS3VisitedStates(prev => {
                            const updated = { ...prev, [nextState]: true };
                            checkCompletion(nextState, updated);
                            return updated;
                          });
                          setS3Logs(prev => [...prev, log]);
                        }}>Push Door</button>

                        <button className="btn-cyber btn-cyber-red" onClick={() => {
                          let nextState = s3State;
                          const log = { type: 'info', text: '' };
                          
                          if (s3State === 'ALARM_LOCKED') {
                            nextState = s3Rule4;
                            log.text = `Event: Reset alarm button pressed. Mapped transition to: ${nextState}`;
                          } else {
                            log.text = `Event: Reset alarm button pressed. Alarm is offline, event ignored.`;
                          }
                          
                          setS3State(nextState);
                          setS3VisitedStates(prev => {
                            const updated = { ...prev, [nextState]: true };
                            checkCompletion(nextState, updated);
                            return updated;
                          });
                          setS3Logs(prev => [...prev, log]);
                        }}>Press Reset Alarm</button>
                      </div>

                      <div className="state-terminal-logs">
                        {s3Logs.map((log, idx) => (
                          <div key={idx} className="terminal-log-item">
                            ⚡ {log.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* FUNCTION TO CHECK COMPILATION FOR SESSION 3 STATE MACHINE */}
              {(() => {
                window.checkCompletion = (activeSt, visitedSt) => {
                  if (s3Success) return;
                  const allVisited = visitedSt.CLOSED && visitedSt.OPEN && visitedSt.ALARM_LOCKED;
                  const isSafeClosed = activeSt === 'CLOSED';
                  // Verification rules check
                  const correctRules = s3Rule1 === 'OPEN' && s3Rule2 === 'CLOSED' && s3Rule3 === 'ALARM_LOCKED' && s3Rule4 === 'CLOSED';
                  
                  if (allVisited && isSafeClosed && correctRules) {
                    setS3Success(true);
                    setS3Logs(prev => [...prev, { type: 'success', text: '✓ SYSTEM VALIDATION PASSED: Vault state transitions work correctly!' }]);
                    claimCaseEvidence('l1-s3', 100);
                  }
                };
              })()}

              {/* STANDARD PROMPT SANDBOX FOR LEVEL 2-4 */}
              {!['l1-s1', 'l1-s2', 'l1-s3'].includes(sandboxSessionId) && (
                <>
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
                            <span>Prompt Sandbox Empty.<br/>Fill out the prompt details on the left and click "Run AI Generator" to begin.</span>
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
                </>
              )}

            </div>
          )}

          {/* Prompt Journal View */}
          {activeTab === 'journal' && (
            <div className="tab-journal journal-layout animate-in">
              <div className="journal-sidebar-list">
                {journalEntries.map(entry => (
                  <div 
                    key={entry.id} 
                    className={`glass-panel journal-card ${selectedJournalId === entry.id ? 'selected' : ''}`}
                    onClick={() => { setSelectedJournalId(entry.id); setActiveJournalVersion(entry.version); }}
                  >
                    <div className="journal-card-header">
                      <span>{entry.date}</span>
                      <span>v{entry.version}</span>
                    </div>
                    <div className="journal-card-title">{entry.title}</div>
                    <div className="journal-card-meta">Prompt Specs: {entry.history.length} Versions</div>
                  </div>
                ))}
              </div>

              <div className="glass-panel journal-detail-view">
                {selectedJournal ? (
                  <>
                    <div className="journal-detail-header">
                      <h2 className="journal-detail-title">{selectedJournal.title}</h2>
                      <span className="journal-detail-date">LOGGED AT {selectedJournal.date}</span>
                    </div>

                    <div className="journal-history-nav">
                      {selectedJournal.history.map(hist => (
                        <button 
                          key={hist.version}
                          className={`version-nav-btn ${activeJournalVersion === hist.version ? 'active' : ''}`}
                          onClick={() => setActiveJournalVersion(hist.version)}
                        >
                          Version {hist.version}
                        </button>
                      ))}
                    </div>

                    <div className="prompt-comparison-box">
                      <div className="prompt-comparison-title">Structured Prompt Specification</div>
                      <div className="prompt-comparison-text">{activeJournalHistory?.prompt}</div>
                    </div>

                    <div className="diff-box-container">
                      <div className="diff-box-header">Code Output History</div>
                      <pre className="diff-lines-code">
                        {activeJournalHistory?.code}
                      </pre>
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 48 }}>
                    Select a Journal Entry on the left to review prompt specs and history.
                  </div>
                )}
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
                      {LEADERBOARD_INITIAL.map(agent => {
                        const isUser = agent.isCurrentUser;
                        const scorePoints = isUser ? points : agent.points;
                        return (
                          <tr key={agent.name} className={`leaderboard-row ${isUser ? 'current-user' : ''}`}>
                            <td className={`leaderboard-rank top-${agent.rank}`}>{agent.rank}</td>
                            <td className="leaderboard-username">
                              {agent.name}
                              {isUser && <span className="badge-cyber badge-cyan leaderboard-badge-me">YOU</span>}
                            </td>
                            <td>
                              <span className={`badge-cyber ${scorePoints > 1000 ? 'badge-purple' : scorePoints > 500 ? 'badge-cyan' : 'badge-green'}`}>
                                {scorePoints >= 1200 ? 'Master' : scorePoints >= 800 ? 'Senior' : 'Junior'}
                              </span>
                            </td>
                            <td>{agent.active}</td>
                            <td style={{ fontWeight: 600, color: 'var(--accent-cyan)' }}>{scorePoints} XP</td>
                          </tr>
                        );
                      })}
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
                              <th style={{ padding: 10, textAlign: 'right', color: 'var(--accent-cyan)' }}>Points</th>
                            </tr>
                          </thead>
                          <tbody>
                            {students.map(student => (
                              <tr key={student.id} style={{ borderBottom: '1px solid rgba(0, 242, 254, 0.05)' }}>
                                <td style={{ padding: 10, color: 'var(--text-primary)', fontWeight: 500 }}>{student.name}</td>
                                <td style={{ padding: 10, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{student.username}</td>
                                <td style={{ padding: 10, textAlign: 'right', color: 'var(--accent-cyan)', fontWeight: 600 }}>{student.points} XP</td>
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
    </div>
  );
}
