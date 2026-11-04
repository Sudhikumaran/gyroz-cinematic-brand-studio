import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SERVICES } from "./data";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            label="What We Do"
            title="Creative Solutions. Powerful Stories."
            description="From building your brand identity to producing content that captures attention, we bring every creative element together under one roof."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.num} delay={(i % 2) * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background/40 transition-all duration-300 hover:border-primary/40">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={1280}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-primary/40 bg-background/70 px-3.5 py-1.5 font-display text-xs font-bold tracking-[0.2em] text-primary backdrop-blur-sm">
                    {service.num}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-80 transition-all duration-300 hover:opacity-100 group-hover:gap-3"
                  >
                    Start a project
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
