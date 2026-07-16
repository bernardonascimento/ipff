import Image from "next/image";

/**
 * Terceira dobra — galeria das fotos da banda, sem sequência definida:
 * um mosaico dos integrantes que fecha a página com energia visual.
 */

// Ordem intencionalmente embaralhada (sem sequência narrativa).
const fotos = [
  "/purples/guitarrista.jpg",
  "/purples/vocal_principal_1.jpg",
  "/purples/baterista.jpg",
  "/purples/banda.jpg",
  "/purples/baixista.jpg",
  "/purples/vocal_secundaria_1.jpg",
];

export function PurplesGaleria() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--pp-bg)] py-20 text-[var(--pp-fg)] md:py-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--pp-violet),transparent)]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pp-coral)]">
            Galeria
          </span>
          <h2 className="font-display mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            A banda <span className="text-gradient-purples">ao vivo</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {fotos.map((src) => (
            <div
              key={src}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={src}
                alt="Integrante da banda Purples"
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,10,18,0.5),transparent_45%)] opacity-70 transition-opacity group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
