"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import Project from "@/components/Project";

function Corner({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br";
}) {
  const positionClass = {
    tl: "left-0 top-0 border-l border-t",
    tr: "right-0 top-0 border-r border-t",
    bl: "bottom-0 left-0 border-b border-l",
    br: "bottom-0 right-0 border-b border-r",
  }[position];

  return (
    <span
      className={`absolute h-3 w-3 border-cyan-400/50 ${positionClass}`}
    />
  );
}

function Arrow() {
  return (
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  );
}

/* =========================
   WORKFLOW
========================= */

const workflow = [
  {
    no: "01",
    title: "Memahami",
    description:
      "Memahami kebutuhan, tujuan, dan masalah yang ingin diselesaikan.",
  },
  {
    no: "02",
    title: "Merencanakan",
    description:
      "Menyusun konsep, struktur, dan alur sebelum mulai mengembangkan project.",
  },
  {
    no: "03",
    title: "Mengembangkan",
    description:
      "Mengubah konsep menjadi desain atau aplikasi yang dapat digunakan.",
  },
  {
    no: "04",
    title: "Menguji",
    description:
      "Mengecek tampilan, fungsi, dan memastikan semuanya berjalan dengan baik.",
  },
  {
    no: "05",
    title: "Mengevaluasi",
    description:
      "Melakukan evaluasi dan perbaikan agar hasil project menjadi lebih baik.",
  },
];

/* =========================
   EXPERIENCE
========================= */

const experience = [
  {
    title: "Proyek Pembelajaran RPL",
    place: "SMKN 1 Pasuruan",
    year: "2025 — Sekarang",
    description:
      "Mengerjakan berbagai project pembelajaran yang berkaitan dengan pemrograman, database, UI/UX, dan pengembangan aplikasi.",
  },
  {
    title: "Proyek Pribadi UBIG",
    place: "Personal Project",
    year: "2025 — 2026",
    description:
      "Mengembangkan ide dan project pribadi untuk meningkatkan kemampuan dalam desain, pemrograman, dan pengembangan website.",
  },
  {
    title: "Desain UI/UX",
    place: "Personal Project",
    year: "2025 — 2026",
    description:
      "Membuat berbagai rancangan antarmuka menggunakan Figma dengan fokus pada tampilan yang sederhana, modern, dan mudah digunakan.",
  },
];

/* =========================
   SKILLS
========================= */

const skills = [
  {
    title: "Pemrograman",
    items: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Python Dasar",
      "TailwindCSS",
    ],
  },
  {
    title: "UI/UX & Desain Grafis",
    items: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Responsive Design",
    ],
  },
  {
    title: "Perangkat",
    items: [
      "VS Code",
      "NetBeans",
      "XAMPP",
      "GitHub",
    ],
  },
  {
    title: "Soft Skill",
    items: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Creative Thinking",
    ],
  },
];

