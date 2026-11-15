"use client";

import { ArrowDown01Icon, Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

// The globe is client-only and loaded after the text (it never blocks LCP).
const NetworkGlobe = dynamic(() => import("@/components/hero/network-globe").then((m) => m.NetworkGlobe), {
  ssr: false,
});

export type HomeHeroCopy = {
  eyebrow: string;
  headlineBefore: string;
  rotating: string[];
  headlineAfter: string;
  sub: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  proof: string[];
  scroll: string;
};

export function HomeHero({ copy }: { copy: HomeHeroCopy }) {
  const root = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [showGlobe, setShowGlobe] = useState(false);

  // Rotate Build / Run / Protect.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % copy.rotating.length), 2400);
    return () => window.clearInterval(id);
  }, [copy.rotating.length]);

  // Intro timeline, started once the loader is gone.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    const mountGlobe = () => setShowGlobe(true);
    if (idle) idle(mountGlobe);
    else window.setTimeout(mountGlobe, 200);

    if (prefersReducedMotion()) {
      gsap.set(el.querySelectorAll("[data-hero]"), { opacity: 1 });
      return;
    }
    const play = () => {
      const h1 = el.querySelector("h1");
      gsap.set(el.querySelectorAll("[data-hero]"), { opacity: 1 });
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(el.querySelector("[data-hero='eyebrow']"), { y: 20, opacity: 0, duration: 0.8 });
      // The h1 holds the live word rotator, so it is revealed as a block with a mask.
      tl.fromTo(h1, { clipPath: "inset(0 0 100% 0)", y: 60 }, { clipPath: "inset(0 0 -20% 0)", y: 0, duration: 1.3 }, "-=0.5");
      tl.from(el.querySelectorAll("[data-hero='fade']"), { y: 24, opacity: 0, duration: 1, stagger: 0.08 }, "-=0.8").from(
        el.querySelector("[data-hero='globe']"),
        { scale: 0.85, opacity: 0, duration: 1.6 },
        "<-0.6",
      );
    };
    const loaderOn = !document.documentElement.classList.contains("no-loader") && document.querySelector(".loader")?.checkVisibility?.();
    if (loaderOn) window.addEventListener("sw:loaded", play, { once: true });
    else play();
    return () => {
      window.removeEventListener("sw:loaded", play);
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-linear-to-b from-surface via-surface to-bg pt-28 pb-24 lg:pt-32"
    >
      {/* Globe: behind the text on mobile, on the right on desktop. */}
      <div
        data-hero="globe"
        className="absolute inset-x-0 top-16 -z-10 h-[78svh] opacity-35 sm:opacity-60 lg:inset-y-0 lg:right-[-8%] lg:left-auto lg:h-full lg:w-[62%] lg:opacity-100"
      >
        {showGlobe && <NetworkGlobe className="size-full" />}
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-8">
          <div data-hero="eyebrow">
            <Eyebrow>{copy.eyebrow}</Eyebrow>
          </div>

          <h1 data-hero className="font-serif text-display text-balance">
            {copy.headlineBefore}{" "}
            <span className="relative inline-grid align-bottom">
              {/* Invisible longest word reserves the width so the line doesn't jump. */}
              <span aria-hidden className="invisible col-start-1 row-start-1 px-[0.12em] font-semibold italic">
                {copy.rotating.reduce((a, b) => (b.length > a.length ? b : a))}
              </span>
              <span className="sr-only">{copy.rotating.join(", ")}</span>
              {copy.rotating.map((word, i) => (
                <span
                  key={word}
                  aria-hidden
                  className={cn(
                    "col-start-1 row-start-1 overflow-hidden",
                  )}
                >
                  <span
                    className={cn(
                      "mark inline-block px-[0.12em] font-semibold italic transition-[transform,opacity] duration-700 ease-out-expo",
                      i === index ? "translate-y-0 opacity-100" : i === (index - 1 + copy.rotating.length) % copy.rotating.length ? "-translate-y-full opacity-0" : "translate-y-full opacity-0",
                    )}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </span>{" "}
            {copy.headlineAfter}
          </h1>

          <p data-hero="fade" className="max-w-2xl text-lead text-pretty text-muted">
            {copy.sub}
          </p>

          <div data-hero="fade" className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button href={copy.primary.href} size="lg" magnetic icon={Calendar03Icon}>
              {copy.primary.label}
            </Button>
            <Button href={copy.secondary.href} size="lg" variant="outline" magnetic>
              {copy.secondary.label}
            </Button>
          </div>

          <ul data-hero="fade" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {copy.proof.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-full bg-accent ring-4 ring-accent-soft" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#after-hero"
        data-hero="fade"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs font-medium tracking-wide text-muted uppercase sm:flex"
      >
        {copy.scroll}
        <span className="relative h-12 w-px overflow-hidden bg-line">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-cue bg-fg" />
        </span>
        <HugeiconsIcon icon={ArrowDown01Icon} className="sr-only" />
      </a>
    </section>
  );
}
