
'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLocale } from '@/components/locale-provider';
import { isMalayalam } from '@/lib/locale';

export default function AboutContent() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const birthDate = new Date(1998, 8, 22); // Month is 0-indexed (0-11)
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <Card className="overflow-hidden bg-card/70 border-border/60 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[520px]">
            <Image
              src="/images/profile.jpg"
              alt="Jaqilin S"
              fill
              className="object-cover object-top"
              data-ai-hint="woman portrait"
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
          <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl text-primary text-balance">
              {inMalayalam ? "ജാകിലിനെ കുറിച്ച്" : "About Jaqilin"}
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-foreground/80">
              {inMalayalam
                ? `എന്റെ പേര് ജാകിലിൻ എസ്. ${age !== null ? `${age} വയസ്സിൽ,` : ''} ജാകിലിൻ മേക്കോവറിന്റെ പിന്നിലുള്ള ആർട്ടിസ്റ്റ് ഞാൻ ആണ്.`
                : `My name is Jaqilin S, and ${age !== null ? `at ${age} years old,` : ''} I am the creative force behind Jaqilin Makeover.`}
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-foreground/80">
              {inMalayalam
                ? "കാഞ്ഞിരംകുളം, തിരുവനന്തപുരം ആസ്ഥാനമായി വിവാഹങ്ങൾക്കും പ്രത്യേക ചടങ്ങുകൾക്കുമായി പ്രൊഫഷണൽ മേക്കപ്പ് സേവനം നൽകുന്നു. Jaqilin Makeover, LJS Works (UDYAM-KL-12-0112903) എന്ന രജിസ്റ്റർ ചെയ്ത സ്ഥാപനത്തിന്റെ ഭാഗമാണ്."
                : "Based in Kanjiramkulam, Trivandrum, my passion is crafting unforgettable looks for weddings, special occasions, and fashion events. Jaqilin Makeover is a product of LJS Works, a registered Indian sole proprietorship (UDYAM-KL-12-0112903). I strive to provide a professional and personal experience for all my clients."}
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-foreground/80">
              {inMalayalam
                ? "നിങ്ങൾ ആത്മവിശ്വാസത്തോടെ, മനോഹരമായി, നിങ്ങളുടെ പ്രത്യേക നിമിഷത്തിന് റെഡിയായി അനുഭവപ്പെടുക എന്നതാണ് എന്റെ ലക്ഷ്യം."
                : "My goal is to make you feel confident, beautiful, and ready for your spotlight moment."}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
