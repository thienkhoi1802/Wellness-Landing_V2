export interface Product {
  id: string;
  name: string;
  desc: string;
  rate: string;
  src: string;
}

export interface Treatment {
  id: string;
  name: string;
  desc: string;
  price: string;
  rating: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TabData {
  desc: string;
  kcal: number;
  macro: number;
}

export type TabKey = 'overview' | 'assurance' | 'balanced' | 'membership';
