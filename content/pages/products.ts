// Products hub, Badibo, Kira, More tools. Copy verbatim from 3-WEBSITE-COPY.md.
import type { Faq, FinalCta, Item, PageHeroCopy, Seo, Step } from "@/content/types";
import { localized } from "@/lib/i18n";
import { routes } from "@/lib/routes";

const demo = (title: string): FinalCta => ({ title, buttons: [{ label: "Request a demo", href: routes.contact.path }] });

export const productsHub = localized({
  en: {
    seo: {
      title: "Products | Badibo, Kira and More | Software by Supplies and Works",
      description: "SaaS products built and supported by Supplies and Works: Badibo for restaurants, Kira for shops, plus a CMS and Stock Manager.",
    } satisfies Seo,
    hero: {
      title: "Software we build, run and *support ourselves.*",
      sub: "Real products. Real customers. Real support.",
    } satisfies PageHeroCopy,
    why: {
      eyebrow: "Why we build products",
      text: "Building for clients taught us how to deliver. Building our own products taught us how to endure. Product work forces us to think about users, onboarding, pricing, uptime and support every single day. That discipline goes into everything we build for you.",
    },
    list: {
      eyebrow: "Our products",
      title: "Our *products*",
      items: [
        { name: "Badibo", text: "Restaurant management. Orders, tables, menu, billing and reports.", href: routes.badibo.path, mockup: "badibo" as const },
        { name: "Kira", text: "Shop management. Sales, stock, products and customers.", href: routes.kira.path, mockup: "kira" as const },
        { name: "CMS", text: "Manage website content without a developer.", href: `${routes.moreTools.path}#cms` },
        { name: "Stock Manager", text: "Simple, accurate inventory control.", href: `${routes.moreTools.path}#stock-manager` },
        { name: "Other tools", text: "[List other niche tools.]", href: `${routes.moreTools.path}#other-tools` },
      ],
      cta: "Learn more →",
    },
    get: {
      eyebrow: "What you get with our products",
      title: "What you get with *our products*",
      items: [
        "**Ready to use**: no long projects, start quickly.",
        "**Maintained**: updates and fixes included.",
        "**Supported**: you talk to the people who built it.",
        "**Affordable**: subscription pricing designed for small and growing businesses.",
        "**Adaptable**: custom features and integrations on request.",
      ],
    },
    cta: {
      title: "Want a product like this?",
      text: "We can build a SaaS product for your idea, or adapt one of ours to your sector.",
      buttons: [{ label: "Talk to us →", href: routes.contact.path }],
    } satisfies FinalCta,
  },
});

export type ProductPage = {
  seo: Seo;
  hero: PageHeroCopy;
  problem: { eyebrow: string; text: string };
  features: { eyebrow: string; title: string; note: string; items: Item[] };
  daily?: { eyebrow: string; title: string; items: Item[] };
  why: { eyebrow: string; title: string; items: string[] };
  production: { eyebrow: string; title: string; text: string; quote: { text: string; by: string } };
  plans: { eyebrow: string; title: string; items: { name: string; text: string }[]; note?: string };
  start: { eyebrow: string; title: string; steps: Step[] };
  faq: Faq[];
  cta: FinalCta;
};

