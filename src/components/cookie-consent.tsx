
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const getCookieConsent = (): boolean | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const consent = localStorage.getItem('cookie_consent');
  if (consent === null) {
    // Default to consent if no choice has been made
    return true; 
  }
  if (consent === 'granted' || consent === 'true') {
    return true;
  }
  if (consent === 'denied' || consent === 'false') {
    return false;
  }
  try {
    return Boolean(JSON.parse(consent));
  } catch {
    return true;
  }
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    // Only show banner if no decision has been made
    if (localStorage.getItem('cookie_consent') === null) {
      setShowBanner(true);
    }
  }, []);

  const handleDecision = (accepted: boolean) => {
    localStorage.setItem('cookie_consent', JSON.stringify(accepted));
    setShowBanner(false);
    // Reload to apply analytics changes
    if (!accepted) {
        window.location.reload();
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 p-2 bg-card/80 backdrop-blur-sm border-t border-border/50",
      "data-[state=visible]:animate-in data-[state=visible]:slide-in-from-bottom-full",
      "data-[state=hidden]:animate-out data-[state=hidden]:slide-out-to-bottom-full"
    )} data-state={showBanner ? 'visible' : 'hidden'}>
      <div className="container mx-auto flex items-center justify-between gap-4">
        <p className="text-sm text-foreground/80 flex-grow text-left">
          We use cookies to improve your experience. See our{' '}
          <Link href="/privacy-policy" className="underline hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex-shrink-0 flex flex-col sm:flex-row items-end sm:items-center gap-x-4 gap-y-1">
            <Button variant="link" size="sm" className="h-auto p-0 text-foreground" onClick={() => handleDecision(true)}>
                Accept
            </Button>
            <Button variant="link" size="sm" className="h-auto p-0 text-foreground" onClick={() => handleDecision(false)}>
                Reject
            </Button>
        </div>
      </div>
    </div>
  );
}
