import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[80px] md:py-[100px] border-t border-black/5" id="faq">
       <div className="max-w-[1200px] w-[calc(100%-48px)] mx-auto">
        <div className="flex justify-between items-center text-ink-muted text-xs tracking-widest uppercase mb-12 border-b border-black/5 pb-4">
          <div>// FAQ</div>
          <div>[ 07 ]</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-32 items-start">
          {/* Left Title Area */}
          <div className="flex flex-col h-full justify-between min-h-[400px] relative">
             <h2 className="text-[48px] md:text-[64px] tracking-[-2px] leading-[0.95] text-ink font-normal">
                Everything You<br/>Need to Know
             </h2>
             
             <div className="flex flex-col gap-8 mt-16 lg:mt-0">
                <div>
                   <div className="text-[10px] font-bold tracking-widest uppercase text-ink/70 mb-3 leading-tight">
                      ONLY 15 SLOTS<br/>LEFT THIS MONTH
                   </div>
                   <div className="w-[160px] h-[5px] bg-[#cfe7a7] rounded-full overflow-hidden">
                      <div className="h-full w-[45%] bg-[#1a2e29] rounded-full"></div>
                   </div>
                </div>

                <button className="group w-fit pl-6 pr-2 py-2 bg-[#1a2e29] text-white rounded-full flex items-center gap-5 transition-all hover:bg-black active:scale-95 shadow-lg">
                  <span className="text-[13px] font-medium tracking-wide">Book now</span>
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#1a2e29] group-hover:scale-105 transition-transform">
                    <ArrowRight size={16} />
                  </div>
                </button>
             </div>
          </div>

          {/* Right Accordion */}
          <div className="flex flex-col">
             {FAQS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-black/10 first:border-t">
                    <div 
                      className="flex justify-between items-start py-8 md:py-10 cursor-pointer select-none group"
                      onClick={() => toggle(index)}
                    >
                       <h3 className={`text-[22px] md:text-[28px] font-normal leading-tight max-w-[90%] transition-colors ${isOpen ? 'text-ink' : 'text-ink/60 group-hover:text-ink/80'}`}>
                         {item.question}
                       </h3>
                       <div className={`shrink-0 w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-ink/60 transition-all duration-300 group-hover:border-black/40 ${isOpen ? 'rotate-180 border-black/40' : ''}`}>
                          {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                       </div>
                    </div>
                    
                    <div 
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                       <div className="overflow-hidden">
                         <p className="m-0 text-[15px] leading-[1.6] text-ink/50 max-w-[90%]">
                            {item.answer}
                         </p>
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

export default FAQ;