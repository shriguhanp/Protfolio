
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="relative inline-block mb-10">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-cyan-400 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-slate-950 p-1">
              <img 
                src="/dp/me.jpeg" 
                alt="Shri Guhan P" 
                className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-950 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        </div>

        <div className="inline-block px-4 py-1.5 mb-8 rounded-full glass border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase animate-bounce">
          Hands-on Hackathon Enthusiast
        </div>
        
        <div className="mb-4">
          <span className="text-blue-500 font-mono tracking-[0.4em] uppercase text-sm md:text-base block mb-4">Architecting Intelligent Systems</span>
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 leading-tight">
            I AM <br className="md:hidden" />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              SHRI GUHAN P
            </span>
          </h2>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-none opacity-90">
          AI <br className="md:hidden" />
          <span className="bg-gradient-to-r from-slate-200 via-blue-100 to-slate-400 bg-clip-text text-transparent">
            Engineer.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
          Enthusiastic 2nd-year <span className="text-white">B.Tech CSE student</span> at SMVEC. Focused on Artificial Intelligence, building AI-driven and full-stack applications with a <span className="text-white font-medium italic underline decoration-blue-500/50">9.14 CGPA</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black transition-all shadow-2xl shadow-blue-900/40 hover:scale-105 active:scale-95"
          >
            DISCOVER PROJECTS
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-10 py-5 glass text-white rounded-xl font-black hover:bg-slate-800 transition-all border border-white/10"
          >
            GET IN TOUCH
          </a>
        </div>

        <div className="mt-20 flex justify-center gap-8 md:gap-16 opacity-60">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-white">9.14</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-blue-400 font-bold">CGPA</span>
          </div>
          <div className="w-px h-16 bg-slate-800/50"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-white">5+</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-blue-400 font-bold">Projects</span>
          </div>
          <div className="w-px h-16 bg-slate-800/50"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-white">3+</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-blue-400 font-bold">Certs</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
