export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** "Cloud Studio" → "cloud-studio" */
export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Splits a "A · B · C" string from the copy into ["A", "B", "C"]. */
export function dotList(value: string) {
  return value
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);
}
