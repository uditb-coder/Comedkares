
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL, SOCIAL_LINKS, CONTACT_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
          
          {/* Logo & Narrative */}
          <div className="md:col-span-5">
            <img 
              src={LOGO_URL} 
              alt="ComedKares" 
              className="h-10 w-auto mb-10 object-contain" 
            />
            <p className="text-slate-500 text-base leading-relaxed max-w-md font-light">
              ComedKares Innovation Hubs are established with a vision of Empowering Engineers with the skills, knowledge, and practical experience to thrive in the ever-evolving workforce.
            </p>
            
            <div className="mt-12">
               <h4 className="text-[10px] font-bold text-[#003057] uppercase tracking-widest mb-8">Social Connect</h4>
               <div className="flex space-x-6">
                  {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
                    <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#F58220] transition-all transform hover:-translate-y-1">
                      <span className="capitalize font-bold text-xs tracking-widest">{name}</span>
                    </a>
                  ))}
               </div>
            </div>
          </div>
          
          {/* Navigation Columns */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold text-[#003057] uppercase tracking-widest mb-10">Learning</h4>
            <ul className="space-y-6">
              <li><Link to="/programs/innovation-design-thinking" className="text-slate-500 hover:text-[#F58220] text-sm font-light transition-colors">Design Thinking</Link></li>
              <li><Link to="/programs/robotics" className="text-slate-500 hover:text-[#F58220] text-sm font-light transition-colors">Robotics</Link></li>
              <li><Link to="/programs/iot" className="text-slate-500 hover:text-[#F58220] text-sm font-light transition-colors">IoT</Link></li>
              <li><Link to="/hubs" className="text-slate-500 hover:text-[#F58220] text-sm font-light transition-colors">Hub Visits</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold text-[#003057] uppercase tracking-widest mb-10">Resources</h4>
            <ul className="space-y-6">
              <li><Link to="/gallery" className="text-slate-500 hover:text-[#F58220] text-sm font-light transition-colors">Gallery</Link></li>
              <li><Link to="/projects" className="text-slate-500 hover:text-[#F58220] text-sm font-light transition-colors">Student Projects</Link></li>
              <li><span className="text-slate-300 cursor-not-allowed text-sm font-light">Event Calendar</span></li>
              <li><span className="text-slate-300 cursor-not-allowed text-sm font-light">Case Studies</span></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold text-[#003057] uppercase tracking-widest mb-10">HQ Direct</h4>
            <div className="space-y-8">
               <a href={`mailto:${CONTACT_EMAIL}`} className="block text-2xl font-light text-[#003057] hover:text-[#F58220] transition-colors">
                  {CONTACT_EMAIL}
               </a>
               <p className="text-sm text-slate-500 leading-relaxed font-light">
                  COMEDK Headquarters, Bengaluru, <br/> Karnataka 560003
               </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-300">
          <p>© 2024 COMEDK - ComedKares Initiative. ERA Foundation Project.</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
            <Link to="/about" className="hover:text-[#F58220] transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-[#F58220] transition-colors">Privacy Policy</Link>
            <span className="hover:text-[#F58220] cursor-pointer transition-colors">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
