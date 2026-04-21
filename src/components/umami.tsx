import Script from "next/script";

export function UmamiAnalytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const url = process.env.NEXT_PUBLIC_UMAMI_URL;

  if (!websiteId || !url) return null;

  return (
    <Script
      src={`${url}/script.js`}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
