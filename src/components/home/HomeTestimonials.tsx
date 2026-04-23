import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/content/site";

export function HomeTestimonials() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-yellow)] py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[28px] border-[color:var(--brand-white)]/25"
        aria-hidden
      />
      <Container className="relative">
        <Reveal>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.4em] text-[color:var(--ink)]/70">
            Voices
          </p>
          <h2 className="font-title mt-3 text-center text-2xl text-[color:var(--ink)] sm:text-3xl">
            Trusted by founders who care about craft
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.company} delay={0.06 * i}>
              <blockquote className="flex h-full flex-col rounded-2xl bg-[color:var(--brand-white)] p-8 shadow-[0_20px_60px_-28px_rgba(26,22,18,0.2)]">
                <p className="font-sans text-lg leading-snug text-[color:var(--ink)] sm:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-[color:var(--hairline)] pt-6 text-sm text-[color:var(--ink-muted)]">
                  <p className="font-semibold text-[color:var(--ink)]">
                    {t.attribution}
                  </p>
                  <p>{t.company}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
