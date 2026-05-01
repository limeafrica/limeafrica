import type { Metadata } from "next";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Community",
};

export default function CommunityPage() {
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="Community"
        title="Build alongside peers who care about craft"
        subtitle="Spaces for founders and marketers exchanging what works—campaigns, positioning, and growth experiments."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              Details on programmes, circles, and events will live here. Follow{" "}
              @limeafrica or reach out through{" "}
              <em>Work With Us</em> to hear first when doors open.
            </p>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
