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
          bg-[#F6F4EE]
          text-[#252922]
          antialiased
        `}
      >
        <Navbar />

        <main className="min-h-screen bg-[#323249]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}