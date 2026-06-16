"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import council from "@/data/council.json";

export function Leadership() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section id="lideranca" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Cabeçalho + controles */}
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
            Conselho da IPFF
          </h2>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              aria-label="Anterior"
              className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              aria-label="Próximo"
              className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Trilho do carrossel */}
        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {council.map((person, i) => (
            <article
              key={i}
              className="group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl ring-1 ring-border sm:w-[46%] lg:w-[31%] xl:w-[30%]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 78vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.15]"
                />
                {/* gradiente para legibilidade da faixa */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(to_top,#0e3400e6,transparent_45%)]"
                />
                {/* faixa com nome + cargo */}
                <div className="absolute inset-x-3 bottom-3 rounded-xl bg-primary/80 px-4 py-3 text-center backdrop-blur-sm ring-1 ring-primary-foreground/10">
                  <p className="font-heading text-base font-medium uppercase tracking-wide text-primary-foreground sm:text-lg">
                    {person.name}
                  </p>
                  <p className="mt-0.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
                    {person.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
