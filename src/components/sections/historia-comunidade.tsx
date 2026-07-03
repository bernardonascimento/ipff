import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

/**
 * Convite para que membros e famílias enviem fotos, documentos e memórias
 * antigas, ajudando a ampliar o acervo. Contatos vêm do siteConfig.
 */
export function HistoriaComunidade() {
  const { whatsapp, email } = siteConfig.contact;
  const mensagem = encodeURIComponent(
    "Olá! Tenho fotos ou memórias antigas da igreja e gostaria de contribuir com o acervo histórico da IPFF.",
  );
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${mensagem}`;
  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
    "Acervo histórico da IPFF",
  )}`;

  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">
          Ajude a preservar
        </span>
        <h2 className="mt-4 font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
          Você tem uma memória para compartilhar?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Você possui fotos, documentos ou histórias antigas da nossa igreja?
          Entre em contato e ajude a preservar essa memória para as próximas
          gerações.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="group h-11 px-5 text-base">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-[1.1rem] transition-transform group-hover:scale-110" />
              Enviar pelo WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 px-5 text-base"
          >
            <a href={emailUrl}>
              <Mail className="size-[1.1rem]" />
              Enviar por e-mail
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
