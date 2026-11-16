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
});
