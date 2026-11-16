// Work, case study template labels, Insights, Contact, legal pages, credits, 404.
// Copy verbatim from 3-WEBSITE-COPY.md.
import type { FinalCta, PageHeroCopy, Seo } from "@/content/types";
import { localized } from "@/lib/i18n";
import { routes } from "@/lib/routes";

export const workPage = localized({
  en: {
    seo: {
      title: "Our Work | Case Studies in Cloud, Software, AI and Design | Supplies and Works",
      description: "Selected projects across cloud, software, web, AI and creative design, including our own products Badibo and Kira.",
    } satisfies Seo,
    hero: { title: "Work we are *proud of.*", sub: "Selected projects across cloud, software, AI and design." } satisfies PageHeroCopy,
    intro: "Real projects, real constraints, real results. Where clients prefer privacy, we anonymize.",
    note: "(Draft case studies: review each one before launch.)",
    results: {
      eyebrow: "Results at a glance",
      title: "Results *at a glance*",
      items: [
        { value: "08", label: "projects" },
        { value: "08", label: "sectors" },
        { value: "03", label: "countries" },
        { value: "25", label: "product customers" },
      ],
    },
    cta: { title: "Want results like these?", buttons: [{ label: "Start a project", href: routes.contact.path }] } satisfies FinalCta,
  },
  fr: {
    seo: {
      title: "Nos réalisations | Études de cas en cloud, logiciel, IA et design | Supplies and Works",
      description: "Une sélection de projets en cloud, logiciel, web, IA et design, dont nos propres produits Badibo et Kira.",
    } satisfies Seo,
    hero: { title: "Des réalisations dont nous sommes *fiers.*", sub: "Une sélection de projets en cloud, logiciel, IA et design." } satisfies PageHeroCopy,
    intro: "De vrais projets, de vraies contraintes, de vrais résultats. Lorsque nos clients préfèrent la discrétion, nous les anonymisons.",
    note: "(Études de cas provisoires : relire chacune avant la mise en ligne.)",
    results: {
      eyebrow: "Nos résultats en bref",
      title: "Nos résultats *en bref*",
      items: [
        { value: "08", label: "projets" },
        { value: "08", label: "secteurs" },
        { value: "03", label: "pays" },
        { value: "25", label: "clients produits" },
      ],
    },
    cta: { title: "Vous voulez des résultats comme ceux-ci ?", buttons: [{ label: "Lancer un projet", href: routes.contact.path }] } satisfies FinalCta,
  },
});

export const caseStudyLabels = localized({
  en: {
    keyResults: "Key results",
    visit: "Visit the live site",
    client: "The client",
    challenge: "The challenge",
    approach: "Our approach",
    solution: "The solution",
    technology: "Technology",
    results: "The results",
    says: "What the client says",
    learned: "What we learned",
    next: "Next project",
    cta: { title: "Have a similar challenge?", buttons: [{ label: "Talk to us", href: routes.contact.path }] } satisfies FinalCta,
  },
  fr: {
    keyResults: "Résultats clés",
    visit: "Voir le site en ligne",
    client: "Le client",
    challenge: "Le défi",
    approach: "Notre approche",
    solution: "La solution",
    technology: "Technologies",
    results: "Les résultats",
    says: "Ce qu’en dit le client",
    learned: "Ce que nous avons appris",
    next: "Projet suivant",
    cta: { title: "Vous avez un défi similaire ?", buttons: [{ label: "Parlons-en", href: routes.contact.path }] } satisfies FinalCta,
  },
});

