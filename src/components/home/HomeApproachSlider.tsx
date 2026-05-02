"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import {
  getCarouselSlideTransition,
  getCarouselSlideVariants,
} from "@/components/motion/carouselSlide";

const slides = [
  "/Slider1.avif",
  "/slider2.avif",
  "/slider3B.webp",
] as const;

const INTERVAL_MS = 4000;

const SWIPE_THRESHOLD = 52;

export function HomeApproachSlider() {
  const [[page, direction], setCarousel] = useState<[number, number]>([0, 1]);
  const reduceMotion = useReducedMotion();
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const n = slides.length;

  const slideVariants = useMemo(
    () => getCarouselSlideVariants(!!reduceMotion),
    [reduceMotion],
  );

  const slideTransition = useMemo(
    () => getCarouselSlideTransition(!!reduceMotion),
    [reduceMotion],
  );

  const go = useCallback((dir: -1 | 1) => {
    setCarousel(([p]) => [(p + dir + n) % n, dir]);
  }, [n]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setCarousel(([p]) => [(p + 1) % slides.length, 1]);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const t = e.targetTouches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (!touchStartRef.current) return;
      const start = touchStartRef.current;
      touchStartRef.current = null;

      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;

      if (Math.abs(dx) < SWIPE_THRESHOLD) return;
      if (Math.abs(dx) <= Math.abs(dy)) return;

      if (dx < 0) go(1);
      else go(-1);
    },
    [go],
  );

  return (
    <div
      className="relative isolate mx-auto aspect-[467/316] w-full max-w-[var(--editorial-image-w)] touch-pan-y overflow-hidden rounded-xl bg-[color:var(--hairline)] ring-1 ring-[color:var(--hairline)] lg:aspect-[467/632] lg:mx-0 lg:max-h-[var(--editorial-image-h)] lg:rounded-2xl"
      aria-roledescription="carousel"
      aria-label="Approach highlights"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0 z-10"
        >
          <Image
            src={slides[page]}
            alt=""
            fill
            unoptimized
            sizes="(max-width: 1023px) min(calc(100vw - 2rem), 467px), 467px"
            className="object-cover object-center"
            priority={false}
          />
        </motion.div>
      </AnimatePresence>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-16 bg-gradient-to-t from-[color:var(--ink)]/35 to-transparent lg:h-28"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-4 bottom-4 z-20 flex justify-center gap-2"
        aria-hidden
      >
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === page
                ? "w-7 bg-[color:var(--brand-yellow)]"
                : "w-1.5 bg-[color:var(--brand-white)]/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
