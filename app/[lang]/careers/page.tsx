import { ApplyForm } from "@/components/forms/apply-form";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid, Statement, TagCloud } from "@/components/sections/blocks";
import { TextLink, label } from "@/components/ui/button";
import { Rich } from "@/components/ui/rich";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { careers } from "@/content/pages/company";
import { ui } from "@/content/ui";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.careers.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/careers">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: careers(lang).seo });
}

export default async function CareersPage({ params }: PageProps<"/[lang]/careers">) {
  const locale = toLocale((await params).lang);
  const t = careers(locale);

  return (
    <>
      <PageHero copy={t.hero} path={path} locale={locale} />
      <FeatureGrid eyebrow={t.why.eyebrow} title={t.why.title} items={t.why.items} />
      <TagCloud eyebrow={t.how.eyebrow} title={t.how.title} tags={t.how.tags} tone="surface" />
      <TagCloud eyebrow={t.lookFor.eyebrow} title={t.lookFor.title} tags={t.lookFor.tags} />

      <Section tone="surface">
        <Container className="space-y-10">
          <SectionHeading eyebrow={t.roles.eyebrow} title={t.roles.title} />
          <ul data-reveal="stagger" className="divide-y divide-line border-y border-line">
            {t.roles.items.map((r, i) => (
              <li key={i} className="grid gap-3 py-6 sm:grid-cols-[1.5fr_1fr_1fr_1fr_auto] sm:items-center">
                <p className="font-serif text-2xl"><Rich text={r.title} mark={false} /></p>
                <p><Rich text={r.studio} /></p>
                <p><Rich text={r.place} /></p>
                <p><Rich text={r.type} /></p>
                <TextLink href="#apply">{label(r.apply)}</TextLink>
              </li>
            ))}
          </ul>
          <p data-reveal className="text-muted italic">({ui(locale).careersNoRoles}: “{t.roles.empty}”)</p>
        </Container>
      </Section>

      <Statement eyebrow={t.internships.eyebrow} title={t.internships.title} paragraphs={[t.internships.text]} locale={locale} />

      <Section tone="ink">
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />
          <ol data-reveal="stagger" className="grid gap-3 sm:grid-cols-5">
            {t.process.steps.map((s, i) => (
              <li key={s} className="rounded-3xl border border-white/10 p-6">
                <span className="font-serif text-4xl text-accent">{i + 1}</span>
                <p className="mt-6 font-semibold">{s}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="apply" className="scroll-mt-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow={t.apply.eyebrow} title={t.apply.title} />
          <div data-reveal><ApplyForm copy={t.apply} /></div>
        </Container>
      </Section>
    </>
  );
}
