import React from 'react';

const PremiumHizero = () => {
  return (
    <section id="hizero" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1563315411-c9167c13038b?auto=format&fit=crop&q=80&w=1000" 
              alt="Hizero bioniczny mop" 
              className="rounded-2xl shadow-2xl shadow-slate-200"
            />
          </div>
          <div>
            <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-2 block">
              Bioniczna moc
            </span>
            <h2 className="text-4xl font-serif text-brand-green mb-6 leading-tight">Mop Bioniczny Hizero</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Hizero to jedyne na świecie urządzenie, które zamiata, myje, wyciera i samo się czyści w jednym cyklu. Inspirowane naturą, nie wykorzystuje ssania powietrza, dzięki czemu nie unosi kurzu i alergenów. To najwyższy komfort dbania o podłogi twarde.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-brand-green mb-1">4 w 1</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Zamiata, myje, suszy i czyści się sam automatycznie.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-brand-green mb-1">Cicha praca</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Pracuje szeptem, nie przeszkadza domownikom ani zwierzętom.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHizero;
