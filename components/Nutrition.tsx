import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const TAGS = [
  'Sports nutrition', 'Hypertrophy coach', 'Macro counting', 'Meal prep',
  'Consultation', 'Supplements', 'Gym Access'
];

const Nutrition: React.FC = () => {
  return (
    <section className="py-16 md:py-32 border-t border-black/5" id="nutrition">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header Label */}
        <div className="flex justify-between items-center text-ink-muted text-[10px] md:text-xs tracking-widest uppercase mb-10 md:mb-16">
          <div>// FEATURED PROGRAM</div>
          <div>[ 03 ]</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12 order-2 lg:order-1">
            {/* Title & Tags */}
            <div>
              <h2 className="text-[36px] md:text-[56px] leading-[1.05] tracking-[-1px] md:tracking-[-1.5px] text-ink font-normal mb-8 md:mb-10">
                Nutritional fuel for<br/>peak performance
              </h2>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                {TAGS.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-4 py-2 md:px-5 md:py-2.5 rounded-xl bg-white border border-black/5 text-[12px] md:text-[13px] text-ink/70 font-medium hover:bg-[#f4f4f4] transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Expert Card */}
            <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden aspect-[4/5] bg-[#e0e0e0] group">
               <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800&h=1000')" }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

               {/* Card Content */}
               <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end text-white">
                  <div className="mb-6 md:mb-8">
                     <h3 className="text-[28px] md:text-[32px] font-normal leading-tight mb-2">Coach Mike T.</h3>
                     <p className="text-white/60 text-[14px] md:text-[15px] mb-4">Head Performance Coach</p>
                     <div className="flex items-center gap-2">
                        <Star className="fill-[#fea920] text-[#fea920] w-4 h-4" />
                        <span className="text-[15px] font-medium">5.0</span>
                     </div>
                  </div>

                  <p className="text-white/80 text-[15px] md:text-[16px] leading-relaxed mb-8 md:mb-10 italic opacity-90">
                    “ Consistency in the kitchen builds the foundation for victory in the gym. ”
                  </p>

                  <div className="flex flex-col gap-5 md:gap-6">
                     {/* Slots Progress */}
                     <div>
                        <div className="text-[10px] font-bold tracking-widest uppercase text-white/80 mb-2 md:mb-3">
                           ONLY 5 SLOTS<br/>LEFT THIS MONTH
                        </div>
                        <div className="w-full max-w-[240px] h-2 bg-white/20 rounded-full overflow-hidden">
                           <div className="h-full w-[80%] bg-[#cfe7a7] rounded-full"></div>
                        </div>
                     </div>

                     {/* CTA Button */}
                     <button className="mt-2 w-full bg-[#1a2e29] backdrop-blur-md border border-white/10 text-white rounded-[20px] p-2 pl-6 pr-2 flex items-center justify-between hover:bg-[#152521] transition-colors group/btn">
                        <span className="font-medium text-[14px] tracking-wide">Join Team</span>
                        <div className="w-10 h-10 rounded-[14px] bg-white text-[#1a2e29] flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                           <ArrowRight size={18} />
                        </div>
                     </button>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="order-1 lg:order-2 relative rounded-[24px] md:rounded-[32px] overflow-hidden h-[500px] lg:h-full bg-[#f0efe9] group">
             {/* Food Hero Image */}
             <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000&h=1200')" }}
             />
             <div className="absolute inset-0 bg-black/10" />

             {/* Floating Data Widget */}
             <div className="absolute bottom-6 left-6 right-6 md:top-12 md:bottom-auto md:left-auto md:right-12 md:w-[360px] bg-white/95 backdrop-blur-xl rounded-[20px] md:rounded-[24px] p-6 md:p-8 shadow-soft animate-fade-in">
                
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                   <div>
                      <div className="text-[9px] font-bold text-ink/40 tracking-widest uppercase mb-1 md:mb-2">DAILY TARGET CALORIES</div>
                      <div className="text-[28px] md:text-[36px] text-ink font-normal leading-none tracking-tight">2.800 <span className="text-[10px] md:text-[12px] text-ink/40 font-medium">KCAL</span></div>
                   </div>
                   <div>
                      <div className="text-[9px] font-bold text-ink/40 tracking-widest uppercase mb-1 md:mb-2">PROTEIN INTAKE</div>
                      <div className="text-[28px] md:text-[36px] text-ink font-normal leading-none tracking-tight">180 <span className="text-[10px] md:text-[12px] text-ink/40 font-medium">G</span></div>
                   </div>
                </div>

                {/* Tracking Visualization */}
                <div>
                   <div className="flex justify-between items-end mb-3 md:mb-4">
                      <span className="text-[12px] md:text-[13px] text-ink/60">Today tracking</span>
                      <span className="text-[13px] md:text-[14px] font-bold text-ink">65%</span>
                   </div>
                   
                   {/* Bar Chart Visual */}
                   <div className="flex items-end justify-between h-[40px] md:h-[60px] gap-1">
                      {[60, 70, 50, 80, 65, 90, 75, 40, 30, 45, 55, 60, 40, 50, 30, 40, 35, 45, 50, 40].map((height, i) => (
                         <div 
                           key={i} 
                           className={`w-full rounded-full transition-all duration-500 ${i < 12 ? 'bg-[#3b5c4f]' : 'bg-[#e0e0e0]'}`}
                           style={{ height: `${height}%` }}
                         />
                      ))}
                   </div>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Nutrition;