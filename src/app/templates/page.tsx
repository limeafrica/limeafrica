import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Template Shop",
};

const perks = [
  {
    title: "Guaranteed to sell your story",
    body:
      "Layouts guide visitors from first impression to inquiry—with emphasis on clarity, proof, and confidence.",
  },
  {
    title: "Responsive by default",
    body:
      "Designed for phones first. Stunning on tablets and desktops without surprise breakpoints.",
  },
  {
    title: "Launch support",
    body:
      "Connect your domain, publish, and share—without wrestling the tech. Includes guidance for analytics basics.",
  },
];

export default function TemplatesPage() {
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="Templates"
        title="Website templates"
        subtitle="Elevated foundations you can tailor—ideal for founders who want speed without sacrificing polish."
      />
      <section className="border-b border-[color:var(--hairline)] py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {perks.map((item, i) => (
              <Reveal key={item.title} delay={0.06 * i}>
                <div className="h-full border border-[color:var(--hairline)] bg-white/40 p-8">
                  <h2 className="font-title text-2xl text-[color:var(--ink)]">
                    {item.title}
                  </h2>
                  <p className="font-sans mt-4 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <p className="font-sans mt-14 max-w-2xl text-base text-[color:var(--ink-muted)]">
              Templates ship with homepage, about, services, portfolio, testimonials,
              inquiry, journal, coming soon, and a refined 404—structured so you can
              swap copy, imagery, and palette with confidence.
            </p>
            <Link
              href="/work-with-us"
              className="mt-10 inline-flex border border-[color:var(--ink)] px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)] transition hover:bg-[color:var(--ink)] hover:text-[color:var(--paper)]"
            >
              Request template access
            </Link>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
