import type { HomeHeroCopy } from "@/components/hero/home-hero";
import type { Faq, FinalCta, Seo, Step } from "@/content/types";
import { localized } from "@/lib/i18n";
import { routes } from "@/lib/routes";

export const home = localized({
  en: {
    seo: {
      title: "Supplies and Works | Cloud, Software and AI Engineering from Africa",
      description:
        "A technology partner from Cameroon. We build, run and protect cloud platforms, software, AI automation and brand design for businesses worldwide. Book a call.",
    } satisfies Seo,
    hero: {
      eyebrow: "Technology partner · Douala to the world",
      headlineBefore: "We design,",
      rotating: ["build", "run", "protect"],
      headlineAfter: "the technology your business depends on.",
      sub: "Cloud engineering, custom software, AI automation and creative design, delivered by one team. Built in Africa. Delivered worldwide.",
      primary: { label: "Book a call", href: routes.contact.path },
      secondary: { label: "See our work", href: routes.work.path },
      proof: [
        "AWS Certified Solutions Architect on the team",
        "Live SaaS products with paying customers",
        "English and French",
      ],
      scroll: "Scroll to explore",
    } satisfies HomeHeroCopy,
    tech: ["AWS", "Microsoft Azure", "Google Cloud", "React", "Next.js", "Node.js", "Flutter", "Python", "PostgreSQL", "Docker", "Terraform", "Figma"],
    who: {
      eyebrow: "Who we are",
      text: "Every business now runs on technology. Servers, apps, websites, data, tools, people. When one piece fails, everything feels it. Supplies and Works exists so that you never have to chase five different suppliers to fix one problem. We are a team of ten engineers, designers and technicians in Douala, Cameroon. We cover the whole chain, from the cable in the wall to the cloud, from the first line of code to the brand that carries it. We build it, we run it, and we protect it.",
    },
    studios: { eyebrow: "Our five studios", title: "Our *five* studios" },
    pillars: { eyebrow: "Build · Run · Protect", title: "*Build* · *Run* · *Protect*" },
    data: {
      eyebrow: "Your data, protected",
      title: "Your servers are in one room. *Your data should not be.*",
      text: "Many businesses keep their most valuable asset, their data, on a server in the back office. One power surge, one flood, one stolen machine, one ransomware attack, and the business stops. We connect your on-site systems to the cloud and back them up automatically.",
      points: [
        { title: "Automatic", text: "scheduled backups, nobody has to remember." },
        { title: "Secure", text: "encrypted in transit and at rest." },
        { title: "Tested", text: "we practice restores before you need one." },
        { title: "Monitored", text: "we warn you when something is wrong, before it becomes a crisis." },
      ],
      cta: { label: "See backup and recovery →", href: routes.backup.path },
    },
    products: {
      eyebrow: "Products",
      title: "Products we *built and run* ourselves",
      text: "Most IT companies sell time. We also build products. Our software runs in production every day, serving paying customers, supported by the team that wrote it. It means we know what real, long-term delivery takes.",
      items: [
        { name: "Badibo", tagline: "Restaurant management.", text: "Orders, tables, menu, billing and reports in one place.", cta: { label: "Discover Badibo →", href: routes.badibo.path } },
        { name: "Kira", tagline: "Shop management.", text: "Sales, stock, products and customers in one place.", cta: { label: "Discover Kira →", href: routes.kira.path } },
      ],
    },
    numbers: {
      eyebrow: "By the numbers",
      title: "By the *numbers*",
      items: [
        { value: "25", label: "paying customers on our products" },
        { value: "08", label: "projects delivered" },
        { value: "03", label: "countries served" },
        { value: "05", label: "years of experience" },
        { value: "10", label: "team members" },
      ],
    },
    why: {
      eyebrow: "Why teams choose us",
      title: "Why teams *choose us*",
      items: [
        { title: "One partner, every layer.", text: "Infrastructure, cloud, software, design and AI under one roof. Fewer handoffs, fewer excuses." },
        { title: "We ship our own products.", text: "Proof that we can build, launch and support." },
        { title: "Cloud depth, with a data-protection focus.", text: "AWS-certified architecture and a specialty in backing up on-site data to the cloud." },
        { title: "Clear communication.", text: "One point of contact, weekly demos, plain language." },
        { title: "A time-zone and cost advantage.", text: "Overlap with the U.S. East Coast and Europe, with a cost structure that stretches your budget." },
        { title: "Bilingual by default.", text: "English and French, written and spoken." },
      ],
    },
    industries: {
      eyebrow: "Industries we serve",
      title: "Industries *we serve*",
      // `example` is the one-line hover reveal. DRAFT examples: adjust freely.
      items: [
        { name: "Restaurants and hospitality", example: "Orders, tables and billing in one system with Badibo." },
        { name: "Retail and commerce", example: "Sales and stock under control with Kira, plus an online shop." },
        { name: "Education", example: "School networks, student-record backups and parent portals." },
        { name: "Healthcare and clinics", example: "Patient data backed up to the cloud, every night, automatically." },
        { name: "Logistics and distribution", example: "Stock tracking and automated alerts across warehouses." },
        { name: "Professional services", example: "Client portals, professional email and document automation." },
        { name: "Startups and SaaS", example: "From MVP to a scalable product on AWS, run by the team that built it." },
        { name: "NGOs and associations", example: "Reliable field-office networks and simple tools for donors and members." },
      ],
    },
    africa: {
      eyebrow: "Built in Africa",
      title: "Built in *Africa*",
      text: "We are proud of where we work. From Douala, we serve clients in Cameroon, France and the USA with the same standards as any firm in the world. Our team works in English and French, overlaps with the American East Coast every working day, and brings sharp engineering at a cost that lets you do more.",
      cta: { label: "Read our story →", href: routes.builtInAfrica.path },
    },
    work: {
      eyebrow: "Selected work",
      title: "Selected *work*",
      cta: { label: "See all work →", href: routes.work.path },
    },
    process: {
      eyebrow: "How we work",
      title: "How we work in *4 steps*",
      steps: [
        { title: "Listen", text: "We learn your business, your constraints and your goals before touching a tool." },
        { title: "Design", text: "You receive a clear plan, scope, timeline and price." },
        { title: "Build", text: "We deliver in short cycles. You see progress every week." },
        { title: "Run and protect", text: "We stay, support and keep improving." },
      ] satisfies Step[],
      cta: { label: "See the full process →", href: routes.howWeWork.path },
    },
    testimonials: {
      title: "What clients *say*",
      quotes: [
        // DRAFT texts: have each person approve their quote before launch.
        { text: "“Supplies and Works gave us a brand identity that finally looks like the company we are. Clear guidelines, every file we needed, and a team that listened at each step.”", by: "Joseph BAHA, IT Support, Neptune Oil SA, Cameroon · Brand identity" },
        { text: "“With MarrowMails I finally have a professional address on my own domain, set up in minutes and paid with Mobile Money. The AI summaries save me time every morning.”", by: "Victor ILOME, Freelance, Independent, Cameroon · MarrowMails" },
        { text: "“Heekoo lets me talk with clients in languages I don't speak, in my own voice. The team behind it is responsive and keeps improving the product.”", by: "William MESSI, Freelance, Independent, France · Heekoo" },
      ],
    },
    faq: [
      { q: "Where is your team based?", a: "In Douala, Cameroon. We work remotely with clients across the world and on site in Central Africa." },
      { q: "Do you work with clients outside Africa?", a: "Yes. International clients are a priority. We work in English and French, with scheduled overlap hours." },
      { q: "Which time zones do you cover?", a: "Douala is on UTC+1. We overlap with Europe all day and with the U.S. East Coast in the afternoon and early evening: at least 4 hours every working day, with support from 8:00 to 19:00 Douala time." },
      { q: "What size of company do you work with?", a: "Startups and small and medium businesses are our main focus. We also take on larger organizations for defined projects." },
      { q: "How do you price?", a: "By project, by monthly plan, or both. You always receive a clear estimate before we start." },
      { q: "Who owns the code and the designs?", a: "You do, once the project is paid in full. We hand over the source code, design files and accounts, and only keep the right to reuse generic, non-confidential building blocks." },
      { q: "Can you take over an existing system?", a: "Yes. We begin with a short audit of what exists, then agree on a plan." },
      { q: "Do you offer support after launch?", a: "Yes. Maintenance and support plans keep your systems running and improving." },
    ] satisfies Faq[],
    finalCta: {
      title: "Tell us what you need. We will tell you how we would do it.",
      text: "A 30-minute call. No obligation.",
      buttons: [
        { label: "Book a call", href: `${routes.contact.path}#book` },
        { label: "Send a message", href: `${routes.contact.path}#message` },
      ],
    } satisfies FinalCta,
  },
  fr: {
    seo: {
      title: "Supplies and Works | Ingénierie cloud, logicielle et IA depuis l’Afrique",
      description:
        "Un partenaire technologique basé au Cameroun. Nous construisons, exploitons et protégeons plateformes cloud, logiciels, automatisations IA et identités de marque pour des entreprises du monde entier. Réservez un appel.",
    } satisfies Seo,
    hero: {
      eyebrow: "Partenaire technologique · De Douala au monde entier",
      headlineBefore: "Nous concevons,",
      rotating: ["construisons", "exploitons", "protégeons"],
      headlineAfter: "la technologie dont dépend votre entreprise.",
      sub: "Ingénierie cloud, logiciels sur mesure, automatisation par l’IA et design créatif, réunis dans une seule équipe. Conçu en Afrique. Livré dans le monde entier.",
      primary: { label: "Réserver un appel", href: routes.contact.path },
      secondary: { label: "Voir nos réalisations", href: routes.work.path },
      proof: [
        "Un AWS Certified Solutions Architect dans l’équipe",
        "Des produits SaaS en production avec des clients payants",
        "Français et anglais",
      ],
      scroll: "Faites défiler pour explorer",
    } satisfies HomeHeroCopy,
    tech: ["AWS", "Microsoft Azure", "Google Cloud", "React", "Next.js", "Node.js", "Flutter", "Python", "PostgreSQL", "Docker", "Terraform", "Figma"],
    who: {
      eyebrow: "Qui nous sommes",
      text: "Aujourd’hui, toute entreprise repose sur la technologie. Serveurs, applications, sites web, données, outils, personnes. Quand un maillon lâche, tout le monde le ressent. Supplies and Works existe pour que vous n’ayez plus jamais à courir après cinq fournisseurs différents pour régler un seul problème. Nous sommes une équipe de dix ingénieurs, designers et techniciens à Douala, au Cameroun. Nous couvrons toute la chaîne, du câble dans le mur jusqu’au cloud, de la première ligne de code jusqu’à la marque qu’elle porte. Nous le construisons, nous l’exploitons, et nous le protégeons.",
    },
    studios: { eyebrow: "Nos cinq studios", title: "Nos *cinq* studios" },
    pillars: { eyebrow: "Construire · Exploiter · Protéger", title: "*Construire* · *Exploiter* · *Protéger*" },
    data: {
      eyebrow: "Vos données, protégées",
      title: "Vos serveurs sont dans une seule pièce. *Vos données ne devraient pas l’être.*",
      text: "Beaucoup d’entreprises conservent leur bien le plus précieux, leurs données, sur un serveur au fond du bureau. Une surtension, une inondation, une machine volée, une attaque par rançongiciel, et toute l’activité s’arrête. Nous connectons vos systèmes sur site au cloud et les sauvegardons automatiquement.",
      points: [
        { title: "Automatique", text: "des sauvegardes planifiées, personne n’a besoin d’y penser." },
        { title: "Sécurisé", text: "chiffré en transit comme au repos." },
        { title: "Testé", text: "nous nous exerçons aux restaurations avant que vous en ayez besoin." },
        { title: "Surveillé", text: "nous vous alertons quand quelque chose ne va pas, avant que cela ne devienne une crise." },
      ],
      cta: { label: "Voir la sauvegarde et la reprise →", href: routes.backup.path },
    },
    products: {
      eyebrow: "Produits",
      title: "Des produits que nous avons *conçus et que nous exploitons* nous-mêmes",
      text: "La plupart des entreprises informatiques vendent du temps. Nous, nous créons aussi des produits. Nos logiciels tournent en production chaque jour, au service de clients payants, et sont maintenus par l’équipe qui les a écrits. Nous savons donc ce qu’exige une livraison réelle, sur la durée.",
      items: [
        { name: "Badibo", tagline: "Gestion de restaurant.", text: "Commandes, tables, menu, facturation et rapports au même endroit.", cta: { label: "Découvrir Badibo →", href: routes.badibo.path } },
        { name: "Kira", tagline: "Gestion de boutique.", text: "Ventes, stock, produits et clients au même endroit.", cta: { label: "Découvrir Kira →", href: routes.kira.path } },
      ],
    },
    numbers: {
      eyebrow: "En chiffres",
      title: "En *chiffres*",
      items: [
        { value: "25", label: "clients payants sur nos produits" },
        { value: "08", label: "projets livrés" },
        { value: "03", label: "pays servis" },
        { value: "05", label: "années d’expérience" },
        { value: "10", label: "membres dans l’équipe" },
      ],
    },
    why: {
      eyebrow: "Pourquoi les équipes nous choisissent",
      title: "Pourquoi les équipes *nous choisissent*",
      items: [
        { title: "Un seul partenaire, à chaque niveau.", text: "Infrastructure, cloud, logiciel, design et IA sous un même toit. Moins d’intermédiaires, moins d’excuses." },
        { title: "Nous livrons nos propres produits.", text: "La preuve que nous savons construire, lancer et assurer le suivi." },
        { title: "Une expertise cloud, centrée sur la protection des données.", text: "Une architecture certifiée AWS et une spécialité : la sauvegarde des données sur site vers le cloud." },
        { title: "Une communication claire.", text: "Un interlocuteur unique, des démos chaque semaine, un langage simple." },
        { title: "Un avantage de fuseau horaire et de coût.", text: "Des heures communes avec la côte Est des États-Unis et l’Europe, et une structure de coûts qui fait aller votre budget plus loin." },
        { title: "Bilingues par défaut.", text: "Français et anglais, à l’écrit comme à l’oral." },
      ],
    },
    industries: {
      eyebrow: "Les secteurs que nous servons",
      title: "Les secteurs *que nous servons*",
      // `example` is the one-line hover reveal. DRAFT examples: adjust freely.
      items: [
        { name: "Restauration et hôtellerie", example: "Commandes, tables et facturation dans un seul système avec Badibo." },
        { name: "Commerce de détail", example: "Ventes et stock sous contrôle avec Kira, plus une boutique en ligne." },
        { name: "Éducation", example: "Réseaux scolaires, sauvegarde des dossiers élèves et portails parents." },
        { name: "Santé et cliniques", example: "Données patients sauvegardées dans le cloud, chaque nuit, automatiquement." },
        { name: "Logistique et distribution", example: "Suivi des stocks et alertes automatiques sur l’ensemble des entrepôts." },
        { name: "Services professionnels", example: "Portails clients, messagerie professionnelle et automatisation documentaire." },
        { name: "Startups et SaaS", example: "Du MVP à un produit évolutif sur AWS, exploité par l’équipe qui l’a construit." },
        { name: "ONG et associations", example: "Des réseaux fiables pour les bureaux de terrain et des outils simples pour les donateurs et les membres." },
      ],
    },
    africa: {
      eyebrow: "Conçu en Afrique",
      title: "Conçu en *Afrique*",
      text: "Nous sommes fiers de l’endroit où nous travaillons. Depuis Douala, nous servons des clients au Cameroun, en France et aux États-Unis avec les mêmes exigences que n’importe quelle entreprise dans le monde. Notre équipe travaille en français et en anglais, partage chaque jour ouvré des heures communes avec la côte Est américaine, et apporte une ingénierie pointue à un coût qui vous permet d’en faire plus.",
      cta: { label: "Lire notre histoire →", href: routes.builtInAfrica.path },
    },
    work: {
      eyebrow: "Réalisations choisies",
      title: "Réalisations *choisies*",
      cta: { label: "Voir toutes nos réalisations →", href: routes.work.path },
    },
    process: {
      eyebrow: "Notre méthode",
      title: "Notre méthode en *4 étapes*",
      steps: [
        { title: "Écouter", text: "Nous apprenons à connaître votre activité, vos contraintes et vos objectifs avant de toucher au moindre outil." },
        { title: "Concevoir", text: "Vous recevez un plan clair : périmètre, calendrier et prix." },
        { title: "Construire", text: "Nous livrons par cycles courts. Vous voyez l’avancement chaque semaine." },
        { title: "Exploiter et protéger", text: "Nous restons à vos côtés, assurons le support et continuons d’améliorer." },
      ] satisfies Step[],
      cta: { label: "Voir la méthode complète →", href: routes.howWeWork.path },
    },
    testimonials: {
      title: "Ce que disent *nos clients*",
      quotes: [
        // DRAFT texts: have each person approve their quote before launch.
        { text: "« Supplies and Works nous a donné une identité de marque qui ressemble enfin à l’entreprise que nous sommes. Une charte claire, tous les fichiers dont nous avions besoin, et une équipe à l’écoute à chaque étape. »", by: "Joseph BAHA, Support informatique, Neptune Oil SA, Cameroun · Identité de marque" },
        { text: "« Avec MarrowMails, j’ai enfin une adresse professionnelle sur mon propre domaine, configurée en quelques minutes et payée par Mobile Money. Les résumés par IA me font gagner du temps chaque matin. »", by: "Victor ILOME, Freelance, Indépendant, Cameroun · MarrowMails" },
        { text: "« Heekoo me permet d’échanger avec des clients dans des langues que je ne parle pas, avec ma propre voix. L’équipe derrière le produit est réactive et ne cesse de l’améliorer. »", by: "William MESSI, Freelance, Indépendant, France · Heekoo" },
      ],
    },
    faq: [
      { q: "Où votre équipe est-elle basée ?", a: "À Douala, au Cameroun. Nous travaillons à distance avec des clients du monde entier, et sur site en Afrique centrale." },
      { q: "Travaillez-vous avec des clients hors d’Afrique ?", a: "Oui. Les clients internationaux sont une priorité. Nous travaillons en français et en anglais, avec des plages horaires communes planifiées." },
      { q: "Quels fuseaux horaires couvrez-vous ?", a: "Douala est à UTC+1. Nous partageons toute la journée avec l’Europe, et l’après-midi ainsi que le début de soirée avec la côte Est des États-Unis : au moins 4 heures chaque jour ouvré, avec un support de 8 h à 19 h, heure de Douala." },
      { q: "Avec quelle taille d’entreprise travaillez-vous ?", a: "Les startups et les PME sont notre cœur de cible. Nous accompagnons aussi des organisations plus grandes sur des projets bien définis." },
      { q: "Comment fixez-vous vos prix ?", a: "Au projet, par forfait mensuel, ou les deux. Vous recevez toujours une estimation claire avant que nous commencions." },
      { q: "À qui appartiennent le code et les designs ?", a: "À vous, une fois le projet entièrement payé. Nous vous remettons le code source, les fichiers de design et les comptes, et ne conservons que le droit de réutiliser des briques génériques et non confidentielles." },
      { q: "Pouvez-vous reprendre un système existant ?", a: "Oui. Nous commençons par un court audit de l’existant, puis nous convenons ensemble d’un plan." },
      { q: "Proposez-vous un support après le lancement ?", a: "Oui. Nos contrats de maintenance et de support assurent le bon fonctionnement et l’amélioration continue de vos systèmes." },
    ] satisfies Faq[],
    finalCta: {
      title: "Dites-nous ce dont vous avez besoin. Nous vous dirons comment nous nous y prendrions.",
      text: "Un appel de 30 minutes. Sans engagement.",
      buttons: [
        { label: "Réserver un appel", href: `${routes.contact.path}#book` },
        { label: "Envoyer un message", href: `${routes.contact.path}#message` },
      ],
    } satisfies FinalCta,
  },
});
