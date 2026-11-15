import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Rich } from "@/components/ui/rich";
import { cn } from "@/lib/utils";

/** Centered column. Matches the portfolio width (max-w-6xl) with a wider option. */
export function Container({
  className,
  wide,
  children,
}: {
  className?: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return <div className={cn("mx-auto w-full px-4 sm:px-6", wide ? "max-w-7xl" : "max-w-6xl", className)}>{children}</div>;
}

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  /** "default" = page background, "surface" = soft grey band, "ink" = inverted dark band. */
  tone?: "default" | "surface" | "ink";
  /** Remove the default vertical padding. */
  flush?: boolean;
  /** Draw the portfolio-style hairline at the top. */
  divider?: boolean;
};

export function Section({ tone = "default", flush, divider, className, children, ...props }: SectionProps) {
  return (
    <section
      {...props}
      data-tone={tone}
      className={cn(
        "relative",
        !flush && "py-20 sm:py-28 lg:py-32",
        tone === "surface" && "bg-surface",
        tone === "ink" && "bg-[#0a0a0a] text-[#ededed] [--text-muted:#edededb3] [--border:#ffffff1a] [--text:#ededed] [--bg:#0a0a0a] [--surface:#121212] [--surface-2:#1a1a1a]",
        className,
      )}
    >
      {divider && <div aria-hidden className="mx-auto mb-20 h-px max-w-6xl bg-line sm:mb-28" />}
      {children}
    </section>
  );
}

/** Small label above a heading: "01 · Cloud Studio". */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("inline-flex items-center gap-2 text-sm font-medium tracking-wide text-muted uppercase", className)}>
      <span aria-hidden className="size-1.5 rounded-full bg-accent ring-4 ring-accent-soft" />
      {children}
    </p>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  as?: ElementType;
  align?: "left" | "center";
  size?: "h1" | "h2" | "h3";
  className?: string;
  /** Extra content under the lead (buttons…). */
  children?: ReactNode;
};

/** Eyebrow + serif title (line-by-line reveal) + lead, the portfolio's heading rhythm. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  as: Tag = "h2",
  align = "left",
  size = "h2",
  className,
  children,
}: HeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-5", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div data-reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <Tag
        data-split
        className={cn(
          "font-serif text-balance",
          size === "h1" && "text-h1",
          size === "h2" && "text-h2",
          size === "h3" && "text-h3",
        )}
      >
        <Rich text={title} />
      </Tag>
      {lead && (
        <p data-reveal className={cn("text-lead text-pretty text-muted", align === "center" && "mx-auto")}>
          <Rich text={lead} />
        </p>
      )}
      {children}
    </div>
  );
}
