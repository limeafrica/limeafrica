import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

/** Editorial photo — matches studio imagery used elsewhere on About. */
const VISION_IMAGE = "/slider2.avif";

/** Vision copy — rendered inside `Reveal` + `max-w-xl` like Home Approach text column. */
export function AboutVisionContent() {
  return (
    <>
      <h2 className="font-title text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-[color:var(--brand-white)]">
        Our vision
      </h2>

      <div className="mt-8 w-full space-y-8 font-sans text-base leading-[1.8] text-[color:var(--brand-white)]/85 sm:text-[1.0625rem]">
        <p>
          We believe social media should do more than look good. Our vision is to help
          brands increase visibility, generate income, and unlock the full potential of
          digital platforms through strategic thinking and structured execution.
        </p>
        <p>
          We exist to be the idea bank brands can rely on—turning opportunities into
          clear plans and clear plans into measurable results and profit.
        </p>
      </div>
    </>
  );
}

/**
 * Same layout shell as `HomeApproach`: `Container` (caller) → flex row, `justify-end` on lg,
 * text column `Reveal` + `min-w-0 max-w-xl`, editorial frame matching `HomeApproachSlider`.
 */
export function AboutVisionLayout() {
  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-end lg:gap-24 xl:gap-28">
      <Reveal>
        <div className="min-w-0 max-w-xl">
          <AboutVisionContent />
        </div>
      </Reveal>

      <div className="relative z-30 w-full max-w-[var(--editorial-image-w)] shrink-0 lg:w-[min(100%,var(--editorial-image-w))]">
        <div
          className={
            "relative isolate mx-auto aspect-[467/316] w-full max-w-[var(--editorial-image-w)] overflow-hidden rounded-xl " +
            "bg-[color:var(--hairline)] ring-1 ring-[color:var(--hairline)] " +
            "lg:aspect-[467/632] lg:mx-0 lg:max-h-[var(--editorial-image-h)] lg:rounded-2xl"
          }
        >
          <Image
            src={VISION_IMAGE}
            alt=""
            fill
            unoptimized
            className="object-cover object-center"
            sizes="(max-width: 1023px) min(calc(100vw - 2rem), 467px), 467px"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}

export function AboutVisionBlock() {
  return (
    <section
      className={
        "border-t border-[color:var(--hairline)] bg-[color:var(--ink)] " +
        "flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center py-12 sm:py-14 " +
        "lg:min-h-0 lg:py-28"
      }
    >
      <Container className="relative">
        <AboutVisionLayout />
      </Container>
    </section>
  );
}
