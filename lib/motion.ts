"use client";

// Single place where GSAP plugins are registered (client only).
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
}

export { gsap, ScrollTrigger, SplitText, useGSAP };

/** Motion tokens (seconds), mirrored from the CSS variables. */
export const DUR = { micro: 0.2, element: 0.5, section: 0.9 } as const;
export const EASE = { out: "expo.out", inOut: "power2.inOut", soft: "power3.out" } as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isTouchDevice() {
  return typeof window !== "undefined" && window.matchMedia("(pointer: coarse), (hover: none)").matches;
}

/** Rough low-power heuristic used to reduce particle counts. */
export function isLowPower() {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  return (
    (nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 4 || nav.connection?.saveData === true
  );
}

