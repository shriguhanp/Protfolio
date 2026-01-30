
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass p-2 border-blue-500/20 shadow-2xl">
              <img
                src="/dp/me.jpeg"
                alt="Shri Guhan P"
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 glass border-blue-400/30 rounded-2xl hidden md:block">
              <p className="text-blue-400 font-mono text-sm">"Code is temporary, logic is forever."</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">Discovery</h2>
            <h3 className="text-4xl font-bold mb-6">Pioneering AI Engineer Solutions in & Beyond</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I am a 2nd-year B.Tech Computer Science student at <span className="text-white">Sri Manakula Vinayagar Engineering College</span> with a laser focus on being an <span className="text-white font-semibold">AI Engineer</span>. I maintain a high academic standard with a CGPA of 9.14.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              My journey is fueled by a passion for hands-on problem solving. I graduated from Bright Academy with 82% in Class XII and 85% in Class X, laying a strong foundation for my current focus on architecting intelligent systems and RAG-powered platforms.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 glass rounded-xl">
                <p className="text-slate-500 text-xs mb-1 uppercase tracking-widest">Primary Role</p>
                <p className="text-white font-semibold">AI Engineer</p>
              </div>
              <div className="p-4 glass rounded-xl">
                <p className="text-slate-500 text-xs mb-1 uppercase tracking-widest">Institute</p>
                <p className="text-white font-semibold text-sm">SMVEC (CSE)</p>
              </div>
              <div className="p-4 glass rounded-xl">
                <p className="text-slate-500 text-xs mb-1 uppercase tracking-widest">Location</p>
                <p className="text-white font-semibold">Cuddalore, India</p>
              </div>
              <div className="p-4 glass rounded-xl">
                <p className="text-slate-500 text-xs mb-1 uppercase tracking-widest">Academic Status</p>
                <p className="text-white font-semibold">CGPA: 9.14</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
