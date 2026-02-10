
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
      <div className="container flex h-14 sm:h-16 max-w-screen-2xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 font-headline text-lg sm:text-2xl font-bold text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          <Image src="/logo.png" alt="Jaqilin Makeover Logo" width={28} height={28} data-ai-hint="logo monogram" className="rounded-full sm:size-8" />
          <span className="leading-tight">Jaqilin Makeover</span>
        </a>
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="link" asChild>
            <a href="/#services" className="text-white hover:text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-semibold">{inMalayalam ? "സേവനങ്ങൾ" : "Services"}</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/#portfolio" className="text-white hover:text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-semibold">{inMalayalam ? "പോർട്ട്ഫോളിയോ" : "Portfolio"}</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/#contact" className="text-white hover:text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-semibold">{inMalayalam ? "ബന്ധപ്പെടാൻ" : "Contact"}</a>
          </Button>
        </nav>
        <HeaderActions />
      </div>
    </header>
  );
}
