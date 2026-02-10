
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from '@/lib/utils';
import HeaderActions from "./header-actions";
import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";


export default function Header() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300"
    )}>
      <div className="container flex h-14 sm:h-16 max-w-screen-2xl items-center justify-between gap-3 px-4">
        <a href="/" className="flex min-w-0 items-center gap-2 font-headline text-lg sm:text-2xl font-bold text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          <span className="inline-flex items-center justify-center rounded-md bg-black p-1">
            <Image src="/logo.png" alt="Jaqilin Makeover Logo" width={28} height={28} data-ai-hint="logo monogram" className="rounded-full sm:size-8" />
          </span>
          <span className="leading-none text-sm sm:text-base font-semibold min-w-0">
            <span className="block text-primary">Jaqilin</span>
            <span className="block text-foreground">Makeover</span>
          </span>
        </a>
        <nav className="hidden xl:flex items-center space-x-4 shrink-0">
          <Button variant="link" asChild>
            <a href="/#services" className="text-foreground hover:text-primary font-semibold text-sm lg:text-base">Services</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/#portfolio" className="text-foreground hover:text-primary font-semibold text-sm lg:text-base">Portfolio</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/#contact" className="text-foreground hover:text-primary font-semibold text-sm lg:text-base">Contact</a>
          </Button>
        </nav>
        <HeaderActions />
      </div>
    </header>
  );
}
