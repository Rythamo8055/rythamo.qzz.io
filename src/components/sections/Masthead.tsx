// =====================================================================
// components/sections/Masthead.tsx
// The newspaper nameplate — top utility bar + main masthead + meta row
// =====================================================================
import Image from "next/image";
import { AUTHOR } from "@/lib/data";

function TickerBar() {
  const now = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="border-b border-ink/40 py-1.5 flex flex-wrap justify-between items-center text-[10px] font-typewriter tracking-wider text-ink/70 select-none px-0">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#8B1A1A] inline-block animate-pulse" />
        <span>STATUS: GENERATING SYSTEM ONLINE</span>
      </div>
      <div className="hidden sm:block">{now.toUpperCase()}</div>
      <div>EDITION: GOOTY &amp; HYDERABAD</div>
    </div>
  );
}

export function Masthead() {
  return (
    <header className="w-full select-none">
      <TickerBar />

      {/* Issue meta row */}
      <div className="grid grid-cols-3 border-b border-ink/40 py-2 text-[10px] font-typewriter tracking-widest uppercase text-ink/70">
        <span className="font-bold">VOL. I · NO. 1</span>
        <span className="text-center font-bold hidden sm:block">
          &ldquo;PRINTERS OF CREATIVE COGNITION&rdquo;
        </span>
        <span className="text-right font-bold">AP, INDIA</span>
      </div>

      {/* ── MAIN NAMEPLATE ── */}
      <div
        className="py-5 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderBottom: "5px double #110F0C" }}
      >
        {/* Left: weather widget */}
        <div className="hidden lg:flex flex-col text-left font-typewriter text-[10px] border border-ink/40 p-3 w-44 relative bg-paper-dark/60 shrink-0">
          <span
            className="absolute -top-2 left-2 bg-paper px-2 font-bold border border-ink/30 text-[9px] tracking-tight"
          >
            WEATHER ARCHIVE
          </span>
          <span className="font-bold">GOOTY, AP</span>
          <span>TEMP: 38°C WARM BEIGE</span>
          <span>WIND: 12 KN GENAI</span>
          <span>HUMIDITY: 100% SERIF</span>
        </div>

        {/* Centre: title */}
        <div className="flex flex-col items-center text-center flex-1 px-4">
          <h1
            className="font-serif-display font-black uppercase leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(2.2rem, 7vw, 5.5rem)" }}
          >
            The Rythamo Gazette
          </h1>
          <p className="mt-2 text-[10px] sm:text-xs font-typewriter tracking-[0.22em] uppercase text-ink/60">
            INCORPORATING THE MALLA REDDY CHRONICLE · ESTABLISHED 2026
          </p>
        </div>

        {/* Right: rotating emblem */}
        <div className="flex items-center justify-center shrink-0">
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 relative cursor-pointer"
            title="Official Seal of Rythamo"
          >
            <div className="absolute inset-0 emblem-spin">
              <Image
                src="/logo.svg"
                alt="Ry_ Official Seal"
                width={112}
                height={112}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sub-meta bar */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 border-b border-ink/30 py-2 text-xs font-serif-display italic tracking-wide text-ink/70"
      >
        <span className="sm:border-r border-ink/20 sm:pr-3">Issue Price: 1 Idea</span>
        <span className="text-center sm:border-r border-ink/20 px-3 hidden sm:block">
          Special Reports: Generative AI
        </span>
        <span className="text-center sm:border-r border-ink/20 px-3 hidden sm:block">
          Campus: {AUTHOR.university}
        </span>
        <span className="text-right sm:pl-3">Classified Ads: Section B</span>
      </div>
    </header>
  );
}
