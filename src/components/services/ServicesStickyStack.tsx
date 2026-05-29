"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Children,
  createRef,
  isValidElement,
  useMemo,
  type RefObject,
  type ReactNode,
} from "react";

/** Matches `SiteHeader` h-14 — sections stick below the nav (desktop only). */
const STICKY_TOP = "lg:sticky lg:top-14";

/** Light darken as the next section scrolls in (guide default is 0.5). */
const OVERLAY_MAX_OPACITY = 0.28;

function childKey(child: ReactNode, index: number) {
  if (isValidElement(child) && child.key != null) return String(child.key);
  if (isValidElement(child)) {
    const id = (child.props as { id?: string }).id;
    if (typeof id === "string") return id;
  }
  return `services-sticky-${index}`;
}

function SectionOverlay({
  nextSectionRef,
}: {
  nextSectionRef: RefObject<HTMLElement | null>;
}) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: nextSectionRef,
    offset: ["start 90%", "start 50%"],
  });
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0, OVERLAY_MAX_OPACITY],
  );

  if (reduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-20 hidden bg-black lg:block"
      style={{ opacity: overlayOpacity }}
      aria-hidden
    />
  );
}

/**
 * Sticky section stack with a light fade overlay on each section as the next
 * scrolls over it (desktop only).
 */
export function ServicesStickyStack({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);
  const sectionRefs = useMemo(
    () => items.map(() => createRef<HTMLDivElement>()),
    [items.length],
  );

  return (
    <div className="relative isolate">
      {items.map((child, index) => (
        <div
          key={childKey(child, index)}
          ref={sectionRefs[index]}
          className={`${STICKY_TOP} relative`}
          style={{ zIndex: 10 + index }}
        >
          {index < items.length - 1 ? (
            <SectionOverlay nextSectionRef={sectionRefs[index + 1]!} />
          ) : null}
          <div className="relative z-10">{child}</div>
        </div>
      ))}
    </div>
  );
}
