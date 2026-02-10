// import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Skills from '@/components/Skills';
// import TechEcosystem from '@/components/TechEcosystem';
// import Projects from '@/components/Projects';
// import Experience from '@/components/Experience';
// import Education from '@/components/Education';
// import Contact from '@/components/Contact';
// import ScrollToTop from '@/components/ScrollToTop';

// export default function Home() {
//   return (
//     <main className="relative">
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <TechEcosystem />
//       <Projects />
//       <Experience />
//       <Education />
//       <Contact />
//       <ScrollToTop />
      
//       {/* Footer */}
//       <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="text-center md:text-left">
//               <p className="text-gray-400">
//                 &copy; 2026 Thoeurn Sokkay. All rights reserved.
//               </p>
//             </div>
//             <div className="flex space-x-6">
//               <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                 Terms of Service
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }


import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import TechEcosystem from '@/components/TechEcosystem';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a]">
      {/* --- Global Star Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 2 + 0.5 + 'px',
              height: Math.random() * 2 + 0.5 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
      {/* ----------------------------- */}

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <TechEcosystem />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <ScrollToTop />
        
        {/* Footer */}
        <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400">
                  &copy; 2026 Thoeurn Sokkay. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}