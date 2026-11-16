import Image from "next/image";
import { Photo } from "@/components/ui/photo";
import type { CaseStudy } from "@/content/work";
import { cn } from "@/lib/utils";

/**
 * Project cover: the client's logo, in white, centred on its brand colour.
 * Falls back to the Unsplash photo (products such as Badibo and Kira).
 */
export function WorkCover({ item, sizes, className, imgClassName, priority }: { item: CaseStudy; sizes: string; className?: string; imgClassName?: string; priority?: boolean }) {
  if (item.logo) {
    return (
      <div className={cn("relative grid place-items-center overflow-hidden", className)} style={{ background: item.logo.bg }} data-cursor="view">
        {/* Soft light so flat colours don't feel dead */}
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className={cn("relative h-[34%] w-[56%] transition-transform duration-700 ease-out-expo", imgClassName)}>
          <Image src={item.logo.src} alt={`${item.name} logo`} fill sizes={sizes} priority={priority} unoptimized className="object-contain brightness-0 invert" />
        </div>
      </div>
    );
  }
  return <Photo image={item.image} sizes={sizes} className={className} imgClassName={imgClassName} priority={priority} />;
}
