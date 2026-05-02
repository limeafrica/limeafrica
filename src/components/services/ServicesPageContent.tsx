import Link from "next/link";
import { DigitalMarketingCollage } from "@/components/services/DigitalMarketingCollage";
import { ServicesMobileEditorialStack } from "@/components/services/ServicesMobileEditorialStack";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import {
  bundleTiers,
  consultingBullets,
  consultingIntro,
  digitalMarketingIntro,
  consultingSectionCollage,
  digitalMarketingItems,
  digitalSectionCollage,
  extrasDisclaimer,
  extrasItems,
  bundlesIntro,
  resourceLinks,
  resourcesIntro,
  resourcesSectionCollage,
} from "@/content/services";

const eyebrow =
  "text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-muted)]";

const sectionShell = "py-16 sm:py-24";

export function ServicesPageContent() {
  return (
    <>
      {/* Digital marketing — mobile: full-bleed ink + title + overlap image; lg: collage + copy */}
      <section
        id="digital-marketing"
        className="scroll-mt-28 overflow-x-hidden border-b border-[color:var(--hairline)] bg-[color:var(--paper)] pt-0 pb-20 sm:pb-28 lg:py-24 xl:py-28"
      >
        <ServicesMobileEditorialStack
          bandClassName="bg-[color:var(--ink)]"
          eyebrowTextClassName="text-white/75"
          titleTextClassName="text-white"
          eyebrow="Digital marketing"
          title="Digital Marketing Services"
          foregroundSrc={digitalSectionCollage.foreground}
        >
          <Reveal>
            <p className="font-sans max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              {digitalMarketingIntro}
            </p>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {digitalMarketingItems.map((item, i) => (
              <Reveal key={`${item}-${i}`} delay={0.04 * i}>
                <li className="border border-[color:var(--hairline)] bg-white/40 px-6 py-5 font-sans text-[0.9375rem] font-medium leading-snug text-[color:var(--ink)] sm:text-base">
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </ServicesMobileEditorialStack>

        {/* Desktop */}
        <div className="hidden w-full flex-col gap-14 lg:flex lg:flex-row lg:items-center lg:gap-10 xl:gap-14">
          <div className="w-full shrink-0 lg:w-[min(48vw,600px)] lg:max-w-[620px]">
            <Reveal className="block w-full">
              <DigitalMarketingCollage
                foregroundSrc={digitalSectionCollage.foreground}
              />
            </Reveal>
          </div>

          <div className="min-w-0 flex-1 space-y-10 lg:pl-4 lg:pr-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] xl:pl-8">
            <Reveal>
              <div>
                <p className={eyebrow}>Digital marketing</p>
                <h2 className="font-title mt-4 max-w-3xl text-3xl tracking-tight text-[color:var(--ink)] sm:text-4xl">
                  Digital Marketing Services
                </h2>
                <p className="font-sans mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
                  {digitalMarketingIntro}
                </p>
              </div>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {digitalMarketingItems.map((item, i) => (
                <Reveal key={item} delay={0.04 * i}>
                  <li className="border border-[color:var(--hairline)] bg-white/40 px-6 py-5 font-sans text-[0.9375rem] font-medium leading-snug text-[color:var(--ink)] sm:text-base">
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Consulting — light brown band (mobile) + desktop collage */}
      <section
        id="consulting"
        className="scroll-mt-28 overflow-x-hidden border-b border-[color:var(--hairline)] bg-[color:var(--surface-subtle)] pt-0 pb-20 sm:pb-28 lg:py-24 xl:py-28"
      >
        <ServicesMobileEditorialStack
          bandClassName="bg-[color:var(--surface-light-brown)]"
          eyebrowTextClassName="text-[color:var(--ink)]/65"
          titleTextClassName="text-[color:var(--ink)]"
          eyebrow="Consulting"
          title="Consulting"
          foregroundSrc={consultingSectionCollage.foreground}
        >
          <Reveal>
            <p className="font-sans max-w-2xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              {consultingIntro}
            </p>
          </Reveal>
          <ul className="font-sans max-w-2xl space-y-4 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
            {consultingBullets.map((line, i) => (
              <Reveal key={line} delay={0.06 + i * 0.04}>
                <li className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-yellow)]"
                    aria-hidden
                  />
                  {line}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.1}>
            <div className="border border-[color:var(--hairline)] bg-[color:var(--brand-white)] p-8">
              <p className="font-sans text-sm leading-relaxed text-[color:var(--ink-muted)]">
                Ready to talk through goals, channels, and next steps in a focused
                session?
              </p>
              <Link
                href="/work-with-us"
                className="mt-8 inline-flex w-full items-center justify-center border border-[color:var(--ink)] px-8 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)] transition hover:bg-[color:var(--ink)] hover:text-[color:var(--paper)] sm:w-auto"
              >
                Book a consultation
              </Link>
            </div>
          </Reveal>
        </ServicesMobileEditorialStack>

        <div className="hidden w-full flex-col gap-14 lg:flex lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
          <div className="w-full shrink-0 lg:w-[min(48vw,600px)] lg:max-w-[620px]">
            <Reveal className="block w-full">
              <DigitalMarketingCollage
                foregroundSrc={consultingSectionCollage.foreground}
                panelClassName="bg-[color:var(--surface-light-brown)]"
              />
            </Reveal>
          </div>
          <div className="min-w-0 flex-1 space-y-10 lg:pl-4 lg:pr-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] xl:pl-8">
            <Reveal>
              <div>
                <p className={eyebrow}>Consulting</p>
                <h2 className="font-title mt-4 text-3xl tracking-tight text-[color:var(--ink)] sm:text-4xl">
                  Consulting
                </h2>
                <p className="font-sans mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--ink-muted)]">
                  {consultingIntro}
                </p>
              </div>
            </Reveal>
            <ul className="font-sans max-w-2xl space-y-4 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
              {consultingBullets.map((line, i) => (
                <Reveal key={line} delay={0.06 + i * 0.04}>
                  <li className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-yellow)]"
                      aria-hidden
                    />
                    {line}
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <div className="max-w-[340px] border border-[color:var(--hairline)] bg-[color:var(--brand-white)] p-8">
                <p className="font-sans text-sm leading-relaxed text-[color:var(--ink-muted)]">
                  Ready to talk through goals, channels, and next steps in a focused
                  session?
                </p>
                <Link
                  href="/work-with-us"
                  className="mt-8 inline-flex w-full items-center justify-center border border-[color:var(--ink)] px-8 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)] transition hover:bg-[color:var(--ink)] hover:text-[color:var(--paper)] sm:w-auto"
                >
                  Book a consultation
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Resources — brand yellow band (mobile) + desktop collage */}
      <section
        id="resources"
        className="scroll-mt-28 overflow-x-hidden border-b border-[color:var(--hairline)] bg-[color:var(--paper)] pt-0 pb-20 sm:pb-28 lg:py-24 xl:py-28"
      >
        <ServicesMobileEditorialStack
          bandClassName="bg-[color:var(--brand-yellow)]"
          eyebrowTextClassName="text-[color:var(--ink)]/65"
          titleTextClassName="text-[color:var(--ink)]"
          eyebrow="Resources"
          title="Resources"
          foregroundSrc={resourcesSectionCollage.foreground}
        >
          <Reveal>
            <p className="font-sans max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              {resourcesIntro}
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {resourceLinks.map((item, i) => (
              <Reveal key={`${item.href}-${item.label}`} delay={0.05 * i}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col border border-[color:var(--hairline)] bg-white/40 p-6 transition hover:border-[color:var(--ink)]/25 hover:bg-[color:var(--brand-white)]"
                >
                  <span className="font-title text-xl text-[color:var(--ink)] group-hover:underline group-hover:underline-offset-4">
                    {item.label}
                  </span>
                  <span className="font-sans mt-3 text-xs uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
                    View
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </ServicesMobileEditorialStack>

        <div className="hidden w-full flex-col gap-14 lg:flex lg:flex-row lg:items-center lg:gap-10 xl:gap-14">
          <div className="w-full shrink-0 lg:w-[min(48vw,600px)] lg:max-w-[620px]">
            <Reveal className="block w-full">
              <DigitalMarketingCollage
                foregroundSrc={resourcesSectionCollage.foreground}
                panelClassName="bg-[color:var(--brand-yellow)]"
              />
            </Reveal>
          </div>
          <div className="min-w-0 flex-1 space-y-10 lg:pl-4 lg:pr-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] xl:pl-8">
            <Reveal>
              <div>
                <p className={eyebrow}>Resources</p>
                <h2 className="font-title mt-4 max-w-3xl text-3xl tracking-tight text-[color:var(--ink)] sm:text-4xl">
                  Resources
                </h2>
                <p className="font-sans mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
                  {resourcesIntro}
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {resourceLinks.map((item, i) => (
                <Reveal key={`${item.href}-${item.label}`} delay={0.05 * i}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col border border-[color:var(--hairline)] bg-white/40 p-6 transition hover:border-[color:var(--ink)]/25 hover:bg-[color:var(--brand-white)]"
                  >
                    <span className="font-title text-xl text-[color:var(--ink)] group-hover:underline group-hover:underline-offset-4">
                      {item.label}
                    </span>
                    <span className="font-sans mt-3 text-xs uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
                      View
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section
        id="bundles"
        className={`scroll-mt-28 border-b border-[color:var(--hairline)] bg-[color:var(--surface-subtle)] ${sectionShell}`}
      >
        <Container>
          <Reveal>
            <p className={eyebrow}>Our bundles</p>
            <h2 className="font-title mt-4 text-3xl tracking-tight text-[color:var(--ink)] sm:text-4xl">
              The Lime Edit
            </h2>
            <p className="font-sans mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              {bundlesIntro}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {bundleTiers.map((tier, i) => (
              <Reveal key={tier.id} delay={0.06 * i}>
                <article className="flex h-full flex-col border border-[color:var(--hairline)] bg-[color:var(--brand-white)] p-8 sm:p-10">
                  <h3 className="font-title text-2xl text-[color:var(--ink)] sm:text-[1.75rem]">
                    {tier.name}
                  </h3>
                  <p className="font-sans mt-1 text-sm text-[color:var(--ink-muted)]">
                    {tier.tagline}
                  </p>
                  <ul className="font-sans mt-8 flex-1 space-y-3 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
                    {tier.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--ink)]/35"
                          aria-hidden
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="font-sans mt-8 border-t border-[color:var(--hairline)] pt-6 text-sm italic leading-relaxed text-[color:var(--ink-muted)]">
                    PS: {tier.note}
                  </p>
                  <p className="font-title mt-6 text-xl tracking-tight text-[color:var(--ink)]">
                    {tier.priceLabel}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Extras */}
      <section
        id="extras"
        className={`scroll-mt-28 bg-[color:var(--paper)] ${sectionShell}`}
      >
        <Container>
          <Reveal>
            <p className={eyebrow}>Add-ons</p>
            <h2 className="font-title mt-4 text-3xl tracking-tight text-[color:var(--ink)] sm:text-4xl">
              Extras
            </h2>
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-none border border-[color:var(--hairline)] bg-white/40">
            <ul className="divide-y divide-[color:var(--hairline)]">
              {extrasItems.map((row, i) => (
                <Reveal key={row.label} delay={0.03 * i}>
                  <li className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-4">
                    <span className="font-sans text-[0.9375rem] text-[color:var(--ink)] sm:text-base">
                      {row.label}
                    </span>
                    <span className="font-sans shrink-0 text-[0.9375rem] font-medium tabular-nums text-[color:var(--ink-muted)] sm:text-base">
                      {row.price}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.08}>
            <p className="font-sans mt-8 max-w-3xl text-sm leading-relaxed text-[color:var(--ink-muted)]">
              <span className="font-semibold text-[color:var(--ink)]">PS:</span>{" "}
              {extrasDisclaimer}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
