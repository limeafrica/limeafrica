import type { Metadata } from "next";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Services",
};

const pillars = [
  {
    id: "digital-marketing",
    title: "Digital marketing services",
    body:
      "Integrated paid and organic campaigns—targeting and reporting anchored to pipeline and revenue, not vanity metrics.",
  },
  {
    id: "consulting",
    title: "Consulting",
    body:
      "Strategy workshops on positioning and channel mix—with practical priorities and next steps your team can run.",
  },
  {
    id: "resources",
    title: "Resources",
    body:
      "Templates and playbooks that shorten rollout time—and keep execution consistent across your team.",
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
                <p className="font-sans mt-6 max-w-3xl text-base leading-snug text-[color:var(--ink-muted)] line-clamp-2">
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
