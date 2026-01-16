import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CmsContextType {
  images: Record<string, string>;
  isEditMode: boolean;
  isAdmin: boolean; // New: Check if user is admin
  toggleEditMode: () => void;
  updateImage: (id: string, file: File) => void;
  getImage: (id: string, defaultSrc: string) => string;
  logoutAdmin: () => void; // New: Logout function
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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
    // Check URL for ?admin=true OR Check LocalStorage
    const urlParams = new URLSearchParams(window.location.search);
    const isUrlAdmin = urlParams.get('admin') === 'true';
    const isStoredAdmin = localStorage.getItem('cms_is_admin') === 'true';

    if (isUrlAdmin || isStoredAdmin) {
      setIsAdmin(true);
      // Persist admin status so they don't have to type ?admin=true every time
      localStorage.setItem('cms_is_admin', 'true');
      
      // Optional: Clean URL to hide the param (Purely aesthetic)
      if (isUrlAdmin) {
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.pushState({path:newUrl},'',newUrl);
      }
    }
  }, []);

  const toggleEditMode = () => setIsEditMode(prev => !prev);

  const logoutAdmin = () => {
    setIsAdmin(false);
    setIsEditMode(false);
    localStorage.removeItem('cms_is_admin');
    window.location.reload(); // Reload to clear state cleanly
  };

  const updateImage = (id: string, file: File) => {
    if (file.size > 1024 * 1024 * 3) {
      alert("Image is too large for this local demo (Max 3MB).");
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
          alert("Storage full! Image saved in memory only. Clear cache to fix.");
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
    <CmsContext.Provider value={{ images, isEditMode, isAdmin, toggleEditMode, updateImage, getImage, logoutAdmin }}>
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