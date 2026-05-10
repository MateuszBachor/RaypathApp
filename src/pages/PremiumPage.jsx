import React, { useState } from 'react';
import PremiumNavbar from '@/components/premium/PremiumNavbar';
import PremiumHero from '@/components/premium/PremiumHero';
import PremiumRaypath from '@/components/premium/PremiumRaypath';
import PremiumHizero from '@/components/premium/PremiumHizero';
import PremiumProductSets from '@/components/premium/PremiumProductSets';
import PremiumWhyUs from '@/components/premium/PremiumWhyUs';
import PremiumContact from '@/components/premium/PremiumContact';
import PremiumFooter from '@/components/premium/PremiumFooter';
import RentalForm from '@/components/premium/RentalForm';

const PremiumPage = () => {
  const [view, setView] = useState('home'); // 'home' lub 'rental'
  const [selectedSet, setSelectedSet] = useState(null);

  const handleRentClick = (set) => {
    setSelectedSet(set);
    setView('rental');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setView('home');
    setSelectedSet(null);
  };

  if (view === 'rental') {
    return <RentalForm selectedSet={selectedSet} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <PremiumNavbar />
      <main>
        <PremiumHero />
        <PremiumRaypath />
        <PremiumHizero />
        <PremiumProductSets onRentClick={handleRentClick} />
        <PremiumWhyUs />
        <PremiumContact />
      </main>
      <PremiumFooter />
    </div>
  );
};

export default PremiumPage;
