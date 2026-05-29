import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { brandLogo } from "@/content/site";
import {
  communityWhy,
  type CommunityOfferPlate,
  type CommunityOfferTile,
} from "@/content/community";
import { withoutHyphens } from "@/lib/displayCopy";

const SECTION_TITLE_ID = "community-what-you-get-title";

const gridCell =
  "community-offer-grid__cell relative flex h-full min-h-0 w-full flex-col justify-end overflow-hidden p-5 outline-none sm:p-6 lg:p-8";

export function CommunityWhySection() {
  const { eyebrow, title, tiles } = communityWhy;

  return (
    <section
      id="why-tribe"
      aria-labelledby={SECTION_TITLE_ID}
      className="relative scroll-mt-28 overflow-hidden border-b border-[color:var(--hairline)] bg-gradient-to-b from-[color:var(--brand-white)] to-[color:var(--surface-subtle)]"
    >
      <SectionPattern />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-28">
        <div className="shadow-[0_28px_64px_-28px_rgba(26,22,18,0.35)]">
          <div className="community-offer-grid">
            <IntroPanel eyebrow={eyebrow} title={title} titleId={SECTION_TITLE_ID} />
            {[...tiles]
              .sort((a, b) => a.visualOrder - b.visualOrder)
              .map((tile) => (
                <OfferTileCard key={tile.slug} tile={tile} />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SectionPattern() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 right-0 z-0 h-[min(620px,100vw)] w-[min(760px,160vw)] opacity-[0.05] sm:h-[min(720px,88vw)] sm:w-[min(880px,144vw)] lg:h-[min(800px,80vw)] lg:w-[min(1000px,96vw)]"
      aria-hidden
    >
      <Image
        src={brandLogo.src}
        alt=""
        fill
        unoptimized
        className="object-contain object-bottom object-right"
        sizes="(max-width: 1024px) 160vw, 1000px"
      />
    </div>
  );
}

function IntroPanel({
  eyebrow,
  title,
  titleId,
}: {
  eyebrow: string;
  title: string;
  titleId: string;
}) {
  return (
    <div className="h-full min-h-0" style={{ gridArea: "intro" }}>
      <Reveal className="h-full">
        <div className={`${gridCell} justify-center bg-[color:var(--ink)]`}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-yellow)] sm:text-xs">
            {withoutHyphens(eyebrow)}
          </p>
          <h2
            id={titleId}
            className="font-title mt-3 max-w-md text-[clamp(1.45rem,2.9vw,2.2rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--brand-white)] lg:max-w-xl"
          >
            {withoutHyphens(title)}
          </h2>
        </div>
      </Reveal>
    </div>
  );
}

function watermarkClasses(gridArea: CommunityOfferTile["gridArea"]) {
  switch (gridArea) {
    case "c01":
      return "right-3 top-3 text-[clamp(2.75rem,9vw,5rem)]";
    case "c04":
    case "c05":
      return "right-2 top-2 text-[clamp(2.25rem,6.5vw,3.5rem)]";
    case "c06":
      return "right-2 top-2 text-[clamp(2rem,5.5vw,2.85rem)]";
    default:
      return "right-2 top-2 text-[clamp(2.35rem,7vw,3.65rem)]";
  }
}

function OfferTileCard({ tile }: { tile: CommunityOfferTile }) {
  const n = String(tile.visualOrder).padStart(2, "0");
  const plate = plateClasses(tile.plate);
  const isFirst = tile.visualOrder === 1;

  return (
    <div className="h-full min-h-0" style={{ gridArea: tile.gridArea }}>
      <Reveal delay={0.04 * tile.visualOrder} className="h-full">
        <article
        id={tile.slug}
        tabIndex={0}
        className={
          `${gridCell} group transition-shadow duration-300 ` +
          "hover:shadow-[0_22px_44px_-18px_rgba(26,22,18,0.18)] " +
          "focus-visible:shadow-[0_22px_44px_-18px_rgba(26,22,18,0.18)] " +
          "scroll-mt-28 sm:scroll-mt-32 " +
          plate.panel
        }
      >
        <Image
          src={tile.image}
          alt=""
          fill
          unoptimized
          priority={isFirst}
          aria-hidden
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className={
            "z-[1] object-cover object-center opacity-0 transition-opacity duration-300 ease-out " +
            "group-hover:opacity-100 group-focus-within:opacity-100 " +
            "motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:duration-200 " +
            "motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
          }
        />

        <div
          className={
            "pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/80 via-black/45 to-black/10 " +
            "opacity-0 transition-opacity duration-300 ease-out " +
            "group-hover:opacity-100 group-focus-within:opacity-100 " +
            "motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:duration-200 " +
            "motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
          }
          aria-hidden
        />

        <span
          className={
            "pointer-events-none absolute z-[3] font-title font-bold leading-none " +
            `${watermarkClasses(tile.gridArea)} ${plate.watermark} ` +
            "opacity-[0.14] transition-opacity duration-300 ease-out " +
            "group-hover:opacity-[0.22] group-focus-within:opacity-[0.22]"
          }
          aria-hidden
        >
          {n}
        </span>

        <h3
          className={
            "relative z-[4] font-title text-lg font-bold leading-snug tracking-tight transition-colors duration-300 sm:text-xl lg:text-[1.25rem] lg:leading-[1.3] xl:text-[1.35rem] " +
            `${plate.title} group-hover:text-white group-focus-within:text-white`
          }
        >
          {withoutHyphens(tile.title)}
        </h3>
        </article>
      </Reveal>
    </div>
  );
}

function plateClasses(plate: CommunityOfferPlate) {
  switch (plate) {
    case "dark":
      return {
        panel: "bg-[color:var(--ink)]",
        title: "text-[color:var(--brand-white)]",
        watermark: "text-white",
      };
    case "accent":
      return {
        panel: "bg-[color:var(--brand-yellow)]",
        title: "text-[color:var(--ink)]",
        watermark: "text-[color:var(--ink)]",
      };
    case "gray":
      return {
        panel: "bg-[color:var(--surface-subtle)]",
        title: "text-[color:var(--ink)]",
        watermark: "text-[color:var(--ink)]",
      };
    case "white":
      return {
        panel: "bg-[color:var(--brand-white)]",
        title: "text-[color:var(--ink)]",
        watermark: "text-[color:var(--ink)]",
      };
    case "sand":
      return {
        panel: "bg-[color:var(--surface-light-brown)]",
        title: "text-[color:var(--ink)]",
        watermark: "text-[color:var(--ink)]",
      };
  }
}
