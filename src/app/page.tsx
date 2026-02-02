'use client';
import React from 'react';
import { Github, Linkedin, Mail, ShieldCheck, Zap, BarChart3, Globe, ExternalLink, Terminal, Cpu, Layout } from 'lucide-react';

// Explicitly defining the Project type to satisfy TypeScript
interface Project {
  title: string;
  subtitle: string;
  desc: string;
  tech: string[];
  link: string;
  icon: React.ReactNode;
  color: string;
}

const projects: Project[] = [
  {
    title: "DEVSTREAM PRO",
    subtitle: "AI Code Auditor & Security Engine",
    desc: "Engineered real-time code auditing for security leaks (SQLi, XSS) using Gemini 3.0 Flash. Features a custom Monaco-based IDE interface.",
    tech: ["Next.js 16", "Gemini 3.0", "API Gateway"],
    link: "https://devstream-zeta.vercel.app/",
    icon: <ShieldCheck className="text-emerald-600" size={24} />,
    color: "border-emerald-500/10 bg-emerald-50/20"
  },
  {
    title: "PULSESYNC AI",
    subtitle: "Enterprise Meeting Intelligence",
    desc: "Architected AI-native SaaS to transform raw audio transcripts into summaries via Gemini 2.5 Flash. Optimized for secure server-side logic and streaming.",
    tech: ["Next.js 16", "Gemini 2.5", "React"],
    link: "https://project-1-drab-three.vercel.app/",
    icon: <Zap className="text-blue-600" size={24} />,
    color: "border-blue-500/10 bg-blue-50/20"
  },
  {
    title: "FINGRAPH AI",
    subtitle: "Predictive Data Dashboard",
    desc: "Built high-fidelity financial dashboard visualizing complex cash-flows with integrated Gemini-driven numeric analysis for personalized advice.",
    tech: ["Recharts", "Gemini AI", "WebSockets"],
    link: "#", 
    icon: <BarChart3 className="text-purple-600" size={24} />,
    color: "border-purple-500/10 bg-purple-50/20"
  }
];

const skillCategories = [
  {
    name: "Frameworks",
    skills: ["Next.js 16", "React", "Node.js", "Express", "Flask", "Tailwind CSS"],
    icon: <Layout className="text-emerald-600" size={20} />
  },
  {
    name: "AI & Sockets",
    skills: ["Gemini AI", "Socket.io", "CLIP", "FAISS", "PyTorch", "Recharts"],
    icon: <Cpu className="text-blue-600" size={20} />
  },
  {
    name: "Tools & Lang",
    skills: ["Docker", "Git", "GitHub", "Vercel", "JS (ES6+)", "Python", "SQL", "C++"],
    icon: <Terminal className="text-slate-600" size={20} />
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100">
      <div className="max-w-6xl mx-auto py-12 px-6 lg:py-24 space-y-32">
        
        <header className="space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Globe size={14} className="animate-spin" style={{ animationDuration: '10s' }} />
            Available for Global Remote Engineering
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900 italic uppercase">
              HARSH <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 not-italic">RAJPUT</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">Full-Stack Web Developer</h2>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-medium">
              Software Engineer with a B.Tech in CSE. Specialized in building AI-integrated SaaS, real-time collaborative platforms, and scalable architectures.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="mailto:harshrajput18@gmail.com" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald-600 transition-all flex items-center gap-3 uppercase text-sm shadow-xl shadow-slate-200">
              <Mail size={18} /> Hire Me
            </a>
            <div className="flex items-center gap-8 px-8 border-l border-slate-200">
              <a href="https://github.com/harshrajput018" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-all hover:scale-110"><Github size={28} /></a>
              <a href="https://linkedin.com/in/harsh-rajput-0542a4185/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-all hover:scale-110"><Linkedin size={28} /></a>
            </div>
          </div>
        </header>

        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-black tracking-[0.5em] text-slate-400 uppercase">Selected Engineering</h2>
            <div className="h-px bg-slate-100 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className={`group p-10 rounded-[3rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${p.color}`}>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-white w-fit rounded-2xl shadow-sm border border-slate-100 group-hover:rotate-6 transition-transform">
                    {p.icon}
                  </div>
                  <ExternalLink className="text-slate-300 group-hover:text-slate-900 transition-colors" size={20} />
                </div>
                <div className="space-y-5">
                  <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase">{p.title}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tech.map((t, index) => (
                      <span key={index} className="px-3 py-1 bg-white/80 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase shadow-sm">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="space-y-12 pb-24">
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-black tracking-[0.5em] text-slate-400 uppercase">Technical Mastery</h2>
            <div className="h-px bg-slate-100 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200/60 hover:border-emerald-500/30 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-emerald-50 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="font-black text-slate-900 tracking-tight">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-white border border-slate-100 rounded-lg text-xs font-bold text-slate-600 shadow-sm">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 pb-16">
          <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.4em]">
            Optimized for Scalability // 99.9% AI Availability
          </div>
          <p className="text-xs text-slate-400 font-medium italic">
            © 2026 Harsh Rajput — B.Tech, Computer Science Engineering
          </p>
        </footer>
      </div>
    </main>
  );
}
