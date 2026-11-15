"use client";

import { useEffect } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

/** Easter egg: the Konami code makes it rain yellow dots. */
export function Extras() {
  useEffect(() => {
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      i = e.key === KONAMI[i] ? i + 1 : e.key === KONAMI[0] ? 1 : 0;
      if (i < KONAMI.length) return;
      i = 0;
      if (prefersReducedMotion()) return;
      const layer = document.createElement("div");
      layer.setAttribute("aria-hidden", "true");
      layer.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:99;overflow:hidden";
      document.body.appendChild(layer);
      for (let n = 0; n < 140; n++) {
        const d = document.createElement("span");
        const s = 6 + Math.random() * 16;
        d.style.cssText = `position:absolute;top:-30px;left:${Math.random() * 100}%;width:${s}px;height:${s}px;border-radius:50%;background:#FCEE21`;
        layer.appendChild(d);
        gsap.to(d, {
          y: innerHeight + 60,
          x: (Math.random() - 0.5) * 120,
          duration: 1.6 + Math.random() * 1.8,
          delay: Math.random() * 1.2,
          ease: "power1.in",
        });
      }
      window.setTimeout(() => layer.remove(), 5000);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return null;
}
