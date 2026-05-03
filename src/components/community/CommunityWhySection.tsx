import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { communityWhy } from "@/content/community";

export function CommunityWhySection() {
  const { eyebrow, title, items } = communityWhy;

  return (
    <section
      id="why-tribe"
      className="relative scroll-mt-28 overflow-hidden border-b border-[color:var(--hairline)] bg-[color:var(--brand-white)]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(45vh,380px)] bg-gradient-to-b from-[color:var(--surface-subtle)]/65 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[min(28%,180px)] top-[-10%] h-[min(52vw,440px)] w-[min(78vw,480px)] rounded-full bg-[color:var(--brand-yellow)]/[0.07]"
        aria-hidden
      />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-28">
        <div className="lg:grid lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-x-12 xl:grid-cols-[minmax(0,340px)_minmax(0,1fr)] xl:gap-x-16">
          <div className="lg:sticky lg:top-[calc(5rem+2px)] lg:max-w-sm lg:self-start">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--ink-muted)]">
                {eyebrow}
              </p>
              <h2 className="font-title mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--ink)]">
                {title}
              </h2>
              <div
                className="mt-8 h-px w-14 bg-[color:var(--brand-yellow)]"
                aria-hidden
              />
            </Reveal>
          </div>

          <ul className="mt-12 space-y-0 divide-y divide-[color:var(--hairline)] border-t border-[color:var(--hairline)] lg:mt-0 lg:max-w-none xl:pl-4">
            {items.map((item, i) => (
              <Reveal key={item} delay={0.05 * i}>
                <li className="group flex gap-5 py-9 first:pt-0 sm:gap-8 sm:py-10">
                  <div
                    className={
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full " +
                      "bg-[color:var(--ink)] font-title text-[11px] font-bold tabular-nums " +
                      "text-[color:var(--brand-yellow)] ring-1 ring-[color:var(--hairline)] " +
                      "transition group-hover:bg-[color:var(--brand-yellow)] group-hover:text-[color:var(--ink)] " +
                      "group-hover:ring-[color:var(--brand-yellow)]/40 sm:h-12 sm:w-12 sm:text-xs"
                    }
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="min-w-0 pt-0.5 font-sans text-[1.0625rem] font-medium leading-[1.55] text-[color:var(--ink)] sm:text-lg sm:leading-[1.5]">
                    {item}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
