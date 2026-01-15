import { Product, Treatment, FAQItem, TabData, TabKey } from './types';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#discover' },
  { label: 'Store', href: '#products' },
  { label: 'Success Stories', href: '#testimonial' },
  { label: 'FAQ', href: '#faq' },
];

export const PRODUCTS: Product[] = [
  { 
    id: 'p1',
    name: "Whey Gold", 
    desc: "Premium isolate protein for maximum muscle recovery.", 
    rate: "5.0", 
    src: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=500" 
  },
  { 
    id: 'p2',
    name: "Pre-Pump", 
    desc: "High caffeine formula for explosive workout energy.", 
    rate: "4.9", 
    src: "https://images.unsplash.com/photo-1550572017-4fcdbb560444?auto=format&fit=crop&q=80&w=500" 
  },
  { 
    id: 'p3',
    name: "BCAA+", 
    desc: "Essential amino acids to prevent muscle catabolism.", 
    rate: "5.0", 
    src: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=500" 
  },
  { 
    id: 'p4',
    name: "Creatine Mono", 
    desc: "Pure micronized creatine for strength and power.", 
    rate: "4.8", 
    src: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=500" 
  }
];

export const TREATMENTS: Treatment[] = [
  { 
    id: 't1', 
    name: "Fat Shredder", 
    desc: "High intensity training to burn fat fast.", 
    price: "$400", 
    rating: "5.0" 
  },
  { 
    id: 't2', 
    name: "Muscle Mass", 
    desc: "Hypertrophy focused program for size.", 
    price: "$320", 
    rating: "4.8" 
  },
  { 
    id: 't3', 
    name: "Powerlifting", 
    desc: "Strength training focusing on the big three lifts.", 
    price: "$280", 
    rating: "4.9" 
  },
  { 
    id: 't4', 
    name: "Athletic Conditioning", 
    desc: "Improve speed, agility and endurance.", 
    price: "$360", 
    rating: "5.0" 
  },
];

export const FAQS: FAQItem[] = [
  { 
    question: "Can I book a private training session?", 
    answer: "Yes. Choose a program and select 'Private Coaching' during checkout. We will assign a dedicated trainer to you." 
  },
  { 
    question: "How long is each workout?", 
    answer: "Typical sessions are 45–90 minutes, depending on the intensity and goals of your personalized plan." 
  },
  { 
    question: "Is this suitable for beginners?", 
    answer: "Absolutely. All programs scale from beginner to elite athlete levels with appropriate modifications." 
  },
  { 
    question: "Do I need gym access?", 
    answer: "Most programs assume gym access, but we offer 'Home Workout' variants requiring minimal equipment." 
  },
  { 
    question: "I'm not seeing muscle growth. Help?", 
    answer: "We'll review your nutrition logs and training volume. Plateaus happen, but our adjustments break through them." 
  },
];

export const TAB_DATA: Record<TabKey, TabData> = {
  overview: { desc: "Join thousands transforming their physique.", kcal: 2500, macro: 180 },
  assurance: { desc: "Science-backed hypertrophy training.", kcal: 2800, macro: 200 },
  balanced: { desc: "Balanced macros for lean gains.", kcal: 2200, macro: 160 },
  membership: { desc: "Elite access to all facilities.", kcal: 3000, macro: 220 }
};