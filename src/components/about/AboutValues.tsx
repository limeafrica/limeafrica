import Image from "next/image";
import { AboutVisionLayout } from "@/components/about/AboutVisionBlock";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

/** In-flow image (mobile). Desktop uses `AboutValuesFixedBackdrop`. */
const VALUES_IMAGE = "/slider3B.webp";

const values = [
  {
    n: "01",
    title: "Strategic Direction",
    body:
      'Every decision is grounded in clear thinking. We define the "why" before the "what," ensuring every campaign and asset serves a specific purpose.',
  },
  {
    n: "02",
    title: "Creative and Performance Alignment",
    body:
      "We design with intention, balancing visual appeal with functionality so content not only looks right but delivers results.",
  },
  {
    n: "03",
    title: "Execution Excellence",
    body:
      "From concept to rollout, we prioritize structure, detail, and consistency to ensure every output meets a high standard.",
  },
  {
    n: "04",
    title: "Scalable Systems",
    body:
      "We build processes and frameworks that support consistent delivery, measurable progress, and long term growth.",
  },
] as const;

export function AboutValues() {
  return (
    <section
      id="about-values"
      className="relative z-10 overflow-x-clip border-t border-[color:var(--hairline)]"
    >
      {/*
        Desktop: left column is empty — `AboutValuesFixedBackdrop` is fixed; vision band
        stays above it via z-10. Mobile: in-flow image below md.
      */}
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="relative order-1 min-h-[min(42vh,380px)] w-full shrink-0 lg:hidden">
          <Image
            src={VALUES_IMAGE}
            alt=""
            fill
            unoptimized
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 54vw"
            priority={false}
          />
        </div>
        <div
          className="order-1 hidden shrink-0 lg:block lg:w-[54%]"
          aria-hidden
        />

        <div
          className={
            "order-2 flex min-w-0 flex-col bg-[color:var(--brand-white)] lg:w-[46%] lg:shrink-0 " +
            "pl-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] pr-6 lg:pl-12 lg:pr-12 xl:pl-16 xl:pr-16"
          }
        >
          <div className="flex w-full flex-col justify-center py-12 sm:py-14 lg:min-h-[calc(100dvh-3.5rem)] lg:py-14 xl:py-16 2xl:py-20">
            <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--ink-muted)]">
                  Our vision and values
                </p>
                <h2 className="font-title mt-4 text-[clamp(2rem,4.5vw,3.15rem)] font-bold leading-[1.08] tracking-tight text-[color:var(--ink)] sm:mt-5">
                  What we stand for
                </h2>
                <div
                  className="mt-4 h-px w-full bg-[color:var(--hairline)]"
                  aria-hidden
                />
              </Reveal>

              <ul className="mt-8 space-y-7 sm:mt-10 sm:space-y-8 lg:mt-10 lg:space-y-9">
                {values.map((item, i) => (
                  <Reveal key={item.n} delay={0.05 * i}>
                    <li>
                      <h3 className="font-title text-lg font-bold leading-tight tracking-tight text-[color:var(--ink)] sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="font-sans mt-2.5 text-[0.9375rem] leading-snug text-[color:var(--ink-muted)] sm:mt-3 sm:text-base">
                        {item.body}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          "relative z-10 mt-12 flex w-full flex-col justify-center border-t border-[color:var(--hairline)] bg-[color:var(--ink)] " +
          "min-h-[calc(100dvh-3.5rem)] px-0 py-12 sm:mt-16 sm:py-16 " +
          "lg:mt-16 lg:min-h-0 lg:border-t-0 lg:py-24"
        }
      >
        <Container className="relative flex flex-1 flex-col justify-center lg:block lg:min-h-0">
          <AboutVisionLayout />
        </Container>
      </div>
    </section>
  );
}
