/** Uniform sticky-slot height below `SiteHeader` (h-14). */
export const SERVICES_STICKY_SECTION_MIN_H =
  "lg:min-h-[calc(100svh-3.5rem)]";

/** Shared shell for editorial service sections in the sticky stack. */
export const SERVICES_EDITORIAL_SECTION_SHELL =
  `scroll-mt-28 pt-0 pb-20 sm:pb-28 ${SERVICES_STICKY_SECTION_MIN_H} lg:flex lg:flex-col lg:justify-center lg:py-24 xl:py-28`;

/** Shared shell for tabbed service sections (rate card, bundles). */
export const SERVICES_TABBED_SECTION_SHELL =
  `scroll-mt-28 ${SERVICES_STICKY_SECTION_MIN_H} lg:flex lg:flex-col lg:justify-center py-20 sm:py-28 lg:py-32`;
