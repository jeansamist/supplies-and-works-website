"use client";

import { ArrowUp02Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { scrollToTarget } from "@/components/motion/smooth-scroll";
import { siteConfig } from "@/content/site";
import { useNow } from "@/lib/hooks";
import { isTouchDevice, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

/* ─── Giant wordmark ─────────────────────────────────────────────────────── */

/**
 * "Supplies and Works" in DM Sans (variable). Each letter's weight follows the
 * cursor distance; on touch devices a slow wave runs automatically.
 */
export function Wordmark({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const letters = Array.from(root.querySelectorAll<HTMLSpanElement>("[data-l]"));
    if (prefersReducedMotion()) return;

    let raf = 0;
    let pointer: { x: number; y: number } | null = null;
    let visible = false;
    const auto = isTouchDevice();
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(loop);
    });
    io.observe(root);

    function loop(t: number) {
      raf = 0;
      if (!visible) return;
      const rects = letters.map((el) => el.getBoundingClientRect());
      letters.forEach((el, i) => {
        let k: number; // 0..1 influence
        if (auto || !pointer) {
          k = (Math.sin(t / 900 - i * 0.45) + 1) / 2;
          k = auto ? k : k * 0.35;
        } else {
          const r = rects[i];
          const d = Math.hypot(pointer.x - (r.left + r.width / 2), pointer.y - (r.top + r.height / 2));
          k = Math.max(0, 1 - d / 420);
        }
        el.style.fontVariationSettings = `"wght" ${Math.round(200 + k * 800)}`;
        el.style.color = k > 0.72 ? "var(--accent)" : "";
      });
      raf = requestAnimationFrame(loop);
    }
    const move = (e: PointerEvent) => (pointer = { x: e.clientX, y: e.clientY });
    const leave = () => (pointer = null);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <p
      ref={ref}
      aria-label={text}
      className="font-sans text-[clamp(2.25rem,10.4vw,10.75rem)] leading-[0.9] tracking-[-0.055em] whitespace-nowrap select-none"
    >
      {text.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden
          data-l
          className="inline-block transition-colors duration-300"
          style={{ fontVariationSettings: '"wght" 300' }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </p>
  );
}

/* ─── Douala / visitor clock ────────────────────────────────────────────── */

function fmt(date: Date, timeZone?: string) {
  return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }).format(date);
}

/** Hours of overlap today between Douala working hours and the visitor's. */
export function overlapHours(now = new Date()) {
  const homeOffset = 60; // Douala is UTC+1 all year (no daylight saving).
  const visOffset = -now.getTimezoneOffset();
  const { start: ys, end: ye } = siteConfig.workingHours;
  const { start: vs, end: ve } = siteConfig.visitorHours;
  const a = [ys * 60 - homeOffset, ye * 60 - homeOffset];
  let best = 0;
  for (const shift of [-1440, 0, 1440]) {
    const b = [vs * 60 - visOffset + shift, ve * 60 - visOffset + shift];
    best = Math.max(best, Math.min(a[1], b[1]) - Math.max(a[0], b[0]));
  }
  return Math.max(0, Math.round(best / 30) / 2);
}

export function WorldClock({
  line,
  homeLabel,
  visitorLabel,
}: {
  line: string;
  homeLabel: string;
  visitorLabel: string;
}) {
  const now = useNow();

  const yde = now ? fmt(now, siteConfig.timeZone) : "--:--";
  const vis = now ? fmt(now) : "--:--";
  const hours = now ? String(overlapHours(now)) : "–";
  const visitorZone = now ? Intl.DateTimeFormat().resolvedOptions().timeZone.split("/").pop()?.replace(/_/g, " ") : "";

  const parts = line.split(/(\{home\}|\{visitor\}|\{hours\})/);
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <ClockPill label={homeLabel} time={yde} live />
        <ClockPill label={visitorZone ? `${visitorLabel} · ${visitorZone}` : visitorLabel} time={vis} />
      </div>
      <p className="max-w-md text-pretty text-muted" aria-live="off">
        {parts.map((p, i) =>
          p === "{home}" ? (
            <strong key={i} className="font-semibold text-fg tabular-nums">{yde}</strong>
          ) : p === "{visitor}" ? (
            <strong key={i} className="font-semibold text-fg tabular-nums">{vis}</strong>
          ) : p === "{hours}" ? (
            <strong key={i} className="mark font-semibold text-fg">{hours}</strong>
          ) : (
            <span key={i}>{p}</span>
          ),
        )}
      </p>
    </div>
  );
}

function ClockPill({ label, time, live }: { label: string; time: string; live?: boolean }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-line py-2 pr-5 pl-3">
      <span className="relative flex size-2.5">
        {live && <span className="absolute inset-0 animate-ping rounded-full bg-accent" />}
        <span className={cn("relative size-2.5 rounded-full", live ? "bg-accent" : "bg-muted")} />
      </span>
      <span className="text-sm text-muted">{label}</span>
      <span className="font-serif text-2xl font-semibold tabular-nums">{time}</span>
    </div>
  );
}

/* ─── Newsletter ─────────────────────────────────────────────────────────── */

export function NewsletterForm({
  placeholder,
  button,
  success,
  error,
  className,
}: {
  placeholder: string;
  button: string;
  success: string;
  error: string;
  className?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setState("error");
    setState("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p role="status" className={cn("flex items-center gap-3 rounded-full bg-accent px-5 py-3.5 font-semibold text-accent-ink", className)}>
        <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-5 animate-[ping_0.6s_ease-out_1_reverse]" />
        {success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn("space-y-2", className)}>
      <div className="flex items-center gap-2 rounded-full border border-line bg-bg p-1.5 pl-5 focus-within:border-fg">
        <label htmlFor="newsletter-email" className="sr-only">
          {placeholder}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder={placeholder}
          aria-invalid={state === "error" || undefined}
          aria-describedby={state === "error" ? "newsletter-error" : undefined}
          onChange={() => state === "error" && setState("idle")}
          className="min-w-0 flex-1 bg-transparent py-2 outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          data-cursor="link"
          className="shrink-0 rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent hover:text-accent-ink disabled:opacity-60"
        >
          {button}
        </button>
      </div>
      {state === "error" && (
        <p id="newsletter-error" role="alert" className="pl-5 text-sm text-danger">
          {error}
        </p>
      )}
    </form>
  );
}

/* ─── Back to top with scroll progress ring ──────────────────────────────── */

export function BackToTop({ label }: { label: string }) {
  const circle = useRef<SVGCircleElement>(null);
  const [show, setShow] = useState(false);
  const C = 2 * Math.PI * 26;

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? scrollY / max : 0;
      if (circle.current) circle.current.style.strokeDashoffset = String(C * (1 - p));
      setShow(scrollY > innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [C]);

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => scrollToTarget(0)}
      data-cursor="link"
      className={cn(
        "fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-accent text-accent-ink shadow-lg transition-all duration-500 ease-out-expo hover:scale-110 sm:right-6 sm:bottom-6",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <svg aria-hidden viewBox="0 0 60 60" className="absolute inset-0 -rotate-90">
        <circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2.5" />
        <circle ref={circle} cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C} />
      </svg>
      <HugeiconsIcon icon={ArrowUp02Icon} className="size-5" strokeWidth={2} />
    </button>
  );
}
