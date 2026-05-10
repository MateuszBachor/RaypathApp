import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const sets = [
  {
    id: 'house',
    title: 'Zestaw Domowy (House)',
    description: 'Kompletne rozwiązanie do całego domu: od kuchni po okna.',
    image: 'https://raypath-shop.com/cdn/shop/files/box-with-content-normal.png?v=1745599936&width=823',
    features: ['Pełny system do okien', 'Rękawice Nano Silver', 'Sunbeam Care'],
    price: 'Bestseller'
  },
  {
    id: 'floor',
    title: 'Zestaw Podłogowy',
    description: 'Profesjonalne czyszczenie każdej powierzchni podłogowej.',
    image: 'https://raypath-shop.com/cdn/shop/files/content-swift-short-no-swivel.png?v=1709591061&width=823',
    features: ['Drążek teleskopowy', 'Poduszka White', 'Poduszka Pink'],
    price: 'Popularny'
  },
  {
    id: 'body',
    title: 'Face & Body Care',
    description: 'Pielęgnacja twarzy i ciała w zgodzie z Twoją naturą.',
    image: 'https://placehold.co/400x400/2d4a3e/ffffff?text=Face+and+Body',
    features: ['Face Glove', 'Body Glove peeling', 'Nano-demakijaż'],
    price: 'Premium'
  },
];

const PremiumProductSets = ({ onRentClick }) => {
  return (
    <section id="produkty" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-2 block">Nasza Oferta</span>
          <h2 className="text-4xl font-serif text-brand-green mb-6 leading-tight italic">Wybierz swój zestaw</h2>
          <p className="text-slate-600">
            Zaprojektowane tak, aby służyły Ci przez lata. Teraz dostępne również w opcji wynajmu na testy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sets.map((set) => (
            <Card key={set.id} className="group overflow-hidden border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-brand-green/10 transition-all duration-500 rounded-[2rem]">
              <div className="aspect-square overflow-hidden bg-brand-green/5">
                <img 
                  src={set.image} 
                  alt={set.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <CardHeader className="space-y-1 p-8 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="border-brand-gold text-brand-gold font-bold px-3">{set.price}</Badge>
                </div>
                <CardTitle className="text-2xl font-serif text-brand-green italic">{set.title}</CardTitle>
              </CardHeader>

              <CardContent className="px-8 space-y-6">
                <p className="text-slate-500 text-sm italic">"{set.description}"</p>
                <ul className="space-y-3">
                  {set.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-green/5 flex items-center justify-center mr-3 flex-shrink-0">
                        <i className="fas fa-check text-[10px] text-brand-gold"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-8 pt-4">
                <Button 
                  onClick={() => onRentClick(set)}
                  className="w-full bg-brand-green hover:bg-slate-900 text-white font-bold py-6 rounded-xl transition-all uppercase tracking-widest text-xs"
                >
                  Wypożycz i przetestuj
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumProductSets;
