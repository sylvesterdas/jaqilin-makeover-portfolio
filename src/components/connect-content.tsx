"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Instagram, Phone } from "lucide-react";
import Image from "next/image";
import { event } from "@/lib/events";
import WhatsAppIcon from "./icons/whatsapp-icon";

const heroImages = [
  {
    src: "/images/hero-background.jpg",
    alt: "Background of a beautifully decorated wedding setting",
    hint: "bride makeup",
  },
  {
    src: "/images/hero-background1.jpg",
    alt: "Another beautiful makeup shot",
    hint: "bridal makeup",
  },
];

export default function ConnectContent() {
  const [links, setLinks] = useState({
    call: "",
    whatsapp: "",
    instagram: "https://www.instagram.com/jaqilinmua",
    website: "/",
  });
  const [callPhoneNumber, setCallPhoneNumber] = useState("");
  const [whatsappPhoneNumber, setWhatsappPhoneNumber] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const callNum = "+917356483404";
    const whatsappNum = "+917356483404";

    setCallPhoneNumber("+91 73564 83404");
    setWhatsappPhoneNumber("+91 73564 83404");

    const whatsappText =
      "Hello%20Jaqilin%20Makeover,%20I'd%20like%20to%20inquire%20about%20your%20services.";

    setLinks((prev) => ({
      ...prev,
      call: `tel:${callNum}`,
      whatsapp: `https://wa.me/917356483404?text=${whatsappText}`,
    }));
  }, []);

  const handleEvent = (action: string, label: string) => {
    event({
      action,
      category: "engagement",
      label,
      value: 1,
    });
  };

  return (
    <div className="relative pt-16 flex flex-col items-center justify-center min-h-[100svh] bg-background p-4 overflow-hidden">
      {heroImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover object-right transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          data-ai-hint={image.hint}
          priority={index === 0}
          onContextMenu={(e) => e.preventDefault()}
        />
      ))}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 flex flex-col items-center w-full">
        {/* Intro */}
        <div className="flex flex-col items-center mb-8 px-8 py-4 text-center max-w-sm bg-gray-950/20 rounded-3xl">
          <Image
            src="/logo.png"
            alt="Jaqilin Makeover Logo"
            width={96}
            height={96}
            className="rounded-full border-2 border-primary shadow-lg"
          />

          <h1 className="mt-4 font-headline text-3xl text-primary drop-shadow-md">
            Bridal Makeup Artist in Thiruvananthapuram
          </h1>

          <p className="mt-2 text-foreground/90">
            Natural, long-wear makeup with hair styling & saree draping
          </p>

          <p className="mt-1 text-foreground/80 text-sm">
            Hindu • Christian • Muslim Weddings <br />
            Home & venue service
          </p>

          <p className="mt-4 text-foreground/70 text-sm">
            Not sure which look or package suits your wedding? <br />
            Share your date, venue & function — I’ll guide you personally.
          </p>

          <p className="mt-2 text-foreground/60 text-xs">
            നിങ്ങളുടെ വിവാഹത്തിനായി ശരിയായ മേക്കപ്പ് തിരഞ്ഞെടുക്കാൻ സഹായം വേണോ?{" "}
            <br />
            തീയതിയും വേദിയും അയക്കൂ.
          </p>
        </div>

        {/* Contact Buttons */}
        <Card className="w-full max-w-sm bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg">
          <CardContent className="p-6 space-y-4">
            {/* WhatsApp */}
            <Button
              size="lg"
              asChild
              className="h-auto py-4 px-4 justify-start rounded-xl"
              onClick={() => handleEvent("click_whatsapp", "Connect Page")}
            >
              <a
                target="_blank"
                href={links.whatsapp}
                className="flex items-start gap-4 w-full"
              >
                <WhatsAppIcon />
                <div className="flex flex-col items-start text-left">
                  <span className="font-medium leading-snug">
                    Check Date Availability on WhatsApp
                  </span>
                  <span className="text-xs text-primary-foreground/70 leading-snug">
                    തീയതി ലഭ്യമാണോ എന്ന് അറിയാൻ
                  </span>
                </div>
              </a>
            </Button>

            {/* Call */}
            <Button
              size="lg"
              asChild
              variant="outline"
              className="h-auto py-4 px-4 justify-start rounded-xl"
              onClick={() => handleEvent("click_call", "Connect Page")}
            >
              <a href={links.call} className="flex items-start gap-4 w-full">
                <Phone className="size-6 shrink-0 mt-1" />
                <div className="flex flex-col items-start text-left">
                  <span className="font-medium leading-snug">
                    Call for Booking Enquiry
                  </span>
                  <span className="text-xs text-foreground/60 leading-snug">
                    ബുക്കിംഗിനായി വിളിക്കുക
                  </span>
                </div>
              </a>
            </Button>

            {/* Instagram */}
            <Button
              size="lg"
              asChild
              variant="outline"
              className="h-auto py-3 px-4 justify-start rounded-xl"
              onClick={() => handleEvent("click_instagram", "Connect Page")}
            >
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 w-full min-w-0"
              >
                <Instagram className="size-6 shrink-0 mt-1" />
                <div className="flex flex-col items-start text-left min-w-0 max-w-full">
                  <span className="font-medium leading-snug break-words max-w-full">
                    View Bridal Work on Instagram
                  </span>
                  <span className="text-xs text-foreground/60 leading-snug break-words max-w-full">
                    Insta-യിൽ വധുവിന്റെ ജോലി കാണുക
                  </span>
                </div>
              </a>
            </Button>

            {/* Website */}
            <Button
              size="lg"
              asChild
              variant="outline"
              className="h-auto py-3 px-4 justify-start rounded-xl"
            >
              <a href={links.website} className="flex items-start gap-4 w-full">
                <Globe className="size-6 shrink-0 mt-1" />
                <div className="flex flex-col items-start text-left">
                  <span className="font-medium leading-snug">
                    View Services & Portfolio
                  </span>
                  <span className="text-xs text-foreground/60 leading-snug">
                    സേവനങ്ങളും പോർട്ട്ഫോളിയോയും
                  </span>
                </div>
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
