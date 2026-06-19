"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Play } from "lucide-react";
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

function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-heading", className)}
      aria-label={`${siteConfig.fullName} — início`}
    >
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
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground transition-shadow",
        scrolled
          ? "border-primary-foreground/10 shadow-lg shadow-primary/30"
          : "border-primary-foreground/5",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Wordmark />

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            "external" in item && item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-underline px-3 py-2 text-base font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="nav-underline px-3 py-2 text-base font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
          <Button
            asChild
            variant="secondary"
            className="group ml-3 h-11 px-5 text-base"
          >
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="size-[1.1rem] transition-transform group-hover:scale-110" />
              Assista ao vivo
            </a>
          </Button>
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
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  {"external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md px-3 py-2.5 text-base font-medium hover:bg-secondary"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2.5 text-base font-medium hover:bg-secondary"
                    >
                      {item.label}
                    </Link>
                  )}
                </SheetClose>
              ))}
              <Button asChild className="mt-3">
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Assista ao vivo
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
