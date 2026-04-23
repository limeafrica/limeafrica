"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SiteLogo } from "@/components/site/SiteLogo";
import { headerCta, headerNavLinks, mainNav, site } from "@/content/site";

/**
 * Centered inline nav only at this width+ (single row with `flex-nowrap`).
 * Keep in sync with `min-[1300px]` classes below.
 */
const INLINE_NAV_MIN_PX = 1300;

function navHrefActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function inlineNavClasses(active: boolean) {
  const tone = active
    ? "text-[color:var(--ink)]"
    : "text-[color:var(--ink)]/78";
  return `${tone} text-[10px] font-bold uppercase tracking-[0.14em] transition-colors hover:text-[color:var(--ink)] xl:text-[11px]`;
}

const NAV_LINK_HREFS = [
  ...headerNavLinks.map((i) => i.href),
  headerCta.href,
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const headerRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const setLinkRef = useCallback((href: string) => {
    return (el: HTMLAnchorElement | null) => {
      if (el) linkRefs.current.set(href, el);
      else linkRefs.current.delete(href);
    };
  }, []);

  useLayoutEffect(() => {
    function measure() {
      const header = headerRef.current;
      if (!header) return;

      if (
        typeof window !== "undefined" &&
        !window.matchMedia(`(min-width: ${INLINE_NAV_MIN_PX}px)`).matches
      ) {
        setIndicator({ left: 0, width: 0 });
        return;
      }

      const activeHref = NAV_LINK_HREFS.find((h) => navHrefActive(pathname, h));
      if (!activeHref) {
        setIndicator({ left: 0, width: 0 });
        return;
      }

      const link = linkRefs.current.get(activeHref);
      if (!link) return;

      const hr = header.getBoundingClientRect();
      const lr = link.getBoundingClientRect();
      /** Narrower bar (~55% of label), centered under the link */
      const barW = lr.width * 0.55;
      const barLeft = lr.left - hr.left + (lr.width - barW) / 2;
      setIndicator({
        left: barLeft,
        width: barW,
      });
    }

    measure();
    requestAnimationFrame(measure);

    const header = headerRef.current;
    if (!header) return;

    const ro = new ResizeObserver(() => measure());
    ro.observe(header);

    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    function onResize() {
      if (typeof window === "undefined") return;
      if (
        window.matchMedia(`(min-width: ${INLINE_NAV_MIN_PX}px)`).matches
      ) {
        setOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const ctaActive = navHrefActive(pathname, headerCta.href);

  const showIndicator = indicator.width > 0;

  return (
    <>
      <header
        ref={headerRef}
        className="relative sticky top-0 z-40 h-14 border-b border-[color:var(--hairline)] bg-[color:var(--nav-bar-bg)]"
        id="navigation-2"
      >
        <div className="relative z-10 flex h-full w-full items-center pl-4 pr-0 sm:pl-6 lg:pl-8">
          <div className="relative flex h-full min-h-14 shrink-0 translate-y-0.5 items-center">
            <SiteLogo variant="header" />
          </div>

          <nav
            className="absolute left-1/2 top-1/2 hidden max-w-[min(100vw-13rem,52rem)] -translate-x-1/2 -translate-y-1/2 min-[1300px]:block"
            aria-label="Primary"
          >
            <ul className="flex flex-nowrap items-center justify-center gap-x-3 xl:gap-x-6 2xl:gap-x-10">
              {headerNavLinks.map((item) => {
                const active = navHrefActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      ref={setLinkRef(item.href)}
                      href={item.href}
                      className={`relative inline-block whitespace-nowrap pb-1 ${inlineNavClasses(active)}`}
                    >
                      {item.label.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
              <li className="shrink-0 pl-1 xl:pl-3 2xl:pl-4">
                <Link
                  ref={setLinkRef(headerCta.href)}
                  href={headerCta.href}
                  className={`relative inline-flex rounded-full px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--ink)] transition xl:px-5 xl:py-2.5 xl:text-[11px] ${ctaActive ? "bg-[color:var(--brand-yellow)]" : "bg-[color:var(--brand-yellow)] hover:brightness-95"}`}
                >
                  WORK WITH US
                </Link>
              </li>
            </ul>
          </nav>

          <div className="relative ml-auto flex shrink-0 items-stretch self-stretch">
            <button
              type="button"
              className="flex h-full min-h-14 min-w-14 touch-manipulation items-center justify-center bg-[color:var(--ink)] px-5 text-[color:var(--brand-white)] sm:min-w-[4.25rem]"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-6 w-6 fill-current sm:h-7 sm:w-7"
                aria-hidden
              >
                <path d="M80 304h352v16H80zM80 248h352v16H80zM80 192h352v16H80z" />
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          className="pointer-events-none absolute bottom-0 z-20 hidden h-[2px] bg-[color:var(--brand-yellow)] min-[1300px]:block"
          aria-hidden
          initial={false}
          animate={{
            left: indicator.left,
            width: indicator.width,
            opacity: showIndicator ? 1 : 0,
          }}
          transition={
            reduceMotion
              ? { duration: 0.2, ease: "easeInOut" }
              : {
                  type: "spring",
                  stiffness: 420,
                  damping: 32,
                  mass: 0.28,
                }
          }
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-50 flex flex-col bg-[color:var(--nav-bar-bg)]"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative flex h-14 w-full items-center border-b border-[color:var(--hairline)] pl-4 pr-0 sm:pl-6 lg:pl-8">
              <SiteLogo variant="mobile" />
              <button
                type="button"
                className="ml-auto flex h-14 min-w-14 shrink-0 items-center justify-center bg-[color:var(--ink)] px-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-white)] sm:min-w-[4.25rem]"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <div className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto overscroll-contain px-6 pb-[max(6rem,env(safe-area-inset-bottom))] pt-4 sm:px-8">
              <p className="font-title mb-10 text-4xl text-[color:var(--ink)]/35 sm:text-5xl">
                navigate
              </p>
              <nav className="flex flex-col gap-6" aria-label="Overlay menu">
                {mainNav.map((item, i) => {
                  const isCta = item.href === headerCta.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduceMotion ? 0 : 0.05 * i }}
                    >
                      <Link
                        href={item.href}
                        className={
                          isCta
                            ? "inline-flex rounded-full bg-[color:var(--brand-yellow)] px-5 py-3 text-center text-[13px] font-bold uppercase tracking-[0.14em] text-[color:var(--ink)]"
                            : "font-title block text-3xl tracking-tight text-[color:var(--ink)] sm:text-4xl"
                        }
                        onClick={() => setOpen(false)}
                      >
                        {isCta ? "WORK WITH US" : item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="mt-16 text-sm text-[color:var(--ink-muted)]">
                <p className="font-semibold uppercase tracking-[0.2em]">
                  Follow
                </p>
                <a
                  href={site.social.instagramUrl}
                  className="mt-2 inline-block font-medium text-[color:var(--ink)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.social.instagram}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
