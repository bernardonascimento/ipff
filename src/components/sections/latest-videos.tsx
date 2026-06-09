import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/sections/section-label";
import { getLatestVideos } from "@/lib/youtube";
import { siteConfig } from "@/config/site";

export async function LatestVideos() {
  const videos = await getLatestVideos(6);

  // Se o feed falhar ou estiver vazio, a seção é omitida.
  if (videos.length === 0) return null;

  return (
    <section id="videos" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <SectionLabel index="04">No YouTube</SectionLabel>
            <h2 className="mt-5 font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
              Últimas mensagens
            </h2>
          </div>
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
          >
            <span className="border-b border-accent/60 pb-0.5 transition-colors group-hover:border-primary">
              Ver canal completo
            </span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-12 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted ring-1 ring-border">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors duration-300 group-hover:bg-primary/25">
                  <span className="flex size-14 scale-90 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <Play className="size-5 translate-x-0.5" fill="currentColor" />
                  </span>
                </span>
              </div>
              <h3 className="mt-4 line-clamp-2 font-heading text-lg font-normal leading-snug tracking-tight transition-colors group-hover:text-primary">
                {video.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
