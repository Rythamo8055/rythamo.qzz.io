// =====================================================================
// components/sections/GallerySection.tsx
// Photographic Archives — magazine-quality editorial photo spread
// DESIGN INTENT:
//   • Two big photos (full portrait height) + two smaller accents
//   • Each photo shows FULLY — no crop, uses object-contain where needed
//   • Masonry-style asymmetric layout on desktop
//   • Dark caption strips overlay the bottom of each photo
// =====================================================================
import Image from "next/image";
import { PHOTOS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function GallerySection() {
  const [cafe, outdoors, umbrella, silhouette] = PHOTOS;

  return (
    <section
      className="py-10 border-b-2 border-ink px-4 sm:px-6 lg:px-8"
      aria-label="Photographic Archives"
    >
      <SectionHeader
        label="SECTION III · PHOTOGRAPHIC ARCHIVES"
        title="Image Gallery & Catalogues"
        labelColor="red"
      />

      {/*
        Desktop layout:
          [OUTDOORS — tall full portrait | CAFE landscape | UMBRELLA portrait]
                      [SILHOUETTE — full width panorama strip]

        Mobile: single column stacked
      */}
      <div className="space-y-4">
        {/* Row 1: 3-column asymmetric */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_2fr_1.5fr] gap-4">
          {/* Outdoors — large portrait: shows person top-to-bottom */}
          <PhotoCard
            photo={outdoors}
            height="h-[520px] lg:h-[640px]"
            objectPos="object-top"
            featured
          />

          {/* Cafe — medium: seated wide shot */}
          <PhotoCard
            photo={cafe}
            height="h-[520px] lg:h-[640px]"
            objectPos="object-top"
          />

          {/* Umbrella — smaller accent */}
          <PhotoCard
            photo={umbrella}
            height="h-[360px] sm:h-[520px] lg:h-[640px]"
            objectPos="object-top"
          />
        </div>

        {/* Row 2: Silhouette — full-width cinematic strip */}
        <div className="relative border border-ink overflow-hidden" style={{ height: "320px" }}>
          <Image
            src={silhouette.src}
            alt={silhouette.alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
            style={{
              filter: "contrast(1.15) brightness(0.92) saturate(0.7)",
            }}
          />
          {/* Dark gradient vignette */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to right, rgba(17,15,12,0.65) 0%, transparent 40%, transparent 60%, rgba(17,15,12,0.65) 100%)",
            }}
          />
          {/* Centered text overlay on the silhouette */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-8 select-none">
            <span className="font-typewriter text-[10px] text-white/50 uppercase tracking-[0.3em] mb-2">
              FILE NO. {silhouette.fileNo}
            </span>
            <p
              className="font-serif-display font-black italic text-white uppercase leading-tight"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.8rem)" }}
            >
              The Thinker<br />of Gooty
            </p>
            <div className="mt-3 h-px w-24 bg-[#C4B060]" />
            <p className="mt-3 font-typewriter text-[10px] text-white/60 uppercase tracking-wider max-w-md">
              {silhouette.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Sub-component: individual archive photo card ─────────────────────
function PhotoCard({
  photo,
  height,
  objectPos,
  featured = false,
}: {
  photo: (typeof PHOTOS)[number];
  height: string;
  objectPos: string;
  featured?: boolean;
}) {
  return (
    <div className={`relative photo-archive ${height} overflow-hidden border border-ink`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`object-cover ${objectPos}`}
        style={{
          filter: featured
            ? "contrast(1.08) brightness(0.95) saturate(0.82)"
            : "contrast(1.06) brightness(0.93) saturate(0.8)",
        }}
      />

      {/* Scanline film overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(17,15,12,0.035) 0px, rgba(17,15,12,0.035) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* Caption strip */}
      <div
        className="absolute bottom-0 left-0 right-0 px-3 py-3 z-20"
        style={{ background: "rgba(17,15,12,0.80)" }}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-0.5 flex-1">
            <span className="font-typewriter text-[9px] font-bold text-[#C4B060] uppercase tracking-widest block">
              FILE NO. {photo.fileNo}
            </span>
            <p className="font-typewriter text-[9px] text-white/70 uppercase tracking-wider leading-tight">
              {photo.caption}
            </p>
          </div>
          {featured && (
            <span
              className="shrink-0 font-typewriter text-[8px] font-bold uppercase px-1.5 py-0.5"
              style={{ background: "#6A5D21", color: "#F5EFE4" }}
            >
              FEATURED
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
