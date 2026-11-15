import { enabledLocales, localeNames, locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * EN / FR pill. Locales not yet enabled (see lib/i18n.ts) are shown disabled
 * with a "coming soon" hint. When French is enabled, swap the <span> for a
 * link to localePath("fr", currentPath).
 */
export function LanguageSwitcher({
  current,
  label,
  soonLabel,
  className,
}: {
  current: Locale;
  label: string;
  soonLabel: string;
  className?: string;
}) {
  return (
    <div role="group" aria-label={label} className={cn("flex items-center rounded-full border border-line p-0.5 text-xs font-semibold", className)}>
      {locales.map((l) => {
        const enabled = enabledLocales.includes(l);
        const active = l === current;
        return (
          <span
            key={l}
            lang={l}
            title={enabled ? localeNames[l] : soonLabel}
            aria-current={active ? "true" : undefined}
            aria-disabled={!enabled || undefined}
            className={cn(
              "rounded-full px-2.5 py-1 uppercase transition-colors",
              active ? "bg-fg text-bg" : "text-muted",
              !enabled && "cursor-not-allowed opacity-60",
            )}
          >
            {l}
          </span>
        );
      })}
    </div>
  );
}
