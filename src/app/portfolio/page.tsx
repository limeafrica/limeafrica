import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { workItems } from "@/content/work";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function WorkIndexPage() {
  return (
    <main className="relative flex-1">
      <PortfolioHero />
      <section
        id="projects"
        className="relative z-0 scroll-mt-[calc(3.5rem+1rem)] border-t border-white/10 bg-[color:var(--ink)] pt-28 pb-24 sm:pt-36 sm:pb-32 md:pt-44 md:pb-36"
      >
        <Container>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-sand)]">
              Projects
            </p>
            <h2 className="font-title mt-4 max-w-4xl text-4xl tracking-tight text-[color:var(--brand-white)] sm:text-6xl">
              Our Most Recent Digital and Strategy Projects
            </h2>
            <p className="font-sans mt-8 max-w-2xl text-base leading-relaxed text-[color:var(--brand-white)]/85">
              Strategy, storytelling, and campaigns—from flagship events to
              ongoing digital presence—that help brands show up clearly where it
              counts.
            </p>
          </Reveal>
        </Container>
      </section>

      <section
        aria-label="Project case studies"
        className="relative z-10 border-t border-[color:var(--hairline)] bg-[color:var(--paper)] pt-0 pb-16 sm:pb-24"
      >
        <Container className="relative">
          <div className="grid gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
            {workItems.map((project, i) => (
              <Reveal key={project.slug} delay={0.05 * i}>
                <Link href={`/portfolio/${project.slug}`} className="group block">
                  <div
                    className={
                      "relative aspect-[16/11] overflow-hidden bg-[color:var(--hairline)] ring-1 ring-[color:var(--hairline)] " +
                      (i === 0
                        ? "z-20 -mt-16 shadow-[0_20px_50px_-12px_rgba(26,22,18,0.35)] sm:-mt-24 md:-mt-[7.5rem]"
                        : i === 1
                          ? "z-20 shadow-[0_20px_50px_-12px_rgba(26,22,18,0.35)] md:-mt-[7.5rem]"
                          : "")
                    }
                  >
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      unoptimized
                      className="object-cover transition duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-yellow)]">
                    {project.category}
                  </p>
                  <h3 className="font-title mt-2 text-3xl text-[color:var(--ink)]">
                    {project.title}
                  </h3>
                  <p className="font-sans mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
                    {project.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ink)] transition">
                    <span
                      className="font-sans text-xl font-light leading-none text-[color:var(--brand-yellow)] transition group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      →
                    </span>
                    View project
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
