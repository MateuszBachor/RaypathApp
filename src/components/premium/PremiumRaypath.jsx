import React from 'react';

const PremiumRaypath = () => {
  return (
    <section id="raypath" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-2 block">
              Ekologiczne sprzątanie
            </span>
            <h2 className="text-4xl font-serif text-brand-green mb-6 leading-tight">Technologia Raypath</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Raypath to rewolucyjny system czyszczący oparty na nanotechnologii. Zapomnij o detergentach, rękawiczkach i podrażnieniach. Dzięki specjalnie zaprojektowanym czyścikom, do usunięcia nawet najtrudniejszych zabrudzeń potrzebujesz jedynie <span className="font-bold text-brand-green">czystej wody</span>.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Usuwa 99% bakterii i wirusów',
                'Idealny dla alergików i dzieci',
                'Trwałość produktów do kilkunastu lat'
              ].map((text, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <span className="bg-brand-green/10 p-1 rounded-full">
                    <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                    </svg>
                  </span>
                  <span className="text-slate-700 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
              alt="Raypath czyszczenie" 
              className="rounded-2xl shadow-2xl shadow-brand-green/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumRaypath;
