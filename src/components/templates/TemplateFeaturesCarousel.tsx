"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import {
  getCarouselSlideTransition,
  getCarouselSlideVariants,
} from "@/components/motion/carouselSlide";
import { TemplateCheckIcon } from "@/components/templates/TemplateCheckIcon";
import {
  templateFeaturesPerPage,
  type TemplateFeature,
} from "@/content/templates";
import { withoutHyphens } from "@/lib/displayCopy";

function chunkFeatures(
  items: readonly TemplateFeature[],
  size: number,
): TemplateFeature[][] {
  const pages: TemplateFeature[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

function CarouselArrow({
  direction,
  onClick,
  disabled,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--hairline)] text-[color:var(--ink)] transition hover:border-[color:var(--ink)]/35 hover:bg-[color:var(--surface-subtle)] disabled:pointer-events-none disabled:opacity-35"
    >
      <span className="sr-only">{label}</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5"
        aria-hidden
      >
        {direction === "prev" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

function FeatureItem({
  item,
  index,
  isActive,
  onSelect,
}: {
  item: TemplateFeature;
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
}) {
  return (
    <li className="flex gap-4">
      <TemplateCheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
      <div>
        <button
          type="button"
          onClick={() => onSelect(index)}
          aria-pressed={isActive}
          className={
            "text-left font-title text-lg font-bold leading-snug transition-colors " +
            (isActive
              ? "text-[color:var(--ink)] underline decoration-[color:var(--brand-yellow)] decoration-2 underline-offset-[6px]"
              : "text-[color:var(--ink)] hover:text-[color:var(--ink)]/80")
          }
        >
          {withoutHyphens(item.title)}
        </button>
        <p className="font-sans mt-2 text-sm leading-relaxed text-[color:var(--ink-muted)]">
          {withoutHyphens(item.body)}
        </p>
      </div>
    </li>
  );
}

type TemplateFeaturesCarouselProps = {
  items: readonly TemplateFeature[];
  activeIndex: number;
  onSelect: (index: number) => void;
  itemsPerPage?: number;
};

export function TemplateFeaturesCarousel({
  items,
  activeIndex,
  onSelect,
  itemsPerPage = templateFeaturesPerPage,
}: TemplateFeaturesCarouselProps) {
  const pages = useMemo(
    () => chunkFeatures(items, itemsPerPage),
    [items, itemsPerPage],
  );
  const [[page, direction], setPage] = useState<[number, number]>([0, 1]);
  const reduceMotion = useReducedMotion();

  const slideVariants = useMemo(
    () => getCarouselSlideVariants(!!reduceMotion),
    [reduceMotion],
  );

  const slideTransition = useMemo(
    () => getCarouselSlideTransition(!!reduceMotion),
    [reduceMotion],
  );

  const go = useCallback(
    (dir: -1 | 1) => {
      setPage(([p]) => {
        const next = Math.max(0, Math.min(pages.length - 1, p + dir));
        if (next === p) return [p, dir];
        return [next, dir];
      });
    },
    [pages.length],
  );

  const canGoPrev = page > 0;
  const canGoNext = page < pages.length - 1;
  const current = pages[page] ?? [];
  const pageStartIndex = page * itemsPerPage;
  const leftColumn = current.slice(0, 2);
  const rightColumn = current.slice(2, itemsPerPage);

  return (
    <div
      className="mt-10"
      aria-roledescription="carousel"
      aria-label="Template types"
    >
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
          >
            <div
              className="grid gap-10 sm:grid-cols-2 sm:gap-x-10 lg:gap-x-12 xl:gap-x-16"
              aria-live="polite"
            >
              <ul className="flex flex-col gap-10">
                {leftColumn.map((item, i) => (
                  <FeatureItem
                    key={item.title}
                    item={item}
                    index={pageStartIndex + i}
                    isActive={activeIndex === pageStartIndex + i}
                    onSelect={onSelect}
                  />
                ))}
              </ul>
              <ul className="flex flex-col gap-10">
                {rightColumn.map((item, i) => (
                  <FeatureItem
                    key={item.title}
                    item={item}
                    index={pageStartIndex + 2 + i}
                    isActive={activeIndex === pageStartIndex + 2 + i}
                    onSelect={onSelect}
                  />
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {pages.length > 1 ? (
        <div className="mt-8 flex items-center justify-between gap-4">
          <CarouselArrow
            direction="prev"
            onClick={() => go(-1)}
            disabled={!canGoPrev}
            label="Previous templates"
          />
          <div className="flex items-center gap-2" aria-hidden>
            {pages.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-7 bg-[color:var(--brand-yellow)]"
                    : "w-1.5 bg-[color:var(--ink)]/25"
                }`}
              />
            ))}
          </div>
          <CarouselArrow
            direction="next"
            onClick={() => go(1)}
            disabled={!canGoNext}
            label="Next templates"
          />
        </div>
      ) : null}
    </div>
  );
}
