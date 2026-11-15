// Locale plumbing. English is served at the root ("/about"), other locales
// under their prefix ("/fr/about"). The proxy rewrites root URLs to /en/* so
// every page lives in app/[lang] and adding French needs no refactor:
//   1. add "fr" to `enabledLocales`
//   2. add `fr: {...}` next to `en` in each content file (or import it)
// Pages with no French copy yet fall back to English automatically.

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Locales that are actually built and linked. Add "fr" when the copy is ready. */
export const enabledLocales: readonly Locale[] = ["en"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};
export const ogLocales: Record<Locale, string> = { en: "en_US", fr: "fr_FR" };

export const isLocale = (value: string | undefined): value is Locale =>
  !!value && (locales as readonly string[]).includes(value);

export const isEnabledLocale = (value: string | undefined): value is Locale =>
  !!value && (enabledLocales as readonly string[]).includes(value);

/** Turns the raw `lang` route param into a Locale (falls back to English). */
export function toLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

/** Prefixes an internal path for a locale: ("fr", "/about") → "/fr/about", ("en", "/about") → "/about". */
export function localePath(locale: Locale, path = "/"): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Declares a piece of content in every locale. English is required; missing
 * locales fall back to it.
 *
 *   export const about = localized({ en: { title: "…" } });
 *   const t = about(lang);
 */
export function localized<T>(byLocale: { en: T } & Partial<Record<Locale, T>>) {
  return (locale: Locale | string): T => {
    const l = toLocale(String(locale));
    return byLocale[l] ?? byLocale.en;
  };
}
