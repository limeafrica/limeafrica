import type { Metadata } from "next";
import { AboutClosingCta } from "@/components/about/AboutClosingCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutValuesFixedBackdrop } from "@/components/about/AboutValuesFixedBackdrop";
import { AboutWhatWeDo } from "@/components/about/AboutWhatWeDo";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(pageSeo.about);

export default function AboutPage() {
  return (
    <main className="relative flex-1">
      <AboutValuesFixedBackdrop />
      <AboutHero />
      <AboutWhatWeDo />
      <AboutValues />
      <AboutTeamSection />
      <AboutClosingCta />
      <HomeFinalCta />
    </main>
  );
}
