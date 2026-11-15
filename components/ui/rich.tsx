import { Fragment, type ReactNode } from "react";

/**
 * Renders copy strings with three light conventions, so the text in /content
 * stays verbatim and readable:
 *   *words*     → serif semibold italic emphasis with a yellow highlighter (portfolio style)
 *   **words**   → bold
 *   [WORDS]     → a clearly styled placeholder chip, to fill before launch
 */
export function Rich({ text, mark = true }: { text: string; mark?: boolean }) {
  return <>{parse(text, mark)}</>;
}

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\])/g;

function parse(text: string, mark: boolean): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold">
          {parse(part.slice(2, -2), mark)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className={`font-serif font-semibold italic ${mark ? "mark mark-anim" : ""}`}>
          {parse(part.slice(1, -1), mark)}
        </em>
      );
    }
    if (part.startsWith("[") && part.endsWith("]")) {
      return (
        <span key={i} className="ph" title="Placeholder — fill before launch">
          {part}
        </span>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** True when a copy string is only a placeholder like "[X]". */
export const isPlaceholder = (value: string) => /^\[[^\]]+\]$/.test(value.trim());
