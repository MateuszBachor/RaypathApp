import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const sets = [
  {
    title: 'Zestaw Domowy (House)',
    description: 'Kompletne rozwiązanie do całego domu: od kuchni po okna.',
    badge: 'Bestseller',
    badgeVariant: 'default',
    image: 'https://placehold.co/400x400/f0fdf4/166534?text=Zestaw+House',
    features: ['Pełny system do okien', 'Rękawice Nano Silver', 'Sunbeam Care'],
  },
  {
    title: 'Zestaw Podłogowy',
    description: 'Profesjonalne czyszczenie każdej powierzchni podłogowej.',
    badge: 'Essential',
    badgeVariant: 'secondary',
    image: 'https://placehold.co/400x400/eff6ff/1e40af?text=Zestaw+Floor',
    features: ['Drążek teleskopowy', 'Poduszka White (mokro)', 'Poduszka Pink (kurz)'],
  },
  {
    title: 'Face & Body Care',
    description: 'Pielęgnacja twarzy i ciała w zgodzie z Twoją naturą.',
    badge: 'Premium',
    badgeVariant: 'outline',
    image: 'https://placehold.co/400x400/fff7ed/9a3412?text=Face+and+Body',
    features: ['Rękawiczka Face Glove', 'Body Glove peeling', 'Nano-demakijaż'],
  },
];

const ProductSets = () => {
  return (
    <section id="zestawy" className="py-24 bg-slate-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4">Kolekcje</Badge>
          <h2 className="text-4xl font-bold mb-6">Wybierz swój zestaw</h2>
          <p className="text-lg text-slate-600">
            Zaprojektowane tak, aby służyły Ci przez lata. Każdy zestaw to inwestycja w Twoje zdrowie i czas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sets.map((set, index) => (
            <Card key={index} className="group overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={set.image} 
                  alt={set.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <Badge variant={set.badgeVariant}>{set.badge}</Badge>
                </div>
                <CardTitle className="text-2xl font-bold">{set.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-slate-600 text-sm">{set.description}</p>
                <ul className="space-y-3">
                  {set.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <i className="fas fa-check text-[10px] text-green-700"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full font-bold"
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Zapytaj o ofertę
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSets;