/* =========================
   SOCIAL MEDIA
========================= */

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/renowahyu_f/",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@zyvoria.airen",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@whandrt",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6283182312150?text=Halo%20saya%20ingin%20bertanya",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    ["Beranda", "#beranda"],
    ["Tentang", "#tentang"],
    ["Karya", "#karya"],
    ["Keahlian", "#keahlian"],
    ["Kontak", "#kontak"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[.06] bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">

          <Link
            href="#beranda"
            className="font-display text-lg font-semibold tracking-tight"
          >
            Reno Wahyu Saputra<span className="text-cyan-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-[10px] uppercase tracking-widest text-white/50 transition hover:text-cyan-300"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[.03] md:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/[.06] bg-slate-950/95 px-6 py-5 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-4">
              {navigation.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-xs uppercase tracking-widest text-white/60 transition hover:text-cyan-300"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* =========================
          HERO
      ========================= */}

      <section
        id="beranda"
        className="relative flex min-h-screen items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[.05] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <span className="font-mono text-[9px] uppercase tracking-[.25em] text-cyan-300">
                UI/UX · CODE · DIGITAL
              </span>
            </div>

            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[.95] tracking-tight sm:text-7xl lg:text-8xl">
              Mengubah ide
              <br />
              menjadi{" "}
              <span className="neon-text text-cyan-300">
                karya.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Halo, saya{" "}
              <span className="text-white">
                Reno Wahyu Saputra
              </span>
              , siswa kelas 11 jurusan Rekayasa Perangkat Lunak
              di SMKN 1 Pasuruan. Saya memiliki minat pada
              teknologi, desain, dan pengembangan website.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="#karya"
                className="group inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-950 transition hover:bg-cyan-300"
              >
                Lihat Karya
                <Arrow />
              </Link>

              <Link
                href="#kontak"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/[.03] px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white/70 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                Hubungi Saya
              </Link>

            </div>
          </div>

          {/* Profile Image */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">

            <div className="relative aspect-square overflow-hidden rounded-[32px] border border-white/10 bg-white/[.03] p-3 shadow-2xl">

              <Corner position="tl" />
              <Corner position="tr" />
              <Corner position="bl" />
              <Corner position="br" />

              <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-slate-900">

                <Image
                  src="/renoo.jpeg"
                  alt="Foto profil Reno Wahyu"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">

                  <p className="font-mono text-[9px] uppercase tracking-[.3em] text-cyan-300">
                    Student Portfolio
                  </p>

                  <p className="mt-2 text-xl font-semibold">
                    Reno Wahyu
                  </p>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="tentang"
        className="border-t border-white/[.06] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">
                01 / About
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Tentang Saya
              </h2>

            </div>

            <div>

              <p className="text-lg leading-9 text-slate-300">
                Saya adalah pelajar SMK yang tertarik dengan dunia
                teknologi, desain UI/UX, dan pengembangan website.
                Saya senang mempelajari hal baru dan mengubah ide
                menjadi project yang dapat digunakan.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-500">
                Saat ini saya sedang mengembangkan kemampuan dalam
                pemrograman, desain antarmuka, database, dan berbagai
                teknologi web modern melalui tugas sekolah maupun
                project pribadi.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =========================
          WORKFLOW
      ========================= */}

      <section className="border-t border-white/[.06] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">
              02 / Workflow
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Cara Saya Bekerja
            </h2>

          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.08] md:grid-cols-5">

            {workflow.map((item) => (

              <div
                key={item.no}
                className="relative bg-slate-950 p-6"
              >

                <span className="font-mono text-[10px] text-cyan-300">
                  {item.no}
                </span>

                <h3 className="mt-8 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* =========================
          EXPERIENCE
      ========================= */}

      <section className="border-t border-white/[.06] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">
              03 / Experience
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Pengalaman
            </h2>

          </div>

          <div className="space-y-4">

            {experience.map((item) => (

              <div
                key={`${item.title}-${item.year}`}
                className="relative rounded-2xl border border-white/[.08] bg-white/[.02] p-6 transition hover:border-cyan-400/20"
              >

                <div className="grid gap-5 lg:grid-cols-[220px_1fr_auto] lg:items-start">

                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-cyan-300">
                      {item.year}
                    </p>
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-white/40">
                      {item.place}
                    </p>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                  </div>

                  <span className="hidden font-mono text-2xl text-white/[.05] lg:block">
                    +
                  </span>

                </div>
              </div>

            ))}

          </div>
        </div>
      </section>

      {/* =========================
          PROJECT
          DATA DARI SUPABASE
      ========================= */}

      <Project />

      {/* =========================
          SKILLS
      ========================= */}

      <section
        id="keahlian"
        className="border-t border-white/[.06] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">
              05 / Skills
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Keahlian
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {skills.map((skill) => (

              <div
                key={skill.title}
                className="rounded-2xl border border-white/[.08] bg-white/[.02] p-6"
              >

                <h3 className="text-lg font-semibold">
                  {skill.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">

                  {skill.items.map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 font-mono text-[9px] text-white/50"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="kontak"
        className="border-t border-white/[.06] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">

          <div>

            <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">
              06 / Contact
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Mari Terhubung
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
              Jika ingin bertanya, berdiskusi, atau bekerja sama,
              silakan hubungi saya melalui form di samping.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {socials.map((social) => (

                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2 font-mono text-[9px] uppercase tracking-wider text-white/50 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  {social.name}
                </a>

              ))}

            </div>

          </div>

          <div className="rounded-[28px] border border-white/[.08] bg-white/[.02] p-5 sm:p-8">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="border-t border-white/[.06] px-6 py-8 sm:px-10 lg:px-16">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">
            © 2026 Reno Wahyu Saputra
          </p>

          <p className="font-mono text-[9px] uppercase tracking-widest text-white/20">
            Built with Next.js · TailwindCSS · Supabase
          </p>

        </div>

      </footer>

    </main>
  );
}
