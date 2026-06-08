import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLatestVideos } from "@/lib/youtube";
import { siteConfig } from "@/config/site";

export async function LatestVideos() {
  const videos = await getLatestVideos(6);

  // Se o feed falhar ou estiver vazio, a seção é omitida.
  if (videos.length === 0) return null;

  return (
    <section id="videos" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              No YouTube
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Últimas mensagens
            </h2>
          </div>
          <Button asChild variant="outline">
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver canal
            </a>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                  <span className="flex size-12 scale-90 items-center justify-center rounded-full bg-primary/90 text-primary-foreground opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                    <Play className="size-5 translate-x-0.5" fill="currentColor" />
                  </span>
                </span>
              </div>
              <div className="flex flex-1 items-start p-4">
                <h3 className="line-clamp-2 text-sm font-medium leading-snug group-hover:text-primary">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
