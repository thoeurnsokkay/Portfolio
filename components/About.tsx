"use client";

export default function About() {
  const stats = [
    { number: "3+", label: "Projects Completed" },
    { number: "1+", label: "Years Experience" },
    { number: "10+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  // Generate 50 random stars
  const stars = Array.from({ length: 50 });

  return (
    <section
      id="about"
      className="relative py-10 bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Stars Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const size = Math.random() * 2 + 1;
          const delay = Math.random() * 5;
          return (
            <div
              key={i}
              className="star bg-white rounded-full"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
        {/* Floating Orbs */}
        <div className="floating-orb w-64 h-64 bg-purple-500 top-20 left-10"></div>
        <div
          className="floating-orb w-96 h-96 bg-blue-500 bottom-20 right-20"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold inline-block mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-6">Who I Am?</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>I'm Thoeurn Sokkay, a Full-Stack Developer.</p>
              <p>
                I'm a fourth-year Computer Science student at the Royal
                University of Phnom Penh. I have a strong passion for
                technology and a deep interest in web development, cloud
                computing, and CI/CD practices. I enjoy creating efficient and
                scalable solutions that make a positive impact on users and
                businesses.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

