// Every route of the site, with the label used in breadcrumbs, the page
// transition curtain and the sitemap. Paths are locale-less; wrap them with
// `localePath(locale, path)` when rendering links.

export const routes = {
  home: { path: "/", label: "Home", fr: "Accueil" },
  about: { path: "/about", label: "About", fr: "À propos" },
  builtInAfrica: { path: "/built-in-africa", label: "Built in Africa", fr: "Conçu en Afrique" },
  team: { path: "/team", label: "Team", fr: "Équipe" },
  services: { path: "/services", label: "Services", fr: "Services" },
  cloud: { path: "/services/cloud-engineering", label: "Cloud Engineering", fr: "Ingénierie cloud" },
  backup: { path: "/services/backup-disaster-recovery", label: "Backup & Disaster Recovery", fr: "Sauvegarde et reprise après sinistre" },
  software: { path: "/services/software-development", label: "Software Development", fr: "Développement logiciel" },
  webDesign: { path: "/services/web-design", label: "Web Design & Development", fr: "Conception et développement web" },
  ai: { path: "/services/ai-automation", label: "AI & Automation", fr: "IA & Automatisation" },
  creative: { path: "/services/creative-studio", label: "Creative Studio", fr: "Studio Créatif" },
  local: { path: "/africa-local-services", label: "Africa & Local Services", fr: "Afrique & Services locaux" },
  products: { path: "/products", label: "Products", fr: "Produits" },
  badibo: { path: "/products/badibo", label: "Badibo", fr: "Badibo" },
  kira: { path: "/products/kira", label: "Kira", fr: "Kira" },
  moreTools: { path: "/products/more-tools", label: "More tools", fr: "Autres outils" },
  work: { path: "/work", label: "Work", fr: "Réalisations" },
  howWeWork: { path: "/how-we-work", label: "How we work", fr: "Notre méthode" },
  engagement: { path: "/engagement-models", label: "Engagement models", fr: "Modes de collaboration" },
  insights: { path: "/insights", label: "Insights", fr: "Publications" },
  careers: { path: "/careers", label: "Careers", fr: "Carrières" },
  contact: { path: "/contact", label: "Contact", fr: "Contact" },
  privacy: { path: "/privacy", label: "Privacy", fr: "Confidentialité" },
  terms: { path: "/terms", label: "Terms", fr: "Conditions" },
  credits: { path: "/credits", label: "Image credits", fr: "Crédits photo" },
} as const;

export type RouteKey = keyof typeof routes;

type Route = (typeof routes)[RouteKey];

/** Route label in a locale (English by default). */
export function routeLabel(route: Route, locale: string = "en"): string {
  return locale === "fr" ? route.fr : route.label;
}

/** Label for any pathname (locale prefix stripped), used by the page transition. */
export function labelForPath(pathname: string, locale: string = "en"): string {
  const clean = pathname.replace(/^\/(fr|en)(?=\/|$)/, "") || "/";
  const match = Object.values(routes).find((r) => r.path === clean);
  if (match) return routeLabel(match, locale);
  if (clean.startsWith("/work/")) return locale === "fr" ? "Étude de cas" : "Case study";
  return "Supplies and Works";
}

/** Breadcrumb trail (excluding Home) for a locale-less path. */
export function breadcrumbsFor(path: string, locale: string = "en"): { path: string; label: string }[] {
  const parts = path.split("/").filter(Boolean);
  const trail: { path: string; label: string }[] = [];
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    const found = Object.values(routes).find((r) => r.path === acc);
    trail.push({ path: acc, label: found ? routeLabel(found, locale) : part });
  }
  return trail;
}
