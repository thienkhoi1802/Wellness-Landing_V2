import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Savannah Watson",
    role: "2 Years Member",
    image: "https://picsum.photos/600/800?random=20",
    quote: "Being part of a guided wellness program has supported my daily routine in meaningful ways, making consistency feel natural."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "6 Months Member",
    image: "https://picsum.photos/600/800?random=21",
    quote: "The personalized approach to nutrition and mindfulness has completely reshaped how I view my health. I feel more energetic than ever."
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "1 Year Member",
    image: "https://picsum.photos/600/800?random=22",
    quote: "I never thought I could stick to a routine, but the gentle guidance and support system here made it effortless and enjoyable."
  },
  {
    id: 4,
    name: "James Wilson",
    role: "3 Years Member",
    image: "https://picsum.photos/600/800?random=23",
    quote: "Finding balance in a chaotic world seemed impossible until I joined. The focus on mental clarity alongside physical health is a game changer."
  },
  {
    id: 5,
    name: "Sophia Martinez",
    role: "4 Years Member",
    image: "https://picsum.photos/600/800?random=24",
    quote: "This isn't just a wellness app; it's a community. The insights I've gained about my own body rhythms have been invaluable."
  },
  {
    id: 6,
    name: "Oliver Brown",
    role: "5 Months Member",
    image: "https://picsum.photos/600/800?random=25",
    quote: "Simple, effective, and calming. It fits perfectly into my busy schedule without adding stress. Highly recommended."
  },
  {
    id: 7,
    name: "Isabella Taylor",
    role: "1.5 Years Member",
    image: "https://picsum.photos/600/800?random=26",
    quote: "The sleep tracking and recovery modules have helped me rest better and perform better at work. I'm truly grateful."
  },
  {
    id: 8,
    name: "Lucas Anderson",
    role: "8 Months Member",
    image: "https://picsum.photos/600/800?random=27",
    quote: "Finally, a wellness solution that doesn't feel like a chore. It feels like a gift I give myself every day."
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
    <section className="py-[60px] md:py-[80px]" id="testimonial">
      {/* Container with Dark Green Background and Rounded Corners */}
      <div className="max-w-[1240px] w-[calc(100%-32px)] md:w-[calc(100%-48px)] mx-auto bg-[#1a2e29] rounded-[32px] md:rounded-[48px] px-6 py-10 md:p-14 text-white relative">
        
        {/* Header Row */}
        <div className="flex justify-between items-center text-white/40 text-[10px] md:text-xs tracking-widest uppercase mb-10 md:mb-16">
          <div>// TESTIMONIAL</div>
          <div>[ 06 ]</div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
          <h2 className="text-[32px] md:text-[52px] leading-[1.05] tracking-[-1px] font-normal text-white max-w-[620px]">
            Our happy members built on trusted wellness care
          </h2>
          
          <div className="flex gap-3">
            <button 
              onClick={handlePrev}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all active:scale-95 text-white/80"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all active:scale-95 text-white/80"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[380px_1fr] gap-6 items-stretch min-h-[400px]">
          
          {/* Left: Portrait Image */}
          <div className={`relative rounded-3xl overflow-hidden bg-[#111] h-[320px] lg:h-auto transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
            <div 
               className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url('${current.image}')` }}
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>

          {/* Right: Quote Card */}
          <div className={`relative rounded-3xl bg-[#e9f5d3] p-8 md:p-12 flex flex-col justify-between transition-all duration-500 transform ${isAnimating ? 'opacity-80 translate-x-4' : 'opacity-100 translate-x-0'}`}>
            
            <div className="flex flex-col gap-6">
              <Quote size={40} className="text-[#1a2e29] fill-[#1a2e29]" />
              <p className="text-[24px] md:text-[36px] leading-[1.15] tracking-[-0.5px] text-[#1a2e29] font-normal">
                {current.quote}”
              </p>
            </div>

            <div className="flex items-center gap-4 mt-10">
              <div 
                className="w-12 h-12 rounded-xl bg-black/10 bg-cover bg-center"
                style={{ backgroundImage: `url('${current.image}')` }}
              />
              <div className="flex flex-col">
                <span className="text-[#1a2e29] font-semibold text-[15px]">{current.name}</span>
                <span className="text-[#1a2e29]/60 text-[13px]">{current.role}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Counter */}
        <div className="mt-8 md:absolute md:bottom-14 md:left-14 text-white/40 font-medium text-lg tracking-widest">
          {currentIndex + 1} <span className="text-white/20">/</span> {total}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;