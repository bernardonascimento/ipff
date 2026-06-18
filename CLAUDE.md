# CLAUDE.md — IPFF (site da Igreja Presbiteriana Filadélfia de Franca)

Guia de contexto para qualquer dev (humano ou Claude) que vá desenvolver uma nova página
ou componente neste projeto. Leia antes de começar — ele explica a stack, a arquitetura,
o sistema de design e os padrões que já seguimos. **Replique esses padrões** ao adicionar
código novo; não introduza convenções divergentes sem necessidade.

---

## 1. Stack

| Camada        | Tecnologia                                            |
| ------------- | ----------------------------------------------------- |
| Framework     | **Next.js 16** (App Router, RSC por padrão)           |
| UI            | **React 19**                                          |
| Linguagem     | **TypeScript** (strict)                               |
| Estilo        | **Tailwind CSS v4** (config via CSS, sem `tailwind.config`) |
| Componentes   | **shadcn/ui** (estilo `radix-nova`) + **radix-ui**    |
| Ícones        | **lucide-react** (+ ícones de marca próprios)         |
| Variantes     | **class-variance-authority** + `clsx` + `tailwind-merge` |
| Imagens       | `next/image` + **sharp** (otimização no build)        |
| Gerenciador   | **pnpm**                                              |
| Deploy        | Vercel (presumido)                                    |

### Comandos

```bash
pnpm dev      # desenvolvimento (localhost:3000)
pnpm build    # build de produção
pnpm start    # servir build
pnpm lint     # ESLint (eslint-config-next: core-web-vitals + typescript)
```

---

## 2. Estrutura de pastas

```
src/
├── app/                      # App Router — rotas, layout, metadados de SEO
│   ├── layout.tsx            # Layout raiz: fontes, <head> global, JSON-LD, header/footer/FAB
│   ├── page.tsx              # Home — apenas compõe as <Section/> em ordem
│   ├── globals.css           # Tema (Tailwind v4 + tokens CSS) e utilitários custom
│   ├── robots.ts             # robots.txt (Metadata API)
│   ├── sitemap.ts            # sitemap.xml (Metadata API)
│   ├── icon.png              # favicon (convenção do App Router)
│   ├── agenda/page.tsx       # rota /agenda
│   └── 50-anos/page.tsx      # rota /50-anos
├── components/
│   ├── ui/                   # primitivos shadcn (button, card, sheet, badge, ...) — NÃO editar à toa
│   ├── layout/               # header, footer, whatsapp-fab (estrutura global)
│   ├── sections/             # blocos de página (hero, about, leadership, location, ...)
│   └── icons.tsx             # ícones de marca em SVG inline (YouTube, Instagram, Facebook, WhatsApp)
├── config/
│   └── site.ts               # ⭐ FONTE ÚNICA DE CONTEÚDO editável (ver §4)
├── data/
│   └── council.json          # dados do conselho (carrossel de liderança)
└── lib/
    └── utils.ts              # helper cn()
```

`public/`: mídia estática — `logo.png`, `logo-verde.png`, `hero-bg.mp4`, `hero-poster.jpg`,
`og.jpg` (Open Graph), fotos `IMG_*.JPG`, e `public/conselho/*.jpg`.

### Aliases de import (`tsconfig.json` + `components.json`)

`@/*` → `src/*`. Use sempre: `@/components`, `@/components/ui`, `@/lib/utils`, `@/config/site`,
`@/data/...`. Nunca caminhos relativos longos (`../../`).

---

## 3. Arquitetura e padrões

### Server Components por padrão
RSC é o padrão. Só adicione `"use client"` quando o componente precisa de estado, efeitos
ou eventos do navegador. Exemplos que **são** client: `site-header.tsx` (scroll + menu mobile),
`leadership.tsx` (carrossel com `useRef`/scroll). Todo o resto (sections, footer, páginas) é server.

### Como nasce uma página
1. Crie `src/app/<rota>/page.tsx`. Exporte `metadata` (ver §6) e o componente default.
2. Monte a página compondo **sections** (`src/components/sections/`). A home (`page.tsx`)
   é só uma lista de sections — siga esse modelo.
3. Conteúdo textual/dados que a igreja pode querer editar → coloque em `src/config/site.ts`
   (ou um JSON em `src/data/`), **não hardcoded** no componente.
4. Registre a rota em `navItems` (`config/site.ts`) e em `sitemap.ts`.

