import React, { useState } from 'react';
import { Search, Star, ShoppingBag, ArrowRight, ArrowLeft, Plus } from 'lucide-react';

const CATEGORIES = [
  'Whey Protein', 'Pre-Workout', 'Creatine', 'Vitamins', 'Gear', 'BCAA'
];

// Data: 3 Pages, 5 Items per page.
// Item 0 is always the "Featured" large item on the left.
const PRODUCT_PAGES = [
  // PAGE 1: CORE SUPPLEMENTS
  [
    {
      id: 'p1_main',
      name: 'Isolate Gold Standard',
      category: 'Whey Protein',
      price: '$65.00',
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=800&h=1000',
      desc: '100% Whey Isolate for maximum absorption and lean muscle recovery.',
      isFeatured: true
    },
    {
      id: 'p1_1',
      name: 'Pre-Workout Igniter',
      category: 'Energy',
      price: '$42.00',
      image: 'https://images.unsplash.com/photo-1550572017-4fcdbb560444?auto=format&fit=crop&q=80&w=500&h=500'
    },
    {
      id: 'p1_2',
      name: 'Creatine Monohydrate',
      category: 'Strength',
      price: '$35.00',
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=500&h=500'
    },
    {
      id: 'p1_3',
      name: 'BCAA Energy +',
      category: 'Recovery',
      price: '$28.00',
      image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=500&h=500'
    },
    {
      id: 'p1_4',
      name: 'Omega-3 Fish Oil',
      category: 'Health',
      price: '$22.00',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500&h=500'
    }
  ],
  // PAGE 2: VITAMINS & WELLNESS
  [
    {
      id: 'p2_main',
      name: 'Daily Multivitamin Pack',
      category: 'Wellness',
      price: '$45.00',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd0?auto=format&fit=crop&q=80&w=800&h=1000',
      desc: 'Complete daily nutritional support optimized for active athletes.',
      isFeatured: true
    },
    {
      id: 'p2_1',
      name: 'Vitamin D3 + K2',
      category: 'Bone Health',
      price: '$18.00',
      image: 'https://images.unsplash.com/photo-1616671276445-162152671f8f?auto=format&fit=crop&q=80&w=500&h=500'
    },
    {
      id: 'p2_2',
      name: 'ZMA Night Recovery',
      category: 'Sleep',
      price: '$30.00',
      image: 'https://images.unsplash.com/photo-1550572017-91a5cbdf8d05?auto=format&fit=crop&q=80&w=500&h=500'
    },
    {
      id: 'p2_3',
      name: 'Green Superfood',
      category: 'Detox',
      price: '$38.00',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=500&h=500'
    },
    {
      id: 'p2_4',
      name: 'Collagen Peptides',
      category: 'Joints',
      price: '$40.00',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=500&h=500'
    }
  ],
  // PAGE 3: GEAR & ACCESSORIES
  [
    {
      id: 'p3_main',
      name: 'Pro Lifting Straps',
      category: 'Gear',
      price: '$25.00',
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800&h=1000',
      desc: 'Heavy-duty cotton straps with neoprene padding for heavy lifts.',
      isFeatured: true
    },
    {
      id: 'p3_1',
      name: 'Metal Shaker Bottle',
      category: 'Accessories',
      price: '$20.00',
      image: 'https://images.unsplash.com/photo-1577224682227-28563e0d8692?auto=format&fit=crop&q=80&w=500&h=500'
    },
    {
      id: 'p3_2',
      name: 'Resistance Bands',
      category: 'Training',
      price: '$15.00',
      image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=500&h=500'
    },
    {
      id: 'p3_3',
      name: 'Gym Duffel Bag',
      category: 'Gear',
      price: '$55.00',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=500&h=500'
    },
    {
      id: 'p3_4',
      name: 'Lifting Belt Leather',
      category: 'Gear',
      price: '$85.00',
      image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=500&h=500'
    }
  ]
];

