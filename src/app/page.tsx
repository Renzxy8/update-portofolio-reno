"use client";

import { motion } from "framer-motion";

import Home from "@/features/portfolio/components/Home";
import About from "@/features/portfolio/components/About";
import Projects from "@/features/projects/components/Projects";
import Skills from "@/features/portfolio/components/Skills";
import Contact from "@/features/portfolio/components/Contact";

const animationProps = {
  initial: {
    opacity: 0,
    y: 25,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: false,
    amount: 0.15,
  },

  transition: {
    duration: 0.6,
    ease: "easeOut" as const,
  },
};

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-10%] top-[-10%] h-125 w-[5w-125nded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-[-10%] top-[20%] h-125 w-[5w-125nded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[30%] h-125 w-125 rounded-full bg-cyan-500/5 blur-[120px]" />

      </div>

      {/* HOME */}
      <motion.section {...animationProps}>
        <Home />
      </motion.section>

      {/* ABOUT */}
      <motion.section {...animationProps}>
        <About />
      </motion.section>

      {/* PROJECTS */}
      <motion.section {...animationProps}>
        <Projects />
      </motion.section>

      {/* SKILLS */}
      <motion.section {...animationProps}>
        <Skills />
      </motion.section>

      {/* CONTACT */}
      <motion.section {...animationProps}>
        <Contact />
      </motion.section>

    </main>
  );
}