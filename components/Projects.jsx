
import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "AI Healthcare Multi-Agent",
      description: "Multi-agent system featuring Doctor/Admin dashboards, RAG-based diagnostics, and medication coach.",
      tags: ["MERN", "AI Agents", "MongoDB", "Redux"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/shriguhanp/AI-Healthcare-Multi-Agent-Platform.git",
      category: "AI"
    },
    {
      title: "Gemini Research Agent",
      description: "Automated research automation using CrewAI and Google Gemini for deep-web data synthesis.",
      tags: ["CrewAI", "Gemini API", "LangChain"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/shriguhanp/Langchain-Gemini-Research-Agent.git",
      category: "AI"
    },
    {
      title: "RAG Pipeline for LLM",
      description: "A context-aware AI retrieval system using vector embeddings for real-time document interaction.",
      tags: ["Python", "OpenAI", "FAISS", "LangChain"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/shriguhanp/Rag-pipeline-for-LLM.git",
      category: "AI"
    },
    {
      title: "CaptionAI",
      description: "AI-powered image captioning system that generates descriptive text for visual content.",
      tags: ["Computer Vision", "Deep Learning", "Python"],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/shriguhanp/CaptionAI.git",
      category: "AI"
    },
    {
      title: "Credit Card Clustering",
      description: "Unsupervised learning model to segment customers based on credit card usage patterns.",
      tags: ["Machine Learning", "Scikit-Learn", "Python"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/shriguhanp/Credit-card-clustering.git",
      category: "AI"
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-950/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold">Featured Creations</h3>
          </div>
          
          <div className="flex gap-2 p-1 glass rounded-lg">
            {['All', 'AI'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${filter === cat ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="group glass rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full relative">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-20 p-2 bg-slate-900/80 hover:bg-blue-600 rounded-full text-white transition-colors border border-white/10"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[50%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-blue-300 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                      {tag}
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
};

export default Projects;
