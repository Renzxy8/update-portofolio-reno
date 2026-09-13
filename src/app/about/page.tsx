const process = [
  ["01", "Memahami", "Saya memahami kebutuhan dan tujuan proyek sebelum mulai mengerjakannya, termasuk menentukan fitur dan teknologi yang akan digunakan."],
  ["02", "Merencanakan", "Saya menyusun ide, menentukan pengerjaan, dan membuat gambaran awal agar proses pengembangan lebih terarah."],
  ["03", "Mengembangkan", "Saya mulai membuat desain dan mengembangkan proyek menggunakan kemampuan pemrograman, desain, serta teknologi yang saya pelajari di sekolah."],
  ["04", "Menguji", "Saya mencoba proyek yang dibuat, mencari kesalahan atau kekurangan, kemudian melakukan perbaikan agar hasilnya dapat berjalan dengan baik."],
  ["05", "Mengevaluasi", "Saya mengevaluasi hasil akhir dan mencatat hal-hal yang bisa dikembangkan agar kemampuan dan kualitas proyek saya terus meningkat."],
];

const experience = [
  ["Proyek Pembelajaran RPL", "SMKN 1 Pasuruan", "2025 — Sekarang"],
  ["Proyek Pribadi UBIG", "SMKN 1 Pasuruan", "2025 — 2026"],
  ["Desain UI/UX", "SMKN 1 Pasuruan", "2025 — 2026"],
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:px-10 sm:pb-28 sm:pt-28">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#38BDF8]">Tentang</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight text-[#F1F5F9] sm:text-7xl">
          Cara saya belajar, bekerja, dan berkembang.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-[#CBD5E1] sm:text-lg">
          Saya percaya proses yang baik dimulai dari memahami masalah, merencanakan
          solusi, lalu terus menguji dan mengevaluasi hasilnya.
        </p>
      </section>

      <section className="border-t border-[#334155] bg-[#0F172A]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <h2 className="font-display text-3xl text-[#F1F5F9] sm:text-4xl">Cara saya bekerja</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {process.map(([step, title, desc]) => (
              <div key={step} className="rounded-2xl border border-[#334155] bg-[#020617]/50 p-6 text-[#CBD5E1] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8] hover:bg-[#E0F2FE] hover:text-[#020617]">
                <div className="flex gap-6">
                  <span className="font-display text-2xl">{step}</span>
                  <div><h3 className="font-display text-xl">{title}</h3><p className="mt-2 max-w-md text-sm leading-relaxed">{desc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1E293B]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <h2 className="font-display text-3xl text-[#F1F5F9] sm:text-4xl">Pengalaman</h2>
          <div className="mt-10 divide-y divide-[#334155] border-t border-[#334155]">
            {experience.map(([role, place, period]) => (
              <div key={role} className="flex flex-col gap-2 px-4 py-6 transition-colors hover:bg-[#172554] sm:flex-row sm:items-center sm:justify-between">
                <div><h3 className="font-display text-xl text-[#BAE6FD]">{role}</h3><p className="text-sm text-[#94A3B8]">{place}</p></div>
                <span className="text-sm text-[#94A3B8]">{period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
