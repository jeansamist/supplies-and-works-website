"use client";

import { useEffect, useState } from "react";
import type { SiteCopy } from "@/content/site";
import { cn } from "@/lib/utils";

type Consent = { analytics: boolean; date: string };
const KEY = "sw-consent";

/** Reads the visitor's choice. Load analytics only when `analytics` is true. */
export function getConsent(): Consent | null {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "null");
  } catch {
    return null;
  }
}

export function CookieBanner({ copy }: { copy: SiteCopy["cookie"] }) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (getConsent()) return;
    const t = window.setTimeout(() => setOpen(true), 2200);
    return () => window.clearTimeout(t);
  }, []);

  function save(value: boolean) {
    try {
      localStorage.setItem(KEY, JSON.stringify({ analytics: value, date: new Date().toISOString() }));
    } catch {}
    window.dispatchEvent(new CustomEvent("sw:consent", { detail: { analytics: value } }));
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookies"
      className="fixed inset-x-3 bottom-3 z-[75] max-w-md rounded-3xl border border-line bg-bg/90 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:left-6 sm:bottom-6 sm:p-6"
    >
      <p className="text-sm text-pretty">{copy.text}</p>
      {settings && (
        <div className="mt-4 space-y-3 rounded-2xl bg-surface-2 p-4 text-sm">
          <p className="text-muted">{copy.settingsText}</p>
          <label className="flex items-center justify-between gap-4 font-semibold">
            {copy.analytics}
            <button
              type="button"
              role="switch"
              aria-checked={analytics}
              onClick={() => setAnalytics((a) => !a)}
              className={cn("relative h-6 w-11 rounded-full transition-colors", analytics ? "bg-accent" : "bg-line")}
            >
              <span className={cn("absolute top-0.5 left-0.5 size-5 rounded-full bg-fg transition-transform", analytics && "translate-x-5")} />
            </button>
          </label>
        </div>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {settings ? (
          <button type="button" onClick={() => save(analytics)} className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink">
            {copy.save}
          </button>
        ) : (
          <>
            <button type="button" onClick={() => save(true)} className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink">
              {copy.accept}
            </button>
            <button type="button" onClick={() => save(false)} className="rounded-full border border-line px-4 py-2 text-sm font-semibold">
              {copy.decline}
            </button>
            <button type="button" onClick={() => setSettings(true)} className="rounded-full px-4 py-2 text-sm font-semibold text-muted hover:text-fg">
              {copy.settings}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
