import type { ComponentType } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";
import { SiteLogo } from "@/components/site/SiteLogo";
import { mainNav, menuSocialLinks, site } from "@/content/site";

type SocialLabel = (typeof menuSocialLinks)[number]["label"];

const socialIconByLabel: Record<
  SocialLabel,
  ComponentType<{ className?: string }>
> = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  Facebook: FaFacebook,
  TikTok: FaTiktok,
};

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function IconArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.5 13.5L19 6M19 6H12.5M19 6v6.5"
      />
    </svg>
  );
}

const footerLink =
  "font-sans text-[0.9375rem] font-medium text-[color:var(--ink)]/85 transition-colors hover:text-[color:var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ink)]";

const eyebrow =
  "font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink)]/55";

const socialIconLink =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--ink)]/22 text-[color:var(--ink)]/85 transition-colors hover:border-[color:var(--ink)]/45 hover:text-[color:var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ink)]";

const footerBarLink =
  "font-sans text-xs text-[color:var(--ink)]/62 underline-offset-2 transition-colors hover:text-[color:var(--ink)]/85 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ink)]";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[color:var(--brand-yellow)] text-[color:var(--ink)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[color:var(--ink)]/10" aria-hidden />

      <div className="site-shell px-6 pb-14 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Identity */}
          <div className="lg:col-span-5 xl:col-span-4">
            <SiteLogo variant="footer" />
            <p className="font-sans mt-6 max-w-md text-[0.9375rem] leading-[1.65] text-[color:var(--ink)]/88">
              {site.tagline}
            </p>
            <ul
              className="mt-6 flex flex-wrap gap-3"
              aria-label="Social profiles"
            >
              {menuSocialLinks.map((item) => {
                const Icon = socialIconByLabel[item.label];
                return (
                  <li key={item.label}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialIconLink}
                      aria-label={`${site.name} on ${item.label}`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation */}
          <nav
            className="lg:col-span-4 xl:col-span-4 lg:w-fit lg:max-w-full lg:justify-self-center"
            aria-label="Footer navigation"
          >
            <p className={eyebrow}>Navigate</p>
            <ul className="mt-6 space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group inline-flex items-center gap-2 leading-snug ${footerLink}`}
                  >
                    <IconArrowUpRight className="h-5 w-5 shrink-0 text-[color:var(--ink)]/55 transition-colors group-hover:text-[color:var(--ink)]/85" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="lg:col-span-3 xl:col-span-4">
            <p className={eyebrow}>Connect</p>
            <div className="mt-6">
              <a
                href={`mailto:${site.email}`}
                className={`group inline-flex items-start gap-3 ${footerLink}`}
              >
                <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--ink)]/70 transition-colors group-hover:text-[color:var(--ink)]" />
                <span className="leading-snug underline decoration-[color:var(--ink)]/25 underline-offset-[5px] transition-colors group-hover:decoration-[color:var(--ink)]/50">
                  {site.email}
                </span>
              </a>
            </div>

            <p className={`${eyebrow} mt-10`}>Company address</p>
            <div className="mt-6">
              <address className="font-sans not-italic text-[0.9375rem] leading-relaxed text-[color:var(--ink)]/78">
                {site.officeAddressLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--ink)]/12">
        <div className="site-shell px-6 py-8">
          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:items-center sm:gap-8 sm:text-left">
            <p className="font-sans text-xs text-[color:var(--ink)]/62 sm:text-left">
              © {year}{" "}
              <strong className="font-bold text-[color:var(--ink)]/78">
                {site.name}
              </strong>
              . All rights reserved.
            </p>
            <nav
              className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:justify-center"
              aria-label="Legal"
            >
              <Link href="/faq" className={footerBarLink}>
                FAQ
              </Link>
              <span className="text-[color:var(--ink)]/35" aria-hidden>
                ·
              </span>
              <Link href="/cookies" className={footerBarLink}>
                Cookies policy
              </Link>
              <span className="text-[color:var(--ink)]/35" aria-hidden>
                ·
              </span>
              <Link href="/privacy" className={footerBarLink}>
                Privacy policy
              </Link>
              <span className="text-[color:var(--ink)]/35" aria-hidden>
                ·
              </span>
              <Link href="/terms" className={footerBarLink}>
                Terms and conditions
              </Link>
            </nav>
            <p className="font-sans text-xs text-[color:var(--ink)]/62 sm:text-right">
              Design &amp; Dev By:{" "}
              <a
                href="https://expresscreo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--ink)]/75 underline-offset-2 transition-colors hover:text-[color:var(--ink)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ink)]"
              >
                Express<strong className="font-bold text-[color:var(--ink)]">Creo</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
