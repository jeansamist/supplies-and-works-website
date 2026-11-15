"use client";

import Link from "next/link";
import { useRef } from "react";
import { Rich } from "@/components/ui/rich";
import { Eyebrow } from "@/components/ui/section";
import type { Pillar } from "@/content/shared";
import { localePath, type Locale } from "@/lib/i18n";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Build · Run · Protect. Desktop: the section pins, a yellow line draws across
 * the three pillars and each pillar lights up and reveals its services in turn.
 * Mobile / reduced motion: three stacked cards, everything visible.
 */
export function BuildRunProtect({
  eyebrow,
  title,
  pillars,
  includesLabel,
  locale,
  intro,
}: {
  eyebrow: string;
  title: string;
  pillars: Pillar[];
  includesLabel: string;
  locale: Locale;
  intro?: string;
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const cols = gsap.utils.toArray<HTMLElement>("[data-pillar]");
        gsap.set(cols, { opacity: 0.25 });
        gsap.set("[data-pillar-list]", { opacity: 0, y: 24 });
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root.current, start: "top top", end: "+=180%", pin: true, scrub: 0.6 },
        });
        cols.forEach((col, i) => {
          tl.to("[data-line]", { scaleX: (i + 1) / cols.length, duration: 1, ease: "none" }, i)
            .to(col, { opacity: 1, duration: 0.4 }, i)
            .to(col.querySelector("[data-node]"), { scale: 1, backgroundColor: "var(--accent)", duration: 0.3 }, i)
            .to(col.querySelectorAll("[data-pillar-list]"), { opacity: 1, y: 0, duration: 0.6 }, i + 0.2);
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative bg-[#0a0a0a] py-20 text-[#ededed] [--border:#ffffff1a] [--text-muted:#edededb3] sm:py-28 lg:flex lg:min-h-svh lg:flex-col lg:justify-center">
      <div className="mx-auto w-full max-w-7xl space-y-14 px-4 sm:px-6">
        <div className="max-w-3xl space-y-5">
          <div data-reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h2 data-split className="font-serif text-h2">
            <Rich text={title} />
          </h2>
          {intro && <p data-reveal className="text-lead text-muted">{intro}</p>}
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div aria-hidden className="absolute top-[22px] right-[16%] left-[16%] hidden h-0.5 bg-white/10 lg:block">
            <div data-line className="h-full origin-left scale-x-0 bg-accent" />
          </div>
          <ol className="grid gap-4 lg:grid-cols-3 lg:gap-8">
            {pillars.map((p, i) => (
              <li key={p.title} data-pillar className="relative space-y-6 rounded-[2rem] border border-white/10 p-7 sm:p-9 lg:border-0 lg:p-0 lg:text-center">
                <span
                  data-node
                  className="relative z-10 flex size-11 items-center justify-center rounded-full bg-accent font-semibold text-accent-ink lg:mx-auto lg:scale-75 lg:bg-white/20"
                >
                  {i + 1}
                </span>
                <h3 className="font-serif text-[clamp(2.5rem,2rem+2vw,4rem)] leading-none italic">{p.title}</h3>
                <p className="text-pretty text-[#edededb3] lg:mx-auto lg:max-w-sm">{p.text}</p>
                <div data-pillar-list className="space-y-3">
                  <p className="text-xs font-semibold tracking-wide text-[#edededb3] uppercase">{includesLabel}</p>
                  <ul className="flex flex-wrap gap-2 lg:justify-center">
                    {p.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={localePath(locale, l.href)}
                          data-cursor="link"
                          className="inline-block rounded-full border border-white/15 px-3.5 py-1.5 text-sm transition-colors hover:border-transparent hover:bg-accent hover:text-accent-ink"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
