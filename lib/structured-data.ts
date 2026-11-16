// JSON-LD builders. Rendered with <JsonLd data={...} />.
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

const isReal = (value: string) => !!value && !value.startsWith("[");

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/logo.png"),
    description:
      "A technology partner from Douala, Cameroon. We build, run and protect the systems businesses depend on, in English and French, for clients across the world.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Douala",
      addressCountry: "CM",
    },
    areaServed: "Worldwide",
    knowsLanguage: ["en", "fr"],
    ...(isReal(siteConfig.email) ? { email: siteConfig.email } : {}),
    telephone: siteConfig.phones[0],
    sameAs: siteConfig.socials.map((s) => s.href).filter(Boolean),
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: absoluteUrl("/"),
    inLanguage: "en",
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function serviceLd({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: "Worldwide",
  };
}

export function softwareApplicationLd({
  name,
  description,
  path,
  category,
}: {
  name: string;
  description: string;
  path: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory: "BusinessApplication",
    applicationSubCategory: category,
    operatingSystem: "Web",
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function breadcrumbLd(items: { label: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items
      .filter((i) => !i.a.startsWith("["))
      .map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a.replace(/\[[^\]]*\]/g, "").trim() },
      })),
  };
}
