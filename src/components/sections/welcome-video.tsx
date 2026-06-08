import { AspectRatio } from "@/components/ui/aspect-ratio";
import { siteConfig } from "@/config/site";

export function WelcomeVideo() {
  return (
    <section id="boas-vindas" className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Boas-vindas
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Uma palavra de boas-vindas para você
          </h2>
          <p className="mt-4 text-muted-foreground">
            Assista ao nosso convite e conheça um pouco do que Deus tem feito na{" "}
            {siteConfig.fullName}. Você e sua família são muito bem-vindos.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border shadow-sm">
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
    </section>
  );
}
