'use client';

import React, { useState } from 'react';
import { 
  getFastingBloodSugarCategory, 
  getPostprandialBloodSugarCategory,
  getHbA1cCategory
} from '../../utils/calculations';

type BloodSugarTestType = 'fasting' | 'postprandial' | 'hba1c';

const BloodSugarCalculator = () => {
  const [testType, setTestType] = useState<BloodSugarTestType>('fasting');
  const [level, setLevel] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    if (level <= 0) {
      alert('Please enter a valid value');
      return;
    }
    
    let category = '';
    switch(testType) {
      case 'fasting':
        category = getFastingBloodSugarCategory(level);
        break;
      case 'postprandial':
        category = getPostprandialBloodSugarCategory(level);
        break;
      case 'hba1c':
        category = getHbA1cCategory(level);
        break;
      default:
        category = 'Unknown test type';
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
          onChange={(e) => setTestType(e.target.value as BloodSugarTestType)}
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
    </div>
  );
};

export default BloodSugarCalculator;