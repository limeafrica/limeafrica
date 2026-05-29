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
  headerTagline: "Pan African studio",
  tagline: "Strategic media for brands built to lead across the continent and beyond.",
  location: "Pan African studio",
  established: "2020",
  email: "hello@limeafrica.com",
  /** Footer Connect - one line per row (edit here or add lines). */
  officeAddressLines: ["Lagos, Nigeria"] as const,
  /** Public handles (URLs may use different slug per platform). */
  social: {
    instagram: "@lime.africa",
    instagramUrl: "https://www.instagram.com/lime.africa",
    linkedinUrl: "https://www.linkedin.com/company/103660466/",
    tiktokUrl:
      "https://www.tiktok.com/@lime.africa?_r=1&_t=ZS-93mLVWu6YKb",
    xUrl: "https://x.com/lime_africa",
    pinterestUrl: "https://www.pinterest.com/limeafrica",
  },
};

/** Staggered menu + shared outbound social rows (order matches footer icons) */
export const menuSocialLinks = [
  { label: "Instagram", link: site.social.instagramUrl },
  { label: "LinkedIn", link: site.social.linkedinUrl },
  { label: "TikTok", link: site.social.tiktokUrl },
  { label: "X", link: site.social.xUrl },
  { label: "Pinterest", link: site.social.pinterestUrl },
] as const;

export type NavItem = { label: string; href: string };

/** Social Media Redefined on Substack (replaces on-site blog). */
export const blogUrl = "https://substack.com/@socialmediaredefined";

export function isExternalNavHref(href: string) {
  return /^https?:\/\//i.test(href);
}

/** Inline links in the header; `headerCta` is the separate Work With Us control. */
export const headerNavLinks: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Community", href: "/community" },
  { label: "Blog", href: blogUrl },
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
    portrait: "/Lisa Udumorugbo.webp",
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

export type Testimonial = {
  quote: string;
  attribution: string;
  company?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lime's a fast growing and evolving workplace with a comfortable environment and a strong team spirit. The perfect place for those who want to grow their social media career. I highly recommend as both a workplace and a service provider.",
    attribution: "Lilian Leonard",
  },
  {
    quote:
      "Lime delivers excellent service with great attention to detail. The process was smooth, communication was clear, and the results met expectations. I'd definitely recommend them.",
    attribution: "Pearl Atigolo",
  },
  {
    quote:
      "I will say Limes 🍋 community is amazing 🤩. It's a creative place and definitely good for connecting with other creatives plus getting jobs. But one thing I would love to see is more organization when it comes to members dropping their work. And more checking in with groups before and after group projects to get details on how each member communicated and performed.",
    attribution: "Yusuf Oyebolarinwa",
  },
  {
    quote:
      "Lime is a reliable and well-structured agency that delivers quality work. Their approach to content, digital strategy and social media management is thoughtful and results-focused. Communication is clear, timelines are respected, and deliverables are handled professionally. They pay attention to detail and take time to understand brand goals before executing. Overall, Lime is a solid choice for businesses looking for consistent and strategic digital support.",
    attribution: "Lisa Udumorugbo",
  },
  {
    quote:
      "I always have an excellent time working with Lime Africa. I'll be back again.",
    attribution: "Akinyan Fuad",
  },
  {
    quote:
      "I am continually impressed by the transformative impact of Lime Africa, which offers unparalleled resources and support for businesses looking to upscale. As an Automation Specialist, I can attest to the exceptional guidance and expertise they've provided, empowering me to take my business to new heights. Lime Africa's commitment to excellence in service delivery and support is truly admirable. Their dedication to driving success is unwavering, and I wholeheartedly endorse their services. If you're looking for a partner to elevate your business, look no further than Lime Africa. Their support is unmatched. Anything above a 5-star is what you deserve, thank you.",
    attribution: "Confidence Chibueze",
    company: "Automation Specialist",
  },
  {
    quote:
      "I have worked with Lime for over 4 years now and it has been a smooth ride. Great team led by a true creative Lisa. And together we've built my brand. Top Social media agency!",
    attribution: "Nick Dunu",
  },
];
