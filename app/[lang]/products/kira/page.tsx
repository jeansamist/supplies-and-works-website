import { ProductTemplate } from "@/components/sections/product-page";
import { kira } from "@/content/pages/products";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.kira.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/products/kira">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: kira(lang).seo });
}

export default async function KiraPage({ params }: PageProps<"/[lang]/products/kira">) {
  const locale = toLocale((await params).lang);
  return <ProductTemplate t={kira(locale)} kind="kira" path={path} locale={locale} category="Shop management" image="boutique" />;
}
