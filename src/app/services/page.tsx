import type { Metadata } from "next";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Services",
};

const pillars = [
  {
    id: "social",
    title: "Social media management",
    body:
      "Editorial calendars, creative direction, community care, and reporting that connects dots between content and revenue. We specialize in Instagram, TikTok, and Pinterest—with testing frameworks that respect your brand voice.",
  },
  {
    id: "branding",
    title: "Branding",
    body:
      "Positioning, visual identity, messaging, and guidelines your team can actually use. Built for consistency across pitch decks, packaging, campaigns, and digital touchpoints.",
  },
  {
    id: "web",
    title: "Website design",
    body:
      "Semi-custom and fully custom builds—strategy, UX, UI, and launch support. Fast performance, accessible layouts, and CMS workflows that don’t require a developer for every edit.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="Services"
        title="Clarity at every touchpoint"
        subtitle="From identity systems to channel execution, we build brands that feel intentional online—and hold up under growth."
      />
      <section className="py-16 sm:py-24">
        <Container className="space-y-20">
          {pillars.map((p) => (
            <Reveal key={p.id}>
              <article id={p.id} className="scroll-mt-28 border-b border-[color:var(--hairline)] pb-16 last:border-none">
                <h2 className="font-title text-3xl text-[color:var(--ink)] sm:text-4xl">
                  {p.title}
                </h2>
                <p className="font-sans mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>
    </main>
  );
}
