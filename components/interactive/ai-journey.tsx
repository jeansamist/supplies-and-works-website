"use client";

import { useState } from "react";
import { Rich } from "@/components/ui/rich";
import { cn } from "@/lib/utils";
import { useUi } from "@/components/layout/locale-provider";

type JourneyStep = { title: string; text: string; receive: string };

/**
 * Audit → Roadmap → Implementation → Support. Clickable steps (a proper
 * tablist with arrow-key support); the yellow progress line follows the
 * selected step.
 */
export function AiJourney({ steps, receiveLabel }: { steps: JourneyStep[]; receiveLabel: string }) {
  const [active, setActive] = useState(0);
  const t = useUi();
  const step = steps[active];

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") setActive((a) => (a + 1) % steps.length);
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") setActive((a) => (a - 1 + steps.length) % steps.length);
  };

  return (
    <div data-reveal className="space-y-10">
      <div className="relative">
        <div aria-hidden className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-0.5 bg-line sm:block">
          <div className="h-full origin-left bg-accent transition-transform duration-700 ease-out-expo" style={{ transform: `scaleX(${active / (steps.length - 1)})` }} />
        </div>
        <div role="tablist" aria-label={t.steps} onKeyDown={onKey} className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
          {steps.map((s, i) => (
            <button
              key={s.title}
              role="tab"
              id={`ai-tab-${i}`}
              aria-selected={i === active}
              aria-controls="ai-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className="group flex flex-col items-center gap-3 rounded-3xl p-3 text-center"
            >
              <span
                className={cn(
                  "flex size-12 items-center justify-center rounded-full border-2 font-serif text-xl font-semibold transition-all duration-500",
                  i <= active ? "border-transparent bg-accent text-accent-ink" : "border-line bg-bg text-muted group-hover:border-fg",
                  i === active && "scale-110 ring-8 ring-accent-soft",
                )}
              >
                {i + 1}
              </span>
              <span className={cn("font-serif text-xl transition-colors", i === active ? "text-fg" : "text-muted")}>{s.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        id="ai-panel"
        role="tabpanel"
        aria-labelledby={`ai-tab-${active}`}
        key={active}
        className="grid animate-[fadeUp_.6s_var(--ease-out-expo)] gap-8 rounded-[2rem] border border-line bg-bg p-7 sm:p-10 md:grid-cols-[1.3fr_1fr]"
      >
        <div className="space-y-4">
          <p className="text-sm font-semibold text-muted tabular-nums">
            {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
          </p>
          <h3 className="font-serif text-h3">{step.title}</h3>
          <p className="text-lg text-pretty text-muted">
            <Rich text={step.text} />
          </p>
        </div>
        <div className="rounded-3xl bg-accent p-6 text-accent-ink">
          <p className="text-xs font-semibold tracking-wide uppercase">{receiveLabel}</p>
          <p className="mt-3 font-serif text-2xl text-pretty">{step.receive}</p>
        </div>
      </div>
    </div>
  );
}
