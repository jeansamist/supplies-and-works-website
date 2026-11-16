import { BeforeAfter } from "@/components/interactive/before-after";
import { PageHero } from "@/components/sections/page-hero";
import { Checklist, CtaBand, FaqSection, FeatureGrid, IntroWords, ProcessSteps, Statement, TagCloud } from "@/components/sections/blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { webDesign } from "@/content/pages/services";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { faqLd, serviceLd } from "@/lib/structured-data";

const path = routes.webDesign.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/services/web-design">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: webDesign(lang).seo });
}

export default async function WebDesignPage({ params }: PageProps<"/[lang]/services/web-design">) {
  const locale = toLocale((await params).lang);
  const t = webDesign(locale);

  return (
    <>
      <JsonLd data={[serviceLd({ name: "Web Design and Development", description: t.seo.description, path }), faqLd(t.faq)]} />
      <PageHero copy={t.hero} path={path} locale={locale} />
      <IntroWords eyebrow={t.intro.eyebrow} paragraphs={[t.intro.text]} locale={locale} />
      <FeatureGrid eyebrow={t.deliver.eyebrow} title={t.deliver.title} items={t.deliver.items} columns={4} tone="surface" />
      <Checklist eyebrow={t.expect.eyebrow} title={t.expect.title} items={t.expect.items} image="uiSketches" />
      <Section tone="surface">
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.beforeAfter.eyebrow} title={t.beforeAfter.title} />
          <BeforeAfter beforeLabel={t.beforeAfter.before} afterLabel={t.beforeAfter.after} />
          <p data-reveal className="text-sm text-muted italic">{t.beforeAfter.note}</p>
        </Container>
      </Section>
      <ProcessSteps eyebrow={t.process.eyebrow} title={t.process.title} steps={t.process.steps} locale={locale} tone="default" />
      <TagCloud eyebrow={t.extras.eyebrow} title={t.extras.title} tags={t.extras.tags} tone="surface" />
      <Statement eyebrow={t.pricing.eyebrow} title={t.pricing.title} paragraphs={[t.pricing.text]} locale={locale} />
      <FaqSection locale={locale} items={t.faq} tone="surface" />
      <div className="pt-3 sm:pt-4"><CtaBand cta={t.cta} locale={locale} /></div>
    </>
  );
}
