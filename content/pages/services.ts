// Services hub, the six service pages and Africa & Local Services.
// Copy verbatim from 3-WEBSITE-COPY.md.
import type { Faq, FinalCta, Item, PageHeroCopy, Seo, Step, Table } from "@/content/types";
import { localized } from "@/lib/i18n";
import { routes } from "@/lib/routes";

const book = (title: string, text?: string, label = "Book a call", href: string = routes.contact.path): FinalCta => ({
  title,
  text,
  buttons: [{ label, href }],
});

export const servicesHub = localized({
  en: {
    seo: {
      title: "Services | Cloud, Software, AI, Design and Infrastructure | Supplies and Works",
      description:
        "Five studios, one team. Cloud engineering, backup, software development, web design, AI automation, creative design and on-site infrastructure.",
    } satisfies Seo,
    hero: {
      title: "Everything your technology needs. *One team.*",
      sub: "Five studios that work together, so you deal with one partner instead of five.",
      image: "networkCables",
    } satisfies PageHeroCopy,
    glance: {
      eyebrow: "Our offer at a glance",
      title: "Our offer *at a glance*",
      table: {
        head: ["Studio", "What it solves", "Typical work"],
        rows: [
          ["Cloud Studio", "Slow, fragile or exposed systems", "Cloud architecture, migration, backup, disaster recovery"],
          ["Product & Engineering", "Software that does not fit your work", "Web, mobile, desktop apps, SaaS, websites"],
          ["AI & Automation", "Time lost on repetitive work", "Process audit, automation, AI assistants"],
          ["Creative Studio", "A brand that does not stand out", "Identity, social content, motion, print"],
          ["Africa & Local Services", "Unreliable networks and equipment", "Networks, servers, cabling, on-site support"],
        ],
      } satisfies Table,
    },
    pillars: { eyebrow: "Build · Run · Protect", title: "*Build* · *Run* · *Protect*" },
    together: {
      eyebrow: "How the studios work together",
      title: "How the studios *work together*",
      items: [
        { title: "Example 1 – A restaurant group.", text: "The Product studio builds ordering software, the Cloud studio hosts it and backs it up, the Creative studio designs the brand and menu, and the Local team installs the network and tablets." },
        { title: "Example 2 – A growing retailer.", text: "Web design builds the online shop, AI automates stock and invoice processing, Cloud protects the data." },
        { title: "Example 3 – A school.", text: "Local services set up the network and server room, Cloud backs up student records, Product builds a parent portal." },
      ] satisfies Item[],
      note: "(Replace with real examples when you have them.)",
    },
    studios: { eyebrow: "The five studios", title: "The five *studios*" },
    start: {
      title: "Not sure where to start?",
      text: "Describe your problem in a few lines. We will tell you which studio to talk to and what a first step could look like.",
      buttons: [{ label: "Start the conversation →", href: routes.contact.path }],
    } satisfies FinalCta,
  },
  fr: {
    seo: {
      title: "Services | Cloud, logiciels, IA, design et infrastructure | Supplies and Works",
      description:
        "Cinq studios, une seule équipe. Ingénierie cloud, sauvegarde, développement logiciel, conception web, automatisation par l’IA, design créatif et infrastructure sur site.",
    } satisfies Seo,
    hero: {
      title: "Tout ce dont votre technologie a besoin. *Une seule équipe.*",
      sub: "Cinq studios qui travaillent ensemble : vous n’avez qu’un seul partenaire au lieu de cinq.",
      image: "networkCables",
    } satisfies PageHeroCopy,
    glance: {
      eyebrow: "Notre offre en un coup d’œil",
      title: "Notre offre *en un coup d’œil*",
      table: {
        head: ["Studio", "Ce qu’il résout", "Missions types"],
        rows: [
          ["Studio Cloud", "Systèmes lents, fragiles ou exposés", "Architecture cloud, migration, sauvegarde, reprise après sinistre"],
          ["Produit & Ingénierie", "Des logiciels inadaptés à votre façon de travailler", "Applications web, mobiles et desktop, SaaS, sites web"],
          ["IA & Automatisation", "Du temps perdu sur des tâches répétitives", "Audit des processus, automatisation, assistants IA"],
          ["Studio Créatif", "Une marque qui ne se démarque pas", "Identité, contenus pour les réseaux sociaux, motion design, print"],
          ["Afrique & Services locaux", "Réseaux et équipements peu fiables", "Réseaux, serveurs, câblage, assistance sur site"],
        ],
      } satisfies Table,
    },
    pillars: { eyebrow: "Construire · Exploiter · Protéger", title: "*Construire* · *Exploiter* · *Protéger*" },
    together: {
      eyebrow: "Comment les studios travaillent ensemble",
      title: "Comment les studios *travaillent ensemble*",
      items: [
        { title: "Exemple 1 – Un groupe de restaurants.", text: "Le studio Produit développe le logiciel de commande, le Studio Cloud l’héberge et le sauvegarde, le Studio Créatif conçoit la marque et les menus, et l’équipe locale installe le réseau et les tablettes." },
        { title: "Exemple 2 – Un commerce en pleine croissance.", text: "La conception web crée la boutique en ligne, l’IA automatise la gestion des stocks et le traitement des factures, le Cloud protège les données." },
        { title: "Exemple 3 – Une école.", text: "Les services locaux installent le réseau et la salle serveurs, le Cloud sauvegarde les dossiers des élèves, le studio Produit développe un portail pour les parents." },
      ] satisfies Item[],
      note: "(À remplacer par des exemples réels dès que vous en aurez.)",
    },
    studios: { eyebrow: "Les cinq studios", title: "Les cinq *studios*" },
    start: {
      title: "Vous ne savez pas par où commencer ?",
      text: "Décrivez votre problème en quelques lignes. Nous vous dirons à quel studio vous adresser et à quoi pourrait ressembler une première étape.",
      buttons: [{ label: "Lancer la conversation →", href: routes.contact.path }],
    } satisfies FinalCta,
  },
});

