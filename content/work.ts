// Case studies. Each entry gets its own page at /work/<slug> (except products,
// which link to their product page). Covers are screenshots of the live sites
// Covers show the client logo on its brand colour (files in public/work/);
// screenshots of the live sites appear on each case-study page.
// DRAFT: the texts below were written from the project descriptions — review
// and correct them (years, countries, results).
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
  /** Unsplash fallback image. */
  image: ImageKey;
  /**
   * Cover: the client's logo centred on its brand colour.
   * color: true keeps the logo's own colours on a light tint of `bg`
   * (otherwise the logo is shown as a white silhouette on `bg`).
   * size "lg" for square or badge-like logos.
   */
  logo?: { src: string; bg: string; color?: boolean; size?: "md" | "lg" };
  /** Screenshot of the live site, shown on the case-study page. */
  screenshot?: { src: string; alt: string };
  /** Live website. */
  link?: string;
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

const meta = (client: string, country: string, studio: string, year: string, services: string) => [
  { label: "Client", value: client },
  { label: "Country", value: country },
  { label: "Studio", value: studio },
  { label: "Year", value: year },
  { label: "Services", value: services },
];

const metaFr = (client: string, country: string, studio: string, year: string, services: string) => [
  { label: "Client", value: client },
  { label: "Pays", value: country },
  { label: "Studio", value: studio },
  { label: "Année", value: year },
  { label: "Services", value: services },
];

const productDetail = (): CaseStudy["detail"] => ({
  seoDescription: "",
  meta: [],
  keyResults: [],
  client: "",
  challenge: "",
  approach: "",
  solution: "",
  technology: "",
  results: "",
  quote: { text: "", by: "" },
  learned: "",
});

