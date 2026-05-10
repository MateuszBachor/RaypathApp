import React from 'react';

const PremiumWhyUs = () => {
  return (
    <section className="py-24 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 italic leading-tight">Dlaczego warto wybrać nasz standard?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: 'Zdrowie Rodziny',
              desc: 'Eliminacja chemii to mniej alergii, zdrowsza skóra i czyste powietrze w Twoim domu.',
              icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            },
            {
              title: 'Oszczędność Czasu',
              desc: 'Skróć czas sprzątania o połowę dzięki wyjątkowej skuteczności naszych technologii.',
              icon: 'M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z'
            },
            {
              title: 'Eko-Świadomość',
              desc: 'Zmniejszasz zużycie plastiku i zrzut toksycznych substancji do kanalizacji.',
              icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064'
            }
          ].map((item, i) => (
            <div key={i} className="space-y-6">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto transition-transform hover:scale-110">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon}></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumWhyUs;
