"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import { HistoriaFiltros } from "@/components/sections/historia-filtros";
import { HistoriaLightbox } from "@/components/sections/historia-lightbox";
import {
  decadasDisponiveis,
  filtrarFotos,
  rotuloCategoria,
} from "@/lib/historia-utils";
import type { CategoriaFoto, FotoHistorica } from "@/data/historia-fotos";

type HistoriaGaleriaProps = {
  fotos: FotoHistorica[];
};

/**
 * Galeria do acervo. Orquestra a filtragem (busca/categoria/década) e a
 * abertura do lightbox — por isso é um Client Component. A apresentação dos
 * controles fica em <HistoriaFiltros> e o modal em <HistoriaLightbox>.
 */
export function HistoriaGaleria({ fotos }: HistoriaGaleriaProps) {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState<CategoriaFoto | "todas">("todas");
  const [decada, setDecada] = useState<string>("todas");
  const [indice, setIndice] = useState<number | null>(null);

  const decadas = useMemo(() => decadasDisponiveis(fotos), [fotos]);

  const fotosFiltradas = useMemo(
    () => filtrarFotos(fotos, { busca, categoria, decada }),
    [fotos, busca, categoria, decada],
  );

  return (
    <section id="galeria" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <span className="text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">
            Galeria
          </span>
          <h2 className="mt-4 font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
            Fotos do acervo
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Navegue pelas memórias da nossa igreja. Use a busca e os filtros
            para encontrar um período, evento ou ministério.
          </p>
        </header>

        <div className="mt-10">
          <HistoriaFiltros
            busca={busca}
            onBuscaChange={setBusca}
            categoria={categoria}
            onCategoriaChange={setCategoria}
            decada={decada}
            onDecadaChange={setDecada}
            decadas={decadas}
            total={fotosFiltradas.length}
          />
        </div>

        {fotosFiltradas.length === 0 ? (
          <div className="mt-14 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-16 text-center">
            <ImageOff className="size-8 text-muted-foreground" aria-hidden />
            <p className="max-w-sm text-muted-foreground">
              Nenhuma foto encontrada para este filtro. Tente outro período ou
              categoria.
            </p>
          </div>
        ) : (
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {fotosFiltradas.map((foto, i) => (
              <li key={foto.id}>
                <button
                  type="button"
                  onClick={() => setIndice(i)}
                  className="group relative block w-full overflow-hidden rounded-xl bg-secondary/50 ring-1 ring-border transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  aria-label={
                    foto.titulo
                      ? `Abrir foto: ${foto.titulo}`
                      : "Abrir foto do acervo"
                  }
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={foto.src}
                      alt={foto.alt}
                      width={640}
                      height={480}
                      loading="lazy"
                      sizes="(min-width: 1024px) 16rem, (min-width: 640px) 30vw, 45vw"
                      className="h-full w-full object-cover transition-[filter,transform] duration-500 [filter:sepia(0.85)_contrast(1.05)_brightness(0.92)] group-hover:scale-105 group-hover:[filter:none]"
                    />
                  </div>

                  {/* Legenda deslizante no hover */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-primary/85 px-3 py-2 text-left text-primary-foreground/90 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                    <p className="truncate text-sm font-medium">
                      {foto.titulo ?? "Registro do acervo"}
                    </p>
                    <p className="truncate text-xs text-primary-foreground/70">
                      {[foto.ano, rotuloCategoria(foto.categoria)]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <HistoriaLightbox
        fotos={fotosFiltradas}
        indice={indice}
        onFechar={() => setIndice(null)}
        onNavegar={setIndice}
      />
    </section>
  );
}
