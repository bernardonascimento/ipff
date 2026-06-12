import { User } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Leadership() {
  return (
    <section id="lideranca" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
            Nossos pastores
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Conheça quem serve à frente da Igreja Presbiteriana Filadélfia de
            Franca.
          </p>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.leadership.map((person, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              {/* Placeholder de foto — trocar por <Image> quando houver fotos reais */}
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -inset-1.5 rounded-full border border-accent/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="flex size-32 items-center justify-center rounded-full bg-secondary ring-1 ring-border">
                  <User
                    className="size-14 text-muted-foreground/40"
                    strokeWidth={1.25}
                  />
                </div>
              </div>
              <p className="mt-5 font-heading text-xl font-normal tracking-tight">
                {person.name}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
