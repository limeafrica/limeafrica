"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const METRICS = [
  { target: 20, suffix: "+", label: "Brands partnered" },
  { target: 400, suffix: "+", label: "Campaigns delivered" },
  { target: 8000, suffix: "+", label: "Leads generated" },
] as const;

function formatFigure(n: number) {
  return n >= 1000 ? new Intl.NumberFormat("en-US").format(n) : String(n);
}

function MetricFigure({
  target,
  suffix,
  delay,
}: {
  target: number;
  suffix: string;
  delay: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setValue(target);
      return;
    }
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 1.85,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, target, delay, reduceMotion]);

  return (
    <p
      ref={ref}
      className="font-title text-[clamp(2.75rem,6vw,4rem)] font-bold leading-none tracking-tight text-[color:var(--brand-yellow)] tabular-nums"
    >
      {formatFigure(value)}
      {suffix}
    </p>
  );
}

export function SuccessStoriesMetrics() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
      {METRICS.map((m, i) => (
        <li
          key={m.label}
          className={
            "relative px-8 py-10 text-center sm:py-12 sm:text-left " +
            (i > 0 ? "border-t border-white/10 sm:border-t-0" : "")
          }
        >
          <span
            className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-[color:var(--brand-sand)]"
            aria-hidden
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="mt-4 sm:mt-5">
            <MetricFigure target={m.target} suffix={m.suffix} delay={i * 0.09} />
          </div>
          <p className="mt-3 font-sans text-sm font-medium leading-snug text-[color:var(--brand-white)]/80 sm:mt-4">
            {m.label}
          </p>
        </li>
      ))}
    </ul>
  );
}
