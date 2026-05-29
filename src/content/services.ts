/** Site copy for the services page: single source for bundles and lists. */

/** Small caps labels above section titles, scoped to each block’s topic. */
export const servicesEyebrows = {
  hero: "What we offer",
  digitalMarketing: "Channels & execution",
  brandingAndStrategy: "Identity & direction",
  consulting: "Guided strategy",
  resources: "Guides & templates",
  bundles: "Content shoot packages",
  rateCard: "Monthly packages",
} as const;

/** `object-cover` anchor — `bottom` keeps the lower portion of tall photos in frame. */
export type CollageObjectPosition = "center" | "bottom";

export type SectionCollage = {
  foreground: string;
  objectPosition?: CollageObjectPosition;
};

/** Layered collage (left column): ink panel + framed photo. Change `foreground` to swap the image. */
export const digitalSectionCollage: SectionCollage = {
  foreground: "/Pictures/1767982390166.webp",
};

export const brandingSectionCollage: SectionCollage = {
  foreground: "/Pictures/branding.webp",
  objectPosition: "bottom",
};

export const consultingSectionCollage: SectionCollage = {
  foreground: "/Pictures/1767984001839.webp",
  objectPosition: "bottom",
};

export const resourcesSectionCollage: SectionCollage = {
  foreground: "/Pictures/1767983863080.webp",
  objectPosition: "bottom",
};

export const bundlesSectionCollage: SectionCollage = {
  foreground: "/Pictures/1767983464841.webp",
  objectPosition: "bottom",
};

export const rateCardSectionCollage: SectionCollage = {
  foreground: "/Pictures/1767982239718.webp",
  objectPosition: "bottom",
};

export function collageObjectPositionClass(
  position: CollageObjectPosition = "center",
): string {
  return position === "bottom" ? "object-bottom" : "object-center";
}

export const digitalMarketingIntro =
  "We provide end to end digital marketing support across social, content, and email, with execution that stays on brand and on brief.";

export const digitalMarketingItems = [
  "Social Media Management",
  "Content Creation",
  "Email Marketing",
] as const;

export const brandingAndStrategyIntro =
  "We help premium brands define who they are, how they show up, and where they are going, with clear positioning, visual identity, and strategic direction that guides every touchpoint.";

export const brandingAndStrategyBullets = [
  "Brand identity and visual systems",
  "Graphic Design",
  "Positioning, messaging, and tone of voice",
] as const;

export const brandingAndStrategyCta = {
  prompt:
    "Ready to sharpen your brand story and build a strategy that scales with you?",
  label: "Book a consultation",
} as const;

export const consultingIntro =
  "Personalized consultations focused on helping you understand your brand, refine your strategy, and move forward with clarity.";

export const consultingBullets = [
  "Tailored strategies to meet your business goals",
  "One on one consultations to boost your marketing experience",
] as const;

export const resourcesIntro =
  "Access our curated collection of templates, guides, and resources designed to streamline your marketing, improve your execution, and help you achieve more with less effort.";

export const resourceLinks = [
  { label: "Templates", href: "/templates" },
  { label: "Ebooks", href: "/resources" },
  { label: "Courses", href: "/resources" },
  { label: "Webinars", href: "/resources" },
] as const;

export const bundlesIntro =
  "A one off content bundle for brands that want strong, reusable content without signing up for full social media management.";

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

export type RateCardFeature = {
  label: string;
  description: string;
};

export type RateCardTier = {
  id: string;
  name: string;
  priceLabel: string;
  features: readonly RateCardFeature[];
};

export const rateCardIntro =
  "Let's help you connect with your clients. Our packages include full social, content, and design support handled by the Lime team.";

export const rateCardDisclaimer =
  "Additional services such as models, influencer marketing, paid advertising, special shoot locations, props and third party production costs attract separate charges.";

export const rateCardTiers: RateCardTier[] = [
  {
    id: "basic",
    name: "Basic",
    priceLabel: "₦650,000",
    features: [
      {
        label: "Social Media Management",
        description:
          "3 posts weekly across Instagram. Story uploads and community management.",
      },
      {
        label: "Content Creation",
        description:
          "Creative direction, content planning, shoot coordination and content production handled by the Lime team.",
      },
      {
        label: "Graphic Design",
        description:
          "Campaign flyers, promotional graphics and social media design assets.",
      },
    ],
  },
  {
    id: "silver",
    name: "Silver",
    priceLabel: "₦750,000",
    features: [
      {
        label: "Social Media Management",
        description:
          "4 posts weekly across Instagram. Story uploads and community management.",
      },
      {
        label: "Content Creation",
        description:
          "Creative direction, content planning, shoot coordination and content production handled by the Lime team.",
      },
      {
        label: "Graphic Design",
        description:
          "Campaign flyers, promotional graphics and social media design assets.",
      },
      {
        label: "Page Revamp and Setup",
        description: "Profile optimization and brand page refinement.",
      },
    ],
  },
  {
    id: "gold",
    name: "Gold",
    priceLabel: "₦950,000",
    features: [
      {
        label: "Social Media Management",
        description:
          "3 posts weekly across Instagram and TikTok. Story uploads, engagement and community management.",
      },
      {
        label: "Content Creation",
        description:
          "Creative direction, content planning, shoot coordination and content production handled by the Lime team.",
      },
      {
        label: "Graphic Design",
        description:
          "Campaign flyers, promotional graphics and social media design assets.",
      },
      {
        label: "Page Revamp and Setup",
        description: "Profile optimization and brand page refinement.",
      },
      {
        label: "Social Media Monitoring",
        description:
          "Audience insights, performance tracking and brand listening.",
      },
    ],
  },
  {
    id: "lime",
    name: "Lime",
    priceLabel: "₦1,150,000",
    features: [
      {
        label: "Social Media Management",
        description:
          "4 posts weekly across Instagram and TikTok. Story uploads, engagement and community management.",
      },
      {
        label: "Content Creation",
        description:
          "Creative direction, content planning, shoot coordination and premium content production handled by the Lime team.",
      },
      {
        label: "Graphic Design",
        description:
          "Campaign flyers, promotional graphics and social media design assets.",
      },
      {
        label: "Page Revamp and Setup",
        description: "Profile optimization and brand page refinement.",
      },
      {
        label: "Social Media Monitoring and Reporting",
        description:
          "Audience insights, monthly reporting and performance tracking.",
      },
      {
        label: "Strategic Brand Support",
        description:
          "Campaign planning, content strategy and brand growth support.",
      },
    ],
  },
];
