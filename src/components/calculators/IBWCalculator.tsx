'use client';

import React, { useState } from 'react';

const IBWCalculator = () => {
  const [height, setHeight] = useState<number>(0);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    if (height <= 0) {
      alert('Please enter a valid height');
      return;
    }
    
    const ibw = gender === 'male'
      ? 50 + 2.3 * (height - 60)
      : 45.5 + 2.3 * (height - 60);
    
    setResult(ibw);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Ideal Body Weight (IBW) Calculator</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Gender:</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
              className="mr-2"
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
              className="mr-2"
            />
            Female
          </label>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">Height (inches):</label>
        <input
          type="number"
          value={height || ''}
          onChange={(e) => setHeight(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
          step="0.1"
        />
      </div>
      
      <button
        onClick={handleCalculate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate IBW
      </button>
      
      {result && (
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <h3 className="font-semibold">Result:</h3>
          <p>Your Ideal Body Weight: {result.toFixed(1)} kg</p>
          <p className="text-sm text-gray-600 mt-1">
            ({Math.round(result * 2.20462)} lbs)
          </p>
        </div>
      )}
      
      <div className="mt-6">
        <h3 className="font-semibold">IBW Formula (Devine Formula):</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>Men: 50 kg + 2.3 kg per inch over 5 feet (60 inches)</li>
          <li>Women: 45.5 kg + 2.3 kg per inch over 5 feet (60 inches)</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">
          Note: This is a general estimation and may not be appropriate for all individuals.
        </p>
      </div>
    </div>
  );
};

export default IBWCalculator;