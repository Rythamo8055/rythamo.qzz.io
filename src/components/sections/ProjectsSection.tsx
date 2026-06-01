// =====================================================================
// components/sections/ProjectsSection.tsx
// Brutalist Projects Grid
// =====================================================================
"use client";

import { useState } from "react";
import { PROJECTS, type Project } from "@/lib/data";
import { StoryDialog } from "@/components/ui/StoryDialog";

function ProjectBlock({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <article
      className="brutalist-border flex flex-col justify-between bg-paper hover:bg-ink hover:text-paper transition-colors group cursor-pointer"
      onClick={() => onOpen(project)}
      aria-label={`Project: ${project.headline}`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center font-sans-modern font-black text-xs uppercase mb-4 text-[#6A5D21] group-hover:text-[#C4B060]">
          <span>{project.category}</span>
          <span>{project.date}</span>
        </div>
        <h3 className="font-serif-display font-black text-3xl sm:text-4xl uppercase leading-none mb-4">
          {project.headline}
        </h3>
        <p className="font-sans-modern font-bold text-sm leading-tight opacity-80">
          {project.bulletin}
        </p>
      </div>
      
      <div className="border-t-4 border-ink group-hover:border-paper p-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-sans-modern font-bold text-[10px] uppercase border-2 border-ink group-hover:border-paper px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [activeStory, setActiveStory] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-12 border-b-4 border-ink"
      aria-label="Projects"
    >
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="title-brutalist-sub text-ink border-b-8 border-ink pb-2">
          THE PROJECTS
        </h2>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectBlock
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
