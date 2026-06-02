"use client";

import { useCallback, useState } from "react";
import { TemplateFeaturesCarousel } from "@/components/templates/TemplateFeaturesCarousel";
import { TemplatePreviewCarousel } from "@/components/templates/TemplatePreviewCarousel";
import { Reveal } from "@/components/motion/Reveal";
import {
  templateFeatures,
  templatePreviewSlides,
  templatesSectionCopy,
} from "@/content/templates";
import { withoutHyphens } from "@/lib/displayCopy";

export function TemplatesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
    setAutoPlay(false);
  }, []);

  const handlePreviewIndexChange = useCallback((index: number) => {
    setActiveIndex(index);
    setAutoPlay(false);
  }, []);

  const handleAutoPlayAdvance = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20">
      <div className="lg:col-span-5">
        <TemplatePreviewCarousel
          slides={templatePreviewSlides}
          activeIndex={activeIndex}
          onActiveIndexChange={handlePreviewIndexChange}
          onAutoPlayAdvance={handleAutoPlayAdvance}
          autoPlay={autoPlay}
        />
      </div>

      <div className="min-w-0 lg:col-span-7">
        <Reveal>
          <p className="text-left font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-muted)]">
            {withoutHyphens(templatesSectionCopy.eyebrow)}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 gap-y-3">
            <h2 className="font-title max-w-xl text-left text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--ink)]">
              {withoutHyphens(templatesSectionCopy.title)}
            </h2>
            <a
              href={templatesSectionCopy.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[color:var(--ink)] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-white)] transition hover:opacity-92 sm:ml-auto"
            >
              {withoutHyphens(templatesSectionCopy.ctaLabel)}
            </a>
          </div>

          <div
            className="mt-10 h-px w-full bg-[color:var(--hairline)]"
            aria-hidden
          />

          <TemplateFeaturesCarousel
            items={templateFeatures}
            activeIndex={activeIndex}
            onSelect={handleSelect}
          />

        </Reveal>
      </div>
    </div>
  );
}
