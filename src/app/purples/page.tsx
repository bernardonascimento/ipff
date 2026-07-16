import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: siteConfig.purples.title,
  description: siteConfig.purples.description,
  alternates: { canonical: "/purples" },
  openGraph: {
    title: `${siteConfig.purples.title} — ${siteConfig.fullName}`,
    description: siteConfig.purples.description,
    url: "/purples",
    images: [{ url: siteConfig.purples.image }],
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
