'use client';

import { Calendar, GraduationCap } from 'lucide-react';

interface Education {
  period: string;
  degree: string;
  institution: string;
  institutionShort: string;
  description: string;
  icon: string;
}

export default function Education() {
  const education: Education[] = [
    {
      period: 'Jan 2022 - Present',
      degree: 'Bachelor of Computer Science',
      institution: 'Royal University of Phnom Penh (RUPP)',
      institutionShort: 'RUPP',
      description: 'Comprehensive CS curriculum with focus on software engineering and systems.',
      icon: '🎓',
    },
    {
      period: 'Jan 12 - April 11, 2025',
      degree: 'Basic Course',
      institution: 'Korea Software HRD Center (KSHRD)',
      institutionShort: 'KSHRD',
      description: 'Fundamental software development skills and industry best practices regarding software development and IT operations.',
      icon: '⚙️',
    },
    {
      period: 'June 12 2026 - Present',
      degree: 'Scholarship Program with Full Stack Development',
      institution: 'Ant Training Center',
      institutionShort: 'KSHRD',
      description: 'Intensive full stack development training covering modern web technologies and best practices.',
      icon: '💻',
    },
  ];

  return (
    <section id="education" className="min-h-screen bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background with Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Added Star Background */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}

        <div className="floating-orb w-96 h-96 bg-blue-500/10 top-40 right-20 blur-[120px]" style={{animationDelay: '2s'}}></div>
        <div className="floating-orb w-64 h-64 bg-purple-500/10 bottom-20 left-10 blur-[100px]" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/4 left-1/3 w-20 h-20 border-2 border-purple-500/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold inline-block mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Education</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education Cards */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-white/5 backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {edu.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Period */}
                    <div className="flex items-center space-x-2 text-cyan-400 text-sm mb-2">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>

                    {/* Degree */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-cyan-400 font-semibold mb-3">
                      {edu.institution}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Illustration */}
          <div className="hidden lg:block">
            <div className="glass-card rounded-3xl p-8 h-full flex items-center justify-center border border-white/5 backdrop-blur-sm">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow blur-xl"></div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-3xl animate-float shadow-lg shadow-cyan-500/20" style={{animationDelay: '0s'}}>
                      📚
                    </div>
                    <div className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-3xl animate-float shadow-lg shadow-purple-500/20" style={{animationDelay: '1s'}}>
                      💡
                    </div>
                    <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-3xl animate-float shadow-lg shadow-green-500/20" style={{animationDelay: '2s'}}>
                      🚀
                    </div>
                    <div className="absolute bottom-10 right-20 w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center text-3xl animate-float shadow-lg shadow-yellow-500/20" style={{animationDelay: '0.5s'}}>
                      🎯
                    </div>

                    {/* Center icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-6xl shadow-2xl shadow-cyan-500/40">
                        🎓
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}