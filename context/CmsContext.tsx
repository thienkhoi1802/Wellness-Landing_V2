import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface CmsContextType {
  images: Record<string, string>;
  isEditMode: boolean;
  isAdmin: boolean;
  toggleEditMode: () => void;
  updateImage: (id: string, file: File) => void;
  resetImage: (id: string) => void;
  getImage: (id: string, defaultSrc: string) => string;
  logoutAdmin: () => void;
  loginAdmin: () => void;
  registerImage: (id: string, label?: string) => void;
  unregisterImage: (id: string) => void;
  registeredImages: string[]; // List of IDs
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [registeredImages, setRegisteredImages] = useState<string[]>([]);

  useEffect(() => {
    // 1. Load Images
    const savedImages = localStorage.getItem('cms_images');
    if (savedImages) {
      try {
        setImages(JSON.parse(savedImages));
      } catch (e) {
        console.error("Failed to parse CMS data", e);
      }
    }

    // 2. Check Admin Status
    const urlParams = new URLSearchParams(window.location.search);
    const isUrlAdmin = urlParams.get('admin') === 'true';
    const isStoredAdmin = localStorage.getItem('cms_is_admin') === 'true';

    if (isUrlAdmin || isStoredAdmin) {
      setIsAdmin(true);
      // Auto enable edit mode if admin
      // setIsEditMode(true); 
    }
  }, []);

  const toggleEditMode = () => setIsEditMode(prev => !prev);

  const loginAdmin = () => {
    setIsAdmin(true);
    setIsEditMode(true);
    localStorage.setItem('cms_is_admin', 'true');
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    setIsEditMode(false);
    localStorage.removeItem('cms_is_admin');
    window.location.reload();
  };

  const updateImage = (id: string, file: File) => {
    // Limit size to prevent LocalStorage crash (Max ~3-5MB usually)
    if (file.size > 1024 * 1024 * 2) {
      alert("Please choose an image under 2MB for this local demo.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setImages(prevImages => {
        const newImages = { ...prevImages, [id]: base64String };
        try {
          localStorage.setItem('cms_images', JSON.stringify(newImages));
        } catch (e) {
          console.error("Storage full or error", e);
          alert("Browser storage is full! Image displayed but not saved persistently.");
        }
        return newImages;
      });
    };
    reader.readAsDataURL(file);
  };

  const resetImage = (id: string) => {
    setImages(prev => {
      const newImages = { ...prev };
      delete newImages[id];
      localStorage.setItem('cms_images', JSON.stringify(newImages));
      return newImages;
    });
  };

  const getImage = (id: string, defaultSrc: string) => {
    return images[id] || defaultSrc;
  };

  // Registry System
  const registerImage = useCallback((id: string) => {
    setRegisteredImages(prev => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  }, []);

  const unregisterImage = useCallback((id: string) => {
    setRegisteredImages(prev => prev.filter(imgId => imgId !== id));
  }, []);

  return (
    <CmsContext.Provider value={{ 
      images, 
      isEditMode, 
      isAdmin, 
      toggleEditMode, 
      updateImage, 
      resetImage,
      getImage, 
      logoutAdmin, 
      loginAdmin,
      registerImage,
      unregisterImage,
      registeredImages
    }}>
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