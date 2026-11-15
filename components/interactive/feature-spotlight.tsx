"use client";

import { useEffect, useRef, useState } from "react";
import { ProductMockup, type MockupKind } from "@/components/interactive/product-mockup";
import { Rich } from "@/components/ui/rich";
import type { Item } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Product features that light up one by one as they cross the middle of the
 * screen, next to a sticky, tiltable product mockup with tabs.
 */
export function FeatureSpotlight({ items, kind }: { items: Item[]; kind: MockupKind }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <ProductMockup kind={kind} tabs />
      </div>
      <ol className="space-y-3">
        {items.map((it, i) => (
          <li
            key={it.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-i={i}
            className={cn(
              "rounded-3xl border p-7 transition-all duration-500 ease-out-expo",
              i === active ? "border-transparent bg-accent text-accent-ink lg:translate-x-2" : "border-line text-fg/60",
            )}
          >
            <div className="flex gap-5">
              <span className="pt-1 text-sm font-semibold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl">
                  <Rich text={it.title} mark={false} />
                </h3>
                <p className={cn(i === active ? "opacity-85" : "")}>
                  <Rich text={it.text ?? ""} />
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
