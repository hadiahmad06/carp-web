import React from 'react';
import { cn } from '@/lib/utils';
import { themeColors } from '@/styles/theme';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  badge,
  children,
  className
}) => {
  return (
    <section className={cn(
      "py-20 px-6",
      themeColors.glass.light,
      themeColors.glass.dark,
      className
    )}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {badge && (
            <span className={cn(
              "inline-block px-4 py-1 rounded-full text-sm font-medium mb-4",
              themeColors.feature.blue.light.bg,
              themeColors.feature.blue.light.text,
              themeColors.feature.blue.dark.bg,
              themeColors.feature.blue.dark.text
            )}>
              {badge}
            </span>
          )}
          <h2 className="text-4xl font-bold mb-4 text-foreground">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default FeatureSection; 