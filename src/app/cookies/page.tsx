import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { Container } from "@/components/ui/Container";
import { cookiesSections } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookies policy",
  description: `Cookies policy — ${site.name}`,
};

export default function CookiesPolicyPage() {
  return (
    <main className="relative flex-1 py-16 sm:py-24">
      <Container>
        <h1 className="font-title text-3xl font-bold tracking-tight text-[color:var(--ink)] sm:text-4xl">
          Cookies policy
        </h1>
        <div className="mt-10">
          <LegalDocument sections={cookiesSections} />
        </div>
      </Container>
    </main>
  );
}
