import type { Metadata } from "next";
import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityPageContent } from "@/components/community/CommunityPageContent";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Community",
  description: `${site.name} — Join the Lime Townhall: webinars, mentorship, and a community for digital marketing creatives.`,
};

export default function CommunityPage() {
  return (
    <main className="flex-1">
      <CommunityHero />
      <CommunityPageContent />
    </main>
  );
}
