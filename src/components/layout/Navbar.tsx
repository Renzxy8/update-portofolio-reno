"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const navLinks = [
  { id: "beranda", label: "Home" },
  { id: "tentang", label: "About" },
  { id: "karya", label: "Projects" },
  { id: "keahlian", label: "Skills" },
  { id: "kontak", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState("beranda");
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);

  // =========================
  // ACTIVE SECTION
  // =========================
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = navLinks
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const updateActiveSection = () => {
      // Jika berada di bagian paling atas
      if (window.scrollY < 100) {
        setActiveSection("beranda");
        return;
      }

      const headerOffset = 180;

      let currentSection = "beranda";
      let closestDistance = Infinity;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        const distance = Math.abs(rect.top - headerOffset);

        if (
          rect.top <= headerOffset &&
          distance < closestDistance
        ) {
          closestDistance = distance;
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [pathname]);

  // =========================
  // MOBILE MENU
  // =========================
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =========================
  // CLOSE MOBILE MENU
  // =========================
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // =========================
  // ADMIN LOGIN
  // =========================
  const handleAdminLogin = async () => {
    try {
      setAdminLoading(true);
      closeMenu();

      const supabase = createSupabaseBrowserClient();

      await supabase.auth.signOut({
        scope: "local",
      });

      window.location.href = "/admin/login";
    } catch (error) {
      console.error("Failed to reset admin session:", error);

      window.location.href = "/admin/login";
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#020617]/80 backdrop-blur-xl">
      <div className="relative mx-auto flex h-17 max-w-6xl items-center justify-between px-4 sm:px-10 md:px-6">

        {/* =========================
            LOGO
        ========================= */}
        <a
          href="/#beranda"
          onClick={closeMenu}
          className="group flex min-w-0 items-center gap-3"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cyan-300/40 bg-cyan-400/10 font-display text-lg font-semibold text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,.08)]">
            R
          </span>

          <span className="truncate font-display text-base font-semibold text-slate-100">
            Reno Wahyu Saputra
            <span className="text-cyan-300">.</span>
          </span>
        </a>

        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={closeMenu}
              className={`rounded-lg px-3 py-2 font-mono text-[10px] uppercase tracking-wider transition ${
                activeSection === item.id
                  ? "bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,.07)]"
                  : "text-slate-500 hover:bg-white/3 hover:text-slate-200"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* =========================
            RIGHT SIDE
        ========================= */}
        <div className="flex shrink-0 items-center gap-2">

          {/* Admin */}
          <button
            type="button"
            onClick={handleAdminLogin}
            disabled={adminLoading}
            className="hidden rounded-lg border border-cyan-400/25 bg-cyan-400/5 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-50 sm:inline-flex"
          >
            {adminLoading ? "Loading..." : "Dashboard Admin"}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-400/5 text-cyan-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/10 md:hidden"
          >
            <span className="sr-only">Menu</span>

            <span
              className="flex w-5 flex-col gap-1.5"
              aria-hidden="true"
            >
              <span
                className={`h-px w-5 bg-current transition-transform duration-200 ${
                  menuOpen
                    ? "translate-y-1 rotate-45"
                    : ""
                }`}
              />

              <span
                className={`h-px w-5 bg-current transition-opacity duration-200 ${
                  menuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              <span
                className={`h-px w-5 bg-current transition-opacity duration-200 ${
                  menuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              <span
                className={`h-px w-5 bg-current transition-transform duration-200 ${
                  menuOpen
                    ? "-translate-y-1 -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* =========================
            MOBILE NAVIGATION
        ========================= */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-17 overflow-hidden border-b border-cyan-400/10 bg-[#020617]/95 shadow-[0_20px_40px_rgba(0,0,0,.35)] backdrop-blur-xl transition-[max-height,opacity,visibility] duration-200 md:hidden ${
            menuOpen
              ? "visible max-h-105 opacity-100"
              : "invisible max-h-0 opacity-0"
          }`}
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 p-3"
            aria-label="Mobile navigation"
          >
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 font-mono text-[11px] uppercase tracking-wider transition ${
                  activeSection === item.id
                    ? "bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,.07)]"
                    : "text-slate-400 hover:bg-white/3 hover:text-slate-200"
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Admin */}
            <button
              type="button"
              onClick={handleAdminLogin}
              disabled={adminLoading}
              className="rounded-lg border border-cyan-400/25 bg-cyan-400/5 px-4 py-3 text-center font-mono text-[10px] uppercase tracking-wider text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-50 sm:hidden"
            >
              {adminLoading ? "Loading..." : "Admin Login"}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}