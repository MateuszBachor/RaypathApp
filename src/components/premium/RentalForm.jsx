import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const RentalForm = ({ selectedSet, onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_SUBMIT_FORM_URL;
      
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedSet: selectedSet ? {
            title: selectedSet.title,
            id: selectedSet.id
          } : null,
          source: 'Wypożyczalnia - Formularz',
          timestamp: new Date().toISOString()
        }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center text-brand-green font-bold mb-8 hover:text-brand-gold transition-colors"
        >
          <i className="fas fa-arrow-left mr-2"></i> Powrót do oferty
        </button>

        <Card className="rounded-[2.5rem] overflow-hidden border-none shadow-2xl bg-white">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-brand-green p-10 text-white flex flex-col justify-between">
              <div>
                <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4 block">Rezerwacja</span>
                <h2 className="text-3xl font-serif italic mb-6">Wypożyczenie zestawu</h2>
                {selectedSet && (
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <p className="text-xs text-brand-gold uppercase font-bold mb-2">Wybrany zestaw:</p>
                    <p className="text-xl font-bold">{selectedSet.title}</p>
                  </div>
                )}
              </div>
              <div className="text-sm text-slate-300">
                <p>Nasz doradca skontaktuje się z Tobą w celu ustalenia terminu dostarczenia zestawu pod Twoje drzwi.</p>
              </div>
            </div>

            <div className="md:col-span-3 p-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Imię</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Jan" 
                        className="h-12 rounded-xl" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Nazwisko</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Kowalski" 
                        className="h-12 rounded-xl" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Telefon kontaktowy</label>
                    <Input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel" 
                      placeholder="+48 ..." 
                      className="h-12 rounded-xl" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Adres dostawy</label>
                    <Input 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Ulica, numer, miasto" 
                      className="h-12 rounded-xl" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Preferowana data (opcjonalnie)</label>
                    <Input 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      type="date" 
                      className="h-12 rounded-xl" 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-7 bg-brand-gold hover:bg-brand-gold-hover text-white font-bold rounded-xl uppercase tracking-widest text-sm shadow-xl shadow-brand-gold/20 mt-4"
                  >
                    {loading ? 'Wysyłanie...' : 'Wyślij zapytanie o wynajem'}
                  </Button>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in fade-in zoom-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-4xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-brand-green italic font-bold mb-2">Dziękujemy!</h3>
                    <p className="text-slate-600">Zgłoszenie zostało wysłane. <br />Doradca oddzwoni do Ciebie w ciągu 24h.</p>
                  </div>
                  <Button variant="outline" onClick={onBack} className="rounded-xl px-8">
                    Powrót do strony głównej
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RentalForm;

