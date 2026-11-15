import { notFound } from "next/navigation";
import { WorkCard } from "@/components/interactive/work-cards";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/blocks";
import { Photo } from "@/components/ui/photo";
import { Rich } from "@/components/ui/rich";
import { Container, Section } from "@/components/ui/section";
import { caseStudyLabels } from "@/content/pages/other";
import { caseStudySlugs, work } from "@/content/work";
import { enabledLocales, toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return enabledLocales.flatMap((lang) => caseStudySlugs().map((slug) => ({ lang, slug })));
}

const find = (lang: string, slug: string) => work(lang).items.find((i) => i.slug === slug);

export async function generateMetadata({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await params;
  const item = find(lang, slug);
  if (!item) return {};
  return pageMetadata({
    lang,
    path: `${routes.work.path}/${slug}`,
    seo: { title: `${item.name} | Case Study | Supplies and Works`, description: item.detail.seoDescription },
  });
}

export default async function CaseStudyPage({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await params;
  const locale = toLocale(lang);
  const item = find(locale, slug);
  if (!item) notFound();
  const L = caseStudyLabels(locale);
  const d = item.detail;
  const all = work(locale).items;
  const next = all[(all.indexOf(item) + 1) % all.length];

  const sections: [string, string][] = [
    [L.client, d.client],
    [L.challenge, d.challenge],
    [L.approach, d.approach],
    [L.solution, d.solution],
    [L.technology, d.technology],
    [L.results, d.results],
  ];

  return (
    <>
      <PageHero copy={{ title: item.name, sub: item.result }} path={`${routes.work.path}/${slug}`} locale={locale} crumb={item.name.replace(/\[|\]/g, "")}>
        <dl data-reveal="stagger" className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-sm">
          {d.meta.map((m) => (
            <div key={m.label}>
              <dt className="text-muted">{m.label}</dt>
              <dd className="font-semibold"><Rich text={m.value} /></dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section flush className="pb-16">
        <Container wide className="space-y-8">
          <div data-reveal="clip" className="relative aspect-[16/8] overflow-hidden rounded-[2rem]">
            <Photo image={item.image} sizes="100vw" priority className="size-full" />
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-wide text-muted uppercase">{L.keyResults}</p>
            <ul data-reveal="stagger" className="grid gap-4 sm:grid-cols-3">
              {d.keyResults.map((r, i) => (
                <li key={i} className="rounded-3xl bg-accent p-7 font-serif text-3xl text-accent-ink"><Rich text={r} mark={false} /></li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-16">
          {sections.map(([title, text]) => (
            <div key={title} className="grid gap-6 border-t border-line pt-10 md:grid-cols-[1fr_2fr]">
              <h2 data-split className="font-serif text-h3">{title}</h2>
              <p data-reveal className="text-lead text-muted"><Rich text={text} /></p>
            </div>
          ))}
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="space-y-8">
          <p className="text-sm font-semibold tracking-wide text-muted uppercase">{L.says}</p>
          <blockquote data-reveal className="font-serif text-h2"><Rich text={d.quote.text} /></blockquote>
          <p className="text-muted"><Rich text={d.quote.by} /></p>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 data-split className="font-serif text-h3">{L.learned}</h2>
            <p data-reveal className="text-lead text-muted"><Rich text={d.learned} /></p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-wide text-muted uppercase">{L.next}</p>
            <WorkCard item={next} locale={locale} />
          </div>
        </Container>
      </Section>
      <CtaBand cta={L.cta} locale={locale} />
    </>
  );
}
