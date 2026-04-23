import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";

const ETHOS_IMAGE = "/Slider1.avif";

export function HomeEthos() {
  return (
    <section
      id="our-ethos"
      className="relative z-0 bg-[color:var(--brand-white)] pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-36 lg:pt-28"
    >
      <Container>
        <div className="grid gap-20 lg:grid-cols-[minmax(0,467px)_minmax(0,1fr)] lg:items-center lg:gap-24 xl:gap-28">
          <Reveal>
            <div
              className="relative mx-auto aspect-[467/316] w-full max-w-[var(--editorial-image-w)] overflow-hidden rounded-3xl bg-[color:var(--surface-sand)] lg:aspect-[467/632] lg:mx-0 lg:max-h-[var(--editorial-image-h)] lg:max-w-none"
            >
              <Image
                src={ETHOS_IMAGE}
                alt=""
                fill
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1023px) min(calc(100vw - 2rem), 467px), min(467px, 45vw)"
                priority={false}
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex min-w-0 flex-col justify-center lg:min-h-[min(100%,36rem)]">
              <div className="flex min-w-0 items-center gap-4">
                <span className="font-script shrink-0 text-[clamp(1.85rem,4vw,2.65rem)] leading-none text-[color:var(--ink)]">
                  Our Ethos
                </span>
                <span
                  className="h-px min-w-[3rem] max-w-[38%] flex-1 bg-[color:var(--hairline)] sm:max-w-[33%]"
                  aria-hidden
                />
              </div>

              <h2 className="font-title mt-8 text-[clamp(2rem,4.5vw,3.35rem)] font-bold leading-[1.08] tracking-tight text-[color:var(--ink)]">
                At {site.name}
              </h2>

              <div className="mt-8 max-w-xl space-y-6 font-sans text-[1rem] leading-[1.75] text-[color:var(--ink-muted)] sm:text-[1.0625rem]">
                <p>
                  Social media and branding perform best when they&apos;re built
                  with intention. Design isn&apos;t decoration—it&apos;s strategic
                  direction, storytelling, and a seamless digital presence your
                  audience feels connected to.
                </p>
                <p>
                  Our work blends elevated creative direction with disciplined
                  channel management—so your brand reads cohesive, compelling, and
                  ready to scale.
                </p>
              </div>

              <Link
                href="/about"
                className="group mt-12 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ink)] transition"
              >
                <span
                  className="font-sans text-xl font-light leading-none text-[color:var(--brand-yellow)] transition group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
                View the full story
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
