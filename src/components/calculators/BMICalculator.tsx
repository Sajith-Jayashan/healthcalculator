'use client';

import React, { useState } from 'react';
import { calculateBMI, getBMICategory } from '../../utils/calculations';

const BMICalculator = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [result, setResult] = useState<{ bmi: number; category: string } | null>(null);

  const handleCalculate = () => {
    if (weight <= 0 || height <= 0) {
      alert('Please enter valid values');
      return;
    }
    
    const bmi = calculateBMI(weight, height, unitSystem === 'metric');
    const category = getBMICategory(bmi);
    setResult({ bmi, category });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Body Mass Index (BMI) Calculator</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Unit System:</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="unitSystem"
              checked={unitSystem === 'metric'}
              onChange={() => setUnitSystem('metric')}
              className="mr-2"
            />
            Metric (kg, cm)
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="unitSystem"
              checked={unitSystem === 'imperial'}
              onChange={() => setUnitSystem('imperial')}
              className="mr-2"
            />
            Imperial (lbs, inches)
          </label>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">
          Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'}):
        </label>
        <input
          type="number"
          value={weight || ''}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
          step="0.1"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">
          Height ({unitSystem === 'metric' ? 'cm' : 'inches'}):
        </label>
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
        Calculate BMI
      </button>
      
      {result && (
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <h3 className="font-semibold">Result:</h3>
          <p>Your BMI: {result.bmi.toFixed(1)}</p>
          <p>Category: {result.category}</p>
        </div>
      )}
      
      <div className="mt-6">
        <h3 className="font-semibold">BMI Categories:</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>Underweight: &lt; 18.5</li>
          <li>Normal: 18.5–24.9</li>
          <li>Overweight: 25–29.9</li>
          <li>Obesity (Class 1): 30–34.9</li>
          <li>Obesity (Class 2): 35–39.9</li>
          <li>Severe Obesity (Class 3): ≥ 40</li>
        </ul>
      </div>
    </div>
  );
};

export default BMICalculator;