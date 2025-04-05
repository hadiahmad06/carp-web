
import React from 'react';
import { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
  className?: string;
};

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  iconBgColor = "bg-blue-100 dark:bg-blue-900/50", 
  iconColor = "text-carp-blue dark:text-blue-400",
  className = "" 
}: FeatureCardProps) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
