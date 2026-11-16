"use client";

import { useRef, useState, type PointerEvent } from "react";
import { cn } from "@/lib/utils";
import { useUi } from "@/components/layout/locale-provider";

export type MockupKind = "badibo" | "kira";

/**
 * Illustrative product interface (no real data, skeleton UI) that tilts in 3D
 * with the cursor. With `tabs`, a tab bar switches the screen ("Menu",
 * "Orders", "Reports"…). Replace with real screenshots when available.
 */
export function ProductMockup({ kind, tabs = false, className }: { kind: MockupKind; tabs?: boolean; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState(0);
  const t = useUi();
  const names = t.mockup[kind];

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current?.style.setProperty("transform", `perspective(1100px) rotateX(${y * -12}deg) rotateY(${x * 14}deg) translateZ(0)`);
    ref.current?.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    ref.current?.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  }
  function onLeave() {
    ref.current?.style.setProperty("transform", "perspective(1100px) rotateX(6deg) rotateY(-8deg)");
  }

  return (
    <div className={cn("relative", className)} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div
        ref={ref}
        className="relative overflow-hidden rounded-2xl border border-line bg-bg shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out-expo will-change-transform"
        style={{ transform: "perspective(1100px) rotateX(6deg) rotateY(-8deg)" }}
      >
        {/* Glare */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-10 [background:radial-gradient(600px_circle_at_var(--gx,30%)_var(--gy,20%),rgba(255,255,255,.18),transparent_40%)]" />
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
          <span className="size-2.5 rounded-full bg-fg/15" />
          <span className="size-2.5 rounded-full bg-fg/15" />
          <span className="size-2.5 rounded-full bg-accent" />
          <span className="ml-3 text-xs font-semibold capitalize">{kind}</span>
          {tabs ? (
            <div role="tablist" aria-label={`${kind} ${t.mockup.screens}`} className="ml-auto flex gap-1 rounded-full bg-surface-2 p-0.5">
              {names.map((n, i) => (
                <button
                  key={n}
                  role="tab"
                  type="button"
                  aria-selected={tab === i}
                  onClick={() => setTab(i)}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                    tab === i ? "bg-fg text-bg" : "text-muted hover:text-fg",
                  )}
                >
                  {n}
                </button>
              ))}
            </div>
          ) : (
            <span className="ml-auto h-2 w-16 rounded-full bg-fg/10" />
          )}
        </div>
        <div aria-hidden className="grid min-h-64 grid-cols-[3.5rem_1fr] sm:min-h-80">
          <div className="space-y-3 border-r border-line bg-surface p-3">
            {names.map((n, i) => (
              <span key={n} className={cn("block h-8 rounded-lg", i === tab ? "bg-accent" : "bg-fg/8")} />
            ))}
          </div>
          <div key={tab} className="animate-[fadeUp_.5s_var(--ease-out-expo)] p-4 sm:p-5">
            <Screen kind={kind} tab={tab} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Screen({ kind, tab }: { kind: MockupKind; tab: number }) {
  // Grid of items (menu / products)
  if (tab === 0) {
    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={cn("h-6 rounded-full", i === 0 ? "w-16 bg-fg" : "w-14 bg-fg/10")} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-2 rounded-xl border border-line p-2.5">
              <div className={cn("aspect-[4/3] rounded-lg", i === 1 ? "bg-accent" : "bg-surface-2")} />
              <div className="h-2 w-3/4 rounded-full bg-fg/20" />
              <div className="h-2 w-1/3 rounded-full bg-fg/10" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  // Rows (orders / stock)
  if (tab === 1) {
    return (
      <div className="space-y-2.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl border border-line p-3">
            <span className="size-7 shrink-0 rounded-lg bg-surface-2" />
            <span className="h-2 flex-1 rounded-full bg-fg/15" />
            <span className="h-2 w-10 rounded-full bg-fg/10" />
            <span
              className={cn(
                "h-5 w-14 rounded-full",
                kind === "kira" && i === 2 ? "bg-danger/30" : i % 3 === 0 ? "bg-accent" : "bg-fg/10",
              )}
            />
          </div>
        ))}
      </div>
    );
  }
  // Reports
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-2 rounded-xl border border-line p-3">
            <div className="h-2 w-1/2 rounded-full bg-fg/10" />
            <div className={cn("h-4 w-3/4 rounded-full", i === 0 ? "bg-accent" : "bg-fg/20")} />
          </div>
        ))}
      </div>
      <div className="flex h-36 items-end gap-2 rounded-xl border border-line p-3">
        {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
          <span key={i} className={cn("flex-1 rounded-t-md", i === 5 ? "bg-accent" : "bg-fg/15")} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}
