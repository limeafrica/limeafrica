import type { Metadata } from "next";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { ResourcesHero } from "@/components/resources/ResourcesHero";
import { ResourcesTemplatesSection } from "@/components/resources/ResourcesTemplatesSection";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(pageSeo.resources);

export default function ResourcesPage() {
  return (
    <main className="relative flex-1">
      <ResourcesHero />
      <div className="relative z-10">
        <ResourcesTemplatesSection />
        <HomeFinalCta />
      </div>
    </main>
  );
}
