"use client";

import { Globe02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRouter } from "next/navigation";
import { useSitePathname } from "@/lib/hooks";
import { enabledLocales, localeNames, localePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Language select (footer). Switching keeps the visitor on the same page:
 * /about ⇄ /fr/about. Add a language to `enabledLocales` (lib/i18n.ts) and it
 * appears here automatically.
 */
export function LanguageSwitcher({ current, label, className }: { current: Locale; label: string; className?: string }) {
  const router = useRouter();
  const path = useSitePathname();

  return (
    <label className={cn("relative inline-flex items-center gap-2 rounded-full border border-line py-2 pr-9 pl-3.5 transition-colors focus-within:border-fg hover:border-fg", className)}>
      <HugeiconsIcon icon={Globe02Icon} aria-hidden className="size-4 shrink-0 text-muted" />
      <span className="sr-only">{label}</span>
      <select
        value={current}
        onChange={(e) => {
          const next = e.target.value as Locale;
          const hash = window.location.hash;
          router.push(localePath(next, path) + hash);
        }}
        className="cursor-pointer appearance-none bg-transparent text-sm font-medium text-fg outline-none"
      >
        {enabledLocales.map((l) => (
          <option key={l} value={l} lang={l} className="bg-bg text-fg">
            {localeNames[l]}
          </option>
        ))}
      </select>
      <span aria-hidden className="pointer-events-none absolute right-3.5 text-xs text-muted">
        ▾
      </span>
    </label>
  );
}
