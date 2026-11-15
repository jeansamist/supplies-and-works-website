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
        { value: "[X]", label: "paying customers on our products" },
        { value: "[X]", label: "projects delivered" },
        { value: "[X]", label: "countries served" },
        { value: "[X]", label: "years of experience" },
        { value: "[X]", label: "team members" },
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
      // `example` is the one-line hover reveal. [Write a real example for each, keep only industries you can truly serve.]
      items: [
        { name: "Restaurants and hospitality", example: "[One-line example of how we help]" },
        { name: "Retail and commerce", example: "[One-line example of how we help]" },
        { name: "Education", example: "[One-line example of how we help]" },
        { name: "Healthcare and clinics", example: "[One-line example of how we help]" },
        { name: "Logistics and distribution", example: "[One-line example of how we help]" },
        { name: "Professional services", example: "[One-line example of how we help]" },
        { name: "Startups and SaaS", example: "[One-line example of how we help]" },
        { name: "NGOs and associations", example: "[One-line example of how we help]" },
      ],
    },
    africa: {
      eyebrow: "Built in Africa",
      title: "Built in *Africa*",
      text: "We are proud of where we work. From Douala, we serve clients in [countries] with the same standards as any firm in the world. Our team works in English and French, overlaps with the American East Coast every working day, and brings sharp engineering at a cost that lets you do more.",
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
        { text: "“[TESTIMONIAL TEXT]”", by: "[Name], [Role], [Company], [Country]" },
        { text: "“[TESTIMONIAL TEXT]”", by: "[Name], [Role], [Company], [Country]" },
        { text: "“[TESTIMONIAL TEXT]”", by: "[Name], [Role], [Company], [Country]" },
      ],
    },
    faq: [
      { q: "Where is your team based?", a: "In Douala, Cameroon. We work remotely with clients across the world and on site in Central Africa." },
      { q: "Do you work with clients outside Africa?", a: "Yes. International clients are a priority. We work in English and French, with scheduled overlap hours." },
      { q: "Which time zones do you cover?", a: "Douala is on UTC+1. We overlap with Europe all day and with the U.S. East Coast in the afternoon and early evening. [Specify exact overlap and support windows.]" },
      { q: "What size of company do you work with?", a: "Startups and small and medium businesses are our main focus. We also take on larger organizations for defined projects." },
      { q: "How do you price?", a: "By project, by monthly plan, or both. You always receive a clear estimate before we start." },
      { q: "Who owns the code and the designs?", a: "You do, once the project is paid. [Confirm your standard terms.]" },
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
});
