window.PROJECTS = [
  // =========================
  // TOOL DEVELOPMENT PROJECTS
  // =========================
  {
    id: "quest-graph-editor",
    title: "Quest Graph Editor",
    roles: ["tooldev"],
    featured: true,
    quality: "high",
    oneLiner: "Built a visual quest authoring tool that reduced scripting mistakes and sped up iteration time.",
    thumbnail: "assets/projects/tooldev/quest-graph-thumb.gif",
    visuals: [
      "assets/projects/tooldev/quest-graph-thumb.gif",
      "assets/projects/tooldev/quest-graph-02.jpg"
    ],
    tech: ["C++", "Unreal", "Slate/UMG", "JSON"],
    breakdown: [
      "Created node-based quest editing with validation rules.",
      "Implemented search, copy/paste, and graph diff support.",
      "Added export pipeline for runtime quest data."
    ],
    links: {
      video: "",
      repo: "",
      article: ""
    }
  },
  {
    id: "batch-import-pipeline",
    title: "Batch Import & Validation Pipeline",
    roles: ["tooldev"],
    featured: true,
    quality: "high",
    oneLiner: "Automated asset ingestion and validation to catch naming/config errors before integration.",
    thumbnail: "assets/projects/tooldev/batch-import-thumb.gif",
    visuals: [
      "assets/projects/tooldev/batch-import-thumb.gif",
      "assets/projects/tooldev/batch-import-02.jpg"
    ],
    tech: ["Python", "CLI", "YAML", "CI"],
    breakdown: [
      "Implemented folder watchers and batch processors for content teams.",
      "Added validation reports and auto-fix suggestions.",
      "Integrated checks into CI to prevent broken assets from merging."
    ],
    links: {
      video: "",
      repo: "",
      article: ""
    }
  },
  {
    id: "savegame-debugger",
    title: "Savegame Inspector & Debugger",
    roles: ["tooldev"],
    featured: false,
    quality: "high",
    oneLiner: "Built an internal savegame inspector that made reproduction and debugging significantly faster.",
    thumbnail: "assets/projects/tooldev/savegame-debug-thumb.jpg",
    visuals: [
      "assets/projects/tooldev/savegame-debug-thumb.jpg",
      "assets/projects/tooldev/savegame-debug-02.jpg"
    ],
    tech: ["C++", "ImGui", "Serialization", "Profiling"],
    breakdown: [
      "Implemented snapshot compare between save states.",
      "Added filtering by system/entity/component keys.",
      "Included quick-jump links from errors to offending data blocks."
    ],
    links: {
      video: "",
      repo: "",
      article: ""
    }
  },

  // =========================
  // GAMEPLAY PROGRAMMING PROJECTS
  // =========================
  {
    id: "melee-combat-system",
    title: "Melee Combat System Prototype",
    roles: ["gameplayprogramming"],
    featured: true,
    quality: "high",
    oneLiner: "Designed responsive melee combat with input buffering, cancel windows, and hit-stop feedback.",
    thumbnail: "assets/projects/gameplay/melee-combat-thumb.gif",
    visuals: [
      "assets/projects/gameplay/melee-combat-thumb.gif",
      "assets/projects/gameplay/melee-combat-02.jpg"
    ],
    tech: ["C++", "Unreal", "Animation Blueprints", "State Machines"],
    breakdown: [
      "Implemented combo chains with frame-window tuning tools.",
      "Built hit reaction logic and camera impulse feedback.",
      "Added data-driven move definitions for rapid balancing."
    ],
    links: {
      video: "",
      repo: "",
      article: ""
    }
  },
  {
    id: "melee-combat-system",
    title: "Melee Combat System Prototype",
    roles: ["gameplayprogramming"],
    featured: true,
    quality: "high",
    oneLiner: "Designed responsive melee combat with input buffering, cancel windows, and hit-stop feedback.",
    thumbnail: "assets/projects/gameplay/melee-combat-thumb.gif",
    visuals: [
      "assets/projects/gameplay/melee-combat-thumb.gif",
      "assets/projects/gameplay/melee-combat-02.jpg"
    ],
    tech: ["C++", "Unreal", "Animation Blueprints", "State Machines"],
    breakdown: [
      "Implemented combo chains with frame-window tuning tools.",
      "Built hit reaction logic and camera impulse feedback.",
      "Added data-driven move definitions for rapid balancing."
    ],
    links: {
      video: "",
      repo: "",
      article: ""
    }
  },
  {
    id: "enemy-ai-encounters",
    title: "Enemy AI & Encounter Director",
    roles: ["gameplayprogramming"],
    featured: true,
    quality: "high",
    oneLiner: "Created modular enemy behaviors and encounter pacing logic for more readable combat scenarios.",
    thumbnail: "assets/projects/gameplay/enemy-ai-thumb.gif",
    visuals: [
      "assets/projects/gameplay/enemy-ai-thumb.gif",
      "assets/projects/gameplay/enemy-ai-02.jpg"
    ],
    tech: ["Behavior Trees", "EQS", "Blackboard", "Debug Tools"],
    breakdown: [
      "Implemented role-based AI (flanker, pressure, ranged).",
      "Built utility-scored action selection for adaptive behavior.",
      "Added debug overlays for perception, targets, and state transitions."
    ],
    links: {
      video: "",
      repo: "",
      article: ""
    }
  },
  {
    id: "movement-traversal",
    title: "Character Movement & Traversal",
    roles: ["gameplayprogramming"],
    featured: false,
    quality: "high",
    oneLiner: "Implemented traversal mechanics focused on clarity, responsiveness, and reliable edge-case handling.",
    thumbnail: "assets/projects/gameplay/movement-traversal-thumb.gif",
    visuals: [
      "assets/projects/gameplay/movement-traversal-thumb.gif",
      "assets/projects/gameplay/movement-traversal-02.jpg"
    ],
    tech: ["C++", "Root Motion", "IK", "Collision Queries"],
    breakdown: [
      "Built vault, mantle, and ledge-climb systems.",
      "Added predictive traces and fallback states to reduce failures.",
      "Created tuning variables for designers to iterate without code changes."
    ],
    links: {
      video: "",
      repo: "",
      article: ""
    }
  }
];