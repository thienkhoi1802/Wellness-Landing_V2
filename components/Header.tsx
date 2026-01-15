import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { ArrowRight, Menu, X, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative h-screen min-h-[700px] max-h-[1080px] bg-[#0d1211] overflow-hidden text-white" id="top">
       {/* Background Image & Gradient */}
       <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" 
            alt="Wellness Hero" 
            className="w-full h-full object-cover opacity-90"
          />
          {/* Warm overlay gradient to match the sunny vibe */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
       </div>

       {/* Top Navigation Bar */}
       <div className="absolute top-0 left-0 right-0 z-50 pt-8 pb-4">
          <div className="max-w-[1360px] w-[calc(100%-48px)] mx-auto flex items-start justify-between">
             
             {/* Logo - Intersecting Circles */}
             <div className="relative w-12 h-12 flex items-center -ml-2">
                <div className="w-8 h-8 rounded-full border border-white/80 absolute left-0"></div>
                <div className="w-8 h-8 rounded-full border border-white/80 absolute left-4"></div>
             </div>

             {/* Right Side Actions */}
             <div className="hidden md:flex items-center gap-3">
                {/* Nav Pill */}
                <nav className="flex items-center gap-6 px-8 py-3.5 rounded-full bg-[#1e201f]/40 backdrop-blur-md border border-white/5 mr-2">
                   {NAV_LINKS.map((link) => (
                      <a key={link.label} href={link.href} className="text-[13px] font-medium text-white/90 hover:text-white transition-colors">
                         {link.label}
                      </a>
                   ))}
                </nav>

                {/* Contact Button */}
                <button className="px-6 py-3.5 rounded-full bg-white text-[#1a2e29] text-[13px] font-bold hover:bg-gray-100 transition-colors shadow-lg">
                   Contact us
                </button>

                {/* Search Icon */}
                <button className="w-[46px] h-[46px] rounded-full bg-[#1e201f]/40 backdrop-blur-md border border-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                   <Search size={18} />
                </button>
             </div>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-white mt-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>
       </div>

       {/* Mobile Menu Overlay */}
       {isMenuOpen && (
        <div className="absolute top-[90px] left-4 right-4 z-40 bg-[#0d1211]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 md:hidden">
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

       {/* Availability Badge - Positioned Absolute Left - Adjusted to 180px from top (approx 100px below logo bottom) */}
       <div className="absolute left-[24px] xl:left-[calc((100vw-1360px)/2+24px)] top-[180px] z-20">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm w-fit">
             <div className="w-2 h-2 rounded-full bg-[#8df08b] shadow-[0_0_8px_rgba(141,240,139,0.5)]"></div>
             <span className="text-[10px] tracking-widest uppercase text-white/80 font-medium">AVAILABLE FOR TREATMENT</span>
          </div>
       </div>

       {/* Main Content Area - Bottom Aligned */}
       <div className="absolute inset-x-0 bottom-[100px] z-30">
          <div className="max-w-[1360px] w-[calc(100%-48px)] mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 items-end">
                
                {/* Headline */}
                <div>
                   <h1 className="text-[52px] md:text-[72px] lg:text-[88px] leading-[0.92] font-normal tracking-[-2.5px] text-white">
                      Thoughtful care for your body.<br/>
                      Designed to bring balance,<br/>
                      naturally and gently.
                   </h1>
                </div>

                {/* Subtext & CTA - Right Aligned */}
                <div className="flex flex-col gap-10 lg:pl-10 pb-3">
                   <p className="text-[17px] leading-[1.6] text-white/80 max-w-[380px]">
                      A gentle approach to wellness, thoughtfully guided by care that supports everyday life.
                   </p>
                   
                   <button className="group w-fit pl-6 pr-1.5 py-1.5 bg-white rounded-full flex items-center gap-6 transition-all hover:bg-gray-100 shadow-xl">
                      <span className="text-[#1a2e29] font-bold text-[15px] tracking-tight">Book now</span>
                      <div className="w-11 h-11 rounded-full bg-[#2e453e] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                         <ArrowRight size={20} />
                      </div>
                   </button>
                </div>

             </div>
          </div>
       </div>

       {/* Footer Info Lines */}
       <div className="absolute inset-x-0 bottom-8 z-30">
           <div className="max-w-[1360px] w-[calc(100%-48px)] mx-auto flex justify-between text-[11px] tracking-widest uppercase text-white/60 font-medium">
               <div>[ LONDON, UK - GMT + 0 ]</div>
               <div>[ BALI, ID - GMT + 7 ]</div>
           </div>
       </div>

    </header>
  );
};

export default Header;