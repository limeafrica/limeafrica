"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import {
  getCarouselSlideTransition,
  getCarouselSlideVariants,
} from "@/components/motion/carouselSlide";
import { Reveal } from "@/components/motion/Reveal";
import type { WorkItem } from "@/content/work";

const SWIPE_THRESHOLD = 52;

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

type HomeWorkPreviewProjectsProps = {
  projects: readonly WorkItem[];
};

export function HomeWorkPreviewProjects({
  projects,
}: HomeWorkPreviewProjectsProps) {
  const n = projects.length;
  const [[idx, direction], setCarousel] = useState<[number, number]>([0, 0]);
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

  const next = useCallback(() => {
    setCarousel(([i]) => [(i + 1) % n, 1]);
  }, [n]);

  const prev = useCallback(() => {
    setCarousel(([i]) => [(i - 1 + n) % n, -1]);
  }, [n]);

  const active = projects[idx];

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const t = e.targetTouches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (!touchStartRef.current || n < 2) return;
      const start = touchStartRef.current;
      touchStartRef.current = null;

      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;

      if (Math.abs(dx) < SWIPE_THRESHOLD) return;
      if (Math.abs(dx) <= Math.abs(dy)) return;

      if (dx < 0) next();
      else prev();
    },
    [n, next, prev],
  );

  const navBtnClass =
    "flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[color:var(--brand-white)]/35 bg-[color:var(--brand-white)]/10 text-[color:var(--brand-white)] transition hover:border-[color:var(--brand-yellow)] hover:bg-[color:var(--brand-yellow)] hover:text-[color:var(--ink)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--ink)]";

  return (
    <>
      <div className="mt-14 md:hidden">
        <Reveal>
          <article
            className="touch-pan-y overflow-hidden text-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={idx}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="flex flex-col items-center"
              >
                <Link
                  href={`/portfolio/${active.slug}`}
                  className="group block w-full text-center"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[color:var(--brand-white)]/10 ring-2 ring-transparent transition duration-500 group-hover:ring-[color:var(--brand-yellow)]">
                    <Image
                      src={active.imageSrc}
                      alt={active.imageAlt}
                      fill
                      unoptimized
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-90" />
                    <p className="absolute bottom-5 left-1/2 w-[calc(100%-2.5rem)] -translate-x-1/2 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-sand)]">
                      {active.category}
                    </p>
                  </div>
                  <p className="font-title mt-5 text-2xl text-[color:var(--brand-white)]">
                    {active.title}
                  </p>
                  <span className="mt-3 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-yellow)]">
                    See more
                    <span
                      aria-hidden
                      className="transition group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </article>
        </Reveal>

        <nav
          className="mt-8 flex items-center justify-center gap-5"
          aria-label="Browse featured work"
        >
          <button type="button" aria-label="Previous project" onClick={prev} className={navBtnClass}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Next project" onClick={next} className={navBtnClass}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </nav>
      </div>

      <div className="mt-14 hidden gap-10 md:grid md:grid-cols-3 md:gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={0.07 * i}>
            <Link href={`/portfolio/${project.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[color:var(--brand-white)]/10 ring-2 ring-transparent transition duration-500 group-hover:ring-[color:var(--brand-yellow)]">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  unoptimized
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-90" />
                <p className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-sand)]">
                  {project.category}
                </p>
              </div>
              <p className="font-title mt-5 text-2xl text-[color:var(--brand-white)]">
                {project.title}
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-yellow)]">
                See more
                <span aria-hidden className="transition group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
