import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function AboutWhatWeDo() {
  return (
    <section className="border-t border-[color:var(--hairline)] bg-[color:var(--surface-light-brown)] py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-muted)]">
            What we do
          </p>
          <div className="mt-4">
            <h2 className="font-title max-w-3xl text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-[color:var(--ink)]">
              What we do
            </h2>
            <p className="font-sans mt-3 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-[color:var(--ink-muted)] sm:text-sm">
              And why it works
            </p>
          </div>
        </Reveal>

        <div className="mt-12 max-w-3xl space-y-8 font-sans text-[1rem] leading-[1.75] text-[color:var(--ink-muted)] sm:mt-14 sm:text-[1.0625rem]">
          <Reveal delay={0.06}>
            <p>
              At LimeAfrica, we operate as a full digital marketing team under one
              roof. That means branding and strategy, content creation, social media
              management, graphic design, copywriting, and campaign execution all
              working together—not in silos—so our clients don&apos;t have to juggle
              multiple vendors or spend extra on disconnected services.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Our team brings over 15 years of combined hands-on marketing
              experience, and we&apos;ve built systems that consistently attract,
              convert, and retain the right customers—especially for brands that
              value quality, detail, and long-term growth.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
