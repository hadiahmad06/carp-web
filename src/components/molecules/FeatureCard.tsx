import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { themeColors } from '@/styles/theme';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
  linkTo?: string;
  delay?: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  linkTo,
  delay = 0,
  className
}) => {
  const content = (
    <div
      className={cn(
        "p-6 rounded-xl transition-all duration-300",
        themeColors.glass.light,
        themeColors.glass.dark,
        themeColors.border.light,
        themeColors.border.dark,
        "hover:shadow-lg",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
        color || themeColors.feature.blue.light.bg,
        color || themeColors.feature.blue.dark.bg
      )}>
        <Icon className={cn(
          "w-6 h-6",
          themeColors.feature.blue.light.text,
          themeColors.feature.blue.dark.text
        )} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default FeatureCard; 