const Products: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalPages = PRODUCT_PAGES.length;
  const currentProducts = PRODUCT_PAGES[currentPage];

  // Helper to handle page change with simple delay for "animation" feel
  const handlePageChange = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentPage((prev) => {
        if (direction === 'next') return (prev + 1) % totalPages;
        return (prev - 1 + totalPages) % totalPages;
      });
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section className="py-16 md:py-32 border-t border-black/5 bg-[#f6f7f7]" id="products">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-4 text-ink-muted text-[10px] md:text-xs tracking-widest uppercase">
                <span>// STORE</span>
                <span>[ 05 ]</span>
             </div>
             <h2 className="text-[36px] md:text-[56px] leading-[1] tracking-[-1px] md:tracking-[-1.5px] text-ink font-normal">
                Fuel your body<br/>with the best.
             </h2>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-6">
             {/* Simple Category Pills - Hidden on mobile to save space or could be scrolling */}
             <div className="hidden lg:flex gap-2">
               {CATEGORIES.slice(0, 3).map(cat => (
                 <span key={cat} className="px-4 py-2 rounded-full border border-black/10 text-[13px] font-medium text-ink/60 hover:bg-white hover:text-ink transition-colors cursor-pointer">
                   {cat}
                 </span>
               ))}
               <span className="px-4 py-2 rounded-full border border-black/10 text-[13px] font-medium text-ink/60">+3</span>
             </div>

             {/* Navigation Arrows */}
             <div className="flex gap-3 ml-auto md:ml-0">
                <button 
                  onClick={() => handlePageChange('prev')}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-[#1a2e29] hover:text-white transition-all active:scale-95"
                >
                   <ArrowLeft className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                </button>
                <button 
                  onClick={() => handlePageChange('next')}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-[#1a2e29] hover:text-white transition-all active:scale-95"
                >
                   <ArrowRight className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                </button>
             </div>
          </div>
        </div>

        {/* Product Grid (Bento Style) */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
           
           {/* Item 0: FEATURED (Large, spans 2 cols & 2 rows on Desktop) */}
           <div className="lg:col-span-2 lg:row-span-2 relative h-[420px] lg:h-auto rounded-[24px] md:rounded-[32px] overflow-hidden bg-white group cursor-pointer shadow-sm hover:shadow-card transition-all">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${currentProducts[0].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/20 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                 Best Seller
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col gap-3 md:gap-4">
                 <div className="flex justify-between items-end text-white">
                    <div>
                       <div className="text-white/70 text-sm mb-1">{currentProducts[0].category}</div>
                       <h3 className="text-[28px] md:text-[32px] font-medium leading-tight">{currentProducts[0].name}</h3>
                    </div>
                    <div className="text-[20px] md:text-[24px] font-medium">{currentProducts[0].price}</div>
                 </div>
                 
                 <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-white/80 text-[15px] mb-6 pt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                       {currentProducts[0].desc}
                    </p>
                    <button className="w-full py-4 bg-white text-[#1a2e29] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#cfe7a7] transition-colors">
                       <ShoppingBag size={18} />
                       Add to Cart
                    </button>
                 </div>
              </div>
           </div>

           {/* Items 1-4: Standard Grid Items */}
           {currentProducts.slice(1).map((product, idx) => (
             <div key={idx} className="relative aspect-[4/5] md:aspect-auto md:h-[320px] rounded-[24px] overflow-hidden bg-white p-4 flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-card transition-all">
                
                {/* Image Area */}
                <div className="relative w-full h-[65%] rounded-[18px] overflow-hidden bg-[#f4f4f4] mb-4">
                   <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${product.image}')` }}
                   />
                   {/* Add Button Overlay */}
                   <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-ink shadow-md translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                      <Plus size={20} />
                   </button>
                </div>

                {/* Info Area */}
                <div className="px-1 pb-1">
                   <div className="flex justify-between items-start mb-1">
                      <div className="text-[11px] text-ink/40 font-bold uppercase tracking-wider">{product.category}</div>
                      <div className="text-[15px] font-bold text-ink">{product.price}</div>
                   </div>
                   <h4 className="text-[18px] leading-tight font-medium text-ink group-hover:text-[#1a2e29] transition-colors">
                      {product.name}
                   </h4>
                </div>

             </div>
           ))}

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
           {PRODUCT_PAGES.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${idx === currentPage ? 'w-12 bg-ink' : 'w-2 bg-ink/20'}`}
              />
           ))}
        </div>

      </div>
    </section>
  );
};

export default Products;