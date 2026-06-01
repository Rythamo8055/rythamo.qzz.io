// =====================================================================
// components/ui/StoryDialog.tsx  (client component)
// Full-read dialog modal for project bulletins
// =====================================================================
"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/lib/data";

interface StoryDialogProps {
  story: Project | null;
  onClose: () => void;
}

export function StoryDialog({ story, onClose }: StoryDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (story) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [story]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="w-[92vw] max-w-2xl max-h-[85vh] overflow-y-auto border-2 border-ink bg-paper p-0 text-ink focus:outline-none backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
    >
      {story && (
        <div className="flex flex-col h-full">
          {/* Dialog header bar */}
          <div className="bg-ink text-paper px-6 py-3 flex justify-between items-center sticky top-0 z-10">
            <span className="text-[10px] font-typewriter font-bold uppercase tracking-widest text-gold-pale">
              {story.category}
            </span>
            <button
              onClick={onClose}
              aria-label="Close article"
              className="font-typewriter text-xs text-paper/60 hover:text-paper transition-colors cursor-pointer"
            >
              ✕ CLOSE
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-5">
            <div className="space-y-1">
              <p className="font-typewriter text-[10px] text-ink-muted uppercase tracking-widest">
                {story.date}
              </p>
              <h2 className="text-2xl sm:text-3xl font-black font-serif-display leading-tight uppercase text-ink">
                {story.headline}
              </h2>
            </div>

            <div className="border-t-2 border-b border-ink pt-4 pb-3">
              <p className="font-serif-text italic text-ink-light text-base leading-relaxed">
                {story.bulletin}
              </p>
            </div>

            <div className="drop-cap">
              <p className="font-serif-text text-base leading-[1.8] text-ink-light text-justify">
                {story.fullStory}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-ink/20">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-typewriter text-[10px] uppercase tracking-wider px-2 py-1 border border-ink/30 bg-paper-dark text-ink-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
