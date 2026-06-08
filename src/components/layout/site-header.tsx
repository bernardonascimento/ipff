"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-heading", className)}
      aria-label={`${siteConfig.fullName} — início`}
    >
      <span className="flex size-9 items-center justify-center rounded-md bg-primary font-semibold text-primary-foreground">
        IP
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </span>
        <span className="text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground">
          Filadélfia · Franca
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
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75"
          : "border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Wordmark />

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button asChild size="sm" className="ml-2">
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
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
              className="md:hidden"
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
                  <Link
                    href={item.href}
                    className="rounded-md px-3 py-2.5 text-base font-medium hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
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
