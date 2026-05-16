import type { LegalSection } from "@/content/legal";
import { legalLastUpdated } from "@/content/legal";
import { withoutHyphens } from "@/lib/displayCopy";

type LegalDocumentProps = {
  /** Optional override; defaults to shared `legalLastUpdated`. */
  lastUpdated?: string;
  intro?: string;
  sections: readonly LegalSection[];
};

const sectionTitle =
  "font-title mt-12 text-xl font-bold tracking-tight text-[color:var(--ink)] first:mt-0 sm:text-2xl";

const body =
  "font-sans mt-4 text-[0.9375rem] leading-relaxed text-[color:var(--ink)]/82 sm:text-base";

const listClass =
  "font-sans mt-4 list-disc space-y-2 pl-5 text-[0.9375rem] leading-relaxed text-[color:var(--ink)]/82 sm:text-base";

export function LegalDocument({
  lastUpdated = legalLastUpdated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <article className="max-w-3xl">
      <p className="font-sans text-sm text-[color:var(--ink)]/58">
        Last updated: {withoutHyphens(lastUpdated)}
      </p>
      {intro ? <p className={`${body} mt-6`}>{withoutHyphens(intro)}</p> : null}

      {sections.map((section) => (
        <section key={section.title} aria-labelledby={`legal-${slugId(section.title)}`}>
          <h2 id={`legal-${slugId(section.title)}`} className={sectionTitle}>
            {withoutHyphens(section.title)}
          </h2>
          {section.paragraphs?.map((p, i) => (
            <p key={`${section.title}-${i}`} className={body}>
              {withoutHyphens(p)}
            </p>
          ))}
          {section.bullets && section.bullets.length > 0 ? (
            <ul className={listClass}>
              {section.bullets.map((item) => (
                <li key={item}>{withoutHyphens(item)}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </article>
  );
}

function slugId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
