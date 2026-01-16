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
import AdminDashboard from './components/AdminDashboard';
import { ContactProvider } from './context/ContactContext';
import { CmsProvider, useCms } from './context/CmsContext';
import { Check, Image as ImageIcon, Inbox, LogOut, Shield, LayoutGrid } from 'lucide-react';

// Floating Admin Controls
const AdminControls = ({ onOpenInbox, onOpenDashboard }: { onOpenInbox: () => void, onOpenDashboard: () => void }) => {
  const { isEditMode, toggleEditMode, isAdmin, logoutAdmin } = useCms();
  
  if (!isAdmin) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col gap-3 animate-fade-in-up">
      <div className="bg-black/80 backdrop-blur-md p-2 rounded-2xl flex flex-col gap-2 shadow-2xl border border-white/10">
        
        {/* Admin Badge */}
        <div className="flex items-center justify-center py-1 border-b border-white/10 mb-1">
           <Shield size={12} className="text-brand-green mr-1" />
           <span className="text-[9px] font-bold text-white uppercase tracking-widest">Admin</span>
        </div>

        {/* Dashboard (Grid) Button */}
        <button
          onClick={onOpenDashboard}
          className="w-12 h-12 md:w-auto md:h-auto md:px-4 md:py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-bold text-sm tracking-wide bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
          title="Open Media Dashboard"
        >
          <LayoutGrid size={18} />
          <span className="hidden md:inline">Media</span>
        </button>

        {/* Inbox Button */}
        <button
          onClick={onOpenInbox}
          className="w-12 h-12 md:w-auto md:h-auto md:px-4 md:py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-bold text-sm tracking-wide bg-white text-black hover:bg-gray-200 active:scale-95"
          title="View Inbox"
        >
          <Inbox size={18} />
          <span className="hidden md:inline">Inbox</span>
        </button>

        {/* CMS Edit Button (Toggle Overlay) */}
        <button
          onClick={toggleEditMode}
          className={`w-12 h-12 md:w-auto md:h-auto md:px-4 md:py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-bold text-sm tracking-wide active:scale-95 ${
            isEditMode 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-white text-black hover:bg-gray-200'
          }`}
          title="Toggle On-Page Edit Mode"
        >
          {isEditMode ? (
            <>
              <Check size={18} />
              <span className="hidden md:inline">Done</span>
            </>
          ) : (
            <>
              <ImageIcon size={18} />
              <span className="hidden md:inline">Edit UI</span>
            </>
          )}
        </button>

        {/* Logout Button */}
        <button
          onClick={logoutAdmin}
          className="w-12 h-12 md:w-auto md:h-auto md:px-4 md:py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-bold text-sm tracking-wide bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white active:scale-95"
          title="Logout Admin"
        >
          <LogOut size={18} />
          <span className="hidden md:inline">Exit</span>
        </button>
      </div>
    </div>
  );
};

function App() {
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

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
          <AdminDashboard isOpen={isDashboardOpen} onClose={() => setIsDashboardOpen(false)} />
          
          <AdminControls 
            onOpenInbox={() => setIsInboxOpen(true)} 
            onOpenDashboard={() => setIsDashboardOpen(true)} 
          />
        </div>
      </ContactProvider>
    </CmsProvider>
  );
}

export default App;