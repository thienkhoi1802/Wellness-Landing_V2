import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { X, Image as ImageIcon, RotateCcw, Upload, Grid } from 'lucide-react';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const { registeredImages, getImage, updateImage, resetImage, images: storedImages } = useCms();
  const [activeTab, setActiveTab] = useState<'active' | 'all'>('active');

  if (!isOpen) return null;

  const handleUpload = (id: string) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        updateImage(id, file);
      }
    };
    input.click();
  };

  // Filter images logic
  const imagesToShow = registeredImages;

  return (
    <div className="fixed inset-0 z-[200] bg-[#0e1413] flex flex-col text-white animate-fade-in">
      {/* Header */}
      <div className="px-8 py-5 border-b border-white/10 flex justify-between items-center bg-[#151c1a]">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
            <Grid size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Media Manager</h1>
            <p className="text-xs text-white/40 uppercase tracking-widest">{imagesToShow.length} ACTIVE IMAGES</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {imagesToShow.map((id) => {
            const currentSrc = getImage(id, ''); // We get current, but we might not know default if it's not in store.
            // Note: Since getImage falls back to defaultSrc passed as arg, and here we don't know the component's defaultSrc prop, 
            // we primarily rely on what's visually rendered or stored. 
            // If it's not customized, we might not see the original thumbnail here easily without complex state lifting.
            // BUT, for customized images, we see them. For non-customized, we might see empty if we don't pass default.
            // IMPROVEMENT: We will just show the ID card if no image data is available in context, 
            // but usually we want to see the image. 
            // LIMITATION: In this simple architecture, the Context doesn't know the 'defaultSrc' prop of the component.
            // FIX: We will display a placeholder if not customized, or the custom image.
            
            const isCustomized = !!storedImages[id];
            
            return (
              <div key={id} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-900/10">
                {/* Image Preview Area */}
                <div className="aspect-square bg-black/20 relative overflow-hidden">
                  {isCustomized ? (
                    <img 
                      src={storedImages[id]} 
                      alt={id} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white/20 gap-2 bg-[#1a2e29]/50">
                      <ImageIcon size={32} />
                      <span className="text-[10px] uppercase font-medium">Default</span>
                    </div>
                  )}
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                    <button 
                      onClick={() => handleUpload(id)}
                      className="px-4 py-2 bg-blue-600 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-blue-500 flex items-center gap-2"
                    >
                      <Upload size={14} /> Replace
                    </button>
                    {isCustomized && (
                      <button 
                        onClick={() => resetImage(id)}
                        className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/50 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-red-500 hover:text-white flex items-center gap-2"
                      >
                        <RotateCcw size={14} /> Reset
                      </button>
                    )}
                  </div>
                </div>

                {/* Footer Info */}
                <div className="p-3 bg-[#111]">
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider truncate" title={id}>ID: {id}</div>
                  <div className="flex justify-between items-center mt-1">
                    <span className={`w-2 h-2 rounded-full ${isCustomized ? 'bg-blue-500' : 'bg-gray-600'}`}></span>
                    <span className="text-[9px] text-white/20">{isCustomized ? 'CUSTOM' : 'DEFAULT'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Footer Hint */}
      <div className="bg-[#151c1a] border-t border-white/10 p-4 text-center text-white/30 text-xs">
        Images are stored locally in your browser cache.
      </div>
    </div>
  );
};

export default AdminDashboard;