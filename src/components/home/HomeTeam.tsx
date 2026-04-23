import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { team } from "@/content/site";
import { TeamPortraitSlider } from "@/components/home/TeamPortraitSlider";

export function HomeTeam() {
  return (
    <section className="bg-[color:var(--brand-yellow)] py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-sans text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-muted)]">
            People
          </p>
          <h2 className="font-title mx-auto mt-5 max-w-xl text-center text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--ink)]">
            Meet the Team
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-12 sm:grid-cols-2 sm:gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-12">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.06 * i}>
              <article className="flex flex-col items-center text-center">
                <div className="w-full max-w-[320px] sm:max-w-none">
                  <TeamPortraitSlider
                    name={member.name}
                    slides={member.slides}
                  />
                </div>
                <h3 className="font-title mt-8 text-xl font-bold text-[color:var(--ink)] sm:text-[1.35rem]">
                  {member.name}
                </h3>
                <p className="font-sans mt-3 max-w-[16rem] text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink-muted)]">
                  {member.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
