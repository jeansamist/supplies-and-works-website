import { Breadcrumbs } from "@/components/sections/page-hero";
import { Rich } from "@/components/ui/rich";
import { Container } from "@/components/ui/section";
import { slugify } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

/** Privacy / Terms template: sticky table of contents + numbered sections to complete. */
export function LegalPage({
  title,
  note,
  intro,
  sections,
  placeholder,
  path,
  locale,
}: {
  title: string;
  note: string;
  intro: string;
  sections: string[];
  placeholder: string;
  path: string;
  locale: Locale;
}) {
  return (
    <Container className="pt-32 pb-24 sm:pt-40">
      <div className="space-y-6">
        <Breadcrumbs path={path} locale={locale} />
        <h1 data-split className="font-serif text-h1">{title}</h1>
        <p className="ph">{note}</p>
        {intro && <p className="max-w-3xl text-lead text-muted"><Rich text={intro} /></p>}
      </div>
      <div className="mt-16 grid gap-12 lg:grid-cols-[16rem_1fr]">
        <nav aria-label="Sections" className="lg:sticky lg:top-28 lg:self-start">
          <ol className="space-y-2 text-sm">
            {sections.map((s, i) => (
              <li key={s}>
                <a href={`#${slugify(s)}`} className="link-draw text-muted hover:text-fg">
                  {i + 1}. {s}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="space-y-12">
          {sections.map((s, i) => (
            <section key={s} id={slugify(s)} className="scroll-mt-28 space-y-3 border-t border-line pt-6">
              <h2 className="font-serif text-h3">{i + 1}. {s}</h2>
              <p className="text-muted"><Rich text={placeholder} /></p>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
