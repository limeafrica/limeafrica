import type { Metadata } from "next";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { site, team } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="About"
        title={`Inside ${site.name}`}
        subtitle="We partner with founders who care about narrative, consistency, and growth that compounds."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="font-sans mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-[color:var(--ink-muted)]">
              <p>
                LimeAfrica exists to make elevated brand-building accessible—without
                sacrificing rigor. Our studio blends editorial taste with accountable
                channel strategy: what you publish should look exquisite and earn
                its place on the calendar.
              </p>
              <p>
                You&apos;ll find us obsessive about clarity—briefs, timelines,
                feedback loops, and deliverables that feel obvious to use. Whether
                we&apos;re shaping a mark or scaling content, we aim for systems
                that age well.
              </p>
            </div>
          </Reveal>
          <div className="mx-auto mt-20 max-w-3xl border-t border-[color:var(--hairline)] pt-16">
            <h2 className="font-title text-3xl text-[color:var(--ink)]">
              Team
            </h2>
            <div className="mt-12 space-y-14">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={0.05 * i}>
                  <div>
                    <h3 className="font-title text-3xl">{member.name}</h3>
                    <p className="mt-2 text-sm italic text-[color:var(--ink-muted)]">
                      {member.role}
                    </p>
                    <p className="font-sans mt-6 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
                      {member.bio}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
