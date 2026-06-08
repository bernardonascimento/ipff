import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
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

  return (
    <footer className="border-t bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold">
            {siteConfig.fullName}
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
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
                className="flex size-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Navegação
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Contato
          </p>
          <ul className="mt-3 space-y-2.5 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {contact.address.street}
                <br />
                {contact.address.city} — {contact.address.state},{" "}
                {contact.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href={`tel:${contact.phone}`} className="hover:text-primary">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href={`mailto:${contact.email}`} className="hover:text-primary">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
          © {year} {siteConfig.fullName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