export const insights = localized({
  en: {
    seo: {
      title: "Insights | Cloud, Software, AI and Building from Africa | Supplies and Works",
      description:
        "Practical articles from the Supplies and Works team on cloud, backup, software, AI automation, design and running a technology company from Africa.",
    } satisfies Seo,
    hero: {
      title: "Ideas that *help you decide.*",
      sub: "Notes from our team on cloud, software, AI and building a technology company from Africa.",
    } satisfies PageHeroCopy,
    categories: ["All", "Cloud", "Backup", "Software", "AI", "Design", "Africa", "Company news"],
    featured: {
      label: "Featured article",
      category: "Backup",
      title: "Why a backup on the same server is not a backup",
      text: "Many businesses believe their data is protected because they copy files to another drive in the same office. A single fire, flood, theft or ransomware attack can destroy both copies. This article explains the 3-2-1 rule (three copies, two types of storage, one copy off site), what to back up first, and how to set up automatic cloud backups for on-site servers.",
      cta: "Read →",
      image: "hardDrives" as const,
    },
    ideasLabel: "Coming soon",
    // Category assigned to each idea for the filter. [Adjust as articles are written.]
    ideas: [
      { title: "A simple checklist for moving your business to the cloud", category: "Cloud" },
      { title: "RPO and RTO explained in plain language", category: "Backup" },
      { title: "Five processes in your business that AI can automate this year", category: "AI" },
      { title: "How to run a remote team from Douala for clients worldwide", category: "Africa" },
      { title: "What we learned building and supporting Badibo and Kira", category: "Company news" },
      { title: "Website, web app or SaaS: how to choose", category: "Software" },
      { title: "How to reduce your cloud bill without hurting performance", category: "Cloud" },
      { title: "What to ask before you hire a software team", category: "Software" },
      { title: "A practical guide to building a reliable office network", category: "" },
      { title: "Building technology in Africa: opportunities and realities", category: "Africa" },
    ],
    newsletter: { title: "Newsletter", text: "One useful idea a month. No spam." },
  },
  fr: {
    seo: {
      title: "Insights | Cloud, logiciel, IA et entreprendre depuis l’Afrique | Supplies and Works",
      description:
        "Des articles pratiques de l’équipe Supplies and Works sur le cloud, la sauvegarde, le logiciel, l’automatisation par l’IA, le design et la conduite d’une entreprise technologique depuis l’Afrique.",
    } satisfies Seo,
    hero: {
      title: "Des idées pour *vous aider à décider.*",
      sub: "Les notes de notre équipe sur le cloud, le logiciel, l’IA et la construction d’une entreprise technologique depuis l’Afrique.",
    } satisfies PageHeroCopy,
    categories: ["Tout", "Cloud", "Sauvegarde", "Logiciel", "IA", "Design", "Afrique", "Actualités"],
    featured: {
      label: "Article à la une",
      category: "Sauvegarde",
      title: "Pourquoi une sauvegarde sur le même serveur n’est pas une sauvegarde",
      text: "Beaucoup d’entreprises pensent que leurs données sont protégées parce qu’elles copient leurs fichiers sur un autre disque, dans le même bureau. Un seul incendie, une inondation, un vol ou une attaque par rançongiciel peut détruire les deux copies. Cet article explique la règle 3-2-1 (trois copies, deux types de stockage, une copie hors site), ce qu’il faut sauvegarder en priorité et comment mettre en place des sauvegardes automatiques dans le cloud pour vos serveurs sur site.",
      cta: "Lire →",
      image: "hardDrives" as const,
    },
    ideasLabel: "Bientôt disponible",
    // Category assigned to each idea for the filter. [Adjust as articles are written.]
    ideas: [
      { title: "Une checklist simple pour migrer votre entreprise vers le cloud", category: "Cloud" },
      { title: "RPO et RTO expliqués simplement", category: "Sauvegarde" },
      { title: "Cinq processus de votre entreprise que l’IA peut automatiser cette année", category: "IA" },
      { title: "Comment diriger une équipe à distance depuis Douala pour des clients du monde entier", category: "Afrique" },
      { title: "Ce que nous avons appris en créant et en maintenant Badibo et Kira", category: "Actualités" },
      { title: "Site web, application web ou SaaS : comment choisir", category: "Logiciel" },
      { title: "Comment réduire votre facture cloud sans nuire aux performances", category: "Cloud" },
      { title: "Les questions à poser avant d’engager une équipe de développement", category: "Logiciel" },
      { title: "Guide pratique pour construire un réseau d’entreprise fiable", category: "" },
      { title: "Créer de la technologie en Afrique : opportunités et réalités", category: "Afrique" },
    ],
    newsletter: { title: "Newsletter", text: "Une idée utile par mois. Pas de spam." },
  },
});

