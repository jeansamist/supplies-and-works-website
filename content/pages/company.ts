// About, Built in Africa, Team, How we work, Engagement models, Careers.
// Copy verbatim from 3-WEBSITE-COPY.md.
import type { Faq, FinalCta, Item, PageHeroCopy, Seo, Step, Table } from "@/content/types";
import { localized } from "@/lib/i18n";
import { routes } from "@/lib/routes";

export const about = localized({
  en: {
    seo: {
      title: "About Supplies and Works | A Full-Service Technology Partner from Cameroon",
      description:
        "Learn who we are, what we believe and how a team of ten in Douala builds, runs and protects technology for businesses around the world.",
    } satisfies Seo,
    hero: {
      title: "A technology partner, *end to end.*",
      sub: "We solve the technology problems of businesses and individuals, from infrastructure to cloud, from software to AI.",
      image: "teamMeeting",
    } satisfies PageHeroCopy,
    story: {
      eyebrow: "Our story",
      paragraphs: [
        "Supplies and Works began with a simple observation. Businesses rarely have just one technology problem. They have a network that fails, software that does not fit, data that is not safe, a website that does not sell, and a team spending hours on repetitive tasks. Too often, each problem belongs to a different supplier, and nobody owns the whole picture.",
        "We decided to be the team that owns the whole picture. We started with infrastructure and IT services, then grew into software, cloud, design and automation. Along the way we built our own products, Badibo and Kira, which are now used by paying customers. Today we are a team of ten, organized in five studios, working from Douala with clients around the world.",
      ],
      milestones: [
        { year: "[Year]", label: "first client" },
        { year: "[Year]", label: "Badibo launch" },
        { year: "[Year]", label: "Kira launch" },
        { year: "[Year]", label: "AWS certification" },
        { year: "[Year]", label: "first international client" },
      ],
      milestonesNote: "[Add founding year, first project and milestones.]",
    },
    mission: {
      eyebrow: "Mission",
      text: "To be the solution to the technology problems of businesses and individuals, with one team they can trust from the first idea to the daily running of their systems.",
    },
    vision: {
      eyebrow: "Vision",
      items: [
        { label: "In five years", text: "a fully remote company serving clients across the world, with North America as a priority market." },
        { label: "In ten years", text: "offices in other countries, closer to the people and businesses we serve." },
      ],
    },
    values: {
      eyebrow: "What we believe",
      title: "What we *believe*",
      items: [
        { title: "Pragmatism over hype.", text: "We recommend what works for your business, not what is fashionable." },
        { title: "Ownership.", text: "When we take a project, we own the outcome, not only the tasks." },
        { title: "Craft.", text: "Clean code, careful design, tidy cabling. Quality shows in the details." },
        { title: "Honesty.", text: "We say what we can do, what we cannot, and what we recommend. We never overpromise." },
        { title: "Long-term thinking.", text: "We build for the third year, not only for launch day." },
      ] satisfies Item[],
    },
    different: {
      eyebrow: "What makes us different",
      title: "What makes us *different*",
      table: {
        head: ["", "Typical IT supplier", "Supplies and Works"],
        rows: [
          ["Scope", "One specialty", "Infrastructure, cloud, software, design and AI"],
          ["Software", "Sells time only", "Also builds and runs its own SaaS products"],
          ["After launch", "Hands over and leaves", "Maintenance, monitoring and support plans"],
          ["Data safety", "Often an afterthought", "A core offer: automatic backup to the cloud"],
          ["Languages", "One", "English and French"],
        ],
        highlightCol: 2,
      } satisfies Table,
    },
    studios: { eyebrow: "The five studios", title: "The five *studios*" },
    certifications: {
      eyebrow: "Certifications and partnerships",
      title: "Certifications and *partnerships*",
      items: [
        "**AWS Certified Solutions Architect** (founder)",
        "[Other certifications]",
        "[Partner programs, for example AWS Partner Network, when joined]",
      ],
    },
    numbers: {
      eyebrow: "Our numbers",
      title: "Our *numbers*",
      items: [
        { value: "10", label: "people" },
        { value: "08", label: "projects" },
        { value: "25", label: "customers" },
        { value: "03", label: "countries" },
        { value: "05", label: "years" },
      ],
    },
    cta: {
      title: "Meet the team · Book a call",
      buttons: [
        { label: "Meet the team", href: routes.team.path },
        { label: "Book a call", href: routes.contact.path },
      ],
    } satisfies FinalCta,
  },
  fr: {
    seo: {
      title: "À propos de Supplies and Works | Un partenaire technologique complet, depuis le Cameroun",
      description:
        "Découvrez qui nous sommes, ce en quoi nous croyons et comment une équipe de dix personnes à Douala conçoit, exploite et protège la technologie d’entreprises du monde entier.",
    } satisfies Seo,
    hero: {
      title: "Un partenaire technologique, *de bout en bout.*",
      sub: "Nous résolvons les problèmes technologiques des entreprises et des particuliers, de l’infrastructure au cloud, du logiciel à l’IA.",
      image: "teamMeeting",
    } satisfies PageHeroCopy,
    story: {
      eyebrow: "Notre histoire",
      paragraphs: [
        "Supplies and Works est né d’un constat simple : une entreprise a rarement un seul problème technologique. Elle a un réseau qui tombe en panne, un logiciel inadapté, des données mal protégées, un site web qui ne vend pas et une équipe qui passe des heures sur des tâches répétitives. Trop souvent, chaque problème relève d’un prestataire différent, et personne n’a la vue d’ensemble.",
        "Nous avons choisi d’être l’équipe qui a cette vue d’ensemble. Nous avons commencé par l’infrastructure et les services informatiques, puis nous nous sommes développés vers le logiciel, le cloud, le design et l’automatisation. En chemin, nous avons créé nos propres produits, Badibo et Kira, aujourd’hui utilisés par des clients payants. Nous sommes désormais une équipe de dix personnes, organisée en cinq studios, qui travaille depuis Douala avec des clients du monde entier.",
      ],
      milestones: [
        { year: "[Année]", label: "premier client" },
        { year: "[Année]", label: "lancement de Badibo" },
        { year: "[Année]", label: "lancement de Kira" },
        { year: "[Année]", label: "certification AWS" },
        { year: "[Année]", label: "premier client international" },
      ],
      milestonesNote: "[Ajouter l’année de création, le premier projet et les étapes clés.]",
    },
    mission: {
      eyebrow: "Mission",
      text: "Être la solution aux problèmes technologiques des entreprises et des particuliers, avec une seule équipe de confiance, de la première idée au fonctionnement quotidien de leurs systèmes.",
    },
    vision: {
      eyebrow: "Vision",
      items: [
        { label: "D’ici cinq ans", text: "une entreprise entièrement à distance au service de clients du monde entier, avec l’Amérique du Nord comme marché prioritaire." },
        { label: "D’ici dix ans", text: "des bureaux dans d’autres pays, au plus près des personnes et des entreprises que nous servons." },
      ],
    },
    values: {
      eyebrow: "Ce en quoi nous croyons",
      title: "Ce en quoi nous *croyons*",
      items: [
        { title: "Le pragmatisme avant les effets de mode.", text: "Nous recommandons ce qui fonctionne pour votre entreprise, pas ce qui est tendance." },
        { title: "L’engagement.", text: "Quand nous prenons un projet, nous répondons du résultat, pas seulement des tâches." },
        { title: "Le savoir-faire.", text: "Un code propre, un design soigné, un câblage bien rangé. La qualité se voit dans les détails." },
        { title: "L’honnêteté.", text: "Nous disons ce que nous savons faire, ce que nous ne savons pas faire et ce que nous recommandons. Nous ne promettons jamais plus que nous ne pouvons tenir." },
        { title: "La vision à long terme.", text: "Nous construisons pour la troisième année, pas seulement pour le jour du lancement." },
      ] satisfies Item[],
    },
    different: {
      eyebrow: "Ce qui nous distingue",
      title: "Ce qui nous *distingue*",
      table: {
        head: ["", "Prestataire informatique classique", "Supplies and Works"],
        rows: [
          ["Périmètre", "Une seule spécialité", "Infrastructure, cloud, logiciel, design et IA"],
          ["Logiciel", "Vend uniquement du temps", "Conçoit et exploite aussi ses propres produits SaaS"],
          ["Après le lancement", "Livre et s’en va", "Plans de maintenance, de supervision et d’assistance"],
          ["Sécurité des données", "Souvent négligée", "Une offre centrale : la sauvegarde automatique dans le cloud"],
          ["Langues", "Une seule", "Anglais et français"],
        ],
        highlightCol: 2,
      } satisfies Table,
    },
    studios: { eyebrow: "Les cinq studios", title: "Les cinq *studios*" },
    certifications: {
      eyebrow: "Certifications et partenariats",
      title: "Certifications et *partenariats*",
      items: [
        "**AWS Certified Solutions Architect** (fondateur)",
        "[Autres certifications]",
        "[Programmes partenaires, par exemple AWS Partner Network, une fois rejoints]",
      ],
    },
    numbers: {
      eyebrow: "Nos chiffres",
      title: "Nos *chiffres*",
      items: [
        { value: "10", label: "personnes" },
        { value: "08", label: "projets" },
        { value: "25", label: "clients" },
        { value: "03", label: "pays" },
        { value: "05", label: "ans" },
      ],
    },
    cta: {
      title: "Rencontrez l’équipe · Planifiez un appel",
      buttons: [
        { label: "Rencontrer l’équipe", href: routes.team.path },
        { label: "Planifier un appel", href: routes.contact.path },
      ],
    } satisfies FinalCta,
  },
});

