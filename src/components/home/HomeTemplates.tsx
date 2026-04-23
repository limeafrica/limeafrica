import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";

const items = [
  {
    title: "Instant access",
    body:
      "Launch-ready layouts with homepage, story-led services, portfolio, inquiries, journal, and utility pages.",
  },
  {
    title: "Essential pages included",
    body:
      "Home, About, Services, Portfolio, Testimonials, Inquiry, Blog, Coming Soon, and polished 404 experiences.",
  },
  {
    title: "Customize to your brand",
    body:
      "Swap colors, type, imagery, and copy—built for clarity so updates never feel chaotic.",
  },
];

export function HomeTemplates() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-sand)] py-20 sm:py-28">
      <div
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/4 rounded-full bg-[color:var(--brand-yellow)] opacity-20 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink)]/65">
              Products
            </p>
            <h2 className="font-title mt-3 max-w-xl text-3xl tracking-tight text-[color:var(--ink)] sm:text-5xl">
              Website templates
            </h2>
            <p className="font-sans mt-6 max-w-xl text-base leading-relaxed text-[color:var(--ink)]/80">
              Instant structure for founders who want an elevated site fast—essential
              pages, editorial typography, and flexible sections you can tailor to
              your niche.
            </p>
          </Reveal>
        </div>

        <div
          role="region"
          aria-labelledby="templates-early-access-heading"
          className="relative mt-14 border border-[color:var(--hairline)] bg-[color:var(--brand-white)] sm:mt-16 lg:mt-20"
        >
          <div
            className="pointer-events-none absolute -top-px left-0 right-0 h-20 bg-gradient-to-b from-[color:var(--brand-sand)]/35 to-transparent"
            aria-hidden
          />
          <div className="relative px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:gap-12 lg:gap-y-8">
              <div className="lg:col-span-5">
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-sand)] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--ink)]">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-yellow)]"
                      aria-hidden
                    />
                    Early access
                  </span>
                  <p
                    id="templates-early-access-heading"
                    className="font-title mt-6 text-2xl leading-snug tracking-tight text-[color:var(--ink)] sm:text-3xl"
                  >
                    Join the list for templates, drops, and studio notes—no spam,
                    just signal.
                  </p>
                  <p className="font-sans mt-10 text-sm text-[color:var(--ink-muted)]">
                    Follow{" "}
                    <Link
                      href={site.social.instagramUrl}
                      className="font-medium text-[color:var(--ink)] underline decoration-[color:var(--brand-yellow)] decoration-2 underline-offset-4 transition hover:decoration-[color:var(--brand-sand)]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {site.social.instagram}
                    </Link>
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <Reveal delay={0.06}>
                  <div className="relative rounded-2xl border-2 border-[color:var(--brand-sand)] bg-[color:var(--brand-white)] p-6 shadow-[0_24px_80px_-24px_rgba(26,22,18,0.14)] sm:p-8">
                    <div
                      className="pointer-events-none absolute -right-3 -top-3 h-14 w-14 rounded-br-3xl bg-[color:var(--brand-yellow)]"
                      aria-hidden
                    />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink-muted)]">
                      Join the list
                    </p>
                    <LeadForm variant="hero" submitLabel="Join & receive updates" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <div className="h-full rounded-2xl bg-[color:var(--brand-white)] p-7 shadow-[0_16px_50px_-20px_rgba(26,22,18,0.15)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink-muted)]">
                  {item.title}
                </p>
                <p className="font-sans mt-4 text-[0.9375rem] leading-relaxed text-[color:var(--ink)]/78 sm:text-base">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <Link
            href="/templates"
            className="mt-14 inline-flex items-center justify-center rounded-full bg-[color:var(--brand-yellow)] px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink)] shadow-[0_12px_40px_-12px_rgba(235,189,69,0.55)] transition hover:brightness-95"
          >
            View templates
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