export const contact = localized({
  en: {
    seo: {
      title: "Contact Supplies and Works | Book a Call",
      description: "Tell us about your project. Book a 30-minute call or send a message. We reply within one working day.",
    } satisfies Seo,
    hero: { title: "Let’s talk about *your project.*", sub: "Tell us what you need. We reply within [one working day]." } satisfies PageHeroCopy,
    chips: {
      title: "What are you looking for?",
      items: ["Cloud", "Backup", "Software", "Website", "AI and automation", "Design", "Network and infrastructure", "A product demo", "Not sure yet"],
    },
    next: {
      title: "What happens next",
      steps: [
        { title: "You tell us", text: "what you need." },
        { title: "We reply", text: "within [one working day] with questions or a call time." },
        { title: "We talk", text: "for 30 minutes, no obligation." },
        { title: "You receive", text: "a clear proposal if we are a good fit." },
      ],
    },
    form: {
      title: "Send a message",
      name: "Name",
      email: "Email",
      company: "Company",
      country: "Country",
      phone: "Phone (optional)",
      budget: "Budget range (optional)",
      budgetOptions: ["[Range 1]", "[Range 2]", "[Range 3]", "[Range 4]"],
      timeline: "Timeline",
      timelineOptions: ["[As soon as possible]", "[1 to 3 months]", "[3 to 6 months]", "[Not sure yet]"],
      message: "Tell us about your project",
      send: "Send message",
      sending: "Sending…",
      success: "Thank you. We have your message and will reply within [one working day].",
      error: "Something went wrong. Please try again or email us at contact@suppliesandworks.com.",
      required: "Required",
      invalidEmail: "Enter a valid email address.",
    },
    book: {
      title: "Book a call",
      text: "Pick a time that suits you. Times are shown in your local time zone.",
      placeholder: "[Calendar embed]",
    },
    details: {
      title: "Contact details",
      items: [
        { label: "Email", value: "contact@suppliesandworks.com" },
        { label: "Phone / WhatsApp", value: "+237 654 174 367 · +237 656 372 914" },
        { label: "Address", value: "Douala, Cameroon" },
        { label: "Hours", value: "[Hours in Douala time, with automatic conversion to the visitor’s time]" },
        { label: "Support for current clients", value: "[Support email or portal]" },
      ],
    },
    follow: { title: "Follow us", items: ["[LinkedIn]", "[Instagram]", "[Facebook]", "[X]", "[GitHub]"] },
    quick: [
      { q: "How soon will I hear back?", a: "Within [one working day]." },
      { q: "Is the first call free?", a: "Yes." },
      { q: "Do you sign NDAs?", a: "Yes." },
      { q: "Can we talk in French?", a: "Yes, in English or French." },
    ],
  },
  fr: {
    seo: {
      title: "Contacter Supplies and Works | Réserver un appel",
      description: "Parlez-nous de votre projet. Réservez un appel de 30 minutes ou envoyez-nous un message. Nous répondons sous un jour ouvré.",
    } satisfies Seo,
    hero: { title: "Parlons de *votre projet.*", sub: "Dites-nous ce dont vous avez besoin. Nous répondons sous [un jour ouvré]." } satisfies PageHeroCopy,
    chips: {
      title: "Que recherchez-vous ?",
      items: ["Cloud", "Sauvegarde", "Logiciel", "Site web", "IA et automatisation", "Design", "Réseau et infrastructure", "Une démo produit", "Je ne sais pas encore"],
    },
    next: {
      title: "La suite",
      steps: [
        { title: "Vous nous dites", text: "ce dont vous avez besoin." },
        { title: "Nous répondons", text: "sous [un jour ouvré] avec nos questions ou une proposition de créneau." },
        { title: "Nous échangeons", text: "pendant 30 minutes, sans engagement." },
        { title: "Vous recevez", text: "une proposition claire si nous sommes faits pour travailler ensemble." },
      ],
    },
    form: {
      title: "Envoyer un message",
      name: "Nom",
      email: "E-mail",
      company: "Entreprise",
      country: "Pays",
      phone: "Téléphone (facultatif)",
      budget: "Fourchette de budget (facultatif)",
      budgetOptions: ["[Fourchette 1]", "[Fourchette 2]", "[Fourchette 3]", "[Fourchette 4]"],
      timeline: "Délai",
      timelineOptions: ["[Dès que possible]", "[1 à 3 mois]", "[3 à 6 mois]", "[Je ne sais pas encore]"],
      message: "Parlez-nous de votre projet",
      send: "Envoyer le message",
      sending: "Envoi en cours…",
      success: "Merci. Nous avons bien reçu votre message et vous répondrons sous [un jour ouvré].",
      error: "Une erreur s’est produite. Veuillez réessayer ou nous écrire à contact@suppliesandworks.com.",
      required: "Obligatoire",
      invalidEmail: "Saisissez une adresse e-mail valide.",
    },
    book: {
      title: "Réserver un appel",
      text: "Choisissez le créneau qui vous convient. Les horaires sont affichés dans votre fuseau horaire.",
      placeholder: "[Calendrier intégré]",
    },
    details: {
      title: "Coordonnées",
      items: [
        { label: "E-mail", value: "contact@suppliesandworks.com" },
        { label: "Téléphone / WhatsApp", value: "+237 654 174 367 · +237 656 372 914" },
        { label: "Adresse", value: "Douala, Cameroun" },
        { label: "Horaires", value: "[Horaires à l’heure de Douala, avec conversion automatique dans le fuseau du visiteur]" },
        { label: "Support pour nos clients", value: "[E-mail ou portail de support]" },
      ],
    },
    follow: { title: "Suivez-nous", items: ["[LinkedIn]", "[Instagram]", "[Facebook]", "[X]", "[GitHub]"] },
    quick: [
      { q: "Quand aurai-je une réponse ?", a: "Sous [un jour ouvré]." },
      { q: "Le premier appel est-il gratuit ?", a: "Oui." },
      { q: "Signez-vous des accords de confidentialité (NDA) ?", a: "Oui." },
      { q: "Pouvons-nous échanger en français ?", a: "Oui, en français ou en anglais." },
    ],
  },
});

