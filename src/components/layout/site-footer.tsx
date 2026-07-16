"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { YoutubeIcon, InstagramIcon, FacebookIcon } from "@/components/icons";
import { siteConfig, navItems } from "@/config/site";

const socialLinks = [
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
];

export function SiteFooter() {
  const { contact } = siteConfig;
  const year = 2026;
  // Na página do evento Purples o footer acompanha o tema escuro "ameixa".
  const isPurples = usePathname() === "/purples";

  const cls = {
    footer: isPurples
      ? "border-white/10 bg-[#0c0a12] text-primary-foreground"
      : "border-border bg-secondary/40",
    heading: isPurples ? "text-white/50" : "text-muted-foreground",
    tagline: isPurples ? "text-white/60" : "text-muted-foreground",
    body: isPurples ? "text-white/75" : "text-foreground/80",
    link: isPurples
      ? "text-white/75 hover:text-white"
      : "text-foreground/80 hover:text-primary",
    icon: isPurples ? "text-[#d946ef]" : "text-primary",
    social: isPurples
      ? "border-white/15 bg-white/5 text-white/70 hover:bg-white/15 hover:text-white"
      : "border-border bg-background text-muted-foreground hover:bg-primary hover:text-primary-foreground",
    bottom: isPurples ? "text-white/45" : "text-muted-foreground",
  };

  return (
    <footer className={cn("border-t", cls.footer)}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold">
            Igreja Presbiteriana
            <br />
            Filadélfia de Franca
          </p>
          <p className={cn("mt-2 max-w-xs text-sm", cls.tagline)}>
            {siteConfig.tagline}
          </p>
          <div className="mt-4 flex gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  "flex size-9 items-center justify-center rounded-full border transition-colors",
                  cls.social,
                )}
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p
            className={cn(
              "text-sm font-semibold uppercase tracking-wider",
              cls.heading,
            )}
          >
            Navegação
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                {"external" in item && item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("transition-colors", cls.link)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={cn("transition-colors", cls.link)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p
            className={cn(
              "text-sm font-semibold uppercase tracking-wider",
              cls.heading,
            )}
          >
            Contato
          </p>
          <ul className={cn("mt-3 space-y-2.5 text-sm", cls.body)}>
            <li className="flex items-start gap-2">
              <MapPin className={cn("mt-0.5 size-4 shrink-0", cls.icon)} />
              <span>
                {contact.address.street}
                <br />
                {contact.address.city} — {contact.address.state},{" "}
                {contact.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className={cn("size-4 shrink-0", cls.icon)} />
              <a
                href={`tel:${contact.phone}`}
                className={isPurples ? "hover:text-white" : "hover:text-primary"}
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className={cn("size-4 shrink-0", cls.icon)} />
              <a
                href={`mailto:${contact.email}`}
                className={isPurples ? "hover:text-white" : "hover:text-primary"}
              >
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={cn("border-t", isPurples && "border-white/10")}>
        <div
          className={cn(
            "mx-auto max-w-6xl px-4 py-5 text-center text-xs sm:px-6",
            cls.bottom,
          )}
        >
          © {year} {siteConfig.fullName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
