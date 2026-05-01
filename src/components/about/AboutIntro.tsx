import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const INTRO_IMAGE = "/slider2.avif";

export function AboutIntro() {
  return (
    <section className="bg-[color:var(--brand-white)] pb-16 pt-4 sm:pb-24 sm:pt-8 lg:pb-28 lg:pt-12">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,467px)_minmax(0,1fr)] lg:items-center lg:gap-20 xl:gap-28">
          <Reveal>
            <div
              className="relative mx-auto aspect-[467/316] w-full max-w-[var(--editorial-image-w)] overflow-hidden rounded-3xl bg-[color:var(--surface-sand)] lg:aspect-[467/632] lg:mx-0 lg:max-h-[var(--editorial-image-h)] lg:max-w-none"
            >
              <Image
                src={INTRO_IMAGE}
                alt=""
                fill
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1023px) min(calc(100vw - 2rem), 467px), min(467px, 45vw)"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex min-w-0 flex-col justify-center">
              <div className="flex min-w-0 items-center gap-4">
                <span className="font-script shrink-0 text-[clamp(1.85rem,4vw,2.65rem)] leading-none text-[color:var(--ink)]">
                  Who we are
                </span>
                <span
                  className="h-px min-w-[3rem] max-w-[38%] flex-1 bg-[color:var(--hairline)] sm:max-w-[33%]"
                  aria-hidden
                />
              </div>

              <div className="mt-8 max-w-xl space-y-6 font-sans text-[1rem] leading-[1.75] text-[color:var(--ink-muted)] sm:text-[1.0625rem]">
                <p>
                  We are a digital marketing company built to help premium brands
                  grow with clear strategy, content, and performance-driven
                  marketing. Rather than chasing visibility alone, we focus on
                  positioning brands to attract the right audience, build trust,
                  and convert attention into measurable income.
                </p>
                <p>
                  We adapt strategies used by some of the world&apos;s top brands
                  and replicate them for businesses, keeping growth simple,
                  strategic, and effective.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
