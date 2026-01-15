import React from 'react';
import { Star, ArrowRight, ShieldCheck, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-32 border-t border-black/5" id="about">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header Label */}
        <div className="flex justify-between items-center text-ink-muted text-[10px] md:text-xs tracking-widest uppercase mb-10 md:mb-20">
          <div>// ABOUT US</div>
          <div>[ 02 ]</div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-start">
          
          {/* COLUMN 1: Portrait & Rating */}
          <div className="lg:col-span-3 flex flex-col gap-6 order-3 lg:order-1">
            <div className="relative aspect-[3/4] w-full rounded-[20px] md:rounded-[24px] overflow-hidden bg-[#e5e5e5] group cursor-pointer shadow-sm">
               <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800&h=1000')" }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6 right-6 text-white text-[14px] md:text-[15px] leading-relaxed font-medium tracking-wide">
                  “ This training transformed my physique completely. ”
               </div>
            </div>
            
            <div className="flex items-center gap-3 text-ink pl-1">
               <Star className="w-5 h-5 fill-[#fea920] text-[#fea920]" />
               <span className="font-bold text-[16px]">5.0</span>
               <span className="text-ink/60 text-sm">(1.2k Athletes)</span>
            </div>
          </div>

          {/* COLUMN 2: Main Text Content */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 lg:pl-6 order-1 lg:order-2">
            <h2 className="text-[36px] md:text-[56px] leading-[1.05] tracking-[-1px] md:tracking-[-1.5px] text-ink font-normal">
               Science-based fitness,<br/>
               simplified for gains.
            </h2>
            <div className="flex flex-col gap-6">
                <p className="text-[15px] md:text-[16px] leading-[1.6] text-ink/70">
                We believe building muscle and burning fat shouldn't be guesswork. By combining sports science with proven nutrition strategies, we've created a platform where you can master your body's potential.
                </p>
                <p className="text-[15px] md:text-[16px] leading-[1.6] text-ink/70">
                Our approach covers training intensity, recovery, and precise macronutrient planning. From hypertrophy to endurance, every program is tailored to your physique goals.
                </p>
            </div>

            <div className="pt-4 md:pt-6">
               <button className="flex items-center gap-3 bg-[#1a2e29] text-white pl-6 pr-2 py-2 rounded-full hover:bg-black transition-colors active:scale-95 group/btn w-fit">
                  <span className="text-[13px] font-medium tracking-wide">Read our philosophy</span>
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#1a2e29] group-hover/btn:scale-105 transition-transform">
                    <ArrowRight size={16} />
                  </div>
               </button>
            </div>
          </div>

          {/* COLUMN 3: Stats & Features */}
          <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6 order-2 lg:order-3">
             {/* Feature Card 1 */}
             <div className="bg-[#f6f7f7] rounded-[24px] p-6 md:p-8 flex flex-col gap-4 md:gap-6 hover:bg-[#f0f0f0] transition-colors">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1a2e29] shadow-sm">
                   <ShieldCheck size={24} />
                </div>
                <div>
                   <h3 className="text-lg md:text-xl font-medium text-ink mb-2 md:mb-3">Trainer Verified</h3>
                   <p className="text-[14px] text-ink/60 leading-relaxed">
                      All workout plans and diet guides are reviewed by certified personal trainers and nutritionists.
                   </p>
                </div>
             </div>

             {/* Feature Card 2 */}
             <div className="bg-[#e9f5d3] rounded-[24px] p-6 md:p-8 flex flex-col gap-4 md:gap-6 hover:bg-[#dbecc2] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#1a2e29] flex items-center justify-center text-white shadow-sm">
                   <Leaf size={24} />
                </div>
                <div>
                   <h3 className="text-lg md:text-xl font-medium text-ink mb-2 md:mb-3">Natural Nutrition</h3>
                   <p className="text-[14px] text-ink/60 leading-relaxed">
                      We prioritize whole foods and high-quality supplements to fuel your workouts and recovery naturally.
                   </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;