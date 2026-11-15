"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/lib/hooks";
import { gsap } from "@/lib/motion";
import { cn } from "@/lib/utils";

type CursorState = "default" | "link" | "view" | "drag";

/**
 * Custom cursor (fine pointers only). Elements choose the state with
 * data-cursor="link" | "view" | "drag"; links and buttons default to "link".
 */
export function CursorFollower() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>("default");
  const enabled = useMediaQuery("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cursor");

    const dx = gsap.quickTo(dot.current, "x", { duration: 0.08, ease: "power3" });
    const dy = gsap.quickTo(dot.current, "y", { duration: 0.08, ease: "power3" });
    const rx = gsap.quickTo(ring.current, "x", { duration: 0.45, ease: "power3" });
    const ry = gsap.quickTo(ring.current, "y", { duration: 0.45, ease: "power3" });

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      setHidden(false);
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
      const target = (e.target as Element | null)?.closest<HTMLElement>("[data-cursor], a, button, summary, label, [role=button]");
      const s = (target?.dataset.cursor as CursorState | undefined) ?? (target ? "link" : "default");
      setState(s);
    };
    const leave = () => setHidden(true);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className={cn("cursor-host pointer-events-none fixed inset-0 z-[90] transition-opacity", hidden && "opacity-0")}>
      <div ref={ring} className="absolute top-0 left-0">
        <div
          className={cn(
            "flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-semibold tracking-wide uppercase transition-[width,height,background-color,border-color] duration-300 ease-out-expo",
            state === "default" && "size-9 border border-fg/40",
            state === "link" && "size-16 border border-accent bg-accent-soft",
            (state === "view" || state === "drag") && "size-24 bg-accent text-accent-ink",
          )}
        >
          {state === "view" && "View"}
          {state === "drag" && "Drag"}
        </div>
      </div>
      <div ref={dot} className="absolute top-0 left-0">
        <div
          className={cn(
            "size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fg transition-transform duration-200",
            state !== "default" && "scale-0",
          )}
        />
      </div>
    </div>
  );
}
