import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { ArrowRight, Menu, X, Search, ChevronDown, ArrowDown } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import CmsImage from './CmsImage';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openContact } = useContact();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    openContact();
  };

  return (
    <header className="relative h-[100dvh] min-h-[600px] max-h-[1080px] bg-[#0d1211] overflow-hidden text-white selection:bg-brand-green selection:text-ink" id="top">
       {/* Background Image & Gradient managed by CMS */}
       {/* Removed z-0 to avoid stacking context traps for the edit button */}
       <CmsImage 
          id="hero_bg"
          defaultSrc="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          asBackground={true}
          className="absolute inset-0" 
          editBtnPosition="top-24 right-6 md:top-32 md:right-12" // Push button down below sticky header
       >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
       </CmsImage>

       {/* Top Navigation Bar - Sticky Fixed Position */}
       <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled 
            ? 'bg-[#0d1211]/80 backdrop-blur-xl py-3 md:py-4 border-b border-white/5 shadow-2xl' 
            : 'pt-6 md:pt-8 pb-4 bg-transparent'
       }`}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
             
             {/* Logo */}
             <a href="#top" className="relative w-10 h-10 md:w-12 md:h-12 flex items-center -ml-2 z-50 shrink-0 group cursor-pointer">
                <div className="w-8 h-8 rounded-full border border-white/80 absolute left-0 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-8 h-8 rounded-full border border-white/80 absolute left-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-500 delay-75"></div>
             </a>

             {/* Desktop Navigation */}
             <div className="hidden md:flex items-center gap-3">
                <nav className={`flex items-center gap-8 px-8 py-3.5 rounded-full border transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-transparent border-transparent' 
                      : 'bg-[#1e201f]/40 backdrop-blur-md border-white/5'
                } mr-2`}>
                   {NAV_LINKS.map((link) => (
                      <a key={link.label} href={link.href} className="text-[13px] font-medium text-white/80 hover:text-white transition-colors tracking-wide relative group">
                         {link.label}
                         <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                      </a>
                   ))}
                </nav>
                <button 
                  onClick={openContact}
                  className={`px-8 py-3.5 rounded-full bg-white text-[#1a2e29] text-[13px] font-bold hover:bg-[#e0e0e0] transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] tracking-wide active:scale-95 ${isScrolled ? 'py-2.5' : ''}`}
                >
                   Contact us
                </button>
                <button className={`w-[46px] h-[46px] rounded-full border transition-all duration-300 flex items-center justify-center text-white hover:bg-white/20 active:scale-95 ${
                    isScrolled 
                      ? 'bg-transparent border-transparent' 
                      : 'bg-[#1e201f]/40 backdrop-blur-md border-white/5'
                }`}>
                   <Search size={18} />
                </button>
             </div>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden relative z-50 p-2 text-white hover:text-brand-green transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
          </div>
       </div>

       {/* Full Screen Mobile Menu Overlay */}
       <div className={`fixed inset-0 z-40 bg-[#0d1211]/95 backdrop-blur-xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) md:hidden flex flex-col justify-center px-6 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <nav className="flex flex-col gap-8 items-center">
             {NAV_LINKS.map((link, idx) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-[32px] font-light text-white hover:text-brand-green transition-colors transform hover:scale-105 active:scale-95"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              ))}
           </nav>
           <div className="mt-16 w-full max-w-xs mx-auto flex flex-col gap-4">
              <button 
                className="w-full py-4 rounded-full bg-white text-[#1a2e29] font-bold text-lg shadow-xl active:scale-95 transition-transform" 
                onClick={handleContactClick}
              >
                Contact us
              </button>
           </div>
       </div>

       {/* Availability Badge */}
       <div className="absolute left-6 md:left-12 xl:left-[calc((100vw-1440px)/2+48px)] top-[120px] md:top-[180px] z-20 animate-fade-in-up">
          <div className="flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit hover:bg-white/10 transition-colors cursor-default">
             <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#8df08b] shadow-[0_0_12px_rgba(141,240,139,0.8)] animate-pulse"></div>
             <span className="text-[9px] md:text-[10px] tracking-widest uppercase text-white/90 font-medium">AVAILABLE FOR TRAINING</span>
          </div>
       </div>

       {/* Main Content Area */}
       <div className="absolute inset-x-0 bottom-24 md:bottom-28 z-30 pointer-events-none">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 pointer-events-auto">
             <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 md:gap-12 items-end">
                
                {/* Headline */}
                <div>
                   <h1 className="text-[40px] sm:text-[52px] md:text-[72px] lg:text-[88px] leading-[0.95] md:leading-[0.92] font-normal tracking-[-1px] md:tracking-[-2.5px] text-white drop-shadow-2xl">
                      Build your body.<br/>
                      Fuel your ambition,<br/>
                      naturally and strong.
                   </h1>
                </div>

                {/* Subtext & CTA */}
                <div className="flex flex-col gap-8 md:gap-12 lg:pl-10 pb-1 md:pb-3">
                   <p className="text-[15px] md:text-[17px] leading-[1.6] text-white/80 max-w-[380px] backdrop-blur-sm">
                      A scientific approach to bodybuilding and nutrition, guided by experts to support your performance everyday.
                   </p>
                   
                   <a href="#discover" className="group w-fit pl-6 pr-1.5 py-1.5 bg-white rounded-full flex items-center gap-6 transition-all hover:bg-[#e0e0e0] shadow-[0_10px_30px_rgba(0,0,0,0.2)] active:scale-95">
                      <span className="text-[#1a2e29] font-bold text-[14px] md:text-[15px] tracking-tight">Join Program</span>
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#2e453e] text-white flex items-center justify-center group-hover:scale-105 group-hover:rotate-[-45deg] transition-all duration-300">
                         <ArrowRight className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                      </div>
                   </a>
                </div>

             </div>
          </div>
       </div>
       
       {/* New Optimized Scroll Button - Bottom Right */}
       <a 
          href="#about"
          className={`absolute bottom-6 right-6 md:bottom-12 md:right-12 z-30 group flex items-center justify-center transition-all duration-500 ${
             isScrolled ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'
          }`}
          aria-label="Scroll down"
       >
          <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
             {/* Rotating text or border could go here, for now a clean circle */}
             <div className="absolute inset-0 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm group-hover:bg-white transition-all duration-500 group-hover:scale-110"></div>
             <ArrowDown className="relative z-10 text-white w-5 h-5 md:w-6 md:h-6 group-hover:text-[#1a2e29] transition-colors duration-500 animate-bounce" strokeWidth={1.5} />
          </div>
       </a>

       {/* Footer Info Lines - Left Aligned Only to avoid overlap */}
       <div className="absolute inset-x-0 bottom-6 md:bottom-12 z-20 pointer-events-none hidden lg:block">
           <div className="max-w-[1440px] mx-auto px-6 md:px-12">
               <div className="flex flex-col gap-1 text-[9px] md:text-[11px] tracking-widest uppercase text-white/40 font-medium">
                   <div>[ LONDON, UK - GMT + 0 ]</div>
                   <div>[ BALI, ID - GMT + 7 ]</div>
               </div>
           </div>
       </div>

    </header>
  );
};

export default Header;