import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import {
  faqClosing,
  faqHero,
  faqItems,
  faqPageMeta,
} from "@/content/faq";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: faqPageMeta.title,
  description: faqPageMeta.description,
};

const detailsClass =
  "group border-b border-[color:var(--hairline)] py-2 first:pt-0 last:border-b-0";

const summaryClass =
  "flex cursor-pointer list-none items-start justify-between gap-4 py-4 font-sans text-base font-semibold text-[color:var(--ink)] marker:content-none [&::-webkit-details-marker]:hidden";

const answerClass =
  "font-sans pb-6 text-[0.9375rem] leading-relaxed text-[color:var(--ink)]/82 sm:text-base";

const inlineLink =
  "font-semibold text-[color:var(--ink)] underline decoration-[color:var(--ink)]/25 underline-offset-[5px] transition-colors hover:decoration-[color:var(--ink)]/50";

export default function FaqPage() {
  return (
    <main className="relative flex-1">
      <PageIntro
        variant="dark"
        eyebrow={faqHero.eyebrow}
        title={faqHero.title}
        subtitle={faqHero.subtitle}
      />
      <section className="py-16 sm:pb-24">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              {faqItems.map((item) => (
                <details key={item.question} className={detailsClass}>
                  <summary className={summaryClass}>
                    <span>{item.question}</span>
                    <span
                      className="mt-0.5 shrink-0 text-[color:var(--ink)]/45 transition-transform group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className={answerClass}>{item.answer}</p>
                </details>
              ))}
              <p className={`${answerClass} mt-10 border-t border-[color:var(--hairline)] pt-10`}>
                {faqClosing.lead}{" "}
                <Link href={faqClosing.ctaHref} className={inlineLink}>
                  {faqClosing.ctaLabel}
                </Link>{" "}
                {faqClosing.beforeEmail}{" "}
                <a href={`mailto:${site.email}`} className={inlineLink}>
                  {site.email}
                </a>
                {faqClosing.trailing}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
