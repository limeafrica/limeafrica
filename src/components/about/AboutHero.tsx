import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";

const HERO_FEATURE = "/Slider1.avif";
const HERO_INSET = "/slider2.avif";

export function AboutHero() {
  return (
    <section
      className="relative z-10 overflow-hidden border-b border-[color:var(--hairline)] bg-[color:var(--brand-white)] lg:min-h-[calc(100dvh-3.5rem)]"
    >
      {/* Below lg: inset matches text column width; pad bottom so copy stays clear of tall card */}
      <div className="relative w-full pb-[max(4rem,calc(520px+2.75rem-min(52vh,420px)+1.5rem))] lg:hidden">
        <div className="relative z-0 h-[min(52vh,420px)] w-full">
          <Image
            src={HERO_FEATURE}
            alt=""
            fill
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-9 z-10 pl-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] pr-4 sm:top-11"
        >
          <div className="relative h-[520px] w-full overflow-hidden bg-[color:var(--surface-sand)] ring-1 ring-[color:var(--hairline)]">
            <Image
              src={HERO_INSET}
              alt=""
              fill
              unoptimized
              className="object-cover object-center"
              sizes="(max-width: 1279px) min(896px, calc(100vw - 3rem)), 896px"
            />
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-col lg:grid lg:min-h-[calc(100dvh-3.5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(220px,38%)] lg:items-stretch">
        <div
          className={
            "flex min-h-0 flex-col justify-center px-6 py-10 sm:py-12 lg:justify-center lg:py-16 xl:py-20 " +
            "pl-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] pr-4 lg:pr-5 xl:pr-6"
          }
        >
          <div className="w-full max-w-none xl:max-w-4xl">
            <Reveal>
              <div className="flex min-w-0 items-center gap-0">
                <span className="inline-flex shrink-0 items-center rounded-md bg-[color:var(--ink)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-white)] sm:px-3.5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.25em]">
                  Who we are
                </span>
                <span
                  className="h-px min-w-[2rem] flex-1 bg-[color:var(--ink)]/18"
                  aria-hidden
                />
              </div>

              <h1 className="font-title mt-8 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[color:var(--ink)] sm:mt-10">
                At {site.name}
              </h1>
            </Reveal>

            <div className="mt-3 grid gap-5 sm:mt-4 lg:grid-cols-[minmax(0,277px)_minmax(0,1fr)] lg:items-start lg:gap-10">
              <Reveal delay={0.06}>
                <div className="relative mx-auto hidden h-[400px] w-full max-w-[277px] shrink-0 overflow-hidden bg-[color:var(--surface-sand)] lg:mx-0 lg:block lg:w-[277px] lg:max-w-none">
                  <Image
                    src={HERO_INSET}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover object-center"
                    sizes="277px"
                  />
                </div>
              </Reveal>

              <div className="flex min-w-0 flex-col lg:pt-0">
                <Reveal delay={0.1}>
                  <div className="min-w-0 space-y-5 font-sans text-[0.9375rem] leading-[1.75] text-[color:var(--ink-muted)] sm:text-[1.0625rem] sm:leading-[1.8]">
                    <p>
                      We are a digital marketing company built to help premium brands
                      grow with clear strategy, content, and performance-driven
                      marketing.
                    </p>
                    <p>
                      Rather than chasing visibility alone, we focus on positioning
                      brands to attract the right audience, build trust, and convert
                      attention into measurable income.
                    </p>
                    <p>
                      We adapt strategies used by some of the world&apos;s top brands
                      and replicate them for businesses, keeping growth simple,
                      strategic, and effective.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.14}>
                  <Link
                    href="/services"
                    className="group mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ink)] transition sm:mt-12"
                  >
                    <span
                      className="font-sans text-xl font-light leading-none text-[color:var(--brand-yellow)] transition group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      →
                    </span>
                    View our services
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        <Reveal
          delay={0.05}
          className="relative hidden h-full min-h-0 w-full min-w-0 items-center lg:flex lg:min-h-[calc(100dvh-3.5rem)]"
        >
          <div className="relative h-[min(62vh,600px)] w-full sm:h-[min(64vh,640px)] lg:h-[min(90vh,860px)] xl:h-[min(92vh,900px)] 2xl:h-[min(94vh,960px)]">
            <Image
              src={HERO_FEATURE}
              alt=""
              fill
              unoptimized
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 38vw"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
