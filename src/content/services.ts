/** Site copy for the services page — single source for bundles and lists. */

/** Small caps labels above section titles — scoped to each block’s topic. */
export const servicesEyebrows = {
  hero: "What we offer",
  digitalMarketing: "Channels & execution",
  consulting: "Guided strategy",
  resources: "Guides & templates",
  bundles: "Content shoot packages",
  extras: "À la carte",
} as const;

/** Layered collage (left column): ink panel + framed photo — change `foreground` to swap the image. */
export const digitalSectionCollage = {
  foreground: "/slider2.avif",
} as const;

export const consultingSectionCollage = {
  foreground: "/slider3B.webp",
} as const;

export const resourcesSectionCollage = {
  foreground: "/Slider1.avif",
} as const;

export const digitalMarketingIntro =
  "We provide end-to-end digital marketing support, from strategy to execution and everything in between.";

export const digitalMarketingItems = [
  "Social Media Management",
  "Content Creation",
  "Graphic Design",
  "Branding and Strategy",
  "Email Marketing",
  "Social Media Management Packages",
] as const;

export const consultingIntro =
  "Personalized consultations focused on helping you understand your brand, refine your strategy, and move forward with clarity.";

export const consultingBullets = [
  "Tailored strategies to meet your business goals",
  "One-on-one consultations to boost your marketing experience",
] as const;

export const resourcesIntro =
  "Access our curated collection of templates, guides, and resources designed to streamline your marketing, improve your execution, and help you achieve more with less effort.";

export const resourceLinks = [
  { label: "Ebooks", href: "/resources" },
  { label: "Templates", href: "/templates" },
  { label: "Courses", href: "/resources" },
  { label: "Webinars", href: "/resources" },
] as const;

export const bundlesIntro =
  "A one-off content bundle for brands that want strong, reusable content without signing up for full social media management.";

export type BundleTier = {
  id: string;
  name: string;
  /** Short line under the tier name (package positioning). */
  tagline: string;
  priceLabel: string;
  bullets: readonly string[];
  note: string;
};

export const bundleTiers: BundleTier[] = [
  {
    id: "snap",
    name: "Snap",
    tagline: "Content shoot only",
    priceLabel: "₦250,000",
    bullets: [
      "One content shoot session",
      "Creative direction on set",
      "Raw videos (and photos as add on) delivered in an online drive",
    ],
    note: "We do not post and we do not log into your social media accounts",
  },
  {
    id: "polish",
    name: "Polish",
    tagline: "Content shoot plus edited content",
    priceLabel: "₦450,000",
    bullets: [
      "One content shoot session",
      "Creative direction",
      "6 Edited videos (and photos as add on.)",
      "Raw files plus edited content delivered in a drive",
    ],
    note: "We do not post and we do not log into your social media accounts",
  },
  {
    id: "voice",
    name: "Voice",
    tagline: "Content shoot plus edited content and captions",
    priceLabel: "₦650,000",
    bullets: [
      "One content shoot session",
      "8 Edited videos (and photos as add ons)",
      "Caption copies provided",
      "All content delivered in a drive",
    ],
    note: "We do not post and we do not log into your social media accounts",
  },
  {
    id: "playbook",
    name: "Play book",
    tagline: "Content shoot plus strategy and calendar",
    priceLabel: "₦900,000",
    bullets: [
      "One content shoot session",
      "10 Edited videos (and photos as add ons)",
      "Caption copies included",
      "Content calendar provided",
      "Footage if used well and repurposed correctly can be used for up to 3 months",
      "All content delivered in a drive",
    ],
    note: "We do not post and we do not log into your social media accounts",
  },
];

export const extrasItems = [
  { label: "Additional video edit", price: "₦25,000 per video" },
  { label: "Additional photo retouching", price: "₦10,000 per image" },
  {
    label: "Vertical and horizontal resizing for different platforms",
    price: "₦15,000 per asset",
  },
  { label: "Voice over editing", price: "₦20,000 per video" },
  {
    label: "Subtitles and captions burned into videos",
    price: "₦15,000 per video",
  },
  { label: "Trend based edit style", price: "₦25,000 per video" },
  { label: "EXPRESS delivery", price: "₦100,000 extra" },
  {
    label: "Professional Product photography",
    price: "₦200,000",
  },
] as const;

export const extrasDisclaimer =
  "Logistics, venue booking, products, props, models, makeup artist, wardrobe and any other production costs are not included and will be billed separately.";
