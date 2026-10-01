import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

async function loginAction(formData: FormData) {
  "use server";

  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // Jika login gagal
  if (error) {
    redirect("/admin/login?error=Invalid+email+or+password");
  }

  // Jika login berhasil → masuk Dashboard
  redirect("/admin");
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-4">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-3xl" />

        <div className="absolute left-[15%] top-[20%] h-40 w-40 rounded-full bg-cyan-400/[0.03] blur-3xl" />

        <div className="absolute bottom-[15%] right-[15%] h-52 w-52 rounded-full bg-violet-500/[0.03] blur-3xl" />

      </div>

      <div className="relative z-10 w-full max-w-md">

        {/* LOGIN CARD */}
        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-white/[0.025] p-8 shadow-[0_0_60px_rgba(34,211,238,0.04)] backdrop-blur-xl">

          {/* TOP CYAN LINE */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          {/* CORNER */}
          <div className="absolute right-0 top-0 h-16 w-16 border-r border-t border-cyan-400/10" />

          {/* BACK BUTTON */}
          <Link
            href="/"
            className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-widest text-white/40 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
          >
            <span className="text-sm leading-none">
              ←
            </span>

            <span>
              Back
            </span>
          </Link>

          {/* HEADER */}
          <div className="mb-8 mt-10 text-center">

            {/* LOGO */}
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] shadow-[0_0_25px_rgba(34,211,238,0.08)]">
              <span className="font-mono text-xl font-semibold text-cyan-300">
                R
              </span>
            </div>

            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-cyan-400/50">
              Reno Wahyu / Portfolio
            </p>

            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Admin Login
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Sign in to manage your portfolio projects.
            </p>

          </div>

          {/* ERROR MESSAGE */}
          {params.error && (
            <div className="mb-5 rounded-xl border border-red-400/20 bg-red-400/[0.05] px-4 py-3">
              <p className="text-sm font-medium text-red-300">
                {params.error}
              </p>
            </div>
          )}

          {/* LOGIN FORM */}
          <form action={loginAction} className="space-y-5">

            {/* EMAIL */}
            <div>

              <label
                htmlFor="email"
                className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-white/40"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="admin@example.com"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white caret-cyan-300 outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-2 focus:ring-cyan-400/10"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label
                htmlFor="password"
                className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-white/40"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white caret-cyan-300 outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-2 focus:ring-cyan-400/10"
              />

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] px-5 py-3 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.12] hover:shadow-[0_0_25px_rgba(34,211,238,0.08)] active:scale-[0.98]"
            >

              <span className="relative z-10">
                Sign In
              </span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            </button>

          </form>

          {/* BOTTOM INFO */}
          <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-4">

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              Secure Access
            </span>

            <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-400/40">

              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />

              Online

            </span>

          </div>

        </div>

        {/* FOOTER */}
        <p className="mt-5 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
          Portfolio Admin Panel · 2026
        </p>

      </div>

    </main>
  );
}