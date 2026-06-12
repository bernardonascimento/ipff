import type { Metadata } from "next";
import { Source_Sans_3, Merriweather } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";

// Corpo/UI: Source Sans 3
const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Títulos: Merriweather (serif)
const merriweather = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

const titleDefault = `${siteConfig.fullName} | IPB em Franca/SP`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: titleDefault,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.fullName,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  category: "religion",
  alternates: { canonical: "/" },
  keywords: [
    "Igreja Presbiteriana Filadélfia de Franca",
    "Igreja Presbiteriana de Franca",
    "Igreja Presbiteriana Franca SP",
    "Filadélfia de Franca",
    "Igreja Filadélfia Franca",
    "IPFF",
    "IPB Franca",
    "Igreja Presbiteriana do Brasil",
    "igreja reformada Franca",
    "igreja em Franca",
    "culto em Franca SP",
    "escola bíblica dominical Franca",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: titleDefault,
    description: siteConfig.description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: siteConfig.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Após criar a propriedade no Google Search Console, cole o código aqui:
  // verification: { google: "CÓDIGO_DO_SEARCH_CONSOLE" },
};

// Mapeia o dia da semana (PT) para o vocabulário do schema.org.
const dayToSchema: Record<string, string> = {
  Domingo: "https://schema.org/Sunday",
  "Segunda-feira": "https://schema.org/Monday",
  "Terça-feira": "https://schema.org/Tuesday",
  "Quarta-feira": "https://schema.org/Wednesday",
  "Quinta-feira": "https://schema.org/Thursday",
  "Sexta-feira": "https://schema.org/Friday",
  Sábado: "https://schema.org/Saturday",
};

/** Dados estruturados (JSON-LD) — ajudam o Google a entender a igreja local. */
function buildJsonLd() {
  const churchId = `${siteConfig.url}/#church`;
  const tel = `+55${siteConfig.contact.phone.replace(/\D/g, "")}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Church",
        "@id": churchId,
        name: siteConfig.fullName,
        alternateName: ["IPFF", siteConfig.shortName],
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        image: `${siteConfig.url}/og.jpg`,
        description: siteConfig.description,
        telephone: tel,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.street.replace("—", "-"),
          addressLocality: siteConfig.contact.address.city,
          addressRegion: siteConfig.contact.address.state,
          postalCode: siteConfig.contact.address.zip,
          addressCountry: "BR",
        },
        areaServed: { "@type": "City", name: "Franca" },
        sameAs: [
          siteConfig.social.youtube,
          siteConfig.social.instagram,
          siteConfig.social.facebook,
        ],
        parentOrganization: {
          "@type": "Organization",
          name: "Igreja Presbiteriana do Brasil",
          url: "https://ipb.org.br",
        },
        event: siteConfig.services.map((s) => ({
          "@type": "Event",
          name: s.title,
          description: s.description,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventSchedule: {
            "@type": "Schedule",
            byDay: dayToSchema[s.day] ?? s.day,
            startTime: s.time.replace("h", ":"),
            repeatFrequency: "P1W",
          },
          location: { "@id": churchId },
          organizer: { "@id": churchId },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.fullName,
        inLanguage: "pt-BR",
        publisher: { "@id": churchId },
      },
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sourceSans.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
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
