"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState, type FormEvent } from "react";
import { Field, Select, TextArea } from "@/components/forms/field";
import { Rich } from "@/components/ui/rich";
import type { contact } from "@/content/pages/other";
import { cn } from "@/lib/utils";

type Copy = ReturnType<typeof contact>;

/**
 * Needs picker ("What are you looking for?") + contact form. Picking chips
 * pre-fills the form (they are sent as `needs`). Submits to /api/contact.
 */
export function ContactForm({ copy }: { copy: Copy }) {
  const [needs, setNeeds] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const f = copy.form;

  const toggle = (n: string) => setNeeds((cur) => (cur.includes(n) ? cur.filter((x) => x !== n) : [...cur, n]));

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const errs: Record<string, string> = {};
    for (const k of ["name", "email", "company", "country", "timeline", "message"]) if (!data[k]?.trim()) errs[k] = f.required;
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = f.invalidEmail;
    setErrors(errs);
    if (Object.keys(errs).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, needs }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className="flex animate-[fadeUp_.6s_var(--ease-out-expo)] flex-col items-start gap-6 rounded-[2rem] bg-accent p-8 text-accent-ink sm:p-12">
        <span className="flex size-16 items-center justify-center rounded-full bg-accent-ink text-accent">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-8" />
        </span>
        <p className="font-serif text-h3 text-balance">
          <Rich text={f.success} mark={false} />
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-10">
      <fieldset className="space-y-5">
        <legend className="mb-5 font-serif text-h3">{copy.chips.title}</legend>
        <div className="flex flex-wrap gap-2.5">
          {copy.chips.items.map((n) => {
            const on = needs.includes(n);
            return (
              <button
                key={n}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(n)}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-5 py-3 font-medium transition-all duration-300 ease-out-expo active:scale-95",
                  on ? "border-transparent bg-accent text-accent-ink" : "border-line hover:border-fg",
                )}
              >
                <span className={cn("grid size-5 place-items-center rounded-full border transition-all duration-300", on ? "border-accent-ink bg-accent-ink text-accent" : "border-line")}>
                  {on && <span className="animate-[fadeUp_.25s_ease-out] text-[10px]">✓</span>}
                </span>
                {n}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div id="message" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-h3">{f.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="cf-name" name="name" label={f.name} autoComplete="name" error={errors.name} />
          <Field id="cf-email" name="email" type="email" label={f.email} autoComplete="email" error={errors.email} />
          <Field id="cf-company" name="company" label={f.company} autoComplete="organization" error={errors.company} />
          <Field id="cf-country" name="country" label={f.country} autoComplete="country-name" error={errors.country} />
          <Field id="cf-phone" name="phone" type="tel" label={f.phone} autoComplete="tel" />
          <Select id="cf-budget" name="budget" label={f.budget} options={f.budgetOptions} />
          <div className="sm:col-span-2">
            <Select id="cf-timeline" name="timeline" label={f.timeline} options={f.timelineOptions} aria-invalid={!!errors.timeline || undefined} />
            {errors.timeline && <p className="pt-1.5 pl-5 text-sm text-danger">{errors.timeline}</p>}
          </div>
          {needs.length > 0 && (
            <p className="text-sm text-muted sm:col-span-2">
              {copy.chips.title} <strong className="text-fg">{needs.join(", ")}</strong>
            </p>
          )}
          <TextArea id="cf-message" name="message" label={f.message} error={errors.message} className="sm:col-span-2" />
        </div>
      </div>

      {state === "error" && (
        <p role="alert" className="rounded-2xl border border-danger/40 bg-danger/10 p-4 text-danger">
          <Rich text={f.error} />
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="group/btn relative isolate inline-flex h-14 items-center gap-3 overflow-hidden rounded-full bg-accent px-8 text-lg font-semibold text-accent-ink disabled:opacity-70"
      >
        <span aria-hidden className="absolute inset-0 -z-10 translate-y-full bg-[#0a0a0a] transition-transform duration-500 ease-out-expo group-hover/btn:translate-y-0" />
        <span className="transition-colors group-hover/btn:text-accent">{state === "sending" ? f.sending : f.send}</span>
      </button>
    </form>
  );
}
