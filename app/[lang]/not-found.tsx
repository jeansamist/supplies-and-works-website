import { Button } from "@/components/ui/button";
import { legal } from "@/content/pages/other";
import { localePath, defaultLocale } from "@/lib/i18n";

/** Animated 404: "Lost in the cloud." with drifting dots that orbit a cloud. */
export default function NotFound() {
  const t = legal(defaultLocale).notFound;
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="font-serif text-[42vw] leading-none font-semibold text-fg/[0.04] select-none">404</span>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute size-2 rounded-full bg-accent"
            style={{
              left: `${8 + ((i * 37) % 84)}%`,
              top: `${12 + ((i * 53) % 76)}%`,
              animation: `float404 ${6 + (i % 5)}s ease-in-out ${i * 0.3}s infinite alternate`,
              opacity: 0.4 + (i % 3) * 0.2,
            }}
          />
        ))}
      </div>
      <div className="relative mx-auto w-full max-w-4xl space-y-8 px-4 text-center sm:px-6">
        <p className="text-sm font-semibold tracking-wide text-muted uppercase">Error 404</p>
        <h1 className="font-serif text-display text-balance">
          Lost in the <em className="mark font-semibold italic">cloud.</em>
        </h1>
        <p className="mx-auto max-w-xl text-lead text-muted">{t.text}</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          {t.buttons.map((b, i) => (
            <Button key={b.label} href={localePath(defaultLocale, b.href)} size="lg" variant={i ? "outline" : "primary"} magnetic>
              {b.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
