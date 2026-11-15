import { ProductMockup } from "@/components/interactive/product-mockup";
import { PageHero } from "@/components/sections/page-hero";
import { Checklist, CtaBand, IntroWords } from "@/components/sections/blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { TextLink, label } from "@/components/ui/button";
import { Rich } from "@/components/ui/rich";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { productsHub } from "@/content/pages/products";
import { localePath, toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { softwareApplicationLd } from "@/lib/structured-data";

const path = routes.products.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/products">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: productsHub(lang).seo });
}

export default async function ProductsPage({ params }: PageProps<"/[lang]/products">) {
  const locale = toLocale((await params).lang);
  const t = productsHub(locale);
  const [main1, main2, ...others] = t.list.items;

  return (
    <>
      <JsonLd
        data={[
          softwareApplicationLd({ name: "Badibo", description: main1.text, path: routes.badibo.path, category: "Restaurant management" }),
          softwareApplicationLd({ name: "Kira", description: main2.text, path: routes.kira.path, category: "Shop management" }),
        ]}
      />
      <PageHero copy={t.hero} path={path} locale={locale} />
      <IntroWords eyebrow={t.why.eyebrow} paragraphs={[t.why.text]} locale={locale} />

      <Section tone="surface">
        <Container className="space-y-14">
          <SectionHeading eyebrow={t.list.eyebrow} title={t.list.title} />
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
            {[main1, main2].map((p) => (
              <div key={p.name} data-reveal className="space-y-8">
                <ProductMockup kind={p.mockup!} tabs />
                <div className="space-y-3">
                  <h3 className="font-serif text-h2">{p.name}</h3>
                  <p className="text-lg text-muted">{p.text}</p>
                  <TextLink href={localePath(locale, p.href)}>{label(t.list.cta)}</TextLink>
                </div>
              </div>
            ))}
          </div>
          <ul data-reveal="stagger" className="grid gap-4 md:grid-cols-3">
            {others.map((p) => (
              <TiltCard key={p.name} as="li" className="flex flex-col gap-4 p-7">
                <h3 className="font-serif text-h3">{p.name}</h3>
                <p className="flex-1 text-muted"><Rich text={p.text} /></p>
                <TextLink href={localePath(locale, p.href)}>{label(t.list.cta)}</TextLink>
              </TiltCard>
            ))}
          </ul>
        </Container>
      </Section>

      <Checklist eyebrow={t.get.eyebrow} title={t.get.title} items={t.get.items} image="pointOfSale" />
      <CtaBand cta={t.cta} locale={locale} />
    </>
  );
}
