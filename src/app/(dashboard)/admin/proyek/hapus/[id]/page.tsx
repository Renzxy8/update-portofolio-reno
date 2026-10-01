import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function deleteProject(formData: FormData) {
  "use server";

  const id = String(formData.get("id") || "");

  const supabase = await createSupabaseServerClient();

  // Ambil data project terlebih dahulu
  const { data: project, error: getError } = await supabase
    .from("projects")
    .select("id, title, image")
    .eq("id", id)
    .single();

  if (getError || !project) {
    throw new Error(
      getError?.message || "Project tidak ditemukan."
    );
  }

  // Hapus data dari database
  const { error: deleteError } = await supabase
    .from("projects")
    .delete()
    .eq("id", id);

  if (deleteError) {
    throw new Error(deleteError.message);
  }

  // Kembali ke halaman project
  redirect("/admin/proyek");
}

export default async function DeleteProjectPage({ params }: Props) {
  const { id } = await params;

  const supabase = await createSupabaseServerClient();

  const { data: project, error } = await supabase
    .from("projects")
    .select("id, no, title, category")
    .eq("id", id)
    .single();

  if (error || !project) {
    return (
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-2xl border border-red-400/20 bg-red-400/[0.05] p-6 text-red-300">
          <h1 className="text-lg font-semibold">
            Project Not Found
          </h1>

          <p className="mt-2 text-sm text-red-300/70">
            {error?.message || "Project tidak ditemukan."}
          </p>

          <Link
            href="/admin/proyek"
            className="mt-5 inline-flex rounded-lg border border-cyan-400/20 px-4 py-2 text-sm text-cyan-300"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl">

      <div className="relative overflow-hidden rounded-2xl border border-red-400/20 bg-white/[0.025] p-8 backdrop-blur-xl">

        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />

        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-red-400/60">
          03 / Admin / Delete
        </p>

        <h1 className="mt-3 text-3xl font-semibold text-white">
          Delete Project
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          Are you sure you want to delete this project?
        </p>

        {/* PROJECT INFO */}

        <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.025] p-5">

          <p className="font-mono text-xs text-white/30">
            #{project.no}
          </p>

          <h2 className="mt-2 text-xl font-semibold text-white">
            {project.title}
          </h2>

          {project.category && (
            <p className="mt-2 text-sm text-cyan-300/60">
              {project.category}
            </p>
          )}

        </div>

        {/* ACTIONS */}

        <form
          action={deleteProject}
          className="mt-6 flex flex-wrap gap-3"
        >

          <input
            type="hidden"
            name="id"
            value={project.id}
          />

          <button
            type="submit"
            className="rounded-xl border border-red-400/20 bg-red-400/[0.08] px-6 py-3 text-sm font-semibold text-red-300 transition hover:border-red-400/40 hover:bg-red-400/[0.12]"
          >
            Delete Project
          </button>

          <Link
            href="/admin/proyek"
            className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06]"
          >
            Cancel
          </Link>

        </form>

      </div>
    </div>
  );
}