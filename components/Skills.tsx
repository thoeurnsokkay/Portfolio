"use client";

import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string[];
  icon: string;
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const skills: Skill[] = [
    { name: "React", level: 75, category: ["All", "Frontend"], icon: "⚛️" },
    { name: "Next.js", level: 80, category: ["All", "Frontend"], icon: "▲" },
    { name: "JS", level: 85, category: ["All", "Language"], icon: "JS" },
    { name: "HTML", level: 95, category: ["All", "Frontend"], icon: "HTML" },
    { name: "CSS", level: 90, category: ["All", "Frontend"], icon: "CSS" },
    { name: "Tailwind", level: 83, category: ["All", "Framework"], icon: "🌊" },
    { name: "BootStrap", level: 80, category: ["All", "Framework"], icon: "B" },
    { name: "Spring", level: 70, category: ["All", "Backend"], icon: "🍃" },
  ];

  const filters = ["All", "Frontend", "Backend", "Language", "Framework"];

  const filteredSkills = skills.filter((skill) =>
    skill.category.includes(activeFilter)
  );

  return (
    <section
      id="skills"
      className="min-h-screen px-4 relative overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-center"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: "2px",
              height: "2px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 z-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      {/* Filter Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 z-20 max-w-2xl px-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 text-xs font-bold rounded-full transition-all duration-300 border ${
              activeFilter === filter
                ? "bg-cyan-500 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                : "bg-slate-900/50 border-slate-700 text-gray-400 hover:border-cyan-500/50 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* --- Circular Skills Display (The Fix) --- */}
      <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">
        
        {/* Central Core */}
        <div className="absolute z-30 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-slate-900/90 border border-cyan-500/50 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)] backdrop-blur-xl">
          <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-widest uppercase text-center px-2">
            {activeFilter}
          </span>
        </div>

        {/* Orbit Path - Static background circle */}
        <div className="absolute w-[80%] h-[80%] rounded-full border border-slate-800/50 pointer-events-none"></div>

        {/* Skill Nodes Container - Rotates perfectly around the center */}
        <div className="absolute w-full h-full animate-rotate-slow flex items-center justify-center" style={{ transformOrigin: 'center' }}>
          {filteredSkills.map((skill, index) => {
            const angle = (index / filteredSkills.length) * 360;
            return (
              <div
                key={skill.name}
                className="absolute"
                style={{
                  transform: `rotate(${angle}deg) translateY(clamp(-220px, -20vw, -130px)) rotate(-${angle}deg)`,
                }}
              >
                {/* Individual Skill Card - Stay upright with reverse spin */}
                <div className="animate-reverse-spin mt-9">
                  <div className="glass-card w-16 h-16 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center p-2 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:scale-110 shadow-xl bg-slate-900/60 backdrop-blur-md group cursor-pointer">
                    <span className="text-xl sm:text-2xl mb-1 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-gray-200 font-bold truncate w-full text-center">
                      {skill.name}
                    </span>
                    
                    <div className="w-8 sm:w-12 bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}