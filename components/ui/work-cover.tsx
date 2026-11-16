import Image from "next/image";
import { Photo } from "@/components/ui/photo";
import type { CaseStudy } from "@/content/work";
import { cn } from "@/lib/utils";

/** Project cover: live-site screenshot, else logo on brand colour, else Unsplash photo. */
export function WorkCover({ item, sizes, className, imgClassName, priority }: { item: CaseStudy; sizes: string; className?: string; imgClassName?: string; priority?: boolean }) {
  if (item.cover) {
    return (
      <div className={cn("photo-fx relative overflow-hidden bg-surface-2", className)} data-cursor="view">
        <Image src={item.cover.src} alt={item.cover.alt} fill sizes={sizes} priority={priority} unoptimized className={cn("object-cover object-top", imgClassName)} />
      </div>
    );
  }
  if (item.logo) {
    return (
      <div className={cn("relative grid place-items-center overflow-hidden", className)} style={{ background: item.logo.bg }} data-cursor="view">
        <Image src={item.logo.src} alt={`${item.name} logo`} width={320} height={120} unoptimized className={cn("h-auto w-2/5 max-w-60 brightness-0 invert transition-transform duration-700 ease-out-expo", imgClassName)} />
      </div>
    );
  }
  return <Photo image={item.image} sizes={sizes} className={className} imgClassName={imgClassName} priority={priority} />;
}
