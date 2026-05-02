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
  established: "2020",
  email: "hello@limeafrica.com",
  /** Footer Connect — one line per row (edit here or add lines). */
  officeAddressLines: ["Lagos, Nigeria"] as const,
  /** Handle @limeafrica across networks (URLs use the same slug where supported). */
  social: {
    instagram: "@limeafrica",
    instagramUrl: "https://www.instagram.com/limeafrica/",
    linkedinUrl: "https://www.linkedin.com/company/limeafrica",
    facebookUrl: "https://www.facebook.com/limeafrica",
    tiktokUrl: "https://www.tiktok.com/@limeafrica",
  },
};

/** Staggered menu + shared outbound social rows — same handle, platform-specific URLs */
export const menuSocialLinks = [
  { label: "Instagram", link: site.social.instagramUrl },
  { label: "LinkedIn", link: site.social.linkedinUrl },
  { label: "Facebook", link: site.social.facebookUrl },
  { label: "TikTok", link: site.social.tiktokUrl },
] as const;

export type NavItem = { label: string; href: string };

/** Inline links in the header; `headerCta` is the separate Work With Us control. */
export const headerNavLinks: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Community", href: "/community" },
  { label: "Blog", href: "/blog" },
];

export const headerCta: NavItem = {
  label: "Work With Us",
  href: "/work-with-us",
};

/** Full primary routes (footer + mobile overlay). */
export const mainNav: NavItem[] = [...headerNavLinks, headerCta];

export const footerExplore: NavItem[] = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  portrait: string;
};

export const team: TeamMember[] = [
  {
    name: "Lisa Numa",
    role: "Founder/ Creative Director",
    bio: "Builds narrative systems that convert—specializing in platform strategy, editorial calendars, and growth experiments for founder-led brands.",
    portrait:
      "https://images.unsplash.com/photo-1573497019236-17bfcbacbe58?auto=format&w=1600&q=90",
  },
  {
    name: "Lisa Udumorugbo",
    role: "Lead Community Manager",
    bio: "Translates positioning into visual language: marks, typography systems, and guidelines that stay coherent from pitch deck to packaging.",
    portrait:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&w=1600&q=90",
  },
  {
    name: "Chibuzo Etozuo",
    role: "Email Marketing Specialist",
    bio: "Ships fast, refined web experiences—information architecture, UI craft, and launch support so your digital home feels effortless to run.",
    portrait:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&w=1600&q=90",
  },
  {
    name: "Nkechinyere Juliet Ikeyi",
    role: "Lead Creative Designer",
    bio: "Turns performance data into clear next steps—pipelines, attribution, and reporting that keep spend accountable and creative decisions grounded in outcomes.",
    portrait:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=1600&q=90",
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
