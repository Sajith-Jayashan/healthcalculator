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
    
    let category: string;
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
    }
    
    setResult(`Your blood sugar level is classified as: ${category}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* ... other JSX ... */}
      <select
        value={testType}
        onChange={(e) => setTestType(e.target.value as BloodSugarTestType)}
        className="w-full p-2 border rounded"
      >
        <option value="fasting">Fasting Blood Sugar</option>
        <option value="postprandial">Postprandial (2 hours after eating)</option>
        <option value="hba1c">HbA1c</option>
      </select>
      {/* ... rest of component ... */}
    </div>
  );
};

export default BloodSugarCalculator;