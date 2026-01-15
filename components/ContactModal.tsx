import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useContact } from '../context/ContactContext';

const ContactModal: React.FC = () => {
  const { isOpen, closeContact } = useContact();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Small delay to allow render before animation starts
      requestAnimationFrame(() => setIsAnimating(true));
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        closeContact();
        setTimeout(() => setFormState('idle'), 300); // Reset after close
      }, 2000);
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 transition-all duration-300 ${isAnimating ? 'backdrop-blur-md bg-black/60' : 'backdrop-blur-none bg-black/0'}`}>
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={closeContact} />

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-[500px] bg-[#0d1211] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isAnimating ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'}`}
      >
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#cfe7a7]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#1a2e29]/20 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={closeContact}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="relative z-10 p-8 md:p-10">
          
          {formState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-[#cfe7a7]/20 flex items-center justify-center text-[#cfe7a7] mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">Message Sent!</h3>
              <p className="text-white/60">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-medium text-white mb-2">Get in touch</h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Ready to start your journey? Leave your details and we will schedule your consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-white/40 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    id="name"
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#cfe7a7]/50 focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-white/40 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    id="email"
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#cfe7a7]/50 focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="goal" className="text-[11px] font-bold uppercase tracking-wider text-white/40 ml-1">Primary Goal</label>
                  <select 
                    id="goal"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#cfe7a7]/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0d1211]">Select a goal...</option>
                    <option value="weight-loss" className="bg-[#0d1211]">Weight Loss</option>
                    <option value="muscle-gain" className="bg-[#0d1211]">Muscle Gain</option>
                    <option value="endurance" className="bg-[#0d1211]">Athletic Performance</option>
                    <option value="health" className="bg-[#0d1211]">General Health</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-white/40 ml-1">Message (Optional)</label>
                  <textarea 
                    id="message"
                    rows={3}
                    placeholder="Tell us about your current fitness level..." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#cfe7a7]/50 focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="mt-4 w-full bg-[#cfe7a7] text-[#0d1211] font-bold text-sm uppercase tracking-wide py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]"
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Request
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;