export const cloud = localized({
  en: {
    seo: {
      title: "Cloud Engineering Services | AWS Architecture and Migration | Supplies and Works",
      description:
        "Cloud architecture, migration and cloud-native development led by an AWS Certified Solutions Architect. Hybrid cloud and ongoing operations. Book a call.",
    } satisfies Seo,
    hero: {
      eyebrow: "Cloud Studio",
      title: "Cloud that works *as hard as your business.*",
      sub: "Architecture, migration and cloud-native development, led by an AWS Certified Solutions Architect.",
      buttons: [
        { label: "Plan your cloud project", href: routes.contact.path },
        { label: "See how we work", href: routes.howWeWork.path },
      ],
      image: "dataCenter",
    } satisfies PageHeroCopy,
    intro: {
      eyebrow: "Why the cloud, and why carefully",
      text: "The cloud can make a business faster, more resilient and more flexible. Done badly, it also makes bills unpredictable and systems fragile. We help you adopt the cloud on purpose: right-sized, secured, documented and affordable.",
    },
    what: {
      eyebrow: "What we do",
      title: "What we *do*",
      items: [
        { title: "Cloud architecture and design", text: "We design cloud environments that match your goals, your traffic and your budget. Network layout, identity and access, storage, databases, scaling and security are decided together, with diagrams you can understand." },
        { title: "Migration", text: "We move applications and data from servers, hosting providers or other clouds into the cloud, in stages and with rollback plans. We assess each workload first: keep, move, rebuild or retire." },
        { title: "Cloud-native development", text: "We build software that uses the cloud properly: automatic scaling, managed databases, queues, serverless functions, and automated deployment pipelines." },
        { title: "Hybrid cloud", text: "Some systems must stay on site. We connect them securely to the cloud for backup, remote access and extension, without forcing a full move." },
        { title: "Infrastructure as code and automation", text: "Environments described in code, so they are repeatable, reviewable and fast to rebuild. We use Terraform and AWS CloudFormation (CDK), with deployment pipelines in GitHub Actions." },
        { title: "Monitoring, support and optimization", text: "We watch performance, availability and cost, and we recommend improvements every month." },
      ] satisfies Item[],
    },
    focus: {
      eyebrow: "Our cloud focus",
      title: "Our cloud *focus*",
      text: "Our core is **AWS**, and our founder is an **AWS Certified Solutions Architect**. We also work with **Microsoft Azure** and **Google Cloud**. We choose the platform that fits your needs and tell you honestly where our depth is strongest.",
      platforms: ["AWS", "Microsoft Azure", "Google Cloud"],
    },
    projects: {
      eyebrow: "Typical projects",
      title: "Typical *projects*",
      items: [
        "Moving an application from a single server to a scalable cloud setup",
        "Building a new SaaS platform on AWS",
        "Connecting an office server to the cloud for backup and remote access",
        "Reducing a cloud bill by reviewing resources and architecture",
        "Setting up deployment pipelines so releases are safe and repeatable",
      ],
      note: "(Replace with real projects when you can.)",
    },
    receive: {
      eyebrow: "What you receive",
      title: "What you *receive*",
      tags: ["Architecture diagrams", "Environment setup", "Documentation", "Security configuration", "Monitoring dashboards", "Runbooks", "Handover session", "Optional support plan"],
    },
    security: {
      eyebrow: "Our approach to security",
      title: "Our approach to *security*",
      text: "We apply the principle of least privilege, encrypt data in transit and at rest, separate environments, keep audit logs, and review access regularly. Every environment we manage has multi-factor authentication on all accounts and AWS CloudTrail audit logging switched on from day one. We do not hold formal compliance certifications such as ISO 27001 or SOC 2.",
    },
    engagement: {
      eyebrow: "How an engagement works",
      title: "How an engagement *works*",
      steps: [
        { title: "Assess (1 to 2 weeks)", text: "inventory, risks, costs, goals." },
        { title: "Plan", text: "target architecture, migration order, budget and timeline." },
        { title: "Implement", text: "staged build or migration with testing." },
        { title: "Operate", text: "monitoring, updates, cost reviews, support." },
      ] satisfies Step[],
    },
    why: {
      eyebrow: "Why choose us for cloud",
      title: "Why choose us *for cloud*",
      items: [
        "A certified architect on your project, not only a salesperson.",
        "Real experience running our own SaaS products in production.",
        "A focus on data protection and resilience.",
        "Plain-language reporting on cost and risk.",
      ],
    },
    faq: [
      { q: "Do I need to move everything to the cloud?", a: "No. Many businesses do best with a hybrid setup. We recommend what fits." },
      { q: "How long does a migration take?", a: "It depends on size and complexity. Small projects take weeks; larger ones take months. We give a plan after the assessment." },
      { q: "Will my application stop working during migration?", a: "We plan staged moves and rollbacks to minimize downtime. [Describe approach.]" },
      { q: "How do you keep cloud costs under control?", a: "Right-sizing, budgets and alerts, regular reviews and clear tagging." },
      { q: "Do you work with Azure and Google Cloud?", a: "Yes. AWS is our deepest area." },
      { q: "Can you manage the cloud for us after launch?", a: "Yes, through a maintenance plan." },
    ] satisfies Faq[],
    cta: book("Let’s review your setup.", "A free 30-minute cloud conversation."),
  },
  fr: {
    seo: {
      title: "Services d’ingénierie cloud | Architecture et migration AWS | Supplies and Works",
      description:
        "Architecture cloud, migration et développement cloud-native, pilotés par un AWS Certified Solutions Architect. Cloud hybride et exploitation continue. Réservez un appel.",
    } satisfies Seo,
    hero: {
      eyebrow: "Studio Cloud",
      title: "Un cloud qui travaille *aussi dur que votre entreprise.*",
      sub: "Architecture, migration et développement cloud-native, pilotés par un AWS Certified Solutions Architect.",
      buttons: [
        { label: "Planifier votre projet cloud", href: routes.contact.path },
        { label: "Découvrir notre méthode", href: routes.howWeWork.path },
      ],
      image: "dataCenter",
    } satisfies PageHeroCopy,
    intro: {
      eyebrow: "Pourquoi le cloud, et pourquoi avec soin",
      text: "Le cloud peut rendre une entreprise plus rapide, plus résiliente et plus agile. Mal mis en œuvre, il rend aussi les factures imprévisibles et les systèmes fragiles. Nous vous aidons à adopter le cloud de manière réfléchie : bien dimensionné, sécurisé, documenté et abordable.",
    },
    what: {
      eyebrow: "Ce que nous faisons",
      title: "Ce que nous *faisons*",
      items: [
        { title: "Architecture et conception cloud", text: "Nous concevons des environnements cloud adaptés à vos objectifs, à votre trafic et à votre budget. Topologie réseau, gestion des identités et des accès, stockage, bases de données, mise à l’échelle et sécurité sont définis ensemble, avec des schémas que vous pouvez comprendre." },
        { title: "Migration", text: "Nous transférons vos applications et vos données depuis des serveurs, des hébergeurs ou d’autres clouds vers le cloud, par étapes et avec des plans de retour arrière. Nous évaluons d’abord chaque charge de travail : la conserver, la migrer, la reconstruire ou la retirer." },
        { title: "Développement cloud-native", text: "Nous développons des logiciels qui tirent pleinement parti du cloud : mise à l’échelle automatique, bases de données managées, files d’attente, fonctions serverless et pipelines de déploiement automatisés." },
        { title: "Cloud hybride", text: "Certains systèmes doivent rester sur site. Nous les connectons de façon sécurisée au cloud pour la sauvegarde, l’accès à distance et l’extension, sans imposer une migration complète." },
        { title: "Infrastructure as code et automatisation", text: "Des environnements décrits sous forme de code, donc reproductibles, vérifiables et rapides à reconstruire. Nous utilisons Terraform et AWS CloudFormation (CDK), avec des pipelines de déploiement sur GitHub Actions." },
        { title: "Supervision, support et optimisation", text: "Nous surveillons les performances, la disponibilité et les coûts, et nous vous recommandons des améliorations chaque mois." },
      ] satisfies Item[],
    },
    focus: {
      eyebrow: "Notre expertise cloud",
      title: "Notre expertise *cloud*",
      text: "Notre cœur de métier est **AWS**, et notre fondateur est **AWS Certified Solutions Architect**. Nous travaillons aussi avec **Microsoft Azure** et **Google Cloud**. Nous choisissons la plateforme adaptée à vos besoins et vous disons en toute transparence où notre expertise est la plus solide.",
      platforms: ["AWS", "Microsoft Azure", "Google Cloud"],
    },
    projects: {
      eyebrow: "Projets types",
      title: "Projets *types*",
      items: [
        "Faire passer une application d’un serveur unique à une infrastructure cloud évolutive",
        "Créer une nouvelle plateforme SaaS sur AWS",
        "Connecter un serveur de bureau au cloud pour la sauvegarde et l’accès à distance",
        "Réduire une facture cloud en revoyant les ressources et l’architecture",
        "Mettre en place des pipelines de déploiement pour des mises en production sûres et reproductibles",
      ],
      note: "(À remplacer par des projets réels dès que possible.)",
    },
    receive: {
      eyebrow: "Ce que vous recevez",
      title: "Ce que vous *recevez*",
      tags: ["Schémas d’architecture", "Mise en place des environnements", "Documentation", "Configuration de la sécurité", "Tableaux de bord de supervision", "Runbooks", "Session de passation", "Contrat de support en option"],
    },
    security: {
      eyebrow: "Notre approche de la sécurité",
      title: "Notre approche de la *sécurité*",
      text: "Nous appliquons le principe du moindre privilège, chiffrons les données en transit et au repos, séparons les environnements, conservons des journaux d’audit et révisons régulièrement les accès. Chaque environnement que nous gérons dispose de l’authentification multifacteur sur tous les comptes et de la journalisation d’audit AWS CloudTrail activée dès le premier jour. Nous ne détenons pas de certifications de conformité formelles telles que ISO 27001 ou SOC 2.",
    },
    engagement: {
      eyebrow: "Déroulement d’une mission",
      title: "Déroulement d’une *mission*",
      steps: [
        { title: "Évaluer (1 à 2 semaines)", text: "inventaire, risques, coûts, objectifs." },
        { title: "Planifier", text: "architecture cible, ordre de migration, budget et calendrier." },
        { title: "Mettre en œuvre", text: "construction ou migration par étapes, avec tests." },
        { title: "Exploiter", text: "supervision, mises à jour, revues des coûts, support." },
      ] satisfies Step[],
    },
    why: {
      eyebrow: "Pourquoi nous choisir pour le cloud",
      title: "Pourquoi nous choisir *pour le cloud*",
      items: [
        "Un architecte certifié sur votre projet, pas seulement un commercial.",
        "Une réelle expérience de l’exploitation de nos propres produits SaaS en production.",
        "Une attention particulière à la protection des données et à la résilience.",
        "Des rapports clairs, sans jargon, sur les coûts et les risques.",
      ],
    },
    faq: [
      { q: "Dois-je tout migrer vers le cloud ?", a: "Non. Pour beaucoup d’entreprises, une configuration hybride est la meilleure option. Nous recommandons ce qui vous convient." },
      { q: "Combien de temps dure une migration ?", a: "Cela dépend de la taille et de la complexité. Les petits projets prennent quelques semaines, les plus importants quelques mois. Nous vous remettons un plan après l’évaluation." },
      { q: "Mon application va-t-elle cesser de fonctionner pendant la migration ?", a: "Nous planifions des migrations par étapes et des retours arrière pour réduire au minimum les interruptions. [Décrire l’approche.]" },
      { q: "Comment maîtrisez-vous les coûts du cloud ?", a: "Dimensionnement adapté, budgets et alertes, revues régulières et étiquetage rigoureux des ressources." },
      { q: "Travaillez-vous avec Azure et Google Cloud ?", a: "Oui. AWS reste notre domaine d’expertise le plus approfondi." },
      { q: "Pouvez-vous gérer notre cloud après la mise en service ?", a: "Oui, dans le cadre d’un contrat de maintenance." },
    ] satisfies Faq[],
    cta: book("Faisons le point sur votre infrastructure.", "Un échange cloud gratuit de 30 minutes.", "Réserver un appel"),
  },
});

