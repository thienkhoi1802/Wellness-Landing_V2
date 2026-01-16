import React, { useRef, useState } from 'react';
import { useCms } from '../context/CmsContext';
import { Camera, Loader2 } from 'lucide-react';

interface CmsImageProps {
  id: string;
  defaultSrc: string;
  alt?: string;
  className?: string;
  asBackground?: boolean;
  children?: React.ReactNode; // For content inside background images
  imgStyle?: React.CSSProperties;
}

const CmsImage: React.FC<CmsImageProps> = ({ 
  id, 
  defaultSrc, 
  alt = "Image", 
  className = "", 
  asBackground = false,
  children,
  imgStyle
}) => {
  const { isEditMode, getImage, updateImage } = useCms();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const currentSrc = getImage(id, defaultSrc);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsLoading(true);
      // Small delay to show loading state for UX
      await new Promise(resolve => setTimeout(resolve, 500));
      updateImage(id, e.target.files[0]);
      setIsLoading(false);
      // Reset input so the same file can be selected again if needed
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const triggerUpload = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  // Overlay for Edit Mode
  const EditOverlay = () => (
    <div 
      onClick={triggerUpload}
      className="absolute inset-0 bg-black/40 z-[60] flex items-center justify-center cursor-pointer border-4 border-brand-green/80 border-dashed m-1 rounded-lg backdrop-blur-[2px] transition-all hover:bg-black/60 group animate-fade-in"
    >
      <div className="flex flex-col items-center text-white gap-2 pointer-events-none">
        <div className="p-3 bg-brand-green rounded-full text-black shadow-lg group-hover:scale-110 transition-transform duration-300">
           {isLoading ? <Loader2 size={24} className="animate-spin" /> : <Camera size={24} />}
        </div>
        <span className="text-xs font-bold uppercase tracking-wider bg-black/60 px-2 py-1 rounded shadow-sm">
          {isLoading ? 'Processing...' : 'Change Image'}
        </span>
      </div>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />
    </div>
  );

  if (asBackground) {
    return (
      <div className={`relative ${className}`} style={{ ...imgStyle }}>
        {/* Background Layer */}
        <div 
           className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
           style={{ backgroundImage: `url('${currentSrc}')` }}
           key={currentSrc} // Force animation on change
        />
        {/* Content Layer (z-index must be higher than bg but lower than overlay) */}
        <div className="relative z-10 h-full w-full pointer-events-auto">
           {children}
        </div>
        {isEditMode && <EditOverlay />}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
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