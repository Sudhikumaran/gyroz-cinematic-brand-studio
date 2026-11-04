import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { APPROACH } from "./data";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Our Approach"
            title="Good Creative Work Starts With Understanding."
          />
        </Reveal>

        <div className="mt-16 space-y-20 md:space-y-28">
          {APPROACH.map((step, i) => {
            const flipped = i % 2 === 1;
            return (
              <div
                key={step.num}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={flipped ? "lg:order-2" : ""}>
                  <div className="overflow-hidden rounded-2xl border border-border">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      width={1280}
                      height={1024}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </Reveal>
                <Reveal delay={100} className={flipped ? "lg:order-1" : ""}>
                  <span className="font-display text-6xl font-extrabold text-primary/25 md:text-7xl">
                    {step.num}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-foreground md:text-3xl">
                    {step.title}
                  </h3>
                  <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                    {step.paragraphs.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
