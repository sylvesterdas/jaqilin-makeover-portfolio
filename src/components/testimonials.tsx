"use client";

import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import { Star, Award, ShieldCheck, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);

  const reviews = [
    {
      name: inMalayalam ? "അഞ്ജലി കൃഷ്ണ" : "Anjali Krishna",
      functionType: inMalayalam ? "ഹിന്ദു വെഡിങ് & റിസപ്ഷൻ" : "Hindu Wedding & Reception",
      location: inMalayalam ? "തിരുവനന്തപുരം" : "Thiruvananthapuram",
      comment: inMalayalam
        ? "മേക്കപ്പ് വളരെ natural ആയിരുന്നു. ഫോട്ടോസിലും വളരെ ഭംഗിയായി തോന്നി. വൈകുന്നേരം വരെ യാതൊരു കേടുപാടും കൂടാതെ ഫ്രഷ് ആയി നിന്നു. സാരി ഡ്രേപ്പിങ്ങും പെർഫെക്റ്റ് ആയിരുന്നു!"
        : "Jaqilin gave me the exact natural bridal glow I wanted! The makeup stayed fresh through the morning muhurtham and reception without feeling heavy. Her saree draping was absolutely neat and comfortable.",
      rating: 5,
    },
    {
      name: inMalayalam ? "മരിയ തോമസ്" : "Maria Thomas",
      functionType: inMalayalam ? "ക്രിസ്ത്യൻ ചർച്ച് വെഡിങ്" : "Christian Church Wedding",
      location: inMalayalam ? "നെയ്യാറ്റിൻകര" : "Neyyattinkara",
      comment: inMalayalam
        ? "വെഡിങ് സാരിയും വെയിലും സെറ്റ് ചെയ്ത രീതി വളരെ മനോഹരമായിരുന്നു. കൃത്യസമയത്ത് വേദിയിൽ എത്തി എല്ലാം വളരെ ശാന്തമായി പൂർത്തിയാക്കി. എല്ലാവരും അഭിനന്ദിച്ചു!"
        : "She styled my veil and gown hairstyle beautifully! Arrived at the venue right on time and made the morning calm and stress-free. Received so many compliments from my family.",
      rating: 5,
    },
    {
      name: inMalayalam ? "ഫാത്തിമ നസ്‌റീൻ" : "Fathima Nasreen",
      functionType: inMalayalam ? "നിക്കாஹ் & മന്ത്രകോടി ലുക്ക്" : "Nikah & Reception",
      location: inMalayalam ? "കഴക്കൂട്ടം" : "Kazhakoottam",
      comment: inMalayalam
        ? "എന്റെ സ്കിൻ ടോണിന് അനുയോജ്യമായ പെർഫെക്റ്റ് ഷെയ്ഡ് ആയിരുന്നു. കൺഫ്യൂഷൻ ഇല്ലാതെ ലുക്ക് സെലക്ട് ചെയ്യാൻ സഹായിച്ചു. സഹോദരിമാർക്കും ചെയ്ത ഗസ്റ്റ് മേക്കപ്പും മികച്ചതായിരുന്നു."
        : "Very professional and friendly artist. The shade matching was spot on for my skin tone. She also did guest makeup for my mother and sisters, which was graceful and elegant.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-card/40 border-t border-border/40">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="h-3.5 w-3.5" />
            <span>{inMalayalam ? "വിശ്വസനീയ സേവനം" : "Lakmé Certified Artist"}</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            {inMalayalam ? "വധുക്കളുടെ അനുഭവങ്ങൾ" : "Words from Happy Brides"}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-foreground/70">
            {inMalayalam
              ? "ഓരോ വിവാഹത്തിനും നൽകുന്ന ശ്രദ്ധയും സ്നേഹവും"
              : "Real reviews from brides across Thiruvananthapuram and nearby regions"}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <Card
              key={idx}
              className="bg-card border-border/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full">
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-500 mb-4" aria-label="5 out of 5 stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/80 italic mb-6">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Author Details */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <div>
                    <h3 className="font-headline text-base font-semibold text-foreground">
                      {review.name}
                    </h3>
                    <p className="text-xs text-primary font-medium">
                      {review.functionType}
                    </p>
                  </div>
                  <span className="text-xs text-foreground/50">
                    {review.location}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges Row */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-4 rounded-xl bg-background border border-border/50">
            <ShieldCheck className="h-6 w-6 text-primary mx-auto mb-2" />
            <h4 className="font-headline text-sm font-semibold">{inMalayalam ? "സർട്ടിഫൈഡ് പ്രൊഫഷണൽ" : "Certified Artist"}</h4>
            <p className="text-xs text-foreground/60 mt-0.5">Lakmé Academy Trained</p>
          </div>
          <div className="p-4 rounded-xl bg-background border border-border/50">
            <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
            <h4 className="font-headline text-sm font-semibold">{inMalayalam ? "നാച്ചുറൽ ഫിനിഷ്" : "Natural Long-Wear"}</h4>
            <p className="text-xs text-foreground/60 mt-0.5">{inMalayalam ? "ലൈറ്റ്-വെയ്റ്റ് മേക്കപ്പ്" : "No cakey or heavy layers"}</p>
          </div>
          <div className="p-4 rounded-xl bg-background border border-border/50">
            <Star className="h-6 w-6 text-primary mx-auto mb-2" />
            <h4 className="font-headline text-sm font-semibold">{inMalayalam ? "ഹോം & വെന്യൂ സർവീസ്" : "Home & Venue Service"}</h4>
            <p className="text-xs text-foreground/60 mt-0.5">{inMalayalam ? "തിരുവനന്തപുരം മുഴുവൻ" : "Across Thiruvananthapuram"}</p>
          </div>
          <div className="p-4 rounded-xl bg-background border border-border/50">
            <Award className="h-6 w-6 text-primary mx-auto mb-2" />
            <h4 className="font-headline text-sm font-semibold">{inMalayalam ? "കംപ്ലീറ്റ് ബ്രൈഡൽ കെയർ" : "All-in-One Package"}</h4>
            <p className="text-xs text-foreground/60 mt-0.5">{inMalayalam ? "ഹെയർ + സാരി ഡ്രേപ്പിംഗ്" : "Makeup + Hair + Saree"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
