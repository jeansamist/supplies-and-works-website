import { AfricaMap } from "@/components/interactive/africa-map";
import { TimezoneOverlap } from "@/components/interactive/timezone-overlap";
import { PageHero } from "@/components/sections/page-hero";
import { Checklist, CtaBand, DataTable, FeatureGrid, IntroWords, SplitMedia } from "@/components/sections/blocks";
import { Photo } from "@/components/ui/photo";
import { Container, Section } from "@/components/ui/section";
import { builtInAfrica } from "@/content/pages/company";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.builtInAfrica.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/built-in-africa">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: builtInAfrica(lang).seo });
}

export default async function BuiltInAfricaPage({ params }: PageProps<"/[lang]/built-in-africa">) {
  const locale = toLocale((await params).lang);
  const t = builtInAfrica(locale);

  return (
    <>
      <PageHero
        copy={t.hero}
        path={path}
        locale={locale}
        aside={
          <div data-reveal className="relative">
            <AfricaMap />
          </div>
        }
      />

      {/* Photo strip: Douala, Cameroon, market, students */}
      <Section flush className="pb-8">
        <Container wide>
          <div data-reveal="stagger" className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {(["heroCity", "cameroonLandscape", "africanMarket", "africanStudents"] as const).map((img, i) => (
              <div key={img} className={i % 2 ? "lg:mt-16" : ""}>
                <Photo image={img} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[3/4] rounded-[1.75rem]" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <IntroWords eyebrow={t.continent.eyebrow} paragraphs={[t.continent.text]} locale={locale} />
      <FeatureGrid eyebrow={t.reasons.eyebrow} title={t.reasons.title} items={t.reasons.items} tone="surface" />

      <DataTable eyebrow={t.overlap.eyebrow} title={t.overlap.title} table={t.overlap.table} footnote={t.overlap.footnote} />
      <Section flush className="pb-20 sm:pb-28">
        <Container>
          <TimezoneOverlap label={t.overlap.pickLabel} />
        </Container>
      </Section>

      <Checklist eyebrow={t.remote.eyebrow} title={t.remote.title} items={t.remote.items} image="videoCall" tone="surface" />
      <FeatureGrid eyebrow={t.myths.eyebrow} title={t.myths.title} items={t.myths.items} numbered={false} tone="ink" />
      <SplitMedia eyebrow={t.beyond.eyebrow} title={t.beyond.title} paragraphs={[t.beyond.text]} image="youngDevelopers" locale={locale} />
      <CtaBand cta={t.cta} locale={locale} />
    </>
  );
}
