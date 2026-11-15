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
});
