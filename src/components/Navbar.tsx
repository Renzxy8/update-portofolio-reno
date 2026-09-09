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
        // Aktif ketika bagian atas section berada di area "pita" ini,
        // supaya konsisten dengan navbar sticky
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
      el.scrollIntoView({ behavior: "smooth", block: "start" });
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
        border-[#45455F]
        bg-[#323249]/95
        backdrop-blur-md
        shadow-[0_4px_20px_rgba(25,25,40,0.12)]
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
            flex
            items-center
            gap-3
            rounded-full
            px-2
            py-1.5
            transition-all
            duration-300
            hover:bg-[#45455F]
            hover:shadow-[0_6px_20px_rgba(15,15,30,0.25)]
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
              border-[#6A6A7E]
              bg-[#45455F]
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
            <p className="font-display text-lg leading-none text-[#EEF2EB]">
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
                        bg-[#45455F]
                        text-[#F4F6F1]
                        shadow-[0_6px_20px_rgba(15,15,30,0.28)]
                      `
                      : `
                        text-[#C5C9C1]
                        hover:bg-[#3E3E55]
                        hover:text-[#F4F6F1]
                        hover:shadow-[0_5px_16px_rgba(15,15,30,0.20)]
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
            border-[#51516B]
            text-[#EEF2EB]
            transition-all
            duration-300
            hover:bg-[#45455F]
            hover:shadow-[0_5px_16px_rgba(15,15,30,0.25)]
            sm:hidden
          "
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span
              className={`
                block
                h-[1.5px]
                w-5
                bg-[#EEF2EB]
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
                bg-[#EEF2EB]
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
          transition-all
          duration-300
          sm:hidden
          ${open ? "max-h-96 border-t border-[#45455F]" : "max-h-0"}
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
                        border-[#5B5B73]
                        bg-[#45455F]
                        px-4
                        text-[#F4F6F1]
                        shadow-[0_6px_18px_rgba(15,15,30,0.25)]
                      `
                      : `
                        border-[#45455F]
                        text-[#C5C9C1]
                        hover:bg-[#3E3E55]
                        hover:px-4
                        hover:text-[#F4F6F1]
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
