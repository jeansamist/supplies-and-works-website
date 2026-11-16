"use client";

import Link from "next/link";
import { useRef, useState, type PointerEvent } from "react";
import { WorkCover } from "@/components/ui/work-cover";
import { Rich } from "@/components/ui/rich";
import type { CaseStudy } from "@/content/work";
import { localePath, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const hrefFor = (item: CaseStudy) => item.href ?? `${routes.work.path}/${item.slug}`;

/** One project card: photo goes to full colour on hover, a yellow pill shows the key result. */
export function WorkCard({ item, locale, className }: { item: CaseStudy; locale: Locale; className?: string }) {
  return (
    <Link href={localePath(locale, hrefFor(item))} data-cursor="view" className={cn("group block space-y-4", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
        <WorkCover item={item} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw" className="size-full" imgClassName="group-hover:scale-105" />
        <span className="absolute bottom-4 left-4 max-w-[85%] translate-y-3 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink opacity-0 shadow-lg transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-sm:translate-y-0 max-sm:opacity-100">
          <Rich text={item.result} mark={false} />
        </span>
      </div>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-2xl">
          <Rich text={item.name} mark={false} />
        </h3>
        <p className="pt-1.5 text-right text-sm text-muted">
          <Rich text={item.sector} /> · <Rich text={item.studio} />
        </p>
      </div>
    </Link>
  );
}

/** Horizontal, draggable carousel (home "Selected work"). Native scroll + pointer drag. */
export function WorkCarousel({ items, locale }: { items: CaseStudy[]; locale: Locale }) {
  const ref = useRef<HTMLUListElement>(null);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  const down = (e: PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    drag.current = { x: e.clientX, left: ref.current.scrollLeft, moved: false };
  };
  const move = (e: PointerEvent<HTMLUListElement>) => {
    if (!drag.current || !ref.current) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 5) drag.current.moved = true;
    ref.current.scrollLeft = drag.current.left - dx;
  };
  const up = () => setTimeout(() => (drag.current = null));

  return (
    <ul
      ref={ref}
      data-cursor="drag"
      data-lenis-prevent-wheel=""
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerLeave={up}
      onClickCapture={(e) => drag.current?.moved && e.preventDefault()}
      className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:px-6 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item) => (
        <li key={item.slug} className="w-[82vw] shrink-0 snap-start sm:w-[26rem] lg:w-[30rem]">
          <WorkCard item={item} locale={locale} />
        </li>
      ))}
    </ul>
  );
}

/** Filterable grid (/work). Cards re-flow with a fade when the filter changes. */
export function WorkGrid({ items, filters, locale }: { items: CaseStudy[]; filters: readonly string[]; locale: Locale }) {
  const [active, setActive] = useState(filters[0]);
  const visible = active === filters[0] ? items : items.filter((i) => (i.filters as string[]).includes(active));

  return (
    <div className="space-y-12">
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300",
              active === f ? "border-transparent bg-accent text-accent-ink" : "border-line hover:border-fg",
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <ul key={active} className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, i) => (
          <li key={item.slug} className="animate-[fadeUp_.7s_var(--ease-out-expo)_both]" style={{ animationDelay: `${i * 70}ms` }}>
            <WorkCard item={item} locale={locale} />
          </li>
        ))}
      </ul>
      {visible.length === 0 && <p className="text-muted">No projects in this category yet.</p>}
    </div>
  );
}
