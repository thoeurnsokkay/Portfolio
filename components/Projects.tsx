'use client';

import { ExternalLink, Github, Star } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;
  category: string[];
  stars: number;
  views: number;
  liveUrl?: string;
  codeUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Online Exam Management System',
      description: 'It is a web-based application that allows educational institutions to create, manage, and conduct online exams securely and efficiently for students and teachers.',
      image: '/images/exam.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      featured: true,
      category: ['Full Stack', 'Frontend'],
      stars: 67,
      views: 20,
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Online Exam Management System Dashboard',
      description: 'It is a web-based application that allows educational institutions to create, manage, and conduct online exams securely and efficiently for students and teachers.',
      image: '/images/dashboard.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      featured: true,
      category: ['DevOps', 'Platform'],
      stars: 45,
      views: 100,
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Cellcard Project',
      description: 'Cellcard is a leading telecommunications company in Cambodia, providing mobile and internet services to millions of customers. The project involved developing and maintaining various applications and platforms to enhance customer experience and streamline operations.',
      image: '/images/cellcard.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      featured: true,
      category: ['Full Stack', 'Platform'],
      stars: 34,
      views: 75,
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'DevTech',
      description: 'DevTech is a project focused on news and document portal for student and teacher to share       knowledge and experience in software development and technology. It provides a platform for users to access the latest news, articles, and resources related to software development, programming languages, frameworks, and industry trends.',
      image: '/images/dev-tech.png',
      technologies: ['Vue', 'Bootstrap'],
      featured: false,
      category: ['DevOps'],
      stars: 28,
      views: 950,
      liveUrl: '#',
      codeUrl: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      
      {/* --- Background Stars & Orbs --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
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

        <div className="absolute w-80 h-80 bg-purple-500/10 top-20 right-1/4 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 bottom-10 left-10 blur-[150px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-1/3 w-20 h-20 border-2 border-purple-500/10 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold inline-block mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid - Now mapping directly over all projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 border border-white/5 backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-slate-800 overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={400} 
                    height={400} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                  /> 
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-yellow-500 shrink-0">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-bold">{project.stars}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-[10px] font-bold bg-slate-800/80 text-cyan-400 rounded border border-cyan-500/20 uppercase tracking-tighter">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-[10px] font-bold bg-slate-800/80 text-gray-400 rounded border border-white/5">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors text-sm font-bold"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.codeUrl}
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm font-bold"
                    >
                      <Github size={16} />
                      <span>Source</span>
                    </a>
                  </div>
                  <span className="text-[10px] text-gray-600 font-mono tracking-widest">{project.views} VIEWS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}