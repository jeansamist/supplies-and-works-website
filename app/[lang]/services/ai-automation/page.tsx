import { AiJourney } from "@/components/interactive/ai-journey";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand, DataTable, FaqSection, FeatureGrid, IntroWords, TagCloud } from "@/components/sections/blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { ai } from "@/content/pages/services";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { faqLd, serviceLd } from "@/lib/structured-data";

const path = routes.ai.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/services/ai-automation">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: ai(lang).seo });
}

export default async function AiPage({ params }: PageProps<"/[lang]/services/ai-automation">) {
  const locale = toLocale((await params).lang);
  const t = ai(locale);

  return (
    <>
      <JsonLd data={[serviceLd({ name: "AI and Automation", description: t.seo.description, path }), faqLd(t.faq)]} />
      <PageHero copy={t.hero} path={path} locale={locale} />
      <IntroWords eyebrow={t.intro.eyebrow} paragraphs={[t.intro.text]} locale={locale} />
      <Section id="journey" tone="surface" className="scroll-mt-20">
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.journey.eyebrow} title={t.journey.title} />
          <AiJourney steps={t.journey.steps} receiveLabel={t.journey.receiveLabel} />
        </Container>
      </Section>
      <DataTable eyebrow={t.where.eyebrow} title={t.where.title} table={t.where.table} />
      <TagCloud eyebrow={t.build.eyebrow} title={t.build.title} tags={t.build.tags} footnote={t.build.note} tone="surface" />
      <FeatureGrid eyebrow={t.principles.eyebrow} title={t.principles.title} items={t.principles.items} tone="ink" />
      <FeatureGrid eyebrow={t.audit.eyebrow} title={t.audit.title} items={t.audit.items} columns={4} numbered={false} footnote={t.audit.note} />
      <TagCloud eyebrow={t.who.eyebrow} title={t.who.title} tags={t.who.tags} tone="surface" />
      <FaqSection locale={locale} items={t.faq} />
      <CtaBand cta={t.cta} locale={locale} />
    </>
  );
}
