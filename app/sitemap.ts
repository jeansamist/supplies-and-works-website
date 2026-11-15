import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/content/work";
import { enabledLocales, localePath } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...Object.values(routes).map((r) => r.path), ...caseStudySlugs().map((s) => `/work/${s}`)];
  return paths.map((path) => ({
    url: absoluteUrl(localePath("en", path)),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
    alternates: { languages: Object.fromEntries(enabledLocales.map((l) => [l, absoluteUrl(localePath(l, path))])) },
  }));
}
