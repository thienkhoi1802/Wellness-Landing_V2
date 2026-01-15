import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { ArrowRight, Menu, X, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="relative h-[100dvh] min-h-[600px] max-h-[1080px] bg-[#0d1211] overflow-hidden text-white selection:bg-brand-green selection:text-ink" id="top">
       {/* Background Image & Gradient */}
       <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Cinematic Athletic Training" 
            className="w-full h-full object-cover opacity-90 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
       </div>

       {/* Top Navigation Bar */}
       <div className="absolute top-0 left-0 right-0 z-50 pt-6 md:pt-8 pb-4">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
             
             {/* Logo */}
             <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center -ml-2 z-50">
                <div className="w-8 h-8 rounded-full border border-white/80 absolute left-0"></div>
                <div className="w-8 h-8 rounded-full border border-white/80 absolute left-4"></div>
             </div>

             {/* Desktop Navigation */}
             <div className="hidden md:flex items-center gap-3">
                <nav className="flex items-center gap-8 px-8 py-3.5 rounded-full bg-[#1e201f]/40 backdrop-blur-md border border-white/5 mr-2">
                   {NAV_LINKS.map((link) => (
                      <a key={link.label} href={link.href} className="text-[13px] font-medium text-white/90 hover:text-white transition-colors tracking-wide">
                         {link.label}
                      </a>
                   ))}
                </nav>
                <button className="px-8 py-3.5 rounded-full bg-white text-[#1a2e29] text-[13px] font-bold hover:bg-gray-100 transition-colors shadow-lg tracking-wide">
                   Contact us
                </button>
                <button className="w-[46px] h-[46px] rounded-full bg-[#1e201f]/40 backdrop-blur-md border border-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                   <Search size={18} />
                </button>
             </div>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden relative z-50 p-2 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
          </div>
       </div>

       {/* Full Screen Mobile Menu Overlay */}
       <div className={`fixed inset-0 z-40 bg-[#0d1211] transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center px-6 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <nav className="flex flex-col gap-6 items-center">
             {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-[28px] font-light text-white hover:text-brand-green transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
           </nav>
           <div className="mt-12 w-full max-w-xs mx-auto flex flex-col gap-4">
              <button className="w-full py-4 rounded-full bg-white text-[#1a2e29] font-bold text-lg">
                Contact us
              </button>
           </div>
       </div>

       {/* Availability Badge */}
       <div className="absolute left-6 md:left-12 xl:left-[calc((100vw-1440px)/2+48px)] top-[120px] md:top-[180px] z-20">
          <div className="flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm w-fit">
             <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#8df08b] shadow-[0_0_8px_rgba(141,240,139,0.5)]"></div>
             <span className="text-[9px] md:text-[10px] tracking-widest uppercase text-white/80 font-medium">AVAILABLE FOR TRAINING</span>
          </div>
       </div>

       {/* Main Content Area */}
       <div className="absolute inset-x-0 bottom-20 md:bottom-24 z-30">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
             <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 md:gap-12 items-end">
                
                {/* Headline */}
                <div>
                   <h1 className="text-[40px] sm:text-[52px] md:text-[72px] lg:text-[88px] leading-[0.95] md:leading-[0.92] font-normal tracking-[-1px] md:tracking-[-2.5px] text-white">
                      Build your body.<br/>
                      Fuel your ambition,<br/>
                      naturally and strong.
                   </h1>
                </div>

                {/* Subtext & CTA */}
                <div className="flex flex-col gap-8 md:gap-12 lg:pl-10 pb-1 md:pb-3">
                   <p className="text-[15px] md:text-[17px] leading-[1.6] text-white/80 max-w-[380px]">
                      A scientific approach to bodybuilding and nutrition, guided by experts to support your performance everyday.
                   </p>
                   
                   <button className="group w-fit pl-6 pr-1.5 py-1.5 bg-white rounded-full flex items-center gap-6 transition-all hover:bg-gray-100 shadow-xl active:scale-95">
                      <span className="text-[#1a2e29] font-bold text-[14px] md:text-[15px] tracking-tight">Join Program</span>
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#2e453e] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                         <ArrowRight className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                      </div>
                   </button>
                </div>

             </div>
          </div>
       </div>

       {/* Footer Info Lines */}
       <div className="absolute inset-x-0 bottom-6 md:bottom-8 z-30">
           <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between text-[9px] md:text-[11px] tracking-widest uppercase text-white/50 font-medium">
               <div>[ LONDON, UK - GMT + 0 ]</div>
               <div>[ BALI, ID - GMT + 7 ]</div>
           </div>
       </div>

    </header>
  );
};

export default Header;