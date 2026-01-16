import React, { useRef, useState } from 'react';
import { useCms } from '../context/CmsContext';
import { Camera, Loader2 } from 'lucide-react';

interface CmsImageProps {
  id: string;
  defaultSrc: string;
  alt?: string;
  className?: string;
  asBackground?: boolean;
  children?: React.ReactNode; 
  imgStyle?: React.CSSProperties;
  editBtnPosition?: string; // New prop to customize button placement (e.g. "top-24 right-4")
}

const CmsImage: React.FC<CmsImageProps> = ({ 
  id, 
  defaultSrc, 
  alt = "Image", 
  className = "", 
  asBackground = false,
  children,
  imgStyle,
  editBtnPosition = "top-4 right-4" // Default to top-right corner
}) => {
  const { isEditMode, getImage, updateImage } = useCms();
  const [isLoading, setIsLoading] = useState(false);
  const currentSrc = getImage(id, defaultSrc);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      updateImage(id, e.target.files[0]);
      setIsLoading(false);
    }
  };

  // Overlay for Edit Mode
  const EditOverlay = () => (
    <div 
      className="absolute inset-0 z-[90] pointer-events-none group/edit"
    >
      {/* Dashed Border Indicator */}
      <div className="absolute inset-0 border-4 border-brand-green/60 border-dashed rounded-lg opacity-60" />
      
      {/* Clickable Button/Label */}
      <label
        className={`absolute ${editBtnPosition} pointer-events-auto cursor-pointer bg-white text-[#1a2e29] p-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-110 hover:bg-brand-green active:scale-95 transition-all flex items-center gap-2 z-[100] border-2 border-white/20`}
        title="Change Image"
        onClick={(e) => e.stopPropagation()} // Prevent triggering parent clicks (like links)
      >
        {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Camera size={18} />}
        <span className="hidden md:block text-xs font-extrabold uppercase tracking-wider">
          {isLoading ? '...' : 'Edit'}
        </span>
        <input 
          type="file" 
          onChange={handleFileChange} 
          accept="image/*" 
          className="hidden" 
        />
      </label>
    </div>
  );

  if (asBackground) {
    return (
      <div className={`relative group ${className}`} style={{ ...imgStyle }}>
        {/* Background Layer */}
        <div 
           className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
           style={{ backgroundImage: `url('${currentSrc}')` }}
           key={currentSrc} 
        />
        {/* Content Layer */}
        <div className="relative z-10 h-full w-full pointer-events-auto">
           {children}
        </div>
        {isEditMode && <EditOverlay />}
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      <img 
        src={currentSrc} 
        alt={alt} 
        className="w-full h-full object-cover transition-opacity duration-500"
        style={imgStyle}
        key={currentSrc}
      />
      {isEditMode && <EditOverlay />}
      {children}
    </div>
  );
};

export default CmsImage;