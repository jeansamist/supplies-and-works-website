import { AppTypes } from "@/components/interactive/app-types";
import { PageHero } from "@/components/sections/page-hero";
import { Checklist, CtaBand, DataTable, FaqSection, IntroWords, ProcessSteps, Statement } from "@/components/sections/blocks";
import { TiltCard } from "@/components/ui/tilt-card";
import { JsonLd } from "@/components/seo/json-ld";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { software } from "@/content/pages/services";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { faqLd, serviceLd } from "@/lib/structured-data";

const path = routes.software.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/services/software-development">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: software(lang).seo });
}

export default async function SoftwarePage({ params }: PageProps<"/[lang]/services/software-development">) {
  const locale = toLocale((await params).lang);
  const t = software(locale);
  const [web, mobile, desktop, ...rest] = t.build.items;

  return (
    <>
      <JsonLd data={[serviceLd({ name: "Custom Software Development", description: t.seo.description, path }), faqLd(t.faq)]} />
      <PageHero copy={t.hero} path={path} locale={locale} />
      <IntroWords eyebrow={t.proof.eyebrow} paragraphs={[t.proof.text]} cta={t.proof.cta} locale={locale} />

      {/* What we build: web / mobile / desktop carousel, then the rest as cards */}
      <Section tone="surface">
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.build.eyebrow} title={t.build.title} />
          <AppTypes
            items={[
              { ...web, device: "web" },
              { ...mobile, device: "mobile" },
              { ...desktop, device: "desktop" },
            ]}
          />
          <ul data-reveal="stagger" className="grid gap-4 md:grid-cols-3">
            {rest.map((r) => (
              <TiltCard key={r.title} as="li" className="space-y-3 p-7">
                <h3 className="font-serif text-h3">{r.title}</h3>
                <p className="text-muted">{r.text}</p>
              </TiltCard>
            ))}
          </ul>
        </Container>
      </Section>

      <Checklist eyebrow={t.good.eyebrow} title={t.good.title} items={t.good.items} image="africanDeveloper" />
      <ProcessSteps eyebrow={t.process.eyebrow} title={t.process.title} steps={t.process.steps} locale={locale} />
      <DataTable eyebrow={t.toolbox.eyebrow} title={t.toolbox.title} table={t.toolbox.table} footnote={t.toolbox.note} />
      <Statement eyebrow={t.team.eyebrow} title={t.team.title} paragraphs={[t.team.text]} locale={locale} tone="ink" />
      <Checklist eyebrow={t.cases.eyebrow} title={t.cases.title} items={t.cases.items} footnote={t.cases.note} image="mobileApp" />
      <FaqSection items={t.faq} tone="surface" />
      <div className="pt-3 sm:pt-4"><CtaBand cta={t.cta} locale={locale} /></div>
    </>
  );
}
