import { MasonryLightbox, MotionPlayer } from "@/components/interactive/masonry-lightbox";
import { PageHero } from "@/components/sections/page-hero";
import { Checklist, CtaBand, FaqSection, FeatureGrid, IntroWords, Plans, ProcessSteps } from "@/components/sections/blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { creative } from "@/content/pages/services";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { faqLd, serviceLd } from "@/lib/structured-data";

const path = routes.creative.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/services/creative-studio">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: creative(lang).seo });
}

export default async function CreativePage({ params }: PageProps<"/[lang]/services/creative-studio">) {
  const locale = toLocale((await params).lang);
  const t = creative(locale);
  const c = t.portfolio.caption;

  return (
    <>
      <JsonLd data={[serviceLd({ name: "Creative Studio", description: t.seo.description, path }), faqLd(t.faq)]} />
      <PageHero copy={t.hero} path={path} locale={locale} />
      <IntroWords eyebrow={t.intro.eyebrow} paragraphs={[t.intro.text]} locale={locale} />
      <FeatureGrid eyebrow={t.create.eyebrow} title={t.create.title} items={t.create.items} tone="surface" />
      <ProcessSteps eyebrow={t.how.eyebrow} title={t.how.title} steps={t.how.steps} locale={locale} tone="default" />
      <Plans eyebrow={t.packages.eyebrow} title={t.packages.title} plans={t.packages.items} tone="surface" />
      <Checklist eyebrow={t.principles.eyebrow} title={t.principles.title} items={t.principles.items} image="brandingMockup" />

      <Section id="portfolio" tone="surface" className="scroll-mt-20">
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.portfolio.eyebrow} title={t.portfolio.title} />
          <MotionPlayer poster="videoProduction" placeholder={t.portfolio.motion} />
          <MasonryLightbox
            tiles={[
              { image: "brandingMockup", caption: c, tall: true },
              { image: "creativeDesk", caption: c },
              { image: "uiSketches", caption: c },
              { image: "videoProduction", caption: c, tall: true },
              { image: "mobileApp", caption: c, tall: true },
              { image: "responsiveDevices", caption: c },
            ]}
          />
          <p data-reveal className="text-sm text-muted italic">{t.portfolio.note}</p>
        </Container>
      </Section>

      <FaqSection locale={locale} items={t.faq} />
      <CtaBand cta={t.cta} locale={locale} />
    </>
  );
}
