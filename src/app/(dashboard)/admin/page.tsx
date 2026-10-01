import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createSupabaseServerClient();

  // Cek user yang sedang login
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // Ambil semua project
  const {
    data: projects,
    error,
  } = await supabase
    .from("projects")
    .select("id, no, title, slug, category, year, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch projects:", error);
  }

  const projectList = projects ?? [];

  // Statistik
  const totalProjects = projectList.length;

  const categories = new Set(
    projectList
      .map((project) => project.category)
      .filter(Boolean)
  );

  const totalCategories = categories.size;

  const latestProjects = projectList.slice(0, 5);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* HEADER */}
        <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
              RENO ADMIN
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Dashboard
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Manage your portfolio from one place.
            </p>
          </div>

          {/* USER */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-xl">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <span className="text-sm font-bold text-cyan-300">
                {user.email?.charAt(0).toUpperCase() ?? "A"}
              </span>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500">
                Logged in as
              </p>

              <p className="max-w-[180px] truncate text-xs text-cyan-200">
                {user.email}
              </p>
            </div>

          </div>

        </header>

        {/* NAVIGATION */}
        <div className="mb-8 flex flex-wrap gap-3">

          <Link
            href="/admin"
            className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-medium text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/15"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/proyek"
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
          >
            Projects
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-violet-400/30 hover:bg-violet-400/5 hover:text-violet-300"
          >
            View Portfolio →
          </Link>

        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-400/20 bg-red-400/5 p-4">
            <p className="text-sm text-red-300">
              Failed to load project data.
            </p>

            <p className="mt-1 text-xs text-red-400/70">
              {error.message}
            </p>
          </div>
        )}

        {/* STATISTICS */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* PROJECTS */}
          <div className="group rounded-2xl border border-cyan-400/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30">

            <div className="mb-5 flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                <svg
                  className="h-5 w-5 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 7.5A2.5 2.5 0 015.5 5h4l2 2h7A2.5 2.5 0 0121 9.5v8a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 17.5v-10z"
                  />
                </svg>
              </div>

              <span className="text-[10px] uppercase tracking-widest text-slate-600">
                Projects
              </span>

            </div>

            <p className="text-3xl font-bold text-white">
              {totalProjects}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Total projects
            </p>

          </div>

          {/* CATEGORIES */}
          <div className="group rounded-2xl border border-violet-400/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/30">

            <div className="mb-5 flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10">
                <svg
                  className="h-5 w-5 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6.5A2.5 2.5 0 016.5 4h3A2.5 2.5 0 0112 6.5v3A2.5 2.5 0 019.5 12h-3A2.5 2.5 0 014 9.5v-3zM12 14.5a2.5 2.5 0 012.5-2.5h3a2.5 2.5 0 012.5 2.5v3a2.5 2.5 0 01-2.5 2.5h-3a2.5 2.5 0 01-2.5-2.5v-3z"
                  />
                </svg>
              </div>

              <span className="text-[10px] uppercase tracking-widest text-slate-600">
                Categories
              </span>

            </div>

            <p className="text-3xl font-bold text-white">
              {totalCategories}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Project categories
            </p>

          </div>

          {/* STATUS */}
          <div className="group rounded-2xl border border-emerald-400/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/30 sm:col-span-2 lg:col-span-1">

            <div className="mb-5 flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              </div>

              <span className="text-[10px] uppercase tracking-widest text-slate-600">
                System
              </span>

            </div>

            <p className="text-3xl font-bold text-emerald-300">
              Online
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Supabase connected
            </p>

          </div>

        </section>

        {/* QUICK ACTIONS */}
        <section className="mb-8">

          <div className="mb-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400/60">
              Quick Actions
            </p>

            <h2 className="mt-1 text-xl font-semibold">
              Manage Portfolio
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            <Link
              href="/admin/proyek"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="font-semibold text-white">
                    Manage Projects
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Create, edit, and delete portfolio projects.
                  </p>
                </div>

                <span className="text-xl text-cyan-400 transition-transform group-hover:translate-x-1">
                  →
                </span>

              </div>
            </Link>

            <Link
              href="/"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/[0.03]"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="font-semibold text-white">
                    View Portfolio
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Open the public portfolio website.
                  </p>
                </div>

                <span className="text-xl text-violet-400 transition-transform group-hover:translate-x-1">
                  →
                </span>

              </div>
            </Link>

          </div>

        </section>

        {/* RECENT PROJECTS */}
        <section>

          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400/60">
                Portfolio
              </p>

              <h2 className="mt-1 text-xl font-semibold">
                Recent Projects
              </h2>
            </div>

            <Link
              href="/admin/proyek"
              className="text-xs font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              View all →
            </Link>

          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">

            {latestProjects.length > 0 ? (
              <div className="divide-y divide-white/5">

                {latestProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex flex-col gap-4 p-5 transition hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/5 font-mono text-xs text-cyan-400">
                        {project.no}
                      </div>

                      <div>
                        <h3 className="font-medium text-white">
                          {project.title}
                        </h3>

                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">

                          <span>
                            {project.category || "Uncategorized"}
                          </span>

                          <span className="text-slate-700">
                            •
                          </span>

                          <span>
                            {project.year || "-"}
                          </span>

                          <span className="text-slate-700">
                            •
                          </span>

                          <span className="font-mono">
                            /{project.slug}
                          </span>

                        </div>
                      </div>

                    </div>

                    <Link
                      href={`/admin/proyek/edit/${project.id}`}
                      className="w-full rounded-lg border border-white/10 px-4 py-2 text-center text-xs text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300 sm:w-auto"
                    >
                      Edit
                    </Link>

                  </div>
                ))}

              </div>
            ) : (
              <div className="p-10 text-center">

                <p className="text-sm text-slate-400">
                  No projects found.
                </p>

                <Link
                  href="/admin/proyek"
                  className="mt-4 inline-block text-xs text-cyan-400 hover:text-cyan-300"
                >
                  Add your first project →
                </Link>

              </div>
            )}

          </div>

        </section>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-white/5 pt-6 text-center">

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
            RENO ADMIN PANEL · SUPABASE
          </p>

        </footer>

      </div>
    </main>
  );
}