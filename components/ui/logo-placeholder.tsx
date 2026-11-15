import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * THE single logo component, built from the logo file you provided
 * (brand/logo-source.png → `pnpm logo` → public/logo.png + public/logo-dark.png).
 * To change the logo: replace brand/logo-source.png and run `pnpm logo`
 * (or swap the two PNGs for SVGs and update the paths below).
 *
 * tone="auto"  follows the light/dark theme (default)
 * tone="dark"  always the version for dark backgrounds (white "AND")
 * tone="light" always the version for light backgrounds
 */
const W = 324;
const H = 132;

export function Logo({
  className,
  tone = "auto",
  title = "Supplies and Works",
  priority,
}: {
  className?: string;
  tone?: "auto" | "light" | "dark";
  title?: string;
  priority?: boolean;
}) {
  const img = (src: string, cls?: string, alt = title) => (
    <Image src={src} alt={alt} width={W} height={H} priority={priority} unoptimized className={cn("block h-auto w-full", cls)} />
  );
  return (
    <span className={cn("relative block", className)}>
      {tone === "dark" && img("/logo-dark.png")}
      {tone === "light" && img("/logo.png")}
      {tone === "auto" && (
        <>
          {img("/logo.png", "dark:hidden")}
          {img("/logo-dark.png", "hidden dark:block", "")}
        </>
      )}
    </span>
  );
}

/** Kept for compatibility with the brief's naming. */
export const LogoPlaceholder = Logo;
