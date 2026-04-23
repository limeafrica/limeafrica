import Link from "next/link";
import { SiteLogo } from "@/components/site/SiteLogo";
import { footerExplore, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--hairline)] bg-[color:var(--brand-sand)]/40">
      <div className="site-shell grid gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <SiteLogo variant="footer" />
          <p className="font-title mt-10 text-3xl tracking-tight text-[color:var(--ink)]">
            Explore more
          </p>
          <ul className="mt-8 space-y-3 text-[11px] font-semibold uppercase tracking-[0.2em]">
            {footerExplore.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[color:var(--ink-muted)] transition-colors hover:text-[color:var(--ink)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-10 lg:items-end lg:text-right">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--ink-muted)]">
              Est <span className="font-medium text-[color:var(--ink)]">{site.established}</span>.
            </p>
            <p className="font-sans mt-3 max-w-xs text-base leading-relaxed text-[color:var(--ink)] lg:ml-auto">
              Based in <em>{site.location}</em>,<br />
              serving clients <em>{site.worldwide}</em>.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
              Follow us
            </p>
            <a
              href={site.social.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block font-medium text-[color:var(--ink)] underline decoration-[color:var(--brand-yellow)] decoration-2 underline-offset-4 hover:decoration-[color:var(--ink)]"
            >
              {site.social.instagram}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--hairline)] bg-[color:var(--brand-white)]">
        <div className="site-shell px-4 py-8 sm:px-6">
          <p className="text-center text-xs text-[color:var(--ink-muted)]">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
