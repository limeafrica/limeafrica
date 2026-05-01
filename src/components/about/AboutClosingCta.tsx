import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function AboutClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-[color:var(--hairline)] bg-gradient-to-b from-[color:var(--surface-sand)] to-[color:var(--brand-white)] py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--brand-white)] px-8 py-12 shadow-[0_30px_90px_-35px_rgba(26,22,18,0.12)] sm:px-12 sm:py-14">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-muted)]">
              Next steps
            </p>
            <p className="font-title mx-auto mt-5 max-w-lg text-center text-[clamp(1.5rem,3.5vw,2rem)] font-bold leading-snug tracking-tight text-[color:var(--ink)]">
              Ready to grow with clarity and execution that holds up?
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-4 sm:mx-auto sm:max-w-xl sm:flex-row sm:justify-center sm:gap-5">
              <Link
                href="/services"
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-[color:var(--ink)] bg-[color:var(--ink)] px-8 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-white)] transition hover:bg-[color:var(--ink)]/92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ink)] focus-visible:ring-offset-2"
              >
                View our services
              </Link>
              <Link
                href="/work-with-us"
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-[color:var(--hairline)] bg-transparent px-8 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink)] transition hover:border-[color:var(--ink)] hover:bg-[color:var(--ink)]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ink)] focus-visible:ring-offset-2"
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
