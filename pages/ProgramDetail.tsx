
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PROGRAMS } from '../constants';

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const program = PROGRAMS.find(p => p.id === id);

  if (!program) return <Navigate to="/programs" />;

  return (
    <div className="bg-white">
      {/* Product Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center bg-[#003057] overflow-hidden">
        <div className="absolute inset-0">
           <img 
             src={id === 'innovation-design-thinking' ? "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1920" : "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920"} 
             className="w-full h-full object-cover opacity-40 grayscale" 
             alt={program.title} 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#003057] to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <span className="bg-[#F58220] text-white px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] mb-8 inline-block shadow-2xl">
            {program.category}
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.8] tracking-tighter max-w-4xl">{program.title}</h1>
          <p className="text-2xl text-slate-300 leading-relaxed font-light max-w-2xl">{program.overview}</p>
        </div>
      </section>

      {/* Program Anatomy */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-8">
                 <div className="mb-24">
                    <h2 className="text-4xl font-black text-[#003057] mb-12">Academic Objectives.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {program.objectives.map((obj, i) => (
                         <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex items-start group hover:bg-white hover:shadow-2xl transition-all">
                            <span className="w-2.5 h-2.5 bg-[#F58220] rounded-full shrink-0 mt-2 mr-6 shadow-glow"></span>
                            <p className="text-slate-600 font-light leading-relaxed">{obj}</p>
                         </div>
                       ))}
                    </div>
                 </div>

                 {program.sessionFlow && (
                   <div className="mb-24">
                      <h2 className="text-4xl font-black text-[#003057] mb-12">Program Milestones.</h2>
                      <div className="space-y-4">
                         {program.sessionFlow.map((s, i) => (
                           <div key={i} className="bg-white border border-slate-50 rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-10 items-start md:items-center group">
                              <div className="w-20 h-20 bg-[#003057] text-white rounded-[1.5rem] flex items-center justify-center font-black text-2xl shrink-0 shadow-xl group-hover:bg-[#F58220] transition-colors">
                                 0{i+1}
                              </div>
                              <div className="flex-grow">
                                 <h4 className="text-xl font-bold text-[#003057] mb-2">{s.topic || s.session}</h4>
                                 <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">{s.output || 'Learning Phase'}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                 )}
              </div>

              {/* Tools & Logistics Sticky Panel */}
              <div className="lg:col-span-4 space-y-12 lg:sticky lg:top-32">
                 <div className="bg-[#003057] text-white p-14 rounded-[4rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F58220]/10 blur-3xl"></div>
                    <h3 className="text-[10px] font-black text-[#F58220] uppercase tracking-[0.4em] mb-12">Program Specs</h3>
                    <div className="space-y-10">
                       <div>
                          <p className="text-[9px] text-slate-400 font-bold uppercase mb-2">Duration</p>
                          <p className="text-lg font-light">{program.durationText || '12 Weeks'}</p>
                       </div>
                       <div>
                          <p className="text-[9px] text-slate-400 font-bold uppercase mb-2">Learning Mode</p>
                          <p className="text-lg font-light">{program.mode}</p>
                       </div>
                       <div>
                          <p className="text-[9px] text-slate-400 font-bold uppercase mb-6">Tools & Technologies</p>
                          <div className="flex flex-wrap gap-3">
                             {program.tools.map((t, i) => (
                               <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-bold uppercase tracking-widest text-[#F58220]">
                                  {t}
                               </span>
                             ))}
                          </div>
                       </div>
                       <button className="w-full bg-[#F58220] text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-[#e0751a] transition-all">
                          Apply for Track
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
