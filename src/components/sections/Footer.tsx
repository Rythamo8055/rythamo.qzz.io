// =====================================================================
// components/sections/Footer.tsx
// Site footer — links bar + scrolling stock ticker
// =====================================================================
import { AUTHOR, TICKER_MESSAGES } from "@/lib/data";

export function Footer() {
  // Duplicate messages for seamless infinite scroll
  const tickerItems = [...TICKER_MESSAGES, ...TICKER_MESSAGES];

  return (
    <footer className="border-t-2 border-ink mt-0 select-none" role="contentinfo">
      {/* Links bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 py-5 px-4 sm:px-6 lg:px-8 text-[11px] font-typewriter gap-4 border-b border-ink/20">
        <div className="space-y-1">
          <div className="font-bold uppercase tracking-wider text-[10px] text-[#6A5D21] mb-1">OFFICIAL CHANNELS</div>
          <div>
            GITHUB:{" "}
            <a
              href={AUTHOR.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-ink/70 hover:text-[#6A5D21] transition-colors"
            >
              github.com/Rythamo8055
            </a>
          </div>
        </div>

        <div className="sm:text-center space-y-1">
          <div className="font-bold uppercase tracking-wider text-[10px] text-[#6A5D21] mb-1">OFFICIAL RESIDENCE</div>
          <div className="text-ink/70">{AUTHOR.location}</div>
        </div>

        <div className="sm:text-right space-y-1">
          <div className="font-bold uppercase tracking-wider text-[10px] text-[#6A5D21] mb-1">PORTFOLIO HUB</div>
          <div>
            <a
              href={AUTHOR.domain}
              className="underline text-ink/70 hover:text-[#6A5D21] transition-colors"
            >
              rythamo.qzz.io
            </a>
          </div>
        </div>
      </div>

      {/* ── STOCK TICKER ── */}
      <div
        className="w-full py-2.5 overflow-hidden"
        style={{ background: "#110F0C" }}
        aria-label="Portfolio index ticker"
      >
        <div className="ticker-track text-[11px] font-typewriter font-bold uppercase tracking-widest whitespace-nowrap">
          {tickerItems.map((msg, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-4">
              <span style={{ color: "#C4B060" }}>◆</span>
              <span style={{ color: "rgba(245,239,228,0.85)" }}>{msg}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Copyright line */}
      <div
        className="text-center py-2 text-[9px] font-typewriter tracking-wider"
        style={{ background: "#0C0A08", color: "rgba(245,239,228,0.4)" }}
      >
        COPYRIGHT © 2026 THE RYTHAMO GAZETTE · ALL RIGHTS RESERVED · PRODUCED BY GEMINI AGENTS
      </div>
    </footer>
  );
}
