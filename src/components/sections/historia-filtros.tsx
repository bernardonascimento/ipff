"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIAS } from "@/lib/historia-utils";
import type { CategoriaFoto } from "@/data/historia-fotos";

type HistoriaFiltrosProps = {
  busca: string;
  onBuscaChange: (valor: string) => void;
  categoria: CategoriaFoto | "todas";
  onCategoriaChange: (valor: CategoriaFoto | "todas") => void;
  decada: string;
  onDecadaChange: (valor: string) => void;
  decadas: string[];
  /** Nº de resultados após os filtros (para o contador). */
  total: number;
};

/**
 * Controles de filtragem da galeria: busca textual, categoria e década.
 * Componente controlado — o estado vive em <HistoriaGaleria>.
 */
export function HistoriaFiltros({
  busca,
  onBuscaChange,
  categoria,
  onCategoriaChange,
  decada,
  onDecadaChange,
  decadas,
  total,
}: HistoriaFiltrosProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_12rem_12rem]">
        {/* Busca textual */}
        <div className="relative">
          <Search
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            value={busca}
            onChange={(e) => onBuscaChange(e.target.value)}
            placeholder="Buscar por título, ano ou local…"
            aria-label="Buscar fotos do acervo"
            className="h-11 pl-9"
          />
        </div>

        {/* Categoria */}
        <Select
          value={categoria}
          onValueChange={(v) => onCategoriaChange(v as CategoriaFoto | "todas")}
        >
          <SelectTrigger className="h-11" aria-label="Filtrar por categoria">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas as categorias</SelectItem>
            {CATEGORIAS.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Década */}
        <Select value={decada} onValueChange={onDecadaChange}>
          <SelectTrigger className="h-11" aria-label="Filtrar por década">
            <SelectValue placeholder="Década" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas as décadas</SelectItem>
            {decadas.map((d) => (
              <SelectItem key={d} value={d}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p
        className="text-sm text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        {total === 0
          ? "Nenhuma foto encontrada"
          : total === 1
            ? "1 foto encontrada"
            : `${total} fotos encontradas`}
      </p>
    </div>
  );
}
