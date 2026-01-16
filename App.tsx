import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Nutrition from './components/Nutrition';
import Discover from './components/Discover';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';
import AdminInbox from './components/AdminInbox';
import { ContactProvider } from './context/ContactContext';
import { CmsProvider, useCms } from './context/CmsContext';
import { Check, Image as ImageIcon, Inbox } from 'lucide-react';

// Floating Admin Controls
const AdminControls = ({ onOpenInbox }: { onOpenInbox: () => void }) => {
  const { isEditMode, toggleEditMode } = useCms();
  
  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col gap-3">
      {/* Inbox Button */}
      <button
        onClick={onOpenInbox}
        className="px-4 py-3 rounded-full shadow-xl flex items-center gap-3 transition-all duration-300 font-bold text-sm tracking-wide bg-white text-black hover:bg-gray-100 opacity-80 hover:opacity-100"
      >
        <Inbox size={18} />
        <span className="hidden md:inline">Inbox</span>
      </button>

      {/* CMS Edit Button */}
      <button
        onClick={toggleEditMode}
        className={`px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 font-bold text-sm tracking-wide ${
          isEditMode 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-white text-black hover:bg-gray-100 opacity-80 hover:opacity-100'
        }`}
      >
        {isEditMode ? (
          <>
            <Check size={18} />
            <span>Done</span>
          </>
        ) : (
          <>
            <ImageIcon size={18} />
            <span className="hidden md:inline">Edit Images</span>
          </>
        )}
      </button>
    </div>
  );
};

function App() {
  const [isInboxOpen, setIsInboxOpen] = useState(false);

  return (
    <CmsProvider>
      <ContactProvider>
        <div className="font-sans text-ink bg-page min-h-screen selection:bg-brand-green selection:text-ink">
          <Header />
          <main>
            <About />
            <Nutrition />
            <Discover />
            <Products />
            <Testimonial />
            <FAQ />
          </main>
          <Footer />
          <ContactModal />
          <ScrollToTop />
          
          <AdminInbox isOpen={isInboxOpen} onClose={() => setIsInboxOpen(false)} />
          <AdminControls onOpenInbox={() => setIsInboxOpen(true)} />
        </div>
      </ContactProvider>
    </CmsProvider>
  );
}

export default App;