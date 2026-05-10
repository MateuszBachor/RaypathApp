import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
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
      if (!apiUrl) {
        console.warn('VITE_SUBMIT_FORM_URL is not defined');
      }

      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Strona Główna - Kontakt',
          timestamp: new Date().toISOString()
        }),
      });
      
      setSubmitted(true);
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 border border-slate-200">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 italic text-slate-900">Zmień swój dom już dzisiaj.</h2>
            <p className="text-lg text-slate-600 mb-8">
              Chcesz zobaczyć technologię w akcji? Umów się na niezobowiązującą prezentację u Ciebie w domu. Pokażę Ci, jak wyczyścić najtrudniejsze zabrudzenia samą wodą.
            </p>
            <div className="space-y-6">
              {[
                { icon: 'fa-phone', label: '+48 123 456 789' },
                { icon: 'fa-envelope', label: 'kontakt@twoj-raypath.pl' },
                { icon: 'fa-facebook-f', label: 'FB: Raypath Partner' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600 border border-slate-100">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <span className="text-xl font-semibold text-slate-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <Card className="border-none shadow-lg rounded-3xl overflow-hidden bg-white">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Imię i Nazwisko</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Twoje imię..." 
                      className="py-6 rounded-xl border-slate-200"
                      required 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Numer Telefonu</label>
                    <Input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel" 
                      placeholder="Twój numer..." 
                      className="py-6 rounded-xl border-slate-200"
                      required 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Wiadomość / Interesujący zestaw</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3} 
                      placeholder="W czym mogę pomóc?" 
                      className="rounded-xl border-slate-200 min-h-[100px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-7 text-lg font-bold rounded-xl shadow-md"
                  >
                    {loading ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
                  </Button>
                  {submitted && (
                    <div className="text-center p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-100 animate-in fade-in zoom-in">
                      Dziękuję! Skontaktuję się wkrótce.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

