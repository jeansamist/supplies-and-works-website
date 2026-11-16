import Link from "next/link";
import { BackToTop, NewsletterForm, Wordmark, WorldClock } from "@/components/layout/footer-parts";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import { LogoPlaceholder } from "@/components/ui/logo-placeholder";
import { Marquee } from "@/components/ui/marquee";
import { Rich } from "@/components/ui/rich";
import { formatPhone, siteConfig, type SiteCopy } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";

/** Cameroon flag that waves gently (green · red with yellow star · yellow). */
export function CameroonFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" aria-hidden className={`animate-wave origin-left ${className ?? ""}`}>
      <rect width="10" height="20" fill="#007a5e" />
      <rect x="10" width="10" height="20" fill="#ce1126" />
      <rect x="20" width="10" height="20" fill="#fcd116" />
      <polygon points="15,6.2 15.9,8.9 18.8,8.9 16.5,10.6 17.3,13.3 15,11.7 12.7,13.3 13.5,10.6 11.2,8.9 14.1,8.9" fill="#fcd116" />
    </svg>
  );
}

export function SiteFooter({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const f = copy.footer;
  const l = (p: string) => localePath(locale, p);

  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg">
      {/* Call to action strip */}
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-20 sm:px-6 sm:py-28 md:flex-row md:items-end md:justify-between">
        <h2 data-split className="max-w-3xl font-serif text-h2 text-balance">
          <Rich text={f.ctaTitle.replace("Let’s build it.", "*Let’s build it.*")} />
        </h2>
        <Button href={l("/contact")} size="lg" magnetic>
          {f.ctaButton}
        </Button>
      </div>

      {/* Build · Run · Protect */}
      <div className="border-y border-line bg-accent py-5 text-accent-ink">
        <Marquee
          items={[...f.marquee, ...f.marquee, ...f.marquee].map((w) => (
            <span key={w} className="font-serif text-4xl italic sm:text-5xl">
              {w}
            </span>
          ))}
          separator={<span className="text-accent-ink/50">✦</span>}
          duration={30}
          label="Build, Run, Protect"
          className="[mask-image:none]"
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_2fr]">
        <div className="space-y-8">
          <LogoPlaceholder className="w-36" />
          <p className="max-w-sm text-pretty text-muted">{f.description}</p>
          <WorldClock line={f.clock.line} homeLabel={f.clock.homeLabel} visitorLabel={f.clock.visitorLabel} />
          <p className="inline-flex items-center gap-3 rounded-full border border-line py-2 pr-5 pl-2 text-sm font-semibold">
            <span className="flex h-7 w-10 items-center justify-center overflow-hidden rounded-full bg-surface-2 [perspective:200px]">
              <CameroonFlag className="h-4 w-6" />
            </span>
            {f.badge}
          </p>
        </div>

        <div className="space-y-14">
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {f.columns.map((col) => (
              <div key={col.title} className="space-y-4">
                <h3 className="text-sm font-semibold tracking-wide text-muted uppercase">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={l(link.href)} className="link-draw" data-cursor="link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="grid gap-10 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wide text-muted uppercase">{f.contactTitle}</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="link-draw" data-cursor="link">{siteConfig.email}</a>
                </li>
                {siteConfig.phones.map((p) => (
                  <li key={p} className="flex flex-wrap items-center gap-x-3">
                    <a href={`tel:${p}`} className="link-draw" data-cursor="link">{formatPhone(p)}</a>
                    <a href={`https://wa.me/${p.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="text-sm text-muted link-draw hover:text-fg">WhatsApp</a>
                  </li>
                ))}
                <li><Rich text={siteConfig.addressByLocale[locale] ?? siteConfig.address} /></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-pretty text-muted">{f.newsletter.text}</p>
              <NewsletterForm
                placeholder={f.newsletter.placeholder}
                button={f.newsletter.button}
                success={f.newsletter.success}
                error={f.newsletter.error}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Giant interactive wordmark */}
      <div className="overflow-hidden px-2 sm:px-4">
        <Wordmark text={f.wordmark} />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-line px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {f.legal.map((link) => (
            <li key={link.href}>
              <Link href={l(link.href)} className="link-draw hover:text-fg">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-4">
          <LanguageSwitcher current={locale} label={copy.header.language} />
          <p>{f.copyright}</p>
        </div>
      </div>

      <BackToTop label={f.backToTop} />
    </footer>
  );
}
