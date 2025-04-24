'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HealthCard from '@/components/HealthCard';
import BloodPressureCalculator from '@/components/calculators/BloodPressureCalculator';
import BloodSugarCalculator from '@/components/calculators/BloodSugarCalculator';
import BMICalculator from '@/components/calculators/BMICalculator';
import IBWCalculator from '@/components/calculators/IBWCalculator';

const HomePage = () => {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  const calculators = [
    {
      id: 'bp',
      title: 'Blood Pressure',
      description: 'Check your BP classification',
      icon: '❤️',
      component: <BloodPressureCalculator />
    },
    {
      id: 'sugar',
      title: 'Blood Sugar',
      description: 'Check your glucose levels',
      icon: '🩸',
      component: <BloodSugarCalculator />
    },
    {
      id: 'bmi',
      title: 'BMI',
      description: 'Calculate your Body Mass Index',
      icon: '⚖️',
      component: <BMICalculator />
    },
    {
      id: 'ibw',
      title: 'Ideal Weight',
      description: 'Calculate your Ideal Body Weight',
      icon: '👤',
      component: <IBWCalculator />
    }
  ];

  const handleCardClick = (id: string) => {
    setActiveCalculator(id);
  };

  const handleBackClick = () => {
    setActiveCalculator(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto p-4">
        {!activeCalculator ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-8">Health Metrics Calculator</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {calculators.map((calc) => (
                <HealthCard
                  key={calc.id}
                  title={calc.title}
                  description={calc.description}
                  icon={calc.icon}
                  onClick={() => handleCardClick(calc.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <button 
              onClick={handleBackClick}
              className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
            >
              <span className="mr-1">←</span> Back to all calculators
            </button>
            
            {calculators.find(calc => calc.id === activeCalculator)?.component}
          </>
        )}
      </main>
      
      <footer className="bg-gray-100 p-4 mt-8">
        <div className="container mx-auto text-center text-gray-600">
          <p>Disclaimer: This tool provides general information only and is not a substitute for professional medical advice.</p>
          <p className="mt-2">© {new Date().getFullYear()} Health Metrics Calculator</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;