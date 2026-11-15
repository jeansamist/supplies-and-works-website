// Case studies. Copy the placeholder entries and fill them with real projects
// (3 to 5 before launch). Each entry gets its own page at /work/<slug>.
import type { ImageKey } from "@/content/images";
import { localized } from "@/lib/i18n";
import { routes } from "@/lib/routes";

export type WorkFilter = "Cloud" | "Software" | "Web" | "AI" | "Creative" | "Products" | "Local";

export type CaseStudy = {
  slug: string;
  name: string;
  sector: string;
  studio: string;
  result: string;
  filters: WorkFilter[];
  image: ImageKey;
  /** Product pages link to their own page instead of a case study. */
  href?: string;
  detail: {
    seoDescription: string;
    meta: { label: string; value: string }[];
    keyResults: string[];
    client: string;
    challenge: string;
    approach: string;
    solution: string;
    technology: string;
    results: string;
    quote: { text: string; by: string };
    learned: string;
  };
};

const templateDetail = (): CaseStudy["detail"] => ({
  seoDescription: "[One-sentence summary of challenge and result.]",
  meta: [
    { label: "Client", value: "[Name or sector]" },
    { label: "Country", value: "[Country]" },
    { label: "Studio", value: "[Studio]" },
    { label: "Year", value: "[Year]" },
    { label: "Services", value: "[List]" },
  ],
  keyResults: ["[Figure 1]", "[Figure 2]", "[Figure 3]"],
  client: "[Who they are, what they do, their size.]",
  challenge: "[What was not working. What was at stake. What constraints existed.]",
  approach: "[Discovery, key decisions, why we chose this approach. Include a process visual.]",
  solution: "[What we built or installed. Screenshots, diagrams, short feature list.]",
  technology: "[Stack and platforms used.]",
  results:
    "[Measured outcomes with real figures: time saved, cost reduced, revenue, uptime, users. If figures cannot be shared, describe outcomes qualitatively and honestly.]",
  quote: { text: "“[Quote]”", by: "[Name], [Role]" },
  learned: "[One or two lessons. Shows maturity.]",
});

export const work = localized({
  en: {
    filters: ["All", "Cloud", "Software", "Web", "AI", "Creative", "Products", "Local"] as const,
    items: [
      {
        slug: "project-one",
        name: "[Project name]",
        sector: "[Sector]",
        studio: "[Studio]",
        result: "[One-line result]",
        filters: ["Cloud"],
        image: "cloudDashboard",
        detail: templateDetail(),
      },
      {
        slug: "project-two",
        name: "[Project name]",
        sector: "[Sector]",
        studio: "[Studio]",
        result: "[One-line result]",
        filters: ["Software", "Web"],
        image: "uiSketches",
        detail: templateDetail(),
      },
      {
        slug: "project-three",
        name: "[Project name]",
        sector: "[Sector]",
        studio: "[Studio]",
        result: "[One-line result]",
        filters: ["Local"],
        image: "serverRack",
        detail: templateDetail(),
      },
      {
        slug: "badibo",
        name: "Badibo",
        sector: "Restaurants",
        studio: "Product",
        result: "Live with paying restaurants.",
        filters: ["Products", "Software"],
        image: "restaurantKitchen",
        href: routes.badibo.path,
        detail: templateDetail(),
      },
      {
        slug: "kira",
        name: "Kira",
        sector: "Retail",
        studio: "Product",
        result: "Live with paying shops.",
        filters: ["Products", "Software"],
        image: "boutique",
        href: routes.kira.path,
        detail: templateDetail(),
      },
    ] satisfies CaseStudy[],
  },
});

/** Slugs that get a /work/[slug] page (products have their own pages). */
export const caseStudySlugs = () => work("en").items.filter((i) => !("href" in i && i.href)).map((i) => i.slug);
