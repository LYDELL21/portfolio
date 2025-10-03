"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono font-bold text-lg text-black"
        >
          Lydell Crasto
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 font-mono text-sm">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black hover:opacity-70 transition"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="/ly.pdf"
            download="Lydell-Crasto-Resume.pdf"
            className="ml-4 px-4 py-2 rounded-lg font-mono bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:shadow-lg hover:shadow-gray-500/30 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 flex flex-col items-center py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black hover:opacity-70 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/ly.pdf"
            download="Lydell-Crasto-Resume.pdf"
            className="px-4 py-2 rounded-lg font-mono bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:shadow-lg hover:shadow-gray-500/30 transition"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
