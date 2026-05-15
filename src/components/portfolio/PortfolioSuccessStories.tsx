import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SuccessStoriesMetrics } from "@/components/portfolio/SuccessStoriesMetrics";

export function PortfolioSuccessStories() {
  return (
    <section
      aria-labelledby="success-stories-heading"
      className="border-t border-white/10 bg-[color:var(--ink)] py-16 sm:py-24"
    >
      <Container>
        <Reveal>
          <h2
            id="success-stories-heading"
            className="text-center font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--brand-yellow)]"
          >
            Our success stories
          </h2>
        </Reveal>

        <SuccessStoriesMetrics />

        <Reveal delay={0.12}>
          <div className="font-sans mx-auto mt-14 max-w-3xl space-y-6 text-[0.9375rem] leading-[1.75] text-[color:var(--brand-white)]/85 sm:mt-16 sm:text-base sm:leading-[1.8]">
            <p className="text-[color:var(--brand-white)]">
              Since our inception, we&apos;ve executed over 400 campaigns and
              created content across various sectors, including retail luxury,
              non-profits, real estate, fitness, and healthy living.
            </p>
            <p>
              In each project, we meticulously measured analytics, tracked
              conversions, and studied user behavior to adopt strategic approaches
              that enhance profitability and ROI.
            </p>
            <p>
              In September{" "}
              <span className="font-medium text-[color:var(--brand-yellow)]">
                2024
              </span>
              , we launched a community dedicated to helping digital marketing
              professionals upskill, and we aim to have empowered 5,000
              individuals by{" "}
              <span className="font-medium text-[color:var(--brand-yellow)]">
                2030
              </span>
              .
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