### Anatomia de uma `Section`
- Componente nomeado, exportado (`export function Nome()`), em PascalCase; arquivo em kebab-case.
- Wrapper `<section>` com `id` para âncoras (`#quem-somos`, `#cultos`, `#lideranca`, `#localizacao`).
- Container interno padrão: `mx-auto max-w-6xl px-4 sm:px-6`.
- Espaçamento vertical padrão entre blocos: `py-20 md:py-28` (hero/headers usam `pt-28`+).
- Dados vêm de `siteConfig` / JSON, mapeados com `.map(...)`.

---

## 4. Conteúdo centralizado — `src/config/site.ts`

**Regra de ouro:** texto, horários, endereço, contatos, redes sociais, vídeos e itens de
navegação ficam em `siteConfig` (objeto `as const`, tipado por `SiteConfig`). Os componentes
só consomem. Isso permite editar o site sem mexer em JSX.

Campos disponíveis: `name`, `fullName`, `shortName`, `url`, `description`, `tagline`, `verse`,
`welcomeVideoId` (YouTube), `youtube` (handle/url/channelId), `contact` (phone, whatsapp,
whatsappMessage, email, address, mapsEmbedUrl, mapsLink), `social`, `googleCalendarId` +
`googleCalendarTimeZone`, `services[]`, `leadership[]`, `about`.

`navItems` (exportado à parte) define a navegação do header/footer.

Dados de listagem maiores (ex.: conselho) ficam em `src/data/*.json` e são importados
diretamente (`import council from "@/data/council.json"`).

---

## 5. Sistema de design

### Cores (paleta verde da IPFF) — `globals.css`
Tema definido com tokens CSS em `:root` e expostos ao Tailwind via `@theme inline`.
Use sempre as classes de token, **nunca hex cru** (exceto gradientes decorativos pontuais já existentes):

| Token             | Uso                                  | Valor base |
| ----------------- | ------------------------------------ | ---------- |
| `primary`         | verde-pinho profundo (fundos fortes, header) | `#0e3400` |
| `primary-foreground` | texto sobre `primary`             | `#f4f8f1` |
| `secondary`       | verde claro (faixas/seções suaves)   | `#e3ebdb` |
| `accent`          | verde auxiliar (filetes, detalhes)   | `#8ba276` |
| `muted-foreground`| texto secundário                     | `#5b8260` |
| `background`      | fundo de página                      | `#f6f8f3` |
| `card`            | cartões                              | `#ffffff` |
| `border` / `ring` | bordas e foco                        |            |

Existe um bloco `.dark` (neutro) herdado do shadcn, **mas o site não usa dark mode** atualmente.

### Tipografia
- **Corpo/UI:** Source Sans 3 → `var(--font-sans)` (classe `font-sans`, aplicada no `<html>`).
- **Títulos:** Merriweather (serif) → `var(--font-heading)` (classe `font-heading`).
  `h1–h4` já usam `font-heading` por padrão (regra em `globals.css`).
- Títulos de seção seguem o padrão: `font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl`.
- Fontes carregadas via `next/font/google` no `layout.tsx` (variáveis CSS, `display: swap`).

### Utilitários CSS custom (em `globals.css`)
- `.grain-overlay` — grão de filme sutil sobre toda a página (já no layout).
- `.hairline-gold` — filete fino com a cor `accent` (separadores decorativos).
- `.dotted-bg` — padrão de pontos para fundos (usa `currentColor`).
- `.nav-underline` — sublinhado animado da navegação (`data-active="true"` para ativo).
- `.animate-rise` — animação de entrada (fade + subida); use `[animation-delay:NNNms]` para escalonar.
  Respeita `prefers-reduced-motion`.

### Padrões visuais recorrentes (replicar para consistência)
- **Header de página escuro:** `<section>` com `bg-primary text-primary-foreground`, gradiente
  radial decorativo (`-z-10`), `.dotted-bg`, e faixa de versículo na base com `border-t border-primary-foreground/15`.
- **Moldura editorial** (iframes/imagens): bloco com sombra/borda + um `<div aria-hidden>`
  deslocado `-bottom-3 -right-3 border-accent/40` atrás (efeito de moldura dupla). Ver `location.tsx`, `agenda/page.tsx`.
- **Elementos decorativos:** sempre `aria-hidden` e `-z-10`/`-z-20` para ficarem atrás do conteúdo.

