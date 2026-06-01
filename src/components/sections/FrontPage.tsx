// =====================================================================
// components/sections/FrontPage.tsx
// Brutalist Cover Page with "Text Behind Image" Effect
// =====================================================================
import Image from "next/image";
import { AUTHOR } from "@/lib/data";

export function FrontPage() {
  return (
    <section className="relative w-full overflow-hidden mb-12 border-b-4 border-ink pb-8" aria-label="Cover Story">
      
      {/* ── THE MASSIVE TEXT (BACKGROUND LAYER) ── */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-0 pt-10 select-none pointer-events-none">
        <h1 className="title-brutalist text-ink text-center opacity-90">
          RYTHAMO
        </h1>
        <h2 className="title-brutalist-sub text-[#6A5D21] text-center mt-[-2%]">
          VISHNU VARDHAN
        </h2>
      </div>

      {/* ── THE CUTOUT IMAGE (MIDDLE LAYER) ── */}
      {/* 
        Assuming silhouette.jpg has a bright/white background and dark subject.
        Using mix-blend-mode: multiply knocks out the white background 
        so the massive text behind it shows through!
      */}
      <div className="relative z-10 w-full flex justify-center pointer-events-none">
        <div className="relative w-[90%] max-w-4xl" style={{ height: "60vh", minHeight: "400px", maxHeight: "800px" }}>
          <Image
            src="/photos/silhouette.jpg"
            alt="Rythamo"
            fill
            priority
            className="object-contain object-bottom mix-multiply"
          />
        </div>
      </div>

      {/* ── THE FOREGROUND CONTENT (TOP LAYER) ── */}
      <div className="relative z-20 mt-[-10vh] max-w-2xl mx-auto bg-paper border-4 border-ink p-6 sm:p-8 shadow-[8px_8px_0_0_#110F0C]">
        <div className="font-sans-modern font-black text-2xl sm:text-4xl uppercase tracking-tight mb-4 leading-none text-center">
          "WE INSTRUCT AGENTS. WE DON'T TYPE SCRIPTS."
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-serif-text font-bold leading-snug">
          <div>
            <p className="uppercase tracking-widest text-[#6A5D21] mb-1 font-sans-modern">THE BIO</p>
            <p>{AUTHOR.bio[0]}</p>
            <p className="mt-2">{AUTHOR.bio[1]}</p>
          </div>
          <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-ink pt-4 sm:pt-0 sm:pl-6">
            <p className="uppercase tracking-widest text-[#6A5D21] mb-1 font-sans-modern">THE VISION</p>
            <p className="italic">
              {AUTHOR.editorialOpinion}
            </p>
            <div className="mt-6">
              <a 
                href="#projects"
                className="inline-block border-2 border-ink bg-ink text-paper px-6 py-2 font-sans-modern font-black uppercase hover:bg-paper hover:text-ink transition-colors cursor-pointer"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
