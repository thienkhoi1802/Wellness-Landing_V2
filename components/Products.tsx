import React, { useState } from 'react';
import { Search, Star, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';

const CATEGORIES = [
  'Serum', 'Acne treatment', 'Body care', 'Hair care', 'Energy support', 'Scalp care'
];

const DISPLAY_PRODUCTS = [
  {
    id: 'p1',
    name: 'Clarity',
    type: 'Acne Treatment',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=300&h=600',
    bgColor: '#f4f4f4'
  },
  {
    id: 'p2',
    name: 'Reversal',
    type: 'Anti-Aging Cream',
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=300&h=600',
    bgColor: '#f0efe9'
  },
  {
    id: 'p_main',
    name: 'Dawn',
    type: 'Morning Cream',
    desc: 'Revitalizing morning cream that nourishes skin by delivering antioxidants.',
    rating: '5.0',
    price: '$30',
    image: 'https://images.unsplash.com/photo-1556228720-197793d83316?auto=format&fit=crop&q=80&w=500&h=800',
    bgColor: '#e6e4df',
    isFeatured: true
  },
  {
    id: 'p3',
    name: 'Balance',
    type: 'Acne Treatment',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=300&h=600',
    bgColor: '#f2eae5'
  },
  {
    id: 'p4',
    name: 'Bright',
    type: 'Moisture Cream',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=300&h=600',
    bgColor: '#e8e8e8'
  }
];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Acne treatment');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Extract data for easy layout mapping
  const leftProducts = DISPLAY_PRODUCTS.slice(0, 2);
  const featuredProduct = DISPLAY_PRODUCTS[2];
  const rightProducts = DISPLAY_PRODUCTS.slice(3, 5);

  return (
    <section className="py-[60px] border-t border-black/5" id="products">
      <div className="max-w-[1240px] w-[calc(100%-48px)] mx-auto">
        
        {/* Header Label */}
        <div className="flex justify-between items-center text-ink-muted text-[10px] md:text-xs tracking-widest uppercase mb-8">
          <div>// OUR PRODUCTS</div>
          <div>[ 05 ]</div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm font-semibold text-ink mr-2">Filter</span>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-[13px] transition-all ${
                    activeCategory === cat 
                      ? 'bg-[#1a2e29] text-white shadow-md' 
                      : 'bg-[#f6f7f7] text-ink/60 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:w-[280px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40">
              <Search size={16} />
            </div>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#f6f7f7] text-[13px] pl-10 pr-4 py-2.5 rounded-lg outline-none focus:ring-1 focus:ring-black/10 transition-shadow placeholder:text-ink/30"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-10">
          <h2 className="text-[32px] md:text-[48px] leading-[1.05] tracking-[-1px] text-ink max-w-[600px]">
            Daily formula crafted to support your natural rhythm.
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="flex flex-col xl:flex-row gap-6 items-stretch">
          
          {/* LEFT GROUP: 2 Small Cards */}
          <div className="flex flex-row sm:grid sm:grid-cols-2 xl:flex xl:flex-row gap-6 flex-shrink-0">
            {leftProducts.map((p) => (
              <div 
                key={p.id} 
                className="group relative w-full sm:w-[200px] h-[320px] rounded-[24px] overflow-hidden flex flex-col items-center justify-center cursor-pointer transition-transform hover:-translate-y-1"
                style={{ backgroundColor: p.bgColor }}
              >
                <div className="h-[70%] w-full flex items-center justify-center p-4">
                   {/* Mockup Bottle Effect */}
                   <div className="w-[60px] h-[160px] rounded-full shadow-xl relative overflow-hidden bg-gradient-to-tr from-black/20 to-transparent">
                      <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-overlay" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90 z-10">
                         <span className="text-[8px] uppercase tracking-widest mb-1">HEVA</span>
                         <span className="text-sm font-serif">{p.name}</span>
                         <span className="text-[6px] mt-4 opacity-70 text-center px-1">{p.type}</span>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER HERO: 1 Large Featured Card */}
          <div className="flex-1 min-w-[300px]">
             <div className="relative w-full h-full min-h-[480px] bg-[#e3e3dc] rounded-[32px] overflow-hidden p-8 flex flex-col items-center justify-center group">
                
                {/* Badge */}
                <div className="absolute top-6 left-6 bg-[#ebccc9] text-[#8a4a45] text-[11px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wide">
                  OFF 20%
                </div>

                {/* Big Bottle */}
                <div className="w-[120px] h-[340px] rounded-full shadow-2xl relative overflow-hidden bg-[#1a2e29] mb-12 transition-transform duration-500 group-hover:scale-105">
                   <img src={featuredProduct.image} alt={featuredProduct.name} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-[#e8f5d6] z-10">
                         <span className="text-[10px] uppercase tracking-widest mb-4">HEVA</span>
                         <span className="text-[32px] font-serif mb-2">{featuredProduct.name}</span>
                         <span className="text-[10px] opacity-80 mt-12">Morning Cream</span>
                         <span className="text-[8px] border border-[#e8f5d6]/30 px-1.5 py-0.5 mt-2 rounded">RX ONLY</span>
                   </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#1a2e29] rounded-[20px] p-2 pl-6 flex justify-between items-center text-white shadow-xl">
                   <div className="flex flex-col">
                      <span className="text-[13px] font-medium">Buy now ({featuredProduct.price})</span>
                   </div>
                   <button className="w-10 h-10 bg-white rounded-[14px] flex items-center justify-center text-[#1a2e29] hover:bg-gray-100 transition-colors">
                      <ShoppingBag size={18} />
                   </button>
                </div>
             </div>
          </div>

          {/* RIGHT GROUP: Text + 2 Small Cards */}
          <div className="flex flex-col gap-8 flex-1 xl:max-w-[440px]">
             {/* Text Info */}
             <div className="flex flex-col gap-3 pt-4">
                <h3 className="text-[42px] font-normal text-ink leading-tight">{featuredProduct.name}</h3>
                <p className="text-ink/60 text-[15px] leading-relaxed max-w-[300px]">
                  {featuredProduct.desc}
                </p>
                <div className="flex items-center gap-2 mt-1">
                   <Star size={16} className="fill-[#fea920] text-[#fea920]" />
                   <span className="text-[15px] font-medium text-ink">{featuredProduct.rating}</span>
                   <span className="text-[13px] text-ink/50">Customer ratings</span>
                </div>
             </div>

             {/* 2 Small Cards Grid */}
             <div className="flex flex-row sm:grid sm:grid-cols-2 gap-6 mt-auto">
               {rightProducts.map((p) => (
                  <div 
                    key={p.id} 
                    className="group relative w-full sm:w-[200px] h-[260px] rounded-[24px] overflow-hidden flex flex-col items-center justify-center cursor-pointer transition-transform hover:-translate-y-1"
                    style={{ backgroundColor: p.bgColor }}
                  >
                    <div className="h-[80%] w-full flex items-center justify-center p-4">
                      {/* Mockup Bottle Effect */}
                      <div className="w-[50px] h-[130px] rounded-full shadow-lg relative overflow-hidden bg-gradient-to-b from-[#dcbba6] to-[#cba388]">
                          <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-overlay" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90 z-10">
                            <span className="text-[7px] uppercase tracking-widest mb-1">HEVA</span>
                            <span className="text-xs font-serif">{p.name}</span>
                            <span className="text-[5px] mt-2 opacity-80 text-center px-1 leading-tight">{p.type}</span>
                          </div>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-6 mt-12 md:mt-16">
           <span className="text-xl font-medium text-ink/80 tracking-widest">
             1 <span className="text-ink/30 font-light">/ 8</span>
           </span>
           <div className="flex gap-3">
              <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-ink/60 hover:bg-black/5 transition-all">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-black/80 bg-transparent flex items-center justify-center text-ink hover:bg-black hover:text-white transition-all">
                <ArrowRight size={20} />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Products;