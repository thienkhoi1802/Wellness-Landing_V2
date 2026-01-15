import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const TREATMENTS_DATA = [
  { 
    id: 't1', 
    name: "Weight loss treatment", 
    desc: "Support sustainable and balanced weight loss through personalized care, guided support, and healthier long-term habits.", 
    price: 400, 
    stats: { fat: 19, muscle: 33 },
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000&h=1200",
    reviews: "5.0 reviews"
  },
  { 
    id: 't2', 
    name: "Testosterone booster", 
    desc: "Support energy, strength, and vitality through tailored protocols designed to restore your natural peak performance.", 
    price: 320, 
    stats: { fat: 15, muscle: 42 },
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000&h=1200",
    reviews: "4.8 reviews"
  },
  { 
    id: 't3', 
    name: "Progesterone balancing", 
    desc: "Balance hormones for improved wellbeing, sleep quality, and emotional stability through mindful guidance.", 
    price: 280, 
    stats: { fat: 22, muscle: 28 },
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=1000&h=1200",
    reviews: "4.9 reviews"
  },
  { 
    id: 't4', 
    name: "Anti-aging treatment", 
    desc: "Support longevity and youthful vitality with a holistic approach to cellular health and skin regeneration.", 
    price: 360, 
    stats: { fat: 18, muscle: 30 },
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000&h=1200",
    reviews: "5.0 reviews"
  },
];

const Discover: React.FC = () => {
  const [activeId, setActiveId] = useState('t1');
  const activeItem = TREATMENTS_DATA.find(t => t.id === activeId) || TREATMENTS_DATA[0];

  return (
    <section className="py-[60px] md:py-[100px] border-t border-black/5" id="discover">
      <div className="max-w-[1240px] w-[calc(100%-48px)] mx-auto">
        
        {/* Header Label */}
        <div className="flex justify-between items-center text-ink-muted text-[10px] md:text-xs tracking-widest uppercase mb-12">
          <div>// OUR TREATMENT</div>
          <div>[ 04 ]</div>
        </div>

        {/* Top Headings */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 md:mb-20">
          <h2 className="text-[42px] md:text-[64px] leading-[0.95] tracking-[-1.5px] text-ink font-normal max-w-[600px]">
            Discover the treatment<br/>that’s right for you
          </h2>

          <div className="flex gap-6 items-center max-w-[400px]">
             {/* Decorative Circles */}
             <div className="hidden md:flex -space-x-4">
                <div className="w-10 h-10 rounded-full border border-black/20"></div>
                <div className="w-10 h-10 rounded-full border border-black/20"></div>
             </div>
             <p className="text-ink/60 text-[15px] leading-relaxed">
               “ Join thousands finding success through success through success self-help. ”
             </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start">
          
          {/* Left Column: Hero Image & Data Card */}
          <div className="relative w-full aspect-[3/4] lg:h-[720px] lg:aspect-auto rounded-[32px] overflow-hidden bg-[#f0f0f0]">
             {/* Background Image */}
             <div 
               className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
               style={{ backgroundImage: `url('${activeItem.image}')` }}
             />
             
             {/* Floating Data Card */}
             <div className="absolute bottom-6 left-6 right-6 bg-white rounded-[24px] p-6 shadow-soft animate-fade-in-up">
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <span className="text-[10px] text-ink/40 font-bold tracking-widest uppercase block mb-1">START FROM</span>
                      <span className="text-[36px] font-medium text-ink tracking-tight">${activeItem.price}</span>
                   </div>
                   
                   {/* Mini Graph Visualization */}
                   <div className="relative w-[140px] h-[60px]">
                      {/* Floating Tag */}
                      <div className="absolute -top-3 right-8 bg-[#1a2e29] text-white text-[10px] font-bold px-2 py-1 rounded-md z-10">
                        72,5 <span className="text-[8px] font-normal opacity-70">KG</span>
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

                <div className="flex gap-8 border-t border-black/5 pt-5">
                   <div className="flex-1">
                      <p className="text-[13px] text-ink/60 leading-relaxed mb-0">
                        Personalized plans for sustainable, healthy weight loss.
                      </p>
                   </div>
                   <div className="flex gap-8">
                      <div>
                         <span className="text-[10px] text-ink/40 font-bold tracking-widest uppercase block mb-1">FAT CONTENT</span>
                         <span className="text-xl font-medium text-ink">{activeItem.stats.fat} <span className="text-sm font-normal text-ink/40">%</span></span>
                      </div>
                      <div>
                         <span className="text-[10px] text-ink/40 font-bold tracking-widest uppercase block mb-1">BODY MUSCLE</span>
                         <span className="text-xl font-medium text-ink">{activeItem.stats.muscle} <span className="text-sm font-normal text-ink/40">%</span></span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column: Step List */}
          <div className="flex flex-col py-4">
            {TREATMENTS_DATA.map((item, index) => {
              const isActive = activeId === item.id;
              const number = `0${index + 1}`;

              return (
                <div 
                  key={item.id} 
                  onClick={() => setActiveId(item.id)}
                  className={`group border-b border-black/10 transition-all duration-500 cursor-pointer ${
                    isActive ? 'pb-10 pt-6 opacity-100' : 'py-8 opacity-40 hover:opacity-70'
                  }`}
                >
                  <div className="flex items-baseline gap-6 md:gap-8">
                     {/* Number Circle */}
                     <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-sm transition-colors flex-shrink-0 ${
                       isActive ? 'border-ink text-ink font-medium' : 'border-black/20 text-ink/50'
                     }`}>
                        {number}
                     </div>

                     <div className="flex-1">
                        <h3 className={`text-[28px] md:text-[36px] font-normal leading-tight tracking-[-0.5px] transition-all mb-4 ${
                          isActive ? 'text-ink' : 'text-ink'
                        }`}>
                          {item.name}
                        </h3>

                        <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                          isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}>
                           <div className="overflow-hidden">
                              <p className="text-[15px] leading-[1.7] text-ink/60 max-w-[480px] mb-8">
                                {item.desc}
                              </p>
                              
                              <div className="flex items-center gap-8">
                                 <button className="flex items-center gap-3 bg-[#1a2e29] text-white pl-6 pr-2 py-2 rounded-full hover:bg-black transition-colors active:scale-95 group/btn">
                                    <span className="text-[13px] font-medium">Book now</span>
                                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#1a2e29] group-hover/btn:scale-105 transition-transform">
                                      <ArrowRight size={16} />
                                    </div>
                                 </button>
                                 
                                 <div className="flex items-center gap-2 text-ink font-medium text-[15px]">
                                    <Star size={16} className="fill-[#fea920] text-[#fea920]" />
                                    {item.reviews}
                                 </div>
                              </div>
                           </div>
                        </div>

                        {!isActive && (
                           <p className="text-[14px] text-ink/40 mt-1 hidden md:block">
                             Support energy, strength, and vitality.
                           </p>
                        )}
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
