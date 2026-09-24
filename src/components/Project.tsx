"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type ProjectData = {
  id: string | number;
  slug: string;
  no: string;
  title: string;
  category: string;
  year: string;
  image: string;
  tags: string;
  tools: string;
  description: string;
};

const filters = [
  "Semua",
  "UI/UX",
  "IoT",
  "Database",
  "Desktop App",
];

export default function Project() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [filter, setFilter] = useState("Semua");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================
     AMBIL DATA DARI SUPABASE
  ========================= */

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      setError("");

      const { data, error } = await supabase
        .from("projects")
        .select(
          "id, slug, no, title, category, year, image, tags, tools, description"
        )
        .order("id", { ascending: true });

      if (error) {
        console.error("Supabase error:", error);
        setError("Gagal mengambil data project.");
        setProjects([]);
      } else {
        setProjects(data ?? []);
      }

      setLoading(false);
    }

    fetchProjects();
  }, []);

  /* =========================
     FILTER PROJECT
  ========================= */

  const filteredProjects = useMemo(() => {
    if (filter === "Semua") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === filter
    );
  }, [projects, filter]);

  return (
    <section
      id="karya"
      className="relative px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300">
            My Works
          </p>

          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Karya & Project
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Beberapa project yang saya kerjakan selama proses belajar
            dan mengembangkan kemampuan di bidang teknologi,
            pemrograman, serta UI/UX.
          </p>
        </div>

        {/* =========================
            FILTER
        ========================= */}

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`
                rounded-full
                border
                px-4
                py-2
                font-mono
                text-[10px]
                uppercase
                tracking-wider
                transition
                ${
                  filter === item
                    ? "border-cyan-400/50 bg-cyan-400 text-slate-950"
                    : "border-white/10 bg-white/[.03] text-white/50 hover:border-cyan-400/30 hover:text-cyan-300"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* =========================
            LOADING
        ========================= */}

        {loading && (
          <div className="rounded-2xl border border-white/10 bg-white/[.02] px-6 py-16 text-center">
            <p className="font-mono text-xs text-white/40">
              Memuat project...
            </p>
          </div>
        )}

        {/* =========================
            ERROR
        ========================= */}

        {!loading && error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-400/[.03] px-6 py-16 text-center">
            <p className="font-mono text-xs text-red-300">
              {error}
            </p>
          </div>
        )}

        {/* =========================
            PROJECT GRID
        ========================= */}

        {!loading &&
          !error &&
          filteredProjects.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {filteredProjects.map((project) => (

                <article
                  key={project.id}
                  className="
                    cyber-glass
                    neon-border
                    group
                    overflow-hidden
                    rounded-[24px]
                    transition
                    duration-300
                    hover:-translate-y-1
                  "
                >

                  {/* =========================
                      IMAGE
                  ========================= */}

                  <Link
                    href={`/projects/${encodeURIComponent(
                      project.slug
                    )}`}
                    className="block"
                    aria-label={`Lihat detail ${project.title}`}
                  >
                    <div className="relative aspect-video overflow-hidden bg-slate-950">

                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="
                          object-contain
                          p-3
                          transition
                          duration-500
                          group-hover:scale-105
                        "
                        sizes="
                          (max-width: 768px) 100vw,
                          (max-width: 1280px) 50vw,
                          33vw
                        "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                      <span
                        className="
                          absolute
                          left-4
                          top-4
                          rounded-full
                          border
                          border-white/10
                          bg-slate-950/70
                          px-3
                          py-1.5
                          font-mono
                          text-[9px]
                          text-white/60
                          backdrop-blur
                        "
                      >
                        {project.no}
                      </span>

                    </div>
                  </Link>

                  {/* =========================
                      CONTENT
                  ========================= */}

                  <div className="p-5">

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <p className="font-mono text-[9px] uppercase tracking-wider text-cyan-300">
                          {project.category}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-white">
                          {project.title}
                        </h3>

                      </div>

                      <span className="font-mono text-[9px] text-white/30">
                        {project.year}
                      </span>

                    </div>

                    {/* =========================
                        TAGS
                    ========================= */}

                    <div className="mt-4 flex flex-wrap gap-2">

                      <span
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[.03]
                          px-3
                          py-1
                          font-mono
                          text-[9px]
                          text-white/40
                        "
                      >
                        #{project.tags}
                      </span>

                      <span
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[.03]
                          px-3
                          py-1
                          font-mono
                          text-[9px]
                          text-white/40
                        "
                      >
                        {project.tools}
                      </span>

                    </div>

                    {/* =========================
                        DESCRIPTION
                    ========================= */}

                    <p
                      className="
                        mt-4
                        line-clamp-3
                        text-sm
                        leading-6
                        text-slate-400
                      "
                    >
                      {project.description}
                    </p>

                    {/* =========================
                        DETAIL
                    ========================= */}

                    <Link
                      href={`/projects/${encodeURIComponent(
                        project.slug
                      )}`}
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        font-mono
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-widest
                        text-cyan-300
                        transition
                        hover:text-white
                      "
                    >
                      Lihat Detail

                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                  </div>
                </article>

              ))}

            </div>
          )}

        {/* =========================
            EMPTY STATE
        ========================= */}

        {!loading &&
          !error &&
          filteredProjects.length === 0 && (
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[.02]
                px-6
                py-16
                text-center
              "
            >
              <p className="font-mono text-xs text-white/40">
                Tidak ada project pada kategori ini.
              </p>
            </div>
          )}

      </div>
    </section>
  );
}
