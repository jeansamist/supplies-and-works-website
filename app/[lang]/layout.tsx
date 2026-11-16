import type { Metadata, Viewport } from "next";
import { DM_Sans, Lora } from "next/font/google";
import { notFound } from "next/navigation";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { CursorFollower } from "@/components/layout/cursor";
import { Extras } from "@/components/layout/extras";
import { Loader } from "@/components/layout/loader";
import { LocaleProvider } from "@/components/layout/locale-provider";
import { PageTransition } from "@/components/layout/page-transition";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionDirector } from "@/components/motion/motion-director";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { JsonLd } from "@/components/seo/json-ld";
import { site, siteConfig } from "@/content/site";
import { enabledLocales, isEnabledLocale, toLocale } from "@/lib/i18n";
import { organizationLd, websiteLd } from "@/lib/structured-data";
import { loaderScript, themeScript } from "@/lib/boot-scripts";
import "../globals.css";

// Same pairing as the jeansamist portfolio: Lora (display serif, italic
// emphasis) + DM Sans (text). Both are variable fonts, which the footer
// wordmark uses to animate weight.
const lora = Lora({ variable: "--font-lora", subsets: ["latin"], style: ["normal", "italic"], display: "swap" });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return enabledLocales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  applicationName: siteConfig.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) notFound();
  const locale = toLocale(lang);
  const copy = site(locale);

  return (
    <html lang={locale} className={`${lora.variable} ${dmSans.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript + loaderScript }} />
        <noscript>
          <style>{`.loader{display:none!important}html.js-motion [data-reveal]{opacity:1}`}</style>
        </noscript>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <JsonLd data={[organizationLd(), websiteLd()]} />
      </head>
      <body className="grain min-h-svh font-sans">
        <a href="#main" className="skip-link">
          {copy.skipLink}
        </a>
        <LocaleProvider locale={locale}>
        <Loader label={copy.loader.label} />
        <ScrollProgress />
        <SiteHeader copy={copy} locale={locale} />
        <PageTransition>
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <SiteFooter copy={copy} locale={locale} />
        </PageTransition>
        <CursorFollower />
        <CookieBanner copy={copy.cookie} />
        <SmoothScroll />
        <MotionDirector />
        <Extras />
        </LocaleProvider>
      </body>
    </html>
  );
}
