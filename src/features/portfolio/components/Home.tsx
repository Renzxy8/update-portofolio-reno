"use client";

import Image from "next/image";
import Link from "next/link";

function Corner({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br";
}) {
  const positionClass = {
    tl: "left-0 top-0 border-l border-t",
    tr: "right-0 top-0 border-r border-t",
    bl: "bottom-0 left-0 border-b border-l",
    br: "bottom-0 right-0 border-b border-r",
  }[position];

  return (
    <span
      className={`absolute h-3 w-3 border-cyan-400/50 ${positionClass}`}
    />
  );
}

function Arrow() {
  return (
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  );
}

export default function Home() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">

        {/* TEXT */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[.05] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

            <span className="font-mono text-[9px] uppercase tracking-[.25em] text-cyan-300">
              UI/UX · CODE · DIGITAL
            </span>
          </div>

          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[.95] tracking-tight sm:text-7xl lg:text-8xl">
            Turning ideas
            <br />
            into{" "}
            <span className="neon-text text-cyan-300">
              creations.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Hello, I&apos;m{" "}
            <span className="text-white">
              Reno Wahyu Saputra
            </span>
            , an 11th-grade Software Engineering student at
            SMKN 1 Pasuruan. I&apos;m interested in technology,
            design, and website development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#karya"
              className="group inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
              <Arrow />
            </Link>

            <Link
              href="#kontak"
              className="inline-flex items-center rounded-xl border border-white/10 bg-white/[.03] px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white/70 transition hover:border-cyan-400/30 hover:text-cyan-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="relative aspect-square overflow-hidden rounded-[32px] border border-white/10 bg-white/[.03] p-3 shadow-2xl">

            <Corner position="tl" />
            <Corner position="tr" />
            <Corner position="bl" />
            <Corner position="br" />

            <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-slate-900">

              <Image
                src="/renoo.jpeg"
                alt="Reno Wahyu profile photo"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-mono text-[9px] uppercase tracking-[.3em] text-cyan-300">
                  Student Portfolio
                </p>

                <p className="mt-2 text-xl font-semibold">
                  Reno Wahyu
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}