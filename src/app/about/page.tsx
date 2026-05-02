import type { Metadata } from "next";
import { AboutClosingCta } from "@/components/about/AboutClosingCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutValuesFixedBackdrop } from "@/components/about/AboutValuesFixedBackdrop";
import { AboutWhatWeDo } from "@/components/about/AboutWhatWeDo";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — ${site.tagline} Learn how we work, what we stand for, and who’s on the team.`,
};

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
