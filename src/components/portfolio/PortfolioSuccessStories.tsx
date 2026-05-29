import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SuccessStoriesGoal } from "@/components/portfolio/SuccessStoriesGoal";
import { SuccessStoriesMetrics } from "@/components/portfolio/SuccessStoriesMetrics";

export function PortfolioSuccessStories() {
  return (
    <section
      aria-labelledby="success-stories-heading"
      className="relative overflow-hidden border-t border-[color:var(--hairline)] bg-[color:var(--cream)] py-20 sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[color:var(--brand-yellow)] opacity-[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[color:var(--brand-sand)] opacity-[0.14] blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <div className="flex min-w-0 items-center gap-0">
            <span className="inline-flex shrink-0 items-center rounded-md bg-[color:var(--ink)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-white)] sm:px-3.5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.25em]">
              Impact
            </span>
            <span
              className="h-px min-w-[2rem] flex-1 bg-[color:var(--ink)]/15 mr-[calc(50%-50vw)]"
              aria-hidden
            />
          </div>

          <div className="max-w-3xl">
            <h2
              id="success-stories-heading"
              className="font-title mt-8 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[color:var(--ink)]"
            >
              Our Success Stories
            </h2>

            <p className="mt-6 font-sans text-base leading-relaxed text-[color:var(--ink-muted)] sm:text-[1.0625rem] sm:leading-[1.75]">
              Proof that thoughtful strategy, measured execution, and consistent
              storytelling compound over time.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-2xl bg-[color:var(--ink)] ring-1 ring-[color:var(--ink)]/10 sm:mt-14 lg:mt-16">
            <SuccessStoriesMetrics />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="space-y-6 font-sans text-[0.9375rem] leading-[1.8] text-[color:var(--ink-muted)] sm:space-y-7 sm:text-base">
              <p className="text-[1.0625rem] leading-[1.75] text-[color:var(--ink)] sm:text-lg sm:leading-[1.8]">
                Since our inception, we&apos;ve executed over{" "}
                <span className="font-semibold text-[color:var(--brand-yellow)]">
                  400 campaigns
                </span>{" "}
                and created content across retail luxury, non-profits, real
                estate, fitness, and healthy living.
              </p>
              <p>
                In each project, we meticulously measured analytics, tracked
                conversions, and studied user behavior to adopt strategic
                approaches that enhance profitability and ROI.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-5 lg:pt-1">
            <div className="relative pb-[5.25rem] sm:pb-[5.75rem]">
              <aside className="rounded-2xl bg-[color:var(--surface-light-brown)] p-8 sm:p-10">
                <p className="font-script text-[clamp(1.75rem,4vw,2.35rem)] leading-none text-[color:var(--ink)]">
                  Building Community
                </p>
                <p className="mt-6 font-sans text-[0.9375rem] leading-[1.8] text-[color:var(--ink-muted)] sm:text-base">
                  In September{" "}
                  <span className="font-semibold text-[color:var(--ink)]">2024</span>
                  , we launched a programme dedicated to helping digital marketing
                  professionals upskill.
                </p>
                <div className="h-[8rem] sm:h-[9rem]" aria-hidden />
              </aside>
              <div className="absolute inset-x-8 top-[calc(100%-14.75rem)] z-10 sm:inset-x-10 sm:top-[calc(100%-16.25rem)]">
                <SuccessStoriesGoal />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
