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
  /** Footer Connect - one line per row (edit here or add lines). */
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

/** Staggered menu + shared outbound social rows - same handle, platform-specific URLs */
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
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
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
    bio: "Steers the studio’s creative vision end to end: brand narrative, campaign coherence, and the standards that keep client work sharp, consistent, and aligned with growth goals.",
    portrait: "/Lisa Numa.webp",
  },
  {
    name: "Lisa Udumorugbo",
    role: "Lead Community Manager",
    bio: "Shapes how audiences experience LimeAfrica day to day through programs, conversations, and partnerships that deepen trust and keep the community active, informed, and connected.",
    portrait: "/Lisa Numa.webp",
  },
  {
    name: "Chibuzo Etozuo",
    role: "Email Marketing Specialist",
    bio: "Builds email programs that earn opens and clicks: segmentation, storytelling in the inbox, automation where it helps, and reporting so every send ties back to engagement and revenue.",
    portrait: "/Chibuzo Etozuo.webp",
  },
  {
    name: "Nkechinyere Juliet Ikeyi",
    role: "Lead Creative Designer",
    bio: "Owns the visual layer of campaigns and identities: layout, typography, color, and craft details that make strategy easy to see and remember across every asset.",
    portrait: "/Nkechinyere Juliet Ikeyi.webp",
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
      "Organic Pinterest became a real channel, not vanity metrics. Traffic to recipes and email sign-ups finally moved in parallel.",
    attribution: "Renée M.",
    company: "YMI Jeans contributor network",
  },
];
