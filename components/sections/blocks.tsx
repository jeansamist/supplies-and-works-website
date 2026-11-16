// Server-rendered content blocks shared by the inner pages. Motion is
// declared with data attributes and run by <MotionDirector>.
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ReactNode } from "react";
import { Accordion } from "@/components/ui/accordion";
import { Button, TextLink, label } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { Photo } from "@/components/ui/photo";
import { Rich } from "@/components/ui/rich";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";
import type { ImageKey } from "@/content/images";
import type { Cta, Faq, FinalCta, Item, Step, Table } from "@/content/types";
import { localePath, type Locale } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { cn } from "@/lib/utils";

/* ─── Intro paragraph, revealed word by word while scrolling ─────────────── */
export function IntroWords({
  eyebrow,
  title,
  paragraphs,
  cta,
  locale,
  id,
}: {
  eyebrow?: string;
  title?: string;
  paragraphs: string[];
  cta?: Cta;
  locale: Locale;
  id?: string;
}) {
  return (
    <Section id={id}>
      <Container className="space-y-10">
        {eyebrow && (
          <div data-reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        {title && (
          <h2 data-split className="max-w-4xl font-serif text-h2 text-balance">
            <Rich text={title} />
          </h2>
        )}
        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              data-words={i === 0 ? "" : undefined}
              data-reveal={i === 0 ? undefined : ""}
              className={cn(
                "max-w-5xl text-pretty",
                i === 0 ? "font-serif text-[clamp(1.6rem,1.1rem+2vw,2.9rem)] leading-[1.25]" : "max-w-3xl text-lead text-muted",
              )}
            >
              {/* Placeholders are kept as plain text in the word-reveal paragraph so SplitText can split it. */}
              {i === 0 ? p : <Rich text={p} />}
            </p>
          ))}
        </div>
        {cta && (
          <div data-reveal>
            <TextLink href={localePath(locale, cta.href)}>{label(cta.label)}</TextLink>
          </div>
        )}
      </Container>
    </Section>
  );
}

