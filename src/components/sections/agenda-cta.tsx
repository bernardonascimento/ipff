import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AgendaCta() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
      <div
        aria-hidden
        className="dotted-bg absolute inset-0 -z-10 text-primary-foreground/[0.06]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,_oklch(0.55_0.1_150_/_0.5),_transparent_60%)]"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-4 text-center sm:px-6">
        <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary-foreground/60">
          Agenda
        </span>
        <h2 className="font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Fique por dentro da vida da igreja
        </h2>
        <div aria-hidden className="hairline-gold w-24" />
        <p className="max-w-xl leading-relaxed text-primary-foreground/80">
          Cultos, estudos, eventos e atividades — tudo em um só lugar, sempre
          atualizado pela nossa agenda.
        </p>
        <Button asChild size="lg" variant="secondary" className="group mt-1">
          <Link href="/agenda">
            Ver agenda completa
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
