import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TeamMemberPortrait } from "@/components/home/TeamMemberPortrait";
import { team } from "@/content/site";

export function AboutTeamSection() {
  return (
    <section className="border-t border-[color:var(--hairline)] bg-[color:var(--brand-yellow)] py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-muted)]">
              People
            </p>
            <h2 className="font-title mt-5 text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--ink)]">
              The team behind the work
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 space-y-20 lg:mt-20 lg:space-y-24">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.06 * i}>
              <article className="grid gap-10 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:gap-20">
                <div className="mx-auto w-full max-w-[280px] lg:mx-0">
                  <TeamMemberPortrait name={member.name} src={member.portrait} />
                </div>
                <div className="min-w-0 pt-0 lg:pt-2">
                  <h3 className="font-title text-2xl font-bold text-[color:var(--ink)] sm:text-3xl">
                    {member.name}
                  </h3>
                  <p className="font-sans mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink-muted)]">
                    {member.role}
                  </p>
                  <p className="font-sans mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
                    {member.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
