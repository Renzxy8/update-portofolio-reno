import { createSupabaseServerClient } from "@/lib/supabase/server";
import Link from "next/link";
import ImageUpload from "@/features/projects/components/ImageUpload";

async function createProject(formData: FormData) {
  "use server";

  const supabase = await createSupabaseServerClient();

  // =========================
  // GET FORM DATA
  // =========================

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

  // =========================
  // IMAGE UPLOAD
  // =========================

  const imageFile = formData.get("image") as File | null;

  let image = "";

  if (imageFile && imageFile.size > 0) {
    const fileExt = imageFile.name.split(".").pop();

    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("projects")
      .upload(fileName, imageFile, {
        contentType: imageFile.type,
        upsert: false,
      });

    if (uploadError) {
      throw new Error(
        `Image upload failed: ${uploadError.message}`
      );
    }

    const { data: publicUrlData } = supabase.storage
      .from("projects")
      .getPublicUrl(fileName);

    image = publicUrlData.publicUrl;
  }

  // =========================
  // GET LAST PROJECT NUMBER
  // =========================

  const {
    data: lastProject,
    error: lastProjectError,
  } = await supabase
    .from("projects")
    .select("no")
    .order("no", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (lastProjectError) {
    throw new Error(
      `Failed to get project number: ${lastProjectError.message}`
    );
  }

  // =========================
  // GENERATE NEXT NUMBER
  // =========================

  const nextNo = String(
    Number(lastProject?.no ?? "0") + 1
  ).padStart(2, "0");

  // =========================
  // SAVE PROJECT
  // =========================

  const { error } = await supabase
    .from("projects")
    .insert({
      no: nextNo,
      title,
      slug,
      category,
      tags,
      tools,
      year,
      image,
      description,
    });

  if (error) {
    throw new Error(
      `Failed to save project: ${error.message}`
    );
  }
}

// =========================
// ADMIN PROJECT PAGE
// =========================

export default async function AdminProjectsPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: projects,
    error,
  } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  // =========================
  // DATABASE ERROR
  // =========================

  if (error) {
    return (
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-2xl border border-red-400/20 bg-red-400/[0.05] p-6 text-red-300">
          <h1 className="mb-2 text-lg font-semibold">
            Failed to Load Projects
          </h1>

          <p className="text-sm text-red-300/70">
            {error.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-cyan-400/50">
          01 / Admin
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Project Management
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
          Manage your portfolio projects through Supabase.
        </p>
      </div>

      {/* =========================
          ADMIN NAVIGATION
      ========================= */}

      <div className="flex flex-wrap gap-3">

        {/* DASHBOARD */}

        <Link
          href="/admin"
          className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
        >
          Dashboard
        </Link>

        {/* PROJECTS - ACTIVE */}

        <Link
          href="/admin/proyek"
          className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/[0.15]"
        >
          Projects
        </Link>

        {/* VIEW PORTFOLIO */}

        <Link
          href="/"
          className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.05] hover:text-violet-300"
        >
          View Portfolio →
        </Link>

      </div>

      {/* =========================
          ADD PROJECT
      ========================= */}

      <section className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_0_40px_rgba(34,211,238,0.02)] backdrop-blur-xl sm:p-8">

        {/* TOP LINE */}

        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        {/* CORNER */}

        <div className="absolute right-0 top-0 h-16 w-16 border-r border-t border-cyan-400/10" />

        <div className="relative mb-7">

          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400/50">
            Create
          </p>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Add New Project
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Fill in the information below to add a new project.
          </p>

        </div>

        <form
          action={createProject}
          className="relative grid grid-cols-1 gap-5 md:grid-cols-2"
        >

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
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white caret-cyan-300 outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-2 focus:ring-cyan-400/10"
              placeholder="Enter project title"
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
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white caret-cyan-300 outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-2 focus:ring-cyan-400/10"
              placeholder="example-project"
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
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white caret-cyan-300 outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-2 focus:ring-cyan-400/10"
              placeholder="UI/UX"
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
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white caret-cyan-300 outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-2 focus:ring-cyan-400/10"
              placeholder="React, Figma, Supabase"
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
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white caret-cyan-300 outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-2 focus:ring-cyan-400/10"
              placeholder="Figma, VS Code"
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
              defaultValue={new Date().getFullYear()}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white caret-cyan-300 outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-2 focus:ring-cyan-400/10"
            />

          </div>

          {/* IMAGE */}

          <div>
            <ImageUpload />
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
              rows={5}
              className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white caret-cyan-300 outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-2 focus:ring-cyan-400/10"
              placeholder="Write a short description about this project..."
            />

          </div>

          {/* SUBMIT */}

          <div className="md:col-span-2">

            <button
              type="submit"
              className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] px-6 py-3 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.12] hover:shadow-[0_0_25px_rgba(34,211,238,0.08)] active:scale-[0.98]"
            >
              <span className="relative z-10">
                + Add Project
              </span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>

          </div>

        </form>

      </section>

      {/* =========================
          PROJECT LIST
      ========================= */}

      <section className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_0_40px_rgba(34,211,238,0.02)] backdrop-blur-xl sm:p-8">

        {/* TOP LINE */}

        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        <div className="relative mb-7">

          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400/50">
            Database
          </p>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Project List
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            View and manage all portfolio projects.
          </p>

        </div>

        {/* TABLE */}

        <div className="relative overflow-x-auto rounded-xl border border-white/[0.06]">

          <table className="w-full min-w-[700px] text-sm">

            <thead className="bg-white/[0.03]">

              <tr className="border-b border-white/[0.06] text-left">

                <th className="px-4 py-4 font-mono text-[9px] uppercase tracking-wider text-white/35">
                  No.
                </th>

                <th className="px-4 py-4 font-mono text-[9px] uppercase tracking-wider text-white/35">
                  Title
                </th>

                <th className="px-4 py-4 font-mono text-[9px] uppercase tracking-wider text-white/35">
                  Category
                </th>

                <th className="px-4 py-4 font-mono text-[9px] uppercase tracking-wider text-white/35">
                  Year
                </th>

                <th className="px-4 py-4 font-mono text-[9px] uppercase tracking-wider text-white/35">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-white/[0.05]">

              {projects?.map((project) => (

                <tr
                  key={project.id}
                  className="transition-colors duration-300 hover:bg-cyan-400/[0.025]"
                >

                  <td className="px-4 py-4 font-mono text-xs text-white/30">
                    {project.no}
                  </td>

                  <td className="px-4 py-4">

                    <span className="font-medium text-slate-200">
                      {project.title}
                    </span>

                    <span className="mt-1 block font-mono text-[9px] text-white/20">
                      /{project.slug}
                    </span>

                  </td>

                  <td className="px-4 py-4">

                    {project.category ? (
                      <span className="inline-flex rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-cyan-300/70">
                        {project.category}
                      </span>
                    ) : (
                      <span className="text-white/20">
                        -
                      </span>
                    )}

                  </td>

                  <td className="px-4 py-4 font-mono text-xs text-white/40">
                    {project.year || "-"}
                  </td>

                  <td className="px-4 py-4">

                    <div className="flex flex-wrap gap-2">

                      <Link
                        href={`/admin/proyek/edit/${project.id}`}
                        className="rounded-lg border border-amber-400/15 bg-amber-400/[0.05] px-3 py-1.5 text-xs font-medium text-amber-300 transition hover:border-amber-400/30 hover:bg-amber-400/[0.1]"
                      >
                        Edit
                      </Link>

                      <Link
                        href={`/admin/proyek/hapus/${project.id}`}
                        className="rounded-lg border border-red-400/15 bg-red-400/[0.05] px-3 py-1.5 text-xs font-medium text-red-300 transition hover:border-red-400/30 hover:bg-red-400/[0.1]"
                      >
                        Delete
                      </Link>

                    </div>

                  </td>

                </tr>

              ))}

              {(!projects || projects.length === 0) && (

                <tr>

                  <td
                    colSpan={5}
                    className="px-4 py-12 text-center"
                  >

                    <p className="font-mono text-[10px] uppercase tracking-wider text-white/20">
                      No projects found
                    </p>

                    <p className="mt-2 text-sm text-slate-600">
                      Add your first portfolio project above.
                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </section>

    </div>
  );
}