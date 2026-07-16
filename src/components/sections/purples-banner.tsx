import Image from "next/image";

/**
 * Faixa full-width com o banner panorâmico da banda, entre a 1ª e a 2ª dobra.
 * Vinheta no topo e na base para fundir com o fundo "ameixa".
 */
export function PurplesBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--pp-bg)]">
      <Image
        src="/purples/banner.jpg"
        alt="Os seis integrantes da banda Purples"
        width={1980}
        height={340}
        sizes="100vw"
        className="h-40 w-full object-cover object-center sm:h-52 md:h-64 lg:h-72"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--pp-bg),transparent_16%,transparent_84%,var(--pp-bg))]"
      />
    </section>
  );
}
