
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "C Language", level: 85 }
      ]
    },
    {
      title: "Web & DB",
      skills: [
        { name: "MERN Stack", level: 85 },
        { name: "SQL", level: 80 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Tools & Libraries",
      skills: [
        { name: "Numpy / Pandas", level: 85 },
        { name: "Matplotlib", level: 75 },
        { name: "Streamlit", level: 85 },
        { name: "GitHub", level: 90 }
      ]
    },
    {
      title: "AI & Networks",
      skills: [
        { name: "RAG / LLM", level: 80 },
        { name: "LangChain", level: 85 },
        { name: "CCNA - SRWE", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">Capabilities</h2>
          <h3 className="text-4xl font-bold">The Technical Arsenal</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl hover:border-blue-500/40 transition-all duration-300">
              <h4 className="text-xl font-bold mb-6 text-white border-b border-slate-800 pb-2">{cat.title}</h4>
              <div className="space-y-6">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {['Leadership', 'Project Planner', 'Teamwork', 'Time Management'].map((soft) => (
            <span key={soft} className="px-4 py-2 glass rounded-full text-xs font-semibold text-slate-400 border border-slate-800 hover:border-blue-500/50 transition-all cursor-default">
              {soft}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
