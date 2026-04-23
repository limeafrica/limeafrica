import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
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
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--brand-sand)]">
                Portfolio
              </p>
              <h2 className="font-title mt-3 text-3xl text-[color:var(--brand-white)] sm:text-5xl">
                Our work
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[color:var(--brand-white)]/72 sm:text-base">
                Brand identities, websites, and channel strategies—crafted for
                founders across hospitality, consumer, and digital-first teams.
              </p>
            </div>
            <Link
              href="/work"
              className="shrink-0 rounded-full border border-[color:var(--brand-white)]/35 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-white)] transition hover:border-[color:var(--brand-yellow)] hover:bg-[color:var(--brand-yellow)] hover:text-[color:var(--ink)]"
            >
              View all work
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {preview.map((project, i) => (
            <Reveal key={project.slug} delay={0.07 * i}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[color:var(--brand-white)]/10 ring-2 ring-transparent transition duration-500 group-hover:ring-[color:var(--brand-yellow)]">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    unoptimized
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-90" />
                  <p className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-sand)]">
                    {project.category}
                  </p>
                </div>
                <p className="font-title mt-5 text-2xl text-[color:var(--brand-white)]">
                  {project.title}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-yellow)]">
                  View case study
                  <span aria-hidden className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
