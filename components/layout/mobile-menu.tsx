"use client";

import { Cancel01Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import { LogoPlaceholder } from "@/components/ui/logo-placeholder";
import type { SiteCopy } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

/**
 * Full-screen "command" menu: a curtain drops from the top, giant primary
 * links, and a filter field that jumps to any page of the site.
 */
export function MobileMenu({
  open,
  onClose,
  copy,
  locale,
}: {
  open: boolean;
  onClose: () => void;
  copy: SiteCopy;
  locale: Locale;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const l = (p: string) => localePath(locale, p);
  // Clear the filter whenever the menu closes.
  const [wasOpen, setWasOpen] = useState(open);
  if (wasOpen !== open) {
    setWasOpen(open);
    if (!open) setQuery("");
  }

  const primary = [
    ...copy.header.nav.map((n) => ({ label: n.label, href: n.href })),
    { label: routes.about.label, href: routes.about.path },
    { label: routes.contact.label, href: routes.contact.path },
  ];
  const all = useMemo(
    () =>
      Object.values(routes)
        .filter((r) => r.path !== "/")
        .map((r) => ({ label: r.label, href: r.path })),
    [],
  );
  const results = query.trim()
    ? all.filter((r) => r.label.toLowerCase().includes(query.trim().toLowerCase()))
    : null;

  useEffect(() => {
    if (!open) return;
    window.__lenis?.stop();
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.__lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      inert={!open}
      className={cn(
        "fixed inset-0 z-[70] flex flex-col bg-accent text-accent-ink transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] lg:hidden",
        open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]",
      )}
    >
      <div className="flex items-center justify-between p-4">
        <span className="rounded-xl bg-white p-1.5"><LogoPlaceholder tone="light" className="w-24" /></span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={copy.header.closeMenu}
          className="flex size-11 items-center justify-center rounded-full bg-accent-ink text-accent"
        >
          <HugeiconsIcon icon={Cancel01Icon} className="size-5" />
        </button>
      </div>

      <div className="px-4">
        <label className="flex items-center gap-3 rounded-full border border-accent-ink/20 bg-accent-ink/5 px-4 py-3">
          <HugeiconsIcon icon={Search01Icon} className="size-5 shrink-0" />
          <span className="sr-only">{copy.header.commandPlaceholder}</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={copy.header.commandPlaceholder}
            className="w-full bg-transparent text-base outline-none placeholder:text-accent-ink/60"
          />
          <kbd className="hidden rounded-md border border-accent-ink/20 px-1.5 text-xs sm:block">⌘K</kbd>
        </label>
      </div>

      <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-6" data-lenis-prevent>
        {results ? (
          results.length ? (
            <ul className="space-y-1">
              {results.map((r) => (
                <li key={r.href}>
                  <Link href={l(r.href)} onClick={onClose} className="flex items-center justify-between rounded-2xl px-3 py-3 text-xl font-semibold hover:bg-accent-ink/5">
                    {r.label}
                    <span className="text-sm font-normal opacity-60">{r.href}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-3 py-3 text-lg">{copy.header.commandEmpty}</p>
          )
        ) : (
          <ul>
            {primary.map((item, i) => (
              <li
                key={item.href}
                className={cn("overflow-hidden border-b border-accent-ink/15")}
              >
                <Link
                  href={l(item.href)}
                  onClick={onClose}
                  className={cn(
                    "flex items-baseline gap-4 py-3 font-serif text-[clamp(2.25rem,10vw,3.5rem)] leading-none transition-transform duration-700 ease-out-expo",
                    open ? "translate-y-0" : "translate-y-full",
                  )}
                  style={{ transitionDelay: open ? `${150 + i * 50}ms` : "0ms" }}
                >
                  <span className="font-sans text-xs font-semibold tabular-nums opacity-60">0{i + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <div className="flex items-center justify-between gap-3 p-4">
        <LanguageSwitcher current={locale} label={copy.header.language} soonLabel={copy.header.languageSoon} className="border-accent-ink/20" />
        <Button href={l("/contact")} variant="solid" onClick={onClose}>
          {copy.header.cta}
        </Button>
      </div>
    </div>
  );
}
