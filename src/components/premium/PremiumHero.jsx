import React from 'react';
import { Button } from '@/components/ui/button';

const PremiumHero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" 
          alt="Nowoczesny czysty salon" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 to-brand-green/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Ekopartner Presents
          </span>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6 italic">
            Czysty dom bez <br />kropli chemii.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
            Odkryj standard sprzątania jutra. Łączymy mechaniczne usuwanie brudu Raypath z bioniczną mocą Hizero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-gold-hover text-white rounded-full px-10 py-7 uppercase tracking-wider text-sm font-bold border-none">
              <a href="#produkty">Poznaj ofertę</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-brand-green rounded-full px-10 py-7 uppercase tracking-wider text-sm font-bold transition-all">
              <a href="#kontakt">Umów pokaz</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
