import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Gem, Clapperboard, Users, Heart } from 'lucide-react';

const services = [
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Wedding Makeover Packages",
    description: "Complete bridal packages to make your special day unforgettable. Flawless, long-lasting makeup for the bride.",
  },
  {
    icon: <Gem className="w-8 h-8 text-primary" />,
    title: "Engagement & Reception Looks",
    description: "Stunning makeup for your engagement ceremony and reception, tailored to your outfit and theme.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Guest Makeup",
    description: "Elegant and beautiful makeup for bridesmaids, family, and guests attending the wedding.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 18.5c-3.6 0-6.5-2.2-6.5-5.5s3-5.5 6.5-5.5s6.5 2.2 6.5 5.5"/><path d="M12 3v10"/><path d="m18.5 13-1.7-1.4"/><path d="m5.5 13 1.7-1.4"/><path d="M6 22h12"/></svg>,
    title: "Saree Draping",
    description: "Expert saree draping in various styles to perfectly complement your look and occasion.",
  },
  {
    icon: <Clapperboard className="w-8 h-8 text-primary" />,
    title: "Fashion Show Prep",
    description: "Creative and high-fashion makeup for models for runway shows and photoshoots.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-lg text-foreground/70 mt-2">Crafting beauty for every occasion.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border/50 text-center p-6 transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-background rounded-full mb-4">
                    {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-foreground/80 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
