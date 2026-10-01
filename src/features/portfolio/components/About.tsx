"use client";

const workflow = [
  {
    no: "01",
    title: "Understand",
    description:
      "Understanding the needs, goals, and problems that need to be solved.",
  },
  {
    no: "02",
    title: "Plan",
    description:
      "Creating the concept, structure, and workflow before developing the project.",
  },
  {
    no: "03",
    title: "Develop",
    description:
      "Turning concepts into designs or applications that can be used.",
  },
  {
    no: "04",
    title: "Test",
    description:
      "Checking the interface and functionality to make sure everything works properly.",
  },
  {
    no: "05",
    title: "Evaluate",
    description:
      "Evaluating and improving the project to achieve better results.",
  },
];

const experience = [
  {
    title: "RPL Learning Projects",
    place: "SMKN 1 Pasuruan",
    year: "2025 — Present",
    description:
      "Working on various learning projects related to programming, databases, UI/UX, and application development.",
  },
  {
    title: "UBIG Personal Projects",
    place: "Personal Project",
    year: "2025 — 2026",
    description:
      "Developing personal ideas and projects to improve skills in design, programming, and website development.",
  },
  {
    title: "UI/UX Design",
    place: "Personal Project",
    year: "2025 — 2026",
    description:
      "Creating various interface designs using Figma with a focus on simple, modern, and user-friendly experiences.",
  },
];

export default function About() {
  return (
    <>
      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="tentang"
        className="border-t border-white/[.06] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">
                01 / About
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                About Me
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-slate-300">
                I am a vocational high school student interested in
                technology, UI/UX design, and website development.
                I enjoy learning new things and turning ideas into
                projects that can be used.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-500">
                I am currently developing my skills in programming,
                interface design, databases, and modern web
                technologies through school assignments and
                personal projects.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          WORKFLOW
      ========================= */}

      <section className="border-t border-white/[.06] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">
              02 / Workflow
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              How I Work
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.08] md:grid-cols-5">

            {workflow.map((item) => (
              <div
                key={item.no}
                className="relative bg-slate-950 p-6"
              >
                <span className="font-mono text-[10px] text-cyan-300">
                  {item.no}
                </span>

                <h3 className="mt-8 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          EXPERIENCE
      ========================= */}

      <section className="border-t border-white/[.06] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">
                03 / Experience
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Experience
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
              My learning journey and projects that have helped me
              develop my skills in technology and design.
            </p>

          </div>

          <div className="relative">

            <div className="absolute left-[15px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent sm:block" />

            <div className="space-y-8">

              {experience.map((item, index) => (
                <div
                  key={`${item.title}-${item.year}`}
                  className="group relative sm:pl-12"
                >

                  <div className="absolute left-0 top-8 hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 sm:flex">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.8)] transition-all duration-300 group-hover:h-3 group-hover:w-3" />
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.02] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[.02] hover:shadow-[0_0_35px_rgba(34,211,238,.05)] sm:p-8">

                    <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="absolute right-0 top-0 h-10 w-10 border-r border-t border-cyan-400/10 transition-colors duration-300 group-hover:border-cyan-400/30" />

                    <div className="grid gap-6 lg:grid-cols-[120px_1fr_auto] lg:items-start">

                      <div className="flex items-start gap-4 lg:block">

                        <span className="font-mono text-3xl font-semibold tracking-tight text-white/[.08] transition-colors duration-300 group-hover:text-cyan-400/20">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="lg:mt-4">
                          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[.05] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-cyan-300">
                            {item.year}
                          </span>
                        </div>

                      </div>

                      <div>

                        <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200 sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/30">
                          {item.place}
                        </p>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                          {item.description}
                        </p>

                      </div>

                      <div className="hidden lg:flex lg:items-start">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/[.08] bg-white/[.02] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/30 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
                          Experience
                        </span>
                      </div>

                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/[.06] pt-4">

                      <span className="font-mono text-[8px] uppercase tracking-[.25em] text-white/20">
                        Reno Wahyu / Portfolio
                      </span>

                      <span className="font-mono text-[10px] text-cyan-400/30 transition-colors duration-300 group-hover:text-cyan-400/70">
                        +
                      </span>

                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>
    </>
  );
}