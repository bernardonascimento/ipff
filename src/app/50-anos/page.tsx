import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "50 Anos",
  description: `Comemoração dos 50 anos da ${siteConfig.fullName}. Em breve.`,
};

export default function CinquentaAnosPage() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-primary px-4 py-24 text-center text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.55_0.1_150_/_0.45),_transparent_60%)]"
      />
      <div className="relative flex max-w-2xl flex-col items-center gap-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium ring-1 ring-inset ring-primary-foreground/20">
          <Sparkles className="size-4" />
          Em breve
        </span>
        <h1 className="font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
          50 Anos
        </h1>
        <p className="text-lg text-primary-foreground/80">
          Estamos preparando uma página especial para celebrar os 50 anos da{" "}
          {siteConfig.fullName}. Volte em breve para conferir.
        </p>
        <Button asChild variant="secondary" size="lg" className="mt-2">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Voltar ao início
          </Link>
        </Button>
      </div>
    </section>
  );
}
