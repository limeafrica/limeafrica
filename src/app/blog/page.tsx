import type { Metadata } from "next";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="Blog"
        title="Ideas at the intersection of brand and performance"
        subtitle="Notes on positioning, channels, and creative ops—published as we ship them."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              Articles and case write-ups will appear here. Until the feed is live,
              connect with us on social or inquire via{" "}
              <em>Work With Us</em>.
            </p>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
