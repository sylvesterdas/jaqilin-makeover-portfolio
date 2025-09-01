
'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { getCookieConsent } from './cookie-consent';

export default function Analytics() {
  const GA_TRACKING_ID = 'G-LW05M54Q9T';
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    setConsent(getCookieConsent());
  }, []);

  // Only render scripts if consent has not been rejected
  if (consent === false) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              'analytics_storage': 'granted'
            });
          `,
        }}
      />
    </>
  );
}
