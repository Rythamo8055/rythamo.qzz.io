"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

// Define Project and Photographic Archive data structure
interface Project {
  id: string;
  category: string;
  date: string;
  headline: string;
  bulletin: string;
  fullStory: string;
  tags: string[];
}

export default function NewspaperPortfolio() {
  const [activeStory, setActiveStory] = useState<Project | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [telegramData, setTelegramData] = useState({
    sender: "",
    address: "",
    urgency: "ORDINARY",
    message: "",
  });

  const dialogRef = useRef<HTMLDialogElement>(null);

  const projects: Project[] = [
    {
      id: "project-1",
      category: "INTELLIGENT SYSTEMS",
      date: "MAY 28, 2026",
      headline: "SCHOLAR DEPLOYS MULTI-AGENT DESIGN PATTERNS ON LOCAL INFRASTRUCTURE",
      bulletin: "A breakthrough study on task decomposition: Vishnu Vardhan M implements a fleet of autonomous coders, utilizing Google Antigravity SDK variables to orchestrate seamless developer workflows.",
      fullStory: "HYDERABAD — In an effort to automate complex software cycles, Vishnu Vardhan M (Rythamo) successfully deployed an autonomous multi-agent cluster. Code-named 'AGY-Stack', the system segments high-level engineering tasks into granular components and delegates them to custom-configured LLM instances. By implementing recursive validation loops, the agents automatically write, audit, and debug their code files. This architecture significantly minimizes developer latency, marking a crucial step forward in agentic coding methodologies within the Malla Reddy academic circle.",
      tags: ["Agentic AI", "Antigravity SDK", "Autonomy", "Next.js"],
    },
    {
      id: "project-2",
      category: "NATURAL LANGUAGE ENGINE",
      date: "APRIL 14, 2026",
      headline: "COGNITIVE DIALECT MODEL BRIDGE DECLARED A TRIUMPH IN TELUGU PROCESSING",
      bulletin: "Addressing linguistic boundaries: A highly fine-tuned neural model captures local idioms and technical expressions from the Gooty region, improving translation speeds by a factor of three.",
      fullStory: "GOOTY — Utilizing targeted Low-Rank Adaptation (LoRA) and custom-curated bilingual datasets, Rythamo has developed 'Telug-AI', a specialized LLM bridge. The project bridges standard English software syntax with rich, idiom-dense Telugu dialects common in Rayalaseema. The model is specifically optimized to explain complex computer science principles, system architectures, and mathematical expressions using intuitive Telugu vocabulary. Feedback from students indicates a dramatic surge in comprehension and retention of foundational CSE courses.",
      tags: ["NLP", "LoRA", "Telugu Llama", "Linguistic RAG"],
    },
    {
      id: "project-3",
      category: "VINTAGE WEB PLATFORMS",
      date: "MARCH 09, 2026",
      headline: "RETROSPECTION IN WEB FRAMEWORKS: EXPERT DESIGNER OUTLINES GUTENBERG METHOD",
      bulletin: "Is modern web design losing its soul? Vishnu Vardhan M writes a custom CSS/JS module package enabling gorgeous, highly responsive column columns, drop caps, and newsprint layouts.",
      fullStory: "MALLA REDDY UNIVERSITY — Frustrated by generic web page grids, Rythamo developed 'Editorial-OS', an open-source Next.js styling system. The library mimics 1920s print media layouts, utilizing CSS column counts, line clamps, and realistic halftone SVG noise layers. Unlike traditional frameworks that constrain design choices, Editorial-OS empowers developers to build gorgeous, responsive grids that flow naturally like printed ink on textured paper. It includes custom layout components, borders, and drop cap presets.",
      tags: ["Vanilla CSS", "Typography", "Newspaper Layouts", "SEO Core"],
    },
  ];

  const handleOpenStory = (story: Project) => {
    setActiveStory(story);
    dialogRef.current?.showModal();
  };

  const handleCloseStory = () => {
    dialogRef.current?.close();
    setActiveStory(null);
  };

  const handleTelegramSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (telegramData.sender && telegramData.address && telegramData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setTelegramData({ sender: "", address: "", urgency: "ORDINARY", message: "" });
      }, 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow flex flex-col justify-between">
      {/* 1. TOP UTILITY BAR / TICKER */}
      <div className="w-full border-b border-ink py-1 text-xs font-typewriter flex flex-wrap justify-between items-center opacity-85 mb-4 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-red inline-block animate-pulse"></span>
          <span>STATUS: GENERATING SYSTEM ONLINE</span>
        </div>
        <div className="hidden sm:block">LOCAL TIME: {new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
        <div>EDITION: GOOTY & HYDERABAD</div>
      </div>

      {/* 2. THE MASTHEAD */}
      <header className="w-full text-center select-none">
        {/* Newspaper Issue Details */}
        <div className="grid grid-cols-3 border-b-2 border-ink py-2 text-xs font-typewriter tracking-wider opacity-85 uppercase">
          <div className="text-left font-bold">VOL. I • NO. 1</div>
          <div className="text-center font-bold">"PRINTERS OF CREATIVE COGNITION"</div>
          <div className="text-right font-bold">AP, INDIA</div>
        </div>

        {/* Brand Banner */}
        <div className="py-6 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-double-ink border-ink my-1">
          {/* Weather Widget (Left) */}
          <div className="hidden md:flex flex-col text-left font-typewriter text-xs border border-ink p-3 w-48 relative bg-paper-dark">
            <div className="absolute -top-2 left-3 bg-paper px-2 font-bold border border-ink text-[10px] tracking-tight">WEATHER ARCHIVE</div>
            <span className="font-bold">LOCATION: GOOTY, AP</span>
            <span>TEMP: 38°C (WARM BEIGE)</span>
            <span>WIND: 12 KNOTS GENAI</span>
            <span>HUMIDITY: 100% SERIF</span>
          </div>

          {/* Main Title Banner */}
          <div className="flex flex-col items-center select-none px-2 text-center">
            <h1 className="text-[clamp(1.75rem,5vw,4.5rem)] font-extrabold font-serif-display tracking-tight text-ink uppercase leading-none">
              The Rythamo Gazette
            </h1>
            <p className="mt-2 text-xs sm:text-sm font-typewriter tracking-widest uppercase opacity-75 text-center">
              INCORPORATING THE MALLA REDDY CHRONICLE • ESTABLISHED 2026
            </p>
          </div>

          {/* Custom Stamp Emblem Logo (Right) */}
          <div className="flex items-center justify-center">
            <div className="relative w-28 h-28 cursor-pointer select-none" title="Official Seal of Rythamo">
              {/* Rotating Emblem background */}
              <div className="absolute inset-0 emblem-stamp-spin">
                <Image
                  src="/logo.svg"
                  alt="Ry_ Emblem Stamp"
                  width={112}
                  height={112}
                  priority
                  className="opacity-95"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Newspaper Meta Subheader Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-ink py-2 text-xs sm:text-sm font-serif-display italic tracking-wide select-none">
          <div className="text-left sm:border-r border-ink border-opacity-30 pr-2">Issue Price: 1 Idea</div>
          <div className="text-center sm:border-r border-ink border-opacity-30 px-2 hidden sm:block">Special Reports: Generative AI</div>
          <div className="text-center sm:border-r border-ink border-opacity-30 px-2 hidden sm:block">Campus: Malla Reddy Deemed University</div>
          <div className="text-right pl-2">Classified Ads: Section B</div>
        </div>
      </header>

      {/* 3. FRONT PAGE LAYOUT (MAIN STORY & HERO) */}
      <main className="mt-6 flex-grow">
        {/* Main Editorial Grid - reflows beautifully across mobile (1 col), tablet (2 cols), and desktop (3 cols/12-span) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 border-b-2 border-ink pb-8">
          
          {/* Column A (Sidebar Bio): Left 3 columns on LG, Left half on MD, stacks on mobile */}
          <aside className="md:col-span-1 lg:col-span-3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-ink border-opacity-35 pb-6 md:pb-0 md:pr-6">
            <div className="space-y-4">
              <span className="text-[10px] font-sans-modern tracking-widest font-extrabold uppercase px-2 py-0.5 ink-badge inline-block">
                THE CORRESPONDENT
              </span>
              <h3 className="text-xl font-bold font-serif-display leading-tight border-b border-ink border-dashed pb-2">
                Who is Rythamo?
              </h3>
              <p className="text-sm font-serif-text leading-relaxed text-ink-light text-justify text-wrap pretty">
                Born in <strong>Gooty</strong>, Andhra Pradesh, <strong>Vishnu Vardhan M</strong> (widely addressed in the tech community as <strong>Rythamo</strong>) is an emerging voice in agentic software architecture.
              </p>
              <p className="text-sm font-serif-text leading-relaxed text-ink-light text-justify text-wrap pretty">
                Currently pursuing his Computer Science and Engineering curriculum at <strong>Malla Reddy Deemed to be University</strong>, Rythamo bridges traditional algorithmic academic fundamentals with the dynamic capabilities of modern neural pipelines.
              </p>
              <div className="bg-paper-dark border border-ink p-3 rounded-none font-typewriter text-xs space-y-1 mt-4">
                <div className="font-bold border-b border-ink pb-1 uppercase tracking-tight">INDEX PROFILE:</div>
                <div>NAME: Vishnu Vardhan M</div>
                <div>PREFERRED: Rythamo</div>
                <div>BORN: Gooty, AP</div>
                <div>CAMPUS: MRU, Hyderabad</div>
                <div>FOCUS: Generative AI</div>
              </div>
            </div>

            {/* Minor Classified Box at bottom of Sidebar */}
            <div className="mt-6 pt-6 border-t border-ink border-opacity-30">
              <span className="text-[10px] font-typewriter font-bold uppercase tracking-wider block text-ink-muted mb-2">ADVERTISEMENT:</span>
              <div className="border-2 border-ink p-3 text-center bg-paper-light">
                <h4 className="font-serif-display font-extrabold text-sm uppercase tracking-wider">AGENTIC CONSULTING</h4>
                <p className="text-[10px] font-typewriter mt-1">High-quality system architecture and integrations. Dial: +91 RYTHAMO</p>
              </div>
            </div>
          </aside>

          {/* Column B (Main Hero Image & Lead Editorial): Center 6 columns on LG, Full width on MD to keep headlines imposing and legible */}
          <section className="md:col-span-2 lg:col-span-6 space-y-6 order-first lg:order-none">
            <div className="space-y-3">
              <span className="text-xs font-sans-modern font-black tracking-widest text-accent-red uppercase block">
                ★ SPECIAL DISPATCH ★
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif-display leading-tight text-ink uppercase text-wrap balance tracking-tight">
                CSE Scholar Declared Generative AI Engineer at Malla Reddy Deemed University
              </h2>
              <p className="text-base sm:text-lg font-serif-text italic text-ink-light leading-snug">
                "We are no longer programming machines; we are instructing agents," asserts Rythamo during a recent symposium on campus grounds.
              </p>
            </div>

            {/* Framed Editorial Photo - Preserves full vertical portrait without any cropping */}
            <div className="space-y-2">
              <div className="photo-print-frame w-full overflow-hidden">
                <Image
                  src="/photos/outdoors.jpg"
                  alt="Vishnu Vardhan M (Rythamo) on campus"
                  width={800}
                  height={1100}
                  className="w-full h-auto object-contain photo-print-image"
                  priority
                />
              </div>
              <p className="text-xs font-serif-text italic text-ink-muted border-b border-ink border-opacity-20 pb-2">
                <strong>FIG. 1:</strong> Vishnu Vardhan M, commonly known as <strong>Rythamo</strong>, posing in front of Malla Reddy Deemed to be University. Photographed during seasonal campus AI research.
              </p>
            </div>

            {/* Double column lead paragraph */}
            <div className="columns-1 sm:columns-2 gap-6 text-sm font-serif-text leading-relaxed text-justify text-ink-light drop-cap">
              <p className="drop-cap text-wrap pretty">
                As the paradigm of traditional computing continues to bend toward neural integration, the next wave of computer scientists are transforming into system choreographers. Vishnu Vardhan M, a promising software engineer at Malla Reddy University, is spearheading this localized transition. With a rigorous computer science foundation, Rythamo focuses his efforts on constructing robust agentic networks capable of autonomous code generation, parsing, and real-time environment execution. 
              </p>
              <p className="mt-4 sm:mt-0 text-wrap pretty">
                His technical portfolio showcases a deep specialization in Large Language Model (LLM) orchestration, structured JSON outputs, and safe schema integration. "The ultimate goal is creating interfaces that feel organic, alive, and mathematically coherent," he reports, describing the intersection of vintage aesthetics and state-of-the-art computational pipelines.
              </p>
            </div>
          </section>

          {/* Column C (Secondary Story & Skills Classifieds): Right 3 columns on LG, Right half on MD, stacks on mobile */}
          <aside className="md:col-span-1 lg:col-span-3 space-y-6 md:pl-6 border-t md:border-t-0 md:border-l border-ink border-opacity-35 pt-6 md:pt-0">
            {/* Editorial Opinion Column */}
            <div className="space-y-3 pb-6 border-b border-ink border-opacity-30">
              <span className="text-[10px] font-sans-modern tracking-widest font-black uppercase text-accent-blue block">
                EDITORIAL COLUMN
              </span>
              <h4 className="text-lg font-bold font-serif-display leading-tight text-ink uppercase text-wrap balance">
                From Gooty to the Frontier of Neural Design
              </h4>
              <p className="text-xs font-typewriter text-ink-muted">BY RYTHAMO</p>
              <p className="text-xs font-serif-text leading-relaxed text-ink-muted text-justify text-wrap pretty">
                "Growing up in Gooty, AP, taught me the value of efficiency. In water distribution, transport, or code: layout efficiency dictates outcomes. Generative AI is our loom, and words are our thread. By weaving robust schemas, we build digital structures that transcend simple scripts."
              </p>
            </div>

            {/* Classified Ads Section (Skills) */}
            <div className="space-y-4">
              <div className="text-center bg-ink text-paper py-1 select-none">
                <span className="text-[10px] font-typewriter font-bold uppercase tracking-widest">
                  CLASSIFIED ADS - SEC. B
                </span>
              </div>
              
              <div className="space-y-3 divide-y divide-ink divide-opacity-20 font-typewriter text-xs">
                {/* Skill 1 */}
                <div className="pt-2">
                  <h5 className="font-bold text-accent-red uppercase tracking-wider">SERVICES: AGENT ORCHESTRATION</h5>
                  <p className="text-[11px] text-ink-muted leading-relaxed mt-1 text-wrap pretty">
                    Design & deployment of multi-agent LLM systems. Expertise in Google Antigravity SDK, prompt framing, recursive validation, and human-in-the-loop safeguards. Sat. Guaranteed.
                  </p>
                </div>

                {/* Skill 2 */}
                <div className="pt-3">
                  <h5 className="font-bold text-accent-red uppercase tracking-wider">TECHNICAL: FULL STACK DEVELOPMENT</h5>
                  <p className="text-[11px] text-ink-muted leading-relaxed mt-1 text-wrap pretty">
                    High-performance portfolios, headless CMS integrations, custom CSS/JS. Expert handling of Next.js 15, TypeScript, Tailwind, and relational SQL connectors. Call Ry_.
                  </p>
                </div>

                {/* Skill 3 */}
                <div className="pt-3">
                  <h5 className="font-bold text-accent-red uppercase tracking-wider">AI/ML: CUSTOM DATA TRAINING</h5>
                  <p className="text-[11px] text-ink-muted leading-relaxed mt-1 text-wrap pretty">
                    Vector DB setup, semantic RAG systems, model fine-tuning with LoRA, dataset curation, and Telugu language model adjustments. Highly efficient pipelines.
                  </p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </main>

      {/* 4. THE EDITORIALS & PROJECTS SECTION (SPECIAL REPORTS) */}
      <section className="py-10 border-b-2 border-ink">
        <div className="text-center mb-8 select-none">
          <span className="text-xs font-sans-modern tracking-widest font-black uppercase text-accent-blue inline-block mb-1">
            SECTION II: FEATURES & TECHNICAL INVENTIONS
          </span>
          <h2 className="text-3xl font-extrabold font-serif-display tracking-tight text-ink uppercase text-wrap balance">
            Special Bulletins & Project Reports
          </h2>
          <div className="w-24 h-1 border-t-2 border-double-ink border-ink mx-auto mt-2"></div>
        </div>

        {/* Reflows to 2 columns on tablet and 3 columns on desktop for visual balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="editorial-card border border-ink p-5 flex flex-col justify-between space-y-4 rounded-none bg-paper-light relative"
            >
              <div className="space-y-2">
                {/* Category & Date */}
                <div className="flex justify-between items-center text-[10px] font-typewriter text-ink-muted border-b border-ink border-opacity-20 pb-2">
                  <span>{project.category}</span>
                  <span>{project.date}</span>
                </div>
                
                {/* Project Headline */}
                <h3 className="text-lg font-bold font-serif-display leading-snug text-ink uppercase my-2 text-wrap pretty tracking-tight">
                  {project.headline}
                </h3>
                
                {/* Short Bulletin summary */}
                <p className="text-sm font-serif-text text-ink-light leading-relaxed text-justify line-clamp-4 text-wrap pretty">
                  {project.bulletin}
                </p>
              </div>

              <div className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[9px] font-typewriter uppercase tracking-tight px-1.5 py-0.5 border border-ink border-opacity-30 bg-paper-dark"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read button - PY-3 provides a perfect minimum 44px tap target zone for touchscreens */}
                <button
                  onClick={() => handleOpenStory(project)}
                  className="w-full text-center py-3 border border-ink font-typewriter text-xs font-bold uppercase hover:bg-ink hover:text-paper transition-all cursor-pointer rounded-none active:translate-y-0.5"
                >
                  Read Full Report &rarr;
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. PHOTOGRAPHIC ARCHIVES (GALLERY) */}
      <section className="py-10 border-b-2 border-ink">
        <div className="text-center mb-8 select-none">
          <span className="text-xs font-sans-modern tracking-widest font-black uppercase text-accent-red inline-block mb-1">
            SECTION III: PHOTOGRAPHIC ARCHIVES
          </span>
          <h2 className="text-3xl font-extrabold font-serif-display tracking-tight text-ink uppercase text-wrap balance">
            Image Gallery & Catalogues
          </h2>
          <div className="w-24 h-1 border-t-2 border-double-ink border-ink mx-auto mt-2"></div>
        </div>

        {/* Gallery Grid - Preserves full vertical portrait aspect ratios without any cropping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Photo A (Cafe) */}
          <div className="space-y-2">
            <div className="photo-print-frame w-full overflow-hidden">
              <Image
                src="/photos/cafe.jpg"
                alt="Rythamo sitting in Cafe workspace"
                width={800}
                height={1200}
                className="w-full h-auto object-contain photo-print-image"
              />
            </div>
            <div className="p-2 border border-ink bg-paper-dark text-xs space-y-1 font-serif-text italic">
              <div><strong>FILE NO. 042</strong></div>
              <p className="text-[11px] text-ink-muted leading-tight text-wrap pretty">
                Subject analyzing neural architectures inside a fast-food workspace. Highlights mobile late-night research frameworks.
              </p>
            </div>
          </div>

          {/* Photo B (Outdoors Smiling) */}
          <div className="space-y-2">
            <div className="photo-print-frame w-full overflow-hidden">
              <Image
                src="/photos/outdoors.jpg"
                alt="Rythamo campus portrait smiling"
                width={800}
                height={1200}
                className="w-full h-auto object-contain photo-print-image"
              />
            </div>
            <div className="p-2 border border-ink bg-paper-dark text-xs space-y-1 font-serif-text italic">
              <div><strong>FILE NO. 043</strong></div>
              <p className="text-[11px] text-ink-muted leading-tight text-wrap pretty">
                Academic profile shot of Vishnu Vardhan M at Malla Reddy University. Smile highlights successful deployment of local systems.
              </p>
            </div>
          </div>

          {/* Photo C (Selfie Umbrella) */}
          <div className="space-y-2">
            <div className="photo-print-frame w-full overflow-hidden">
              <Image
                src="/photos/umbrella.jpg"
                alt="Rythamo under green umbrella"
                width={800}
                height={1200}
                className="w-full h-auto object-contain photo-print-image"
              />
            </div>
            <div className="p-2 border border-ink bg-paper-dark text-xs space-y-1 font-serif-text italic">
              <div><strong>FILE NO. 044</strong></div>
              <p className="text-[11px] text-ink-muted leading-tight text-wrap pretty">
                Self-captured portrait under a floral print monsoon canopy in Gooty, AP. Proves resilience against harsh ambient variables.
              </p>
            </div>
          </div>

          {/* Photo D (Silhouette check shirt) */}
          <div className="space-y-2">
            <div className="photo-print-frame w-full overflow-hidden">
              <Image
                src="/photos/silhouette.jpg"
                alt="Rythamo dramatic silhouette"
                width={800}
                height={1200}
                className="w-full h-auto object-contain photo-print-image"
              />
            </div>
            <div className="p-2 border border-ink bg-paper-dark text-xs space-y-1 font-serif-text italic">
              <div><strong>FILE NO. 045</strong></div>
              <p className="text-[11px] text-ink-muted leading-tight text-wrap pretty">
                Dramatically backlit back-silhouette highlighting checkered shirt pattern. Symbolic of deep-thought compiler debugging.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. LETTERS TO THE EDITOR (CONTACT TELEGRAM FORM) */}
      <section className="py-10">
        <div className="max-w-2xl mx-auto border-4 border-double-ink border-ink p-6 sm:p-8 bg-paper-light relative">
          
          {/* Top Telegram Header */}
          <div className="text-center border-b border-ink border-opacity-35 pb-4 mb-6 select-none">
            <h3 className="text-2xl font-black font-serif-display tracking-tight text-ink uppercase">
              INDIAN TELEGRAPH SYSTEM
            </h3>
            <span className="text-[10px] font-typewriter uppercase tracking-widest text-ink-muted">
              EST. 2026 • DIRECT ROUTE: GOOTY &harr; HYDERABAD
            </span>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="inline-block px-4 py-2 border-2 border-accent-red font-typewriter text-sm text-accent-red font-bold uppercase animate-pulse">
                ▲ TELEGRAM DISPATCHED SUCCESSFULLY ▲
              </div>
              <p className="font-serif-text text-sm text-ink-light">
                "Thank you for contacting the editor. Your message is currently queueing on the copper lines. STOP."
              </p>
              <p className="font-typewriter text-xs text-ink-muted">
                RESPONSE EXPECTED SHORTLY.
              </p>
            </div>
          ) : (
            <form onSubmit={handleTelegramSubmit} className="space-y-4">
              
              {/* Sender Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-typewriter text-xs">
                <div className="space-y-1">
                  <label htmlFor="sender" className="font-bold uppercase tracking-wider block">1. SENDER NAME:</label>
                  <input
                    type="text"
                    id="sender"
                    required
                    value={telegramData.sender}
                    onChange={(e) => setTelegramData({ ...telegramData, sender: e.target.value })}
                    placeholder="E.G. PROFESSOR RADHA / RECRUITER"
                    className="w-full bg-paper border border-ink p-2 rounded-none outline-none focus:bg-paper-light focus:border-accent-red"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="address" className="font-bold uppercase tracking-wider block">2. TELEGRAPH ADDRESS (EMAIL):</label>
                  <input
                    type="email"
                    id="address"
                    required
                    value={telegramData.address}
                    onChange={(e) => setTelegramData({ ...telegramData, address: e.target.value })}
                    placeholder="E.G. CORRESPONDENT@DOMAIN.COM"
                    className="w-full bg-paper border border-ink p-2 rounded-none outline-none focus:bg-paper-light focus:border-accent-red"
                  />
                </div>
              </div>

              {/* Urgency selection */}
              <div className="font-typewriter text-xs space-y-1">
                <label htmlFor="urgency" className="font-bold uppercase tracking-wider block">3. DISPATCH CLASS (URGENCY):</label>
                <select
                  id="urgency"
                  value={telegramData.urgency}
                  onChange={(e) => setTelegramData({ ...telegramData, urgency: e.target.value })}
                  className="w-full bg-paper border border-ink p-2 rounded-none outline-none focus:bg-paper-light font-typewriter text-xs"
                >
                  <option value="ORDINARY">ORDINARY (SLOW DISPATCH)</option>
                  <option value="URGENT">URGENT (IMMEDIATE DECODER RESPONSE)</option>
                  <option value="PRESS RELEASE">PRESS RELEASE (OFFICIAL OFFER SHEETS)</option>
                </select>
              </div>

              {/* Message content */}
              <div className="font-typewriter text-xs space-y-1">
                <label htmlFor="message" className="font-bold uppercase tracking-wider block">
                  4. MESSAGE BODY (PLEASE USE 'STOP' TO CONCLUDE CLAUSES):
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={telegramData.message}
                  onChange={(e) => setTelegramData({ ...telegramData, message: e.target.value })}
                  placeholder="EX. INTERESTED IN INTEGRATING CHASSIS FOR MULTI-AGENT COMPILER WORKFLOWS STOP CORRESPONDENCE REQUIRED STOP"
                  className="w-full bg-paper border border-ink p-2 rounded-none outline-none focus:bg-paper-light focus:border-accent-red uppercase"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-[10px] font-typewriter text-ink-muted text-center sm:text-left">
                  * ALL DISPATCHES ARE PROCESSED BY THE RYTHAMO API HUB.
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 border-2 border-ink bg-ink text-paper font-typewriter text-xs font-bold uppercase tracking-widest hover:bg-paper hover:text-ink transition-all cursor-pointer rounded-none active:translate-y-0.5"
                >
                  SEND TELEGRAM &rarr;
                </button>
              </div>

            </form>
          )}

          {/* Background watermarked stamp decorative element */}
          <div className="absolute top-16 right-10 select-none opacity-[0.04] pointer-events-none hidden sm:block">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="#1f1d1a" strokeWidth="4"/>
              <text x="50" y="55" fontFamily="Georgia" fontSize="24" textAnchor="middle" fill="#1f1d1a" fontWeight="bold">DELIVERED</text>
            </svg>
          </div>

        </div>
      </section>

      {/* 7. DIALOG COMPONENT FOR PROJECTS DETAIL STORY */}
      <dialog 
        ref={dialogRef}
        onClose={handleCloseStory}
        className="w-[90%] max-w-2xl border-4 border-ink p-6 sm:p-8 bg-paper font-serif-text text-ink relative focus:outline-none backdrop:bg-ink backdrop:opacity-60"
      >
        {activeStory && (
          <div className="space-y-4">
            
            {/* Top dialogue category details */}
            <div className="flex justify-between items-center text-xs font-typewriter text-ink-muted border-b border-ink border-opacity-35 pb-2">
              <span className="text-accent-red font-bold">{activeStory.category}</span>
              <span>{activeStory.date}</span>
            </div>

            {/* Huge dynamic headline */}
            <h2 className="text-2xl sm:text-3xl font-black font-serif-display leading-tight uppercase my-2">
              {activeStory.headline}
            </h2>

            {/* Divider */}
            <div className="w-full h-0.5 border-t border-ink border-opacity-35"></div>

            {/* Story contents */}
            <div className="text-sm sm:text-base leading-relaxed text-justify text-ink-light space-y-4 drop-cap">
              {/* Split paragraph by full-stop for a column effect inside the dialog */}
              <p className="drop-cap">
                {activeStory.fullStory}
              </p>
            </div>

            {/* Bottom tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-ink border-opacity-20">
              {activeStory.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs font-typewriter uppercase px-2 py-0.5 border border-ink border-opacity-35 bg-paper-dark"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Close stamp buttons */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={handleCloseStory}
                className="px-6 py-2 border border-ink font-typewriter text-xs uppercase hover:bg-ink hover:text-paper transition-all cursor-pointer rounded-none"
              >
                CLOSE BULLETIN [x]
              </button>
            </div>

          </div>
        )}
      </dialog>

      {/* 8. FOOTER INDEX TICKER */}
      <footer className="w-full border-t border-ink mt-8 select-none">
        {/* Links bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 py-4 text-xs font-typewriter text-center sm:text-left border-b border-ink border-opacity-25 gap-4">
          <div>
            <strong>OFFICIAL CHANNELS:</strong><br />
            Github: <a href="https://github.com/Rythamo8055" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-red">github.com/Rythamo8055</a>
          </div>
          <div className="sm:text-center">
            <strong>OFFICIAL RESIDENCE:</strong><br />
            Gooty, Anantapur District, Andhra Pradesh, India
          </div>
          <div className="sm:text-right">
            <strong>PORTFOLIO HUB:</strong><br />
            Domain: <a href="https://rythamo.qzz.io" className="underline hover:text-accent-blue">rythamo.qzz.io</a>
          </div>
        </div>

        {/* Scrolling index ticker */}
        <div className="w-full bg-ink text-paper py-2 overflow-hidden select-none border-t border-ink">
          <div className="ticker-marquee text-[11px] font-typewriter font-bold uppercase tracking-widest gap-8 whitespace-nowrap">
            <span>RYTHAMO INDEX: +4.2% AI WORKFLOWS &bull;</span>
            <span>MALLA REDDY UNIVERSITY COHORT: HIGHLY ACTIVE &bull;</span>
            <span>GOOTY AP DECLARED ORIGIN NODE &bull;</span>
            <span>AGENTIC COMPILER FRAMEWORKS: OPERATIONAL &bull;</span>
            <span>NEXT.JS 15 APP RUNNING ONLINE &bull;</span>
            <span>TS COMPILER STATUS: SUCCESS &bull;</span>
            <span>EMBLEM LOGO STAMP: VERIFIED &bull;</span>
            {/* Duplicate for infinite effect */}
            <span>RYTHAMO INDEX: +4.2% AI WORKFLOWS &bull;</span>
            <span>MALLA REDDY UNIVERSITY COHORT: HIGHLY ACTIVE &bull;</span>
            <span>GOOTY AP DECLARED ORIGIN NODE &bull;</span>
            <span>AGENTIC COMPILER FRAMEWORKS: OPERATIONAL &bull;</span>
            <span>NEXT.JS 15 APP RUNNING ONLINE &bull;</span>
            <span>TS COMPILER STATUS: SUCCESS &bull;</span>
            <span>EMBLEM LOGO STAMP: VERIFIED &bull;</span>
          </div>
        </div>

        <div className="text-center py-2 text-[9px] font-typewriter opacity-60">
          COPYRIGHT &copy; 2026 THE RYTHAMO GAZETTE. ALL RIGHTS PRESERVED. PRODUCED BY GEMINI AGENTS IN BASH SANDBOX.
        </div>
      </footer>
    </div>
  );
}
