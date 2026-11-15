"use client";

import { ArrowDown01Icon, ArrowRight02Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useSitePathname } from "@/lib/hooks";
import { useEffect, useId, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/layout/theme";
import { Button } from "@/components/ui/button";
import { LogoPlaceholder } from "@/components/ui/logo-placeholder";
import type { SiteCopy } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Menu = "services" | "products" | null;

/**
 * Full-width bar. Transparent over the page hero; once the hero has scrolled
 * past it turns solid (background, border, shadow — never translucent).
 * Hides when scrolling down, comes back when scrolling up. Services and Products open mega-menus on hover, focus or click.
 */
export function SiteHeader({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const pathname = useSitePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<Menu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const panelId = useId();
  const l = (p: string) => localePath(locale, p);

  useEffect(() => {
    let last = window.scrollY;
    // The hero is the first section of the page; the bar turns solid once
    // 20% of it has scrolled by.
    const heroEnd = () => {
      const hero = document.querySelector<HTMLElement>("#main section");
      if (!hero) return 24;
      const top = hero.getBoundingClientRect().top + window.scrollY;
      return Math.max(24, top + hero.offsetHeight * 0.2);
    };
    let threshold = heroEnd();
    const onResize = () => {
      threshold = heroEnd();
      onScroll();
    };
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > threshold);
      if (Math.abs(y - last) < 6) return;
      // Only hide once the bar is solid, so it never vanishes over the hero.
      setHidden(y > last && y > threshold + 80);
      if (y > last) setMenu(null);
      last = y;
    };
    onScroll();
    // Measure again once fonts/images have settled the layout.
    const t = window.setTimeout(onResize, 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  // Close menus on navigation (adjusting state during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  const open = (m: Menu) => {
    window.clearTimeout(closeTimer.current);
    setMenu(m);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenu(null), 160);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 isolate transition-transform ease-out-expo",
          // Scrolling up: slides down from the top (slower, softer); scrolling down: tucks away.
          hidden && !mobileOpen ? "-translate-y-full duration-500" : "translate-y-0 duration-700",
        )}
        onMouseLeave={scheduleClose}
      >
        {/* Solid background (never translucent). It wipes in from top to bottom
            when the bar takes its style, and wipes back up over the hero. */}
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 -z-10 border-b border-line bg-bg shadow-[0_8px_30px_-18px_rgba(0,0,0,0.25)] transition-[clip-path,opacity] duration-700 ease-out-expo",
            scrolled || menu || mobileOpen ? "opacity-100 [clip-path:inset(0_0_-40px_0)]" : "opacity-0 [clip-path:inset(0_0_100%_0)]",
          )}
        />
        <div
          className={cn(
            "relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6",
          )}
        >
          <Link href={l("/")} className="flex shrink-0 items-center" aria-label="Supplies and Works, home" data-cursor="link">
            <LogoPlaceholder priority className="w-24 sm:w-28" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {copy.header.nav.map((item) =>
              item.menu ? (
                <div key={item.label} onMouseEnter={() => open(item.menu!)} className="relative">
                  <button
                    type="button"
                    aria-expanded={menu === item.menu}
                    aria-controls={panelId}
                    onClick={() => setMenu(menu === item.menu ? null : item.menu!)}
                    onFocus={() => open(item.menu!)}
                    data-cursor="link"
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors",
                      menu === item.menu || isActive(item.href) ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      className={cn("size-4 transition-transform duration-300", menu === item.menu && "rotate-180")}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={l(item.href)}
                  onMouseEnter={() => setMenu(null)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  data-cursor="link"
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors",
                    isActive(item.href) ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span aria-hidden className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent ring-2 ring-accent-soft" />
                  )}
                </Link>
              ),
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <LanguageSwitcher
              current={locale}
              label={copy.header.language}
              soonLabel={copy.header.languageSoon}
              className="hidden sm:flex"
            />
            <ThemeToggle label={copy.header.theme} />
            <div className="hidden sm:block">
              <Button href={l("/contact")} size="sm" magnetic>
                {copy.header.cta}
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label={copy.header.openMenu}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="flex size-10 items-center justify-center rounded-full bg-fg text-bg lg:hidden"
            >
              <HugeiconsIcon icon={Menu01Icon} className="size-5" />
            </button>
          </div>

          {/* Mega-menu */}
          <div
            id={panelId}
            onMouseEnter={() => window.clearTimeout(closeTimer.current)}
            className={cn(
              "absolute inset-x-4 top-full hidden pt-3 sm:inset-x-6 lg:block",
              menu ? "pointer-events-auto" : "pointer-events-none",
            )}
          >
            <div
              className={cn(
                "overflow-hidden rounded-[2rem] border border-line bg-bg p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] transition-[opacity,transform] duration-500 ease-out-expo",
                menu ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
              )}
              inert={!menu}
            >
              {menu === "services" && (
                <div className="grid grid-cols-[1fr_1fr_0.9fr] gap-2">
                  {copy.servicesMenu.items.map((item, i) => (
                    <MegaLink key={item.href} {...item} href={l(item.href)} index={i + 1} />
                  ))}
                  <div className="row-span-3 row-start-1 flex flex-col justify-between rounded-3xl bg-accent p-6 text-accent-ink [grid-column:3]">
                    <p className="font-serif text-2xl leading-snug text-balance">{copy.servicesMenu.side.text}</p>
                    <Link
                      href={l(copy.servicesMenu.side.href)}
                      data-cursor="link"
                      className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-accent-ink px-5 py-3 font-semibold text-accent transition-transform hover:scale-[1.03]"
                    >
                      {copy.servicesMenu.side.cta}
                      <HugeiconsIcon icon={ArrowRight02Icon} className="size-4" />
                    </Link>
                  </div>
                </div>
              )}
              {menu === "products" && (
                <div className="grid grid-cols-3 gap-2">
                  {copy.productsMenu.items.map((item, i) => (
                    <MegaLink key={item.href} {...item} href={l(item.href)} index={i + 1} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} copy={copy} locale={locale} />
    </>
  );
}

function MegaLink({ href, label, description, index }: { href: string; label: string; description?: string; index: number }) {
  return (
    <Link
      href={href}
      data-cursor="link"
      className="group/mega relative flex flex-col gap-2 overflow-hidden rounded-3xl p-5 transition-colors duration-300 hover:bg-surface-2 focus-visible:bg-surface-2"
    >
      <span className="text-xs font-semibold text-muted tabular-nums">0{index}</span>
      <span className="flex items-center gap-2 font-serif text-2xl">
        {label}
        <HugeiconsIcon
          icon={ArrowRight02Icon}
          className="size-5 -translate-x-2 opacity-0 transition-all duration-500 ease-out-expo group-hover/mega:translate-x-0 group-hover/mega:opacity-100"
        />
      </span>
      {description && <span className="text-sm text-pretty text-muted">{description}</span>}
      <span aria-hidden className="absolute inset-x-5 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-expo group-hover/mega:scale-x-100" />
    </Link>
  );
}
