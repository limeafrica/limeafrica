import Link from "next/link";
import { AboutNextStepsFixedBackdrop } from "@/components/about/AboutNextStepsFixedBackdrop";
import { Container } from "@/components/ui/Container";
import { heroOutlineCtaClassName } from "@/components/ui/heroOutlineCta";
import { Reveal } from "@/components/motion/Reveal";

export function AboutClosingCta() {
  return (
    <section
      id="about-next-steps"
      className="relative flex min-h-[min(78vh,760px)] flex-col items-center justify-center overflow-hidden border-t border-white/15 py-24 sm:py-32 lg:py-40"
    >
      <AboutNextStepsFixedBackdrop />

      <Container className="relative z-10 flex w-full flex-1 flex-col items-center justify-center py-4">
        <Reveal>
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-white)]/90">
              Next steps
            </p>
            <p className="font-title mt-5 max-w-lg text-[clamp(1.5rem,3.5vw,2rem)] font-bold leading-snug tracking-tight text-[color:var(--brand-white)]">
              Ready to grow with clarity and execution that holds up?
            </p>

            <div className="mt-10 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link
                href="/services"
                className="inline-flex min-h-[3rem] w-full min-w-0 items-center justify-center rounded-full border-2 border-[color:var(--brand-white)] bg-[color:var(--brand-white)] px-8 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink)] transition hover:bg-[color:var(--brand-white)]/92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-white)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--ink)] sm:w-auto"
              >
                View our services
              </Link>
              <Link
                href="/work-with-us"
                className={
                  heroOutlineCtaClassName +
                  " w-full min-w-0 justify-center sm:w-fit sm:max-w-full"
                }
              >
                Showcase your work with Lime
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
