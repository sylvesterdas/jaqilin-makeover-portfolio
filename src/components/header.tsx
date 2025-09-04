
'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { event } from "@/lib/events";
import { Phone, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    const num = '+917356483404';
    const text = "Hello%20Jaqilin%20Makeover,%20I'd%20like%20to%20inquire%20about%20your%20services.";
    setWhatsappUrl(`https://wa.me/917356483404?text=${text}`);
    setPhoneNumber(num);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    event({
      action: 'click_whatsapp',
      category: 'engagement',
      label: 'Book Now Header',
      value: 1
    });
  };

  const handleCallClick = () => {
    event({
        action: 'click_call',
        category: 'engagement',
        label: 'Call Header',
        value: 1,
    });
  };

  return (
    <>
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border/50" : "bg-transparent"
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
        <div className="flex items-center gap-2">
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-2">
                <Button size="icon" variant="outline" onClick={() => setShowPhoneDialog(true)}>
                    <Phone className="h-5 w-5" />
                </Button>
                {whatsappUrl && (
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="inline-block transition-transform hover:scale-105">
                        <Image
                        src="/images/WhatsAppButtonGreenSmall.svg"
                        alt="Chat on WhatsApp"
                        width={140}
                        height={28}
                        data-ai-hint="whatsapp button small"
                        />
                    </a>
                )}
            </div>

            {/* Mobile Buttons */}
            <div className="flex md:hidden items-center gap-2">
                 <Button size="icon" variant="ghost" asChild>
                    <a href={`tel:${phoneNumber}`} onClick={handleCallClick}>
                        <Phone className="h-6 w-6" />
                    </a>
                </Button>
                {whatsappUrl && (
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                        <Image
                            src="/images/icons/whatsapp.svg"
                            alt="Chat on WhatsApp"
                            width={28}
                            height={28}
                            data-ai-hint="whatsapp icon"
                        />
                    </a>
                )}
            </div>
        </div>
      </div>
    </header>
    <AlertDialog open={showPhoneDialog} onOpenChange={setShowPhoneDialog}>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle className="font-headline text-2xl text-primary">Contact Number</AlertDialogTitle>
            </AlertDialogHeader>
            <div className="text-center text-2xl font-mono tracking-widest py-4">
                {phoneNumber}
            </div>
            <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    </>
  );
}
