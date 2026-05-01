"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import { Container } from "@/components/ui/Container";

const AUTO_MS = 5000;

/** Horizontal swipe distance (px) before changing slide — ignores vertical scroll */
const SWIPE_THRESHOLD = 44;

/** Snappy editorial spring — lively without feeling chaotic */
const SPRING_SLIDE: Transition = {
  type: "spring",
  stiffness: 210,
  damping: 28,
  mass: 0.58,
};

const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 32,
  mass: 0.45,
};

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const heroCtaClassName =
  "mt-6 inline-flex min-h-11 w-fit min-w-0 max-w-full items-center justify-center rounded-full border border-[color:var(--brand-white)]/35 px-5 py-2.5 text-center text-[11px] font-semibold uppercase leading-snug tracking-[0.18em] text-[color:var(--brand-white)] transition hover:border-[color:var(--brand-yellow)] hover:bg-[color:var(--brand-yellow)] hover:text-[color:var(--ink)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--ink)] sm:mt-8 sm:px-6 sm:tracking-[0.22em]";

const slides = [
  {
    src: "/Slider1.avif",
    title: "You've Found Lime",
    subtitle:
      "We’re not just a digital marketing agency; we’re your partner in growth.",
    kicker: "Brand & narrative",
    ctaLabel: "View Full Story",
    ctaHref: "/about",
  },
  {
    src: "/slider2.avif",
    title: "Struggling To Keep Up?",
    subtitle:
      "Let’s take social media off your to-do list.",
    kicker: "Built for your brand",
    ctaLabel: "Book a Consultation",
    ctaHref: "https://paystack.shop/pay/discoverycalls",
  },
  {
    src: "/slider3B.webp",
    title: "We Turn Content Into Revenue",
    subtitle:
      "With over ₦300M in profit generated for 16 brands.",
    kicker: "Results that speak",
    ctaLabel: "Showcase your work with Lime",
    ctaHref: "/templates",
  },
] as const;

function slideTransition(reduceMotion: boolean): Transition {
  if (reduceMotion) return { duration: 0.18, ease: "easeOut" };
  return SPRING_SLIDE;
}

function copyTransition(reduceMotion: boolean): Transition {
  if (reduceMotion) return { duration: 0.15, ease: "easeOut" };
  return {
    ...SPRING_SNAPPY,
    delay: 0.06,
  };
}

