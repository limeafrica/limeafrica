import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Work With Us",
};

export default function WorkWithUsPage() {
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="Contact"
        title="Let’s build with intention"
        subtitle="Share a bit about your brand, timeline, and goals—we’ll reply with next steps."
      />
      <section className="py-16 sm:pb-28">
        <Container>
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-muted)]">
                  What to include
                </p>
                <ul className="font-sans mt-6 space-y-4 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
                  <li>Ideal launch window or milestone dates</li>
                  <li>Platforms you want to prioritize</li>
                  <li>Links to current brand touchpoints</li>
                  <li>Budget range—so we can propose the right engagement</li>
                </ul>
              </div>
              <LeadForm variant="full" submitLabel="Send form" />
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
