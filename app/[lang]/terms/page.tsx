import { LegalPage } from "@/components/sections/legal-page";
import { legal } from "@/content/pages/other";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.terms.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: legal(lang).terms.seo });
}

export default async function TermsPage({ params }: PageProps<"/[lang]/terms">) {
  const locale = toLocale((await params).lang);
  const t = legal(locale);
  return <LegalPage {...t.terms} placeholder={t.sectionPlaceholder} path={path} locale={locale} />;
}
