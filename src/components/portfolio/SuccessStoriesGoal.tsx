const GOAL_TARGET = 5_000;
const GOAL_YEAR = 2030;
const PROGRAMME_YEAR = 2024;

function formatGoal(n: number) {
  return new Intl.NumberFormat("en-US").format(n);
}

export function SuccessStoriesGoal() {
  return (
    <div
      className="w-full overflow-hidden rounded-xl bg-[color:var(--ink)] shadow-[0_28px_70px_-24px_rgba(26,22,18,0.45)] ring-1 ring-[color:var(--ink)]/10"
      aria-label={`Our goal: empower ${formatGoal(GOAL_TARGET)} individuals by ${GOAL_YEAR}`}
    >
      <div className="px-6 py-7 sm:px-7 sm:py-8">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-[color:var(--brand-sand)]">
          Our goal
        </p>

        <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1">
          <p className="font-title text-[clamp(2.75rem,7vw,3.75rem)] font-bold leading-none tracking-tight text-[color:var(--brand-yellow)] tabular-nums">
            {formatGoal(GOAL_TARGET)}
          </p>
          <p className="pb-1.5 font-sans text-sm font-medium leading-snug text-[color:var(--brand-white)]/80 sm:text-[0.9375rem]">
            individuals
            <span className="block text-[color:var(--brand-white)]/55">
              empowered
            </span>
          </p>
        </div>

        <div className="mt-7 border-t border-white/10 pt-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
                Programme launch
              </p>
              <p className="mt-1 font-title text-lg font-bold tracking-tight text-[color:var(--brand-white)]">
                {PROGRAMME_YEAR}
              </p>
            </div>
            <div
              className="relative mx-2 hidden min-w-[4.5rem] flex-1 sm:block"
              aria-hidden
            >
              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/12" />
              <span className="absolute left-0 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--brand-yellow)]" />
              <span className="absolute right-0 top-1/2 size-1.5 translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 bg-[color:var(--ink)]" />
            </div>
            <div className="text-right">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
                Target
              </p>
              <p className="mt-1 font-title text-lg font-bold tracking-tight text-[color:var(--brand-yellow)]">
                {GOAL_YEAR}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
