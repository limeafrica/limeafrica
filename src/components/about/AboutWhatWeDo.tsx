import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const SECTION_IMAGE = "/Pictures/1767983104924.webp";

export function AboutWhatWeDo() {
  return (
    <section className="relative z-10 border-t border-[color:var(--hairline)] bg-[color:var(--surface-light-brown)]">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* Mobile: boxed image + hairline before copy */}
        <div className="lg:hidden px-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] pt-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))]">
          <div className="relative aspect-[4/5] max-h-[min(420px,55vh)] w-full overflow-hidden bg-[color:var(--surface-sand)] ">
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

        {/* Desktop: same 46% width as “What we stand for” copy column */}
        <div className="relative hidden min-h-[280px] w-full shrink-0 lg:block lg:w-[46%] lg:shrink-0 lg:min-h-0 lg:self-stretch">
          <Image
            src={SECTION_IMAGE}
            alt=""
            fill
            unoptimized
            className="object-cover object-center"
            sizes="46vw"
          />
        </div>

        <div
          className={
            "flex min-w-0 flex-col justify-center pb-16 pt-8 sm:pb-24 sm:pt-10 lg:w-[54%] lg:shrink-0 lg:py-28 " +
            "pl-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] pr-6 " +
            "lg:pl-10 lg:pr-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] xl:pl-14 xl:pr-14"
          }
        >
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
            <Reveal>
              <div className="lowercase">
                <h2 className="font-title text-[clamp(2.125rem,4.5vw,3.15rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--ink)]">
                  what we do
                </h2>
                <p className="font-script mt-2.5 text-[clamp(1.6rem,3.5vw,2.35rem)] leading-snug text-[color:var(--ink)] sm:mt-3">
                  and why it works
                </p>
              </div>
            </Reveal>

            <div className="mt-12 space-y-8 font-sans text-[1rem] leading-[1.75] text-[color:var(--ink-muted)] sm:mt-14 sm:text-[1.0625rem]">
              <Reveal delay={0.06}>
                <p>
                  At LimeAfrica, we operate as a full digital marketing team under one
                  roof. That means branding and strategy, content creation, social media
                  management, graphic design, copywriting, and campaign execution all
                  working together (not in silos), so our clients don&apos;t have to juggle
                  multiple vendors or spend extra on disconnected services.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Our team brings over 15 years of combined hands on marketing
                  experience, and we&apos;ve built systems that consistently attract,
                  convert, and retain the right customers, especially for brands that
                  value quality, detail, and long term growth.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
