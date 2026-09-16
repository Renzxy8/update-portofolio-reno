"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import ContactForm from "@/components/ContactForm";

/* =========================================================
   DATA PROJECT
========================================================= */

const projects = [
  {
    no: "01",
    title: "Monitoring Sungai — Sistem IoT",
    category: "IoT",
    tags: "Monitoring",
    tools: "ESP32, Arduino, LCD",
    year: "2026",
    image: "/p1.png",
    description:
      "Sistem monitoring sungai berbasis IoT yang dirancang untuk membantu memantau kondisi sungai secara lebih mudah. Sistem menggunakan ESP32 dan sensor untuk membaca kondisi lingkungan kemudian menampilkan informasi pada LCD.",
  },
  {
    no: "02",
    title: "Database Koperasi",
    category: "Database",
    tags: "SQL",
    tools: "MariaDB, XAMPP",
    year: "2026",
    image: "/p2.png",
    description:
      "Proyek database koperasi yang digunakan untuk mengelola data anggota, transaksi, dan informasi koperasi. Database dibuat menggunakan MariaDB dan dikelola melalui XAMPP agar data tersusun secara terstruktur.",
  },
  {
    no: "03",
    title: "Sistem Manajemen Proyek",
    category: "UI/UX",
    tags: "Wireframe",
    tools: "Figma",
    year: "2026",
    image: "/p8.png",
    description:
      "Desain UI/UX untuk sistem manajemen proyek. Proyek ini berfokus pada pembuatan wireframe dan rancangan antarmuka yang sederhana agar pengguna dapat mengelola proyek, tugas, dan aktivitas dengan lebih mudah.",
  },
  {
    no: "04",
    title: "TimePilot — Aplikasi Aktivitas",
    category: "UI/UX",
    tags: "Mobile App",
    tools: "Figma",
    year: "2026",
    image: "/p4.png",
    description:
      "TimePilot adalah konsep aplikasi mobile untuk membantu pengguna mengatur aktivitas dan waktu. Desain dibuat dengan tampilan yang sederhana, modern, dan mudah digunakan untuk membantu pengguna mengelola kegiatan sehari-hari.",
  },
  {
    no: "05",
    title: "Kalkulator Java",
    category: "Desktop App",
    tags: "Java",
    tools: "Java, NetBeans",
    year: "2026",
    image: "/p5.png",
    description:
      "Aplikasi kalkulator desktop yang dibuat menggunakan bahasa pemrograman Java dan NetBeans. Aplikasi ini memiliki fungsi perhitungan dasar dan dibuat sebagai latihan penerapan logika pemrograman serta pembuatan antarmuka desktop.",
  },
];

const filters = [
  "Semua",
  "UI/UX",
  "IoT",
  "Database",
  "Desktop App",
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  [
    "01",
    "Memahami",
    "Memahami kebutuhan, tujuan, fitur, dan teknologi yang akan digunakan.",
  ],
  [
    "02",
    "Merencanakan",
    "Menyusun ide, alur, dan gambaran awal agar proses lebih terarah.",
  ],
  [
    "03",
    "Mengembangkan",
    "Membuat desain dan membangun proyek dengan teknologi yang dipelajari.",
  ],
  [
    "04",
    "Menguji",
    "Mencari kesalahan, mencoba fitur, lalu melakukan perbaikan.",
  ],
  [
    "05",
    "Mengevaluasi",
    "Melihat hasil akhir dan mencatat hal yang bisa dikembangkan lagi.",
  ],
];

/* =========================================================
   EXPERIENCE
========================================================= */

const experience = [
  [
    "Proyek Pembelajaran RPL",
    "SMKN 1 Pasuruan",
    "2025 — Sekarang",
  ],
  [
    "Proyek Pribadi UBIG",
    "SMKN 1 Pasuruan",
    "2025 — 2026",
  ],
  [
    "Desain UI/UX",
    "SMKN 1 Pasuruan",
    "2025 — 2026",
  ],
];

/* =========================================================
   SKILLS
========================================================= */

