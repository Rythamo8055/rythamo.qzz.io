// =====================================================================
// app/page.tsx — The Rythamo Gazette (editorial newspaper portfolio)
//
// This file is intentionally thin — it only:
//   1. Manages the loading state
//   2. Imports and assembles section components
//
// All content lives in  src/lib/data.ts
// All UI components live in src/components/
// =====================================================================
"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/sections/LoadingScreen";
import { Masthead } from "@/components/sections/Masthead";
import { FrontPage } from "@/components/sections/FrontPage";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Auto-dismiss after seal animation completes (stamp 0.8s + hold ~1.2s + split 1.2s + delay 2.2s ≈ 3.4s)
    const timer = setTimeout(() => setLoading(false), 3400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onSkip={() => setLoading(false)} />}

      <div className="min-h-screen flex flex-col">
        {/* ── MASTHEAD (Header) ── */}
        <div className="px-4 sm:px-6 lg:px-8">
          <Masthead />
        </div>

        {/* ── FRONT PAGE (Hero editorial spread) ── */}
        <div className="px-4 sm:px-6 lg:px-8">
          <FrontPage />
        </div>

        {/* ── SPECIAL REPORTS (Projects) ── */}
        <ProjectsSection />

        {/* ── PHOTOGRAPHIC ARCHIVES (Gallery) ── */}
        <GallerySection />

        {/* ── LETTERS TO THE EDITOR (Contact) ── */}
        <ContactSection />

        {/* ── FOOTER ── */}
        <Footer />
      </div>
    </>
  );
}
