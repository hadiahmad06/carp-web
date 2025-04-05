
import React from 'react';

type FeaturePageHeaderProps = {
  title: string;
  subtitle: string;
  badgeText?: string;
};

const FeaturePageHeader = ({ title, subtitle, badgeText = "Feature" }: FeaturePageHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium mb-4 dark:bg-blue-900/50 dark:text-blue-300">
        {badgeText}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default FeaturePageHeader;
