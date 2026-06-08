import { User } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Leadership() {
  return (
    <section id="lideranca" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Liderança
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Nossos pastores e oficiais
          </h2>
          <p className="mt-4 text-muted-foreground">
            Conheça quem serve à frente da nossa comunidade.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.leadership.map((person, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Placeholder de foto — substituir por <Image> quando houver fotos reais */}
              <div className="flex size-32 items-center justify-center rounded-full bg-secondary ring-1 ring-border">
                <User
                  className="size-14 text-muted-foreground/50"
                  strokeWidth={1.25}
                />
              </div>
              <p className="mt-4 font-heading text-lg font-semibold">
                {person.name}
              </p>
              <p className="text-sm text-muted-foreground">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
