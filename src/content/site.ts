/** Navbar logo (`public/` path). Intrinsics used by `next/image`. */
export const brandLogo = {
  src: "/lime-logo-2024-1-png.avif",
  width: 1108,
  height: 340,
} as const;

/** Light mark for dark or yellow footer bands (`public/` path). */
export const brandLogoFooter = {
  src: "/Lime-WHITE-Logo-2024-png.avif",
  width: 1108,
  height: 340,
} as const;

export const site = {
  name: "LimeAfrica",
  /** Small caps line under the wordmark in the header (matches boutique-studio pattern). */
  headerTagline: "Pan-African studio",
  tagline: "Strategic media for brands built to lead across the continent and beyond.",
  location: "Pan-African studio",
  worldwide: "Serving clients worldwide",
  established: "2020",
  email: "hello@limeafrica.com",
  social: {
    instagram: "@limeafrica",
    instagramUrl: "https://www.instagram.com/",
  },
};

export type NavItem = { label: string; href: string };

/** Inline links in the header (HOME … ABOUT); CTA is separate in `headerCta`. */
export const headerNavLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Template Shop", href: "/templates" },
  { label: "About", href: "/about" },
];

export const headerCta: NavItem = {
  label: "Work With Us",
  href: "/work-with-us",
};

/** Full primary routes (footer + mobile overlay). */
export const mainNav: NavItem[] = [...headerNavLinks, headerCta];

export const footerExplore: NavItem[] = [
  { label: "Our Work", href: "/work" },
  { label: "Our Services", href: "/services" },
  { label: "template shop", href: "/templates" },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Multiple portraits per person — home section crossfades between these. */
  slides: readonly string[];
};

export const team: TeamMember[] = [
  {
    name: "Nicole",
    role: "CEO / Social Media Manager",
    bio: "Builds narrative systems that convert—specializing in platform strategy, editorial calendars, and growth experiments for founder-led brands.",
    slides: [
      "https://images.unsplash.com/photo-1573497019236-17bfcbacbe58?auto=format&w=1600&q=90",
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&w=1600&q=90",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&w=1600&q=90",
    ],
  },
  {
    name: "Casey",
    role: "Brand Design Specialist",
    bio: "Translates positioning into visual language: marks, typography systems, and guidelines that stay coherent from pitch deck to packaging.",
    slides: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&w=1600&q=90",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=1600&q=90",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&w=1600&q=90",
    ],
  },
  {
    name: "Emily",
    role: "Website Design Lead",
    bio: "Ships fast, refined web experiences—information architecture, UI craft, and launch support so your digital home feels effortless to run.",
    slides: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&w=1600&q=90",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&w=1600&q=90",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&w=1600&q=90",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "LimeAfrica tightened our story and our funnel in the same quarter. Engagement is up and inquiries are finally the right fit.",
    attribution: "Leila H.",
    company: "Gathered Nutrition",
  },
  {
    quote:
      "The site finally matches the calm professionalism of our studio. Bookings are smoother and people comment on how ‘complete’ the brand feels.",
    attribution: "Marcus T.",
    company: "The Yoga Space",
  },
  {
    quote:
      "Organic Pinterest became a real channel—not vanity metrics. Traffic to recipes and email sign-ups finally moved in parallel.",
    attribution: "Renée M.",
    company: "YMI Jeans contributor network",
  },
];
