import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Reno Wahyu — UI/UX & Graphic Designer",
  description:
    "Portofolio Reno Wahyu, desainer UI/UX dan grafis yang berfokus pada desain yang sederhana, jelas, dan mudah digunakan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`
          ${fraunces.variable}
          ${inter.variable}
          font-sans
          bg-[#020617]
          text-[#E2E8F0]
          antialiased
        `}
      >
        <Navbar />

        <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#172554]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
