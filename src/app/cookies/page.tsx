import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookies policy",
  description: `Cookies policy — ${site.name}`,
};

export default function CookiesPolicyPage() {
  return (
    <main className="relative flex-1 py-16 sm:py-24">
      <Container>
        <h1 className="font-title text-3xl font-bold tracking-tight text-[color:var(--ink)]">
          Cookies policy
        </h1>
        <p className="font-sans mt-6 max-w-2xl text-[color:var(--ink)]/78">
          Content for this page will be added soon.
        </p>
      </Container>
    </main>
  );
}
