"use client";

import Image from "next/image";
import { useLayoutEffect, useState } from "react";

/**
 * Left strip for “What we stand for” only. Hidden as soon as Team or Next steps
 * enters the viewport so it never overlaps those sections (no delayed fade).
 */
const VALUES_IMAGE = "/slider3B.webp";

export function AboutValuesFixedBackdrop() {
  const [valuesInView, setValuesInView] = useState(false);
  const [teamInView, setTeamInView] = useState(false);
  const [nextStepsInView, setNextStepsInView] = useState(false);

  useLayoutEffect(() => {
    const valuesEl = document.getElementById("about-values");
    const teamEl = document.getElementById("about-team");
    const nextEl = document.getElementById("about-next-steps");
    if (!valuesEl || !teamEl || !nextEl) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { id } = entry.target;
          if (id === "about-values") setValuesInView(entry.isIntersecting);
          if (id === "about-team") setTeamInView(entry.isIntersecting);
          if (id === "about-next-steps") setNextStepsInView(entry.isIntersecting);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0 },
    );

    io.observe(valuesEl);
    io.observe(teamEl);
    io.observe(nextEl);
    return () => io.disconnect();
  }, []);

  const visible =
    valuesInView && !teamInView && !nextStepsInView;

  return (
    <div
      className={
        "pointer-events-none fixed left-0 top-14 z-[1] h-[calc(100dvh-3.5rem)] w-[54%] " +
        (visible ? "hidden lg:block" : "hidden")
      }
      aria-hidden
    >
      <Image
        src={VALUES_IMAGE}
        alt=""
        fill
        unoptimized
        className="object-cover object-center"
        sizes="54vw"
        priority={false}
      />
    </div>
  );
}
