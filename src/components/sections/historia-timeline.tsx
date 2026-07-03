import Image from "next/image";
import { marcos } from "@/data/historia-marcos";

/**
 * Linha do tempo vertical dos marcos históricos. Dados em
 * src/data/historia-marcos.ts.
 *
 * Desktop: ano à esquerda, ponto conector e linha vertical ao centro,
 * conteúdo à direita. Mobile: ano acima, conteúdo abaixo.
 */
export function HistoriaTimeline() {
  return (
    <section id="linha-do-tempo" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <span className="text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">
            Linha do tempo
          </span>
          <h2 className="mt-4 font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
            Marcos da nossa caminhada
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Momentos que marcaram a trajetória da igreja ao longo das décadas.
          </p>
        </header>

        <ol className="mt-14 space-y-12 md:space-y-16">
          {marcos.map((marco, i) => (
            <li
              key={`${marco.ano}-${i}`}
              className="grid gap-4 md:grid-cols-[8rem_auto_1fr] md:gap-8"
            >
              {/* Ano — acima no mobile, à esquerda no desktop */}
              <div className="md:pt-1 md:text-right">
                <span className="font-heading text-4xl font-light text-accent tabular-nums sm:text-5xl">
                  {marco.ano}
                </span>
              </div>

              {/* Conector central (apenas desktop) */}
              <div
                aria-hidden
                className="relative hidden justify-center md:flex"
              >
                <span className="mt-3 size-3 shrink-0 rounded-full bg-accent ring-4 ring-secondary/40" />
                {i < marcos.length - 1 && (
                  <span className="absolute top-3 bottom-[-4rem] w-px bg-accent/25" />
                )}
              </div>

              {/* Conteúdo */}
              <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <h3 className="font-heading text-2xl font-medium tracking-tight text-primary">
                    {marco.titulo}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-foreground/75">
                    {marco.descricao}
                  </p>
                </div>

                {marco.foto && (
                  <div className="relative sm:w-56">
                    <div
                      aria-hidden
                      className="absolute -right-3 -bottom-3 h-full w-full rounded-xl border border-accent/40"
                    />
                    <div className="relative overflow-hidden rounded-xl shadow-md">
                      <Image
                        src={marco.foto}
                        alt={marco.fotoAlt ?? marco.titulo}
                        width={480}
                        height={360}
                        loading="lazy"
                        sizes="(min-width: 640px) 14rem, 100vw"
                        className="aspect-[4/3] w-full object-cover [filter:sepia(0.8)_contrast(1.05)_brightness(0.95)]"
                      />
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
