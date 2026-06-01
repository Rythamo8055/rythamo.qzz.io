import Image from "next/image";
import { AUTHOR } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* ── HEADER ── */}
      <header className="w-full text-center border-double-thick mb-1 pb-1">
        <div className="flex justify-between items-center px-4">
          <div className="font-serif-display italic uppercase text-xs sm:text-sm font-bold tracking-widest flex-1 text-left hidden sm:block">
            BREAKING<br />NEWS
          </div>
          
          <div className="flex-1 flex justify-center items-center gap-4 py-3">
            <h1 className="font-gothic text-5xl sm:text-7xl lg:text-[7rem] leading-none tracking-tight">
              The Rythamo
            </h1>
            <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-2 border-ink flex items-center justify-center shrink-0">
              {/* Globe placeholder */}
              <div className="w-[90%] h-[90%] rounded-full border border-ink/50"
                   style={{
                     background: "repeating-linear-gradient(0deg, transparent, transparent 4px, var(--ink) 4px, var(--ink) 5px), repeating-linear-gradient(90deg, transparent, transparent 4px, var(--ink) 4px, var(--ink) 5px)"
                   }}
              />
            </div>
            <h1 className="font-gothic text-5xl sm:text-7xl lg:text-[7rem] leading-none tracking-tight">
              Gazette
            </h1>
          </div>

          <div className="font-serif-display italic uppercase text-xs sm:text-sm font-bold tracking-widest flex-1 text-right hidden sm:block">
            BREAKING<br />NEWS
          </div>
        </div>
      </header>

      {/* ── SUBHEADER ── */}
      <div className="w-full flex justify-between items-center border-b-[6px] border-ink pb-2 mb-6 font-serif-text uppercase font-bold text-[10px] sm:text-xs tracking-widest px-4">
        <div className="flex-1 text-left">VOL. 2026, NO. 1</div>
        <div className="flex-1 text-center hidden sm:block">THE RYTHAMO GAZETTE</div>
        <div className="flex-1 text-right">GOOTY, AP / HYDERABAD</div>
      </div>

      {/* ── MASSIVE HEADLINE ── */}
      <div className="w-full text-center border-b-[6px] border-ink pb-4 sm:pb-8 mb-6 overflow-hidden">
        <h2 className="headline-massive text-ink whitespace-nowrap">
          AGENTIC AI GONE PUNK ROCK
        </h2>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8">
        
        {/* LEFT COLUMN: Main Photo & Subheadline */}
        <div className="flex flex-col">
          <div className="w-full border-[3px] border-ink relative mb-4" style={{ paddingBottom: "80%" }}>
            <Image
              src="/photos/outdoors.jpg"
              alt="Rythamo outdoors portrait"
              fill
              priority
              className="object-cover object-top newspaper-photo"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] gap-4">
            <h3 className="font-anton text-4xl sm:text-5xl uppercase leading-none tracking-tight border-b-2 sm:border-b-0 sm:border-r-2 border-ink pb-4 sm:pb-0 sm:pr-4" style={{ transform: "scaleY(1.1)", transformOrigin: "top" }}>
              AUTONOMY<br />THE NEW<br />PUNK ROCK?
            </h3>
            <div className="font-serif-text text-sm sm:text-base text-justify leading-relaxed">
              <p className="mb-2 italic opacity-80 font-serif-display">
                What is punk rock? Rythamo has given us a new definition. To build systems that think for themselves, even if the whole world relies on manual code.
              </p>
              <p>
                He has given developers hope. A kind of hope we've never seen before in the AI era. Originating from Gooty, AP, and navigating the rigors of Computer Science at Malla Reddy University, Vishnu Vardhan M effectively shows us how intelligent logic transcends boundaries. He was not outcasted by the rigid structures of legacy code, but rather he has convinced us that repetitive scripting is not his calling. 
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <div className="flex flex-col">
          
          {/* EXCLUSIVE Box */}
          <div className="bg-ink text-paper p-4 font-anton text-3xl sm:text-4xl text-center uppercase tracking-wider leading-none mb-6 border-[3px] border-ink">
            EXCLUSIVE<br />
            EXCLUSIVE<br />
            EXCLUSIVE
          </div>

          <div className="border-t-[3px] border-b-[3px] border-ink py-4 mb-6">
            <p className="font-serif-text text-sm sm:text-base text-justify leading-relaxed drop-cap">
              e are no longer programming machines; we are instructing agents. Growing up in Gooty taught me the value of efficiency. In water, transport, or code — layout efficiency dictates outcomes. Generative AI is our loom, and words are our thread. By weaving robust schemas, we build digital structures that transcend simple scripts.
            </p>
          </div>

          {/* Secondary Photo */}
          <div className="w-full border-[3px] border-ink relative" style={{ paddingBottom: "75%" }}>
            <Image
              src="/photos/cafe.jpg"
              alt="Rythamo working at cafe"
              fill
              className="object-cover object-top newspaper-photo"
            />
          </div>
        </div>
      </div>

      {/* ── FOOTER BAR ── */}
      <footer className="w-full bg-ink text-paper py-2 mt-12 mb-4 overflow-hidden border-t-8 border-paper shadow-[0_-4px_0_0_#111]">
        <div className="flex justify-center items-center font-sans-modern font-black uppercase tracking-[0.2em] text-sm sm:text-xl gap-4 sm:gap-8 whitespace-nowrap">
          <span>GOOTY</span>
          <span>✴</span>
          <span>HYDERABAD</span>
          <span>✴</span>
          <span>GOOTY</span>
          <span>✴</span>
          <span>HYDERABAD</span>
        </div>
      </footer>

    </main>
  );
}
