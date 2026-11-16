import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/content/work";
import { enabledLocales, localePath } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

// One entry per page and per language, each listing its translations.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...Object.values(routes).map((r) => r.path), ...caseStudySlugs().map((s) => `/work/${s}`)];
  return paths.flatMap((path) => {
    const languages = Object.fromEntries(enabledLocales.map((l) => [l, absoluteUrl(localePath(l, path))]));
    return enabledLocales.map((locale) => ({
      url: absoluteUrl(localePath(locale, path)),
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
      alternates: { languages: { ...languages, "x-default": absoluteUrl(localePath("en", path)) } },
    }));
  });
}
