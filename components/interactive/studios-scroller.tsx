"use client";

import { useRef } from "react";
import { TextLink, label } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { Rich } from "@/components/ui/rich";
import { Eyebrow } from "@/components/ui/section";
import type { Studio } from "@/content/shared";
import { localePath, type Locale } from "@/lib/i18n";
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from "@/lib/motion";

/**
 * Five large studio cards. Desktop: the section pins and vertical scroll moves
 * the cards horizontally. Mobile / reduced motion: cards stack vertically.
 * Each card reveals its image, keywords and button on hover (always visible on touch).
 */
export function StudiosScroller({
  eyebrow,
  title,
  studios,
  locale,
}: {
  eyebrow: string;
  title: string;
  studios: Studio[];
  locale: Locale;
}) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth + 48;
        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => bar.current && (bar.current.style.transform = `scaleX(${self.progress})`),
          },
        });
        return () => tween.scrollTrigger?.kill();
      });
      ScrollTrigger.refresh();
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-bg py-20 sm:py-28 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:py-0">
      <div className="mx-auto mb-12 flex w-full max-w-7xl items-end justify-between gap-6 px-4 sm:px-6 lg:mb-10">
        <div className="space-y-5">
          <div data-reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h2 data-split className="font-serif text-h2">
            <Rich text={title} />
          </h2>
        </div>
        <div aria-hidden className="hidden h-px w-48 overflow-hidden bg-line lg:block">
          <div ref={bar} className="h-full origin-left scale-x-0 bg-fg dark:bg-accent" />
        </div>
      </div>

      <ul ref={track} className="flex flex-col gap-4 px-4 sm:px-6 lg:w-max lg:flex-row lg:gap-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
        {studios.map((s) => (
          <li
            key={s.number}
            className="group relative flex min-h-[26rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-line bg-surface p-7 sm:p-9 lg:h-[64svh] lg:w-[min(36rem,42vw)]"
          >
            {/* Image fades in on hover (desktop), always shown softly on touch. */}
            <div className="absolute inset-0 -z-0 opacity-25 transition-opacity duration-700 ease-out-expo lg:opacity-0 lg:group-hover:opacity-100">
              <Photo image={s.image} sizes="(min-width: 1024px) 40vw, 100vw" className="size-full" fx={false} alt="" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/20" />
            </div>
            <div className="relative flex items-start justify-between gap-6 transition-colors duration-500 lg:group-hover:text-[#ededed]">
              <span className="font-serif text-7xl font-semibold text-fg/15 transition-colors duration-500 lg:group-hover:text-accent sm:text-8xl">{s.number}</span>
            </div>
            <div className="relative space-y-5 transition-colors duration-500 lg:group-hover:text-[#ededed]">
              <h3 className="font-serif text-h3 sm:text-4xl">{s.title}</h3>
              <p className="text-pretty text-muted transition-colors duration-500 lg:group-hover:text-[#edededcc]">{s.text}</p>
              <ul className="flex flex-wrap gap-2 transition-all duration-500 ease-out-expo lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
                {s.keywords.map((k) => (
                  <li key={k} className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink">
                    {k}
                  </li>
                ))}
              </ul>
              <TextLink href={localePath(locale, s.cta.href)}>{label(s.cta.label)}</TextLink>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
