// =====================================================================
// components/sections/FrontPage.tsx
// The hero editorial spread — bold photo + lead headline + bio sidebar
// KEY DESIGN INTENT:
//   • Photo fills the full centre column, not cropped, displayed top-to-bottom
//   • Headline is MASSIVE — poster-sized typographic statement
//   • Gold accent used deliberately: drop cap, gold rule, badges
//   • Dense layout — no wasted whitespace, tight like a real broadsheet
// =====================================================================
import Image from "next/image";
import { AUTHOR, SKILLS } from "@/lib/data";

export function FrontPage() {
  return (
    <section
      aria-label="Front Page"
      className="mt-0 grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-ink"
      style={{ borderTop: "2px solid #110F0C" }}
    >
      {/* ── COL A: BIO SIDEBAR ── */}
      <aside
        className="lg:col-span-3 border-b-2 lg:border-b-0 lg:border-r border-ink flex flex-col justify-between p-5 gap-6 bg-paper-dark/30"
        aria-label="Correspondent profile"
      >
        {/* Identity card */}
        <div className="space-y-4">
          <div className="ink-badge self-start">THE CORRESPONDENT</div>

          <h3
            className="text-2xl font-black font-serif-display leading-tight border-b border-ink pb-3 pt-1"
            style={{ borderBottomStyle: "dashed" }}
          >
            Who is<br />Rythamo?
          </h3>

          {AUTHOR.bio.map((para, i) => (
            <p
              key={i}
              className="text-sm font-serif-text leading-[1.75] text-ink-light"
            >
              {para}
            </p>
          ))}

          {/* Index card */}
          <div className="border border-ink/50 bg-paper-dark p-3 font-typewriter text-[11px] space-y-1 mt-2">
            <div className="font-bold border-b border-ink/30 pb-1 uppercase tracking-wider text-[10px] mb-2">
              ▪ INDEX PROFILE
            </div>
            <div>
              <span className="text-ink/50">NAME</span>{" "}
              <strong>{AUTHOR.fullName}</strong>
            </div>
            <div>
              <span className="text-ink/50">ALIAS</span>{" "}
              <strong>{AUTHOR.alias}</strong>
            </div>
            <div>
              <span className="text-ink/50">BORN</span>{" "}
              <strong>{AUTHOR.city}, AP</strong>
            </div>
            <div>
              <span className="text-ink/50">CAMPUS</span>{" "}
              <strong>MRU, Hyderabad</strong>
            </div>
            <div>
              <span className="text-ink/50">FOCUS</span>{" "}
              <strong>Generative AI</strong>
            </div>
          </div>
        </div>

        {/* Quote pull-out */}
        <blockquote
          className="border-l-4 border-[#6A5D21] pl-4 font-serif-text italic text-sm text-ink-light leading-relaxed"
        >
          {AUTHOR.editorialOpinion}
          <cite className="block mt-2 font-typewriter not-italic text-[10px] text-ink/50 uppercase tracking-wider">
            — By {AUTHOR.alias}
          </cite>
        </blockquote>

        {/* Mini classified — skills */}
        <div className="space-y-2 border-t border-ink/25 pt-4">
          <div
            className="text-center text-[9px] font-typewriter font-bold uppercase tracking-widest py-1 px-2"
            style={{ background: "#110F0C", color: "#F5EFE4" }}
          >
            CLASSIFIED ADS · SEC. B
          </div>
          <div className="divide-y divide-ink/15 font-typewriter text-[11px]">
            {SKILLS.map((skill) => (
              <div key={skill.id} className="py-2 space-y-0.5">
                <div className="font-bold text-[#6A5D21] uppercase text-[10px] tracking-wider">
                  {skill.category}: {skill.name}
                </div>
                <p className="text-ink/60 leading-relaxed">{skill.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* ── COL B: MAIN HERO ── */}
      <div className="lg:col-span-6 border-b-2 lg:border-b-0 lg:border-r border-ink flex flex-col">
        {/* Huge headline — the editorial POSTER moment */}
        <div className="px-5 pt-6 pb-4 space-y-3 border-b border-ink/30">
          <span className="text-[10px] font-typewriter font-black tracking-[0.25em] text-[#8B1A1A] uppercase">
            ★ SPECIAL DISPATCH ★
          </span>
          <h2
            className="font-black font-serif-display leading-[0.92] uppercase text-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}
          >
            CSE Scholar Declared Generative AI Engineer at Malla&nbsp;Reddy Deemed University
          </h2>
          <p className="font-serif-display italic text-base text-ink-light leading-snug border-b border-ink/25 pb-3">
            {AUTHOR.quote}
          </p>
        </div>

        {/* ── HERO PHOTO — full portrait, no crop, full width ── */}
        <div className="flex-1 relative" style={{ minHeight: "420px" }}>
          {/* Photo: object-position top keeps the face visible */}
          <div className="photo-hero w-full h-full relative" style={{ minHeight: "420px" }}>
            <Image
              src="/photos/outdoors.jpg"
              alt="Vishnu Vardhan M (Rythamo) on Malla Reddy campus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Caption overlay at bottom of photo */}
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-3 z-20"
            style={{ background: "rgba(17,15,12,0.72)", backdropFilter: "blur(2px)" }}
          >
            <p className="font-typewriter text-[10px] text-white/80 uppercase tracking-wider">
              <strong className="text-[#C4B060]">FIG. 1:</strong> Vishnu Vardhan M
              (Rythamo) on Malla Reddy Deemed to be University campus. Brown
              quilted bomber jacket — photographed during AI research season.
            </p>
          </div>
        </div>

        {/* Lead editorial columns */}
        <div
          className="px-5 py-5 drop-cap"
          style={{
            columns: "2",
            columnGap: "2.5rem",
            columnRule: "1px solid rgba(17,15,12,0.2)",
          }}
        >
          <p className="font-serif-text text-[15px] leading-[1.75] text-ink-light text-justify">
            As the paradigm of traditional computing bends toward neural
            integration, the next generation of computer scientists are
            transforming into system choreographers. Vishnu Vardhan M, a
            promising software engineer at Malla Reddy University, is
            spearheading this localised transition with a rigorous CSE
            foundation and sharp focus on agentic networks.
          </p>
          <p className="mt-4 font-serif-text text-[15px] leading-[1.75] text-ink-light text-justify break-inside-avoid">
            &ldquo;The ultimate goal is creating interfaces that feel organic,
            alive, and mathematically coherent,&rdquo; he reports — describing
            the intersection of vintage aesthetics with state-of-the-art
            computational pipelines. His portfolio showcases LLM orchestration,
            structured JSON outputs, and safe schema integration.
          </p>
        </div>
      </div>

      {/* ── COL C: PHOTO SPREAD SIDEBAR ── */}
      <aside
        className="lg:col-span-3 flex flex-col gap-0 bg-ink/[0.015]"
        aria-label="Photo archive sidebar"
      >
        {/* Wide cafe photo — landscape feel */}
        <div className="relative border-b border-ink" style={{ height: "260px" }}>
          <div className="photo-hero w-full h-full relative">
            <Image
              src="/photos/cafe.jpg"
              alt="Rythamo at a Burger King workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover object-top"
            />
          </div>
          <div
            className="absolute bottom-0 inset-x-0 px-3 py-2 z-20"
            style={{ background: "rgba(17,15,12,0.75)" }}
          >
            <p className="font-typewriter text-[9px] text-white/75 uppercase tracking-wider leading-tight">
              <strong className="text-[#C4B060]">FILE 042</strong> — Analysing neural
              architectures in a fast-food workspace. Late-night research framework.
            </p>
          </div>
        </div>

        {/* Umbrella photo */}
        <div className="relative border-b border-ink" style={{ height: "280px" }}>
          <div className="photo-hero w-full h-full relative">
            <Image
              src="/photos/umbrella.jpg"
              alt="Rythamo under a floral monsoon umbrella"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover object-top"
            />
          </div>
          <div
            className="absolute bottom-0 inset-x-0 px-3 py-2 z-20"
            style={{ background: "rgba(17,15,12,0.75)" }}
          >
            <p className="font-typewriter text-[9px] text-white/75 uppercase tracking-wider leading-tight">
              <strong className="text-[#C4B060]">FILE 044</strong> — Floral monsoon
              canopy, Gooty AP. Resilience against ambient variables.
            </p>
          </div>
        </div>

        {/* Silhouette photo */}
        <div className="relative flex-1" style={{ minHeight: "220px" }}>
          <div className="photo-hero w-full h-full relative">
            <Image
              src="/photos/silhouette.jpg"
              alt="Rythamo dramatic silhouette"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover object-center"
            />
          </div>
          <div
            className="absolute bottom-0 inset-x-0 px-3 py-2 z-20"
            style={{ background: "rgba(17,15,12,0.75)" }}
          >
            <p className="font-typewriter text-[9px] text-white/75 uppercase tracking-wider leading-tight">
              <strong className="text-[#C4B060]">FILE 045</strong> — Dramatic backlit
              silhouette. Checkered shirt as parallel processing metaphor.
            </p>
          </div>
        </div>

        {/* Gold pull-quote */}
        <div
          className="p-4 border-t-2 border-[#6A5D21] bg-[#6A5D21]/8"
        >
          <p className="font-serif-display italic text-sm text-ink/80 leading-snug">
            &ldquo;From Gooty to the frontier of neural design.&rdquo;
          </p>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-px flex-1 bg-[#6A5D21]/40" />
            <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#6A5D21]">
              RYTHAMO
            </span>
          </div>
        </div>
      </aside>
    </section>
  );
}
