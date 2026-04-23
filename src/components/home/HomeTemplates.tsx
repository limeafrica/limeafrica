"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
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

const featureColLeft = [
  {
    title: "Instant access",
    body:
      "Launch-ready layouts with homepage, story-led services, portfolio, inquiries, journal, and utility pages.",
  },
  {
    title: "Essential pages included",
    body:
      "Home, About, Services, Portfolio, Testimonials, Inquiry, Blog, Coming Soon, and polished 404 experiences.",
  },
  {
    title: "Guaranteed to sell your story",
    body:
      "Layouts guide visitors from first impression to inquiry—with emphasis on clarity, proof, and confidence.",
  },
] as const;

const featureColRight = [
  {
    title: "Responsive by default",
    body:
      "Designed for phones first. Stunning on tablets and desktops without surprise breakpoints.",
  },
  {
    title: "Launch support",
    body:
      "Connect your domain, publish, and share—without wrestling the tech. Includes guidance for analytics basics.",
  },
  {
    title: "Customize to your brand",
    body:
      "Swap colors, type, imagery, and copy—built for clarity so updates never feel chaotic.",
  },
] as const;

const TEMPLATE_SLIDES = [
  "/Slider1.avif",
  "/slider2.avif",
  "/slider3B.webp",
] as const;

const SLIDE_INTERVAL_MS = 4500;

export function HomeTemplates() {
  const [page, setPage] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setPage((p) => (p + 1) % TEMPLATE_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section className="relative bg-[color:var(--brand-white)] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20">
          {/* Left: visual — crossfading slideshow */}
          <div
            className="relative isolate min-h-[280px] w-full overflow-hidden rounded-2xl bg-[color:var(--ink)] lg:col-span-5 lg:min-h-[min(520px,58vh)]"
            aria-roledescription="carousel"
            aria-label="Template previews"
          >
            {TEMPLATE_SLIDES.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt=""
                fill
                unoptimized
                sizes="(max-width: 1023px) min(calc(100vw - 2rem), 100vw), 40vw"
                className={`absolute inset-0 object-cover object-center transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === page ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
                priority={false}
              />
            ))}
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

          {/* Right: header + checklist */}
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <p className="text-center font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-muted)]">
                Customize it yourself
              </p>

              <h2 className="font-title mx-auto mt-5 max-w-xl text-center text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--ink)]">
                Website Templates
              </h2>

              <div
                className="mt-10 h-px w-full bg-[color:var(--hairline)]"
                aria-hidden
              />

              <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-x-10 lg:gap-x-12 xl:gap-x-16">
                <ul className="flex flex-col gap-10">
                  {featureColLeft.map((item) => (
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
                  {featureColRight.map((item) => (
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

              <div className="mt-12 flex justify-center sm:mt-14">
                <Link
                  href="/templates"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-white)] transition hover:opacity-92"
                >
                  View templates
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
