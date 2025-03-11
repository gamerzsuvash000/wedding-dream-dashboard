
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  delay?: number;
  onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  icon: Icon,
  gradient,
  delay = 0,
  onClick
}) => {
  return (
    <button
      className="glass-button group w-full h-full p-6 flex flex-col items-center justify-center text-center"
      onClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-16 h-16 ${gradient} rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
        <Icon className="text-white" size={28} />
      </div>
      
      <h3 className="text-xl font-playfair font-semibold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-sm text-gray-600 max-w-xs">
        {description}
      </p>
    </button>
  );
};

export default DashboardCard;
