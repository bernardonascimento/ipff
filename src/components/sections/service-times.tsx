import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export function ServiceTimes() {
  return (
    <section id="cultos" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Programação
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Participe dos nossos cultos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reunimo-nos durante a semana para adorar a Deus, estudar a Palavra e
            viver em comunhão. Venha nos visitar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service) => (
            <Card key={`${service.title}-${service.day}`} className="h-full">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  {service.day}
                </Badge>
                <h3 className="font-heading text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="flex items-center gap-1.5 text-primary">
                  <Clock className="size-4" />
                  <span className="font-medium">{service.time}</span>
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