export const backup = localized({
  en: {
    seo: {
      title: "Automatic Cloud Backup and Disaster Recovery for On-Site Servers | Supplies and Works",
      description:
        "Automatic, encrypted and tested backups from your on-premise servers to the cloud, with a written recovery plan. Protect your business data.",
    } satisfies Seo,
    hero: {
      eyebrow: "Cloud Studio · Protect",
      title: "Your data, safe. *Even on your worst day.*",
      sub: "Automatic, encrypted and tested backups from your on-site systems to the cloud.",
      buttons: [
        { label: "Protect my data", href: routes.contact.path },
        { label: "Get a free backup review", href: routes.contact.path },
      ],
    } satisfies PageHeroCopy,
    risk: {
      eyebrow: "The risk is real",
      title: "The risk is *real*",
      items: [
        { title: "Hardware fails.", text: "Disks and servers wear out." },
        { title: "Accidents happen.", text: "A deleted folder, a spilled drink, a power surge." },
        { title: "Disasters strike.", text: "Fire, flood, theft." },
        { title: "Attacks are common.", text: "Ransomware locks files and demands payment." },
        { title: "Copies are rare.", text: "Many businesses rely on one drive, one server, one person’s memory." },
      ] satisfies Item[],
      conclusion: "If your only copy of critical data lives in one place, you are one incident away from days or weeks of downtime.",
    },
    setup: {
      eyebrow: "What we set up",
      title: "What we *set up*",
      items: [
        { title: "Automatic backup", text: "Your files, databases and systems are copied to secure cloud storage on a schedule you choose. No manual steps." },
        { title: "Encryption and access control", text: "Data is encrypted in transit and at rest. Only authorized people can access it." },
        { title: "Versioning and retention", text: "Keep several versions, so you can go back to yesterday, last week or last month, including before a ransomware attack." },
        { title: "Restore testing", text: "We run restore drills and report the results. A backup is only valuable if it restores." },
        { title: "Disaster recovery plan", text: "A written, practical plan: who does what, in what order, with which tools, to get back to work. [Optional: a standby environment in the cloud to restart critical systems.]" },
        { title: "Monitoring and alerts", text: "We monitor backup jobs every day and fix failures before they matter." },
        { title: "Reporting", text: "A monthly report on backup status, storage use and restore tests." },
      ] satisfies Item[],
    },
    numbers: {
      eyebrow: "Two numbers that matter",
      title: "Two numbers *that matter*",
      rpo: { name: "RPO (Recovery Point Objective)", text: "how much data you can afford to lose, for example one hour or one day." },
      rto: { name: "RTO (Recovery Time Objective)", text: "how long you can afford to be down, for example one hour or one day." },
      examples: ["one hour", "one day"],
      outro: "We set these with you first, then design the solution to meet them. A clinic and a small shop do not need the same targets.",
    },
    protect: {
      eyebrow: "What we protect",
      title: "What we *protect*",
      tags: ["File servers", "Databases", "Business applications", "Virtual machines", "Employee workstations", "Email and documents", "Configuration of network and security equipment"],
      note: "(Keep only what you can really deliver.)",
    },
    how: {
      eyebrow: "How it works",
      title: "How it *works*",
      steps: [
        { title: "Review", text: "we map your servers, data and risks." },
        { title: "Define", text: "you choose your RPO and RTO and what to protect." },
        { title: "Connect", text: "we link your on-site systems to the cloud securely." },
        { title: "Automate", text: "schedules, retention and alerts are configured." },
        { title: "Test", text: "first restore drills and a written recovery plan." },
        { title: "Monitor", text: "daily checks, monthly reports, yearly full test." },
      ] satisfies Step[],
    },
    options: {
      eyebrow: "On-site, cloud or both?",
      title: "On-site, cloud *or both?*",
      table: {
        head: ["Option", "Good for", "Limits"],
        rows: [
          ["Local copy only", "Fast restores", "Lost in a fire, flood or theft"],
          ["Cloud copy only", "Safe from site disasters", "Restores depend on internet speed"],
          ["**Local plus cloud (recommended)**", "Fast restores and disaster protection", "Needs setup and monitoring, which we handle"],
        ],
        highlightRow: 2,
      } satisfies Table,
    },
    who: {
      eyebrow: "Who it is for",
      title: "Who it is *for*",
      tags: ["Clinics and pharmacies", "Schools", "Accounting and law offices", "Retailers and distributors", "Restaurants and hotels", "NGOs", "Factories and workshops", "Any business with its own servers"],
    },
    plans: {
      eyebrow: "Plans and pricing",
      title: "Plans and *pricing*",
      lead: "Subscription-based, depending on storage, number of systems and recovery targets.",
      items: [
        { name: "Essential", text: "[Features, price]" },
        { name: "Business", text: "[Features, price]" },
        { name: "Critical", text: "[Features, price]" },
      ],
      note: "(Define real plans. Keep the structure if useful.)",
    },
    faq: [
      { q: "How often are backups made?", a: "As often as you need: hourly, daily or continuous, depending on your recovery target." },
      { q: "How do you handle slow or unstable internet?", a: "We use incremental backups and bandwidth scheduling so that only changes are sent, outside working hours. [Adjust to reality.]" },
      { q: "Where is my data stored?", a: "In secure cloud storage in a region we agree with you. [State provider and regions.]" },
      { q: "What if ransomware hits us?", a: "Versioned and protected backups let us restore clean copies from before the attack. We also advise on prevention." },
      { q: "Can we do a test restore?", a: "Yes. We test regularly and show you the results." },
      { q: "Do I need new hardware?", a: "Often not. We use what you have, and recommend equipment only where it brings a clear benefit." },
    ] satisfies Faq[],
    cta: book("Find out how exposed your data is.", "A free backup review.", "Book a review"),
  },
  fr: {
    seo: {
      title: "Sauvegarde cloud automatique et reprise après sinistre pour serveurs sur site | Supplies and Works",
      description:
        "Des sauvegardes automatiques, chiffrées et testées de vos serveurs sur site vers le cloud, avec un plan de reprise écrit. Protégez les données de votre entreprise.",
    } satisfies Seo,
    hero: {
      eyebrow: "Studio Cloud · Protéger",
      title: "Vos données en sécurité. *Même dans les pires moments.*",
      sub: "Des sauvegardes automatiques, chiffrées et testées de vos systèmes sur site vers le cloud.",
      buttons: [
        { label: "Protéger mes données", href: routes.contact.path },
        { label: "Obtenir un audit de sauvegarde gratuit", href: routes.contact.path },
      ],
    } satisfies PageHeroCopy,
    risk: {
      eyebrow: "Le risque est réel",
      title: "Le risque est *réel*",
      items: [
        { title: "Le matériel tombe en panne.", text: "Les disques et les serveurs s’usent." },
        { title: "Les accidents arrivent.", text: "Un dossier supprimé, une boisson renversée, une surtension." },
        { title: "Les catastrophes frappent.", text: "Incendie, inondation, vol." },
        { title: "Les attaques sont fréquentes.", text: "Les rançongiciels bloquent les fichiers et exigent un paiement." },
        { title: "Les copies sont rares.", text: "Beaucoup d’entreprises dépendent d’un seul disque, d’un seul serveur, de la mémoire d’une seule personne." },
      ] satisfies Item[],
      conclusion: "Si la seule copie de vos données critiques se trouve à un seul endroit, un seul incident suffit à vous immobiliser pendant des jours, voire des semaines.",
    },
    setup: {
      eyebrow: "Ce que nous mettons en place",
      title: "Ce que nous *mettons en place*",
      items: [
        { title: "Sauvegarde automatique", text: "Vos fichiers, bases de données et systèmes sont copiés vers un stockage cloud sécurisé, selon la fréquence de votre choix. Aucune intervention manuelle." },
        { title: "Chiffrement et contrôle d’accès", text: "Les données sont chiffrées en transit et au repos. Seules les personnes autorisées peuvent y accéder." },
        { title: "Versionnage et rétention", text: "Conservez plusieurs versions pour revenir à hier, à la semaine dernière ou au mois dernier, y compris avant une attaque par rançongiciel." },
        { title: "Tests de restauration", text: "Nous réalisons des exercices de restauration et vous en communiquons les résultats. Une sauvegarde n’a de valeur que si elle se restaure." },
        { title: "Plan de reprise après sinistre", text: "Un plan écrit et concret : qui fait quoi, dans quel ordre, avec quels outils, pour reprendre le travail. [En option : un environnement de secours dans le cloud pour redémarrer les systèmes critiques.]" },
        { title: "Supervision et alertes", text: "Nous surveillons les tâches de sauvegarde chaque jour et corrigeons les échecs avant qu’ils ne posent problème." },
        { title: "Reporting", text: "Un rapport mensuel sur l’état des sauvegardes, l’espace de stockage utilisé et les tests de restauration." },
      ] satisfies Item[],
    },
    numbers: {
      eyebrow: "Deux indicateurs essentiels",
      title: "Deux indicateurs *essentiels*",
      rpo: { name: "RPO (Recovery Point Objective)", text: "la quantité de données que vous pouvez vous permettre de perdre, par exemple une heure ou une journée." },
      rto: { name: "RTO (Recovery Time Objective)", text: "la durée d’interruption que vous pouvez vous permettre, par exemple une heure ou une journée." },
      examples: ["une heure", "une journée"],
      outro: "Nous les définissons d’abord avec vous, puis nous concevons la solution pour les atteindre. Une clinique et une petite boutique n’ont pas besoin des mêmes objectifs.",
    },
    protect: {
      eyebrow: "Ce que nous protégeons",
      title: "Ce que nous *protégeons*",
      tags: ["Serveurs de fichiers", "Bases de données", "Applications métier", "Machines virtuelles", "Postes de travail des collaborateurs", "E-mails et documents", "Configuration des équipements réseau et de sécurité"],
      note: "(Ne conserver que ce que vous pouvez réellement fournir.)",
    },
    how: {
      eyebrow: "Comment ça marche",
      title: "Comment ça *marche*",
      steps: [
        { title: "Analyser", text: "nous cartographions vos serveurs, vos données et vos risques." },
        { title: "Définir", text: "vous choisissez votre RPO, votre RTO et ce qu’il faut protéger." },
        { title: "Connecter", text: "nous relions vos systèmes sur site au cloud de façon sécurisée." },
        { title: "Automatiser", text: "les planifications, la rétention et les alertes sont configurées." },
        { title: "Tester", text: "premiers exercices de restauration et plan de reprise écrit." },
        { title: "Superviser", text: "contrôles quotidiens, rapports mensuels, test complet annuel." },
      ] satisfies Step[],
    },
    options: {
      eyebrow: "Sur site, dans le cloud ou les deux ?",
      title: "Sur site, dans le cloud *ou les deux ?*",
      table: {
        head: ["Option", "Idéal pour", "Limites"],
        rows: [
          ["Copie locale uniquement", "Restaurations rapides", "Perdue en cas d’incendie, d’inondation ou de vol"],
          ["Copie cloud uniquement", "À l’abri des sinistres sur site", "Restaurations dépendantes du débit internet"],
          ["**Local + cloud (recommandé)**", "Restaurations rapides et protection contre les sinistres", "Nécessite une mise en place et une supervision, que nous prenons en charge"],
        ],
        highlightRow: 2,
      } satisfies Table,
    },
    who: {
      eyebrow: "Pour qui",
      title: "Pour *qui*",
      tags: ["Cliniques et pharmacies", "Écoles", "Cabinets comptables et d’avocats", "Commerçants et distributeurs", "Restaurants et hôtels", "ONG", "Usines et ateliers", "Toute entreprise disposant de ses propres serveurs"],
    },
    plans: {
      eyebrow: "Formules et tarifs",
      title: "Formules et *tarifs*",
      lead: "Sur abonnement, selon le volume de stockage, le nombre de systèmes et les objectifs de reprise.",
      items: [
        { name: "Essentiel", text: "[Fonctionnalités, prix]" },
        { name: "Business", text: "[Fonctionnalités, prix]" },
        { name: "Critique", text: "[Fonctionnalités, prix]" },
      ],
      note: "(Définir les formules réelles. Conserver la structure si elle est utile.)",
    },
    faq: [
      { q: "À quelle fréquence les sauvegardes sont-elles effectuées ?", a: "Aussi souvent que nécessaire : toutes les heures, chaque jour ou en continu, selon votre objectif de reprise." },
      { q: "Comment gérez-vous une connexion internet lente ou instable ?", a: "Nous utilisons des sauvegardes incrémentielles et une planification de la bande passante, afin que seules les modifications soient envoyées, en dehors des heures de travail. [Adapter à la réalité.]" },
      { q: "Où mes données sont-elles stockées ?", a: "Dans un stockage cloud sécurisé, dans une région convenue avec vous. [Préciser le fournisseur et les régions.]" },
      { q: "Que se passe-t-il en cas d’attaque par rançongiciel ?", a: "Des sauvegardes versionnées et protégées nous permettent de restaurer des copies saines datant d’avant l’attaque. Nous vous conseillons aussi en matière de prévention." },
      { q: "Pouvons-nous faire un test de restauration ?", a: "Oui. Nous testons régulièrement et vous montrons les résultats." },
      { q: "Ai-je besoin de nouveau matériel ?", a: "Souvent, non. Nous utilisons ce que vous avez déjà et ne recommandons de nouveaux équipements que lorsqu’ils apportent un bénéfice clair." },
    ] satisfies Faq[],
    cta: book("Découvrez à quel point vos données sont exposées.", "Un audit de sauvegarde gratuit.", "Réserver un audit"),
  },
});

