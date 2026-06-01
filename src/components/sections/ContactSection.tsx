// =====================================================================
// components/sections/ContactSection.tsx  (client component)
// "Letters to the Editor" — Indian Telegraph contact form
// =====================================================================
"use client";

import { useState } from "react";

interface TelegramForm {
  sender: string;
  address: string;
  urgency: "ORDINARY" | "URGENT" | "PRESS RELEASE";
  message: string;
}

const INITIAL_FORM: TelegramForm = {
  sender: "",
  address: "",
  urgency: "ORDINARY",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<TelegramForm>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.sender && form.address && form.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm(INITIAL_FORM);
      }, 6000);
    }
  };

  const update =
    <K extends keyof TelegramForm>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <section
      className="py-10 px-4 sm:px-6 lg:px-8"
      aria-label="Contact — Letters to the Editor"
    >
      <div className="max-w-2xl mx-auto relative" style={{ border: "3px double #110F0C" }}>

        {/* Gold accent corners */}
        <Corner pos="top-left" />
        <Corner pos="top-right" />
        <Corner pos="bottom-left" />
        <Corner pos="bottom-right" />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center border-b border-ink/30 pb-5 mb-6 select-none">
            {/* Gold rule above */}
            <div className="h-px bg-[#6A5D21] mb-3" />
            <h2 className="text-3xl font-black font-serif-display tracking-tight text-ink uppercase">
              Indian Telegraph System
            </h2>
            <p className="mt-1 text-[10px] font-typewriter uppercase tracking-[0.22em] text-ink/50">
              EST. 2026 · DIRECT ROUTE: GOOTY ↔ HYDERABAD
            </p>
            <div className="h-px bg-[#6A5D21] mt-3" />
          </div>

          {/* Success state */}
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div
                className="inline-block px-5 py-3 font-typewriter text-sm font-bold uppercase tracking-wider animate-pulse"
                style={{ border: "2px solid #8B1A1A", color: "#8B1A1A" }}
              >
                ▲ TELEGRAM DISPATCHED SUCCESSFULLY ▲
              </div>
              <p className="font-serif-text text-sm text-ink-light italic leading-relaxed max-w-sm mx-auto">
                &ldquo;Thank you for contacting the editor. Your message is
                currently queuing on the copper lines. STOP.&rdquo;
              </p>
              <p className="font-typewriter text-[10px] uppercase tracking-widest text-ink/40">
                RESPONSE EXPECTED WITHIN 24 HOURS.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

              {/* Row 1: Sender + Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  id="sender"
                  label="1. SENDER NAME"
                  type="text"
                  value={form.sender}
                  onChange={update("sender")}
                  placeholder="E.G. PROF. RADHA"
                  required
                />
                <FormField
                  id="address"
                  label="2. TELEGRAPH ADDRESS (EMAIL)"
                  type="email"
                  value={form.address}
                  onChange={update("address")}
                  placeholder="CORRESPONDENT@DOMAIN.COM"
                  required
                />
              </div>

              {/* Urgency */}
              <div className="space-y-1.5 font-typewriter text-[11px]">
                <label htmlFor="urgency" className="font-bold uppercase tracking-wider block text-ink/80">
                  3. DISPATCH CLASS (URGENCY)
                </label>
                <select
                  id="urgency"
                  value={form.urgency}
                  onChange={update("urgency")}
                  className="w-full bg-paper border border-ink/50 p-2.5 outline-none focus:border-[#6A5D21] font-typewriter text-[11px] text-ink cursor-pointer"
                >
                  <option value="ORDINARY">ORDINARY (SLOW DISPATCH)</option>
                  <option value="URGENT">URGENT (IMMEDIATE RESPONSE)</option>
                  <option value="PRESS RELEASE">PRESS RELEASE (OFFICIAL OFFER)</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5 font-typewriter text-[11px]">
                <label htmlFor="message" className="font-bold uppercase tracking-wider block text-ink/80">
                  4. MESSAGE BODY (USE &lsquo;STOP&rsquo; TO CONCLUDE CLAUSES)
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="INTERESTED IN AGENTIC COMPILER WORKFLOWS STOP CORRESPONDENCE REQUIRED STOP"
                  className="w-full bg-paper border border-ink/50 p-2.5 outline-none focus:border-[#6A5D21] font-typewriter text-[11px] uppercase resize-none text-ink"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-[10px] font-typewriter text-ink/40 text-center sm:text-left">
                  * DISPATCHES PROCESSED BY THE RYTHAMO API HUB.
                </p>
                <button
                  type="submit"
                  className="px-8 py-3 font-typewriter text-[11px] font-bold uppercase tracking-widest transition-all cursor-pointer active:scale-[0.98]"
                  style={{
                    background: "#110F0C",
                    color: "#F5EFE4",
                    border: "2px solid #110F0C",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#6A5D21";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#6A5D21";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#110F0C";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#110F0C";
                  }}
                >
                  SEND TELEGRAM →
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Watermark stamp */}
        <div
          className="absolute top-12 right-10 select-none pointer-events-none hidden sm:block"
          style={{ opacity: 0.04 }}
        >
          <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="#110F0C" strokeWidth="4" />
            <text x="50" y="58" fontFamily="Georgia" fontSize="18" textAnchor="middle" fill="#110F0C" fontWeight="bold">
              DELIVERED
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

// ── Sub-components ────────────────────────────────────────────────────

function FormField({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5 font-typewriter text-[11px]">
      <label htmlFor={id} className="font-bold uppercase tracking-wider block text-ink/80">
        {label}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-paper border border-ink/50 p-2.5 outline-none focus:border-[#6A5D21] font-typewriter text-[11px] uppercase text-ink"
      />
    </div>
  );
}

function Corner({ pos }: { pos: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const styles: Record<string, React.CSSProperties> = {
    "top-left": { top: -4, left: -4 },
    "top-right": { top: -4, right: -4 },
    "bottom-left": { bottom: -4, left: -4 },
    "bottom-right": { bottom: -4, right: -4 },
  };
  return (
    <div
      className="absolute w-3 h-3 bg-[#6A5D21]"
      style={styles[pos]}
      aria-hidden="true"
    />
  );
}
