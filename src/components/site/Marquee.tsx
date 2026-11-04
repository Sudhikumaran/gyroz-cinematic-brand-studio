const ITEMS = [
  "Creative Minds. Clear Purpose.",
  "Your Digital Growth Partner.",
  "Ad Film Production",
  "Podcast Production",
  "Reels & Video",
  "Personal Branding",
  "Photography",
  "Digital Marketing",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            {item}
          </span>
          <span className="text-primary">◆</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div
      className="overflow-hidden border-y border-border bg-card py-5"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