export const software = localized({
  en: {
    seo: {
      title: "Custom Software Development | Web, Mobile and Desktop Apps | Supplies and Works",
      description:
        "Custom web, mobile and desktop applications, APIs and SaaS products built by a team that runs its own software in production. Start your project.",
    } satisfies Seo,
    hero: {
      eyebrow: "Product & Engineering",
      title: "Software built around *how you really work.*",
      sub: "Web, mobile and desktop applications for businesses and individuals, designed, built and supported by one team.",
      buttons: [
        { label: "Tell us about your product", href: routes.contact.path },
        { label: "See our products", href: routes.products.path },
      ],
      image: "codeScreen",
    } satisfies PageHeroCopy,
    proof: {
      eyebrow: "Proof that we ship",
      text: "We do not only write code for clients. We design, launch and support our own SaaS products, Badibo and Kira, with paying customers. That experience shapes every project: we think about onboarding, support, updates, costs and security from day one.",
      cta: { label: "See our products →", href: routes.products.path },
    },
    build: {
      eyebrow: "What we build",
      title: "What we *build*",
      items: [
        { title: "Web applications", text: "Business platforms, customer portals, dashboards, booking systems, internal tools and marketplaces." },
        { title: "Mobile applications", text: "iOS and Android apps with a smooth, native feel. Offline behavior and notifications where they matter." },
        { title: "Desktop software", text: "Reliable tools for point of sale, back office, and demanding daily use." },
        { title: "APIs and integrations", text: "Connect your systems, payment providers and third-party services. Automate data flows between tools." },
        { title: "SaaS products", text: "From concept to a live, billable product: authentication, subscriptions, admin panels, analytics." },
        { title: "Modernization", text: "Take an old or fragile system, stabilize it, and move it to a modern, maintainable platform." },
      ] satisfies Item[],
    },
    good: {
      eyebrow: "What good software looks like to us",
      title: "What good software *looks like* to us",
      items: [
        "**Useful on day one**: we start with the smallest version that solves the real problem.",
        "**Easy to use**: staff learn it quickly and customers do not need training.",
        "**Fast and stable**: tested, monitored and ready for growth.",
        "**Secure**: authentication, permissions, data protection and safe deployment.",
        "**Maintainable**: clean code, documentation and tests, so any good team can continue the work.",
      ],
    },
    process: {
      eyebrow: "Our process",
      title: "Our *process*",
      steps: [
        { title: "Discovery (1 to 2 weeks)", text: "goals, users, constraints, success measures." },
        { title: "Design", text: "user flows, wireframes, interface design, technical plan." },
        { title: "Development", text: "short cycles with demos every week." },
        { title: "Quality assurance", text: "testing on devices and real data." },
        { title: "Launch", text: "deployment, monitoring, training, handover." },
        { title: "Support and evolution", text: "maintenance, improvements, new features." },
      ] satisfies Step[],
    },
    toolbox: {
      eyebrow: "Our toolbox",
      title: "Our *toolbox*",
      table: {
        head: ["Area", "Tools"],
        rows: [
          ["Front end", "React, Next.js, TypeScript"],
          ["Mobile", "[Flutter / React Native / native, as applicable]"],
          ["Back end", "Node.js, Python, [others]"],
          ["Data", "PostgreSQL, [others]"],
          ["Cloud and DevOps", "AWS, Docker, CI/CD, Terraform"],
          ["Design", "Figma"],
        ],
      } satisfies Table,
      note: "(Edit to match your real stack. Do not list tools the team cannot support.)",
    },
    team: {
      eyebrow: "How we work with your team",
      title: "How we work *with your team*",
      text: "Embedded in your process, or fully independent. Shared board, weekly demos, clear owners, access to the code from day one.",
    },
    cases: {
      eyebrow: "Typical use cases",
      title: "Typical *use cases*",
      items: [
        "A restaurant ordering and billing system",
        "A retail shop and stock manager",
        "A client portal for a services company",
        "A mobile app for field staff",
        "A booking and payments platform",
      ],
      note: "(Replace with real references.)",
    },
    faq: [
      { q: "How much does custom software cost?", a: "It depends on scope. After a short discovery we give a clear estimate. Many projects start with a smaller first version to control cost." },
      { q: "How long does it take?", a: "A first useful version often takes weeks, not years. We agree a timeline after discovery." },
      { q: "Who owns the code?", a: "You do, once the project is paid in full. We hand over the source code, design files and accounts, and only keep the right to reuse generic, non-confidential building blocks." },
      { q: "Can you work with our existing developers?", a: "Yes." },
      { q: "Do you provide maintenance?", a: "Yes. See our engagement models." },
      { q: "Can you take over a project another team started?", a: "Yes. We review the code first and tell you honestly what to keep and what to rebuild." },
    ] satisfies Faq[],
    cta: book("Have an idea, a problem or a messy system? Let’s talk."),
  },
  fr: {
    seo: {
      title: "Développement de logiciels sur mesure | Applications web, mobiles et desktop | Supplies and Works",
      description:
        "Applications web, mobiles et desktop sur mesure, API et produits SaaS, conçus par une équipe qui exploite ses propres logiciels en production. Lancez votre projet.",
    } satisfies Seo,
    hero: {
      eyebrow: "Produit & Ingénierie",
      title: "Des logiciels conçus autour de *votre façon réelle de travailler.*",
      sub: "Des applications web, mobiles et desktop pour les entreprises et les particuliers, conçues, développées et maintenues par une seule équipe.",
      buttons: [
        { label: "Parlez-nous de votre produit", href: routes.contact.path },
        { label: "Voir nos produits", href: routes.products.path },
      ],
      image: "codeScreen",
    } satisfies PageHeroCopy,
    proof: {
      eyebrow: "La preuve que nous livrons",
      text: "Nous ne nous contentons pas d’écrire du code pour nos clients. Nous concevons, lançons et maintenons nos propres produits SaaS, Badibo et Kira, utilisés par des clients payants. Cette expérience nourrit chaque projet : nous pensons à l’onboarding, au support, aux mises à jour, aux coûts et à la sécurité dès le premier jour.",
      cta: { label: "Voir nos produits →", href: routes.products.path },
    },
    build: {
      eyebrow: "Ce que nous développons",
      title: "Ce que nous *développons*",
      items: [
        { title: "Applications web", text: "Plateformes métier, portails clients, tableaux de bord, systèmes de réservation, outils internes et places de marché." },
        { title: "Applications mobiles", text: "Des applications iOS et Android fluides, au rendu natif. Fonctionnement hors ligne et notifications là où c’est utile." },
        { title: "Logiciels desktop", text: "Des outils fiables pour les points de vente, le back-office et un usage quotidien intensif." },
        { title: "API et intégrations", text: "Connectez vos systèmes, vos prestataires de paiement et vos services tiers. Automatisez les flux de données entre vos outils." },
        { title: "Produits SaaS", text: "Du concept à un produit en ligne et facturable : authentification, abonnements, interfaces d’administration, analytics." },
        { title: "Modernisation", text: "Reprendre un système ancien ou fragile, le stabiliser et le faire évoluer vers une plateforme moderne et maintenable." },
      ] satisfies Item[],
    },
    good: {
      eyebrow: "Notre vision d’un bon logiciel",
      title: "Notre vision d’un *bon logiciel*",
      items: [
        "**Utile dès le premier jour** : nous commençons par la plus petite version qui résout le vrai problème.",
        "**Simple à utiliser** : vos équipes le prennent en main rapidement et vos clients n’ont besoin d’aucune formation.",
        "**Rapide et stable** : testé, supervisé et prêt à accompagner votre croissance.",
        "**Sécurisé** : authentification, permissions, protection des données et déploiement sûr.",
        "**Maintenable** : code propre, documentation et tests, pour que toute bonne équipe puisse reprendre le travail.",
      ],
    },
    process: {
      eyebrow: "Notre démarche",
      title: "Notre *démarche*",
      steps: [
        { title: "Cadrage (1 à 2 semaines)", text: "objectifs, utilisateurs, contraintes, indicateurs de réussite." },
        { title: "Conception", text: "parcours utilisateurs, wireframes, design d’interface, plan technique." },
        { title: "Développement", text: "des cycles courts avec une démo chaque semaine." },
        { title: "Assurance qualité", text: "tests sur appareils et avec des données réelles." },
        { title: "Lancement", text: "déploiement, supervision, formation, passation." },
        { title: "Support et évolution", text: "maintenance, améliorations, nouvelles fonctionnalités." },
      ] satisfies Step[],
    },
    toolbox: {
      eyebrow: "Notre boîte à outils",
      title: "Notre *boîte à outils*",
      table: {
        head: ["Domaine", "Outils"],
        rows: [
          ["Front-end", "React, Next.js, TypeScript"],
          ["Mobile", "[Flutter / React Native / natif, selon le cas]"],
          ["Back-end", "Node.js, Python, [autres]"],
          ["Données", "PostgreSQL, [autres]"],
          ["Cloud et DevOps", "AWS, Docker, CI/CD, Terraform"],
          ["Design", "Figma"],
        ],
      } satisfies Table,
      note: "(À adapter à votre stack réelle. Ne pas lister d’outils que l’équipe ne peut pas maîtriser.)",
    },
    team: {
      eyebrow: "Comment nous travaillons avec votre équipe",
      title: "Comment nous travaillons *avec votre équipe*",
      text: "Intégrés à votre organisation ou en totale autonomie. Tableau de suivi partagé, démos hebdomadaires, responsables clairement identifiés, accès au code dès le premier jour.",
    },
    cases: {
      eyebrow: "Cas d’usage types",
      title: "Cas d’usage *types*",
      items: [
        "Un système de commande et de facturation pour un restaurant",
        "Une boutique et un gestionnaire de stock pour un commerce",
        "Un portail client pour une société de services",
        "Une application mobile pour les équipes terrain",
        "Une plateforme de réservation et de paiement",
      ],
      note: "(À remplacer par des références réelles.)",
    },
    faq: [
      { q: "Combien coûte un logiciel sur mesure ?", a: "Cela dépend du périmètre. Après un court cadrage, nous vous remettons une estimation claire. Beaucoup de projets démarrent par une première version plus réduite pour maîtriser les coûts." },
      { q: "Combien de temps cela prend-il ?", a: "Une première version utile prend souvent quelques semaines, pas des années. Nous convenons d’un calendrier après le cadrage." },
      { q: "À qui appartient le code ?", a: "À vous, une fois le projet intégralement payé. Nous vous remettons le code source, les fichiers de design et les comptes, et nous conservons uniquement le droit de réutiliser des briques génériques et non confidentielles." },
      { q: "Pouvez-vous travailler avec nos développeurs actuels ?", a: "Oui." },
      { q: "Assurez-vous la maintenance ?", a: "Oui. Consultez nos modèles de collaboration." },
      { q: "Pouvez-vous reprendre un projet commencé par une autre équipe ?", a: "Oui. Nous examinons d’abord le code et vous disons en toute honnêteté ce qu’il faut garder et ce qu’il faut reconstruire." },
    ] satisfies Faq[],
    cta: book("Une idée, un problème ou un système à remettre en ordre ? Parlons-en.", undefined, "Réserver un appel"),
  },
});

