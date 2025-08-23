import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="font-headline text-2xl font-bold text-primary">
          Jaqilin Makeover
        </a>
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="link" asChild>
            <a href="#services" className="text-foreground/80 hover:text-primary">Services</a>
          </Button>
          <Button variant="link" asChild>
            <a href="#portfolio" className="text-foreground/80 hover:text-primary">Portfolio</a>
          </Button>
          <Button variant="link" asChild>
            <a href="#contact" className="text-foreground/80 hover:text-primary">Contact</a>
          </Button>
        </nav>
        <Button asChild className="bg-primary hover:bg-accent text-primary-foreground">
          <a href="https://wa.me/917356483404?text=Hello%20Jaqilin%20Makeover,%20I'd%20like%20to%20inquire%20about%20your%20services.">Book Now</a>
        </Button>
      </div>
    </header>
  );
}
