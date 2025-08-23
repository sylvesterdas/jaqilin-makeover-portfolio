import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-headline text-2xl font-bold text-primary mb-2">Jaqilin Makeover</h3>
            <p className="text-foreground/70">LJS Works</p>
            <p className="text-foreground/70">Trivandrum</p>
          </div>
          <div>
            <h3 className="font-headline text-xl font-semibold mb-2">Contact Me</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+917356483404" className="flex items-center justify-center md:justify-start gap-2 text-foreground/80 hover:text-primary transition-colors">
                  <Phone size={16} />
                  <span>+91 73564 83404</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@jaqilinmua.com" className="flex items-center justify-center md:justify-start gap-2 text-foreground/80 hover:text-primary transition-colors">
                  <Mail size={16} />
                  <span>contact@jaqilinmua.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-xl font-semibold mb-2">Follow Me</h3>
            <a href="https://www.instagram.com/jaqilinmua" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-foreground/80 hover:text-primary transition-colors">
              <Instagram size={16} />
              <span>@jaqilinmua</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Jaqilin Makeover. All Rights Reserved. | <a href="/privacy-policy" className="hover:text-primary underline-offset-4 hover:underline">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
}
