"use client";

import Link from "next/link";
import { useState } from "react";
import { DigitalMarketingCollage } from "@/components/services/DigitalMarketingCollage";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import {
  bundlesIntro,
  bundleTiers,
  extrasDisclaimer,
  extrasItems,
  bundlesSectionCollage,
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

const eyebrow =
  "text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-muted)]";

export function ServicesBundlesSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const showingExtras = activeTabIndex === bundleTiers.length;
  const activeTier = showingExtras ? null : bundleTiers[activeTabIndex];

  const bundlesContent = (
    <>
      <div className="max-w-3xl text-center sm:text-left">
        <Reveal>
          <p className={eyebrow}>{withoutHyphens(servicesEyebrows.bundles)}</p>
          <h2
            id="lime-edit-heading"
            className="font-title mt-4 text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[color:var(--ink)]"
          >
            The Lime Edit
          </h2>
          <p className="font-sans mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--ink-muted)] sm:mx-0">
            {withoutHyphens(bundlesIntro)}
          </p>
        </Reveal>
      </div>

      <div className="mt-10 lg:mt-14">
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex min-w-full border-b border-[color:var(--hairline)]">
            {[
              ...bundleTiers.map((tier) => ({
                id: tier.id,
                label: tier.name,
              })),
              { id: "extras", label: "Extras" },
            ].map((tab, i) => {
              const active = i === activeTabIndex;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabIndex(i)}
                  className={
                    "shrink-0 border-b px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition sm:px-6 " +
                    (active
                      ? "border-[color:var(--surface-light-brown)] bg-[color:var(--surface-light-brown)]/90 text-[color:var(--ink)]"
                      : "border-transparent text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]")
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <Reveal key={showingExtras ? "extras" : activeTier?.id} delay={0.04}>
          <article
            className={
              "group relative mt-8 flex h-full flex-col overflow-hidden rounded-none " +
              "bg-[color:var(--brand-white)] shadow-[0_8px_40px_-16px_rgba(26,22,18,0.14)] " +
              "transition-all duration-300 " +
              "hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(26,22,18,0.22)]"
            }
          >
            {!showingExtras && activeTier?.id === "voice" ? (
              <div className="absolute right-5 top-5 z-[1]">
                <span className="inline-flex rounded-full bg-[color:var(--surface-light-brown)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink)] shadow-sm">
                  Popular
                </span>
              </div>
            ) : null}

            <div
              className="h-1.5 w-full bg-gradient-to-r from-[color:var(--surface-light-brown)] via-[color:var(--surface-light-brown)] to-[color:var(--surface-light-brown)]/35"
              aria-hidden
            />

            <div className="flex flex-1 flex-col px-7 pb-8 pt-8 sm:px-9 sm:pb-10 sm:pt-9">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[color:var(--hairline)] pb-7">
                <div className="min-w-0">
                  <span className="font-mono text-[11px] font-medium tabular-nums tracking-[0.12em] text-[color:var(--ink-muted)]">
                    {showingExtras ? "05" : String(activeTabIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-title mt-2 text-2xl font-bold tracking-tight text-[color:var(--ink)] sm:text-[1.65rem]">
                    {showingExtras ? "Extras" : withoutHyphens(activeTier?.name ?? "")}
                  </h3>
                  <p className="font-sans mt-2 max-w-md text-sm leading-snug text-[color:var(--ink-muted)] sm:text-[0.9375rem]">
                    {showingExtras
                      ? "Add ons you can include with any Lime Edit package."
                      : withoutHyphens(activeTier?.tagline ?? "")}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
                    {showingExtras ? "Pricing" : "From"}
                  </p>
                  <p className="font-title mt-1 text-2xl font-bold tabular-nums tracking-tight text-[color:var(--ink)] sm:text-[1.75rem]">
                    {showingExtras ? "Per add on" : withoutHyphens(activeTier?.priceLabel ?? "")}
                  </p>
                </div>
              </div>

              {showingExtras ? (
                <ul className="font-sans mt-7 flex-1 space-y-3.5 text-[0.9375rem] leading-relaxed text-[color:var(--ink)] sm:text-base">
                  {extrasItems.map((item) => (
                    <li key={item.label} className="flex items-start justify-between gap-5 border-b border-[color:var(--hairline)]/70 pb-3 last:border-b-0">
                      <span className="text-[color:var(--ink-muted)]">{withoutHyphens(item.label)}</span>
                      <span className="shrink-0 font-medium tabular-nums text-[color:var(--ink)]">
                        {withoutHyphens(item.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="font-sans mt-7 flex-1 space-y-3.5 text-[0.9375rem] leading-relaxed text-[color:var(--ink)] sm:text-base">
                  {activeTier?.bullets.map((b) => (
                    <li key={b} className="flex gap-3.5">
                      <IconCheck className="mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-[color:var(--ink-muted)]">{withoutHyphens(b)}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 rounded-xl bg-[color:var(--surface-subtle)] px-4 py-4">
                <p className="font-sans text-xs leading-relaxed text-[color:var(--ink-muted)] sm:text-[0.8125rem]">
                  <span className="font-semibold text-[color:var(--ink)]">
                    Note:
                  </span>{" "}
                  {withoutHyphens(showingExtras ? extrasDisclaimer : activeTier?.note ?? "")}
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-[color:var(--hairline)] pt-12 sm:flex-row sm:pt-14">
          <p className="font-sans max-w-md text-center text-sm leading-relaxed text-[color:var(--ink-muted)] sm:text-left">
            Not sure which tier fits? Tell us your timeline and platforms—we&apos;ll
            help you choose.
          </p>
          <Link
            href="#book-consultation"
            className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-[color:var(--surface-light-brown)] px-12 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink)] no-underline transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--surface-light-brown)]"
          >
            Discuss a bundle
          </Link>
        </div>
      </Reveal>
    </>
  );

  return (
    <section
      id="bundles"
      className={
        "scroll-mt-28 overflow-x-hidden border-t border-[color:var(--hairline)] " +
        "bg-gradient-to-b from-[color:var(--surface-subtle)] via-[color:var(--surface-subtle)] to-[color:var(--paper)] " +
        "py-20 sm:py-28 lg:py-32"
      }
      aria-labelledby="lime-edit-heading"
    >
      <Container className="lg:hidden">{bundlesContent}</Container>

      <div className="hidden w-full flex-col gap-14 lg:flex lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
        <div className="w-full shrink-0 lg:w-[min(48vw,600px)] lg:max-w-[620px]">
          <Reveal className="block w-full">
            <DigitalMarketingCollage
              foregroundSrc={bundlesSectionCollage.foreground}
              objectPosition={bundlesSectionCollage.objectPosition}
              panelClassName="bg-[color:var(--surface-light-brown)]"
            />
          </Reveal>
        </div>
        <div className="min-w-0 flex-1 lg:pl-4 lg:pr-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] xl:pl-8">
          {bundlesContent}
        </div>
      </div>
    </section>
  );
}
