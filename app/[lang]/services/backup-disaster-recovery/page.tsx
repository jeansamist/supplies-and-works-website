import { BackupDiagram } from "@/components/interactive/backup-diagram";
import { RpoRto } from "@/components/interactive/rpo-rto";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand, DataTable, FaqSection, FeatureGrid, Plans, ProcessSteps, TagCloud } from "@/components/sections/blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { Rich } from "@/components/ui/rich";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { backup } from "@/content/pages/services";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { faqLd, serviceLd } from "@/lib/structured-data";

const path = routes.backup.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/services/backup-disaster-recovery">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: backup(lang).seo });
}

export default async function BackupPage({ params }: PageProps<"/[lang]/services/backup-disaster-recovery">) {
  const locale = toLocale((await params).lang);
  const t = backup(locale);

  return (
    <>
      <JsonLd data={[serviceLd({ name: "Backup and Disaster Recovery", description: t.seo.description, path }), faqLd(t.faq)]} />
      <PageHero copy={t.hero} path={path} locale={locale} aside={<div data-reveal><BackupDiagram locale={locale} /></div>} />

      {/* The risk is real */}
      <Section tone="ink">
        <Container className="space-y-14">
          <SectionHeading eyebrow={t.risk.eyebrow} title={t.risk.title} />
          <ul data-reveal="stagger" className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {t.risk.items.map((r) => (
              <li key={r.title} className="space-y-3 bg-[#0a0a0a] p-7 transition-colors hover:bg-[#151515]">
                <h3 className="font-serif text-2xl text-accent">{r.title}</h3>
                <p className="text-muted">{r.text}</p>
              </li>
            ))}
          </ul>
          <p data-split className="max-w-4xl font-serif text-h3 text-balance">{t.risk.conclusion}</p>
        </Container>
      </Section>

      <FeatureGrid eyebrow={t.setup.eyebrow} title={t.setup.title} items={t.setup.items} />

      <Section tone="surface">
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.numbers.eyebrow} title={t.numbers.title} />
          <RpoRto rpo={t.numbers.rpo} rto={t.numbers.rto} examples={t.numbers.examples} />
          <p data-reveal className="max-w-3xl text-lead text-muted"><Rich text={t.numbers.outro} /></p>
        </Container>
      </Section>

      <TagCloud eyebrow={t.protect.eyebrow} title={t.protect.title} tags={t.protect.tags} footnote={t.protect.note} />
      <ProcessSteps eyebrow={t.how.eyebrow} title={t.how.title} steps={t.how.steps} locale={locale} />
      <DataTable eyebrow={t.options.eyebrow} title={t.options.title} table={t.options.table} />
      <TagCloud eyebrow={t.who.eyebrow} title={t.who.title} tags={t.who.tags} tone="surface" marquee />
      <Plans eyebrow={t.plans.eyebrow} title={t.plans.title} lead={t.plans.lead} plans={t.plans.items} footnote={t.plans.note} />
      <FaqSection locale={locale} items={t.faq} tone="surface" />
      <div className="pt-3 sm:pt-4"><CtaBand cta={t.cta} locale={locale} /></div>
    </>
  );
}
