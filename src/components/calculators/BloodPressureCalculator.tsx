'use client';

import React, { useState } from 'react';
import { getBloodPressureCategory } from '../../utils/calculations';

const BloodPressureCalculator = () => {
  const [systolic, setSystolic] = useState<number>(0);
  const [diastolic, setDiastolic] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    if (systolic <= 0 || diastolic <= 0) {
      alert('Please enter valid values');
      return;
    }
    const category = getBloodPressureCategory(systolic, diastolic);
    setResult(`Your blood pressure is classified as: ${category}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Blood Pressure Classification</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Systolic (mmHg):</label>
        <input
          type="number"
          value={systolic || ''}
          onChange={(e) => setSystolic(parseInt(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">Diastolic (mmHg):</label>
        <input
          type="number"
          value={diastolic || ''}
          onChange={(e) => setDiastolic(parseInt(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      
      <button
        onClick={handleCalculate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate
      </button>
      
      {result && (
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <h3 className="font-semibold">Result:</h3>
          <p>{result}</p>
        </div>
      )}
      
      <div className="mt-6">
        <h3 className="font-semibold">Blood Pressure Categories:</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>Normal: &lt; 120/80 mmHg</li>
          <li>Elevated: 120-129/&lt;80 mmHg</li>
          <li>Hypertension Stage 1: 130-139/80-89 mmHg</li>
          <li>Hypertension Stage 2: ≥140/≥90 mmHg</li>
          <li>Hypertensive Crisis: ≥180/≥120 mmHg</li>
        </ul>
      </div>
    </div>
  );
};

export default BloodPressureCalculator;