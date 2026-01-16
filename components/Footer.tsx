import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useContact } from '../context/ContactContext';
import { useCms } from '../context/CmsContext';

// Custom Solid SVGs for Brand Icons
const IconInstagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2C22,19.4 19.4,22 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8C2,4.6 4.6,2 7.8,2ZM7.6,4C5.6,4 4,5.6 4,7.6V16.4C4,18.4 5.6,20 7.6,20H16.4C18.4,20 20,18.4 20,16.4V7.6C20,5.6 18.4,4 16.4,4H7.6ZM12,7C14.8,7 17,9.2 17,12C17,14.8 14.8,17 12,17C9.2,17 7,14.8 7,12C7,9.2 9.2,7 12,7ZM12,9C10.3,9 9,10.3 9,12C9,13.7 10.3,15 12,15C13.7,15 15,13.7 15,12C15,10.3 13.7,9 12,9ZM17.2,5.5C17.2,4.9 17.7,4.4 18.2,4.4C18.8,4.4 19.2,4.9 19.2,5.5C19.2,6.1 18.8,6.6 18.2,6.6C17.7,6.6 17.2,6.1 17.2,5.5Z" fillRule="evenodd"/>
  </svg>
);

const IconFacebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const IconTwitter = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const IconYoutube = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.498-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Footer: React.FC = () => {
  const { openContact } = useContact();
  const { loginAdmin, isAdmin } = useCms();
  const [clickCount, setClickCount] = useState(0);

  // Secret Trigger Logic
  const handleSecretClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAdmin) return; // Already admin
    
    setClickCount(prev => {
      const newVal = prev + 1;
      if (newVal === 3) {
        // Trigger Admin Mode
        const password = window.prompt("Enter Admin PIN (Hint: it's empty, just press OK):");
        if (password !== null) { // User didn't cancel
          alert("Admin Mode Enabled! You can now edit images.");
          loginAdmin();
        }
        return 0;
      }
      return newVal;
    });
  };

  const SOCIAL_LINKS = [
    { icon: IconInstagram, href: '#', label: 'Instagram' },
    { icon: IconFacebook, href: '#', label: 'Facebook' },
    { icon: IconTwitter, href: '#', label: 'Twitter' },
    { icon: IconYoutube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-black text-white pt-16 md:pt-24 pb-8 md:pb-12 border-t border-white/5" id="footer">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-12 xl:gap-24 mb-16 md:mb-32">
           <div className="max-w-[500px] flex flex-col gap-8 md:gap-12">
              <h2 className="text-[32px] md:text-[52px] leading-[1.1] font-normal tracking-[-1px]">
                Begin Your Journey Into Inner Serenity.
              </h2>
              
              <button 
                onClick={openContact}
                className="w-fit bg-white rounded-full p-1.5 pl-6 pr-1.5 flex items-center gap-6 group hover:bg-gray-100 transition-colors shadow-lg active:scale-95"
              >
                 <span className="text-[#1a2e29] font-bold text-[15px] tracking-tight">Book now</span>
                 <div className="w-10 h-10 rounded-full bg-[#2e453e] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ArrowRight size={18} />
                 </div>
              </button>
           </div>
           {/* Detailed Info Grid */}
           <div className="flex-1 w-full xl:w-auto grid grid-cols-1 md:grid-cols-[120px_1fr_120px_1fr] gap-y-8 md:gap-y-12 gap-x-8 text-[14px]">
              <div>
                <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1 mb-2 md:mb-0">OPEN DAILY</div>
                <div className="text-white/80 leading-relaxed md:hidden">09.00 AM - 08.00 PM</div>
              </div>
              <div className="text-white/80 leading-relaxed hidden md:block">09.00 AM - 08.00 PM</div>

              <div>
                <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1 mb-2 md:mb-0">OUR LOCATIONS</div>
                <div className="text-white/80 leading-relaxed max-w-[240px] md:hidden">
                   Jl. Raya Petitenget No. 88 Kerobokan, Kuta Utara Badung, Bali 80361 Indonesia
                </div>
              </div>
              <div className="text-white/80 leading-relaxed max-w-[240px] hidden md:block">
                 Jl. Raya Petitenget No. 88 Kerobokan, Kuta Utara Badung, Bali 80361 Indonesia
              </div>

              <div>
                <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1 mb-2 md:mb-0">OPEN DAY</div>
                <div className="text-white/80 leading-relaxed md:hidden">MONDAY - FRIDAY</div>
              </div>
              <div className="text-white/80 leading-relaxed hidden md:block">MONDAY - FRIDAY</div>
              
              <div className="hidden md:block"></div> 
              <div className="text-white/80 leading-relaxed max-w-[240px] mt-2 md:mt-0">
                 42 Kensington High Street Kensington District London W8 5EP United Kingdom
              </div>

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

              <div>
                <div className="text-white/50 text-[11px] font-bold tracking-widest uppercase pt-1 mb-2 md:mb-0">EMAIL</div>
                <div className="text-white/80 leading-relaxed uppercase md:hidden">HELLO@GLOWDENT.COM</div>
              </div>
              <div className="text-white/80 leading-relaxed uppercase hidden md:block">HELLO@GLOWDENT.COM</div>
              <div className="hidden md:block col-span-2"></div>
           </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-12 md:mb-16">
           <div className="flex flex-wrap gap-x-8 gap-y-4 md:gap-12">
              {NAV_LINKS.map((item) => (
                 <a key={item.label} href={item.href} className="text-[14px] md:text-[15px] text-white/60 hover:text-white transition-colors">{item.label}</a>
              ))}
           </div>
           <div className="flex flex-col gap-4 w-full md:w-auto">
              <span className="text-[10px] uppercase tracking-widest text-white/40 md:hidden">FOLLOW US</span>
              <div className="flex gap-4">
                 {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                    <a key={label} href={href} aria-label={label} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 text-white/70 flex items-center justify-center hover:bg-white hover:text-[#1a2e29] hover:scale-110 transition-all duration-300 active:scale-95 shadow-sm">
                       <Icon className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                    </a>
                 ))}
              </div>
           </div>
        </div>

        {/* Bottom Section with SECRET TRIGGER */}
        <div className="border-t border-white/10 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] md:text-[11px] text-white/40 uppercase tracking-widest">
           <div 
             onClick={handleSecretClick} 
             className="cursor-default select-none hover:text-white/60 transition-colors"
             title={clickCount > 0 ? `${3 - clickCount} more clicks...` : ''}
           >
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