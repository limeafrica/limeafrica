"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const slides = [
  "/Slider1.avif",
  "/slider2.avif",
  "/slider3B.webp",
] as const;

const INTERVAL_MS = 4000;

export function HomeApproachSlider() {
  const [page, setPage] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setPage((p) => (p + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div
      className="relative isolate mx-auto w-full max-w-[var(--editorial-image-w)] overflow-hidden rounded-xl bg-[color:var(--hairline)] shadow-[0_24px_56px_-24px_rgba(26,22,18,0.18)] ring-1 ring-[color:var(--hairline)] lg:mx-0 lg:rounded-2xl"
      style={{
        aspectRatio: "467 / 632",
        maxHeight: "var(--editorial-image-h)",
      }}
      aria-roledescription="carousel"
      aria-label="Approach highlights"
    >
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          unoptimized
          sizes="(max-width: 1023px) min(calc(100vw - 2rem), 467px), 467px"
          className={`absolute inset-0 object-cover object-center transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            i === page ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          priority={false}
        />
      ))}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-28 bg-gradient-to-t from-[color:var(--ink)]/35 to-transparent"
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
