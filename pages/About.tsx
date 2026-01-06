
import React, { useEffect, useRef } from 'react';
import { LEADERSHIP, JOURNEY_MILESTONES } from '../constants';
import { Calendar, GraduationCap, MapPin, Rocket, Star, Trophy, Globe, Building2, Pencil, Target, ShieldCheck } from 'lucide-react';

const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
  const [active, setActive] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setActive(true), delay);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-up ${active ? 'active' : ''} ${className}`}>
      {children}
    </div>
  );
};

const getMilestoneIcon = (icon: string) => {
  switch (icon) {
    case 'Pencil': return <Pencil size={20} />;
    case 'Building2': return <Building2 size={20} />;
    case 'GraduationCap': return <GraduationCap size={20} />;
    case 'MapPin': return <MapPin size={20} />;
    case 'Rocket': return <Rocket size={20} />;
    case 'Trophy': return <Trophy size={20} />;
    case 'Globe': return <Globe size={20} />;
    case 'Building': return <Building2 size={20} />;
    case 'Star': return <Star size={20} />;
    default: return <Calendar size={20} />;
  }
};

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-48 pb-32 bg-[#003057] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-12deg] translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <span className="label-premium !text-[#FFB81C]">Our Institutional Identity</span>
            <h1 className="text-5xl md:text-[8rem] font-black leading-[0.85] tracking-tighter max-w-5xl mb-12 uppercase">
              The Journey of <br/> <span className="text-[#FFB81C]">Empowerment.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed">
              ComedKares was established with a singular vision: to empower Indian engineering graduates with the practical skillsets and industrial confidence required to lead the workforce of tomorrow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-32">
              <Reveal>
                 <span className="label-premium">The Architects</span>
                 <h2 className="text-4xl md:text-7xl font-black text-[#003057] tracking-tighter uppercase leading-none mb-8">Strategic <br/> Stewardship.</h2>
                 <p className="text-slate-500 max-w-xl mx-auto font-light">The leadership driving ComedKares brings together decades of academic administration and industrial excellence.</p>
              </Reveal>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {LEADERSHIP.map((member, i) => (
                <Reveal key={i} delay={i * 150} className="text-center group">
                   <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl mb-12 rounded-[3.5rem] relative">
                      <img src={member.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={member.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#003057]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   </div>
                   <h4 className="text-2xl font-black text-[#003057] mb-2 uppercase tracking-tighter">{member.name}</h4>
                   <p className="text-[#FFB81C] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">{member.designation}</p>
                   <p className="text-slate-500 font-light text-sm leading-relaxed max-w-xs mx-auto">
                     {member.bio}
                   </p>
                </Reveal>
              ))}
           </div>
        </div>
      </section>

      {/* Narrative Vertical Timeline */}
      <section className="py-40 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-black text-[#003057] uppercase tracking-tighter mb-6">Historical Milestones</h2>
              <div className="h-1 w-24 bg-[#FFB81C] mx-auto"></div>
            </Reveal>
          </div>

          <div className="relative">
            {/* The Rail */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-32">
              {JOURNEY_MILESTONES.map((m, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Icon Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-[#003057] rounded-full z-10 hidden md:flex items-center justify-center text-[#FFB81C] shadow-xl">
                    {getMilestoneIcon(m.icon)}
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                    <Reveal delay={i * 50} className={`bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-700 ${i % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                      <span className="text-[10px] font-black text-[#FFB81C] uppercase tracking-widest mb-6 block">{m.date}</span>
                      <h3 className="text-2xl font-black text-[#003057] mb-6 uppercase tracking-tighter leading-tight">{m.title}</h3>
                      <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">{m.description}</p>
                    </Reveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Values */}
      <section className="py-40 bg-[#003057] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <Reveal delay={0}>
              <ShieldCheck className="text-[#FFB81C] mb-8" size={48} />
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-6">Quality Assurance</h4>
              <p className="text-slate-400 font-light leading-relaxed">Our programs undergo rigorous academic validation by industry experts to ensure alignment with current global standards.</p>
            </Reveal>
            <Reveal delay={100}>
              <Target className="text-[#FFB81C] mb-8" size={48} />
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-6">Impact Driven</h4>
              <p className="text-slate-400 font-light leading-relaxed">We measure success by the complexity of prototypes built and the industrial placements achieved by our scholars.</p>
            </Reveal>
            <Reveal delay={200}>
              <Building2 className="text-[#FFB81C] mb-8" size={48} />
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-6">Institutional Scale</h4>
              <p className="text-slate-400 font-light leading-relaxed">Through 9 regional hubs, we support thousands of engineers across the state, ensuring that innovation has no geographical barriers.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
