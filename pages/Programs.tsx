
import React from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMS } from '../constants';
import { ArrowRight, ChevronRight, Layers, Cpu, Radio, Binary, Bot, Briefcase } from 'lucide-react';

const getProgramIcon = (id: string) => {
  switch (id) {
    case 'idt': return <Layers size={32} />;
    case 'robotics': return <Bot size={32} />;
    case 'iot': return <Radio size={32} />;
    case 'data-science': return <Binary size={32} />;
    case 'agentic-ai': return <Cpu size={32} />;
    case 'makex-internships': return <Briefcase size={32} />;
    default: return <Layers size={32} />;
  }
};

const Programs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Catalog Hero */}
      <section className="relative py-48 bg-[#003057] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920" alt="background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <span className="label-premium !text-[#FFB81C]">Academic Portfolio</span>
          <h1 className="text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tighter mb-12 uppercase">Curriculum <br/> of the <span className="text-[#FFB81C]">Future.</span></h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light">
            From foundational design thinking to high-complexity autonomous systems, each track is engineered with industrial rigor.
          </p>
        </div>
      </section>

      {/* Track Grid */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROGRAMS.map((p) => (
              <div key={p.id} className="group relative">
                <Link 
                  to={`/programs/${p.id}`}
                  className="block bg-slate-50 border border-slate-100 rounded-[3.5rem] p-12 h-full transition-all duration-700 hover:bg-[#003057] hover:shadow-[0_40px_100px_-20px_rgba(0,48,87,0.2)]"
                >
                  <div className="mb-12 flex justify-between items-start">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#FFB81C] shadow-sm group-hover:scale-110 transition-transform duration-500">
                      {getProgramIcon(p.id)}
                    </div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-white/40">{p.mode}</span>
                  </div>
                  
                  <span className="text-[9px] font-black text-[#FFB81C] uppercase tracking-[0.3em] mb-4 block group-hover:text-[#FFB81C] transition-colors">{p.category}</span>
                  <h3 className="text-3xl font-black text-[#003057] mb-6 uppercase tracking-tighter leading-tight group-hover:text-white transition-colors">{p.title}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-10 group-hover:text-slate-300 transition-colors line-clamp-3">
                    {p.overview}
                  </p>

                  {p.sections && (
                    <div className="mb-10 space-y-4">
                      {p.sections.map((s, idx) => (
                        <div key={idx}>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-white/60">{s.title}</p>
                          <div className="flex flex-wrap gap-2">
                            {s.items?.map((item, i) => (
                              <span key={i} className="text-[9px] font-bold text-slate-500 bg-white/40 px-3 py-1 rounded-full group-hover:text-[#FFB81C] group-hover:bg-white/10 transition-all">{item}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-auto flex items-center gap-2 text-[#003057] font-black uppercase text-[10px] tracking-widest group-hover:text-[#FFB81C] transition-colors">
                    Explore Track <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Internship CTA */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#003057] rounded-[4rem] p-16 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="relative z-10 text-white max-w-2xl">
               <span className="label-premium !text-[#FFB81C] !mb-6">Industry Track</span>
               <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">Master the MakeX <br/> <span className="text-[#FFB81C]">Experience.</span></h2>
               <p className="text-xl text-slate-300 font-light mb-12">16 weeks of project-based immersion for the brightest engineering minds in Karnataka.</p>
               <Link to="/contact" className="btn-premium bg-[#FFB81C] text-[#003057] px-12">Apply for Internship</Link>
            </div>
            <div className="relative z-10 w-full md:w-1/3 aspect-square bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-3xl flex items-center justify-center p-12">
               <Briefcase size={120} className="text-[#FFB81C] opacity-40" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
