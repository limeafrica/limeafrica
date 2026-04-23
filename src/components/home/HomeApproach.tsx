import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { HomeApproachSlider } from "@/components/home/HomeApproachSlider";

export function HomeApproach() {
  return (
    <section
      id="our-approach"
      className="relative z-10 overflow-visible bg-[color:var(--surface-light-brown)] pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-14"
    >
      <Container className="relative">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-end lg:gap-16 xl:gap-20">
          <Reveal>
            <div className="min-w-0 max-w-xl lg:pt-4">
              <h2 className="font-title text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-[color:var(--ink)]">
                Our Approach
              </h2>

              <div className="mt-8 space-y-6 font-sans text-[1rem] leading-[1.75] text-[color:var(--ink-muted)] sm:text-[1.0625rem]">
                <p>
                  Strategy first, creativity second—always anchored to your goals.
                  We begin by understanding your business, audience, and the vision
                  behind your brand, then align every creative decision to measurable
                  growth.
                </p>
                <p>
                  The process is transparent and collaborative: clear milestones,
                  candid feedback, and deliverables you can actually run with.
                </p>
              </div>

              <p className="font-script mt-10 text-[clamp(1.12rem,2.5vw,1.52rem)] leading-snug text-[color:var(--ink)]">
                Precision, clarity, and strategy—every step of the way.
              </p>

              <Link
                href="/work"
                className="group mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ink)] transition"
              >
                <span
                  className="font-sans text-xl font-light leading-none text-[color:var(--brand-white)] transition group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
                View our work
              </Link>
            </div>
          </Reveal>

          <div className="relative z-30 w-full max-w-[var(--editorial-image-w)] shrink-0 lg:-mt-[min(7.5rem,12vh)] lg:w-[min(100%,var(--editorial-image-w))]">
            <div className="relative -mt-6 sm:-mt-10">
              <HomeApproachSlider />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
