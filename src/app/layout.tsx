import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://metalministry.in'),
  title: {
    default: "Metal Ministry Inc. | Manufacturer & Exporter of Ferrous & Non-Ferrous Metals",
    template: "%s | Metal Ministry Inc."
  },
  description: "ISO 9001:2015 Certified Manufacturer, Stockholder & Exporter of Stainless Steel, High Nickel Alloys, Alloy Steel, Pipes, Fittings, Flanges, and Fasteners.",
  keywords: ["Metal Ministry Inc", "Stainless Steel", "High Nickel Alloys", "Alloy Steel", "Pipes", "Tubes", "Fittings", "Flanges", "Fasteners", "Titanium", "Inconel", "Monel", "Hastelloy"],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://metalministry.in',
    title: "Metal Ministry Inc. | Manufacturer & Exporter of Ferrous & Non-Ferrous Metals",
    description: "Your trusted partner for premium metal products. Certified Manufacturer & Exporter.",
    siteName: "Metal Ministry Inc.",
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased flex flex-col min-h-screen bg-white text-gray-900`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
