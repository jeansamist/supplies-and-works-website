import { BackupDiagram } from "@/components/interactive/backup-diagram";
import { CameroonMap } from "@/components/interactive/cameroon-map";
import { PageHero } from "@/components/sections/page-hero";
import { Checklist, CtaBand, FaqSection, FeatureGrid, IntroWords, ProcessSteps, Statement, TagCloud } from "@/components/sections/blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { Rich } from "@/components/ui/rich";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { local } from "@/content/pages/services";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { faqLd, serviceLd } from "@/lib/structured-data";

const path = routes.local.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/africa-local-services">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: local(lang).seo });
}

export default async function LocalPage({ params }: PageProps<"/[lang]/africa-local-services">) {
  const locale = toLocale((await params).lang);
  const t = local(locale);

  return (
    <>
      <JsonLd data={[serviceLd({ name: "IT Infrastructure and Network Services", description: t.seo.description, path }), faqLd(t.faq)]} />
      <PageHero copy={t.hero} path={path} locale={locale} />
      <IntroWords eyebrow={t.intro.eyebrow} paragraphs={[t.intro.text]} locale={locale} />
      <FeatureGrid eyebrow={t.what.eyebrow} title={t.what.title} items={t.what.items} tone="surface" />
      <Statement eyebrow={t.chain.eyebrow} title={t.chain.title} paragraphs={[t.chain.text]} cta={t.chain.cta} locale={locale}>
        <div data-reveal className="pt-4">
          <BackupDiagram locale={locale} />
        </div>
      </Statement>
      <ProcessSteps eyebrow={t.process.eyebrow} title={t.process.title} steps={t.process.steps} locale={locale} />
      <TagCloud eyebrow={t.projects.eyebrow} title={t.projects.title} tags={t.projects.tags} footnote={t.projects.note} />
      <Section tone="surface">
        <Container className="space-y-10">
          <SectionHeading eyebrow={t.where.eyebrow} title={t.where.title} />
          <div data-reveal className="space-y-2 text-lead">
            <p><Rich text={t.where.cameroon} /></p>
            <p><Rich text={t.where.central} /></p>
          </div>
          <CameroonMap />
        </Container>
      </Section>
      <Checklist eyebrow={t.why.eyebrow} title={t.why.title} items={t.why.items} image="technician" />
      <FaqSection locale={locale} items={t.faq} tone="surface" />
      <div className="pt-3 sm:pt-4"><CtaBand cta={t.cta} locale={locale} /></div>
    </>
  );
}
