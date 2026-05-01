import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function AboutVisionBlock() {
  return (
    <section className="border-t border-[color:var(--hairline)] bg-[color:var(--ink)] py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-yellow)]">
            Our vision
          </h2>
        </Reveal>

        <div className="mt-10 max-w-3xl space-y-8 font-sans text-base leading-[1.8] text-[color:var(--brand-white)]/85 sm:text-[1.0625rem]">
          <Reveal delay={0.06}>
            <p>
              We believe social media should do more than look good. Our vision is
              to help brands increase visibility, generate income, and unlock the
              full potential of digital platforms through strategic thinking and
              structured execution.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              We exist to be the idea bank brands can rely on—turning opportunities
              into clear plans and clear plans into measurable results and profit.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
