import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const comparisons = [
  {
    id: 1,
    title: 'Krystaliczne Szyby',
    description: 'Usuwanie najtrudniejszych osadów i zacieków bez użycia detergentów.',
    before: 'https://images.unsplash.com/photo-1516938222922-86f788106b00?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1527333323140-798b3b9308bb?auto=format&fit=crop&q=80&w=800',
    tag: 'Zestaw Home'
  },
  {
    id: 2,
    title: 'Lśniąca Kuchnia',
    description: 'Ekstremalna czystość okapów i płyt grzewczych jednym ruchem rękawicy.',
    before: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
    tag: 'Zestaw Kitchen'
  },
  {
    id: 3,
    title: 'Perfekcyjne Podłogi',
    description: 'System Hizero w akcji – od brudnego parkietu po lustrzany blask.',
    before: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800',
    tag: 'Mop Bioniczny'
  }
];

const ComparisonCard = ({ comparison }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 0), 100));
  };

  return (
    <Card className="group relative overflow-hidden border-none shadow-2xl rounded-[2.5rem] bg-slate-50 h-[500px]">
      {/* Container for images */}
      <div 
        className="relative h-full w-full cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((touch.clientX - rect.left) / rect.width) * 100;
          setSliderPos(Math.min(Math.max(x, 0), 100));
        }}
      >
        {/* After Image (Full background) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${comparison.after})` }}
        />
        
        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-none"
          style={{ 
            backgroundImage: `url(${comparison.before})`,
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
          }}
        />

        {/* Divider Line */}
        <div 
          className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-brand-green rounded-full opacity-50" />
              <div className="w-1 h-3 bg-brand-green rounded-full" />
              <div className="w-1 h-3 bg-brand-green rounded-full opacity-50" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
          <Badge className="bg-brand-green/90 text-white mb-2 backdrop-blur-md border-none">{comparison.tag}</Badge>
          <h3 className="text-2xl font-serif text-white italic drop-shadow-lg">{comparison.title}</h3>
        </div>

        <div className="absolute top-8 left-8 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            Przesuń, aby porównać
          </span>
        </div>
      </div>
    </Card>
  );
};

const PremiumResults = () => {
  return (
    <section id="galeria" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-2 block">
              Efekty naszej technologii
            </span>
            <h2 className="text-5xl font-serif text-brand-green leading-tight italic">
              Zobaczyć znaczy uwierzyć
            </h2>
            <p className="text-slate-500 mt-6 text-lg leading-relaxed">
              Przesuń suwak na zdjęciach, aby zobaczyć różnicę, jaką robi czysta woda i nanotechnologia. 
              Bez chemii, bez smug, z pełnym szacunkiem dla Twojego zdrowia.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-lg">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-brand-gold flex items-center justify-center text-white text-xs font-bold shadow-lg">
                +1k
              </div>
            </div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-3 text-right">Zadowolonych klientów</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {comparisons.map((item) => (
            <div key={item.id} className="space-y-6">
              <ComparisonCard comparison={item} />
              <p className="text-slate-600 italic text-sm leading-relaxed px-4">
                "{item.description}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-brand-green rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-colors duration-700" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h3 className="text-3xl font-serif italic mb-2">Masz trudne zabrudzenie?</h3>
              <p className="text-white/70">Wypożycz zestaw testowy i sprawdź moc Raypath na własne oczy.</p>
            </div>
            <a 
              href="#produkty" 
              className="bg-brand-gold hover:bg-white text-brand-green font-bold py-5 px-10 rounded-2xl transition-all duration-300 uppercase tracking-widest text-xs shadow-xl"
            >
              Wybierz zestaw do testów
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumResults;
