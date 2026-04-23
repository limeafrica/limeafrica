import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { team } from "@/content/site";

export function HomeTeam() {
  return (
    <section className="border-y border-[color:var(--hairline)] bg-[color:var(--brand-white)] py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-muted)]">
            People
          </p>
          <h2 className="font-title mt-3 text-3xl text-[color:var(--ink)] sm:text-5xl">
            Meet the team
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.06 * i}>
              <article
                className={`flex h-full flex-col rounded-2xl p-8 ${
                  i % 2 === 0
                    ? "bg-[color:var(--surface-sand)]"
                    : "border border-[color:var(--hairline)] bg-[color:var(--brand-white)]"
                }`}
              >
                <span className="tabular-nums text-[10px] font-medium uppercase tracking-[0.24em] text-[color:var(--ink-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-title mt-6 text-3xl text-[color:var(--ink)]">
                  {member.name}
                </h3>
                <p className="font-sans mt-2 text-sm italic text-[color:var(--ink-muted)]">
                  {member.role}
                </p>
                <p className="font-sans mt-6 flex-1 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
                  {member.bio}
                </p>
                <div
                  className="mt-8 h-1 w-12 rounded-full bg-[color:var(--brand-yellow)]"
                  aria-hidden
                />
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
