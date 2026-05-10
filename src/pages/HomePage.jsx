import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Technology from '@/components/home/Technology';
import ProductSets from '@/components/home/ProductSets';
import ContactForm from '@/components/home/ContactForm';
import Footer from '@/components/layout/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Technology />
        <ProductSets />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
