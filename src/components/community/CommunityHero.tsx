import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import {
  communityHero,
  communityWhatsAppUrl,
} from "@/content/community";

/** Globe loop — `mix-blend-screen` keeps blacks sunk into `--ink`, highlights read luminous */
const HERO_GLOBE_VIDEO =
  "/World%20Video%202.mp4";

export function CommunityHero() {
  return (
    <section
      className={
        "relative z-10 min-h-[calc(100dvh-3.5rem)] overflow-hidden " +
        "border-b border-white/10 bg-[color:var(--ink)]"
      }
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <video
          className={
            "absolute inset-0 h-full w-full scale-[1.02] object-cover object-center " +
            "mix-blend-screen opacity-[0.16]"
          }
          src={HERO_GLOBE_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
      </div>

      {/* Ambient glow + texture — above video */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(235,189,69,0.22),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, white 1px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center py-16 text-center sm:py-24 lg:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
              {communityHero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-title mt-6 text-balance text-[clamp(2.35rem,6.5vw,4.25rem)] font-bold leading-[1.08] tracking-tight text-[color:var(--brand-white)] sm:mt-8">
              <span className="inline-block sm:mr-1.5">
                {communityHero.titleLead}
              </span>
              <span className="inline-block text-[color:var(--brand-yellow)]">
                {communityHero.titleScript}
              </span>{" "}
              <span className="inline-block">
                {communityHero.titleEnd}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-white/85 sm:text-lg sm:leading-relaxed">
              <p className="text-pretty">
                {communityHero.description} {communityHero.supporting}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <Link
              href={communityWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mx-auto mt-10 inline-flex items-center gap-3 rounded-full bg-[color:var(--brand-yellow)] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink)] shadow-[0_12px_40px_-12px_rgba(235,189,69,0.55)] transition hover:bg-[color:var(--brand-white)] sm:mt-12"
            >
              <span>{communityHero.cta}</span>
              <span
                className="font-sans text-xl font-light leading-none transition group-hover:translate-x-0.5"
                aria-hidden
              >
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
