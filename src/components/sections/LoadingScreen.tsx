// =====================================================================
// components/sections/LoadingScreen.tsx  (client component)
// Seal-break intro animation
// =====================================================================
"use client";

interface LoadingScreenProps {
  onSkip: () => void;
}

export function LoadingScreen({ onSkip }: LoadingScreenProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex overflow-hidden pointer-events-auto select-none"
      style={{ background: "#F5EFE4" }}
    >
      {/* Left door */}
      <div className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-end split-left"
        style={{ background: "#F5EFE4", borderRight: "1px solid rgba(17,15,12,0.12)" }}
      >
        <div className="relative w-52 h-52 translate-x-24 emblem-crack-left seal-stamp-anim">
          {/* Left half of seal */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt=""
            width={208}
            height={208}
            className="max-w-none"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      </div>

      {/* Right door */}
      <div className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-start split-right"
        style={{ background: "#F5EFE4", borderLeft: "1px solid rgba(17,15,12,0.12)" }}
      >
        <div className="relative w-52 h-52 -translate-x-24 emblem-crack-right seal-stamp-anim">
          {/* Right half of seal */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt=""
            width={208}
            height={208}
            className="max-w-none"
            style={{ clipPath: "inset(0 0 0 50%)" }}
          />
        </div>
      </div>

      {/* Loading hint text */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 pointer-events-none">
        <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-ink/40 mb-4">
          BREAKING SEAL — OPENING THE GAZETTE
        </p>
        <button
          onClick={onSkip}
          className="pointer-events-auto font-typewriter text-[11px] font-bold uppercase tracking-widest border border-ink/30 px-5 py-2 text-ink/50 hover:text-ink hover:border-ink transition-all cursor-pointer"
        >
          Skip →
        </button>
      </div>
    </div>
  );
}
