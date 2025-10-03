"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative text-center py-28 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_60%)]"></div>

      {/* Terminal-style intro */}
      <motion.p
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-sm text-green-400"
      >
        ➜ Hello, I’m
      </motion.p>

      {/* Name heading */}
      <motion.h1
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Lydell Shayne Crasto
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
      >
        🎓 MCA Student passionate about{" "}
        <span className="text-emerald-400 font-semibold">UI/UX design</span>,{" "}
        <span className="text-cyan-400 font-semibold">front-end development</span>, 
        and building engaging{" "}
        <span className="text-blue-400 font-semibold">digital experiences</span>.
        <br />
        💻 Skilled in{" "}
        <span className="text-emerald-400 font-semibold">Next.js</span>,{" "}
        <span className="text-cyan-400 font-semibold">Tailwind CSS</span>,{" "}
        <span className="text-blue-400 font-semibold">Framer Motion</span>,{" "}
        <span className="text-green-400 font-semibold">C/C++</span>,{" "}
        and{" "}
        <span className="text-green-400 font-semibold">Java</span>.
        <br />
        ⚡ Experienced in networking, technical training, and game development 
        using <span className="text-emerald-400 font-semibold">Unity</span> &{" "}
        <span className="text-cyan-400 font-semibold">Unreal Engine</span>.
      </motion.p>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-2 font-mono border border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
        >
          🚀 View Projects
        </a>
        <a
          href="/ly.pdf"
          download="Lydell-Crasto-Resume.pdf"
          className="px-6 py-2 font-mono bg-emerald-400 text-black rounded-lg font-semibold hover:bg-emerald-300 transition"
        >
          📄 Download Resume
        </a>
      </div>
    </header>
  );
}
