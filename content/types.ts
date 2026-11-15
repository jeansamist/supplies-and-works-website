// Shared content shapes. Strings may use the <Rich> conventions:
// *emphasis* · **bold** · [PLACEHOLDER].
import type { ImageKey } from "@/content/images";
import type { Faq } from "@/components/ui/accordion";
import type { Seo } from "@/lib/seo";

export type { Faq, Seo };

export type Cta = { label: string; href: string };

export type PageHeroCopy = {
  eyebrow?: string;
  title: string;
  sub?: string;
  buttons?: Cta[];
  image?: ImageKey;
};

export type Item = {
  title: string;
  text?: string;
  /** Extra labelled line, e.g. "You receive: …" or "Includes: …". */
  meta?: { label: string; value: string };
  tag?: string;
};

export type Step = { title: string; text: string };

export type Table = { head: string[]; rows: string[][]; highlightCol?: number; highlightRow?: number };

export type FinalCta = { title: string; text?: string; buttons: Cta[] };
