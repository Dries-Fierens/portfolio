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
    quality: "medium",
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
    quality: "medium",
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
    id: "graduation-work",
    title: "Graduation Work",
    roles: ["gameplayprogramming"],
    featured: true,
    quality: "high",
    oneLiner: "Research that explores Soulslike game design and gamification elements",
    thumbnail: "assets/projects/gameplay/graduation-work.gif",
    visuals: [
      "assets/projects/gameplay/graduation-work.gif",
      "assets/projects/gameplay/graduation-work.png"
    ],
    tech: ["C#", "Unity", "AI", "Soulslike"],
    breakdown: [
      "Implemented boss fight with Soulslike combat",
      "Added gamification elements to enhance player engagement",
      "Found flow between Soulslike mechanics and player experience"
    ],
    links: {
      video: "",
      repo: "https://github.com/Dries-Fierens/EldenWrong",
      article: "https://drive.google.com/file/d/1Q6D3rkl_ostYKmrQ0fYHxqTB0CBJcyf2/view?usp=sharing"
    }
  },
  {
    id: "group-projects",
    title: "Group projects",
    roles: ["gameplayprogramming"],
    featured: true,
    quality: "high",
    oneLiner: "Client project for Eye Blink Twice, The Garden",
    thumbnail: "assets/projects/gameplay/the-garden.jpg",
    visuals: [
      "assets/projects/gameplay/the-garden.jpg"
    ],
    tech: ["C#", "Unity", "Gameplay"],
    breakdown: [
      "Implemented backend for objects, editing, placing, erasing, and more",
      "Inspired by the Japanese garden in Hasselt",
      "Cozy building game with satisfying and creative gameplay"
    ],
    links: {
      video: "https://drive.google.com/drive/folders/13fUHcubpuRG3K5tZp7uTpR91ZCLo2hW2?usp=sharing",
      repo: "",
      article: "https://drive.google.com/drive/folders/13fUHcubpuRG3K5tZp7uTpR91ZCLo2hW2?usp=sharing"
    }
  },
  {
    id: "burger-time",
    title: "Burger Time",
    roles: ["gameplayprogramming"],
    featured: true,
    quality: "high",
    oneLiner: "Remake of the classic arcade game Burger Time",
    thumbnail: "assets/projects/gameplay/burger-time.gif",
    visuals: [
      "assets/projects/gameplay/burger-time.gif"
    ],
    tech: ["C++", "Engine", "Gameplay", "AI"],
    breakdown: [
      "Implemented a small 2D game engine to create a remake of any classic arcade game",
      "Learned 'Game Programming Patterns' by Robert Nystrom and Beautiful C++",
      "Available on github pages by using Emscripten"
    ],
    links: {
      video: "https://www.youtube.com/watch?v=QlPp7WEnaCI",
      repo: "https://github.com/Dries-Fierens/Prog4_BurgerTime_Fierens_Dries",
      article: "https://dries-fierens.github.io/Prog4_BurgerTime_Fierens_Dries/"
    }
  },
  {
    id: "zombie-game",
    title: "Zombie AI Game",
    roles: ["gameplayprogramming"],
    featured: true,
    quality: "high",
    oneLiner: "",
    thumbnail: "assets/projects/gameplay/zombie-game.gif",
    visuals: [
      "assets/projects/gameplay/zombie-game.gif"
    ],
    tech: ["C++", "Unreal Engine", "Survival", "AI"],
    breakdown: [
      "Created an AI which controls an agent in a simple zombie survival game",
      "Learned gameplay AI and mechanics like Steering behaviors, Flocking with space partitioning, Graphs, Astar, BFS, Navmeshes, EQS, Behavior trees, Blackboards, and more"
    ],
    links: {
      video: "",
      repo: "https://github.com/DAE-GD-2025-2026/gameai-zombie-Dries-Fierens",
      article: "https://github.com/DAE-GD-2025-2026/game-ai-project-Dries-Fierens"
    }
  },
  {
    id: "gameai-research-project",
    title: "Game AI Research Project",
    roles: ["gameplayprogramming"],
    featured: true,
    quality: "high",
    oneLiner: "Binary Space Partitioning for Dungeon Generation",
    thumbnail: "assets/projects/gameplay/binary-space-partitioning.png",
    visuals: [
      "assets/projects/gameplay/binary-space-partitioning.png"
    ],
    tech: ["C#", "Unity", "Procedural Generation", "Dungeon"],
    breakdown: [
      "Implemented Binary Space Partitioning for dungeon generation",
      "Procedurally generates specific rooms and corridors in partitions"
    ],
    links: {
      video: "",
      repo: "https://github.com/DAE-GD-2025-2026/gameai-research-project-Dries-Fierens",
      article: "https://github.com/DAE-GD-2025-2026/gameai-research-project-Dries-Fierens"
    }
  }
];