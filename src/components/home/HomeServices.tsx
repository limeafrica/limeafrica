"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Container } from "@/components/ui/Container";

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

  const go = useCallback(
    (dir: -1 | 1) => {
      setPage((p) => (p + dir + n) % n);
    },
    [n],
  );

  const active = slides[page];
  const progressPct = ((page + 1) / n) * 100;

  return (
    <section
      id="our-services"
      className="relative bg-[color:var(--surface-subtle)] pb-20 pt-0 sm:pb-28"
    >
      <Container className="relative pt-16 sm:pt-20">
        <div className="flex flex-col gap-20 lg:flex-row lg:items-center lg:justify-end lg:gap-24 xl:gap-28">
          <div className="min-w-0 max-w-xl">
            <h2 className="font-title text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-[color:var(--ink)]">
              Our Services
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

            <div className="mt-12 flex gap-4">
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
            </div>
          </div>

          <div
            className="relative isolate z-30 w-full max-w-[var(--editorial-image-w)] shrink-0 overflow-hidden rounded-xl bg-[color:var(--hairline)] shadow-[0_24px_56px_-24px_rgba(26,22,18,0.14)] ring-1 ring-[color:var(--hairline)] lg:w-[min(100%,var(--editorial-image-w))] lg:rounded-2xl"
            style={{
              aspectRatio: "467 / 632",
              maxHeight: "min(520px, 68vh)",
            }}
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
