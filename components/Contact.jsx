
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // In a real-world MERN deployment, this would be an axios.post to your backend.
    // To ensure the user knows where the mail goes:
    const mailtoLink = `mailto:shriguhan7@gmail.com?subject=Portfolio Inquiry from ${formData.name}&body=From: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // Simulate API call for the UI state
    setTimeout(() => {
      setStatus('success');
      // Open the user's default mail client as a fallback/direct method
      window.location.href = mailtoLink;
      
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass p-12 rounded-3xl grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">Contact</h2>
            <h3 className="text-4xl font-bold mb-6">Let's Discuss Your Next Build.</h3>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Open for collaboration on AI projects, hackathons, and innovative startups. Reach out if you need a builder who speaks both human and machine. 
              <br/><br/>
              <span className="text-blue-400 font-medium italic">Messages are routed directly to shriguhan7@gmail.com.</span>
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Email Me</p>
                  <a href="mailto:shriguhan7@gmail.com" className="text-white font-medium hover:text-blue-400 transition-colors">shriguhan7@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Location</p>
                  <p className="text-white font-medium">Cuddalore, India</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-white"
              />
              <input 
                type="email" 
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-white"
              />
              <textarea 
                placeholder="Project Brief / Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-white resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status !== 'idle'}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 text-white rounded-xl font-bold transition-all flex items-center justify-center space-x-2 shadow-xl shadow-blue-900/20"
            >
              {status === 'loading' ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : status === 'success' ? (
                <span>Transmitted to shriguhan7@gmail.com!</span>
              ) : (
                <span>Transmit Message</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
