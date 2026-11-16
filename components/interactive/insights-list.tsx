"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useUi } from "@/components/layout/locale-provider";

/** Category filter + list of upcoming article ideas. */
export function InsightsList({
  categories,
  ideas,
  label,
}: {
  categories: string[];
  ideas: { title: string; category: string }[];
  label: string;
}) {
  const [active, setActive] = useState(categories[0]);
  const t = useUi();
  const list = active === categories[0] ? ideas : ideas.filter((i) => i.category === active);
  return (
    <div className="space-y-10">
      <div role="group" aria-label={t.categories} className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={cn("rounded-full px-5 py-2.5 text-sm font-semibold transition-colors", active === c ? "bg-accent text-accent-ink" : "border border-line hover:border-fg")}
          >
            {c}
          </button>
        ))}
      </div>
      <ul key={active} className="divide-y divide-line border-y border-line">
        {list.map((idea, i) => (
          <li
            key={idea.title}
            className="group grid animate-[fadeUp_.5s_var(--ease-out-expo)_both] gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-center"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <p className="font-serif text-2xl text-pretty transition-transform duration-500 ease-out-expo group-hover:translate-x-2 sm:text-3xl">{idea.title}</p>
            <p className="flex items-center gap-3 text-sm text-muted">
              {idea.category && <span className="rounded-full border border-line px-3 py-1">{idea.category}</span>}
              <span>{label}</span>
            </p>
          </li>
        ))}
      </ul>
      {list.length === 0 && <p className="text-muted">—</p>}
    </div>
  );
}
