import Link from "next/link";
import { SiteLogo } from "@/components/site/SiteLogo";
import { mainNav, site } from "@/content/site";

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

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

      <div className="site-shell px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
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

              <a
                href={site.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 ${footerLink}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--ink)]/8 ring-1 ring-[color:var(--ink)]/10 transition-colors group-hover:bg-[color:var(--ink)]/12">
                  <IconInstagram className="h-[18px] w-[18px] text-[color:var(--ink)]" />
                </span>
                <span className="leading-snug">{site.social.instagram}</span>
              </a>

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
        <div className="site-shell px-4 py-8 text-center sm:px-6">
          <p className="font-sans text-xs text-[color:var(--ink)]/62">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
