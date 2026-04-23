import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function HomeFinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[color:var(--surface-sand)] to-[color:var(--brand-white)] py-20 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-[color:var(--brand-white)] shadow-[0_30px_90px_-35px_rgba(26,22,18,0.15)]">
          <div className="grid lg:grid-cols-5">
            <div className="relative bg-[color:var(--ink)] px-8 py-12 sm:px-12 lg:col-span-2 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <Reveal>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--brand-yellow)]">
                  Contact
                </p>
                <h2 className="font-title mt-5 max-w-xl text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--brand-white)]">
                  Let&apos;s Get to Work
                </h2>
                <p className="font-sans mt-6 max-w-sm text-base leading-relaxed text-[color:var(--brand-white)]/78">
                  Tell us how we can translate your vision into a brand and
                  channel system your audience trusts.
                </p>
              </Reveal>
            </div>
            <div className="px-8 py-12 sm:px-12 lg:col-span-3 lg:py-16">
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
