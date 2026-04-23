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

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
        {open ? (
          <>
            <motion.div
              key="menu-backdrop"
              className="fixed inset-0 z-40 bg-[color:var(--ink)]/50 backdrop-blur-[3px]"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0.15 : 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              key="menu-panel"
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="fixed inset-y-0 right-0 z-50 flex h-[100dvh] w-full max-w-[min(100vw,26rem)] flex-col bg-[color:var(--brand-white)] shadow-[-24px_0_80px_-20px_rgba(26,22,18,0.35)]"
              initial={
                reduceMotion ? { opacity: 0 } : { x: "100%", opacity: 1 }
              }
              animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : {
                      x: "100%",
                      transition: {
                        duration: 0.32,
                        ease: [0.32, 0, 0.67, 0],
                      },
                    }
              }
              transition={
                reduceMotion
                  ? { duration: 0.2 }
                  : {
                      type: "spring",
                      damping: 34,
                      stiffness: 400,
                      mass: 0.82,
                    }
              }
            >
              <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[color:var(--hairline)] px-5 py-4 sm:px-6">
                <SiteLogo variant="mobile" />
                <button
                  type="button"
                  className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-[color:var(--hairline)] bg-[color:var(--brand-white)] text-[color:var(--ink)] transition hover:bg-[color:var(--surface-subtle)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-yellow)]"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    className="h-5 w-5"
                    aria-hidden
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-8 sm:px-8">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--ink-muted)]">
                  Menu
                </p>

                <motion.nav
                  className="mt-8 flex flex-col gap-1"
                  aria-label="Overlay menu"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: reduceMotion ? 0 : 0.052,
                        delayChildren: reduceMotion ? 0 : 0.06,
                      },
                    },
                  }}
                >
                  {mainNav.map((item) => {
                    const isCta = item.href === headerCta.href;
                    const active = navHrefActive(pathname, item.href);
                    return (
                      <motion.div
                        key={item.href}
                        variants={{
                          hidden: reduceMotion
                            ? { opacity: 0 }
                            : { opacity: 0, x: 28 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: reduceMotion
                              ? { duration: 0.18 }
                              : {
                                  type: "spring",
                                  damping: 26,
                                  stiffness: 340,
                                  mass: 0.55,
                                },
                          },
                        }}
                      >
                        <Link
                          href={item.href}
                          className={
                            isCta
                              ? "mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-[color:var(--brand-yellow)] px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--ink)] transition hover:brightness-[0.97]"
                              : `font-title block rounded-xl px-4 py-3.5 text-[1.625rem] leading-snug tracking-tight transition-colors sm:text-[1.85rem] ${
                                  active
                                    ? "bg-[color:var(--surface-subtle)] text-[color:var(--ink)]"
                                    : "text-[color:var(--ink)]/88 hover:bg-[color:var(--surface-subtle)] hover:text-[color:var(--ink)]"
                                }`
                          }
                          onClick={() => setOpen(false)}
                        >
                          {isCta ? "Work With Us" : item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.nav>

                <motion.div
                  className="mt-auto border-t border-[color:var(--hairline)] pt-10"
                  initial={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: reduceMotion ? 0 : 0.28,
                    duration: reduceMotion ? 0.15 : 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
                    Follow
                  </p>
                  <a
                    href={site.social.instagramUrl}
                    className="font-sans mt-3 inline-flex cursor-pointer items-center gap-2 text-[0.9375rem] font-semibold text-[color:var(--ink)] underline decoration-[color:var(--brand-yellow)] decoration-2 underline-offset-[5px] transition hover:decoration-[color:var(--ink)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.social.instagram}
                  </a>
                </motion.div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
