import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Rich } from "@/components/ui/rich";
import { cn } from "@/lib/utils";

export type Faq = { q: string; a: string };

/**
 * FAQ accordion built on <details>, so it works without JavaScript and is
 * keyboard accessible. The open/close height is animated with CSS
 * (interpolate-size where supported).
 */
export function Accordion({ items, className }: { items: Faq[]; className?: string }) {
  return (
    <div data-reveal="stagger" className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => (
        <details
          key={item.q}
          name="faq"
          className="group/faq [interpolate-size:allow-keywords] details-content:h-0 details-content:overflow-hidden details-content:transition-[height,content-visibility] details-content:duration-500 details-content:ease-out-expo details-content:[transition-behavior:allow-discrete] open:details-content:h-auto"
        >
          <summary
            data-cursor="link"
            className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold transition-colors hover:text-fg sm:text-xl [&::-webkit-details-marker]:hidden"
          >
            <span className="text-pretty">{item.q}</span>
            <span
              aria-hidden
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 ease-out-expo group-open/faq:rotate-45 group-open/faq:border-transparent group-open/faq:bg-accent group-open/faq:text-accent-ink"
            >
              <HugeiconsIcon icon={Add01Icon} className="size-4" strokeWidth={2} />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 text-base leading-relaxed text-pretty text-muted sm:text-lg">
            <Rich text={item.a} />
          </p>
        </details>
      ))}
    </div>
  );
}
