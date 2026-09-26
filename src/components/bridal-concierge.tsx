"use client";

import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, Calendar, CalendarDays, Users, Check } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/events";
import { buildWhatsAppUrl } from "@/lib/contact-links";
import WhatsAppGlyph from "@/components/icons/whatsapp-glyph";

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

  // Coarse area chips plus an optional free-text venue: one tap instead of
  // hunting through dozens of place names, and no wrong preselected venue.
  const areas = [
    {
      id: "south",
      label: inMalayalam ? "കാഞ്ഞിരംകുളം / കോവളം / പൂവാർ ഭാഗം" : "Kanjiramkulam / Kovalam / Poovar area",
      full: "Kanjiramkulam / Kovalam / Poovar area",
    },
    {
      id: "neyyattinkara",
      label: inMalayalam ? "നെയ്യാറ്റിൻകര / കാട്ടാക്കട ഭാഗം" : "Neyyattinkara / Kattakada area",
      full: "Neyyattinkara / Kattakada area",
    },
    {
      id: "city",
      label: inMalayalam ? "തിരുവനന്തപുരം സിറ്റി / മറ്റ് സ്ഥലം" : "Trivandrum city / elsewhere",
      full: "Trivandrum city / elsewhere",
    },
  ];

  const guestCounts = [
    { id: "1", label: inMalayalam ? "വധു മാത്രം" : "Bride Only" },
    { id: "2-4", label: inMalayalam ? "വധു + 2-3 ബന്ധുക്കൾ" : "Bride + 2-3 Guests" },
    { id: "5+", label: inMalayalam ? "4+ പേരുള്ള ഗ്രൂപ്പ്" : "4+ Group" },
  ];

  const [selectedEvent, setSelectedEvent] = useState(eventTypes[0]);
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);
  const [venue, setVenue] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [selectedGuests, setSelectedGuests] = useState(guestCounts[0]);

  const selectedArea = areas.find((a) => a.id === selectedAreaId);
  // <input type="date"> gives YYYY-MM-DD; Kerala customers read DD-MM-YYYY.
  const displayDate = eventDate ? eventDate.split("-").reverse().join("-") : "";
  const place = [venue.trim(), selectedArea?.label].filter(Boolean).join(", ");

  const generateWhatsAppMessage = () => {
    if (inMalayalam) {
      return `ഹായ്, വെബ്സൈറ്റ് കണ്ടാണ് മെസ്സേജ് അയക്കുന്നത്. ഈ തീയതിയിൽ ലഭ്യമാണോ?
• ചടങ്ങ്: ${selectedEvent.label}
• തീയതി: ${displayDate}
• സ്ഥലം: ${place}
• മേക്കപ്പ് വേണ്ടവർ: ${selectedGuests.label}

പാക്കേജ് വിവരങ്ങൾ അറിയിക്കാമോ?`;
    }
    return `Hi, I found your website and would like to check your availability:
• Event: ${selectedEvent.full}
• Date: ${displayDate}
• Venue / place: ${place}
• People needing makeup: ${selectedGuests.label}

Could you please share package details?`;
  };

  const whatsAppUrl = buildWhatsAppUrl(generateWhatsAppMessage());

  const handleConciergeSubmit = () => {
    trackWhatsAppClick("concierge", {
      locale,
      ceremony_type: selectedEvent.id,
      location_selected: selectedArea?.id ?? (venue.trim() ? "custom" : "none"),
      guest_count: selectedGuests.id,
      date_given: eventDate ? "yes" : "no",
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

            {/* Step 2: Date */}
            <div>
              <label
                htmlFor="concierge-date"
                className="flex items-center gap-2 font-headline text-sm sm:text-base font-semibold text-foreground mb-3"
              >
                <CalendarDays className="h-4 w-4 text-primary" />
                <span>2. {inMalayalam ? "ചടങ്ങിന്റെ തീയതി" : "Event Date"}</span>
                <span className="text-xs font-normal text-foreground/60">
                  ({inMalayalam ? "അറിയാമെങ്കിൽ" : "if fixed"})
                </span>
              </label>
              <input
                id="concierge-date"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full sm:w-64 h-11 rounded-xl border border-border/80 bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Step 3: Location */}
            <div>
              <label
                htmlFor="concierge-venue"
                className="flex items-center gap-2 font-headline text-sm sm:text-base font-semibold text-foreground mb-3"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span>3. {inMalayalam ? "സ്ഥലം / മണ്ഡപം" : "Venue / Place"}</span>
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-3">
                {areas.map((area) => {
                  const isSelected = selectedAreaId === area.id;
                  return (
                    <button
                      key={area.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedAreaId(isSelected ? null : area.id)}
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-background border border-border/80 text-foreground/80 hover:border-primary/50"
                      }`}
                    >
                      {isSelected && <Check className="h-3.5 w-3.5" />}
                      <span>{area.label}</span>
                    </button>
                  );
                })}
              </div>
              <input
                id="concierge-venue"
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                maxLength={120}
                placeholder={inMalayalam ? "ഓഡിറ്റോറിയം / പള്ളി / സ്ഥലം (ഓപ്ഷണൽ)" : "Auditorium, church or place (optional)"}
                className="w-full h-11 rounded-xl border border-border/80 bg-background px-4 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Step 3: Guest Count */}
            <div>
              <label className="flex items-center gap-2 font-headline text-sm sm:text-base font-semibold text-foreground mb-3">
                <Users className="h-4 w-4 text-primary" />
                <span>4. {inMalayalam ? "മേക്കപ്പ് ആവശ്യമുള്ള ആളുകളുടെ എണ്ണം" : "Makeup Count"}</span>
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
                {[selectedEvent.label, displayDate, place].filter(Boolean).join(" • ")} ({selectedGuests.label})
              </div>

              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-8 shadow-md gap-2 rounded-full"
                onClick={handleConciergeSubmit}
              >
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppGlyph />
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
