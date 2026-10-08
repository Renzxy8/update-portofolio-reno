import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reportofolio.my.id"),

  title: {
    default: "Reno Wahyu Saputra | UI/UX & Web Developer",
    template: "%s | Reno Wahyu Saputra",
  },

  description:
    "Portfolio resmi Reno Wahyu Saputra, siswa RPL SMKN 1 Pasuruan yang memiliki minat pada UI/UX, web development, programming, dan teknologi.",

  keywords: [
    "Reno Wahyu Saputra",
    "Reno Wahyu",
    "Portfolio Reno Wahyu",
    "UI/UX Designer",
    "Web Developer",
    "Web Development",
    "Frontend Developer",
    "RPL",
    "SMKN 1 Pasuruan",
    "Portfolio Indonesia",
  ],

  authors: [
    {
      name: "Reno Wahyu Saputra",
    },
  ],

  creator: "Reno Wahyu Saputra",
  publisher: "Reno Wahyu Saputra",

  alternates: {
    canonical: "https://reportofolio.my.id",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://reportofolio.my.id",
    siteName: "Reno Wahyu Saputra Portfolio",

    title: "Reno Wahyu Saputra | UI/UX & Web Developer",

    description:
      "Portfolio Reno Wahyu Saputra — UI/UX, web development, programming, dan teknologi.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reno Wahyu Saputra Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Reno Wahyu Saputra | UI/UX & Web Developer",

    description:
      "Portfolio Reno Wahyu Saputra — UI/UX, web development, programming, dan teknologi.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${fraunces.variable} ${inter.variable} bg-[#020617] text-[#E2E8F0] antialiased`}
      >
        <Navbar />

        <main className="min-h-screen bg-[#020617]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}