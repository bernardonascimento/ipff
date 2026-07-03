/**
 * Helpers da página de acervo histórico (/historia): rótulos de categoria,
 * derivação de décadas a partir do ano e a lógica de filtragem/busca usada
 * pelos filtros da galeria.
 */

import type { CategoriaFoto, FotoHistorica } from "@/data/historia-fotos";

/** Rótulos legíveis para cada categoria (ordem usada no filtro). */
export const CATEGORIAS: { value: CategoriaFoto; label: string }[] = [
  { value: "fundacao", label: "Fundação" },
  { value: "templo", label: "Templo" },
  { value: "cultos", label: "Cultos" },
  { value: "batismos", label: "Batismos" },
  { value: "lideranca", label: "Liderança" },
  { value: "ministerios", label: "Ministérios" },
  { value: "jovens", label: "Jovens" },
  { value: "eventos", label: "Eventos" },
  { value: "familias", label: "Famílias" },
  { value: "outros", label: "Outros" },
];

const ROTULOS: Record<CategoriaFoto, string> = Object.fromEntries(
  CATEGORIAS.map((c) => [c.value, c.label]),
) as Record<CategoriaFoto, string>;

/** Rótulo legível de uma categoria (fallback: o próprio valor). */
export function rotuloCategoria(categoria: CategoriaFoto): string {
  return ROTULOS[categoria] ?? categoria;
}

/** Década ("Década de 1980") a partir de um ano ("1984"). */
export function decadaDoAno(ano: string | undefined): string | undefined {
  if (!ano) return undefined;
  const n = Number(ano);
  if (!Number.isFinite(n)) return undefined;
  const inicio = Math.floor(n / 10) * 10;
  return `Década de ${inicio}`;
}

/** Décadas presentes no acervo, ordenadas cronologicamente. */
export function decadasDisponiveis(fotos: FotoHistorica[]): string[] {
  const set = new Set<string>();
  for (const foto of fotos) {
    const d = decadaDoAno(foto.ano);
    if (d) set.add(d);
  }
  return [...set].sort((a, b) => {
    const na = Number(a.replace(/\D/g, ""));
    const nb = Number(b.replace(/\D/g, ""));
    return na - nb;
  });
}

/** Normaliza texto para busca (minúsculas, sem acentos). */
function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

export type FiltroFotos = {
  busca?: string;
  categoria?: CategoriaFoto | "todas";
  decada?: string | "todas";
};

/** Aplica busca textual + filtro de categoria + filtro de década. */
export function filtrarFotos(
  fotos: FotoHistorica[],
  { busca, categoria, decada }: FiltroFotos,
): FotoHistorica[] {
  const termo = busca ? normalizar(busca) : "";
  return fotos.filter((foto) => {
    if (categoria && categoria !== "todas" && foto.categoria !== categoria) {
      return false;
    }
    if (decada && decada !== "todas" && decadaDoAno(foto.ano) !== decada) {
      return false;
    }
    if (termo) {
      const alvo = normalizar(
        [foto.titulo, foto.descricao, foto.ano, foto.local, foto.periodo]
          .filter(Boolean)
          .join(" "),
      );
      if (!alvo.includes(termo)) return false;
    }
    return true;
  });
}
