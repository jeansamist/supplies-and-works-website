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
        { title: "Infrastructure as code and automation", text: "Environments described in code, so they are repeatable, reviewable and fast to rebuild. [Tools: Terraform, CloudFormation, etc.]" },
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
      text: "We apply the principle of least privilege, encrypt data in transit and at rest, separate environments, keep audit logs, and review access regularly. [Add real practices and any compliance work you have done. Do not claim certifications you do not hold.]",
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
      { q: "Who owns the code?", a: "You do, once paid. [Confirm terms.]" },
      { q: "Can you work with our existing developers?", a: "Yes." },
      { q: "Do you provide maintenance?", a: "Yes. See our engagement models." },
      { q: "Can you take over a project another team started?", a: "Yes. We review the code first and tell you honestly what to keep and what to rebuild." },
    ] satisfies Faq[],
    cta: book("Have an idea, a problem or a messy system? Let’s talk."),
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
});
