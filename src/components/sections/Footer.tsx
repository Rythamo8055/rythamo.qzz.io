// =====================================================================
// components/sections/Footer.tsx
// Brutalist Footer
// =====================================================================
import { AUTHOR, TICKER_MESSAGES } from "@/lib/data";

export function Footer() {
  const tickerItems = [...TICKER_MESSAGES, ...TICKER_MESSAGES];

  return (
    <footer className="select-none bg-ink text-paper" role="contentinfo">
      
      {/* ── STOCK TICKER ── */}
      <div className="w-full py-4 overflow-hidden border-b-4 border-paper" aria-label="Portfolio index ticker">
        <div className="ticker-track text-xl sm:text-3xl font-sans-modern font-black uppercase tracking-tighter whitespace-nowrap">
          {tickerItems.map((msg, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-8">
              <span className="text-[#C4B060]">■</span>
              <span>{msg}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="p-8 md:p-12 text-center">
        <h2 className="title-brutalist-sub mb-4 text-[#C4B060]">THE END.</h2>
        <div className="font-sans-modern font-black text-2xl uppercase tracking-tighter flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
          <a href={AUTHOR.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#6A5D21] transition-colors">GITHUB</a>
          <span>//</span>
          <span>{AUTHOR.location}</span>
          <span>//</span>
          <span>RYTHAMO.QZZ.IO</span>
        </div>
      </div>
      
    </footer>
  );
}
