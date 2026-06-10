import type { Metadata } from "next";
import { DM_Sans, Mrs_Saint_Delafield, Sansation } from "next/font/google";
import "./globals.css";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { site } from "@/content/site";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";

/** Display titles: Sansation (Google Fonts). */
const titleFace = Sansation({
  variable: "--font-title-face",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Cursive / editorial script accents (“Our Ethos”, approach tagline). */
const scriptAccent = Mrs_Saint_Delafield({
  variable: "--font-script-face",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: site.name,
  title: {
    default: `${siteName} — Media & brand studio`,
    template: `%s — ${siteName}`,
  },
  description: site.tagline,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    siteName,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: defaultOgImage.path,
        width: defaultOgImage.width,
        height: defaultOgImage.height,
        alt: defaultOgImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lime_africa",
    creator: "@lime_africa",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${titleFace.variable} ${sans.variable} ${scriptAccent.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-full bg-[color:var(--paper)] text-[color:var(--ink)]">
        <SiteJsonLd />
        <SiteHeader />
        <div className="flex min-h-[calc(100vh-3.5rem)] flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
