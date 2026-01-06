
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-48 pb-24 bg-[#003057] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="label-premium !text-[#FFB81C]">Proof of Capacity</span>
          <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-12 uppercase">Industrial <br/> <span className="text-[#FFB81C]">Outputs.</span></h1>
          <p className="text-2xl text-slate-300 font-light max-w-2xl leading-relaxed">
            Showcasing verified prototypes built by students during their 16-week experiential tracks at our Innovation Hubs.
          </p>
        </div>
      </section>

      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {PROJECTS.filter(p => p.category === 'Programs').map((project, i) => (
              <div key={project.id} className={`flex flex-col group ${i % 2 === 1 ? 'md:translate-y-32' : ''}`}>
                 <div className="aspect-[4/5] bg-slate-100 overflow-hidden shadow-2xl relative mb-12 rounded-[3.5rem] border border-slate-100">
                    <img 
                      src={project.image} 
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003057]/90 to-transparent p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all">
                       <div className="flex items-center gap-2 mb-4">
                          <CheckCircle2 size={16} className="text-[#FFB81C]" />
                          <span className="text-[#FFB81C] text-[10px] font-black uppercase tracking-widest">Verified Prototype</span>
                       </div>
                       <h4 className="text-white text-3xl font-black uppercase tracking-tighter leading-tight">{project.title}</h4>
                    </div>
                 </div>
                 <div className="px-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block">{project.involvement}</span>
                    <h3 className="text-2xl font-black text-[#003057] mb-6 uppercase tracking-tighter group-hover:text-[#FFB81C] transition-colors">{project.title}</h3>
                    <div className="space-y-4 mb-10">
                       <p className="text-slate-500 font-light leading-relaxed"><strong className="text-[#003057] font-bold">Problem:</strong> {project.problem}</p>
                       <p className="text-slate-500 font-light leading-relaxed"><strong className="text-[#003057] font-bold">Solution:</strong> {project.solution}</p>
                    </div>
                    <button className="flex items-center gap-4 text-[#003057] font-black uppercase text-[10px] tracking-widest group-hover:text-[#FFB81C] transition-colors">
                       View Case Study <ArrowUpRight size={16} />
                    </button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-slate-50">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="label-premium mx-auto">Build with Us</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#003057] tracking-tighter mb-12 uppercase leading-tight">Ready to add your project <br/> to the <span className="text-[#FFB81C]">Gallery?</span></h2>
            <Link to="/contact" className="btn-premium bg-[#003057] text-white hover:bg-[#FFB81C] hover:text-[#003057]">Enroll in a Program Track</Link>
         </div>
      </section>
    </div>
  );
};

export default Projects;
