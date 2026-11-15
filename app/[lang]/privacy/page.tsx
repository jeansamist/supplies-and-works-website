import { LegalPage } from "@/components/sections/legal-page";
import { legal } from "@/content/pages/other";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.privacy.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: legal(lang).privacy.seo });
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const locale = toLocale((await params).lang);
  const t = legal(locale);
  return <LegalPage {...t.privacy} placeholder={t.sectionPlaceholder} path={path} locale={locale} />;
}
