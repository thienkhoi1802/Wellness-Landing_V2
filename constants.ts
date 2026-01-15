import { Product, Treatment, FAQItem, TabData, TabKey } from './types';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Treatment', href: '#nutrition' },
  { label: 'Products', href: '#products' },
  { label: 'Testimonial', href: '#testimonial' },
  { label: 'FAQ', href: '#faq' },
];

export const PRODUCTS: Product[] = [
  { 
    id: 'p1',
    name: "Dawn", 
    desc: "Helps bring your natural rhythm into balance with gentle daily support.", 
    rate: "5.0", 
    src: "https://picsum.photos/1000/600?random=10" 
  },
  { 
    id: 'p2',
    name: "Pulse", 
    desc: "Supports steady focus and daily energy with a mindful formula.", 
    rate: "4.9", 
    src: "https://picsum.photos/1000/600?random=11" 
  },
  { 
    id: 'p3',
    name: "Calm", 
    desc: "A soft blend designed to help your body unwind naturally.", 
    rate: "5.0", 
    src: "https://picsum.photos/1000/600?random=12" 
  },
  { 
    id: 'p4',
    name: "Flow", 
    desc: "Daily support to keep your system feeling light and consistent.", 
    rate: "4.8", 
    src: "https://picsum.photos/1000/600?random=13" 
  }
];

export const TREATMENTS: Treatment[] = [
  { 
    id: 't1', 
    name: "Weight loss treatment", 
    desc: "Support your body and balance weight through personalised wellness guidance.", 
    price: "$400", 
    rating: "5.0" 
  },
  { 
    id: 't2', 
    name: "Testosterone booster", 
    desc: "Support energy, focus, and performance through tailored protocols.", 
    price: "$320", 
    rating: "4.8" 
  },
  { 
    id: 't3', 
    name: "Progesterone balancing", 
    desc: "Balance rhythm & recovery with mindful, guided wellness support.", 
    price: "$280", 
    rating: "4.9" 
  },
  { 
    id: 't4', 
    name: "Anti-aging treatment", 
    desc: "Support longevity and everyday vitality through a gentle routine.", 
    price: "$360", 
    rating: "5.0" 
  },
];

export const FAQS: FAQItem[] = [
  { 
    question: "Can I book a private experience?", 
    answer: "Yes. Choose a treatment and select a private session during booking. We’ll confirm availability by email." 
  },
  { 
    question: "How Much Time is Needed Per Session?", 
    answer: "Typical sessions are 45–60 minutes, depending on treatment type and your personalised plan." 
  },
  { 
    question: "Can beginners join the sessions?", 
    answer: "Absolutely. Programs are designed to scale from beginner to advanced with guidance." 
  },
  { 
    question: "Do you have physical locations?", 
    answer: "We offer both online guidance and limited in-person availability depending on the region." 
  },
  { 
    question: "My treatment isn’t working. What now?", 
    answer: "We’ll reassess your plan, check consistency factors, and adjust guidance. Contact support for a review." 
  },
];

export const TAB_DATA: Record<TabKey, TabData> = {
  overview: { desc: "Join thousands finding success through self-help.", kcal: 1800, macro: 142 },
  assurance: { desc: "Clinically guided routines with measurable progress.", kcal: 1750, macro: 128 },
  balanced: { desc: "Balanced nutrition targets for stable energy.", kcal: 1900, macro: 150 },
  membership: { desc: "Member plans tailored for consistency.", kcal: 1650, macro: 120 }
};
