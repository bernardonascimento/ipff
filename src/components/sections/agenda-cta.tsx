import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AgendaCta() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <CalendarDays className="size-10 text-primary-foreground/70" strokeWidth={1.5} />
        <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Fique por dentro da nossa agenda
        </h2>
        <p className="max-w-xl text-primary-foreground/80">
          Cultos, estudos, eventos e atividades da igreja — tudo em um só lugar,
          sempre atualizado.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/agenda">
            Ver agenda completa
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
