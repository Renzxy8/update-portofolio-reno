"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang" },
  { id: "karya", label: "Karya" },
  { id: "keahlian", label: "Keahlian" },
  { id: "kontak", label: "Kontak" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 140;
      let current = "beranda";
      for (const item of navLinks) {
        const section = document.getElementById(item.id);
        if (section && position >= section.offsetTop) current = item.id;
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#020617]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-6 sm:px-10">
        <a href="#beranda" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/40 bg-cyan-400/10 font-display text-lg font-semibold text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,.08)]">R</span>
          <span className="font-display text-base font-semibold text-slate-100">Reno Wahyu<span className="text-cyan-300">.</span></span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={`rounded-lg px-3 py-2 font-mono text-[10px] uppercase tracking-wider transition ${activeSection === item.id ? "bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,.07)]" : "text-slate-500 hover:bg-white/[.03] hover:text-slate-200"}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#kontak" className="rounded-lg border border-violet-400/25 bg-violet-500/5 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-violet-200 transition hover:border-violet-300/50 hover:bg-violet-500/10">Connect</a>
      </div>
    </header>
  );
}
