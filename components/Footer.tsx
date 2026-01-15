import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 md:pt-24 pb-8 md:pb-12 border-t border-white/5" id="footer">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Top Section: Heading + Info Grid */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-12 xl:gap-24 mb-16 md:mb-32">
           
           {/* LEFT: Heading & CTA */}
           <div className="max-w-[500px] flex flex-col gap-8 md:gap-12">
              <h2 className="text-[32px] md:text-[52px] leading-[1.1] font-normal tracking-[-1px]">
                Begin Your Journey Into Inner Serenity.
              </h2>
              
              <button className="w-fit bg-white rounded-full p-1.5 pl-6 pr-1.5 flex items-center gap-6 group hover:bg-gray-100 transition-colors shadow-lg active:scale-95">
                 <span className="text-[#1a2e29] font-bold text-[15px] tracking-tight">Book now</span>
                 <div className="w-10 h-10 rounded-full bg-[#2e453e] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ArrowRight size={18} />
                 </div>
              </button>
           </div>

           {/* RIGHT: Detailed Info Grid */}
           {/* Grid Layout: Label Col | Value Col | Label Col | Value Col */}
           <div className="flex-1 w-full xl:w-auto grid grid-cols-1 md:grid-cols-[120px_1fr_120px_1fr] gap-y-8 md:gap-y-12 gap-x-8 text-[14px]">
              
              {/* Row 1 */}
              <div>
                <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1 mb-2 md:mb-0">OPEN DAILY</div>
                <div className="text-white/80 leading-relaxed md:hidden">09.00 AM - 08.00 PM</div>
              </div>
              <div className="text-white/80 leading-relaxed hidden md:block">
                 09.00 AM - 08.00 PM
              </div>

              <div>
                <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1 mb-2 md:mb-0">OUR LOCATIONS</div>
                <div className="text-white/80 leading-relaxed max-w-[240px] md:hidden">
                   Jl. Raya Petitenget No. 88 Kerobokan, Kuta Utara Badung, Bali 80361 Indonesia
                </div>
              </div>
              <div className="text-white/80 leading-relaxed max-w-[240px] hidden md:block">
                 Jl. Raya Petitenget No. 88 Kerobokan, Kuta Utara Badung, Bali 80361 Indonesia
              </div>

              {/* Row 2 */}
              <div>
                <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1 mb-2 md:mb-0">OPEN DAY</div>
                <div className="text-white/80 leading-relaxed md:hidden">MONDAY - FRIDAY</div>
              </div>
              <div className="text-white/80 leading-relaxed hidden md:block">
                 MONDAY - FRIDAY
              </div>
              
              {/* Empty Label Col for alignment on desktop */}
              <div className="hidden md:block"></div> 
              <div className="text-white/80 leading-relaxed max-w-[240px] mt-2 md:mt-0">
                 42 Kensington High Street Kensington District London W8 5EP United Kingdom
              </div>

              {/* Row 3 */}
              <div>
                 <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1 mb-2 md:mb-0">CONTACT US</div>
                 <div className="text-white/80 leading-relaxed flex flex-col gap-1 md:hidden">
                    <span>(+62) 815 7565 8150</span>
                    <span>(+02) 555-0124</span>
                 </div>
              </div>
              <div className="text-white/80 leading-relaxed flex-col gap-1 hidden md:flex">
                 <span>(+62) 815 7565 8150</span>
                 <span>(+02) 555-0124</span>
              </div>
              <div className="hidden md:block col-span-2"></div>

              {/* Row 4 */}
              <div>
                <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1 mb-2 md:mb-0">EMAIL</div>
                <div className="text-white/80 leading-relaxed uppercase md:hidden">HELLO@GLOWDENT.COM</div>
              </div>
              <div className="text-white/80 leading-relaxed uppercase hidden md:block">
                 HELLO@GLOWDENT.COM
              </div>
              <div className="hidden md:block col-span-2"></div>

           </div>
        </div>

        {/* Middle Section: Nav & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-12 md:mb-16">
           
           {/* Navigation Links */}
           <div className="flex flex-wrap gap-x-8 gap-y-4 md:gap-12">
              {NAV_LINKS.map((item) => (
                 <a 
                   key={item.label} 
                   href={item.href}
                   className="text-[14px] md:text-[15px] text-white/60 hover:text-white transition-colors"
                 >
                    {item.label}
                 </a>
              ))}
           </div>

           {/* Social Pills */}
           <div className="flex flex-col gap-3 w-full md:w-auto">
              <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2 md:hidden">FOLLOW US</span>
              <div className="flex flex-wrap gap-3 md:gap-4">
                 {['Instagram', 'Facebook', 'Twitter', 'Youtube'].map((social) => (
                    <a 
                      key={social} 
                      href="#" 
                      className="px-5 py-2 md:px-6 md:py-2.5 rounded-[12px] bg-[#1a2e29] border border-white/5 text-white/90 text-[12px] md:text-[13px] font-medium hover:bg-[#25423a] transition-colors"
                    >
                       {social}
                    </a>
                 ))}
              </div>
           </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="border-t border-white/10 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] md:text-[11px] text-white/40 uppercase tracking-widest">
           <div>
              © 2026 ASSEMBLY MOVEMENT LTD. ALL RIGHTS RESERVED.
           </div>
           <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a href="#" className="hover:text-white transition-colors">TERMS & CONDITIONS</a>
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;