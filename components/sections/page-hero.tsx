import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { Rich } from "@/components/ui/rich";
import { Eyebrow } from "@/components/ui/section";
import type { PageHeroCopy } from "@/content/types";
import { localePath, type Locale } from "@/lib/i18n";
import { breadcrumbsFor } from "@/lib/routes";
import { ui } from "@/content/ui";
import { breadcrumbLd } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

export function Breadcrumbs({ path, locale, current }: { path: string; locale: Locale; current?: string }) {
  const trail = breadcrumbsFor(path, locale);
  if (current && trail.length) trail[trail.length - 1].label = current;
  const t = ui(locale);
  const items = [{ path: "/", label: t.home }, ...trail];
  return (
    <>
      <JsonLd data={breadcrumbLd(items.map((i) => ({ ...i, path: localePath(locale, i.path) })))} />
      <nav aria-label={t.breadcrumb} data-reveal>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          {items.map((item, i) => (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && <HugeiconsIcon icon={ArrowRight01Icon} aria-hidden className="size-3.5 opacity-60" />}
              {i === items.length - 1 ? (
                <span aria-current="page" className="font-medium text-fg">
                  {item.label}
                </span>
              ) : (
                <Link href={localePath(locale, item.path)} className="link-draw hover:text-fg">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/**
 * Inner-page hero: breadcrumbs, eyebrow, big serif title (line reveal),
 * subtitle, buttons and an optional photo with a mask reveal + parallax.
 */
export function PageHero({
  copy,
  path,
  locale,
  crumb,
  children,
  aside,
}: {
  copy: PageHeroCopy;
  path: string;
  locale: Locale;
  /** Breadcrumb label override for the current page. */
  crumb?: string;
  children?: React.ReactNode;
  /** Replaces the photo on the right (e.g. a small interactive scene). */
  aside?: React.ReactNode;
}) {
  const hasMedia = !!copy.image || !!aside;
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-surface to-bg pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-accent opacity-[0.12] blur-[120px] dark:opacity-[0.06]" />
      <div className={cn("mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6", hasMedia && "lg:grid-cols-[1.15fr_1fr] lg:items-end")}>
        <div className="space-y-7">
          <Breadcrumbs path={path} locale={locale} current={crumb} />
          {copy.eyebrow && (
            <div data-reveal>
              <Eyebrow>{copy.eyebrow}</Eyebrow>
            </div>
          )}
          <h1 data-split className="font-serif text-h1 text-balance">
            <Rich text={copy.title} />
          </h1>
          {copy.sub && (
            <p data-reveal className="max-w-2xl text-lead text-pretty text-muted">
              <Rich text={copy.sub} />
            </p>
          )}
          {copy.buttons && copy.buttons.length > 0 && (
            <div data-reveal className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              {copy.buttons.map((b, i) => (
                <Button key={b.label} href={localePath(locale, b.href)} size="lg" variant={i === 0 ? "primary" : "outline"} magnetic>
                  {b.label}
                </Button>
              ))}
            </div>
          )}
          {children}
        </div>
        {aside ??
          (copy.image && (
            <div data-reveal="clip" data-parallax="0.12" className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[4/3] lg:aspect-[4/5]">
              <div data-parallax-inner className="absolute -inset-y-[8%] inset-x-0">
                <Photo image={copy.image} sizes="(min-width: 1024px) 45vw, 100vw" priority className="size-full" />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
