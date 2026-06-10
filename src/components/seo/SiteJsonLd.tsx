import { site } from "@/content/site";
import { absoluteUrl, brandBannerImage, siteName, siteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export function SiteJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl("/lime-logo-2024-1-png.avif"),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [
      site.social.instagramUrl,
      site.social.linkedinUrl,
      site.social.tiktokUrl,
      site.social.xUrl,
      site.social.pinterestUrl,
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: site.tagline,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-NG",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    url: siteUrl,
    image: absoluteUrl(brandBannerImage.path),
    description:
      "Digital marketing agency in Lagos helping premium brands grow through strategy, content, and performance-driven marketing.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    areaServed: ["Lagos", "Nigeria", "Africa"],
    email: site.email,
    sameAs: [
      site.social.instagramUrl,
      site.social.linkedinUrl,
      site.social.tiktokUrl,
      site.social.xUrl,
      site.social.pinterestUrl,
    ],
  };

  return <JsonLd data={[organization, website, localBusiness]} />;
}
