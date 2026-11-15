import { CloudServerIcon, LockIcon, ServerStack01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { cn } from "@/lib/utils";

/**
 * Animated diagram: office server → encrypted tunnel → cloud storage.
 * Data packets travel continuously along the link (CSS only, so it costs
 * nothing to hydrate; stops with reduced motion). Horizontal on desktop,
 * vertical on mobile.
 */
export function BackupDiagram({
  labels = { server: "Office server", tunnel: "Encrypted tunnel", cloud: "Cloud storage" },
  className,
}: {
  labels?: { server: string; tunnel: string; cloud: string };
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${labels.server} → ${labels.tunnel} → ${labels.cloud}`}
      className={cn("relative rounded-[2rem] border border-line bg-surface p-6 sm:p-10", className)}
    >
      <div aria-hidden className="relative flex flex-col items-center gap-16 md:flex-row md:justify-between md:gap-4">
        {/* Link track */}
        <div className="absolute top-8 bottom-8 left-1/2 w-0.5 -translate-x-1/2 md:top-1/2 md:right-[12%] md:bottom-auto md:left-[12%] md:h-0.5 md:w-auto md:translate-x-0 md:-translate-y-1/2">
          <div className="absolute inset-0 [background:repeating-linear-gradient(180deg,var(--border)_0_8px,transparent_8px_14px)] md:[background:repeating-linear-gradient(90deg,var(--border)_0_8px,transparent_8px_14px)]" />
          {/* Encrypted segment */}
          <div className="absolute inset-y-[30%] -inset-x-[3px] rounded-full bg-accent md:inset-x-[30%] md:-inset-y-[3px]" />
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="packet absolute size-2.5 rounded-[3px] bg-fg dark:bg-accent"
              style={{ animationDelay: `${i * 0.75}s` }}
            />
          ))}
        </div>

        <Node icon={ServerStack01Icon} label={labels.server} />
        <Node icon={LockIcon} label={labels.tunnel} accent />
        <Node icon={CloudServerIcon} label={labels.cloud} />
      </div>
    </div>
  );
}

function Node({ icon, label, accent }: { icon: IconSvgElement; label: string; accent?: boolean }) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-3 bg-surface px-3">
      <span
        className={cn(
          "relative flex size-16 items-center justify-center rounded-2xl border sm:size-20",
          accent ? "border-transparent bg-accent text-accent-ink" : "border-line bg-bg",
        )}
      >
        {accent && <span className="absolute inset-0 animate-ping rounded-2xl bg-accent opacity-30" />}
        <HugeiconsIcon icon={icon} className="relative size-7 sm:size-8" />
      </span>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}
