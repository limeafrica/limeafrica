/** Templates section — feature list and preview slideshow (home + resources). */

export type TemplateFeature = {
  title: string;
  body: string;
  /** Preview graphic shown in the left carousel when this template is selected. */
  previewSrc: string;
};

export const templateFeatures: readonly TemplateFeature[] = [
  {
    title: "Profile & Feed Mockup",
    previewSrc: "/1.png",
    body:
      "Visual layout preview showing profile structure, grid balance, and content hierarchy before publishing.",
  },
  {
    title: "Content Calendars",
    previewSrc: "/2.png",
    body:
      "Planned monthly content schedule aligned with campaign goals, key dates, content pillars, and more.",
  },
  {
    title: "Carousel",
    previewSrc: "/3.png",
    body:
      "Pre designed templates created for consistent visual identity across feed.",
  },
  {
    title: "Company Pack",
    previewSrc: "/4.png",
    body:
      "A structured document outlining brand positioning, objectives, target audience, and more.",
  },
  {
    title: "Highlight covers",
    previewSrc: "/5.png",
    body:
      "Visual layout preview showing profile structure, grid balance, and content hierarchy before publishing.",
  },
  {
    title: "Analytics template",
    previewSrc: "/6.png",
    body:
      "Standardized reporting framework to track performance insights, performance analysis, and growth metrics across platforms.",
  },
  {
    title: "Add on story",
    previewSrc: "/7.png",
    body:
      "Pre designed templates created for consistent visual identity across stories.",
  },
];

/** Promo graphic (folder overview) — optional end cap for auto-preview only. */
export const templatePromoPreviewSrc = "/8.png";

export const templatePreviewSlides = templateFeatures.map(
  (feature) => feature.previewSrc,
);

/** How many checklist items are visible per list “slide”. */
export const templateFeaturesPerPage = 4;

export const templatePreviewIntervalMs = 4500;

/** Paystack checkout for Lime Canva templates */
export const TEMPLATE_PURCHASE_URL =
  "https://paystack.shop/pay/limecanvatemplate" as const;

export const templatesSectionCopy = {
  eyebrow: "Customize it yourself",
  title: "Templates",
  ctaLabel: "PURCHASE NOW",
  ctaHref: TEMPLATE_PURCHASE_URL,
} as const;
