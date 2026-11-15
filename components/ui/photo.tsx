import Image from "next/image";
import { images, type ImageKey } from "@/content/images";
import { cn } from "@/lib/utils";

// next/image builds a responsive srcset of Unsplash URLs via lib/image-loader.ts.

type PhotoProps = {
  image: ImageKey;
  /** Responsive sizes hint, e.g. "(min-width: 1024px) 50vw, 100vw". */
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Apply the brand treatment (muted, full colour + yellow wash on hover). */
  fx?: boolean;
  /** Override alt (e.g. "" when decorative). */
  alt?: string;
};

/**
 * A photo from content/images.ts that fills its parent (parent needs a size,
 * e.g. aspect-ratio). Rounded shape and masks are up to the caller.
 */
export function Photo({ image, sizes, className, imgClassName, priority, fx = true, alt }: PhotoProps) {
  const img = images[image];
  return (
    <div
      className={cn("relative overflow-hidden bg-surface-2", fx && "photo-fx", className)}
      data-cursor={fx ? "view" : undefined}
    >
      {img.id ? (
        <Image
          src={img.id}
          alt={alt ?? img.alt}
          fill
          sizes={sizes}
          priority={priority}
          placeholder={img.blur ? "blur" : "empty"}
          blurDataURL={img.blur}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <div
          role="img"
          aria-label={alt ?? img.alt}
          className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,var(--accent-soft),transparent_60%)]"
        >
          <span className="ph">[IMAGE: {img.alt}]</span>
        </div>
      )}
    </div>
  );
}
