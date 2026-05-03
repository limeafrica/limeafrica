import Link from "next/link";
import { CommunityIntroSection } from "@/components/community/CommunityIntroSection";
import { CommunityWhySection } from "@/components/community/CommunityWhySection";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import {
  communityClosingCta,
  communityVision,
  communityWhatsAppUrl,
} from "@/content/community";

export function CommunityPageContent() {
  return (
    <>
      <CommunityIntroSection />

      <CommunityWhySection />

      <section className="relative overflow-hidden border-b border-[color:var(--hairline)] bg-[color:var(--ink)] py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(235,189,69,0.12),transparent_50%)]"
          aria-hidden
        />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-yellow)]">
                Vision
              </p>
              <h2 className="font-title mt-5 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-[color:var(--brand-white)]">
                {communityVision.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-sans mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg sm:leading-relaxed">
                {communityVision.body}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        id="join-townhall"
        className="scroll-mt-28 bg-gradient-to-b from-[color:var(--surface-sand)] to-[color:var(--brand-white)] py-20 sm:py-28"
      >
        <Container>
          <div className="overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--brand-white)] shadow-[0_30px_90px_-35px_rgba(26,22,18,0.15)]">
            <div className="grid gap-0 lg:grid-cols-[1fr_1.15fr]">
              <div className="relative bg-[color:var(--ink)] px-8 py-12 sm:px-12 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, white 0.5px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                  aria-hidden
                />
                <Reveal className="relative z-10">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--brand-yellow)]">
                    Take the next step
                  </p>
                  <h2 className="font-title mt-5 max-w-md text-[clamp(1.75rem,3.2vw,2.35rem)] font-bold leading-[1.12] tracking-tight text-[color:var(--brand-white)]">
                    Ready to pull up a seat?
                  </h2>
                  <p className="font-sans mt-6 max-w-sm text-base leading-relaxed text-white/75">
                    Tap through to WhatsApp to join the Lime Townhall and start
                    connecting with the tribe.
                  </p>
                </Reveal>
              </div>
              <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:py-16">
                <Reveal delay={0.06}>
                  <p className="font-script text-[clamp(1.5rem,3vw,2rem)] leading-snug text-[color:var(--ink)]">
                    See you inside.
                  </p>
                  <Link
                    href={communityWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[color:var(--brand-yellow)] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink)] transition hover:brightness-105"
                  >
                    <span>{communityClosingCta.label}</span>
                    <span
                      className="font-sans text-xl font-light leading-none transition group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>
                  <p className="font-sans mt-6 text-sm text-[color:var(--ink-muted)]">
                    Opens in a new tab · WhatsApp group invite
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
