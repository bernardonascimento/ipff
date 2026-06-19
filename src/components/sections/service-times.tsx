import Image from "next/image";
import { Church, BookOpen, Sunrise } from "lucide-react";
import { PrayingHandsIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

/** Ícone de cada culto, por título. */
const iconByTitle: Record<string, React.ElementType> = {
  "Reuniões de Oração": PrayingHandsIcon,
  "Escola Bíblica Dominical": BookOpen,
  "Culto de Adoração Vespertino": Church,
  "Culto Maranata": Sunrise,
};

export function ServiceTimes() {
  return (
    <section id="cultos" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Cabeçalho: logo + título + subtítulo */}
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-10 md:text-left">
          <Image
            src="/logo-verde.png"
            alt="50 anos — Igreja Presbiteriana Filadélfia de Franca"
            width={224}
            height={224}
            className="size-40 shrink-0 object-contain md:size-56"
          />
          <div className="md:border-l md:border-primary/15 md:pl-10">
            <h2 className="font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
              Reuniões de Oração, EBD e Culto
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary sm:text-xl md:mx-0">
              Reunimo-nos durante a semana para adorar a Deus, estudar a Palavra
              e viver em comunhão. Venha nos visitar — você será muito bem
              recebido.
            </p>
          </div>
        </div>

        {/* Cards dos cultos */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service, i) => {
            const Icon = iconByTitle[service.title] ?? Church;
            return (
              <article
                key={service.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Topo: faixa verde (xadrez entre primária e secundária) com ícone */}
                <div
                  className={`relative flex justify-center py-4 ${
                    i % 2 === 0
                      ? "bg-[linear-gradient(135deg,#205d0a_0%,#0e3400_100%)]"
                      : "bg-[linear-gradient(135deg,#5b8260_0%,#205d0a_100%)]"
                  }`}
                >
                  <div
                    aria-hidden
                    className="dotted-bg absolute inset-0 text-primary-foreground/[0.06]"
                  />
                  <span className="relative flex size-16 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground">
                    <Icon className="size-7" strokeWidth={1.5} />
                  </span>
                </div>

                {/* Corpo: título + traço + descrição */}
                <div className="flex flex-1 flex-col items-center px-5 py-5 text-center">
                  <h3 className="flex min-h-[3.5rem] items-center font-heading text-xl font-medium leading-snug tracking-tight text-primary">
                    {service.title}
                  </h3>
                  <div aria-hidden className="hairline-gold mt-4 w-14" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Rodapé: dia + horário */}
                <div className="flex items-center justify-between gap-2 border-t border-primary/10 bg-primary px-6 py-4 text-primary-foreground">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground/70">
                    {service.day}
                  </span>
                  <span className="font-heading text-2xl font-light tabular-nums">
                    {service.time}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
