import { ContactForm } from "@/components/forms/contact-form";
import { WorldClock } from "@/components/layout/footer-parts";
import { PageHero } from "@/components/sections/page-hero";
import { FaqSection } from "@/components/sections/blocks";
import { Rich } from "@/components/ui/rich";
import { Container, Section } from "@/components/ui/section";
import { contact } from "@/content/pages/other";
import { ui } from "@/content/ui";
import { formatPhone, site, siteConfig } from "@/content/site";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.contact.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: contact(lang).seo });
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const locale = toLocale((await params).lang);
  const t = contact(locale);
  const clock = site(locale).footer.clock;

  return (
    <>
      <PageHero copy={t.hero} path={path} locale={locale}>
        <ol data-reveal="stagger" className="grid gap-3 pt-4 sm:grid-cols-2">
          {t.next.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-3xl border border-line bg-bg p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-semibold text-accent-ink">{i + 1}</span>
              <p><strong>{s.title}</strong> <Rich text={s.text} /></p>
            </li>
          ))}
        </ol>
        <p className="sr-only">{t.next.title}</p>
      </PageHero>

      <Section flush className="pb-20 sm:pb-28">
        <Container className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div data-reveal>
            <ContactForm copy={t} />
          </div>

          <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
            <div id="book" className="scroll-mt-32 space-y-4 rounded-[2rem] bg-[#0a0a0a] p-7 text-[#ededed] sm:p-9">
              <h2 className="font-serif text-h3">{t.book.title}</h2>
              <p className="text-[#edededb3]">{t.book.text}</p>
              {siteConfig.bookingUrl ? (
                <iframe src={siteConfig.bookingUrl} title={t.book.title} loading="lazy" className="h-[640px] w-full rounded-2xl bg-white" />
              ) : (
                <div className="grid aspect-[4/3] place-items-center rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-center">
                  {/* Set siteConfig.bookingUrl (content/site.ts) to a Calendly/Cal.com link to embed it here. */}
                  <div className="space-y-4">
                    <div aria-hidden className="mx-auto grid w-48 grid-cols-7 gap-1.5">
                      {Array.from({ length: 28 }).map((_, i) => (
                        <span key={i} className={i === 17 ? "aspect-square rounded-md bg-accent" : "aspect-square rounded-md bg-white/10"} />
                      ))}
                    </div>
                    <p className="text-sm"><Rich text={t.book.placeholder} /></p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-5">
              <h2 className="font-serif text-h3">{t.details.title}</h2>
              <dl className="space-y-4">
                {t.details.items.map((d) => (
                  <div key={d.label} className="border-t border-line pt-3">
                    <dt className="text-sm text-muted">{d.label}</dt>
                    <dd className="font-medium">
                      {d.label === "Email" ? (
                        <a href={`mailto:${siteConfig.email}`} className="link-draw">{d.value}</a>
                      ) : d.label.startsWith("Phone") ? (
                        <span className="flex flex-col">
                          {siteConfig.phones.map((p) => (
                            <span key={p} className="flex flex-wrap gap-x-3">
                              <a href={`tel:${p}`} className="link-draw">{formatPhone(p)}</a>
                              <a href={`https://wa.me/${p.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="text-sm font-normal text-muted link-draw">WhatsApp</a>
                            </span>
                          ))}
                        </span>
                      ) : (
                        <Rich text={d.value} />
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <WorldClock line={clock.line} homeLabel={clock.homeLabel} visitorLabel={clock.visitorLabel} />
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl">{t.follow.title}</h2>
              <p className="flex flex-wrap gap-2">
                {t.follow.items.map((s) => <Rich key={s} text={s} />)}
              </p>
            </div>
          </aside>
        </Container>
      </Section>

      <FaqSection locale={locale} title={ui(locale).quickAnswers} items={t.quick} tone="surface" />
    </>
  );
}
