"use client";

import ContactForm from "@/features/portfolio/components/ContactForm";

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

export default function Contact() {
  return (
    <section
      id="kontak"
      className="border-t border-white/[.06] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">

        {/* LEFT */}
        <div>

          <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">
            06 / Contact
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s Connect
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
            If you have any questions, want to discuss a project,
            or would like to collaborate, feel free to contact me
            using the form beside this section.
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

        {/* FORM */}
        <div className="rounded-[28px] border border-white/[.08] bg-white/[.02] p-5 sm:p-8">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}