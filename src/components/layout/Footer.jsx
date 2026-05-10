import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-gray-400 text-center px-4">
      <div className="max-w-7xl mx-auto">
        <p className="mb-4 text-sm md:text-base">Niezależny Partner Biznesowy Raypath International</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-white transition"><i className="fab fa-facebook text-xl"></i></a>
          <a href="#" className="hover:text-white transition"><i className="fab fa-instagram text-xl"></i></a>
          <a href="#" className="hover:text-white transition"><i className="fab fa-whatsapp text-xl"></i></a>
        </div>
        <div className="text-xs border-t border-gray-800 pt-8 opacity-60">
          &copy; {new Date().getFullYear()} Wszystkie prawa zastrzeżone. Strona nieoficjalna - prowadzona przez partnera.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
