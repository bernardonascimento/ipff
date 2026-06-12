import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { siteConfig } from "@/config/site";

/** Os cinco pilares (solas) da Reforma Protestante. */
const solas = [
  {
    la: "Sola Scriptura",
    pt: "Somente a Escritura",
    desc: "A Bíblia é a autoridade suprema para a fé e a vida.",
  },
  {
    la: "Sola Gratia",
    pt: "Somente a Graça",
    desc: "A salvação é inteiramente obra da graça de Deus.",
  },
  {
    la: "Sola Fide",
    pt: "Somente a Fé",
    desc: "Somos justificados diante de Deus pela fé em Cristo.",
  },
  {
    la: "Solus Christus",
    pt: "Somente Cristo",
    desc: "Jesus é o único mediador entre Deus e os homens.",
  },
  {
    la: "Soli Deo Gloria",
    pt: "Somente a Deus a Glória",
    desc: "Toda honra, louvor e glória pertencem a Deus.",
  },
];

export function About() {
  return (
    <section id="quem-somos">
      {/* ── Quem somos — bloco imersivo sobre a congregação em adoração ── */}
      <div className="relative isolate overflow-hidden">
        <Image
          src="/IMG_0252.JPG"
          alt="Congregação da Igreja Presbiteriana Filadélfia de Franca em adoração"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        {/* overlay verde claro (deixa a foto suave ao fundo) */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-secondary/80" />
        <div
          aria-hidden
          className="dotted-bg absolute inset-0 -z-10 text-foreground/[0.04]"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 md:grid-cols-12 md:gap-12 md:py-32">
          <div className="md:col-span-6">
            <h2 className="font-heading text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Quem somos
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-primary sm:text-xl">
              <p>
                A Igreja Presbiteriana Filadélfia de Franca faz parte da Igreja
                Presbiteriana do Brasil (IPB), uma denominação cristã histórica,
                reformada e confessional, comprometida com a fiel pregação das
                Escrituras e com a proclamação do Evangelho de Jesus Cristo.
              </p>
              <p>
                Temos como propósito ser{" "}
                <strong className="font-semibold">
                  “uma família de amor que discipula e testemunha o Evangelho de
                  Jesus Cristo para a glória de Deus”
                </strong>
                . Por isso, buscamos adorar a Deus, crescer na fé, servir ao
                próximo e anunciar as boas-novas da salvação em Cristo a todas
                as pessoas.
              </p>
            </div>
          </div>

          {/* Vídeo de apresentação com moldura */}
          <div className="md:col-span-6">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border border-accent/50"
              />
              <div className="relative overflow-hidden rounded-xl border bg-card shadow-xl ring-1 ring-black/5">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    className="size-full"
                    src={`https://www.youtube-nocookie.com/embed/${siteConfig.welcomeVideoId}`}
                    title="Vídeo de apresentação da Igreja Presbiteriana Filadélfia de Franca"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── No que cremos — fundo branco, banner da congregação + solas ── */}
      <div className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          {/* banner: congregação reunida */}
          <figure className="relative overflow-hidden rounded-2xl">
            <Image
              src="/IMG_0251.JPG"
              alt="Membros da Igreja Presbiteriana Filadélfia de Franca reunidos"
              width={2840}
              height={1955}
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="h-56 w-full object-cover object-center sm:h-72 md:h-80"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_top,#000000d9,#0000004d_45%,#00000026)]"
            />
          </figure>

          <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-12 md:items-start">
            <div className="space-y-5 text-lg leading-relaxed text-primary sm:text-xl md:col-span-6">
              <h2 className="font-heading text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl">
                No que cremos
              </h2>
              <p>
                Cremos que a Bíblia Sagrada é a Palavra de Deus, inspirada,
                infalível e suficiente, sendo nossa única regra de fé e prática
                para a vida cristã.
              </p>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-primary sm:text-xl md:col-span-6">
              {/* título-espelho invisível: alinha o parágrafo ao da esquerda */}
              <h2
                aria-hidden
                className="invisible hidden font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:block"
              >
                No que cremos
              </h2>
              <p>
                Cremos que a salvação é um dom gratuito de Deus, concedido
                somente pela graça, mediante a fé, somente em Jesus Cristo, para
                a glória de Deus.
              </p>
            </div>
          </div>

          {/* As cinco solas */}
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-border bg-border [gap:1px] sm:grid-cols-2 lg:grid-cols-3">
            {solas.map((s, i) => (
              <div
                key={s.la}
                className={`p-7 ${
                  (Math.floor(i / 3) + (i % 3)) % 2 === 0
                    ? "bg-secondary/90"
                    : "bg-card"
                }`}
              >
                <span className="font-heading text-sm tabular-nums text-accent-foreground/50">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-2xl font-medium tracking-tight text-primary">
                  {s.la}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {s.pt}
                </p>
                <p className="mt-4 leading-relaxed text-foreground/75">
                  {s.desc}
                </p>
              </div>
            ))}
            {/* card de destaque, fecha o grid 3×2 */}
            <div className="relative flex items-center overflow-hidden bg-card p-7">
              <div
                aria-hidden
                className="dotted-bg absolute inset-0 text-foreground/[0.04]"
              />
              <blockquote className="relative font-heading text-base font-light leading-loose text-primary">
                Por meio dessas convicções, procuramos viver uma fé bíblica,
                centrada em Cristo, comprometida com o discipulado, a comunhão e
                o testemunho do Evangelho.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
