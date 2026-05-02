import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const SECTION_IMAGE = "/slider2.avif";

export function AboutWhatWeDo() {
  return (
    <section className="relative z-10 border-t border-[color:var(--hairline)] bg-[color:var(--surface-light-brown)]">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(240px,42%)_minmax(0,1fr)] lg:items-stretch">
        {/* Mobile: boxed image + hairline before copy */}
        <div className="lg:hidden px-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] pt-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))]">
          <div className="relative aspect-[4/5] max-h-[min(420px,55vh)] w-full overflow-hidden bg-[color:var(--surface-sand)] ring-1 ring-[color:var(--hairline)]">
            <Image
              src={SECTION_IMAGE}
              alt=""
              fill
              unoptimized
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div
            className="mt-6 h-px w-full bg-[color:var(--hairline)]"
            aria-hidden
          />
        </div>

        {/* Desktop: flush editorial strip — full section height */}
        <div className="relative hidden min-h-[280px] w-full lg:block lg:min-h-0 lg:h-full">
          <Image
            src={SECTION_IMAGE}
            alt=""
            fill
            unoptimized
            className="object-cover object-center"
            sizes="42vw"
          />
        </div>

        <div
          className={
            "flex flex-col justify-center pb-16 pt-8 sm:pb-24 sm:pt-10 lg:py-28 " +
            "pl-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] pr-6 lg:pl-10 lg:pr-10 xl:pl-14 xl:pr-14"
          }
        >
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-muted)] sm:text-[14px]">
                The Studio
              </p>
              <div className="lowercase mt-2 sm:mt-2.5">
                <h2 className="font-title max-w-3xl text-[clamp(2.125rem,4.5vw,3.15rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--ink)]">
                  what we do
                </h2>
                <p className="font-script mt-2.5 text-[clamp(1.6rem,3.5vw,2.35rem)] leading-snug text-[color:var(--ink)] sm:mt-3">
                  and why it works
                </p>
              </div>
            </Reveal>

            <div className="mt-12 max-w-3xl space-y-8 font-sans text-[1rem] leading-[1.75] text-[color:var(--ink-muted)] sm:mt-14 sm:text-[1.0625rem]">
              <Reveal delay={0.06}>
                <p>
                  At LimeAfrica, we operate as a full digital marketing team under one
                  roof. That means branding and strategy, content creation, social media
                  management, graphic design, copywriting, and campaign execution all
                  working together—not in silos—so our clients don&apos;t have to juggle
                  multiple vendors or spend extra on disconnected services.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Our team brings over 15 years of combined hands-on marketing
                  experience, and we&apos;ve built systems that consistently attract,
                  convert, and retain the right customers—especially for brands that
                  value quality, detail, and long-term growth.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
