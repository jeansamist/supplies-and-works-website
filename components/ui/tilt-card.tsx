"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  className?: string;
  children: ReactNode;
  /** Max tilt in degrees (0 = glow only, like the portfolio GlowCard). */
  tilt?: number;
  /** Glow colour, defaults to the brand yellow. */
  color?: string;
  as?: "article" | "div" | "li";
};

/**
 * The portfolio's GlowCard (blurred glow following the pointer) plus a light
 * 3D tilt and a glare. CSS variables are written directly, so moving the
 * pointer never re-renders React. Tilt is skipped for touch and reduced motion.
 */
export function TiltCard({ className, children, tilt = 6, color, as: Tag = "article" }: TiltCardProps) {
  function onMove(e: PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    if (tilt && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--rx", `${((y / r.height) - 0.5) * -tilt}deg`);
      el.style.setProperty("--ry", `${((x / r.width) - 0.5) * tilt}deg`);
    }
  }
  function onLeave(e: PointerEvent<HTMLElement>) {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  }

  return (
    <Tag
      onPointerEnter={onMove}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ "--glow-color": color || "var(--accent)", "--x": "50%", "--y": "50%", "--rx": "0deg", "--ry": "0deg" } as CSSProperties}
      className={cn(
        "group relative isolate overflow-hidden rounded-3xl border border-line bg-bg transition-[transform,border-color] duration-500 ease-out-expo [transform:perspective(900px)_rotateX(var(--rx))_rotateY(var(--ry))] hover:border-[color-mix(in_srgb,var(--glow-color)_55%,transparent)] focus-within:border-[color-mix(in_srgb,var(--glow-color)_55%,transparent)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        <div className="absolute top-0 left-0 -mt-32 -ml-32 size-64 translate-x-(--x) translate-y-(--y) rounded-full bg-(--glow-color) opacity-25 blur-3xl will-change-transform" />
      </div>
      {/* Glare */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(400px_circle_at_var(--x)_var(--y),rgba(255,255,255,.35),transparent_45%)]"
      />
      {children}
    </Tag>
  );
}
