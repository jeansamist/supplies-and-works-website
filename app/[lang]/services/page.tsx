import { BuildRunProtect } from "@/components/interactive/build-run-protect";
import { StudiosScroller } from "@/components/interactive/studios-scroller";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand, DataTable, FeatureGrid } from "@/components/sections/blocks";
import { servicesHub } from "@/content/pages/services";
import { shared } from "@/content/shared";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.services.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: servicesHub(lang).seo });
}

export default async function ServicesPage({ params }: PageProps<"/[lang]/services">) {
  const locale = toLocale((await params).lang);
  const t = servicesHub(locale);
  const s = shared(locale);

  return (
    <>
      <PageHero copy={t.hero} path={path} locale={locale} />
      <StudiosScroller eyebrow={t.studios.eyebrow} title={t.studios.title} studios={s.studios} locale={locale} />
      <DataTable eyebrow={t.glance.eyebrow} title={t.glance.title} table={t.glance.table} tone="surface" />
      <BuildRunProtect eyebrow={t.pillars.eyebrow} title={t.pillars.title} pillars={s.pillars} includesLabel={s.includesLabel} locale={locale} />
      <FeatureGrid eyebrow={t.together.eyebrow} title={t.together.title} items={t.together.items} footnote={t.together.note} numbered={false} />
      <CtaBand cta={t.start} locale={locale} />
    </>
  );
}
