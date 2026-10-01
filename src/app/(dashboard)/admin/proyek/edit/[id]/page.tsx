import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function updateProject(formData: FormData) {
  "use server";

  const id = String(formData.get("id") || "");

  const title = String(formData.get("title") || "");
  const slug = String(formData.get("slug") || "");
  const category = String(formData.get("category") || "");
  const tags = String(formData.get("tags") || "");
  const tools = String(formData.get("tools") || "");

  const year = Number(
    formData.get("year") || new Date().getFullYear()
  );

  const description = String(
    formData.get("description") || ""
  );

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("projects")
    .update({
      title,
      slug,
      category,
      tags,
      tools,
      year,
      description,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/admin/proyek");
}

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params;

  const supabase = await createSupabaseServerClient();

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !project) {
    return (
      <div className="mx-auto w-full max-w-4xl">
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
    <div className="mx-auto w-full max-w-4xl space-y-8">

      {/* HEADER */}

      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-cyan-400/50">
          02 / Admin / Edit
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Edit Project
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Update project information.
        </p>
      </div>

      {/* FORM */}

      <section className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_0_40px_rgba(34,211,238,0.02)] backdrop-blur-xl sm:p-8">

        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <form
          action={updateProject}
          className="relative grid grid-cols-1 gap-5 md:grid-cols-2"
        >

          {/* ID */}

          <input
            type="hidden"
            name="id"
            value={project.id}
          />

          {/* TITLE */}

          <div className="md:col-span-2">
            <label
              htmlFor="title"
              className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-white/40"
            >
              Project Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              required
              defaultValue={project.title || ""}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/30"
            />
          </div>

          {/* SLUG */}

          <div>
            <label
              htmlFor="slug"
              className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-white/40"
            >
              Slug
            </label>

            <input
              id="slug"
              name="slug"
              type="text"
              required
              defaultValue={project.slug || ""}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/30"
            />
          </div>

          {/* CATEGORY */}

          <div>
            <label
              htmlFor="category"
              className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-white/40"
            >
              Category
            </label>

            <input
              id="category"
              name="category"
              type="text"
              defaultValue={project.category || ""}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/30"
            />
          </div>

          {/* TAGS */}

          <div>
            <label
              htmlFor="tags"
              className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-white/40"
            >
              Tags
            </label>

            <input
              id="tags"
              name="tags"
              type="text"
              defaultValue={project.tags || ""}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/30"
            />
          </div>

          {/* TOOLS */}

          <div>
            <label
              htmlFor="tools"
              className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-white/40"
            >
              Tools
            </label>

            <input
              id="tools"
              name="tools"
              type="text"
              defaultValue={project.tools || ""}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/30"
            />
          </div>

          {/* YEAR */}

          <div>
            <label
              htmlFor="year"
              className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-white/40"
            >
              Year
            </label>

            <input
              id="year"
              name="year"
              type="number"
              defaultValue={project.year || new Date().getFullYear()}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/30"
            />
          </div>

          {/* DESCRIPTION */}

          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-white/40"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              rows={6}
              defaultValue={project.description || ""}
              className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/30"
            />
          </div>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-3 md:col-span-2">

            <button
              type="submit"
              className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.12]"
            >
              Save Changes
            </button>

            <Link
              href="/admin/proyek"
              className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06]"
            >
              Cancel
            </Link>

          </div>

        </form>
      </section>
    </div>
  );
}