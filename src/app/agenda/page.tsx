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
    <>
      {/* Cabeçalho editorial sobre verde-pinho */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_85%_-20%,_#5b826080,_transparent_60%)]"
        />
        <div
          aria-hidden
          className="dotted-bg absolute inset-0 -z-10 text-primary-foreground/[0.05]"
        />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 md:pb-20 md:pt-36">
          <h1 className="animate-rise max-w-3xl font-heading text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl">
            Agenda da igreja
          </h1>
          <p className="animate-rise mt-6 max-w-xl leading-relaxed text-primary-foreground/80 [animation-delay:120ms]">
            Acompanhe os cultos, estudos e eventos da IPFF. A agenda é
            sincronizada com o Google Agenda da igreja, sempre atualizada.
          </p>
        </div>
        <div className="relative border-t border-primary-foreground/15">
          <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-5 sm:px-6">
            <span className="h-px w-10 shrink-0 bg-accent/70" />
            <p className="font-heading text-sm italic text-primary-foreground/75">
              “Tudo, porém, seja feito com decência e ordem.”
              <span className="ml-2 not-italic text-primary-foreground/50">
                — 1 Coríntios 14.40
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Calendário com moldura editorial */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border border-accent/40"
            />
            <div className="relative overflow-hidden rounded-xl border shadow-lg ring-1 ring-black/5">
              <iframe
                title="Agenda da IPFF no Google Agenda"
                src={src}
                className="h-[640px] w-full"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NOTA: substituir `googleCalendarId` em src/config/site.ts pelo
          calendário PÚBLICO da igreja para exibir os eventos reais. */}
    </>
  );
}
