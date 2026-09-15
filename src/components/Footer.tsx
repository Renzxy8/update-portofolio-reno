export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/10 bg-[#01040D]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-7 sm:px-10 md:flex-row md:items-center md:justify-between">
        <div><p className="font-display text-sm font-semibold text-slate-200">Reno Wahyu<span className="text-cyan-300">.</span></p><p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-slate-600">© 2026 · UI/UX & Graphic Designer</p></div>
        <p className="font-mono text-[9px] uppercase tracking-wider text-slate-600">Built with Next.js · React · TailwindCSS</p>
      </div>
    </footer>
  );
}
