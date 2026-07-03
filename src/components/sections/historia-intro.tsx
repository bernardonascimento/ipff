/**
 * Bloco institucional que apresenta a origem e o propósito do acervo.
 * Fundo claro, com citação de impacto e divisor decorativo.
 */
export function HistoriaIntro() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h2 className="font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
              Uma memória que atravessa gerações
            </h2>
            <div
              aria-hidden
              className="hairline-gold mt-6 w-24"
            />
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-primary sm:text-xl md:col-span-7">
            <p>
              A Igreja Presbiteriana Filadélfia de Franca nasceu do desejo de um
              grupo de irmãos de adorar a Deus e testemunhar o Evangelho de
              Jesus Cristo em Franca. Ao longo dos anos, essa história foi sendo
              tecida por famílias, pastores, oficiais e uma comunidade fiel.
            </p>
            <p>
              Este acervo reúne fotografias e registros que preservam esses
              momentos — cultos, celebrações, a construção do templo, o
              ministério com os jovens e tantas outras memórias que revelam a
              fidelidade de Deus à sua igreja.
            </p>
          </div>
        </div>

        <blockquote className="mt-14 border-l-2 border-accent/50 pl-6 font-heading text-2xl font-light italic leading-relaxed text-primary sm:text-3xl">
          “Cada imagem guarda uma história. Cada memória revela a fidelidade de
          Deus ao longo dos anos.”
        </blockquote>
      </div>
    </section>
  );
}