const skillGroups = [
  [
    "01",
    "Pemrograman",
    "Teknologi untuk membangun website dan aplikasi.",
    [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Python dasar",
      "TailwindCSS",
    ],
  ],

  [
    "02",
    "UI/UX & Desain Grafis",
    "Menciptakan tampilan sederhana dan mudah digunakan.",
    [
      "Antarmuka website",
      "Wireframing",
      "Prototype",
      "Desain menggunakan Figma",
      "Tampilan responsif",
    ],
  ],

  [
    "03",
    "Perangkat",
    "Tools yang membantu proses desain dan pengembangan.",
    [
      "Figma",
      "Visual Studio Code",
      "NetBeans",
      "XAMPP",
      "GitHub",
    ],
  ],

  [
    "04",
    "Soft Skill",
    "Kemampuan untuk bekerja dan menyelesaikan masalah.",
    [
      "Kreatif & mau belajar",
      "Pemecahan masalah",
      "Bekerja dalam tim",
      "Manajemen waktu",
      "Beradaptasi",
    ],
  ],
] as const;

/* =========================================================
   SOCIAL MEDIA
========================================================= */

const socials = [
  [
    "Instagram",
    "https://www.instagram.com/renowahyu_f/",
    "@renowahyu_f",
  ],

  [
    "TikTok",
    "https://www.tiktok.com/@zyvoria.airen",
    "@zyvoria.airen",
  ],

  [
    "YouTube",
    "https://www.youtube.com/@whandrt",
    "@whandrt",
  ],

  [
    "WhatsApp",
    "https://wa.me/6283182312150?text=Halo%20saya%20ingin%20bertanya",
    "+62 831-8231-2150",
  ],

  [
    "Telepon",
    "tel:+62831807480",
    "+62 831-807-480",
  ],
];

/* =========================================================
   DECORATION
========================================================= */

function Corner({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`pointer-events-none absolute h-3 w-3 border-cyan-300/60 ${className}`}
    />
  );
}

