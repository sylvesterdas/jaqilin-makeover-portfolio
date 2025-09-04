
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from '@/lib/utils';
import HeaderActions from "./header-actions";


export default function Header() {
  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      "bg-background/80 backdrop-blur-sm border-b border-border/50"
    )}>
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
          <Image src="/logo.png" alt="Jaqilin Makeover Logo" width={32} height={32} data-ai-hint="logo monogram" className="rounded-full" />
          <span>Jaqilin Makeover</span>
        </a>
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="link" asChild>
            <a href="/#services" className="text-foreground/80 hover:text-primary">Services</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/#portfolio" className="text-foreground/80 hover:text-primary">Portfolio</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/#contact" className="text-foreground/80 hover:text-primary">Contact</a>
          </Button>
        </nav>
        <HeaderActions />
      </div>
    </header>
  );
}