/* ─── Cards grid ─────────────────────────────────────────────────────────── */
export function FeatureGrid({
  eyebrow,
  title,
  lead,
  items,
  columns = 3,
  numbered = true,
  tone,
  footnote,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  items: Item[];
  columns?: 2 | 3 | 4;
  numbered?: boolean;
  tone?: "default" | "surface" | "ink";
  footnote?: string;
  children?: ReactNode;
}) {
  return (
    <Section tone={tone}>
      <Container className="space-y-14">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <ul
          data-reveal="stagger"
          className={cn(
            "grid gap-4",
            columns === 2 && "sm:grid-cols-2",
            columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
            columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
          )}
        >
          {items.map((item, i) => (
            <TiltCard key={item.title} as="li" className="flex flex-col gap-4 p-7 sm:p-8">
              {numbered && (
                <span className="font-sans text-sm font-semibold text-muted tabular-nums transition-colors group-hover:text-fg">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              {item.tag && <span className="self-start rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink">{item.tag}</span>}
              <h3 className="font-serif text-h3 text-balance">
                <Rich text={item.title} mark={false} />
              </h3>
              {item.text && (
                <p className="text-pretty text-muted">
                  <Rich text={item.text} />
                </p>
              )}
              {item.meta && (
                <p className="mt-auto border-t border-line pt-4 text-sm text-pretty">
                  <span className="font-semibold">{item.meta.label}: </span>
                  <span className="text-muted">
                    <Rich text={item.meta.value} />
                  </span>
                </p>
              )}
            </TiltCard>
          ))}
        </ul>
        {footnote && (
          <p data-reveal className="text-sm text-muted italic">
            <Rich text={footnote} />
          </p>
        )}
        {children}
      </Container>
    </Section>
  );
}

/* ─── Process: sticky stacked cards ──────────────────────────────────────── */
export function ProcessSteps({
  eyebrow,
  title,
  lead,
  steps,
  cta,
  locale,
  tone = "surface",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  steps: Step[];
  cta?: Cta;
  locale: Locale;
  tone?: "default" | "surface" | "ink";
}) {
  return (
    <Section tone={tone}>
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8 lg:sticky lg:top-32 lg:self-start">
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
          {cta && (
            <div data-reveal>
              <TextLink href={localePath(locale, cta.href)}>{label(cta.label)}</TextLink>
            </div>
          )}
        </div>
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="sticky rounded-3xl border border-line bg-bg p-7 shadow-[0_-10px_40px_-25px_rgba(0,0,0,0.25)] sm:p-9"
              style={{ top: `${110 + i * 18}px` }}
            >
              <div className="flex items-start gap-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent font-serif text-xl font-semibold text-accent-ink">
                  {i + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="font-serif text-h3">
                    <Rich text={step.title} mark={false} />
                  </h3>
                  <p className="text-pretty text-muted">
                    <Rich text={step.text} />
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* ─── Responsive table ───────────────────────────────────────────────────── */
export function DataTable({
  eyebrow,
  title,
  lead,
  table,
  footnote,
  tone,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  table: Table;
  footnote?: string;
  tone?: "default" | "surface" | "ink";
}) {
  return (
    <Section tone={tone}>
      <Container className="space-y-12">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        {/* Desktop table */}
        <div data-reveal className="hidden overflow-hidden rounded-3xl border border-line md:block">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-2">
                {table.head.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className={cn("px-6 py-4 text-sm font-semibold", i === table.highlightCol && "bg-accent text-accent-ink")}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {table.rows.map((row, r) => (
                <tr
                  key={r}
                  className={cn(
                    "transition-colors hover:bg-surface",
                    r === table.highlightRow && "bg-accent-soft hover:bg-accent-soft",
                  )}
                >
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row" className="px-6 py-5 align-top font-semibold">
                        <Rich text={cell} />
                      </th>
                    ) : (
                      <td key={c} className={cn("px-6 py-5 align-top text-muted", c === table.highlightCol && "font-medium text-fg")}>
                        <Rich text={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile cards */}
        <ul data-reveal="stagger" className="space-y-3 md:hidden">
          {table.rows.map((row, r) => (
            <li key={r} className={cn("rounded-3xl border border-line p-5", r === table.highlightRow && "border-transparent bg-accent-soft")}>
              <p className="font-semibold">
                <Rich text={row[0]} />
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                {row.slice(1).map((cell, c) => (
                  <div key={c}>
                    <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{table.head[c + 1] || "—"}</dt>
                    <dd className={cn(c + 1 === table.highlightCol && "font-semibold")}>
                      <Rich text={cell} />
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
        {footnote && (
          <p data-reveal className="text-sm text-muted italic">
            <Rich text={footnote} />
          </p>
        )}
      </Container>
    </Section>
  );
}

/* ─── Bulleted list with bold lead-ins ───────────────────────────────────── */
export function Checklist({
  eyebrow,
  title,
  lead,
  items,
  image,
  tone,
  footnote,
  cta,
  locale,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  items: string[];
  image?: ImageKey;
  tone?: "default" | "surface" | "ink";
  footnote?: string;
  cta?: Cta;
  locale?: Locale;
}) {
  return (
    <Section tone={tone}>
      <Container className={cn("grid gap-12", image && "lg:grid-cols-2 lg:items-center")}>
        <div className="space-y-10">
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
          <ul data-reveal="stagger" className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex gap-4 text-lg text-pretty">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} aria-hidden className="mt-1 size-6 shrink-0 text-fg dark:text-accent" />
                <span>
                  <Rich text={item} />
                </span>
              </li>
            ))}
          </ul>
          {footnote && (
            <p data-reveal className="text-sm text-muted italic">
              <Rich text={footnote} />
            </p>
          )}
          {cta && locale && (
            <div data-reveal>
              <TextLink href={localePath(locale, cta.href)}>{label(cta.label)}</TextLink>
            </div>
          )}
        </div>
        {image && (
          <div data-reveal="clip" data-parallax="0.1" className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <div data-parallax-inner className="absolute -inset-y-[8%] inset-x-0">
              <Photo image={image} sizes="(min-width: 1024px) 50vw, 100vw" className="size-full" />
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

/* ─── Text beside a photo ────────────────────────────────────────────────── */
export function SplitMedia({
  eyebrow,
  title,
  paragraphs,
  image,
  reverse,
  cta,
  locale,
  tone,
  children,
}: {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  image: ImageKey;
  reverse?: boolean;
  cta?: Cta;
  locale: Locale;
  tone?: "default" | "surface" | "ink";
  children?: ReactNode;
}) {
  return (
    <Section tone={tone}>
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className={cn("space-y-7", reverse && "lg:order-2")}>
          <SectionHeading eyebrow={eyebrow} title={title} />
          {paragraphs.map((p, i) => (
            <p key={i} data-reveal className="text-lg text-pretty text-muted">
              <Rich text={p} />
            </p>
          ))}
          {children}
          {cta && (
            <div data-reveal>
              <TextLink href={localePath(locale, cta.href)}>{label(cta.label)}</TextLink>
            </div>
          )}
        </div>
        <div data-reveal="clip" data-parallax="0.1" className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-[4/5]">
          <div data-parallax-inner className="absolute -inset-y-[8%] inset-x-0">
            <Photo image={image} sizes="(min-width: 1024px) 50vw, 100vw" className="size-full" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── Tag cloud ("What you receive", "Who it is for", …) ─────────────────── */
export function TagCloud({
  eyebrow,
  title,
  lead,
  tags,
  footnote,
  tone,
  marquee,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  tags: string[];
  footnote?: string;
  tone?: "default" | "surface" | "ink";
  /** Also show the tags as a marquee band under the cloud. */
  marquee?: boolean;
}) {
  return (
    <Section tone={tone}>
      <Container className="space-y-12">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <ul data-reveal="stagger" className="flex flex-wrap gap-3">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-5 py-3 text-base font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-accent hover:text-accent-ink sm:text-lg"
            >
              <Rich text={t} mark={false} />
            </li>
          ))}
        </ul>
        {footnote && (
          <p data-reveal className="text-sm text-muted italic">
            <Rich text={footnote} />
          </p>
        )}
      </Container>
      {marquee && (
        <Marquee
          className="mt-16"
          items={tags.map((t) => (
            <span key={t} className="font-serif text-4xl text-muted italic sm:text-6xl">
              {t.replace(/\[|\]/g, "")}
            </span>
          ))}
          duration={50}
        />
      )}
    </Section>
  );
}

/* ─── Short text statement ───────────────────────────────────────────────── */
export function Statement({
  eyebrow,
  title,
  paragraphs,
  cta,
  locale,
  tone,
  children,
}: {
  eyebrow?: string;
  title: string;
  paragraphs?: string[];
  cta?: Cta;
  locale: Locale;
  tone?: "default" | "surface" | "ink";
  children?: ReactNode;
}) {
  return (
    <Section tone={tone}>
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="space-y-6 lg:pt-12">
          {paragraphs?.map((p, i) => (
            <p key={i} data-reveal className="text-lead text-pretty text-muted">
              <Rich text={p} />
            </p>
          ))}
          {children}
          {cta && (
            <div data-reveal>
              <TextLink href={localePath(locale, cta.href)}>{label(cta.label)}</TextLink>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

/* ─── FAQ ────────────────────────────────────────────────────────────────── */
export function FaqSection({ title, items, id = "faq", tone, locale = "en" }: { title?: string; items: Faq[]; id?: string; tone?: "default" | "surface" | "ink"; locale?: Locale }) {
  const t = ui(locale);
  return (
    <Section id={id} tone={tone}>
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={t.faq} title={title ?? t.faqTitle} className="lg:sticky lg:top-32 lg:self-start" />
        <Accordion items={items} />
      </Container>
    </Section>
  );
}

/* ─── Testimonial placeholder ────────────────────────────────────────────── */
export function Testimonials({ title, quotes, note, locale = "en" }: { title: string; quotes: { text: string; by: string }[]; note?: string; locale?: Locale }) {
  return (
    <Section>
      <Container className="space-y-12">
        <SectionHeading eyebrow={ui(locale).testimonials} title={title} />
        <ul data-reveal="stagger" className="grid gap-4 md:grid-cols-3">
          {quotes.map((q, i) => (
            <TiltCard key={i} as="li" tilt={4} className="flex flex-col justify-between gap-10 p-8">
              <span aria-hidden className="font-serif text-7xl leading-none text-fg/15 dark:text-accent/40">“</span>
              <blockquote className="font-serif text-2xl text-pretty">
                <Rich text={q.text} />
              </blockquote>
              <p className="text-sm text-muted">
                <Rich text={q.by} />
              </p>
            </TiltCard>
          ))}
        </ul>
        {note && (
          <p data-reveal className="text-sm text-muted italic">
            {note}
          </p>
        )}
      </Container>
    </Section>
  );
}

/* ─── Plans / packages placeholders ──────────────────────────────────────── */
export function Plans({
  eyebrow,
  title,
  lead,
  plans,
  footnote,
  tone,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  plans: { name: string; text: string }[];
  footnote?: string;
  tone?: "default" | "surface" | "ink";
}) {
  return (
    <Section tone={tone}>
      <Container className="space-y-12">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <ul data-reveal="stagger" className={cn("grid gap-4", plans.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3")}>
          {plans.map((p, i) => (
            <TiltCard
              key={p.name}
              as="li"
              className={cn("flex min-h-56 flex-col justify-between gap-8 p-8", i === 1 && "border-transparent !bg-[#0a0a0a] text-[#ededed]")}
            >
              <h3 className="font-serif text-h3">{p.name}</h3>
              <p className={cn(i === 1 ? "text-[#edededb3]" : "text-muted")}>
                <Rich text={p.text} />
              </p>
            </TiltCard>
          ))}
        </ul>
        {footnote && (
          <p data-reveal className="text-sm text-muted italic">
            <Rich text={footnote} />
          </p>
        )}
      </Container>
    </Section>
  );
}

/* ─── Final "Let's talk" band ────────────────────────────────────────────── */
export function CtaBand({ cta, locale }: { cta: FinalCta; locale: Locale }) {
  const talk = ui(locale).letsTalk;
  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-accent px-6 py-20 text-accent-ink sm:rounded-[2.5rem] sm:px-12 sm:py-28">
        <Marquee
          className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 opacity-[0.08] [mask-image:none]"
          items={[talk, talk, talk].map((t, i) => (
            <span key={i} className="font-serif text-[18vw] leading-none italic">
              {t}
            </span>
          ))}
          separator="✦"
          duration={60}
        />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-5">
            <p data-reveal className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
              <span aria-hidden className="size-1.5 rounded-full bg-accent-ink" /> {talk}
            </p>
            <h2 data-split className="font-serif text-h2 text-balance">
              <Rich text={cta.title} mark={false} />
            </h2>
            {cta.text && (
              <p data-reveal className="text-lead text-pretty opacity-80">
                <Rich text={cta.text} />
              </p>
            )}
          </div>
          <div data-reveal className="flex flex-col gap-3 sm:flex-row">
            {cta.buttons.map((b, i) => (
              <Button key={b.label} href={localePath(locale, b.href)} size="lg" variant={i === 0 ? "solid" : "outline"} magnetic className={i > 0 ? "border-accent-ink/25 text-accent-ink" : undefined}>
                {label(b.label)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
