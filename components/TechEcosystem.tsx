'use client';

import { useEffect, useRef } from 'react';

export default function TechEcosystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const technologies = [
    { name: 'React', x: 20, y: 30, icon: '⚛️' },
    { name: 'Docker', x: 35, y: 50, icon: '🐳' },
    { name: 'Next.js', x: 50, y: 60, icon: '▲' },
    { name: 'Tailwind', x: 40, y: 70, icon: '🌊' },
    { name: 'PostgreSQL', x: 60, y: 40, icon: '🗄️' },
    { name: 'Git', x: 70, y: 25, icon: '🌱' },
    { name: 'JavaScript', x: 55, y: 80, icon: 'JS' },
    { name: 'HTML', x: 80, y: 70, icon: 'HTML' },
    { name: 'TypeScript', x: 70, y: 55, icon: 'TS' },
    { name: 'Kubernetes', x: 25, y: 15, icon: '☸️' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes = technologies.map(tech => ({
      x: (tech.x / 100) * canvas.width,
      y: (tech.y / 100) * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const animate = () => {
      // ប្តូរ background ឱ្យថ្លាដើម្បីកុំឱ្យបាំងផ្កាយ
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        nodes.forEach((otherNode, j) => {
          if (i < j) {
            const dx = otherNode.x - node.x;
            const dy = otherNode.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(6, 182, 212, ${0.3 * (1 - distance / 200)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });

        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#06b6d4';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="min-h-screen bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      
      {/* Background Elements & Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Animated Stars */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random(),
            }}
          />
        ))}

        {/* Orbs */}
        <div className="absolute w-96 h-96 bg-blue-500/10 top-20 left-20 blur-[120px] rounded-full"></div>
        <div className="absolute w-64 h-64 bg-purple-500/10 bottom-20 right-20 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold inline-block mb-4 text-white">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ecosystem</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative w-full h-[500px] glass-card rounded-3xl overflow-hidden border border-white/10">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />

          {technologies.map((tech, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${tech.x}%`,
                top: `${tech.y}%`,
              }}
            >
              <div className="glass-card rounded-xl p-3 text-center hover:scale-110 transition-all duration-300 border border-white/5 backdrop-blur-sm">
                <div className="text-2xl mb-1">{tech.icon}</div>
                <div className="text-xs text-gray-300 font-medium whitespace-nowrap">{tech.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}