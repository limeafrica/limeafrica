import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { HomeWorkPreviewProjects } from "@/components/home/HomeWorkPreviewProjects";
import { workItems } from "@/content/work";

export function HomeWorkPreview() {
  const preview = workItems.slice(0, 3);
  return (
    <section className="relative overflow-hidden bg-[color:var(--ink)] py-20 text-[color:var(--brand-white)] sm:py-28">
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/4 translate-y-1/4 rounded-full bg-[color:var(--brand-yellow)] opacity-[0.12] blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div className="w-full max-w-2xl">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--brand-sand)]">
                Portfolio
              </p>
              <h2 className="font-title mx-auto mt-5 max-w-xl text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--brand-white)] sm:mx-0">
                Our Work Speaks
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[color:var(--brand-white)]/72 sm:mx-0 sm:text-base">
              A look into how we’ve helped brands show up, stand out and grow through thoughtful strategy, refined content, and intentional digital execution.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex w-fit shrink-0 self-center rounded-full border border-[color:var(--brand-white)]/35 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-white)] transition hover:border-[color:var(--brand-yellow)] hover:bg-[color:var(--brand-yellow)] hover:text-[color:var(--ink)] sm:self-auto"
            >
              View our Portfolio
            </Link>
          </div>
        </Reveal>

        <HomeWorkPreviewProjects projects={preview} />
      </Container>
    </section>
  );
}
