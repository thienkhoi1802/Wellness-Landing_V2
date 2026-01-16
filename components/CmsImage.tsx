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
      className="absolute inset-0 z-[60] border-4 border-brand-green/80 border-dashed m-1 rounded-lg pointer-events-none transition-all duration-300 group"
    >
      {/* Dimmer - only visible on hover of the container area to indicate selection */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> 
      
      {/* Clickable Button - Positioned Center Right to avoid headers (top) and content (center/bottom) */}
      <button
        onClick={triggerUpload}
        className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-auto bg-white text-black p-3 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 z-50 hover:bg-brand-green"
        title="Change Image"
      >
        {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Camera size={20} />}
        <span className="hidden md:block text-xs font-bold uppercase tracking-wide pr-1">
          {isLoading ? '...' : 'Edit'}
        </span>
      </button>
      
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