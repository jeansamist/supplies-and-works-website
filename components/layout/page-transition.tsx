"use client";

import { useSitePathname } from "@/lib/hooks";
import { useEffect, useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { labelForPath } from "@/lib/routes";
import { useLocale } from "@/components/layout/locale-provider";

/**
 * Page transition: on every client-side navigation a yellow curtain covering
 * the screen shows the page name, then sweeps away upward to reveal the new
 * page. Skipped on the first load (the Loader handles that) and with reduced
 * motion (simple fade instead).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useSitePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  const locale = useLocale();
  const name = labelForPath(pathname, locale);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const c = curtain.current;
    if (!c) return;
    if (prefersReducedMotion()) {
      gsap.fromTo(content.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
      return;
    }
    const tl = gsap.timeline();
    tl.set(c, { display: "flex", yPercent: 0, clipPath: "inset(0% 0% 0% 0%)" })
      .fromTo(c.querySelector("[data-name]"), { yPercent: 110 }, { yPercent: 0, duration: 0.45, ease: "expo.out" })
      .to(c.querySelector("[data-name]"), { yPercent: -110, duration: 0.35, ease: "power2.in" }, "+=0.15")
      .to(c, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.7, ease: "expo.inOut" }, "-=0.1")
      .fromTo(content.current, { y: 60 }, { y: 0, duration: 0.9, ease: "expo.out", clearProps: "transform" }, "<0.15")
      .set(c, { display: "none" });
    return () => {
      tl.kill();
      gsap.set(c, { display: "none" });
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={curtain}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[95] hidden items-center justify-center bg-accent text-accent-ink"
      >
        <div className="overflow-hidden">
          <p data-name className="font-serif text-h1 italic">
            {name}
          </p>
        </div>
      </div>
      <div ref={content}>{children}</div>
    </>
  );
}
