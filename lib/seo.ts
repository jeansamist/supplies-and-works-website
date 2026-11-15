import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { enabledLocales, localePath, ogLocales, toLocale, type Locale } from "@/lib/i18n";

export type Seo = { title: string; description: string };

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

/** Metadata for a page: unique title/description, canonical, hreflang, OG and Twitter. */
export function pageMetadata({
  lang,
  path,
  seo,
  image,
}: {
  lang: Locale | string;
  path: string;
  seo: Seo;
  /** Absolute or root-relative image; defaults to the generated OG image. */
  image?: string;
}): Metadata {
  const locale = toLocale(String(lang));
  const url = localePath(locale, path);
  const languages = Object.fromEntries(enabledLocales.map((l) => [l, localePath(l, path)]));
  const ogImage = image ?? "/opengraph-image";

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: { canonical: url, languages: { ...languages, "x-default": localePath("en", path) } },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: seo.title,
      description: seo.description,
      url,
      locale: ogLocales[locale],
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
  };
}
