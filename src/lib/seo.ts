import type { Metadata } from "next";
import type { WorkItem } from "@/content/work";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://limeafrica.com";

export const siteName = "LimeAfrica";

/** Default share image for pages without a hero visual. */
export const brandBannerImage = {
  path: "/Lime%20Logo%20Banner.webp",
  width: 1200,
  height: 630,
  alt: `${siteName} — Digital Marketing Agency`,
} as const;

export const defaultOgImage = brandBannerImage;

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteUrl).toString();
}

type PageMetaInput = {
  title: string | { absolute: string };
  description: string;
  path: string;
  keywords?: readonly string[];
  image?: string;
  noIndex?: boolean;
};

function resolveTitle(title: PageMetaInput["title"]): string {
  return typeof title === "object" ? title.absolute : `${title} — ${siteName}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  image,
  noIndex,
}: PageMetaInput): Metadata {
  const canonical = absoluteUrl(path);
  const ogImagePath = image ?? defaultOgImage.path;
  const fullTitle = resolveTitle(title);

  return {
    title,
    description,
    ...(keywords?.length ? { keywords: [...keywords] } : {}),
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName,
      locale: "en_NG",
      type: "website",
      images: [
        {
          url: ogImagePath,
          width: defaultOgImage.width,
          height: defaultOgImage.height,
          alt: defaultOgImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImagePath],
    },
  };
}

export const homeKeywords = [
  "digital marketing company in Lagos",
  "marketing company in Lagos",
  "digital marketing agency Lagos",
  "digital marketing agency Nigeria",
  "digital marketing",
  "social media marketing Lagos",
  "content marketing agency Lagos",
  "performance marketing Lagos",
  "brand strategy Nigeria",
  "creative agency Lagos",
  "branding agency Lagos",
  "marketing agency Nigeria",
  "SEO agency Lagos",
  "paid media agency Lagos",
] as const;

export const pageSeo = {
  home: {
    title: { absolute: `${siteName} — Digital Marketing Agency` } as const,
    description:
      "LimeAfrica is a digital marketing agency in Lagos helping premium brands grow through clear strategy, compelling content, and performance-driven marketing.",
    path: "/",
    keywords: [...homeKeywords],
    image: brandBannerImage.path,
  },
  about: {
    title: "About",
    description:
      "Learn about LimeAfrica — a Lagos digital marketing agency helping premium brands grow with clear strategy, content, and performance-driven campaigns across Africa.",
    path: "/about",
    image: "/Pictures/1767981936651.webp",
  },
  services: {
    title: "Services",
    description:
      "Digital marketing, branding and strategy, consulting, resources, and content bundles from LimeAfrica. Strategy through execution for premium brands in Lagos and beyond.",
    path: "/services",
    image: "/Untitled design (4).webp",
  },
  resources: {
    title: "Resources",
    description:
      "Tools, templates, and guides from LimeAfrica to streamline your marketing strategy, content production, and campaign execution.",
    path: "/resources",
    image: "/slider 2 design.webp",
  },
  portfolio: {
    title: "Portfolio",
    description:
      "Case studies from LimeAfrica: digital marketing campaigns, brand rollouts, and content projects for premium brands across Lagos and Africa.",
    path: "/portfolio",
    image: "/Pictures/1767981027696.webp",
  },
  community: {
    title: "Community",
    description:
      "Join the Lime Townhall — LimeAfrica's community for digital marketing creatives with webinars, mentorship, and peer connection.",
    path: "/community",
    image: "/Pictures/1767983104924.webp",
  },
  workWithUs: {
    title: "Work With Us",
    description:
      "Start a project with LimeAfrica. Share your brand, goals, and timeline — we reply with clear next steps for strategy, content, and performance marketing.",
    path: "/work-with-us",
  },
  faq: {
    title: "FAQ",
    description:
      "Answers about working with LimeAfrica: services, content bundles, resources, timelines, and how we partner with premium brands.",
    path: "/faq",
  },
  privacy: {
    title: "Privacy policy",
    description:
      "How LimeAfrica collects, uses, and protects personal information when you visit our website, use our forms, or engage our services.",
    path: "/privacy",
  },
  terms: {
    title: "Terms and conditions",
    description:
      "Terms and conditions for using the LimeAfrica website and engaging our digital marketing, branding, and consulting services.",
    path: "/terms",
  },
  cookies: {
    title: "Cookies policy",
    description:
      "How LimeAfrica uses cookies and similar technologies on limeafrica.com, and how you can manage your preferences.",
    path: "/cookies",
  },
} as const;

/** Static routes included in the sitemap (excluding external redirects). */
export const staticRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/resources", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/portfolio", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/community", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/work-with-us", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly" as const, priority: 0.3 },
] as const;

export function createPortfolioMetadata(project: WorkItem): Metadata {
  return createPageMetadata({
    title: project.title,
    description: project.excerpt,
    path: `/portfolio/${project.slug}`,
    image: project.imageSrc,
  });
}
