"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

// A ticking clock shared by every component that needs "now" (null on the server
// and during hydration, so there is no mismatch).
let now: Date | null = null;
const listeners = new Set<() => void>();
let timer: number | undefined;

function subscribeNow(cb: () => void) {
  listeners.add(cb);
  if (!timer) {
    now = new Date();
    timer = window.setInterval(() => {
      now = new Date();
      listeners.forEach((l) => l());
    }, 15_000);
  }
  return () => {
    listeners.delete(cb);
    if (!listeners.size) {
      window.clearInterval(timer);
      timer = undefined;
    }
  };
}

export function useNow(): Date | null {
  return useSyncExternalStore(subscribeNow, () => now, () => null);
}

const noop = () => () => {};

/** Evaluates a media query on the client (false on the server). */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** True once mounted on the client. */
export function useIsClient(): boolean {
  return useSyncExternalStore(noop, () => true, () => false);
}

/**
 * Pathname without any locale prefix ("/fr/about" and "/about" → "/about").
 * English pages are served from /en/* through a rewrite, so the server sees
 * "/en/about" while the browser shows "/about"; normalising avoids hydration
 * mismatches and gives one path to compare against the route list.
 */
export function useSitePathname(): string {
  const p = usePathname();
  return p.replace(/^\/(en|fr)(?=\/|$)/, "") || "/";
}
