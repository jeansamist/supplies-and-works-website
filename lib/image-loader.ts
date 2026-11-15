// next/image loader for the whole site: every photo comes from Unsplash, which
// resizes on its CDN (imgix). `src` is the Unsplash id ("photo-…"); full URLs
// and local files are passed through.
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("photo-")) {
    return `https://images.unsplash.com/${src}?w=${width}&q=${quality ?? 72}&auto=format&fit=crop`;
  }
  return src;
}
