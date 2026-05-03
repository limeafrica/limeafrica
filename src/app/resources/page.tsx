import type { Metadata } from "next";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { ResourcesHero } from "@/components/resources/ResourcesHero";
import { ResourcesTemplatesSection } from "@/components/resources/ResourcesTemplatesSection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resources",
  description: `${site.name} — Tools, templates, and guides to streamline your marketing and execution.`,
};

export default function ResourcesPage() {
  return (
    <main className="relative flex-1">
      <ResourcesHero />
      <ResourcesTemplatesSection />
      <HomeFinalCta />
    </main>
  );
}
