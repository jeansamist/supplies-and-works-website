"use client";

import { useState } from "react";
import cameroon from "@/lib/geo/cameroon.json";
import { cn } from "@/lib/utils";
import { useUi } from "@/components/layout/locale-provider";

/**
 * Cameroon outline with service zones. Hover / focus / tap a city to see its
 * zone. Which cities are served (and the radius of each zone) is set in
 * `ZONES` below. [Confirm the cities and zones you serve.]
 */
const ZONES: Record<string, { radius: number; label: string; head?: boolean }> = {
  douala: { radius: 70, label: "[Coverage to confirm]", head: true },
  yaounde: { radius: 60, label: "[Coverage to confirm]" },
  // Add other cities from lib/geo/cameroon.json, e.g. bafoussam, kribi, garoua…
};

export function CameroonMap() {
  const t = useUi();
  const [active, setActive] = useState("douala");
  const { size, path, cities } = cameroon as { size: number; path: string; cities: { id: string; name: string; x: number; y: number }[] };
  const current = cities.find((c) => c.id === active);

  return (
    <div data-reveal className="grid gap-8 rounded-[2rem] border border-line bg-surface p-6 sm:p-10 md:grid-cols-[1.2fr_1fr] md:items-center">
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label={t.cameroonMap.label}>
        <path d={path} className="fill-bg stroke-fg/30" strokeWidth={2} />
        {cities
          .filter((c) => ZONES[c.id])
          .map((c) => (
            <circle
              key={`z-${c.id}`}
              cx={c.x}
              cy={c.y}
              r={ZONES[c.id].radius}
              className={cn("fill-accent transition-opacity duration-500", active === c.id ? "opacity-50" : "opacity-20")}
            />
          ))}
        {cities.map((c) => {
          const served = !!ZONES[c.id];
          return (
            <g
              key={c.id}
              tabIndex={served ? 0 : -1}
              role={served ? "button" : undefined}
              aria-label={served ? `${c.name}: ${ZONES[c.id].label}` : undefined}
              onMouseEnter={() => served && setActive(c.id)}
              onFocus={() => served && setActive(c.id)}
              onClick={() => served && setActive(c.id)}
              className={cn(served && "cursor-pointer outline-none")}
            >
              <circle cx={c.x} cy={c.y} r={served ? 9 : 5} className={served ? "fill-fg stroke-accent" : "fill-fg/40"} strokeWidth={served ? 4 : 0} />
              <text x={c.x + 14} y={c.y + 6} className={cn("text-[20px]", served ? "fill-fg font-bold" : "fill-fg/50")}>
                {c.name}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="space-y-4" aria-live="polite">
        <p className="text-sm font-semibold tracking-wide text-muted uppercase">{t.cameroonMap.zone}</p>
        <p className="font-serif text-h3">{current?.name}</p>
        <p className="text-muted">
          {ZONES[active]?.head && <span className="font-semibold text-fg">{t.cameroonMap.headOffice} · </span>}
          {ZONES[active]?.label.startsWith("[") ? <span className="ph">{ZONES[active].label}</span> : ZONES[active]?.label}
        </p>
        <ul className="flex flex-wrap gap-2 pt-2">
          {Object.keys(ZONES).map((id) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => setActive(id)}
                className={cn("rounded-full px-4 py-2 text-sm font-semibold transition-colors", active === id ? "bg-accent text-accent-ink" : "border border-line hover:border-fg")}
              >
                {cities.find((c) => c.id === id)?.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
