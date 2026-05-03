import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { Container } from "@/components/ui/Container";
import { termsSections } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description: `Terms and conditions — ${site.name}`,
};

export default function TermsPage() {
  return (
    <main className="relative flex-1 py-16 sm:py-24">
      <Container>
        <h1 className="font-title text-3xl font-bold tracking-tight text-[color:var(--ink)] sm:text-4xl">
          Terms and conditions
        </h1>
        <div className="mt-10">
          <LegalDocument sections={termsSections} />
        </div>
      </Container>
    </main>
  );
}
