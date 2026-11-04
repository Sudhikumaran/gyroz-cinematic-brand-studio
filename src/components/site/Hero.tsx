import { HERO_IMAGE } from "./data";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Gyroz Studio production floor with cinema cameras and professional lighting"
        className="ken-burns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/30 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-32 pt-40 lg:px-8">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          <span className="h-px w-10 bg-primary" />
          Creative Minds. Clear Purpose.
        </p>
        <h1 className="mt-6 font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          We Create.
          <br />
          You <span className="text-glow text-primary">Grow.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Creative storytelling, powerful visuals, and digital strategies that help brands stand
          out, connect, and grow.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#services" className="btn-primary">
            Explore Our Services
          </a>
          <a href="#contact" className="btn-outline">
            Start a Project
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-muted-foreground">
          Scroll to explore
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-border">
          <span className="scroll-dot absolute left-0 top-0 h-5 w-px bg-primary" />
        </span>
      </div>
    </section>
  );
}
