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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Tutup menu setelah berpindah section, saat menekan Escape,
  // dan ketika kembali ke ukuran desktop.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#020617]/80 backdrop-blur-xl">
      <div className="relative mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 sm:px-10 md:px-6">
        <a href="#beranda" onClick={closeMenu} className="group flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cyan-300/40 bg-cyan-400/10 font-display text-lg font-semibold text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,.08)]">R</span>
          <span className="truncate font-display text-base font-semibold text-slate-100">Reno Wahyu<span className="text-cyan-300">.</span></span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-lg px-3 py-2 font-mono text-[10px] uppercase tracking-wider transition ${activeSection === item.id ? "bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,.07)]" : "text-slate-500 hover:bg-white/[.03] hover:text-slate-200"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#kontak"
            onClick={closeMenu}
            className="hidden rounded-lg border border-violet-400/25 bg-violet-500/5 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-violet-200 transition hover:border-violet-300/50 hover:bg-violet-500/10 sm:inline-flex"
          >
            Connect
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-400/5 text-cyan-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/10 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-px w-5 bg-current transition-transform duration-200 ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`h-px w-5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-px w-5 bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-[68px] overflow-hidden border-b border-cyan-400/10 bg-[#020617]/95 shadow-[0_20px_40px_rgba(0,0,0,.35)] backdrop-blur-xl transition-[max-height,opacity,visibility] duration-200 md:hidden ${menuOpen ? "visible max-h-[360px] opacity-100" : "invisible max-h-0 opacity-0"}`}
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 p-3" aria-label="Navigasi mobile">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 font-mono text-[11px] uppercase tracking-wider transition ${activeSection === item.id ? "bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,.07)]" : "text-slate-400 hover:bg-white/[.03] hover:text-slate-200"}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={closeMenu}
              className="mt-1 rounded-lg border border-violet-400/25 bg-violet-500/5 px-4 py-3 text-center font-mono text-[10px] uppercase tracking-wider text-violet-200 transition hover:border-violet-300/50 hover:bg-violet-500/10 sm:hidden"
            >
              Connect
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
