/**
 * Manifesto das fotos do acervo histórico da IPFF.
 *
 * Os metadados abaixo foram derivados dos nomes originais dos arquivos.
 * Edite livremente — fotos sem título/descrição estão marcadas com TODO.
 *
 * Como adicionar uma foto nova:
 *   1. Coloque o arquivo em public/50anos/ (nome em kebab-case, sem acentos).
 *   2. Acrescente uma entrada ao array `fotos` abaixo com `categoria` válida.
 * Para criar uma nova categoria, adicione o valor ao union `CategoriaFoto`
 * e à lista de opções em historia-utils.ts (CATEGORIAS).
 */

export type CategoriaFoto =
  | "fundacao"
  | "cultos"
  | "batismos"
  | "lideranca"
  | "templo"
  | "jovens"
  | "eventos"
  | "ministerios"
  | "familias"
  | "outros";

export type FotoHistorica = {
  id: string;
  src: string;
  alt: string;
  titulo?: string;
  descricao?: string;
  ano?: string;
  periodo?: string;
  categoria: CategoriaFoto;
  local?: string;
  pessoas?: string[];
};

export const fotos: FotoHistorica[] = [
  {
    id: "foto-historica-1",
    src: "/50anos/foto-historica-1.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "pedra-fundamental-2",
    src: "/50anos/pedra-fundamental-2.jpg",
    alt: "Pedra Fundamental — acervo histórico da IPFF",
    titulo: "Pedra Fundamental",
    categoria: "fundacao",
  },
  {
    id: "pedra-fundamental-3",
    src: "/50anos/pedra-fundamental-3.jpg",
    alt: "Pedra fundamental — acervo histórico da IPFF",
    titulo: "Pedra fundamental",
    categoria: "fundacao",
  },
  {
    id: "foto-historica-4",
    src: "/50anos/foto-historica-4.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-5",
    src: "/50anos/foto-historica-5.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "almoco-sitio-claudio-penha-6",
    src: "/50anos/almoco-sitio-claudio-penha-6.jpg",
    alt: "Almoço Sítio Claudio Penha — acervo histórico da IPFF",
    titulo: "Almoço Sítio Claudio Penha",
    categoria: "eventos",
  },
  {
    id: "almoco-sitio-claudio-penha-7",
    src: "/50anos/almoco-sitio-claudio-penha-7.jpg",
    alt: "Almoço Sítio Claudio Penha — acervo histórico da IPFF",
    titulo: "Almoço Sítio Claudio Penha",
    categoria: "eventos",
  },
  {
    id: "lembranca-da-inauguracao-do-templo-8",
    src: "/50anos/lembranca-da-inauguracao-do-templo-8.jpg",
    alt: "Lembrança da Inauguração do Templo — acervo histórico da IPFF",
    titulo: "Lembrança da Inauguração do Templo",
    categoria: "templo",
  },
  {
    id: "foto-historica-9",
    src: "/50anos/foto-historica-9.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "templo-afonso-pena-10",
    src: "/50anos/templo-afonso-pena-10.jpg",
    alt: "Templo Afonso Pena — acervo histórico da IPFF",
    titulo: "Templo Afonso Pena",
    categoria: "templo",
  },
  {
    id: "posse-diaconos-1981-11",
    src: "/50anos/posse-diaconos-1981-11.jpg",
    alt: "Posse Diáconos, 1981 — acervo histórico da IPFF",
    titulo: "Posse Diáconos, 1981",
    ano: "1981",
    categoria: "lideranca",
  },
  {
    id: "imposicao-de-maos-12",
    src: "/50anos/imposicao-de-maos-12.jpg",
    alt: "Imposição de Mãos — acervo histórico da IPFF",
    titulo: "Imposição de Mãos",
    categoria: "lideranca",
  },
  {
    id: "foto-historica-13",
    src: "/50anos/foto-historica-13.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "cerimonia-e-culto-de-inauguracao-novo-templo-14",
    src: "/50anos/cerimonia-e-culto-de-inauguracao-novo-templo-14.jpg",
    alt: "Cerimonia e Culto de Inauguração Novo Templo — acervo histórico da IPFF",
    titulo: "Cerimonia e Culto de Inauguração Novo Templo",
    categoria: "templo",
  },
  {
    id: "grupo-pequeno-15",
    src: "/50anos/grupo-pequeno-15.jpg",
    alt: "Grupo Pequeno — acervo histórico da IPFF",
    titulo: "Grupo Pequeno",
    categoria: "familias",
  },
  {
    id: "bolo-de-20-metros-16",
    src: "/50anos/bolo-de-20-metros-16.jpg",
    alt: "Bolo de 20 metros — acervo histórico da IPFF",
    titulo: "Bolo de 20 metros",
    categoria: "eventos",
  },
  {
    id: "foto-historica-17",
    src: "/50anos/foto-historica-17.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "coral-filadelfia-1981-templo-afonso-pena-18",
    src: "/50anos/coral-filadelfia-1981-templo-afonso-pena-18.jpg",
    alt: "Coral Filadélfia 1981 (Templo Afonso Pena) — acervo histórico da IPFF",
    titulo: "Coral Filadélfia 1981 (Templo Afonso Pena)",
    ano: "1981",
    categoria: "templo",
  },
  {
    id: "coral-filadelfia-1981-templo-afonso-pena-19",
    src: "/50anos/coral-filadelfia-1981-templo-afonso-pena-19.jpg",
    alt: "Coral Filadélfia 1981 (Templo Afonso Pena) — acervo histórico da IPFF",
    titulo: "Coral Filadélfia 1981 (Templo Afonso Pena)",
    ano: "1981",
    categoria: "templo",
  },
  {
    id: "coral-filadelfia-1981-templo-afonso-pena-20",
    src: "/50anos/coral-filadelfia-1981-templo-afonso-pena-20.jpg",
    alt: "Coral Filadélfia 1981 (Templo Afonso Pena) — acervo histórico da IPFF",
    titulo: "Coral Filadélfia 1981 (Templo Afonso Pena)",
    ano: "1981",
    categoria: "templo",
  },
  {
    id: "posse-dos-primeiros-presbiteros-21",
    src: "/50anos/posse-dos-primeiros-presbiteros-21.jpg",
    alt: "Posse dos primeiros presbíteros — acervo histórico da IPFF",
    titulo: "Posse dos primeiros presbíteros",
    categoria: "lideranca",
  },
  {
    id: "posse-dos-primeiros-diaconos-eleitos-22",
    src: "/50anos/posse-dos-primeiros-diaconos-eleitos-22.jpg",
    alt: "Posse dos Primeiros Diáconos Eleitos — acervo histórico da IPFF",
    titulo: "Posse dos Primeiros Diáconos Eleitos",
    categoria: "lideranca",
  },
  {
    id: "posse-dos-primeiros-diaconos-23",
    src: "/50anos/posse-dos-primeiros-diaconos-23.jpg",
    alt: "Posse dos Primeiros Diáconos — acervo histórico da IPFF",
    titulo: "Posse dos Primeiros Diáconos",
    categoria: "lideranca",
  },
  {
    id: "1-ebf-realizada-no-novo-templo-julho-de-1984-24",
    src: "/50anos/1-ebf-realizada-no-novo-templo-julho-de-1984-24.jpg",
    alt: "1ª EBF realizada no novo templo, Julho de 1984 — acervo histórico da IPFF",
    titulo: "1ª EBF realizada no novo templo, Julho de 1984",
    ano: "1984",
    categoria: "eventos",
  },
  {
    id: "1-ebf-realizada-no-novo-templo-julho-de-1984-25",
    src: "/50anos/1-ebf-realizada-no-novo-templo-julho-de-1984-25.jpg",
    alt: "1ª EBF realizada no novo templo, Julho de 1984. — acervo histórico da IPFF",
    titulo: "1ª EBF realizada no novo templo, Julho de 1984.",
    ano: "1984",
    categoria: "eventos",
  },
  {
    id: "aniversario-da-igreja-dezembro-de-1985-26",
    src: "/50anos/aniversario-da-igreja-dezembro-de-1985-26.jpg",
    alt: "Aniversário da Igreja, Dezembro de 1985. — acervo histórico da IPFF",
    titulo: "Aniversário da Igreja, Dezembro de 1985.",
    ano: "1985",
    categoria: "eventos",
  },
  {
    id: "posse-dos-primeiros-diaconos-27",
    src: "/50anos/posse-dos-primeiros-diaconos-27.jpg",
    alt: "Posse dos Primeiros Diáconos — acervo histórico da IPFF",
    titulo: "Posse dos Primeiros Diáconos",
    categoria: "lideranca",
  },
  {
    id: "conjunto-de-jovens-28",
    src: "/50anos/conjunto-de-jovens-28.jpg",
    alt: "Conjunto de Jovens — acervo histórico da IPFF",
    titulo: "Conjunto de Jovens",
    categoria: "jovens",
  },
  {
    id: "1976-29",
    src: "/50anos/1976-29.jpg",
    alt: "1976 — acervo histórico da IPFF",
    titulo: "1976",
    ano: "1976",
    categoria: "fundacao",
  },
  {
    id: "2o-aniversario-da-equipe-crem-30",
    src: "/50anos/2o-aniversario-da-equipe-crem-30.jpg",
    alt: "2o Aniversário da Equipe CREM — acervo histórico da IPFF",
    titulo: "2o Aniversário da Equipe CREM",
    categoria: "ministerios",
  },
  {
    id: "2o-aniversario-da-equipe-crem-31",
    src: "/50anos/2o-aniversario-da-equipe-crem-31.jpg",
    alt: "2o Aniversário da Equipe CREM — acervo histórico da IPFF",
    titulo: "2o Aniversário da Equipe CREM",
    categoria: "ministerios",
  },
  {
    id: "participacao-da-equipe-crem-em-atividades-da-igreja-e-de-fora-32",
    src: "/50anos/participacao-da-equipe-crem-em-atividades-da-igreja-e-de-fora-32.jpg",
    alt: "Participação da equipe CREM em atividades da igreja e de fora. — acervo histórico da IPFF",
    titulo: "Participação da equipe CREM em atividades da igreja e de fora.",
    categoria: "ministerios",
  },
  {
    id: "participacao-da-equipe-crem-33",
    src: "/50anos/participacao-da-equipe-crem-33.jpg",
    alt: "Participação da equipe CREM — acervo histórico da IPFF",
    titulo: "Participação da equipe CREM",
    categoria: "ministerios",
  },
  {
    id: "participacao-da-equipe-crem-34",
    src: "/50anos/participacao-da-equipe-crem-34.jpg",
    alt: "Participação da equipe CREM — acervo histórico da IPFF",
    titulo: "Participação da equipe CREM",
    categoria: "ministerios",
  },
  {
    id: "participacao-da-equipe-crem-35",
    src: "/50anos/participacao-da-equipe-crem-35.jpg",
    alt: "Participação da equipe CREM — acervo histórico da IPFF",
    titulo: "Participação da equipe CREM",
    categoria: "ministerios",
  },
  {
    id: "teatro-equipe-crem-36",
    src: "/50anos/teatro-equipe-crem-36.jpg",
    alt: "Teatro Equipe CREM — acervo histórico da IPFF",
    titulo: "Teatro Equipe CREM",
    categoria: "ministerios",
  },
  {
    id: "teatro-equipe-crem-37",
    src: "/50anos/teatro-equipe-crem-37.jpg",
    alt: "Teatro equipe CREM — acervo histórico da IPFF",
    titulo: "Teatro equipe CREM",
    categoria: "ministerios",
  },
  {
    id: "teatro-equipe-crem-38",
    src: "/50anos/teatro-equipe-crem-38.jpg",
    alt: "Teatro equipe CREM — acervo histórico da IPFF",
    titulo: "Teatro equipe CREM",
    categoria: "ministerios",
  },
  {
    id: "teatro-equipe-crem-39",
    src: "/50anos/teatro-equipe-crem-39.jpg",
    alt: "Teatro equipe CREM — acervo histórico da IPFF",
    titulo: "Teatro equipe CREM",
    categoria: "ministerios",
  },
  {
    id: "foto-historica-40",
    src: "/50anos/foto-historica-40.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-41",
    src: "/50anos/foto-historica-41.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-42",
    src: "/50anos/foto-historica-42.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "antonio-coelho-berbel-e-silvia-nassif-43",
    src: "/50anos/antonio-coelho-berbel-e-silvia-nassif-43.jpg",
    alt: "Antonio Coelho Berbel e Silvia Nassif — acervo histórico da IPFF",
    titulo: "Antonio Coelho Berbel e Silvia Nassif",
    categoria: "familias",
  },
  {
    id: "dramatizacao-de-natal-44",
    src: "/50anos/dramatizacao-de-natal-44.jpg",
    alt: "Dramatização de Natal — acervo histórico da IPFF",
    titulo: "Dramatização de Natal",
    categoria: "eventos",
  },
  {
    id: "culto-das-primicias-45",
    src: "/50anos/culto-das-primicias-45.jpg",
    alt: "Culto das Primícias — acervo histórico da IPFF",
    titulo: "Culto das Primícias",
    categoria: "cultos",
  },
  {
    id: "culto-das-primicias-46",
    src: "/50anos/culto-das-primicias-46.jpg",
    alt: "Culto das Primícias — acervo histórico da IPFF",
    titulo: "Culto das Primícias",
    categoria: "cultos",
  },
  {
    id: "diacono-paulo-sergio-ferreira-nassif-47",
    src: "/50anos/diacono-paulo-sergio-ferreira-nassif-47.jpg",
    alt: "Diácono Paulo Sergio Ferreira Nassif — acervo histórico da IPFF",
    titulo: "Diácono Paulo Sergio Ferreira Nassif",
    categoria: "familias",
  },
  {
    id: "culto-primicia-novembro-de-1981-48",
    src: "/50anos/culto-primicia-novembro-de-1981-48.jpg",
    alt: "Culto Primícia Novembro de 1981 — acervo histórico da IPFF",
    titulo: "Culto Primícia Novembro de 1981",
    ano: "1981",
    categoria: "cultos",
  },
  {
    id: "acampamento-de-carnaval-49",
    src: "/50anos/acampamento-de-carnaval-49.jpg",
    alt: "Acampamento de Carnaval — acervo histórico da IPFF",
    titulo: "Acampamento de Carnaval",
    categoria: "jovens",
  },
  {
    id: "acampamento-de-carnaval-50",
    src: "/50anos/acampamento-de-carnaval-50.jpg",
    alt: "Acampamento de Carnaval — acervo histórico da IPFF",
    titulo: "Acampamento de Carnaval",
    categoria: "jovens",
  },
  {
    id: "foto-historica-51",
    src: "/50anos/foto-historica-51.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-52",
    src: "/50anos/foto-historica-52.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-53",
    src: "/50anos/foto-historica-53.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-54",
    src: "/50anos/foto-historica-54.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-55",
    src: "/50anos/foto-historica-55.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-56",
    src: "/50anos/foto-historica-56.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-57",
    src: "/50anos/foto-historica-57.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-58",
    src: "/50anos/foto-historica-58.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-59",
    src: "/50anos/foto-historica-59.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-60",
    src: "/50anos/foto-historica-60.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-61",
    src: "/50anos/foto-historica-61.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-62",
    src: "/50anos/foto-historica-62.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-63",
    src: "/50anos/foto-historica-63.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-64",
    src: "/50anos/foto-historica-64.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-65",
    src: "/50anos/foto-historica-65.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-66",
    src: "/50anos/foto-historica-66.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-67",
    src: "/50anos/foto-historica-67.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-68",
    src: "/50anos/foto-historica-68.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-69",
    src: "/50anos/foto-historica-69.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-70",
    src: "/50anos/foto-historica-70.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-71",
    src: "/50anos/foto-historica-71.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-72",
    src: "/50anos/foto-historica-72.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-73",
    src: "/50anos/foto-historica-73.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-74",
    src: "/50anos/foto-historica-74.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-75",
    src: "/50anos/foto-historica-75.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-76",
    src: "/50anos/foto-historica-76.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-77",
    src: "/50anos/foto-historica-77.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-78",
    src: "/50anos/foto-historica-78.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-79",
    src: "/50anos/foto-historica-79.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-80",
    src: "/50anos/foto-historica-80.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-81",
    src: "/50anos/foto-historica-81.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-82",
    src: "/50anos/foto-historica-82.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-83",
    src: "/50anos/foto-historica-83.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-84",
    src: "/50anos/foto-historica-84.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-85",
    src: "/50anos/foto-historica-85.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "arca-da-alianca-86",
    src: "/50anos/arca-da-alianca-86.jpg",
    alt: "Arca da Aliança — acervo histórico da IPFF",
    titulo: "Arca da Aliança",
    categoria: "ministerios",
  },
  {
    id: "foto-historica-87",
    src: "/50anos/foto-historica-87.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-88",
    src: "/50anos/foto-historica-88.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-89",
    src: "/50anos/foto-historica-89.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "programacao-de-jovens-resgate-dos-anos-70-90",
    src: "/50anos/programacao-de-jovens-resgate-dos-anos-70-90.jpg",
    alt: "Programação de Jovens_ resgate dos anos 70. — acervo histórico da IPFF",
    titulo: "Programação de Jovens_ resgate dos anos 70.",
    categoria: "jovens",
  },
  {
    id: "programacao-de-jovens-resgate-dos-anos-70-91",
    src: "/50anos/programacao-de-jovens-resgate-dos-anos-70-91.jpg",
    alt: "Programação de Jovens_ resgate dos anos 70. — acervo histórico da IPFF",
    titulo: "Programação de Jovens_ resgate dos anos 70.",
    categoria: "jovens",
  },
  {
    id: "programacao-de-jovens-resgate-dos-anos-70-92",
    src: "/50anos/programacao-de-jovens-resgate-dos-anos-70-92.jpg",
    alt: "Programação de Jovens_ resgate dos anos 70. — acervo histórico da IPFF",
    titulo: "Programação de Jovens_ resgate dos anos 70.",
    categoria: "jovens",
  },
  {
    id: "foto-historica-93",
    src: "/50anos/foto-historica-93.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-94",
    src: "/50anos/foto-historica-94.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-95",
    src: "/50anos/foto-historica-95.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "foto-historica-96",
    src: "/50anos/foto-historica-96.jpg",
    alt: "Foto histórica do acervo da Igreja Presbiteriana Filadélfia de Franca",
    // TODO: preencher titulo/descricao (foto sem metadados no nome original)
    categoria: "outros",
  },
  {
    id: "visita-do-rev-bill-asbury-e-esposa-97",
    src: "/50anos/visita-do-rev-bill-asbury-e-esposa-97.jpg",
    alt: "Visita do Rev. Bill Asbury e esposa — acervo histórico da IPFF",
    titulo: "Visita do Rev. Bill Asbury e esposa",
    categoria: "eventos",
  },
];
