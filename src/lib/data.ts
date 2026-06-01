// =====================================================================
// lib/data.ts — Central content & data for The Rythamo Gazette
// Edit this file to update content without touching components.
// =====================================================================

export const AUTHOR = {
  fullName: "Vishnu Vardhan M",
  alias: "Rythamo",
  title: "Creative AI Engineer · CSE Student",
  university: "Malla Reddy Deemed to be University",
  location: "Gooty, Andhra Pradesh, India",
  city: "Gooty",
  state: "AP",
  github: "https://github.com/Rythamo8055",
  domain: "https://rythamo.qzz.io",
  email: "rythamo@example.com",
  bio: [
    "VISHNU VARDHAN M. CREATIVE AI ENGINEER.",
    "CSE @ MALLA REDDY UNIVERSITY. BORN IN GOOTY, AP.",
  ],
  quote:
    '"WE INSTRUCT AGENTS. WE DON\'T TYPE SCRIPTS."',
  editorialOpinion:
    'Generative AI is our loom. We build structures that transcend code. Total autonomy.',
} as const;

// =====================================================================
// PROJECTS / SPECIAL REPORTS
// =====================================================================

export interface Project {
  id: string;
  category: string;
  date: string;
  headline: string;
  bulletin: string;
  fullStory: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "project-agentic",
    category: "AI",
    date: "2026",
    headline: "MULTI-AGENT INFRASTRUCTURE",
    bulletin: "Fleet of autonomous coders deployed via Antigravity SDK. Recursive loops achieved.",
    fullStory: "AGY-Stack segments engineering tasks to LLMs. Zero human intervention.",
    tags: ["Agentic", "AGY", "Autonomous"],
  },
  {
    id: "project-nlp",
    category: "NLP",
    date: "2026",
    headline: "TELUGU LLM BRIDGE",
    bulletin: "Fine-tuned neural model captures local Gooty idioms.",
    fullStory: "Telug-AI uses LoRA to translate complex CSE architecture into fluent Rayalaseema Telugu.",
    tags: ["NLP", "LoRA", "Telugu"],
  },
  {
    id: "project-editorial-os",
    category: "DESIGN",
    date: "2026",
    headline: "BRUTALIST WEB",
    bulletin: "Editorial-OS: 1920s print media logic meets modern Next.js grids.",
    fullStory: "Minimalism. High contrast. Zero bloat. The new standard for web layout.",
    tags: ["CSS", "Brutalism", "Next.js"],
  },
];

// =====================================================================
// PHOTO GALLERY / ARCHIVES
// =====================================================================

export interface Photo {
  src: string;
  alt: string;
  fileNo: string;
  caption: string;
  width: number;
  height: number;
}

export const PHOTOS: Photo[] = [
  {
    src: "/photos/cafe.jpg",
    alt: "Rythamo workspace",
    fileNo: "01",
    caption: "LATE NIGHT. MOBILE FRAMEWORKS.",
    width: 563,
    height: 750,
  },
  {
    src: "/photos/outdoors.jpg",
    alt: "Rythamo campus",
    fileNo: "02",
    caption: "MALLA REDDY CAMPUS.",
    width: 750,
    height: 1000,
  },
  {
    src: "/photos/umbrella.jpg",
    alt: "Rythamo monsoon",
    fileNo: "03",
    caption: "MONSOON. GOOTY.",
    width: 563,
    height: 750,
  },
  {
    src: "/photos/silhouette.jpg",
    alt: "Rythamo silhouette",
    fileNo: "04",
    caption: "SYSTEMATIC THINKING.",
    width: 750,
    height: 750,
  },
];

// =====================================================================
// SKILLS / CLASSIFIED ADS
// =====================================================================

export const SKILLS = [
  {
    id: "skill-agents",
    category: "SERVICES",
    name: "AGENT ORCHESTRATION",
    detail:
      "Multi-agent LLM systems. Google Antigravity SDK, prompt engineering, recursive validation, human-in-the-loop safeguards.",
  },
  {
    id: "skill-fullstack",
    category: "TECHNICAL",
    name: "FULL STACK DEVELOPMENT",
    detail:
      "Next.js 15, TypeScript, Tailwind, Vanilla CSS, relational SQL. High-performance portfolios and headless CMS integrations.",
  },
  {
    id: "skill-aiml",
    category: "AI / ML",
    name: "CUSTOM DATA TRAINING",
    detail:
      "Vector DB, semantic RAG systems, LoRA fine-tuning, dataset curation, Telugu language model adjustments.",
  },
] as const;

// =====================================================================
// TICKER MESSAGES
// =====================================================================

export const TICKER_MESSAGES = [
  "RYTHAMO INDEX: +4.2% AI WORKFLOWS",
  "MALLA REDDY COHORT: HIGHLY ACTIVE",
  "GOOTY, AP — ORIGIN NODE DECLARED",
  "AGENTIC COMPILER FRAMEWORKS: OPERATIONAL",
  "NEXT.JS 15 APP RUNNING ONLINE",
  "TYPESCRIPT COMPILER STATUS: ✓ SUCCESS",
  "EMBLEM LOGO STAMP: VERIFIED",
  "EDITORIAL-OS v1.0 — SHIPPED",
];
