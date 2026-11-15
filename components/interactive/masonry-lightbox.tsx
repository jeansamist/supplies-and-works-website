"use client";

import { Cancel01Icon, PauseIcon, PlayIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/ui/photo";
import { Rich } from "@/components/ui/rich";
import type { ImageKey } from "@/content/images";
import { cn } from "@/lib/utils";

type Tile = { image: ImageKey; caption: string; tall?: boolean };

/**
 * Masonry gallery (CSS columns) with a keyboard-accessible lightbox
 * (Esc closes, arrows navigate). Replace the tiles with real work.
 */
export function MasonryLightbox({ tiles }: { tiles: Tile[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open === null) return;
    window.__lenis?.stop();
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % tiles.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + tiles.length) % tiles.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.__lenis?.start();
      window.removeEventListener("keydown", onKey);
      lastFocus.current?.focus();
    };
  }, [open, tiles.length]);

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {tiles.map((t, i) => (
          <li key={i} data-reveal className="break-inside-avoid">
            <button
              type="button"
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setOpen(i);
              }}
              data-cursor="view"
              className="group block w-full text-left"
            >
              <Photo image={t.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className={cn("w-full rounded-[1.5rem]", t.tall ? "aspect-[3/4]" : "aspect-[4/3]")} imgClassName="group-hover:scale-105" />
              <span className="mt-3 block text-sm text-muted">
                <Rich text={t.caption} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label={tiles[open].caption} className="fixed inset-0 z-[85] flex flex-col bg-[#0a0a0a]/95 p-4 text-[#ededed] backdrop-blur-sm sm:p-8" onClick={() => setOpen(null)}>
          <div className="flex justify-end">
            <button ref={closeRef} type="button" aria-label="Close" onClick={() => setOpen(null)} className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-ink">
              <HugeiconsIcon icon={Cancel01Icon} className="size-5" />
            </button>
          </div>
          <div className="relative flex-1 animate-[fadeUp_.5s_var(--ease-out-expo)]" onClick={(e) => e.stopPropagation()}>
            <Photo image={tiles[open].image} sizes="100vw" fx={false} className="absolute inset-0 rounded-2xl bg-transparent [&_img]:object-contain" />
          </div>
          <div className="flex items-center justify-between gap-4 pt-4" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setOpen((open - 1 + tiles.length) % tiles.length)} className="rounded-full border border-white/20 px-4 py-2" aria-label="Previous">
              ←
            </button>
            <p className="text-center text-sm">
              <Rich text={tiles[open].caption} /> · {open + 1}/{tiles.length}
            </p>
            <button type="button" onClick={() => setOpen((open + 1) % tiles.length)} className="rounded-full border border-white/20 px-4 py-2" aria-label="Next">
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Motion reel player. Pass `src` (an MP4/WebM in /public) when the reel exists;
 * until then it shows a styled placeholder with a working play/pause control.
 */
export function MotionPlayer({ src, poster, placeholder }: { src?: string; poster: ImageKey; placeholder: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = video.current;
    if (!v) return setPlaying((p) => !p);
    if (v.paused) v.play();
    else v.pause();
  };

  return (
    <div data-reveal className="relative aspect-video overflow-hidden rounded-[2rem] bg-[#0a0a0a]">
      {src ? (
        <video ref={video} src={src} className="size-full object-cover" loop muted playsInline onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
      ) : (
        <>
          <Photo image={poster} sizes="100vw" fx={false} className={cn("absolute inset-0 transition-transform duration-[6s] ease-linear", playing && "scale-110")} />
          <div className="absolute inset-0 bg-[#0a0a0a]/55" />
          <p className="absolute right-6 bottom-6 left-6 text-center text-[#ededed]">
            <Rich text={placeholder} />
          </p>
        </>
      )}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
        data-cursor="link"
        className="absolute top-1/2 left-1/2 flex size-20 -translate-1/2 items-center justify-center rounded-full bg-accent text-accent-ink transition-transform hover:scale-110"
      >
        <HugeiconsIcon icon={playing ? PauseIcon : PlayIcon} className="size-7" />
      </button>
    </div>
  );
}
