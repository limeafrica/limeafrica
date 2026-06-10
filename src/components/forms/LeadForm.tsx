"use client";

import { useState } from "react";

type LeadFormProps = {
  variant?: "hero" | "full";
  submitLabel?: string;
  /** After a successful submit, navigate here (e.g. Paystack checkout). */
  redirectUrl?: string;
};

export function LeadForm({
  variant = "full",
  submitLabel = "Submit",
  redirectUrl,
}: LeadFormProps) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      if (redirectUrl) {
        window.location.assign(redirectUrl);
        return;
      }

      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <p className="font-title text-2xl leading-snug text-[color:var(--ink)]">
        Thank you. We&apos;ll be in touch{" "}
        <span className="text-[color:var(--brand-yellow)]">soon.</span>
      </p>
    );
  }

  const inputClass =
    "font-sans w-full border-b border-[color:var(--hairline)] bg-transparent py-3 text-sm text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--ink-muted)] focus:border-[color:var(--brand-yellow)] disabled:opacity-60";

  const btnPrimary =
    "inline-flex cursor-pointer items-center justify-center rounded-full bg-[color:var(--brand-yellow)] px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink)] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60";

  const errorMessage = error ? (
    <p className="font-sans text-sm text-red-700" role="alert">
      {error}
    </p>
  ) : null;

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8">
        {errorMessage}
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
            Your name
          </label>
          <input
            name="name"
            required
            disabled={submitting}
            className={inputClass}
            placeholder=""
          />
        </div>
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
            Email address
          </label>
          <input
            name="email"
            type="email"
            required
            disabled={submitting}
            className={inputClass}
            placeholder=""
          />
        </div>
        <div className="sm:col-span-2">
          <button type="submit" disabled={submitting} className={btnPrimary}>
            {submitting ? "Sending…" : submitLabel}
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8">
      {errorMessage}
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
            Full name
          </label>
          <input name="name" required disabled={submitting} className={inputClass} />
        </div>
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            disabled={submitting}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
          Company Name
        </label>
        <input name="company" disabled={submitting} className={inputClass} />
      </div>
      <div>
        <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
          Services interested in
        </label>
        <select
          name="services"
          disabled={submitting}
          className={`${inputClass} cursor-pointer`}
        >
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
          disabled={submitting}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className={`${btnPrimary} w-fit px-12`}
      >
        {submitting ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
