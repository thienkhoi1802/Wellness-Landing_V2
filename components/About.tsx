import React from 'react';
import { Star, ArrowRight, ShieldCheck, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-[60px] md:py-[100px] border-t border-black/5" id="about">
      <div className="max-w-[1240px] w-[calc(100%-48px)] mx-auto">
        {/* Header Label */}
        <div className="flex justify-between items-center text-ink-muted text-[10px] md:text-xs tracking-widest uppercase mb-12">
          <div>// ABOUT US</div>
          <div>[ 02 ]</div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* COLUMN 1: Portrait & Rating (3 spans) */}
          {/* Mobile Order: 3 (Last) */}
          <div className="lg:col-span-3 flex flex-col gap-4 order-3 lg:order-1 pt-4 lg:pt-0">
            <div className="relative aspect-[3/4] w-full rounded-[24px] overflow-hidden bg-[#e5e5e5] group cursor-pointer shadow-sm">
               <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800&h=1000')" }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6 right-6 text-white text-[18px] md:text-[20px] leading-snug font-normal italic tracking-wide">
                  “ This platform transformed my daily routine. ”
               </div>
            </div>
            
            <div className="flex items-center gap-2 text-ink pl-1">
               <Star className="w-5 h-5 fill-[#fea920] text-[#fea920]" />
               <span className="font-bold text-[16px]">5.0</span>
               <span className="text-ink/60 text-sm">(1.2k Reviews)</span>
            </div>
          </div>

          {/* COLUMN 2: Main Text Content (5 spans) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-6 order-1 lg:order-2">
            <h2 className="text-[42px] md:text-[56px] leading-[1.05] tracking-[-1.5px] text-ink font-normal">
               Science-backed wellness,<br/>
               simplified for you.
            </h2>
            <p className="text-[15px] leading-relaxed text-ink/70">
               We believe that true health shouldn't be complicated. By combining clinical expertise with intuitive technology, we've created a space where you can understand your body's needs and address them with confidence.
            </p>
            <p className="text-[15px] leading-relaxed text-ink/70">
               Our approach is holistic, considering not just physical symptoms but your lifestyle, environment, and personal goals. From hormone balance to nutritional guidance, every recommendation is tailored to support your unique physiology.
            </p>

            <div className="pt-4">
               <button className="flex items-center gap-3 bg-[#1a2e29] text-white pl-6 pr-2 py-2 rounded-full hover:bg-black transition-colors active:scale-95 group/btn w-fit">
                  <span className="text-[13px] font-medium">Read our story</span>
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#1a2e29] group-hover/btn:scale-105 transition-transform">
                    <ArrowRight size={16} />
                  </div>
               </button>
            </div>
          </div>

          {/* COLUMN 3: Stats & Features (4 spans) */}
          <div className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-3">
             {/* Feature Card 1 */}
             <div className="bg-[#f6f7f7] rounded-[24px] p-8 flex flex-col gap-4 hover:bg-[#f0f0f0] transition-colors">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a2e29] shadow-sm">
                   <ShieldCheck size={20} />
                </div>
                <div>
                   <h3 className="text-xl font-medium text-ink mb-2">Clinically Verified</h3>
                   <p className="text-sm text-ink/60 leading-relaxed">
                      All treatments and products are reviewed by certified medical professionals to ensure safety and efficacy.
                   </p>
                </div>
             </div>

             {/* Feature Card 2 */}
             <div className="bg-[#e9f5d3] rounded-[24px] p-8 flex flex-col gap-4 hover:bg-[#dbecc2] transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#1a2e29] flex items-center justify-center text-white shadow-sm">
                   <Leaf size={20} />
                </div>
                <div>
                   <h3 className="text-xl font-medium text-ink mb-2">Natural & Gentle</h3>
                   <p className="text-sm text-ink/60 leading-relaxed">
                      We prioritize formulations that work in harmony with your body's natural rhythms, minimizing side effects.
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