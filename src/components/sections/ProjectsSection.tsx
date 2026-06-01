// =====================================================================
// components/sections/ProjectsSection.tsx  (client component)
// Special bulletins — project cards that open a full story dialog
// =====================================================================
"use client";

import { useState } from "react";
import { PROJECTS, type Project } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StoryDialog } from "@/components/ui/StoryDialog";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <article
      className="story-card flex flex-col justify-between bg-paper-light p-5 space-y-4"
      aria-label={`Project: ${project.headline}`}
    >
      {/* Category + date */}
      <div className="flex justify-between items-center text-[10px] font-typewriter text-ink-muted border-b border-ink/20 pb-2">
        <span className="font-bold text-[#6A5D21]">{project.category}</span>
        <span>{project.date}</span>
      </div>

      {/* Headline */}
      <h3 className="text-lg font-bold font-serif-display leading-snug text-ink uppercase tracking-tight">
        {project.headline}
      </h3>

      {/* Bulletin summary */}
      <p className="text-sm font-serif-text text-ink-light leading-[1.7] line-clamp-4">
        {project.bulletin}
      </p>

      {/* Bottom: tags + CTA */}
      <div className="space-y-3 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-typewriter uppercase tracking-tight px-1.5 py-0.5 border border-ink/25 bg-paper-dark text-ink-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onOpen(project)}
          className="w-full text-center py-3 border border-ink font-typewriter text-[11px] font-bold uppercase tracking-wider hover:bg-ink hover:text-paper transition-all cursor-pointer active:scale-[0.99]"
          aria-haspopup="dialog"
        >
          Read Full Report →
        </button>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [activeStory, setActiveStory] = useState<Project | null>(null);

  return (
    <section
      className="py-10 border-b-2 border-ink px-4 sm:px-6 lg:px-8"
      aria-label="Special Reports"
    >
      <SectionHeader
        label="SECTION II · FEATURES & TECHNICAL INVENTIONS"
        title="Special Bulletins & Project Reports"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setActiveStory}
          />
        ))}
      </div>

      <StoryDialog story={activeStory} onClose={() => setActiveStory(null)} />
    </section>
  );
}
