import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

// With `href` it renders a link (next/link for internal routes, <a> otherwise),
// without it a <button>. Same API as the portfolio's Pressable.
type PressableProps =
  | ({ href: string } & Omit<ComponentPropsWithoutRef<"a">, "href">)
  | ({ href?: never } & ComponentPropsWithoutRef<"button">);

export function Pressable(props: PressableProps) {
  if (typeof props.href === "string") {
    const { href, ...rest } = props;
    const isInternal = href.startsWith("/") && !rest.download;
    return isInternal ? <Link href={href} {...rest} /> : <a href={href} {...rest} />;
  }
  const { type = "button", ...rest } = props as ComponentPropsWithoutRef<"button">;
  return <button type={type} {...rest} />;
}

// Each variant: base colours + the colour of the fill that rises on hover.
const variants = {
  /** Yellow CTA. Hover: ink fill rises, text turns yellow. */
  primary: {
    base: "bg-accent text-accent-ink",
    fill: "bg-[#0a0a0a]",
    hoverText: "group-hover/btn:text-accent",
    chip: "bg-accent-ink text-accent group-hover/btn:bg-accent group-hover/btn:text-accent-ink",
  },
  /** Solid foreground (portfolio primary). Hover: yellow fill rises. */
  solid: {
    base: "bg-fg text-bg",
    fill: "bg-accent",
    hoverText: "group-hover/btn:text-accent-ink",
    chip: "bg-bg text-fg",
  },
  /** Outlined. Hover: yellow fill rises. */
  outline: {
    base: "border border-line text-fg bg-transparent",
    fill: "bg-accent",
    hoverText: "group-hover/btn:text-accent-ink",
    chip: "bg-fg text-bg group-hover/btn:bg-accent-ink group-hover/btn:text-accent",
  },
} as const;

const sizes = {
  md: { root: "h-12 text-base", pad: "px-6", padIcon: "py-1.5 pr-1.5 pl-6", chip: "size-9" },
  lg: { root: "h-14 text-base sm:h-16 sm:text-lg", pad: "px-7", padIcon: "py-2 pr-2 pl-7", chip: "size-10 sm:size-12" },
  sm: { root: "h-10 text-sm", pad: "px-4", padIcon: "py-1 pr-1 pl-4", chip: "size-8" },
} as const;

type ButtonProps = PressableProps & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Trailing icon in a circle (portfolio style). Pass `null` to hide. */
  icon?: IconSvgElement | null;
  /** Gently attracts the cursor. */
  magnetic?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  icon = ArrowUpRight01Icon,
  magnetic = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const v = variants[variant];
  const s = sizes[size];
  const button = (
    <Pressable
      {...(props as PressableProps)}
      data-cursor="link"
      className={cn(
        "group/btn relative isolate inline-flex shrink-0 items-center justify-center gap-3 overflow-hidden rounded-full font-semibold whitespace-nowrap transition-colors duration-300",
        v.base,
        s.root,
        icon ? s.padIcon : s.pad,
        className,
      )}
    >
      {/* Fill that rises from the bottom on hover. */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 -z-10 translate-y-full rounded-[inherit] transition-transform duration-500 ease-out-expo group-hover/btn:translate-y-0 group-focus-visible/btn:translate-y-0",
          v.fill,
        )}
      />
      <span className={cn("transition-colors duration-300", v.hoverText)}>{children}</span>
      {icon && (
        <span
          className={cn(
            "flex aspect-square items-center justify-center rounded-full transition-[transform,background-color,color] duration-500 ease-out-expo group-hover/btn:rotate-45",
            s.chip,
            v.chip,
          )}
        >
          <HugeiconsIcon icon={icon} className="size-4" strokeWidth={2} />
        </span>
      )}
    </Pressable>
  );
  return magnetic ? <Magnetic>{button}</Magnetic> : button;
}

/** Text link with an arrow and an underline that draws in. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Pressable
      href={href}
      data-cursor="link"
      className={cn("group/link inline-flex items-center gap-2 font-semibold", className)}
    >
      <span className="link-draw">{children}</span>
      <span
        aria-hidden
        className="flex size-7 items-center justify-center rounded-full bg-accent text-accent-ink transition-transform duration-500 ease-out-expo group-hover/link:translate-x-1 group-hover/link:-rotate-45"
      >
        <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-3.5 rotate-45" strokeWidth={2.2} />
      </span>
    </Pressable>
  );
}

/** Strips a trailing "→" from copy labels like "Explore Cloud →" (the arrow is drawn as an icon). */
export const label = (value: string) => value.replace(/\s*→\s*$/, "");
