import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kevin.iopulse.cloud"),
  title: "Kevin Ngenoh — Web & Software Developer",
  description:
    "Modern websites, web apps, and native mobile apps for brands, creators, and businesses. Building for the web since 2020. Based in Eldoret, Kenya.",
  keywords: [
    "web developer kenya",
    "next.js developer kenya",
    "eldoret web developer",
    "kevin ngenoh",
    "nairobi web developer",
    "kenya software developer",
    "mobile app developer kenya",
  ],
  authors: [{ name: "Kevin Ngenoh" }],
  creator: "Kevin Ngenoh",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://kevin.iopulse.cloud",
    title: "Kevin Ngenoh — Web & Software Developer",
    description:
      "Modern websites, web apps, and native mobile apps for brands, creators, and businesses. Since 2020.",
    siteName: "Kevin Ngenoh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Ngenoh — Web & Software Developer",
    description:
      "Modern websites, web apps, and native mobile apps. Since 2020.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
