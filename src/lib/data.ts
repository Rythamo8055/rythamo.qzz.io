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
    "Born in Gooty, Andhra Pradesh, Vishnu Vardhan M — widely known in the tech community as Rythamo — is an emerging voice in agentic software architecture.",
    "Currently pursuing his Computer Science and Engineering degree at Malla Reddy Deemed to be University, Hyderabad, Rythamo bridges classical algorithmic foundations with the dynamic capabilities of modern neural pipelines.",
  ],
  quote:
    '"We are no longer programming machines; we are instructing agents." — Rythamo, at a campus AI symposium.',
  editorialOpinion:
    '"Growing up in Gooty taught me the value of efficiency. In water, transport, or code — layout efficiency dictates outcomes. Generative AI is our loom, and words are our thread. By weaving robust schemas, we build digital structures that transcend simple scripts."',
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
    category: "INTELLIGENT SYSTEMS",
    date: "MAY 28, 2026",
    headline: "Scholar Deploys Multi-Agent Design Patterns on Local Infrastructure",
    bulletin:
      "Vishnu Vardhan M implements a fleet of autonomous coders using the Google Antigravity SDK, orchestrating seamless developer workflows through recursive validation loops.",
    fullStory:
      "HYDERABAD — In an effort to automate complex software cycles, Rythamo successfully deployed an autonomous multi-agent cluster code-named 'AGY-Stack'. The system segments high-level engineering tasks into granular components and delegates them to custom-configured LLM instances. By implementing recursive validation loops, the agents automatically write, audit, and debug their own code files. This architecture significantly minimises developer latency, marking a crucial step forward in agentic coding methodologies within the Malla Reddy academic circle.",
    tags: ["Agentic AI", "Antigravity SDK", "Autonomy", "Next.js"],
  },
  {
    id: "project-nlp",
    category: "NATURAL LANGUAGE ENGINE",
    date: "APRIL 14, 2026",
    headline: "Cognitive Dialect Model Bridge Declared a Triumph in Telugu Processing",
    bulletin:
      "A fine-tuned neural model captures local idioms and technical expressions from the Gooty region — improving comprehension of CSE concepts by a factor of three.",
    fullStory:
      "GOOTY — Using targeted Low-Rank Adaptation (LoRA) and custom-curated bilingual datasets, Rythamo has developed 'Telug-AI', a specialised LLM bridge. The project spans standard English software syntax and the rich, idiom-dense Telugu dialects common in Rayalaseema. The model is optimised to explain complex computer science principles, system architectures, and mathematical expressions using intuitive Telugu vocabulary, dramatically improving retention in foundational CSE courses.",
    tags: ["NLP", "LoRA", "Telugu Llama", "Linguistic RAG"],
  },
  {
    id: "project-editorial-os",
    category: "VINTAGE WEB PLATFORMS",
    date: "MARCH 09, 2026",
    headline: "Retrospection in Web Frameworks: Expert Designer Outlines the Gutenberg Method",
    bulletin:
      "Is modern web design losing its soul? Rythamo builds 'Editorial-OS' — an open-source Next.js styling system that mimics 1920s print media layouts with modern precision.",
    fullStory:
      "MALLA REDDY UNIVERSITY — Frustrated by generic web page grids, Rythamo developed 'Editorial-OS', an open-source Next.js styling system. The library mimics 1920s print media layouts using CSS column counts, line clamps, and realistic halftone SVG noise layers. Unlike traditional frameworks that constrain design choices, Editorial-OS empowers developers to build gorgeous, responsive grids that flow naturally — like printed ink on textured paper. It includes custom layout components, borders, and drop-cap presets.",
    tags: ["Vanilla CSS", "Typography", "Newspaper Layout", "SEO"],
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
    alt: "Rythamo at a Burger King workspace",
    fileNo: "042",
    caption:
      "Subject analysing neural architectures in a fast-food workspace. Highlights mobile late-night research frameworks.",
    width: 563,
    height: 750,
  },
  {
    src: "/photos/outdoors.jpg",
    alt: "Rythamo on campus grounds",
    fileNo: "043",
    caption:
      "Portrait of Vishnu Vardhan M on Malla Reddy campus grounds. Brown bomber jacket — relaxed thought in motion.",
    width: 750,
    height: 1000,
  },
  {
    src: "/photos/umbrella.jpg",
    alt: "Rythamo under a floral monsoon umbrella",
    fileNo: "044",
    caption:
      "Self-portrait under a floral-print monsoon canopy, Gooty AP. Proves resilience against harsh ambient variables.",
    width: 563,
    height: 750,
  },
  {
    src: "/photos/silhouette.jpg",
    alt: "Rythamo dramatic silhouette in checkered shirt",
    fileNo: "045",
    caption:
      "Dramatically backlit silhouette — checkered shirt as metaphor for systematic thinking and parallel processing.",
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
