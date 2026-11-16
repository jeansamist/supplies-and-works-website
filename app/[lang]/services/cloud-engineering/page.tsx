import { PageHero } from "@/components/sections/page-hero";
import { Checklist, CtaBand, FaqSection, FeatureGrid, IntroWords, ProcessSteps, Statement, TagCloud } from "@/components/sections/blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { Marquee } from "@/components/ui/marquee";
import { cloud } from "@/content/pages/services";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { faqLd, serviceLd } from "@/lib/structured-data";

const path = routes.cloud.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/services/cloud-engineering">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: cloud(lang).seo });
}

export default async function CloudPage({ params }: PageProps<"/[lang]/services/cloud-engineering">) {
  const locale = toLocale((await params).lang);
  const t = cloud(locale);

  return (
    <>
      <JsonLd data={[serviceLd({ name: "Cloud Engineering", description: t.seo.description, path }), faqLd(t.faq)]} />
      <PageHero copy={t.hero} path={path} locale={locale} />
      <IntroWords eyebrow={t.intro.eyebrow} paragraphs={[t.intro.text]} locale={locale} />
      <FeatureGrid eyebrow={t.what.eyebrow} title={t.what.title} items={t.what.items} tone="surface" />
      <Statement eyebrow={t.focus.eyebrow} title={t.focus.title} paragraphs={[t.focus.text]} locale={locale} tone="ink">
        <ul data-reveal="stagger" className="flex flex-wrap gap-3 pt-2">
          {t.focus.platforms.map((p, i) => (
            <li key={p} className={i === 0 ? "rounded-full bg-accent px-5 py-2.5 font-semibold text-accent-ink" : "rounded-full border border-white/20 px-5 py-2.5 font-semibold"}>
              {p}
            </li>
          ))}
        </ul>
      </Statement>
      <Checklist eyebrow={t.projects.eyebrow} title={t.projects.title} items={t.projects.items} footnote={t.projects.note} image="cloudDashboard" />
      <TagCloud eyebrow={t.receive.eyebrow} title={t.receive.title} tags={t.receive.tags} tone="surface" />
      <Statement eyebrow={t.security.eyebrow} title={t.security.title} paragraphs={[t.security.text]} locale={locale} />
      <ProcessSteps eyebrow={t.engagement.eyebrow} title={t.engagement.title} steps={t.engagement.steps} locale={locale} />
      <Checklist eyebrow={t.why.eyebrow} title={t.why.title} items={t.why.items} image="serverRoom" />
      <div className="border-y border-line py-6">
        <Marquee items={["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Docker", "CI/CD"].map((x) => <span key={x} className="font-serif text-3xl text-muted italic">{x}</span>)} separator="✦" />
      </div>
      <FaqSection locale={locale} items={t.faq} />
      <CtaBand cta={t.cta} locale={locale} />
    </>
  );
}
