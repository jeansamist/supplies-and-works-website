import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isEnabledLocale } from "@/lib/i18n";

// English lives at the root ("/about") and is served from app/[lang] with
// lang = "en" through a rewrite. Other locales keep their prefix ("/fr/about").
// "/en/..." redirects to the clean root URL so there is one canonical address.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1];

  if (segment === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }
  if (isEnabledLocale(segment)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes and files with an extension.
  matcher: ["/((?!_next|api|opengraph-image|twitter-image|.*\\..*).*)"],
};
