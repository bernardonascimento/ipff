"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig, navItems } from "@/config/site";

function Wordmark({
  className,
  hard,
}: {
  className?: string;
  hard?: boolean;
}) {
  const cls = cn("flex items-center gap-2 font-heading", className);
  const aria = `${siteConfig.fullName} — início`;
  const inner = (
    <>
      <Image
        src="/logo.png"
        alt=""
        width={64}
        height={64}
        priority
        className="size-11 shrink-0 object-contain sm:size-14"
      />
      <span className="flex flex-col leading-none">
        <span className="text-base font-medium tracking-tight sm:text-xl">
          Filadélfia de Franca
        </span>
        <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-primary-foreground/60 sm:text-[0.7rem]">
          Igreja Presbiteriana
        </span>
      </span>
    </>
  );
  // Sair da /purples exige recarga total para o Safari reler o theme-color
  // (por isso o <a> em vez de <Link> — desativamos a regra do Next aqui).
  return hard ? (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a href="/" className={cls} aria-label={aria}>
      {inner}
    </a>
  ) : (
    <Link href="/" className={cls} aria-label={aria}>
      {inner}
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // A página do evento Purples usa header transparente (sobre o vídeo) e
  // esconde o botão "Assista aos cultos".
  const isPurples = pathname === "/purples";
  // O Safari só relê o theme-color em navegação completa. Então links que
  // entram na /purples (ou saem dela) usam <a> em vez de <Link> para forçar
  // a recarga e a cor da barra do navegador acompanhar.
  const recarregar = (href: string) => isPurples || href === "/purples";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full text-primary-foreground transition-all",
        isPurples
          ? scrolled
            ? "border-b border-white/10 bg-[rgba(12,10,18,0.85)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
          : cn(
              "border-b bg-primary transition-shadow",
              scrolled
                ? "border-primary-foreground/10 shadow-lg shadow-primary/30"
                : "border-primary-foreground/5",
            ),
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Wordmark hard={isPurples} />

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const cls =
              "nav-underline px-3 py-2 text-base font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground";
            if ("external" in item && item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {item.label}
                </a>
              );
            }
            if (recarregar(item.href)) {
              return (
                <a key={item.href} href={item.href} className={cls}>
                  {item.label}
                </a>
              );
            }
            return (
              <Link key={item.href} href={item.href} className={cls}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Menu mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground md:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="text-left font-heading">
                {siteConfig.name}
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navItems.map((item) => {
                const cls =
                  "rounded-md px-3 py-2.5 text-base font-medium hover:bg-secondary";
                const el =
                  "external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cls}
                    >
                      {item.label}
                    </a>
                  ) : recarregar(item.href) ? (
                    <a href={item.href} className={cls}>
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={cls}>
                      {item.label}
                    </Link>
                  );
                return (
                  <SheetClose asChild key={item.href}>
                    {el}
                  </SheetClose>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
