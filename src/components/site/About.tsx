import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ABOUT_IMAGES } from "./data";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <SectionHeading label="Who We Are" title="Creative Minds. Clear Purpose." />
          <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Gyroz Studio is a creative and digital marketing agency based in Tiruppur. We're a
              team of designers, filmmakers, editors, and digital creatives helping businesses
              express who they are and connect with the people who matter.
            </p>
            <p>
              We bring strategy, design, and storytelling together to create work that serves your
              brand. Whether you're starting something new or growing an established business, we
              take the time to understand your vision and give it a clear, consistent voice.
            </p>
          </div>
          <p className="text-glow mt-9 font-display text-2xl font-bold text-primary md:text-3xl">
            Your Digital Growth Partner.
          </p>
          <div className="mt-8">
            <a href="#services" className="btn-outline">
              See What We Do
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="group grid grid-cols-2 gap-4">
          <div className="col-span-2 overflow-hidden rounded-2xl border border-border">
            <img
              src={ABOUT_IMAGES.studio}
              alt="Inside the Gyroz Studio creative space"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={ABOUT_IMAGES.production}
              alt="Production crew setting up a cinema camera"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={ABOUT_IMAGES.team}
              alt="The Gyroz creative team reviewing edits"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
