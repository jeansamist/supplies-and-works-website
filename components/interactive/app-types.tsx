"use client";

import { useEffect, useState } from "react";
import { Rich } from "@/components/ui/rich";
import type { Item } from "@/content/types";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useUi } from "@/components/layout/locale-provider";

type Device = "web" | "mobile" | "desktop";

/**
 * Carousel of application types (web, mobile, desktop) with a device mockup
 * for each. Auto-advances until the visitor interacts; arrows, dots and the
 * tab list all switch slides.
 */
export function AppTypes({ items }: { items: (Item & { device: Device })[] }) {
  const t = useUi();
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || prefersReducedMotion()) return;
    const id = window.setInterval(() => setI((x) => (x + 1) % items.length), 4500);
    return () => window.clearInterval(id);
  }, [auto, items.length]);

  const go = (n: number) => {
    setAuto(false);
    setI((n + items.length) % items.length);
  };
  const item = items[i];

  return (
    <div data-reveal className="grid gap-10 rounded-[2rem] border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:items-center" aria-roledescription="carousel">
      <div className="space-y-8">
        <div role="tablist" aria-label={t.carousel.label} className="flex flex-wrap gap-2">
          {items.map((it, n) => (
            <button
              key={it.title}
              role="tab"
              aria-selected={n === i}
              onClick={() => go(n)}
              className={cn("rounded-full px-4 py-2 text-sm font-semibold transition-colors", n === i ? "bg-fg text-bg" : "border border-line hover:border-fg")}
            >
              {it.title}
            </button>
          ))}
        </div>
        <div key={i} className="animate-[fadeUp_.6s_var(--ease-out-expo)] space-y-4" aria-live="polite">
          <h3 className="font-serif text-h3">{item.title}</h3>
          <p className="text-lg text-pretty text-muted">
            <Rich text={item.text ?? ""} />
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => go(i - 1)} aria-label={t.carousel.previous} className="flex size-11 items-center justify-center rounded-full border border-line hover:bg-accent hover:text-accent-ink">
            ←
          </button>
          <button type="button" onClick={() => go(i + 1)} aria-label={t.carousel.next} className="flex size-11 items-center justify-center rounded-full border border-line hover:bg-accent hover:text-accent-ink">
            →
          </button>
          <div className="ml-2 flex gap-1.5" aria-hidden>
            {items.map((_, n) => (
              <span key={n} className={cn("h-1.5 rounded-full transition-all duration-500", n === i ? "w-8 bg-fg dark:bg-accent" : "w-1.5 bg-fg/20")} />
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden className="relative grid min-h-72 place-items-center sm:min-h-96">
        <div key={item.device} className="w-full animate-[fadeUp_.7s_var(--ease-out-expo)]">
          <DeviceMock device={item.device} />
        </div>
      </div>
    </div>
  );
}

function Screen({ rows = 4 }: { rows?: number }) {
  return (
    <div className="space-y-2.5 p-3">
      <div className="flex gap-2">
        <span className="h-3 w-16 rounded-full bg-accent" />
        <span className="h-3 w-10 rounded-full bg-fg/10" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((n) => (
          <span key={n} className={cn("h-10 rounded-lg", n === 0 ? "bg-fg" : "bg-fg/10")} />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, n) => (
        <span key={n} className="block h-3 rounded-full bg-fg/10" style={{ width: `${90 - n * 12}%` }} />
      ))}
    </div>
  );
}

function DeviceMock({ device }: { device: Device }) {
  if (device === "mobile") {
    return (
      <div className="mx-auto w-44 rounded-[2.2rem] border-[6px] border-fg bg-bg p-1.5 shadow-2xl sm:w-52">
        <div className="mx-auto mb-2 h-1.5 w-14 rounded-full bg-fg/20" />
        <Screen rows={7} />
      </div>
    );
  }
  if (device === "desktop") {
    return (
      <div className="mx-auto max-w-md">
        <div className="rounded-xl border-[6px] border-fg bg-bg shadow-2xl">
          <div className="grid grid-cols-[3rem_1fr]">
            <div className="space-y-2 border-r border-line p-2">
              {[0, 1, 2, 3].map((n) => (
                <span key={n} className={cn("block h-6 rounded", n === 1 ? "bg-accent" : "bg-fg/10")} />
              ))}
            </div>
            <Screen rows={5} />
          </div>
        </div>
        <div className="mx-auto h-8 w-16 bg-fg/80" />
        <div className="mx-auto h-2 w-36 rounded-full bg-fg" />
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-lg overflow-hidden rounded-xl border border-line bg-bg shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3 py-2">
        <span className="size-2 rounded-full bg-fg/20" />
        <span className="size-2 rounded-full bg-fg/20" />
        <span className="size-2 rounded-full bg-accent" />
        <span className="ml-3 h-4 flex-1 rounded-full bg-bg" />
      </div>
      <Screen rows={5} />
    </div>
  );
}
