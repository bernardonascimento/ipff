import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import { PurplesHero } from "@/components/sections/purples-hero";
import { PurplesBanner } from "@/components/sections/purples-banner";
import { PurplesSobre } from "@/components/sections/purples-sobre";
import { PurplesGaleria } from "@/components/sections/purples-galeria";
import { siteConfig } from "@/config/site";

// Fonte display do evento — escopada a esta página via a classe .purples-theme
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

// Barra do navegador no tom escuro do evento (sobrescreve o verde global)
export const viewport: Viewport = {
  themeColor: "#0c0a12",
};

export const metadata: Metadata = {
  title: siteConfig.purples.title,
  description: siteConfig.purples.description,
  alternates: { canonical: "/purples" },
  openGraph: {
    title: `${siteConfig.purples.title} — ${siteConfig.fullName}`,
    description: siteConfig.purples.description,
    url: "/purples",
    images: [
      {
        url: siteConfig.purples.image,
        width: 1200,
        height: 630,
        alt: `${siteConfig.purples.title} — inscrição gratuita`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.purples.title} — ${siteConfig.fullName}`,
    description: siteConfig.purples.description,
    images: [siteConfig.purples.image],
  },
};

export default function PurplesPage() {
  return (
    <div className={`purples-theme ${sora.variable}`}>
      <PurplesHero />
      <PurplesBanner />
      <PurplesSobre />
      <PurplesGaleria />
    </div>
  );
}
