
import React, { useState, useMemo } from 'react';
import { HUBS } from '../constants';
import { MapPin, Phone, Building2 } from 'lucide-react';

const InnovationHubs: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => 
    HUBS.filter(h => h.name.toLowerCase().includes(search.toLowerCase()) || h.location.toLowerCase().includes(search.toLowerCase()))
  , [search]);

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="pt-48 pb-24 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-premium">Regional Access</span>
          <h1 className="text-5xl md:text-[7.5rem] font-black text-[#003057] tracking-tighter leading-[0.85] mb-12 uppercase">Innovation <br/> <span className="text-[#F58220]">Network.</span></h1>
          <div className="max-w-xl">
             <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">9 strategically located makerspaces across Karnataka designed to serve as technical sanctuaries for students and colleges.</p>
             <input 
              type="text" 
              placeholder="Filter by city (e.g. Bangalore, Mysuru...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 px-10 py-6 text-sm font-medium focus:outline-none focus:border-[#F58220] transition-colors shadow-inner rounded-2xl font-sans"
             />
          </div>
        </div>
      </section>

      {/* Map Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 h-[700px] bg-slate-100 shadow-2xl relative lg:sticky lg:top-40 overflow-hidden group rounded-[3rem]">
               <iframe 
                src="https://www.google.com/maps?q=ComedKares+Innovation+Hub+Karnataka&z=7&output=embed" 
                className="w-full h-full transition-all duration-700" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
               />
               <div className="absolute top-8 left-8 bg-[#003057] text-white px-8 py-4 rounded-full text-[9px] font-black uppercase tracking-[0.4em] shadow-2xl">
                  Interactive Node Map
               </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
               {filtered.map((hub) => (
                 <div key={hub.id} className="bg-white border border-slate-50 p-12 hover:shadow-2xl transition-all group rounded-[2.5rem]">
                    <span className="text-[10px] font-black text-[#F58220] uppercase tracking-[0.4em] mb-6 block">{hub.name.split(' – ')[1] || 'Main Hub'}</span>
                    <h3 className="text-3xl font-black text-[#003057] mb-8 uppercase tracking-tighter leading-tight">{hub.name.split(' – ')[0]}</h3>
                    
                    <div className="space-y-6 mb-12">
                       <div className="flex items-start gap-4">
                          <MapPin size={18} className="text-[#F58220] shrink-0" />
                          <p className="text-sm text-slate-400 font-light leading-relaxed">{hub.location}</p>
                       </div>
                       <div className="flex items-center gap-4">
                          <Phone size={18} className="text-[#F58220] shrink-0" />
                          <p className="text-sm font-bold text-[#003057]">{hub.contact}</p>
                       </div>
                       <div className="flex items-start gap-4">
                          <Building2 size={18} className="text-[#F58220] shrink-0" />
                          <div className="flex flex-wrap gap-2">
                             {hub.facilities.map((f, i) => (
                               <span key={i} className="text-[8px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-md">{f}</span>
                             ))}
                          </div>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <a 
                        href={`https://www.google.com/maps/search/${encodeURIComponent(hub.location)}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn-premium bg-[#003057] text-white !py-3 !px-8 text-[9px] rounded-xl"
                       >
                         Navigate Hub
                       </a>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovationHubs;
