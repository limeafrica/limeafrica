"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import {
  logoRateCardHeading,
  logoRateCardTiers,
} from "@/content/services";
import { withoutHyphens } from "@/lib/displayCopy";

function IconCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <circle cx="10" cy="10" r="9" className="stroke-[color:var(--ink)]" strokeWidth={1.5} />
      <path
        d="M6 10l2.5 2.5L14 7"
        className="stroke-[color:var(--ink)]"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrandingLogoRateCard() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTier = logoRateCardTiers[activeTabIndex];

  return (
    <div className="max-w-3xl">
      <Reveal delay={0.08}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-muted)]">
          Rate card
        </p>
        <h3 className="font-title mt-3 text-2xl font-bold tracking-tight text-[color:var(--ink)] sm:text-[1.65rem]">
          {withoutHyphens(logoRateCardHeading)}
        </h3>
      </Reveal>

      <div className="mt-6 lg:mt-8">
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex min-w-full border-b border-[color:var(--hairline)]">
            {logoRateCardTiers.map((tier, i) => {
              const active = i === activeTabIndex;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setActiveTabIndex(i)}
                  className={
                    "shrink-0 border-b px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition sm:px-6 " +
                    (active
                      ? "border-[color:var(--brand-yellow)] bg-[color:var(--brand-yellow)]/90 text-[color:var(--ink)]"
                      : "border-transparent text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]")
                  }
                >
                  {tier.name}
                </button>
              );
            })}
          </div>
        </div>

        <Reveal key={activeTier.id} delay={0.04}>
          <article
            className={
              "group relative mt-6 flex h-full flex-col overflow-hidden rounded-none " +
              "bg-[color:var(--brand-white)] shadow-[0_8px_40px_-16px_rgba(26,22,18,0.14)] " +
              "transition-all duration-300 " +
              "hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(26,22,18,0.22)]"
            }
          >
            <div
              className="h-1.5 w-full bg-gradient-to-r from-[color:var(--brand-yellow)] via-[color:var(--brand-yellow)] to-[color:var(--brand-yellow)]/35"
              aria-hidden
            />

            <div className="flex flex-1 flex-col px-6 pb-6 pt-6 sm:px-8 sm:pb-7 sm:pt-7">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[color:var(--hairline)] pb-5">
                <div className="min-w-0">
                  <h4 className="font-title text-2xl font-bold tracking-tight text-[color:var(--ink)] sm:text-[1.65rem]">
                    {activeTier.name}
                  </h4>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-title text-2xl font-bold tabular-nums tracking-tight text-[color:var(--ink)] sm:text-[1.75rem]">
                    {activeTier.priceLabel}
                  </p>
                </div>
              </div>

              <ul className="font-sans mt-5 flex-1 space-y-2.5 text-[0.875rem] leading-relaxed sm:text-[0.9375rem]">
                {activeTier.features.map((feature) => (
                  <li key={feature} className="flex gap-3.5">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-[color:var(--ink-muted)]">
                      {withoutHyphens(feature)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </div>
  );
}
