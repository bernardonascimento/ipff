import type { Metadata } from "next";
import { Spline_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";

// Corpo/UI: humanista, distinta e bem legível (no lugar de Inter)
const splineSans = Spline_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Display: serif characterful para títulos editoriais
const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.fullName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${splineSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFab />
        {/* Grão de filme sutil sobre toda a página */}
        <div aria-hidden className="grain-overlay" />
      </body>
    </html>
  );
}
