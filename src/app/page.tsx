import { HomeApproach } from "@/components/home/HomeApproach";
import { HomeEthos } from "@/components/home/HomeEthos";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeTeam } from "@/components/home/HomeTeam";
import { HomeTemplates } from "@/components/home/HomeTemplates";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeWorkPreview } from "@/components/home/HomeWorkPreview";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata(pageSeo.home);

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
