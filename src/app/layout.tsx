import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const BASE_URL = "https://geo-scape.co.bw";

export const metadata: Metadata = {
  /* ── Core ── */
  title: {
    default: "Geo-Scape Consultants | Land Surveyors in Botswana",
    template: "%s | Geo-Scape Consultants",
  },
  description:
    "Geo-Scape Consultants — Botswana's leading multi-disciplinary land surveying firm. Expert cadastral, GIS, geo-technical, physical planning & mining surveys in Gaborone, Palapye and Ghanzi since 2016.",
  keywords: [
    "land surveyors Botswana",
    "land surveyors Gaborone",
    "surveyors near me Botswana",
    "cadastral survey Botswana",
    "GIS mapping Botswana",
    "geo-technical investigation",
    "mining survey Botswana",
    "physical planning Botswana",
    "engineering survey Gaborone",
    "Geo-Scape Consultants",
    "topographic survey",
    "drone survey Botswana",
  ],
  authors: [{ name: "Geo-Scape Consultants", url: BASE_URL }],
  creator: "Geo-Scape Consultants",
  publisher: "Geo-Scape Consultants",
  category: "Land Surveying",

  /* ── Favicon / Icons ── */
  icons: {
    icon: [
      { url: "/Logo.png", type: "image/png" },
    ],
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    locale: "en_BW",
    url: BASE_URL,
    siteName: "Geo-Scape Consultants",
    title: "Geo-Scape Consultants | Land Surveyors in Botswana",
    description:
      "Expert land surveying, GIS, geo-technical & mining survey services across Botswana since 2016. Offices in Gaborone, Palapye & Ghanzi.",
    images: [
      {
        url: `${BASE_URL}/images/hero-site.jpg`,
        width: 1200,
        height: 630,
        alt: "Geo-Scape Consultants — Professional Land Surveyors Botswana",
      },
    ],
  },

  /* ── Twitter Card ── */
  twitter: {
    card: "summary_large_image",
    title: "Geo-Scape Consultants | Land Surveyors in Botswana",
    description:
      "Expert land surveying, GIS, geo-technical & mining survey services across Botswana since 2016.",
    images: [`${BASE_URL}/images/hero-site.jpg`],
  },

  /* ── Canonical & Robots ── */
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Verification placeholders ── */
  verification: {
    google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <head>
        {/* Theme color for browser chrome */}
        <meta name="theme-color" content="#1565C0" />
        <meta name="msapplication-TileColor" content="#1565C0" />
        {/* Geographic targeting */}
        <meta name="geo.region" content="BW" />
        <meta name="geo.placename" content="Gaborone, Botswana" />
        <meta name="geo.position" content="-24.6282;25.9231" />
        <meta name="ICBM" content="-24.6282, 25.9231" />
        {/* Business info */}
        <meta name="contact" content="info@geoscape.co.bw" />
        <meta name="reply-to" content="info@geoscape.co.bw" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
      </head>
      <body className="bg-white text-[#0D1B2A] antialiased">
        <Navbar />
        <main className="pt-[70px]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