export const badibo = localized<ProductPage>({
  en: {
    seo: {
      title: "Badibo | Restaurant Management Software | Supplies and Works",
      description:
        "Badibo helps restaurants manage orders, tables, menu, billing and reports in one simple system. Built and supported by Supplies and Works. Request a demo.",
    },
    hero: {
      eyebrow: "Product · Restaurant management",
      title: "Run your restaurant, *not your paperwork.*",
      sub: "Badibo brings orders, tables, menu, billing and reports into one simple system, built by a team that cares how kitchens and dining rooms really work.",
      buttons: [
        { label: "Request a demo", href: routes.contact.path },
        { label: "See features", href: "#features" },
      ],
    },
    problem: {
      eyebrow: "The daily problem",
      text: "Orders on paper that get lost. A kitchen that does not know what is coming. Bills that do not match. A menu that changes but nobody updates. A manager who cannot say what sold best last week. Badibo is built to fix exactly that.",
    },
    features: {
      eyebrow: "What Badibo does",
      title: "What *Badibo* does",
      note: "(Replace with the real feature list.)",
      items: [
        { title: "Orders and tables", text: "Take orders at the table or counter, send them instantly to the kitchen, and follow each table from first order to payment." },
        { title: "Menu management", text: "Update dishes, prices, categories and availability in seconds. Mark items as sold out." },
        { title: "Kitchen coordination", text: "Orders arrive clearly, in order, with notes. Fewer errors, faster service." },
        { title: "Billing and payments", text: "Accurate bills, split payments, discounts and a reliable record of every sale. [Payment methods supported, including mobile money if applicable.]" },
        { title: "Reports and insights", text: "See sales by day, hour, dish and staff member. Know what to promote and what to remove." },
        { title: "Staff and roles", text: "Different access for owners, managers, waiters and cashiers." },
        { title: "Stock *(if applicable)*", text: "Track ingredients and get alerts before you run out." },
      ],
    },
    daily: {
      eyebrow: "How it feels in daily use",
      title: "How it feels in *daily use*",
      items: [
        { title: "For the waiter", text: "faster order taking, fewer walks to the kitchen." },
        { title: "For the kitchen", text: "clear tickets, fewer misunderstandings." },
        { title: "For the cashier", text: "simple, accurate billing." },
        { title: "For the owner", text: "clear numbers, from anywhere." },
      ],
    },
    why: {
      eyebrow: "Why restaurants choose Badibo",
      title: "Why restaurants *choose Badibo*",
      items: [
        "Simple enough for staff to learn quickly.",
        "Built around real restaurant workflows.",
        "Supported by the team that created it.",
        "Hosted and backed up for you.",
        "Priced for small and growing businesses.",
      ],
    },
    production: {
      eyebrow: "In production today",
      title: "In production *today*",
      text: "3 restaurants in Cameroon use Badibo. [Add key figure such as orders processed.]",
      quote: { text: "“[CUSTOMER QUOTE]”", by: "[Name], [Restaurant], [City]" },
    },
    plans: {
      eyebrow: "Plans",
      title: "*Plans*",
      items: [
        { name: "Starter", text: "[Features, price]" },
        { name: "Pro", text: "[Features, price]" },
        { name: "Multi-location", text: "[Features, price]" },
      ],
      note: "(Define real plans.)",
    },
    start: {
      eyebrow: "Getting started",
      title: "Getting *started*",
      steps: [
        { title: "Demo", text: "we show you Badibo with your own menu." },
        { title: "Setup", text: "we configure menu, tables and users." },
        { title: "Training", text: "we train your staff." },
        { title: "Go live", text: "we support you during the first days." },
      ],
    },
    faq: [
      { q: "Does it work with unstable internet?", a: "[Answer.]" },
      { q: "Which devices can I use?", a: "[Tablet, phone, computer, printer.]" },
      { q: "Can I manage several locations?", a: "[Answer.]" },
      { q: "Can I try it before paying?", a: "[Answer.]" },
      { q: "Can you customize it for my restaurant?", a: "Yes, on request." },
      { q: "Where is my data stored and is it backed up?", a: "[Answer.]" },
    ],
    cta: demo("See Badibo working in your restaurant."),
  },
});

