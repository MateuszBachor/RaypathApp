import React from 'react';

const PremiumFooter = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="text-center md:text-left">
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px]">Ekopartner</span>
            <h3 className="text-2xl font-serif mt-1 italic font-bold">Sprzątanie nowej generacji</h3>
            <p className="text-slate-500 text-xs mt-3">© {new Date().getFullYear()} Niezależny Partner Handlowy. Wszelkie prawa zastrzeżone.</p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <p className="text-slate-400 text-sm font-medium tracking-wide">Kontakt bezpośredni:</p>
            <a href="tel:+48000000000" className="text-3xl font-bold hover:text-brand-gold transition-colors tracking-tighter">+48 000 000 000</a>
            <div className="flex space-x-4 pt-2">
              {[
                { name: 'FB', icon: 'fab fa-facebook-f' },
                { name: 'IG', icon: 'fab fa-instagram' }
              ].map((social, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-gold transition-all duration-300">
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
