"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState, type TouchEvent } from "react";
import {
  getCarouselSlideTransition,
  getCarouselSlideVariants,
} from "@/components/motion/carouselSlide";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const SWIPE_THRESHOLD = 52;

const slides = [
  {
    kicker: "Digital marketing services",
    body:
      "We provide end-to-end digital marketing support, from strategy to execution and everything in between.",
    image: "/Slider1.avif",
  },
  {
    kicker: "Consulting",
    body: "Personalized consultations focused on helping you understand your brand, refine your strategy, and move forward with clarity.",
    image: "/slider2.avif",
  },
  {
    kicker: "Resources",
    body:
      "Access our curated collection of templates, guides, and resources designed to streamline your marketing, improve your execution.",
    image: "/slider3B.webp",
  },
] as const;

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function HomeServices() {
  const n = slides.length;
  const [[page, direction], setCarousel] = useState<[number, number]>([0, 0]);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const reduceMotion = useReducedMotion();

  const slideVariants = useMemo(
    () => getCarouselSlideVariants(!!reduceMotion),
    [reduceMotion],
  );

  const slideTransition = useMemo(
    () => getCarouselSlideTransition(!!reduceMotion),
    [reduceMotion],
  );

  const go = useCallback(
    (dir: -1 | 1) => {
      setCarousel(([p]) => [(p + dir + n) % n, dir]);
    },
    [n],
  );

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

  const active = slides[page];
  const progressPct = ((page + 1) / n) * 100;

  return (
    <section
      id="our-services"
      className="relative touch-pan-y bg-[color:var(--surface-subtle)] pb-20 pt-0 sm:pb-28"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Container className="relative pt-16 sm:pt-20">
        <div className="flex flex-col gap-20 lg:flex-row lg:items-center lg:justify-end lg:gap-24 xl:gap-28">
          <div className="min-w-0 max-w-xl">
            <Reveal>
              <div>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-muted)]">
                  Our Services
                </p>
                <h2 className="font-title mt-5 max-w-xl text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--ink)]">
                  What&apos;s In Our Bag?
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 overflow-hidden sm:mt-14">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={slideTransition}
                >
                  <p className="font-sans text-[0.9375rem] font-bold uppercase leading-snug text-[color:var(--ink)] sm:text-[1.0625rem]">
                    {active.kicker}
                  </p>

                  <p className="mt-8 line-clamp-2 font-sans text-[1rem] leading-snug text-[color:var(--ink-muted)] sm:text-[1.0625rem]">
                    {active.body}
                  </p>
                </motion.div>
              </AnimatePresence>

              <Link
                href="/services"
                className="group mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ink)]"
              >
                <span
                  className="font-sans text-xl font-light leading-none text-[color:var(--ink)]"
                  aria-hidden
                >
                  →
                </span>
                <span>View full Services</span>
              </Link>

              <nav
                className="mt-8 flex gap-4 sm:mt-10"
                aria-label="Browse services"
              >
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => go(-1)}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color:var(--ink)] bg-transparent text-[color:var(--ink)] transition hover:bg-[color:var(--ink)]/5 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-subtle)]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => go(1)}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color:var(--ink)] bg-transparent text-[color:var(--ink)] transition hover:bg-[color:var(--ink)]/5 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-subtle)]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </nav>
            </div>
          </div>

          <div className="flex w-full max-w-[var(--editorial-image-w)] shrink-0 flex-col lg:w-[min(100%,var(--editorial-image-w))]">
            <div
              className="relative isolate z-30 aspect-[467/316] w-full overflow-hidden rounded-xl bg-[color:var(--hairline)] ring-1 ring-[color:var(--hairline)] lg:aspect-[467/632] lg:max-h-[min(520px,68vh)] lg:rounded-2xl"
              aria-roledescription="carousel"
              aria-label="Service highlights"
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
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt=""
                    fill
                    unoptimized
                    sizes="(max-width: 1023px) min(calc(100vw - 2rem), 467px), min(50vw - 3rem, 520px)"
                    className="object-cover object-center"
                    priority={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div
          className="relative mt-14 h-1 w-full overflow-hidden rounded-full bg-[color:var(--hairline)] lg:mt-16"
          role="presentation"
          aria-hidden
        >
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-[color:var(--ink)]"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </Container>
    </section>
  );
}
