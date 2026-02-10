'use client';

import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  period: string;
  location: string;
  role: string;
  company: string;
  companyColor: string;
  description: string;
  technologies: string[];
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      period: '2025 - 2026',
      location: 'Phnom Penh, Cambodia',
      role: 'Testing / Front-End Developer',
      company: 'IT Center',
      companyColor: 'from-green-500 to-emerald-500',
      description: 'Learned and applied testing methodologies to ensure software quality, while also contributing to front-end development using modern JavaScript frameworks and responsive design principles.',
      technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      period: '2023 - 2024',
      location: 'Phnom Penh, Cambodia',
      role: 'Teacher',
      company: 'StartUp Community of Phnom Penh',
      companyColor: 'from-green-500 to-emerald-500',
      description: 'Teaching Mathematics for secondary school students',
      technologies: ['Jenkins', 'GitHub Actions', 'Argo CD', 'Docker', 'Kubernetes', 'Ansible', 'Prometheus', 'Grafana'],
    },
   
  ];

  return (
    <section id="experience" className="min-h-screen bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
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
        
        <div className="floating-orb w-96 h-96 bg-cyan-500/10 top-20 left-10 blur-[120px]" style={{animationDelay: '1.5s'}}></div>
        <div className="floating-orb w-64 h-64 bg-purple-500/10 bottom-40 right-20 blur-[100px]" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-cyan-500/20 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold inline-block mb-4 text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-8 top-8 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 transform -translate-x-1/2 z-10 shadow-lg shadow-cyan-500/50"></div>

              {/* Content Card */}
              <div className="md:ml-20 glass-card rounded-2xl p-6 md:p-8 hover:scale-[1.01] transition-all duration-300 border border-white/5 backdrop-blur-sm">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center space-x-3 text-sm text-cyan-400 mb-2 md:mb-0">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Role and Company */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {exp.role}
                </h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${exp.companyColor} bg-clip-text text-transparent mb-4`}>
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 text-xs font-medium bg-slate-800/80 text-cyan-400 rounded-full border border-cyan-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}