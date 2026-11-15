import { WorkGrid } from "@/components/interactive/work-cards";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/blocks";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Stats } from "@/components/ui/stats";
import { workPage } from "@/content/pages/other";
import { work } from "@/content/work";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.work.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/work">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: workPage(lang).seo });
}

export default async function WorkPage({ params }: PageProps<"/[lang]/work">) {
  const locale = toLocale((await params).lang);
  const t = workPage(locale);
  const w = work(locale);

  return (
    <>
      <PageHero copy={t.hero} path={path} locale={locale}>
        <p data-reveal className="max-w-2xl text-lg text-muted">{t.intro}</p>
      </PageHero>
      <Section flush className="pb-20 sm:pb-28">
        <Container className="space-y-8">
          <WorkGrid items={w.items} filters={w.filters} locale={locale} />
          <p className="text-sm text-muted italic">{t.note}</p>
        </Container>
      </Section>
      <Section tone="surface">
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.results.eyebrow} title={t.results.title} />
          <Stats items={t.results.items} className="lg:grid-cols-4" />
        </Container>
      </Section>
      <div className="pt-3 sm:pt-4"><CtaBand cta={t.cta} locale={locale} /></div>
    </>
  );
}