### Componentes shadcn/ui
Instalados em `src/components/ui/`. Para adicionar novos: `pnpm dlx shadcn@latest add <componente>`
(estilo `radix-nova`, baseColor `neutral`, configs em `components.json`). Use o `<Button asChild>`
para envolver `<a>`/`<Link>`. Variantes existentes do Button incluem `secondary`, `outline`, `ghost`.

---

## 6. SEO (importante neste projeto)

SEO é primeira classe. Padrões a seguir:

- **Metadata por página:** todo `page.tsx` (exceto a home, coberta pelo layout) exporta
  `export const metadata: Metadata = { title, description }`. O `title` recebe o template
  `%s | Igreja Presbiteriana Filadélfia de Franca` definido no layout.
- **`layout.tsx`** centraliza: `metadataBase`, título default/template, keywords, Open Graph,
  Twitter card, `robots`, e o **JSON-LD** (`@type: Church` + `WebSite`) montado por `buildJsonLd()`
  a partir do `siteConfig` (inclui horários de culto como `Event`/`Schedule`).
- **`robots.ts`** e **`sitemap.ts`** usam a Metadata API do Next. Ao criar rota nova,
  **adicione-a ao array de rotas em `sitemap.ts`**.
- Imagens com `next/image` (LCP: ver o `preload` do poster no `hero.tsx`); `alt` descritivo
  em PT-BR; decorativas com `alt=""` + `aria-hidden`.
- Idioma: `<html lang="pt-BR">`. Todo conteúdo e comentários em **Português** (com acentuação correta).

---

## 7. Integrações externas

- **YouTube:** "Assista ao vivo" linka `siteConfig.social.youtube`. Vídeo de boas-vindas
  embed via `youtube-nocookie.com/embed/${welcomeVideoId}`. Vídeo de fundo do hero é
  self-hosted (`/hero-bg.mp4` + poster). Domínios de imagem liberados em `next.config.ts`
  (`i.ytimg.com`, `img.youtube.com`).
- **Google Agenda:** `/agenda` embeda o calendário público via iframe, montado a partir de
  `googleCalendarId` + `googleCalendarTimeZone`. ⚠️ O `googleCalendarId` atual é placeholder
  (calendário de feriados) — substituir pelo calendário público da igreja.
- **WhatsApp:** FAB fixo (`whatsapp-fab.tsx`) com link `wa.me` + mensagem pré-preenchida do config.
- **Mapa:** iframe do Google Maps via `mapsEmbedUrl`.

---

## 8. Fluxo Git (OBRIGATÓRIO)

> ⚠️ **Nunca commitar nem dar push diretamente na branch `main`.**

- **Sempre crie uma branch nova** antes de qualquer alteração. Faça commits e push apenas nessa branch.
  ```bash
  git checkout -b <tipo>/<descricao-curta>   # ex.: feat/pagina-contato, fix/header-mobile
  ```
- Trabalhe, commite e empurre **apenas** na branch criada; abra um Pull Request para integrar na `main`.
- A `main` é integrada exclusivamente via PR (merge), nunca por commit/push direto.
- Se ao iniciar você perceber que está na `main`, **crie a branch antes de editar** qualquer arquivo.

---

## 9. Convenções de código

- **Idioma:** código e comentários em Português (acentuação correta — nunca "nao" por "não").
- **Componentes:** `export function PascalCase()`; arquivos em `kebab-case.tsx`.
- **Classes Tailwind:** combine condicionalmente com `cn(...)` (de `@/lib/utils`). Não concatene strings manualmente.
- **Links:** internos com `<Link>` (next/link); externos com `<a target="_blank" rel="noopener noreferrer">`.
- **Acessibilidade:** `aria-label` em botões só-ícone; `aria-hidden` em decorações; `alt` significativo.
- **Sem dark mode ativo, sem testes, sem i18n** no momento — não adicione sem combinar.

---

## 10. Checklist para uma página nova

1. `src/app/<rota>/page.tsx` com `metadata` + componente default.
2. Conteúdo editável → `src/config/site.ts` (ou `src/data/*.json`), não hardcoded.
3. Componha com sections de `src/components/sections/` (crie novas seguindo a anatomia do §3).
4. Use tokens de cor, `font-heading` em títulos, container `max-w-6xl px-4 sm:px-6`, `py-20 md:py-28`.
5. Adicione a rota a `navItems` (se for de navegação) e a `sitemap.ts`.
6. Reaproveite os primitivos `ui/` e os utilitários CSS (`.animate-rise`, `.hairline-gold`, etc.).
7. `pnpm lint` antes de finalizar.
