
import React from 'react';
import { HUBS, CONTACT_EMAIL } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Chapter: The Connection (Silent Hero) */}
      <section className="relative bg-[#003057] py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920" alt="Students in collaboration" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003057] to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[#F58220] font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">Connect</span>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter max-w-5xl mb-12">
            Enabling <br/> <span className="italic text-[#F58220]">Growth.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
            Each ComedKares Innovation Hub has a dedicated team and facility manager. Reach out directly to your local center for walk-in visits or program inquiries.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-12 rounded-[3rem] shadow-inner">
                <h2 className="text-3xl font-extrabold text-[#003057] mb-12">General Inquiry</h2>
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="border-b border-slate-200 focus-within:border-[#F58220] transition-all py-2">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                      <input type="text" className="w-full bg-transparent text-slate-900 font-medium focus:outline-none" placeholder="First Last" />
                    </div>
                    <div className="border-b border-slate-200 focus-within:border-[#F58220] transition-all py-2">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                      <input type="email" className="w-full bg-transparent text-slate-900 font-medium focus:outline-none" placeholder="name@domain.com" />
                    </div>
                  </div>
                  <div className="border-b border-slate-200 focus-within:border-[#F58220] transition-all py-2">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                    <textarea className="w-full bg-transparent text-slate-900 font-medium focus:outline-none h-32 resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="bg-[#F58220] text-white px-12 py-5 rounded-2xl font-bold shadow-2xl hover:bg-[#e0751a] transition-all uppercase tracking-widest text-xs">
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>

            {/* Contacts */}
            <div className="lg:col-span-5">
              <div className="space-y-20">
                <div>
                  <h3 className="text-[10px] font-bold text-[#003057] uppercase tracking-widest mb-8">Central Email</h3>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl md:text-3xl font-light text-[#F58220] hover:text-[#e0751a] transition-colors break-words">
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div>
                  <h3 className="text-[10px] font-bold text-[#003057] uppercase tracking-widest mb-8">Regional Hub Direct Numbers</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {HUBS.map((hub) => (
                      <div key={hub.id} className="group border-l-2 border-slate-100 pl-4 hover:border-[#F58220] transition-all">
                        <h5 className="text-[10px] font-bold text-[#003057] uppercase tracking-widest mb-1">{hub.name.split(' – ')[0]}</h5>
                        <p className="text-sm text-slate-500 font-light">{hub.contact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
