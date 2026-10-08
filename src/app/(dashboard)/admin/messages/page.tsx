import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase-server";

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient();

  // =========================================
  // AMBIL JUMLAH PESAN
  // =========================================

  const {
    count: messageCount,
    error: messageError,
  } = await supabase
    .from("contact_messages")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (messageError) {
    console.error(
      "Gagal mengambil jumlah pesan:",
      messageError.message
    );
  }

  // =========================================
  // AMBIL JUMLAH PROJECT
  // =========================================

  const {
    count: projectCount,
    error: projectError,
  } = await supabase
    .from("projects")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (projectError) {
    console.error(
      "Gagal mengambil jumlah project:",
      projectError.message
    );
  }

  // =========================================
  // STATUS DATABASE
  // =========================================

  const databaseConnected =
    !messageError && !projectError;

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mb-10">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400">
            Admin Dashboard
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome back, Reno 👋
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Kelola project portfolio dan pesan yang
            dikirim melalui website kamu.
          </p>
        </div>

        {/* =========================================
            STAT CARDS
        ========================================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* PROJECTS */}

          <Link
            href="/admin/proyek"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-violet-400/30 hover:bg-white/[0.05]"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Projects
                </p>

                <p className="mt-3 text-4xl font-bold text-white">
                  {projectCount ?? 0}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/5 text-violet-300">
                <span className="text-lg">
                  ◈
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Total projects in portfolio
            </p>

            <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-violet-300 opacity-0 transition group-hover:opacity-100">
              Manage Projects →
            </p>
          </Link>

          {/* MESSAGES */}

          <Link
            href="/admin/messages"
            className="group rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-6 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-500">
                  Messages
                </p>

                <p className="mt-3 text-4xl font-bold text-white">
                  {messageCount ?? 0}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                <span className="text-lg">
                  ✉
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Contact messages received
            </p>

            <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-cyan-300 opacity-0 transition group-hover:opacity-100">
              View Messages →
            </p>
          </Link>

          {/* DATABASE */}

          <div
            className={`rounded-2xl border p-6 ${
              databaseConnected
                ? "border-emerald-400/10 bg-emerald-400/[0.03]"
                : "border-red-400/10 bg-red-400/[0.03]"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p
                  className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                    databaseConnected
                      ? "text-emerald-500"
                      : "text-red-400"
                  }`}
                >
                  Database
                </p>

                <p
                  className={`mt-3 text-xl font-bold ${
                    databaseConnected
                      ? "text-emerald-300"
                      : "text-red-300"
                  }`}
                >
                  {databaseConnected
                    ? "Connected"
                    : "Error"}
                </p>
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                  databaseConnected
                    ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-300"
                    : "border-red-400/20 bg-red-400/5 text-red-300"
                }`}
              >
                <span className="text-lg">
                  {databaseConnected ? "✓" : "!"}
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Supabase database connection
            </p>
          </div>
        </div>

        {/* =========================================
            ERROR INFORMATION
        ========================================= */}

        {(messageError || projectError) && (
          <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-400/[0.03] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-400">
              Database Error
            </p>

            {messageError && (
              <p className="mt-3 text-sm text-red-300">
                Messages: {messageError.message}
              </p>
            )}

            {projectError && (
              <p className="mt-2 text-sm text-red-300">
                Projects: {projectError.message}
              </p>
            )}
          </div>
        )}

        {/* =========================================
            QUICK ACTIONS
        ========================================= */}

        <section className="mt-10">
          <div className="mb-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
              Quick Actions
            </p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              Manage Portfolio
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {/* PROJECT MANAGEMENT */}

            <Link
              href="/admin/proyek"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-400/30 hover:bg-white/[0.05]"
            >
              <p className="font-semibold text-white">
                Project Management
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Tambah, edit, dan hapus project
                portfolio.
              </p>

              <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-violet-300">
                Open Projects →
              </p>
            </Link>

            {/* MESSAGE MANAGEMENT */}

            <Link
              href="/admin/messages"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <p className="font-semibold text-white">
                Contact Messages
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Lihat pesan yang dikirim pengunjung
                melalui contact form.
              </p>

              <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-cyan-300">
                Open Messages →
              </p>
            </Link>
          </div>
        </section>

        {/* =========================================
            SYSTEM INFORMATION
        ========================================= */}

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                System
              </p>

              <h2 className="mt-2 font-semibold text-white">
                Portfolio Management System
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Next.js + Supabase + Resend
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  databaseConnected
                    ? "bg-emerald-400"
                    : "bg-red-400"
                }`}
              />

              <span
                className={`font-mono text-[10px] uppercase tracking-wider ${
                  databaseConnected
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {databaseConnected
                  ? "Online"
                  : "Database Error"}
              </span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}