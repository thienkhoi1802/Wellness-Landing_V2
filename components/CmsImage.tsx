import React, { useRef, useState } from 'react';
import { useCms } from '../context/CmsContext';
import { ImagePlus, UploadCloud, RefreshCcw } from 'lucide-react';

interface CmsImageProps {
  id: string;
  defaultSrc: string;
  alt?: string;
  className?: string;
  asBackground?: boolean;
  children?: React.ReactNode; 
  imgStyle?: React.CSSProperties;
  editBtnPosition?: string; // Deprecated in this new design but kept for prop compatibility
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
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentSrc = getImage(id, defaultSrc);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsLoading(true);
      // Fake network delay for UX feel
      await new Promise(resolve => setTimeout(resolve, 800));
      updateImage(id, e.target.files[0]);
      setIsLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const triggerUpload = (e: React.MouseEvent) => {
    // Only trigger if in edit mode
    if (!isEditMode) return;
    
    e.preventDefault();
    e.stopPropagation(); 
    fileInputRef.current?.click();
  };

  // Modern "Whole Area" Overlay
  const EditShield = () => (
    <div 
      onClick={triggerUpload}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute inset-0 z-[100] cursor-pointer transition-all duration-300 flex items-center justify-center group"
      style={{
        backgroundColor: isHovered ? 'rgba(30, 40, 35, 0.6)' : 'rgba(30, 40, 35, 0.1)',
        backdropFilter: isHovered ? 'blur(2px)' : 'none',
        border: '3px dashed #3b82f6' // Always visible blue dashed border
      }}
      title="Click anywhere to change this image"
    >
      {/* Central Action Prompt */}
      <div className={`transform transition-all duration-300 flex flex-col items-center gap-2 ${isHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
         <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce-slight">
            {isLoading ? <RefreshCcw className="animate-spin" size={24} /> : <UploadCloud size={28} />}
         </div>
         <span className="bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
            {isLoading ? 'Uploading...' : 'Click to Replace'}
         </span>
      </div>

      {/* Persistent Tiny Badge (so user knows it's editable even when not hovering) */}
      {!isHovered && (
        <div className="absolute top-2 right-2 bg-blue-600/90 text-white p-1.5 rounded-md shadow-sm pointer-events-none">
          <ImagePlus size={14} />
        </div>
      )}

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
           key={currentSrc} 
        />
        
        {/* Content Layer */}
        <div className="relative z-10 h-full w-full pointer-events-auto">
           {children}
        </div>

        {/* The Shield sits on TOP of the content when editing */}
        {isEditMode && <EditShield />}
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
      {/* Shield sits on top */}
      {isEditMode && <EditShield />}
      
      {/* If simple image wrapper has children (overlays), show them underneath the shield in edit mode */}
      {children}
    </div>
  );
};

export default CmsImage;