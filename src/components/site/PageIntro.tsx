import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** One viewport below the sticky header (3.5rem), content vertically centered. */
  fullHeight?: boolean;
  /** Full-bleed photo; dark scrim + white type (for legibility on full-color imagery). */
  backgroundImage?: string;
};

export function PageIntro({
  eyebrow,
  title,
  subtitle,
  fullHeight = false,
  backgroundImage,
}: PageIntroProps) {
  const onPhoto = Boolean(backgroundImage);

  return (
    <div
      className={
        "relative overflow-hidden border-b " +
        (onPhoto
          ? "border-white/15 bg-[color:var(--ink)]"
          : "border-[color:var(--hairline)] bg-[color:var(--paper)]") +
        " " +
        (fullHeight
          ? "flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center py-16 sm:py-24"
          : "py-16 sm:py-24")
      }
    >
      {backgroundImage ? (
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
      ) : null}
      <Container className="relative z-10">
        <Reveal>
          {eyebrow ? (
            <p
              className={
                "text-[11px] font-semibold uppercase tracking-[0.25em] " +
                (onPhoto ? "text-white/80" : "text-[color:var(--ink-muted)]")
              }
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={
              "font-title mt-4 max-w-4xl text-4xl tracking-tight sm:text-6xl " +
              (onPhoto ? "text-white" : "text-[color:var(--ink)]")
            }
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              className={
                "font-sans mt-8 max-w-2xl text-base leading-relaxed " +
                (onPhoto ? "text-white/88" : "text-[color:var(--ink-muted)]")
              }
            >
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </div>
  );
}
