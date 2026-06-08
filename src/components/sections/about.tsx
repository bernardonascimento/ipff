import { BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="quem-somos" className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nossa identidade
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {about.title}
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="order-1 flex justify-center md:order-2">
          <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl bg-primary/5 ring-1 ring-primary/10">
            <BookOpen className="size-24 text-primary/40" strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
