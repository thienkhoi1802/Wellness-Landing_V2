import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const TAGS = [
  'Clinical nutrition', 'Professional mentor', 'Metabolic support', 'Meal planning',
  'Consultation', 'Assurance', 'Best Facilities'
];

const Nutrition: React.FC = () => {
  return (
    <section className="py-[60px] md:py-[100px] border-t border-black/5" id="nutrition">
      <div className="max-w-[1240px] w-[calc(100%-48px)] mx-auto">
        
        {/* Header Label */}
        <div className="flex justify-between items-center text-ink-muted text-[10px] md:text-xs tracking-widest uppercase mb-10">
          <div>// FEATURED TREATMENT</div>
          <div>[ 03 ]</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-16 items-start">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10">
            {/* Title & Tags */}
            <div>
              <h2 className="text-[42px] md:text-[56px] leading-[1.05] tracking-[-1.5px] text-ink font-normal mb-8">
                Nutritional support for<br/>balanced living
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {TAGS.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-4 py-2.5 rounded-xl bg-white border border-black/5 text-[13px] text-ink/70 font-medium hover:bg-[#f4f4f4] transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Expert Card */}
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-[#e0e0e0] group">
               {/* Doctor Image */}
               <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000')" }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

               {/* Card Content */}
               <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="mb-6">
                     <h3 className="text-[32px] font-normal leading-tight mb-1">Dr. Adam Jack</h3>
                     <p className="text-white/60 text-[15px] mb-3">Our specialist</p>
                     <div className="flex items-center gap-2">
                        <Star className="fill-[#fea920] text-[#fea920] w-4 h-4" />
                        <span className="text-[15px] font-medium">5.0</span>
                     </div>
                  </div>

                  <p className="text-white/80 text-[14px] leading-relaxed mb-8 italic opacity-90">
                    “ Join thousands finding success through success through success through. ”
                  </p>

                  <div className="flex flex-col gap-4">
                     {/* Slots Progress */}
                     <div>
                        <div className="text-[10px] font-bold tracking-widest uppercase text-white/80 mb-2">
                           ONLY 15 SLOTS<br/>LEFT THIS MONTH
                        </div>
                        <div className="w-full max-w-[200px] h-1.5 bg-white/20 rounded-full overflow-hidden">
                           <div className="h-full w-[40%] bg-[#cfe7a7] rounded-full"></div>
                        </div>
                     </div>

                     {/* CTA Button */}
                     <button className="mt-4 w-full bg-[#1a2e29] backdrop-blur-md border border-white/10 text-white rounded-[18px] p-1.5 pl-5 pr-1.5 flex items-center justify-between hover:bg-[#152521] transition-colors group/btn">
                        <span className="font-medium text-[14px]">Book now</span>
                        <div className="w-10 h-10 rounded-[14px] bg-white text-[#1a2e29] flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                           <ArrowRight size={18} />
                        </div>
                     </button>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative rounded-[32px] overflow-hidden h-[600px] lg:h-full bg-[#f0efe9] group">
             {/* Food Hero Image */}
             <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000&h=1200')" }}
             />
             <div className="absolute inset-0 bg-black/10" />

             {/* Floating Data Widget */}
             <div className="absolute top-8 left-6 right-6 md:left-auto md:right-8 md:w-[320px] bg-white/95 backdrop-blur-xl rounded-[24px] p-6 shadow-soft animate-fade-in">
                
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div>
                      <div className="text-[9px] font-bold text-ink/40 tracking-widest uppercase mb-1.5">MAXIMUM CALORIES PER DAY</div>
                      <div className="text-[32px] text-ink font-normal leading-none tracking-tight">1.800 <span className="text-[12px] text-ink/40 font-medium">KCAL</span></div>
                   </div>
                   <div>
                      <div className="text-[9px] font-bold text-ink/40 tracking-widest uppercase mb-1.5">SALMON CALORIES</div>
                      <div className="text-[32px] text-ink font-normal leading-none tracking-tight">142 <span className="text-[12px] text-ink/40 font-medium">KCAL</span></div>
                   </div>
                </div>

                {/* Tracking Visualization */}
                <div>
                   <div className="flex justify-between items-end mb-3">
                      <span className="text-[13px] text-ink/60">Today tracking</span>
                      <span className="text-[14px] font-bold text-ink">40%</span>
                   </div>
                   
                   {/* Bar Chart Visual */}
                   <div className="flex items-end justify-between h-[50px] gap-[2px]">
                      {[60, 70, 50, 80, 65, 90, 75, 40, 30, 45, 55, 60, 40, 50, 30, 40, 35, 45, 50, 40].map((height, i) => (
                         <div 
                           key={i} 
                           className={`w-full rounded-full transition-all duration-500 ${i < 7 ? 'bg-[#3b5c4f]' : 'bg-[#e0e0e0]'}`}
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