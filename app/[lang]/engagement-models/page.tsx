import { PageHero } from "@/components/sections/page-hero";
import { CtaBand, DataTable, FeatureGrid, Statement } from "@/components/sections/blocks";
import { Rich } from "@/components/ui/rich";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { engagement } from "@/content/pages/company";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.engagement.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/engagement-models">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: engagement(lang).seo });
}

export default async function EngagementPage({ params }: PageProps<"/[lang]/engagement-models">) {
  const locale = toLocale((await params).lang);
  const t = engagement(locale);

  return (
    <>
      <PageHero copy={t.hero} path={path} locale={locale} />

      <Section>
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.models.eyebrow} title={t.models.title} />
          <ul data-reveal="stagger" className="grid gap-4 md:grid-cols-2">
            {t.models.items.map((m, i) => (
              <TiltCard key={m.title} as="li" className="flex flex-col gap-5 p-8 sm:p-10">
                <span className="flex size-12 items-center justify-center rounded-full bg-accent font-serif text-xl font-semibold text-accent-ink">{i + 1}</span>
                <h3 className="font-serif text-h3"><Rich text={m.title} mark={false} /></h3>
                <p className="text-lg text-muted">{m.text}</p>
                <dl className="mt-auto space-y-2 border-t border-line pt-5 text-sm">
                  <div><dt className="inline font-semibold">{t.models.bestLabel}: </dt><dd className="inline text-muted">{m.best}</dd></div>
                  {m.get && <div><dt className="inline font-semibold">{t.models.getLabel}: </dt><dd className="inline text-muted">{m.get}</dd></div>}
                </dl>
              </TiltCard>
            ))}
          </ul>
        </Container>
      </Section>

      <DataTable eyebrow={t.which.eyebrow} title={t.which.title} table={t.which.table} tone="surface" />
      <Statement eyebrow={t.pricing.eyebrow} title={t.pricing.title} paragraphs={[t.pricing.text]} locale={locale} />
      <Statement eyebrow={t.billing.eyebrow} title={t.billing.title} paragraphs={[t.billing.text, t.billing.note]} locale={locale} tone="surface" />
      <FeatureGrid eyebrow={t.terms.eyebrow} title={t.terms.title} items={t.terms.items} columns={4} numbered={false} />
      <CtaBand cta={t.cta} locale={locale} />
    </>
  );
}
