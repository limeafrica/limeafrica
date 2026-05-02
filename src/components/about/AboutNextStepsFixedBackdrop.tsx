"use client";

import Image from "next/image";
import { useLayoutEffect, useState } from "react";

/** Same asset as before — only mounted while `#about-next-steps` intersects the viewport. */
const CTA_BG_IMAGE = "/Slider1.avif";

/**
 * Full-viewport fixed photo for Next steps. Hidden whenever that section is off-screen
 * so it cannot show through transparent areas of earlier sections (e.g. What we stand for).
 */
export function AboutNextStepsFixedBackdrop() {
  const [active, setActive] = useState(false);

  useLayoutEffect(() => {
    const el = document.getElementById("about-next-steps");
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-14 bottom-0 z-0">
      <Image
        src={CTA_BG_IMAGE}
        alt=""
        fill
        unoptimized
        className="object-cover object-center"
        sizes="100vw"
        priority={false}
      />
      <div
        className="absolute inset-0 bg-[color:var(--ink)]/40"
        aria-hidden
      />
    </div>
  );
}
