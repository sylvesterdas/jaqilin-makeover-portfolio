
'use client';
import { Instagram, Mail, Phone } from 'lucide-react';
import EmailLink from './email-link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { event } from '@/lib/events';

export default function Footer() {
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const num = '7356483404';
    const internationalNum = `+91${num}`;
    const text = "Hello%20Jaqilin%20Makeover,%20I'd%20like%20to%20inquire%20about%20your%20services.";
    
    setPhoneNumber(internationalNum);
    setWhatsappUrl(`https://wa.me/91${num}?text=${text}`);
  }, []);

  const handleEvent = (action: string, label: string) => {
    event({
      action: action,
      category: 'engagement',
      label: label,
      value: 1
    });
  };

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
            <ul className="space-y-3">
              <li>
                {whatsappUrl && (
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105" onClick={() => handleEvent('click_whatsapp', 'Footer')}>
                    <Image
                      src="/images/WhatsAppButtonGreenSmall.svg"
                      alt="Chat on WhatsApp"
                      width={140}
                      height={28}
                      data-ai-hint="whatsapp button small"
                    />
                  </a>
                )}
              </li>
              <li>
                {phoneNumber && (
                  <a href={`tel:${phoneNumber}`} className="flex items-center justify-center md:justify-start gap-2 text-foreground/80 hover:text-primary transition-colors" onClick={() => handleEvent('click_call', 'Footer')}>
                    <Phone size={16} />
                    <span>{phoneNumber}</span>
                  </a>
                )}
              </li>
              <li>
                <div onClick={() => handleEvent('click_email', 'Footer')}>
                    <EmailLink
                    user="contact"
                    domain="jaqilinmakeover.com"
                    icon={true}
                    className="flex items-center justify-center md:justify-start gap-2 text-foreground/80 hover:text-primary transition-colors"
                    />
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-xl font-semibold mb-2">Follow Me</h3>
            <a href="https://www.instagram.com/jaqilinmua" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-foreground/80 hover:text-primary transition-colors" onClick={() => handleEvent('click_instagram', 'Footer')}>
              <Instagram size={16} />
              <span>@jaqilinmua</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Jaqilin Makeover. All Rights Reserved. | <a href="/about" className="hover:text-primary underline-offset-4 hover:underline">About</a> | <a href="/privacy-policy" className="hover:text-primary underline-offset-4 hover:underline">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
}
