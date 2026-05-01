import type { Metadata } from "next";
import { AboutClosingCta } from "@/components/about/AboutClosingCta";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutVisionBlock } from "@/components/about/AboutVisionBlock";
import { AboutWhatWeDo } from "@/components/about/AboutWhatWeDo";
import { PageIntro } from "@/components/site/PageIntro";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — ${site.tagline} Learn how we work, what we stand for, and who’s on the team.`,
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="About"
        title="Who we are"
        subtitle={site.tagline}
      />
      <AboutIntro />
      <AboutWhatWeDo />
      <AboutValues />
      <AboutVisionBlock />
      <AboutTeamSection />
      <AboutClosingCta />
    </main>
  );
}
