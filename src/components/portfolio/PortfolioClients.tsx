import Image from "next/image";
import { clientLogos } from "@/content/clients";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

function ClientLogoCell({
  name,
  logoSrc,
  index,
}: {
  name: string;
  logoSrc: string;
  index: number;
}) {
  return (
    <Reveal delay={0.04 * (index % 8)} className="h-full">
      <div className="group relative flex h-full min-h-[5.5rem] items-center justify-center bg-white/[0.04] px-6 py-5 transition duration-300 hover:bg-white/[0.08] sm:min-h-28 sm:px-8">
        <Image
          src={logoSrc}
          alt={name}
          width={160}
          height={64}
          unoptimized
          className="max-h-10 w-auto max-w-[9rem] object-contain opacity-75 brightness-0 invert transition duration-300 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 sm:max-h-12 sm:max-w-[10rem]"
        />
      </div>
    </Reveal>
  );
}

export function PortfolioClients() {
  if (clientLogos.length === 0) return null;

  return (
    <section
      aria-labelledby="portfolio-clients-heading"
      className="relative overflow-hidden border-t border-white/10 bg-[color:var(--ink)] py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[color:var(--brand-yellow)] opacity-[0.08] blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <div className="flex min-w-0 items-center gap-0">
            <span className="inline-flex shrink-0 items-center rounded-md bg-[color:var(--brand-yellow)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink)] sm:px-3.5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.25em]">
              Clients
            </span>
            <span
              className="h-px min-w-[2rem] flex-1 bg-white/15 mr-[calc(50%-50vw)]"
              aria-hidden
            />
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <Reveal className="max-w-xl">
            <h2
              id="portfolio-clients-heading"
              className="font-title text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--brand-white)]"
            >
              Brands We&apos;ve Partnered With
            </h2>
            <p className="mt-5 font-sans text-sm leading-relaxed text-[color:var(--brand-white)]/70 sm:text-[0.9375rem]">
              From retail and events to education and beverage, we&apos;ve helped
              teams show up with clarity across sectors.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="hidden shrink-0 lg:block">
            <p className="max-w-[11rem] font-sans text-[10px] font-semibold uppercase leading-relaxed tracking-[0.28em] text-[color:var(--brand-sand)]">
              {clientLogos.length} partnerships and counting
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-0 sm:grid-cols-3 lg:mt-14 lg:grid-cols-4 [&>li]:-ml-px [&>li]:-mt-px [&>li]:border [&>li]:border-white/10">
          {clientLogos.map((client, i) => (
            <li key={`${client.name}-${i}`} className="min-w-0">
              <ClientLogoCell
                name={client.name}
                logoSrc={client.logoSrc}
                index={i}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