export const kira = localized<ProductPage>({
  en: {
    seo: {
      title: "Kira | Shop Management Software | Supplies and Works",
      description:
        "Kira helps shops manage sales, stock, products and customers with a simple, reliable system. Built and supported by Supplies and Works. Request a demo.",
    },
    hero: {
      eyebrow: "Product · Shop management",
      title: "Manage your shop *with confidence.*",
      sub: "Kira keeps your sales, stock, products and customers under control, so you always know what you have, what sold and what to reorder.",
      buttons: [
        { label: "Request a demo", href: routes.contact.path },
        { label: "See features", href: "#features" },
      ],
    },
    problem: {
      eyebrow: "The daily problem",
      text: "Stock counted by hand. Prices that differ between shelf and till. Best-sellers that run out. Slow-sellers that sit for months. A shopkeeper who works hard but cannot see the real numbers. Kira gives you the picture.",
    },
    features: {
      eyebrow: "What Kira does",
      title: "What *Kira* does",
      note: "(Replace with the real feature list.)",
      items: [
        { title: "Sales and checkout", text: "Fast, accurate sales at the counter, with receipts and several payment methods." },
        { title: "Inventory", text: "Real-time stock levels, low-stock alerts, entries and adjustments." },
        { title: "Products and pricing", text: "Catalog, categories, variants, prices and promotions." },
        { title: "Customers", text: "Customer records, purchase history and loyalty options [if applicable]." },
        { title: "Suppliers and purchasing", text: "Orders to suppliers and received goods [if applicable]." },
        { title: "Reports", text: "Daily, weekly and monthly sales, profit, best and worst sellers." },
        { title: "Users and roles", text: "Control who can see and do what." },
      ],
    },
    why: {
      eyebrow: "Why shop owners choose Kira",
      title: "Why shop owners *choose Kira*",
      items: [
        "Easy to learn, even for first-time users.",
        "Designed for how small and mid-sized shops really trade.",
        "Fewer errors, less loss, better decisions.",
        "Hosted and backed up for you.",
        "Supported by the people who built it.",
      ],
    },
    production: {
      eyebrow: "In production today",
      title: "In production *today*",
      text: "22 shops in Cameroon use Kira. [Add key figure.]",
      quote: { text: "“[CUSTOMER QUOTE]”", by: "[Name], [Shop], [City]" },
    },
    plans: {
      eyebrow: "Plans",
      title: "*Plans*",
      items: [
        { name: "Starter", text: "[Features, price]" },
        { name: "Pro", text: "[Features, price]" },
        { name: "Multi-shop", text: "[Features, price]" },
      ],
    },
    start: {
      eyebrow: "Getting started",
      title: "Getting *started*",
      steps: [
        { title: "Demo", text: "" },
        { title: "Setup of your products", text: "" },
        { title: "Training", text: "" },
        { title: "Go live with support", text: "" },
      ],
    },
    faq: [
      { q: "Can I import my existing products?", a: "[Answer.]" },
      { q: "Does it work offline?", a: "[Answer.]" },
      { q: "Which devices and printers does it support?", a: "[Answer.]" },
      { q: "Can I manage several shops?", a: "[Answer.]" },
      { q: "Can I try it first?", a: "[Answer.]" },
    ],
    cta: demo("See Kira working in your shop."),
  },
});

export const moreTools = localized({
  en: {
    seo: {
      title: "CMS, Stock Manager and More | Software Tools | Supplies and Works",
      description:
        "Focused software tools by Supplies and Works: a content management system, a stock manager and other niche products. Adaptable to your process.",
    } satisfies Seo,
    hero: {
      title: "Focused tools for *specific jobs.*",
      sub: "Smaller products that do one thing well.",
      image: "warehouse",
    } satisfies PageHeroCopy,
    tools: [
      {
        id: "cms",
        name: "CMS",
        what: "A content management system that lets your team publish and update website content without a developer.",
        features: "[Page editor, media library, blog, multi-language, roles, SEO fields].",
        bestFor: "Companies, associations and agencies that update content often.",
        image: "readingLaptop" as const,
      },
      {
        id: "stock-manager",
        name: "Stock Manager",
        what: "Simple, accurate inventory control.",
        features: "[Products, entries and exits, alerts, reports, multi-warehouse].",
        bestFor: "Shops, workshops and distributors that need a clear view of stock.",
        image: "warehouse" as const,
      },
    ],
    labels: { what: "What it is", features: "Key features", bestFor: "Best for" },
    other: { title: "Other tools", text: "[Name and one-line description of each niche tool.]" },
    cta: {
      title: "Need a custom version?",
      text: "Every business works slightly differently. We can adapt these tools, add features or integrate them with your systems.",
      buttons: [{ label: "Talk to us →", href: routes.contact.path }],
    } satisfies FinalCta,
  },
});
