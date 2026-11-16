import { NotFoundView } from "@/components/layout/not-found-view";

// Rendered inside app/[lang]/layout.tsx, so the locale comes from its provider.
export default function NotFound() {
  return <NotFoundView />;
}
