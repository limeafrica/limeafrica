/** Navbar / footer logo (`public/` path). Intrinsics used by `next/image`. */
export const brandLogo = {
  src: "/lime-logo-2024-1-png.avif",
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

export const team = [
  {
    name: "Amara Okonkwo",
    role: "CEO · Social & Content Lead",
    bio: "Builds narrative systems that convert—specializing in platform strategy, editorial calendars, and growth experiments for founder-led brands.",
  },
  {
    name: "Kwame Mensah",
    role: "Brand Design Director",
    bio: "Translates positioning into visual language: marks, typography systems, and guidelines that stay coherent from pitch deck to packaging.",
  },
  {
    name: "Zara Benali",
    role: "Website Design Lead",
    bio: "Ships fast, refined web experiences—information architecture, UI craft, and launch support so your digital home feels effortless to run.",
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
