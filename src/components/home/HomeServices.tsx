"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState, type TouchEvent } from "react";
import { Container } from "@/components/ui/Container";

const SWIPE_THRESHOLD = 52;

const slides = [
  {
    kicker: "Social media management",
    body:
      "Intentional strategies and visually cohesive content that strengthens your presence—structured testing across Instagram, TikTok, Pinterest, and more.",
    href: "/services#social",
    label: "Learn more",
    image: "/Slider1.avif",
  },
  {
    kicker: "Branding",
    body:
      "Strategic, enduring identities built to connect and convert—visual direction, voice, and systems that scale with you.",
    href: "/services#branding",
    label: "Learn more",
    image: "/slider2.avif",
  },
  {
    kicker: "Website design",
    body:
      "Beautiful, maintainable sites—semi-custom or fully custom—so your digital home feels elevated and effortless to operate.",
    href: "/services#web",
    label: "Learn more",
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
  const [page, setPage] = useState(0);
  const n = slides.length;
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback(
    (dir: -1 | 1) => {
      setPage((p) => (p + dir + n) % n);
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
            <h2 className="font-title text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-[color:var(--ink)]">
              Services
            </h2>

            <p className="mt-4 font-sans text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--ink)]">
              {active.kicker}
            </p>

            <p className="mt-8 font-sans text-[1rem] leading-[1.75] text-[color:var(--ink-muted)] sm:text-[1.0625rem]">
              {active.body}
            </p>

            <Link
              href={active.href}
              className="group mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ink)]"
            >
              <span
                className="font-sans text-xl font-light leading-none text-[color:var(--ink)]"
                aria-hidden
              >
                →
              </span>
              <span className="uppercase">{active.label}</span>
            </Link>
          </div>

          <div className="flex w-full max-w-[var(--editorial-image-w)] shrink-0 flex-col gap-6 lg:w-[min(100%,var(--editorial-image-w))] lg:gap-8">
            <div
              className="relative isolate z-30 aspect-[467/316] w-full overflow-hidden rounded-xl bg-[color:var(--hairline)] shadow-[0_24px_56px_-24px_rgba(26,22,18,0.14)] ring-1 ring-[color:var(--hairline)] lg:aspect-[467/632] lg:max-h-[min(520px,68vh)] lg:rounded-2xl"
              aria-roledescription="carousel"
              aria-label="Service highlights"
            >
              {slides.map((s, i) => (
                <Image
                  key={s.image}
                  src={s.image}
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 1023px) min(calc(100vw - 2rem), 467px), min(50vw - 3rem, 520px)"
                  className={`absolute inset-0 object-cover object-center ${
                    i === page ? "z-10 opacity-100" : "z-0 opacity-0"
                  }`}
                  priority={false}
                />
              ))}
            </div>

            <nav
              className="flex w-full justify-end gap-4"
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
