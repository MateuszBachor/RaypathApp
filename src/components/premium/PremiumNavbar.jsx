import React from 'react';
import { Button } from '@/components/ui/button';

const PremiumNavbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between ">
        <div className="flex flex-col">
          <span className="text-xs tracking-[0.3em] text-brand-gold font-bold uppercase">Ekopartner</span>
          <span className="text-lg font-serif font-bold text-brand-green leading-none italic">Niezależny Doradca</span>
        </div>
        <div className="hidden md:flex space-x-10 font-bold text-[11px] uppercase tracking-[0.2em] text-slate-600 items-center">
          <a href="#hero" className="hover:text-brand-gold transition-colors">Start</a>
          <a href="#raypath" className="hover:text-brand-gold transition-colors">Raypath</a>
          <a href="#hizero" className="hover:text-brand-gold transition-colors">Hizero</a>
          <Button asChild className="bg-brand-green hover:bg-slate-900 text-white px-6 py-5 rounded-full text-[10px] tracking-widest font-black uppercase">
            <a href="#kontakt">Umów pokaz</a>
          </Button>
        </div>
        <button className="md:hidden text-brand-green p-2">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default PremiumNavbar;
