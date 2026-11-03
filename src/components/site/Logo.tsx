/**
 * TEMPORARY typographic wordmark.
 *
 * The original multicolour GYROZ STUDIO logo must be used here once the
 * brand files are supplied. Do not restyle this into a permanent logo —
 * replace the whole component with the real logo asset.
 */
export function Logo({ large = false }: { large?: boolean }) {
  return (
    <span className="inline-flex select-none items-baseline gap-2 whitespace-nowrap">
      <span
        className={`font-display font-extrabold tracking-tight text-foreground ${
          large ? "text-4xl" : "text-2xl"
        }`}
      >
        GYROZ
      </span>
      <span
        className={`font-semibold uppercase tracking-[0.35em] text-primary ${
          large ? "text-sm" : "text-[10px]"
        }`}
      >
        Studio
      </span>
    </span>
  );
}
