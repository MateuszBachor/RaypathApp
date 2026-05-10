import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b py-3 shadow-sm' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="flex justify-between items-center">
          <div className="flex items-center center-items">
            <span className="text-2xl font-bold tracking-tighter">
              <span className="text-green-700">ECO</span>
              <span className="text-blue-600">PARTNER</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#technologia" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition uppercase tracking-wider">Technologia</a>
            <a href="#zestawy" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition uppercase tracking-wider">Zestawy</a>
            <a href="#zalety" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition uppercase tracking-wider">Dlaczego my?</a>
            <Button asChild className="rounded-full px-6 py-5 font-semibold">
              <a href="#kontakt">Pokaz Bezkosztowy</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <i className="fas fa-bars text-xl"></i>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
