// =====================================================================
// components/sections/Masthead.tsx
// Daily Bugle / Annual News style aggressive header
// =====================================================================
import Image from "next/image";

export function Masthead() {
  return (
    <header className="pt-4 pb-2 border-b-4 border-ink mb-6" aria-label="Site Header">
      {/* Top Bar: Issue / Date / Location */}
      <div className="flex justify-between items-end border-b-2 border-ink pb-2 mb-2 font-sans-modern font-bold uppercase tracking-tighter text-sm sm:text-lg">
        <div>Vol. 2026 — Final Edition</div>
        <div className="text-center hidden sm:block">Gooty, AP / Hyderabad</div>
        <div className="text-right">Price: Attention</div>
      </div>

      {/* Main Title */}
      <div className="flex items-center justify-center gap-4 py-2">
        <h1 className="font-serif-display font-black text-ink uppercase tracking-tighter leading-none" style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}>
          THE RYTHAMO
        </h1>
        {/* Emblem - optional, keeping it brutal */}
        <div className="hidden md:block border-4 border-ink p-2 rotate-12">
          <Image
            src="/logo.svg"
            alt="Ry_ Emblem"
            width={80}
            height={80}
            className="w-16 h-16 object-contain"
            priority
          />
        </div>
      </div>

      <div className="text-center font-sans-modern font-black uppercase text-xl sm:text-3xl tracking-widest border-t-2 border-ink pt-2 mt-2">
        PORTFOLIO OF VISHNU VARDHAN M
      </div>
    </header>
  );
}
