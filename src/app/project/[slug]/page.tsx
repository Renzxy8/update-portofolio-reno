
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Project = {
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

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getProject(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from("projects")
    .select(
      "id, slug, no, title, category, year, image, tags, tools, description"
    )
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Supabase error:", error);
    return null;
  }

  return data;
}

export default async function ProjectDetail({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[.06] bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">

          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight"
          >
            Reno<span className="text-cyan-400">.</span>
          </Link>

          <Link
            href="/#karya"
            className="font-mono text-[10px] uppercase tracking-widest text-white/50 transition hover:text-cyan-300"
          >
            ← Kembali ke Karya
          </Link>

        </div>
      </header>

      {/* Content */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* Breadcrumb */}
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
              Karya
            </Link>

            <span>/</span>

            <span className="text-cyan-300">
              {project.slug}
            </span>
          </div>

          {/* Header */}
          <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">

            {/* Project Image */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[.02] p-3">

              <div className="relative aspect-video overflow-hidden rounded-[20px] bg-slate-900">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 font-mono text-[9px] text-white/60 backdrop-blur">
                  {project.no}
                </span>

              </div>
            </div>

            {/* Project Info */}
            <div>

              <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">
                {project.category}
              </p>

              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[.05] px-4 py-2 font-mono text-[9px] text-cyan-300">
                  {project.year}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2 font-mono text-[9px] text-white/50">
                  #{project.tags}
                </span>

              </div>

              <p className="mt-8 text-base leading-8 text-slate-400">
                {project.description}
              </p>

              <div className="mt-8">

                <p className="font-mono text-[9px] uppercase tracking-[.25em] text-white/30">
                  Tools & Technology
                </p>

                <div className="mt-3 flex flex-wrap gap-2">

                  {project.tools
                    .split(",")
                    .map((tool) => (
                      <span
                        key={tool.trim()}
                        className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 font-mono text-[9px] text-white/50"
                      >
                        {tool.trim()}
                      </span>
                    ))}

                </div>

              </div>

            </div>
          </div>

          {/* Detail Section */}
          <div className="mt-20 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">
                Project Details
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold">
                Tentang Project
              </h2>

            </div>

            <div className="rounded-2xl border border-white/[.08] bg-white/[.02] p-6 sm:p-8">

              <p className="text-base leading-8 text-slate-400">
                {project.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl border border-white/[.06] bg-white/[.02] p-5">

                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">
                    Kategori
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    {project.category}
                  </p>

                </div>

                <div className="rounded-xl border border-white/[.06] bg-white/[.02] p-5">

                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">
                    Tahun
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    {project.year}
                  </p>

                </div>

                <div className="rounded-xl border border-white/[.06] bg-white/[.02] p-5">

                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">
                    Teknologi
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    {project.tools}
                  </p>

                </div>

                <div className="rounded-xl border border-white/[.06] bg-white/[.02] p-5">

                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">
                    Slug
                  </p>

                  <p className="mt-2 break-all text-sm font-medium text-white">
                    {project.slug}
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* Back Button */}
          <div className="mt-16">

            <Link
              href="/#karya"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.03] px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white/60 transition hover:border-cyan-400/30 hover:text-cyan-300"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>

              Kembali ke semua project
            </Link>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[.06] px-6 py-8 sm:px-10 lg:px-16">

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
