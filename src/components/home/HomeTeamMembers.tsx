"use client";

import { useCallback, useRef, useState, type TouchEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { TeamMemberPortrait } from "@/components/home/TeamMemberPortrait";
import { team } from "@/content/site";

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

/** Minimum horizontal movement (px) to count as swipe */
const SWIPE_THRESHOLD = 52;

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function HomeTeamMembers() {
  const n = team.length;
  const [memberIdx, setMemberIdx] = useState(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const nextMember = useCallback(() => {
    setMemberIdx((i) => (i + 1) % n);
  }, [n]);

  const prevMember = useCallback(() => {
    setMemberIdx((i) => (i - 1 + n) % n);
  }, [n]);

  const active = team[memberIdx];

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const t = e.targetTouches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (!touchStartRef.current || n < 2) return;
      const start = touchStartRef.current;
      touchStartRef.current = null;

      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;

      if (Math.abs(dx) < SWIPE_THRESHOLD) return;
      if (Math.abs(dx) <= Math.abs(dy)) return;

      if (dx < 0) nextMember();
      else prevMember();
    },
    [n, nextMember, prevMember],
  );

  return (
    <>
      {/* Mobile / tablet: one member at a time + member navigation */}
      <div className="mx-auto mt-14 max-w-[320px] lg:hidden">
        <Reveal>
          <article
            className="flex touch-pan-y flex-col items-center text-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <TeamMemberPortrait
              key={active.name}
              name={active.name}
              src={active.portrait}
            />
            <h3 className="font-title mt-8 text-xl font-bold text-[color:var(--ink)]">
              {active.name}
            </h3>
            <p className="font-sans mt-3 max-w-[16rem] text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink-muted)]">
              {active.role}
            </p>
          </article>
        </Reveal>

        <nav
          className="mt-8 flex items-center justify-center gap-5"
          aria-label="Choose team member"
        >
          <button
            type="button"
            aria-label="Previous team member"
            onClick={prevMember}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[color:var(--ink)] bg-[color:var(--brand-yellow)]/25 text-[color:var(--ink)] transition hover:bg-[color:var(--ink)]/8 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--brand-yellow)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next team member"
            onClick={nextMember}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[color:var(--ink)] bg-[color:var(--brand-yellow)]/25 text-[color:var(--ink)] transition hover:bg-[color:var(--ink)]/8 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--brand-yellow)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </nav>
      </div>

      {/* Desktop: all members */}
      <div className="mx-auto mt-14 hidden max-w-5xl gap-12 lg:mt-16 lg:grid lg:grid-cols-3 lg:gap-12">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={0.06 * i}>
            <article className="flex flex-col items-center text-center">
              <div className="w-full max-w-[320px] sm:max-w-none">
                <TeamMemberPortrait name={member.name} src={member.portrait} />
              </div>
              <h3 className="font-title mt-8 text-xl font-bold text-[color:var(--ink)] sm:text-[1.35rem]">
                {member.name}
              </h3>
              <p className="font-sans mt-3 max-w-[16rem] text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink-muted)]">
                {member.role}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
