import { PageHero } from "@/components/sections/page-hero";
import { Checklist, CtaBand, IntroWords } from "@/components/sections/blocks";
import { Rich } from "@/components/ui/rich";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { team } from "@/content/pages/company";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.team.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/team">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: team(lang).seo });
}

export default async function TeamPage({ params }: PageProps<"/[lang]/team">) {
  const locale = toLocale((await params).lang);
  const t = team(locale);

  return (
    <>
      <PageHero copy={t.hero} path={path} locale={locale} />
      <IntroWords eyebrow={t.organized.eyebrow} paragraphs={[t.organized.text]} locale={locale} />

      <Section tone="surface">
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.leads.eyebrow} title={t.leads.title} />
          <ul data-reveal="stagger" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.leads.people.map((p, i) => (
              <TiltCard key={i} as="li" className="flex flex-col gap-5 p-6">
                {/* Real team photos only: replace this placeholder with <Image src="/team/…" /> */}
                <div className="relative grid aspect-square place-items-center overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_30%_20%,var(--accent-soft),transparent_60%)] bg-surface-2">
                  <span className="font-serif text-7xl text-fg/15">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ph absolute bottom-3 left-3">[Team photo]</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl"><Rich text={p.name} mark={false} /></h3>
                  <p className="text-sm font-semibold">{p.role}</p>
                </div>
                <p className="text-muted"><Rich text={p.bio} /></p>
              </TiltCard>
            ))}
          </ul>
          <p data-reveal className="text-sm text-muted italic">{t.leads.note}</p>
        </Container>
      </Section>

      <Checklist eyebrow={t.principles.eyebrow} title={t.principles.title} items={t.principles.items} image="teamLunch" />
      <CtaBand cta={t.join} locale={locale} />
    </>
  );
}
