import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
      {/* Dekoracyjne elementy w tle */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-green-100 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-bold tracking-wide uppercase mb-4">
              Technologia Przyszłości
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Czysty dom bez kropli <span className="text-blue-600">chemii</span>.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Odkryj technologię <span className="font-semibold text-slate-900">Nano Silver</span>. 
              Czyść swój dom używając wyłącznie wody. Chroń zdrowie swoich bliskich i oszczędzaj środowisko.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="rounded-xl h-14 px-8 text-lg font-bold">
                <a href="#zestawy">Zobacz Zestawy</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl h-14 px-8 text-lg font-bold">
                <a href="#kontakt">Umów się na pokaz</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-30"></div>
              <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] bg-white rounded-3xl flex items-center justify-center shadow-xl overflow-hidden border-8 border-white">
                <img 
                  src="https://placehold.co/800x800/e0f2fe/0369a1?text=Zestaw+Raypath" 
                  alt="Raypath Nano Silver" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