export const webDesign = localized({
  en: {
    seo: {
      title: "Web Design and Development | Fast, Modern Websites | Supplies and Works",
      description:
        "Websites designed and built to strengthen your online presence: corporate sites, online shops, landing pages, redesigns, with SEO foundations and an easy CMS.",
    } satisfies Seo,
    hero: {
      eyebrow: "Product & Engineering",
      title: "Websites that make your business look *as good as it is.*",
      sub: "Design and development focused on your goals, your audience and your online presence.",
      buttons: [
        { label: "Start your website", href: routes.contact.path },
        { label: "See recent sites", href: routes.work.path },
      ],
      image: "responsiveDevices",
    } satisfies PageHeroCopy,
    intro: {
      eyebrow: "Your website is your first meeting",
      text: "Most customers meet you online before they meet you in person. A slow, confusing or outdated site costs you trust, and trust costs you sales. We design sites that explain what you do in seconds, load fast on any phone, and make the next step obvious.",
    },
    deliver: {
      eyebrow: "What we deliver",
      title: "What we *deliver*",
      items: [
        { title: "Corporate websites", text: "A clear, credible presence for your company." },
        { title: "Online shops", text: "Catalogs, carts, payments, stock and orders." },
        { title: "Landing pages", text: "Focused pages for campaigns and launches." },
        { title: "Redesigns", text: "A new look, new structure and better performance for an existing site." },
        { title: "Web portals", text: "Client areas, member spaces, booking and forms." },
        { title: "Content management", text: "A CMS so your team can edit content without a developer." },
        { title: "Performance and SEO foundations", text: "Speed, clean structure, metadata and analytics." },
        { title: "Maintenance", text: "Updates, backups, security and improvements." },
      ] satisfies Item[],
    },
    expect: {
      eyebrow: "What you can expect",
      title: "What you can *expect*",
      items: [
        "**Mobile first.** Most visitors are on phones. We design for them first.",
        "**Speed.** Pages that load quickly, even on slow connections.",
        "**Clear messaging.** Words and layout that guide people to act.",
        "**Accessibility.** Readable, keyboard-friendly and inclusive by default.",
        "**Easy updates.** You can change text and images yourself.",
        "**Security.** Secure hosting, backups and updates.",
      ],
    },
    process: {
      eyebrow: "Our process",
      title: "Our *process*",
      steps: [
        { title: "Understand", text: "your audience, goals, competitors and content." },
        { title: "Structure", text: "sitemap, content plan and wireframes." },
        { title: "Design", text: "visual identity, layouts and interactions." },
        { title: "Build", text: "clean, fast, maintainable code." },
        { title: "Test", text: "devices, browsers, speed and accessibility." },
        { title: "Launch and grow", text: "go live, measure, improve." },
      ] satisfies Step[],
    },
    beforeAfter: {
      eyebrow: "Before and after",
      title: "Before and *after*",
      note: "(Interactive slider comparing an old and new site. Use real projects.)",
      before: "Before",
      after: "After",
    },
    extras: {
      eyebrow: "Optional extras",
      title: "Optional *extras*",
      tags: ["Brand identity and visuals from our Creative Studio", "Copywriting support", "Hosting and backups from our Cloud Studio", "Online payments and booking", "Multi-language sites in English and French"],
    },
    pricing: {
      eyebrow: "Pricing guidance",
      title: "Pricing *guidance*",
      text: "Websites range from simple one-page sites to complex platforms. We give a fixed quote after a short discovery call. [Add “starting from” prices if you wish.]",
    },
    faq: [
      { q: "How long does a website take?", a: "A small site can take two to four weeks. Larger projects take longer. We confirm after discovery." },
      { q: "Can I edit the site myself?", a: "Yes, with a simple CMS and a short training session." },
      { q: "Do you write the content?", a: "We can help structure and write it, or work with your texts." },
      { q: "Will my site be found on Google?", a: "We build strong foundations: structure, speed, metadata. Ranking also depends on content and time." },
      { q: "Do you host the site?", a: "We can, with backups and monitoring, or deploy to your provider." },
      { q: "Can the site be in English and French?", a: "Yes." },
    ] satisfies Faq[],
    cta: book("Let’s make your website work for you."),
  },
  fr: {
    seo: {
      title: "Conception et développement web | Des sites rapides et modernes | Supplies and Works",
      description:
        "Des sites web conçus et développés pour renforcer votre présence en ligne : sites vitrines, boutiques en ligne, landing pages, refontes, avec des bases SEO solides et un CMS simple.",
    } satisfies Seo,
    hero: {
      eyebrow: "Produit & Ingénierie",
      title: "Des sites web qui donnent de votre entreprise une image *à la hauteur de ce qu’elle est.*",
      sub: "Un design et un développement centrés sur vos objectifs, votre audience et votre présence en ligne.",
      buttons: [
        { label: "Lancer votre site web", href: routes.contact.path },
        { label: "Voir nos sites récents", href: routes.work.path },
      ],
      image: "responsiveDevices",
    } satisfies PageHeroCopy,
    intro: {
      eyebrow: "Votre site web est votre premier rendez-vous",
      text: "La plupart de vos clients vous découvrent en ligne avant de vous rencontrer. Un site lent, confus ou daté vous coûte leur confiance, et la confiance perdue vous coûte des ventes. Nous concevons des sites qui expliquent ce que vous faites en quelques secondes, se chargent rapidement sur n’importe quel téléphone et rendent l’étape suivante évidente.",
    },
    deliver: {
      eyebrow: "Ce que nous livrons",
      title: "Ce que nous *livrons*",
      items: [
        { title: "Sites vitrines", text: "Une présence claire et crédible pour votre entreprise." },
        { title: "Boutiques en ligne", text: "Catalogues, paniers, paiements, stocks et commandes." },
        { title: "Landing pages", text: "Des pages ciblées pour vos campagnes et vos lancements." },
        { title: "Refontes", text: "Un nouveau look, une nouvelle structure et de meilleures performances pour un site existant." },
        { title: "Portails web", text: "Espaces clients, espaces membres, réservations et formulaires." },
        { title: "Gestion de contenu", text: "Un CMS pour que votre équipe modifie les contenus sans développeur." },
        { title: "Performance et bases SEO", text: "Rapidité, structure propre, métadonnées et analytics." },
        { title: "Maintenance", text: "Mises à jour, sauvegardes, sécurité et améliorations." },
      ] satisfies Item[],
    },
    expect: {
      eyebrow: "Ce à quoi vous pouvez vous attendre",
      title: "Ce à quoi vous pouvez *vous attendre*",
      items: [
        "**Mobile first.** La plupart des visiteurs sont sur téléphone. Nous concevons d’abord pour eux.",
        "**Rapidité.** Des pages qui se chargent vite, même avec une connexion lente.",
        "**Des messages clairs.** Des mots et une mise en page qui incitent à passer à l’action.",
        "**Accessibilité.** Lisible, navigable au clavier et inclusif par défaut.",
        "**Mises à jour faciles.** Vous pouvez modifier vous-même les textes et les images.",
        "**Sécurité.** Hébergement sécurisé, sauvegardes et mises à jour.",
      ],
    },
    process: {
      eyebrow: "Notre démarche",
      title: "Notre *démarche*",
      steps: [
        { title: "Comprendre", text: "votre audience, vos objectifs, vos concurrents et vos contenus." },
        { title: "Structurer", text: "arborescence, plan de contenu et wireframes." },
        { title: "Concevoir", text: "identité visuelle, mises en page et interactions." },
        { title: "Développer", text: "un code propre, rapide et maintenable." },
        { title: "Tester", text: "appareils, navigateurs, rapidité et accessibilité." },
        { title: "Lancer et faire grandir", text: "mise en ligne, mesure, amélioration." },
      ] satisfies Step[],
    },
    beforeAfter: {
      eyebrow: "Avant et après",
      title: "Avant et *après*",
      note: "(Curseur interactif comparant l’ancien et le nouveau site. Utiliser des projets réels.)",
      before: "Avant",
      after: "Après",
    },
    extras: {
      eyebrow: "Options supplémentaires",
      title: "Options *supplémentaires*",
      tags: ["Identité de marque et visuels par notre Studio Créatif", "Aide à la rédaction", "Hébergement et sauvegardes par notre Studio Cloud", "Paiement et réservation en ligne", "Sites multilingues en anglais et en français"],
    },
    pricing: {
      eyebrow: "Repères tarifaires",
      title: "Repères *tarifaires*",
      text: "Nos sites vont du simple site d’une page aux plateformes complexes. Nous établissons un devis forfaitaire après un court appel de cadrage. [Ajouter des prix « à partir de » si vous le souhaitez.]",
    },
    faq: [
      { q: "Combien de temps faut-il pour créer un site web ?", a: "Un petit site peut prendre de deux à quatre semaines. Les projets plus importants prennent plus de temps. Nous le confirmons après le cadrage." },
      { q: "Puis-je modifier le site moi-même ?", a: "Oui, grâce à un CMS simple et à une courte formation." },
      { q: "Rédigez-vous les contenus ?", a: "Nous pouvons vous aider à les structurer et à les rédiger, ou travailler à partir de vos textes." },
      { q: "Mon site sera-t-il visible sur Google ?", a: "Nous posons des bases solides : structure, rapidité, métadonnées. Le positionnement dépend aussi des contenus et du temps." },
      { q: "Hébergez-vous le site ?", a: "Oui, avec sauvegardes et supervision, ou nous le déployons chez votre hébergeur." },
      { q: "Le site peut-il être en anglais et en français ?", a: "Oui." },
    ] satisfies Faq[],
    cta: book("Faisons travailler votre site web pour vous.", undefined, "Réserver un appel"),
  },
});

