import Link from "next/link";
import { SiteLogo } from "@/components/site/SiteLogo";
import { mainNav, menuSocialLinks, site } from "@/content/site";

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

const footerLink =
  "font-sans text-[0.9375rem] font-medium text-[color:var(--ink)]/85 transition-colors hover:text-[color:var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ink)]";

const eyebrow =
  "font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink)]/55";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[color:var(--brand-yellow)] text-[color:var(--ink)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[color:var(--ink)]/10" aria-hidden />

      <div className="site-shell px-6 pb-14 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Identity */}
          <div className="lg:col-span-5 xl:col-span-4">
            <SiteLogo variant="footer" />
            <p className="font-sans mt-6 max-w-md text-[0.9375rem] leading-[1.65] text-[color:var(--ink)]/88">
              {site.tagline}
            </p>
          </div>

          {/* Navigation */}
          <nav
            className="lg:col-span-4 xl:col-span-4"
            aria-label="Footer navigation"
          >
            <p className={eyebrow}>Navigate</p>
            <ul className="mt-6 space-y-3.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="lg:col-span-3 xl:col-span-4">
            <p className={eyebrow}>Connect</p>
            <div className="mt-6 space-y-6">
              <a
                href={`mailto:${site.email}`}
                className={`group inline-flex items-start gap-3 ${footerLink}`}
              >
                <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--ink)]/70 transition-colors group-hover:text-[color:var(--ink)]" />
                <span className="leading-snug underline decoration-[color:var(--ink)]/25 underline-offset-[5px] transition-colors group-hover:decoration-[color:var(--ink)]/50">
                  {site.email}
                </span>
              </a>

              <div>
                <p className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--ink)]/70">
                  {site.social.instagram}
                </p>
                <ul
                  className="mt-3 flex flex-wrap gap-x-5 gap-y-2"
                  aria-label="Social profiles"
                >
                  {menuSocialLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${footerLink} text-[0.875rem]`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-sans max-w-xs text-sm leading-relaxed text-[color:var(--ink)]/78">
                {site.worldwide}.
              </p>

              <Link
                href="/work-with-us"
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[color:var(--ink)] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--brand-yellow)] transition hover:opacity-92 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ink)]"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--ink)]/12">
        <div className="site-shell px-6 py-8 text-center">
          <p className="font-sans text-xs text-[color:var(--ink)]/62">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
