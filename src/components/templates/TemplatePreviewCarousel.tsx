"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  getCarouselSlideTransition,
  getCarouselSlideVariants,
} from "@/components/motion/carouselSlide";
import { templatePreviewIntervalMs } from "@/content/templates";

type TemplatePreviewCarouselProps = {
  slides: readonly string[];
  activeIndex: number;
  /** User chose a dot — pauses auto-play in the parent. */
  onActiveIndexChange?: (index: number) => void;
  /** Auto-advance tick — updates preview + title highlight only. */
  onAutoPlayAdvance?: (index: number) => void;
  /** When false, auto-advance is disabled (e.g. after a title is selected). */
  autoPlay?: boolean;
};

export function TemplatePreviewCarousel({
  slides,
  activeIndex,
  onActiveIndexChange,
  onAutoPlayAdvance,
  autoPlay = true,
}: TemplatePreviewCarouselProps) {
  const [[page, direction], setCarousel] = useState<[number, number]>([
    activeIndex,
    1,
  ]);
  const reduceMotion = useReducedMotion();

  const slideVariants = useMemo(
    () => getCarouselSlideVariants(!!reduceMotion),
    [reduceMotion],
  );

  const slideTransition = useMemo(
    () => getCarouselSlideTransition(!!reduceMotion),
    [reduceMotion],
  );

  useEffect(() => {
    setCarousel(([prevPage]) => {
      if (prevPage === activeIndex) return [prevPage, 1];
      return [activeIndex, activeIndex > prevPage ? 1 : -1];
    });
  }, [activeIndex]);

  useEffect(() => {
    if (reduceMotion || !autoPlay || slides.length < 2) return;
    const id = window.setInterval(() => {
      setCarousel(([p]) => {
        const next = (p + 1) % slides.length;
        onAutoPlayAdvance?.(next);
        return [next, 1];
      });
    }, templatePreviewIntervalMs);
    return () => window.clearInterval(id);
  }, [reduceMotion, autoPlay, slides.length, onAutoPlayAdvance]);

  const safePage = slides.length > 0 ? Math.min(page, slides.length - 1) : 0;

  return (
    <div
      className="relative isolate min-h-[280px] w-full overflow-hidden rounded-2xl bg-[color:var(--ink)] lg:min-h-[min(520px,58vh)]"
      aria-roledescription="carousel"
      aria-label="Template previews"
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={slides[safePage]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0 z-10"
        >
          <Image
            src={slides[safePage]}
            alt=""
            fill
            unoptimized
            sizes="(max-width: 1023px) min(calc(100vw - 2rem), 100vw), 40vw"
            className="object-cover object-center"
            priority={safePage === 0}
          />
        </motion.div>
      </AnimatePresence>
      <div
        className="pointer-events-none absolute inset-0 z-[12] bg-gradient-to-t from-[color:var(--ink)]/50 to-transparent"
        aria-hidden
      />
      {slides.length > 1 ? (
        <div
          className="absolute inset-x-4 bottom-4 z-[14] flex justify-center gap-2"
          role="tablist"
          aria-label="Template preview slides"
        >
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={i === safePage}
              aria-label={`Show preview ${i + 1}`}
              onClick={() => onActiveIndexChange?.(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === safePage
                  ? "w-7 bg-[color:var(--brand-yellow)]"
                  : "w-1.5 bg-[color:var(--brand-white)]/45 hover:bg-[color:var(--brand-white)]/70"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
