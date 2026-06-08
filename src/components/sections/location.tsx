import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Location() {
  const { address, mapsEmbedUrl, mapsLink } = siteConfig.contact;

  return (
    <section id="localizacao" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Onde estamos
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Venha nos visitar
          </h2>
          <p className="mt-4 flex items-start gap-2 text-muted-foreground">
            <MapPin className="mt-1 size-5 shrink-0 text-primary" />
            <span>
              {address.street}
              <br />
              {address.city} — {address.state}, {address.zip}
            </span>
          </p>
          <Button asChild className="mt-6">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer">
              <Navigation className="size-4" />
              Como chegar
            </a>
          </Button>
        </div>
        <div className="overflow-hidden rounded-xl border shadow-sm">
          <iframe
            title="Mapa da localização da igreja"
            src={mapsEmbedUrl}
            className="h-72 w-full md:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
