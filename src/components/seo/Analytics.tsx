import Script from 'next/script';

// GA4 + Google Search Console verification.
// Both controlled via environment variables — if the var is unset
// nothing is emitted (no broken script tags in development).
//
// NEXT_PUBLIC_GA_ID  → GA4 measurement ID (e.g. G-XXXXXXXXXX)
// NEXT_PUBLIC_GSC_VERIFICATION → Google Search Console site verification token
//
// Tracked events (fired from CTA click handlers, see lib/analytics.ts):
//   - book_appointment_click
//   - phone_call_click
//   - contact_form_submit
//   - insurance_form_submit

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}

export function GscVerification() {
  const token = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
  if (!token) return null;
  return <meta name="google-site-verification" content={token} />;
}
