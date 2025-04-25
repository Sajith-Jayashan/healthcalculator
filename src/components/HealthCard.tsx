import React from 'react';

interface HealthCardProps {
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
}

const HealthCard: React.FC<HealthCardProps> = ({ title, description, icon, onClick }) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="text-4xl mb-4 text-blue-400">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default HealthCard;