import { Rich } from "@/components/ui/rich";
import { cn } from "@/lib/utils";

export type Stat = { value: string; label: string };

/**
 * Key numbers. Real numbers count up when visible (data-count); placeholders
 * like "[X]" render as placeholder chips until the real figure is set.
 */
export function Stats({ items, className }: { items: Stat[]; className?: string }) {
  return (
    <dl
      data-reveal="stagger"
      className={cn("grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5", className)}
    >
      {items.map((s) => (
        <div key={s.label} className="group flex flex-col justify-between gap-6 bg-bg p-6 transition-colors duration-500 hover:bg-surface sm:p-8">
          <dt className="order-2 text-sm text-pretty text-muted sm:text-base">{s.label}</dt>
          <dd className="order-1 font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
            {/^\[.*\]$/.test(s.value) ? (
              <Rich text={s.value} />
            ) : (
              <span data-count className="dark:text-accent">
                {s.value}
              </span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
