import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function PageIntro({ eyebrow, title, subtitle }: PageIntroProps) {
  return (
    <div className="border-b border-[color:var(--hairline)] bg-[color:var(--paper)] py-16 sm:py-24">
      <Container>
        <Reveal>
          {eyebrow ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-muted)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-title mt-4 max-w-4xl text-4xl tracking-tight text-[color:var(--ink)] sm:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="font-sans mt-8 max-w-2xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </div>
  );
}