export const legal = localized({
  en: {
    privacy: {
      seo: { title: "Privacy Policy | Supplies and Works", description: "How Supplies and Works collects, uses and protects personal data." } satisfies Seo,
      title: "Privacy Policy",
      note: "(Placeholder. Have a legal professional review it before publishing.)",
      intro: "We collect only the information you give us through our forms and the analytics needed to improve the site. We do not sell personal data. You can ask to access, correct or delete your data at contact@suppliesandworks.com.",
      sections: ["Who we are", "Data we collect", "Why we use it", "Cookies and analytics", "Sharing with service providers", "International transfers", "Retention", "Security", "Your rights", "Contact"],
    },
    terms: {
      seo: { title: "Terms | Supplies and Works", description: "Terms of use of the Supplies and Works website." } satisfies Seo,
      title: "Terms",
      note: "(Placeholder. Have a legal professional review it before publishing.)",
      intro: "",
      sections: ["Use of the website", "Intellectual property", "Links to other sites", "Disclaimers", "Limitation of liability", "Governing law", "Contact"],
    },
    sectionPlaceholder: "[To complete]",
    credits: {
      seo: { title: "Image credits | Supplies and Works", description: "Credits for the photographs used on the Supplies and Works website." } satisfies Seo,
      title: "Image *credits*",
      intro: "Photos from Unsplash.",
      photo: "Photo",
      by: "by",
      on: "on Unsplash",
    },
    notFound: {
      title: "Lost in the cloud.",
      text: "The page you are looking for has moved or does not exist.",
      buttons: [
        { label: "Back to home", href: "/" },
        { label: "Book a call", href: routes.contact.path },
      ],
    },
  },
  fr: {
    privacy: {
      seo: { title: "Politique de confidentialité | Supplies and Works", description: "Comment Supplies and Works collecte, utilise et protège les données personnelles." } satisfies Seo,
      title: "Politique de confidentialité",
      note: "(Texte provisoire. À faire relire par un professionnel du droit avant publication.)",
      intro: "Nous collectons uniquement les informations que vous nous transmettez via nos formulaires et les statistiques nécessaires à l’amélioration du site. Nous ne vendons aucune donnée personnelle. Vous pouvez demander l’accès à vos données, leur rectification ou leur suppression à contact@suppliesandworks.com.",
      sections: ["Qui sommes-nous", "Données collectées", "Pourquoi nous les utilisons", "Cookies et statistiques", "Partage avec nos prestataires", "Transferts internationaux", "Durée de conservation", "Sécurité", "Vos droits", "Contact"],
    },
    terms: {
      seo: { title: "Conditions d’utilisation | Supplies and Works", description: "Conditions d’utilisation du site de Supplies and Works." } satisfies Seo,
      title: "Conditions d’utilisation",
      note: "(Texte provisoire. À faire relire par un professionnel du droit avant publication.)",
      intro: "",
      sections: ["Utilisation du site", "Propriété intellectuelle", "Liens vers d’autres sites", "Avertissements", "Limitation de responsabilité", "Droit applicable", "Contact"],
    },
    sectionPlaceholder: "[À compléter]",
    credits: {
      seo: { title: "Crédits photos | Supplies and Works", description: "Crédits des photographies utilisées sur le site de Supplies and Works." } satisfies Seo,
      title: "Crédits *photos*",
      intro: "Photos issues d’Unsplash.",
      photo: "Photo",
      by: "par",
      on: "sur Unsplash",
    },
    notFound: {
      title: "Perdu dans le cloud.",
      text: "La page que vous cherchez a été déplacée ou n’existe pas.",
      buttons: [
        { label: "Retour à l’accueil", href: "/" },
        { label: "Réserver un appel", href: routes.contact.path },
      ],
    },
  },
});
