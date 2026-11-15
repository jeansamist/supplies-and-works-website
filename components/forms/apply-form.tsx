"use client";

import { useState, type FormEvent } from "react";
import { Field, TextArea } from "@/components/forms/field";
import { Rich } from "@/components/ui/rich";
import type { careers } from "@/content/pages/company";

type Copy = ReturnType<typeof careers>["apply"];

/** Spontaneous application (multipart, with CV upload) → /api/apply. */
export function ApplyForm({ copy }: { copy: Copy }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [file, setFile] = useState("");
  const f = copy.fields;

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!String(fd.get("name") ?? "").trim()) errs.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(fd.get("email") ?? ""))) errs.email = "Enter a valid email address.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setState("sending");
    try {
      const res = await fetch("/api/apply", { method: "POST", body: fd });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p role="status" className="animate-[fadeUp_.6s_var(--ease-out-expo)] rounded-[2rem] bg-accent p-8 font-serif text-h3 text-accent-ink">
        {copy.success}
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-4 sm:grid-cols-2">
      <Field id="ap-name" name="name" label={f.name} autoComplete="name" error={errors.name} />
      <Field id="ap-email" name="email" type="email" label={f.email} autoComplete="email" error={errors.email} />
      <Field id="ap-role" name="role" label={f.role} />
      <Field id="ap-links" name="links" label={f.links} type="url" />
      <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-dashed border-line px-5 py-4 transition-colors hover:border-fg sm:col-span-2">
        <span>
          <span className="block font-semibold">{f.cv}</span>
          <span className="text-sm text-muted">{file || "PDF, DOC, DOCX · max 5 MB"}</span>
        </span>
        <span className="rounded-full bg-fg px-4 py-2 text-sm font-semibold text-bg">Browse</span>
        <input type="file" name="cv" accept=".pdf,.doc,.docx" className="sr-only" onChange={(e) => setFile(e.target.files?.[0]?.name ?? "")} />
      </label>
      <TextArea id="ap-message" name="message" label={f.message} className="sm:col-span-2" />
      {state === "error" && (
        <p role="alert" className="text-danger sm:col-span-2">
          <Rich text={copy.error} />
        </p>
      )}
      <div>
        <button type="submit" disabled={state === "sending"} className="h-14 rounded-full bg-accent px-8 text-lg font-semibold text-accent-ink transition-transform hover:scale-[1.03] disabled:opacity-70">
          {f.send}
        </button>
      </div>
    </form>
  );
}
