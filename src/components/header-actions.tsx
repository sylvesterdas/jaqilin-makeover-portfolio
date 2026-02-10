
'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { event } from "@/lib/events";
import { Phone } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { getWhatsAppUrl, CALL_NUMBER, DISPLAY_PHONE_NUMBER } from "@/lib/contact-links";
import { isMalayalam } from "@/lib/locale";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"


export default function HeaderActions() {
  const { locale, setLocale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);


  useEffect(() => {
    setWhatsappUrl(getWhatsAppUrl(locale));
    setPhoneNumber(CALL_NUMBER);
  }, [locale]);

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
      <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center rounded-md border border-border/70 bg-card/60 p-1">
            <Button
              size="sm"
              variant={inMalayalam ? "secondary" : "ghost"}
              className="h-7 px-2 text-xs"
              onClick={() => setLocale("ml-IN")}
            >
              ML
            </Button>
            <Button
              size="sm"
              variant={!inMalayalam ? "secondary" : "ghost"}
              className="h-7 px-2 text-xs"
              onClick={() => setLocale("en-IN")}
            >
              EN
            </Button>
          </div>
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" onClick={() => setShowPhoneDialog(true)}>
                  <Phone className="h-5 w-5" />
                  <span className="ml-2">{inMalayalam ? "വിളിക്കുക" : "Call"}</span>
              </Button>
              {whatsappUrl && (
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="inline-block transition-transform hover:scale-105">
                      <Image
                      src="/images/WhatsAppButtonGreenSmall.svg"
                      alt="Chat on WhatsApp"
                      width={140}
                      height={28}
                      priority
                      data-ai-hint="whatsapp button small"
                      />
                  </a>
              )}
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
                <Button size="icon" variant="ghost" asChild>
                  <a href={`tel:${phoneNumber}`} onClick={handleCallClick} aria-label={inMalayalam ? "വിളിക്കുക" : "Call"}>
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
      <AlertDialog open={showPhoneDialog} onOpenChange={setShowPhoneDialog}>
          <AlertDialogContent>
              <AlertDialogHeader>
              <AlertDialogTitle className="font-headline text-2xl text-primary">{inMalayalam ? "കോൺടാക്റ്റ് നമ്പർ" : "Contact Number"}</AlertDialogTitle>
              </AlertDialogHeader>
              <div className="text-center text-2xl font-mono tracking-widest py-4">
                  {DISPLAY_PHONE_NUMBER}
              </div>
              <AlertDialogFooter>
              <AlertDialogCancel>{inMalayalam ? "അടയ്ക്കുക" : "Close"}</AlertDialogCancel>
              </AlertDialogFooter>
          </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
