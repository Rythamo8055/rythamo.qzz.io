"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AUTHOR, PROJECTS, PHOTOS, SKILLS, TICKER_MESSAGES } from "@/lib/data";

export default function Home() {
  // Loading & Seal Animation States
  const [loading, setLoading] = useState(true);
  const [stampActive, setStampActive] = useState(false);
  const [splitActive, setSplitActive] = useState(false);

  // Telegraph wire state
  const [senderName, setSenderName] = useState("");
  const [telegramBody, setTelegramBody] = useState("");
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    // 1. Stamp down the seal after 300ms
    const stampTimer = setTimeout(() => {
      setStampActive(true);
    }, 300);

    // 2. Crack/Split the seal open after 1600ms
    const splitTimer = setTimeout(() => {
      setSplitActive(true);
    }, 1600);

    // 3. Complete loading phase after 2300ms
    const endTimer = setTimeout(() => {
      setLoading(false);
    }, 2300);

    return () => {
      clearTimeout(stampTimer);
      clearTimeout(splitTimer);
      clearTimeout(endTimer);
    };
  }, []);

  const handleSendTelegram = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !telegramBody) return;
    setIsSent(true);
  };

  const handleResetTelegram = () => {
    setSenderName("");
    setTelegramBody("");
    setIsSent(false);
  };

  return (
    <>
      {/* ── 1. BREAKING-SEAL LOADING OVERLAY ── */}
      {loading && (
        <div 
          id="loading-seal-overlay"
          className={`fixed inset-0 z-50 flex items-center justify-center bg-paper overflow-hidden select-none pointer-events-none transition-opacity duration-700 ${splitActive ? "opacity-0" : "opacity-100"}`}
        >
          {/* Left Flap */}
          <div className={`absolute top-0 left-0 w-1/2 h-full bg-paper border-r border-ink/10 transition-transform duration-800 ease-in-out ${splitActive ? "-translate-x-full" : "translate-x-0"}`} />
          
          {/* Right Flap */}
          <div className={`absolute top-0 right-0 w-1/2 h-full bg-paper border-l border-ink/10 transition-transform duration-800 ease-in-out ${splitActive ? "translate-x-full" : "translate-x-0"}`} />

          {/* Central Concentric Seal (Stamps & splits) */}
          <div className={`absolute flex items-center justify-center transition-all duration-700 ease-out ${stampActive ? "scale-100 opacity-100" : "scale-[2] opacity-0"} ${splitActive ? "scale-110 opacity-0" : ""}`}>
            {/* Left Seal Half */}
            <div 
              className={`absolute transition-transform duration-700 ease-in-out ${splitActive ? "-translate-x-32 rotate-[-12deg]" : "translate-x-0"}`}
              style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
            >
              <Image 
                src="/logo.svg" 
                alt="Emblem Left Half" 
                width={200} 
                height={200} 
                className="w-40 h-40 sm:w-56 sm:h-56 filter drop-shadow-md"
                priority
              />
            </div>

            {/* Right Seal Half */}
            <div 
              className={`absolute transition-transform duration-700 ease-in-out ${splitActive ? "translate-x-32 rotate-[12deg]" : "translate-x-0"}`}
              style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
            >
              <Image 
                src="/logo.svg" 
                alt="Emblem Right Half" 
                width={200} 
                height={200} 
                className="w-40 h-40 sm:w-56 sm:h-56 filter drop-shadow-md"
                priority
              />
            </div>
            
            {/* Loading Action Text */}
            <div className="absolute top-[120%] text-center font-sans-modern text-[10px] tracking-[0.3em] font-black uppercase text-accent/80 animate-pulse">
              VERIFYING CREDENTIALS...
            </div>
          </div>
        </div>
      )}

      {/* ── 2. PORTFOLIO LAYOUT ── */}
      <main className="min-h-screen bg-paper text-ink p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto flex flex-col items-center select-text">
        
        {/* ── HEADER (MASTHEAD) ── */}
        <header className="w-full text-center border-double-thick mb-1 pb-1">
          <div className="flex justify-between items-center px-4">
            <div className="font-serif-display italic uppercase text-xs sm:text-sm font-black tracking-widest flex-1 text-left hidden md:block text-ink-light">
              ★ SPECIAL REPORT ★<br />
              <span className="text-[10px] tracking-[0.2em] font-sans-modern font-bold text-accent">CREATIVE AI DISPATCH</span>
            </div>
            
            <div className="flex-1 flex justify-center items-center gap-4 sm:gap-6 py-3">
              <h1 className="font-gothic text-4xl sm:text-6xl lg:text-[6.5rem] leading-none tracking-tight text-ink font-bold select-none">
                The Rythamo
              </h1>
              
              {/* Spinning Brand Emblem Stamp */}
              <div className="w-14 h-14 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center cursor-pointer relative" title="Slowly Spinning Emblem Stamp (EST. 2026)">
                <Image
                  src="/logo.svg"
                  alt="Rythamo Verified Emblem Stamp"
                  width={96}
                  height={96}
                  className="w-full h-full emblem-spin shrink-0 select-none"
                  priority
                />
              </div>
              
              <h1 className="font-gothic text-4xl sm:text-6xl lg:text-[6.5rem] leading-none tracking-tight text-ink font-bold select-none">
                Gazette
              </h1>
            </div>

            <div className="font-serif-display italic uppercase text-xs sm:text-sm font-black tracking-widest flex-1 text-right hidden md:block text-ink-light">
              ★ GOOTY EST. 2026 ★<br />
              <span className="text-[10px] tracking-[0.2em] font-sans-modern font-bold text-accent">MALLA REDDY UNIVERSITY</span>
            </div>
          </div>
        </header>

        {/* ── SUBHEADER BAR ── */}
        <div className="w-full flex justify-between items-center border-b-[6px] border-ink pb-2 mb-6 font-serif-text uppercase font-bold text-[9px] sm:text-xs tracking-widest px-4 select-none">
          <div className="flex-1 text-left">VOL. 2026, NO. 1</div>
          <div className="flex-1 text-center hidden sm:block text-accent">THE RYTHAMO GAZETTE — ALL RIGHTS VERIFIED</div>
          <div className="flex-1 text-right">GOOTY, AP / HYDERABAD</div>
        </div>

        {/* ── MASSIVE HEADLINE ── */}
        <div className="w-full text-center border-b-[6px] border-ink pb-5 sm:pb-7 mb-6 overflow-hidden">
          <h2 className="headline-massive text-ink font-bold">
            AGENTIC AI GONE PUNK ROCK
          </h2>
        </div>

        {/* ── MAIN NEWSPAPER GRID ── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[2.1fr_1fr] gap-8">
          
          {/* ───────────────── LEFT COLUMN (2/3 width) ───────────────── */}
          <div className="flex flex-col">
            
            {/* Lead Photo outdoors.jpg (Width/Height exact aspect ratio, no cropping) */}
            <div className="w-full border-[3px] border-ink overflow-hidden mb-3 bg-paper-dark relative">
              <div className="absolute top-2 left-2 bg-ink text-paper font-sans-modern text-[9px] tracking-wider uppercase font-bold px-2 py-0.5 z-10 select-none">
                CORRESPONDENT ARCHIVE // FILE-02
              </div>
              <Image
                src="/photos/outdoors.jpg"
                alt="Rythamo outdoors portrait"
                width={750}
                height={1000}
                priority
                className="w-full h-auto object-contain newspaper-photo select-none"
              />
            </div>
            
            {/* Lead Photo Caption */}
            <div className="font-sans-modern text-[10px] uppercase tracking-wider text-ink-muted border-b border-ink/20 pb-3 mb-4 select-none flex justify-between">
              <span>FILE NO. 02 — VISHNU VARDHAN M. DIRECTIVE CAMPUS ARCHIVE.</span>
              <span className="font-bold text-accent">750 × 1000 PX (100% UN-CROPPED)</span>
            </div>
            
            {/* Lead Biography Story */}
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr] gap-6 mb-8">
              <h3 className="font-anton text-4xl sm:text-5xl uppercase leading-[0.95] tracking-tight border-b-2 md:border-b-0 md:border-r border-ink pb-4 md:pb-0 md:pr-4 text-ink select-none">
                AUTONOMY<br />
                THE NEW<br />
                <span className="text-accent">PUNK ROCK?</span>
              </h3>
              
              <div className="font-serif-text text-sm sm:text-base text-justify leading-relaxed text-ink-light">
                <p className="mb-3 italic font-semibold text-ink drop-cap">
                  What is punk rock? Rythamo has given us a new definition. To build systems that think for themselves, even if the whole world relies on manual code.
                </p>
                <p className="mb-3">
                  He has given developers hope. A kind of hope we've never seen before in the AI era. Originating from Gooty, AP, and navigating the rigors of Computer Science at Malla Reddy University, Vishnu Vardhan M effectively shows us how intelligent logic transcends boundaries. He was not outcasted by the rigid structures of legacy code, but rather he has convinced us that repetitive scripting is not his calling.
                </p>
                <p>
                  "We construct agents. We don't type scripts." By leveraging the Google Antigravity SDK, he is creating high-fidelity autonomous loops. This is not just technical optimization; it's a structural rebellion.
                </p>
              </div>
            </div>

            {/* In-article Beautiful Quote Block */}
            <div className="border-t-[3px] border-b-[3px] border-ink py-4 mb-8 text-center select-none bg-paper-light">
              <blockquote className="font-serif-display italic font-black text-xl sm:text-2xl text-accent max-w-2xl mx-auto leading-normal">
                {AUTHOR.quote}
              </blockquote>
              <cite className="block font-sans-modern text-[10px] tracking-widest uppercase font-bold text-ink-muted mt-2">
                — {AUTHOR.fullName}, {AUTHOR.title}
              </cite>
            </div>

            {/* SECTION: SPECIAL REPORTS (PROJECTS) */}
            <section className="border-t-[4px] border-ink pt-6 mb-6">
              <h4 className="font-anton text-2xl uppercase tracking-wider mb-6 text-accent border-b border-ink pb-2 select-none flex justify-between items-center">
                <span>★ SPECIAL STORY INTEL: PROJECTS</span>
                <span className="font-sans-modern text-[10px] tracking-widest text-ink-muted">VOL. XXVI</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Left Sub-Column: Project List */}
                <div className="flex flex-col gap-6">
                  {PROJECTS.map((project) => (
                    <article key={project.id} className="border border-ink/40 p-4 bg-paper-light relative">
                      <div className="flex justify-between items-baseline mb-2 border-b border-ink/10 pb-1 select-none">
                        <span className="font-sans-modern text-[9px] font-black uppercase text-accent tracking-widest bg-accent/10 px-1.5 py-0.5 rounded">
                          {project.category}
                        </span>
                        <span className="font-serif-text text-xs italic font-bold text-ink-muted">
                          REPORTED IN {project.date}
                        </span>
                      </div>
                      
                      <h5 className="font-anton text-xl uppercase tracking-tight text-ink mb-1.5">
                        {project.headline}
                      </h5>
                      
                      <p className="font-serif-text text-xs sm:text-sm text-ink-light leading-relaxed mb-3">
                        {project.bulletin} <span className="italic font-semibold text-ink-muted">{project.fullStory}</span>
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 select-none">
                        {project.tags.map((tag) => (
                          <span key={tag} className="font-sans-modern text-[9px] tracking-wider uppercase font-bold bg-ink text-paper px-2 py-0.5">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>

                {/* Right Sub-Column: Photo umbrella.jpg & Photo silhouette.jpg */}
                <div className="flex flex-col gap-5">
                  
                  {/* Photo umbrella.jpg (Width/Height exact aspect ratio, no cropping) */}
                  <div className="border-[3px] border-ink bg-paper-dark overflow-hidden relative">
                    <div className="absolute top-2 left-2 bg-ink text-paper font-sans-modern text-[8px] tracking-wider uppercase font-bold px-1.5 py-0.5 z-10 select-none">
                      CORRESPONDENT ARCHIVE // FILE-03
                    </div>
                    <Image
                      src="/photos/umbrella.jpg"
                      alt="Rythamo monsoon portrait"
                      width={563}
                      height={750}
                      className="w-full h-auto object-contain newspaper-photo select-none"
                    />
                  </div>
                  
                  <div className="font-sans-modern text-[9px] uppercase tracking-wider text-ink-muted border-b border-ink/20 pb-2 mb-2 select-none flex justify-between">
                    <span>MONSOON DIRECTIVE — GOOTY origin.</span>
                    <span className="font-bold text-accent">563 × 750 PX</span>
                  </div>

                  {/* Photo silhouette.jpg (Width/Height exact aspect ratio, no cropping) */}
                  <div className="border-[3px] border-ink bg-paper-dark overflow-hidden relative">
                    <div className="absolute top-2 left-2 bg-ink text-paper font-sans-modern text-[8px] tracking-wider uppercase font-bold px-1.5 py-0.5 z-10 select-none">
                      SYSTEM LOGIC GRAPHIC // FILE-04
                    </div>
                    <Image
                      src="/photos/silhouette.jpg"
                      alt="Rythamo silhouette portrait"
                      width={750}
                      height={750}
                      className="w-full h-auto object-contain newspaper-photo select-none"
                    />
                  </div>
                  
                  <div className="font-sans-modern text-[9px] uppercase tracking-wider text-ink-muted pb-2 select-none flex justify-between">
                    <span>SYSTEMATIC THINKING ENGRAVING.</span>
                    <span className="font-bold text-accent">750 × 750 PX (1:1 RAW)</span>
                  </div>

                </div>

              </div>
            </section>

          </div>

          {/* ───────────────── RIGHT COLUMN (1/3 width - SIDEBAR) ───────────────── */}
          <div className="flex flex-col border-t-4 lg:border-t-0 lg:border-l border-ink pt-6 lg:pt-0 lg:pl-6">
            
            {/* Saturated gold accent EXCLUSIVE Box */}
            <div className="bg-accent text-paper p-4 font-anton text-3xl sm:text-4xl text-center uppercase tracking-wider leading-none mb-6 border-[3px] border-ink select-none relative overflow-hidden">
              {/* Halftone diagonal lines background effect for vintage premium seal look */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  background: "repeating-linear-gradient(45deg, transparent, transparent 10px, var(--bg-paper) 10px, var(--bg-paper) 20px)"
                }}
              />
              <span className="relative z-10">★ SPECIAL ★</span><br />
              <span className="relative z-10 text-paper font-black">EXCLUSIVE</span><br />
              <span className="relative z-10 text-paper/85 text-2xl tracking-widest font-serif-display italic lowercase font-bold">rythamo dispatch</span>
            </div>

            {/* Editorial Statement */}
            <div className="border-b-[3px] border-ink pb-4 mb-6">
              <h4 className="font-anton text-lg uppercase tracking-wider mb-2 text-accent select-none">
                EDITORIAL INK STATEMENTS
              </h4>
              <p className="font-serif-text text-sm sm:text-base text-justify leading-relaxed text-ink-light">
                <span className="font-gothic text-4xl text-accent float-left font-black mr-2 select-none">W</span>e are no longer programming machines; we are instructing agents. Growing up in <strong className="text-accent">Gooty, Andhra Pradesh</strong> taught me the value of layout efficiency. In water, transport, or code — efficiency dictates outcomes. Generative AI is our loom, and words are our thread. By weaving robust schemas, we build digital structures that transcend simple scripts.
              </p>
            </div>

            {/* Photo cafe.jpg (Width/Height exact aspect ratio, no cropping) */}
            <div className="w-full border-[3px] border-ink overflow-hidden bg-paper-dark relative">
              <div className="absolute top-2 left-2 bg-ink text-paper font-sans-modern text-[8px] tracking-wider uppercase font-bold px-1.5 py-0.5 z-10 select-none">
                CORRESPONDENT ARCHIVE // FILE-01
              </div>
              <Image
                src="/photos/cafe.jpg"
                alt="Rythamo workspace in cafe"
                width={563}
                height={750}
                className="w-full h-auto object-contain newspaper-photo select-none"
              />
            </div>
            
            {/* Secondary Photo Caption */}
            <div className="font-sans-modern text-[9px] uppercase tracking-wider text-ink-muted border-b border-ink pb-3 mb-6 select-none flex justify-between mt-2">
              <span>FILE NO. 01 — LATE NIGHT WORKSPACE STATUS.</span>
              <span className="font-bold text-accent">563 × 750 PX</span>
            </div>

            {/* SECTION: CLASSIFIED ADS (SKILLS) */}
            <section className="mb-6">
              <h4 className="font-anton text-xl uppercase tracking-wider mb-4 border-b-2 border-ink pb-1 select-none flex justify-between items-center text-accent">
                <span>CLASSIFIED ADVERTISEMENTS</span>
                <span className="font-sans-modern text-[9px] text-ink-muted font-bold">RATE: FREE</span>
              </h4>

              <div className="flex flex-col gap-4">
                {SKILLS.map((skill) => (
                  <div key={skill.id} className="border border-ink/40 p-3 bg-paper-light">
                    <div className="flex justify-between items-center mb-1 border-b border-ink/10 pb-0.5 select-none">
                      <span className="font-sans-modern text-[8px] font-bold uppercase text-ink-muted tracking-widest">
                        {skill.category}
                      </span>
                      <span className="font-sans-modern text-[8px] font-bold uppercase text-accent tracking-widest">
                        ★ SECURE ★
                      </span>
                    </div>
                    <h5 className="font-anton text-sm uppercase text-ink mb-1">
                      {skill.name}
                    </h5>
                    <p className="font-serif-text text-xs text-ink-light leading-relaxed">
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: INDIAN TELEGRAPH SYSTEM (CONTACT FORM) */}
            <section className="border-t-2 border-ink pt-6 mb-6">
              <div className="bg-paper-dark border-2 border-ink p-4 relative overflow-hidden IndianTelegraph">
                
                {/* DELIVERED Custom Wax-Seal Stamp Overlay when message is sent */}
                {isSent && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-paper-dark/95 z-20 animate-[scaleUp_0.4s_ease-out]"
                    onClick={handleResetTelegram}
                    title="Click to reset wire form"
                  >
                    <div className="border-4 border-double border-accent text-accent rounded-full w-40 h-40 flex flex-col items-center justify-center rotate-[-12deg] bg-paper p-2 select-none cursor-pointer hover:scale-105 transition-transform duration-300">
                      <span className="font-sans-modern text-[9px] font-bold tracking-widest">INDIAN TELEGRAPH</span>
                      <span className="font-anton text-2xl tracking-wider my-0.5">DELIVERED</span>
                      <span className="font-serif-display italic text-[10px] font-bold">est. 2026</span>
                      <span className="font-sans-modern text-[8px] font-bold tracking-widest text-ink-muted mt-1">CLICK TO RESET WIRE</span>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center border-b border-ink pb-2 mb-4 select-none">
                  <h4 className="font-sans-modern text-xs font-black tracking-widest uppercase text-ink">
                    INDIAN TELEGRAPH WIRE FORM
                  </h4>
                  <span className="font-serif-text text-xs italic font-bold text-accent">GOOTY LOCAL</span>
                </div>

                <form onSubmit={handleSendTelegram} className="flex flex-col gap-3 font-sans-modern text-xs">
                  
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name-input" className="font-black uppercase tracking-wider text-[10px] text-ink-muted">
                      SENDER IDENTITY (NAME / ORG):
                    </label>
                    <input 
                      id="name-input"
                      type="text" 
                      placeholder="ENTER SENDER SURNAME..."
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="bg-paper border border-ink p-2 outline-none font-sans-modern uppercase font-bold text-ink placeholder:text-ink/40 tracking-wider text-xs focus:border-accent"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-black uppercase tracking-wider text-[10px] text-ink-muted">
                      RECIPIENT DIRECTIVE:
                    </label>
                    <input 
                      type="text" 
                      readOnly
                      value="VISHNU VARDHAN M (RYTHAMO)" 
                      className="bg-paper-dark border border-ink/40 p-2 outline-none font-sans-modern uppercase font-bold text-ink-muted tracking-wider text-xs select-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="message-input" className="font-black uppercase tracking-wider text-[10px] text-ink-muted">
                      TELEGRAM WIRE BODY CONTENT:
                    </label>
                    <textarea 
                      id="message-input"
                      rows={4}
                      placeholder="ENTER WIRE DISPATCH STOP KEYWORDS ONLY STOP..."
                      required
                      value={telegramBody}
                      onChange={(e) => setTelegramBody(e.target.value)}
                      className="bg-paper border border-ink p-2 outline-none font-sans-modern uppercase font-bold text-ink placeholder:text-ink/40 tracking-wider text-xs resize-none focus:border-accent"
                    />
                  </div>

                  <button 
                    id="submit-telegram"
                    type="submit" 
                    className="w-full bg-ink text-paper font-anton text-base uppercase tracking-wider py-2.5 hover:bg-accent hover:text-paper transition-colors duration-300 border border-ink cursor-pointer mt-1"
                  >
                    TRANSMIT WIRE DISPATCH STOP
                  </button>
                  
                </form>
              </div>
            </section>

          </div>

        </div>

        {/* ── FOOTER STOCK TICKER MARQUEE ── */}
        <footer className="w-full bg-ink text-paper py-2 mt-12 mb-4 overflow-hidden border-t-8 border-paper shadow-[0_-4px_0_0_#111] select-none">
          <div className="relative w-full flex items-center overflow-hidden">
            <div className="flex whitespace-nowrap ticker-animate">
              {/* Duplicate the array twice to ensure seamless continuous looping */}
              {[...TICKER_MESSAGES, ...TICKER_MESSAGES, ...TICKER_MESSAGES].map((msg, index) => (
                <div key={index} className="inline-flex items-center font-sans-modern font-black uppercase tracking-[0.2em] text-xs sm:text-base px-6">
                  <span>{msg}</span>
                  <span className="text-accent ml-6">✴</span>
                </div>
              ))}
            </div>
          </div>
        </footer>

        {/* ── SIGN-OFF LICENSE CREDITS ── */}
        <div className="w-full text-center font-sans-modern text-[9px] text-ink-muted uppercase tracking-widest pb-4 select-none">
          © 2026 THE RYTHAMO GAZETTE · MADE BY VISHNU VARDHAN M (RYTHAMO) · ORIGIN AT GOOTY, AP.
        </div>

      </main>
    </>
  );
}
