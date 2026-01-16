import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useContact } from '../context/ContactContext';

const TREATMENTS_DATA = [
  { 
    id: 't1', 
    name: "Fat Loss Program", 
    desc: "High-intensity interval training combined with a caloric deficit plan to shred fat while preserving lean muscle mass.", 
    price: 400, 
    stats: { fat: 12, muscle: 45 },
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=1000&h=1200",
    reviews: "5.0 reviews"
  },
  { 
    id: 't2', 
    name: "Hypertrophy Push", 
    desc: "Volume-focused weight training designed to maximize muscle growth and strength gains through progressive overload.", 
    price: 320, 
    stats: { fat: 15, muscle: 55 },
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000&h=1200",
    reviews: "4.8 reviews"
  },
  { 
    id: 't3', 
    name: "Flexibility & Mobility", 
    desc: "Active recovery sessions involving yoga and deep stretching to prevent injury and improve range of motion.", 
    price: 280, 
    stats: { fat: 18, muscle: 35 },
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=1000&h=1200",
    reviews: "4.9 reviews"
  },
  { 
    id: 't4', 
    name: "Athletic Performance", 
    desc: "Explosive power training and conditioning for athletes looking to improve speed, agility, and endurance.", 
    price: 360, 
    stats: { fat: 10, muscle: 50 },
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000&h=1200",
    reviews: "5.0 reviews"
  },
];

