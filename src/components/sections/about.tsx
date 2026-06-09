import { SectionLabel } from "@/components/sections/section-label";
import { siteConfig } from "@/config/site";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="quem-somos" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionLabel index="03">Nossa identidade</SectionLabel>
          <h2 className="mt-5 font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
            {about.title}
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Painel de citação — pilares "solas" da Reforma */}
        <div className="md:col-span-6 md:col-start-7">
          <figure className="relative overflow-hidden rounded-2xl bg-primary px-8 py-12 text-primary-foreground">
            <div
              aria-hidden
              className="dotted-bg absolute inset-0 text-primary-foreground/[0.06]"
            />
            <span className="relative font-heading text-6xl leading-none text-accent/80">
              “
            </span>
            <blockquote className="relative mt-2 font-heading text-2xl font-light leading-snug sm:text-3xl">
              Somente a Escritura, somente a graça, somente a fé, somente
              Cristo, somente a Deus a glória.
            </blockquote>
            <figcaption className="relative mt-6 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
              As cinco solas da Reforma
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
