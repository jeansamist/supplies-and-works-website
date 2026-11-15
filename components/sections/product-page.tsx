import { FeatureSpotlight } from "@/components/interactive/feature-spotlight";
import { ProductMockup, type MockupKind } from "@/components/interactive/product-mockup";
import { PageHero } from "@/components/sections/page-hero";
import { Checklist, CtaBand, FaqSection, FeatureGrid, IntroWords, Plans } from "@/components/sections/blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { Rich } from "@/components/ui/rich";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";
import type { ImageKey } from "@/content/images";
import type { ProductPage } from "@/content/pages/products";
import type { Locale } from "@/lib/i18n";
import { faqLd, softwareApplicationLd } from "@/lib/structured-data";

/** Shared template for Badibo and Kira. */
export function ProductTemplate({
  t,
  kind,
  path,
  locale,
  category,
  image,
}: {
  t: ProductPage;
  kind: MockupKind;
  path: string;
  locale: Locale;
  category: string;
  image: ImageKey;
}) {
  const name = kind === "badibo" ? "Badibo" : "Kira";
  return (
    <>
      <JsonLd data={[softwareApplicationLd({ name, description: t.seo.description, path, category }), faqLd(t.faq)]} />
      <PageHero
        copy={t.hero}
        path={path}
        locale={locale}
        aside={
          <div data-reveal className="py-6 lg:py-0">
            <ProductMockup kind={kind} tabs />
          </div>
        }
      />
      <IntroWords eyebrow={t.problem.eyebrow} paragraphs={[t.problem.text]} locale={locale} />

      <Section id="features" tone="surface" className="scroll-mt-20">
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.features.eyebrow} title={t.features.title} />
          <FeatureSpotlight items={t.features.items} kind={kind} />
          <p data-reveal className="text-sm text-muted italic">{t.features.note}</p>
        </Container>
      </Section>

      {t.daily && <FeatureGrid eyebrow={t.daily.eyebrow} title={t.daily.title} items={t.daily.items} columns={4} />}
      <Checklist eyebrow={t.why.eyebrow} title={t.why.title} items={t.why.items} image={image} tone={t.daily ? "surface" : "default"} />

      <Section tone="ink">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <SectionHeading eyebrow={t.production.eyebrow} title={t.production.title} />
            <p data-reveal className="text-lead text-muted"><Rich text={t.production.text} /></p>
          </div>
          <TiltCard className="space-y-8 border-white/10 bg-transparent p-8 sm:p-10">
            <span aria-hidden className="font-serif text-7xl leading-none text-accent">“</span>
            <blockquote className="font-serif text-3xl"><Rich text={t.production.quote.text} /></blockquote>
            <p className="text-muted"><Rich text={t.production.quote.by} /></p>
          </TiltCard>
        </Container>
      </Section>

      <Plans eyebrow={t.plans.eyebrow} title={t.plans.title} plans={t.plans.items} footnote={t.plans.note} />

      <Section tone="surface">
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.start.eyebrow} title={t.start.title} />
          <ol data-reveal="stagger" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.start.steps.map((s, i) => (
              <li key={s.title} className="relative space-y-3 rounded-3xl border border-line bg-bg p-7">
                <span className="flex size-11 items-center justify-center rounded-full bg-accent font-serif text-lg font-semibold text-accent-ink">{i + 1}</span>
                <h3 className="font-serif text-2xl">{s.title}</h3>
                {s.text && <p className="text-muted">{s.text}</p>}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <FaqSection items={t.faq} />
      <CtaBand cta={t.cta} locale={locale} />
    </>
  );
}
