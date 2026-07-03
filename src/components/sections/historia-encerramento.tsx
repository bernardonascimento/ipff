import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Fechamento emocional da página. Fundo escuro, frase de legado e retorno
 * ao site principal. Mantida como RSC (sem estado/eventos de navegador).
 */
export function HistoriaEncerramento() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-24 text-center text-primary-foreground md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_70%_at_50%_-10%,_#5b826066,_transparent_60%),radial-gradient(ellipse_70%_60%_at_50%_120%,_#205d0ad9,_transparent_55%)]"
      />
      <div
        aria-hidden
        className="dotted-bg absolute inset-0 -z-10 text-primary-foreground/[0.05]"
      />

      <div className="mx-auto flex max-w-2xl flex-col items-center gap-7 px-4 sm:px-6">
        <blockquote className="font-heading text-3xl font-light leading-[1.2] tracking-tight sm:text-4xl">
          “Ao Senhor pertence a nossa história. A Ele toda honra, louvor e
          glória.”
        </blockquote>
        <div aria-hidden className="hairline-gold w-24" />
        <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          Gratidão a cada pessoa que faz parte desta caminhada. Que estas
          memórias inspirem as próximas gerações a permanecerem firmes na fé.
        </p>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="group mt-2 h-11 px-5 text-base"
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
