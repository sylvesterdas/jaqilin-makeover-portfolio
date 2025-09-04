
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from '@/lib/utils';
import HeaderActions from "./header-actions";


export default function Header() {
  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300"
    )}>
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          <Image src="/logo.png" alt="Jaqilin Makeover Logo" width={32} height={32} data-ai-hint="logo monogram" className="rounded-full" />
          <span>Jaqilin Makeover</span>
        </a>
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="link" asChild>
            <a href="/#services" className="text-white hover:text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-semibold">Services</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/#portfolio" className="text-white hover:text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-semibold">Portfolio</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/#contact" className="text-white hover:text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-semibold">Contact</a>
          </Button>
        </nav>
        <HeaderActions />
      </div>
    </header>
  );
}
