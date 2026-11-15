"use client";

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { flushSync } from "react-dom";
import { useSyncExternalStore, type MouseEvent } from "react";
import { cn } from "@/lib/utils";


type Theme = "light" | "dark";

function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => obs.disconnect();
}
const getTheme = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

/** Light/dark switch with a circular reveal from the button (View Transitions API). */
export function ThemeToggle({ label, className }: { label: string; className?: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as Theme);

  function toggle(e: MouseEvent<HTMLButtonElement>) {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };
    const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
    if (!doc.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return apply();

    const x = e.clientX || window.innerWidth - 40;
    const y = e.clientY || 40;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const vt = doc.startViewTransition(() => flushSync(apply));
    vt.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 700, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      data-cursor="link"
      className={cn(
        "relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full text-fg transition-colors hover:bg-fg/5",
        className,
      )}
    >
      <HugeiconsIcon
        icon={Sun03Icon}
        className={cn("absolute size-5 transition-all duration-500 ease-out-expo", theme === "dark" ? "translate-y-0 rotate-0 opacity-100" : "translate-y-6 rotate-90 opacity-0")}
      />
      <HugeiconsIcon
        icon={Moon02Icon}
        className={cn("absolute size-5 transition-all duration-500 ease-out-expo", theme === "dark" ? "-translate-y-6 -rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100")}
      />
    </button>
  );
}
