import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PurplesCarousel } from "@/components/sections/purples-carousel";
import { PurplesForm } from "@/components/sections/purples-form";

/**
 * Hero do evento: vídeo de fundo e, abaixo, o carrossel parallax da banda
 * (à esquerda) ao lado do formulário de inscrição gratuita (à direita).
 * Estilo pop-rock, escuro "ameixa".
 */
export function PurplesHero() {
  const { purples } = siteConfig;
  const { event } = purples;

  return (
    <section className="relative isolate -mt-20 overflow-hidden bg-[var(--pp-bg)] text-[var(--pp-fg)]">
      {/* Vídeo de fundo — mudo, autoplay, loop (igual ao hero da home) */}
      <video
        aria-hidden
        tabIndex={-1}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/purples/banda.jpg"
        className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover"
      >
        <source src="/purples/background.mp4" type="video/mp4" />
      </video>

      {/* Escurecimento + clima ameixa para legibilidade */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_bottom,rgba(12,10,18,0.82)_0%,rgba(12,10,18,0.7)_45%,rgba(12,10,18,0.9)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_55%_45%_at_80%_5%,rgba(217,70,239,0.22),transparent_60%)]"
      />
      <div
        aria-hidden
        className="dotted-bg absolute inset-0 -z-10 text-white/[0.05]"
      />

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:pb-24 lg:pt-36">
        {/* h1 oculto — mantém o título da página para SEO/acessibilidade */}
        <h1 className="sr-only">{purples.title} — evento gratuito</h1>

        {/* Marca + selo do evento */}
        <div className="animate-rise flex items-center gap-4">
          <Image
            src="/purples/purples_white.png"
            alt="Purples"
            width={150}
            height={40}
            priority
            className="h-6 w-auto opacity-95 sm:h-9"
          />
          <span className="pp-chip-ring relative inline-flex rounded-full p-[1.5px] shadow-[0_0_22px_-4px_var(--pp-magenta)]">
            <span className="rounded-full bg-[rgba(12,10,18,0.9)] px-3 py-1 backdrop-blur-sm sm:px-4 sm:py-1.5">
              <span className="font-display whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.14em] text-[var(--pp-coral)] sm:text-xs sm:tracking-[0.2em]">
                Evento gratuito
              </span>
            </span>
          </span>
        </div>

        {/* Carrossel (esquerda) + formulário (direita) */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-2 lg:items-end lg:gap-24">
          <div className="animate-rise mx-auto w-full max-w-sm [animation-delay:360ms] lg:mx-0 lg:max-w-none">
            <PurplesCarousel fotos={purples.gallery} />
          </div>

          <div
            id="inscricao"
            className="animate-rise w-full scroll-mt-24 [animation-delay:420ms]"
          >
            {/* Data · hora · local, acima do formulário */}
            <div className="mb-5 border-l-2 border-[var(--pp-magenta)] pl-4">
              <p className="font-display flex items-center gap-2.5 text-lg font-bold text-white">
                <Calendar className="size-5 shrink-0 text-[var(--pp-magenta)]" />
                {event.date} às {event.time}
              </p>
              <p className="mt-2 flex items-center gap-2.5 text-white/75">
                <MapPin className="size-5 shrink-0 text-[var(--pp-magenta)]" />
                {event.venue}
              </p>
            </div>
            <PurplesForm />
          </div>
        </div>
      </div>
    </section>
  );
}
