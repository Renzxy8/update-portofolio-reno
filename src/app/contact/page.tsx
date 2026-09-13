const socials = [
  ["Telegram", "https://t.me/reno", "@Reno"],
  ["Instagram", "https://www.instagram.com/renowahyu_f/", "@renowahyu_f"],
  ["TikTok", "https://www.tiktok.com/@zyvoria.airen", "@zyvoria.airen"],
  ["YouTube", "https://www.youtube.com/@whandrt", "@whandrt"],
  ["WhatsApp", "https://wa.me/6283182312150?text=Halo%20saya%20ingin%20bertanya", "+62 831-8231-2150"],
  ["Telepon", "tel:+62831807480", "+62 831-807-480"],
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#38BDF8]">Kontak</p>
      <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight text-[#F1F5F9] sm:text-7xl">
        Ceritakan proyek kamu, kita cari tahu bentuknya bersama.
      </h1>
      <a href="mailto:renow381@gmail.com" className="mt-10 inline-block border-b border-[#64748B] pb-1 font-display text-2xl italic text-[#BAE6FD] transition-colors hover:border-[#38BDF8] hover:text-[#38BDF8] sm:text-3xl">
        renow381@gmail.com
      </a>

      <div className="mt-20 grid grid-cols-1 gap-4 border-t border-[#334155] pt-10 sm:grid-cols-3">
        {socials.map(([label, href, value]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex flex-col gap-2 rounded-xl border border-[#334155] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8] hover:bg-[#E0F2FE]">
            <span className="text-sm text-[#94A3B8]">{label}</span>
            <span className="font-medium text-[#CBD5E1] group-hover:text-[#0F172A]">{value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
