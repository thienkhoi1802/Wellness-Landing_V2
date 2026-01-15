import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { ArrowRight, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [tzLeft, setTzLeft] = useState("[ LONDON, UK - GMT + 01 ]");
  const [tzRight, setTzRight] = useState("[ BALI, ID - GMT + 7 ]");

  const toggleAvailability = () => setIsAvailable(!isAvailable);
  
  const swapTZ = () => {
    const temp = tzLeft;
    setTzLeft(tzRight);
    setTzRight(temp);
  };

  return (
    <header className="relative min-h-[680px] h-[720px] bg-[#0d1211] overflow-hidden border-b border-white/5 text-white" id="top">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 z-10" />
        <img 
          src="https://picsum.photos/1200/800?random=1" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 py-4">
        <div className="max-w-[1200px] w-[calc(100%-48px)] mx-auto flex items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center gap-3 cursor-pointer select-none group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-[34px] h-[34px] rounded-full border border-white/30 relative backdrop-blur-md group-hover:border-white/50 transition-colors">
              <div className="absolute inset-[7px] border border-white/20 rounded-full"></div>
              <div className="absolute inset-[11px] border border-white/10 rounded-full"></div>
            </div>
            <span className="font-medium tracking-wide text-white/90">Wellness</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/20 border border-white/20 backdrop-blur-xl shadow-lg">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="px-3.5 py-2.5 rounded-full text-[13px] text-white/90 hover:bg-white/10 transition-all"
              >
                {link.label}
              </a>
            ))}
            <button className="ml-1 px-4 py-2.5 rounded-full bg-white/90 text-ink text-[13px] font-medium active:translate-y-[1px] transition-transform hover:bg-white">
              Contact us
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-[70px] left-4 right-4 z-40 bg-[#0d1211]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 md:hidden">
           {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="px-4 py-3 rounded-xl text-white/90 hover:bg-white/10 transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
             <button className="mt-2 w-full py-3 rounded-xl bg-white text-ink font-medium">
              Contact us
            </button>
        </div>
      )}

      {/* Availability Badge */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 top-[92px] z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-black/20 border border-white/20 backdrop-blur-xl cursor-pointer hover:bg-black/30 transition-colors"
        onClick={toggleAvailability}
      >
        <span className={`w-2.5 h-2.5 rounded-full ${isAvailable ? 'bg-[#8df08b] shadow-[0_0_0_4px_rgba(141,240,139,0.15)]' : 'bg-red-400'}`}></span>
        <span className="text-xs tracking-wide text-white/90 font-medium">
          {isAvailable ? "AVAILABLE FOR TREATMENT" : "LIMITED AVAILABILITY"}
        </span>
      </div>

      {/* Hero Content */}
      <div className="absolute left-0 right-0 bottom-[30px] z-30">
        <div className="max-w-[1200px] w-[calc(100%-48px)] mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6 items-end">
          <div>
            <h1 className="text-[42px] md:text-[58px] leading-[1.02] font-semibold tracking-[-0.9px] text-white/95 drop-shadow-2xl">
              Thoughtful care for your body.<br />
              Designed to bring balance,<br />
              naturally and gently.
            </h1>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-3">
            <div className="max-w-[360px] text-[13px] leading-[1.55] text-white/80 p-4 rounded-[18px] bg-black/20 border border-white/10 backdrop-blur-xl">
              A gentle approach to wellness,<br />
              thoughtfully guided by care that<br />
              supports everyday life.
            </div>
            
            <div className="flex items-center gap-2.5 p-1.5 rounded-full border border-white/20 bg-white/15 backdrop-blur-xl shadow-2xl">
              <button className="px-4 py-2.5 rounded-full bg-white text-ink text-[13px] font-medium active:translate-y-[1px] transition-transform hover:bg-gray-100">
                Book now
              </button>
              <div className="w-10 h-10 rounded-full border border-white/20 bg-black/25 text-white flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors active:scale-95">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute left-0 right-0 bottom-4 z-40 text-white/60 text-[11px] tracking-widest uppercase">
        <div className="max-w-[1200px] w-[calc(100%-48px)] mx-auto flex justify-between items-center">
          <div onClick={swapTZ} className="cursor-pointer hover:text-white transition-colors">{tzLeft}</div>
          <div onClick={swapTZ} className="cursor-pointer hover:text-white transition-colors">{tzRight}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