function Arrow() {
  return (
    <span aria-hidden="true">
      →
    </span>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Semua");

  // PROJECT YANG SEDANG DIPILIH
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  /* =======================================================
     FILTER PROJECT
  ======================================================= */

  const filteredProjects = useMemo(() => {
    const keyword = query.toLowerCase().trim();

    return projects.filter((project) => {
      const matchFilter =
        filter === "Semua" ||
        project.category === filter;

      const text = `
        ${project.title}
        ${project.category}
        ${project.tags}
        ${project.tools}
        ${project.year}
      `.toLowerCase();

      return (
        matchFilter &&
        (!keyword || text.includes(keyword))
      );
    });
  }, [query, filter]);

  return (
    <div className="cyber-page min-h-screen overflow-hidden">

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <div
          className="
            absolute
            -left-40
            top-20
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-500/10
            blur-[130px]
            aurora-1
          "
        />

        <div
          className="
            absolute
            -right-40
            top-[30%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-violet-600/10
            blur-[140px]
            aurora-2
          "
        />

        <div
          className="
            absolute
            bottom-[8%]
            left-[38%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/10
            blur-[130px]
            aurora-3
          "
        />

        <div
          className="
            scan-line
            absolute
            left-0
            top-0
            h-px
            w-full
            bg-cyan-300
          "
        />

      </div>

      {/* ===================================================
          MAIN
      =================================================== */}

      <main className="relative z-10">

        {/* =================================================
            HERO
        ================================================= */}

        <section
          id="beranda"
          className="
            relative
            isolate
            scroll-mt-24
            border-b
            border-cyan-400/10
          "
        >

          <div
            className="
              mx-auto
              grid
              max-w-6xl
              grid-cols-1
              items-center
              gap-14
              px-6
              py-24
              sm:px-10
              sm:py-32
              lg:grid-cols-12
              lg:py-36
            "
          >

            {/* TEXT */}

            <div className="lg:col-span-7">

              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-3
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[.28em]
                  text-cyan-300
                "
              >

                <span
                  className="
                    h-px
                    w-10
                    bg-gradient-to-r
                    from-cyan-300
                    to-violet-400
                  "
                />

                UI/UX · CODE · DIGITAL

              </div>

              <h1
                className="
                  neon-text
                  max-w-3xl
                  font-display
                  text-5xl
                  font-semibold
                  leading-[.94]
                  tracking-tight
                  text-white
                  sm:text-7xl
                  lg:text-8xl
                "
              >
                Halo, saya{" "}

                <span
                  className="
                    bg-gradient-to-r
                    from-cyan-300
                    via-blue-400
                    to-violet-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  Reno.
                </span>

              </h1>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  leading-8
                  text-slate-300
                  sm:text-lg
                "
              >
                Pelajar SMK yang tertarik pada desain,
                teknologi, dan pengembangan produk digital.
                Saya senang mengubah ide menjadi karya yang
                sederhana, jelas, dan mudah digunakan.
              </p>

              {/* BUTTON */}

              <div className="mt-9 flex flex-wrap gap-3">

                <a
                  href="#karya"
                  className="
                    group
                    rounded-xl
                    border
                    border-cyan-300/60
                    bg-cyan-400/10
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-cyan-200
                    shadow-[0_0_30px_rgba(34,211,238,.12)]
                    backdrop-blur
                    transition
                    hover:-translate-y-1
                    hover:bg-cyan-300/15
                    hover:shadow-[0_0_35px_rgba(34,211,238,.22)]
                  "
                >
                  Lihat karya{" "}
                  <Arrow />
                </a>

                <a
                  href="#kontak"
                  className="
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-950/50
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-slate-200
                    backdrop-blur
                    transition
                    hover:-translate-y-1
                    hover:border-violet-400/60
                    hover:text-violet-200
                  "
                >
                  Hubungi saya
                </a>

              </div>

              {/* TECHNOLOGY */}

              <div
                className="
                  mt-12
                  flex
                  flex-wrap
                  gap-2
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >

                {[
                  "Next.js",
                  "React",
                  "Figma",
                  "IoT",
                  "Database",
                ].map((item) => (

                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-slate-800
                      bg-slate-950/50
                      px-3
                      py-1.5
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

            {/* PROFILE IMAGE */}

            <div className="relative lg:col-span-5">

              <div
                className="
                  pulse-glow
                  absolute
                  -inset-6
                  rounded-[40px]
                  bg-gradient-to-br
                  from-cyan-400/10
                  via-transparent
                  to-violet-500/15
                  blur-2xl
                "
              />

              <div
                className="
                  cyber-glass
                  neon-border
                  relative
                  mx-auto
                  aspect-[4/5]
                  max-w-[390px]
                  overflow-hidden
                  rounded-[30px]
                  p-2
                "
              >

                <Corner className="left-2 top-2 border-l border-t" />
                <Corner className="right-2 top-2 border-r border-t" />
                <Corner className="bottom-2 left-2 border-b border-l" />
                <Corner className="bottom-2 right-2 border-b border-r" />

                <div
                  className="
                    relative
                    h-full
                    overflow-hidden
                    rounded-[23px]
                    border
                    border-cyan-300/10
                    bg-slate-950
                  "
                >

                  <Image
                    src="/cogan.jpeg"
                    alt="Foto profil Reno Wahyu"
                    fill
                    priority
                    className="
                      object-cover
                      transition
                      duration-700
                      hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      bg-gradient-to-t
                      from-[#020617]
                      via-[#020617]/70
                      to-transparent
                      p-6
                      pt-28
                    "
                  >

                    <p
                      className="
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-[.25em]
                        text-cyan-300
                      "
                    >
                      Profile_01
                    </p>

                    <p
                      className="
                        mt-1
                        font-display
                        text-xl
                        font-semibold
                        text-white
                      "
                    >
                      Reno Wahyu
                    </p>

                  </div>

                </div>

              </div>

              {/* FOCUS */}

              <div
                className="
                  absolute
                  -right-3
                  top-10
                  hidden
                  rounded-xl
                  border
                  border-violet-400/25
                  bg-slate-950/80
                  px-4
                  py-3
                  shadow-[0_0_25px_rgba(139,92,246,.12)]
                  backdrop-blur-xl
                  sm:block
                "
              >

                <p
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-wider
                    text-violet-300
                  "
                >
                  Focus
                </p>

                <p className="mt-1 text-xs text-slate-200">
                  Digital Experience
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            TENTANG
        ================================================= */}

        <section
          id="tentang"
          className="
            scroll-mt-24
            border-b
            border-cyan-400/10
          "
        >

          <div
            className="
              mx-auto
              max-w-6xl
              px-6
              py-24
              sm:px-10
              sm:py-28
            "
          >

            <div className="grid gap-12 lg:grid-cols-12">

              <div className="lg:col-span-4">

                <p
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[.28em]
                    text-cyan-300
                  "
                >
                  01 / Tentang saya
                </p>

                <h2
                  className="
                    mt-5
                    font-display
                    text-4xl
                    font-semibold
                    text-white
                    sm:text-5xl
                  "
                >
                  Menciptakan. Belajar. Berkembang.
                </h2>

              </div>

              <div className="lg:col-span-8">

                <p
                  className="
                    max-w-4xl
                    font-display
                    text-2xl
                    leading-relaxed
                    text-slate-200
                    sm:text-4xl
                  "
                >
                  Halo, saya Reno Wahyu Saputra, berusia 16 tahun dan merupakan siswa kelas 11 jurusan Rekayasa Perangkat Lunak (RPL) di SMKN 1 Pasuruan. Saya berasal dari Kota Pasuruan dan memiliki minat pada teknologi, desain, serta pengembangan website.
                </p>

              </div>

            </div>

          </div>

          {/* WORKFLOW */}

          <div
            className="
              border-t
              border-cyan-400/10
              bg-slate-950/30
            "
          >

            <div
              className="
                mx-auto
                max-w-6xl
                px-6
                py-20
                sm:px-10
                sm:py-24
              "
            >

              <div
                className="
                  flex
                  items-end
                  justify-between
                  gap-4
                "
              >

                <div>

                  <p
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[.25em]
                      text-violet-300
                    "
                  >
                    Workflow
                  </p>

                  <h2
                    className="
                      mt-3
                      font-display
                      text-3xl
                      font-semibold
                      text-white
                    "
                  >
                    Cara saya bekerja
                  </h2>

                </div>

                <span
                  className="
                    hidden
                    font-mono
                    text-[10px]
                    text-slate-600
                    sm:block
                  "
                >
                  SYSTEM / PROCESS
                </span>

              </div>

              <div className="mt-10 grid gap-3 md:grid-cols-5">

                {process.map(([step, title, desc]) => (

                  <div
                    key={step}
                    className="
                      cyber-card
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      p-5
                      transition
                      duration-500
                      hover:-translate-y-1
                    "
                  >

                    <div
                      className="
                        mb-8
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span
                        className="
                          font-mono
                          text-xs
                          text-cyan-300
                        "
                      >
                        {step}
                      </span>

                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-cyan-300
                          shadow-[0_0_12px_#22d3ee]
                          transition
                          group-hover:bg-violet-400
                          group-hover:shadow-[0_0_12px_#a855f7]
                        "
                      />

                    </div>

                    <h3
                      className="
                        font-display
                        text-lg
                        font-semibold
                        text-white
                      "
                    >
                      {title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-6
                        text-slate-400
                      "
                    >
                      {desc}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* EXPERIENCE */}

          <div className="border-t border-cyan-400/10">

            <div
              className="
                mx-auto
                max-w-6xl
                px-6
                py-20
                sm:px-10
                sm:py-24
              "
            >

              <div
                className="
                  flex
                  items-end
                  justify-between
                  gap-4
                "
              >

                <div>

                  <p
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[.25em]
                      text-cyan-300
                    "
                  >
                    Experience
                  </p>

                  <h2
                    className="
                      mt-3
                      font-display
                      text-3xl
                      font-semibold
                      text-white
                    "
                  >
                    Pengalaman
                  </h2>

                </div>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-slate-600
                  "
                >
                  2025—2026
                </span>

              </div>

              <div
                className="
                  mt-8
                  divide-y
                  divide-slate-800/80
                  border-y
                  border-slate-800/80
                "
              >

                {experience.map(
                  ([role, place, period], i) => (

                    <div
                      key={role}
                      className="
                        group
                        flex
                        flex-col
                        gap-3
                        px-3
                        py-6
                        transition
                        hover:bg-cyan-400/[.025]
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        sm:px-5
                      "
                    >

                      <div
                        className="
                          flex
                          items-start
                          gap-4
                        "
                      >

                        <span
                          className="
                            font-mono
                            text-[10px]
                            text-violet-400
                          "
                        >
                          0{i + 1}
                        </span>

                        <div>

                          <h3
                            className="
                              font-display
                              text-xl
                              font-medium
                              text-slate-100
                              group-hover:text-cyan-200
                            "
                          >
                            {role}
                          </h3>

                          <p
                            className="
                              mt-1
                              text-xs
                              text-slate-500
                            "
                          >
                            {place}
                          </p>

                        </div>

                      </div>

                      <span
                        className="
                          font-mono
                          text-[10px]
                          text-slate-500
                          sm:text-right
                        "
                      >
                        {period}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            KARYA
        ================================================= */}

        <section
          id="karya"
          className="
            scroll-mt-24
            border-b
            border-cyan-400/10
          "
        >

          <div
            className="
              mx-auto
              max-w-6xl
              px-6
              py-24
              sm:px-10
              sm:py-28
            "
          >

            <div
              className="
                flex
                flex-col
                gap-5
                lg:flex-row
                lg:items-end
                lg:justify-between
              "
            >

              <div>

                <p
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[.28em]
                    text-cyan-300
                  "
                >
                  02 / Portfolio
                </p>

                <h2
                  className="
                    mt-4
                    font-display
                    text-5xl
                    font-semibold
                    text-white
                    sm:text-6xl
                  "
                >
                  Karya
                  <span className="text-cyan-300">
                    .
                  </span>
                </h2>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-slate-400
                  "
                >
                  Kumpulan proyek dari sistem IoT dan database
                  sampai desain UI/UX dan aplikasi desktop.
                </p>

              </div>

              <p
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-slate-600
                "
              >
                {filteredProjects.length} / {projects.length} projects
              </p>

            </div>

            {/* SEARCH */}

            <div
              className="
                cyber-glass
                mt-10
                rounded-2xl
                p-3
                sm:p-4
              "
            >

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  lg:flex-row
                  lg:items-center
                "
              >

                <label className="relative flex-1">

                  <span className="sr-only">
                    Cari karya
                  </span>

                  <span
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      font-mono
                      text-xs
                      text-cyan-300
                    "
                  >
                    /&gt;
                  </span>

                  <input
                    value={query}
                    onChange={(e) =>
                      setQuery(e.target.value)
                    }
                    placeholder="cari karya, teknologi, kategori..."
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-950/70
                      py-3
                      pl-11
                      pr-4
                      font-mono
                      text-xs
                      text-slate-100
                      outline-none
                      transition
                      placeholder:text-slate-600
                      focus:border-cyan-400/60
                      focus:ring-2
                      focus:ring-cyan-400/10
                    "
                  />

                </label>

                <div
                  className="
                    flex
                    gap-2
                    overflow-x-auto
                    pb-1
                  "
                >

                  {filters.map((item) => (

                    <button
                      key={item}
                      type="button"
                      onClick={() => setFilter(item)}
                      className={`
                        whitespace-nowrap
                        rounded-lg
                        px-3.5
                        py-2
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-wider
                        transition

                        ${filter === item
                          ? `
                              border
                              border-cyan-300/50
                              bg-cyan-400/10
                              text-cyan-200
                              shadow-[0_0_20px_rgba(34,211,238,.08)]
                            `
                          : `
                              border
                              border-transparent
                              text-slate-500
                              hover:border-slate-700
                              hover:text-slate-200
                            `
                        }
                      `}
                    >
                      {item}
                    </button>

                  ))}

                </div>

              </div>

            </div>

            {/* PROJECT CARDS */}

            <div
              className="
                mt-8
                grid
                gap-4
                md:grid-cols-2
                lg:grid-cols-3
              "
            >

              {filteredProjects.map((project) => (

                <article
                  key={project.no}
                  className="
                    cyber-card
                    group
                    overflow-hidden
                    rounded-2xl
                    transition
                    duration-500
                    hover:-translate-y-1
                  "
                >

                  <div
                    className="
                      relative
                      aspect-[16/9]
                      overflow-hidden
                      border-b
                      border-slate-800
                      bg-slate-950
                    "
                  >

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                        object-cover
                        opacity-90
                        transition
                        duration-700
                        group-hover:scale-105
                        group-hover:opacity-100
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-950
                        via-transparent
                        to-transparent
                        opacity-70
                      "
                    />

                    <span
                      className="
                        absolute
                        left-3
                        top-3
                        rounded-md
                        border
                        border-cyan-300/30
                        bg-slate-950/70
                        px-2
                        py-1
                        font-mono
                        text-[9px]
                        text-cyan-300
                        backdrop-blur
                      "
                    >
                      PROJECT_{project.no}
                    </span>

                  </div>

                  <div className="p-5">

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-3
                      "
                    >

                      <h3
                        className="
                          font-display
                          text-xl
                          font-semibold
                          text-white
                          transition
                          group-hover:text-cyan-200
                        "
                      >
                        {project.title}
                      </h3>

                      <span
                        className="
                          font-mono
                          text-[10px]
                          text-slate-600
                        "
                      >
                        {project.year}
                      </span>

                    </div>

                    <div
                      className="
                        mt-4
                        flex
                        flex-wrap
                        gap-1.5
                      "
                    >

                      {[project.category, project.tags].map(
                        (tag) => (

                          <span
                            key={tag}
                            className="
                              rounded-md
                              border
                              border-violet-400/15
                              bg-violet-500/[.05]
                              px-2
                              py-1
                              font-mono
                              text-[9px]
                              text-violet-300
                            "
                          >
                            {tag}
                          </span>

                        )
                      )}

                    </div>

                    <p
                      className="
                        mt-4
                        text-xs
                        text-slate-500
                      "
                    >
                      {project.tools}
                    </p>

                    {/* LIHAT DETAIL */}

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProject(project)
                      }
                      className="
                        mt-5
                        w-full
                        rounded-xl
                        border
                        border-cyan-400/30
                        bg-cyan-400/[.05]
                        px-4
                        py-3
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-cyan-300
                        transition
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-cyan-300/60
                        hover:bg-cyan-400/10
                        hover:text-white
                      "
                    >
                      Lihat Detail →
                    </button>

                  </div>

                </article>

              ))}

            </div>

            {/* EMPTY */}

            {filteredProjects.length === 0 && (

              <div
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-dashed
                  border-slate-800
                  px-6
                  py-14
                  text-center
                  font-mono
                  text-xs
                  text-slate-500
                "
              >
                // karya tidak ditemukan
              </div>

            )}

          </div>

        </section>

        {/* =================================================
            KEAHLIAN
        ================================================= */}

        <section
          id="keahlian"
          className="
            scroll-mt-24
            border-b
            border-cyan-400/10
          "
        >

          <div
            className="
              mx-auto
              max-w-6xl
              px-6
              py-24
              sm:px-10
              sm:py-28
            "
          >

            <p
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[.28em]
                text-violet-300
              "
            >
              03 / Skills
            </p>

            <div
              className="
                mt-4
                flex
                flex-col
                justify-between
                gap-5
                sm:flex-row
                sm:items-end
              "
            >

              <h2
                className="
                  font-display
                  text-5xl
                  font-semibold
                  text-white
                  sm:text-6xl
                "
              >
                Keahlian
                <span className="text-violet-400">
                  .
                </span>
              </h2>

              <p
                className="
                  max-w-sm
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                Kombinasi kemampuan desain, pemrograman,
                perangkat, dan soft skill.
              </p>

            </div>

            <div
              className="
                mt-12
                grid
                gap-4
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >

              {skillGroups.map(
                ([number, title, desc, items]) => (

                  <div
                    key={title}
                    className="
                      cyber-card
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      p-6
                      transition
                      duration-500
                      hover:-translate-y-1
                    "
                  >

                    <div
                      className="
                        absolute
                        -right-12
                        -top-12
                        h-32
                        w-32
                        rounded-full
                        bg-cyan-400/5
                        blur-2xl
                        transition
                        duration-500
                        group-hover:bg-violet-500/10
                      "
                    />

                    <div className="relative">

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <span
                          className="
                            font-mono
                            text-xs
                            text-cyan-300
                          "
                        >
                          {number}
                        </span>

                        <span
                          className="
                            rounded-md
                            border
                            border-cyan-400/15
                            px-2
                            py-1
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-wider
                            text-slate-500
                          "
                        >
                          Skill
                        </span>

                      </div>

                      <h3
                        className="
                          mt-8
                          font-display
                          text-xl
                          font-semibold
                          text-white
                        "
                      >
                        {title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-xs
                          leading-6
                          text-slate-500
                        "
                      >
                        {desc}
                      </p>

                      <ul className="mt-6">

                        {items.map((item) => (

                          <li
                            key={item}
                            className="
                              flex
                              items-center
                              gap-2
                              border-t
                              border-slate-800/70
                              py-2.5
                              text-xs
                              text-slate-400
                              transition
                              group-hover:text-slate-300
                            "
                          >

                            <span
                              className="
                                h-1
                                w-1
                                rounded-full
                                bg-cyan-300
                                shadow-[0_0_8px_#22d3ee]
                              "
                            />

                            {item}

                          </li>

                        ))}

                      </ul>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* =================================================
            KONTAK
        ================================================= */}

        <section
          id="kontak"
          className="scroll-mt-24"
        >

          <div
            className="
              mx-auto
              max-w-6xl
              px-6
              py-24
              sm:px-10
              sm:py-28
            "
          >

            <div
              className="
                cyber-glass
                neon-border
                relative
                overflow-hidden
                rounded-[28px]
                p-7
                sm:p-12
              "
            >

              {/* GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-20
                  -top-20
                  h-64
                  w-64
                  rounded-full
                  bg-cyan-500/10
                  blur-[100px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -right-20
                  h-64
                  w-64
                  rounded-full
                  bg-violet-500/10
                  blur-[100px]
                "
              />

              <div
                className="
                  relative
                  grid
                  gap-12
                  lg:grid-cols-12
                "
              >

                {/* CONTACT INFORMATION */}

                <div className="lg:col-span-7">

                  <p
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[.28em]
                      text-cyan-300
                    "
                  >
                    04 / Kontak
                  </p>

                  <h2
                    className="
                      mt-5
                      max-w-3xl
                      font-display
                      text-4xl
                      font-semibold
                      leading-tight
                      text-white
                      sm:text-6xl
                    "
                  >
                    {" "}

                    <span className="text-cyan-300">
                      Sosial Media.
                    </span>

                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-xl
                      text-sm
                      leading-7
                      text-slate-400
                    "
                  >
                    jika anda tertarik, anda dapat mengunjungi sosial media yang ada di bawah ini.
                  </p>

                  {/* EMAIL */}

                  <a
                    href="mailto:renow381@gmail.com"
                    className="
                      mt-8
                      inline-block
                      border-b
                      border-cyan-400/40
                      pb-1
                      font-mono
                      text-lg
                      text-cyan-200
                      transition
                      hover:border-cyan-300
                      hover:text-white
                      sm:text-xl
                    "
                  >
                    renow381@gmail.com
                  </a>

                  {/* SOCIAL MEDIA */}

                  <div className="mt-8 grid gap-2">

                    {socials.map(
                      ([label, href, value]) => (

                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            group
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            border
                            border-slate-800
                            bg-slate-950/40
                            px-4
                            py-3
                            transition
                            hover:border-cyan-400/35
                            hover:bg-cyan-400/[.03]
                          "
                        >

                          <span
                            className="
                              text-xs
                              text-slate-500
                            "
                          >
                            {label}
                          </span>

                          <span
                            className="
                              font-mono
                              text-[10px]
                              text-slate-300
                              transition
                              group-hover:text-cyan-200
                            "
                          >
                            {value}
                          </span>

                        </a>

                      )
                    )}

                  </div>

                </div>

                {/* FORM KONTAK */}

                <div className="lg:col-span-5">

                  <ContactForm />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            PROJECT DETAIL MODAL
        ================================================= */}

        {selectedProject && (

          <div
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-slate-950/85
              p-4
              backdrop-blur-md
            "
            onClick={() =>
              setSelectedProject(null)
            }
          >

            <div
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-4xl
                overflow-y-auto
                rounded-[28px]
                border
                border-cyan-400/20
                bg-[#0b1018]
                p-3
                shadow-[0_0_80px_rgba(34,211,238,.12)]
                sm:p-5
              "
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* TOMBOL X */}

              <button
                type="button"
                onClick={() =>
                  setSelectedProject(null)
                }
                className="
                  absolute
                  right-5
                  top-5
                  z-10
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/60
                  text-xl
                  text-white/60
                  backdrop-blur-md
                  transition
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:text-white
                "
                aria-label="Tutup"
              >
                ×
              </button>

              {/* GAMBAR PROJECT */}

              <div
                className="
                  relative
                  aspect-video
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[.08]
                  bg-black/30
                "
              >

                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority
                />

              </div>

              {/* DETAIL */}

              <div className="px-2 pb-2 pt-7 sm:px-4 sm:pt-8">

                <div
                  className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                  "
                >

                  <div>

                    <p
                      className="
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-[.3em]
                        text-cyan-300
                      "
                    >
                      Project Detail
                    </p>

                    <h2
                      className="
                        mt-3
                        text-3xl
                        font-bold
                        tracking-tight
                        text-white
                        sm:text-4xl
                      "
                    >
                      {selectedProject.title}
                    </h2>

                  </div>

                  <span
                    className="
                      w-fit
                      rounded-full
                      border
                      border-white/10
                      bg-white/[.03]
                      px-3
                      py-1.5
                      font-mono
                      text-[10px]
                      text-white/40
                    "
                  >
                    {selectedProject.year}
                  </span>

                </div>

                {/* CATEGORY & TAG */}

                <div className="mt-6 flex flex-wrap gap-2">

                  <span
                    className="
                      rounded-full
                      border
                      border-cyan-400/20
                      bg-cyan-400/[.05]
                      px-3
                      py-1.5
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-wider
                      text-cyan-300
                    "
                  >
                    {selectedProject.category}
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[.03]
                      px-3
                      py-1.5
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-wider
                      text-white/40
                    "
                  >
                    #{selectedProject.tags}
                  </span>

                </div>

                {/* PENJELASAN */}

                <div className="mt-8">

                  <h3
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[.2em]
                      text-white/35
                    "
                  >
                    Tentang Project
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-8
                      text-white/60
                      sm:text-base
                    "
                  >
                    {selectedProject.description}
                  </p>

                </div>

                {/* TOOLS */}

                <div className="mt-8">

                  <h3
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[.2em]
                      text-white/35
                    "
                  >
                    Tools & Technology
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {selectedProject.tools
                      .split(",")
                      .map((tool) => (

                        <span
                          key={tool}
                          className="
                            rounded-lg
                            border
                            border-white/10
                            bg-white/[.03]
                            px-4
                            py-2
                            text-sm
                            text-white/60
                          "
                        >
                          {tool.trim()}
                        </span>

                      ))}

                  </div>

                </div>

                {/* TOMBOL TUTUP */}

                <button
                  type="button"
                  onClick={() =>
                    setSelectedProject(null)
                  }
                  className="
                    mt-9
                    w-full
                    rounded-xl
                    bg-cyan-400
                    px-5
                    py-3.5
                    font-mono
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-widest
                    text-slate-950
                    transition
                    hover:bg-cyan-300
                  "
                >
                  Tutup Detail
                </button>

              </div>

              {/* CORNER DECORATION */}

              <Corner className="left-3 top-3 border-l border-t" />
              <Corner className="right-3 top-3 border-r border-t" />
              <Corner className="bottom-3 left-3 border-b border-l" />
              <Corner className="bottom-3 right-3 border-b border-r" />

            </div>

          </div>

        )}

      </main>

    </div>
  );
}