const Discover: React.FC = () => {
  const [activeId, setActiveId] = useState('t1');
  const activeItem = TREATMENTS_DATA.find(t => t.id === activeId) || TREATMENTS_DATA[0];
  const { openContact } = useContact();

  return (
    <section className="py-16 md:py-32 border-t border-black/5 scroll-mt-20 md:scroll-mt-32" id="discover">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header Label */}
        <div className="flex justify-between items-center text-ink-muted text-[10px] md:text-xs tracking-widest uppercase mb-12 md:mb-24">
          <div>// OUR PROGRAMS</div>
          <div>[ 04 ]</div>
        </div>

        {/* Top Headings */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-12 mb-12 md:mb-24">
          <h2 className="text-[36px] md:text-[64px] leading-[1] md:leading-[0.95] tracking-[-1px] md:tracking-[-1.5px] text-ink font-normal max-w-[640px]">
            Discover the training<br/>that fits your goals
          </h2>

          <div className="flex gap-8 items-center max-w-[400px]">
             {/* Decorative Circles */}
             <div className="hidden md:flex -space-x-4">
                <div className="w-12 h-12 rounded-full border border-black/20 bg-white"></div>
                <div className="w-12 h-12 rounded-full border border-black/20 bg-white/50 backdrop-blur-sm"></div>
             </div>
             <p className="text-ink/60 text-[15px] md:text-[16px] leading-relaxed">
               “ Join thousands achieving their dream physique through dedicated training. ”
             </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Hero Image & Data Card (Hidden on Mobile) */}
          <div className="hidden lg:block relative w-full aspect-[3/4] lg:h-[720px] lg:aspect-auto rounded-[32px] overflow-hidden bg-[#f0f0f0] shadow-2xl">
             {/* Background Image */}
             <div 
               className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
               style={{ backgroundImage: `url('${activeItem.image}')` }}
             />
             
             {/* Floating Data Card */}
             <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl rounded-[24px] p-8 shadow-soft animate-fade-in-up">
                <div className="flex justify-between items-start mb-8">
                   <div>
                      <span className="text-[10px] text-ink/40 font-bold tracking-widest uppercase block mb-2">START FROM</span>
                      <span className="text-[42px] font-medium text-ink tracking-tight leading-none">${activeItem.price}</span>
                   </div>
                   
                   {/* Mini Graph Visualization */}
                   <div className="relative w-[140px] h-[60px]">
                      {/* Floating Tag */}
                      <div className="absolute -top-3 right-8 bg-[#1a2e29] text-white text-[10px] font-bold px-2.5 py-1 rounded-md z-10 shadow-md">
                        85 <span className="text-[8px] font-normal opacity-70">KG</span>
                      </div>
                      <svg viewBox="0 0 140 60" className="w-full h-full overflow-visible">
                        <path d="M0,50 Q30,50 45,35 T75,40 T105,20 T140,30" fill="none" stroke="#dbecc2" strokeWidth="3" />
                        <circle cx="105" cy="20" r="4" fill="#1a2e29" stroke="white" strokeWidth="2" />
                        <path d="M0,50 Q30,50 45,35 T75,40 T105,20 T140,30 L140,60 L0,60 Z" fill="url(#gradient)" opacity="0.4" />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#cfe7a7" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                   </div>
                </div>

                <div className="flex gap-12 border-t border-black/5 pt-6">
                   <div className="flex-1">
                      <p className="text-[14px] text-ink/60 leading-relaxed mb-0">
                        Personalized plans for strength, endurance and aesthetics.
                      </p>
                   </div>
                   <div className="flex gap-10">
                      <div>
                         <span className="text-[10px] text-ink/40 font-bold tracking-widest uppercase block mb-1">BODY FAT</span>
                         <span className="text-2xl font-medium text-ink">{activeItem.stats.fat} <span className="text-sm font-normal text-ink/40">%</span></span>
                      </div>
                      <div>
                         <span className="text-[10px] text-ink/40 font-bold tracking-widest uppercase block mb-1">MUSCLE MASS</span>
                         <span className="text-2xl font-medium text-ink">{activeItem.stats.muscle} <span className="text-sm font-normal text-ink/40">%</span></span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column: Step List */}
          <div className="flex flex-col py-0 md:py-4">
            {TREATMENTS_DATA.map((item, index) => {
              const isActive = activeId === item.id;
              const number = `0${index + 1}`;

              return (
                <div 
                  key={item.id} 
                  onClick={() => setActiveId(item.id)}
                  className={`group border-b border-black/10 transition-all duration-500 cursor-pointer ${
                    isActive ? 'pb-8 pt-6 md:pb-12 md:pt-8 opacity-100' : 'py-6 md:py-8 opacity-40 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-baseline gap-6 md:gap-12">
                     {/* Number Circle */}
                     <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-xs md:text-sm transition-colors flex-shrink-0 ${
                       isActive ? 'border-ink text-ink font-medium bg-brand-green/20' : 'border-black/20 text-ink/50 group-hover:border-black/40'
                     }`}>
                        {number}
                     </div>

                     <div className="flex-1">
                        <h3 className={`text-[24px] md:text-[36px] font-normal leading-tight tracking-[-0.5px] transition-all mb-4 ${
                          isActive ? 'text-ink' : 'text-ink group-hover:translate-x-2'
                        }`}>
                          {item.name}
                        </h3>

                        <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                          isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}>
                           <div className="overflow-hidden">
                              {/* Mobile Image Insertion: Visible only on small screens when active */}
                              <div className="block lg:hidden w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#f4f4f4] mb-6">
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  loading="lazy"
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              <p className="text-[15px] md:text-[16px] leading-[1.7] text-ink/60 max-w-[500px] mb-8 md:mb-10">
                                {item.desc}
                              </p>
                              
                              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                                 <button 
                                   onClick={(e) => { e.stopPropagation(); openContact(); }}
                                   className="flex items-center gap-3 bg-[#1a2e29] text-white pl-6 pr-2 py-2 rounded-full hover:bg-black transition-colors active:scale-95 group/btn shadow-lg"
                                 >
                                    <span className="text-[13px] font-medium tracking-wide">Join now</span>
                                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#1a2e29] group-hover/btn:scale-105 transition-transform">
                                      <ArrowRight size={16} />
                                    </div>
                                 </button>
                                 
                                 <div className="flex items-center gap-2 text-ink font-medium text-[15px]">
                                    <Star size={18} className="fill-[#fea920] text-[#fea920]" />
                                    {item.reviews}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Discover;