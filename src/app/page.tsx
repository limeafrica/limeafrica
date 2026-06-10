import type { Metadata } from "next";
import { HomeApproach } from "@/components/home/HomeApproach";
import { HomeEthos } from "@/components/home/HomeEthos";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeTeam } from "@/components/home/HomeTeam";
import { HomeTemplates } from "@/components/home/HomeTemplates";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeWorkPreview } from "@/components/home/HomeWorkPreview";

const homeDescription =
  "LimeAfrica is a digital marketing agency in Lagos helping premium brands grow through clear strategy, compelling content, and performance-driven marketing.";

export const metadata: Metadata = {
  title: {
    absolute: "LimeAfrica — Digital Marketing Agency",
  },
  description: homeDescription,
  keywords: [
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
  ],
  openGraph: {
    title: "LimeAfrica — Digital Marketing Agency",
    description: homeDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LimeAfrica — Digital Marketing Agency",
    description: homeDescription,
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <HomeHero />
      <HomeEthos />
      <HomeApproach />
      <HomeServices />
      <HomeTemplates />
      <HomeWorkPreview />
      <HomeTeam />
      <HomeFinalCta />
      <HomeTestimonials />
    </main>
  );
}
