"use client";
import Image from "next/image";
import { Download, Facebook, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden bg-[#0a0a0a]">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 top-20 left-10 blur-[120px] rounded-full"></div>
        <div
          className="absolute w-64 h-64 bg-blue-500/20 bottom-20 right-20 blur-[100px] rounded-full"
          style={{ animationDelay: "2s" }}
        ></div>

        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="flex items-center space-x-2 text-cyan-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-lg font-medium">Hello, I'm</span>
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Thoeurn <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sokkay</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300">
              And I'm a{" "}
              <span className="text-cyan-400 font-semibold">
                Full Stack Developer
              </span>
            </p>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            I'm a passionate Full-Stack Developer focused on modern web
            technologies and reliable delivery. I enjoy creating efficient and
            scalable solutions that make a positive impact.
          </p>

          <div className="flex space-x-4">
            {[
              { Icon: Github, href: "https://github.com/thoeurnsokkay", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Mail, href: "mailto:thoeurnsokkay@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 rounded-full border-2 border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 hover:scale-110 group text-cyan-400"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <button className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
            <Download size={20} />
            <span>Download CV</span>
          </button>
        </div>

        {/* Right Column - Profile Image with Up-Down Animation */}
        <div className="flex justify-center md:justify-end">
          <div className="relative animate-up-down">
            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative glass-card rounded-full p-5 backdrop-blur-md border border-white/10">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-700/50 relative shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Status Badge */}
              <div className="absolute top-[-7px] right-[-20px] bg-gradient-to-br from-green-400 to-emerald-500 text-slate-900 px-4 py-1.5 rounded-full font-bold text-xs shadow-lg uppercase tracking-wider">
                Available for work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}