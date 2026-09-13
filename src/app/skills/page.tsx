const skillGroups = [
  ["01", "Pemrograman", "Teknologi yang saya gunakan untuk membangun website dan aplikasi.", ["HTML & CSS", "JavaScript", "React", "Python dasar", "TailwindCSS"]],
  ["02", "UI/UX & Desain Grafis", "Menciptakan tampilan yang sederhana, nyaman, dan mudah digunakan.", ["Antarmuka website", "Wireframing", "Prototype", "Desain menggunakan Figma", "Tampilan sederhana & responsif"]],
  ["03", "Perangkat", "Tools yang membantu saya dalam proses desain dan pengembangan.", ["Figma", "Visual Studio Code", "NetBeans", "XAMPP", "GitHub"]],
  ["04", "Soft Skill", "Kemampuan yang membantu saya bekerja dan menyelesaikan masalah.", ["Kreatif & mau belajar", "Pemecahan masalah", "Bekerja dalam tim", "Manajemen waktu", "Beradaptasi dengan teknologi baru"]],
];

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#38BDF8]">Kemampuan</p>
      <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight text-[#E2E8F0] sm:text-7xl">Keahlian</h1>
      <p className="mt-5 max-w-xl leading-7 text-[#CBD5E1]">Kombinasi kemampuan yang saya gunakan dalam proses desain dan pengembangan proyek.</p>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillGroups.map(([number, title, desc, items]) => (
          <div key={title} className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[28px] border border-[#334155] bg-[#0F172A] p-7 text-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8] hover:bg-[#F8FAFC] hover:text-[#0F172A] sm:p-8">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#172554] transition-transform duration-500 group-hover:scale-150" />
            <div className="relative flex items-start justify-between">
              <span className="font-display text-5xl leading-none text-[#E2E8F0] group-hover:text-[#0F172A]">{number}</span>
              <span className="rounded-full border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#64748B]">Skill</span>
            </div>
            <div className="relative mt-8">
              <h2 className="font-display text-2xl tracking-tight text-[#E2E8F0] group-hover:text-[#0F172A]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#94A3B8] group-hover:text-[#0F172A]">{desc}</p>
            </div>
            <ul className="relative mt-7 flex-1">
              {(items as string[]).map((item) => <li key={item} className="flex items-center gap-3 border-t border-[#334155] py-3 text-sm text-[#94A3B8] first:border-t-0 group-hover:text-[#334155]"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#38BDF8]" />{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
