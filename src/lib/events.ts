'use client';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  placement?: string;
  service_name?: string;
  ceremony_type?: string;
  location_selected?: string;
  guest_count?: string;
  locale?: string;
  [key: string]: any;
};

// Sends structured telemetry to Google Analytics 4 (GA4)
export const event = ({ action, category, label, value, ...rest }: GTagEvent) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag("event", action, {
      event_category: category || "engagement",
      event_label: label || "",
      value: typeof value === "number" ? value : 1,
      ...rest,
    });
  }
};