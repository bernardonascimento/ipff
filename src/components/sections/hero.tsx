import Link from "next/link";
import { Play, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

/** Selo/monograma decorativo — círculo com cruz, evocando um selo eclesiástico. */
function Seal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden>
      <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="1" />
      <circle
        cx="100"
        cy="100"
        r="78"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="2 4"
      />
      <path
        d="M100 44v112M100 92c0-14 0-22 16-22M100 92c0-14 0-22-16-22"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      {/* malha de gradiente em verde */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_80%_-10%,_oklch(0.58_0.11_150_/_0.55),_transparent_60%),radial-gradient(ellipse_60%_50%_at_0%_110%,_oklch(0.28_0.06_162_/_0.85),_transparent_55%)]"
      />
      {/* padrão de pontos sutil */}
      <div
        aria-hidden
        className="dotted-bg absolute inset-0 -z-10 text-primary-foreground/[0.05]"
      />
      {/* selo decorativo, grid-breaking */}
      <Seal className="pointer-events-none absolute -right-16 top-1/2 -z-10 hidden w-[34rem] -translate-y-1/2 text-primary-foreground/[0.07] md:block" />

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 md:pb-32 md:pt-36">
        <div className="max-w-3xl">
          <p className="animate-rise text-xs font-medium uppercase tracking-[0.28em] text-primary-foreground/70 [animation-delay:0ms]">
            Igreja Presbiteriana do Brasil · Franca/SP
          </p>

          <h1 className="animate-rise mt-6 font-heading text-5xl font-light leading-[1.02] tracking-tight [animation-delay:120ms] sm:text-6xl md:text-7xl">
            {siteConfig.tagline}
          </h1>

          <p className="animate-rise mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/80 [animation-delay:240ms] sm:text-lg">
            Seja bem-vindo à {siteConfig.fullName}. Venha adorar a Deus conosco e
            fazer parte da nossa comunidade.
          </p>

          <div className="animate-rise mt-9 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="group">
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="size-4 transition-transform group-hover:scale-110" />
                Assista ao vivo
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="#boas-vindas">
                Conheça a igreja
                <ArrowDown className="size-4" />
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
