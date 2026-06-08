import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Agenda",
  description: `Confira a agenda de cultos, estudos e eventos da ${siteConfig.fullName}.`,
};

export default function AgendaPage() {
  const src = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
    siteConfig.googleCalendarId,
  )}&ctz=${encodeURIComponent(siteConfig.googleCalendarTimeZone)}&mode=AGENDA`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Programação
        </p>
        <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight">
          Agenda
        </h1>
        <p className="mt-4 text-muted-foreground">
          Acompanhe os cultos, estudos e eventos da nossa igreja. A agenda é
          sincronizada com o Google Agenda da IPFF.
        </p>
      </header>

      <div className="mt-10 overflow-hidden rounded-xl border shadow-sm">
        <iframe
          title="Agenda da IPFF no Google Agenda"
          src={src}
          className="h-[640px] w-full"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>

      {/* NOTA: substituir `googleCalendarId` em src/config/site.ts pelo
          calendário PÚBLICO da igreja para exibir os eventos reais. */}
    </div>
  );
}
