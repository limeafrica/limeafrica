import type { Metadata } from "next";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { PageIntro } from "@/components/site/PageIntro";
import { ServicesPageContent } from "@/components/services/ServicesPageContent";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: `${site.name} — Digital marketing, consulting, resources, and The Lime Edit content bundles. Strategy through execution.`,
};

export default function ServicesPage() {
  return (
    <main className="relative flex-1">
      <PageIntro
        fullHeight
        backgroundImage="/Slider1.avif"
        eyebrow="Services"
        title="Strategy, content, and bundles—built to scale with you"
        subtitle="End-to-end digital marketing, one-on-one consulting, curated resources, and The Lime Edit packages when you need strong content without full social management."
      />
      <ServicesPageContent />
      <HomeFinalCta />
    </main>
  );
}
