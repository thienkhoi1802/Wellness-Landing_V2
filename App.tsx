import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Nutrition from './components/Nutrition';
import Discover from './components/Discover';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { ContactProvider } from './context/ContactContext';

function App() {
  return (
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
      </div>
    </ContactProvider>
  );
}

export default App;