import React, { useRef, useState } from 'react';
import { useCms } from '../context/CmsContext';
import { Camera, Loader2, ImagePlus } from 'lucide-react';

interface CmsImageProps {
  id: string;
  defaultSrc: string;
  alt?: string;
  className?: string;
  asBackground?: boolean;
  children?: React.ReactNode; 
  imgStyle?: React.CSSProperties;
  editBtnPosition?: string; // Customize button placement
}

const CmsImage: React.FC<CmsImageProps> = ({ 
  id, 
  defaultSrc, 
  alt = "Image", 
  className = "", 
  asBackground = false,
  children,
  imgStyle,
  editBtnPosition = "top-4 right-4" 
}) => {
  const { isEditMode, getImage, updateImage } = useCms();
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentSrc = getImage(id, defaultSrc);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      updateImage(id, e.target.files[0]);
      setIsLoading(false);
      // Reset input
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const triggerUpload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Stop click from bubbling to parent elements (like links or cards)
    fileInputRef.current?.click();
  };

  // Overlay for Edit Mode - High Visibility
  const EditOverlay = () => (
    <div className="absolute inset-0 z-[100] pointer-events-none">
      {/* High Visibility Border */}
      <div className="absolute inset-0 border-4 border-blue-500/60 border-dashed bg-blue-500/5 backdrop-blur-[1px] animate-pulse" />
      
      {/* Explicit Button Trigger */}
      <button
        onClick={triggerUpload}
        className={`absolute ${editBtnPosition} pointer-events-auto cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-lg shadow-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-white/20`}
        title="Change Image"
        type="button"
      >
        {isLoading ? <Loader2 size={16} className="animate-spin" /> : <ImagePlus size={16} />}
        <span className="text-[10px] font-bold uppercase tracking-wider">
          {isLoading ? 'Uploading...' : 'Change Photo'}
        </span>
      </button>
      
      {/* Hidden Input */}
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