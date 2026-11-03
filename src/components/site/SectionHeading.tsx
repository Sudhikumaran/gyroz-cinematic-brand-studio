export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-primary" />
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          {label}
        </span>
        {centered && <span className="h-px w-8 bg-primary" />}
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      )}
    </div>
  );
}
