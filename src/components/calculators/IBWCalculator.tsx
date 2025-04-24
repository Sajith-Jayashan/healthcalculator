'use client';

import React, { useState } from 'react';

const IBWCalculator = () => {
  const [height, setHeight] = useState<number>(0);
  const [heightUnit, setHeightUnit] = useState<'inches' | 'cm'>('inches');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [result, setResult] = useState<{ kg: number; lbs: number } | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  const calculateIBW = () => {
    if (height <= 0) {
      alert('Please enter a valid height');
      return;
    }

    // Convert cm to inches if needed
    let heightInInches = height;
    if (heightUnit === 'cm') {
      heightInInches = height / 2.54;
    }

    // Devine Formula calculation
    let ibwKg = 0;
    if (gender === 'male') {
      ibwKg = 50 + 2.3 * (heightInInches - 60);
    } else {
      ibwKg = 45.5 + 2.3 * (heightInInches - 60);
    }

    const ibwLbs = ibwKg * 2.20462;
    setResult({ kg: ibwKg, lbs: ibwLbs });
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setHeight(isNaN(value) ? 0 : value);
  };

  const resetForm = () => {
    setHeight(0);
    setResult(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Ideal Body Weight Calculator</h2>
      
      <div className="space-y-4">
        {/* Gender Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-blue-600"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-blue-600"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        {/* Height Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
          <div className="flex">
            <input
              type="number"
              value={height || ''}
              onChange={handleHeightChange}
              className="flex-1 p-2 border rounded-l focus:ring-blue-500 focus:border-blue-500"
              step="0.1"
              min="0"
            />
            <select
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value as 'inches' | 'cm')}
              className="p-2 border-t border-b border-r rounded-r bg-gray-50"
            >
              <option value="inches">inches</option>
              <option value="cm">cm</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3 pt-2">
          <button
            onClick={calculateIBW}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Calculate IBW
          </button>
          <button
            onClick={resetForm}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-lg mb-2 text-center">Your Ideal Body Weight</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="text-sm text-gray-500">Kilograms</div>
                <div className="text-2xl font-bold">{result.kg.toFixed(1)} kg</div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="text-sm text-gray-500">Pounds</div>
                <div className="text-2xl font-bold">{result.lbs.toFixed(1)} lbs</div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-6">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            {showInfo ? 'Hide' : 'Show'} IBW Formula Information
          </button>
          
          {showInfo && (
            <div className="mt-2 p-3 bg-gray-50 rounded text-sm">
              <h4 className="font-semibold mb-1">Devine Formula:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Men:</strong> 50 kg + 2.3 kg per inch over 5 feet (60 inches)</li>
                <li><strong>Women:</strong> 45.5 kg + 2.3 kg per inch over 5 feet (60 inches)</li>
              </ul>
              <div className="mt-3">
                <h4 className="font-semibold mb-1">Important Notes:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>This formula is most applicable for people 5 feet tall and taller</li>
                  <li>Doesn't account for muscle mass, bone density, or body composition</li>
                  <li>Consult a healthcare professional for personalized assessment</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-xs text-gray-500">
          <p>Note: Ideal Body Weight is a general estimation and may not be appropriate for all individuals. This calculator uses the Devine formula, which is commonly used in medical settings for drug dosing calculations.</p>
        </div>
      </div>
    </div>
  );
};

export default IBWCalculator;