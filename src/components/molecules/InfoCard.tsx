
import React from 'react';

type InfoCardProps = {
  title: string;
  description: string;
  icon: string;
  className?: string;
  children?: React.ReactNode;
};

const InfoCard = ({ title, description, icon, className = "", children }: InfoCardProps) => {
  return (
    <div className={`glass-effect p-6 md:p-8 rounded-xl shadow-md ${className}`}>
      <div className="flex items-start gap-4">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
