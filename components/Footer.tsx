import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8 border-t border-white/5" id="footer">
      <div className="max-w-[1300px] w-[calc(100%-48px)] mx-auto">
        
        {/* Top Section: Heading + Info Grid */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-16 xl:gap-20 mb-24">
           
           {/* LEFT: Heading & CTA */}
           <div className="max-w-[400px] flex flex-col gap-10">
              <h2 className="text-[40px] md:text-[52px] leading-[1.1] font-normal tracking-[-1px]">
                Begin Your Journey Into Inner Serenity.
              </h2>
              
              <button className="w-fit bg-white rounded-full p-1.5 pl-6 pr-1.5 flex items-center gap-6 group hover:bg-gray-100 transition-colors">
                 <span className="text-[#1a2e29] font-bold text-[15px] tracking-tight">Book now</span>
                 <div className="w-10 h-10 rounded-full bg-[#2e453e] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ArrowRight size={18} />
                 </div>
              </button>
           </div>

           {/* RIGHT: Detailed Info Grid */}
           {/* Grid Layout: Label Col | Value Col | Label Col | Value Col */}
           <div className="flex-1 w-full xl:w-auto grid grid-cols-1 md:grid-cols-[100px_1fr_120px_1fr] gap-y-10 gap-x-6 text-[14px]">
              
              {/* Row 1 */}
              <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1">OPEN DAILY</div>
              <div className="text-white/80 leading-relaxed">
                 09.00 AM - 08.00 PM
              </div>
              <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1">OUR LOCATIONS</div>
              <div className="text-white/80 leading-relaxed max-w-[240px]">
                 Jl. Raya Petitenget No. 88 Kerobokan, Kuta Utara Badung, Bali 80361 Indonesia
              </div>

              {/* Row 2 */}
              <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1">OPEN DAY</div>
              <div className="text-white/80 leading-relaxed">
                 MONDAY - FRIDAY
              </div>
              {/* Empty Label Col for alignment */}
              <div className="hidden md:block"></div> 
              <div className="text-white/80 leading-relaxed max-w-[240px]">
                 42 Kensington High Street Kensington District London W8 5EP United Kingdom
              </div>

              {/* Row 3 */}
              <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1">CONTACT US</div>
              <div className="text-white/80 leading-relaxed flex flex-col gap-1">
                 <span>(+62) 815 7565 8150</span>
                 <span>(+02) 555-0124</span>
              </div>
              <div className="hidden md:block col-span-2"></div>

              {/* Row 4 */}
              <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1">EMAIL</div>
              <div className="text-white/80 leading-relaxed uppercase">
                 HELLO@GLOWDENT.COM
              </div>
              <div className="hidden md:block col-span-2"></div>

           </div>
        </div>

        {/* Middle Section: Nav & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-12">
           
           {/* Navigation Links */}
           <div className="flex flex-wrap gap-8 md:gap-10">
              {['About', 'Treatment', 'Products', 'Testimonial', 'FAQ'].map((item) => (
                 <a 
                   key={item} 
                   href={`#${item.toLowerCase()}`}
                   className="text-[15px] text-white/60 hover:text-white transition-colors"
                 >
                    {item}
                 </a>
              ))}
           </div>

           {/* Social Pills */}
           <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2 md:hidden">FOLLOW US</span>
              <div className="flex flex-wrap gap-3">
                 {['Instagram', 'Facebook', 'Twitter', 'Youtube'].map((social) => (
                    <a 
                      key={social} 
                      href="#" 
                      className="px-6 py-2.5 rounded-[12px] bg-[#1a2e29] border border-white/5 text-white/90 text-[13px] font-medium hover:bg-[#25423a] transition-colors"
                    >
                       {social}
                    </a>
                 ))}
              </div>
           </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-white/40 uppercase tracking-widest">
           <div>
              © 2026 © 2024 ASSEMBLY MOVEMENT LTD. ALL RIGHTS RESERVED.
           </div>
           <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">TERMS & CONDITIONS</a>
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;