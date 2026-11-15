import { PageHero } from "@/components/sections/page-hero";
import { Checklist, CtaBand, FaqSection, ProcessSteps, Statement, TagCloud } from "@/components/sections/blocks";
import { WorldClock } from "@/components/layout/footer-parts";
import { JsonLd } from "@/components/seo/json-ld";
import { howWeWork } from "@/content/pages/company";
import { site } from "@/content/site";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { faqLd } from "@/lib/structured-data";

const path = routes.howWeWork.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/how-we-work">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: howWeWork(lang).seo });
}

export default async function HowWeWorkPage({ params }: PageProps<"/[lang]/how-we-work">) {
  const locale = toLocale((await params).lang);
  const t = howWeWork(locale);
  const clock = site(locale).footer.clock;

  return (
    <>
      <JsonLd data={faqLd(t.faq)} />
      <PageHero copy={t.hero} path={path} locale={locale} />
      <ProcessSteps eyebrow={t.journey.eyebrow} title={t.journey.title} steps={t.journey.steps} locale={locale} tone="default" />
      <Checklist eyebrow={t.communicate.eyebrow} title={t.communicate.title} items={t.communicate.items} image="videoCall" tone="surface" />
      <Statement eyebrow={t.timezones.eyebrow} title={t.timezones.title} paragraphs={[t.timezones.text]} locale={locale}>
        <div data-reveal className="pt-4">
          <WorldClock line={clock.line} homeLabel={clock.homeLabel} visitorLabel={clock.visitorLabel} />
        </div>
      </Statement>
      <TagCloud eyebrow={t.quality.eyebrow} title={t.quality.title} tags={t.quality.tags} tone="surface" />
      <TagCloud eyebrow={t.tools.eyebrow} title={t.tools.title} tags={t.tools.tags} />
      <Statement eyebrow={t.ask.eyebrow} title={t.ask.title} paragraphs={[t.ask.text]} locale={locale} tone="ink" />
      <FaqSection items={t.faq} />
      <CtaBand cta={t.cta} locale={locale} />
    </>
  );
}
