"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { Rich } from "@/components/ui/rich";
import { useUi } from "@/components/layout/locale-provider";

/**
 * Draggable before/after comparison. Drag the handle (mouse/touch) or use the
 * arrow keys. Placeholder panels until real screenshots are provided: pass
 * `before` / `after` nodes (e.g. <Image />) to replace them.
 */
export function BeforeAfter({
  beforeLabel,
  afterLabel,
  before,
  after,
}: {
  beforeLabel: string;
  afterLabel: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
}) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  const down = (e: PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    update(e.clientX);
  };
  const move = (e: PointerEvent) => dragging.current && update(e.clientX);
  const up = () => (dragging.current = false);
  const key = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={box}
      data-reveal
      data-cursor="drag"
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      className="relative aspect-[16/10] touch-pan-y overflow-hidden rounded-[2rem] border border-line select-none"
    >
      {/* After (full) */}
      <div className="absolute inset-0">{after ?? <MockSite variant="after" label={afterLabel} />}</div>
      {/* Before (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {before ?? <MockSite variant="before" label={beforeLabel} />}
      </div>
      {/* Handle */}
      <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-accent" style={{ left: `${pos}%` }}>
        <button
          type="button"
          role="slider"
          aria-label={`${beforeLabel} / ${afterLabel}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={key}
          className="absolute top-1/2 left-1/2 flex size-14 -translate-1/2 items-center justify-center rounded-full bg-accent text-accent-ink shadow-xl"
        >
          ⟷
        </button>
      </div>
      <span className="absolute top-4 left-4 rounded-full bg-[#0a0a0a] px-3 py-1 text-xs font-semibold text-[#ededed]">{beforeLabel}</span>
      <span className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink">{afterLabel}</span>
    </div>
  );
}

function MockSite({ variant, label }: { variant: "before" | "after"; label: string }) {
  const t = useUi();
  if (variant === "before") {
    return (
      <div className="grid size-full grid-rows-[auto_1fr] bg-[#e9e6df] p-6 font-[Times,serif] text-[#333] sm:p-10">
        <div className="flex items-center justify-between border-b-2 border-[#999] pb-3">
          <span className="text-xl underline">{t.beforeAfter.company}</span>
          <span className="hidden gap-3 text-sm text-[#0000ee] underline sm:flex">
            {t.beforeAfter.nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </div>
        <div className="grid place-items-center text-center">
          <Rich text={`[${label}: ${t.beforeAfter.oldShot}]`} />
        </div>
      </div>
    );
  }
  return (
    <div className="grid size-full grid-rows-[auto_1fr] bg-[#0a0a0a] p-6 text-[#ededed] sm:p-10">
      <div className="flex items-center justify-between">
        <span className="h-4 w-24 rounded-full bg-accent" />
        <span className="hidden gap-3 sm:flex">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2 w-12 rounded-full bg-white/30" />
          ))}
          <span className="h-6 w-20 rounded-full bg-accent" />
        </span>
      </div>
      <div className="grid content-center gap-4">
        <span className="h-6 w-3/4 rounded-full bg-white sm:h-10" />
        <span className="h-6 w-1/2 rounded-full bg-white/70 sm:h-10" />
        <span className="mt-2 text-sm text-[#edededb3]">
          <Rich text={`[${label}: ${t.beforeAfter.newShot}]`} />
        </span>
      </div>
    </div>
  );
}
