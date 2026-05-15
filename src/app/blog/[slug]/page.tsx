import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="flex-1">
      <section className="border-b border-[color:var(--hairline)]">
        <Container className="py-12 sm:py-16">
          <Link
            href="/blog"
            className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]"
          >
            ← Back to blog
          </Link>
          <Reveal>
            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-yellow)]">
              {post.category}
            </p>
            <h1 className="font-title mt-4 text-4xl tracking-tight sm:text-6xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm italic text-[color:var(--ink-muted)]">
              {post.publishedAt}
            </p>
          </Reveal>
        </Container>
        <div className="relative aspect-[21/9] w-full bg-[color:var(--hairline)] sm:aspect-[24/9]">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            fill
            priority
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="font-sans mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-[color:var(--ink-muted)]">
              {post.storyParagraphs.map((p, i) => (
                <p
                  key={i}
                  className={i === 0 ? "text-[color:var(--ink)]" : undefined}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          {post.gallerySrcs.length > 0 ? (
            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {post.gallerySrcs.map((src, i) => (
                <Reveal key={`${src}-${i}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--hairline)]">
                    <Image
                      src={src}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : null}
        </Container>
      </section>
    </main>
  );
}
