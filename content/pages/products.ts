// Products hub, Badibo, Kira, More tools. Copy verbatim from 3-WEBSITE-COPY.md.
import type { Faq, FinalCta, Item, PageHeroCopy, Seo, Step } from "@/content/types";
import { localized } from "@/lib/i18n";
import { routes } from "@/lib/routes";

const demo = (title: string): FinalCta => ({ title, buttons: [{ label: "Request a demo", href: routes.contact.path }] });
const demoFr = (title: string): FinalCta => ({ title, buttons: [{ label: "Demander une démo", href: routes.contact.path }] });

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
  fr: {
    seo: {
      title: "Produits | Badibo, Kira et plus | Logiciels par Supplies and Works",
      description: "Des produits SaaS conçus et maintenus par Supplies and Works : Badibo pour les restaurants, Kira pour les commerces, ainsi qu’un CMS et Stock Manager.",
    } satisfies Seo,
    hero: {
      title: "Des logiciels que nous concevons, exploitons et *accompagnons nous-mêmes.*",
      sub: "De vrais produits. De vrais clients. Un vrai support.",
    } satisfies PageHeroCopy,
    why: {
      eyebrow: "Pourquoi nous créons des produits",
      text: "Travailler pour nos clients nous a appris à livrer. Créer nos propres produits nous a appris à durer. Le travail produit nous oblige à penser chaque jour aux utilisateurs, à la prise en main, aux tarifs, à la disponibilité et au support. Cette exigence se retrouve dans tout ce que nous construisons pour vous.",
    },
    list: {
      eyebrow: "Nos produits",
      title: "Nos *produits*",
      items: [
        { name: "Badibo", text: "Gestion de restaurant. Commandes, tables, menu, facturation et rapports.", href: routes.badibo.path, mockup: "badibo" as const },
        { name: "Kira", text: "Gestion de commerce. Ventes, stock, produits et clients.", href: routes.kira.path, mockup: "kira" as const },
        { name: "CMS", text: "Gérez le contenu de votre site sans développeur.", href: `${routes.moreTools.path}#cms` },
        { name: "Stock Manager", text: "Une gestion des stocks simple et précise.", href: `${routes.moreTools.path}#stock-manager` },
        { name: "Autres outils", text: "[Lister les autres outils spécialisés.]", href: `${routes.moreTools.path}#other-tools` },
      ],
      cta: "En savoir plus →",
    },
    get: {
      eyebrow: "Ce que vous offrent nos produits",
      title: "Ce que vous offrent *nos produits*",
      items: [
        "**Prêts à l’emploi** : pas de longs projets, vous démarrez vite.",
        "**Maintenus** : mises à jour et correctifs inclus.",
        "**Accompagnés** : vous échangez avec ceux qui les ont conçus.",
        "**Abordables** : un abonnement pensé pour les petites entreprises et celles en croissance.",
        "**Adaptables** : fonctionnalités et intégrations sur mesure à la demande.",
      ],
    },
    cta: {
      title: "Vous voulez un produit comme celui-ci ?",
      text: "Nous pouvons créer un produit SaaS à partir de votre idée, ou adapter l’un des nôtres à votre secteur.",
      buttons: [{ label: "Parlons-en →", href: routes.contact.path }],
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
  fr: {
    seo: {
      title: "Badibo | Logiciel de gestion de restaurant | Supplies and Works",
      description:
        "Badibo aide les restaurants à gérer commandes, tables, menu, facturation et rapports dans un seul système simple. Conçu et maintenu par Supplies and Works. Demandez une démo.",
    },
    hero: {
      eyebrow: "Produit · Gestion de restaurant",
      title: "Gérez votre restaurant, *pas votre paperasse.*",
      sub: "Badibo réunit commandes, tables, menu, facturation et rapports dans un seul système simple, conçu par une équipe attentive à la réalité des cuisines et des salles.",
      buttons: [
        { label: "Demander une démo", href: routes.contact.path },
        { label: "Voir les fonctionnalités", href: "#features" },
      ],
    },
    problem: {
      eyebrow: "Le problème au quotidien",
      text: "Des commandes sur papier qui se perdent. Une cuisine qui ne sait pas ce qui arrive. Des additions qui ne correspondent pas. Un menu qui change sans que personne ne le mette à jour. Un gérant incapable de dire ce qui s’est le mieux vendu la semaine dernière. Badibo est conçu pour résoudre exactement cela.",
    },
    features: {
      eyebrow: "Ce que fait Badibo",
      title: "Ce que fait *Badibo*",
      note: "(Remplacer par la liste réelle des fonctionnalités.)",
      items: [
        { title: "Commandes et tables", text: "Prenez les commandes à table ou au comptoir, envoyez-les instantanément en cuisine et suivez chaque table de la première commande jusqu’au paiement." },
        { title: "Gestion du menu", text: "Modifiez plats, prix, catégories et disponibilités en quelques secondes. Indiquez les plats épuisés." },
        { title: "Coordination en cuisine", text: "Les commandes arrivent clairement, dans l’ordre, avec leurs notes. Moins d’erreurs, un service plus rapide." },
        { title: "Facturation et paiements", text: "Des additions exactes, des paiements partagés, des remises et un historique fiable de chaque vente. [Moyens de paiement acceptés, y compris le mobile money le cas échéant.]" },
        { title: "Rapports et analyses", text: "Consultez les ventes par jour, par heure, par plat et par membre du personnel. Sachez quoi mettre en avant et quoi retirer." },
        { title: "Personnel et rôles", text: "Des accès différents pour les propriétaires, gérants, serveurs et caissiers." },
        { title: "Stock *(le cas échéant)*", text: "Suivez vos ingrédients et recevez des alertes avant la rupture." },
      ],
    },
    daily: {
      eyebrow: "Au quotidien",
      title: "Au *quotidien*",
      items: [
        { title: "Pour le serveur", text: "une prise de commande plus rapide, moins d’allers-retours en cuisine." },
        { title: "Pour la cuisine", text: "des bons clairs, moins de malentendus." },
        { title: "Pour le caissier", text: "une facturation simple et exacte." },
        { title: "Pour le propriétaire", text: "des chiffres clairs, où que vous soyez." },
      ],
    },
    why: {
      eyebrow: "Pourquoi les restaurants choisissent Badibo",
      title: "Pourquoi les restaurants *choisissent Badibo*",
      items: [
        "Assez simple pour que le personnel l’adopte rapidement.",
        "Pensé autour du fonctionnement réel d’un restaurant.",
        "Accompagné par l’équipe qui l’a créé.",
        "Hébergé et sauvegardé pour vous.",
        "Un tarif adapté aux petites entreprises et à celles en croissance.",
      ],
    },
    production: {
      eyebrow: "En production aujourd’hui",
      title: "En production *aujourd’hui*",
      text: "3 restaurants au Cameroun utilisent Badibo. [Ajouter un chiffre clé, par exemple le nombre de commandes traitées.]",
      quote: { text: "« [TÉMOIGNAGE CLIENT] »", by: "[Nom], [Restaurant], [Ville]" },
    },
    plans: {
      eyebrow: "Formules",
      title: "*Formules*",
      items: [
        { name: "Starter", text: "[Fonctionnalités, prix]" },
        { name: "Pro", text: "[Fonctionnalités, prix]" },
        { name: "Multi-établissements", text: "[Fonctionnalités, prix]" },
      ],
      note: "(Définir les formules réelles.)",
    },
    start: {
      eyebrow: "Pour démarrer",
      title: "Pour *démarrer*",
      steps: [
        { title: "Démo", text: "nous vous présentons Badibo avec votre propre menu." },
        { title: "Configuration", text: "nous paramétrons le menu, les tables et les utilisateurs." },
        { title: "Formation", text: "nous formons votre personnel." },
        { title: "Mise en service", text: "nous vous accompagnons pendant les premiers jours." },
      ],
    },
    faq: [
      { q: "Fonctionne-t-il avec une connexion internet instable ?", a: "[Réponse.]" },
      { q: "Quels appareils puis-je utiliser ?", a: "[Tablette, téléphone, ordinateur, imprimante.]" },
      { q: "Puis-je gérer plusieurs établissements ?", a: "[Réponse.]" },
      { q: "Puis-je l’essayer avant de payer ?", a: "[Réponse.]" },
      { q: "Pouvez-vous l’adapter à mon restaurant ?", a: "Oui, sur demande." },
      { q: "Où sont stockées mes données et sont-elles sauvegardées ?", a: "[Réponse.]" },
    ],
    cta: demoFr("Découvrez Badibo en action dans votre restaurant."),
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
  fr: {
    seo: {
      title: "Kira | Logiciel de gestion de commerce | Supplies and Works",
      description:
        "Kira aide les commerces à gérer ventes, stock, produits et clients avec un système simple et fiable. Conçu et maintenu par Supplies and Works. Demandez une démo.",
    },
    hero: {
      eyebrow: "Produit · Gestion de commerce",
      title: "Gérez votre commerce *en toute confiance.*",
      sub: "Kira garde vos ventes, votre stock, vos produits et vos clients sous contrôle : vous savez toujours ce que vous avez, ce qui s’est vendu et ce qu’il faut recommander.",
      buttons: [
        { label: "Demander une démo", href: routes.contact.path },
        { label: "Voir les fonctionnalités", href: "#features" },
      ],
    },
    problem: {
      eyebrow: "Le problème au quotidien",
      text: "Un stock compté à la main. Des prix différents entre le rayon et la caisse. Des meilleures ventes en rupture. Des articles qui dorment pendant des mois. Un commerçant qui travaille dur sans voir ses vrais chiffres. Kira vous donne une vue d’ensemble.",
    },
    features: {
      eyebrow: "Ce que fait Kira",
      title: "Ce que fait *Kira*",
      note: "(Remplacer par la liste réelle des fonctionnalités.)",
      items: [
        { title: "Ventes et encaissement", text: "Des ventes rapides et précises au comptoir, avec tickets de caisse et plusieurs moyens de paiement." },
        { title: "Inventaire", text: "Niveaux de stock en temps réel, alertes de stock bas, entrées et ajustements." },
        { title: "Produits et tarifs", text: "Catalogue, catégories, variantes, prix et promotions." },
        { title: "Clients", text: "Fiches clients, historique d’achats et options de fidélité [le cas échéant]." },
        { title: "Fournisseurs et achats", text: "Commandes fournisseurs et réception des marchandises [le cas échéant]." },
        { title: "Rapports", text: "Ventes quotidiennes, hebdomadaires et mensuelles, marges, meilleures et moins bonnes ventes." },
        { title: "Utilisateurs et rôles", text: "Contrôlez qui peut voir et faire quoi." },
      ],
    },
    why: {
      eyebrow: "Pourquoi les commerçants choisissent Kira",
      title: "Pourquoi les commerçants *choisissent Kira*",
      items: [
        "Facile à prendre en main, même pour un premier logiciel.",
        "Conçu pour la réalité des petits et moyens commerces.",
        "Moins d’erreurs, moins de pertes, de meilleures décisions.",
        "Hébergé et sauvegardé pour vous.",
        "Accompagné par ceux qui l’ont conçu.",
      ],
    },
    production: {
      eyebrow: "En production aujourd’hui",
      title: "En production *aujourd’hui*",
      text: "22 commerces au Cameroun utilisent Kira. [Ajouter un chiffre clé.]",
      quote: { text: "« [TÉMOIGNAGE CLIENT] »", by: "[Nom], [Commerce], [Ville]" },
    },
    plans: {
      eyebrow: "Formules",
      title: "*Formules*",
      items: [
        { name: "Starter", text: "[Fonctionnalités, prix]" },
        { name: "Pro", text: "[Fonctionnalités, prix]" },
        { name: "Multi-boutiques", text: "[Fonctionnalités, prix]" },
      ],
    },
    start: {
      eyebrow: "Pour démarrer",
      title: "Pour *démarrer*",
      steps: [
        { title: "Démo", text: "" },
        { title: "Configuration de vos produits", text: "" },
        { title: "Formation", text: "" },
        { title: "Mise en service accompagnée", text: "" },
      ],
    },
    faq: [
      { q: "Puis-je importer mes produits existants ?", a: "[Réponse.]" },
      { q: "Fonctionne-t-il hors ligne ?", a: "[Réponse.]" },
      { q: "Quels appareils et imprimantes sont pris en charge ?", a: "[Réponse.]" },
      { q: "Puis-je gérer plusieurs boutiques ?", a: "[Réponse.]" },
      { q: "Puis-je l’essayer d’abord ?", a: "[Réponse.]" },
    ],
    cta: demoFr("Découvrez Kira en action dans votre commerce."),
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
  fr: {
    seo: {
      title: "CMS, Stock Manager et plus | Outils logiciels | Supplies and Works",
      description:
        "Des outils logiciels ciblés par Supplies and Works : un système de gestion de contenu, un gestionnaire de stock et d’autres produits spécialisés. Adaptables à vos processus.",
    } satisfies Seo,
    hero: {
      title: "Des outils ciblés pour *des besoins précis.*",
      sub: "Des produits plus petits qui font une chose, et la font bien.",
      image: "warehouse",
    } satisfies PageHeroCopy,
    tools: [
      {
        id: "cms",
        name: "CMS",
        what: "Un système de gestion de contenu qui permet à votre équipe de publier et de mettre à jour le contenu de votre site sans développeur.",
        features: "[Éditeur de pages, médiathèque, blog, multilingue, rôles, champs SEO].",
        bestFor: "Entreprises, associations et agences qui mettent souvent leur contenu à jour.",
        image: "readingLaptop" as const,
      },
      {
        id: "stock-manager",
        name: "Stock Manager",
        what: "Une gestion des stocks simple et précise.",
        features: "[Produits, entrées et sorties, alertes, rapports, multi-entrepôts].",
        bestFor: "Commerces, ateliers et distributeurs qui ont besoin d’une vision claire de leur stock.",
        image: "warehouse" as const,
      },
    ],
    labels: { what: "De quoi s’agit-il", features: "Fonctionnalités clés", bestFor: "Idéal pour" },
    other: { title: "Autres outils", text: "[Nom et description en une ligne de chaque outil spécialisé.]" },
    cta: {
      title: "Besoin d’une version sur mesure ?",
      text: "Chaque entreprise fonctionne un peu différemment. Nous pouvons adapter ces outils, ajouter des fonctionnalités ou les intégrer à vos systèmes.",
      buttons: [{ label: "Parlons-en →", href: routes.contact.path }],
    } satisfies FinalCta,
  },
});
