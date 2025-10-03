// components/Contact.js
"use client";

import { Mail, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="py-12 bg-gray-900/70 backdrop-blur-md border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center text-gray-300">
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Let&apos;s Connect
        </h3>

        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center text-gray-300">
          {/* Email */}
          <p className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <Mail className="w-5 h-5 text-emerald-400" />
            <a href="mailto:lydellcrasto10@gmail.com" className="underline">
              lydellcrasto10@gmail.com
            </a>
          </p>

          {/* LinkedIn */}
          <p className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Linkedin className="w-5 h-5 text-cyan-400" />
            <a
              href="https://linkedin.com/in/lydell-crasto-815a59311"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              linkedin.com/in/lydell-crasto-815a59311
            </a>
          </p>

          {/* Phone */}
          <p className="flex items-center gap-2 hover:text-green-400 transition-colors">
            <Phone className="w-5 h-5 text-green-400" />
            <span>+91 8956131844 / +91 8087260924</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
