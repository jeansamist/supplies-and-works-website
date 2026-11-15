"use client";

import { useEffect, useRef } from "react";
import { LogoPlaceholder } from "@/components/ui/logo-placeholder";
import { gsap } from "@/lib/motion";

/**
 * Branded entry screen: logo, 0→100 counter, then a yellow curtain lifts.
 * Shown once per session, 1.4 s max. The inline script in the layout adds
 * `no-loader` to <html> before paint when it should be skipped (already seen
 * this session, or reduced motion), so it never flashes.
 */

export function Loader({ label }: { label: string }) {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || document.documentElement.classList.contains("no-loader")) return;
    const obj = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        el.style.display = "none";
        window.dispatchEvent(new Event("sw:loaded"));
      },
    });
    tl.to(obj, {
      v: 100,
      duration: 0.95,
      ease: "power2.inOut",
      onUpdate: () => {
        if (count.current) count.current.textContent = String(Math.round(obj.v)).padStart(3, "0");
      },
    })
      .to(el.querySelector("[data-loader-content]"), { yPercent: -40, opacity: 0, duration: 0.35, ease: "power2.in" }, "-=0.1")
      .to(el.querySelector("[data-loader-yellow]"), { yPercent: -100, duration: 0.6, ease: "expo.inOut" }, "-=0.2")
      .to(el, { yPercent: -100, duration: 0.6, ease: "expo.inOut" }, "-=0.45");
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={root}
      role="status"
      aria-label={label}
      className="loader fixed inset-0 z-[100] flex items-end justify-between bg-[#0a0a0a] p-6 text-[#ededed] sm:p-10 [html.no-loader_&]:hidden"
    >
      <div data-loader-yellow className="absolute inset-0 translate-y-full bg-accent" />
      <div data-loader-content className="relative flex w-full items-end justify-between">
        <LogoPlaceholder tone="dark" className="w-36 sm:w-48" />
        <span ref={count} className="font-serif text-7xl font-semibold tabular-nums sm:text-9xl">
          000
        </span>
      </div>
    </div>
  );
}
