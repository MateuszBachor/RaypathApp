import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const PremiumContact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Card className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-brand-green/5 border-slate-100">
          <CardContent className="p-0">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-brand-green mb-4 leading-tight italic">
                Chcesz zobaczyć to <br />w swoim domu?
              </h2>
              <p className="text-slate-600">Umów się na bezpłatną, niezobowiązującą prezentację produktów Raypath i Hizero.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Imię i Nazwisko</label>
                <Input placeholder="Twoje imię..." className="h-14 rounded-2xl border-slate-200 focus:ring-brand-gold bg-white" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Telefon</label>
                <Input type="tel" placeholder="+48 ..." className="h-14 rounded-2xl border-slate-200 focus:ring-brand-gold bg-white" required />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Miejscowość</label>
                <Input placeholder="Gdzie mieszkasz?" className="h-14 rounded-2xl border-slate-200 focus:ring-brand-gold bg-white" required />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Twoja wiadomość</label>
                <Textarea rows={4} placeholder="Opisz swoje potrzeby..." className="rounded-2xl border-slate-200 focus:ring-brand-gold bg-white min-h-[120px]" />
              </div>
              <div className="md:col-span-2 pt-4">
                <Button type="submit" className="w-full bg-brand-green hover:bg-slate-900 text-white py-8 rounded-2xl font-bold uppercase tracking-[0.2em] transition-all shadow-xl shadow-brand-green/20">
                  Wyślij zgłoszenie
                </Button>
              </div>
            </form>
            {submitted && (
              <div className="mt-8 p-6 rounded-2xl bg-green-50 text-green-700 text-center font-bold border border-green-100 animate-in fade-in zoom-in">
                Dziękujemy! Skontaktujemy się z Tobą wkrótce.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PremiumContact;
