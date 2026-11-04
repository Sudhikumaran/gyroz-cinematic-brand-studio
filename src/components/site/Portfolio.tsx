import { useState } from "react";
import { Play } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { PORTFOLIO, PORTFOLIO_CATEGORIES, type PortfolioItem } from "./data";

export function Portfolio() {
  const [active, setActive] = useState<string>("All");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const items =
    active === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === active);

  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            label="Our Work"
            title="Ideas Into Impact."
            description="A glimpse of the kind of work we craft across films, podcasts, photography, and campaigns."
          />
        </Reveal>

        <Reveal delay={80}>
          <div
            className="mt-10 flex flex-wrap justify-center gap-2.5"
            role="group"
            aria-label="Filter portfolio by category"
          >
            {(["All", ...PORTFOLIO_CATEGORIES] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
                  active === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setSelected(item)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border text-left transition-colors duration-300 hover:border-primary/50"
                aria-label={`View ${item.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1280}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                  {item.video && (
                    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/50 bg-background/60 text-primary backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-5 w-5 fill-current" />
                    </span>
                  )}

                  <span className="absolute right-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
                    Preview
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                      {item.category}
                    </p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Gallery images are placeholders — real client work will be added here as projects are
          completed.
        </p>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl border-border bg-card p-2 sm:p-3">
          {selected && (
            <div>
              <DialogTitle className="sr-only">{selected.title}</DialogTitle>
              <img
                src={selected.image}
                alt={selected.title}
                width={1280}
                height={1024}
                className="max-h-[70vh] w-full rounded-xl object-cover"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 p-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {selected.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    {selected.category}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Placeholder preview
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
