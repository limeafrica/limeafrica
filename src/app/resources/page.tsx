import type { Metadata } from "next";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="Resources"
        title="Tools and guides for growing brands"
        subtitle="Frameworks, checklists, and insights—built to make strategy and execution easier for your team."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              We&apos;re curating downloads and deep dives here—subscribe via{" "}
              <em>Work With Us</em> or check back soon as we publish new material.
            </p>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
