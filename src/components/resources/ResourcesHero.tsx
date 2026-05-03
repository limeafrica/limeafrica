import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const HERO_IMAGE = "/Slider1.avif";

export function ResourcesHero() {
  return (
    <div
      className={
        "relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center overflow-hidden " +
        "border-b border-white/15 bg-[color:var(--ink)] py-16 sm:py-24"
      }
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          unoptimized
          className="object-cover object-center"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-black/38"
        aria-hidden
      />
      <Container className="relative z-10">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
            Resources
          </p>
          <h1 className="font-title mt-4 max-w-4xl text-4xl tracking-tight text-white sm:text-6xl">
            Tools That Make Marketing Easier
          </h1>
          <p className="font-sans mt-8 max-w-2xl text-base leading-relaxed text-white/88">
            Access our curated collection of templates, guides, and resources
            designed to streamline your marketing, improve your execution, and
            help you achieve more with less effort.
          </p>
          <Link
            href="#templates"
            className="group mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-white)] transition hover:text-[color:var(--brand-yellow)]"
          >
            <span
              className="font-sans text-xl font-light leading-none text-[color:var(--brand-yellow)] transition group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
            See Templates
          </Link>
        </Reveal>
      </Container>
    </div>
  );
}
