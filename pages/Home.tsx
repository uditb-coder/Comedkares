
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, HUBS, PROGRAMS, PARTNERS } from '../constants';
import { 
  ArrowRight, 
  ChevronRight,
  Cpu,
  Users,
  Building2,
  Calendar,
  Star,
  TrendingUp,
  Award,
  Bot,
  MapPin,
  Clock,
  Zap,
  ChevronLeft
} from 'lucide-react';

const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
  const [active, setActive] = useState(false);
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

const StackIcon = () => (
  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(0,0,0,0.05)]">
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 14L20 22L35 14L20 6L5 14Z" fill="#FFB81C" fillOpacity="0.8"/>
      <path d="M5 20L20 28L35 20" stroke="#FFB81C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 26L20 34L35 26" stroke="#FFB81C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const LogoMarquee: React.FC<{ items: { name: string, logo: string }[], speed?: number }> = ({ items, speed = 40 }) => {
  return (
    <div className="relative flex overflow-x-hidden w-full py-8 pointer-events-none">
      <div className={`animate-marquee flex gap-16 whitespace-nowrap min-w-full items-center`} style={{ animationDuration: `${speed}s` }}>
        {[...items, ...items].map((item, i) => (
          <img key={i} src={item.logo} alt={item.name} className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
        ))}
      </div>
    </div>
  );
};

const Counter: React.FC<{ target: number; suffix?: string; label: string; icon: React.ReactNode; index: string; delayClass: string }> = ({ target, suffix = "", label, icon, index, delayClass }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className={`relative group bg-white/70 backdrop-blur-3xl p-10 md:p-12 border border-white/20 hover:border-[#FFB81C]/40 transition-all shadow-[0_15px_35px_-10px_rgba(0,48,87,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,48,87,0.12)] rounded-[2.5rem] overflow-hidden animate-float-card ${delayClass}`}>
      <div className="absolute top-2 right-6 text-[8rem] font-black text-slate-50 leading-none select-none -z-0 pointer-events-none group-hover:text-[#FFB81C]/5 transition-colors">{index}</div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-[#003057] text-[#FFB81C] rounded-xl flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-500">
          {React.cloneElement(icon as React.ReactElement<any>, { size: 20 })}
        </div>
        <div className="text-5xl md:text-6xl font-black text-[#003057] mb-2 leading-none tabular-nums tracking-tighter">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] leading-tight">{label}</div>
      </div>
    </div>
  );
};

