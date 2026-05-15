import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <main className="relative flex-1">
      <section
        className="relative z-0 bg-[color:var(--surface-light-brown)] pt-28 pb-24 sm:pt-36 sm:pb-32 md:pt-44 md:pb-36"
      >
        <Container>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)]/75">
              Articles
            </p>
            <h2 className="font-title mt-4 max-w-4xl text-4xl tracking-tight text-[color:var(--ink)] sm:text-6xl">
              Social Media Redefined
            </h2>
            <p className="font-sans mt-8 max-w-2xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              We peel back the layers of social media and explore what actually
              works in today&apos;s digital space. From insights, strategy to
              real conversations for brands that want to grow with intention,
              not guesswork.
            </p>
          </Reveal>
        </Container>
      </section>

      <section
        aria-label="Blog articles"
        className="relative z-10 border-t border-[color:var(--hairline)] bg-[color:var(--paper)] pt-0 pb-16 sm:pb-24"
      >
        <Container className="relative">
          <div className="grid gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={0.05 * i}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div
                    className={
                      "relative aspect-[16/11] overflow-hidden bg-[color:var(--hairline)] ring-1 ring-[color:var(--hairline)] " +
                      (i === 0
                        ? "z-20 -mt-16 sm:-mt-24 md:-mt-[7.5rem]"
                        : i === 1
                          ? "z-20 md:-mt-[7.5rem]"
                          : "")
                    }
                  >
                    <Image
                      src={post.imageSrc}
                      alt={post.imageAlt}
                      fill
                      unoptimized
                      className="object-cover transition duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-yellow)]">
                    {post.category}
                  </p>
                  <h3 className="font-title mt-2 text-3xl text-[color:var(--ink)]">
                    {post.title}
                  </h3>
                  <p className="font-sans mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ink)] transition">
                    <span
                      className="font-sans text-xl font-light leading-none text-[color:var(--brand-yellow)] transition group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      →
                    </span>
                    Read article
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
