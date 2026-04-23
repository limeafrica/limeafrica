import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const blocks = [
  {
    title: "Social media management",
    body:
      "Intentional strategies and visually cohesive content that strengthens your presence—structured testing across Instagram, TikTok, Pinterest, and more.",
    href: "/services#social",
    mark: "S",
  },
  {
    title: "Branding",
    body:
      "Strategic, enduring identities built to connect and convert—visual direction, voice, and systems that scale with you.",
    href: "/services#branding",
    mark: "B",
  },
  {
    title: "Website design",
    body:
      "Beautiful, maintainable sites—semi-custom or fully custom—so your digital home feels elevated and effortless to operate.",
    href: "/services#web",
    mark: "W",
  },
];

export function HomeServices() {
  return (
    <section className="relative bg-[color:var(--brand-white)] py-20 sm:py-28">
      <div className="h-1.5 w-full bg-[color:var(--brand-yellow)]" aria-hidden />
      <Container className="pt-16 sm:pt-20">
        <Reveal>
          <p className="font-title max-w-3xl text-2xl leading-snug text-[color:var(--ink)] sm:text-4xl sm:leading-tight">
            Precision, clarity, and strategy at every step—
            <em className="font-sans text-[color:var(--ink-muted)] not-italic">
              {" "}
              that&apos;s how we bring your vision forward.
            </em>
          </p>
        </Reveal>
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={0.07 * i}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--brand-white)] p-8 shadow-[0_20px_60px_-28px_rgba(26,22,18,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-24px_rgba(26,22,18,0.18)]">
                <span
                  className="font-title inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--surface-sand)] text-xl text-[color:var(--ink)] transition group-hover:bg-[color:var(--brand-yellow)]"
                  aria-hidden
                >
                  {b.mark}
                </span>
                <h3 className="font-title mt-6 text-2xl text-[color:var(--ink)]">
                  {b.title}
                </h3>
                <p className="font-sans mt-4 flex-1 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
                  {b.body}
                </p>
                <Link
                  href={b.href}
                  className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink)]"
                >
                  <span className="h-px w-8 bg-[color:var(--brand-yellow)] transition group-hover:w-12" />
                  Learn more
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
