import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-[60px] md:py-[100px] border-t border-black/5" id="about">
      <div className="max-w-[1240px] w-[calc(100%-48px)] mx-auto">
        {/* Header Label */}
        <div className="flex justify-between items-center text-ink-muted text-[10px] md:text-xs tracking-widest uppercase mb-12">
          <div>// ABOUT US</div>
          <div>[ 02 ]</div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* COLUMN 1: Portrait & Rating (3 spans) */}
          {/* Mobile Order: 3 (Last) */}
          <div className="lg:col-span-3 flex flex-col gap-4 order-3 lg:order-1 pt-4 lg:pt-0">
            <div className="relative aspect-[3/4] w-full rounded-[24px] overflow-hidden bg-[#e5e5e5] group cursor-pointer shadow-sm">
               <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800&h=1000')" }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6 right-6 text-white text-[18px] md:text-[20px] leading-snug font-normal italic tracking-wide">
                  “ This platform transformed my daily routine. ”
               </div>
            </div>
            
            <div className="flex items-center gap-2 text-ink pl-1">
               <Star className="w-5 h-5 fill-[#fea920] text-[#fea920]" />
               <span className="font-bold text-[16px