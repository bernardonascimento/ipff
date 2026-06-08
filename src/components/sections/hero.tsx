import Link from "next/link";
import { Play, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* textura/gradiente de fundo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.1_150_/_0.6),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_oklch(0.3_0.06_160_/_0.7),_transparent_50%)]"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 sm:px-6 md:py-32">
        <span className="inline-flex items-center rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider ring-1 ring-inset ring-primary-foreground/20">
          Igreja Presbiteriana do Brasil
        </span>
        <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {siteConfig.tagline}
        </h1>
        <p className="max-w-xl text-base text-primary-foreground/80 sm:text-lg">
          Seja bem-vindo à {siteConfig.fullName}. Venha adorar a Deus conosco e
          fazer parte da nossa comunidade.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="size-4" />
              Assista ao vivo
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/agenda">
              <CalendarDays className="size-4" />
              Ver agenda
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