export const builtInAfrica = localized({
  en: {
    seo: {
      title: "Built in Africa | Supplies and Works, Technology from Cameroon",
      description:
        "Why work with a technology team in Douala? Strong engineering, a useful time-zone overlap, fair value and two working languages. Learn how we deliver worldwide.",
    } satisfies Seo,
    hero: {
      title: "Built in Africa. *Delivered worldwide.*",
      sub: "Cameroon is where we live, learn and build. The world is where we deliver.",
    } satisfies PageHeroCopy,
    continent: {
      eyebrow: "A continent of builders",
      text: "Africa has one of the youngest, fastest-growing populations on Earth, and a generation of engineers, designers and founders who are building real products for real problems. We are part of that generation. We do not ask for special treatment because of where we are. We ask to be judged on what we ship.",
    },
    reasons: {
      eyebrow: "Six reasons",
      title: "Six reasons to work with a team in *Douala*",
      items: [
        { title: "Real engineering depth.", text: "Our team builds and operates production systems, including our own paid software products." },
        { title: "A workable time zone.", text: "Douala runs on UTC+1. We overlap with Europe all day and with the U.S. East Coast in the afternoon: at least 4 hours a day. See the overlap table below." },
        { title: "Better value.", text: "A lower cost structure means more engineering for your budget, without cutting quality." },
        { title: "Two working languages.", text: "We write, present and support in English and French. Useful for North America, the UK, France, Canada and francophone Africa." },
        { title: "Local knowledge for Africa.", text: "If you are entering or growing in Central Africa, we understand the infrastructure, the payment habits, the constraints and the opportunities." },
        { title: "Hunger and care.", text: "A young company with something to prove. We care about every project." },
      ] satisfies Item[],
    },
    overlap: {
      eyebrow: "Time-zone overlap",
      title: "Time-zone *overlap*",
      table: {
        head: ["Your location", "Time difference with Douala", "Typical overlap"],
        rows: [
          ["Paris / Brussels", "About 0 to 1 hour", "Full working day"],
          ["London", "About 0 to 1 hour", "Full working day"],
          ["New York / Toronto", "About 5 to 6 hours", "At least 4 hours (15:00 to 19:00 Douala time)"],
          ["Chicago", "About 6 to 7 hours", "About 3 hours (16:00 to 19:00 Douala time)"],
          ["Los Angeles / Vancouver", "About 8 to 9 hours", "Short daily window, plus calls scheduled on request"],
        ],
      } satisfies Table,
      footnote: "(The differences shift with daylight saving time. Confirm and complete the overlap column.)",
      pickLabel: "Choose your city",
    },
    remote: {
      eyebrow: "Remote delivery",
      title: "How remote delivery works *with us*",
      items: [
        "**A single point of contact** who knows your project.",
        "**Shared tools**: video calls, a project board, written updates.",
        "**Weekly demos** so you always see progress.",
        "**Overlap hours** agreed from day one.",
        "**Clear documentation**, so nothing lives only in someone’s head.",
      ],
    },
    myths: {
      eyebrow: "Busting myths",
      title: "Busting *myths*",
      items: [
        { title: "“Remote teams in Africa are risky.”", text: "Risk comes from unclear scope and poor communication, not geography. We fix both with a clear plan, weekly demos and a named owner." },
        { title: "“Connectivity and power are unreliable.”", text: "We plan for it: backup connections and power at our workplace, cloud-based tools, and written continuity practices. [Describe your real setup.]" },
        { title: "“You will not know our market.”", text: "We study your business first. Our questions are as important as our code." },
      ] satisfies Item[],
    },
    beyond: {
      eyebrow: "Beyond delivery",
      title: "Beyond *delivery*",
      text: "We hire and grow local talent. We build products for African businesses. [Add real initiatives: internships, training, partnerships with schools.]",
    },
    cta: {
      title: "Built in Africa. Delivered worldwide.",
      buttons: [
        { label: "Work with us", href: routes.contact.path },
        { label: "See our team", href: routes.team.path },
      ],
    } satisfies FinalCta,
  },
  fr: {
    seo: {
      title: "Conçu en Afrique | Supplies and Works, la technologie depuis le Cameroun",
      description:
        "Pourquoi travailler avec une équipe technologique à Douala ? Une solide expertise d’ingénierie, des horaires compatibles, un excellent rapport qualité-prix et deux langues de travail. Découvrez comment nous livrons dans le monde entier.",
    } satisfies Seo,
    hero: {
      title: "Conçu en Afrique. *Livré dans le monde entier.*",
      sub: "Le Cameroun est l’endroit où nous vivons, apprenons et construisons. Le monde est l’endroit où nous livrons.",
    } satisfies PageHeroCopy,
    continent: {
      eyebrow: "Un continent de bâtisseurs",
      text: "L’Afrique compte l’une des populations les plus jeunes et à la croissance la plus rapide au monde, et toute une génération d’ingénieurs, de designers et d’entrepreneurs qui créent de vrais produits pour répondre à de vrais problèmes. Nous faisons partie de cette génération. Nous ne demandons aucun traitement de faveur en raison de l’endroit où nous sommes. Nous demandons à être jugés sur ce que nous livrons.",
    },
    reasons: {
      eyebrow: "Six raisons",
      title: "Six raisons de travailler avec une équipe à *Douala*",
      items: [
        { title: "Une véritable expertise technique.", text: "Notre équipe conçoit et exploite des systèmes en production, y compris nos propres logiciels payants." },
        { title: "Un fuseau horaire pratique.", text: "Douala est à UTC+1. Nous partageons toute la journée de travail avec l’Europe et l’après-midi avec la côte Est des États-Unis : au moins 4 heures par jour. Consultez le tableau des horaires communs ci-dessous." },
        { title: "Un meilleur rapport qualité-prix.", text: "Une structure de coûts plus légère, c’est plus d’ingénierie pour votre budget, sans rogner sur la qualité." },
        { title: "Deux langues de travail.", text: "Nous rédigeons, présentons et accompagnons en anglais et en français. Un atout pour l’Amérique du Nord, le Royaume-Uni, la France, le Canada et l’Afrique francophone." },
        { title: "Une connaissance locale de l’Afrique.", text: "Si vous vous implantez ou vous développez en Afrique centrale, nous comprenons les infrastructures, les habitudes de paiement, les contraintes et les opportunités." },
        { title: "De l’ambition et de l’attention.", text: "Une jeune entreprise qui a quelque chose à prouver. Chaque projet compte pour nous." },
      ] satisfies Item[],
    },
    overlap: {
      eyebrow: "Horaires communs",
      title: "Horaires *communs*",
      table: {
        head: ["Votre ville", "Décalage horaire avec Douala", "Plage commune habituelle"],
        rows: [
          ["Paris / Bruxelles", "Environ 0 à 1 heure", "Toute la journée de travail"],
          ["Londres", "Environ 0 à 1 heure", "Toute la journée de travail"],
          ["New York / Toronto", "Environ 5 à 6 heures", "Au moins 4 heures (de 15 h à 19 h, heure de Douala)"],
          ["Chicago", "Environ 6 à 7 heures", "Environ 3 heures (de 16 h à 19 h, heure de Douala)"],
          ["Los Angeles / Vancouver", "Environ 8 à 9 heures", "Courte plage quotidienne, et appels planifiés sur demande"],
        ],
      } satisfies Table,
      footnote: "(Les décalages varient avec l’heure d’été. Vérifier et compléter la colonne des plages communes.)",
      pickLabel: "Choisissez votre ville",
    },
    remote: {
      eyebrow: "Travail à distance",
      title: "Comment fonctionne le travail à distance *avec nous*",
      items: [
        "**Un interlocuteur unique** qui connaît votre projet.",
        "**Des outils partagés** : visioconférences, tableau de projet, points écrits.",
        "**Des démos hebdomadaires** pour suivre l’avancement en permanence.",
        "**Des horaires communs** définis dès le premier jour.",
        "**Une documentation claire**, pour que rien ne reste uniquement dans la tête de quelqu’un.",
      ],
    },
    myths: {
      eyebrow: "Idées reçues",
      title: "En finir avec les *idées reçues*",
      items: [
        { title: "« Les équipes à distance en Afrique, c’est risqué. »", text: "Le risque vient d’un périmètre flou et d’une mauvaise communication, pas de la géographie. Nous réglons les deux avec un plan clair, des démos hebdomadaires et un responsable identifié." },
        { title: "« La connexion et l’électricité ne sont pas fiables. »", text: "Nous l’anticipons : connexions et alimentation de secours sur notre lieu de travail, outils dans le cloud et procédures de continuité écrites. [Décrire votre dispositif réel.]" },
        { title: "« Vous ne connaîtrez pas notre marché. »", text: "Nous commençons par étudier votre activité. Nos questions comptent autant que notre code." },
      ] satisfies Item[],
    },
    beyond: {
      eyebrow: "Au-delà de la livraison",
      title: "Au-delà de la *livraison*",
      text: "Nous recrutons et faisons grandir les talents locaux. Nous créons des produits pour les entreprises africaines. [Ajouter les initiatives réelles : stages, formations, partenariats avec des écoles.]",
    },
    cta: {
      title: "Conçu en Afrique. Livré dans le monde entier.",
      buttons: [
        { label: "Travailler avec nous", href: routes.contact.path },
        { label: "Découvrir notre équipe", href: routes.team.path },
      ],
    } satisfies FinalCta,
  },
});

