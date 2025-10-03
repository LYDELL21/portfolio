"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 
                 rounded-2xl p-5 shadow-lg backdrop-blur-lg border border-gray-700/60 
                 hover:border-emerald-400/60 group"
    >
      {/* Project Image */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={p.image}
          alt={p.title}
          width={400}
          height={200}
          className="w-full h-40 sm:h-48 object-cover rounded-lg transform group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Badge (if exists) */}
      {p.badge && (
        <motion.span
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
          className="inline-block mt-3 px-3 py-1 text-xs font-semibold text-black bg-emerald-400 rounded-full"
        >
          {p.badge}
        </motion.span>
      )}

      {/* Project Title */}
      <h3 className="mt-3 text-xl font-bold text-white">{p.title}</h3>

      {/* Short Description */}
      <p className="text-sm text-gray-400 mt-2">{p.short}</p>

      {/* Tech Stack */}
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((tech, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-700/50 text-gray-200 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer Link */}
      <div className="mt-4 flex justify-end">
        <Link
          href={`/projects/${p.slug}`}
          aria-label={`View case study for ${p.title}`}
          className="text-emerald-400 text-sm font-medium hover:underline"
        >
          See Project →
        </Link>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 
                      bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 blur-xl 
                      transition duration-500" />
    </motion.div>
  );
}
