// Blood Pressure Classification
export const getBloodPressureCategory = (systolic: number, diastolic: number): string => {
    if (systolic >= 180 || diastolic >= 120) return "Hypertensive Crisis";
    if (systolic >= 140 || diastolic >= 90) return "Hypertension Stage 2";
    if (systolic >= 130 || diastolic >= 80) return "Hypertension Stage 1";
    if (systolic >= 120) return "Elevated";
    return "Normal";
  };
  
  // Blood Sugar Levels
  export const getFastingBloodSugarCategory = (level: number): string => {
    if (level >= 126) return "Diabetes";
    if (level >= 100) return "Prediabetes";
    return "Normal";
  };
  
  export const getPostprandialBloodSugarCategory = (level: number): string => {
    if (level >= 200) return "Diabetes";
    if (level >= 140) return "Prediabetes";
    return "Normal";
  };
  
  export const getHbA1cCategory = (level: number): string => {
    if (level >= 6.5) return "Diabetes";
    if (level >= 5.7) return "Prediabetes";
    return "Normal";
  };
  
  // BMI Calculation
  export const calculateBMI = (weight: number, height: number, isMetric: boolean = true): number => {
    if (isMetric) {
      return weight / ((height / 100) ** 2);
    } else {
      return (weight * 703) / (height ** 2);
    }
  };
  
  export const getBMICategory = (bmi: number): string => {
    if (bmi >= 40) return "Severe Obesity (Class 3)";
    if (bmi >= 35) return "Obesity (Class 2)";
    if (bmi >= 30) return "Obesity (Class 1)";
    if (bmi >= 25) return "Overweight";
    if (bmi >= 18.5) return "Normal";
    return "Underweight";
  };
  
  // Ideal Body Weight
  export const calculateIBW = (height: number, gender: 'male' | 'female'): number => {
    if (gender === 'male') {
      return 50 + 2.3 * (height - 60);
    } else {
      return 45.5 + 2.3 * (height - 60);
    }
  };