export const ai = localized({
  en: {
    seo: {
      title: "AI and Automation Consulting | Process Audit to Implementation | Supplies and Works",
      description:
        "We audit your business processes, identify what can be automated with AI, and implement chatbots, workflows and assistants that save your team time.",
    } satisfies Seo,
    hero: {
      eyebrow: "AI & Automation Studio",
      title: "Let AI take the *repetitive work* off your team.",
      sub: "We find what can be automated in your business, build a clear plan, and make it work.",
      buttons: [
        { label: "Book an AI audit", href: routes.contact.path },
        { label: "See how it works", href: "#journey" },
      ],
      image: "robotArm",
    } satisfies PageHeroCopy,
    intro: {
      eyebrow: "AI that starts with your business, not with the hype",
      text: "Many companies know they should “do something with AI”, but not where. Others try a tool and abandon it. We start differently. We study how your teams really work, find the repetitive, error-prone and slow tasks, and decide with you where AI and automation will bring a measurable return.",
    },
    journey: {
      eyebrow: "Our offer in four steps",
      title: "Our offer in *four steps*",
      receiveLabel: "You receive",
      steps: [
        { title: "Audit", text: "We interview your teams, map key processes and measure where time goes. We identify what can be digitized, what can be automated, and what should stay human.", receive: "process maps, an opportunity list, an estimate of time saved." },
        { title: "Roadmap", text: "We rank opportunities by impact, effort and risk, and propose a phased plan with costs and timelines.", receive: "a prioritized roadmap, a business case, recommended tools." },
        { title: "Implementation", text: "We build and integrate the solutions: workflows, assistants, document processing, reports. We connect them to your current tools and train your team.", receive: "working automations, documentation, training." },
        { title: "Support", text: "We monitor results, fix issues and improve as your business changes.", receive: "monitoring, maintenance, quarterly improvement reviews." },
      ],
    },
    where: {
      eyebrow: "Where AI and automation help",
      title: "Where AI and automation *help*",
      table: {
        head: ["Area", "Examples"],
        rows: [
          ["Customer service", "Draft replies, answer common questions, route requests"],
          ["Documents", "Extract data from invoices, contracts and forms"],
          ["Sales and marketing", "Qualify leads, personalize follow-ups, create content drafts"],
          ["Finance and admin", "Reconcile entries, generate reports, send reminders"],
          ["Operations", "Track stock, schedule tasks, trigger alerts"],
          ["Knowledge", "An internal assistant that answers questions from your own documents"],
          ["Data", "Dashboards and automatic reporting"],
        ],
      } satisfies Table,
    },
    build: {
      eyebrow: "What we build",
      title: "What we *build*",
      tags: ["Workflow automation across your tools", "Chat and voice assistants", "Document processing", "Internal knowledge assistants", "Data dashboards", "Custom integrations and APIs", "AI features inside your own software"],
      note: "(Keep only what the team can deliver today. Add real examples as projects are completed.)",
    },
    principles: {
      eyebrow: "Principles we follow",
      title: "Principles *we follow*",
      items: [
        { title: "Human first.", text: "We automate tasks, not people. Teams stay in control and review what matters." },
        { title: "Start small.", text: "One clear process, a measurable result, then expand." },
        { title: "Measure.", text: "Every project has a before and an after." },
        { title: "Protect your data.", text: "We define what data an AI tool can see, where it is processed and who has access." },
        { title: "Stay honest.", text: "We say when AI is not the right answer." },
      ] satisfies Item[],
    },
    audit: {
      eyebrow: "What an audit looks like",
      title: "What an audit *looks like*",
      items: [
        { title: "Duration", text: "[e.g. 1 to 3 weeks]" },
        { title: "Format", text: "interviews, process review, data review, report and a presentation" },
        { title: "Output", text: "a clear roadmap you can use with us or with anyone" },
        { title: "Price", text: "[fixed price or range]" },
      ] satisfies Item[],
      note: "(Define your real format.)",
    },
    who: {
      eyebrow: "Who it is for",
      title: "Who it is *for*",
      tags: ["SMEs with growing admin workload", "Companies with many manual processes", "Teams drowning in documents and messages", "Founders who want to scale without hiring for every task"],
    },
    faq: [
      { q: "Do I need a lot of data?", a: "Not always. Many automations work with the data you already have." },
      { q: "Will AI replace my staff?", a: "Our focus is on removing repetitive work so people can do higher-value work." },
      { q: "Is my data safe?", a: "We design access and data handling with you and explain the options clearly." },
      { q: "What results can I expect?", a: "We estimate time and cost saved in the audit. Results depend on your processes." },
      { q: "Can you work with our existing tools?", a: "Yes, we integrate with common business tools." },
    ] satisfies Faq[],
    cta: book("Find your first three automations.", "Book an AI audit.", "Book now"),
  },
  fr: {
    seo: {
      title: "Conseil en IA et automatisation | De l’audit des processus à la mise en œuvre | Supplies and Works",
      description:
        "Nous auditons vos processus métier, identifions ce qui peut être automatisé grâce à l’IA, et mettons en place chatbots, workflows et assistants qui font gagner du temps à vos équipes.",
    } satisfies Seo,
    hero: {
      eyebrow: "Studio IA & Automatisation",
      title: "Laissez l’IA décharger votre équipe des *tâches répétitives.*",
      sub: "Nous identifions ce qui peut être automatisé dans votre entreprise, établissons un plan clair et le concrétisons.",
      buttons: [
        { label: "Réserver un audit IA", href: routes.contact.path },
        { label: "Voir comment ça marche", href: "#journey" },
      ],
      image: "robotArm",
    } satisfies PageHeroCopy,
    intro: {
      eyebrow: "Une IA qui part de votre activité, pas de l’effet de mode",
      text: "Beaucoup d’entreprises savent qu’elles devraient « faire quelque chose avec l’IA », sans savoir par où commencer. D’autres essaient un outil, puis l’abandonnent. Notre approche est différente. Nous étudions la façon dont vos équipes travaillent réellement, repérons les tâches répétitives, lentes ou sources d’erreurs, et décidons avec vous où l’IA et l’automatisation apporteront un retour mesurable.",
    },
    journey: {
      eyebrow: "Notre offre en quatre étapes",
      title: "Notre offre en *quatre étapes*",
      receiveLabel: "Vous recevez",
      steps: [
        { title: "Audit", text: "Nous échangeons avec vos équipes, cartographions les processus clés et mesurons où passe le temps. Nous identifions ce qui peut être numérisé, ce qui peut être automatisé et ce qui doit rester humain.", receive: "des cartographies de processus, une liste d’opportunités, une estimation du temps gagné." },
        { title: "Feuille de route", text: "Nous classons les opportunités selon leur impact, l’effort requis et le risque, et proposons un plan par phases avec coûts et calendrier.", receive: "une feuille de route priorisée, une analyse de rentabilité, des outils recommandés." },
        { title: "Mise en œuvre", text: "Nous développons et intégrons les solutions : workflows, assistants, traitement de documents, rapports. Nous les connectons à vos outils actuels et formons votre équipe.", receive: "des automatisations opérationnelles, de la documentation, une formation." },
        { title: "Accompagnement", text: "Nous suivons les résultats, corrigeons les problèmes et faisons évoluer les solutions au rythme de votre entreprise.", receive: "supervision, maintenance, revues d’amélioration trimestrielles." },
      ],
    },
    where: {
      eyebrow: "Là où l’IA et l’automatisation font la différence",
      title: "Là où l’IA et l’automatisation *font la différence*",
      table: {
        head: ["Domaine", "Exemples"],
        rows: [
          ["Service client", "Rédiger des brouillons de réponses, répondre aux questions fréquentes, orienter les demandes"],
          ["Documents", "Extraire les données des factures, contrats et formulaires"],
          ["Ventes et marketing", "Qualifier les prospects, personnaliser les relances, produire des premières versions de contenus"],
          ["Finance et administration", "Rapprocher les écritures, générer des rapports, envoyer des relances"],
          ["Opérations", "Suivre les stocks, planifier les tâches, déclencher des alertes"],
          ["Connaissances", "Un assistant interne qui répond aux questions à partir de vos propres documents"],
          ["Données", "Tableaux de bord et reporting automatique"],
        ],
      } satisfies Table,
    },
    build: {
      eyebrow: "Ce que nous développons",
      title: "Ce que nous *développons*",
      tags: ["Automatisation des workflows entre vos outils", "Assistants conversationnels et vocaux", "Traitement de documents", "Assistants de connaissances internes", "Tableaux de bord de données", "Intégrations et API sur mesure", "Fonctionnalités d’IA au sein de vos propres logiciels"],
      note: "(Ne conserver que ce que l’équipe peut livrer aujourd’hui. Ajouter des exemples réels au fil des projets.)",
    },
    principles: {
      eyebrow: "Nos principes",
      title: "Nos *principes*",
      items: [
        { title: "L’humain d’abord.", text: "Nous automatisons des tâches, pas des personnes. Les équipes gardent la main et valident ce qui compte." },
        { title: "Commencer petit.", text: "Un processus clair, un résultat mesurable, puis on étend." },
        { title: "Mesurer.", text: "Chaque projet a un avant et un après." },
        { title: "Protéger vos données.", text: "Nous définissons les données auxquelles un outil d’IA peut accéder, où elles sont traitées et qui y a accès." },
        { title: "Rester honnêtes.", text: "Nous vous disons quand l’IA n’est pas la bonne réponse." },
      ] satisfies Item[],
    },
    audit: {
      eyebrow: "Comment se déroule un audit",
      title: "Comment se déroule *un audit*",
      items: [
        { title: "Durée", text: "[p. ex. 1 à 3 semaines]" },
        { title: "Format", text: "entretiens, revue des processus, revue des données, rapport et présentation" },
        { title: "Livrable", text: "une feuille de route claire, utilisable avec nous ou avec n’importe quel prestataire" },
        { title: "Prix", text: "[prix forfaitaire ou fourchette]" },
      ] satisfies Item[],
      note: "(Définir votre format réel.)",
    },
    who: {
      eyebrow: "Pour qui",
      title: "Pour *qui*",
      tags: ["PME dont la charge administrative augmente", "Entreprises aux nombreux processus manuels", "Équipes submergées de documents et de messages", "Fondateurs qui veulent se développer sans recruter pour chaque tâche"],
    },
    faq: [
      { q: "Ai-je besoin de beaucoup de données ?", a: "Pas toujours. Beaucoup d’automatisations fonctionnent avec les données dont vous disposez déjà." },
      { q: "L’IA va-t-elle remplacer mes collaborateurs ?", a: "Notre objectif est de supprimer le travail répétitif pour que vos équipes se consacrent à des tâches à plus forte valeur." },
      { q: "Mes données sont-elles en sécurité ?", a: "Nous définissons avec vous les accès et le traitement des données, et vous expliquons clairement les options." },
      { q: "Quels résultats puis-je attendre ?", a: "Nous estimons le temps et les coûts économisés lors de l’audit. Les résultats dépendent de vos processus." },
      { q: "Pouvez-vous travailler avec nos outils actuels ?", a: "Oui, nous nous intégrons aux outils métier courants." },
    ] satisfies Faq[],
    cta: book("Identifiez vos trois premières automatisations.", "Réservez un audit IA.", "Réserver maintenant"),
  },
});

