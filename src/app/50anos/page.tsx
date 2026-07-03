import type { Metadata } from "next";
import { HistoriaHero } from "@/components/sections/historia-hero";
import { HistoriaIntro } from "@/components/sections/historia-intro";
import { HistoriaTimeline } from "@/components/sections/historia-timeline";
import { HistoriaGaleria } from "@/components/sections/historia-galeria";
import { HistoriaComunidade } from "@/components/sections/historia-comunidade";
import { HistoriaEncerramento } from "@/components/sections/historia-encerramento";
import { fotos } from "@/data/historia-fotos";

export const metadata: Metadata = {
  title: "50 Anos",
  description:
    "Conheça a história da Igreja Presbiteriana Filadélfia de Franca através de fotos, registros e memórias que marcaram gerações.",
  alternates: { canonical: "/50anos" },
  openGraph: {
    title: "50 Anos — Igreja Presbiteriana Filadélfia de Franca",
    description:
      "Fotos, registros e memórias que preservam a história da Igreja Presbiteriana Filadélfia de Franca ao longo das décadas.",
    url: "/50anos",
    images: [{ url: "/og.jpg" }],
  },
};

export default function CinquentaAnosPage() {
  return (
    <>
      <HistoriaHero />
      <HistoriaIntro />
      <HistoriaTimeline />
      <HistoriaGaleria fotos={fotos} />
      <HistoriaComunidade />
      <HistoriaEncerramento />
    </>
  );
}
