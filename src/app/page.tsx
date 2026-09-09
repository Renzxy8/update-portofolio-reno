import Image from "next/image";

/* ================= DATA ================= */

const process = [
  {
    step: "01",
    title: "Memahami",
    desc: "Saya memahami kebutuhan dan tujuan proyek sebelum mulai mengerjakannya, termasuk menentukan fitur, dan teknologi yang akan digunakan.",
  },
  {
    step: "02",
    title: "Merencanakan",
    desc: "Saya menyusun ide, menentukan pengerjaan, dan membuat gambaran awal agar proses pengembangan lebih terarah.",
  },
  {
    step: "03",
    title: "Mengembangkan",
    desc: "Saya mulai membuat desain dan mengembangkan proyek menggunakan kemampuan pemrograman, desain, serta teknologi yang saya pelajari di sekolah.",
  },
  {
    step: "04",
    title: "Menguji",
    desc: "Saya mencoba proyek yang dibuat, mencari kesalahan atau kekurangan, kemudian melakukan perbaikan agar hasilnya dapat berjalan dengan baik.",
  },
  {
    step: "05",
    title: "Mengevaluasi",
    desc: "Saya mengevaluasi hasil akhir dan mencatat hal-hal yang bisa dikembangkan agar kemampuan dan kualitas proyek saya terus meningkat.",
  },
];

const experience = [
  {
    role: "Proyek Pembelajaran RPL",
    place: "SMKN 1 Pasuruan",
    period: "2025 — Sekarang",
  },
  {
    role: "Proyek Pribadi UBIG",
    place: "SMKN 1 Pasuruan",
    period: "2025 — 2026",
  },
  {
    role: "Desain UI/UX",
    place: "SMKN 1 Pasuruan",
    period: "2025 — 2026",
  },
];

const projects = [
  {
    no: "01",
    title: "Monitoring Sungai — Sistem IoT",
    category: "IoT · Monitoring",
    tools: "ESP32, Arduino, LCD",
    year: "2026",
    image: "/p1.png",
  },
  {
    no: "02",
    title: "Database Koperasi",
    category: "Database · SQL",
    tools: "MariaDB, XAMPP",
    year: "2026",
    image: "/p2.png",
  },
  {
    no: "03",
    title: "Sistem Manajemen Proyek",
    category: "Wireframe · UI/UX",
    tools: "Figma",
    year: "2026",
    image: "/p8.png",
  },
  {
    no: "04",
    title: "TimePilot — Aplikasi Aktivitas",
    category: "UI/UX · Aplikasi Mobile",
    tools: "Figma",
    year: "2026",
    image: "/p4.png",
  },
  {
    no: "05",
    title: "Kalkulator Java",
    category: "Desktop App · Java",
    tools: "Java, NetBeans",
    year: "2026",
    image: "/p5.png",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Pemrograman",
    desc: "Teknologi yang saya gunakan untuk membangun website dan aplikasi.",
    items: ["HTML & CSS", "JavaScript", "React", "Python dasar", "TailwindCSS"],
  },
  {
    number: "02",
    title: "UI/UX & Desain Grafis",
    desc: "Menciptakan tampilan yang sederhana, nyaman, dan mudah digunakan.",
    items: [
      "Antarmuka website",
      "Wireframing",
      "Prototype",
      "Desain menggunakan Figma",
      "Tampilan sederhana & responsif",
    ],
  },
  {
    number: "03",
    title: "Perangkat",
    desc: "Tools yang membantu saya dalam proses desain dan pengembangan.",
    items: ["Figma", "Visual Studio Code", "NetBeans", "XAMPP", "GitHub"],
  },
  {
    number: "04",
    title: "Soft Skill",
    desc: "Kemampuan yang membantu saya bekerja dan menyelesaikan masalah.",
    items: [
      "Kreatif & mau belajar",
      "Pemecahan masalah",
      "Bekerja dalam tim",
      "Manajemen waktu",
      "Beradaptasi dengan teknologi baru",
    ],
  },
];

const socials = [
  {
    label: "Telegram",
    href: "https://t.me/reno",
    value: "@Reno",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/renowahyu_f/",
    value: "@renowahyu_f",
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@zyvoria.airen",
    value: "@zyvoria.airen",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@whandrt",
    value: "@whandrt",
  },
  {
    label: "Whatsapp",
    href: "https://wa.me/6283182312150?text=Halo%20saya%20ingin%20bertanya",
    value: "+62 831-8231-2150",
  },
  {
    label: "Telepon",
    href: "tel:+62831807480",
    value: "+62 831-807-480",
  },
];

/* ================= PAGE ================= */