export const creative = localized({
  en: {
    seo: {
      title: "Creative Studio | Brand Identity, Social Media and Motion Design | Supplies and Works",
      description:
        "Brand identities, social media content, advertising spots and print design by a creative team that also understands software and the web.",
    } satisfies Seo,
    hero: {
      eyebrow: "Creative Studio",
      title: "Design that gets *noticed and remembered.*",
      sub: "Brand identities, social content, advertising spots and more, created by designers who understand technology.",
      buttons: [
        { label: "Brief the studio", href: routes.contact.path },
        { label: "See our work", href: "#portfolio" },
      ],
      image: "creativeDesk",
    } satisfies PageHeroCopy,
    intro: {
      eyebrow: "Why design is part of technology",
      text: "Software, websites and products succeed when they look trustworthy and feel clear. Because we design and build, our brand work fits naturally into apps, sites and campaigns. No gap between the logo and the product.",
    },
    create: {
      eyebrow: "What we create",
      title: "What we *create*",
      items: [
        { title: "Brand identity", text: "Logo, color palette, typography, tone of voice and brand guidelines. A system you can use everywhere." },
        { title: "Social media content", text: "Post templates, campaigns, carousels, stories and monthly content packages." },
        { title: "Advertising spots and motion", text: "Short video ads, animated logos, explainers and motion graphics for social and web." },
        { title: "Print and digital materials", text: "Flyers, brochures, catalogs, business cards, menus, presentations and reports." },
        { title: "Packaging and labels", text: "Design for products and packaging [if offered]." },
        { title: "Interface and product visuals", text: "Icons, illustrations and visual systems for apps and websites." },
      ] satisfies Item[],
    },
    how: {
      eyebrow: "How we work",
      title: "How we *work*",
      steps: [
        { title: "Brief", text: "goals, audience, competitors, inspiration." },
        { title: "Concepts", text: "two or three creative directions." },
        { title: "Refine", text: "feedback rounds until it feels right." },
        { title: "Deliver", text: "final files in all useful formats." },
        { title: "Brand kit", text: "a guide so your team stays consistent." },
      ] satisfies Step[],
    },
    packages: {
      eyebrow: "Packages",
      title: "Packages *(examples to define)*",
      items: [
        { name: "Starter identity", text: "[Contents, price]" },
        { name: "Complete brand", text: "[Contents, price]" },
        { name: "Monthly social package", text: "[Contents, price]" },
        { name: "Motion pack", text: "[Contents, price]" },
      ],
    },
    principles: {
      eyebrow: "Our creative principles",
      title: "Our creative *principles*",
      items: [
        "**Clarity first.** If people cannot understand it in seconds, it is not finished.",
        "**Authentic.** We reflect your real business, not stock clichés.",
        "**Consistent.** One look across your logo, site, app and social.",
        "**Practical.** Files and templates your team can really use.",
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "*Portfolio*",
      note: "(Masonry gallery with lightbox and short project captions. Use real work.)",
      caption: "[Project caption]",
      motion: "[Motion reel: add a video file]",
    },
    faq: [
      { q: "How many revisions are included?", a: "[e.g. 2 to 3 rounds per stage.]" },
      { q: "What files will I receive?", a: "Vector logos, PNG, PDF and source files, plus a brand guide." },
      { q: "Can you design for both English and French audiences?", a: "Yes." },
      { q: "Can you manage our social media?", a: "[Yes/No/Content only.]" },
      { q: "How long does a brand project take?", a: "Typically [X to Y weeks]." },
    ] satisfies Faq[],
    cta: book("Tell us about your brand.", undefined, "Brief the studio"),
  },
  fr: {
    seo: {
      title: "Studio Créatif | Identité de marque, réseaux sociaux et motion design | Supplies and Works",
      description:
        "Identités de marque, contenus pour les réseaux sociaux, spots publicitaires et design print, par une équipe créative qui maîtrise aussi le logiciel et le web.",
    } satisfies Seo,
    hero: {
      eyebrow: "Studio Créatif",
      title: "Un design qui se *remarque et marque les esprits.*",
      sub: "Identités de marque, contenus pour les réseaux sociaux, spots publicitaires et plus encore, créés par des designers qui comprennent la technologie.",
      buttons: [
        { label: "Briefer le studio", href: routes.contact.path },
        { label: "Voir nos réalisations", href: "#portfolio" },
      ],
      image: "creativeDesk",
    } satisfies PageHeroCopy,
    intro: {
      eyebrow: "Pourquoi le design fait partie de la technologie",
      text: "Logiciels, sites web et produits réussissent lorsqu’ils inspirent confiance et paraissent clairs. Parce que nous concevons et développons, notre travail de marque s’intègre naturellement aux applications, aux sites et aux campagnes. Aucun décalage entre le logo et le produit.",
    },
    create: {
      eyebrow: "Ce que nous créons",
      title: "Ce que nous *créons*",
      items: [
        { title: "Identité de marque", text: "Logo, palette de couleurs, typographie, ton de voix et charte graphique. Un système utilisable partout." },
        { title: "Contenus pour les réseaux sociaux", text: "Modèles de publications, campagnes, carrousels, stories et forfaits de contenus mensuels." },
        { title: "Spots publicitaires et motion design", text: "Courtes vidéos publicitaires, logos animés, vidéos explicatives et motion graphics pour les réseaux sociaux et le web." },
        { title: "Supports imprimés et numériques", text: "Flyers, brochures, catalogues, cartes de visite, menus, présentations et rapports." },
        { title: "Packaging et étiquettes", text: "Design de produits et d’emballages [si proposé]." },
        { title: "Visuels d’interface et de produit", text: "Icônes, illustrations et systèmes visuels pour applications et sites web." },
      ] satisfies Item[],
    },
    how: {
      eyebrow: "Notre façon de travailler",
      title: "Notre façon de *travailler*",
      steps: [
        { title: "Brief", text: "objectifs, audience, concurrents, inspirations." },
        { title: "Concepts", text: "deux ou trois pistes créatives." },
        { title: "Affinage", text: "des allers-retours jusqu’à ce que le résultat soit juste." },
        { title: "Livraison", text: "fichiers finaux dans tous les formats utiles." },
        { title: "Kit de marque", text: "un guide pour que votre équipe reste cohérente." },
      ] satisfies Step[],
    },
    packages: {
      eyebrow: "Forfaits",
      title: "Forfaits *(exemples à définir)*",
      items: [
        { name: "Identité de départ", text: "[Contenu, prix]" },
        { name: "Marque complète", text: "[Contenu, prix]" },
        { name: "Forfait réseaux sociaux mensuel", text: "[Contenu, prix]" },
        { name: "Pack motion", text: "[Contenu, prix]" },
      ],
    },
    principles: {
      eyebrow: "Nos principes créatifs",
      title: "Nos principes *créatifs*",
      items: [
        "**La clarté avant tout.** Si on ne le comprend pas en quelques secondes, ce n’est pas terminé.",
        "**Authentique.** Nous reflétons votre véritable activité, pas des clichés de banques d’images.",
        "**Cohérent.** Une seule identité visuelle pour votre logo, votre site, votre application et vos réseaux sociaux.",
        "**Pratique.** Des fichiers et des modèles que votre équipe peut réellement utiliser.",
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "*Portfolio*",
      note: "(Galerie en mosaïque avec visionneuse et courtes légendes de projets. Utiliser des réalisations réelles.)",
      caption: "[Légende du projet]",
      motion: "[Showreel motion : ajouter un fichier vidéo]",
    },
    faq: [
      { q: "Combien de séries de modifications sont incluses ?", a: "[p. ex. 2 à 3 séries par étape.]" },
      { q: "Quels fichiers vais-je recevoir ?", a: "Logos vectoriels, PNG, PDF et fichiers sources, ainsi qu’une charte de marque." },
      { q: "Pouvez-vous concevoir pour des publics anglophones et francophones ?", a: "Oui." },
      { q: "Pouvez-vous gérer nos réseaux sociaux ?", a: "[Oui/Non/Contenus uniquement.]" },
      { q: "Combien de temps dure un projet de marque ?", a: "En général [X à Y semaines]." },
    ] satisfies Faq[],
    cta: book("Parlez-nous de votre marque.", undefined, "Briefer le studio"),
  },
});

export const local = localized({
  en: {
    seo: {
      title: "IT Infrastructure and Network Services in Cameroon and Central Africa | Supplies and Works",
      description:
        "Complete network, server and office infrastructure for businesses in Cameroon and Central Africa: design, supply, installation, maintenance and support.",
    } satisfies Seo,
    hero: {
      eyebrow: "Africa & Local Services",
      title: "Complete IT infrastructure for businesses in *Cameroon and Central Africa.*",
      sub: "Networks, servers and on-site systems, designed, supplied, installed and maintained by our own engineers.",
      buttons: [
        { label: "Request a site visit", href: routes.contact.path },
        { label: "Talk to an engineer", href: routes.contact.path },
      ],
      image: "networkEngineer",
    } satisfies PageHeroCopy,
    intro: {
      eyebrow: "More than equipment",
      text: "Anyone can sell a router or a computer. What businesses need is an environment that works every day: a stable network, reliable servers, tidy cabling, protected data, and someone who answers when something breaks. We build the whole thing, and we stay to look after it.",
    },
    what: {
      eyebrow: "What we do",
      title: "What we *do*",
      items: [
        { title: "Network design and installation", text: "Planning, installation and configuration of wired and wireless networks for offices, shops, schools, clinics and warehouses. Coverage studies, switching, routing, Wi-Fi, firewalls, secure remote access." },
        { title: "Structured cabling", text: "Clean, labeled, standards-based cabling for offices and buildings." },
        { title: "Server rooms and on-site servers", text: "Design and setup of server rooms: racks, power protection, cooling, access control. Server installation, configuration and maintenance." },
        { title: "Equipment supply", text: "Computers, servers, switches, access points, printers, UPS, CCTV and more, selected for your needs and budget, not for our margin." },
        { title: "Workplace setup", text: "Complete office fit-out: workstations, printers, phone and meeting systems, user accounts and email." },
        { title: "Security systems", text: "CCTV, access control and network security [if offered]." },
        { title: "Maintenance and support", text: "Scheduled maintenance, rapid on-site interventions, remote support and spare parts. [Describe response times when defined.]" },
      ] satisfies Item[],
    },
    chain: {
      eyebrow: "The full chain, from cable to cloud",
      title: "The full chain, *from cable to cloud*",
      text: "Our local infrastructure team works with our Cloud Studio. Your on-site servers can be backed up automatically to the cloud, monitored remotely and extended into cloud services. One team, from the wall socket to the cloud.",
      cta: { label: "See backup and recovery →", href: routes.backup.path },
    },
    process: {
      eyebrow: "Our process",
      title: "Our *process*",
      steps: [
        { title: "Visit and survey", text: "we visit, measure and listen." },
        { title: "Design and quote", text: "a clear design, equipment list and price." },
        { title: "Supply", text: "we order and prepare the equipment." },
        { title: "Installation", text: "clean, tested and documented." },
        { title: "Handover and training", text: "your team learns how it works." },
        { title: "Support", text: "maintenance plans and rapid assistance." },
      ] satisfies Step[],
    },
    projects: {
      eyebrow: "Projects we handle",
      title: "Projects we *handle*",
      tags: ["Small offices", "Multi-floor buildings", "Schools and training centers", "Clinics and pharmacies", "Hotels and restaurants", "Shops and distribution centers", "NGOs and field offices"],
      note: "(Add real examples and photos.)",
    },
    where: {
      eyebrow: "Where we work",
      title: "Where we *work*",
      cameroon: "Cameroon: [Douala, Yaoundé, other cities].",
      central: "Central Africa: [countries and conditions].",
      mapNote: "Service zones shown are indicative. [Confirm the cities and zones you serve.]",
    },
    why: {
      eyebrow: "Why clients choose us",
      title: "Why clients *choose us*",
      items: [
        "Our own engineers do the work, not subcontractors.",
        "Documentation of every installation.",
        "One partner for equipment, installation, cloud and support.",
        "Honest recommendations, including when a cheaper solution is enough.",
      ],
    },
    faq: [
      { q: "Do you only install, or also supply equipment?", a: "Both. We can supply, install and maintain, or work with equipment you already own." },
      { q: "Do you offer maintenance contracts?", a: "Yes. [Describe tiers.]" },
      { q: "How fast can you intervene if something breaks?", a: "[Define response times by city and plan.]" },
      { q: "Can you protect our data?", a: "Yes, with local backups and automatic cloud backups." },
      { q: "Do you work outside Cameroon?", a: "[Describe regional reach.]" },
    ] satisfies Faq[],
    cta: book("Let us visit your site and design your infrastructure.", undefined, "Request a site visit"),
  },
  fr: {
    seo: {
      title: "Infrastructure informatique et services réseau au Cameroun et en Afrique centrale | Supplies and Works",
      description:
        "Infrastructure réseau, serveurs et bureautique complète pour les entreprises au Cameroun et en Afrique centrale : conception, fourniture, installation, maintenance et assistance.",
    } satisfies Seo,
    hero: {
      eyebrow: "Afrique & Services locaux",
      title: "Une infrastructure informatique complète pour les entreprises au *Cameroun et en Afrique centrale.*",
      sub: "Réseaux, serveurs et systèmes sur site, conçus, fournis, installés et maintenus par nos propres ingénieurs.",
      buttons: [
        { label: "Demander une visite sur site", href: routes.contact.path },
        { label: "Parler à un ingénieur", href: routes.contact.path },
      ],
      image: "networkEngineer",
    } satisfies PageHeroCopy,
    intro: {
      eyebrow: "Bien plus que du matériel",
      text: "N’importe qui peut vendre un routeur ou un ordinateur. Ce dont les entreprises ont besoin, c’est d’un environnement qui fonctionne au quotidien : un réseau stable, des serveurs fiables, un câblage soigné, des données protégées, et quelqu’un qui répond quand quelque chose tombe en panne. Nous construisons l’ensemble, et nous restons pour en prendre soin.",
    },
    what: {
      eyebrow: "Ce que nous faisons",
      title: "Ce que nous *faisons*",
      items: [
        { title: "Conception et installation de réseaux", text: "Planification, installation et configuration de réseaux filaires et sans fil pour bureaux, commerces, écoles, cliniques et entrepôts. Études de couverture, commutation, routage, Wi-Fi, pare-feu, accès à distance sécurisé." },
        { title: "Câblage structuré", text: "Un câblage propre, étiqueté et conforme aux normes pour les bureaux et les bâtiments." },
        { title: "Salles serveurs et serveurs sur site", text: "Conception et aménagement de salles serveurs : baies, protection électrique, climatisation, contrôle d’accès. Installation, configuration et maintenance de serveurs." },
        { title: "Fourniture d’équipements", text: "Ordinateurs, serveurs, switchs, points d’accès, imprimantes, onduleurs, vidéosurveillance et plus encore, choisis en fonction de vos besoins et de votre budget, pas de notre marge." },
        { title: "Aménagement des postes de travail", text: "Équipement complet de vos bureaux : postes de travail, imprimantes, téléphonie et systèmes de visioconférence, comptes utilisateurs et messagerie." },
        { title: "Systèmes de sécurité", text: "Vidéosurveillance, contrôle d’accès et sécurité réseau [si proposé]." },
        { title: "Maintenance et assistance", text: "Maintenance planifiée, interventions rapides sur site, assistance à distance et pièces détachées. [Préciser les délais d’intervention une fois définis.]" },
      ] satisfies Item[],
    },
    chain: {
      eyebrow: "Toute la chaîne, du câble au cloud",
      title: "Toute la chaîne, *du câble au cloud*",
      text: "Notre équipe d’infrastructure locale travaille main dans la main avec notre Studio Cloud. Vos serveurs sur site peuvent être sauvegardés automatiquement dans le cloud, supervisés à distance et étendus à des services cloud. Une seule équipe, de la prise murale jusqu’au cloud.",
      cta: { label: "Découvrir la sauvegarde et la reprise →", href: routes.backup.path },
    },
    process: {
      eyebrow: "Notre démarche",
      title: "Notre *démarche*",
      steps: [
        { title: "Visite et relevé", text: "nous venons sur place, mesurons et écoutons." },
        { title: "Conception et devis", text: "une conception claire, une liste d’équipements et un prix." },
        { title: "Fourniture", text: "nous commandons et préparons les équipements." },
        { title: "Installation", text: "propre, testée et documentée." },
        { title: "Passation et formation", text: "votre équipe apprend comment tout fonctionne." },
        { title: "Assistance", text: "contrats de maintenance et assistance rapide." },
      ] satisfies Step[],
    },
    projects: {
      eyebrow: "Les projets que nous prenons en charge",
      title: "Les projets que nous *prenons en charge*",
      tags: ["Petits bureaux", "Immeubles sur plusieurs étages", "Écoles et centres de formation", "Cliniques et pharmacies", "Hôtels et restaurants", "Commerces et centres de distribution", "ONG et bureaux de terrain"],
      note: "(Ajouter des exemples et des photos réels.)",
    },
    where: {
      eyebrow: "Où nous intervenons",
      title: "Où nous *intervenons*",
      cameroon: "Cameroun : [Douala, Yaoundé, autres villes].",
      central: "Afrique centrale : [pays et conditions].",
      mapNote: "Les zones d’intervention indiquées sont données à titre indicatif. [Confirmer les villes et les zones desservies.]",
    },
    why: {
      eyebrow: "Pourquoi nos clients nous choisissent",
      title: "Pourquoi nos clients *nous choisissent*",
      items: [
        "Nos propres ingénieurs réalisent le travail, pas des sous-traitants.",
        "Chaque installation est documentée.",
        "Un seul partenaire pour l’équipement, l’installation, le cloud et l’assistance.",
        "Des recommandations honnêtes, y compris quand une solution moins chère suffit.",
      ],
    },
    faq: [
      { q: "Vous occupez-vous uniquement de l’installation, ou fournissez-vous aussi le matériel ?", a: "Les deux. Nous pouvons fournir, installer et maintenir, ou travailler avec le matériel dont vous disposez déjà." },
      { q: "Proposez-vous des contrats de maintenance ?", a: "Oui. [Décrire les niveaux.]" },
      { q: "En combien de temps pouvez-vous intervenir en cas de panne ?", a: "[Définir les délais d’intervention par ville et par formule.]" },
      { q: "Pouvez-vous protéger nos données ?", a: "Oui, grâce à des sauvegardes locales et à des sauvegardes automatiques dans le cloud." },
      { q: "Intervenez-vous en dehors du Cameroun ?", a: "[Décrire la couverture régionale.]" },
    ] satisfies Faq[],
    cta: book("Laissez-nous visiter vos locaux et concevoir votre infrastructure.", undefined, "Demander une visite sur site"),
  },
});
