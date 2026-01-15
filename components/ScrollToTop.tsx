import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[40] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1a2e29] border border-white/10 text-white shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all duration-300 hover:bg-[#cfe7a7] hover:text-[#1a2e29] hover:scale-110 active:scale-95 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="md:w-6 md:h-6 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default ScrollToTop;