export const team = localized({
  en: {
    seo: {
      title: "Our Team | Supplies and Works",
      description: "Meet the engineers, designers and technicians of Supplies and Works. Ten people, five studios, one standard.",
    } satisfies Seo,
    hero: {
      title: "The people *behind the work.*",
      sub: "Ten people. Five studios. One standard.",
      image: "teamCollab",
    } satisfies PageHeroCopy,
    organized: {
      eyebrow: "How we are organized",
      text: "Each studio has a named lead who answers for the quality of its work. You always know who is responsible.",
    },
    leads: {
      eyebrow: "Studio leads",
      title: "Studio *leads*",
      note: "(Complete with all ten members. One photo, one role, one sentence each. Photos of real team members only.)",
      people: [
        { name: "[Founder name]", role: "Founder · Software Engineer · Cloud Engineer · Designer", bio: "AWS Certified Solutions Architect. Leads cloud architecture and product engineering. [Short bio: background, favorite projects, languages spoken.]" },
        { name: "[Name]", role: "Lead, Infrastructure & Network", bio: "System administrator and network engineer. Designs and maintains networks and server environments. [Short bio.]" },
        { name: "William [Surname]", role: "Maintenance and Field Support", bio: "Keeps equipment and systems running on site. [Short bio.]" },
        { name: "[Name]", role: "Lead, Product & Engineering", bio: "[Short bio.]" },
        { name: "[Name]", role: "Lead, AI & Automation", bio: "[Short bio.]" },
        { name: "[Name]", role: "Lead, Creative Studio", bio: "[Short bio.]" },
      ],
    },
    principles: {
      eyebrow: "Our working principles",
      title: "Our working *principles*",
      items: [
        "We review each other’s work.",
        "We document what we build.",
        "We tell you early when something is at risk.",
        "We keep learning: [internal training, certifications in progress].",
      ],
    },
    join: {
      title: "Join the team",
      text: "We look for people who care about craft and ownership.",
      buttons: [{ label: "See open roles →", href: routes.careers.path }],
    } satisfies FinalCta,
  },
  fr: {
    seo: {
      title: "Notre équipe | Supplies and Works",
      description: "Rencontrez les ingénieurs, designers et techniciens de Supplies and Works. Dix personnes, cinq studios, une même exigence.",
    } satisfies Seo,
    hero: {
      title: "Les personnes *derrière le travail.*",
      sub: "Dix personnes. Cinq studios. Une même exigence.",
      image: "teamCollab",
    } satisfies PageHeroCopy,
    organized: {
      eyebrow: "Notre organisation",
      text: "Chaque studio a un responsable identifié qui répond de la qualité de son travail. Vous savez toujours qui est responsable.",
    },
    leads: {
      eyebrow: "Responsables de studio",
      title: "Responsables de *studio*",
      note: "(Compléter avec les dix membres. Une photo, un rôle et une phrase chacun. Uniquement des photos de vrais membres de l’équipe.)",
      people: [
        { name: "[Nom du fondateur]", role: "Fondateur · Ingénieur logiciel · Ingénieur cloud · Designer", bio: "AWS Certified Solutions Architect. Dirige l’architecture cloud et l’ingénierie produit. [Courte bio : parcours, projets préférés, langues parlées.]" },
        { name: "[Nom]", role: "Responsable, Infrastructure et réseau", bio: "Administrateur système et ingénieur réseau. Conçoit et maintient les réseaux et les environnements serveur. [Courte bio.]" },
        { name: "William [Nom de famille]", role: "Maintenance et support sur site", bio: "Assure le bon fonctionnement des équipements et des systèmes sur site. [Courte bio.]" },
        { name: "[Nom]", role: "Responsable, Produit et ingénierie", bio: "[Courte bio.]" },
        { name: "[Nom]", role: "Responsable, IA et automatisation", bio: "[Courte bio.]" },
        { name: "[Nom]", role: "Responsable, Studio créatif", bio: "[Courte bio.]" },
      ],
    },
    principles: {
      eyebrow: "Nos principes de travail",
      title: "Nos principes de *travail*",
      items: [
        "Nous relisons le travail les uns des autres.",
        "Nous documentons ce que nous construisons.",
        "Nous vous alertons tôt quand quelque chose est en danger.",
        "Nous continuons d’apprendre : [formations internes, certifications en cours].",
      ],
    },
    join: {
      title: "Rejoignez l’équipe",
      text: "Nous recherchons des personnes attachées au travail bien fait et au sens des responsabilités.",
      buttons: [{ label: "Voir les postes ouverts →", href: routes.careers.path }],
    } satisfies FinalCta,
  },
});

