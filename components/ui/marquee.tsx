import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Infinite marquee (pure CSS). The track is duplicated so it loops seamlessly;
 * hovering pauses it. The duplicate is hidden from assistive tech.
 */
export function Marquee({
  items,
  className,
  itemClassName,
  separator = "·",
  duration = 40,
  reverse,
  pauseOnHover = true,
  label,
}: {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
  separator?: ReactNode;
  /** Seconds per loop. */
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  /** Accessible name for the list. */
  label?: string;
}) {
  const track = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      aria-label={hidden ? undefined : label}
      className="flex shrink-0 items-center"
    >
      {items.map((item, i) => (
        <li key={i} className={cn("flex shrink-0 items-center", itemClassName)}>
          <span>{item}</span>
          <span aria-hidden className="px-6 text-muted sm:px-10">
            {separator}
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div
      className={cn(
        "group/marquee relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover/marquee:[animation-play-state:paused]",
        )}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
}
