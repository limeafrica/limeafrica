import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function HomeFinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[color:var(--surface-sand)] to-[color:var(--brand-white)] py-20 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-3xl border-2 border-[color:var(--brand-sand)] bg-[color:var(--brand-white)] shadow-[0_30px_90px_-35px_rgba(26,22,18,0.15)]">
          <div className="grid lg:grid-cols-5">
            <div className="relative bg-[color:var(--brand-yellow)]/25 px-8 py-12 sm:px-12 lg:col-span-2 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div
                className="pointer-events-none absolute right-4 top-4 h-20 w-20 rounded-2xl border-2 border-[color:var(--brand-yellow)] opacity-60"
                aria-hidden
              />
              <Reveal>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink)]/70">
                  Contact
                </p>
                <h2 className="font-title mt-4 text-4xl leading-tight text-[color:var(--ink)] sm:text-5xl">
                  Let&apos;s get to work
                </h2>
                <p className="font-sans mt-6 max-w-sm text-base leading-relaxed text-[color:var(--ink)]/75">
                  Tell us how we can translate your vision into a brand and
                  channel system your audience trusts.
                </p>
              </Reveal>
            </div>
            <div className="border-t border-[color:var(--hairline)] px-8 py-12 sm:px-12 lg:col-span-3 lg:border-l lg:border-t-0 lg:py-16">
              <Reveal delay={0.08}>
                <LeadForm variant="full" submitLabel="Send inquiry" />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