export const howWeWork = localized({
  en: {
    seo: {
      title: "How We Work | Process, Communication and Delivery | Supplies and Works",
      description:
        "From first call to long-term support: how Supplies and Works plans, builds, runs and protects your project, with clear communication across time zones.",
    } satisfies Seo,
    hero: {
      title: "A clear way of working, from first call to *long-term support.*",
      sub: "Build · Run · Protect.",
      image: "stickyNotes",
    } satisfies PageHeroCopy,
    journey: {
      eyebrow: "The journey",
      title: "The *journey*",
      steps: [
        { title: "Discovery call (free)", text: "A 30-minute conversation. We listen, ask questions and tell you honestly whether and how we can help." },
        { title: "Assessment and proposal", text: "For larger projects, a short paid or free assessment [define]. You receive scope, approach, timeline and price in plain language." },
        { title: "Design and planning", text: "Architecture, user flows or network design, validated with you before we build." },
        { title: "Build in short cycles", text: "Work is split into short cycles. Every week you see a demo and give feedback." },
        { title: "Test and launch", text: "Testing on real devices and data, deployment, training and handover." },
        { title: "Run and protect", text: "Support, monitoring, backups, updates and continuous improvement." },
      ] satisfies Step[],
    },
    communicate: {
      eyebrow: "How we communicate",
      title: "How we *communicate*",
      items: [
        "**One point of contact** who knows your project.",
        "**A shared project board** where you see status in real time.",
        "**Weekly demos** and short written summaries.",
        "**Clear escalation** when something is urgent.",
        "**Documentation** delivered with every project.",
      ],
    },
    timezones: {
      eyebrow: "Working across time zones",
      title: "Working across *time zones*",
      text: "We are on UTC+1. We plan fixed overlap hours with each client and keep decisions and updates in writing, so work continues while you sleep. We overlap at least 4 hours a day with the U.S. East Coast, answer within one working day, and provide support from 8:00 to 19:00 Douala time.",
    },
    quality: {
      eyebrow: "Quality practices",
      title: "Quality *practices*",
      tags: ["Code review", "Automated tests where they add value", "Staging environments", "Security checks", "Backups before every major change", "Written handover"],
    },
    tools: {
      eyebrow: "Our tools",
      title: "Our *tools*",
      tags: ["[Slack or Teams]", "[Linear, Jira or Trello]", "[GitHub]", "[Figma]", "[Google Meet or Zoom]", "[Notion or Confluence]"],
    },
    ask: {
      eyebrow: "What we ask from you",
      title: "What we ask *from you*",
      text: "A decision-maker available for feedback, access to the people who know the business, and timely approvals. In return you get speed and transparency.",
    },
    faq: [
      { q: "What happens if the scope changes?", a: "We discuss the impact on time and cost and agree before proceeding." },
      { q: "How do you handle risks?", a: "We name them early and plan around them." },
      { q: "What if we are not happy with something?", a: "Tell us. We fix it or find a fair solution." },
      { q: "Do you sign NDAs?", a: "Yes." },
    ] satisfies Faq[],
    cta: { title: "Start with a conversation.", buttons: [{ label: "Book a call", href: routes.contact.path }] } satisfies FinalCta,
  },
  fr: {
    seo: {
      title: "Notre méthode | Processus, communication et livraison | Supplies and Works",
      description:
        "Du premier appel à l’accompagnement dans la durée : comment Supplies and Works planifie, construit, exploite et protège votre projet, avec une communication claire malgré les fuseaux horaires.",
    } satisfies Seo,
    hero: {
      title: "Une méthode claire, du premier appel à *l’accompagnement dans la durée.*",
      sub: "Construire · Exploiter · Protéger.",
      image: "stickyNotes",
    } satisfies PageHeroCopy,
    journey: {
      eyebrow: "Le parcours",
      title: "Le *parcours*",
      steps: [
        { title: "Appel de découverte (gratuit)", text: "Un échange de 30 minutes. Nous écoutons, posons des questions et vous disons honnêtement si et comment nous pouvons vous aider." },
        { title: "Audit et proposition", text: "Pour les projets plus importants, un court audit, payant ou gratuit [à définir]. Vous recevez le périmètre, l’approche, le calendrier et le prix, dans un langage clair." },
        { title: "Conception et planification", text: "Architecture, parcours utilisateurs ou conception réseau, validés avec vous avant de construire." },
        { title: "Développement en cycles courts", text: "Le travail est découpé en cycles courts. Chaque semaine, vous voyez une démo et donnez votre avis." },
        { title: "Tests et mise en ligne", text: "Tests sur de vrais appareils et de vraies données, déploiement, formation et passation." },
        { title: "Exploitation et protection", text: "Assistance, supervision, sauvegardes, mises à jour et amélioration continue." },
      ] satisfies Step[],
    },
    communicate: {
      eyebrow: "Notre façon de communiquer",
      title: "Notre façon de *communiquer*",
      items: [
        "**Un interlocuteur unique** qui connaît votre projet.",
        "**Un tableau de projet partagé** pour suivre l’avancement en temps réel.",
        "**Des démos hebdomadaires** et de courts résumés écrits.",
        "**Une procédure d’escalade claire** en cas d’urgence.",
        "**Une documentation** livrée avec chaque projet.",
      ],
    },
    timezones: {
      eyebrow: "Travailler entre fuseaux horaires",
      title: "Travailler entre *fuseaux horaires*",
      text: "Nous sommes à UTC+1. Nous fixons avec chaque client des plages horaires communes et consignons décisions et points d’avancement par écrit, pour que le travail avance pendant que vous dormez. Nous partageons au moins 4 heures par jour avec la côte Est des États-Unis, répondons sous un jour ouvré et assurons l’assistance de 8 h à 19 h, heure de Douala.",
    },
    quality: {
      eyebrow: "Pratiques qualité",
      title: "Pratiques *qualité*",
      tags: ["Revue de code", "Tests automatisés quand ils sont utiles", "Environnements de préproduction", "Contrôles de sécurité", "Sauvegardes avant chaque changement majeur", "Passation écrite"],
    },
    tools: {
      eyebrow: "Nos outils",
      title: "Nos *outils*",
      tags: ["[Slack ou Teams]", "[Linear, Jira ou Trello]", "[GitHub]", "[Figma]", "[Google Meet ou Zoom]", "[Notion ou Confluence]"],
    },
    ask: {
      eyebrow: "Ce que nous attendons de vous",
      title: "Ce que nous attendons *de vous*",
      text: "Un décideur disponible pour donner son avis, un accès aux personnes qui connaissent l’activité et des validations dans les temps. En retour, vous gagnez en rapidité et en transparence.",
    },
    faq: [
      { q: "Que se passe-t-il si le périmètre change ?", a: "Nous évaluons ensemble l’impact sur les délais et les coûts, et nous nous mettons d’accord avant d’aller plus loin." },
      { q: "Comment gérez-vous les risques ?", a: "Nous les identifions tôt et planifions en conséquence." },
      { q: "Et si quelque chose ne nous convient pas ?", a: "Dites-le-nous. Nous corrigeons ou trouvons une solution équitable." },
      { q: "Signez-vous des accords de confidentialité ?", a: "Oui." },
    ] satisfies Faq[],
    cta: { title: "Commençons par en parler.", buttons: [{ label: "Planifier un appel", href: routes.contact.path }] } satisfies FinalCta,
  },
});

