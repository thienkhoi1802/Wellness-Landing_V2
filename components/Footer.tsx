import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f1716] text-white/80 py-[46px] pb-6 border-t border-white/10" id="footer">
      <div className="max-w-[1200px] w-[calc(100%-48px)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-8 items-start pb-6 border-b border-white/10">
           {/* Branding Col */}
           <div className="flex flex-col gap-3">
              <div className="text-sm tracking-tight text-white/95 font-medium">Bring your body into inner serenity.</div>
              <p className="text-xs leading-[1.6] text-white/70 max-w-[420px]">
                 A gentle approach to wellness. Thoughtfully guided by care that supports everyday life.
              </p>
              <div className="mt-2">
                 <button className="px-3.5 py-2.5 rounded-full bg-white text-ink text-[13px] font-medium hover:bg-gray-200 active:translate-y-[1px] transition-all">
                    Book now
                 </button>
              </div>
           </div>

           {/* Sitemap */}
           <div className="flex flex-col gap-1">
              <div className="text-sm tracking-tight text-white/95 font-medium mb-1">Sitemap</div>
              <a href="#about" className="text-xs text-white/70 py-1 hover:text-white transition-colors">About</a>
              <a href="#nutrition" className="text-xs text-white/70 py-1 hover:text-white transition-colors">Treatment</a>
              <a href="#products" className="text-xs text-white/70 py-1 hover:text-white transition-colors">Products</a>
              <a href="#testimonial" className="text-xs text-white/70 py-1 hover:text-white transition-colors">Testimonial</a>
              <a href="#faq" className="text-xs text-white/70 py-1 hover:text-white transition-colors">FAQ</a>
           </div>

           {/* Contact */}
           <div className="flex flex-col gap-1">
              <div className="text-sm tracking-tight text-white/95 font-medium mb-1">Contact</div>
              <a href="#" className="text-xs text-white/70 py-1 hover:text-white transition-colors">Email: hello@wellness.com</a>
              <a href="#" className="text-xs text-white/70 py-1 hover:text-white transition-colors">Phone: +00 000 000</a>
              <a href="#" className="text-xs text-white/70 py-1 hover:text-white transition-colors">Location: Bali, ID</a>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-[18px] text-white/50 text-[11px] tracking-widest uppercase gap-4">
           <div>© 2026 Wellness</div>
           <div className="flex gap-4">
              <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
              <span className="cursor-pointer hover:text-white transition-colors">Facebook</span>
              <span className="cursor-pointer hover:text-white transition-colors">Twitter</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
