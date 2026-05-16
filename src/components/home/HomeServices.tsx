"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import {
  collageObjectPositionClass,
  consultingBullets,
  consultingIntro,
  consultingSectionCollage,
  digitalMarketingIntro,
  digitalMarketingItems,
  digitalSectionCollage,
  resourceLinks,
  resourcesIntro,
  resourcesSectionCollage,
  type CollageObjectPosition,
} from "@/content/services";
import { withoutHyphens } from "@/lib/displayCopy";

const DECK_STICKY_STEP_PX = 18;
const DECK_SCALE_STEP = 0.1;

/** `SiteHeader` h-14 (3.5rem) + 1.25rem gap. Must be a static string for Tailwind to emit it. */
const STICKY_TOP =
  "top-[calc(3.5rem+1.25rem+var(--deck-sticky-nudge,0px))]";

const PLATE_HEIGHT =
  "h-[clamp(44rem,calc(100svh-4rem),52rem)] lg:h-[clamp(34rem,calc(100vh-5.5rem),38rem)]";
const CARD_SLOT_MIN_HEIGHT =
  "min-h-[clamp(46.5rem,calc(100svh-1.5rem),54.5rem)] lg:min-h-[clamp(36.5rem,calc(100vh-3rem),40.5rem)]";

/** Deck-only width — not `site-shell` (that forces `--layout-max` 1280px). */
const DECK_CARD_MAX_W = "max-w-[1120px]";
const DECK_CARD_SHELL = `mx-auto w-full ${DECK_CARD_MAX_W} px-4 sm:px-6 lg:px-0`;

type PlateVariant = "ink" | "sand" | "paper";

type DeckBlock = {
  title: string;
  description: string;
  bullets?: readonly string[];
  links?: readonly { label: string; href: string }[];
  image: string;
  imageObjectPosition?: CollageObjectPosition;
  imageAlt: string;
  plateVariant: PlateVariant;
  href?: string;
  ctaLabel?: string;
};

const deckBlocks: DeckBlock[] = [
  {
    title: "Digital Marketing Services",
    description: digitalMarketingIntro,
    bullets: digitalMarketingItems,
    image: digitalSectionCollage.foreground,
    imageObjectPosition: digitalSectionCollage.objectPosition,
    imageAlt: "Digital marketing and content creation",
    plateVariant: "ink",
    href: "/services#digital-marketing",
    ctaLabel: "Explore digital marketing",
  },
  {
    title: "Consulting",
    description: consultingIntro,
    bullets: consultingBullets,
    image: consultingSectionCollage.foreground,
    imageObjectPosition: consultingSectionCollage.objectPosition,
    imageAlt: "Brand strategy consulting session",
    plateVariant: "sand",
    href: "/services#consulting",
    ctaLabel: "Learn about consulting",
  },
  {
    title: "Resources",
    description: resourcesIntro,
    links: resourceLinks,
    image: resourcesSectionCollage.foreground,
    imageObjectPosition: resourcesSectionCollage.objectPosition,
    imageAlt: "Marketing templates and guides",
    plateVariant: "paper",
    href: "/resources",
    ctaLabel: "Browse resources",
  },
];

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}

function deckCardVars(index: number): CSSProperties {
  return {
    "--deck-sticky-nudge": `${index * DECK_STICKY_STEP_PX}px`,
    "--deck-scale": "1",
    "--deck-scrim-opacity": "0",
    zIndex: index + 1,
  } as CSSProperties;
}

function plateClasses(variant: PlateVariant) {
  switch (variant) {
    case "ink":
      return {
        plate: "bg-[color:var(--ink)] text-[color:var(--brand-white)]",
        panel: "text-[color:var(--brand-white)]",
        title: "text-[color:var(--brand-white)]",
        body: "text-white/75",
        listBorder: "border-white/10",
        bullet: "text-sm leading-snug text-white/85",
        bulletDot: "bg-[color:var(--brand-yellow)]",
        button:
          "border-white/25 bg-transparent text-[color:var(--brand-white)] hover:border-white hover:bg-white/10",
      };
    case "sand":
      return {
        plate: "bg-[color:var(--surface-light-brown)] text-[color:var(--ink)]",
        panel: "text-[color:var(--ink)]",
        title: "text-[color:var(--ink)]",
        body: "text-[color:var(--ink-muted)]",
        listBorder: "border-[color:var(--ink)]/10",
        bullet: "text-sm leading-snug text-[color:var(--ink-muted)]",
        bulletDot: "bg-[color:var(--brand-white)]",
        button:
          "border-[color:var(--ink)]/25 bg-transparent text-[color:var(--ink)] hover:border-[color:var(--ink)] hover:bg-[color-mix(in_srgb,var(--ink)_14%,var(--surface-light-brown))]",
      };
    default:
      return {
        plate:
          "bg-[color:var(--brand-white)] text-[color:var(--ink)]",
        panel: "text-[color:var(--ink)]",
        title: "text-[color:var(--ink)]",
        body: "text-[color:var(--ink-muted)]",
        listBorder: "border-[color:var(--ink)]/10",
        bullet: "text-sm leading-snug text-[color:var(--ink-muted)]",
        bulletDot: "bg-[color:var(--brand-yellow)]",
        button:
          "border-[color:var(--ink)]/25 bg-transparent text-[color:var(--ink)] hover:border-[color:var(--ink)] hover:bg-[color:var(--surface-subtle)]",
      };
  }
}

function DeckBulletList({
  items,
  listClassName,
  itemClassName,
  dotClassName,
}: {
  items: readonly string[];
  listClassName: string;
  itemClassName: string;
  dotClassName: string;
}) {
  return (
    <ul className={listClassName}>
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-2.5 ${itemClassName}`}>
          <span
            className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotClassName}`}
            aria-hidden
          />
          <span>{withoutHyphens(item)}</span>
        </li>
      ))}
    </ul>
  );
}

