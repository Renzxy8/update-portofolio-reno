"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const projects = [
  { no: "01", title: "Monitoring Sungai — Sistem IoT", category: "IoT", tags: "Monitoring", tools: "ESP32, Arduino, LCD", year: "2026", image: "/p1.png" },
  { no: "02", title: "Database Koperasi", category: "Database", tags: "SQL", tools: "MariaDB, XAMPP", year: "2026", image: "/p2.png" },
  { no: "03", title: "Sistem Manajemen Proyek", category: "UI/UX", tags: "Wireframe", tools: "Figma", year: "2026", image: "/p8.png" },
  { no: "04", title: "TimePilot — Aplikasi Aktivitas", category: "UI/UX", tags: "Mobile App", tools: "Figma", year: "2026", image: "/p4.png" },
  { no: "05", title: "Kalkulator Java", category: "Desktop App", tags: "Java", tools: "Java, NetBeans", year: "2026", image: "/p5.png" },
];

const filters = ["Semua", "UI/UX", "IoT", "Database", "Desktop App"];

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Semua");

  const filteredProjects = useMemo(() => {
    const keyword = query.toLowerCase().trim();
    return projects.filter((project) => {
      const matchesFilter = filter === "Semua" || project.category === filter;
      const text = `${project.title} ${project.category} ${project.tags} ${project.tools} ${project.year}`.toLowerCase();
      return matchesFilter && (!keyword || text.includes(keyword));
    });
  }, [query, filter]);

  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-10 sm:pb-32 sm:pt-24">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#38BDF8]">Portfolio</p>
      <h1 className="mt-5 font-display text-5xl text-[#F1F5F9] sm:text-7xl">Karya</h1>
      <p className="mt-5 max-w-xl leading-7 text-[#94A3B8]">Sebagian proyek yang pernah saya kerjakan, dari sistem IoT dan database sampai desain UI/UX.</p>

      {/* Search */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Cari karya</span>
          <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari karya, teknologi, atau kategori..." className="w-full rounded-2xl border border-[#334155] bg-[#0F172A] px-12 py-3.5 text-sm text-white outline-none transition placeholder:text-[#64748B] focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/10" />
        </label>
        <button type="button" onClick={() => { setQuery(""); setFilter("Semua"); }} className="rounded-2xl border border-[#334155] px-5 py-3.5 text-sm text-[#94A3B8] transition hover:border-[#38BDF8] hover:text-white">Reset</button>
      </div>

      {/* Filter */}
      <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
        {filters.map((item) => (
          <button key={item} type="button" onClick={() => setFilter(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-xs transition ${filter === item ? "bg-[#E2E8F0] text-[#020617]" : "border border-[#334155] text-[#94A3B8] hover:border-[#64748B] hover:text-white"}`}>
            {item}
          </button>
        ))}
      </div>

      <p className="mt-8 text-sm text-[#64748B]">Menampilkan {filteredProjects.length} dari {projects.length} karya</p>

      <div className="mt-5 divide-y divide-[#334155] border-t border-[#334155]">
        {filteredProjects.map((project) => (
          <article key={project.no} className="group grid gap-6 px-2 py-8 transition-all duration-300 hover:bg-[#E0F2FE]/10 sm:grid-cols-[1fr_330px_80px] sm:items-center sm:px-4">
            <div className="flex min-w-0 items-start gap-5 sm:gap-6">
              <span className="shrink-0 pt-1 text-sm text-[#64748B]">{project.no}</span>
              <div className="min-w-0"><h2 className="font-display text-2xl text-[#E2E8F0] transition-colors group-hover:text-[#BAE6FD] sm:text-3xl">{project.title}</h2><p className="mt-2 text-sm text-[#64748B]">{project.category} · {project.tags} · {project.tools}</p></div>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-[#334155] bg-[#0F172A]"><Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
            <span className="text-sm text-[#64748B] sm:text-right">{project.year}</span>
          </article>
        ))}
      </div>

      {filteredProjects.length === 0 && <div className="rounded-2xl border border-dashed border-[#334155] px-6 py-14 text-center text-[#94A3B8]">Karya yang kamu cari belum ditemukan.</div>}
    </section>
  );
}