export const engagement = localized({
  en: {
    seo: {
      title: "Engagement Models | Fixed Projects, Subscriptions and Dedicated Teams | Supplies and Works",
      description:
        "Work with Supplies and Works by project, monthly subscription, dedicated team or SaaS subscription. Clear pricing and flexible terms.",
    } satisfies Seo,
    hero: {
      title: "Work with us the way *that fits you.*",
      sub: "Projects, subscriptions, or both.",
      image: "contractSigning",
    } satisfies PageHeroCopy,
    models: {
      eyebrow: "Four ways to work together",
      title: "Four ways to *work together*",
      items: [
        {
          title: "Fixed-scope project",
          text: "A defined deliverable with a set price and timeline. Ideal for websites, apps, migrations, brand identities and infrastructure installations.",
          best: "you know what you need.",
          get: "a written scope, a fixed price, milestones.",
        },
        {
          title: "Subscription and maintenance",
          text: "A monthly plan covering support, hosting, updates, monitoring and backups.",
          best: "you want your systems cared for.",
          get: "predictable cost, response times, monthly report.",
        },
        {
          title: "Dedicated team [if offered]",
          text: "A group of our engineers and designers working as an extension of your team.",
          best: "you have ongoing work and need capacity.",
          get: "a stable team, flexible scope, monthly billing.",
        },
        {
          title: "Product subscription",
          text: "Badibo, Kira and our other tools, billed monthly or yearly.",
          best: "you need a ready-to-use solution.",
        },
      ] as { title: string; text: string; best: string; get?: string }[],
      bestLabel: "Best when",
      getLabel: "You get",
    },
    which: {
      eyebrow: "Which one is right for you?",
      title: "Which one is *right for you?*",
      table: {
        head: ["Situation", "Suggested model"],
        rows: [
          ["New website or app", "Fixed-scope project, then maintenance"],
          ["Existing system needs care", "Subscription and maintenance"],
          ["Long roadmap, limited internal team", "Dedicated team"],
          ["Standard need (restaurant, shop)", "Product subscription"],
          ["Not sure", "Start with a discovery call"],
        ],
      } satisfies Table,
    },
    pricing: {
      eyebrow: "How pricing works",
      title: "How pricing *works*",
      text: "Every project is different. After a short discovery call you receive a clear estimate. We explain what drives cost and where you can save. [Add “from” prices if you decide to publish them.]",
    },
    billing: {
      eyebrow: "Billing and payment",
      title: "Billing and *payment*",
      text: "Invoices in [USD, CAD, EUR, XAF]. Payment by [bank transfer, card, Wise or other]. Typical payment schedule: [e.g. deposit, milestones, final payment].",
      note: "(Confirm what your company can accept.)",
    },
    terms: {
      eyebrow: "Terms in plain words",
      title: "Terms in *plain words*",
      items: [
        { title: "Ownership", text: "you own the deliverables once paid in full: source code, design files and accounts are handed over." },
        { title: "Confidentiality", text: "we sign NDAs." },
        { title: "Support after launch", text: "[warranty period and support terms]." },
        { title: "Change requests", text: "handled with a written estimate." },
      ] satisfies Item[],
    },
    cta: { title: "Get a clear estimate.", buttons: [{ label: "Book a call", href: routes.contact.path }] } satisfies FinalCta,
  },
  fr: {
    seo: {
      title: "Modes de collaboration | Projets au forfait, abonnements et équipes dédiées | Supplies and Works",
      description:
        "Travaillez avec Supplies and Works au projet, par abonnement mensuel, avec une équipe dédiée ou via un abonnement SaaS. Des tarifs clairs et des conditions souples.",
    } satisfies Seo,
    hero: {
      title: "Travaillez avec nous de la façon *qui vous convient.*",
      sub: "Des projets, des abonnements, ou les deux.",
      image: "contractSigning",
    } satisfies PageHeroCopy,
    models: {
      eyebrow: "Quatre façons de collaborer",
      title: "Quatre façons de *collaborer*",
      items: [
        {
          title: "Projet au forfait",
          text: "Un livrable défini, avec un prix et un calendrier fixés. Idéal pour les sites web, les applications, les migrations, les identités de marque et les installations d’infrastructure.",
          best: "vous savez ce dont vous avez besoin.",
          get: "un périmètre écrit, un prix fixe, des jalons.",
        },
        {
          title: "Abonnement et maintenance",
          text: "Une formule mensuelle qui couvre l’assistance, l’hébergement, les mises à jour, la supervision et les sauvegardes.",
          best: "vous voulez que l’on prenne soin de vos systèmes.",
          get: "un coût prévisible, des délais de réponse garantis, un rapport mensuel.",
        },
        {
          title: "Équipe dédiée [si proposée]",
          text: "Un groupe de nos ingénieurs et designers qui travaille comme une extension de votre équipe.",
          best: "vous avez un travail continu et besoin de capacité.",
          get: "une équipe stable, un périmètre flexible, une facturation mensuelle.",
        },
        {
          title: "Abonnement à un produit",
          text: "Badibo, Kira et nos autres outils, facturés au mois ou à l’année.",
          best: "vous avez besoin d’une solution prête à l’emploi.",
        },
      ] as { title: string; text: string; best: string; get?: string }[],
      bestLabel: "Idéal quand",
      getLabel: "Vous obtenez",
    },
    which: {
      eyebrow: "Quelle formule vous convient ?",
      title: "Quelle formule *vous convient ?*",
      table: {
        head: ["Situation", "Formule conseillée"],
        rows: [
          ["Nouveau site web ou nouvelle application", "Projet au forfait, puis maintenance"],
          ["Système existant à entretenir", "Abonnement et maintenance"],
          ["Feuille de route longue, équipe interne limitée", "Équipe dédiée"],
          ["Besoin standard (restaurant, commerce)", "Abonnement à un produit"],
          ["Vous hésitez", "Commencez par un appel de découverte"],
        ],
      } satisfies Table,
    },
    pricing: {
      eyebrow: "Nos tarifs",
      title: "Comment fonctionnent *nos tarifs*",
      text: "Chaque projet est différent. Après un court appel de découverte, vous recevez une estimation claire. Nous vous expliquons ce qui détermine le coût et où vous pouvez faire des économies. [Ajouter des prix « à partir de » si vous décidez de les publier.]",
    },
    billing: {
      eyebrow: "Facturation et paiement",
      title: "Facturation et *paiement*",
      text: "Factures en [USD, CAD, EUR, XAF]. Paiement par [virement bancaire, carte, Wise ou autre]. Échéancier habituel : [p. ex. acompte, jalons, paiement final].",
      note: "(Vérifier les moyens de paiement que votre entreprise peut accepter.)",
    },
    terms: {
      eyebrow: "Nos conditions, en clair",
      title: "Nos conditions, *en clair*",
      items: [
        { title: "Propriété", text: "les livrables vous appartiennent une fois intégralement payés : code source, fichiers de design et comptes vous sont remis." },
        { title: "Confidentialité", text: "nous signons des accords de confidentialité." },
        { title: "Assistance après la mise en ligne", text: "[période de garantie et conditions d’assistance]." },
        { title: "Demandes de modification", text: "traitées sur la base d’une estimation écrite." },
      ] satisfies Item[],
    },
    cta: { title: "Obtenez une estimation claire.", buttons: [{ label: "Planifier un appel", href: routes.contact.path }] } satisfies FinalCta,
  },
});

