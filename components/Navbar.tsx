
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Locations', path: '/hubs' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white py-4 md:py-6 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="shrink-0">
            <img 
              className="h-8 md:h-12 w-auto object-contain" 
              src={LOGO_URL} 
              alt="ComedKares" 
            />
          </Link>

          <div className="hidden md:flex items-center space-x-10 lg:space-x-14">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all py-1 ${
                  isActive(link.path) 
                    ? 'text-[#FFB81C]' 
                    : 'text-[#003057] hover:text-[#FFB81C]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link to="/contact" className="bg-[#003057] text-white px-8 py-3 text-[11px] font-black uppercase tracking-widest hover:bg-[#FFB81C] hover:text-[#003057] transition-all">
              Enquire
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 flex flex-col items-end gap-1.5" aria-label="Toggle Menu">
            <div className={`w-8 h-[2.5px] bg-[#003057] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-5 h-[2.5px] bg-[#003057] transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-7 h-[2.5px] bg-[#003057] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#003057] z-[101] flex flex-col items-center justify-center space-y-10 transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
         <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white text-5xl font-light" aria-label="Close Menu">×</button>
         
         <div className="flex flex-col items-center space-y-8">
           <Link to="/" className="text-4xl font-black text-white uppercase tracking-tighter" onClick={() => setIsOpen(false)}>Home</Link>
           {navLinks.map((link) => (
             <Link 
               key={link.path} 
               to={link.path} 
               className={`text-4xl font-black uppercase tracking-tighter ${isActive(link.path) ? 'text-[#FFB81C]' : 'text-white'}`} 
               onClick={() => setIsOpen(false)}
             >
               {link.name}
             </Link>
           ))}
         </div>

         <Link to="/contact" className="btn-premium bg-[#FFB81C] text-[#003057] !py-5 !px-12 mt-4" onClick={() => setIsOpen(false)}>
            Partner With Us
         </Link>
      </div>
    </nav>
  );
};

export default Navbar;
