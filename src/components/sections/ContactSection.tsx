// =====================================================================
// components/sections/ContactSection.tsx
// Brutalist Contact Form
// =====================================================================
"use client";

import { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-12 border-b-4 border-ink" aria-label="Contact">
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="title-brutalist-sub text-ink border-b-8 border-ink pb-2">
          DISPATCH
        </h2>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="brutalist-border p-6 sm:p-10 bg-[#6A5D21] text-paper">
          <div className="font-sans-modern font-black text-4xl sm:text-6xl uppercase tracking-tighter leading-none mb-8 text-center border-b-4 border-paper pb-4">
            INITIATE CONTACT
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <h3 className="font-sans-modern font-black text-4xl mb-4">RECEIVED</h3>
              <p className="font-serif-text font-bold text-xl">AWAIT CONFIRMATION.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans-modern font-black text-xl mb-2 uppercase">IDENTITY</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-paper text-ink p-4 font-sans-modern font-bold text-lg outline-none brutalist-border placeholder:text-ink/30"
                    placeholder="JOHN DOE"
                  />
                </div>
                <div>
                  <label className="block font-sans-modern font-black text-xl mb-2 uppercase">ROUTING</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full bg-paper text-ink p-4 font-sans-modern font-bold text-lg outline-none brutalist-border placeholder:text-ink/30"
                    placeholder="JD@EXAMPLE.COM"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans-modern font-black text-xl mb-2 uppercase">DIRECTIVE</label>
                <textarea 
                  required 
                  rows={4}
                  className="w-full bg-paper text-ink p-4 font-sans-modern font-bold text-lg outline-none brutalist-border resize-none placeholder:text-ink/30"
                  placeholder="TRANSMIT MESSAGE..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-ink text-paper py-6 font-sans-modern font-black text-3xl uppercase tracking-tighter brutalist-border hover:bg-paper hover:text-ink transition-colors cursor-pointer"
              >
                EXECUTE TRANSMISSION
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
