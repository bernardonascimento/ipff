import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SectionLabel } from "@/components/sections/section-label";
import { siteConfig } from "@/config/site";

export function WelcomeVideo() {
  return (
    <section id="boas-vindas" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionLabel index="01">Boas-vindas</SectionLabel>
          <h2 className="mt-5 font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
            Uma palavra de
            <span className="italic text-primary"> boas-vindas</span> para você
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Assista ao nosso convite e conheça um pouco do que Deus tem feito na{" "}
            {siteConfig.fullName}. Você e sua família são muito bem-vindos.
          </p>
        </div>

        <div className="md:col-span-7">
          {/* moldura com filete dourado e deslocamento decorativo */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -left-3 -top-3 h-full w-full rounded-xl border border-accent/40"
            />
            <div className="relative overflow-hidden rounded-xl border bg-card shadow-xl ring-1 ring-black/5">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="size-full"
                  src={`https://www.youtube-nocookie.com/embed/${siteConfig.welcomeVideoId}`}
                  title="Vídeo de boas-vindas"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
