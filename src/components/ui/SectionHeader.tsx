// =====================================================================
// components/ui/SectionHeader.tsx
// Reusable section divider with gold label + double rule
// =====================================================================

interface SectionHeaderProps {
  label: string;
  title: string;
  labelColor?: "gold" | "red" | "ink";
}

export function SectionHeader({
  label,
  title,
  labelColor = "gold",
}: SectionHeaderProps) {
  const labelStyles = {
    gold: "text-[#6A5D21] border-[#6A5D21]",
    red: "text-[#8B1A1A] border-[#8B1A1A]",
    ink: "text-[#110F0C] border-[#110F0C]",
  };

  return (
    <div className="text-center space-y-3 mb-8 select-none">
      <span
        className={`section-label ${labelStyles[labelColor]}`}
        aria-label={label}
      >
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-black font-serif-display tracking-tight text-ink uppercase leading-tight">
        {title}
      </h2>
      {/* Triple rule decoration */}
      <div className="flex items-center justify-center gap-2 pt-1">
        <div className="h-px w-16 bg-ink" />
        <div className="w-2 h-2 bg-gold rotate-45" />
        <div className="h-px w-16 bg-ink" />
      </div>
    </div>
  );
}
