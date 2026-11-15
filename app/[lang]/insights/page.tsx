import { NewsletterForm } from "@/components/layout/footer-parts";
import { InsightsList } from "@/components/interactive/insights-list";
import { PageHero } from "@/components/sections/page-hero";
import { Photo } from "@/components/ui/photo";
import { Container, Section } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { insights } from "@/content/pages/other";
import { site } from "@/content/site";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.insights.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/insights">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: insights(lang).seo });
}

export default async function InsightsPage({ params }: PageProps<"/[lang]/insights">) {
  const locale = toLocale((await params).lang);
  const t = insights(locale);
  const n = site(locale).footer.newsletter;

  return (
    <>
      <PageHero copy={t.hero} path={path} locale={locale} />

      <Section flush className="pb-20">
        <Container>
          <TiltCard tilt={3} className="grid overflow-hidden md:grid-cols-2">
            <Photo image={t.featured.image} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3] md:aspect-auto" />
            <div className="space-y-5 p-8 sm:p-12">
              <p className="flex items-center gap-3 text-sm">
                <span className="rounded-full bg-accent px-3 py-1 font-semibold text-accent-ink">{t.featured.label}</span>
                <span className="text-muted">{t.featured.category}</span>
              </p>
              <h2 className="font-serif text-h2 text-balance">{t.featured.title}</h2>
              <p className="text-lg text-muted">{t.featured.text}</p>
              {/* Link to the article page when it is published. */}
              <span className="ph">[{t.featured.cta}]</span>
            </div>
          </TiltCard>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <InsightsList categories={t.categories} ideas={t.ideas} label={t.ideasLabel} />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 rounded-[2rem] border border-line p-8 sm:p-12 md:grid-cols-2 md:items-center">
          <div className="space-y-3">
            <h2 className="font-serif text-h2">{t.newsletter.title}</h2>
            <p className="text-lg text-muted">{t.newsletter.text}</p>
          </div>
          <NewsletterForm placeholder={n.placeholder} button={n.button} success={n.success} error={n.error} />
        </Container>
      </Section>
    </>
  );
}
