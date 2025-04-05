
import React from 'react';

type GradientContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const GradientContainer = ({ children, className = "" }: GradientContainerProps) => {
  return (
    <div className={`bg-gradient-to-b from-white to-blue-50 dark:from-background dark:to-blue-950/10 ${className}`}>
      {children}
    </div>
  );
};

export default GradientContainer;
