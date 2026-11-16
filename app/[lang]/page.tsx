import { HomeHero } from "@/components/hero/home-hero";
import { AfricaMap } from "@/components/interactive/africa-map";
import { BackupDiagram } from "@/components/interactive/backup-diagram";
import { BuildRunProtect } from "@/components/interactive/build-run-protect";
import { IndustriesList } from "@/components/interactive/industries";
import { ProductMockup } from "@/components/interactive/product-mockup";
import { StudiosScroller } from "@/components/interactive/studios-scroller";
import { WorkCarousel } from "@/components/interactive/work-cards";
import { CtaBand, FaqSection, FeatureGrid, IntroWords, ProcessSteps, Testimonials } from "@/components/sections/blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { TextLink, label } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { Rich } from "@/components/ui/rich";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Stats } from "@/components/ui/stats";
import { TiltCard } from "@/components/ui/tilt-card";
import { home } from "@/content/pages/home";
import { shared } from "@/content/shared";
import { work } from "@/content/work";
import { ui } from "@/content/ui";
import { localePath, toLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { faqLd } from "@/lib/structured-data";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  return pageMetadata({ lang, path: "/", seo: home(lang).seo });
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const locale = toLocale((await params).lang);
  const t = home(locale);
  const s = shared(locale);
  const l = (p: string) => localePath(locale, p);

  return (
    <>
      <JsonLd data={faqLd(t.faq)} />

      {/* 1. Interactive hero */}
      <HomeHero
        copy={{ ...t.hero, primary: { ...t.hero.primary, href: l(t.hero.primary.href) }, secondary: { ...t.hero.secondary, href: l(t.hero.secondary.href) } }}
      />

      {/* 2. Technology strip */}
      <div id="after-hero" className="border-y border-line py-6">
        <Marquee
          label={ui(locale).techStrip}
          items={t.tech.map((name) => (
            <span key={name} className="text-xl font-semibold text-muted transition-colors hover:text-fg sm:text-2xl">
              {name}
            </span>
          ))}
          separator="✦"
          duration={45}
        />
      </div>

      {/* 3. Who we are — word-by-word */}
      <IntroWords eyebrow={t.who.eyebrow} paragraphs={[t.who.text]} locale={locale} />

      {/* 4. Studios — pinned horizontal scroll */}
      <StudiosScroller eyebrow={t.studios.eyebrow} title={t.studios.title} studios={s.studios} locale={locale} />

      {/* 5. Build · Run · Protect */}
      <BuildRunProtect eyebrow={t.pillars.eyebrow} title={t.pillars.title} pillars={s.pillars} includesLabel={s.includesLabel} locale={locale} />

      {/* 6. Your data, protected */}
      <Section>
        <Container className="space-y-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <SectionHeading eyebrow={t.data.eyebrow} title={t.data.title} />
            <p data-reveal className="text-lead text-pretty text-muted">
              {t.data.text}
            </p>
          </div>
          <div data-reveal>
            <BackupDiagram locale={locale} />
          </div>
          <ul data-reveal="stagger" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.data.points.map((p, i) => (
              <TiltCard key={p.title} as="li" className="space-y-3 p-7">
                <span className="text-sm font-semibold text-muted tabular-nums">0{i + 1}</span>
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="text-muted">{p.text}</p>
              </TiltCard>
            ))}
          </ul>
          <div data-reveal>
            <TextLink href={l(t.data.cta.href)}>{label(t.data.cta.label)}</TextLink>
          </div>
        </Container>
      </Section>

      {/* 7. Products with 3D mockups */}
      <Section tone="surface">
        <Container className="space-y-16">
          <SectionHeading eyebrow={t.products.eyebrow} title={t.products.title} lead={t.products.text} />
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
            {t.products.items.map((p, i) => (
              <div key={p.name} data-reveal className="space-y-8">
                <ProductMockup kind={i === 0 ? "badibo" : "kira"} />
                <div className="space-y-3">
                  <h3 className="font-serif text-h3">
                    {p.name}: <span className="text-muted">{p.tagline}</span>
                  </h3>
                  <p className="text-lg text-muted">{p.text}</p>
                  <TextLink href={l(p.cta.href)}>{label(p.cta.label)}</TextLink>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. Key numbers */}
      <Section>
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.numbers.eyebrow} title={t.numbers.title} />
          <Stats items={t.numbers.items} />
        </Container>
      </Section>

      {/* Why teams choose us */}
      <FeatureGrid eyebrow={t.why.eyebrow} title={t.why.title} items={t.why.items} tone="surface" />

      {/* Industries */}
      <Section>
        <Container className="space-y-12">
          <SectionHeading eyebrow={t.industries.eyebrow} title={t.industries.title} />
          <IndustriesList items={t.industries.items} />
        </Container>
      </Section>

      {/* 9. Built in Africa */}
      <Section tone="ink" className="overflow-hidden">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <SectionHeading eyebrow={t.africa.eyebrow} title={t.africa.title} />
            <p data-reveal className="text-lead text-pretty text-muted">
              <Rich text={t.africa.text} />
            </p>
            <div data-reveal>
              <TextLink href={l(t.africa.cta.href)}>{label(t.africa.cta.label)}</TextLink>
            </div>
          </div>
          <div data-reveal>
            <AfricaMap locale={locale} />
          </div>
        </Container>
      </Section>

      {/* 10. Selected work carousel */}
      <Section>
        <Container className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} />
          <div data-reveal>
            <TextLink href={l(t.work.cta.href)}>{label(t.work.cta.label)}</TextLink>
          </div>
        </Container>
        <WorkCarousel items={work(locale).items} locale={locale} />
      </Section>

      {/* 11. Process */}
      <ProcessSteps eyebrow={t.process.eyebrow} title={t.process.title} steps={t.process.steps} cta={t.process.cta} locale={locale} />

      {/* 12. Testimonials (placeholders until real ones exist) */}
      <Testimonials locale={locale} title={t.testimonials.title} quotes={t.testimonials.quotes} />

      {/* 13. FAQ */}
      <FaqSection locale={locale} items={t.faq} tone="surface" />

      {/* 14. Final CTA */}
      <div className="pt-3 sm:pt-4">
        <CtaBand cta={t.finalCta} locale={locale} />
      </div>
    </>
  );
}
