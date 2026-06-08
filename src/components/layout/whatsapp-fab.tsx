import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function WhatsAppFab() {
  const { whatsapp, whatsappMessage } = siteConfig.contact;
  const href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
