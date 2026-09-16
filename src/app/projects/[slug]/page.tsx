import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="cyber-page min-h-screen px-6 py-16 sm:px-10 sm:py-24">

      <div className="mx-auto max-w-5xl">

        {/* BACK */}

        <Link
          href="/#karya"
          className="
            inline-flex
            items-center
            gap-2
            font-mono
            text-xs
            uppercase
            tracking-wider
            text-cyan-300
            transition
            hover:text-white
          "
        >
          ← Kembali ke Karya
        </Link>

        {/* PROJECT */}

        <div
          className="
            cyber-glass
            neon-border
            mt-8
            overflow-hidden
            rounded-[28px]
            p-3
            sm:p-5
          "
        >

          {/* IMAGE */}

          <div
            className="
              relative
              aspect-video
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/[.08]
              bg-slate-950
            "
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 1000px"
            />
          </div>

          {/* CONTENT */}

          <div className="px-2 pb-4 pt-8 sm:px-5 sm:pt-10">

            <p
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[.3em]
                text-cyan-300
              "
            >
              Project Detail
            </p>

            <div
              className="
                mt-3
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-start
                sm:justify-between
              "
            >

              <h1
                className="
                  font-display
                  text-4xl
                  font-semibold
                  tracking-tight
                  text-white
                  sm:text-6xl
                "
              >
                {project.title}
              </h1>

              <span
                className="
                  w-fit
                  rounded-full
                  border
                  border-white/10
                  bg-white/[.03]
                  px-3
                  py-1.5
                  font-mono
                  text-[10px]
                  text-white/40
                "
              >
                {project.year}
              </span>

            </div>

            {/* TAGS */}

            <div className="mt-6 flex flex-wrap gap-2">

              <span
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/[.05]
                  px-3
                  py-1.5
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-wider
                  text-cyan-300
                "
              >
                {project.category}
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[.03]
                  px-3
                  py-1.5
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-wider
                  text-white/40
                "
              >
                #{project.tags}
              </span>

            </div>

            {/* DESCRIPTION */}

            <section className="mt-10">

              <h2
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[.2em]
                  text-white/35
                "
              >
                Tentang Project
              </h2>

              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-8
                  text-slate-400
                  sm:text-base
                "
              >
                {project.description}
              </p>

            </section>

            {/* TOOLS */}

            <section className="mt-10">

              <h2
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[.2em]
                  text-white/35
                "
              >
                Tools & Technology
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">

                {project.tools.split(",").map((tool) => (
                  <span
                    key={tool}
                    className="
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[.03]
                      px-4
                      py-2
                      text-sm
                      text-slate-300
                    "
                  >
                    {tool.trim()}
                  </span>
                ))}

              </div>

            </section>

            {/* CLOSE / BACK */}

            <Link
              href="/#karya"
              className="
                mt-10
                block
                w-full
                rounded-xl
                bg-cyan-400
                px-5
                py-3.5
                text-center
                font-mono
                text-[10px]
                font-bold
                uppercase
                tracking-widest
                text-slate-950
                transition
                hover:bg-cyan-300
              "
            >
              Tutup Detail
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}