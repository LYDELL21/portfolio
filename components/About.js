// components/About.js
"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section
      id="about"
      className={`max-w-6xl mx-auto py-20 px-6 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column: Personal Statement */}
        <div className="flex-1 rounded-2xl bg-gray-900/70 backdrop-blur-md border border-gray-800 shadow-xl p-8 text-gray-300">
          <p className="mb-4">
            I am <span className="text-emerald-400 font-semibold">Lydell Shayne Crasto</span>, an MCA student with a passion for creating impactful digital experiences. With a strong foundation in programming, web development, and networking, I thrive at the intersection of technology and creativity. Over the years, I have gained hands-on experience in software development, game design, and UI/UX projects, complemented by practical internships in networking and technical training.
          </p>
          <p className="mb-4">
            I enjoy solving complex problems, collaborating with teams, and continuously learning new tools and technologies. Whether it’s developing interactive applications, designing intuitive interfaces, or building engaging gaming environments, I approach every project with curiosity, precision, and dedication. Outside of coding, I am an avid gamer, football enthusiast, and creative designer, which fuels my ability to think both analytically and creatively.
          </p>
          <p className="mb-4">
            I aim to contribute to innovative projects that challenge me to grow while delivering real-world solutions that make a difference.
          </p>
        </div>

        {/* Right Column: CV Highlights */}
        <div className="flex-1 rounded-2xl bg-gray-900/70 backdrop-blur-md border border-gray-800 shadow-xl p-8 text-gray-300">
          {/* Education */}
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Education</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Master of Computer Applications (MCA), St. Aloysius University (2024–2026)</li>
            <li>Bachelor of Computer Applications (BCA), Rosary College (2021–2024)</li>
            <li>Computer Science Stream, Rosary Higher Secondary School (2019–2021)</li>
          </ul>

          {/* Technical Skills */}
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Technical Skills</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Languages: C, C++, Python, Java, C#</li>
            <li>Web: HTML, CSS, JavaScript, .NET, Laravel, Bootstrap</li>
            <li>Databases: SQL, MongoDB, Firebase</li>
            <li>Tools: GitHub, Adobe XD, Figma, Unreal Engine, Unity</li>
            <li>Networking: LAN setup, cable crimping, troubleshooting</li>
          </ul>

          {/* Professional Experience */}
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Experience</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-semibold">Networking Intern:</span> RITSNET, Margao (Dec 2022 – Jan 2023) – LAN setup, cable crimping, desktop troubleshooting.</li>
            <li><span className="font-semibold">Assistant Trainer (Technical):</span> DigiCom, Margao (May 2022 – June 2023) – Trained students in C, C++, MS Office, and mentored technical skills.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
