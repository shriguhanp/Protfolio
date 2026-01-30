
import React from 'react';

const Certifications = () => {
  const certs = [
    {
      title: "Machine Learning Foundations",
      issuer: "Coursera / Stanford",
      date: "2024",
      icon: "🧠"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2023",
      icon: "📊"
    },
    {
      title: "Palo Alto Cybersecurity Fundamentals",
      issuer: "Palo Alto Networks",
      date: "2024",
      icon: "🛡️"
    }
  ];

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">Credentials</h2>
          <h3 className="text-4xl font-bold">Verified Expertise</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certs.map((cert, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl flex items-center space-x-6 hover:scale-[1.02] transition-transform cursor-default">
              <div className="text-4xl">{cert.icon}</div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
                <p className="text-slate-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-blue-400 text-xs font-mono">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
