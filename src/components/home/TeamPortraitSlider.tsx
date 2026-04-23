"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const INTERVAL_MS = 5000;

type TeamPortraitSliderProps = {
  name: string;
  slides: readonly string[];
};

export function TeamPortraitSlider({ name, slides }: TeamPortraitSliderProps) {
  const [page, setPage] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return;
    const id = window.setInterval(() => {
      setPage((p) => (p + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, slides.length]);

  const alt = `Portrait of ${name}`;

  return (
    <div
      className="relative isolate w-full overflow-hidden rounded-xl bg-[color:var(--hairline)] shadow-[0_20px_48px_-28px_rgba(26,22,18,0.22)] ring-1 ring-[color:var(--hairline)]"
      style={{ aspectRatio: "4 / 5" }}
      aria-roledescription="carousel"
      aria-label={`${name} portraits`}
    >
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="(max-width: 639px) min(calc(100vw - 2rem), 100vw), (max-width: 1023px) 33vw, 320px"
          className={`absolute inset-0 object-cover object-center transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            i === page ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          priority={false}
        />
      ))}
      {slides.length > 1 ? (
        <div
          className="pointer-events-none absolute inset-x-3 bottom-3 z-20 flex justify-center gap-1.5"
          aria-hidden
        >
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === page
                  ? "w-6 bg-[color:var(--ink)]"
                  : "w-1 bg-[color:var(--brand-white)]/65"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
