"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Target = { name: string; text: string };

/**
 * RPO / RTO explainer. For each objective the visitor picks one of the
 * examples from the copy ("one hour", "one day"); a gauge shows the window.
 * The "[to define with you]" chip marks the client's real target.
 */
export function RpoRto({ rpo, rto, examples }: { rpo: Target; rto: Target; examples: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Dial target={rpo} examples={examples} kind="RPO" />
      <Dial target={rto} examples={examples} kind="RTO" />
    </div>
  );
}

function Dial({ target, examples, kind }: { target: Target; examples: string[]; kind: string }) {
  const [i, setI] = useState(0);
  const fill = i === 0 ? 1 / 24 : 1;
  const C = 2 * Math.PI * 70;
  return (
    <div data-reveal className="flex flex-col gap-8 rounded-[2rem] border border-line bg-bg p-7 sm:p-9">
      <div className="flex items-center gap-6">
        <svg viewBox="0 0 160 160" className="size-32 shrink-0 -rotate-90" aria-hidden>
          <circle cx="80" cy="80" r="70" fill="none" className="stroke-line" strokeWidth="14" />
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            className="stroke-accent transition-[stroke-dashoffset] duration-1000 ease-out-expo"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C * (1 - Math.max(fill, 0.04))}
          />
        </svg>
        <div>
          <p className="font-serif text-5xl font-semibold">{kind}</p>
          <p className="mt-1 text-muted" aria-live="polite">
            e.g. <strong className="text-fg">{examples[i]}</strong>
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">{target.name}</h3>
        <p className="text-muted">{target.text}</p>
      </div>
      <div role="radiogroup" aria-label={`${kind} example`} className="flex gap-2">
        {examples.map((e, n) => (
          <button
            key={e}
            role="radio"
            aria-checked={n === i}
            type="button"
            onClick={() => setI(n)}
            className={cn("rounded-full px-4 py-2 text-sm font-semibold transition-colors", n === i ? "bg-fg text-bg" : "border border-line hover:border-fg")}
          >
            {e}
          </button>
        ))}
        <span className="ph ml-auto self-center">[Your target]</span>
      </div>
    </div>
  );
}
