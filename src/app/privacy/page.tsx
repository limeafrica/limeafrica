import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { Container } from "@/components/ui/Container";
import { privacySections } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `Privacy policy — ${site.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative flex-1 py-16 sm:py-24">
      <Container>
        <h1 className="font-title text-3xl font-bold tracking-tight text-[color:var(--ink)] sm:text-4xl">
          Privacy policy
        </h1>
        <div className="mt-10">
          <LegalDocument sections={privacySections} />
        </div>
      </Container>
    </main>
  );
}
