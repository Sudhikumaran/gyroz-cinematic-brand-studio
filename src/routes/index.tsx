import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Approach } from "@/components/site/Approach";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Navbar } from "@/components/site/Navbar";
import { Portfolio } from "@/components/site/Portfolio";
import { Services } from "@/components/site/Services";
import { Studio } from "@/components/site/Studio";
import { WhyChoose } from "@/components/site/WhyChoose";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GYROZ STUDIO — Creative Agency in Tiruppur" },
      {
        name: "description",
        content:
          "Gyroz Studio is a creative and digital marketing agency in Tiruppur, Tamil Nadu — ad films, podcast production, reels, photography, personal branding and digital marketing. Creative Minds. Clear Purpose. Your Digital Growth Partner.",
      },
      { property: "og:title", content: "GYROZ STUDIO — Creative Agency in Tiruppur" },
      {
        property: "og:description",
        content:
          "Creative storytelling, powerful visuals, and digital strategies that help brands stand out, connect, and grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GyrozSite,
});

function GyrozSite() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Studio />
      <Approach />
      <Portfolio />
      <WhyChoose />
      <Contact />
      <Footer />
    </main>
  );
}
