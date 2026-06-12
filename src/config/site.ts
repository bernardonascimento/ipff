/**
 * Configuração central de conteúdo do site da IPFF.
 *
 * Tudo que a igreja costuma querer editar (horários, endereço, contatos,
 * redes sociais, liderança, vídeos) fica aqui — assim dá pra atualizar o
 * conteúdo sem mexer nos componentes. Os textos abaixo são PLACEHOLDERS
 * e devem ser substituídos pelos dados reais da igreja.
 */

export const siteConfig = {
  name: "IPFF",
  fullName: "Igreja Presbiteriana Filadélfia de Franca",
  shortName: "Igreja Presbiteriana Filadélfia",
  url: "https://ipff.com.br",
  description:
    "A Igreja Presbiteriana Filadélfia de Franca (IPB) é uma igreja cristã reformada em Franca/SP. Participe dos nossos cultos, escola bíblica dominical e reuniões de oração. Uma família de amor que discipula e testemunha o Evangelho de Jesus Cristo.",
  tagline:
    "Uma família de amor que discipula e testemunha o Evangelho de Jesus Cristo para a glória de Deus",
  verse: {
    text: "Nisto todos conhecerão que vocês são meus discípulos: se tiverem amor uns aos outros.",
    reference: "João 13.35",
  },

  // Vídeo de boas-vindas exibido na home (id do YouTube)
  welcomeVideoId: "wLgraLwE0KE",

  youtube: {
    handle: "@filadelfiafranca",
    url: "https://www.youtube.com/@filadelfiafranca",
    // Resolvido a partir do handle — usado no feed RSS (sem necessidade de API key)
    channelId: "UCDs5McmvRINXPbjAPsXsy1g",
  },

  contact: {
    phone: "(16) 3722-5698",
    whatsapp: "5516993872462", // formato internacional, só dígitos
    whatsappMessage: "Olá! Gostaria de saber mais sobre a IPFF.",
    email: "contato@ipff.com.br",
    address: {
      street: "Rua Minas Gerais, 519 — Vila Aparecida",
      city: "Franca",
      state: "SP",
      zip: "14401-229",
    },
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Rua+Minas+Gerais,+519,+Vila+Aparecida,+Franca,+SP,+14401-229&output=embed",
    mapsLink:
      "https://www.google.com/maps?q=Rua+Minas+Gerais,+519,+Vila+Aparecida,+Franca,+SP,+14401-229",
  },

  social: {
    youtube: "https://www.youtube.com/@filadelfiafranca",
    instagram: "https://www.instagram.com/filadelfiafranca",
    facebook: "https://www.facebook.com/filadelfiafranca",
  },

  // ID do calendário público do Google (substituir pelo da igreja).
  // Ex.: "exemplo@group.calendar.google.com" ou um e-mail de calendário.
  googleCalendarId: "pt.brazilian#holiday@group.v.calendar.google.com",
  googleCalendarTimeZone: "America/Sao_Paulo",

  // Programação semanal / horários de culto (placeholders)
  services: [
    {
      title: "Reuniões de Oração",
      day: "Terça-feira",
      time: "19h30",
      description:
        "Momentos de oração e intercessão pela igreja, famílias e pela obra do Senhor.",
    },
    {
      title: "Escola Bíblica Dominical",
      day: "Domingo",
      time: "09h30",
      description:
        "Estudo da Palavra de Deus que edifica, ensina e transforma vidas.",
    },
    {
      title: "Culto de Adoração Vespertino",
      day: "Domingo",
      time: "19h00",
      description:
        "Um tempo de adoração, comunhão e edificação através da Palavra e do louvor.",
    },
    {
      title: "Culto Maranata",
      day: "Quarta-feira",
      time: "14h00",
      description:
        "Reunião das mulheres, tempo de oração e intercessão pela igreja, famílias e pela obra do Senhor.",
    },
  ],

  // Liderança / pastores (placeholders — fotos vão em /public/lideranca)
  leadership: [
    {
      name: "Presb. Nome",
      role: "Presbítero",
      image: "/lideranca/placeholder.svg",
    },
    {
      name: "Presb. Nome",
      role: "Presbítero",
      image: "/lideranca/placeholder.svg",
    },
    {
      name: "Presb. Nome",
      role: "Presbítero",
      image: "/lideranca/placeholder.svg",
    },
    {
      name: "Presb. Nome",
      role: "Presbítero",
      image: "/lideranca/placeholder.svg",
    },
  ],

  about: {
    title: "Quem somos",
    paragraphs: [
      "A Igreja Presbiteriana Filadélfia de Franca faz parte da Igreja Presbiteriana do Brasil (IPB), uma denominação cristã, reformada e confessional.",
      "Cremos nas Escrituras como a Palavra de Deus e na salvação somente pela graça, por meio da fé em Jesus Cristo. Nossa missão é adorar a Deus, anunciar o Evangelho e cuidar das pessoas.",
    ],
  },
} as const;

// Itens de navegação do site
export const navItems = [
  { label: "Início", href: "/" },
  { label: "Agenda", href: "/agenda" },
  { label: "50 Anos", href: "/50-anos" },
] as const;

export type SiteConfig = typeof siteConfig;
