import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Rich } from "@/components/ui/rich";

/**
 * Big list of industries. Hover (or focus) slides a yellow band in from the
 * left and reveals a one-line example of how we help.
 */
export function IndustriesList({ items }: { items: { name: string; example: string }[] }) {
  return (
    <ul data-reveal="stagger" className="border-t border-line">
      {items.map((item, i) => (
        <li key={item.name}>
          <div
            tabIndex={0}
            className="group/ind relative isolate grid gap-2 overflow-hidden border-b border-line px-2 py-6 outline-none sm:grid-cols-[3rem_1fr_1fr] sm:items-center sm:gap-6 sm:px-4"
          >
            <span aria-hidden className="absolute inset-0 -z-10 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out-expo group-hover/ind:scale-x-100 group-focus-visible/ind:scale-x-100" />
            <span className="hidden text-sm font-semibold text-muted tabular-nums transition-colors group-hover/ind:text-accent-ink sm:block">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-serif text-[clamp(1.6rem,1.2rem+1.6vw,2.75rem)] leading-tight transition-[color,transform] duration-500 ease-out-expo group-hover/ind:translate-x-2 group-hover/ind:text-accent-ink group-focus-visible/ind:text-accent-ink">
              {item.name}
            </span>
            <span className="flex items-center justify-between gap-4 text-muted transition-all duration-500 ease-out-expo group-hover/ind:text-accent-ink sm:translate-y-3 sm:opacity-0 sm:group-hover/ind:translate-y-0 sm:group-hover/ind:opacity-100 sm:group-focus-visible/ind:translate-y-0 sm:group-focus-visible/ind:opacity-100">
              <Rich text={item.example} />
              <HugeiconsIcon icon={ArrowUpRight01Icon} aria-hidden className="size-6 shrink-0" />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
