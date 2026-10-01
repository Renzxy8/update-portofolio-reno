"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase/public";

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

  /*
  |--------------------------------------------------------------------------
  | AMBIL DATA PROJECT DARI SUPABASE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    let mounted = true;

    async function fetchProjects() {
      try {
        setLoading(true);
        setError("");

        console.log("====================================");
        console.log("PROJECTS: Memulai request Supabase...");
        console.log("====================================");

        /*
         * Menggunakan select("*") terlebih dahulu.
         *
         * Tujuannya supaya kalau ada masalah pada salah satu
         * nama kolom, kita bisa mengetahui error Supabase
         * dengan lebih jelas.
         */
        const { data, error: supabaseError } = await supabase
          .from("projects")
          .select("*")
          .order("id", {
            ascending: true,
          });

        /*
         |--------------------------------------------------------------------------
         | SUPABASE ERROR
         |--------------------------------------------------------------------------
         */

        if (supabaseError) {
          console.error("====================================");
          console.error("SUPABASE PROJECT ERROR");
          console.error("====================================");

          console.error(
            "Message:",
            supabaseError.message || "(tidak ada message)"
          );

          console.error(
            "Details:",
            supabaseError.details || "(tidak ada details)"
          );

          console.error(
            "Hint:",
            supabaseError.hint || "(tidak ada hint)"
          );

          console.error(
            "Code:",
            supabaseError.code || "(tidak ada code)"
          );

          console.error("Raw error:", supabaseError);

          console.error(
            "JSON:",
            JSON.stringify(
              {
                message: supabaseError.message,
                details: supabaseError.details,
                hint: supabaseError.hint,
                code: supabaseError.code,
              },
              null,
              2
            )
          );

          console.error("====================================");

          if (!mounted) return;

          const message =
            supabaseError.message ||
            "Supabase gagal mengambil data project.";

          const details = supabaseError.details
            ? `\nDetails: ${supabaseError.details}`
            : "";

          const hint = supabaseError.hint
            ? `\nHint: ${supabaseError.hint}`
            : "";

          const code = supabaseError.code
            ? `\nCode: ${supabaseError.code}`
            : "";

          setError(
            `${message}${details}${hint}${code}`
          );

          setProjects([]);

          return;
        }

        /*
         |--------------------------------------------------------------------------
         | DATA BERHASIL
         |--------------------------------------------------------------------------
         */

        console.log("====================================");
        console.log("SUPABASE PROJECT DATA BERHASIL");
        console.log("Jumlah project:", data?.length ?? 0);
        console.log("Data:", data);
        console.log("====================================");

        if (!mounted) return;

        /*
         * Normalisasi data.
         *
         * Kalau ada field null dari database,
         * kita ubah menjadi string kosong supaya
         * React tidak bermasalah saat render.
         */

        const normalizedProjects: ProjectData[] = (data ?? []).map(
          (project: any) => ({
            id: project.id ?? "",
            slug: String(project.slug ?? ""),
            no: String(project.no ?? ""),
            title: String(project.title ?? "Untitled Project"),
            category: String(project.category ?? ""),
            year: String(project.year ?? ""),
            image: String(project.image ?? ""),
            tags: String(project.tags ?? ""),
            tools: String(project.tools ?? ""),
            description: String(project.description ?? ""),
          })
        );

        setProjects(normalizedProjects);
      } catch (err) {
        console.error("====================================");
        console.error("UNEXPECTED PROJECT ERROR");
        console.error("====================================");
        console.error(err);
        console.error("====================================");

        if (!mounted) return;

        if (err instanceof Error) {
          setError(
            `Terjadi error: ${err.message}`
          );
        } else {
          setError(
            "Terjadi error yang tidak diketahui saat mengambil project."
          );
        }

        setProjects([]);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | FILTER PROJECT
  |--------------------------------------------------------------------------
  */

  const filteredProjects = useMemo(() => {
    if (filter === "Semua") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === filter
    );
  }, [projects, filter]);

  /*
  |--------------------------------------------------------------------------
  | RENDER
  |--------------------------------------------------------------------------
  */

  return (
    <section
      id="karya"
      className="relative px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
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

        {/* FILTER */}
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

        {/* LOADING */}
        {loading && (
          <div className="rounded-2xl border border-white/10 bg-white/[.02] px-6 py-16 text-center">
            <div className="mx-auto mb-4 h-6 w-6 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-300" />

            <p className="font-mono text-xs text-white/40">
              Memuat project...
            </p>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-400/[.03] px-6 py-10">
            <div className="mx-auto max-w-3xl">

              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-red-400/20 bg-red-400/10 text-red-300">
                  !
                </div>

                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-red-300">
                    Supabase Error
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    Project gagal dimuat dari database.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-red-400/10 bg-black/20 p-4">
                <pre className="whitespace-pre-wrap break-words font-mono text-[11px] leading-6 text-red-200">
                  {error}
                </pre>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/[.02] p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                  Periksa
                </p>

                <ul className="mt-3 space-y-2 text-xs leading-6 text-slate-400">
                  <li>
                    • Pastikan tabel <strong className="text-white">
                      projects
                    </strong>{" "}
                    ada di Supabase.
                  </li>

                  <li>
                    • Pastikan RLS mengizinkan{" "}
                    <strong className="text-white">
                      SELECT
                    </strong>{" "}
                    untuk public/anon.
                  </li>

                  <li>
                    • Pastikan URL dan Publishable/Anon Key Supabase
                    di <strong className="text-white">
                      .env.local
                    </strong>{" "}
                    benar.
                  </li>

                  <li>
                    • Lihat juga Console browser untuk mendapatkan
                    <strong className="text-white">
                      {" "}Code, Message, Details, dan Hint
                    </strong>.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* PROJECT GRID */}
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

                  {/* IMAGE */}
                  <Link
                    href={`/projects/${encodeURIComponent(
                      project.slug
                    )}`}
                    className="block"
                    aria-label={`Lihat detail ${project.title}`}
                  >
                    <div className="relative aspect-video overflow-hidden bg-slate-950">

                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="
                            h-full
                            w-full
                            object-contain
                            p-3
                            transition
                            duration-500
                            group-hover:scale-105
                          "
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                            No Image
                          </span>
                        </div>
                      )}

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

                  {/* CONTENT */}
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

                    {/* TAGS */}
                    <div className="mt-4 flex flex-wrap gap-2">

                      {project.tags && (
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
                      )}

                      {project.tools && (
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
                      )}

                    </div>

                    {/* DESCRIPTION */}
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

                    {/* DETAIL */}
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

        {/* EMPTY STATE */}
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