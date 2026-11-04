import { CheckCircle2 } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { STUDIO_GALLERY, STUDIO_HIGHLIGHTS } from "./data";

export function Studio() {
  return (
    <section id="studio" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      {/* soft emerald studio glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl border border-border">
              <img
                src={STUDIO_GALLERY.podcast}
                alt="Podcast recording setup at Gyroz Studio"
                loading="lazy"
                width={1280}
                height={1024}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            {(
              [
                [STUDIO_GALLERY.cameras, "Professional camera equipment"],
                [STUDIO_GALLERY.lighting, "Studio lighting arrangements"],
                [STUDIO_GALLERY.mics, "Recording microphones"],
              ] as const
            ).map(([src, alt]) => (
              <div key={alt} className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  width={1280}
                  height={1024}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.05]"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <SectionHeading
            label="Our Studio"
            title="Your Ideas Deserve the Right Space."
            description="Step into a fully equipped creative environment built for conversations, content, and professional production."
          />
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {STUDIO_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Rental pricing is shared on request — tell us what you need and we'll put together the
            right package for your session.
          </p>
          <div className="mt-8">
            <a href="#contact" className="btn-primary">
              Enquire About Studio Rental
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