function LayeredCard({
  block,
  priority,
}: {
  block: DeckBlock;
  priority?: boolean;
}) {
  const tone = plateClasses(block.plateVariant);

  return (
    <div
      data-deck-plate
      className={`relative mx-auto w-full ${DECK_CARD_MAX_W} overflow-hidden rounded-2xl lg:rounded-3xl ${PLATE_HEIGHT} ${tone.plate}`}
    >
      <div
        className="deck-card-scrim pointer-events-none absolute inset-0 z-10"
        aria-hidden
      />
      <div className="relative z-[1] flex h-full flex-col lg:grid lg:grid-cols-2">
        <div
          className={`order-1 flex shrink-0 flex-col justify-start px-6 py-7 sm:px-8 sm:py-8 lg:order-1 lg:justify-center lg:px-12 lg:py-12 xl:px-14 ${tone.panel}`}
        >
          <h3
            className={`font-title text-[44px] font-bold leading-[1.12] tracking-tight sm:text-[48px] lg:text-[52px] ${tone.title}`}
          >
            {withoutHyphens(block.title)}
          </h3>
          <p
            className={`mt-4 text-sm leading-relaxed sm:text-base lg:mt-5 lg:text-base ${tone.body}`}
          >
            {withoutHyphens(block.description)}
          </p>

          {block.bullets ? (
            <DeckBulletList
              items={block.bullets}
              listClassName={`mt-5 space-y-2 border-t pt-5 lg:mt-6 lg:space-y-3 lg:pt-6 ${tone.listBorder}`}
              itemClassName={tone.bullet}
              dotClassName={tone.bulletDot}
            />
          ) : null}

          {block.links ? (
            <DeckBulletList
              items={block.links.map((link) => link.label)}
              listClassName={`mt-5 space-y-2 border-t pt-5 lg:mt-6 lg:space-y-3 lg:pt-6 ${tone.listBorder}`}
              itemClassName={tone.bullet}
              dotClassName={tone.bulletDot}
            />
          ) : null}

          {block.href ? (
            <div className="mt-6 lg:mt-8">
              <Link
                href={block.href}
                className={`inline-flex items-center justify-center border px-8 py-3.5 text-sm font-semibold tracking-tight transition-colors ${tone.button}`}
              >
                {withoutHyphens(block.ctaLabel ?? "Learn more")}
              </Link>
            </div>
          ) : null}
        </div>

        <div className="relative order-2 min-h-0 w-full flex-1 lg:order-2 lg:h-full">
          <Image
            src={block.image}
            alt={block.imageAlt}
            fill
            unoptimized
            priority={priority}
            sizes="(max-width: 1023px) 100vw, 50vw"
            className={`object-cover ${collageObjectPositionClass(block.imageObjectPosition)}`}
          />
        </div>
      </div>
    </div>
  );
}

export function HomeServices() {
  const deckRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateCards = () => {
      frame = 0;
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      if (reduceMotion.matches) {
        cards.forEach((card) => {
          card.style.setProperty("--deck-scale", "1");
          card.style.setProperty("--deck-scrim-opacity", "0");
        });
        return;
      }

      const deckTop = deck.getBoundingClientRect().top;

      const incomingProgress = cards.map((card) => {
        const plate = card.querySelector<HTMLElement>("[data-deck-plate]");
        if (!plate) return 0;
        const stickyTop = Number.parseFloat(getComputedStyle(card).top);
        const plateHeight = plate.getBoundingClientRect().height;
        const naturalCardTop = deckTop + card.offsetTop;
        return clamp01(
          (stickyTop + plateHeight - naturalCardTop) / plateHeight,
        );
      });

      cards.forEach((card, index) => {
        const depth = incomingProgress
          .slice(index + 1)
          .reduce((sum, progress) => sum + progress, 0);
        const maxDepth = cards.length - 1 - index;
        const scale = 1 - Math.min(depth, maxDepth) * DECK_SCALE_STEP;
        card.style.setProperty("--deck-scale", scale.toFixed(4));
        card.style.setProperty(
          "--deck-scrim-opacity",
          Math.min(depth, 1).toFixed(4),
        );
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateCards);
    };

    updateCards();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reduceMotion.addEventListener("change", requestUpdate);
    const ro = new ResizeObserver(requestUpdate);
    ro.observe(deck);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduceMotion.removeEventListener("change", requestUpdate);
    };
  }, []);

  return (
    <section
      id="our-services"
      className="relative bg-[color:var(--surface-subtle)] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24"
    >
      <Container>
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-muted)]">
            Our Services
          </p>
          <h2 className="font-title mt-5 text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--ink)]">
            What&apos;s In Our Bag?
          </h2>
        </header>
      </Container>

      <div
        ref={deckRef}
        className="deck-stack deck-stack--exit-lift relative isolate mt-12 pb-2 sm:mt-14 lg:mt-16 lg:pb-5"
      >
        {deckBlocks.map((block, index) => (
          <div
            key={block.title}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`deck-card relative sticky ${STICKY_TOP} ${CARD_SLOT_MIN_HEIGHT}`}
            style={deckCardVars(index)}
          >
            <div className={DECK_CARD_SHELL}>
              <LayeredCard block={block} priority={index === 0} />
            </div>
          </div>
        ))}
      </div>

      <Container className="mt-12 text-center sm:mt-14">
        <Link
          href="/services"
          className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ink)]"
        >
          <span className="font-sans text-xl font-light leading-none" aria-hidden>
            →
          </span>
          <span>View full Services</span>
        </Link>
      </Container>
    </section>
  );
}