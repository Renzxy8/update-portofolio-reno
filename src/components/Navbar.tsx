"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/projects", label: "Karya" },
  { href: "/skills", label: "Keahlian" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#334155] bg-[#020617]/90 shadow-[0_4px_25px_rgba(2,6,23,0.35)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-10">
        <Link href="/" onClick={() => setOpen(false)} className="group flex items-center gap-3 rounded-full px-2 py-1.5">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#38BDF8] bg-[#0F172A] transition-all duration-300 group-hover:border-[#818CF8] group-hover:shadow-[0_0_20px_rgba(129,140,248,0.3)]">
            <Image src="/wahyu.jpeg" alt="Foto profil Reno Wahyu" fill className="object-cover" priority />
          </div>
          <p className="hidden font-display text-lg leading-none text-[#E2E8F0] sm:block">Reno Wahyu</p>
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={`rounded-full px-4 py-2.5 text-sm transition-all duration-300 ${active ? "bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white shadow-[0_6px_20px_rgba(56,189,248,0.25)]" : "text-[#94A3B8] hover:bg-[#172554] hover:text-[#E0F2FE]"}`}>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#334155] text-[#E2E8F0] transition hover:border-[#38BDF8] hover:bg-[#0F172A] md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`overflow-hidden border-t border-[#334155] bg-[#020617] transition-all duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-auto max-w-6xl px-5 py-4 sm:px-10">
          <div className="grid gap-2">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 text-sm transition ${active ? "bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white" : "text-[#94A3B8] hover:bg-[#0F172A] hover:text-white"}`}>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
