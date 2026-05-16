import { TemplatesSection } from "@/components/templates/TemplatesSection";
import { Container } from "@/components/ui/Container";

export function HomeTemplates() {
  return (
    <section className="relative bg-[color:var(--brand-white)] py-20 sm:py-24 lg:py-28">
      <Container>
        <TemplatesSection />
      </Container>
    </section>
  );
}
