import React from 'react';

const features = [
  {
    icon: 'fa-hand-holding-water',
    title: 'Tylko woda',
    description: 'Zapomnij o detergentach. Nasze czyściki usuwają 99% bakterii i wirusów przy użyciu samej wody.',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: 'fa-leaf',
    title: 'Ekologia',
    description: 'Chronisz środowisko, nie wprowadzając toksycznych substancji do obiegu wody w swoim domu.',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: 'fa-coins',
    title: 'Oszczędność',
    description: 'Trwałość produktów to nawet 10-15 lat. Policz, ile zaoszczędzisz na chemii gospodarczej.',
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
];

const Technology = () => {
  return (
    <section id="technologia" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technologia Nano Silver</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="p-6">
              <div className={`w-16 h-16 ${feature.bgColor} ${feature.iconColor} rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl`}>
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
