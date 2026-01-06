
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Gallery: React.FC = () => {
  const categories = ['All', 'Events', 'Programs', 'Inaugurations', 'Hubs'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#003057] py-48 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="label-premium !text-[#FFB81C]">Visual Repository</span>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-12 uppercase leading-[0.85]">Moments in <br/> <span className="text-[#FFB81C]">Action.</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
            A curated look at the students, events, and hubs that define the ComedKares experiential movement.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-24 border-b border-slate-50 pb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] transition-all py-2 border-b-2 ${
                  activeCategory === cat 
                    ? 'text-[#FFB81C] border-[#FFB81C]' 
                    : 'text-slate-300 border-transparent hover:text-[#003057]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-slate-50 shadow-sm transition-all hover:shadow-2xl animate-fadeIn"
              >
                <img 
                  src={item.image || 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800'} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003057] via-[#003057]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-12">
                   <span className="text-[#FFB81C] text-[9px] font-black uppercase tracking-[0.3em] mb-3">{item.category}</span>
                   <h4 className="text-white font-black text-2xl uppercase tracking-tighter leading-tight">{item.title}</h4>
                   <p className="text-slate-300 text-[10px] mt-4 font-light uppercase tracking-widest">{item.involvement}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-40">
              <p className="text-slate-400 font-light italic uppercase tracking-widest">No entries found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
