import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Location() {
  const { address, mapsEmbedUrl, mapsLink } = siteConfig.contact;

  return (
    <section id="localizacao" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
            Venha nos visitar
          </h2>
          <p className="mt-6 flex items-start gap-3 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <MapPin className="mt-1 size-5 shrink-0 text-accent" />
            <span>
              {address.street}
              <br />
              {address.city} — {address.state}, {address.zip}
            </span>
          </p>
          <Button asChild className="group mt-7 h-11 px-5 text-base">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer">
              <Navigation className="size-[1.1rem] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              Como chegar
            </a>
          </Button>
        </div>

        <div className="md:col-span-7">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border border-accent/40"
            />
            <div className="relative overflow-hidden rounded-xl border shadow-lg ring-1 ring-black/5">
              <iframe
                title="Mapa da localização da igreja"
                src={mapsEmbedUrl}
                className="h-72 w-full md:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
