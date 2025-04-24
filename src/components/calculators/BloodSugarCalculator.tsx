'use client';

import React, { useState } from 'react';
import { 
  getFastingBloodSugarCategory, 
  getPostprandialBloodSugarCategory,
  getHbA1cCategory
} from '../../utils/calculations';

const BloodSugarCalculator = () => {
  const [testType, setTestType] = useState<'fasting' | 'postprandial' | 'hba1c'>('fasting');
  const [level, setLevel] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    if (level <= 0) {
      alert('Please enter a valid value');
      return;
    }
    
    let category = '';
    if (testType === 'fasting') {
      category = getFastingBloodSugarCategory(level);
    } else if (testType === 'postprandial') {
      category = getPostprandialBloodSugarCategory(level);
    } else {
      category = getHbA1cCategory(level);
    }
    
    setResult(`Your blood sugar level is classified as: ${category}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Blood Sugar Levels</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Test Type:</label>
        <select
          value={testType}
          onChange={(e) => setTestType(e.target.value as any)}
          className="w-full p-2 border rounded"
        >
          <option value="fasting">Fasting Blood Sugar</option>
          <option value="postprandial">Postprandial (2 hours after eating)</option>
          <option value="hba1c">HbA1c</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">
          {testType === 'hba1c' ? 'HbA1c Level (%):' : 
           testType === 'postprandial' ? 'Postprandial Level (mg/dL):' : 
           'Fasting Level (mg/dL):'}
        </label>
        <input
          type="number"
          value={level || ''}
          onChange={(e) => setLevel(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
          step={testType === 'hba1c' ? '0.1' : '1'}
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
        <h3 className="font-semibold">Blood Sugar Categories:</h3>
        <div className="grid md:grid-cols-3 gap-4 mt-2">
          <div>
            <h4 className="font-medium">Fasting Blood Sugar (mg/dL):</h4>
            <ul className="list-disc pl-5">
              <li>Normal: &lt; 100</li>
              <li>Prediabetes: 100–125</li>
              <li>Diabetes: ≥ 126</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Postprandial (mg/dL):</h4>
            <ul className="list-disc pl-5">
              <li>Normal: &lt; 140</li>
              <li>Prediabetes: 140–199</li>
              <li>Diabetes: ≥ 200</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">HbA1c (%):</h4>
            <ul className="list-disc pl-5">
              <li>Normal: &lt; 5.7</li>
              <li>Prediabetes: 5.7–6.4</li>
              <li>Diabetes: ≥ 6.5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodSugarCalculator;