import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { HomeTeamMembers } from "@/components/home/HomeTeamMembers";

export function AboutTeamSection() {
  return (
    <section
      id="about-team"
      className={
        "relative z-10 flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center border-t border-[color:var(--hairline)] bg-[color:var(--brand-yellow)] " +
        "py-12 sm:py-14 lg:min-h-0 lg:py-28"
      }
    >
      <Container>
        <Reveal>
          <p className="font-sans text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-muted)]">
            People
          </p>
          <h2 className="font-title mx-auto mt-5 max-w-xl text-center text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--ink)]">
            The team behind the work
          </h2>
        </Reveal>

        <HomeTeamMembers />
      </Container>
    </section>
  );
}
