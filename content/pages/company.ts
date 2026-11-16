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
});
