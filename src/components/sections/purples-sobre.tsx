import Image from "next/image";
import { Music, Play } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

/**
 * Segunda dobra — "Sobre a banda": resumo do release de imprensa (origem,
 * estilo, números e canções conhecidas) à esquerda e a foto da banda inteira,
 * em moldura editorial, à direita.
 */
export function PurplesSobre() {
  const { band } = siteConfig.purples;

  return (
    <section
      id="sobre-a-banda"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[var(--pp-bg)] py-20 text-[var(--pp-fg)] md:py-28"
    >
      {/* Filete de gradiente separando do hero */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--pp-magenta),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_50%_at_15%_0%,rgba(124,58,237,0.16),transparent_60%)]"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Texto — sobre a banda */}
        <div>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pp-coral)]">
            Sobre a banda
          </span>

          <Image
            src="/purples/purples_white.png"
            alt="Purples"
            width={260}
            height={70}
            className="mt-4 h-10 w-auto sm:h-12"
          />

          <p className="mt-2 font-display text-lg font-semibold text-white/90">
            {band.genre} · {band.origin}
          </p>

          <p className="mt-5 max-w-md leading-relaxed text-white/70">
            {band.blurb}
          </p>

          {/* Números */}
          <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-[var(--pp-border)] py-6">
            {band.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-gradient-purples text-3xl font-extrabold sm:text-4xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs leading-snug text-white/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>

          {/* Canções conhecidas */}
          <div className="mt-7">
            <p className="font-display mb-3 flex items-center gap-2 text-sm font-semibold text-white/75">
              <Music className="size-4 text-[var(--pp-magenta)]" />
              Você vai ouvir sucessos como
            </p>
            <ul className="flex flex-wrap gap-2">
              {band.songs.map((song) => (
                <li key={song.title}>
                  <a
                    href={song.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--pp-border)] bg-[var(--pp-surface)] px-3.5 py-1.5 text-sm text-white/85 transition-colors hover:border-[var(--pp-magenta)] hover:text-white"
                  >
                    <Play className="size-3 fill-[var(--pp-magenta)] text-[var(--pp-magenta)]" />
                    {song.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes da banda */}
          <div className="mt-8 flex gap-3">
            <a
              href={band.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Purples"
              className="flex size-10 items-center justify-center rounded-full border border-[var(--pp-border)] text-white/70 transition-colors hover:border-[var(--pp-magenta)] hover:text-white"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={band.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube da Purples"
              className="flex size-10 items-center justify-center rounded-full border border-[var(--pp-border)] text-white/70 transition-colors hover:border-[var(--pp-magenta)] hover:text-white"
            >
              <YoutubeIcon className="size-4" />
            </a>
          </div>
        </div>

        {/* Foto da banda inteira — moldura editorial */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -bottom-3 -right-3 h-full w-full rounded-[1.5rem] border border-[var(--pp-magenta)]/40"
          />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl shadow-black/50">
            <Image
              src="/purples/banda.jpg"
              alt="A banda Purples ministrando ao vivo"
              width={1080}
              height={1440}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="aspect-[4/5] w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
