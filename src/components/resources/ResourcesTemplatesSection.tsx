"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  getCarouselSlideTransition,
  getCarouselSlideVariants,
} from "@/components/motion/carouselSlide";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="9.25"
        stroke="currentColor"
        strokeWidth="1.25"
        className="text-[color:var(--ink)]"
      />
      <path
        d="M8 12l2.2 2.2L15.5 9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[color:var(--ink)]"
      />
    </svg>
  );
}

const templateFeaturesLeft = [
  {
    title: "Profile and Feed Mockup Template",
    body:
      "Visual layout preview showing profile structure grid balance and content hierarchy before publishing.",
  },
  {
    title: "Carousel Templates",
    body:
      "Pre designed templates created for consistent visual identity across feed.",
  },
] as const;

const templateFeaturesRight = [
  {
    title: "Content Calendars Templates",
    body:
      "Planned monthly content schedule aligned with campaign goals, key dates, content pillars and much more.",
  },
  {
    title: "Company Pack",
    body:
      "A structured document outlining brand positioning, objectives, target audience and lots more.",
  },
] as const;

const TEMPLATE_SLIDES = [
  "/Slider1.avif",
  "/slider2.avif",
  "/slider3B.webp",
] as const;

const SLIDE_INTERVAL_MS = 4500;

export function ResourcesTemplatesSection() {
  const [[page, direction], setCarousel] = useState<[number, number]>([0, 1]);
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
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setCarousel(([p]) => [(p + 1) % TEMPLATE_SLIDES.length, 1]);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      id="templates"
      className="scroll-mt-28 relative bg-[color:var(--brand-white)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20">
          <div
            className="relative isolate min-h-[280px] w-full overflow-hidden rounded-2xl bg-[color:var(--ink)] lg:col-span-5 lg:min-h-[min(520px,58vh)]"
            aria-roledescription="carousel"
            aria-label="Template previews"
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
                  src={TEMPLATE_SLIDES[page]}
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 1023px) min(calc(100vw - 2rem), 100vw), 40vw"
                  className="object-cover object-center"
                  priority={false}
                />
              </motion.div>
            </AnimatePresence>
            <div
              className="pointer-events-none absolute inset-0 z-[12] bg-gradient-to-t from-[color:var(--ink)]/50 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-4 bottom-4 z-[14] flex justify-center gap-2"
              aria-hidden
            >
              {TEMPLATE_SLIDES.map((_, i) => (
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

          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <p className="text-left font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-muted)]">
                Customize it yourself
              </p>

              <h2 className="font-title mt-5 max-w-xl text-left text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--ink)]">
                Templates
              </h2>

              <div
                className="mt-10 h-px w-full bg-[color:var(--hairline)]"
                aria-hidden
              />

              <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-x-10 lg:gap-x-12 xl:gap-x-16">
                <ul className="flex flex-col gap-10">
                  {templateFeaturesLeft.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <p className="font-title text-lg leading-snug text-[color:var(--ink)]">
                          {item.title}
                        </p>
                        <p className="font-sans mt-2 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-10">
                  {templateFeaturesRight.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <p className="font-title text-lg leading-snug text-[color:var(--ink)]">
                          {item.title}
                        </p>
                        <p className="font-sans mt-2 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 flex justify-start sm:mt-14">
                <Link
                  href="/templates"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-white)] transition hover:opacity-92"
                >
                  View all templates
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
