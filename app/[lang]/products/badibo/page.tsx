import { ProductTemplate } from "@/components/sections/product-page";
import { badibo } from "@/content/pages/products";
import { toLocale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const path = routes.badibo.path;

export async function generateMetadata({ params }: PageProps<"/[lang]/products/badibo">) {
  const { lang } = await params;
  return pageMetadata({ lang, path, seo: badibo(lang).seo });
}

export default async function BadiboPage({ params }: PageProps<"/[lang]/products/badibo">) {
  const locale = toLocale((await params).lang);
  return <ProductTemplate t={badibo(locale)} kind="badibo" path={path} locale={locale} category="Restaurant management" image="restaurantKitchen" />;
}
