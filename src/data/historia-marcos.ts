/**
 * Marcos históricos da IPFF exibidos na linha do tempo (/historia).
 *
 * As datas abaixo foram ancoradas nos registros do acervo fotográfico
 * (public/50anos/). Os textos são um ponto de partida editável — ajuste
 * livremente com o conteúdo oficial da igreja. Para adicionar um marco,
 * acrescente um item ao array `marcos` mantendo a ordem cronológica.
 */

export type MarcoHistorico = {
  ano: string;
  titulo: string;
  descricao: string;
  foto?: string;
  fotoAlt?: string;
  categoria?: string;
};

export const marcos: MarcoHistorico[] = [
  {
    ano: "1976",
    titulo: "O início da caminhada",
    descricao:
      "Os primeiros passos da Igreja Presbiteriana Filadélfia de Franca. Uma pequena comunidade reunida em torno da Palavra dá origem a uma história de fé que atravessaria gerações.",
    foto: "/50anos/1976-29.jpg",
    fotoAlt: "Registro dos primeiros anos da IPFF, 1976",
    categoria: "fundacao",
  },
  {
    ano: "1981",
    titulo: "Posse dos primeiros presbíteros e diáconos",
    descricao:
      "A igreja se organiza e recebe seus primeiros oficiais. Presbíteros e diáconos são empossados para o serviço, marcando o amadurecimento da congregação.",
    foto: "/50anos/posse-dos-primeiros-presbiteros-21.jpg",
    fotoAlt: "Posse dos primeiros presbíteros da IPFF, 1981",
    categoria: "lideranca",
  },
  {
    ano: "1981",
    titulo: "O Coral Filadélfia e a adoração",
    descricao:
      "No Templo da Afonso Pena, o Coral Filadélfia e os cultos das primícias expressam a vida de louvor e comunhão que caracteriza a igreja desde os seus primeiros anos.",
    foto: "/50anos/coral-filadelfia-1981-templo-afonso-pena-18.jpg",
    fotoAlt: "Coral Filadélfia no Templo da Afonso Pena, 1981",
    categoria: "ministerios",
  },
  {
    ano: "1984",
    titulo: "Inauguração do novo templo",
    descricao:
      "A cerimônia e o culto de inauguração do novo templo reúnem a comunidade em gratidão. No mesmo ano, o espaço recém-construído sedia a 1ª Escola Bíblica de Férias.",
    foto: "/50anos/cerimonia-e-culto-de-inauguracao-novo-templo-14.jpg",
    fotoAlt: "Cerimônia de inauguração do novo templo da IPFF, 1984",
    categoria: "templo",
  },
  {
    ano: "1985",
    titulo: "Aniversário da Igreja",
    descricao:
      "Em dezembro de 1985, a igreja celebra mais um aniversário, firme no propósito de ser uma família de amor que discipula e testemunha o Evangelho de Jesus Cristo.",
    foto: "/50anos/aniversario-da-igreja-dezembro-de-1985-26.jpg",
    fotoAlt: "Celebração de aniversário da IPFF, dezembro de 1985",
    categoria: "eventos",
  },
];
