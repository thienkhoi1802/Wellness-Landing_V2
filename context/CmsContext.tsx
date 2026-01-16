import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CmsContextType {
  images: Record<string, string>;
  isEditMode: boolean;
  toggleEditMode: () => void;
  updateImage: (id: string, file: File) => void;
  getImage: (id: string, defaultSrc: string) => string;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [isEditMode, setIsEditMode] = useState(false);

  // Load saved images from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('cms_images');
    if (saved) {
      try {
        setImages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse CMS data", e);
      }
    }
  }, []);

  const toggleEditMode = () => setIsEditMode(prev => !prev);

  const updateImage = (id: string, file: File) => {
    // Limit file size to avoid localStorage quota exceed (approx 2MB limit recommended for safety)
    if (file.size > 1024 * 1024 * 3) {
      alert("Image is too large for this local demo (Max 3MB).");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      
      setImages(prevImages => {
        const newImages = { ...prevImages, [id]: base64String };
        // Save to localStorage
        try {
          localStorage.setItem('cms_images', JSON.stringify(newImages));
        } catch (e) {
          console.error("Storage full or error", e);
          alert("Storage full! Image saved in memory only (will be lost on refresh). Clear cache to fix.");
        }
        return newImages;
      });
    };
    reader.readAsDataURL(file);
  };

  const getImage = (id: string, defaultSrc: string) => {
    return images[id] || defaultSrc;
  };

  return (
    <CmsContext.Provider value={{ images, isEditMode, toggleEditMode, updateImage, getImage }}>
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => {
  const context = useContext(CmsContext);
  if (context === undefined) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};