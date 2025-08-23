
'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AboutPage() {
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
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden bg-card border-primary/20">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[300px] md:min-h-[500px]">
                <Image
                  src="/images/profile.jpg"
                  alt="Jaqilin S"
                  fill
                  className="object-cover object-top"
                  data-ai-hint="woman portrait"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h1 className="font-headline text-5xl md:text-6xl text-primary">About Jaqilin</h1>
                <p className="mt-4 text-lg text-foreground/80">
                  My name is Jaqilin S, and {age !== null ? `at ${age} years old,` : ''} I am the creative force behind Jaqilin Makeover.
                </p>
                <p className="mt-4 text-lg text-foreground/80">
                  Based in Kanjiramkulam, Trivandrum, my passion is crafting unforgettable looks for weddings, special occasions, and fashion events. Under my business, LJS Works, I strive to provide a professional and personal experience for all my clients.
                </p>
                <p className="mt-4 text-lg text-foreground/80">
                  My goal is to make you feel confident, beautiful, and ready for your spotlight moment.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
