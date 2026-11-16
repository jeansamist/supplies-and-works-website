// Content reused on several pages: the five studios and Build · Run · Protect.
import type { ImageKey } from "@/content/images";
import { localized } from "@/lib/i18n";
import { routes } from "@/lib/routes";

export type Studio = {
  number: string;
  title: string;
  text: string;
  keywords: string[];
  cta: { label: string; href: string };
  image: ImageKey;
};

export type Pillar = { title: string; text: string; includes: string[]; links: { label: string; href: string }[] };

export const shared = localized({
  en: {
    studios: [
      {
        number: "01",
        title: "Cloud Studio",
        text: "Cloud architecture, migration, cloud-native development, hybrid cloud, backup and disaster recovery. We help you move faster, scale safely and never lose your data.",
        keywords: ["AWS", "Migration", "Backup", "Resilience"],
        cta: { label: "Explore Cloud →", href: routes.cloud.path },
        image: "dataCenter",
      },
      {
        number: "02",
        title: "Product & Engineering",
        text: "Custom web, mobile and desktop applications, SaaS products, APIs, and websites that convert. Software designed around how your people actually work.",
        keywords: ["Web apps", "Mobile", "Desktop", "Websites"],
        cta: { label: "Explore Engineering →", href: routes.software.path },
        image: "africanDeveloper",
      },
      {
        number: "03",
        title: "AI & Automation",
        text: "We audit your processes, find what can be automated, build a roadmap, and implement it. Less repetitive work, more time for what matters.",
        keywords: ["Audit", "Workflows", "Assistants", "Integration"],
        cta: { label: "Explore AI →", href: routes.ai.path },
        image: "aiAbstract",
      },
      {
        number: "04",
        title: "Creative Studio",
        text: "Brand identities, social media content, advertising spots and motion graphics, made by designers who also understand software.",
        keywords: ["Branding", "Social", "Motion", "Print"],
        cta: { label: "Explore Creative →", href: routes.creative.path },
        image: "creativeDesk",
      },
      {
        number: "05",
        title: "Africa & Local Services",
        text: "Complete networks, server rooms and office infrastructure across Cameroon and Central Africa. We do not just sell equipment. We build the whole environment.",
        keywords: ["Networks", "Servers", "Cabling", "Support"],
        cta: { label: "Explore Local Services →", href: routes.local.path },
        image: "networkEngineer",
      },
    ] satisfies Studio[],
    pillars: [
      {
        title: "Build",
        text: "We design and build what you need: applications, cloud platforms, websites, automations and brand assets. Every project starts with understanding your business, then moves in short cycles you can see.",
        includes: ["Software development", "Cloud engineering", "Web design", "AI automation", "Brand design"],
        links: [
          { label: "Software development", href: routes.software.path },
          { label: "Cloud engineering", href: routes.cloud.path },
          { label: "Web design", href: routes.webDesign.path },
          { label: "AI automation", href: routes.ai.path },
          { label: "Brand design", href: routes.creative.path },
        ],
      },
      {
        title: "Run",
        text: "Launch day is the start, not the finish. We maintain, monitor, update and support your systems, so they keep working and keep improving.",
        includes: ["Maintenance plans", "Hosting and operations", "Support", "SaaS subscriptions"],
        links: [
          { label: "Maintenance plans", href: routes.engagement.path },
          { label: "Hosting and operations", href: routes.cloud.path },
          { label: "Support", href: routes.howWeWork.path },
          { label: "SaaS subscriptions", href: routes.products.path },
        ],
      },
      {
        title: "Protect",
        text: "We secure your systems and make sure your data survives anything: failures, theft, human error, disaster. Automatic backups, tested restores and clear recovery plans.",
        includes: ["Backup and disaster recovery", "Access control", "Monitoring", "Security reviews"],
        links: [
          { label: "Backup and disaster recovery", href: routes.backup.path },
          { label: "Access control", href: routes.cloud.path },
          { label: "Monitoring", href: routes.cloud.path },
          { label: "Security reviews", href: routes.cloud.path },
        ],
      },
    ] satisfies Pillar[],
    includesLabel: "Includes",
  },
  fr: {
    studios: [
      {
        number: "01",
        title: "Cloud Studio",
        text: "Architecture cloud, migration, développement cloud-native, cloud hybride, sauvegarde et reprise après sinistre. Nous vous aidons à avancer plus vite, à grandir en toute sécurité et à ne jamais perdre vos données.",
        keywords: ["AWS", "Migration", "Sauvegarde", "Résilience"],
        cta: { label: "Découvrir le Cloud →", href: routes.cloud.path },
        image: "dataCenter",
      },
      {
        number: "02",
        title: "Produit & Ingénierie",
        text: "Applications web, mobiles et desktop sur mesure, produits SaaS, API et sites web qui convertissent. Des logiciels pensés autour de la façon dont vos équipes travaillent vraiment.",
        keywords: ["Applications web", "Mobile", "Desktop", "Sites web"],
        cta: { label: "Découvrir l’Ingénierie →", href: routes.software.path },
        image: "africanDeveloper",
      },
      {
        number: "03",
        title: "IA & Automatisation",
        text: "Nous auditons vos processus, identifions ce qui peut être automatisé, établissons une feuille de route et la mettons en œuvre. Moins de tâches répétitives, plus de temps pour l’essentiel.",
        keywords: ["Audit", "Workflows", "Assistants", "Intégration"],
        cta: { label: "Découvrir l’IA →", href: routes.ai.path },
        image: "aiAbstract",
      },
      {
        number: "04",
        title: "Studio Créatif",
        text: "Identités de marque, contenus pour les réseaux sociaux, spots publicitaires et motion design, réalisés par des designers qui comprennent aussi le logiciel.",
        keywords: ["Identité", "Réseaux sociaux", "Motion", "Print"],
        cta: { label: "Découvrir le Studio Créatif →", href: routes.creative.path },
        image: "creativeDesk",
      },
      {
        number: "05",
        title: "Afrique & Services locaux",
        text: "Réseaux complets, salles serveurs et infrastructures de bureau au Cameroun et en Afrique centrale. Nous ne vendons pas simplement du matériel : nous construisons l’environnement tout entier.",
        keywords: ["Réseaux", "Serveurs", "Câblage", "Support"],
        cta: { label: "Découvrir les Services locaux →", href: routes.local.path },
        image: "networkEngineer",
      },
    ] satisfies Studio[],
    pillars: [
      {
        title: "Construire",
        text: "Nous concevons et construisons ce dont vous avez besoin : applications, plateformes cloud, sites web, automatisations et supports de marque. Chaque projet commence par la compréhension de votre activité, puis avance par cycles courts et visibles.",
        includes: ["Développement logiciel", "Ingénierie cloud", "Conception web", "Automatisation par l’IA", "Design de marque"],
        links: [
          { label: "Développement logiciel", href: routes.software.path },
          { label: "Ingénierie cloud", href: routes.cloud.path },
          { label: "Conception web", href: routes.webDesign.path },
          { label: "Automatisation par l’IA", href: routes.ai.path },
          { label: "Design de marque", href: routes.creative.path },
        ],
      },
      {
        title: "Exploiter",
        text: "Le jour du lancement est un début, pas une fin. Nous maintenons, surveillons, mettons à jour et assistons vos systèmes, pour qu’ils continuent de fonctionner et de s’améliorer.",
        includes: ["Contrats de maintenance", "Hébergement et exploitation", "Assistance", "Abonnements SaaS"],
        links: [
          { label: "Contrats de maintenance", href: routes.engagement.path },
          { label: "Hébergement et exploitation", href: routes.cloud.path },
          { label: "Assistance", href: routes.howWeWork.path },
          { label: "Abonnements SaaS", href: routes.products.path },
        ],
      },
      {
        title: "Protéger",
        text: "Nous sécurisons vos systèmes et faisons en sorte que vos données résistent à tout : pannes, vols, erreurs humaines, sinistres. Sauvegardes automatiques, restaurations testées et plans de reprise clairs.",
        includes: ["Sauvegarde et reprise après sinistre", "Contrôle d’accès", "Supervision", "Audits de sécurité"],
        links: [
          { label: "Sauvegarde et reprise après sinistre", href: routes.backup.path },
          { label: "Contrôle d’accès", href: routes.cloud.path },
          { label: "Supervision", href: routes.cloud.path },
          { label: "Audits de sécurité", href: routes.cloud.path },
        ],
      },
    ] satisfies Pillar[],
    includesLabel: "Comprend",
  },
});
