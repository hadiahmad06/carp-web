import { cn } from "@/lib/utils";

interface FeatureIconBoxProps {
  icon: React.ReactNode;
  bgColor: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const FeatureIconBox = ({ 
  icon, 
  bgColor, 
  textColor = "text-foreground",
  size = 'md',
  className
}: FeatureIconBoxProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <div className={cn(
      sizeClasses[size],
      "rounded-full flex items-center justify-center",
      bgColor,
      className
    )}>
      <span className={textColor}>{icon}</span>
    </div>
  );
};

export default FeatureIconBox; 