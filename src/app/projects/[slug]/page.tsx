import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase/public";

type Project = {
  id: string | number;
  slug: string;
  no: string;
  title: string;
  category: string;
  year: string | number;
  image: string;
  tags: string;
  tools: string;
  description: string;
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// =====================================================
// GET PROJECT
// Can search by SLUG or ID
// =====================================================

async function getProject(
  value: string
): Promise<Project | null> {

  // ---------------------------------------------------
  // 1. Try searching by SLUG
  // ---------------------------------------------------

  const { data: slugProject, error: slugError } =
    await supabase
      .from("projects")
      .select(
        "id, slug, no, title, category, year, image, tags, tools, description"
      )
      .eq("slug", value)
      .maybeSingle();

  if (slugProject) {
    return slugProject;
  }

  // ---------------------------------------------------
  // 2. If not found, try searching by ID
  // ---------------------------------------------------

  const { data: idProject, error: idError } =
    await supabase
      .from("projects")
      .select(
        "id, slug, no, title, category, year, image, tags, tools, description"
      )
      .eq("id", value)
      .maybeSingle();

  if (idProject) {
    return idProject;
  }

  // ---------------------------------------------------
  // ERROR
  // ---------------------------------------------------

  if (slugError) {
    console.error("Slug query error:", slugError);
  }

  if (idError) {
    console.error("ID query error:", idError);
  }

  return null;
}

// =====================================================
// PROJECT DETAIL PAGE
// =====================================================

export default async function ProjectDetail({
  params,
}: PageProps) {

  const { slug } = await params;

  const project = await getProject(slug);

  // If project is not found
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-10%] top-[-10%] h-125 w-125 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-[-10%] top-[20%] h-125 w-125 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[30%] h-100 w-100 rounded-full bg-cyan-500/5 blur-[120px]" />

      </div>

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="sticky top-0 z-50 border-b border-white/6 bg-slate-950/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">

          {/* LOGO */}

          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight"
          >
            Reno<span className="text-cyan-400">.</span>
          </Link>

          {/* BACK */}

          <Link
            href="/#karya"
            className="font-mono text-[10px] uppercase tracking-widest text-white/50 transition hover:text-cyan-300"
          >
            ← Back to Projects
          </Link>

        </div>

      </header>

      {/* =================================================
          CONTENT
      ================================================= */}

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* =================================================
              BREADCRUMB
          ================================================= */}

          <div className="mb-10 flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-white/30">

            <Link
              href="/"
              className="transition hover:text-cyan-300"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/#karya"
              className="transition hover:text-cyan-300"
            >
              Projects
            </Link>

            <span>/</span>

            <span className="text-cyan-300">
              {project.slug}
            </span>

          </div>

          {/* =================================================
              PROJECT HEADER
          ================================================= */}

          <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">

            {/* =================================================
                PROJECT IMAGE
            ================================================= */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/2 p-3">

              <div className="relative aspect-video overflow-hidden rounded-[20px] bg-slate-900">

                {project.image ? (

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />

                ) : (

                  <div className="flex h-full items-center justify-center">

                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                      No Image
                    </span>

                  </div>

                )}

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />

                {/* PROJECT NUMBER */}

                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 font-mono text-[9px] text-white/60 backdrop-blur">

                  {project.no}

                </span>

              </div>

            </div>

            {/* =================================================
                PROJECT INFO
            ================================================= */}

            <div>

              {/* CATEGORY */}

              {project.category && (

                <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">

                  {project.category}

                </p>

              )}

              {/* TITLE */}

              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">

                {project.title}

              </h1>

              {/* META */}

              <div className="mt-6 flex flex-wrap gap-2">

                {/* YEAR */}

                {project.year && (

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 font-mono text-[9px] text-cyan-300">

                    {project.year}

                  </span>

                )}

                {/* TAGS */}

                {project.tags && (

                  <span className="rounded-full border border-white/10 bg-white/3 px-4 py-2 font-mono text-[9px] text-white/50">

                    #{project.tags}

                  </span>

                )}

              </div>

              {/* DESCRIPTION */}

              {project.description && (

                <p className="mt-8 text-base leading-8 text-slate-400">

                  {project.description}

                </p>

              )}

              {/* =================================================
                  TOOLS
              ================================================= */}

              {project.tools && (

                <div className="mt-8">

                  <p className="font-mono text-[9px] uppercase tracking-[.25em] text-white/30">

                    Tools & Technology

                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {project.tools
                      .split(",")
                      .map((tool) => tool.trim())
                      .filter(Boolean)
                      .map((tool) => (

                        <span
                          key={tool}
                          className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 font-mono text-[9px] text-white/50"
                        >
                          {tool}
                        </span>

                      ))}

                  </div>

                </div>

              )}

            </div>

          </div>

          {/* =================================================
              DETAIL SECTION
          ================================================= */}

          <div className="mt-20 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">

            {/* LEFT */}

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">

                Project Details

              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold">

                About the Project

              </h2>

            </div>

            {/* RIGHT */}

            <div className="rounded-2xl border border-white/8 bg-white/2 p-6 sm:p-8">

              {/* DESCRIPTION */}

              {project.description && (

                <p className="text-base leading-8 text-slate-400">

                  {project.description}

                </p>

              )}

              {/* PROJECT DATA */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {/* CATEGORY */}

                <div className="rounded-xl border border-white/6 bg-white/2 p-5">

                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">

                    Category

                  </p>

                  <p className="mt-2 text-sm font-medium text-white">

                    {project.category || "-"}

                  </p>

                </div>

                {/* YEAR */}

                <div className="rounded-xl border border-white/6 bg-white/2 p-5">

                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">

                    Year

                  </p>

                  <p className="mt-2 text-sm font-medium text-white">

                    {project.year || "-"}

                  </p>

                </div>

                {/* TECHNOLOGY */}

                <div className="rounded-xl border border-white/6 bg-white/2 p-5">

                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">

                    Technology

                  </p>

                  <p className="mt-2 text-sm font-medium text-white">

                    {project.tools || "-"}

                  </p>

                </div>

                {/* SLUG */}

                <div className="rounded-xl border border-white/6 bg-white/2 p-5">

                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">

                    Slug

                  </p>

                  <p className="mt-2 break-all text-sm font-medium text-white">

                    {project.slug || "-"}

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              BACK BUTTON
          ================================================= */}

          <div className="mt-16">

            <Link
              href="/#karya"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white/60 transition hover:border-cyan-400/30 hover:text-cyan-300"
            >

              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>

              Back to All Projects

            </Link>

          </div>

        </div>

      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="border-t border-white/6 px-6 py-8 sm:px-10 lg:px-16">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">

            © 2026 Reno Wahyu Saputra

          </p>

          <p className="font-mono text-[9px] uppercase tracking-widest text-white/20">

            Built with Next.js · Supabase

          </p>

        </div>

      </footer>

    </main>
  );
}