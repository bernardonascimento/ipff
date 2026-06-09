import { SectionLabel } from "@/components/sections/section-label";
import { siteConfig } from "@/config/site";

export function ServiceTimes() {
  return (
    <section id="cultos" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <SectionLabel index="02">Programação</SectionLabel>
            <h2 className="mt-5 font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
              Participe dos nossos cultos
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
            Reunimo-nos durante a semana para adorar a Deus, estudar a Palavra e
            viver em comunhão. Venha nos visitar — você será muito bem recebido.
          </p>
        </div>

        {/* Grade editorial com filetes */}
        <ul className="mt-14 border-t border-border">
          {siteConfig.services.map((service) => (
            <li
              key={`${service.title}-${service.day}`}
              className="group grid grid-cols-1 gap-2 border-b border-border py-6 transition-colors hover:bg-background/60 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-3"
            >
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:col-span-3 sm:pt-2">
                {service.day}
              </span>
              <div className="sm:col-span-6">
                <h3 className="font-heading text-2xl font-normal tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <span className="font-heading text-3xl font-light tabular-nums text-primary sm:col-span-3 sm:text-right">
                {service.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
