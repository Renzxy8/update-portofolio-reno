import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/root";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: ["300", "400", "500", "600"], style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${fraunces.variable} ${inter.variable} bg-[#020617] text-[#E2E8F0] antialiased`}>
        <Navbar />
        <main className="min-h-screen bg-[#020617]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
