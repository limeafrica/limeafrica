import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { withoutHyphens } from "@/lib/displayCopy";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** One viewport below the sticky header (3.5rem), content vertically centered. */
  fullHeight?: boolean;
  /** Full-bleed photo; dark scrim + white type (for legibility on full-color imagery). */
  backgroundImage?: string;
  /** Pin photo to the viewport while the page scrolls (content below should sit above with `relative z-10`). */
  fixedBackground?: boolean;
  /** Solid `--ink` band + light type (no photo). */
  variant?: "default" | "dark";
};

export function PageIntro({
  eyebrow,
  title,
  subtitle,
  fullHeight = false,
  backgroundImage,
  fixedBackground = false,
  variant = "default",
}: PageIntroProps) {
  const onPhoto = Boolean(backgroundImage);
  const solidDark = variant === "dark" && !onPhoto;
  const lightOnDark = onPhoto || solidDark;
  const fixedLayerClass =
    "pointer-events-none fixed inset-x-0 top-14 z-0 h-[calc(100dvh-3.5rem)]";

  return (
    <div
      className={
        "relative z-10 overflow-hidden " +
        (onPhoto || solidDark
          ? fixedBackground
            ? "bg-transparent"
            : "bg-[color:var(--ink)]"
          : "bg-[color:var(--paper)]") +
        " " +
        (fullHeight
          ? "flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center py-16 sm:py-24"
          : "py-16 sm:py-24")
      }
    >
      {backgroundImage ? (
        fixedBackground ? (
          <>
            <div className={fixedLayerClass}>
              <Image
                src={backgroundImage}
                alt=""
                fill
                priority={fullHeight}
                sizes="100vw"
                unoptimized
                className="object-cover object-bottom"
              />
            </div>
            <div className={`${fixedLayerClass} bg-black/38`} aria-hidden />
          </>
        ) : (
          <>
            <div className="pointer-events-none absolute inset-0">
              <Image
                src={backgroundImage}
                alt=""
                fill
                priority={fullHeight}
                sizes="100vw"
                unoptimized
                className="object-cover object-center"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-black/38"
              aria-hidden
            />
          </>
        )
      ) : null}
      <Container className="relative z-10">
        <Reveal>
          {eyebrow ? (
            <p
              className={
                "text-[11px] font-semibold uppercase tracking-[0.25em] " +
                (solidDark
                  ? "text-[color:var(--brand-yellow)]"
                  : lightOnDark
                    ? "text-white/80"
                    : "text-[color:var(--ink-muted)]")
              }
            >
              {withoutHyphens(eyebrow)}
            </p>
          ) : null}
          <h1
            className={
              "font-title mt-4 max-w-4xl text-4xl tracking-tight sm:text-6xl " +
              (lightOnDark ? "text-white" : "text-[color:var(--ink)]")
            }
          >
            {withoutHyphens(title)}
          </h1>
          {subtitle ? (
            <p
              className={
                "font-sans mt-8 max-w-2xl text-base leading-relaxed " +
                (lightOnDark ? "text-white/88" : "text-[color:var(--ink-muted)]")
              }
            >
              {withoutHyphens(subtitle)}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </div>
  );
}