export default function Home() {
  return (
    <>
      {/* ================= BERANDA / TENTANG (INTRO) ================= */}
      <section
        id="beranda"
        className="scroll-mt-24 mx-auto max-w-6xl px-6 pb-20 pt-20 sm:px-10 sm:pb-28 sm:pt-28"
      >
        <div className="grid grid-cols-1 gap-12 pt-3.5 shadow-sm shadow-white sm:grid-cols-12">
          {/* Foto */}
          <div className="relative animate-[float_4s_ease-in-out_infinite] sm:col-span-5">
            <div className="group aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#9697a8] bg-[#F4F5F0]">
              <img
                src="/cogan.jpeg"
                alt="Reno Wahyu"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Deskripsi */}
          <div className="sm:col-span-7">
            <h1 className="font-display text-4xl leading-tight text-[#e2ebe1] sm:text-5xl">
              Halo, saya Reno.
            </h1>

            <p className="mt-6 max-w-md leading-relaxed text-[#d7dbd0]">
              Saya adalah pelajar SMK berusia 16 tahun yang tinggal di Kota
              Pasuruan. Saya memiliki ketertarikan pada dunia desain,
              teknologi, dan pengembangan kreativitas.
            </p>

            <p className="mt-6 max-w-md leading-relaxed text-[#d7dbd0]">
              Sebagai pelajar, saya terus belajar dan mengembangkan
              kemampuan saya melalui berbagai proyek dan pengalaman. Saya
              percaya bahwa setiap proyek adalah kesempatan untuk belajar
              sesuatu yang baru, meningkatkan kemampuan, dan menghasilkan
              karya yang lebih baik.
            </p>

            <p className="mt-4 max-w-md leading-relaxed text-[#d7dbd0]">
              Di luar kegiatan sekolah, saya juga senang mengeksplorasi
              hal-hal baru yang berkaitan dengan teknologi dan desain.
              Hal-hal tersebut membantu saya menemukan inspirasi serta
              mengembangkan ide-ide untuk karya berikutnya.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TENTANG ================= */}
      <section id="tentang" className="scroll-mt-24 border-t border-[#E7E3DC] bg-[#323249]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <h2 className="font-display text-3xl text-[#e2ebe1] sm:text-4xl">
            Cara saya bekerja
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14">
            {process.map((p) => (
              <div
                key={p.step}
                className="
                  rounded-2xl
                  border
                  border-[#84cce7]
                  bg-[#323249]
                  p-6
                  shadow-sm
                  shadow-blue-500
                  text-[#d7c8c8]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D8DED3]
                  hover:bg-[#E9EDE6]
                  hover:text-[#121312]
                  font-bold
                "
              >
                <div className="flex gap-6">
                  <span className="font-display text-2xl">
                    {p.step}
                  </span>

                  <div>
                    <h3 className="font-display text-xl">
                      {p.title}
                    </h3>

                    <p className="mt-2 max-w-xs text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pengalaman */}
        <div className="border-t border-[#45455F]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <h2 className="font-display text-3xl text-[#dce7da] sm:text-4xl">
              Pengalaman
            </h2>

            <div className="mt-10 divide-y divide-[#45455F] border-t border-[#45455F]">
              {experience.map((e) => (
                <div
                  key={e.role}
                  className="
                    flex
                    flex-col
                    gap-2
                    px-4
                    py-6
                    transition-colors
                    duration-300
                    hover:bg-[#3A3A52]
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <h3 className="font-display text-xl text-[#ccdbca]">
                      {e.role}
                    </h3>

                    <p className="text-sm text-[#cacfc1]">{e.place}</p>
                  </div>

                  <span className="text-sm text-[#cad2c0]">{e.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= KARYA ================= */}
      <section id="karya" className="scroll-mt-24 border-t border-[#E7E3DC]">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28">
          <h1 className="font-display text-4xl text-[#e6e0e0] sm:text-5xl">
            Karya
          </h1>

          <p className="mt-4 max-w-md leading-relaxed text-[#ced2c9]">
            Sebagian proyek yang pernah saya kerjakan, dari produk digital
            sampai identitas visual.
          </p>

          <div className="mt-16 divide-y divide-[#E7E3DC] border-t border-[#E7E3DC]">
            {projects.map((p) => (
              <a
                key={p.no}
                href="#"
                className="
                  group
                  flex
                  flex-col
                  gap-6
                  px-4
                  py-8
                  transition-all
                  duration-300
                  hover:bg-[#E9EDE6]/60
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div className="flex min-w-0 flex-1 items-baseline gap-6">
                  <span className="shrink-0 text-sm text-[#d1d4cc]">
                    {p.no}
                  </span>

                  <h2
                    className="
                      font-display
                      text-2xl
                      text-[#ced9cc]
                      transition-all
                      duration-300
                      group-hover:italic
                      group-hover:text-[#3F493E]
                      sm:text-3xl
                    "
                  >
                    {p.title}
                  </h2>
                </div>

                <div
                  className="
                    flex
                    flex-wrap
                    gap-x-8
                    gap-y-1
                    pl-10
                    text-sm
                    text-[#cfd4c9]
                    sm:pl-0
                    sm:min-w-[330px]
                  "
                >
                  <span className="transition-colors group-hover:text-[#d8dfd7]">
                    {p.category}
                  </span>

                  <span className="transition-colors group-hover:text-[#d8dfd7]">
                    {p.tools}
                  </span>

                  <span className="transition-colors group-hover:text-[#d8dfd7]">
                    {p.year}
                  </span>
                </div>

                <div
                  className="
                    relative
                    h-40
                    w-full
                    rounded-lg
                    bg-[#E9EDE6]
                    shadow-md
                    shadow-blue-500
                    sm:h-32
                    sm:w-52
                    sm:shrink-0
                  "
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEAHLIAN ================= */}
      <section
        id="keahlian"
        className="
          scroll-mt-24
          mx-auto
          max-w-6xl
          bg-[#323249]
          px-6
          pb-24
          pt-20
          sm:px-10
          sm:pb-32
          sm:pt-28
        "
      >
        <div className="border-b border-[#DCD9D0] pb-12">
          <h1
            className="
              font-display
              text-5xl
              leading-[0.95]
              tracking-tight
              text-[#E0E6DC]
              sm:text-6xl
            "
          >
            Keahlian
          </h1>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#E7E9E1]">
            Kombinasi kemampuan yang saya pakai dari awal riset sampai serah
            terima ke tim engineering.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="
                group
                relative
                flex
                min-h-[480px]
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-[#DDDAD1]
                bg-[#323249]
                p-7
                text-white
                shadow-sm
                shadow-blue-500
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#B9BDAF]
                hover:bg-[#F9F9F4]
                hover:text-gray-800
                hover:shadow-[0_20px_50px_rgba(48,52,43,0.09)]
                sm:p-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  bg-[#E7E9DF]
                  transition-transform
                  duration-500
                  group-hover:scale-150
                "
              />

              <div className="relative flex items-start justify-between">
                <span
                  className="
                    font-display
                    text-5xl
                    leading-none
                    text-[#D8DAD0]
                    transition-colors
                    duration-500
                    group-hover:text-[#B7BCAA]
                  "
                >
                  {g.number}
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-[#D9DCD2]
                    bg-[#FBFAF6]
                    px-3
                    py-1
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[#85887E]
                  "
                >
                  Skill
                </span>
              </div>

              <div className="relative mt-8">
                <h2
                  className="
                    font-display
                    text-2xl
                    tracking-tight
                    text-[#E0E6DC]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#3F493E]
                  "
                >
                  {g.title}
                </h2>

                <p
                  className="
                    mt-2
                    max-w-md
                    text-sm
                    leading-6
                    text-[#BBC1B4]
                    group-hover:text-[#777A72]
                  "
                >
                  {g.desc}
                </p>
              </div>

              <ul className="relative mt-7 flex-1">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      border-t
                      border-[#4A4A60]
                      py-3
                      text-sm
                      text-[#BBC1B4]
                      transition-all
                      duration-300
                      first:border-t-0
                      hover:translate-x-1
                      hover:text-[#394134]
                      group-hover:border-[#E5E2DA]
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-[#9AA18D]
                        transition-all
                        duration-300
                        group-hover:bg-[#68715F]
                      "
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div
                className="
                  absolute
                  bottom-0
                  left-8
                  h-[2px]
                  w-0
                  bg-[#707966]
                  transition-all
                  duration-500
                  group-hover:w-20
                "
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= KONTAK ================= */}
      <section
        id="kontak"
        className="scroll-mt-24 mx-auto max-w-6xl border-t border-[#E7E3DC] px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28"
      >
        <h1
          className="
            mt-4
            max-w-2xl
            font-display
            text-4xl
            leading-tight
            text-[#dfe7dd]
            sm:text-6xl
          "
        >
          Ceritakan proyek kamu, kita cari tahu bentuknya bersama.
        </h1>

        <a
          href="mailto:renow381@gmail.com"
          className="
            mt-10
            inline-block
            border-b
            border-[#191a19]
            pb-1
            font-display
            text-2xl
            italic
            text-[#d5e0d4]
            transition-colors
            duration-300
            hover:border-[#777A72]
            hover:text-[#777A72]
            sm:text-3xl
          "
        >
          renow381@gmail.com
        </a>

        <div
          className="
            mt-20
            grid
            grid-cols-1
            gap-x-12
            gap-y-6
            border-t
            border-[#E7E3DC]
            pt-10
            sm:grid-cols-3
          "
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="
                group
                flex
                flex-col
                gap-2
                rounded-xl
                border
                border-[#E7E3DC]
                p-4
                transition-all
                duration-300
                hover:bg-[#E9EDE6]
              "
            >
              <span className="text-sm text-[#A2A69D]">{s.label}</span>

              <span className="font-medium text-[#bec2b9] transition-colors duration-300 group-hover:text-[#3F493E]">
                {s.value}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
