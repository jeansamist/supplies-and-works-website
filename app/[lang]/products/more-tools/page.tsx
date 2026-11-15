import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/blocks";
import { Photo } from "@/components/ui/photo";
import { Rich } from "@/components/ui/rich";
import { Container, Section } from "@/components/ui/section";
import { moreTools } from "@/content/pages/products";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

const path = routes.moreTools.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/products/more-tools">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: moreTools(lang).seo });
}

export default async function MoreToolsPage({ params }: PageProps<"/[lang]/products/more-tools">) {
  const locale = toLocale((await params).lang);
  const t = moreTools(locale);

  return (
    <>
      <PageHero copy={t.hero} path={path} locale={locale} />
      {t.tools.map((tool, i) => (
        <Section key={tool.id} id={tool.id} tone={i % 2 ? "surface" : "default"} className="scroll-mt-20">
          <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className={cn("space-y-8", i % 2 === 1 && "lg:order-2")}>
              <h2 data-split className="font-serif text-h1">{tool.name}</h2>
              <dl data-reveal="stagger" className="space-y-6">
                {([["what", tool.what], ["features", tool.features], ["bestFor", tool.bestFor]] as const).map(([k, v]) => (
                  <div key={k} className="border-t border-line pt-4">
                    <dt className="text-sm font-semibold tracking-wide text-muted uppercase">{t.labels[k]}</dt>
                    <dd className="mt-2 text-lg"><Rich text={v} /></dd>
                  </div>
                ))}
              </dl>
            </div>
            <div data-reveal="clip" className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Photo image={tool.image} sizes="(min-width: 1024px) 50vw, 100vw" className="size-full" />
            </div>
          </Container>
        </Section>
      ))}
      <Section id="other-tools" className="scroll-mt-20">
        <Container className="space-y-6">
          <h2 data-split className="font-serif text-h2">{t.other.title}</h2>
          <p data-reveal className="text-lead"><Rich text={t.other.text} /></p>
        </Container>
      </Section>
      <CtaBand cta={t.cta} locale={locale} />
    </>
  );
}
