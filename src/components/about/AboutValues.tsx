import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const values = [
  {
    n: "01",
    title: "Strategy before aesthetics",
    body:
      "We don't create just to look good. Every piece of content, every campaign, and every decision is intentional and built to perform. At LimeAfrica, clarity always comes before creativity.",
  },
  {
    n: "02",
    title: "Execution is everything",
    body:
      "Ideas are everywhere—but the quality of execution is what sets brands apart. We focus on delivering work that doesn't just sit pretty, but performs consistently and at a high standard.",
  },
  {
    n: "03",
    title: "Premium over popular",
    body:
      "We don't chase trends or vanity metrics. We position brands to attract the right audience, build trust, and convert attention into real, lasting value.",
  },
  {
    n: "04",
    title: "Intentional growth",
    body:
      "Growth isn't something we leave to chance. Every move we make is deliberate—guided by strategy, data, and a clear understanding of where your brand is going. We build systems that support growth you can measure and sustain.",
  },
] as const;

export function AboutValues() {
  return (
    <section className="border-t border-[color:var(--hairline)] bg-[color:var(--brand-white)] py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--ink-muted)]">
              Our vision and values
            </p>
            <h2 className="font-title mt-5 text-[clamp(2rem,4.5vw,3.15rem)] font-bold leading-[1.08] tracking-tight text-[color:var(--ink)]">
              What we stand for
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 sm:gap-8 lg:mt-20 lg:grid-cols-2">
          {values.map((item, i) => (
            <Reveal key={item.n} delay={0.05 * i}>
              <li className="flex h-full flex-col rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--paper)] p-8 shadow-[0_18px_48px_-28px_rgba(26,22,18,0.12)] transition hover:border-[color:var(--ink)]/12 sm:p-10">
                <span className="font-title text-4xl tabular-nums leading-none text-[color:var(--brand-yellow)] sm:text-5xl">
                  {item.n}
                </span>
                <h3 className="font-title mt-6 text-xl font-bold leading-snug tracking-tight text-[color:var(--ink)] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="font-sans mt-4 flex-1 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
                  {item.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
