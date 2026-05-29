import Link from "next/link";
import { DigitalMarketingCollage } from "@/components/services/DigitalMarketingCollage";
import { ServicesBundlesSection } from "@/components/services/ServicesBundlesSection";
import { ServicesRateCardSection } from "@/components/services/ServicesRateCardSection";
import { ServicesStickyStack } from "@/components/services/ServicesStickyStack";
import { ServicesMobileEditorialStack } from "@/components/services/ServicesMobileEditorialStack";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import {
  brandingAndStrategyBullets,
  brandingAndStrategyCta,
  brandingAndStrategyIntro,
  brandingSectionCollage,
  consultingBullets,
  consultingIntro,
  digitalMarketingIntro,
  consultingSectionCollage,
  digitalMarketingItems,
  digitalSectionCollage,
  servicesEyebrows,
  resourceLinks,
  resourcesIntro,
  resourcesSectionCollage,
} from "@/content/services";
import { withoutHyphens } from "@/lib/displayCopy";

const eyebrow =
  "text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-muted)]";

export function ServicesPageContent() {
  return (
    <ServicesStickyStack>
      {/* Digital marketing: mobile full-bleed ink + title + overlap image; lg: collage + copy */}
      <section
        id="digital-marketing"
        className="scroll-mt-28 bg-[color:var(--paper)] pt-0 pb-20 sm:pb-28 lg:py-24 xl:py-28"
      >
        <ServicesMobileEditorialStack
          bandClassName="bg-[color:var(--ink)]"
          eyebrowTextClassName="text-white/75"
          titleTextClassName="text-white"
          eyebrow={withoutHyphens(servicesEyebrows.digitalMarketing)}
          title="Digital Marketing Services"
          foregroundSrc={digitalSectionCollage.foreground}
          objectPosition={digitalSectionCollage.objectPosition}
        >
          <Reveal>
            <p className="font-sans max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              {withoutHyphens(digitalMarketingIntro)}
            </p>
          </Reveal>
          <ul className="font-sans max-w-3xl space-y-4 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
            {digitalMarketingItems.map((item, i) => (
              <Reveal key={item} delay={0.06 + i * 0.04}>
                <li className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-yellow)]"
                    aria-hidden
                  />
                  {withoutHyphens(item)}
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
                objectPosition={digitalSectionCollage.objectPosition}
              />
            </Reveal>
          </div>

          <div className="min-w-0 flex-1 space-y-10 lg:pl-4 lg:pr-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] xl:pl-8">
            <Reveal>
              <div>
                <p className={eyebrow}>{withoutHyphens(servicesEyebrows.digitalMarketing)}</p>
                <h2 className="font-title mt-4 max-w-3xl text-3xl tracking-tight text-[color:var(--ink)] sm:text-4xl">
                  Digital Marketing Services
                </h2>
                <p className="font-sans mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
                  {withoutHyphens(digitalMarketingIntro)}
                </p>
              </div>
            </Reveal>
            <ul className="font-sans max-w-3xl space-y-4 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
              {digitalMarketingItems.map((item, i) => (
                <Reveal key={item} delay={0.06 + i * 0.04}>
                  <li className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-yellow)]"
                      aria-hidden
                    />
                    {withoutHyphens(item)}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Branding and strategy: yellow band (mobile) + desktop collage */}
      <section
        id="branding-and-strategy"
        className={
          "scroll-mt-28 bg-gradient-to-b from-[color:var(--surface-subtle)] via-[color:var(--surface-subtle)] to-[color:var(--paper)] pt-0 pb-20 sm:pb-28 lg:py-24 xl:py-28"
        }
      >
        <ServicesMobileEditorialStack
          bandClassName="bg-[color:var(--brand-yellow)]"
          eyebrowTextClassName="text-[color:var(--ink)]/65"
          titleTextClassName="text-[color:var(--ink)]"
          eyebrow={withoutHyphens(servicesEyebrows.brandingAndStrategy)}
          title="Branding and Strategy"
          foregroundSrc={brandingSectionCollage.foreground}
          objectPosition={brandingSectionCollage.objectPosition}
        >
          <Reveal>
            <p className="font-sans max-w-2xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              {withoutHyphens(brandingAndStrategyIntro)}
            </p>
          </Reveal>
          <ul className="font-sans max-w-2xl space-y-4 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
            {brandingAndStrategyBullets.map((line, i) => (
              <Reveal key={line} delay={0.06 + i * 0.04}>
                <li className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-yellow)]"
                    aria-hidden
                  />
                  {withoutHyphens(line)}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.1}>
            <div className="border border-[color:var(--hairline)] bg-[color:var(--brand-white)] p-8">
              <p className="font-sans text-sm leading-relaxed text-[color:var(--ink-muted)]">
                {withoutHyphens(brandingAndStrategyCta.prompt)}
              </p>
              <Link
                href="/work-with-us"
                className="mt-8 inline-flex w-full items-center justify-center border border-[color:var(--ink)] px-8 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)] transition hover:bg-[color:var(--ink)] hover:text-[color:var(--paper)] sm:w-auto"
              >
                {withoutHyphens(brandingAndStrategyCta.label)}
              </Link>
            </div>
          </Reveal>
        </ServicesMobileEditorialStack>

        <div className="hidden w-full flex-col gap-14 lg:flex lg:flex-row lg:items-center lg:gap-10 xl:gap-14">
          <div className="w-full shrink-0 lg:w-[min(48vw,600px)] lg:max-w-[620px]">
            <Reveal className="block w-full">
              <DigitalMarketingCollage
                foregroundSrc={brandingSectionCollage.foreground}
                objectPosition={brandingSectionCollage.objectPosition}
                panelClassName="bg-[color:var(--brand-yellow)]"
              />
            </Reveal>
          </div>
          <div className="min-w-0 flex-1 space-y-10 lg:pl-4 lg:pr-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] xl:pl-8">
            <Reveal>
              <div>
                <p className={eyebrow}>
                  {withoutHyphens(servicesEyebrows.brandingAndStrategy)}
                </p>
                <h2 className="font-title mt-4 text-3xl tracking-tight text-[color:var(--ink)] sm:text-4xl">
                  Branding and Strategy
                </h2>
                <p className="font-sans mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--ink-muted)]">
                  {withoutHyphens(brandingAndStrategyIntro)}
                </p>
              </div>
            </Reveal>
            <ul className="font-sans max-w-2xl space-y-4 text-[0.9375rem] leading-relaxed text-[color:var(--ink-muted)] sm:text-base">
              {brandingAndStrategyBullets.map((line, i) => (
                <Reveal key={line} delay={0.06 + i * 0.04}>
                  <li className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-yellow)]"
                      aria-hidden
                    />
                    {withoutHyphens(line)}
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <div className="max-w-[340px] border border-[color:var(--hairline)] bg-[color:var(--brand-white)] p-8">
                <p className="font-sans text-sm leading-relaxed text-[color:var(--ink-muted)]">
                  {withoutHyphens(brandingAndStrategyCta.prompt)}
                </p>
                <Link
                  href="/work-with-us"
                  className="mt-8 inline-flex w-full items-center justify-center border border-[color:var(--ink)] px-8 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)] transition hover:bg-[color:var(--ink)] hover:text-[color:var(--paper)] sm:w-auto"
                >
                  {withoutHyphens(brandingAndStrategyCta.label)}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Consulting: light brown band (mobile) + desktop collage */}
      <section
        id="consulting"
        className="scroll-mt-28 bg-[color:var(--surface-subtle)] pt-0 pb-20 sm:pb-28 lg:py-24 xl:py-28"
      >
        <ServicesMobileEditorialStack
          bandClassName="bg-[color:var(--surface-light-brown)]"
          eyebrowTextClassName="text-[color:var(--ink)]/65"
          titleTextClassName="text-[color:var(--ink)]"
          eyebrow={withoutHyphens(servicesEyebrows.consulting)}
          title="Consulting"
          foregroundSrc={consultingSectionCollage.foreground}
          objectPosition={consultingSectionCollage.objectPosition}
        >
          <Reveal>
            <p className="font-sans max-w-2xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              {withoutHyphens(consultingIntro)}
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
                  {withoutHyphens(line)}
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

        <div className="hidden w-full flex-col gap-14 lg:flex lg:flex-row lg:items-center lg:gap-10 xl:gap-14">
          <div className="w-full shrink-0 lg:w-[min(48vw,600px)] lg:max-w-[620px]">
            <Reveal className="block w-full">
              <DigitalMarketingCollage
                foregroundSrc={consultingSectionCollage.foreground}
                objectPosition={consultingSectionCollage.objectPosition}
                panelClassName="bg-[color:var(--surface-light-brown)]"
              />
            </Reveal>
          </div>
          <div className="min-w-0 flex-1 space-y-10 lg:pl-4 lg:pr-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] xl:pl-8">
            <Reveal>
              <div>
                <p className={eyebrow}>{withoutHyphens(servicesEyebrows.consulting)}</p>
                <h2 className="font-title mt-4 text-3xl tracking-tight text-[color:var(--ink)] sm:text-4xl">
                  Consulting
                </h2>
                <p className="font-sans mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--ink-muted)]">
                  {withoutHyphens(consultingIntro)}
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
                    {withoutHyphens(line)}
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

      {/* Resources: ink band (mobile) + desktop collage */}
      <section
        id="resources"
        className="scroll-mt-28 bg-[color:var(--paper)] pt-0 pb-20 sm:pb-28 lg:py-24 xl:py-28"
      >
        <ServicesMobileEditorialStack
          bandClassName="bg-[color:var(--ink)]"
          eyebrowTextClassName="text-white/75"
          titleTextClassName="text-white"
          eyebrow={withoutHyphens(servicesEyebrows.resources)}
          title="Resources"
          foregroundSrc={resourcesSectionCollage.foreground}
          objectPosition={resourcesSectionCollage.objectPosition}
        >
          <Reveal>
            <p className="font-sans max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
              {withoutHyphens(resourcesIntro)}
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {resourceLinks.map((item, i) => (
              <Reveal key={`${item.href}-${item.label}`} delay={0.05 * i}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col border border-[color:var(--ink)] bg-[color:var(--brand-white)] p-6 text-[color:var(--ink)] transition hover:bg-[color:var(--ink)] hover:text-[color:var(--paper)]"
                >
                  <span className="font-title text-xl">
                    {withoutHyphens(item.label)}
                  </span>
                  <span className="font-sans mt-3 text-xs uppercase tracking-[0.2em] opacity-70">
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
                objectPosition={resourcesSectionCollage.objectPosition}
                panelClassName="bg-[color:var(--ink)]"
              />
            </Reveal>
          </div>
          <div className="min-w-0 flex-1 space-y-10 lg:pl-4 lg:pr-[max(1.5rem,calc((100vw-var(--layout-max))/2+1.5rem))] xl:pl-8">
            <Reveal>
              <div>
                <p className={eyebrow}>{withoutHyphens(servicesEyebrows.resources)}</p>
                <h2 className="font-title mt-4 max-w-3xl text-3xl tracking-tight text-[color:var(--ink)] sm:text-4xl">
                  Resources
                </h2>
                <p className="font-sans mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--ink-muted)]">
                  {withoutHyphens(resourcesIntro)}
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {resourceLinks.map((item, i) => (
                <Reveal key={`${item.href}-${item.label}`} delay={0.05 * i}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col border border-[color:var(--ink)] bg-[color:var(--brand-white)] p-6 text-[color:var(--ink)] transition hover:bg-[color:var(--ink)] hover:text-[color:var(--paper)]"
                  >
                    <span className="font-title text-xl">
                      {withoutHyphens(item.label)}
                    </span>
                    <span className="font-sans mt-3 text-xs uppercase tracking-[0.2em] opacity-70">
                      View
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesRateCardSection />
      <ServicesBundlesSection />
    </ServicesStickyStack>
  );
}
