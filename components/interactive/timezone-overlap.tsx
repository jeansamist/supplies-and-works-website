"use client";

import { useMemo, useState } from "react";
import { useNow } from "@/lib/hooks";
import { useUi } from "@/components/layout/locale-provider";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const CITIES = [
  { name: "", zone: "" }, // visitor's own zone (label from content/ui.ts)
  { name: "Paris / Brussels", zone: "Europe/Paris" },
  { name: "London", zone: "Europe/London" },
  { name: "New York / Toronto", zone: "America/New_York" },
  { name: "Chicago", zone: "America/Chicago" },
  { name: "Los Angeles / Vancouver", zone: "America/Los_Angeles" },
  { name: "Nairobi", zone: "Africa/Nairobi" },
  { name: "Dubai", zone: "Asia/Dubai" },
];

/** Offset of a time zone from UTC, in hours, at a given date (handles daylight saving). */
function offsetHours(zone: string | undefined, date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: zone || undefined, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).formatToParts(date);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"));
  return Math.round((asUtc - date.getTime()) / 36e5 * 2) / 2;
}

/**
 * Pick a city and see a 24-hour timeline (in Douala time) of Douala working
 * hours, your working hours and the overlap between them. Working hours come
 * from content/site.ts → siteConfig.workingHours / visitorHours.
 */
export function TimezoneOverlap({ label }: { label: string }) {
  const t = useUi();
  const cityName = (i: number) => (i === 0 ? t.timezone.yours : CITIES[i].name);
  const [city, setCity] = useState(1);
  const now = useNow();

  const data = useMemo(() => {
    if (!now) return null;
    const yde = offsetHours(siteConfig.timeZone, now);
    const vis = offsetHours(CITIES[city].zone, now);
    const diff = yde - vis; // hours Douala is ahead
    const { start: ys, end: ye } = siteConfig.workingHours;
    const { start: vs, end: ve } = siteConfig.visitorHours;
    // Visitor's working hours, expressed in Douala time.
    const v0 = vs + diff;
    const v1 = ve + diff;
    const o0 = Math.max(ys, v0);
    const o1 = Math.min(ye, v1);
    return { diff, ys, ye, v0, v1, overlap: Math.max(0, o1 - o0), o0, o1 };
  }, [city, now]);

  const pct = (h: number) => `${(Math.min(24, Math.max(0, h)) / 24) * 100}%`;
  const bar = (a: number, b: number) => ({ left: pct(a), width: `calc(${pct(b)} - ${pct(a)})` });

  return (
    <div data-reveal className="space-y-8 rounded-[2rem] border border-line bg-bg p-6 sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label htmlFor="tz-city" className="font-semibold">
          {label}
        </label>
        <select
          id="tz-city"
          value={city}
          onChange={(e) => setCity(Number(e.target.value))}
          className="rounded-full border border-line bg-surface px-5 py-3 font-medium outline-none focus-visible:border-fg"
        >
          {CITIES.map((c, i) => (
            <option key={c.zone || "local"} value={i}>
              {cityName(i)}
            </option>
          ))}
        </select>
      </div>

      {data && (
        <>
          <div className="space-y-4" aria-hidden>
            {[
              { name: "Douala", range: [data.ys, data.ye], tone: "bg-fg" },
              { name: cityName(city), range: [data.v0, data.v1], tone: "bg-fg/30" },
              { name: t.timezone.overlapRow, range: [data.o0, data.o1], tone: "bg-accent" },
            ].map((row) => (
              <div key={row.name} className="grid grid-cols-[7.5rem_1fr] items-center gap-4 sm:grid-cols-[11rem_1fr]">
                <span className="truncate text-sm font-medium text-muted">{row.name}</span>
                <div className="relative h-8 rounded-full bg-surface-2">
                  {row.range[1] > row.range[0] && (
                    <span className={cn("absolute inset-y-1 rounded-full transition-all duration-700 ease-out-expo", row.tone)} style={bar(row.range[0], row.range[1])} />
                  )}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-[7.5rem_1fr] gap-4 sm:grid-cols-[11rem_1fr]">
              <span />
              <div className="flex justify-between text-xs text-muted tabular-nums">
                {[0, 6, 12, 18, 24].map((h) => (
                  <span key={h}>{String(h).padStart(2, "0")}:00</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-lg" aria-live="polite">
            <span className="font-semibold">{cityName(city)}</span>{" "}: {data.diff === 0 ? t.timezone.same : `${Math.abs(data.diff)} h ${data.diff > 0 ? t.timezone.behind : t.timezone.ahead}`} ·{" "}
            <span className="mark font-semibold">{data.overlap} h {t.timezone.overlap}</span> {t.timezone.note}
          </p>
        </>
      )}
    </div>
  );
}
