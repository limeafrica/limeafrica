import type { ReactNode } from "react";
import { DigitalMarketingForeground } from "@/components/services/DigitalMarketingForeground";
import { Reveal } from "@/components/motion/Reveal";

/** Shared overlap rhythm with Services section hero bands (padding ↔ −mt matched). */
export const SERVICES_MOBILE_BAND_PB = "pb-[23rem] sm:pb-96";
export const SERVICES_MOBILE_IMAGE_MT = "-mt-[21.5rem] sm:-mt-[23rem]";

type ServicesMobileEditorialStackProps = {
  /** Tailwind background for the top band (brand CSS vars). */
  bandClassName: string;
  eyebrowTextClassName: string;
  titleTextClassName: string;
  eyebrow: string;
  title: string;
  foregroundSrc: string;
  children: ReactNode;
};

/**
 * Mobile-only: full-bleed color band + title + centered framed image overlap + body.
 */
export function ServicesMobileEditorialStack({
  bandClassName,
  eyebrowTextClassName,
  titleTextClassName,
  eyebrow,
  title,
  foregroundSrc,
  children,
}: ServicesMobileEditorialStackProps) {
  return (
    <div className="lg:hidden">
      <div className="relative w-full">
        <div
          className={`px-6 pt-10 ${SERVICES_MOBILE_BAND_PB} ${bandClassName}`}
        >
          <Reveal>
            <p
              className={`text-[11px] font-semibold uppercase tracking-[0.25em] ${eyebrowTextClassName}`}
            >
              {eyebrow}
            </p>
            <h2
              className={`font-title mt-4 max-w-[22ch] text-3xl font-bold leading-tight tracking-tight ${titleTextClassName}`}
            >
              {title}
            </h2>
          </Reveal>
        </div>
        <div
          className={`relative z-[2] flex w-full justify-center px-6 ${SERVICES_MOBILE_IMAGE_MT}`}
        >
          <DigitalMarketingForeground
            foregroundSrc={foregroundSrc}
            className="w-full max-w-[420px] sm:max-w-[460px]"
          />
        </div>
      </div>
      <div className="space-y-10 px-6 pt-14">{children}</div>
    </div>
  );
}
