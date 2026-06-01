// =====================================================================
// components/sections/GallerySection.tsx
// Brutalist Photo Blocks
// =====================================================================
import Image from "next/image";
import { PHOTOS } from "@/lib/data";

export function GallerySection() {
  const [cafe, outdoors, umbrella, silhouette] = PHOTOS;

  return (
    <section className="py-12 border-b-4 border-ink" aria-label="Photo Archives">
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="title-brutalist-sub text-ink border-b-8 border-ink pb-2">
          THE ARCHIVES
        </h2>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BrutalistPhoto photo={outdoors} priority />
          <BrutalistPhoto photo={cafe} />
        </div>

        {/* Full width */}
        <div className="brutalist-border bg-ink p-4 text-paper">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-2 text-center md:text-left">
              <div className="font-sans-modern font-black text-6xl md:text-8xl tracking-tighter text-[#C4B060]">
                {silhouette.fileNo}
              </div>
              <h3 className="font-serif-display font-black text-4xl md:text-6xl uppercase leading-none">
                {silhouette.caption}
              </h3>
            </div>
            <div className="relative w-full md:w-1/2 h-[400px] border-4 border-paper bg-paper">
              <Image
                src={silhouette.src}
                alt={silhouette.alt}
                fill
                className="object-cover"
                style={{ filter: "grayscale(100%) contrast(1.2)" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BrutalistPhoto photo={umbrella} />
          
          <div className="brutalist-border p-6 flex flex-col justify-center items-center text-center bg-[#6A5D21] text-paper">
            <h2 className="font-sans-modern font-black text-4xl sm:text-6xl uppercase tracking-tighter leading-none mb-4">
              1,674 MINUTES
            </h2>
            <p className="font-serif-text font-bold text-lg">
              SPENT REFINING NEURAL ARCHITECTURES THIS YEAR.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function BrutalistPhoto({ photo, priority = false }: { photo: typeof PHOTOS[0], priority?: boolean }) {
  return (
    <div className="brutalist-border p-3 bg-paper flex flex-col h-full">
      <div className="relative w-full h-[500px] border-b-4 border-ink mb-3">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          className="object-cover object-top"
          style={{ filter: "contrast(1.2)" }}
        />
      </div>
      <div className="flex justify-between items-end mt-auto">
        <div className="font-sans-modern font-black text-2xl uppercase tracking-tighter leading-none w-2/3">
          {photo.caption}
        </div>
        <div className="font-serif-display font-black text-3xl text-[#6A5D21]">
          {photo.fileNo}
        </div>
      </div>
    </div>
  );
}
