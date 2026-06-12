import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "50 Anos",
  description: `Comemoração dos 50 anos da ${siteConfig.fullName}. Em breve.`,
};

export default function CinquentaAnosPage() {
  return (
    <section className="relative isolate grid min-h-[80vh] place-items-center overflow-hidden bg-primary px-4 py-28 text-center text-primary-foreground">
      {/* malha de gradiente */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_70%_at_50%_-10%,_#5b826080,_transparent_60%),radial-gradient(ellipse_70%_60%_at_50%_120%,_#205d0ad9,_transparent_55%)]"
      />
      {/* padrão de pontos */}
      <div
        aria-hidden
        className="dotted-bg absolute inset-0 -z-10 text-primary-foreground/[0.05]"
      />
      {/* marca d'água "50" gigante, grid-breaking */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none font-heading text-[18rem] font-light leading-none text-primary-foreground/[0.06] sm:text-[26rem] md:text-[34rem]"
      >
        50
      </span>

      <div className="relative flex w-full max-w-2xl flex-col items-center gap-7 justify-self-center">
        <span className="animate-rise text-xs font-medium uppercase tracking-[0.28em] text-primary-foreground/70">
          Em breve
        </span>
        <h1 className="animate-rise font-heading text-6xl font-light leading-[1.02] tracking-tight [animation-delay:120ms] sm:text-7xl md:text-8xl">
          50 Anos
        </h1>
        <div
          aria-hidden
          className="hairline-gold animate-rise w-24 [animation-delay:200ms]"
        />
        <p className="animate-rise w-full max-w-xl text-lg leading-relaxed text-primary-foreground/80 [animation-delay:280ms]">
          Estamos preparando uma página especial para celebrar meio século de
          fidelidade de Deus à {siteConfig.fullName}. Volte em breve para
          conferir esta história.
        </p>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="animate-rise group mt-2 [animation-delay:360ms]"
        >
          <Link href="/">
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            Voltar ao início
          </Link>
        </Button>
      </div>
    </section>
  );
}
