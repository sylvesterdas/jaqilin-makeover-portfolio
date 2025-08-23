
import { Instagram, Mail, Phone } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16.75,13.96C17,14.26 17.06,14.81 16.81,15.56C16.56,16.31 15.81,16.81 15.25,17C14.81,17.16 14.12,17.16 13.31,16.86C12.5,16.56 10.81,15.91 9.25,14.41C7.5,12.72 6.5,10.91 6.25,10.5C6,10.09 6.06,9.56 6.25,9.25C6.44,8.94 6.69,8.69 7,8.5C7.31,8.31 7.5,8.25 7.69,8.5C7.88,8.75 8.12,9.19 8.25,9.38C8.38,9.56 8.38,9.75 8.25,9.94C8.12,10.12 7.81,10.5 7.56,10.75C7.31,11 7.16,11.16 7.31,11.41C7.47,11.66 7.94,12.41 8.69,13.16C9.56,14.06 10.31,14.5 10.62,14.69C10.91,14.88 11.06,14.81 11.25,14.56C11.44,14.31 11.81,13.81 12,13.56C12.19,13.31 12.38,13.31 12.56,13.44C12.75,13.56 13.5,13.94 13.69,14.06C13.88,14.19 13.94,14.25 14,14.31C14,14.38 14.06,14.38 14.06,14.38C14.06,14.38 15.25,12.94 15.5,12.69C15.75,12.44 16.06,12.5 16.31,12.81C16.56,13.12 16.5,13.66 16.75,13.96M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22C13.67,22 15.25,21.56 16.62,20.81L21,22L20.19,17.5C21.25,16 22,14.12 22,12A10,10 0 0,0 12,2M12,4C16.42,4 20,7.58 20,12C20,13.81 19.31,15.5 18.12,16.81L18.94,20L15.94,19.12C14.69,19.69 13.38,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4Z" />
    </svg>
);


export default function Footer() {
  const whatsappUrl = "https://wa.me/917356483404?text=Hello%20Jaqilin%20Makeover,%20I'd%20like%20to%20inquire%20about%20your%20services.";
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
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-foreground/80 hover:text-primary transition-colors">
                  <WhatsAppIcon />
                  <span>Message on WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="tel:+917356483404" className="flex items-center justify-center md:justify-start gap-2 text-foreground/80 hover:text-primary transition-colors">
                  <Phone size={16} />
                  <span>+91 73564 83404</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@jaqilinmakeover.com" className="flex items-center justify-center md:justify-start gap-2 text-foreground/80 hover:text-primary transition-colors">
                  <Mail size={16} />
                  <span>contact@jaqilinmakeover.com</span>
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
