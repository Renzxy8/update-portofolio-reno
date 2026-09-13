import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-[#334155]">
        <div className="pointer-events-none absolute -left-40 -top-32 h-[500px] w-[500px] rounded-full bg-[#8F9A87]/25 blur-[100px] aurora-1" />
        <div className="pointer-events-none absolute -right-40 -top-24 h-[450px] w-[450px] rounded-full bg-[#6F728F]/20 blur-[110px] aurora-2" />
        <div className="pointer-events-none absolute bottom-[-180px] left-1/3 h-[500px] w-[500px] rounded-full bg-[#6366F1]/15 blur-[120px] aurora-3" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#38BDF8]">
              UI/UX & Graphic Designer
            </p>

            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-[#F1F5F9] sm:text-7xl">
              Halo, saya <span className="italic">Reno.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#CBD5E1] sm:text-lg">
              Pelajar SMK yang tertarik pada desain, teknologi, dan pengembangan
              produk digital. Saya senang mengubah ide menjadi karya yang
              sederhana, jelas, dan mudah digunakan.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_25px_rgba(56,189,248,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(99,102,241,0.3)]"
              >
                Lihat karya
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#475569] bg-[#0F172A]/60 px-6 py-3 text-sm font-medium text-[#E2E8F0] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8] hover:text-[#BAE6FD]"
              >
                Hubungi saya
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="animate-[float_4s_ease-in-out_infinite]">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[#475569] bg-[#0F172A] shadow-[0_25px_70px_rgba(2,6,23,0.45)]">
                <Image
                  src="/cogan.jpeg"
                  alt="Reno Wahyu"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="max-w-4xl">
          <p className="text-lg font-medium uppercase tracking-[0.25em] text-[#64748B]">
            Tentang saya
          </p>

          <p className="mt-6 font-display text-2xl leading-relaxed text-[#E2E8F0] sm:text-4xl">
            Saya terus belajar melalui proyek sekolah dan proyek pribadi,
            mengeksplorasi bagaimana desain dan teknologi dapat bekerja
            bersama untuk menghasilkan pengalaman digital yang baik.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex border-b border-[#64748B] pb-1 text-sm text-[#BAE6FD] transition-colors hover:border-[#38BDF8] hover:text-[#38BDF8]"
          >
            Kenali saya lebih jauh →
          </Link>
        </div>
      </section>

      {/* FEATURED */}
      <section className="border-t border-[#334155] bg-[#0F172A]/60">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#38BDF8]">
                Pilihan karya
              </p>
              <h2 className="mt-4 font-display text-4xl text-[#F1F5F9] sm:text-5xl">
                Beberapa proyek terbaru.
              </h2>
            </div>
            <Link href="/projects" className="text-sm text-[#94A3B8] hover:text-[#BAE6FD]">
              Lihat semua →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Link href="/projects" className="group overflow-hidden rounded-2xl border border-[#334155] bg-[#020617]">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src="/p1.png" alt="Monitoring Sungai — Sistem IoT" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs text-[#64748B]">01 · IoT · Monitoring</p>
                <h3 className="mt-2 font-display text-2xl text-[#E2E8F0]">Monitoring Sungai — Sistem IoT</h3>
              </div>
            </Link>

            <Link href="/projects" className="group overflow-hidden rounded-2xl border border-[#334155] bg-[#020617]">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src="/p4.png" alt="TimePilot — Aplikasi Aktivitas" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs text-[#64748B]">04 · UI/UX · Aplikasi Mobile</p>
                <h3 className="mt-2 font-display text-2xl text-[#E2E8F0]">TimePilot — Aplikasi Aktivitas</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