export const work = localized({
  en: {
    filters: ["All", "Cloud", "Software", "Web", "AI", "Creative", "Products", "Local"] as const,
    items: [
      {
        slug: "marrowmails",
        name: "MarrowMails",
        sector: "Business email",
        studio: "Product & Engineering",
        result: "Professional email on your own domain, billed by Mobile Money.",
        filters: ["Software", "Cloud", "AI"],
        image: "cloudDashboard",
        logo: { src: "/work/logo-marrowmails.svg", bg: "#FB6107", color: true },
        screenshot: { src: "/work/marrowmails.jpg", alt: "MarrowMails home page: “Your business deserves better than a Gmail address.”" },
        link: "https://marrowmails.com/",
        detail: {
          seoDescription:
            "MarrowMails: a lightweight business email service for SMEs and professionals, with AI summaries, translation and Mobile Money billing.",
          meta: meta("MarrowMails", "Cameroon", "Product & Engineering · Cloud · AI", "2026", "Product design, web app, AI features, AWS infrastructure"),
          keyResults: ["Live in production", "AI summaries, rewrite and translation built in", "Pay with Mobile Money"],
          client:
            "MarrowMails is a lightweight business email service for SMEs and professionals who want an address on their own domain without the cost and complexity of the big suites.",
          challenge:
            "Small businesses in Africa often run on free Gmail addresses: it looks unprofessional, and the alternatives are priced in dollars, paid by card, and hard to set up. The product had to be simple, affordable and payable the way people actually pay.",
          approach:
            "We started from the smallest useful product: a domain address that works in minutes. Then we added what saves time every day (AI thread summaries, a rewrite assistant, built-in translation) and shared role addresses such as hello@ or billing@.",
          solution:
            "A web mail product with custom-domain setup, AI summaries, a rewrite assistant, translation, shared role addresses, follow-up reminders, encrypted mail and Mobile Money billing.",
          technology: "Next.js, TypeScript, AI APIs, Docker, AWS.",
          results:
            "MarrowMails is live and used by professionals who now send from their own domain. [Add figures: mailboxes, customers, countries.]",
          quote: {
            text: "“With MarrowMails I finally have a professional address on my own domain, set up in minutes and paid with Mobile Money. The AI summaries save me time every morning.”",
            by: "Victor ILOME, Freelance, Independent, Cameroon",
          },
          learned:
            "Payment is part of the product. Accepting Mobile Money mattered as much as any feature for our first customers.",
        },
      },
      {
        slug: "heekoo",
        name: "Heekoo",
        sector: "Communication · SaaS",
        studio: "AI & Automation",
        result: "Real-time call translation in your own cloned voice.",
        filters: ["AI", "Software", "Cloud"],
        image: "aiAbstract",
        logo: { src: "/work/logo-heekoo.png", bg: "#3C096C" },
        screenshot: { src: "/work/heekoo.jpg", alt: "Heekoo home page: “One platform. Zero language barriers in your calls.”" },
        link: "https://heekoo.com/",
        detail: {
          seoDescription:
            "Heekoo: a multilingual calling platform that translates calls in real time in your own cloned voice, with Zoom, Google Meet and Microsoft Teams.",
          meta: meta("Heekoo", "France", "AI & Automation · Product & Engineering", "2025", "AI integration, web platform, cloud infrastructure"),
          keyResults: ["Real-time translated calls", "Works with Zoom, Meet and Teams", "15+ languages for demos and onboarding videos"],
          client:
            "Heekoo is a multilingual calling platform for sales, product, marketing, support and customer-success teams who work across languages.",
          challenge:
            "Teams lose deals and customers when they cannot speak the same language. Translation had to happen live, sound natural, and fit into the call tools people already use.",
          approach:
            "We combined speech recognition, translation and voice cloning into one low-latency pipeline, then integrated it with existing meeting tools instead of asking users to change their habits.",
          solution:
            "A platform that translates calls in real time in the speaker's own cloned voice, works with Zoom, Google Meet and Microsoft Teams, and turns demos and onboarding videos into 15+ languages.",
          technology: "RasenganJS, TypeScript, AI models, Docker, Kubernetes, AWS.",
          results: "Heekoo is live and used by international teams. [Add figures: users, languages used, minutes translated.]",
          quote: {
            text: "“Heekoo lets me talk with clients in languages I don't speak, in my own voice. The team behind it is responsive and keeps improving the product.”",
            by: "William MESSI, Freelance, Independent, France",
          },
          learned: "In real-time AI, latency is the user experience. Every millisecond we removed made conversations feel more natural.",
        },
      },
      {
        slug: "yankap",
        name: "yaNkap",
        sector: "Fintech",
        studio: "Product & Engineering",
        result: "Njangi groups, transfers and bill payments in one mobile app.",
        filters: ["Software"],
        image: "mobileApp",
        logo: { src: "/work/logo-yankap.svg", bg: "#FF5500" },
        screenshot: { src: "/work/yankap.jpg", alt: "yaNkap home page: “The njangi, without the notebook.”" },
        link: "https://yankap.com/",
        detail: {
          seoDescription:
            "yaNkap: a mobile wallet and savings app for Cameroon that digitizes njangi (tontine) groups with automatic contributions and transparent payouts.",
          meta: meta("yaNkap", "Cameroon", "Product & Engineering", "2025", "Mobile app, product design, website"),
          keyResults: ["Njangi groups digitized", "Transfers, bills and airtime in one app", "Virtual cards"],
          client: "yaNkap is a mobile wallet and savings app built for Cameroon.",
          challenge:
            "Njangi (tontine) groups run on trust and a notebook: contributions get missed, payouts are disputed, and the treasurer spends hours chasing members.",
          approach:
            "We designed around the real group ritual: who pays, when, and who receives next. Then we made every step automatic and visible to all members.",
          solution:
            "A mobile app with automatic contributions, transparent payouts, transfers, bill payments (ENEO, CAMWATER), airtime and virtual cards.",
          technology: "Mobile (iOS and Android), secure payment integrations.",
          results: "yaNkap is live in Cameroon. [Add figures: groups, members, transactions.]",
          quote: { text: "“[Quote]”", by: "[Name], [Role]" },
          learned: "Digitizing a tradition means respecting it: the app works because it follows how njangi groups already operate.",
        },
      },
      {
        slug: "237home",
        name: "237Home",
        sector: "Real estate",
        studio: "Product & Engineering",
        result: "A property platform to find apartments and houses in Cameroon.",
        filters: ["Web", "Software", "Creative"],
        image: "heroCity",
        logo: { src: "/work/237home-logo.svg", bg: "#02A99E" },
        link: "https://www.237home.com/",
        detail: {
          seoDescription: "237Home: a real estate platform with a wide range of properties, from apartments to houses, and detailed information on each.",
          meta: meta("237Home", "Cameroon", "Product & Engineering · Creative", "2024", "UX/UI design (Figma), web platform, back end"),
          keyResults: ["Design to production", "Detailed property listings", "Search across apartments and houses"],
          client: "237Home is a real estate platform that helps people find their next home in Cameroon.",
          challenge:
            "Property search in Cameroon is scattered across social media and word of mouth, with little reliable information on each listing.",
          approach: "We designed the experience in Figma first, tested the search and listing flows, then built the platform.",
          solution: "A web platform with a wide range of properties, from apartments to houses, with detailed information about each property.",
          technology: "Figma, React, Next.js, Tailwind CSS, AdonisJS.",
          results: "[Describe outcomes: listings, visitors, agencies onboarded.]",
          quote: { text: "“[Quote]”", by: "[Name], [Role]" },
          learned: "Good listings make good search: structured property data was the foundation of the whole experience.",
        },
      },
      {
        slug: "ndzeme",
        name: "Ndzeme",
        sector: "Restaurants · Food delivery",
        studio: "Product & Engineering",
        result: "Online ordering from local restaurants, delivery or takeaway.",
        filters: ["Web", "Software"],
        image: "restaurantKitchen",
        logo: { src: "/work/logo-ndzeme.png", bg: "#FE9719", color: true, size: "lg" },
        screenshot: { src: "/work/ndzeme.jpg", alt: "Ndzeme restaurants page with categories and restaurant listings" },
        link: "https://nzdeme-jeansamist.vercel.app/restaurants",
        detail: {
          seoDescription: "Ndzeme: an online ordering application where users order their favorite dishes and choose delivery or takeaway.",
          meta: meta("Ndzeme", "Cameroon", "Product & Engineering", "2023", "UX/UI design (Figma), web application"),
          keyResults: ["Order from many restaurants", "Delivery or takeaway", "Filters by category, rating and distance"],
          client: "Ndzeme is an online food-ordering platform for local restaurants.",
          challenge: "Ordering food often meant phone calls and unclear menus. Customers needed one place to browse restaurants and order.",
          approach: "We designed browsing first: categories, ratings and filters, so people find what they want in seconds.",
          solution: "A web application where users browse restaurants, order their favorite dishes and choose whether to have them delivered.",
          technology: "Figma, React, Next.js, Tailwind CSS.",
          results: "[Describe outcomes: restaurants, orders, users.]",
          quote: { text: "“[Quote]”", by: "[Name], [Role]" },
          learned: "Speed of browsing drives orders: fewer taps between hunger and checkout.",
        },
      },
      {
        slug: "lephenix",
        name: "Lephenix",
        sector: "Photography",
        studio: "Product & Engineering · Creative",
        result: "An online portfolio combining SEO, design and animation.",
        filters: ["Web", "Creative"],
        image: "videoProduction",
        logo: { src: "/work/logo-lephenix.png", bg: "#DA3421" },
        screenshot: { src: "/work/lephenix.jpg", alt: "Lephenix website: services banner and portfolio preview of wedding photos" },
        link: "https://www.lephenix.cm/",
        detail: {
          seoDescription: "Lephenix: the online portfolio of a photography company in Cameroon, combining SEO, design and animation.",
          meta: meta("Lephenix", "Cameroon", "Product & Engineering · Creative", "2023", "Web design, website, SEO"),
          keyResults: ["Online portfolio", "SEO foundations", "Animated, image-first design"],
          client: "Lephenix is a photography company located in Cameroon (weddings, events, drone photography).",
          challenge: "A photography studio is judged on its images: the site had to showcase the work beautifully while still being found on Google.",
          approach: "We designed an image-first experience with tasteful animation, and built it with SEO in mind from the start.",
          solution: "An online portfolio with services, galleries, testimonials and contact, combining SEO, design and animation.",
          technology: "Figma, React, Next.js, Tailwind CSS.",
          results: "[Describe outcomes: visibility, enquiries.]",
          quote: { text: "“[Quote]”", by: "[Name], [Role]" },
          learned: "For visual businesses, performance and image quality have to be balanced carefully.",
        },
      },
      {
        slug: "web-and-buzz",
        name: "Web and Buzz",
        sector: "Digital agency",
        studio: "Product & Engineering",
        result: "A Figma prototype turned into a fast, animated, SEO-friendly site.",
        filters: ["Web", "Creative"],
        image: "uiSketches",
        logo: { src: "/work/logo-web-and-buzz.png", bg: "#0573E4" },
        screenshot: { src: "/work/web-and-buzz.jpg", alt: "Web and Buzz home page: “We build high-converting websites that get you more leads!”" },
        link: "https://dev-webandbuzz.vercel.app/",
        detail: {
          seoDescription: "Web and Buzz: a web services agency site, from Figma prototype to a React build with animations that preserve SEO.",
          meta: meta("Web and Buzz", "USA", "Product & Engineering", "2024", "Figma prototype, web development"),
          keyResults: ["Figma to production", "Animations without hurting SEO", "Conversion-focused layout"],
          client: "Web and Buzz is a web services agency focused on high-converting websites.",
          challenge: "The agency's own site had to prove its promise: rich animations, yet fast and fully indexable.",
          approach: "We created a Figma prototype, then integrated it in React, choosing animation techniques that keep content crawlable.",
          solution: "A marketing site with a clear offer, services, portfolio, blog and contact, integrated from the Figma prototype.",
          technology: "Figma, React, Next.js, Tailwind CSS.",
          results: "[Describe outcomes: leads, speed scores.]",
          quote: { text: "“[Quote]”", by: "[Name], [Role]" },
          learned: "The main difficulty was integrating animations while preserving SEO; server rendering plus progressive animation solved it.",
        },
      },
      {
        slug: "mega-optic",
        name: "Mega Optic",
        sector: "Healthcare · Optics",
        studio: "Creative Studio",
        result: "A clear Figma prototype presenting an optometry practice.",
        filters: ["Creative", "Web"],
        image: "responsiveDevices",
        logo: { src: "/work/logo-mega-optic.png", bg: "#293A89", color: true },
        screenshot: { src: "/work/mega-optic.jpg", alt: "Mega Optic home page: “L’opticien qui te convient”" },
        link: "https://megaoptic.vercel.app/",
        detail: {
          seoDescription: "Mega Optic: a Figma prototype for an optometry practice in Cameroon, giving a quick overview of its services.",
          meta: meta("Mega Optic", "Cameroon", "Creative Studio", "2023", "UX/UI design (Figma), prototype"),
          keyResults: ["Prototype delivered", "Services at a glance", "Product catalog structure"],
          client: "Mega Optic is an optometry practice in Cameroon (glasses, sunglasses, contact lenses).",
          challenge: "The practice needed a simple way to present its services and products before investing in a full website.",
          approach: "We designed a focused Figma prototype covering the key journeys: browse frames, discover offers, find the practice.",
          solution: "A simple Figma prototype giving a brief overview of the company's services, later published as a web preview.",
          technology: "Figma.",
          results: "[Describe outcomes.]",
          quote: { text: "“[Quote]”", by: "[Name], [Role]" },
          learned: "A good prototype lets a client decide quickly and cheaply what their website should be.",
        },
      },
      {
        slug: "badibo",
        name: "Badibo",
        sector: "Restaurants",
        studio: "Product",
        result: "Live with paying restaurants.",
        filters: ["Products", "Software"],
        image: "restaurantKitchen",
        logo: { src: "/work/logo-badibo.svg", bg: "#1C1C15", color: true },
        href: routes.badibo.path,
        detail: productDetail(),
      },
      {
        slug: "kira",
        name: "Kira",
        sector: "Retail",
        studio: "Product",
        result: "Live with paying shops.",
        filters: ["Products", "Software"],
        image: "kiraShop",
        logo: { src: "/work/logo-kira.svg", bg: "#009270", color: true },
        href: routes.kira.path,
        detail: productDetail(),
      },
    ] satisfies CaseStudy[],
  },
  fr: {
    filters: ["All", "Cloud", "Software", "Web", "AI", "Creative", "Products", "Local"] as const,
    items: [
      {
        slug: "marrowmails",
        name: "MarrowMails",
        sector: "Messagerie professionnelle",
        studio: "Produit & Ingénierie",
        result: "Une messagerie professionnelle sur votre propre domaine, payable par Mobile Money.",
        filters: ["Software", "Cloud", "AI"],
        image: "cloudDashboard",
        logo: { src: "/work/logo-marrowmails.svg", bg: "#FB6107", color: true },
        screenshot: { src: "/work/marrowmails.jpg", alt: "Page d’accueil de MarrowMails : « Your business deserves better than a Gmail address. »" },
        link: "https://marrowmails.com/",
        detail: {
          seoDescription:
            "MarrowMails : un service de messagerie professionnelle léger pour les PME et les professionnels, avec résumés par IA, traduction et paiement par Mobile Money.",
          meta: metaFr("MarrowMails", "Cameroun", "Produit & Ingénierie · Cloud · IA", "2026", "Conception produit, application web, fonctionnalités IA, infrastructure AWS"),
          keyResults: ["En production", "Résumés, reformulation et traduction par IA intégrés", "Paiement par Mobile Money"],
          client:
            "MarrowMails est un service de messagerie professionnelle léger pour les PME et les professionnels qui veulent une adresse sur leur propre domaine, sans le coût ni la complexité des grandes suites.",
          challenge:
            "En Afrique, beaucoup de petites entreprises fonctionnent avec des adresses Gmail gratuites : cela manque de professionnalisme, et les alternatives sont facturées en dollars, payables par carte et compliquées à configurer. Le produit devait être simple, abordable et payable comme les gens paient réellement.",
          approach:
            "Nous sommes partis du plus petit produit utile : une adresse sur votre domaine, opérationnelle en quelques minutes. Nous avons ensuite ajouté ce qui fait gagner du temps chaque jour (résumés de conversations par IA, assistant de reformulation, traduction intégrée) ainsi que des adresses de rôle partagées comme hello@ ou billing@.",
          solution:
            "Un webmail avec configuration de domaine personnalisé, résumés par IA, assistant de reformulation, traduction, adresses de rôle partagées, rappels de relance, e-mails chiffrés et paiement par Mobile Money.",
          technology: "Next.js, TypeScript, API d’IA, Docker, AWS.",
          results:
            "MarrowMails est en production et utilisé par des professionnels qui envoient désormais leurs e-mails depuis leur propre domaine. [Ajouter des chiffres : boîtes mail, clients, pays.]",
          quote: {
            text: "« Avec MarrowMails, j’ai enfin une adresse professionnelle sur mon propre domaine, configurée en quelques minutes et payée par Mobile Money. Les résumés par IA me font gagner du temps chaque matin. »",
            by: "Victor ILOME, Freelance, Indépendant, Cameroun",
          },
          learned:
            "Le paiement fait partie du produit. Pour nos premiers clients, accepter le Mobile Money a compté autant que n’importe quelle fonctionnalité.",
        },
      },
      {
        slug: "heekoo",
        name: "Heekoo",
        sector: "Communication · SaaS",
        studio: "IA & Automatisation",
        result: "La traduction de vos appels en temps réel, avec votre propre voix clonée.",
        filters: ["AI", "Software", "Cloud"],
        image: "aiAbstract",
        logo: { src: "/work/logo-heekoo.png", bg: "#3C096C" },
        screenshot: { src: "/work/heekoo.jpg", alt: "Page d’accueil de Heekoo : « One platform. Zero language barriers in your calls. »" },
        link: "https://heekoo.com/",
        detail: {
          seoDescription:
            "Heekoo : une plateforme d’appels multilingue qui traduit vos appels en temps réel avec votre propre voix clonée, compatible avec Zoom, Google Meet et Microsoft Teams.",
          meta: metaFr("Heekoo", "France", "IA & Automatisation · Produit & Ingénierie", "2025", "Intégration IA, plateforme web, infrastructure cloud"),
          keyResults: ["Appels traduits en temps réel", "Compatible avec Zoom, Meet et Teams", "Plus de 15 langues pour les démos et vidéos d’onboarding"],
          client:
            "Heekoo est une plateforme d’appels multilingue destinée aux équipes commerciales, produit, marketing, support et customer success qui travaillent dans plusieurs langues.",
          challenge:
            "Les équipes perdent des contrats et des clients lorsqu’elles ne parlent pas la même langue. La traduction devait se faire en direct, sonner naturellement et s’intégrer aux outils d’appel déjà utilisés.",
          approach:
            "Nous avons combiné reconnaissance vocale, traduction et clonage de voix dans un seul pipeline à faible latence, puis l’avons intégré aux outils de réunion existants plutôt que de demander aux utilisateurs de changer leurs habitudes.",
          solution:
            "Une plateforme qui traduit les appels en temps réel avec la voix clonée de l’interlocuteur, fonctionne avec Zoom, Google Meet et Microsoft Teams, et décline démos et vidéos d’onboarding dans plus de 15 langues.",
          technology: "RasenganJS, TypeScript, modèles d’IA, Docker, Kubernetes, AWS.",
          results: "Heekoo est en production et utilisé par des équipes internationales. [Ajouter des chiffres : utilisateurs, langues utilisées, minutes traduites.]",
          quote: {
            text: "« Heekoo me permet d’échanger avec des clients dans des langues que je ne parle pas, avec ma propre voix. L’équipe derrière le produit est réactive et ne cesse de l’améliorer. »",
            by: "William MESSI, Freelance, Indépendant, France",
          },
          learned: "En IA temps réel, la latence, c’est l’expérience utilisateur. Chaque milliseconde gagnée a rendu les conversations plus naturelles.",
        },
      },
      {
        slug: "yankap",
        name: "yaNkap",
        sector: "Fintech",
        studio: "Produit & Ingénierie",
        result: "Tontines (njangi), transferts et paiement de factures dans une seule application mobile.",
        filters: ["Software"],
        image: "mobileApp",
        logo: { src: "/work/logo-yankap.svg", bg: "#FF5500" },
        screenshot: { src: "/work/yankap.jpg", alt: "Page d’accueil de yaNkap : « The njangi, without the notebook. »" },
        link: "https://yankap.com/",
        detail: {
          seoDescription:
            "yaNkap : une application mobile de portefeuille et d’épargne pour le Cameroun qui numérise les tontines (njangi) avec des cotisations automatiques et des versements transparents.",
          meta: metaFr("yaNkap", "Cameroun", "Produit & Ingénierie", "2025", "Application mobile, conception produit, site web"),
          keyResults: ["Tontines (njangi) numérisées", "Transferts, factures et crédit téléphonique dans une seule application", "Cartes virtuelles"],
          client: "yaNkap est une application mobile de portefeuille et d’épargne conçue pour le Cameroun.",
          challenge:
            "Les tontines (njangi) reposent sur la confiance et un cahier : des cotisations sont oubliées, des versements contestés, et le trésorier passe des heures à relancer les membres.",
          approach:
            "Nous sommes partis du rituel réel du groupe : qui paie, quand, et qui reçoit ensuite. Puis nous avons rendu chaque étape automatique et visible par tous les membres.",
          solution:
            "Une application mobile avec cotisations automatiques, versements transparents, transferts, paiement de factures (ENEO, CAMWATER), crédit téléphonique et cartes virtuelles.",
          technology: "Mobile (iOS et Android), intégrations de paiement sécurisées.",
          results: "yaNkap est en production au Cameroun. [Ajouter des chiffres : groupes, membres, transactions.]",
          quote: { text: "« [Citation] »", by: "[Nom], [Fonction]" },
          learned: "Numériser une tradition, c’est la respecter : l’application fonctionne parce qu’elle suit la manière dont les tontines fonctionnent déjà.",
        },
      },
      {
        slug: "237home",
        name: "237Home",
        sector: "Immobilier",
        studio: "Produit & Ingénierie",
        result: "Une plateforme immobilière pour trouver appartements et maisons au Cameroun.",
        filters: ["Web", "Software", "Creative"],
        image: "heroCity",
        logo: { src: "/work/237home-logo.svg", bg: "#02A99E" },
        link: "https://www.237home.com/",
        detail: {
          seoDescription: "237Home : une plateforme immobilière proposant un large choix de biens, des appartements aux maisons, avec des informations détaillées sur chacun.",
          meta: metaFr("237Home", "Cameroun", "Produit & Ingénierie · Créatif", "2024", "Design UX/UI (Figma), plateforme web, back-end"),
          keyResults: ["Du design à la production", "Annonces détaillées", "Recherche parmi appartements et maisons"],
          client: "237Home est une plateforme immobilière qui aide chacun à trouver son prochain logement au Cameroun.",
          challenge:
            "Au Cameroun, la recherche immobilière est dispersée entre réseaux sociaux et bouche-à-oreille, avec peu d’informations fiables sur chaque annonce.",
          approach: "Nous avons d’abord conçu l’expérience dans Figma, testé les parcours de recherche et de consultation des annonces, puis développé la plateforme.",
          solution: "Une plateforme web proposant un large choix de biens, des appartements aux maisons, avec des informations détaillées sur chacun.",
          technology: "Figma, React, Next.js, Tailwind CSS, AdonisJS.",
          results: "[Décrire les résultats : annonces, visiteurs, agences inscrites.]",
          quote: { text: "« [Citation] »", by: "[Nom], [Fonction]" },
          learned: "De bonnes annonces font une bonne recherche : des données immobilières structurées ont été le socle de toute l’expérience.",
        },
      },
      {
        slug: "ndzeme",
        name: "Ndzeme",
        sector: "Restauration · Livraison de repas",
        studio: "Produit & Ingénierie",
        result: "La commande en ligne auprès des restaurants locaux, en livraison ou à emporter.",
        filters: ["Web", "Software"],
        image: "restaurantKitchen",
        logo: { src: "/work/logo-ndzeme.png", bg: "#FE9719", color: true, size: "lg" },
        screenshot: { src: "/work/ndzeme.jpg", alt: "Page des restaurants de Ndzeme, avec catégories et liste des restaurants" },
        link: "https://nzdeme-jeansamist.vercel.app/restaurants",
        detail: {
          seoDescription: "Ndzeme : une application de commande en ligne où l’on commande ses plats préférés en livraison ou à emporter.",
          meta: metaFr("Ndzeme", "Cameroun", "Produit & Ingénierie", "2023", "Design UX/UI (Figma), application web"),
          keyResults: ["Commandes auprès de nombreux restaurants", "Livraison ou à emporter", "Filtres par catégorie, note et distance"],
          client: "Ndzeme est une plateforme de commande de repas en ligne pour les restaurants locaux.",
          challenge: "Commander à manger passait souvent par des appels téléphoniques et des menus peu clairs. Les clients avaient besoin d’un seul endroit pour parcourir les restaurants et commander.",
          approach: "Nous avons d’abord pensé la navigation : catégories, notes et filtres, pour trouver ce que l’on veut en quelques secondes.",
          solution: "Une application web où les utilisateurs parcourent les restaurants, commandent leurs plats préférés et choisissent de se faire livrer ou non.",
          technology: "Figma, React, Next.js, Tailwind CSS.",
          results: "[Décrire les résultats : restaurants, commandes, utilisateurs.]",
          quote: { text: "« [Citation] »", by: "[Nom], [Fonction]" },
          learned: "La rapidité de navigation fait les commandes : moins de clics entre la faim et le paiement.",
        },
      },
      {
        slug: "lephenix",
        name: "Lephenix",
        sector: "Photographie",
        studio: "Produit & Ingénierie · Créatif",
        result: "Un portfolio en ligne alliant SEO, design et animation.",
        filters: ["Web", "Creative"],
        image: "videoProduction",
        logo: { src: "/work/logo-lephenix.png", bg: "#DA3421" },
        screenshot: { src: "/work/lephenix.jpg", alt: "Site de Lephenix : bannière des services et aperçu du portfolio de photos de mariage" },
        link: "https://www.lephenix.cm/",
        detail: {
          seoDescription: "Lephenix : le portfolio en ligne d’une entreprise de photographie au Cameroun, alliant SEO, design et animation.",
          meta: metaFr("Lephenix", "Cameroun", "Produit & Ingénierie · Créatif", "2023", "Web design, site web, SEO"),
          keyResults: ["Portfolio en ligne", "Bases SEO solides", "Design animé, centré sur l’image"],
          client: "Lephenix est une entreprise de photographie basée au Cameroun (mariages, événements, photographie par drone).",
          challenge: "Un studio photo est jugé sur ses images : le site devait mettre le travail en valeur tout en restant bien référencé sur Google.",
          approach: "Nous avons conçu une expérience centrée sur l’image, avec des animations sobres, et l’avons développée en pensant au SEO dès le départ.",
          solution: "Un portfolio en ligne avec services, galeries, témoignages et contact, alliant SEO, design et animation.",
          technology: "Figma, React, Next.js, Tailwind CSS.",
          results: "[Décrire les résultats : visibilité, demandes de contact.]",
          quote: { text: "« [Citation] »", by: "[Nom], [Fonction]" },
          learned: "Pour les métiers de l’image, performance et qualité visuelle doivent être soigneusement équilibrées.",
        },
      },
      {
        slug: "web-and-buzz",
        name: "Web and Buzz",
        sector: "Agence digitale",
        studio: "Produit & Ingénierie",
        result: "Un prototype Figma transformé en site rapide, animé et optimisé pour le SEO.",
        filters: ["Web", "Creative"],
        image: "uiSketches",
        logo: { src: "/work/logo-web-and-buzz.png", bg: "#0573E4" },
        screenshot: { src: "/work/web-and-buzz.jpg", alt: "Page d’accueil de Web and Buzz : « We build high-converting websites that get you more leads! »" },
        link: "https://dev-webandbuzz.vercel.app/",
        detail: {
          seoDescription: "Web and Buzz : le site d’une agence de services web, du prototype Figma à une intégration React avec des animations qui préservent le SEO.",
          meta: metaFr("Web and Buzz", "États-Unis", "Produit & Ingénierie", "2024", "Prototype Figma, développement web"),
          keyResults: ["De Figma à la production", "Des animations sans pénaliser le SEO", "Une mise en page orientée conversion"],
          client: "Web and Buzz est une agence de services web spécialisée dans les sites à fort taux de conversion.",
          challenge: "Le site de l’agence devait prouver sa promesse : des animations riches, tout en restant rapide et entièrement indexable.",
          approach: "Nous avons créé un prototype Figma, puis l’avons intégré en React en choisissant des techniques d’animation qui laissent le contenu explorable par les moteurs de recherche.",
          solution: "Un site vitrine avec une offre claire, des services, un portfolio, un blog et un contact, intégré à partir du prototype Figma.",
          technology: "Figma, React, Next.js, Tailwind CSS.",
          results: "[Décrire les résultats : prospects, scores de performance.]",
          quote: { text: "« [Citation] »", by: "[Nom], [Fonction]" },
          learned: "La principale difficulté était d’intégrer des animations sans nuire au SEO ; le rendu côté serveur associé à une animation progressive a résolu le problème.",
        },
      },
      {
        slug: "mega-optic",
        name: "Mega Optic",
        sector: "Santé · Optique",
        studio: "Studio Créatif",
        result: "Un prototype Figma clair pour présenter un cabinet d’optométrie.",
        filters: ["Creative", "Web"],
        image: "responsiveDevices",
        logo: { src: "/work/logo-mega-optic.png", bg: "#293A89", color: true },
        screenshot: { src: "/work/mega-optic.jpg", alt: "Page d’accueil de Mega Optic : « L’opticien qui te convient »" },
        link: "https://megaoptic.vercel.app/",
        detail: {
          seoDescription: "Mega Optic : un prototype Figma pour un cabinet d’optométrie au Cameroun, offrant un aperçu rapide de ses services.",
          meta: metaFr("Mega Optic", "Cameroun", "Studio Créatif", "2023", "Design UX/UI (Figma), prototype"),
          keyResults: ["Prototype livré", "Les services en un coup d’œil", "Structure du catalogue produits"],
          client: "Mega Optic est un cabinet d’optométrie au Cameroun (lunettes, lunettes de soleil, lentilles de contact).",
          challenge: "Le cabinet avait besoin d’un moyen simple de présenter ses services et ses produits avant d’investir dans un site complet.",
          approach: "Nous avons conçu un prototype Figma ciblé couvrant les parcours clés : parcourir les montures, découvrir les offres, trouver le cabinet.",
          solution: "Un prototype Figma simple offrant un bref aperçu des services de l’entreprise, publié ensuite sous forme d’aperçu web.",
          technology: "Figma.",
          results: "[Décrire les résultats.]",
          quote: { text: "« [Citation] »", by: "[Nom], [Fonction]" },
          learned: "Un bon prototype permet à un client de décider rapidement, et à moindre coût, ce que doit être son site.",
        },
      },
      {
        slug: "badibo",
        name: "Badibo",
        sector: "Restauration",
        studio: "Produit",
        result: "En production chez des restaurants clients.",
        filters: ["Products", "Software"],
        image: "restaurantKitchen",
        logo: { src: "/work/logo-badibo.svg", bg: "#1C1C15", color: true },
        href: routes.badibo.path,
        detail: productDetail(),
      },
      {
        slug: "kira",
        name: "Kira",
        sector: "Commerce de détail",
        studio: "Produit",
        result: "En production chez des commerces clients.",
        filters: ["Products", "Software"],
        image: "kiraShop",
        logo: { src: "/work/logo-kira.svg", bg: "#009270", color: true },
        href: routes.kira.path,
        detail: productDetail(),
      },
    ] satisfies CaseStudy[],
  },
});

/** Slugs that get a /work/[slug] page (products have their own pages). */
export const caseStudySlugs = () => work("en").items.filter((i) => !("href" in i && i.href)).map((i) => i.slug);
