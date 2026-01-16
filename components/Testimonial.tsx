import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Bodybuilding Champion",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600&h=800",
    quote: "The personalized training program pushed me past my plateau. I've gained 10lbs of lean muscle in just 3 months."
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Crossfit Athlete",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=800",
    quote: "Nutrition was always my weak point. Their meal prep guides made it easy to hit my macros without sacrificing flavor."
  },
  {
    id: 3,
    name: "Marcus Davis",
    role: "Powerlifter",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=800",
    quote: "Expert coaching on my form added 50lbs to my deadlift. The community support keeps me motivated every single day."
  },
  {
    id: 4,
    name: "Emily Wilson",
    role: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=800",
    quote: "I've tried many apps, but this holistic approach to fitness and recovery is a game changer for my energy levels."
  },
  {
    id: 5,
    name: "David Chen",
    role: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=800",
    quote: "The endurance protocols are intense but effective. I shaved 15 minutes off my personal best thanks to the interval training."
  }
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const current = TESTIMONIALS[currentIndex];
  const total = TESTIMONIALS.length;

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <section className="py-12 md:py-24 scroll-mt-20 md:scroll-mt-32" id="testimonial">
      {/* Container with Dark Green Background and Rounded Corners */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="bg-[#1a2e29] rounded-[24px] md:rounded-[48px] p-6 md:p-16 text-white relative shadow-2xl overflow-hidden">
            
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            {/* Header Row */}
            <div className="flex justify-between items-center text-white/40 text-[10px] md:text-xs tracking-widest uppercase mb-6 md:mb-20 relative z-10">
              <div>// SUCCESS STORIES</div>
              <div>[ 06 ]</div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 mb-8 md:mb-16 relative z-10">
              <h2 className="text-[28px] md:text-[52px] leading-[1.05] tracking-[-1px] font-normal text-white max-w-[620px]">
                  Real results from our dedicated athletes
              </h2>
              
              <div className="flex gap-3 self-end md:self-auto">
                  <button 
                  onClick={handlePrev}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all active:scale-95 text-white/80"
                  >
                  <ArrowLeft className="w-4 h-4 md:w-[22px] md:h-[22px]" />
                  </button>
                  <button 
                  onClick={handleNext}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all active:scale-95 text-white/80"
                  >
                  <ArrowRight className="w-4 h-4 md:w-[22px] md:h-[22px]" />
                  </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[420px_1fr] gap-6 md:gap-8 items-stretch md:min-h-[400px] relative z-10">
            
              {/* Left: Portrait Image (Desktop Only) */}
              <div className={`hidden md:block relative rounded-[32px] overflow-hidden bg-[#111] transition-opacity duration-500 shadow-lg ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                  <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${current.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Right: Quote Card */}
              <div className={`relative rounded-[20px] md:rounded-[32px] bg-[#e9f5d3] p-6 md:p-16 flex flex-col justify-between transition-all duration-500 transform shadow-lg ${isAnimating ? 'opacity-80 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                  
                  {/* Quote Content */}
                  <div className="flex flex-col gap-4 md:gap-8">
                    <Quote className="text-[#1a2e29] fill-[#1a2e29] w-6 h-6 md:w-12 md:h-12 opacity-20" />
                    <p className="text-[18px] md:text-[40px] leading-[1.4] md:leading-[1.15] tracking-[-0.3px] md:tracking-[-0.5px] text-[#1a2e29] font-normal">
                        {current.quote}”
                    </p>
                  </div>

                  {/* User Info (Mobile Optimized) */}
                  <div className="flex items-center gap-3 md:gap-5 mt-6 md:mt-12 pt-6 border-t border-[#1a2e29]/10 md:border-none md:pt-0">
                    <div 
                        className="w-10 h-10 md:w-14 md:h-14 rounded-full md:rounded-2xl bg-black/10 bg-cover bg-center shrink-0"
                        style={{ backgroundImage: `url('${current.image}')` }}
                    />
                    <div className="flex flex-col">
                        <span className="text-[#1a2e29] font-bold text-[13px] md:text-[16px]">{current.name}</span>
                        <span className="text-[#1a2e29]/60 text-[11px] md:text-[14px]">{current.role}</span>
                    </div>
                  </div>

              </div>
            </div>

            {/* Counter */}
            <div className="mt-4 md:absolute md:bottom-16 md:left-16 text-white/40 font-medium text-xs md:text-lg tracking-widest text-center md:text-left z-10">
            {currentIndex + 1} <span className="text-white/20">/</span> {total}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;