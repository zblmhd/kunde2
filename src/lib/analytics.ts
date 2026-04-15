// Tiny GA4 event helper — safe to import from any client component.
// Plan §4 / Step 6: track the 4 conversion events that actually drive
// patient acquisition.
//
// Events:
//   book_appointment_click   — booking CTA / sticky button
//   phone_call_click         — any tel: link in nav, footer or contact
//   contact_form_submit      — booking form submission
//   insurance_form_submit    — free insurance verification form

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEvent =
  | 'book_appointment_click'
  | 'phone_call_click'
  | 'contact_form_submit'
  | 'insurance_form_submit';

export function trackEvent(
  event: AnalyticsEvent,
  params: Record<string, string | number | undefined> = {},
) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', event, params);
}
