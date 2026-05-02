"use client";

import { useState } from "react";

type LeadFormProps = {
  variant?: "hero" | "full";
  submitLabel?: string;
};

export function LeadForm({
  variant = "full",
  submitLabel = "Submit",
}: LeadFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="font-title text-2xl leading-snug text-[color:var(--ink)]">
        Thank you — we&apos;ll be in touch{" "}
        <span className="text-[color:var(--brand-yellow)]">soon.</span>
      </p>
    );
  }

  const inputClass =
    "font-sans w-full border-b border-[color:var(--hairline)] bg-transparent py-3 text-sm text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--ink-muted)] focus:border-[color:var(--brand-yellow)]";

  const btnPrimary =
    "inline-flex cursor-pointer items-center justify-center rounded-full bg-[color:var(--brand-yellow)] px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink)] transition hover:brightness-95";

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8">
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
            Your name
          </label>
          <input name="name" required className={inputClass} placeholder="" />
        </div>
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
            Email address
          </label>
          <input
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder=""
          />
        </div>
        <div className="sm:col-span-2">
          <button type="submit" className={btnPrimary}>
            {submitLabel}
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
            Full name
          </label>
          <input name="name" required className={inputClass} />
        </div>
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
            Email
          </label>
          <input name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div>
        <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
          Company Name
        </label>
        <input name="company" className={inputClass} />
      </div>
      <div>
        <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
          Services interested in
        </label>
        <select name="services" className={`${inputClass} cursor-pointer`}>
          <option value="">Select…</option>
          <option>Social media management</option>
          <option>Branding</option>
          <option>Website design</option>
          <option>Templates</option>
        </select>
      </div>
      <div>
        <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
          Project overview
        </label>
        <textarea
          name="message"
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button type="submit" className={`${btnPrimary} w-fit px-12`}>
        {submitLabel}
      </button>
    </form>
  );
}
