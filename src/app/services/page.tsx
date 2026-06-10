import type { Metadata } from "next";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { PageIntro } from "@/components/site/PageIntro";
import { ServicesPageContent } from "@/components/services/ServicesPageContent";
import { servicesEyebrows } from "@/content/services";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(pageSeo.services);

export default function ServicesPage() {
  return (
    <main className="relative flex-1">
      <PageIntro
        fullHeight
        fixedBackground
        backgroundImage="/Untitled design (4).webp"
        eyebrow={servicesEyebrows.hero}
        title="Strategy, content, and bundles built to scale with you"
        subtitle="End to end digital marketing, branding and strategy, one on one consulting, curated resources, and The Lime Edit packages when you need strong content without full social management."
      />
      <div className="relative z-10">
        <ServicesPageContent />
        <HomeFinalCta />
      </div>
    </main>
  );
}
