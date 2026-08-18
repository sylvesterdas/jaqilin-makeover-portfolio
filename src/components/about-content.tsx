
'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLocale } from '@/components/locale-provider';
import { isMalayalam } from '@/lib/locale';

export default function AboutContent() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <Card className="overflow-hidden bg-card border-primary/20 shadow-[0_15px_45px_rgba(0,0,0,0.06)] rounded-3xl">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[320px] sm:min-h-[400px] md:min-h-[580px]">
            <Image
              src="/images/profile.jpg"
              alt="Jaqilin S - Lakme Certified Bridal Makeup Artist"
              fill
              className="object-cover object-top"
              data-ai-hint="woman portrait"
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden" />
          </div>
          <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
              <span>✨ Lakmé Certified Bridal Artist</span>
            </div>

            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              {inMalayalam ? "ജാകിലിൻ എസ്." : "About Jaqilin"}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-primary font-medium">
              {inMalayalam
                ? "Lakmé Academy സർട്ടിഫൈഡ് ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റ്"
                : "Lakmé Certified Freelance Bridal Makeup Artist"}
            </p>

            <div className="mt-4 space-y-3.5 text-sm sm:text-base text-foreground/80 leading-relaxed">
              <p>
                {inMalayalam
                  ? "തിരുവനന്തപുരം കാഞ്ഞിരംകുളം കേന്ദ്രമാക്കി പ്രവർത്തിക്കുന്ന പ്രൊഫഷണൽ ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റാണ് ഞാൻ. ഓരോ വധുവിന്റെയും സ്വാഭാവിക ഭംഗി എടുത്തു കാണിക്കുന്ന നാച്ചുറൽ, ഫ്രഷ് & ലോങ്ങ്-വെയർ മേക്കപ്പാണ് എന്റെ പ്രത്യേകത."
                  : "Based in Kanjiramkulam, Thiruvananthapuram, I specialize in natural, long-lasting bridal makeup, elegant hairstyling, and traditional saree draping for Hindu, Christian, and Muslim wedding ceremonies."}
              </p>
              <p>
                {inMalayalam
                  ? "കാഞ്ഞിരംകുളത്തും പരിസരപ്രദേശങ്ങളിലും (നെല്ലിമൂട്, പൂവാർ, ബാലരാമപുരം, കോവളം, വിഴിഞ്ഞം), നെയ്യാറ്റിൻകര, കാട്ടാക്കട, തിരുവനന്തപുരം സിറ്റി എന്നിവിടങ്ങളിലും വീട്ടിലോ വിവാഹ മണ്ഡപത്തിലോ നേരിട്ടെത്തി സേവനം നൽകുന്നു."
                  : "We provide home and venue makeover services across Kanjiramkulam (10 km radius), Neyyattinkara, Kattakada, and the entire Thiruvananthapuram district."}
              </p>
              <p>
                {inMalayalam
                  ? "Estée Lauder, NARS, MAC തുടങ്ങിയ പ്രീമിയം ബ്രാൻഡുകൾ മാത്രമാണ് ഉപയോഗിക്കുന്നത്. ഓരോ ക്ലയന്റിനുശേഷവും എല്ലാ ബ്രഷുകളും ടൂളുകളും 100% അണുവിമുക്തമാക്കി (Sterilized & Sanitized) പൂർണ്ണ ഹൈജീനോടെ മാത്രമാണ് ഉപയോഗിക്കുന്നത്. ചർമ്മത്തിൽ യാതൊരു അലർജിയും ഉണ്ടാകില്ല."
                  : "We exclusively use luxury, skin-friendly cosmetics (Estée Lauder, NARS, MAC) with strict hygiene standards: every brush and tool is thoroughly sterilized and sanitized before each client to guarantee zero cross-contamination and complete skin safety."}
              </p>
              <p>
                {inMalayalam
                  ? "Jaqilin Makeover എന്നത് രജിസ്റ്റർ ചെയ്ത സ്ഥാപനമാണ് (LJS Works, UDYAM-KL-12-0112903). വിവാഹദിനത്തിൽ യാതൊരു ടെൻഷനുമില്ലാതെ വധുവിനും കുടുംബത്തിനും സന്തോഷകരമായ ഒരുക്കമാണ് ഞങ്ങളുടെ ഉറപ്പ്."
                  : "Jaqilin Makeover operates under LJS Works, a registered Indian enterprise (UDYAM-KL-12-0112903). Our mission is to make every bride feel confident, radiant, and stress-free on her big day."}
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/917356483404?text=Hi%20Jaqilin%2C%20I%20would%20like%20to%20know%20more%20about%20your%20bridal%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow-sm"
              >
                {inMalayalam ? "WhatsApp-ൽ സംസാരിക്കൂ" : "Chat on WhatsApp"}
              </a>
              <a
                href="/#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {inMalayalam ? "വർക്കുകൾ കാണൂ" : "View Bridal Work"}
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
