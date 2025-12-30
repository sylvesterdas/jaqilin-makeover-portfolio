
'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { event } from "@/lib/events";
import { Phone } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"


export default function HeaderActions() {
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);


  useEffect(() => {
    const callNum = '+917356483404';
    const whatsappNum = '917356483404';
    const text = "Hello%20Jaqilin%20Makeover,%20I'd%20like%20to%20inquire%20about%20your%20services.";
    setWhatsappUrl(`https://wa.me/${whatsappNum}?text=${text}`);
    setPhoneNumber(callNum);
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
      <div className="flex items-center gap-2">
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" onClick={() => setShowPhoneDialog(true)}>
                  <Phone className="h-5 w-5" />
                  <span className="ml-2">Call</span>
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