export const careers = localized({
  en: {
    seo: {
      title: "Careers | Join Supplies and Works",
      description: "Work on real products and international projects with a team in Douala. See open roles in software, cloud, design and infrastructure.",
    } satisfies Seo,
    hero: {
      title: "Build your career *with us.*",
      sub: "Real products, real clients, real growth, from Africa to the world.",
      image: "youngDevelopers",
    } satisfies PageHeroCopy,
    why: {
      eyebrow: "Why join us",
      title: "Why *join us*",
      items: [
        { title: "Real work.", text: "Production systems, paying customers and your own products." },
        { title: "Wide learning.", text: "Cloud, software, AI, design and infrastructure under one roof." },
        { title: "International exposure.", text: "Clients across time zones and cultures." },
        { title: "Ownership.", text: "Small team, real responsibility." },
        { title: "Growth.", text: "[Training, certifications, mentoring, learning budget.]" },
      ] satisfies Item[],
    },
    how: {
      eyebrow: "How we work",
      title: "How we *work*",
      tags: ["Remote-first and hybrid where useful", "Clear ownership", "Regular feedback", "Code review and shared learning", "Respect for people’s time"],
    },
    lookFor: {
      eyebrow: "What we look for",
      title: "What we *look for*",
      tags: ["Curiosity", "Care for quality", "Clear communication in English or French", "Willingness to learn", "Reliability"],
    },
    roles: {
      eyebrow: "Open roles",
      title: "Open *roles*",
      items: [{ title: "[Role title]", studio: "[Studio]", place: "[Remote / Douala]", type: "[Full-time / Internship]", apply: "Apply →" }],
      empty: "No open roles right now. Send us your profile and we will keep it.",
    },
    internships: {
      eyebrow: "Internships and trainees",
      title: "Internships and *trainees*",
      text: "We welcome motivated students and early-career talent. [Describe program.]",
    },
    process: {
      eyebrow: "Hiring process",
      title: "Hiring *process*",
      steps: ["Application", "Short conversation", "Practical exercise", "Team meeting", "Offer"],
    },
    apply: {
      eyebrow: "Spontaneous application",
      title: "Spontaneous *application*",
      fields: {
        name: "Name",
        email: "Email",
        role: "Role of interest",
        links: "Portfolio, GitHub or LinkedIn",
        cv: "CV upload",
        message: "Message",
        send: "Send",
      },
      success: "Thank you. We have your application.",
      error: "Something went wrong. Please try again or email us at contact@suppliesandworks.com.",
    },
  },
  fr: {
    seo: {
      title: "Carrières | Rejoignez Supplies and Works",
      description: "Travaillez sur de vrais produits et des projets internationaux avec une équipe basée à Douala. Découvrez nos postes ouverts en logiciel, cloud, design et infrastructure.",
    } satisfies Seo,
    hero: {
      title: "Construisez votre carrière *avec nous.*",
      sub: "De vrais produits, de vrais clients, une vraie progression, de l’Afrique au monde entier.",
      image: "youngDevelopers",
    } satisfies PageHeroCopy,
    why: {
      eyebrow: "Pourquoi nous rejoindre",
      title: "Pourquoi *nous rejoindre*",
      items: [
        { title: "Du vrai travail.", text: "Des systèmes en production, des clients payants et nos propres produits." },
        { title: "Un apprentissage complet.", text: "Cloud, logiciel, IA, design et infrastructure sous un même toit." },
        { title: "Une ouverture internationale.", text: "Des clients sur plusieurs fuseaux horaires et de cultures variées." },
        { title: "Des responsabilités.", text: "Une petite équipe, de vraies responsabilités." },
        { title: "De la progression.", text: "[Formations, certifications, mentorat, budget formation.]" },
      ] satisfies Item[],
    },
    how: {
      eyebrow: "Notre façon de travailler",
      title: "Notre façon de *travailler*",
      tags: ["Télétravail en priorité, hybride quand c’est utile", "Des responsabilités claires", "Des retours réguliers", "Revue de code et partage de connaissances", "Le respect du temps de chacun"],
    },
    lookFor: {
      eyebrow: "Ce que nous recherchons",
      title: "Ce que nous *recherchons*",
      tags: ["La curiosité", "Le souci de la qualité", "Une communication claire en anglais ou en français", "L’envie d’apprendre", "La fiabilité"],
    },
    roles: {
      eyebrow: "Postes ouverts",
      title: "Postes *ouverts*",
      items: [{ title: "[Intitulé du poste]", studio: "[Studio]", place: "[À distance / Douala]", type: "[Temps plein / Stage]", apply: "Postuler →" }],
      empty: "Aucun poste ouvert pour le moment. Envoyez-nous votre profil, nous le conserverons.",
    },
    internships: {
      eyebrow: "Stages et alternance",
      title: "Stages et *alternance*",
      text: "Nous accueillons des étudiants motivés et des talents en début de carrière. [Décrire le programme.]",
    },
    process: {
      eyebrow: "Processus de recrutement",
      title: "Processus de *recrutement*",
      steps: ["Candidature", "Court entretien", "Exercice pratique", "Rencontre avec l’équipe", "Offre"],
    },
    apply: {
      eyebrow: "Candidature spontanée",
      title: "Candidature *spontanée*",
      fields: {
        name: "Nom",
        email: "E-mail",
        role: "Poste souhaité",
        links: "Portfolio, GitHub ou LinkedIn",
        cv: "Téléverser votre CV",
        message: "Message",
        send: "Envoyer",
      },
      success: "Merci. Nous avons bien reçu votre candidature.",
      error: "Une erreur s’est produite. Veuillez réessayer ou nous écrire à contact@suppliesandworks.com.",
    },
  },
});
