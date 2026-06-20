"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Carrossel automático de banners do cinquentenário (estilo Mercado Livre):
 * faixa larga 16:9 que avança sozinha, com setas, indicadores e arraste no
 * touch. Pausa ao passar o mouse / focar. Os banners do Purples e da Bíblia são
 * clicáveis (Sympla e loja); o do Watoto é apenas ilustrativo.
 */

type Banner = {
  src: string;
  alt: string;
  /** Destino externo ao clicar; ausente = banner não clicável. */
  href?: string;
};

const banners: Banner[] = [
  {
    src: "/purples.jpg",
    alt: "Purples em Franca — louvor e adoração, celebração do cinquentenário da IPFF. Ingressos na Sympla.",
    href: "https://www.sympla.com.br/evento/banda-purples-50-anos-ipff/3377956",
  },
  {
    src: "/biblia.jpg",
    alt: "Bíblia Sagrada Jubileu de Ouro — edição comemorativa dos 50 anos da IPFF. Adquira na loja.",
    href: "https://ipff50anos.gttconsulting.com.br/",
  },
  {
    src: "/watoto.jpg",
    alt: "Coral de Crianças Watoto em Franca-SP — apresentação especial do cinquentenário da IPFF.",
  },
];

const INTERVALO_MS = 5000;

/** Arte de um banner (16:9). */
function BannerImg({ banner, priority }: { banner: Banner; priority?: boolean }) {
  return (
    <Image
      src={banner.src}
      alt={banner.alt}
      width={1600}
      height={900}
      sizes="(min-width: 1024px) 1024px, 100vw"
      priority={priority}
      className="block h-auto w-full"
    />
  );
}

export function ProximosEventos() {
  const total = banners.length;
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);

  const irPara = useCallback(
    (i: number) => setAtual(((i % total) + total) % total),
    [total],
  );
  const proximo = useCallback(() => setAtual((p) => (p + 1) % total), [total]);
  const anterior = useCallback(
    () => setAtual((p) => (p - 1 + total) % total),
    [total],
  );

  // Avanço automático — respeita prefers-reduced-motion e a pausa por hover/foco.
  useEffect(() => {
    if (pausado) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(proximo, INTERVALO_MS);
    return () => window.clearInterval(id);
  }, [pausado, proximo, atual]);

  // Arraste/swipe no touch.
  const toqueX = useRef<number | null>(null);
  const aoIniciarToque = (e: React.TouchEvent) => {
    toqueX.current = e.touches[0].clientX;
  };
  const aoFinalizarToque = (e: React.TouchEvent) => {
    if (toqueX.current === null) return;
    const delta = e.changedTouches[0].clientX - toqueX.current;
    if (Math.abs(delta) > 50) (delta < 0 ? proximo : anterior)();
    toqueX.current = null;
  };

  return (
    <section
      id="eventos"
      className="relative isolate overflow-x-clip bg-[linear-gradient(to_bottom,var(--secondary),var(--background))] py-20 md:py-28"
    >
      {/* Textura de pontos sutil sobre o gradiente */}
      <div
        aria-hidden
        className="dotted-bg absolute inset-0 -z-10 text-foreground/[0.03]"
      />

      {/* Cabeçalho — no padrão das demais seções */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
            Próximos eventos
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary sm:text-xl">
            Celebrações e encontros especiais do nosso cinquentenário. Venha
            participar&nbsp;conosco.
          </p>
        </div>
      </div>

      {/* Mobile e tablet: imagens empilhadas, uma sob a outra */}
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-6 px-4 sm:mt-16 lg:hidden">
        {banners.map((banner, i) => {
          const conteudo = (
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <BannerImg banner={banner} priority={i === 0} />
            </div>
          );
          return banner.href ? (
            <a
              key={banner.src}
              href={banner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {conteudo}
            </a>
          ) : (
            <div key={banner.src}>{conteudo}</div>
          );
        })}
      </div>

      {/* Desktop: carrossel automático */}
      <div className="mx-auto mt-16 hidden max-w-6xl px-6 lg:block">
        <div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Banners dos próximos eventos"
          className="group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onFocusCapture={() => setPausado(true)}
          onBlurCapture={() => setPausado(false)}
          onTouchStart={aoIniciarToque}
          onTouchEnd={aoFinalizarToque}
        >
          {/* Faixa deslizante */}
          <div
            className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${atual * 100}%)` }}
          >
            {banners.map((banner, i) => {
              const conteudo = <BannerImg banner={banner} priority={i === 0} />;
              return (
                <div
                  key={banner.src}
                  className="w-full shrink-0"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} de ${total}`}
                  aria-hidden={i !== atual}
                >
                  {banner.href ? (
                    <a
                      href={banner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={i === atual ? 0 : -1}
                      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {conteudo}
                    </a>
                  ) : (
                    conteudo
                  )}
                </div>
              );
            })}
          </div>

          {/* Seta anterior */}
          <button
            type="button"
            onClick={anterior}
            aria-label="Banner anterior"
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-card/80 p-2 text-primary shadow-md backdrop-blur transition hover:bg-card focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:block sm:opacity-0 sm:group-hover:opacity-100"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Seta próximo */}
          <button
            type="button"
            onClick={proximo}
            aria-label="Próximo banner"
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-card/80 p-2 text-primary shadow-md backdrop-blur transition hover:bg-card focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:block sm:opacity-0 sm:group-hover:opacity-100"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Indicadores */}
          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
            {banners.map((banner, i) => (
              <button
                key={banner.src}
                type="button"
                onClick={() => irPara(i)}
                aria-label={`Ir para o banner ${i + 1}`}
                aria-current={i === atual}
                className={cn(
                  "h-2 rounded-full bg-white/60 shadow ring-1 ring-black/10 transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  i === atual ? "w-6 bg-white" : "w-2",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
