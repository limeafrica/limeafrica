"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SiteLogo } from "@/components/site/SiteLogo";
import { StaggeredMenu, type StaggeredMenuHandle } from "@/components/ui/StaggeredMenu";
import {
  headerCta,
  headerNavLinks,
  mainNav,
  menuSocialLinks,
  site,
} from "@/content/site";

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
  const reduceMotion = useReducedMotion();
  const headerRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const staggeredMenuRef = useRef<StaggeredMenuHandle>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const [staggeredOpen, setStaggeredOpen] = useState(false);
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

  /** Lock page scroll only on narrow viewports so hiding the scrollbar never shifts desktop layout (menu button). */
  useEffect(() => {
    function syncBodyScrollLock() {
      if (!staggeredOpen) {
        document.body.style.overflow = "";
        return;
      }
      const narrow = window.matchMedia(`(max-width: ${INLINE_NAV_MIN_PX - 1}px)`).matches;
      document.body.style.overflow = narrow ? "hidden" : "";
    }

    syncBodyScrollLock();
    window.addEventListener("resize", syncBodyScrollLock);
    return () => {
      window.removeEventListener("resize", syncBodyScrollLock);
      document.body.style.overflow = "";
    };
  }, [staggeredOpen]);

  const ctaActive = navHrefActive(pathname, headerCta.href);

  const staggeredMenuItems = mainNav.map((item) => ({
    label: item.label,
    ariaLabel: `Go to ${item.label}`,
    link: item.href,
  }));

  const staggeredSocialItems = [...menuSocialLinks];

  const showIndicator = indicator.width > 0;

  return (
    <>
      <header
        ref={headerRef}
        className="relative sticky top-0 z-40 h-14 border-b border-[color:var(--hairline)] bg-[color:var(--nav-bar-bg)]"
        id="navigation-2"
      >
        <div className="relative z-10 flex h-full w-full items-center pl-6 pr-0 lg:pl-8">
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

          {/* Reserve the same width as the fixed menu control so centered nav stays aligned */}
          <div
            className="ml-auto shrink-0 min-h-14 min-w-14 sm:min-w-[4.25rem]"
            aria-hidden
          />
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

      {/* Above navbar (z-40): dim layer only while open — separate from the sliding panel */}
      {staggeredOpen ? (
        <div
          className="fixed inset-0 z-[44] bg-[color:var(--ink)]/60 backdrop-blur-[2px]"
          aria-hidden
        />
      ) : null}

      {/* Sliding panel + stripes — above navbar & backdrop; pointer-events-none wrapper passes clicks except on the panel */}
      <div id="staggered-mobile-nav" className="pointer-events-none fixed inset-0 z-[45]">
        <StaggeredMenu
          ref={staggeredMenuRef}
          isFixed
          hideHeader
          externalToggleRef={menuToggleRef}
          position="right"
          items={staggeredMenuItems}
          socialItems={staggeredSocialItems}
          displaySocials
          displayItemNumbering
          colors={["#ebbd45", "#1a1612"]}
          accentColor="#ebbd45"
          menuButtonColor="#1a1612"
          openMenuButtonColor="#1a1612"
          changeMenuColorOnOpen={false}
          onMenuOpen={() => setStaggeredOpen(true)}
          onMenuClose={() => setStaggeredOpen(false)}
        />
      </div>

      {/* Separate layer above panel + backdrop so open/close never sits under the drawer */}
      <button
        id="nav-menu-toggle"
        ref={menuToggleRef}
        type="button"
        className="fixed top-0 right-0 z-[60] flex h-14 min-h-14 min-w-14 touch-manipulation items-center justify-center bg-[color:var(--ink)] px-5 text-[color:var(--brand-white)] sm:min-w-[4.25rem]"
        onClick={() => staggeredMenuRef.current?.toggle()}
        aria-expanded={staggeredOpen}
        aria-controls="staggered-menu-panel"
        aria-label={staggeredOpen ? "Close menu" : "Open menu"}
      >
        {staggeredOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-6 w-6 sm:h-7 sm:w-7"
            aria-hidden
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-6 w-6 fill-current sm:h-7 sm:w-7"
            aria-hidden
          >
            <path d="M80 304h352v16H80zM80 248h352v16H80zM80 192h352v16H80z" />
          </svg>
        )}
      </button>
    </>
  );
}
