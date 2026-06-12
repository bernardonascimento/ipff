import Link from "next/link";
import Image from "next/image";
import { Play, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] flex-col overflow-hidden bg-primary text-primary-foreground">
      {/* vídeo de fundo em loop, mudo e autoplay — self-hosted, com poster
          (primeiro frame) renderizado no HTML para não haver flash até o vídeo tocar */}
      <video
        aria-hidden
        tabIndex={-1}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* degradê horizontal: preto à esquerda → leve à direita (legibilidade do texto) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,oklch(0_0_0_/_0.8)_0%,oklch(0_0_0_/_0.58)_38%,oklch(0_0_0_/_0.24)_72%,oklch(0_0_0_/_0.08)_100%)]"
      />
      {/* vinheta superior/inferior para profundidade e a faixa do versículo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_bottom,oklch(0_0_0_/_0.4)_0%,transparent_28%,transparent_58%,oklch(0_0_0_/_0.65)_100%)]"
      />
      {/* padrão de pontos sutil */}
      <div
        aria-hidden
        className="dotted-bg absolute inset-0 -z-10 text-primary-foreground/[0.06]"
      />
      {/* marca d'água — logo, grid-breaking */}
      <Image
        src="/logo.png"
        alt=""
        aria-hidden
        width={420}
        height={420}
        className="pointer-events-none absolute -right-10 top-1/2 -z-10 hidden w-[26rem] -translate-y-1/2 opacity-[0.08] md:block"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 md:pb-32 md:pt-36">
        <div className="max-w-4xl">
          <h1 className="animate-rise font-heading text-3xl font-light leading-[1.28] tracking-tight [animation-delay:120ms] sm:text-4xl md:text-5xl">
            Uma família de amor que discipula e testemunha o evangelho de Jesus
            Cristo para a glória de Deus
          </h1>

          <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 [animation-delay:240ms] sm:mt-7 sm:text-lg">
            Seja bem-vindo à Igreja Presbiteriana Filadélfia de Franca. Nosso
            desejo é que você encontre aqui um lugar para adorar a Deus, crescer
            na fé e caminhar em comunhão com outros irmãos em Cristo.
          </p>

          <div className="animate-rise mt-9 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <Button
              asChild
              variant="secondary"
              className="group h-11 px-5 text-base"
            >
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="size-[1.1rem] transition-transform group-hover:scale-110" />
                Assista ao vivo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 border-primary-foreground/25 bg-transparent px-5 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="#quem-somos">
                Conheça a igreja
                <ArrowDown className="size-[1.1rem]" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* faixa de versículo, estilo liturgia */}
      <div className="relative border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-5 sm:px-6">
          <span className="h-px w-10 shrink-0 bg-accent/70" />
          <p className="font-heading text-sm italic text-primary-foreground/75 sm:text-base">
            “{siteConfig.verse.text}”
            <span className="ml-2 not-italic text-primary-foreground/50">
              — {siteConfig.verse.reference}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
