import Image from "next/image";
import { Photo } from "@/components/ui/photo";
import type { CaseStudy } from "@/content/work";
import { cn } from "@/lib/utils";

/**
 * Project cover: the client's logo centred on its brand colour — as a white
 * silhouette, or in its own colours on a light tint (`logo.color`).
 * Falls back to the Unsplash photo (products such as Badibo and Kira).
 */
export function WorkCover({ item, sizes, className, imgClassName, priority }: { item: CaseStudy; sizes: string; className?: string; imgClassName?: string; priority?: boolean }) {
  if (item.logo) {
    const color = !!item.logo.color;
    return (
      <div
        className={cn("relative grid place-items-center overflow-hidden", className)}
        // Colour logos sit on a light tint of the brand colour, white logos on the full colour.
        style={{ background: color ? `color-mix(in srgb, ${item.logo.bg} 12%, #ffffff)` : item.logo.bg }}
        data-cursor="view"
      >
        {/* Soft light so flat colours don't feel dead */}
        <div
          aria-hidden
          className={cn(
            "absolute inset-0",
            color
              ? "bg-[radial-gradient(circle_at_70%_90%,color-mix(in_srgb,var(--logo-bg)_22%,transparent),transparent_60%)]"
              : "bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_60%)]",
          )}
          style={{ ["--logo-bg" as string]: item.logo.bg }}
        />
        <div className={cn("relative transition-transform duration-700 ease-out-expo", item.logo.size === "lg" ? "h-[64%] w-[64%]" : "h-[38%] w-[56%]", imgClassName)}>
          <Image src={item.logo.src} alt={`${item.name} logo`} fill sizes={sizes} priority={priority} unoptimized className={cn("object-contain", !color && "brightness-0 invert")} />
        </div>
      </div>
    );
  }
  return <Photo image={item.image} sizes={sizes} className={className} imgClassName={imgClassName} priority={priority} />;
}
