import type { Transition, Variants } from "framer-motion";

export const CAROUSEL_SLIDE_EASE: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

/** Same horizontal slide + fade as the team carousel; respects reduced motion. */
export function getCarouselSlideTransition(reduceMotion: boolean): Transition {
  if (reduceMotion) return { duration: 0.15, ease: "easeOut" };
  return { duration: 0.38, ease: CAROUSEL_SLIDE_EASE };
}

export function getCarouselSlideVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      enter: { opacity: 0 },
      center: { opacity: 1 },
      exit: { opacity: 0 },
    };
  }
  return {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir >= 0 ? "18%" : "-18%",
    }),
    center: {
      opacity: 1,
      x: "0%",
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir >= 0 ? "-14%" : "14%",
    }),
  };
}
