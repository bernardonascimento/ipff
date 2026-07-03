import Image from "next/image";
import { ImageDown, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

/**
 * Abertura da página de acervo histórico. Segue o padrão de header escuro do
 * projeto (bg-primary, gradiente radial decorativo, padrão de pontos e faixa
 * de versículo na base).
 */
export function HistoriaHero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      {/* malha de gradiente decorativa */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_70%_at_15%_-10%,_#5b826066,_transparent_60%),radial-gradient(ellipse_70%_60%_at_100%_120%,_#205d0ad9,_transparent_55%)]"
      />
      {/* padrão de pontos sutil */}
      <div
        aria-hidden
        className="dotted-bg absolute inset-0 -z-10 text-primary-foreground/[0.05]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-28 pb-20 sm:px-6 md:grid-cols-12 md:gap-10 md:pt-36 md:pb-28">
        <div className="md:col-span-6">
          <span className="animate-rise text-xs font-medium tracking-[0.28em] text-primary-foreground/70 uppercase">
            Acervo Histórico · IPFF
          </span>
          <h1 className="animate-rise mt-5 font-heading text-5xl font-light leading-[1.02] tracking-tight [animation-delay:120ms] sm:text-6xl">
            Nossa História
          </h1>
          <div
            aria-hidden
            className="hairline-gold animate-rise mt-6 w-24 [animation-delay:200ms]"
          />
          <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 [animation-delay:280ms]">
            Este espaço foi criado para preservar e compartilhar a história da
            nossa igreja, reunindo registros, memórias e momentos que marcaram
            gerações desde a sua fundação.
          </p>

          <div className="animate-rise mt-9 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:items-center">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="group h-11 px-5 text-base"
            >
              <a href="#galeria">
                <ImageDown className="size-[1.1rem] transition-transform group-hover:translate-y-0.5" />
                Ver galeria
              </a>
            </Button>
            <span className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <QrCode className="size-4 text-accent" aria-hidden />
              Acesse pela Bíblia comemorativa via QR Code
            </span>
          </div>
        </div>

        {/* Imagem histórica de destaque, com a moldura editorial dupla. */}
        <div className="animate-rise md:col-span-6 [animation-delay:320ms]">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -right-3 -bottom-3 h-full w-full rounded-xl border border-accent/40"
            />
            <figure className="relative overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/20">
              <Image
                src="/50anos/cerimonia-e-culto-de-inauguracao-novo-templo-14.jpg"
                alt="Cerimônia e culto de inauguração do novo templo da IPFF, 1984"
                width={1200}
                height={900}
                priority
                sizes="(min-width: 768px) 42rem, 100vw"
                className="h-72 w-full object-cover object-center [filter:sepia(0.55)_contrast(1.05)_brightness(0.95)] sm:h-96"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-primary/70 px-4 py-2 text-xs text-primary-foreground/90">
                Inauguração do novo templo · 1984
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* faixa de versículo, estilo liturgia */}
      <div className="relative border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-5 sm:px-6">
          <span className="h-px w-10 shrink-0 bg-accent/70" />
          <p className="font-heading text-sm italic text-primary-foreground/75 sm:text-base">
            “{siteConfig.verse.text}”
            <span className="ml-2 text-primary-foreground/50 not-italic">
              — {siteConfig.verse.reference}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
