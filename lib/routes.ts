// Every route of the site, with the label used in breadcrumbs, the page
// transition curtain and the sitemap. Paths are locale-less; wrap them with
// `localePath(locale, path)` when rendering links.

export const routes = {
  home: { path: "/", label: "Home" },
  about: { path: "/about", label: "About" },
  builtInAfrica: { path: "/built-in-africa", label: "Built in Africa" },
  team: { path: "/team", label: "Team" },
  services: { path: "/services", label: "Services" },
  cloud: { path: "/services/cloud-engineering", label: "Cloud Engineering" },
  backup: { path: "/services/backup-disaster-recovery", label: "Backup & Disaster Recovery" },
  software: { path: "/services/software-development", label: "Software Development" },
  webDesign: { path: "/services/web-design", label: "Web Design & Development" },
  ai: { path: "/services/ai-automation", label: "AI & Automation" },
  creative: { path: "/services/creative-studio", label: "Creative Studio" },
  local: { path: "/africa-local-services", label: "Africa & Local Services" },
  products: { path: "/products", label: "Products" },
  badibo: { path: "/products/badibo", label: "Badibo" },
  kira: { path: "/products/kira", label: "Kira" },
  moreTools: { path: "/products/more-tools", label: "More tools" },
  work: { path: "/work", label: "Work" },
  howWeWork: { path: "/how-we-work", label: "How we work" },
  engagement: { path: "/engagement-models", label: "Engagement models" },
  insights: { path: "/insights", label: "Insights" },
  careers: { path: "/careers", label: "Careers" },
  contact: { path: "/contact", label: "Contact" },
  privacy: { path: "/privacy", label: "Privacy" },
  terms: { path: "/terms", label: "Terms" },
  credits: { path: "/credits", label: "Image credits" },
} as const;

export type RouteKey = keyof typeof routes;

/** Label for any pathname (locale prefix stripped), used by the page transition. */
export function labelForPath(pathname: string): string {
  const clean = pathname.replace(/^\/fr(?=\/|$)/, "") || "/";
  const match = Object.values(routes).find((r) => r.path === clean);
  if (match) return match.label;
  if (clean.startsWith("/work/")) return "Case study";
  return "Supplies and Works";
}

/** Breadcrumb trail (excluding Home) for a locale-less path. */
export function breadcrumbsFor(path: string): { path: string; label: string }[] {
  const parts = path.split("/").filter(Boolean);
  const trail: { path: string; label: string }[] = [];
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    const found = Object.values(routes).find((r) => r.path === acc);
    trail.push({ path: acc, label: found?.label ?? part });
  }
  return trail;
}
