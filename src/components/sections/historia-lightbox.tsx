"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { rotuloCategoria } from "@/lib/historia-utils";
import type { FotoHistorica } from "@/data/historia-fotos";

type HistoriaLightboxProps = {
  fotos: FotoHistorica[];
  /** Índice da foto aberta (na lista filtrada) ou null quando fechado. */
  indice: number | null;
  onFechar: () => void;
  onNavegar: (novoIndice: number) => void;
};

/**
 * Modal de visualização de uma foto do acervo, com navegação entre as fotos
 * da lista filtrada. Fechamento por ESC/clique fora/×; setas ←→ navegam.
 */
export function HistoriaLightbox({
  fotos,
  indice,
  onFechar,
  onNavegar,
}: HistoriaLightboxProps) {
  const aberto = indice !== null;
  const foto = aberto ? fotos[indice] : undefined;
  const total = fotos.length;

  const irAnterior = useCallback(() => {
    if (indice === null || total === 0) return;
    onNavegar((indice - 1 + total) % total);
  }, [indice, total, onNavegar]);

  const irProxima = useCallback(() => {
    if (indice === null || total === 0) return;
    onNavegar((indice + 1) % total);
  }, [indice, total, onNavegar]);

  // Navegação por teclado (as setas complementam o foco do Dialog do radix).
  useEffect(() => {
    if (!aberto) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") irAnterior();
      else if (e.key === "ArrowRight") irProxima();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberto, irAnterior, irProxima]);

  if (!foto) return null;

  const legenda = [
    foto.ano,
    foto.local,
    rotuloCategoria(foto.categoria),
  ].filter(Boolean);

  return (
    <Dialog open={aberto} onOpenChange={(v) => !v && onFechar()}>
      <DialogContent
        showCloseButton={false}
        className="max-w-[calc(100%-1rem)] gap-0 overflow-hidden bg-primary p-0 text-primary-foreground ring-primary-foreground/10 sm:max-w-4xl"
      >
        {/* Botão de fechar próprio — claro, para contrastar com o fundo escuro. */}
        <DialogClose asChild>
          <Button
            type="button"
            variant="secondary"
            size="icon-sm"
            aria-label="Fechar"
            className="absolute top-2 right-2 z-10 rounded-full opacity-90"
          >
            <X className="size-4" />
          </Button>
        </DialogClose>

        <DialogTitle className="sr-only">
          {foto.titulo ?? "Foto do acervo histórico da IPFF"}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {foto.alt}
        </DialogDescription>

        {/* Imagem */}
        <div className="relative flex max-h-[70vh] items-center justify-center bg-black">
          <Image
            src={foto.src}
            alt={foto.alt}
            width={1400}
            height={1050}
            sizes="(min-width: 640px) 56rem, 100vw"
            className="max-h-[70vh] w-auto object-contain"
          />

          {total > 1 && (
            <>
              <Button
                type="button"
                variant="secondary"
                size="icon-lg"
                onClick={irAnterior}
                aria-label="Foto anterior"
                className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full opacity-90"
              >
                <ChevronLeft className="size-5" />
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="icon-lg"
                onClick={irProxima}
                aria-label="Próxima foto"
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full opacity-90"
              >
                <ChevronRight className="size-5" />
              </Button>
            </>
          )}
        </div>

        {/* Legenda */}
        <div className="flex items-start justify-between gap-4 px-5 py-4">
          <div>
            <p className="font-heading text-lg leading-snug">
              {foto.titulo ?? "Registro do acervo histórico"}
            </p>
            {foto.descricao && (
              <p className="mt-1 text-sm text-primary-foreground/70">
                {foto.descricao}
              </p>
            )}
            {legenda.length > 0 && (
              <p className="mt-2 text-xs tracking-wide text-primary-foreground/60 uppercase">
                {legenda.join(" · ")}
              </p>
            )}
          </div>
          {total > 1 && indice !== null && (
            <span className="shrink-0 pt-1 text-xs tabular-nums text-primary-foreground/50">
              {indice + 1} / {total}
            </span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
