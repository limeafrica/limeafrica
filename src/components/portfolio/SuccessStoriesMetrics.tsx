"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const METRICS = [
  { target: 20, suffix: "+", label: "BRANDS" },
  { target: 400, suffix: "+", label: "CAMPAIGNS" },
  { target: 8000, suffix: "+", label: "LEADS GENERATED" },
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
      className="font-title text-[clamp(2.5rem,6vw,3.75rem)] font-bold leading-none tracking-tight text-[color:var(--brand-yellow)] tabular-nums"
    >
      {formatFigure(value)}
      {suffix}
    </p>
  );
}

export function SuccessStoriesMetrics() {
  return (
    <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8 md:mt-16">
      {METRICS.map((m, i) => (
        <div key={m.label} className="text-center">
          <MetricFigure target={m.target} suffix={m.suffix} delay={i * 0.09} />
          <p className="mt-3 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-white)]">
            {m.label}
          </p>
        </div>
      ))}
    </div>
  );
}
