"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#karya", label: "Karya" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  // Scroll-spy: highlight menu sesuai section yang sedang terlihat
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const id = href.slice(1);
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      history.replaceState(null, "", href);
      setActive(id);
    }

    setOpen(false);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-[#334155]
        bg-[#020617]/90
        backdrop-blur-xl
        shadow-[0_4px_25px_rgba(2,6,23,0.35)]
      "
    >
      <nav
        className="
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          px-6
          py-3
          sm:px-10
        "
      >
        {/* ================= PROFILE ================= */}
        <a
          href="#beranda"
          onClick={(e) => handleNavClick(e, "#beranda")}
          className="
            group
            flex
            items-center
            gap-3
            rounded-full
            px-2
            py-1.5
            transition-all
            duration-300
            hover:bg-[#0F172A]
            hover:shadow-[0_6px_20px_rgba(56,189,248,0.12)]
          "
        >
          {/* Foto Profil */}
          <div
            className="
              relative
              h-10
              w-10
              overflow-hidden
              rounded-full
              border
              border-[#38BDF8]
              bg-[#0F172A]
              shadow-[0_0_15px_rgba(56,189,248,0.15)]
              transition-all
              duration-300
              group-hover:border-[#818CF8]
              group-hover:shadow-[0_0_20px_rgba(129,140,248,0.3)]
            "
          >
            <Image
              src="/wahyu.jpeg"
              alt="Foto profil"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Nama */}
          <div className="hidden sm:block">
            <p
              className="
                font-display
                text-lg
                leading-none
                text-[#E2E8F0]
                transition-colors
                duration-300
                group-hover:text-[#38BDF8]
              "
            >
              Reno Wahyu
            </p>
          </div>
        </a>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`
                  rounded-full
                  px-4
                  py-2.5
                  text-sm
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-gradient-to-r
                        from-[#0EA5E9]
                        to-[#6366F1]
                        text-white
                        shadow-[0_6px_20px_rgba(56,189,248,0.25)]
                      `
                      : `
                        text-[#94A3B8]
                        hover:bg-[#172554]
                        hover:text-[#E0F2FE]
                        hover:shadow-[0_5px_16px_rgba(56,189,248,0.12)]
                      `
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[#334155]
            bg-[#0F172A]
            text-[#E2E8F0]
            transition-all
            duration-300
            hover:border-[#38BDF8]
            hover:bg-[#172554]
            hover:text-[#38BDF8]
            hover:shadow-[0_5px_16px_rgba(56,189,248,0.2)]
            sm:hidden
          "
          aria-label="Menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={`
                block
                h-[1.5px]
                w-5
                bg-current
                transition-all
                duration-300
                ${open ? "translate-y-[4px] rotate-45" : ""}
              `}
            />

            <span
              className={`
                block
                h-[1.5px]
                w-5
                bg-current
                transition-all
                duration-300
                ${open ? "-translate-y-[2px] -rotate-45" : ""}
              `}
            />
          </div>
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          overflow-hidden
          bg-[#020617]/95
          transition-all
          duration-300
          sm:hidden
          ${
            open
              ? "max-h-96 border-t border-[#334155]"
              : "max-h-0"
          }
        `}
      >
        <div className="px-6 py-4">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`
                  block
                  rounded-xl
                  border-b
                  py-4
                  text-sm
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        border-[#38BDF8]
                        bg-gradient-to-r
                        from-[#0F172A]
                        to-[#172554]
                        px-4
                        text-[#E0F2FE]
                        shadow-[0_6px_18px_rgba(56,189,248,0.15)]
                      `
                      : `
                        border-[#1E293B]
                        text-[#94A3B8]
                        hover:bg-[#0F172A]
                        hover:px-4
                        hover:text-[#38BDF8]
                      `
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
