import type { Metadata } from "next";
import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityPageContent } from "@/components/community/CommunityPageContent";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(pageSeo.community);

export default function CommunityPage() {
  return (
    <main className="flex-1">
      <CommunityHero />
      <CommunityPageContent />
    </main>
  );
}