const DashboardWidget = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const items = [
    {
      title: "Applied AI & Agentic Systems",
      status: "Register Soon",
      description: "Harness LLM reasoning for autonomous intelligent workflows.",
      icon: <Bot size={28} />,
      type: "Advanced Course",
      color: "#FFB81C"
    },
    {
      title: "MakeX Internships",
      status: "Register Soon",
      description: "Industrial grade prototyping track for high-impact engineering.",
      icon: <Zap size={28} />,
      type: "Internship",
      color: "#F58220"
    },
    {
      title: "Bot Building Workshop",
      location: "Mangaluru Hub",
      date: "June 12-14, 2025",
      status: "Hurry!",
      description: "Hands-on mechanical assembly and Arduino logic for mobile bots.",
      icon: <Cpu size={28} />,
      type: "Workshop",
      color: "#60A5FA"
    },
    {
      title: "Grand Demo Day",
      location: "Hubballi Regional Hub",
      date: "July 05, 2025",
      status: "Public RSVP",
      description: "Watch the top student innovators pitch to industrial veterans.",
      icon: <Star size={28} />,
      type: "Event",
      color: "#34D399"
    },
    {
      title: "Innovation Sprint",
      location: "JP Nagar, Bangalore",
      date: "May 22-23, 2025",
      status: "Limited Slots",
      description: "Intensive design sprint focusing on rapid low-fi prototyping.",
      icon: <Clock size={28} />,
      type: "Sprint",
      color: "#A78BFA"
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, items.length]);

  return (
    <div 
      className="relative group/widget bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[4rem] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)] overflow-hidden min-h-[580px] flex flex-col transition-all duration-700 hover:border-white/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div 
        className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-20 transition-colors duration-1000"
        style={{ backgroundColor: items[activeTab].color }}
      ></div>

      <div className="relative z-10 p-10 md:p-14 flex flex-col h-full">
        {/* Widget Top Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
            </div>
            <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">Innovator.LIVE</span>
          </div>
          <div className="flex gap-2.5">
            {items.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveTab(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${activeTab === i ? 'bg-[#FFB81C] w-8' : 'bg-white/10 w-4 hover:bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-grow flex flex-col justify-center animate-fadeIn" key={activeTab}>
          <div className="flex flex-col gap-10">
            <div className="flex items-start justify-between">
              <div 
                className="w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-2xl transition-all duration-700 group-hover/widget:scale-110"
                style={{ backgroundColor: items[activeTab].color, boxShadow: `0 20px 40px -10px ${items[activeTab].color}44` }}
              >
                {items[activeTab].icon}
              </div>
              <span className="px-4 py-2 bg-white/5 border border-white/10 text-white/40 text-[9px] font-black uppercase rounded-full tracking-[0.2em]">
                {items[activeTab].type}
              </span>
            </div>

            <div>
              <h4 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                {items[activeTab].title}
              </h4>
              <div className="inline-block px-3 py-1 bg-[#FFB81C] text-[#003057] text-[10px] font-black uppercase rounded tracking-widest mb-8">
                {items[activeTab].status}
              </div>
              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-sm">
                {items[activeTab].description}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {items[activeTab].location && (
                <div className="flex items-center gap-4 text-white/80 text-[11px] font-bold uppercase tracking-[0.1em]">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin size={14} className="text-[#FFB81C]" />
                  </div>
                  {items[activeTab].location}
                </div>
              )}
              {items[activeTab].date && (
                <div className="flex items-center gap-4 text-white/80 text-[11px] font-bold uppercase tracking-[0.1em]">
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <Calendar size={14} className="text-[#FFB81C]" />
                  </div>
                  {items[activeTab].date}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-14 space-y-6">
          <Link 
            to="/contact" 
            className="w-full bg-white text-[#003057] px-8 py-6 rounded-2xl flex items-center justify-center transition-all group/btn font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#FFB81C] hover:scale-[1.02] active:scale-95"
          >
            {items[activeTab].status === 'Register Soon' ? 'Join Waiting List' : 'Apply Now'}
            <ArrowRight size={16} className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
          </Link>
          
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setActiveTab(prev => (prev > 0 ? prev - 1 : items.length - 1))}
              className="group/nav flex items-center gap-2 text-white/30 hover:text-white transition-colors text-[9px] font-black uppercase tracking-[0.2em]"
            >
              <ChevronLeft size={16} className="group-hover/nav:-translate-x-1 transition-transform" /> Back
            </button>
            <button 
              onClick={() => setActiveTab(prev => (prev < items.length - 1 ? prev + 1 : 0))}
              className="group/nav flex items-center gap-2 text-white/30 hover:text-white transition-colors text-[9px] font-black uppercase tracking-[0.2em]"
            >
              Next <ChevronRight size={16} className="group-hover/nav:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-[#003057] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover opacity-20 scale-105" alt="Technical Background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003057] via-[#003057]/95 to-[#003057]/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-[14px] font-black text-[#FFB81C] uppercase tracking-[0.3em] mb-12 block">COMEDK INITIATIVE</span>
                <h1 className="text-5xl md:text-[5.5rem] lg:text-[7rem] font-black text-white leading-[0.95] tracking-tight mb-12 max-w-5xl uppercase">
                  EMPOWERING <br/> STUDENTS <br/> TO BUILD, <br/> INNOVATE, <br/> 
                  <span className="text-[#FFB81C]">AND LEAD.</span>
                </h1>
                
                {/* Reduced font size as per screenshot request */}
                <h2 className="text-[10px] md:text-[11px] text-[#FFB81C] font-black uppercase tracking-[0.3em] mb-16 max-w-4xl leading-tight opacity-95">
                  FROM ACADEMIC LEARNING TO INDUSTRY-READY INNOVATION.
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link to="/contact" className="bg-[#FFB81C] text-[#003057] px-12 py-6 font-black uppercase tracking-widest text-xs flex items-center justify-center hover:bg-white transition-all shadow-xl">
                    Register Now
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <Reveal delay={300}>
                <DashboardWidget />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT & PARTNERS SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
             <Reveal>
                <span className="label-premium mx-auto text-center !mb-4">Impact at a Glance</span>
                <h2 className="text-4xl md:text-7xl font-black text-[#003057] tracking-tighter leading-[0.85] mb-6 uppercase">Scale that <br/> <span className="text-[#FFB81C]">Matters.</span></h2>
             </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
            <Counter target={9} suffix="+" label="Innovation Hubs" icon={<Building2 />} index="01" delayClass="[animation-delay:0s]" />
            <Counter target={25000} suffix="+" label="Students Engaged" icon={<Users />} index="02" delayClass="[animation-delay:0.2s]" />
            <Counter target={10} suffix="+" label="Industrial Tracks" icon={<Award />} index="03" delayClass="[animation-delay:0.4s]" />
            <Counter target={100} suffix="+" label="Industry Mentors" icon={<TrendingUp />} index="04" delayClass="[animation-delay:0.6s]" />
          </div>

          {/* PARTNER LOGO MARQUEES */}
          <div className="pt-24 border-t border-slate-100">
             <div className="text-center mb-16">
                <Reveal>
                   <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4 block">Our Global Ecosystem</span>
                   <h3 className="text-4xl font-black text-[#003057] uppercase tracking-tighter">Strategic Networks.</h3>
                </Reveal>
             </div>

             <div className="space-y-16">
                <div>
                  <h4 className="text-[11px] font-black text-[#FFB81C] uppercase tracking-[0.3em] mb-8 text-center">Industry Connect</h4>
                  <LogoMarquee items={PARTNERS.industry} speed={60} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-[#FFB81C] uppercase tracking-[0.3em] mb-8 text-center">Academic Connect</h4>
                  <LogoMarquee items={PARTNERS.academic} speed={70} />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMS SECTION - STRICT SCREENSHOT STYLE */}
      <section className="py-40 bg-[#f8f9fb] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <Reveal className="max-w-3xl">
              <span className="label-premium">Curriculum Mastery</span>
              <h2 className="text-4xl md:text-[5rem] font-black text-[#003057] tracking-tighter leading-[0.9] uppercase mb-8">Learning Tracks for the <br/> <span className="text-[#FFB81C]">Industrial Era.</span></h2>
            </Reveal>
            <Reveal delay={200}>
              <Link to="/programs" className="group flex items-center gap-4 text-[#003057] font-black uppercase text-[10px] tracking-widest border-b-2 border-[#FFB81C] pb-2 hover:text-[#FFB81C] transition-colors">
                View Full Catalog <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog, i) => (
              <Reveal key={prog.id} delay={i * 100}>
                <Link to={`/programs/${prog.id}`} className="block group h-full">
                  <div className="bg-white border border-slate-100 p-10 md:p-14 rounded-[3.5rem] h-full flex flex-col transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(0,48,87,0.06)] hover:border-[#FFB81C]/30 relative">
                    <div className="mb-10 flex justify-between items-start">
                      <StackIcon />
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{prog.mode}</span>
                    </div>
                    
                    <span className="text-[10px] font-black text-[#FFB81C] uppercase tracking-[0.3em] mb-4 block">{prog.category}</span>
                    <h3 className="text-3xl font-black text-[#003057] mb-8 uppercase tracking-tighter leading-tight">{prog.title}</h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-12 flex-grow">{prog.overview}</p>
                    
                    <div className="flex items-center gap-2 text-[#003057] font-black uppercase text-[11px] tracking-widest transition-all group-hover:gap-4">
                      Learn More <ChevronRight size={14} className="text-[#FFB81C]" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
