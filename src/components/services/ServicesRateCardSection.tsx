"use client";

import { useState } from "react";
import { DigitalMarketingCollage } from "@/components/services/DigitalMarketingCollage";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import {
  rateCardDisclaimer,
  rateCardIntro,
  rateCardSectionCollage,
  rateCardTiers,
  servicesEyebrows,
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

const eyebrowOnDark =
  "text-[11px] font-semibold uppercase tracking-[0.25em] text-white/75";

export function ServicesRateCardSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTier = rateCardTiers[activeTabIndex];

  const rateCardContent = (
    <>
      <div className="max-w-3xl text-center sm:text-left">
        <Reveal>
          <p className={eyebrowOnDark}>{withoutHyphens(servicesEyebrows.rateCard)}</p>
          <h2
            id="lime-rate-card-heading"
            className="font-title mt-4 text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-white"
          >
            Lime Rate Card
          </h2>
          <p className="font-sans mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:mx-0">
            {withoutHyphens(rateCardIntro)}
          </p>
        </Reveal>
      </div>

      <div className="mt-10 lg:mt-14">
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex min-w-full border-b border-white/15">
            {rateCardTiers.map((tier, i) => {
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
                      : "border-transparent text-white/55 hover:text-white")
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
              "group relative mt-8 flex h-full flex-col overflow-hidden rounded-none " +
              "bg-[color:var(--brand-white)] shadow-[0_8px_40px_-16px_rgba(26,22,18,0.14)] " +
              "transition-all duration-300 " +
              "hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(26,22,18,0.22)]"
            }
          >
            <div
              className="h-1.5 w-full bg-gradient-to-r from-[color:var(--brand-yellow)] via-[color:var(--brand-yellow)] to-[color:var(--brand-yellow)]/35"
              aria-hidden
            />

            <div className="flex flex-1 flex-col px-7 pb-8 pt-8 sm:px-9 sm:pb-10 sm:pt-9">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[color:var(--hairline)] pb-7">
                <div className="min-w-0">
                  <h3 className="font-title text-2xl font-bold tracking-tight text-[color:var(--ink)] sm:text-[1.65rem]">
                    {activeTier.name}
                  </h3>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-title text-2xl font-bold tabular-nums tracking-tight text-[color:var(--ink)] sm:text-[1.75rem]">
                    {activeTier.priceLabel}
                  </p>
                </div>
              </div>

              <ul className="font-sans mt-7 flex-1 space-y-4 text-[0.9375rem] leading-relaxed sm:text-base">
                {activeTier.features.map((feature) => (
                  <li key={feature.label} className="flex gap-3.5">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-[color:var(--ink-muted)]">
                      <span className="font-semibold text-[color:var(--ink)]">
                        {feature.label}:
                      </span>{" "}
                      {withoutHyphens(feature.description)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl bg-[color:var(--surface-subtle)] px-4 py-4">
                <p className="font-sans text-xs leading-relaxed text-[color:var(--ink-muted)] sm:text-[0.8125rem]">
                  <span className="font-semibold text-[color:var(--ink)]">
                    Note:
                  </span>{" "}
                  {withoutHyphens(rateCardDisclaimer)}
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/15 pt-12 sm:flex-row sm:pt-14">
          <p className="font-sans max-w-md text-center text-sm leading-relaxed text-white/78 sm:text-left">
            Not sure which package fits? Tell us your goals and we&apos;ll help you
            choose the right tier.
          </p>
          <a
            href="#book-consultation"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("book-consultation")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-[color:var(--brand-yellow)] px-12 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink)] no-underline transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ink)]"
          >
            Book a consultation
          </a>
        </div>
      </Reveal>
    </>
  );

  return (
    <section
      id="rate-card"
      className={
        "scroll-mt-28 border-t border-white/10 " +
        "bg-[color:var(--ink)] py-20 sm:py-28 lg:py-32"
      }
      aria-labelledby="lime-rate-card-heading"
    >
      <Container className="lg:hidden">{rateCardContent}</Container>

      <div className="hidden w-full flex-col gap-14 lg:flex lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
        <div className="w-full shrink-0 lg:w-[min(48vw,600px)] lg:max-w-[620px]">
          <Reveal className="block w-full">
            <DigitalMarketingCollage
              foregroundSrc={rateCardSectionCollage.foreground}
              objectPosition={rateCardSectionCollage.objectPosition}
              panelClassName="bg-[color:var(--brand-yellow)]"
            />
          </Reveal>
        </div>
        <div className="min-w-0 flex-1 lg:pl-4 lg:pr-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] xl:pl-8">
          {rateCardContent}
        </div>
      </div>
    </section>
  );
}
