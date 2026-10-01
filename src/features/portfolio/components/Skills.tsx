const skills = [
  {
    title: "Programming",
    items: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Basic Python",
      "TailwindCSS",
    ],
  },
  {
    title: "UI/UX & Graphic Design",
    items: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Responsive Design",
    ],
  },
  {
    title: "Tools",
    items: [
      "VS Code",
      "NetBeans",
      "XAMPP",
      "GitHub",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Creative Thinking",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="keahlian"
      className="border-t border-white/[.06] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">

          <p className="font-mono text-[10px] uppercase tracking-[.3em] text-cyan-300">
            05 / Skills
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Skills
          </h2>

        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-2xl border border-white/[.08] bg-white/[.02] p-6"
            >

              <h3 className="text-lg font-semibold">
                {skill.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">

                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 font-mono text-[9px] text-white/50"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}