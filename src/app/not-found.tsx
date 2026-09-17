import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#38BDF8]">
          Halaman tidak ditemukan
        </p>

        <h1 className="mt-5 font-display text-6xl leading-none text-[#F1F5F9] sm:text-8xl">
          404
        </h1>

        <p className="mx-auto mt-6 max-w-md leading-7 text-[#94A3B8]">
          Halaman yang kamu cari mungkin sudah dipindahkan, dihapus, atau alamatnya tidak benar.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-linear-to-r from-[#0EA5E9] to-[#6366F1] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-1"
        >
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}