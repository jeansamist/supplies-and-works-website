"use client";

import { useSitePathname } from "@/lib/hooks";
import { useEffect } from "react";
import { gsap, prefersReducedMotion, ScrollTrigger, SplitText } from "@/lib/motion";

/**
 * Declarative scroll animations. Server components opt in with data attributes,
 * so they stay server-rendered:
 *
 *   data-reveal            fade + rise when entering the viewport
 *   data-reveal="stagger"  same, applied to each direct child in sequence
 *   data-reveal="clip"     image mask reveal (bottom → top) with a slight zoom-out
 *   data-split             heading revealed line by line behind a mask
 *   data-words             paragraph whose words light up one by one while scrolling
 *   data-parallax="0.15"   child [data-parallax-inner] drifts while scrolling
 *   data-count             element whose numeric text counts up when visible
 *   .mark-anim             highlighter that draws in when visible
 *
 * With prefers-reduced-motion everything is shown immediately (simple fades only).
 */
// SplitText and counters rewrite DOM that React owns. On the first load the
// page is hydrated selectively (after the layout), so wait until hydration is
// surely over (window load + idle) before touching it. Later navigations are
// client renders and can start right away.
let firstRun = true;
function afterHydration(cb: () => void) {
  if (!firstRun) {
    const id = requestAnimationFrame(cb);
    return () => cancelAnimationFrame(id);
  }
  firstRun = false;
  let cancelled = false;
  const idle = (fn: () => void) =>
    typeof window.requestIdleCallback === "function" ? window.requestIdleCallback(fn, { timeout: 600 }) : setTimeout(fn, 120);
  const go = () => idle(() => !cancelled && cb());
  if (document.readyState === "complete") go();
  else window.addEventListener("load", go, { once: true });
  return () => {
    cancelled = true;
    window.removeEventListener("load", go);
  };
}

export function MotionDirector() {
  const pathname = useSitePathname();

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const splits: SplitText[] = [];
    let ctx: gsap.Context | undefined;
    let t: number | undefined;

    const run = () => {
    ctx = gsap.context(() => {
      // Simple fades.
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const mode = el.dataset.reveal;
        if (reduced) {
          gsap.to(el, { opacity: 1, duration: 0.4 });
          if (mode === "stagger") gsap.set(el.children, { opacity: 1 });
          return;
        }
        if (mode === "stagger") {
          gsap.set(el, { opacity: 1 });
          // fromTo, not from: children may have CSS transitions, so their
          // "current" values can't be trusted as the end state.
          gsap.fromTo(
            el.children,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "expo.out",
              stagger: 0.08,
              clearProps: "transform,opacity",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            },
          );
        } else if (mode === "clip") {
          const img = el.querySelector("img");
          gsap.set(el, { opacity: 1 });
          gsap.fromTo(
            el,
            { clipPath: "inset(100% 0% 0% 0% round 24px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 24px)",
              duration: 1.3,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            },
          );
          if (img) gsap.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 1.6, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
        } else {
          gsap.fromTo(
            el,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "expo.out",
              delay: Number(el.dataset.delay ?? 0),
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            },
          );
        }
      });

      // Headings: line-by-line mask.
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        el.style.visibility = "visible";
        if (reduced) return;
        const split = SplitText.create(el, { type: "lines", mask: "lines", autoSplit: true, linesClass: "split-line" });
        splits.push(split);
        gsap.from(split.lines, {
          yPercent: 110,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.09,
          delay: Number(el.dataset.delay ?? 0),
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      // Word-by-word colour while scrolling.
      gsap.utils.toArray<HTMLElement>("[data-words]").forEach((el) => {
        if (reduced) return;
        const split = SplitText.create(el, { type: "words", wordsClass: "split-word" });
        splits.push(split);
        gsap.fromTo(
          split.words,
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
          },
        );
      });

      // Parallax.
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        if (reduced) return;
        const inner = el.querySelector<HTMLElement>("[data-parallax-inner]") ?? el;
        const amount = Number(el.dataset.parallax || 0.12) * 100;
        gsap.fromTo(
          inner,
          { yPercent: -amount / 2 },
          { yPercent: amount / 2, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
        );
      });

      // Counters (only for real numbers; placeholders like [X] stay as they are).
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const raw = el.textContent ?? "";
        const match = raw.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
        if (!match || reduced) return;
        const [, pre, num, post] = match;
        const target = Number(num.replace(",", "."));
        const decimals = (num.split(/[.,]/)[1] ?? "").length;
        const obj = { v: 0 };
        el.textContent = `${pre}${(0).toFixed(decimals)}${post}`;
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = `${pre}${obj.v.toFixed(decimals)}${post}`;
          },
        });
      });

      // Highlighter marks.
      // The class goes on the block container: SplitText rebuilds a heading's
      // inner HTML on resize, which would drop a class set on the <em> itself.
      const hosts = new Set(
        gsap.utils.toArray<HTMLElement>(".mark-anim").map((el) => el.closest<HTMLElement>("h1,h2,h3,h4,p,li,blockquote") ?? el.parentElement!),
      );
      hosts.forEach((host) => {
        if (reduced) return host.classList.add("marks-in");
        ScrollTrigger.create({ trigger: host, start: "top 90%", once: true, onEnter: () => host.classList.add("marks-in") });
      });
    });

    // Layout may shift once fonts/images load.
    const refresh = () => ScrollTrigger.refresh();
    t = window.setTimeout(refresh, 400);
    document.fonts?.ready.then(refresh).catch(() => {});
    };

    const cancel = afterHydration(run);
    return () => {
      cancel();
      window.clearTimeout(t);
      splits.forEach((s) => s.revert());
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
