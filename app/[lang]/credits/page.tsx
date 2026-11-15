import { Breadcrumbs } from "@/components/sections/page-hero";
import { Photo } from "@/components/ui/photo";
import { Rich } from "@/components/ui/rich";
import { Container } from "@/components/ui/section";
import { images, type ImageKey } from "@/content/images";
import { legal } from "@/content/pages/other";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.credits.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/credits">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: legal(lang).credits.seo });
}

/** Lists every photo in content/images.ts with its photographer, as Unsplash asks. */
export default async function CreditsPage({ params }: PageProps<"/[lang]/credits">) {
  const locale = toLocale((await params).lang);
  const t = legal(locale).credits;
  const list = (Object.keys(images) as ImageKey[]).filter((k) => images[k].id);

  return (
    <Container className="pt-32 pb-24 sm:pt-40">
      <div className="space-y-6">
        <Breadcrumbs path={path} locale={locale} />
        <h1 data-split className="font-serif text-h1"><Rich text={t.title} /></h1>
        <p className="text-lead text-muted">{t.intro}</p>
      </div>
      <ul className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((k) => {
          const img = images[k];
          return (
            <li key={k} className="space-y-3">
              <Photo image={k} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[4/3] rounded-2xl" />
              <p className="text-sm">
                <a href={`${img.pageUrl}?utm_source=supplies_and_works&utm_medium=referral`} className="link-draw font-semibold" target="_blank" rel="noopener noreferrer">{t.photo}</a>{" "}
                {t.by}{" "}
                <a href={`${img.photographerUrl}?utm_source=supplies_and_works&utm_medium=referral`} className="link-draw" target="_blank" rel="noopener noreferrer">{img.photographer}</a>{" "}
                {t.on}
              </p>
              <p className="text-xs text-muted">{img.alt}</p>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
