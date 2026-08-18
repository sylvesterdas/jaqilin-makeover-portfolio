"use client";

import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle, MapPin, Calendar, Users, Check } from "lucide-react";
import { event } from "@/lib/events";

export default function BridalConcierge() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);

  const eventTypes = [
    { id: "hindu", label: inMalayalam ? "ഹിന്ദു മുഹൂർത്തം" : "Hindu Wedding", full: "Kerala Hindu Bridal Muhurtham" },
    { id: "christian", label: inMalayalam ? "ക്രിസ്ത്യൻ വെഡിങ്" : "Christian Wedding", full: "Christian Church Wedding & Veil" },
    { id: "nikah", label: inMalayalam ? "നിക്കാഹ് / റിസപ്ഷൻ" : "Nikah / Reception", full: "Muslim Nikah / Reception Glam" },
    { id: "engagement", label: inMalayalam ? "എൻഗേജ്മെന്റ് / ഹൽദി" : "Engagement / Haldi", full: "Engagement / Haldi Look" },
    { id: "saree", label: inMalayalam ? "സാരി ഡ്രേപ്പിംഗ്" : "Saree Draping", full: "Saree Draping & Styling" },
  ];

  const locationGroups = [
    {
      group: inMalayalam ? "⭐ ഏറ്റവും പ്രിയപ്പെട്ട പ്രദേശം (കാഞ്ഞിരംകുളം & 10 km ചുറ്റളവ്)" : "⭐ Most Preferred (Kanjiramkulam & 10 km Radius)",
      items: [
        "Kanjiramkulam (Studio)",
        "Nellimoodu",
        "Poovar",
        "Balaramapuram",
        "Vizhinjam",
        "Kovalam",
        "Azhimala",
        "Chowara",
        "Nellikkakuzhi",
        "Kannaravila",
        "Venganoor",
        "Thirupuram",
        "Payattuvila",
        "Kottukal",
      ],
    },
    {
      group: inMalayalam ? "📍 നെയ്യാറ്റിൻകര & കാട്ടാക്കട മേഖലകൾ" : "📍 Neyyattinkara & Kattakada Regions",
      items: [
        "Neyyattinkara",
        "Amaravila",
        "Parassala",
        "Kattakada",
        "Malayinkeezhu",
        "Maranalloor",
        "Kallikkadu",
        "Peyyad",
        "Perukavu",
        "Poovachal",
        "Vellarada",
      ],
    },
    {
      group: inMalayalam ? "🏛️ തിരുവനന്തപുരം സിറ്റി & മറ്റ് പ്രദേശങ്ങൾ" : "🏛️ Trivandrum City & Extended Hubs",
      items: [
        "Thampanoor / Central",
        "Palayam",
        "Kowdiar",
        "Sasthamangalam",
        "Peroorkada",
        "Thirumala",
        "Pappanamcode",
        "Kaimanam",
        "Karamana",
        "Vellayani",
        "Nemom / Pravachambalam",
        "Kochu Veli",
        "Kazhakoottam / Technopark",
        "Chirayinkeezhu",
        "Kadakkavoor",
        "Anjengo (Anchuthengu)",
        "Attingal / Nedumangad",
        "Other Kerala Location",
      ],
    },
  ];

  const allLocations = locationGroups.flatMap((g) => g.items);

  const guestCounts = [
    { id: "1", label: inMalayalam ? "വധു മാത്രം" : "Bride Only" },
    { id: "2-4", label: inMalayalam ? "വധു + 2-3 ബന്ധുക്കൾ" : "Bride + 2-3 Guests" },
    { id: "5+", label: inMalayalam ? "4+ പേരുള്ള ഗ്രൂപ്പ്" : "4+ Group" },
  ];

  const [selectedEvent, setSelectedEvent] = useState(eventTypes[0]);
  const [selectedLocation, setSelectedLocation] = useState(allLocations[0]);
  const [selectedGuests, setSelectedGuests] = useState(guestCounts[0]);

  const generateWhatsAppMessage = () => {
    return `Hi Jaqilin, I would like to check your availability for my wedding event:
• Event Type: ${selectedEvent.full}
• Location: ${selectedLocation}
• People requiring makeup/styling: ${selectedGuests.label}

Could you please share your package details and availability?`;
  };

  const whatsAppUrl = `https://wa.me/917356483404?text=${encodeURIComponent(generateWhatsAppMessage())}`;

  const handleConciergeSubmit = () => {
    event({
      action: "submit_concierge",
      category: "conversion",
      label: `${selectedEvent.id}_${selectedLocation}`,
      ceremony_type: selectedEvent.label,
      location_selected: selectedLocation,
      guest_count: selectedGuests.label,
      placement: "bridal_concierge",
      value: 1,
    });
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-card via-background to-card border-t border-border/40">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{inMalayalam ? "ദ്രുത ബുക്കിംഗ്" : "Instant Availability Check"}</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">
            {inMalayalam ? "നിങ്ങളുടെ ബ്രൈഡൽ ലുക്ക് പ്ലാൻ ചെയ്യൂ" : "Check Date & Custom Package"}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-foreground/75">
            {inMalayalam
              ? "ചടങ്ങും സ്ഥലവും തിരഞ്ഞെടുത്ത് 1-ക്ലിക്കിൽ WhatsApp വഴി കൃത്യമായ വിവരങ്ങൾ അറിയൂ"
              : "Select your ceremony and venue location to get instant package details directly on WhatsApp"}
          </p>
        </div>

        {/* Concierge Interactive Card */}
        <div className="rounded-3xl border border-primary/30 bg-card p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
          <div className="space-y-6 sm:space-y-8">
            {/* Step 1: Ceremony */}
            <div>
              <label className="flex items-center gap-2 font-headline text-sm sm:text-base font-semibold text-foreground mb-3">
                <Calendar className="h-4 w-4 text-primary" />
                <span>1. {inMalayalam ? "ചടങ്ങ് തിരഞ്ഞെടുക്കുക" : "Select Ceremony Type"}</span>
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {eventTypes.map((evt) => {
                  const isSelected = selectedEvent.id === evt.id;
                  return (
                    <button
                      key={evt.id}
                      type="button"
                      onClick={() => setSelectedEvent(evt)}
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-md scale-105"
                          : "bg-background border border-border/80 text-foreground/80 hover:border-primary/50"
                      }`}
                    >
                      {isSelected && <Check className="h-3.5 w-3.5" />}
                      <span>{evt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Location */}
            <div>
              <label className="flex items-center gap-2 font-headline text-sm sm:text-base font-semibold text-foreground mb-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>2. {inMalayalam ? "സ്ഥലം / മണ്ഡപം (തിരഞ്ഞെടുക്കുക)" : "Select Venue / Event Location"}</span>
              </label>

              <div className="space-y-3">
                {locationGroups.map((group, gIdx) => (
                  <div key={gIdx} className="p-3 rounded-2xl bg-background/50 border border-border/50">
                    <p className="text-[11px] sm:text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                      {group.group}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {group.items.map((loc) => {
                        const isSelected = selectedLocation === loc;
                        return (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => setSelectedLocation(loc)}
                            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                              isSelected
                                ? "bg-primary text-primary-foreground shadow-md font-semibold scale-105"
                                : "bg-card border border-border/80 text-foreground/80 hover:border-primary/50"
                            }`}
                          >
                            {loc}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Guest Count */}
            <div>
              <label className="flex items-center gap-2 font-headline text-sm sm:text-base font-semibold text-foreground mb-3">
                <Users className="h-4 w-4 text-primary" />
                <span>3. {inMalayalam ? "മേക്കപ്പ് ആവശ്യമുള്ള ആളുകളുടെ എണ്ണം" : "Makeup Count"}</span>
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {guestCounts.map((cnt) => {
                  const isSelected = selectedGuests.id === cnt.id;
                  return (
                    <button
                      key={cnt.id}
                      type="button"
                      onClick={() => setSelectedGuests(cnt)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-background border border-border/80 text-foreground/80 hover:border-primary/50"
                      }`}
                    >
                      {cnt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preview & Submit Button */}
            <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-foreground/70 text-center sm:text-left">
                <span className="font-semibold text-foreground">{inMalayalam ? "തിരഞ്ഞെടുത്തത്:" : "Selected:"}</span>{" "}
                {selectedEvent.label} • {selectedLocation} ({selectedGuests.label})
              </div>

              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-8 shadow-md gap-2 rounded-full"
                onClick={handleConciergeSubmit}
              >
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 fill-white" />
                  <span>{inMalayalam ? "ലഭ്യത WhatsApp ൽ ചോദിക്കൂ" : "Check Date on WhatsApp"}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
