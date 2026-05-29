"use client";

import { useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/content/site";

const SWIPE_THRESHOLD = 52;
const AUTO_MS = 3000;

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

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    function sync() {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setVisibleCount(3);
        return;
      }
      if (window.matchMedia("(min-width: 640px)").matches) {
        setVisibleCount(2);
        return;
      }
      setVisibleCount(1);
    }

    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  return visibleCount;
}

export function HomeTestimonials() {
  const n = testimonials.length;
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, n - visibleCount);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const advance = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (reduceMotion || paused || maxIndex === 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(advance, AUTO_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reduceMotion, paused, maxIndex, advance]);

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

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const navBtnClass =
    "flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[color:var(--ink)] bg-[color:var(--brand-yellow)]/25 text-[color:var(--ink)] transition hover:bg-[color:var(--ink)]/8 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-[color:var(--brand-yellow)]/25 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--brand-white)]";

  return (
    <section className="bg-[color:var(--brand-white)] py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.4em] text-[color:var(--ink)]/70">
            Voices
          </p>
          <h2 className="font-title mt-3 text-center text-2xl text-[color:var(--ink)] sm:text-3xl">
            Trusted by founders who care about craft
          </h2>
        </Reveal>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
        >
        <div
          className="mt-14 touch-pan-y overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: `${(n / visibleCount) * 100}%`,
              transform: `translateX(-${(index / n) * 100}%)`,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.attribution}
                className="box-border shrink-0 px-3 sm:px-4"
                style={{ width: `${100 / n}%` }}
              >
                <blockquote className="flex h-[22rem] flex-col rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-subtle)] p-8 sm:h-[24rem]">
                  <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain [-webkit-overflow-scrolling:touch] pr-1">
                    <p className="font-sans text-lg leading-snug text-[color:var(--ink)] sm:text-xl">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <footer className="mt-8 shrink-0 border-t border-[color:var(--hairline)] pt-6 text-sm text-[color:var(--ink-muted)]">
                    <p className="font-semibold text-[color:var(--ink)]">
                      {t.attribution}
                    </p>
                    {t.company ? <p>{t.company}</p> : null}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        <nav
          className="mt-10 flex items-center justify-center gap-5"
          aria-label="Browse testimonials"
        >
          <button
            type="button"
            aria-label="Previous testimonials"
            className={navBtnClass}
            onClick={prev}
            disabled={!canPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-[10px] font-medium tabular-nums uppercase tracking-[0.28em] text-[color:var(--ink-muted)]">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(maxIndex + 1).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label="Next testimonials"
            className={navBtnClass}
            onClick={next}
            disabled={!canNext}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </nav>
        </div>
      </Container>
    </section>
  );
}
