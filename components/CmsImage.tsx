import React, { useRef, useState, useEffect } from 'react';
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
  editBtnPosition?: string;
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
  const { isEditMode, getImage, updateImage, registerImage, unregisterImage } = useCms();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Register with CMS Context on mount
  useEffect(() => {
    registerImage(id);
    return () => {
      unregisterImage(id);
    };
  }, [id, registerImage, unregisterImage]);

  const currentSrc = getImage(id, defaultSrc);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      updateImage(id, e.target.files[0]);
      setIsLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const triggerUpload = (e: React.MouseEvent) => {
    if (!isEditMode) return;
    e.preventDefault();
    e.stopPropagation(); 
    fileInputRef.current?.click();
  };

  const EditShield = () => (
    <div 
      onClick={triggerUpload}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute inset-0 z-[100] cursor-pointer transition-all duration-300 flex items-center justify-center group"
      style={{
        backgroundColor: isHovered ? 'rgba(30, 40, 35, 0.6)' : 'rgba(30, 40, 35, 0.1)',
        backdropFilter: isHovered ? 'blur(2px)' : 'none',
        border: '3px dashed #3b82f6'
      }}
      title={`ID: ${id} - Click to replace`}
    >
      <div className={`transform transition-all duration-300 flex flex-col items-center gap-2 ${isHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
         <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce-slight">
            {isLoading ? <RefreshCcw className="animate-spin" size={24} /> : <UploadCloud size={28} />}
         </div>
         <span className="bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
            {isLoading ? 'Uploading...' : 'Replace Photo'}
         </span>
         <span className="text-[10px] text-white/60 bg-black/50 px-2 py-0.5 rounded">{id}</span>
      </div>

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
        <div 
           className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
           style={{ backgroundImage: `url('${currentSrc}')` }}
           key={currentSrc} 
        />
        <div className="relative z-10 h-full w-full pointer-events-auto">
           {children}
        </div>
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
      {isEditMode && <EditShield />}
      {children}
    </div>
  );
};

export default CmsImage;