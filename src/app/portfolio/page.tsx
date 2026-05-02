import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { workItems } from "@/content/work";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function WorkIndexPage() {
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="Portfolio"
        title="Selected projects"
        subtitle="A curated set of identities, websites, and channel programs—built for founders who care about craft and outcomes."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 md:grid-cols-2">
            {workItems.map((project, i) => (
              <Reveal key={project.slug} delay={0.05 * i}>
                <Link href={`/portfolio/${project.slug}`} className="group block">
                  <div className="relative aspect-[16/11] overflow-hidden bg-[color:var(--hairline)]">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      unoptimized
                      className="object-cover transition duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-muted)]">
                    {project.category}
                  </p>
                  <h2 className="font-title mt-2 text-3xl text-[color:var(--ink)]">
                    {project.title}
                  </h2>
                  <p className="font-sans mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
                    {project.excerpt}
                  </p>
                  <span className="mt-6 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)]">
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
