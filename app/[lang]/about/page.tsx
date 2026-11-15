import { PageHero } from "@/components/sections/page-hero";
import { Checklist, CtaBand, DataTable, FeatureGrid, IntroWords } from "@/components/sections/blocks";
import { TextLink, label } from "@/components/ui/button";
import { Rich } from "@/components/ui/rich";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/section";
import { Stats } from "@/components/ui/stats";
import { TiltCard } from "@/components/ui/tilt-card";
import { about } from "@/content/pages/company";
import { shared } from "@/content/shared";
import { localePath, toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.about.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: about(lang).seo });
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const locale = toLocale((await params).lang);
  const t = about(locale);
  const s = shared(locale);

  return (
    <>
      <PageHero copy={t.hero} path={path} locale={locale} />
      <IntroWords eyebrow={t.story.eyebrow} paragraphs={t.story.paragraphs} locale={locale} />

      {/* Milestones timeline */}
      <Section flush className="pb-20 sm:pb-28">
        <Container className="space-y-6">
          <ol data-reveal="stagger" className="relative grid gap-4 sm:grid-cols-5">
            {t.story.milestones.map((m) => (
              <li key={m.label} className="relative space-y-2 border-t-2 border-fg pt-5 dark:border-accent">
                <span aria-hidden className="absolute -top-[7px] left-0 size-3 rounded-full bg-accent ring-4 ring-bg" />
                <p className="font-serif text-3xl"><Rich text={m.year} /></p>
                <p className="text-muted">{m.label}</p>
              </li>
            ))}
          </ol>
          <p data-reveal className="text-sm text-muted italic"><Rich text={t.story.milestonesNote} /></p>
        </Container>
      </Section>

      {/* Mission & vision */}
      <Section tone="ink">
        <Container className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <div data-reveal><Eyebrow>{t.mission.eyebrow}</Eyebrow></div>
            <p data-split className="font-serif text-h2 text-balance">{t.mission.text}</p>
          </div>
          <div className="space-y-6">
            <div data-reveal><Eyebrow>{t.vision.eyebrow}</Eyebrow></div>
            <ul data-reveal="stagger" className="space-y-4">
              {t.vision.items.map((v) => (
                <li key={v.label} className="rounded-3xl border border-white/10 p-7">
                  <p className="font-serif text-2xl text-accent">{v.label}</p>
                  <p className="mt-2 text-lg text-muted">{v.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <FeatureGrid eyebrow={t.values.eyebrow} title={t.values.title} items={t.values.items} columns={3} />
      <DataTable eyebrow={t.different.eyebrow} title={t.different.title} table={t.different.table} tone="surface" />

      {/* Studios */}
      <Section>
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.studios.eyebrow} title={t.studios.title} />
          <ul data-reveal="stagger" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {s.studios.map((st) => (
              <TiltCard key={st.number} as="li" className="flex flex-col gap-4 p-6">
                <span className="font-serif text-4xl text-fg/20 dark:text-accent/60">{st.number}</span>
                <h3 className="font-serif text-xl">{st.title}</h3>
                <div className="mt-auto"><TextLink href={localePath(locale, st.cta.href)}>{label(st.cta.label).replace(/^Explore /, "")}</TextLink></div>
              </TiltCard>
            ))}
          </ul>
        </Container>
      </Section>

      <Checklist eyebrow={t.certifications.eyebrow} title={t.certifications.title} items={t.certifications.items} tone="surface" />

      <Section>
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.numbers.eyebrow} title={t.numbers.title} />
          <Stats items={t.numbers.items} />
        </Container>
      </Section>

      <CtaBand cta={t.cta} locale={locale} />
    </>
  );
}
