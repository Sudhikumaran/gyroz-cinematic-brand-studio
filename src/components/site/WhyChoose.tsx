import { BadgeCheck, Clapperboard, Lightbulb, Users } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const VALUES = [
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    text: "Ideas with originality and purpose.",
  },
  {
    icon: Clapperboard,
    title: "Professional Production",
    text: "Quality equipment and skilled execution.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    text: "A team that understands your vision.",
  },
  {
    icon: BadgeCheck,
    title: "Consistent Execution",
    text: "Thoughtful work from concept to final delivery.",
  },
] as const;

export function WhyChoose() {
  return (
    <section id="why" className="scroll-mt-24 bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            label="Why Gyroz"
            title="More Than a Creative Agency. A Partner in Your Growth."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-border bg-background/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
