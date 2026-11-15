// Global copy and settings shared by every page (header, menus, footer,
// contact details, cookie banner). Copy is verbatim from 3-WEBSITE-COPY.md.
// Text conventions understood by <Rich>: *emphasis* · **bold** · [PLACEHOLDER].
import { localized } from "@/lib/i18n";
import { routes } from "@/lib/routes";

/** Settings that are not translated. */
export const siteConfig = {
  name: "Supplies and Works",
  /** Production URL, used for canonical links, sitemap and Open Graph. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://suppliesandworks.com",
  /** Brand yellow sampled from the logo. */
  brandYellow: "#FCEE21",
  email: "[EMAIL]",
  phone: "[PHONE / WHATSAPP]",
  address: "[Street], Douala, Cameroon",
  /** Calendly (or similar) URL. Empty = the booking section shows a placeholder. */
  bookingUrl: "",
  /** IANA zone for the footer clock and overlap calculator. */
  timeZone: "Africa/Douala",
  /** Working hours in Douala (24h) used for the "We overlap for X hours" line. [Confirm] */
  workingHours: { start: 8, end: 18 },
  /** Assumed visitor working hours in their own zone. */
  visitorHours: { start: 9, end: 18 },
  socials: [
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "" },
    { label: "Facebook", href: "" },
    { label: "X", href: "" },
    { label: "GitHub", href: "" },
  ],
} as const;

export type NavItem = { label: string; href: string; description?: string };

export const site = localized({
  en: {
    skipLink: "Skip to content",
    announcement: {
      text: "New: automatic cloud backup for your on-site servers.",
      cta: "Learn more →",
      href: routes.backup.path,
    },
    header: {
      nav: [
        { label: "Services", href: routes.services.path, menu: "services" },
        { label: "Products", href: routes.products.path, menu: "products" },
        { label: "Work", href: routes.work.path },
        { label: "Built in Africa", href: routes.builtInAfrica.path },
        { label: "Insights", href: routes.insights.path },
      ] as { label: string; href: string; menu?: "services" | "products" }[],
      cta: "Book a call",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      theme: "Toggle light and dark theme",
      language: "Language",
      languageSoon: "French version coming soon",
      commandPlaceholder: "Type to jump to a page…",
      commandEmpty: "No page matches.",
    },
    servicesMenu: {
      items: [
        { label: "Cloud Studio", description: "Cloud engineering, hybrid cloud, backup and disaster recovery", href: routes.cloud.path },
        { label: "Product & Engineering", description: "Web, mobile and desktop software, websites", href: routes.software.path },
        { label: "AI & Automation", description: "Process audit, roadmap and implementation", href: routes.ai.path },
        { label: "Creative Studio", description: "Brand identity, graphics and motion", href: routes.creative.path },
        { label: "Africa & Local Services", description: "Networks, servers and on-site infrastructure", href: routes.local.path },
      ] as NavItem[],
      side: {
        text: "Not sure what you need? Describe your problem and we will point you to the right team.",
        cta: "Talk to us",
        href: routes.contact.path,
      },
    },
    productsMenu: {
      items: [
        { label: "Badibo", description: "Restaurant management", href: routes.badibo.path },
        { label: "Kira", description: "Shop management", href: routes.kira.path },
        { label: "More tools", description: "CMS, Stock Manager and other focused software", href: routes.moreTools.path },
      ] as NavItem[],
    },
    footer: {
      ctaTitle: "Have a project in mind? Let’s build it.",
      ctaButton: "Book a call",
      wordmark: "Supplies and Works",
      description:
        "A technology partner from Douala, Cameroon. We build, run and protect the systems businesses depend on, in English and French, for clients across the world.",
      columns: [
        {
          title: "Company",
          links: [
            { label: "About", href: routes.about.path },
            { label: "Built in Africa", href: routes.builtInAfrica.path },
            { label: "Team", href: routes.team.path },
            { label: "Careers", href: routes.careers.path },
            { label: "Insights", href: routes.insights.path },
          ],
        },
        {
          title: "Services",
          links: [
            { label: "Cloud Engineering", href: routes.cloud.path },
            { label: "Backup & Recovery", href: routes.backup.path },
            { label: "Software", href: routes.software.path },
            { label: "Web Design", href: routes.webDesign.path },
            { label: "AI & Automation", href: routes.ai.path },
            { label: "Creative Studio", href: routes.creative.path },
            { label: "Africa & Local Services", href: routes.local.path },
          ],
        },
        {
          title: "Products",
          links: [
            { label: "Badibo", href: routes.badibo.path },
            { label: "Kira", href: routes.kira.path },
            { label: "More tools", href: routes.moreTools.path },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "How we work", href: routes.howWeWork.path },
            { label: "Engagement models", href: routes.engagement.path },
            { label: "Work", href: routes.work.path },
            { label: "FAQ", href: "/#faq" },
          ],
        },
      ] as { title: string; links: NavItem[] }[],
      contactTitle: "Contact",
      /** Clock line. {home}, {visitor} and {hours} are filled in live. */
      clock: {
        homeLabel: "Douala",
        visitorLabel: "Where you are",
        line: "It is {home} in Douala right now. Where you are, it is {visitor}. We overlap for {hours} hours today.",
      },
      newsletter: {
        text: "One useful idea a month on cloud, software and AI. No spam.",
        placeholder: "Email",
        button: "Subscribe",
        success: "You are subscribed. See you next month.",
        error: "Please enter a valid email address.",
      },
      badge: "Built in Africa. Delivered worldwide.",
      marquee: ["Build", "Run", "Protect"],
      legal: [
        { label: "Privacy", href: routes.privacy.path },
        { label: "Terms", href: routes.terms.path },
        { label: "Image credits", href: routes.credits.path },
      ] as NavItem[],
      copyright: "© 2026 Supplies and Works. All rights reserved.",
      backToTop: "Back to top",
    },
    cookie: {
      text: "We use a small number of cookies to make the site work and to understand how it is used.",
      accept: "Accept",
      decline: "Decline",
      settings: "Settings",
      settingsText: "Essential cookies are always on. Analytics cookies help us understand how the site is used.",
      analytics: "Analytics cookies",
      save: "Save choices",
    },
    loader: { label: "Loading" },
    breadcrumbHome: "Home",
  },
});

export type SiteCopy = ReturnType<typeof site>;
