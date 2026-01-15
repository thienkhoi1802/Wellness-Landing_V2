import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { useContact } from '../context/ContactContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openContact } = useContact();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-32 border-t border-black/5 scroll-mt-20 md:scroll-mt-32" id="faq">
       <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center text-ink-muted text-xs tracking-widest uppercase mb-12 md:mb-16 border-b border-black/5 pb-4">
          <div>// FAQ</div>
          <div>[ 07 ]</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-32 items-start">
          {/* Left Title Area */}
          <div className="flex flex-col h-full justify-between min-h-[auto] md:min-h-[400px] relative">
             <h2 className="text-[36px] md:text-[64px] tracking-[-1px] md:tracking-[-2px] leading-[0.95] text-ink font-normal mb-8 md:mb-0">
                Everything You<br/>Need to Know
             </h2>
             
             <div className="flex flex-col gap-8 md:gap-10 mt-4 lg:mt-0">
                <div>
                   <div className="text-[10px] font-bold tracking-widest uppercase text-ink/70 mb-3 leading-tight">
                      ONLY 15 SLOTS<br/>LEFT THIS MONTH
                   </div>
                   <div className="w-[160px] h-[6px] bg-[#cfe7a7] rounded-full overflow-hidden">
                      <div className="h-full w-[45%] bg-[#1a2e29] rounded-full"></div>
                   </div>
                </div>

                <button 
                  onClick={openContact}
                  className="group w-fit pl-6 pr-2 py-2 bg-[#1a2e29] text-white rounded-full flex items-center gap-5 transition-all hover:bg-black active:scale-95 shadow-lg"
                >
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
                      className="flex justify-between items-start py-6 md:py-12 cursor-pointer select-none group"
                      onClick={() => toggle(index)}
                    >
                       <h3 className={`text-[18px] md:text-[28px] font-normal leading-tight max-w-[90%] transition-colors ${isOpen ? 'text-ink' : 'text-ink/60 group-hover:text-ink/80'}`}>
                         {item.question}
                       </h3>
                       <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center text-ink/60 transition-all duration-300 group-hover:border-black/40 ${isOpen ? 'rotate-180 border-black/40 bg-black/5' : ''}`}>
                          {isOpen ? <Minus className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" strokeWidth={1.5} /> : <Plus className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" strokeWidth={1.5} />}
                       </div>
                    </div>
                    
                    <div 
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mb-6 md:mb-10' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                       <div className="overflow-hidden">
                         <p className="m-0 text-[15px] md:text-[16px] leading-[1.6] text-ink/50 max-w-[90%]">
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