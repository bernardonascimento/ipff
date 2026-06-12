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
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,_#5b826080,_transparent_60%)]"
      />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-7 px-4 text-center sm:px-6">
        <h2 className="font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:whitespace-nowrap">
          Ore, envolva-se e faça parte!
        </h2>
        <div aria-hidden className="hairline-gold w-24" />
        <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
          Cultos, estudos, eventos e atividades tudo em um só lugar.
        </p>
        <Button
          asChild
          variant="secondary"
          className="group mt-1 h-11 px-5 text-base"
        >
          <Link href="/agenda">
            Ver agenda completa
            <ArrowRight className="size-[1.1rem] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