export function HomeHeroSlider() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback((dir: -1 | 1) => {
    setPage(([p]) => {
      const n = slides.length;
      const next = (p + dir + n) % n;
      return [next, dir];
    });
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => go(1), AUTO_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reduceMotion, paused, go]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

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

  const slideVariants: Variants = useMemo(() => {
    if (reduceMotion) {
      return {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      };
    }
    return {
      /** Incoming: “lands” from the side with a slight zoom & tilt — reads like a magazine spread */
      enter: (dir: number) => ({
        opacity: 0,
        scale: 1.16,
        x: dir >= 0 ? "26%" : "-26%",
        rotateZ: dir >= 0 ? 2.2 : -2.2,
      }),
      center: {
        opacity: 1,
        scale: 1,
        x: "0%",
        rotateZ: 0,
      },
      /** Outgoing: scooped away opposite direction — feels hands-on, not a dissolve */
      exit: (dir: number) => ({
        opacity: 0,
        scale: 0.88,
        x: dir >= 0 ? "-22%" : "22%",
        rotateZ: dir >= 0 ? -1.8 : 1.8,
      }),
    };
  }, [reduceMotion]);

  const copyVariants: Variants = useMemo(() => {
    if (reduceMotion) {
      return {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      };
    }
    return {
      enter: (dir: number) => ({
        opacity: 0,
        y: 48,
        skewX: dir >= 0 ? 5 : -5,
      }),
      center: {
        opacity: 1,
        y: 0,
        skewX: 0,
      },
      exit: {
        opacity: 0,
        y: -28,
        skewX: 0,
        transition: {
          opacity: { duration: 0.22, ease: EASE_OUT },
          y: { duration: 0.32, ease: EASE_OUT },
        },
      },
    };
  }, [reduceMotion]);

  const tSlide = slideTransition(!!reduceMotion);
  const tCopy = copyTransition(!!reduceMotion);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured stories"
      className="relative isolate min-h-[calc(100svh-3.5rem)] w-full touch-manipulation overflow-hidden bg-[color:var(--ink)] sm:touch-auto"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={slides[page].src}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={tSlide}
          style={{ willChange: "transform, opacity" }}
          className="absolute inset-0 overflow-hidden"
        >
          <Image
            src={slides[page].src}
            alt=""
            fill
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
            priority={page === 0}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-[color:var(--ink)]/45 to-[color:var(--ink)]/25"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)]/70 via-transparent to-transparent sm:from-[color:var(--ink)]/55"
            aria-hidden
          />
        </motion.div>
      </AnimatePresence>

      {/* Brief brand flash on slide change only (initial={false} skips first paint) */}
      <AnimatePresence initial={false}>
        {!reduceMotion && (
          <motion.div
            key={page}
            initial={{ opacity: 0.42 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
            className="pointer-events-none absolute inset-0 z-[5] bg-[color:var(--brand-yellow)] mix-blend-soft-light"
            aria-hidden
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex min-h-[calc(100svh-3.5rem)] flex-col justify-center py-8 sm:py-12 lg:py-14">
        <Container className="relative">
          <div className="max-w-2xl overflow-hidden [perspective:1200px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={slides[page].src}
                custom={direction}
                variants={copyVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={tCopy}
                style={{ transformOrigin: "left center", willChange: "transform, opacity" }}
              >
                <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--brand-sand)]">
                  <span
                    className="h-px w-10 bg-[color:var(--brand-yellow)]"
                    aria-hidden
                  />
                  {slides[page].kicker}
                </p>
                <h2 className="font-title mt-4 text-balance text-[clamp(2.125rem,5.2vw+0.65rem,4.5rem)] font-medium leading-[1.07] tracking-[-0.02em] text-[color:var(--brand-white)] sm:mt-5 sm:leading-[1.1] lg:leading-[1.12]">
                  {slides[page].title}
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-[0.9375rem] leading-relaxed text-[color:var(--brand-white)]/85 sm:mt-5 sm:text-base md:mt-6 md:text-lg md:leading-relaxed">
                  {slides[page].subtitle}
                </p>
                <Link
                  href={slides[page].ctaHref}
                  className={heroCtaClassName}
                >
                  {slides[page].ctaLabel}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 sm:mt-14">
            <div
              className="flex items-center gap-2"
              role="group"
              aria-label="Choose slide"
            >
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  aria-label={`Slide ${i + 1}: ${s.kicker}`}
                  aria-current={i === page ? true : undefined}
                  className={`relative h-2.5 rounded-full transition-[width,background-color] duration-300 ${
                    i === page
                      ? "w-10 bg-[color:var(--brand-yellow)]"
                      : "w-2.5 bg-[color:var(--brand-white)]/35 hover:bg-[color:var(--brand-white)]/55"
                  }`}
                  onClick={() => {
                    if (i === page) return;
                    const dir = i > page ? 1 : -1;
                    setPage([i, dir]);
                  }}
                />
              ))}
            </div>
            <span className="text-[10px] font-medium tabular-nums uppercase tracking-[0.28em] text-[color:var(--brand-white)]/45">
              {String(page + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </Container>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-[color:var(--brand-yellow)]/40 to-transparent" />

      <button
        type="button"
        aria-label="Previous slide"
        className="pointer-events-auto absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--brand-white)]/15 bg-[color:var(--brand-white)]/10 text-[color:var(--brand-white)] backdrop-blur-md transition hover:bg-[color:var(--brand-white)]/20 sm:left-6 sm:flex sm:h-12 sm:w-12"
        onClick={() => go(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className="h-5 w-5"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="pointer-events-auto absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--brand-white)]/15 bg-[color:var(--brand-white)]/10 text-[color:var(--brand-white)] backdrop-blur-md transition hover:bg-[color:var(--brand-white)]/20 sm:right-6 sm:flex sm:h-12 sm:w-12"
        onClick={() => go(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className="h-5 w-5"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
}
